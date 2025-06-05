import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";
import { promisify } from "util";

// node scripts/delete-homestay-files.mjs

const readdir = promisify(fs.readdir);
const unlink = promisify(fs.unlink);
const stat = promisify(fs.stat);

// Parse command line arguments
function parseCommandLineArgs() {
  const options = {
    force: false,
  };

  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--force" || arg === "-f") {
      options.force = true;
    }
  }

  return options;
}

const options = parseCommandLineArgs();

// Create readline interface for confirmation
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function promptConfirmation(message) {
  return new Promise((resolve) => {
    rl.question(`${message} (y/n): `, (answer) => {
      resolve(answer.toLowerCase() === "y" || answer.toLowerCase() === "yes");
    });
  });
}

async function deleteFiles() {
  try {
    const homestayDir = path.join(
      process.cwd(),
      "src",
      "lib",
      "constants",
      "destinations",
      "homestay",
    );

    console.log(`Reading directory: ${homestayDir}`);

    let files;
    try {
      files = await readdir(homestayDir);
    } catch (error) {
      console.error(`Error reading directory: ${error.message}`);
      return;
    }

    if (files.length === 0) {
      console.log("No homestay files found.");
      return;
    }

    console.log(`Found ${files.length} files in the homestay directory.`);

    // Filter for TypeScript files
    const tsFiles = files.filter((file) => file.endsWith(".ts"));

    if (tsFiles.length === 0) {
      console.log("No TypeScript files found in the homestay directory.");
      return;
    }

    console.log(`Found ${tsFiles.length} TypeScript files to delete.`);

    // Confirm deletion if not using --force
    if (!options.force) {
      const confirmed = await promptConfirmation(
        `Are you sure you want to delete ${tsFiles.length} homestay files?`,
      );

      if (!confirmed) {
        console.log("Operation cancelled.");
        rl.close();
        return;
      }
    }

    // Delete the files
    let deletedCount = 0;
    let errorCount = 0;

    for (const file of tsFiles) {
      const filePath = path.join(homestayDir, file);

      try {
        // Make sure it's a file, not a directory
        const fileStats = await stat(filePath);
        if (!fileStats.isFile()) {
          console.log(`Skipping directory: ${file}`);
          continue;
        }

        await unlink(filePath);
        console.log(`Deleted: ${file}`);
        deletedCount++;
      } catch (error) {
        console.error(`Error deleting ${file}: ${error.message}`);
        errorCount++;
      }
    }

    console.log(`\nDeletion complete.`);
    console.log(`- Successfully deleted: ${deletedCount} files`);
    if (errorCount > 0) {
      console.log(`- Failed to delete: ${errorCount} files`);
    }
  } catch (error) {
    console.error(`Unexpected error: ${error.message}`);
  } finally {
    rl.close();
  }
}

// Execute the script
deleteFiles();

// Print usage information
console.log(`
Usage: node delete-homestay-files.mjs [options]

Options:
  --force, -f       Delete files without confirmation

Example:
  node delete-homestay-files.mjs
  node delete-homestay-files.mjs --force
`);
