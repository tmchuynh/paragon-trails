import * as fs from "fs";
import * as path from "path";
import readline from "readline";
import { promisify } from "util";
import { getCityFiles } from "./utils/file-utils.mjs";
import {
  formatKebabToCamelCase,
  removeAccents,
} from "./utils/format-utils.mjs";

// Usage:
// node scripts/delete-generated-data.mjs --type attractions
// node scripts/delete-generated-data.mjs --type drivers
// node scripts/delete-generated-data.mjs --type motorcycles
// node scripts/delete-generated-data.mjs --type yachts
// node scripts/delete-generated-data.mjs --type cars
// node scripts/delete-generated-data.mjs --type hotels
// node scripts/delete-generated-data.mjs --type tours
// node scripts/delete-generated-data.mjs --type homestays
// node scripts/delete-generated-data.mjs --type all
// Add options: --force, --city

const cities = getCityFiles();

const unlink = promisify(fs.unlink);
const readdir = promisify(fs.readdir);
const access = promisify(fs.access);
const mkdir = promisify(fs.mkdir);

// Entity type mappings
const entityTypePaths = {
  attractions: ["src", "lib", "constants", "destinations", "city"],
  drivers: ["src", "lib", "constants", "staff", "drivers"],
  motorcycles: ["src", "lib", "constants", "rentals", "motorcycles"],
  cars: ["src", "lib", "constants", "rentals", "cars"],
  hotels: ["src", "lib", "constants", "destinations", "hotels"],
  tours: ["src", "lib", "constants", "tours"],
  yachts: ["src", "lib", "constants", "rentals", "yacht"],
  homestays: ["src", "lib", "constants", "destinations", "homestay"],
};

// Parse command line arguments
function parseCommandLineArgs() {
  const options = {
    force: false,
    cityFilter: null,
    type: null,
  };

  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--force" || arg === "-f") {
      options.force = true;
    }

    if ((arg === "--city" || arg === "-c") && i + 1 < args.length) {
      options.cityFilter = args[++i];
    }

    if ((arg === "--type" || arg === "-t") && i + 1 < args.length) {
      const typeArg = args[++i].toLowerCase();
      if (typeArg === "all" || Object.keys(entityTypePaths).includes(typeArg)) {
        options.type = typeArg;
      } else {
        console.error(`Invalid type: ${typeArg}`);
        console.error(
          `Valid types: ${Object.keys(entityTypePaths).join(", ")}, all`,
        );
        process.exit(1);
      }
    }
  }

  if (!options.type) {
    console.error("Error: --type option is required");
    console.error(
      `Valid types: ${Object.keys(entityTypePaths).join(", ")}, all`,
    );
    process.exit(1);
  }

  return options;
}

const options = parseCommandLineArgs();

// Create readline interface for confirmation prompts
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to prompt for confirmation
function confirm(message) {
  return new Promise((resolve) => {
    rl.question(`${message} (y/N) `, (answer) => {
      resolve(answer.toLowerCase() === "y" || answer.toLowerCase() === "yes");
    });
  });
}

// Check if file exists
async function fileExists(filePath) {
  try {
    await access(filePath, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

// Check if directory exists
async function directoryExists(dirPath) {
  try {
    await access(dirPath);
    const stats = await fs.promises.stat(dirPath);
    return stats.isDirectory();
  } catch {
    return false;
  }
}

// Delete file for a city and entity type
async function deleteEntityFile(city, entityType) {
  // Special handling for attractions which use formatted name
  let fileName = city;
  if (entityType === "attractions") {
    fileName = formatKebabToCamelCase(removeAccents(city));
  }

  const entityPath = entityTypePaths[entityType];
  const filePath = path.join(process.cwd(), ...entityPath, `${fileName}.ts`);

  // Check if file exists
  if (await fileExists(filePath)) {
    try {
      await unlink(filePath);
      console.log(`✅ Deleted ${entityType} file for ${city}: ${filePath}`);
      return true;
    } catch (error) {
      console.error(`❌ Error deleting file ${filePath}: ${error.message}`);
      return false;
    }
  } else {
    console.log(
      `ℹ️ ${entityType} file for ${city} does not exist: ${filePath}`,
    );
    return false;
  }
}

// Main function to delete files
async function deleteFiles() {
  let citiesToProcess = cities;
  let entityTypes =
    options.type === "all" ? Object.keys(entityTypePaths) : [options.type];

  // Filter by city name if specified
  if (options.cityFilter) {
    const filterLower = options.cityFilter.toLowerCase();
    citiesToProcess = cities.filter((city) =>
      city.toLowerCase().includes(filterLower),
    );

    if (citiesToProcess.length === 0) {
      console.log(`No cities found matching: ${options.cityFilter}`);
      rl.close();
      return;
    }

    console.log(
      `Found ${citiesToProcess.length} cities matching: ${options.cityFilter}`,
    );
  }

  // Confirm deletion unless force flag is set
  if (!options.force) {
    console.log(
      `This will delete ${entityTypes.join(", ")} files for ${citiesToProcess.length} cities:`,
    );
    console.log(citiesToProcess.join(", "));

    const confirmed = await confirm("Are you sure you want to proceed?");
    if (!confirmed) {
      console.log("Deletion cancelled.");
      rl.close();
      return;
    }
  }

  // Delete files for each city and entity type
  let deletedCount = 0;

  for (const entityType of entityTypes) {
    console.log(`\n---- Processing ${entityType} ----`);

    // Check if entity directory exists
    const entityDir = path.join(process.cwd(), ...entityTypePaths[entityType]);
    if (!(await directoryExists(entityDir))) {
      console.log(`Directory for ${entityType} does not exist: ${entityDir}`);
      continue;
    }

    let entityDeletedCount = 0;
    for (const city of citiesToProcess) {
      const deleted = await deleteEntityFile(city, entityType);
      if (deleted) {
        entityDeletedCount++;
        deletedCount++;
      }
    }

    console.log(`Deleted ${entityDeletedCount} ${entityType} files.`);
  }

  console.log(`\nTotal: Deleted ${deletedCount} files.`);
  rl.close();
}

// Execute the script
deleteFiles().catch((error) => {
  console.error("Error executing delete script:", error);
  rl.close();
  process.exit(1);
});

// Print usage information
console.log(`
Usage: node delete-generated-data.mjs --type TYPE [options]

Required:
  --type, -t TYPE     Specify the entity type to delete
                      Valid types: ${Object.keys(entityTypePaths).join(", ")}, all

Options:
  --force, -f         Delete files without confirmation
  --city C, -c C      Delete files only for cities matching the search term

Examples:
  node delete-generated-data.mjs --type attractions
  node delete-generated-data.mjs --type drivers --force
  node delete-generated-data.mjs --type all --city "Tokyo"
  node delete-generated-data.mjs --type motorcycles --city "Tokyo" --force
`);
