import * as fs from "fs/promises";
import * as path from "path";
import { createInterface } from "readline";

/**
 * Room Options Cleanup Script
 *
 * This script deletes all room option files (ending with -rooms.ts) in the hotel directories.
 *
 * Basic usage:
 *   node scripts/delete-room-options.mjs
 *
 * Options:
 *   --force, -f        Delete all files without confirmation
 *                      Example: node scripts/delete-room-options.mjs --force
 *
 *   --city C, -c C     Process only cities matching the search term
 *                      Example: node scripts/delete-room-options.mjs --city "Tokyo"
 *
 *   --dry-run, -d      Show which files would be deleted without actually deleting them
 *                      Example: node scripts/delete-room-options.mjs --dry-run
 */

// Parse command line arguments
function parseCommandLineArgs() {
  const options = {
    force: false,
    cityFilter: null,
    dryRun: false,
  };

  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--force" || arg === "-f") {
      options.force = true;
    }

    if (arg === "--dry-run" || arg === "-d") {
      options.dryRun = true;
    }

    if ((arg === "--city" || arg === "-c") && i + 1 < args.length) {
      options.cityFilter = args[++i];
    }
  }

  return options;
}

const options = parseCommandLineArgs();

// Path to the hotels directory
const hotelsDir = path.join(
  process.cwd(),
  "src",
  "lib",
  "constants",
  "destinations",
  "hotels"
);

// Create readline interface for prompting user
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to prompt for confirmation
function confirm(message) {
  return new Promise((resolve) => {
    rl.question(`${message} (y/n): `, (answer) => {
      resolve(answer.toLowerCase() === "y");
    });
  });
}

async function findRoomOptionFiles() {
  const results = {
    totalCities: 0,
    totalFiles: 0,
    filesToDelete: [],
  };

  try {
    // Get all city directories
    const cities = await fs.readdir(hotelsDir);

    // Filter cities if needed
    let citiesToProcess = cities;
    if (options.cityFilter) {
      const filterLower = options.cityFilter.toLowerCase();
      citiesToProcess = cities.filter((city) =>
        city.toLowerCase().includes(filterLower)
      );

      if (citiesToProcess.length === 0) {
        console.log(`No cities found matching: ${options.cityFilter}`);
        return results;
      }

      console.log(
        `Processing ${citiesToProcess.length} cities matching: ${options.cityFilter}`
      );
    }

    results.totalCities = citiesToProcess.length;

    // Process each city
    for (const city of citiesToProcess) {
      const cityDir = path.join(hotelsDir, city);

      try {
        // Get stats to verify it's a directory
        const stats = await fs.stat(cityDir);
        if (!stats.isDirectory()) continue;

        // Read city directory contents
        const files = await fs.readdir(cityDir);

        // Find room option files (ending with -rooms.ts)
        const roomFiles = files.filter((file) => file.endsWith("-rooms.ts"));

        // Add files to delete list
        for (const file of roomFiles) {
          results.filesToDelete.push({
            city,
            file,
            path: path.join(cityDir, file),
          });
        }

        results.totalFiles += roomFiles.length;
      } catch (err) {
        console.error(`Error processing ${city} directory:`, err);
      }
    }
  } catch (err) {
    console.error("Failed to read hotels directory:", err);
  }

  return results;
}

async function deleteRoomOptionFiles() {
  const results = await findRoomOptionFiles();

  if (results.totalFiles === 0) {
    console.log("No room option files found to delete.");
    rl.close();
    return;
  }

  console.log(
    `Found ${results.totalFiles} room option files in ${results.totalCities} cities.`
  );

  // If dry run, just print the files and exit
  if (options.dryRun) {
    console.log("\nFiles that would be deleted (dry run):");
    for (const fileInfo of results.filesToDelete) {
      console.log(`- ${fileInfo.path}`);
    }
    console.log("\nNo files were deleted (dry run).");
    rl.close();
    return;
  }

  // If not force mode, get global confirmation
  let proceedWithAll = options.force;
  if (!proceedWithAll) {
    proceedWithAll = await confirm(
      `Delete all ${results.totalFiles} room option files?`
    );
  }

  // Delete files
  if (proceedWithAll) {
    console.log("\nDeleting all room option files...");

    let deletedCount = 0;
    for (const fileInfo of results.filesToDelete) {
      try {
        await fs.unlink(fileInfo.path);
        console.log(`Deleted: ${fileInfo.path}`);
        deletedCount++;
      } catch (err) {
        console.error(`Error deleting ${fileInfo.path}:`, err);
      }
    }

    console.log(
      `\nSuccessfully deleted ${deletedCount} of ${results.totalFiles} room option files.`
    );
  } else {
    // Individual confirmation for each file
    console.log("\nPrompting for each file:");

    let deletedCount = 0;
    for (const fileInfo of results.filesToDelete) {
      const shouldDelete = await confirm(`Delete ${fileInfo.path}?`);
      if (shouldDelete) {
        try {
          await fs.unlink(fileInfo.path);
          console.log(`Deleted: ${fileInfo.path}`);
          deletedCount++;
        } catch (err) {
          console.error(`Error deleting ${fileInfo.path}:`, err);
        }
      }
    }

    console.log(
      `\nSuccessfully deleted ${deletedCount} of ${results.totalFiles} room option files.`
    );
  }

  rl.close();
}

// Run the deletion process
deleteRoomOptionFiles();

// Print usage information
console.log(`
Usage: node delete-room-options.mjs [options]

Options:
  --force, -f        Delete all files without confirmation
  --city C, -c C     Process only cities matching the search term
  --dry-run, -d      Show which files would be deleted without actually deleting them

Examples:
  node scripts/delete-room-options.mjs --force
  node scripts/delete-room-options.mjs --city "Tokyo"
  node scripts/delete-room-options.mjs --dry-run
`);
