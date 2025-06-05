import * as fs from "fs";
import * as path from "path";
import readline from "readline";
import { promisify } from "util";
import { getCityFiles } from "./utils/file-utils.mjs";

// Usage:
// node scripts/delete-drivers.mjs             # Shows deletion prompt for all cities
// node scripts/delete-drivers.mjs --force     # Deletes all without confirmation
// node scripts/delete-drivers.mjs --city tokyo  # Only delete for specified city
// node scripts/delete-drivers.mjs --city tokyo --force  # Force delete without confirmation

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

// Delete driver file for a city
async function deleteDriverFile(city) {
  const filePath = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "staff",
    "drivers",
    `${city}.ts`
  );

  // Check if file exists
  if (await fileExists(filePath)) {
    try {
      await unlink(filePath);
      console.log(`✅ Deleted driver file: ${filePath}`);
      return true;
    } catch (error) {
      console.error(`❌ Error deleting file ${filePath}: ${error.message}`);
      return false;
    }
  } else {
    console.log(`ℹ️ Driver file for ${city} does not exist: ${filePath}`);
    return false;
  }
}

// Main function to delete driver files
async function deleteDriverFiles() {
  let citiesToProcess = cities;

  // Filter by city name if specified
  if (options.cityFilter) {
    const filterLower = options.cityFilter.toLowerCase();
    citiesToProcess = cities.filter((city) =>
      city.toLowerCase().includes(filterLower)
    );

    if (citiesToProcess.length === 0) {
      console.log(`No cities found matching: ${options.cityFilter}`);
      rl.close();
      return;
    }

    console.log(
      `Found ${citiesToProcess.length} cities matching: ${options.cityFilter}`
    );
  }

  // Confirm deletion unless force flag is set
  if (!options.force) {
    console.log(
      `This will delete driver files for ${citiesToProcess.length} cities:`
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
    const deleted = await deleteDriverFile(city);
    if (deleted) deletedCount++;
  }

  console.log(`Deleted ${deletedCount} driver files.`);
  rl.close();
}

// Execute the script
deleteDriverFiles().catch((error) => {
  console.error("Error executing delete script:", error);
  rl.close();
  process.exit(1);
});

// Print usage information
console.log(`
Usage: node delete-drivers.mjs [options]

Options:
  --force, -f         Delete files without confirmation
  --city C, -c C      Delete driver files only for cities matching the search term

Examples:
  node delete-drivers.mjs
  node delete-drivers.mjs --force
  node delete-drivers.mjs --city "Tokyo"
  node delete-drivers.mjs --city "Tokyo" --force
`);
