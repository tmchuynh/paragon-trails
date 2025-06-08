// scripts/dev-reset-and-generate-all.mjs
// This script deletes generated data files and runs all generation scripts in the correct order for a full dev reset.
import { execSync } from "child_process";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

// node scripts/dev-reset-and-generate-all.mjs

// Paths to generated directories/files to delete
const generatedPaths = [
  path.join(root, "src/lib/constants/destinations/city-attractions"),
  path.join(root, "src/lib/constants/destinations/homestay"),
  path.join(root, "src/lib/constants/destinations/hotels"),
  path.join(root, "src/lib/constants/testimonials/guides"),
  path.join(root, "src/lib/constants/testimonials/tours"),
  path.join(root, "src/lib/constants/testimonials/cities"),
  path.join(root, "src/lib/constants/tours"),
  path.join(root, "src/lib/constants/staff/guides"),
  path.join(root, "src/lib/constants/staff/drivers"),
  path.join(root, "src/lib/constants/rentals/cars"),
  path.join(root, "src/lib/constants/rentals/motorcycles"),
];

// Replace deleteRecursive with async/await version using fs.promises
async function deleteRecursive(targetPath) {
  try {
    const stat = await fs.stat(targetPath);
    if (stat.isDirectory()) {
      await fs.rm(targetPath, { recursive: true, force: true });
      console.log("Deleted directory:", targetPath);
    } else {
      await fs.unlink(targetPath);
      console.log("Deleted file:", targetPath);
    }
  } catch (err) {
    // Ignore if file/directory does not exist
  }
}

console.log("--- Deleting generated files and directories ---");
await Promise.all(generatedPaths.map(deleteRecursive));

console.log("--- Running generation scripts in order ---");

const scripts = [
  "node scripts/generate-tour-guides.mjs",
  "node scripts/generate-tour-guides.mjs --append 8",
  "node scripts/generateGuideReviews.mjs",
  "node scripts/generate-city-attractions.mjs",
  "node scripts/generate-missing-attraction-basic-and-details.mjs",
  "node scripts/generate-city-tours.mjs --rewrite",
  "node scripts/generate-all-city-testimonials.mjs",
  "node scripts/generate-city-testimonials.mjs",
  "node scripts/generate-tour-testimonials.mjs",
  "node scripts/generate-hotels.mjs",
  "node scripts/generate-hotels.mjs --append-default",
  "node scripts/generate-hotels.mjs --append-default",
  "node scripts/generate-room-options.mjs",
  "node scripts/generate-city-cars.mjs",
  "node scripts/generate-motorcycle-rentals.mjs",
  "node scripts/generate-motorcycle-rentals.mjs --append 9",
  "node scripts/generate-homestay-locations.mjs",
];

for (const cmd of scripts) {
  console.log(`\n>>> Running: ${cmd}`);
  try {
    execSync(cmd, { stdio: "inherit", cwd: root });
  } catch (err) {
    console.error(`Error running: ${cmd}`);
    process.exit(1);
  }
}

console.log("\n--- Dev reset and generation complete! ---");
