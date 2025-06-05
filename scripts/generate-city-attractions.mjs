/**
 * City Attractions Generator Script
 * =================================
 *
 * This script generates realistic attraction data for city destinations in the Paragon Trails application.
 * It creates detailed attraction information with properties like title, description, pricing, tags,
 * accessibility features, and other relevant details for each city in the application.
 *
 * Features:
 * - Generates 9-19 attractions per city by default
 * - Creates appropriate folder structure in src/lib/constants/destinations/city
 * - Supports price filtering with custom price ranges
 * - Generates diverse attraction types with relevant tags and features
 * - Uses realistic pricing, ratings, and accessibility information
 *
 * Usage: node scripts/generate-city-attractions.mjs [options]
 *
 * Options:
 *   --rewrite, -r       Rewrite existing files instead of skipping them
 *   --append N, -a N    Append N new attractions to existing files
 *   --price P, -p P     Generate attractions with specified price range (options: $, $$, $$$, $$$$, free)
 *   --city C, -c C      Process only cities matching the search term
 *
 * Examples:
 *   node generate-city-attractions.mjs --rewrite
 *   node generate-city-attractions.mjs --append 5
 *   node generate-city-attractions.mjs --price "$$$"
 *   node generate-city-attractions.mjs --city "Tokyo" --append 3
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
import {
  cityCountryMap,
  cityToRegionMap,
  formatCamelCaseToTitle,
} from "./utils/geo-utils.mjs";

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
    price: null,
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

    if ((arg === "--price" || arg === "-p") && i + 1 < args.length) {
      const value = args[++i];
      if (["$", "$$", "$$$", "$$$$", "free"].includes(value)) {
        options.price = value;
      }
    }

    if ((arg === "--city" || arg === "-c") && i + 1 < args.length) {
      options.cityFilter = args[++i];
    }
  }

  return options;
}

const options = parseCommandLineArgs();

// Various attraction components
const attractionTypes = [
  "Museum",
  "Park",
  "Monument",
  "Cathedral",
  "Castle",
  "Palace",
  "Market",
  "Square",
  "Bridge",
  "Tower",
  "Garden",
  "Temple",
  "Gallery",
  "Zoo",
];

const possibleTags = [
  "Landmark",
  "Historical Site",
  "Museum",
  "Gallery",
  "Park",
  "Garden",
  "Market",
  "Local Market",
  "Monument",
  "Religious Site",
  "Scenic Spot",
  "Cultural Center",
  "UNESCO Site",
  "Hidden Gem",
  "Photography Spot",
  "Iconic",
];

const accessibilityOptions = [
  "wheelchair accessible",
  "limited accessibility",
  "accessible restrooms",
  "elevator access",
  "accessible entrance",
];

// Generate an attraction with all required properties
function generateAttraction(cityName) {
  // Generate random price range and set dependent properties
  const priceRanges = ["$", "$$", "$$$", "$$$$", "free"];

  // Use specified price range if provided, otherwise random
  const priceRange =
    options.price ||
    priceRanges[Math.floor(Math.random() * priceRanges.length)];

  let priceCategory;
  switch (priceRange) {
    case "free":
      priceCategory = "free";
      break;
    case "$":
      priceCategory = "budget";
      break;
    case "$$":
      priceCategory = "moderate";
      break;
    case "$$$":
      priceCategory = "expensive";
      break;
    case "$$$$":
      priceCategory = "luxury";
      break;
  }

  // Set entry fee and category
  let entryFee;
  let entryFeeCategory;

  if (priceRange === "free" || Math.random() < 0.3) {
    entryFee = "Free";
    entryFeeCategory = "free";
  } else {
    const fee = Math.floor(Math.random() * 100) + 5;
    const currencySymbols = ["$", "€", "£", "¥"];
    const currencySymbol =
      currencySymbols[Math.floor(Math.random() * currencySymbols.length)];
    entryFee = `${currencySymbol}${fee}`;

    if (fee < 15) entryFeeCategory = "budget";
    else if (fee < 50) entryFeeCategory = "moderate";
    else if (fee < 100) entryFeeCategory = "expensive";
    else entryFeeCategory = "luxury";
  }

  // Generate tags
  const numTags = Math.floor(Math.random() * 3) + 1;
  const tags = Array.from(
    new Set(
      Array(numTags)
        .fill(0)
        .map(
          () => possibleTags[Math.floor(Math.random() * possibleTags.length)]
        )
    )
  );

  // Generate accessibility features
  const numFeatures = Math.floor(Math.random() * 2) + 1;
  const accessibilityFeatures = Array.from(
    new Set(
      Array(numFeatures)
        .fill(0)
        .map(
          () =>
            accessibilityOptions[
              Math.floor(Math.random() * accessibilityOptions.length)
            ]
        )
    )
  );

  // Set accessibility-dependent property
  const isWheelchairAccessible = accessibilityFeatures.some((f) =>
    f.includes("wheelchair")
  );

  // Generate random time of day
  const timesOfDay = ["all day", "daytime", "evening", "night"];
  const timeOfDay = timesOfDay[Math.floor(Math.random() * timesOfDay.length)];

  // Generate attraction details
  const attractionType =
    attractionTypes[Math.floor(Math.random() * attractionTypes.length)];
  const title = `${formatCamelCaseToTitle(cityName)} ${attractionType}`;
  const description = `A beautiful ${attractionType.toLowerCase()} in ${formatCamelCaseToTitle(cityName)} offering visitors a unique cultural experience and stunning views.`;
  const location = `${
    Math.floor(Math.random() * 200) + 1
  } Main Street, ${formatCamelCaseToTitle(cityName)}`;
  const hours = ["9 AM - 5 PM", "10 AM - 6 PM", "Open 24 hours"][
    Math.floor(Math.random() * 3)
  ];

  // Set flags according to the Flags interface
  const isFree = priceRange === "free";
  const isHistorical = Math.random() < 0.4;
  const isRomantic = Math.random() < 0.3;
  const isAdventure = Math.random() < 0.25;
  const isCulinary = Math.random() < 0.2;
  const isSpiritual = Math.random() < 0.15;
  const isNightlife = timeOfDay === "night" || Math.random() < 0.2;
  const isLuxury = priceCategory === "luxury";
  const isArtOrMusic = Math.random() < 0.3;
  const isPopular = true;
  const isPetFriendly = Math.random() < 0.5;

  // Create attraction object according to BaseAttraction & Flags & Details
  return {
    // BaseAttraction properties
    title,
    description,
    imageUrl: `https://plus.unsplash.com/${cityName
      .toLowerCase()
      .replace(/\s+/g, "-")}-${attractionType
      .toLowerCase()
      .replace(/\s+/g, "-")}.jpg`,
    location,
    openingHours: hours,
    entryFee,
    entryFeeCategory,
    priceRange,
    priceCategory,
    timeOfDay,
    rating: parseFloat((4.2 + Math.random() * 0.8).toFixed(1)),
    tags,
    accessibilityFeatures,

    // Flags properties
    isHistorical,
    isRomantic,
    isAdventure,
    isCulinary,
    isSpiritual,
    isNightlife,
    isLuxury,
    isArtOrMusic,
    isFree,
    isPopular,
    isPetFriendly,
    isWheelchairAccessible,
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

// Extract existing attractions from a file
async function extractExistingAttractions(filePath) {
  try {
    // Read file content
    const content = await readFile(filePath, "utf-8");

    // Extract the array part using a simple regex approach
    const match = content.match(
      /export const \w+: Attraction\[\] = \[([\s\S]*?)\];/
    );
    if (!match || !match[1]) return [];

    // Parse the array items
    const itemsText = match[1].trim();
    if (!itemsText) return [];

    // Split by object boundaries and parse each attraction
    const items = [];
    let bracketCount = 0;
    let currentItem = "";

    for (let i = 0; i < itemsText.length; i++) {
      const char = itemsText[i];

      if (char === "{") bracketCount++;
      if (char === "}") bracketCount--;

      currentItem += char;

      if (bracketCount === 0 && currentItem.trim()) {
        // We've found a complete object
        try {
          // Convert the text to an actual object (this is a simplified approach)
          const cleanedItem = currentItem.replace(/,\s*$/, ""); // Remove trailing comma

          // Use Function constructor to evaluate the object expression safely
          // This is a simplified approach and may not handle all edge cases
          const obj = new Function(`return ${cleanedItem}`)();
          items.push(obj);
          currentItem = "";
        } catch (e) {
          console.warn("Failed to parse attraction:", e);
          currentItem = "";
        }
      }
    }

    return items;
  } catch (e) {
    console.error("Error extracting attractions:", e);
    return [];
  }
}

// Generate attractions and write to file
async function generateCityFile(city) {
  const countryName = cityCountryMap[city] || "";
  const regionName = cityToRegionMap[city] || "";

  const formattedCountry = formatTitleToCamelCase(removeAccents(countryName));
  const formattedRegion = formatTitleToCamelCase(removeAccents(regionName));

  const formattedName = formatKebabToCamelCase(removeAccents(city));

  const variableName = `${formattedName}${formattedCountry}${formattedRegion}Attractions`;

  const destDir = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "destinations",
    "city"
  );
  const filePath = path.join(destDir, `${formattedName}.ts`);

  // Check if directory exists
  await ensureDirectoryExists(destDir);

  // Check if file exists
  const exists = await fileExists(filePath);

  // Handle existing file based on options
  let attractions = [];
  if (exists) {
    if (options.rewrite) {
      console.log(`Rewriting existing file: ${filePath}`);
    } else if (options.append) {
      console.log(`Appending ${options.append} attractions to: ${filePath}`);
      attractions = await extractExistingAttractions(filePath);
    } else {
      console.log(
        `File already exists (use --rewrite to replace): ${filePath}`
      );
      return;
    }
  }

  // Generate attractions
  const numNewAttractions =
    options.append || Math.floor(Math.random() * 10) + 9;
  const newAttractions = Array(numNewAttractions)
    .fill(0)
    .map(() => generateAttraction(city));

  // Combine existing and new attractions
  attractions = attractions.concat(newAttractions);

  // Create file content with proper formatting
  let content = `import { Attraction } from "@/lib/interfaces/services/attractions";\n\n`;
  content += `export const ${variableName}: Attraction[] = [\n`;

  attractions.forEach((attraction, index) => {
    content += `  {\n`;
    for (const [key, value] of Object.entries(attraction)) {
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
    content += `  }${index < attractions.length - 1 ? "," : ""}\n`;
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
  .then(() => console.log("City attraction files generated successfully!"))
  .catch((error) =>
    console.error("Error generating city attraction files:", error)
  );

// Print usage information
console.log(`
Usage: node generate-city-attractions.mjs [options]

Options:
  --rewrite, -r       Rewrite existing files instead of skipping them
  --append N, -a N    Append N new attractions to existing files
  --price P, -p P     Generate attractions with specified price range (options: $, $$, $$$, $$$$, free)
  --city C, -c C      Process only cities matching the search term

Examples:
  node generate-city-attractions.mjs --rewrite
  node generate-city-attractions.mjs --append 5
  node generate-city-attractions.mjs --price "$$$"
  node generate-city-attractions.mjs --city "Tokyo" --append 3
`);
