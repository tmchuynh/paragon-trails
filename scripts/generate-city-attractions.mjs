/**
 * City Attractions Generator Script
 * =================================
 *
 * This script generates realistic attraction data for city destinations in the Paragon Trails application.
 * It creates detailed attraction information with properties like title, description, pricing, tags,
 * accessibility features, and other relevant details for each city in the application.
 *
 * Features:
 * - Uses real attraction data from attraction-utils.mjs
 * - Creates appropriate folder structure in src/lib/constants/destinations/city
 * - Supports price filtering with custom price ranges
 * - Generates files with diverse attraction types
 * - Uses realistic pricing, ratings, and accessibility information
 * - Uses geo-utils to determine region, country and other geographic data
 *
 * Usage: node scripts/generate-city-attractions.mjs [options]
 *
 * Options:
 *   --rewrite, -r       Rewrite existing files instead of skipping them
 *   --append N, -a N    Append N new attractions to existing files
 *   --price P, -p P     Generate attractions with specified price range (options: $, $$, $$$, $$$$, free)
 *   --city C, -c C      Process only cities matching the search term
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { attractionBasicInfo } from "./utils/attraction-basic-utils.mjs";
import { attractionDetails } from "./utils/attraction-details-utils.mjs";
import {
  cityCountryMap,
  cityToRegionMap,
  cityCoordinates,
  countryCurrencyMap,
  euroCountries,
  regionCurrencyMap,
} from "./utils/geo-utils.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Parse command line arguments
const args = process.argv.slice(2);
const options = {
  rewrite: args.includes("--rewrite") || args.includes("-r"),
  city: getArgValue(args, ["--city", "-c"]),
  price: getArgValue(args, ["--price", "-p"]),
  append: parseInt(getArgValue(args, ["--append", "-a"])) || 0,
};

function getArgValue(args, flags) {
  for (const flag of flags) {
    const index = args.indexOf(flag);
    if (index !== -1 && index + 1 < args.length) {
      return args[index + 1];
    }
  }
  return null;
}

// Parse opening hours string into WeeklyAvailability[] format
function parseOpeningHours(hoursString) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Handle "24 hours" case
  if (
    !hoursString ||
    hoursString === "Open 24 hours" ||
    hoursString === "All day" ||
    hoursString === "Open all day" ||
    hoursString === "Always open" ||
    hoursString === "24 hours"
  ) {
    return days.map((day) => ({
      day,
      availableHours: [{ from: "00:00", to: "23:59" }],
    }));
  }

  // If already in the correct format, return it
  if (
    Array.isArray(hoursString) &&
    hoursString.length > 0 &&
    "day" in hoursString[0]
  ) {
    return hoursString;
  }

  // Handle specific days mentioned
  if (typeof hoursString === "string") {
    if (hoursString.includes("varies") || hoursString.includes("Varies")) {
      return days.map((day) => ({
        day,
        availableHours: [{ from: "09:00", to: "17:00" }],
      }));
    }

    // Handle cases with closed days
    if (hoursString.includes("closed") || hoursString.includes("Closed")) {
      const closedDayMatch = hoursString.match(/closed\s+([A-Za-z]+)s?/i);
      if (closedDayMatch) {
        const closedDay = closedDayMatch[1].toLowerCase();
        const timeRange = hoursString.split(/\(|\)/)[0].trim();
        const [from, to] = parseTimeRange(timeRange);

        return days.map((day) => ({
          day,
          availableHours: day.toLowerCase().startsWith(closedDay)
            ? []
            : [{ from, to }],
        }));
      }
    }

    // Handle standard time ranges
    const [from, to] = parseTimeRange(hoursString);
    return days.map((day) => ({
      day,
      availableHours: [{ from, to }],
    }));
  }

  // Default fallback
  return days.map((day) => ({
    day,
    availableHours: [{ from: "09:00", to: "17:00" }],
  }));
}

// Parse time range from string to standardized format
function parseTimeRange(timeRange) {
  if (!timeRange || typeof timeRange !== "string") {
    return ["09:00", "17:00"];
  }

  const cleanedRange = timeRange.replace(/\(.*\)/, "").trim();

  // Match patterns like "9:00 AM - 5:00 PM" or "10:30 AM – 6:00 PM"
  const timeMatch = cleanedRange.match(
    /(\d+(?::\d+)?\s*(?:AM|PM|am|pm)?)\s*[-–]\s*(\d+(?::\d+)?\s*(?:AM|PM|am|pm)?)/i
  );

  if (!timeMatch) {
    return ["09:00", "17:00"];
  }

  const from = convertTo24Hour(timeMatch[1]);
  const to = convertTo24Hour(timeMatch[2]);

  return [from, to];
}

// Convert 12-hour format to 24-hour format
function convertTo24Hour(timeStr) {
  if (!timeStr) return "09:00";

  let hours, minutes, modifier;

  if (timeStr.includes(":")) {
    [hours, minutes] = timeStr.split(":");
    if (
      minutes.includes("AM") ||
      minutes.includes("PM") ||
      minutes.includes("am") ||
      minutes.includes("pm")
    ) {
      modifier = minutes.match(/(AM|PM|am|pm)/i)[0].toUpperCase();
      minutes = minutes.replace(/(AM|PM|am|pm)/i, "").trim();
    }
  } else {
    const match = timeStr.match(/(\d+)\s*(AM|PM|am|pm)?/i);
    if (match) {
      hours = match[1];
      minutes = "00";
      modifier = match[2]?.toUpperCase();
    } else {
      return "09:00";
    }
  }

  // Default to AM if no modifier
  modifier = modifier || "AM";

  // Convert to number
  hours = parseInt(hours, 10);

  // Handle 12-hour clock conversions
  if (hours === 12) {
    hours = modifier === "AM" ? 0 : 12;
  } else if (modifier === "PM") {
    hours += 12;
  }

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

// Generate camelCase identifier for variable names
function generateVarName(city, region) {
  // Convert city name to camelCase
  city = city.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());

  // Convert region name to camelCase
  region = region
    .toLowerCase()
    .replace(/\s+([a-z])/g, (match, letter) => letter.toUpperCase());

  return `${city}${region}Attractions`;
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
        ([key, value]) => `${key}: ${stringifyObject(value, indentLevel + 2)}`
      )
      .join(",\n" + " ".repeat(indentLevel + 2));

    return `{\n${" ".repeat(indentLevel + 2)}${props},\n${" ".repeat(indentLevel)}}`;
  }

  if (typeof obj === "string") {
    return `"${obj.replace(/"/g, '\\"')}"`;
  }

  return String(obj);
}

// Create directory if it doesn't exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Write attractions to TypeScript file
function writeAttractionsFile(citySlug, attractions) {
  // Get region and country info from geo-utils
  const region = cityToRegionMap[citySlug] || "global";
  const country = cityCountryMap[citySlug] || "Unknown";
  const coordinates = cityCoordinates[citySlug] || {
    latitude: 0,
    longitude: 0,
  };

  // Determine currency
  let currency = "USD";
  if (euroCountries.includes(country)) {
    currency = "EUR";
  } else if (countryCurrencyMap[country]) {
    currency = countryCurrencyMap[country];
  } else if (regionCurrencyMap[region]) {
    currency = regionCurrencyMap[region];
  }

  // Create variable name for the attractions array
  const varName = generateVarName(citySlug, region);

  // Build TypeScript content
  const fileContent = `// filepath: /home/tmchuynh/Documents/Projects/paragon-trails/src/lib/constants/destinations/city/${citySlug}.ts
import { Attraction } from "@/lib/interfaces/services/attractions";

export const ${varName}: Attraction[] = ${stringifyObject(attractions)};
`;

  // Ensure directory exists
  const destDir = path.join(
    __dirname,
    "../src/lib/constants/destinations/city"
  );
  ensureDirectoryExists(destDir);

  // Write file path
  const filePath = path.join(destDir, `${citySlug}.ts`);

  // Check if file exists and handle accordingly
  if (fs.existsSync(filePath) && !options.rewrite && !options.append) {
    console.log(
      `File for ${citySlug} already exists. Skipping. Use --rewrite to overwrite.`
    );
    return;
  }

  // Write the file
  fs.writeFileSync(filePath, fileContent);
  console.log(`Generated file for ${citySlug} (${region}, ${country})`);
}

function generateAttractions() {
  const result = {};
  let cityCount = 0;
  let attractionCount = 0;

  for (const city in attractionBasicInfo) {
    // Skip cities that don't match our filter if provided
    if (options.city && !city.includes(options.city)) {
      continue;
    }

    result[city] = {};
    cityCount++;

    for (const attractionName in attractionBasicInfo[city]) {
      const basicInfo = attractionBasicInfo[city][attractionName];
      const detailInfo = attractionDetails[city]?.[attractionName] || {};

      // Skip attractions that don't match our price filter if provided
      if (options.price && detailInfo.priceRange !== options.price) {
        continue;
      }

      attractionCount++;

      // Parse opening hours
      let openingHours;
      try {
        openingHours = parseOpeningHours(detailInfo.openingHours);
      } catch (e) {
        console.warn(
          `Error parsing opening hours for ${attractionName} in ${city}: ${e.message}`
        );
        openingHours = [];
      }

      // Generate tags array from boolean properties
      const tags = [];
      if (detailInfo.isHistorical) tags.push("Historical");
      if (detailInfo.isRomantic) tags.push("Romantic");
      if (detailInfo.isAdventure) tags.push("Adventure");
      if (detailInfo.isCulinary) tags.push("Culinary");
      if (detailInfo.isSpiritual) tags.push("Spiritual");
      if (detailInfo.isNightlife) tags.push("Nightlife");
      if (detailInfo.isLuxury) tags.push("Luxury");
      if (detailInfo.isArtOrMusic) tags.push("Artormusic");
      if (detailInfo.isFree) tags.push("Free");
      if (detailInfo.isPopular) tags.push("Popular");
      if (detailInfo.isPetFriendly) tags.push("Petfriendly");

      // Create attraction object according to BaseAttraction interface
      const attraction = {
        title: basicInfo.title,
        description: detailInfo.description || "No description available",
        imageUrl: basicInfo.imageUrl,
        location: basicInfo.location,
        openingHours,
        entryFee: detailInfo.entryFee,
        entryFeeCategory: detailInfo.entryFeeCategory || "moderate",
        priceRange: detailInfo.priceRange || "$",
        priceCategory: detailInfo.priceCategory || "moderate",
        timeOfDay: detailInfo.timeOfDay || "daytime",
        rating: detailInfo.rating || 4.0,
        tags: tags.length > 0 ? tags : [],
        accessibilityFeatures: detailInfo.accessibilityFeatures || [],
        entryFees: detailInfo.entryFees || [],
        features: detailInfo.features || [],
      };

      result[city][attractionName] = attraction;
    }

    // Write attractions file for this city
    const cityAttractions = Object.values(result[city]);
    if (cityAttractions.length > 0) {
      writeAttractionsFile(city, cityAttractions);
    }
  }

  // Write combined JSON data
  const outputDir = path.join(__dirname, "../src/data");
  ensureDirectoryExists(outputDir);

  fs.writeFileSync(
    path.join(outputDir, "attractions.json"),
    JSON.stringify(result, null, 2)
  );

  console.log(
    `Generated attractions data for ${cityCount} cities with ${attractionCount} total attractions.`
  );
}

// Execute the script
generateAttractions();
