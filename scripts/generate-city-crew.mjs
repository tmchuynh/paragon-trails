/**
 * Yacht Crew Generator Script
 * ==========================
 *
 * This script generates realistic yacht crew member data for the Paragon Trails application.
 * It creates structured crew information with properties like name, role, experience,
 * certifications, languages spoken, and contact details for each city in the application.
 *
 * Features:
 * - Generates 3-8 crew members per city by default
 * - Creates appropriate folder structure in src/lib/constants/staff/crew
 * - Assigns appropriate roles like Captain, Engineer, Chef, etc.
 * - Includes realistic certifications and diverse language skills
 * - Generates contact information and availability status
 *
 * Usage: node scripts/generate-city-crew.mjs [options]
 *
 * Options:
 *   --rewrite, -r       Rewrite existing files instead of skipping them
 *   --append N, -a N    Append N new crew members to existing files
 *   --city C, -c C      Process only cities matching the search term
 *
 * Examples:
 *   node generate-city-crew.mjs --rewrite
 *   node generate-city-crew.mjs --append 5
 *   node generate-city-crew.mjs --city "Monaco"
 */

import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";
import { getCityFiles } from "./utils/file-utils.mjs";
import {
  formatKebabToCamelCase,
  formatTitleToCamelCase,
  removeAccents,
} from "./utils/format-utils.mjs";
import { cityCountryMap, cityToRegionMap } from "./utils/geo-utils.mjs";
import { getRandomName } from "./utils/name-utils.mjs";

const cities = getCityFiles();

// Add check for empty cities array
if (!cities || cities.length === 0) {
  console.error("No cities found. Check the city-data.json file.");
  process.exit(1);
}

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);

// Parse command line arguments
function parseCommandLineArgs() {
  const options = {
    rewrite: false,
    append: null,
    cityFilter: null,
  };

  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--rewrite" || arg === "-r") {
      options.rewrite = true;
    }

    if ((arg === "--append" || arg === "-a") && i + 1 < args.length) {
      const value = parseInt(args[++i]);
      if (!isNaN(value) && value > 0) {
        options.append = value;
      }
    }

    if ((arg === "--city" || arg === "-c") && i + 1 < args.length) {
      options.cityFilter = args[++i];
    }
  }

  return options;
}

const options = parseCommandLineArgs();

// Define crew member role data
const crewRoles = [
  "Captain",
  "First Mate",
  "Engineer",
  "Deckhand",
  "Chef",
  "Steward/Stewardess",
  "Dive Instructor",
  "Host/Hostess",
  "Navigator",
  "Purser",
];

const certifications = [
  "STCW",
  "First Aid",
  "Marine Radio Operator",
  "Fire Safety",
  "Dive Master",
  "Security Training",
  "Engineering License",
  "Hospitality Training",
  "Navigation Certification",
  "Environmental Awareness",
];

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Russian",
  "Mandarin",
  "Japanese",
  "Arabic",
  "Hindi",
  "Dutch",
  "Swedish",
  "Greek",
  "Turkish",
  "Thai",
  "Korean",
  "Vietnamese",
  "Polish",
  "Norwegian",
  "Danish",
  "Finnish",
  "Czech",
  "Hungarian",
  "Romanian",
];

// Generate a random crew member
function generateCrewMember(city, index) {
  const id = `crew-${city.toLowerCase().replace(/\s+/g, "-")}-${index + 1}`;

  const name = getRandomName();

  const role = crewRoles[Math.floor(Math.random() * crewRoles.length)];
  const experienceYears = Math.floor(Math.random() * 20) + 2; // 2-22 years of experience

  // Generate 1-3 random certifications
  const numCerts = Math.floor(Math.random() * 3) + 1;
  const selectedCertifications = Array.from(
    new Set(
      Array(numCerts)
        .fill(0)
        .map(
          () =>
            certifications[Math.floor(Math.random() * certifications.length)]
        )
    )
  );

  // Generate 1-3 random languages
  const numLanguages = Math.floor(Math.random() * 3) + 1;
  const languagesSpoken = Array.from(
    new Set(
      Array(numLanguages)
        .fill(0)
        .map(() => languages[Math.floor(Math.random() * languages.length)])
    )
  );

  // Generate a phone number
  const phoneDigits = Array(10)
    .fill(0)
    .map(() => Math.floor(Math.random() * 10))
    .join("");
  const phoneNumber = `+1-${phoneDigits.substring(0, 3)}-${phoneDigits.substring(3, 6)}-${phoneDigits.substring(6)}`;

  // Generate email based on name
  const nameParts = name.toLowerCase().split(" ");
  const email = `${nameParts[0]}.${nameParts[nameParts.length - 1]}@paragontrails.com`;

  return {
    id,
    name,
    role,
    experienceYears,
    certifications: selectedCertifications,
    languagesSpoken,
    isAvailable: Math.random() > 0.2, // 80% chance of being available
    contactEmail: email,
    contactPhone: phoneNumber,
  };
}

// Check if directory exists, create if needed
async function ensureDirectoryExists(dirPath) {
  try {
    await access(dirPath);
  } catch {
    await mkdir(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
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

// Extract existing crew members from a file
async function extractExistingCrewMembers(filePath) {
  try {
    const content = await readFile(filePath, "utf-8");
    const match = content.match(
      /export const \w+: CrewMember\[\] = \[([\s\S]*?)\];/
    );
    if (!match || !match[1]) return [];

    const itemsText = match[1].trim();
    if (!itemsText) return [];

    const items = [];
    let bracketCount = 0;
    let currentItem = "";

    for (let i = 0; i < itemsText.length; i++) {
      const char = itemsText[i];

      if (char === "{") bracketCount++;
      if (char === "}") bracketCount--;

      currentItem += char;

      if (bracketCount === 0 && currentItem.trim()) {
        try {
          const cleanedItem = currentItem.replace(/,\s*$/, "");
          const obj = new Function(`return ${cleanedItem}`)();
          items.push(obj);
          currentItem = "";
        } catch (e) {
          console.warn("Failed to parse crew member:", e);
          currentItem = "";
        }
      }
    }

    return items;
  } catch (e) {
    console.error("Error extracting crew members:", e);
    return [];
  }
}

// Generate crew members and write to file
async function generateCityFile(city) {
  const countryName = cityCountryMap[city] || "";
  const regionName = cityToRegionMap[city] || "";

  const formattedCountry = formatTitleToCamelCase(removeAccents(countryName));
  const formattedRegion = formatTitleToCamelCase(removeAccents(regionName));

  const formattedName = formatKebabToCamelCase(removeAccents(city));

  // Follow the same variable naming convention as tour guides
  let variableName;
  if (formattedCountry && formattedRegion) {
    variableName = `${formattedName}${formattedCountry}${formattedRegion}Crew`;
  } else {
    variableName = `${formattedName}Crew`;
  }

  const destDir = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "staff",
    "crew"
  );
  const filePath = path.join(destDir, `${formattedName}.ts`);

  // Check if directory exists
  await ensureDirectoryExists(destDir);

  // Check if file exists
  const exists = await fileExists(filePath);

  // Handle existing file based on options
  let crewMembers = [];
  if (exists) {
    if (options.rewrite) {
      console.log(`Rewriting existing file: ${filePath}`);
    } else if (options.append) {
      console.log(`Appending ${options.append} crew members to: ${filePath}`);
      crewMembers = await extractExistingCrewMembers(filePath);
    } else {
      console.log(
        `File already exists (use --rewrite to replace): ${filePath}`
      );
      return;
    }
  }

  // Generate crew members
  const numNewCrewMembers = options.append || Math.floor(Math.random() * 6) + 3; // 3-8 crew members
  const newCrewMembers = Array(numNewCrewMembers)
    .fill(0)
    .map((_, index) => generateCrewMember(city, index + crewMembers.length));

  // Combine existing and new crew members
  crewMembers = crewMembers.concat(newCrewMembers);

  // Create file content with proper formatting
  let content = `import { CrewMember } from "@/lib/interfaces/people/staff";\n\n`;
  content += `export const ${variableName.replaceAll(".", "")}: CrewMember[] = [\n`;

  crewMembers.forEach((crewMember, index) => {
    content += `  {\n`;
    for (const [key, value] of Object.entries(crewMember)) {
      if (typeof value === "string") {
        content += `    ${key}: "${value}",\n`;
      } else if (Array.isArray(value)) {
        content += `    ${key}: [${value
          .map((item) => `"${item}"`)
          .join(", ")}],\n`;
      } else {
        content += `    ${key}: ${value},\n`;
      }
    }
    content += `  }${index < crewMembers.length - 1 ? "," : ""}\n`;
  });

  content += `];\n`;

  // Write file
  await writeFile(filePath, content);
  console.log(
    `${exists && !options.rewrite ? "Updated" : "Created"} file: ${filePath}`
  );
}

// Main function to process all cities
async function generateAllCityFiles() {
  let citiesToProcess = cities;

  // Filter by city name if specified
  if (options.cityFilter) {
    const filterLower = options.cityFilter.toLowerCase();
    citiesToProcess = cities.filter((city) =>
      city.toLowerCase().includes(filterLower)
    );

    if (citiesToProcess.length === 0) {
      console.log(`No cities found matching: ${options.cityFilter}`);
      return;
    }

    console.log(
      `Processing ${citiesToProcess.length} cities matching: ${options.cityFilter}`
    );
  }

  for (const city of citiesToProcess) {
    try {
      await generateCityFile(city);
    } catch (error) {
      console.error(`Error generating file for ${city}:`, error);
    }
  }
}

// Execute the script
generateAllCityFiles()
  .then(() => console.log("City crew member files generated successfully!"))
  .catch((error) =>
    console.error("Error generating city crew member files:", error)
  );

// Print usage information
console.log(`
Usage: node generate-city-crew.mjs [options]

Options:
  --rewrite, -r       Rewrite existing files instead of skipping them
  --append N, -a N    Append N new crew members to existing files
  --city C, -c C      Process only cities matching the search term

Examples:
  node generate-city-crew.mjs --rewrite
  node generate-city-crew.mjs --append 5
  node generate-city-crew.mjs --city "Monaco"
`);
