/**
 * City Tours Generator Script
 * ==========================
 *
 * This script generates realistic tour offerings for city destinations in the Paragon Trails application.
 * It creates detailed tour information with properties like title, description, pricing,
 * duration, scheduling, included items, requirements, and policies for each city.
 *
 * Features:
 * - Generates 3-7 tours per city by default
 * - Creates appropriate folder structure in src/lib/constants/tours
 * - Links tours to existing tour guides when available
 * - Includes diverse tour types, themes, and schedules
 * - Generates realistic pricing, group sizes, and language offerings
 * - Creates comprehensive inclusion/exclusion lists and requirements
 *
 * Usage: node scripts/generate-city-tours.mjs [options]
 *
 * Options:
 *   --rewrite, -r             Rewrite existing files instead of skipping them
 *   --append N, -a N          Append N new tours to existing files
 *   --city C, -c C            Process only cities matching the search term
 *   --guide-count X, -g X     Specify how many guides to attempt to link per city (default: 3)
 *
 * Examples:
 *   node scripts/generate-city-tours.mjs --rewrite
 *   node scripts/generate-city-tours.mjs --append 3
 *   node scripts/generate-city-tours.mjs --city "Paris" --guide-count 5
 *   node scripts/generate-city-tours.mjs --city "Hong Kong" --append 3
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
import { cityCountryMap, cityToRegionMap } from "./utils/geo-utils.mjs";
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
const readFile = promisify(fs.readFile);
const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);

// Parse command line arguments
function parseCommandLineArgs() {
  const options = {
    rewrite: false,
    append: null,
    cityFilter: null,
    guideCount: 3, // Default to trying to load 3 guides per city
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

    if ((arg === "--guide-count" || arg === "-g") && i + 1 < args.length) {
      const value = parseInt(args[++i]);
      if (!isNaN(value) && value > 0) {
        options.guideCount = value;
      }
    }
  }

  return options;
}

const options = parseCommandLineArgs();

// Arrays for random data generation
const tourTitles = [
  "Essential City Highlights",
  "Hidden Gems Discovery",
  "Historical Walking Tour",
  "Culinary Delights Experience",
  "Architecture Masterpieces Tour",
  "Local Markets Exploration",
  "Street Food Adventure",
  "Cultural Heritage Tour",
  "Urban Photography Journey",
  "Religious Sites Pilgrimage",
  "Nature Escape",
  "Nightlife Exploration",
  "Craft Breweries Tour",
  "Art Galleries Crawl",
  "Wine Tasting Experience",
  "Off-the-Beaten-Path Adventure",
  "Scenic Views Tour",
  "Sunset Landmarks Tour",
  "Family Fun Adventure",
  "Luxury Shopping Experience",
  "Underground Secrets Tour",
  "Ghost Stories Walk",
  "Street Art Safari",
  "Urban Legends Tour",
];

const includedItems = [
  "Professional guide",
  "Entrance fees",
  "Hotel pickup and drop-off",
  "Transportation during tour",
  "Bottled water",
  "Snacks",
  "Lunch",
  "Dinner",
  "Wine tasting",
  "Food samples",
  "Coffee and/or Tea",
  "Audio guide",
  "Souvenir photos",
  "WiFi on board",
  "Use of bicycle",
  "Use of helmet",
  "Rain ponchos",
  "Gratuities",
  "Local taxes",
  "Entry/Admission tickets",
  "Headsets to hear the guide",
  "Skip-the-line access",
  "Guided commentary",
  "Live entertainment",
  "Cooking demonstration",
  "Recipe booklet",
  "Welcome drink",
];

const notIncludedItems = [
  "Gratuities",
  "Hotel pickup and drop-off",
  "Food and drinks",
  "Transportation to/from attractions",
  "Souvenir photos",
  "Alcoholic drinks",
  "Personal expenses",
  "Additional entrance fees",
  "Travel insurance",
  "Luggage storage",
];

const cancellationPolicies = [
  "Free cancellation up to 24 hours before the experience starts",
  "Free cancellation up to 48 hours before the experience starts",
  "Free cancellation up to 72 hours before the experience starts",
  "Non-refundable. No cancellation allowed.",
  "50% refund if canceled 24 hours before the experience",
  "Full refund if canceled due to weather",
  "Flexible cancellation policy: full refund with 12-hour notice",
  "Group bookings: Free cancellation up to 7 days in advance",
];

const tourRequirements = [
  "Valid ID required",
  "Passport required",
  "Minimum age: 18",
  "Minimum age: 12",
  "All ages welcome",
  "Must be 21+ to consume alcohol",
  "Basic fitness level required",
  "Advanced fitness level required",
  "Swimming required",
  "No mobility restrictions",
  "Not wheelchair accessible",
  "Wheelchair accessible",
  "Stairs involved",
  "Comfortable walking shoes required",
  "Weather-appropriate clothing",
  "No pets allowed",
  "Service animals permitted",
  "Photography allowed",
  "No flash photography",
  "Dress code enforced",
  "Government-issued ID for entry",
  "Pre-booking required",
  "Tickets must be printed",
  "E-tickets accepted",
  "Arrive 15 minutes early",
  "Signed waiver required",
  "Parental consent required",
  "COVID-19 vaccination required",
  "Face masks required",
  "Bring own headphones",
  "Headphones provided",
  "Language proficiency recommended",
  "Local SIM card recommended",
  "Cash only",
  "Credit/debit cards accepted",
  "Bring water and snacks",
];

const tourThemes = [
  "Adventure",
  "Art",
  "Architecture",
  "Beach",
  "Culture",
  "Culinary",
  "Food & Drink",
  "Historical",
  "Hiking",
  "Local Life",
  "Nature & Wildlife",
  "Nightlife",
  "Photography",
  "Religious",
  "Shopping",
  "Sightseeing",
  "Spiritual",
  "Sports",
  "Wellness",
  "Wine & Spirits",
  "Scenic",
  "Festival",
  "Music",
  "Luxury",
  "Eco",
  "Family",
  "Solo",
  "Romantic",
  "LGBTQ+ Friendly",
  "Off the Beaten Path",
  "Educational",
  "Volunteer",
  "Cruise Stop",
  "Local Market",
  "Street Food",
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

const currencies = [
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
  { code: "JPY", symbol: "¥" },
  { code: "CAD", symbol: "C$" },
  { code: "AUD", symbol: "A$" },
];

const durations = [1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12];

// Load tour guides for a city
async function loadCityGuides(city) {
  const formattedName = formatKebabToCamelCase(removeAccents(city));

  const guidesPath = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "staff",
    "guides",
    `${formattedName}.ts`,
  );

  try {
    await access(guidesPath);
  } catch {
    console.log(`No guides file found for ${city}. Using generic guide IDs.`);
    return Array.from({ length: options.guideCount }, (_, i) => ({
      id: `guide-${removeAccents(city).toLowerCase().replace(/\s+/g, "-")}-${i + 1}`,
    }));
  }

  try {
    const content = await readFile(guidesPath, "utf-8");

    // Extract guide IDs using regex
    const guidesMatch = content.match(/id: "([^"]+)"/g);
    if (!guidesMatch) return [];

    return guidesMatch.map((match) => {
      const id = match.match(/id: "([^"]+)"/)[1];
      return { id };
    });
  } catch (error) {
    console.error(`Error loading guides for ${city}:`, error);
    return [];
  }
}

// Generate random schedules for a tour
function generateSchedules() {
  const numSchedules = Math.floor(Math.random() * 4) + 1; // 1-4 schedules
  const selectedDays = new Set();
  const schedules = [];

  for (let i = 0; i < numSchedules; i++) {
    // Pick a day that hasn't been selected yet
    let day;
    do {
      day = weekDays[Math.floor(Math.random() * weekDays.length)];
    } while (selectedDays.has(day));

    selectedDays.add(day);

    // Generate start time (8AM - 5PM)
    const startHour = Math.floor(Math.random() * 10) + 8;
    const startTime = `${startHour < 10 ? "0" + startHour : startHour}:00`;

    // Generate duration based on the tour duration
    const durationHours =
      durations[Math.floor(Math.random() * durations.length)];
    const endHour = Math.min(23, startHour + Math.floor(durationHours));
    const endMinutes = (durationHours % 1) * 60;
    const endTime = `${endHour < 10 ? "0" + endHour : endHour}:${endMinutes === 0 ? "00" : endMinutes}`;

    schedules.push({
      dayOfWeek: day,
      startTime,
      endTime,
    });
  }

  return schedules;
}

// Generate a tour for a city
function generateTour(city, index, guides) {
  const countryName = cityCountryMap[city] || "Unknown Country";
  const regionName = cityToRegionMap[city] || "";
  const id = `tour-${removeAccents(city).toLowerCase().replace(/\s+/g, "-")}-${index + 1}`;

  // Select a random guide if available
  const guideId =
    guides.length > 0
      ? guides[Math.floor(Math.random() * guides.length)].id
      : `guide-${removeAccents(city).toLowerCase().replace(/\s+/g, "-")}-1`;

  // Generate tour details
  const titleIndex = Math.floor(Math.random() * tourTitles.length);
  const title = `${formatKebebToTitleCase(city)} ${tourTitles[titleIndex]}`;

  // Generate tour description
  const descriptions = [
    `Discover the best of ${city} on this immersive tour. Experience local culture, history, and cuisine while exploring iconic landmarks and hidden gems.`,
    `Explore the vibrant streets of ${city} with a knowledgeable local guide. This tour offers an authentic taste of the city's unique atmosphere and cultural heritage.`,
    `Journey through the history of ${city} on this engaging tour. Learn fascinating stories and discover architectural masterpieces that shaped this incredible destination.`,
    `Uncover the secrets of ${city} on this unforgettable experience. Visit top attractions and off-the-beaten-path locations that most tourists never see.`,
    `Immerse yourself in the local culture of ${city} with this comprehensive tour. Sample regional cuisine, meet friendly locals, and create lasting memories.`,
  ];
  const description =
    descriptions[Math.floor(Math.random() * descriptions.length)];

  // Generate tour type
  const type = tourTypes[Math.floor(Math.random() * tourTypes.length)];

  // Generate tour themes (tags)
  const numThemes = Math.floor(Math.random() * 3) + 2; // 2-4 themes
  const tags = Array.from(
    new Set(
      Array(numThemes)
        .fill(0)
        .map(() => tourThemes[Math.floor(Math.random() * tourThemes.length)]),
    ),
  );

  // Generate tour duration
  const durationInHours =
    durations[Math.floor(Math.random() * durations.length)];

  // Generate schedule
  const schedule = generateSchedules();

  // Generate pricing details
  const currencyIndex = Math.floor(Math.random() * currencies.length);
  const currency = currencies[currencyIndex].code;
  const currencySymbol = currencies[currencyIndex].symbol;

  const pricePerPerson = Math.floor(Math.random() * 150) + 20; // $20-$170
  const price = `${currencySymbol}${pricePerPerson}`;

  // Generate group size details
  const maxGroupSize = Math.floor(Math.random() * 15) + 5; // 5-20
  const minGroupSize = Math.floor(Math.random() * 3) + 1; // 1-3

  // Generate included and not included items
  const numIncluded = Math.floor(Math.random() * 5) + 3; // 3-7 items
  const included = Array.from(
    new Set(
      Array(numIncluded)
        .fill(0)
        .map(
          () => includedItems[Math.floor(Math.random() * includedItems.length)],
        ),
    ),
  );

  const numNotIncluded = Math.floor(Math.random() * 3) + 2; // 2-4 items
  const notIncluded = Array.from(
    new Set(
      Array(numNotIncluded)
        .fill(0)
        .map(
          () =>
            notIncludedItems[
              Math.floor(Math.random() * notIncludedItems.length)
            ],
        ),
    ),
  );

  // Generate requirements
  const numRequirements = Math.floor(Math.random() * 4) + 1; // 1-4 requirements
  const requirements = Array.from(
    new Set(
      Array(numRequirements)
        .fill(0)
        .map(
          () =>
            tourRequirements[
              Math.floor(Math.random() * tourRequirements.length)
            ],
        ),
    ),
  );

  // Generate languages offered
  const languages = ["English"];
  const additionalLangs = Math.floor(Math.random() * 2);
  const possibleLangs = [
    "Spanish",
    "French",
    "German",
    "Italian",
    "Japanese",
    "Mandarin",
    "Arabic",
  ];

  for (let i = 0; i < additionalLangs; i++) {
    const lang =
      possibleLangs[Math.floor(Math.random() * possibleLangs.length)];
    if (!languages.includes(lang)) {
      languages.push(lang);
    }
  }

  // Generate cancellation policy
  const cancellationPolicy =
    cancellationPolicies[
      Math.floor(Math.random() * cancellationPolicies.length)
    ];

  // Generate flags
  const isPopular = Math.random() > 0.7; // 30% chance to be popular
  const isPetFriendly = Math.random() > 0.7; // 30% chance to be pet friendly
  const privateAvailable = Math.random() > 0.5; // 50% chance for private tours
  const reviewsCount = Math.floor(Math.random() * 100) + 5; // 5-105 reviews
  const rating = parseFloat((3.7 + Math.random() * 1.3).toFixed(1)); // 3.7-5.0

  return {
    id,
    guideId,
    title,
    description,
    city,
    country: countryName,
    region: regionName,
    languagesOffered: languages,
    durationInHours,
    price,
    tags,
    type,
    schedule,
    pricePerPerson,
    currency,
    maxGroupSize,
    minGroupSize,
    privateAvailable,
    isPopular,
    isPetFriendly,
    reviewsCount,
    included,
    notIncluded,
    requirements,
    cancellationPolicy,
    rating,
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

// Extract existing tours from a file
async function extractExistingTours(filePath) {
  // Create a tour template with default values
  const tourTemplate = {
    id: "",
    guideId: "",
    title: "",
    description: "",
    city: "",
    country: "",
    region: "",
    languagesOffered: [],
    durationInHours: 0,
    price: "",
    tags: [],
    type: "",
    schedule: [],
    pricePerPerson: 0,
    currency: "",
    maxGroupSize: 0,
    minGroupSize: 0,
    privateAvailable: false,
    isPopular: false,
    isPetFriendly: false,
    reviewsCount: 0,
    included: [],
    notIncluded: [],
    requirements: [],
    cancellationPolicy: "",
    rating: 0,
  };

  // Use the shared utility with a tour-specific parser
  const tourParser = createObjectParser(tourTemplate);
  const tours = await extractObjectsFromFile(filePath, "Tour", tourParser);

  // Add validation to prevent errors with null/empty tours array
  if (!tours || !Array.isArray(tours) || tours.length === 0) {
    console.warn(
      `Could not parse existing tours in ${filePath}, will create fresh data`,
    );
    return [];
  }

  return tours;
}

// Generate tours and write to file
async function generateCityTourFile(city) {
  const countryName = cityCountryMap[city] || "";
  const regionName = cityToRegionMap[city] || "";

  const formattedCountry = formatTitleToCamelCase(removeAccents(countryName));
  const formattedRegion = formatTitleToCamelCase(removeAccents(regionName));

  const formattedName = formatKebabToCamelCase(removeAccents(city));

  const variableName = `${formattedName}${formattedCountry}${formattedRegion}Tours`;

  const destDir = path.join(process.cwd(), "src", "lib", "constants", "tours");
  const filePath = path.join(destDir, `${formattedName}.ts`);

  // Check if directory exists
  await ensureDirectoryExists(destDir);

  // Check if file exists
  const exists = await fileExists(filePath);

  // Handle existing file based on options
  let tours = [];
  if (exists) {
    if (options.rewrite) {
      console.log(`Rewriting existing file: ${filePath}`);
    } else if (options.append) {
      console.log(`Appending ${options.append} tours to: ${filePath}`);
      tours = await extractExistingTours(filePath);
    } else {
      console.log(
        `File already exists (use --rewrite to replace): ${filePath}`,
      );
      return;
    }
  }

  // Load guides for the city
  const guides = await loadCityGuides(city);

  // Generate tours
  const numNewTours = options.append || Math.floor(Math.random() * 5) + 3; // 3-7 tours
  const newTours = Array(numNewTours)
    .fill(0)
    .map((_, index) => generateTour(city, tours.length + index, guides));

  // Combine existing and new tours
  tours = tours.concat(newTours);

  // Create file content with proper formatting
  let content = `import { Tour } from "@/lib/interfaces/services/tours";\n\n`;
  content += `export const ${variableName.replaceAll(".", "")}: Tour[] = [\n`;

  tours.forEach((tour, index) => {
    content += `  {\n`;
    for (const [key, value] of Object.entries(tour)) {
      if (typeof value === "string") {
        content += `    ${key}: "${value}",\n`;
      } else if (Array.isArray(value)) {
        if (value.length > 0 && typeof value[0] === "object") {
          // Handle schedule array of objects
          content += `    ${key}: [\n`;
          value.forEach((item, i) => {
            content += `      {\n`;
            for (const [subKey, subValue] of Object.entries(item)) {
              content += `        ${subKey}: "${subValue}",\n`;
            }
            content += `      }${i < value.length - 1 ? "," : ""}\n`;
          });
          content += `    ],\n`;
        } else {
          // Handle regular string arrays
          content += `    ${key}: [${value
            .map((item) => `"${item}"`)
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
    content += `  }${index < tours.length - 1 ? "," : ""}\n`;
  });

  content += `];\n`;

  // Write file
  await writeFile(filePath, content);
  console.log(
    `${exists && !options.rewrite ? "Updated" : "Created"} file: ${filePath}`,
  );
}

// Main function to process all cities
async function generateAllCityTourFiles() {
  let citiesToProcess = cities;

  // Filter by city name if specified
  if (options.cityFilter) {
    const filterLower = options.cityFilter
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");

    // More flexible matching - strip non-alphanumeric characters for comparison
    citiesToProcess = cities.filter((city) =>
      city
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
        .includes(filterLower),
    );

    if (citiesToProcess.length === 0) {
      console.log(`No cities found matching: ${options.cityFilter}`);
      console.log("\nAvailable cities (showing up to 10):");

      // Show possible matches to help the user
      const possibleMatches = cities
        .filter((city) =>
          city
            .toLowerCase()
            .includes(options.cityFilter.toLowerCase().split(/[ -]/).join("")),
        )
        .slice(0, 10);

      if (possibleMatches.length > 0) {
        console.log("Did you mean one of these?");
        possibleMatches.forEach((city) => console.log(`- "${city}"`));
      } else {
        // Show some random cities to help the user understand the format
        console.log("Some available cities (examples):");
        cities.slice(0, 10).forEach((city) => console.log(`- "${city}"`));
      }
      return;
    }

    console.log(
      `Processing ${citiesToProcess.length} cities matching: ${options.cityFilter}`,
    );
  }

  for (const city of citiesToProcess) {
    try {
      await generateCityTourFile(city);
    } catch (error) {
      console.error(`Error generating file for ${city}:`, error);
    }
  }
}

// Execute the script
generateAllCityTourFiles()
  .then(() => console.log("City tour files generated successfully!"))
  .catch((error) => console.error("Error generating city tour files:", error));

// Print usage information
console.log(`
Usage: node scripts/generate-city-tours.mjs [options]

Options:
  --rewrite, -r             Rewrite existing files instead of skipping them
  --append N, -a N          Append N new tours to existing files
  --city C, -c C            Process only cities matching the search term
  --guide-count X, -g X     Specify how many guides to attempt to link per city (default: 3)

Examples:
  node scripts/generate-city-tours.mjs --rewrite
  node scripts/generate-city-tours.mjs --append 3
  node scripts/generate-city-tours.mjs --city "Paris" --guide-count 5
`);
