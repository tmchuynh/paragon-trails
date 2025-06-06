/**
 * Tour Guide Generator Script
 * =========================
 *
 * This script generates realistic tour guide profiles for the Paragon Trails application.
 * It creates comprehensive guide information with properties like name, bio, specialties,
 * languages, certifications, ratings, and availability for each city in the application.
 *
 * Features:
 * - Generates 3-8 tour guides per city by default
 * - Creates appropriate folder structure in src/lib/constants/staff/guides
 * - Includes diverse specialties like local cuisine, architecture, history, etc.
 * - Generates multilingual capabilities with appropriate languages
 * - Creates realistic certifications, training, and experience levels
 * - Includes weekly availability schedules with time slots
 * - Generates appropriate quote, contact information, and license details
 *
 * Usage: node scripts/generate-tour-guides.mjs [options]
 *
 * Options:
 *   --rewrite, -r       Rewrite existing files instead of skipping them
 *   --append N, -a N    Append N new tour guides to existing files
 *   --city C, -c C      Process only cities matching the search term
 *
 * Examples:
 *   node scripts/generate-tour-guides.mjs --rewrite
 *   node scripts/generate-tour-guides.mjs --append 3
 *   node scripts/generate-tour-guides.mjs --city "Paris" --append 2
 *   node scripts/generate-tour-guides.mjs --city "Hong Kong" --append 9
 */

import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";
import { getCityFiles } from "./utils/file-utils.mjs";
import {
  formatKebabToCamelCase,
  formatTitleToCamelCase,
  removeAccents,
  formatKebebToTitleCase,
} from "./utils/format-utils.mjs";
import { determineGenderFromName } from "./utils/name-utils.mjs";
import { cityCountryMap, cityToRegionMap } from "./utils/geo-utils.mjs";
import { getRandomName } from "./utils/name-utils.mjs";
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

const writeFile = promisify(fs.writeFile);
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

const certifications = [
  "Professional Tour Guide Association",
  "Certified International Tour Manager",
  "Wilderness First Responder",
  "Licensed City Guide",
  "Cultural Heritage Specialist",
  "Sustainable Tourism Certificate",
  "Food Safety Certification",
  "CPR & First Aid",
  "Language Proficiency Certification",
  "Local History Certification",
  "Adventure Tourism Safety Certificate",
  "Urban Navigation Specialist",
  "Regional Tourism Ambassador",
  "Heritage Interpretation Certificate",
  "Eco-Tourism Guide",
];

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Japanese",
  "Mandarin",
  "Cantonese",
  "Korean",
  "Russian",
  "Portuguese",
  "Arabic",
  "Hindi",
  "Dutch",
  "Swedish",
  "Norwegian",
  "Danish",
  "Finnish",
  "Greek",
  "Turkish",
  "Polish",
  "Czech",
  "Hungarian",
  "Thai",
  "Vietnamese",
  "Indonesian",
  "Malay",
  "Tagalog",
  "Swahili",
  "Hebrew",
  "Croatian",
  "Serbian",
  "Bulgarian",
  "Romanian",
];

const specialties = [
  "Local Cuisine",
  "Historical Landmarks",
  "Architecture",
  "Art Galleries",
  "Hidden Gems",
  "Nightlife",
  "Photography Spots",
  "Street Food",
  "Urban Legends",
  "Local Markets",
  "Wildlife",
  "Religious Sites",
  "Museums",
  "Parks & Gardens",
  "Public Transportation Navigation",
  "Cultural Etiquette",
  "Family Activities",
  "Adventure Sports",
  "Local Craftsmanship",
  "Music Scene",
  "Wine Tasting",
  "Film Locations",
  "Sustainable Tourism",
  "LGBTQ+ History",
  "Indigenous Culture",
];

const specialTraining = [
  "Emergency Response",
  "Conflict Resolution",
  "Group Management",
  "Public Speaking",
  "Cultural Sensitivity",
  "Local Flora & Fauna",
  "Regional Geology",
  "Archaeological Conservation",
  "Accessibility Services",
  "Photography",
  "Local Transit Systems",
  "Regional Cuisine",
  "Wine Education",
  "Art History",
  "Historical Research Methods",
  "Religious Studies",
  "Urban Planning",
  "Marine Biology",
  "Mountain Survival",
  "Desert Navigation",
];

const tourRegions = [
  "Asia Pacific",
  "Northern Europe",
  "Mediterranean",
  "East Coast USA",
  "South America",
  "Africa",
  "Caribbean",
  "Middle East",
  "West Coast USA",
  "East Coast Canada",
  "Alaska",
];

const tourTypes = [
  "Walking Tour",
  "Bike Tour",
  "Boat Tour",
  "Food Tour",
  "Wine Tour",
  "Brewery Tour",
  "Cultural Tour",
  "Historical Tour",
  "Religious Tour",
  "Museum Tour",
  "Nature Tour",
  "Wildlife Safari",
  "Photography Tour",
  "Architecture Tour",
  "Underground Tour",
  "Ghost Tour",
  "Street Art Tour",
  "Shopping Tour",
  "Scenic Tour",
  "Eco Tour",
  "Adventure Tour",
  "Off-Road Tour",
  "Helicopter Tour",
  "Luxury Tour",
  "Private Tour",
  "Group Tour",
  "Self-Guided Tour",
  "Audio Tour",
  "Accessible Tour",
  "Cruise Excursion",
  "Festival Tour",
  "Market Tour",
  "Farm Visit",
  "Craft Workshop",
  "Cooking Class",
  "Relocation Tour",
  "LGBTQ+ Friendly Tour",
  "Family-Friendly Tour",
  "Romantic Tour",
];

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Generate a random tour guide
function generateTourGuide(city, index) {
  const name = getRandomName();
  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[1];
  const gender = determineGenderFromName(firstName);
  const countryName = cityCountryMap[city] || "Unknown Country";
  const regionName = cityToRegionMap[city] || "Unknown Region";
  const id = `guide-${removeAccents(city).toLowerCase().replace(/\s+/g, "-")}-${index + 1}`;

  // Generate random certifications
  const numCertifications = Math.floor(Math.random() * 3) + 1;
  const guideCertifications = Array.from(
    new Set(
      Array(numCertifications)
        .fill(0)
        .map(
          () =>
            certifications[Math.floor(Math.random() * certifications.length)]
        )
    )
  );

  // Generate random languages
  const numLanguages = Math.floor(Math.random() * 3) + 1;
  const guideLanguages = Array.from(
    new Set(
      Array(numLanguages)
        .fill(0)
        .map(() => languages[Math.floor(Math.random() * languages.length)])
    )
  );

  // Generate random specialties
  const numSpecialties = Math.floor(Math.random() * 4) + 1;
  const guideSpecialties = Array.from(
    new Set(
      Array(numSpecialties)
        .fill(0)
        .map(() => specialties[Math.floor(Math.random() * specialties.length)])
    )
  );

  // Generate random special training
  const numTraining = Math.floor(Math.random() * 3);
  const guideTraining = Array.from(
    new Set(
      Array(numTraining)
        .fill(0)
        .map(
          () =>
            specialTraining[Math.floor(Math.random() * specialTraining.length)]
        )
    )
  );

  // Generate random tour regions covered
  const numRegions = Math.floor(Math.random() * 2) + 1;
  const regionsCovered = Array.from(
    new Set(
      Array(numRegions)
        .fill(0)
        .map(() => tourRegions[Math.floor(Math.random() * tourRegions.length)])
    )
  );

  // Generate random tour types
  const numTypes = Math.floor(Math.random() * 4) + 2;
  const guideTypes = Array.from(
    new Set(
      Array(numTypes)
        .fill(0)
        .map(() => tourTypes[Math.floor(Math.random() * tourTypes.length)])
    )
  );

  // Generate random weekly availability
  const numAvailableDays = Math.floor(Math.random() * 4) + 3; // 3-6 days available
  const availableDays = Array.from(
    new Set(
      Array(numAvailableDays)
        .fill(0)
        .map(() => weekDays[Math.floor(Math.random() * weekDays.length)])
    )
  );

  const available = availableDays.map((day) => {
    // Generate 1-2 time slots for each day
    const numSlots = Math.floor(Math.random() * 2) + 1;
    const slots = [];

    for (let i = 0; i < numSlots; i++) {
      // Generate start time (8AM - 3PM)
      const startHour = Math.floor(Math.random() * 8) + 8;
      const startPeriod = startHour >= 12 ? "PM" : "AM";
      const startHour12 = startHour > 12 ? startHour - 12 : startHour;
      const startTime = `${startHour12 < 10 ? "0" + startHour12 : startHour12}:00 ${startPeriod}`;

      // Generate duration (2-6 hours)
      const duration = Math.floor(Math.random() * 5) + 2;
      const endHour = startHour + duration;
      const endPeriod = endHour >= 12 ? "PM" : "AM";
      const endHour12 = endHour > 12 ? endHour - 12 : endHour;
      const endTime = `${endHour12 < 10 ? "0" + endHour12 : endHour12}:00 ${endPeriod}`;

      slots.push({ from: startTime, to: endTime });
    }

    return {
      day,
      availableHours: slots,
    };
  });

  // Generate bio
  const bio = `${firstName} is a passionate tour guide with extensive knowledge of ${formatKebebToTitleCase(city)} and ${countryName}. Specializing in ${guideSpecialties.join(", ")}, ${firstName} provides authentic and engaging experiences for visitors of all backgrounds.`;

  // Generate phone number
  const phoneNumber = `+1-${Math.floor(100 + Math.random() * 900)}-${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000 + Math.random() * 9000)}`;

  // Generate email
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@paragontrails.com`;

  // Generate license number
  const licenseNumber = `LIC-${Math.floor(1000 + Math.random() * 9000)}-${city.substring(0, 3).toUpperCase()}`;

  // Generate random quote
  const quotes = [
    `The best way to discover ${formatKebebToTitleCase(city)} is with someone who lives and breathes its culture.`,
    `Every corner of ${formatKebebToTitleCase(city)} tells a story, let me share them with you.`,
    `${formatKebebToTitleCase(city)} isn't just a destination, it's an experience that stays with you forever.`,
    `My goal is to help you fall in love with ${formatKebebToTitleCase(city)} just as I have.`,
    `In ${formatKebebToTitleCase(city)}, we don't just see the sights - we make memories.`,
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return {
    id,
    name,
    city: `${formatKebebToTitleCase(city)}`,
    country: countryName,
    state: "",
    region: regionName,
    isPopular: Math.random() > 0.7, // 30% chance of being popular
    bio,
    regionsCovered,
    tourTypes: guideTypes,
    maxGroupSize: Math.floor(Math.random() * 15) + 5, // 5-20 people
    licenseNumber,
    phoneNumber,
    contactEmail: email,
    available,
    isCertified: guideCertifications.length > 0,
    description: bio, // Using bio as description for simplicity
    rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1)), // 3.5-5.0 rating
    reviewsCount: Math.floor(Math.random() * 100) + 5, // 5-105 reviews
    quote,
    profileImage: `https://randomuser.me/api/portraits/${gender}/${Math.floor(Math.random() * 90)}.jpg`,
    languages: guideLanguages,
    experienceYears: Math.floor(Math.random() * 15) + 2, // 2-17 years experience
    certifications: guideCertifications,
    specialties: guideSpecialties,
    specialTraining: guideTraining,
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

// Extract existing tour guides from a file
async function extractExistingTourGuides(filePath) {
  // Create a tour guide template with default values for required properties
  const tourGuideTemplate = {
    id: "",
    name: "",
    city: "",
    country: "",
    state: "",
    region: "",
    isPopular: false,
    bio: "",
    regionsCovered: [],
    tourTypes: [],
    maxGroupSize: 0,
    licenseNumber: "",
    phoneNumber: "",
    contactEmail: "",
    available: [],
    isCertified: false,
    description: "",
    rating: 0,
    reviewsCount: 0,
    quote: "",
    profileImage: "",
    languages: [],
    experienceYears: 0,
    certifications: [],
    specialties: [],
    specialTraining: [],
  };

  try {
    // Use the shared utility with a tour guide-specific parser
    const guideParser = createObjectParser(tourGuideTemplate);
    const guides = await extractObjectsFromFile(
      filePath,
      "TourGuide",
      guideParser,
    );

    // Add validation to prevent errors with null/empty guides array
    if (!guides || !Array.isArray(guides) || guides.length === 0) {
      console.warn(
        `Could not parse existing guides in ${filePath}, will create fresh data`,
      );
      return [];
    }

    // Filter out invalid guides
    return guides.filter((guide) => guide && guide.id && guide.name);
  } catch (e) {
    console.error(`Error extracting tour guides from ${filePath}:`, e);
    return [];
  }
}

// Generate tour guides and write to file
async function generateCityGuideFile(city) {
  const countryName = cityCountryMap[city] || "";
  const regionName = cityToRegionMap[city] || "";

  const formattedCountry = formatTitleToCamelCase(removeAccents(countryName));
  const formattedRegion = formatTitleToCamelCase(removeAccents(regionName));

  const formattedName = formatKebabToCamelCase(removeAccents(city));

  const variableName = `${formattedName}${formattedCountry.replaceAll(".", "")}${formattedRegion}Guides`;

  const destDir = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "staff",
    "guides",
  );
  const filePath = path.join(destDir, `${formattedName}.ts`);

  // Check if directory exists
  await ensureDirectoryExists(destDir);

  // Check if file exists
  const exists = await fileExists(filePath);

  // Handle existing file based on options
  let guides = [];
  if (exists) {
    if (options.rewrite) {
      console.log(`Rewriting existing file: ${filePath}`);
    } else if (options.append) {
      console.log(`Appending ${options.append} guides to: ${filePath}`);
      guides = await extractExistingTourGuides(filePath);
      console.log(
        `Found ${guides.length} valid existing guides in ${filePath}`,
      );
    } else {
      console.log(
        `File already exists (use --rewrite to replace): ${filePath}`,
      );
      return;
    }
  }

  // Generate tour guides
  const numNewGuides = options.append || Math.floor(Math.random() * 6) + 3; // 3-8 guides
  const newGuides = Array(numNewGuides)
    .fill(0)
    .map((_, index) => generateTourGuide(city, guides.length + index));

  // Combine existing and new guides - filter out any invalid objects
  guides = [...guides, ...newGuides].filter(
    (guide) => guide && typeof guide === "object",
  );

  // Create file content with proper formatting
  let content = `import { TourGuide } from "@/lib/interfaces/people/staff";\n\n`;
  content += `export const ${variableName}: TourGuide[] = [\n`;

  guides.forEach((guide, index) => {
    if (!guide) return; // Skip null/undefined guides

    content += `  {\n`;
    for (const [key, value] of Object.entries(guide)) {
      if (typeof value === "string") {
        content += `    ${key}: "${value.replace(/"/g, '\\"')}",\n`;
      } else if (Array.isArray(value)) {
        if (value.length > 0 && typeof value[0] === "object") {
          // Handle weeklyAvailability array of objects
          content += `    ${key}: [\n`;
          value.forEach((item, i) => {
            content += `      {\n`;
            for (const [subKey, subValue] of Object.entries(item)) {
              if (Array.isArray(subValue)) {
                content += `        ${subKey}: [\n`;
                subValue.forEach((slot, j) => {
                  content += `          {\n`;
                  for (const [slotKey, slotValue] of Object.entries(slot)) {
                    content += `            ${slotKey}: "${slotValue}",\n`;
                  }
                  content += `          }${j < subValue.length - 1 ? "," : ""}\n`;
                });
                content += `        ],\n`;
              } else {
                content += `        ${subKey}: "${subValue}",\n`;
              }
            }
            content += `      }${i < value.length - 1 ? "," : ""}\n`;
          });
          content += `    ],\n`;
        } else {
          // Handle regular string arrays
          content += `    ${key}: [${value
            .map(
              (item) =>
                `"${typeof item === "string" ? item.replace(/"/g, '\\"') : item}"`,
            )
            .join(", ")}],\n`;
        }
      } else if (typeof value === "number" || typeof value === "boolean") {
        content += `    ${key}: ${value},\n`;
      } else if (value === null) {
        content += `    ${key}: null,\n`;
      } else if (value === undefined) {
        // Skip undefined values
      } else {
        content += `    ${key}: ${JSON.stringify(value)},\n`;
      }
    }
    content += `  }${index < guides.length - 1 ? "," : ""}\n`;
  });

  content += `];\n`;

  // Write file
  await writeFile(filePath, content);
  console.log(
    `${exists && !options.rewrite ? "Updated" : "Created"} file: ${filePath} with ${guides.length} guides`,
  );
}

// Main function to process all cities
async function generateAllCityGuideFiles() {
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
      console.log("\nAvailable cities (showing up to 10):");
      cities.slice(0, 10).forEach((city) => console.log(`- "${city}"`));
      return;
    }

    console.log(
      `Processing ${citiesToProcess.length} cities matching: ${options.cityFilter}`,
    );
  }

  for (const city of citiesToProcess) {
    try {
      await generateCityGuideFile(city);
    } catch (error) {
      console.error(`Error generating file for ${city}:`, error);
    }
  }
}

// Execute the script
generateAllCityGuideFiles()
  .then(() => console.log("Tour guide files generated successfully!"))
  .catch((error) => console.error("Error generating tour guide files:", error));

// Print usage information
console.log(`
Usage: node scripts/generate-tour-guides.mjs [options]

Options:
  --rewrite, -r       Rewrite existing files instead of skipping them
  --append N, -a N    Append N new tour guides to existing files
  --city C, -c C      Process only cities matching the search term

Examples:
  node scripts/generate-tour-guides.mjs --rewrite
  node scripts/generate-tour-guides.mjs --append 3
  node scripts/generate-tour-guides.mjs --city "Paris" --append 2
`);
