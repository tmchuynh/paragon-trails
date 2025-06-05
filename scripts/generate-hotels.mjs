import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";
import { getCityFiles } from "./utils/file-utils.mjs";
import {
  formatKebabToCamelCase,
  removeAccents,
} from "./utils/format-utils.mjs";
import {
  cityCountryMap,
  cityToRegionMap,
  countryCurrencyMap,
  euroCountries,
  regionCurrencyMap,
} from "./utils/geo-utils.mjs";

// Utility functions for file operations
// Rewrite Flag: Use --rewrite or -r to overwrite existing files instead of skipping them
// node scripts/generate-hotels.mjs --rewrite

// Append Flag: Use --append N or -a N to add N new hotels to existing files
// node scripts/generate-hotels.mjs --append 5

// City Filter: Use --city "CityName" or -c "CityName" to process only specific cities
// node scripts/generate-hotels.mjs --city "Tokyo"

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

// Hotel data components
const hotelNames = [
  "Grand Plaza",
  "Royal Suites",
  "Harbour View",
  "Metropolitan",
  "Imperial Palace",
  "Ocean Breeze",
  "Sunset Resort",
  "Skyline Hotel",
  "Continental",
  "Heritage Inn",
  "Oasis Retreat",
  "Diamond Bay",
  "Riverside Lodge",
  "Golden Star",
  "City Lights Hotel",
  "The Peninsula",
  "Four Seasons",
  "The Ritz",
  "Luxury Collection",
  "Waldorf Astoria",
];

const accommodationTypes = [
  "Hotel",
  "Resort",
  "Boutique Hotel",
  "Hostel",
  "Bed and Breakfast",
  "Guesthouse",
  "Eco-Lodge",
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
  "Pet Friendly",
  "Business Center",
];

const accessibilityFeatures = [
  "Wheelchair Accessible",
  "Elevator",
  "Accessible Bathroom",
  "Visual Aids",
  "Hearing Support",
];

const smokingPolicies = ["Allowed", "Not Allowed", "Designated Areas"];

const cancellationPolicies = [
  "Free cancellation up to 24 hours before check-in",
  "Free cancellation up to 48 hours before check-in",
  "Free cancellation up to 72 hours before check-in",
  "No refunds for cancellations",
  "50% refund for cancellations made 7 days before check-in",
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
  if (regionName && regionCurrencyMap[regionName]) {
    return regionCurrencyMap[regionName];
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

// Generate a random email
function getRandomEmail(hotelName, city) {
  const cleanHotelName = hotelName.toLowerCase().replace(/\s+/g, "");
  const cleanCity = city.toLowerCase().replace(/-/g, "");
  return `info@${cleanHotelName}${cleanCity}.com`;
}

// Generate random subset of array elements
function getRandomSubset(array, minItems, maxItems) {
  const numItems =
    Math.floor(Math.random() * (maxItems - minItems + 1)) + minItems;
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
}

// Generate a hotel with all required properties
function generateHotel(city, index) {
  const hotelName = `${hotelNames[Math.floor(Math.random() * hotelNames.length)]} ${city}`;
  const rating = Math.floor(Math.random() * 2) + 3; // 3-5 stars
  const accommodationType =
    accommodationTypes[Math.floor(Math.random() * accommodationTypes.length)];

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

  const contactEmail = getRandomEmail(hotelName, city);
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
          const cleanedItem = currentItem.replace(/,\s*$/, "");
          const obj = new Function(`return ${cleanedItem}`)();
          items.push(obj);
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

// Generate hotels and write to file
async function generateCityFile(city) {
  const formattedName = formatKebabToCamelCase(removeAccents(city));
  const variableName = `${formattedName}Hotels`;

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
    } else if (options.append) {
      console.log(`Appending ${options.append} hotels to: ${filePath}`);
      hotels = await extractExistingHotels(filePath);
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
  let content = `import { Hotel } from "@/lib/interfaces/services/rentals";\n\n`;
  content += `export const ${variableName}: Hotel[] = [\n`;

  hotels.forEach((hotel, index) => {
    content += `  {\n`;
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
  .then(() => console.log("Hotel files generated successfully!"))
  .catch((error) => console.error("Error generating hotel files:", error));

// Print usage information
console.log(`
Usage: node generate-hotels.mjs [options]

Options:
  --rewrite, -r       Rewrite existing files instead of skipping them
  --append N, -a N    Append N new hotels to existing files
  --city C, -c C      Process only cities matching the search term

Examples:
  node generate-hotels.mjs --rewrite
  node generate-hotels.mjs --append 3
  node generate-hotels.mjs --city "Tokyo"
`);
