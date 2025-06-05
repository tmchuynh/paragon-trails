import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse command line arguments
const args = process.argv.slice(2);
const VERBOSE_MODE = args.includes("--verbose") || args.includes("-v");
const SPECIFIC_PATH = args.find((arg) => !arg.startsWith("-"));

// Check if the format script exists in package.json
const checkFormatScript = () => {
  try {
    const packageJsonPath = path.resolve(__dirname, "..", "package.json");
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

    if (!packageJson.scripts || !packageJson.scripts.format) {
      console.error("Error: No 'format' script found in package.json");
      console.log(
        "\nPlease add a format script to your package.json. For example:",
      );
      console.log(`
  "scripts": {
    "format": "prettier --write \\"{src,scripts}/**/*.{ts,tsx,js,jsx,mjs,json,md,css}\\"",
    // other scripts
  }
      `);
      console.log("You'll also need to install Prettier:");
      console.log("npm install --save-dev prettier");
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error reading package.json:", error.message);
    return false;
  }
};

// Display startup info
console.log("=== File Formatting Tool ===");
console.log(`Working directory: ${path.resolve(__dirname, "..")}`);
if (VERBOSE_MODE) console.log("Verbose mode: ON");
if (SPECIFIC_PATH) console.log(`Formatting specific path: ${SPECIFIC_PATH}`);

/**
 * Run the formatter command
 */
function runFormatter() {
  console.log("Starting formatter...");

  // Check if format script exists
  if (!checkFormatScript()) {
    process.exit(1);
  }

  // Determine which command to run
  const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";

  // Create arguments array
  const spawnArgs = ["run", "format"];

  // Add specific path if provided
  if (SPECIFIC_PATH) {
    spawnArgs.push("--");
    spawnArgs.push(SPECIFIC_PATH);
  }

  // Log the command that will be executed
  if (VERBOSE_MODE) {
    console.log(`Executing: ${npmCommand} ${spawnArgs.join(" ")}`);
  }

  // Spawn the process in the root directory of the project
  const child = spawn(npmCommand, spawnArgs, {
    cwd: path.resolve(__dirname, ".."),
    stdio: VERBOSE_MODE ? "inherit" : "pipe",
  });

  if (!VERBOSE_MODE) {
    // Show a simple progress indicator
    const spinner = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
    let i = 0;
    const spinnerInterval = setInterval(() => {
      process.stdout.write(`\r${spinner[i]} Formatting in progress...`);
      i = (i + 1) % spinner.length;
    }, 80);

    child.on("exit", () => {
      clearInterval(spinnerInterval);
      process.stdout.write("\rFormatting complete!      \n");
    });
  }

  // Handle the completion
  child.on("error", (error) => {
    console.error(`Error executing formatter: ${error.message}`);
    process.exit(1);
  });

  child.on("exit", (code) => {
    if (code === 0) {
      console.log("✓ All files formatted successfully!");
    } else {
      console.error(`✗ Formatting failed with exit code: ${code}`);
    }
  });
}

// Run the formatter
runFormatter();
