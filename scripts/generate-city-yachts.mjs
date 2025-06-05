/**
 * Yacht Rentals Generator Script
 * =============================
 *
 * This script generates realistic yacht rental data for city destinations in the Paragon Trails application.
 * It creates comprehensive yacht listings with properties like specifications, amenities,
 * capacity, pricing, safety features, and other details for each city.
 *
 * Features:
 * - Generates 3-7 yachts per city by default
 * - Creates appropriate folder structure in src/lib/constants/rentals/yacht
 * - Supports filtering by specific yacht types (motor, sailing, catamaran, etc.)
 * - Includes appropriate specifications based on yacht type
 * - Generates realistic amenities, entertainment options, and water toys
 * - Adapts pricing and currency based on location (country/region)
 * - Creates accessibility features and safety information
 *
 * Usage: node scripts/generate-city-yachts.mjs [options]
 *
 * Options:
 *   --rewrite, -r       Rewrite existing files instead of skipping them
 *   --append N, -a N    Append N new yachts to existing files
 *   --type T, -t T      Generate yachts of a specific type (options: motor, sailing, catamaran, gulet, mega, super)
 *   --city C, -c C      Process only cities matching the search term
 *
 * Examples:
 *   node scripts/generate-city-yachts.mjs --rewrite
 *   node scripts/generate-city-yachts.mjs --append 5
 *   node scripts/generate-city-yachts.mjs --type "mega"
 *   node scripts/generate-city-yachts.mjs --city "Hong Kong" --append 3 --type "super"
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
    yachtType: null,
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

    if ((arg === "--type" || arg === "-t") && i + 1 < args.length) {
      const value = args[++i].toLowerCase();
      const validTypes = [
        "motor",
        "sailing",
        "catamaran",
        "gulet",
        "mega",
        "super",
      ];
      if (validTypes.includes(value)) {
        options.yachtType = value;
      }
    }

    if ((arg === "--city" || arg === "-c") && i + 1 < args.length) {
      options.cityFilter = args[++i];
    }
  }

  return options;
}

const options = parseCommandLineArgs();

// Yacht data generation constants
const yachtBrands = [
  "Azimut",
  "Sunseeker",
  "Princess",
  "Ferretti",
  "Benetti",
  "Riva",
  "Pershing",
  "Feadship",
  "Lürssen",
  "Oceanco",
  "Amels",
  "Heesen",
  "Westport",
  "Horizon",
  "Sanlorenzo",
  "Perini Navi",
  "Baglietto",
  "Oyster",
  "Swan",
  "Wally",
  "Lagoon",
  "Fountaine Pajot",
  "Sunreef",
];

const yachtNames = [
  "Azure Dreams",
  "Sea Spirit",
  "Ocean Majesty",
  "Diamond Seas",
  "Royal Wave",
  "Silver Horizon",
  "Golden Voyage",
  "Sapphire Seas",
  "Emerald Waters",
  "Ruby Tides",
  "Crystal Blue",
  "Pearl Harbor",
  "Neptune's Glory",
  "Poseidon's Pride",
  "Mermaid's Song",
  "Serenity Now",
  "Aquamarine",
  "Blue Horizon",
  "Coastal Serenity",
  "Wave Dancer",
  "Sea Symphony",
  "Oceanis",
  "Atlantic Breeze",
  "Pacific Explorer",
  "Mediterranean Gem",
  "Caribbean Pearl",
  "Aegean Beauty",
  "Adriatic Splendor",
  "Baltic Star",
  "Adriatic Queen",
  "Luxury Waters",
  "Indigo Seas",
  "Azure Blue",
  "Cobalt Waters",
  "Royal Seas",
  "Sovereign Waters",
  "Elite Waves",
  "Infinity Seas",
  "Endless Horizons",
  "Euphoria",
];

const yachtAmenities = [
  "Jacuzzi",
  "Wi-Fi",
  "Air Conditioning",
  "Sun Deck",
  "BBQ Grill",
  "Outdoor Shower",
  "Indoor Lounge",
  "Bar",
  "Dining Area",
  "Swim Platform",
  "Hot Tub",
  "Sauna",
  "Heated Deck",
  "Kitchen",
  "Laundry Service",
  "Stabilizers",
  "Tender Garage",
];

const yachtEntertainment = [
  "Satellite TV",
  "Bluetooth Speakers",
  "Surround Sound System",
  "Media Library",
  "Game Console",
  "Projector",
  "Onboard Cinema",
  "Streaming Services",
  "Board Games",
  "Karaoke System",
  "DJ Equipment",
];

const yachtWaterToys = [
  "Jet Ski",
  "Paddleboards",
  "Snorkeling Gear",
  "Kayaks",
  "Water Skis",
  "Wakeboard",
  "Seabob",
  "Inflatable Slide",
  "Towable Tubes",
  "Windsurf",
  "Scuba Diving Gear",
  "Fishing Equipment",
  "Floating Island",
  "Kneeboard",
  "E-Foil",
];

const cateringOptions = [
  "Full-Service Catering",
  "Self-Catering",
  "Chef Onboard",
  "Provisioning Only",
  "Breakfast Only",
  "All-Inclusive",
  "À La Carte",
  "BBQ Onboard",
  "Picnic-Style",
  "Local Cuisine Packages",
  "No Catering",
];

const safetyFeatures = [
  "Life Jackets",
  "EPIRB",
  "First Aid Kit",
  "Emergency Radio",
  "Flares",
  "Fire Extinguishers",
  "Emergency Beacon",
  "Life Rafts",
  "Navigation Lights",
  "Radar",
  "GPS Tracking",
  "Emergency Steering",
  "Searchlight",
  "Fog Horn",
];

const accessibilityFeatures = [
  "Wheelchair Ramp",
  "Accessible Cabin",
  "Wide Doorways",
  "Accessible Bathroom",
  "Elevator",
  "Handrails",
  "Easy Boarding",
  "Low Thresholds",
];

const availableSeasons = ["Summer", "Winter", "Spring", "Fall", "Year-Round"];
const hullTypes = ["monohull", "catamaran", "trimaran"];
const yachtTypes = ["motor", "sailing", "catamaran", "gulet", "mega", "super"];
const charterTypes = ["private", "shared", "day", "weekly"];
const ports = {
  Mediterranean: [
    "Port Hercules",
    "Marina di Portofino",
    "Porto Cervo",
    "Antibes",
    "Port Vauban",
    "Marina Ibiza",
  ],
  Caribbean: [
    "Gustavia Harbor",
    "Simpson Bay Marina",
    "Rodney Bay Marina",
    "Yacht Haven Grande",
    "Port Louis Marina",
  ],
  "North America": [
    "Fort Lauderdale",
    "Newport",
    "Marina del Rey",
    "Charleston Harbor",
  ],
  "Asia Pacific": [
    "Marina Bay",
    "Sentosa Cove",
    "Abell Point Marina",
    "Sydney Harbour",
  ],
  "Middle East": ["Dubai Marina", "Yas Marina", "Marina Porto Arabia"],
  "Northern Europe": [
    "Port of Amsterdam",
    "Oslo Harbor",
    "Stockholm Marina",
    "Copenhagen Marina",
  ],
};

// Generate a random yacht with all required properties
function generateYacht(city, index) {
  // Get country and region for the city
  const country = cityCountryMap[city] || "";
  const region = cityToRegionMap[city] || "";

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

  // Determine yacht type - use specific type if provided, otherwise random
  const yachtType =
    options.yachtType ||
    yachtTypes[Math.floor(Math.random() * yachtTypes.length)];

  // Adjust size parameters based on yacht type
  let lengthRange,
    guestDayRange,
    guestNightRange,
    cabinRange,
    crewRange,
    priceRange;

  switch (yachtType) {
    case "motor":
      lengthRange = [20, 40];
      guestDayRange = [8, 15];
      guestNightRange = [6, 10];
      cabinRange = [3, 5];
      crewRange = [2, 5];
      priceRange = [5000, 15000];
      break;
    case "sailing":
      lengthRange = [15, 30];
      guestDayRange = [6, 12];
      guestNightRange = [4, 8];
      cabinRange = [2, 4];
      crewRange = [1, 3];
      priceRange = [3000, 10000];
      break;
    case "catamaran":
      lengthRange = [12, 25];
      guestDayRange = [8, 16];
      guestNightRange = [6, 12];
      cabinRange = [3, 6];
      crewRange = [2, 4];
      priceRange = [4000, 12000];
      break;
    case "gulet":
      lengthRange = [15, 35];
      guestDayRange = [10, 20];
      guestNightRange = [8, 16];
      cabinRange = [4, 8];
      crewRange = [3, 6];
      priceRange = [3500, 9000];
      break;
    case "mega":
      lengthRange = [40, 60];
      guestDayRange = [12, 20];
      guestNightRange = [8, 12];
      cabinRange = [4, 8];
      crewRange = [6, 10];
      priceRange = [20000, 50000];
      break;
    case "super":
      lengthRange = [60, 100];
      guestDayRange = [16, 30];
      guestNightRange = [12, 24];
      cabinRange = [6, 12];
      crewRange = [10, 20];
      priceRange = [50000, 200000];
      break;
  }

  // Generate random specifications
  const lengthInMeters =
    Math.floor(Math.random() * (lengthRange[1] - lengthRange[0])) +
    lengthRange[0];
  const beamInMeters = Math.floor((lengthInMeters / 5) * 10) / 10;
  const draftInMeters = Math.floor((lengthInMeters / 10) * 10) / 10;
  const cruisingSpeedKnots = Math.floor(Math.random() * 10) + 10;
  const maxSpeedKnots = cruisingSpeedKnots + Math.floor(Math.random() * 10) + 5;
  const fuelCapacityLiters = lengthInMeters * 500;
  const waterCapacityLiters = lengthInMeters * 300;

  // Generate random hull type based on yacht type
  let hullType;
  if (yachtType === "catamaran") {
    hullType = "catamaran";
  } else {
    hullType =
      yachtType === "sailing"
        ? Math.random() > 0.8
          ? "trimaran"
          : "monohull"
        : "monohull";
  }

  // Generate random capacity
  const guestsDay =
    Math.floor(Math.random() * (guestDayRange[1] - guestDayRange[0])) +
    guestDayRange[0];
  const guestsOvernight =
    Math.floor(Math.random() * (guestNightRange[1] - guestNightRange[0])) +
    guestNightRange[0];
  const cabins =
    Math.floor(Math.random() * (cabinRange[1] - cabinRange[0])) + cabinRange[0];
  const crew =
    Math.floor(Math.random() * (crewRange[1] - crewRange[0])) + crewRange[0];
  const bathrooms = cabins + Math.floor(Math.random() * 3);

  // Generate random amenities
  const numAmenities = Math.floor(Math.random() * 5) + 3;
  const amenities = Array.from(
    new Set(
      Array(numAmenities)
        .fill(0)
        .map(
          () =>
            yachtAmenities[Math.floor(Math.random() * yachtAmenities.length)]
        )
    )
  );

  // Generate random entertainment options
  const numEntertainment = Math.floor(Math.random() * 3) + 1;
  const entertainment = Array.from(
    new Set(
      Array(numEntertainment)
        .fill(0)
        .map(
          () =>
            yachtEntertainment[
              Math.floor(Math.random() * yachtEntertainment.length)
            ]
        )
    )
  );

  // Generate random water toys
  const numWaterToys = Math.floor(Math.random() * 4) + 2;
  const waterToys = Array.from(
    new Set(
      Array(numWaterToys)
        .fill(0)
        .map(
          () =>
            yachtWaterToys[Math.floor(Math.random() * yachtWaterToys.length)]
        )
    )
  );

  // Generate random safety features
  const numSafetyFeatures = Math.floor(Math.random() * 3) + 3;
  const safetyFeaturesSelected = Array.from(
    new Set(
      Array(numSafetyFeatures)
        .fill(0)
        .map(
          () =>
            safetyFeatures[Math.floor(Math.random() * safetyFeatures.length)]
        )
    )
  );

  // Determine if accessibility features should be included (30% chance)
  let accessibilityFeaturesSelected = [];
  if (Math.random() < 0.3) {
    const numAccessibilityFeatures = Math.floor(Math.random() * 2) + 1;
    accessibilityFeaturesSelected = Array.from(
      new Set(
        Array(numAccessibilityFeatures)
          .fill(0)
          .map(
            () =>
              accessibilityFeatures[
                Math.floor(Math.random() * accessibilityFeatures.length)
              ]
          )
      )
    );
  }

  // Generate random catering options
  const numCateringOptions = Math.floor(Math.random() * 2) + 1;
  const cateringOptionsSelected = Array.from(
    new Set(
      Array(numCateringOptions)
        .fill(0)
        .map(
          () =>
            cateringOptions[Math.floor(Math.random() * cateringOptions.length)]
        )
    )
  );

  // Get region for the city to select appropriate home port
  // Use the existing region variable instead of redeclaring it
  const regionKey =
    region === "Mediterranean"
      ? "Mediterranean"
      : region === "Caribbean"
        ? "Caribbean"
        : region === "Asia Pacific"
          ? "Asia Pacific"
          : region === "Middle East"
            ? "Middle East"
            : region === "Northern Europe"
              ? "Northern Europe"
              : "North America";

  // Select a home port from the appropriate region
  const homePort =
    ports[regionKey][Math.floor(Math.random() * ports[regionKey].length)];

  // Generate random seasons
  const numSeasons = Math.floor(Math.random() * 3) + 1;
  const availableSeasonsSelected = Array.from(
    new Set(
      Array(numSeasons)
        .fill(0)
        .map(
          () =>
            availableSeasons[
              Math.floor(Math.random() * availableSeasons.length)
            ]
        )
    )
  );

  // Generate pricing
  const perDay =
    Math.floor(Math.random() * (priceRange[1] - priceRange[0])) + priceRange[0];
  const perWeek = perDay * 7 * 0.85; // 15% discount for weekly charter

  // Select charter type
  const charterType =
    charterTypes[Math.floor(Math.random() * charterTypes.length)];

  // Generate random yacht name and brand
  const name = yachtNames[Math.floor(Math.random() * yachtNames.length)];
  const brand = yachtBrands[Math.floor(Math.random() * yachtBrands.length)];
  const model = `${brand} ${Math.floor(Math.random() * 100)}`;
  const yearBuilt = Math.floor(Math.random() * 20) + 2000; // 2000-2023

  // Generate random engines
  const engineCount = Math.random() > 0.7 ? 2 : 1;
  const engineBrands = ["MTU", "Caterpillar", "MAN", "Volvo Penta", "Cummins"];
  const engineBrand =
    engineBrands[Math.floor(Math.random() * engineBrands.length)];
  const engines = [
    `${engineCount} x ${engineBrand} ${Math.floor(Math.random() * 20) + 8}V ${Math.floor(Math.random() * 1000) + 1000}`,
  ];

  // Generate a unique ID
  const id = `yacht-${city.toLowerCase().replace(/\s+/g, "-")}-${yachtType}-${index}`;

  // Generate random images
  const imageCount = Math.floor(Math.random() * 3) + 3;
  const images = Array(imageCount)
    .fill(0)
    .map(
      (_, i) =>
        `https://paragon-trails-yacht-images.com/${yachtType}/${city.toLowerCase().replace(/\s+/g, "-")}-${name.toLowerCase().replace(/\s+/g, "-")}-${i + 1}.jpg`
    );

  // Generate description
  const descriptions = [
    `Experience luxury and comfort aboard the ${name}, a stunning ${lengthInMeters}m ${yachtType} yacht available for charter in ${city}. Perfect for day trips or extended voyages.`,
    `The ${name} is a magnificent ${yachtType} yacht built by ${brand} offering exceptional amenities and impeccable service for an unforgettable sailing experience in ${city}.`,
    `Discover the beauty of ${city}'s waters aboard the elegant ${name}, a ${yearBuilt} ${yachtType} yacht featuring spacious accommodation for ${guestsOvernight} guests overnight or ${guestsDay} for day charters.`,
    `${name} combines performance and luxury in a stunning ${lengthInMeters}m ${yachtType} yacht. With its professional crew of ${crew}, you'll experience the ultimate sailing vacation.`,
    `Charter the impressive ${name} in ${city} and enjoy its ${numAmenities} luxury amenities and ${numWaterToys} water toys for an exceptional yachting experience.`,
  ];
  const description =
    descriptions[Math.floor(Math.random() * descriptions.length)];

  // Generate full yacht object
  return {
    id,
    name,
    brand,
    model,
    yearBuilt,
    lengthInMeters,
    beamInMeters,
    draftInMeters,
    cruisingSpeedKnots,
    maxSpeedKnots,
    fuelCapacityLiters,
    waterCapacityLiters,
    engines,
    hullType,
    yachtType,

    capacity: {
      guestsDay,
      guestsOvernight,
      cabins,
      crew,
      bathrooms,
    },

    amenities,
    entertainment,
    waterToys,

    location: {
      city: `${formatCamelCaseToTitle(city)}`,
      country,
      region,
      homePort,
    },

    availableSeasons: availableSeasonsSelected,
    charterType,

    crewIncluded: Math.random() > 0.2, // 80% chance crew is included
    cateringOptions: cateringOptionsSelected,

    description,
    images,
    featured: Math.random() < 0.2, // 20% chance to be featured

    pricing: {
      perDay,
      perWeek,
      currency, // Now using location-based currency
      includes: amenities.slice(0, Math.floor(Math.random() * 3) + 1),
      excludes: amenities.slice(-Math.floor(Math.random() * 2)),
    },

    safetyFeatures: safetyFeaturesSelected,
    accessibilityFeatures: accessibilityFeaturesSelected,
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

// Extract existing yachts from a file
async function extractExistingYachts(filePath) {
  // Create a yacht template with default/empty values for required properties
  const yachtTemplate = {
    id: "",
    name: "",
    brand: "",
    model: "",
    yearBuilt: 2000,
    lengthInMeters: 0,
    beamInMeters: 0,
    draftInMeters: 0,
    cruisingSpeedKnots: 0,
    maxSpeedKnots: 0,
    fuelCapacityLiters: 0,
    waterCapacityLiters: 0,
    engines: [],
    hullType: "",
    yachtType: "",
    capacity: {
      guestsDay: 0,
      guestsOvernight: 0,
      cabins: 0,
      crew: 0,
      bathrooms: 0,
    },
    amenities: [],
    entertainment: [],
    waterToys: [],
    location: {
      city: "",
      country: "",
      region: "",
      homePort: "",
    },
    availableSeasons: [],
    charterType: "",
    crewIncluded: true,
    cateringOptions: [],
    description: "",
    images: [],
    featured: false,
    pricing: {
      perDay: 0,
      perWeek: 0,
      currency: "USD",
      includes: [],
      excludes: [],
    },
    safetyFeatures: [],
    accessibilityFeatures: [],
  };

  // Use the shared utility with a yacht-specific parser
  const yachtParser = createObjectParser(yachtTemplate);
  const yachts = await extractObjectsFromFile(filePath, "Yacht", yachtParser);

  // Filter out invalid or incomplete yachts
  const validYachts = yachts.filter(
    (yacht) =>
      yacht &&
      yacht.id &&
      yacht.id.trim() !== "" &&
      yacht.name &&
      yacht.name.trim() !== ""
  );

  console.log(
    `Found ${validYachts.length} valid yachts out of ${yachts.length} total in ${filePath}`
  );
  return validYachts;
}

// Generate yachts and write to file
async function generateCityFile(city) {
  // Normalize city name for file handling but preserve original display name
  const displayCityName = city; // Keep original for display purposes

  // Format city name for variable and file naming
  const countryName = cityCountryMap[city] || "";
  const regionName = cityToRegionMap[city] || "";
  const formattedCountry = formatTitleToCamelCase(removeAccents(countryName));
  const formattedRegion = formatTitleToCamelCase(removeAccents(regionName));
  const formattedName = formatKebabToCamelCase(removeAccents(city));

  // Follow the same variable naming convention as attractions
  let variableName;
  if (formattedCountry && formattedRegion) {
    variableName = `${formattedName}${formattedCountry}${formattedRegion}Yachts`;
  } else {
    variableName = `${formattedName}Yachts`;
  }

  const destDir = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "rentals",
    "yacht"
  );
  const filePath = path.join(destDir, `${formattedName}.ts`);

  // Check if directory exists
  await ensureDirectoryExists(destDir);

  // Check if file exists
  const exists = await fileExists(filePath);

  // Handle existing file based on options
  let yachts = [];
  if (exists) {
    if (options.rewrite) {
      console.log(`Rewriting existing file: ${filePath}`);
    } else if (options.append) {
      console.log(`Appending ${options.append} yachts to: ${filePath}`);
      yachts = await extractExistingYachts(filePath);
    } else {
      console.log(
        `File already exists (use --rewrite to replace): ${filePath}`
      );
      return;
    }
  }

  // Generate yachts
  const numNewYachts = options.append || Math.floor(Math.random() * 5) + 3; // 3-7 yachts
  const newYachts = Array(numNewYachts)
    .fill(0)
    .map((_, index) => generateYacht(city, index + yachts.length));

  // Combine existing and new yachts - ensure all yachts are valid
  const allYachts = [...yachts, ...newYachts].filter(
    (yacht) =>
      yacht &&
      yacht.id &&
      yacht.id.trim() !== "" &&
      yacht.name &&
      yacht.name.trim() !== ""
  );

  console.log(
    `Writing ${allYachts.length} yachts to file (${yachts.length} existing, ${newYachts.length} new)`
  );

  // Create file content with proper formatting
  let content = `import { Yacht } from "@/lib/interfaces/services/rentals";\n\n`;
  content += `export const ${variableName}: Yacht[] = [\n`;

  allYachts.forEach((yacht, index) => {
    content += `  {\n`;
    // Add null check to prevent TypeError
    if (yacht) {
      for (const [key, value] of Object.entries(yacht)) {
        if (typeof value === "string") {
          content += `    ${key}: "${value}",\n`;
        } else if (Array.isArray(value)) {
          content += `    ${key}: [${value
            .map((item) => `"${item}"`)
            .join(", ")}],\n`;
        } else if (typeof value === "object" && value !== null) {
          content += `    ${key}: {\n`;
          for (const [subKey, subValue] of Object.entries(value)) {
            if (typeof subValue === "string") {
              content += `      ${subKey}: "${subValue}",\n`;
            } else if (Array.isArray(subValue)) {
              content += `      ${subKey}: [${subValue
                .map((item) => `"${item}"`)
                .join(", ")}],\n`;
            } else {
              content += `      ${subKey}: ${subValue},\n`;
            }
          }
          content += `    },\n`;
        } else {
          content += `    ${key}: ${value},\n`;
        }
      }
    }
    content += `  }${index < allYachts.length - 1 ? "," : ""}\n`;
  });

  content += `];\n`;

  // Write file
  await writeFile(filePath, content);
  console.log(
    `${exists && !options.rewrite ? "Updated" : "Created"} file: ${filePath} with ${allYachts.length} yachts`
  );
}

// Main function to process all cities
async function generateAllCityFiles() {
  let citiesToProcess = cities;

  // Filter by city name if specified
  if (options.cityFilter) {
    // More flexible city filtering, normalize and remove spacing/special characters for comparison
    const filterNormalized = options.cityFilter
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");

    citiesToProcess = cities.filter((city) => {
      const cityNormalized = city.toLowerCase().replace(/[^a-z0-9]/g, "");
      return cityNormalized.includes(filterNormalized);
    });

    if (citiesToProcess.length === 0) {
      console.log(`No cities found matching: ${options.cityFilter}`);
      console.log("Available cities (showing first 10):");
      cities.slice(0, 10).forEach((city) => console.log(`- ${city}`));
      return;
    }

    console.log(
      `Processing ${citiesToProcess.length} cities matching: ${options.cityFilter}`
    );
    citiesToProcess.forEach((city) => console.log(`- ${city}`));
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
  .then(() => console.log("City yacht files generated successfully!"))
  .catch((error) => console.error("Error generating city yacht files:", error));

// Print usage information
console.log(`
Usage: node scripts/generate-city-yachts.mjs [options]

Options:
  --rewrite, -r       Rewrite existing files instead of skipping them
  --append N, -a N    Append N new yachts to existing files
  --type T, -t T      Generate yachts of a specific type (options: motor, sailing, catamaran, gulet, mega, super)
  --city C, -c C      Process only cities matching the search term

Examples:
  node scripts/generate-city-yachts.mjs --rewrite
  node scripts/generate-city-yachts.mjs --append 5
  node scripts/generate-city-yachts.mjs --type "mega"
  node scripts/generate-city-yachts.mjs --city "Monaco" --append 3 --type "super"
`);
