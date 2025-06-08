/**
 * Hotel Data Generator Script
 * ===========================
 *
 * This script generates realistic hotel data for city destinations in the Paragon Trails application.
 * It creates structured hotel information with properties like name, address, amenities, policies,
 * and contact details for each city in the application.
 *
 * Features:
 * - Generates 3-8 hotels per city by default
 * - Creates appropriate folder structure in src/lib/constants/destinations/hotels
 * - Supports country-specific naming conventions and address formats
 * - Uses realistic data with proper formatting and structure
 *
 * Usage: node scripts/generate-hotels.mjs [options]
 *
 * Options:
 *   --rewrite, -r             Rewrite existing files instead of skipping them
 *   --append N, -a N          Append N new hotels to existing files
 *   --append-default, -d      Append 3 new hotels to existing files (default amount)
 *   --city C, -c C            Process only cities matching the search term
 *
 * Examples:
 *   node scripts/generate-hotels.mjs --rewrite
 *   node scripts/generate-hotels.mjs --append 5
 *   node scripts/generate-hotels.mjs --append-default
 *   node scripts/generate-hotels.mjs --city "Tokyo"
 *   node scripts/generate-hotels.mjs --city "Paris" --append-default
 */

import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";
import { getCityFiles, getRandomEmail } from "./utils/file-utils.mjs";
import {
  formatKebabToCamelCase,
  removeAccents,
} from "./utils/format-utils.mjs";
import {
  cityCountryMap,
  cityToRegionMap,
  countryCurrencyMap,
  euroCountries,
  regionCurrencyMapping,
} from "./utils/geo-utils.mjs";
import {
  hotelNames,
  streetNames,
  streetPrefixes,
  streetSuffixes,
} from "./utils/shared-hotel-data.mjs";
import { getSecureRandomInt } from "./utils/data-generator.mjs";

const cities = getCityFiles();

// Add check for empty cities array
if (!cities || cities.length === 0) {
  console.error("No cities found. Check the city-data.json file.");
  process.exit(1);
}

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
    appendDefault: false,
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

    if (arg === "--append-default" || arg === "-d") {
      options.appendDefault = true;
      options.append = 3; // Default to adding 3 hotels
    }

    if ((arg === "--city" || arg === "-c") && i + 1 < args.length) {
      options.cityFilter = args[++i];
    }
  }

  return options;
}

const options = parseCommandLineArgs();

const accommodationTypes = [
  "Hotel",
  "Resort",
  "Boutique Hotel",
  "Hostel",
  "Bed and Breakfast",
  "Guesthouse",
  "Eco-Lodge",
  "Motel",
  "Serviced Apartment",
  "Vacation Rental",
  "Luxury Hotel",
  "Business Hotel",
  "Spa Hotel",
  "All-Inclusive Resort",
  "Family Resort",
  "Boutique Resort",
  "Luxury Lodge",
  "Glamping Resort",
  "Extended Stay Hotel",
  "Luxury Villa",
  "Chalet",
  "Boutique Inn",
];

const amenityTypes = [
  "Free Wi-Fi",
  "Swimming Pool",
  "Fitness Center",
  "Spa",
  "Parking",
  "Restaurant",
  "Bar",
  "Room Service",
  "Airport Shuttle",
  "Business Center",
  "Laundry Service",
  "24-Hour Front Desk",
  "Conference Room",
  "Non-Smoking Rooms",
];

const accessibilityFeatures = [
  "Wheelchair Accessible",
  "Elevator",
  "Accessible Bathroom",
  "Visual Aids",
  "Hearing Support",
  "Braille Signage",
  "Accessible Parking",
  "Visual Alarm",
  "Hearing Loop",
  "Grab Bars",
  "Accessible Shower",
  "Lowered Light Switches",
  "Accessible Pathways",
  "Assistive Listening Devices",
  "Sign Language Interpretation",
  "Tactile Maps",
  "Large Print Materials",
];

const smokingPolicies = ["Allowed", "Not Allowed", "Designated Areas"];

const cancellationPolicies = [
  "Free cancellation up to 24 hours before check-in. If cancelled later, the first night will be charged.",
  "Free cancellation up to 48 hours before check-in. If cancelled later, the first night will be charged.",
  "Free cancellation up to 72 hours before check-in. If cancelled later, the first night will be charged.",
  "No refunds for cancellations.",
  "50% refund for cancellations made at least 7 days before check-in.",
  "Full refund if cancelled within 48 hours of booking, minus service fees.",
  "Free cancellation within 24 hours of booking; after that, 25% fee applies.",
  "Free cancellation up to 14 days before check-in; 50% refund for cancellations made within 14 days.",
  "Non-refundable; full amount charged at time of booking.",
  "Cancellation made less than 3 days before check-in will incur a 75% charge.",
  "Free cancellation up to 7 days before arrival; no refund after that.",
  "Flexible cancellation policy: free cancellation up to 12 hours before check-in.",
  "Partial refund available if cancelled more than 5 days in advance.",
  "No cancellation fee if rebooking within 30 days; otherwise, fees apply.",
  "Cancellation fee equivalent to one night's stay if cancelled less than 48 hours before check-in.",
];

// Get currency for a city based on country and region
function getCurrencyForCity(city) {
  const countryName = cityCountryMap[city] || "";
  const regionName = cityToRegionMap[city] || "";

  // First check if country has specific currency
  if (countryName && countryCurrencyMap[countryName]) {
    return countryCurrencyMap[countryName];
  }

  // Check if it's a Euro country
  if (countryName && euroCountries.includes(countryName)) {
    return "EUR";
  }

  // Check if region has default currency
  if (regionName && regionCurrencyMapping[regionName]) {
    return regionCurrencyMapping[
      regionName[Math.floor(Math.random() * regionName.length)]
    ];
  }

  // Default to USD
  return "USD";
}

// Generate random check-in/out times
function getRandomTime(startHour, endHour) {
  const hour =
    Math.floor(Math.random() * (endHour - startHour + 1)) + startHour;
  return `${hour.toString().padStart(2, "0")}:00`;
}

// Generate a random phone number
function getRandomPhone() {
  let phone = "+";
  // Country code (1-3 digits)
  phone += Math.floor(Math.random() * 900) + 1;
  // Space
  phone += " ";
  // Area code (3 digits)
  phone += Math.floor(Math.random() * 900) + 100;
  // Separator
  phone += "-";
  // First part (3 digits)
  phone += Math.floor(Math.random() * 900) + 100;
  // Separator
  phone += "-";
  // Second part (4 digits)
  phone += Math.floor(Math.random() * 9000) + 1000;

  return phone;
}

// Generate random subset of array elements
function getRandomSubset(array, minItems, maxItems) {
  const numItems =
    Math.floor(Math.random() * (maxItems - minItems + 1)) + minItems;
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
}

// Generate a random address based on the city and country
function generateAddress(_city, country) {
  // Get appropriate street suffix for the country
  const suffixes = streetSuffixes[country] || streetSuffixes["default"];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  // Get country-specific street names or use default
  const countryStreetNames = streetNames[country] || streetNames["default"];
  const streetName =
    countryStreetNames[Math.floor(Math.random() * countryStreetNames.length)];

  // Generate random building number
  const buildingNumber = Math.floor(Math.random() * 300) + 1;

  // Add street prefix with 40% probability
  const prefixes = streetPrefixes[country] || streetPrefixes["default"];
  const usePrefix = Math.random() < 0.4;
  const prefix = usePrefix
    ? `${prefixes[Math.floor(Math.random() * prefixes.length)]} `
    : "";

  // For some countries, building number comes after street name
  if (["Japan", "China", "South Korea"].includes(country)) {
    return `${prefix}${streetName} ${suffix} ${buildingNumber}`;
  }

  // For most countries, building number comes first
  return `${buildingNumber} ${prefix}${streetName} ${suffix}`;
}

// Generate a hotel with all required properties
function generateHotel(city, index) {
  // Get country for this city
  const country = cityCountryMap[city] || "";

  // Get country-specific hotel names or use default
  const countryHotelNames = hotelNames[country] || hotelNames["default"];
  const hotelName = `${countryHotelNames[getSecureRandomInt(countryHotelNames.length)]}`;

  const rating = Math.floor(Math.random() * 2) + 3; // 3-5 stars
  const accommodationType =
    accommodationTypes[Math.floor(Math.random() * accommodationTypes.length)];

  // Generate address
  const address = generateAddress(city, country);

  // Random amenities (5-10)
  const hotelAmenities = getRandomSubset(amenityTypes, 5, 10);

  // Random accessibility features (0-3)
  const hotelAccessibility =
    Math.random() > 0.3
      ? getRandomSubset(accessibilityFeatures, 1, 3)
      : undefined;

  const checkInTime = getRandomTime(13, 16); // 13:00 - 16:00
  const checkOutTime = getRandomTime(10, 12); // 10:00 - 12:00

  const roomsAvailable = Math.floor(Math.random() * 50) + 10; // 10-60 rooms
  const isPetFriendly = Math.random() > 0.7; // 30% are pet friendly

  const currency = getCurrencyForCity(city);

  const contactEmail = getRandomEmail(hotelName);
  const contactPhone = getRandomPhone();

  const cancellationPolicy =
    cancellationPolicies[
      Math.floor(Math.random() * cancellationPolicies.length)
    ];
  const smokingPolicy =
    smokingPolicies[Math.floor(Math.random() * smokingPolicies.length)];

  const isPopular = Math.random() > 0.7; // 30% are popular

  return {
    id: `hotel-${city}-${index}`,
    name: hotelName,
    address,
    rating,
    accommodationType,
    amenities: hotelAmenities,
    accessibilityFeatures: hotelAccessibility,
    checkInTime,
    checkOutTime,
    roomsAvailable,
    isPetFriendly,
    currency,
    contact: {
      contactEmail,
      contactPhone,
    },
    policies: {
      cancellation: cancellationPolicy,
      smoking: smokingPolicy,
    },
    isPopular,
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

// Extract existing hotels from a file
async function extractExistingHotels(filePath) {
  try {
    const content = await readFile(filePath, "utf-8");
    const match = content.match(
      /export const \w+: Hotel\[\] = \[([\s\S]*?)\];/
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
          // Instead of using Function constructor (eval), manually parse
          // the object using RegExp to extract key properties
          const hotel = parseHotelObject(currentItem);
          if (hotel) {
            items.push(hotel);
          }
          currentItem = "";
        } catch (e) {
          console.warn("Failed to parse hotel:", e);
          currentItem = "";
        }
      }
    }

    return items;
  } catch (e) {
    console.error("Error extracting hotels:", e);
    return [];
  }
}

// Parse hotel object string using regex for key properties
function parseHotelObject(objString) {
  // Make sure it's a valid object string
  if (!objString.trim().startsWith("{") || !objString.trim().endsWith("}")) {
    return null;
  }

  // Create a hotel object with default values
  const hotel = {
    amenities: [],
    contact: { contactEmail: "", contactPhone: "" },
    policies: { cancellation: "", smoking: "" },
  };

  // Extract id
  const idMatch = objString.match(/id:\s*"([^"]+)"/);
  if (idMatch) hotel.id = idMatch[1];

  // Extract name
  const nameMatch = objString.match(/name:\s*"([^"]+)"/);
  if (nameMatch) hotel.name = nameMatch[1];

  // Extract address
  const addressMatch = objString.match(/address:\s*"([^"]+)"/);
  if (addressMatch) hotel.address = addressMatch[1];

  // Extract rating as number
  const ratingMatch = objString.match(/rating:\s*(\d+)/);
  if (ratingMatch) hotel.rating = parseInt(ratingMatch[1], 10);

  // Extract accommodationType
  const typeMatch = objString.match(/accommodationType:\s*"([^"]+)"/);
  if (typeMatch) hotel.accommodationType = typeMatch[1];

  // Extract checkInTime
  const checkInMatch = objString.match(/checkInTime:\s*"([^"]+)"/);
  if (checkInMatch) hotel.checkInTime = checkInMatch[1];

  // Extract checkOutTime
  const checkOutMatch = objString.match(/checkOutTime:\s*"([^"]+)"/);
  if (checkOutMatch) hotel.checkOutTime = checkOutMatch[1];

  // Extract roomsAvailable
  const roomsMatch = objString.match(/roomsAvailable:\s*(\d+)/);
  if (roomsMatch) hotel.roomsAvailable = parseInt(roomsMatch[1], 10);

  // Extract isPetFriendly
  const petMatch = objString.match(/isPetFriendly:\s*(true|false)/);
  if (petMatch) hotel.isPetFriendly = petMatch[1] === "true";

  // Extract currency
  const currencyMatch = objString.match(/currency:\s*"([^"]+)"/);
  if (currencyMatch) hotel.currency = currencyMatch[1];

  // Extract isPopular
  const popularMatch = objString.match(/isPopular:\s*(true|false)/);
  if (popularMatch) hotel.isPopular = popularMatch[1] === "true";

  // Extract email from contact object
  const emailMatch = objString.match(/contactEmail:\s*"([^"]+)"/);
  if (emailMatch) hotel.contact.contactEmail = emailMatch[1];

  // Extract phone from contact object
  const phoneMatch = objString.match(/contactPhone:\s*"([^"]+)"/);
  if (phoneMatch) hotel.contact.contactPhone = phoneMatch[1];

  // Extract cancellation policy
  const cancelMatch = objString.match(/cancellation:\s*"([^"]+)"/);
  if (cancelMatch) hotel.policies.cancellation = cancelMatch[1];

  // Extract smoking policy
  const smokingMatch = objString.match(/smoking:\s*"([^"]+)"/);
  if (smokingMatch) hotel.policies.smoking = smokingMatch[1];

  // Return the hotel object if we have at least the essential properties
  if (hotel.id && hotel.name) {
    return hotel;
  }

  return null;
}

// Generate hotels and write to file
async function generateCityFile(city) {
  const formattedName = removeAccents(city);
  const variableName = `${formatKebabToCamelCase(formattedName).replaceAll(".", "")}Hotels`;

  // Use camelCase for folder name
  const destDir = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "destinations",
    "hotels",
    formattedName
  );
  const filePath = path.join(destDir, "hotels.ts");

  // Check if directory exists
  await ensureDirectoryExists(destDir);

  // Check if file exists
  const exists = await fileExists(filePath);

  // Handle existing file based on options
  let hotels = [];
  if (exists) {
    if (options.rewrite) {
      console.log(`Rewriting existing file: ${filePath}`);
    } else if (options.append || options.appendDefault) {
      console.log(`Appending ${options.append} hotels to: ${filePath}`);
      hotels = await extractExistingHotels(filePath);

      // Extra validation to prevent null/empty hotels array
      if (!hotels || !Array.isArray(hotels)) {
        console.warn(
          `Could not parse existing hotels in ${filePath}, creating a new file instead`
        );
        hotels = [];
      }
    } else {
      console.log(
        `File already exists (use --rewrite to replace): ${filePath}`
      );
      return;
    }
  }

  // Generate hotels
  const numNewHotels = options.append || Math.floor(Math.random() * 5) + 3; // 3-8 hotels
  const newHotels = Array(numNewHotels)
    .fill(0)
    .map((_, index) => generateHotel(city, hotels.length + index + 1));

  // Combine existing and new hotels
  hotels = hotels.concat(newHotels);

  // Create file content with proper formatting
  let content = `// Auto-generated file for ${city} hotels\n`;
  content += `import { Hotel } from "@/lib/interfaces/services/rentals";\n\n`;
  content += `export const ${variableName}: Hotel[] = [\n`;

  hotels.forEach((hotel, index) => {
    content += `  {\n`;
    // Add null check to prevent TypeError
    if (hotel) {
      for (const [key, value] of Object.entries(hotel)) {
        if (typeof value === "string") {
          content += `    ${key}: "${value}",\n`;
        } else if (Array.isArray(value)) {
          if (value.length === 0) {
            content += `    ${key}: [],\n`;
          } else {
            content += `    ${key}: [${value.map((item) => `"${item}"`).join(", ")}],\n`;
          }
        } else if (typeof value === "object" && value !== null) {
          content += `    ${key}: {\n`;
          for (const [nestedKey, nestedValue] of Object.entries(value)) {
            if (nestedValue !== undefined) {
              content += `      ${nestedKey}: "${nestedValue}",\n`;
            }
          }
          content += `    },\n`;
        } else if (value !== undefined) {
          content += `    ${key}: ${value},\n`;
        }
      }
    }
    content += `  }${index < hotels.length - 1 ? "," : ""}\n`;
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
      city.toLowerCase().includes(filterLower),
    );

    if (citiesToProcess.length === 0) {
      console.log(`No cities found matching: ${options.cityFilter}`);
      return;
    }

    console.log(
      `Processing ${citiesToProcess.length} cities matching: ${options.cityFilter}`,
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
  .then(() => console.log("Hotel files generated successfully!"))
  .catch((error) => console.error("Error generating hotel files:", error));

// Print usage information
console.log(`
Usage: node scripts/generate-hotels.mjs [options]

Options:
  --rewrite, -r            Rewrite existing files instead of skipping them
  --append N, -a N         Append N new hotels to existing files
  --append-default, -d     Append 3 new hotels to existing files
  --city C, -c C           Process only cities matching the search term

Examples:
  node scripts/generate-hotels.mjs --rewrite
  node scripts/generate-hotels.mjs --append 3
  node scripts/generate-hotels.mjs --append-default
  node scripts/generate-hotels.mjs --city "Tokyo"
  node scripts/generate-hotels.mjs --city "Tokyo" --append-default
`);
