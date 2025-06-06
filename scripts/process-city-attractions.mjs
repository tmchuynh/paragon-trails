/**
 * Process City Attractions Script
 * ===============================
 *
 * This script processes the attractions.json data and generates
 * properly formatted TypeScript files for each city.
 * It ensures complex objects like openingHours and entryFees are properly structured.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  formatKebabToCamelCase,
  formatTitleToCamelCase,
  removeAccents,
  formatKebebToTitleCase,
} from "./utils/format-utils.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load attractions data
const attractionsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../src/data/attractions.json"), "utf8"),
);

// Convert kebab-case to camelCase
function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}

// Helper function to properly stringify objects for TS files
function stringifyObject(obj, indentLevel = 2) {
  if (obj === null || obj === undefined) {
    return "undefined";
  }

  if (Array.isArray(obj)) {
    if (obj.length === 0) return "[]";

    const arrayItems = obj
      .map((item) => stringifyObject(item, indentLevel + 2))
      .join(",\n" + " ".repeat(indentLevel + 2));
    return `[\n${" ".repeat(indentLevel + 2)}${arrayItems},\n${" ".repeat(indentLevel)}]`;
  }

  if (typeof obj === "object") {
    const entries = Object.entries(obj);
    if (entries.length === 0) return "{}";

    const props = entries
      .map(
        ([key, value]) => `${key}: ${stringifyObject(value, indentLevel + 2)}`,
      )
      .join(",\n" + " ".repeat(indentLevel + 2));

    return `{\n${" ".repeat(indentLevel + 2)}${props},\n${" ".repeat(indentLevel)}}`;
  }

  if (typeof obj === "string") {
    return `"${obj.replace(/"/g, '\\"')}"`;
  }

  return String(obj);
}

// Process each city
for (const city in attractionsData) {
  const cityName = city;
  const cityNameCamel = kebabToCamel(city);
  let region = "global";

  // Determine region based on city name or other logic
  if (
    [
      "amsterdam",
      "london",
      "paris",
      "rome",
      "barcelona",
      "berlin",
      "dublin",
    ].includes(city)
  ) {
    region = "europe";
  } else if (
    [
      "new-york-city",
      "los-angeles",
      "san-francisco",
      "boston",
      "seattle",
      "tampa",
    ].includes(city)
  ) {
    region = "north-america";
  } else if (["tokyo", "hong-kong", "singapore", "shanghai"].includes(city)) {
    region = "asia";
  }

  // Generate attractions array
  const attractions = Object.values(attractionsData[city]).map((attraction) => {
    // Create tags array
    const tags = [];

    if (attraction.isHistorical) tags.push("Historical");
    if (attraction.isRomantic) tags.push("Romantic");
    if (attraction.isAdventure) tags.push("Adventure");
    if (attraction.isSpiritual) tags.push("Spiritual");
    if (attraction.isArtOrMusic) tags.push("Artormusic");
    if (attraction.isFree) tags.push("Free");
    if (attraction.isPopular) tags.push("Popular");
    if (attraction.isPetFriendly) tags.push("Petfriendly");
    if (attraction.isLuxury) tags.push("Luxury");

    return {
      ...attraction,
      tags,
    };
  });

  // Generate TypeScript file content
  const fileContent = `// filepath: /home/tmchuynh/Documents/Projects/paragon-trails/src/lib/constants/destinations/city/${city}.ts
import { Attraction } from "@/lib/interfaces/services/attractions";

export const ${cityNameCamel}${formatKebabToCamelCase(region)}Attractions: Attraction[] = ${stringifyObject(attractions)};
`;

  // Ensure directory exists
  const destDir = path.join(
    __dirname,
    "../src/lib/constants/destinations/city",
  );
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // Write file
  fs.writeFileSync(path.join(destDir, `${city}.ts`), fileContent);
  console.log(`Generated file for ${city}`);
}

console.log("All city attraction files generated successfully!");
