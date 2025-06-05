/**
 * Luxury Drivers Generator Script
 * =============================
 *
 * This script generates realistic driver profiles for luxury transportation services
 * in the Paragon Trails application. It creates detailed driver information with properties
 * like name, experience, languages spoken, specialties, vehicle certifications,
 * availability, and contact details for each city.
 *
 * Features:
 * - Generates 5-10 drivers per city by default
 * - Creates appropriate folder structure in src/lib/constants/staff/drivers
 * - Assigns regionally appropriate languages based on city location
 * - Includes diverse driver specialties and vehicle type certifications
 * - Generates realistic availability schedules and contact information
 * - Creates proper licensing information and expiry dates
 *
 * Usage: node scripts/generate-drivers.mjs [options]
 *
 * Options:
 *   --rewrite, -r       Rewrite existing files instead of skipping them
 *   --append N, -a N    Append N new drivers to existing files
 *   --city C, -c C      Process only cities matching the search term
 *
 * Examples:
 *   node scripts/generate-drivers.mjs --rewrite
 *   node scripts/generate-drivers.mjs --append 3
 *   node scripts/generate-drivers.mjs --append 3 --city "hong-kong"
 *   node scripts/generate-drivers.mjs --append 3 --city "tokyo"
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
import { getRandomLanguages } from "./utils/language-utils.mjs";
import { getRandomName, determineGenderFromName } from "./utils/name-utils.mjs";
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

// Driver data components
const languageCodes = [
  "en",
  "es",
  "fr",
  "de",
  "it",
  "pt",
  "ru",
  "zh",
  "ja",
  "ko",
  "ar",
  "hi",
  "tr",
];

const driverSpecialties = [
  "VIP Transport",
  "Airport Transfers",
  "Corporate Chauffeur",
  "Event Transportation",
  "Long-Distance Driving",
  "Tour Guide Driver",
  "Luxury Car Specialist",
  "Night Shift",
  "Security Detail",
];

const vehicleTypes = [
  "Sedan",
  "Limousine",
  "SUV",
  "Convertible",
  "Van",
  "Electric Vehicle",
  "Motorcoach",
  "Sports Car",
  "Luxury SUV",
];

// Generate a random date string within a year range
function getRandomDate(startYear, endYear) {
  const year =
    startYear + Math.floor(Math.random() * (endYear - startYear + 1));
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1; // Avoid invalid dates
  return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
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

// Generate a random license number
function getRandomLicenseNumber() {
  // Format: Letter-Digit-Letter-Digit-Digit-Digit
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let license = "";
  license += letters[Math.floor(Math.random() * letters.length)];
  license += Math.floor(Math.random() * 10);
  license += letters[Math.floor(Math.random() * letters.length)];
  license += Math.floor(Math.random() * 10);
  license += Math.floor(Math.random() * 10);
  license += Math.floor(Math.random() * 10);
  return license;
}

// Generate random availability
function getRandomAvailability() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const availability = [];

  // Randomly select 3-6 days
  const availableDays = [];
  while (availableDays.length < Math.floor(Math.random() * 4) + 3) {
    const day = days[Math.floor(Math.random() * days.length)];
    if (!availableDays.includes(day)) {
      availableDays.push(day);
    }
  }

  // For each day, generate 1-2 time slots
  for (const day of availableDays) {
    const availableHours = [];
    const numSlots = Math.floor(Math.random() * 2) + 1;

    for (let i = 0; i < numSlots; i++) {
      // Generate random start hour (0-22)
      const fromHour = Math.floor(Math.random() * 22);
      // Generate random end hour (from+2 to 24)
      const toHour = Math.min(24, fromHour + 2 + Math.floor(Math.random() * 4));

      availableHours.push({
        from: `${fromHour.toString().padStart(2, "0")}:00`,
        to: `${toHour.toString().padStart(2, "0")}:00`,
      });
    }

    availability.push({
      day,
      availableHours,
    });
  }

  return availability;
}

// Generate a driver with all required properties
function generateDriver(cityName, index) {
  // Use the utility function instead of concatenating random first and last names
  const name = getRandomName();

  // Extract first name for email generation
  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[1];
  const region = cityToRegionMap[cityName] || "";

  const gender = determineGenderFromName(firstName);

  let regionForLanguages;

  // Map maritime regions to language regions
  switch (region) {
    case "Mediterranean":
    case "Northern Europe":
    case "Western Europe":
      regionForLanguages = "europe";
      break;

    case "Asia Pacific":
      regionForLanguages = "asia";
      break;

    case "Caribbean":
    case "East Coast USA":
    case "West Coast USA":
    case "East Coast Canada":
    case "South America":
      regionForLanguages = "americas";
      break;

    case "Middle East":
      regionForLanguages = "middleEast";
      break;

    case "Africa":
      regionForLanguages = "africa";
      break;

    default:
      regionForLanguages = "global";
      break;
  }

  // Generate random number of experience years (1-20)
  const experienceYears = Math.floor(Math.random() * 20) + 1;

  const languageCount = Math.floor(Math.random() * 3) + 2; // 2-4 languages
  const selectedLanguages = getRandomLanguages(
    languageCount,
    regionForLanguages
  );
  const languages = selectedLanguages.map((lang) => lang.name);

  // Generate random number of specialties (1-4)
  const numSpecialties = Math.floor(Math.random() * 4) + 1;
  const specialties = Array.from(
    new Set(
      Array(numSpecialties)
        .fill(0)
        .map(
          () =>
            driverSpecialties[
              Math.floor(Math.random() * driverSpecialties.length)
            ]
        )
    )
  );

  // Generate random number of vehicle types (1-5)
  const numVehicleTypes = Math.floor(Math.random() * 5) + 1;
  const vehicleTypesCertified = Array.from(
    new Set(
      Array(numVehicleTypes)
        .fill(0)
        .map(
          () => vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)]
        )
    )
  );

  // Generate license expiry date (1-5 years in the future)
  const currentYear = new Date().getFullYear();
  const licenseExpiry = getRandomDate(currentYear + 1, currentYear + 5);

  // Generate random rating (3.5-5.0)
  const ratings = parseFloat((3.5 + Math.random() * 1.5).toFixed(1));

  // Create driver object according to Driver interface
  return {
    id: `driver-${cityName}-${index}`,
    name,
    licenseNumber: getRandomLicenseNumber(),
    licenseExpiry,
    experienceYears,
    languagesSpoken: languages,
    available: getRandomAvailability(),
    ratings,
    phone: getRandomPhone(),
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@paragontrailsdrivers.com`,
    photoUrl: `https://randomuser.me/api/portraits/${gender}/${Math.floor(Math.random() * 90)}.jpg`,
    specialties,
    vehicleTypesCertified,
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

// Extract existing drivers from a file
async function extractExistingDrivers(filePath) {
  // Create a driver template with default values
  const driverTemplate = {
    id: "",
    name: "",
    licenseNumber: "",
    licenseExpiry: "",
    experienceYears: 0,
    languagesSpoken: [],
    available: [],
    ratings: 0,
    phone: "",
    email: "",
    photoUrl: "",
    specialties: [],
    vehicleTypesCertified: [],
  };

  // Use the shared utility with a driver-specific parser
  const driverParser = createObjectParser(driverTemplate);
  const drivers = await extractObjectsFromFile(
    filePath,
    "Driver",
    driverParser,
  );

  // Add validation to prevent errors with null/empty drivers array
  if (!drivers || !Array.isArray(drivers) || drivers.length === 0) {
    console.warn(
      `Could not parse existing drivers in ${filePath}, will create fresh data`,
    );
    return [];
  }

  return drivers;
}

// Generate drivers and write to file
async function generateCityFile(city) {
  const countryName = cityCountryMap[city] || "";
  const regionName = cityToRegionMap[city] || "";

  const formattedCountry = formatTitleToCamelCase(removeAccents(countryName));
  const formattedRegion = formatTitleToCamelCase(removeAccents(regionName));
  const formattedName = formatKebabToCamelCase(removeAccents(city));

  const variableName = `${formattedName}${formattedCountry.replaceAll(".", "")}${formattedRegion}Drivers`;

  const destDir = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "staff",
    "drivers"
  );
  const filePath = path.join(destDir, `${city}.ts`);

  // Check if directory exists
  await ensureDirectoryExists(destDir);

  // Check if file exists
  const exists = await fileExists(filePath);

  // Handle existing file based on options
  let drivers = [];
  if (exists) {
    if (options.rewrite) {
      console.log(`Rewriting existing file: ${filePath}`);
    } else if (options.append) {
      console.log(`Appending ${options.append} drivers to: ${filePath}`);
      drivers = await extractExistingDrivers(filePath);
    } else {
      console.log(
        `File already exists (use --rewrite to replace): ${filePath}`
      );
      return;
    }
  }

  // Generate drivers
  const numNewDrivers = options.append || Math.floor(Math.random() * 5) + 5; // 5-10 drivers
  const newDrivers = Array(numNewDrivers)
    .fill(0)
    .map((_, index) => generateDriver(city, drivers.length + index + 1));

  // Combine existing and new drivers
  drivers = drivers.concat(newDrivers);

  // Create file content with proper formatting
  let content = `import { Driver } from "@/lib/interfaces/people/staff";\n\n`;
  content += `export const ${variableName.replaceAll(".", "")}: Driver[] = [\n`;

  drivers.forEach((driver, index) => {
    content += `  {\n`;
    // Add null check to prevent TypeError
    if (driver) {
      for (const [key, value] of Object.entries(driver)) {
        if (typeof value === "string") {
          content += `    ${key}: "${value}",\n`;
        } else if (Array.isArray(value)) {
          if (value.length === 0) {
            content += `    ${key}: [],\n`;
          } else if (typeof value[0] === "object") {
            // Handle availability objects
            content += `    ${key}: [\n`;
            value.forEach((item, i) => {
              content += `      {\n`;
              for (const [itemKey, itemValue] of Object.entries(item)) {
                if (itemKey === "availableHours") {
                  content += `        ${itemKey}: [\n`;
                  itemValue.forEach((hour, hourIndex) => {
                    content += `          {\n`;
                    content += `            from: "${hour.from}",\n`;
                    content += `            to: "${hour.to}"\n`;
                    content += `          }${hourIndex < itemValue.length - 1 ? "," : ""}\n`;
                  });
                  content += `        ],\n`;
                } else {
                  content += `        ${itemKey}: "${itemValue}",\n`;
                }
              }
              content += `      }${i < value.length - 1 ? "," : ""}\n`;
            });
            content += `    ],\n`;
          } else {
            content += `    ${key}: [${value.map((item) => `"${item}"`).join(", ")}],\n`;
          }
        } else {
          content += `    ${key}: ${value},\n`;
        }
      }
    }
    content += `  }${index < drivers.length - 1 ? "," : ""}\n`;
  });

  content += `];\n`;

  // Write file
  await writeFile(filePath, content);
  console.log(
    `${exists && !options.rewrite ? "Updated" : "Created"} file: ${filePath}`,
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
  .then(() => console.log("Driver files generated successfully!"))
  .catch((error) => console.error("Error generating driver files:", error));

// Print usage information
console.log(`
Usage: node scripts/generate-drivers.mjs [options]

Options:
  --rewrite, -r       Rewrite existing files instead of skipping them
  --append N, -a N    Append N new drivers to existing files
  --city C, -c C      Process only cities matching the search term

Examples:
  node scripts/generate-drivers.mjs --rewrite
  node scripts/generate-drivers.mjs --append 3
  node scripts/generate-drivers.mjs --city "Tokyo"
`);
