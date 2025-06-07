/**
 * Complete City Testimonials Generator Script
 * ==========================================
 *
 * This script ensures that testimonials are generated for all cities in the cityFiles array.
 * It builds on top of the city testimonials generator functionality and ensures complete coverage
 * of all cities in the application.
 *
 * Usage: node scripts/generate-all-city-testimonials.mjs [options]
 *
 * Options:
 *   --rewrite, -r       Rewrite existing files instead of skipping them
 *   --batch N, -b N     Process cities in batches of N (default: 10)
 */

import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";
import { spawn } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const access = promisify(fs.access);

// Parse command line arguments
function parseCommandLineArgs() {
  const args = process.argv.slice(2);
  const options = {
    rewrite: false,
    batch: 10,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--rewrite" || arg === "-r") {
      options.rewrite = true;
    }

    if ((arg === "--batch" || arg === "-b") && i + 1 < args.length) {
      const value = parseInt(args[++i]);
      if (!isNaN(value) && value > 0) {
        options.batch = value;
      }
    }
  }

  return options;
}

const options = parseCommandLineArgs();

// Get the list of city files from the constants folder
async function getCityFiles() {
  try {
    const cityInfoPath = path.join(
      __dirname,
      "../src/lib/constants/info/city.ts",
    );
    const fileContent = await readFile(cityInfoPath, "utf-8");

    // Extract city files array from the content
    const match = fileContent.match(/export const cityFiles = \[([\s\S]*?)\];/);
    if (!match) throw new Error("cityFiles array not found in city.ts");

    // Parse the array content
    const cityFilesStr = match[1].trim();
    const cityFiles = cityFilesStr
      .split(",")
      .map((file) => file.trim().replace(/"/g, "").replace(/'/g, ""))
      .filter((file) => file); // Remove empty strings

    return cityFiles;
  } catch (error) {
    console.error("Error getting city files:", error);
    return [];
  }
}

// Check which cities already have testimonials
async function getExistingCityTestimonials() {
  try {
    const testimonialDir = path.join(
      __dirname,
      "../src/lib/constants/testimonials/cities"
    );

    // Create directory if it doesn't exist yet
    try {
      await access(testimonialDir);
    } catch {
      console.log("Creating cityTestimonials directory...");
      fs.mkdirSync(testimonialDir, { recursive: true });
      return []; // No files exist yet
    }

    // Read directory for existing files
    const files = await readdir(testimonialDir);

    // Extract city names from file names
    return files
      .filter((file) => file.endsWith("Testimonials.ts"))
      .map((file) =>
        file
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .toLowerCase()
          .replace("testimonials.ts", ""),
      );
  } catch (error) {
    console.error("Error checking existing testimonials:", error);
    return [];
  }
}

// Run the city testimonial generator for a specific city
function generateTestimonialsForCity(city, rewrite = false) {
  return new Promise((resolve, reject) => {
    const args = ["scripts/generate-city-testimonials.mjs", "--city", city];
    if (rewrite) {
      args.push("--rewrite");
    }

    console.log(`Generating testimonials for ${city}...`);
    const child = spawn("node", args, { stdio: "pipe" });

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (data) => {
      stdout += data;
    });

    child.stderr.on("data", (data) => {
      stderr += data;
    });

    child.on("close", (code) => {
      if (code === 0) {
        console.log(`Successfully generated testimonials for ${city}`);
        resolve();
      } else {
        console.error(`Error generating testimonials for ${city}: ${stderr}`);
        // Don't reject, we want to continue with other cities
        resolve();
      }
    });
  });
}

// Main function to generate testimonials for all cities
async function generateAllCityTestimonials() {
  try {
    const allCities = await getCityFiles();
    console.log(`Found ${allCities.length} cities in cityFiles array`);

    const existingTestimonials = await getExistingCityTestimonials();
    console.log(
      `Found ${existingTestimonials.length} existing testimonial files`,
    );

    // Determine which cities need testimonials
    let citiesToProcess;
    if (options.rewrite) {
      citiesToProcess = allCities;
      console.log("Rewriting all testimonial files");
    } else {
      citiesToProcess = allCities.filter(
        (city) => !existingTestimonials.includes(city),
      );
      console.log(
        `Need to generate testimonials for ${citiesToProcess.length} cities`,
      );
    }

    // Process cities in batches to avoid overwhelming the system
    const batchSize = options.batch;
    for (let i = 0; i < citiesToProcess.length; i += batchSize) {
      const batch = citiesToProcess.slice(i, i + batchSize);
      console.log(
        `Processing batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(citiesToProcess.length / batchSize)}`,
      );

      // Process each city in the batch concurrently
      const promises = batch.map((city) =>
        generateTestimonialsForCity(city, options.rewrite),
      );

      await Promise.all(promises);
    }

    console.log("Finished generating all city testimonials!");
  } catch (error) {
    console.error("Error in main process:", error);
  }
}

// Create index.ts file that exports all testimonials
async function createTestimonialsIndex() {
  try {
    const testimonialDir = path.join(
      __dirname,
      "../src/lib/constants/testimonials/cities"
    );
    const files = await readdir(testimonialDir);

    const testimonialFiles = files.filter((file) =>
      file.endsWith("Testimonials.ts"),
    );

    let indexContent = `// This file is auto-generated by generate-all-city-testimonials.mjs\n\n`;

    // Add exports for each testimonial file
    testimonialFiles.forEach((file) => {
      const exportName = file.replace(".ts", "");
      indexContent += `export { ${exportName} } from './${exportName}';\n`;
    });

    // Create a map for easy lookup of testimonials by city
    indexContent += `\nexport const testimonialsByCity = {\n`;
    testimonialFiles.forEach((file) => {
      const exportName = file.replace(".ts", "");
      // Convert camelCase to kebab-case for the city key
      const cityKey = exportName
        .replace("Testimonials", "")
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .toLowerCase();

      indexContent += `  "${cityKey}": ${exportName},\n`;
    });
    indexContent += `};\n`;

    // Write the index file
    const indexPath = path.join(testimonialDir, "index.ts");
    await writeFile(indexPath, indexContent);
    console.log("Created testimonials index file");
  } catch (error) {
    console.error("Error creating index file:", error);
  }
}

// Run the script
(async () => {
  console.log("Starting generation of all city testimonials...");
  await generateAllCityTestimonials();
  await createTestimonialsIndex();
})();
