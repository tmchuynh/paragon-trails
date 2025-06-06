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
// node scripts/delete-city-attractions.mjs             # Shows deletion prompt for all cities
// node scripts/delete-city-attractions.mjs --force     # Deletes all without confirmation
// node scripts/delete-city-attractions.mjs --city tokyo  # Only delete for specified city
// node scripts/delete-city-attractions.mjs --city tokyo --force  # Force delete without confirmation

const cities = getCityFiles();

const unlink = promisify(fs.unlink);
const access = promisify(fs.access);

// Parse command line arguments
function parseCommandLineArgs() {
  const options = {
    force: false,
    cityFilter: null,
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

// Delete attraction file for a city
async function deleteAttractionFile(city) {
  const formattedName = formatKebabToCamelCase(removeAccents(city));
  const filePath = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "destinations",
    "city",
    `${formattedName}.ts`,
  );

  // Check if file exists
  if (await fileExists(filePath)) {
    try {
      await unlink(filePath);
      console.log(`✅ Deleted attraction file: ${filePath}`);
      return true;
    } catch (error) {
      console.error(`❌ Error deleting file ${filePath}: ${error.message}`);
      return false;
    }
  } else {
    console.log(`ℹ️ Attraction file for ${city} does not exist: ${filePath}`);
    return false;
  }
}

// Main function to delete attraction files
async function deleteAttractionFiles() {
  let citiesToProcess = cities;

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
      `This will delete attraction files for ${citiesToProcess.length} cities:`,
    );
    console.log(citiesToProcess.join(", "));

    const confirmed = await confirm("Are you sure you want to proceed?");
    if (!confirmed) {
      console.log("Deletion cancelled.");
      rl.close();
      return;
    }
  }

  // Delete files for each city
  let deletedCount = 0;
  for (const city of citiesToProcess) {
    const deleted = await deleteAttractionFile(city);
    if (deleted) deletedCount++;
  }

  console.log(`Deleted ${deletedCount} attraction files.`);
  rl.close();
}

// Execute the script
deleteAttractionFiles().catch((error) => {
  console.error("Error executing delete script:", error);
  rl.close();
  process.exit(1);
});

// Print usage information
console.log(`
Usage: node delete-city-attractions.mjs [options]

Options:
  --force, -f         Delete files without confirmation
  --city C, -c C      Delete attraction files only for cities matching the search term

Examples:
  node delete-city-attractions.mjs
  node delete-city-attractions.mjs --force
  node delete-city-attractions.mjs --city "Tokyo"
  node delete-city-attractions.mjs --city "Tokyo" --force
`);
