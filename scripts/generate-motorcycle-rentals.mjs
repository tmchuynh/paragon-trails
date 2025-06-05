/**
 * Motorcycle Rentals Generator Script
 * =================================
 *
 * This script generates realistic motorcycle rental data for city destinations in the Paragon Trails application.
 * It creates detailed motorcycle listings with properties like make, model, specifications,
 * features, pricing, and rental requirements for each city.
 *
 * Features:
 * - Generates 3-10 motorcycles per city by default
 * - Creates appropriate folder structure in src/lib/constants/rentals/motorcycles
 * - Includes diverse motorcycle types (cruiser, touring, sport, etc.)
 * - Generates realistic specifications, features, and requirements
 * - Adapts currency based on location (country/region)
 * - Creates pickup and drop-off location information
 *
 * Usage: node scripts/generate-motorcycle-rentals.mjs [options]
 *
 * Options:
 *   --rewrite, -r       Rewrite existing files instead of skipping them
 *   --append N, -a N    Append N new motorcycles to existing files
 *   --city C, -c C      Process only cities matching the search term
 *
 * Examples:
 *   node scripts/generate-motorcycle-rentals.mjs --rewrite
 *   node scripts/generate-motorcycle-rentals.mjs --append 3
 *   node scripts/generate-motorcycle-rentals.mjs --city "Hong Kong" --append 3
 */

import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";
import { getCityFiles } from "./utils/file-utils.mjs";
import {
  formatCamelCaseToTitle,
  formatKebabToCamelCase,
  formatTitleToCamelCase,
  removeAccents,
} from "./utils/format-utils.mjs";
import {
  cityCountryMap,
  cityToRegionMap,
  countryCurrencyMap,
  euroCountries,
  regionCurrencyMap,
} from "./utils/geo-utils.mjs";
import {
  createObjectParser,
  extractObjectsFromFile,
} from "./utils/parse-utils.mjs";

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

// Motorcycle data components
const motorcycleMakes = [
  "Harley-Davidson",
  "Honda",
  "Yamaha",
  "Kawasaki",
  "Suzuki",
  "BMW",
  "Ducati",
  "Triumph",
  "KTM",
  "Indian",
  "Victory",
  "Aprilia",
  "Moto Guzzi",
  "Royal Enfield",
  "Husqvarna",
];

const motorcycleModels = {
  "Harley-Davidson": [
    "Road King",
    "Street Glide",
    "Fat Boy",
    "Sportster",
    "Electra Glide",
    "Road Glide",
    "Softail",
  ],
  Honda: [
    "CB500X",
    "Africa Twin",
    "Gold Wing",
    "Rebel",
    "CBR1000RR",
    "Shadow",
    "CRF450L",
  ],
  Yamaha: [
    "MT-09",
    "YZF-R1",
    "Super Ténéré",
    "V Star",
    "MT-07",
    "FZ-09",
    "Bolt",
  ],
  Kawasaki: [
    "Ninja",
    "Vulcan",
    "Versys",
    "Z900",
    "Z650",
    "Concours",
    "Ninja 650",
  ],
  Suzuki: [
    "GSX-R1000",
    "V-Strom",
    "Boulevard",
    "Hayabusa",
    "SV650",
    "DR-Z400",
    "GSX-S750",
  ],
  BMW: ["R1250GS", "S1000RR", "F850GS", "K1600", "R nineT", "F750GS", "G310R"],
  Ducati: [
    "Panigale",
    "Monster",
    "Multistrada",
    "Diavel",
    "Scrambler",
    "Hypermotard",
    "SuperSport",
  ],
  Triumph: [
    "Street Triple",
    "Tiger",
    "Bonneville",
    "Speed Triple",
    "Rocket 3",
    "Thruxton",
    "Scrambler",
  ],
  KTM: [
    "1290 Super Duke",
    "790 Adventure",
    "690 Enduro",
    "390 Duke",
    "1290 Super Adventure",
    "RC390",
    "690 SMC",
  ],
  Indian: [
    "Chief",
    "Scout",
    "Chieftain",
    "FTR",
    "Roadmaster",
    "Springfield",
    "Challenger",
  ],
  Victory: [
    "Cross Country",
    "Hammer",
    "Vegas",
    "Vision",
    "High-Ball",
    "Gunner",
    "Octane",
  ],
  Aprilia: [
    "RSV4",
    "Tuono",
    "Dorsoduro",
    "Shiver",
    "RS 660",
    "Caponord",
    "SX 125",
  ],
  "Moto Guzzi": [
    "V7",
    "V85 TT",
    "California",
    "Eldorado",
    "Audace",
    "Griso",
    "Norge",
  ],
  "Royal Enfield": [
    "Himalayan",
    "Classic 350",
    "Interceptor 650",
    "Continental GT",
    "Bullet",
    "Meteor",
    "Hunter",
  ],
  Husqvarna: [
    "Vitpilen 701",
    "Svartpilen 401",
    "FE 501",
    "701 Enduro",
    "701 Supermoto",
    "TE 300i",
    "FX 450",
  ],
};

const motorcycleTypes = [
  "cruiser",
  "touring",
  "sport",
  "standard",
  "dual-sport",
  "scooter",
  "custom",
];

const engineSizes = [
  "125cc",
  "250cc",
  "500cc",
  "650cc",
  "750cc",
  "900cc",
  "1000cc",
  "1200cc",
  "1400cc",
];

const colors = [
  "Black",
  "Red",
  "Blue",
  "White",
  "Silver",
  "Green",
  "Yellow",
  "Orange",
  "Gray",
  "Brown",
  "Matte Black",
];

const motorcycleFeatures = [
  "ABS",
  "GPS Navigation",
  "Bluetooth Audio",
  "USB Charging",
  "Heated Grips",
  "Saddlebags",
  "Windshield",
  "Cruise Control",
  "Security System",
  "Custom Exhaust",
  "Helmet Included",
  "Phone Mount",
  "Backrest",
];

const motorcycleRequirements = [
  "Valid Motorcycle License",
  "Minimum Age 21",
  "Security Deposit Required",
  "Helmet Required",
  "Credit Card Required",
  "Experience with Manual Transmission",
  "No DUI Record",
  "Insurance Required",
  "Signed Waiver",
  "Local Riding Permit",
  "Two-Wheel Experience",
  "International Driving Permit (for foreign renters)",
];

const locations = [
  "Downtown",
  "Airport",
  "Tourist District",
  "City Center",
  "Marina",
  "Convention Center",
  "Near Beach",
  "Transit Hub",
  "Shopping District",
  "Entertainment District",
];

// Generate a motorcycle with all required properties
function generateMotorcycle(cityName, index) {
  const country = cityCountryMap[cityName] || "";
  const region = cityToRegionMap[cityName] || "";

  // Determine currency based on country, with fallbacks
  let currency;
  if (euroCountries.includes(country)) {
    currency = "EUR";
  } else if (countryCurrencyMap[country]) {
    currency = countryCurrencyMap[country];
  } else if (regionCurrencyMap[region]) {
    currency = regionCurrencyMap[region];
  } else {
    currency = "USD"; // Default fallback
  }

  const make =
    motorcycleMakes[Math.floor(Math.random() * motorcycleMakes.length)];
  const models = motorcycleModels[make] || ["Standard"];
  const model = models[Math.floor(Math.random() * models.length)];

  const year = Math.floor(Math.random() * 5) + 2019; // 2019-2023
  const type =
    motorcycleTypes[Math.floor(Math.random() * motorcycleTypes.length)];
  const engineSize =
    engineSizes[Math.floor(Math.random() * engineSizes.length)];
  const transmission = Math.random() > 0.3 ? "manual" : "automatic";
  const color = colors[Math.floor(Math.random() * colors.length)];
  const seatCapacity = Math.random() > 0.7 ? 2 : 1;
  const hasStorage = Math.random() > 0.5;

  // Generate random features
  const numFeatures = Math.floor(Math.random() * 5) + 1;
  const features = Array.from(
    new Set(
      Array(numFeatures)
        .fill(0)
        .map(
          () =>
            motorcycleFeatures[
              Math.floor(Math.random() * motorcycleFeatures.length)
            ]
        )
    )
  );

  // Generate random requirements
  const numRequirements = Math.floor(Math.random() * 4) + 2;
  const requirements = Array.from(
    new Set(
      Array(numRequirements)
        .fill(0)
        .map(
          () =>
            motorcycleRequirements[
              Math.floor(Math.random() * motorcycleRequirements.length)
            ]
        )
    )
  );

  // Always include "Valid Motorcycle License" as a requirement
  if (!requirements.includes("Valid Motorcycle License")) {
    requirements.unshift("Valid Motorcycle License");
  }

  const rentalPricePerDay = Math.floor(Math.random() * 150) + 50; // $50-$200
  const available = Math.random() > 0.3; // 70% available
  const location = locations[Math.floor(Math.random() * locations.length)];

  // Generate pickup location (if different from city location)
  const pickUpLocation = location;

  // Decide if drop-off will be different from pick-up (30% chance)
  const hasDifferentDropOff = Math.random() < 0.3;
  const dropOffCity = hasDifferentDropOff
    ? cities[Math.floor(Math.random() * cities.length)]
    : cityName;

  const dropOffCountry = hasDifferentDropOff
    ? cityCountryMap[dropOffCity] || country
    : country;

  const dropOffLocation = hasDifferentDropOff
    ? locations[Math.floor(Math.random() * locations.length)]
    : pickUpLocation;

  return {
    id: `motorcycle-${cityName}-${make.toLowerCase().replace(/\s+/g, "-")}-${index}`,
    make,
    model,
    year,
    type,
    engineSize,
    transmission,
    color,
    seatCapacity,
    hasStorage,
    features,
    rentalPricePerDay,
    currency, // Location-based currency
    available,
    pickUpCity: `${formatCamelCaseToTitle(cityName)}`,
    pickUpCountry: country,
    pickUpLocation,
    // Only include drop-off properties if they're different from pick-up
    ...(hasDifferentDropOff
      ? {
          dropOffCity,
          dropOffCountry,
          dropOffLocation,
        }
      : {}),
    imageUrl: `https://paragon-trails-motorcycle-images.com/${type}/${make.toLowerCase().replace(/\s+/g, "-")}-${model.toLowerCase().replace(/\s+/g, "-")}.jpg`,
    requirements,
    availability: available, // For backward compatibility
    location,
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

// Extract existing motorcycles from a file
async function extractExistingMotorcycles(filePath) {
  // Create a motorcycle template with default/empty values
  const motorcycleTemplate = {
    id: "",
    make: "",
    model: "",
    year: 2023,
    type: "",
    engineSize: "",
    transmission: "",
    color: "",
    seatCapacity: 1,
    hasStorage: false,
    features: [],
    rentalPricePerDay: 0,
    currency: "USD",
    available: true,
    pickUpCity: "",
    pickUpCountry: "",
    pickUpLocation: "",
    imageUrl: "",
    requirements: [],
    availability: true,
    location: "",
  };

  // Use the shared utility with a motorcycle-specific parser
  const motorcycleParser = createObjectParser(motorcycleTemplate);
  const motorcycles = await extractObjectsFromFile(
    filePath,
    "Motorcycle",
    motorcycleParser
  );

  // Add validation to prevent errors with null/empty motorcycles array
  if (!motorcycles || !Array.isArray(motorcycles) || motorcycles.length === 0) {
    console.warn(
      `Could not parse existing motorcycles in ${filePath}, will create fresh data`
    );
    return [];
  }

  return motorcycles;
}

// Generate motorcycles and write to file
async function generateCityFile(city) {
  const countryName = cityCountryMap[city] || "";
  const regionName = cityToRegionMap[city] || "";

  const formattedCountry = formatTitleToCamelCase(removeAccents(countryName));
  const formattedRegion = formatTitleToCamelCase(removeAccents(regionName));
  const formattedName = formatKebabToCamelCase(removeAccents(city));

  const variableName = `${formattedName}${formattedCountry}${formattedRegion}Motorcycles`;

  const destDir = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "rentals",
    "motorcycles"
  );
  const filePath = path.join(destDir, `${city}.ts`);

  // Check if directory exists
  await ensureDirectoryExists(destDir);

  // Check if file exists
  const exists = await fileExists(filePath);

  // Handle existing file based on options
  let motorcycles = [];
  if (exists) {
    if (options.rewrite) {
      console.log(`Rewriting existing file: ${filePath}`);
    } else if (options.append) {
      console.log(`Appending ${options.append} motorcycles to: ${filePath}`);
      motorcycles = await extractExistingMotorcycles(filePath);

      // Add validation to prevent errors with null/empty motorcycles array
      if (!motorcycles || !Array.isArray(motorcycles)) {
        console.warn(
          `Could not parse existing motorcycles in ${filePath}, creating a new file instead`
        );
        motorcycles = [];
      }
    } else {
      console.log(
        `File already exists (use --rewrite to replace): ${filePath}`
      );
      return;
    }
  }

  // Generate motorcycles
  const numNewMotorcycles = options.append || Math.floor(Math.random() * 7) + 3; // 3-10 motorcycles
  const newMotorcycles = Array(numNewMotorcycles)
    .fill(0)
    .map((_, index) =>
      generateMotorcycle(city, motorcycles.length + index + 1)
    );

  // Combine existing and new motorcycles
  motorcycles = motorcycles.concat(newMotorcycles);

  // Create file content with proper formatting
  let content = `import { Motorcycle } from "@/lib/interfaces/services/rentals";\n\n`;
  content += `export const ${variableName}: Motorcycle[] = [\n`;

  motorcycles.forEach((motorcycle, index) => {
    content += `  {\n`;
    // Add null check to prevent TypeError
    if (motorcycle) {
      for (const [key, value] of Object.entries(motorcycle)) {
        if (typeof value === "string") {
          content += `    ${key}: "${value}",\n`;
        } else if (typeof value === "boolean") {
          content += `    ${key}: ${value},\n`;
        } else if (typeof value === "number") {
          content += `    ${key}: ${value},\n`;
        } else if (Array.isArray(value)) {
          content += `    ${key}: [${value
            .map((item) => `"${item}"`)
            .join(", ")}],\n`;
        } else {
          content += `    ${key}: ${value},\n`;
        }
      }
    }
    content += `  }${index < motorcycles.length - 1 ? "," : ""}\n`;
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
  .then(() => console.log("Motorcycle rental files generated successfully!"))
  .catch((error) =>
    console.error("Error generating motorcycle rental files:", error)
  );

// Print usage information
console.log(`
Usage: node scripts/generate-motorcycle-rentals.mjs [options]

Options:
  --rewrite, -r       Rewrite existing files instead of skipping them
  --append N, -a N    Append N new motorcycles to existing files
  --city C, -c C      Process only cities matching the search term

Examples:
  node scripts/generate-motorcycle-rentals.mjs --rewrite
  node scripts/generate-motorcycle-rentals.mjs --append 3 
  node scripts/generate-motorcycle-rentals.mjs --city "Tokyo"
`);
