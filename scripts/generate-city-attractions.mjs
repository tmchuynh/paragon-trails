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
  regionCurrencyMapping,
} from "./utils/geo-utils.mjs";
import {
  formatKebebToTitleCase,
  removeAccents,
} from "./utils/format-utils.mjs";

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

  // If already in the correct format, return it
  if (
    Array.isArray(hoursString) &&
    hoursString.length > 0 &&
    typeof hoursString[0] === "object" &&
    "day" in hoursString[0] &&
    "availableHours" in hoursString[0]
  ) {
    // Ensure all days are present
    const existingDays = hoursString.map((item) => item.day);
    const missingDays = days.filter((day) => !existingDays.includes(day));

    if (missingDays.length === 0) {
      return hoursString;
    }

    // Add missing days with default hours
    const result = [...hoursString];
    for (const day of missingDays) {
      result.push({
        day,
        availableHours: [{ from: "09:00", to: "17:00" }],
      });
    }

    // Sort by day of week
    return result.sort((a, b) => days.indexOf(a.day) - days.indexOf(b.day));
  }

  // Handle "24 hours" case and other all-day variations
  if (
    !hoursString ||
    (typeof hoursString === "string" &&
      (hoursString.toLowerCase().includes("24 hour") ||
        hoursString.toLowerCase().includes("all day") ||
        hoursString.toLowerCase().includes("always open") ||
        hoursString.toLowerCase().includes("open 24") ||
        hoursString.toLowerCase().includes("24/7")))
  ) {
    return days.map((day) => ({
      day,
      availableHours: [{ from: "00:00", to: "23:59" }],
    }));
  }

  // Handle string formats
  if (typeof hoursString === "string") {
    // Handle "varies" case
    if (
      hoursString.toLowerCase().includes("varies") ||
      hoursString.toLowerCase().includes("check website") ||
      hoursString.toLowerCase().includes("call for")
    ) {
      return days.map((day) => ({
        day,
        availableHours: [{ from: "09:00", to: "17:00" }],
      }));
    }

    // Handle specific days mentioned (like "closed on Mondays")
    if (hoursString.toLowerCase().includes("closed")) {
      // Try to match a specific closed day
      const closedDayMatch = hoursString.match(
        /closed\s+(?:on\s+)?([A-Za-z]+)s?/i
      );
      if (closedDayMatch) {
        const closedDay = closedDayMatch[1].toLowerCase();
        const timeRange = hoursString.replace(/\(.*?\)/g, "").trim();
        const [from, to] = parseTimeRange(timeRange);

        return days.map((day) => ({
          day,
          availableHours: day.toLowerCase().startsWith(closedDay)
            ? []
            : [{ from, to }],
        }));
      }
    }

    // Check for specific day patterns like "Mon-Fri: 9am-5pm, Sat-Sun: 10am-4pm"
    const dayRangePattern =
      /([A-Za-z]+)(?:-([A-Za-z]+))?\s*[:;]\s*([\d:]+\s*(?:AM|PM|am|pm)?\s*[-–]\s*[\d:]+\s*(?:AM|PM|am|pm)?)/gi;
    let dayRangeMatch;
    const specificHours = {};
    let foundSpecificDays = false;

    while ((dayRangeMatch = dayRangePattern.exec(hoursString)) !== null) {
      foundSpecificDays = true;
      const startDay = dayRangeMatch[1];
      const endDay = dayRangeMatch[2] || startDay;
      const timeRange = dayRangeMatch[3];
      const [from, to] = parseTimeRange(timeRange);

      // Map abbreviated day names to full day names
      const dayMap = {
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday",
        sun: "Sunday",
      };

      // Find start and end day indices
      let startDayIndex = days.findIndex((day) =>
        day.toLowerCase().startsWith(startDay.toLowerCase())
      );
      let endDayIndex = days.findIndex((day) =>
        day.toLowerCase().startsWith(endDay.toLowerCase())
      );

      // Try abbreviated day matching if not found
      if (startDayIndex === -1 && dayMap[startDay.toLowerCase()]) {
        startDayIndex = days.indexOf(dayMap[startDay.toLowerCase()]);
      }
      if (endDayIndex === -1 && dayMap[endDay.toLowerCase()]) {
        endDayIndex = days.indexOf(dayMap[endDay.toLowerCase()]);
      }

      if (startDayIndex !== -1 && endDayIndex !== -1) {
        // Handle wrapping around (e.g., "Fri-Mon")
        if (startDayIndex > endDayIndex) {
          for (let i = startDayIndex; i < days.length; i++) {
            specificHours[days[i]] = [{ from, to }];
          }
          for (let i = 0; i <= endDayIndex; i++) {
            specificHours[days[i]] = [{ from, to }];
          }
        } else {
          for (let i = startDayIndex; i <= endDayIndex; i++) {
            specificHours[days[i]] = [{ from, to }];
          }
        }
      }
    }

    if (foundSpecificDays) {
      return days.map((day) => ({
        day,
        availableHours: specificHours[day] || [],
      }));
    }

    // Standard time range for all days
    const [from, to] = parseTimeRange(hoursString);
    return days.map((day) => ({
      day,
      availableHours: [{ from, to }],
    }));
  }

  // Default fallback for all other cases
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

  const cleanedRange = timeRange.replace(/\(.*\)/g, "").trim();

  // Enhanced pattern to match various time formats
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

  // Clean the input string
  timeStr = timeStr.trim().toLowerCase();

  // Extract AM/PM
  if (timeStr.includes("am")) {
    modifier = "AM";
    timeStr = timeStr.replace("am", "").trim();
  } else if (timeStr.includes("pm")) {
    modifier = "PM";
    timeStr = timeStr.replace("pm", "").trim();
  }

  if (timeStr.includes(":")) {
    // Has hours and minutes format (e.g., "9:30")
    [hours, minutes] = timeStr.split(":");
    if (!modifier && (minutes.includes("a") || minutes.includes("p"))) {
      if (minutes.includes("a")) modifier = "AM";
      else if (minutes.includes("p")) modifier = "PM";
      minutes = minutes.replace(/[ap]\.?m?\.?/i, "").trim();
    }
  } else {
    // Only hours (e.g., "9")
    hours = timeStr;
    minutes = "00";
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

  return `${String(hours).padStart(2, "0")}:${String(parseInt(minutes, 10)).padStart(2, "0")}`;
}

// Convert 24-hour format to 12-hour format with AM/PM
function convertTo12Hour(timeStr) {
  if (!timeStr) return "9:00 AM";

  // Split hours and minutes
  const [hours, minutes] = timeStr.split(":").map((num) => parseInt(num, 10));

  // Determine AM/PM
  const period = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  let displayHours = hours % 12;
  if (displayHours === 0) displayHours = 12; // 0 should display as 12 in 12-hour format

  // Format minutes with leading zero if needed
  const displayMinutes = minutes.toString().padStart(2, "0");

  // Return formatted time
  return `${displayHours}:${displayMinutes} ${period}`;
}

// Generate camelCase identifier for variable names
function generateVarName(city, region) {
  // Convert city name to camelCase
  city = city.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());

  // Remove spaces and special characters from region and convert to camelCase
  region = region.toLowerCase().replace(/\s+/g, "").replace(/[-_]/g, "");

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
      .map(([key, value]) => {
        // Convert time format for 'from' and 'to' properties
        if (
          (key === "from" || key === "to") &&
          typeof value === "string" &&
          value.includes(":")
        ) {
          return `${key}: "${convertTo12Hour(value)}"`;
        }
        return `${key}: ${stringifyObject(value, indentLevel + 2)}`;
      })
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
  } else if (regionCurrencyMapping[region]) {
    currency =
      regionCurrencyMapping[region[Math.floor(Math.random() * region.length)]];
  }

  // Create variable name for the attractions array - using modified function
  const varName = generateVarName(citySlug, region);

  // Build TypeScript content
  const fileContent = `// This file is auto-generated. Do not edit manually.
import { Attraction } from "@/lib/interfaces/services/attractions";

export const ${varName}: Attraction[] = ${stringifyObject(attractions)};
`;

  // Ensure directory exists
  const destDir = path.join(
    __dirname,
    "../src/lib/constants/destinations/city-attractions"
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

function generateAttractions(city, cityIndex) {
  const result = {};
  let cityCount = 0;
  let attractionCount = 0;

  // Skip cities that don't match our filter if provided
  if (options.city && !city.includes(options.city)) {
    return;
  }

  result[city] = {};
  cityCount++;

  let attractionIndex = 0; // Add counter for attractions within a city
  for (const attractionName in attractionBasicInfo[city]) {
    const basicInfo = attractionBasicInfo[city][attractionName];
    const detailInfo = attractionDetails[city]?.[attractionName] || {};

    // Skip attractions that don't match our price filter if provided
    if (options.price && detailInfo.priceRange !== options.price) {
      return;
    }

    attractionCount++;

    // Use both cityIndex and attractionIndex for unique IDs that can be referenced by tours
    const id = `attraction-${removeAccents(city).toLowerCase().replace(/\s+/g, "-")}-${cityIndex + 1}-${attractionIndex + 1}`;
    attractionIndex++; // Increment attraction index

    // Parse opening hours with improved function
    let openingHours;
    try {
      openingHours = parseOpeningHours(detailInfo.openingHours);

      // Convert all opening hours to 12-hour format
      if (Array.isArray(openingHours)) {
        openingHours = openingHours.map((daySchedule) => {
          if (
            daySchedule.availableHours &&
            Array.isArray(daySchedule.availableHours)
          ) {
            return {
              ...daySchedule,
              availableHours: daySchedule.availableHours.map((hours) => ({
                from: hours.from,
                to: hours.to,
              })),
            };
          }
          return daySchedule;
        });
      }
    } catch (e) {
      console.warn(
        `Error parsing opening hours for ${attractionName} in ${city}: ${e.message}`,
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
      id,
      city: `${formatKebebToTitleCase(city)}`,
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

  // Write combined JSON data
  const outputDir = path.join(__dirname, "../src/data");
  ensureDirectoryExists(outputDir);

  fs.writeFileSync(
    path.join(outputDir, "attractions.json"),
    JSON.stringify(result, null, 2),
  );

  console.log(
    `Generated attractions data for ${cityCount} cities with ${attractionCount} total attractions.`,
  );
}

// Execute the script
let globalIndex = 0; // Move index declaration outside the loop
for (const city in attractionBasicInfo) {
  generateAttractions(city, globalIndex);
  globalIndex++; // Increment only after processing each city
}
