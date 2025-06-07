/**
 * Homestay Locations Generator Script
 * =================================
 *
 * This script generates realistic homestay data for city destinations in the Paragon Trails application.
 * It creates homestay listings with host information, stay types, house rules, guest policies,
 * and other relevant details for authentic local accommodation experiences.
 *
 * Features:
 * - Generates 2-5 homestay listings per city
 * - Each homestay contains 1-3 hosts with detailed profiles
 * - Creates appropriate folder structure in src/lib/constants/destinations/homestay
 * - Includes diverse host backgrounds and hosting styles
 * - Generates realistic house rules, guest policies, and stay types
 * - Creates check-in/check-out times and availability information
 * - Includes multilingual capabilities with regionally appropriate languages
 *
 * Usage: node scripts/generate-homestay-locations.mjs [options]
 *
 * Options:
 *   --rewrite, -r       Rewrite existing files instead of skipping them
 *   --city C, -c C      Process only cities matching the search term
 *
 * Examples:
 *   node scripts/generate-homestay-locations.mjs --rewrite
 *   node scripts/generate-homestay-locations.mjs --city "Tokyo"
 */

import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";
import { getCityFiles } from "./utils/file-utils.mjs";
import {
  formatTitleToCamelCase,
  formatKebebToTitleCase,
  removeAccents,
  formatKebabToCamelCase,
} from "./utils/format-utils.mjs";
import { cityCountryMap, cityToRegionMap } from "./utils/geo-utils.mjs";
import { getRandomLanguages } from "./utils/language-utils.mjs";
import { getRandomName } from "./utils/name-utils.mjs";

const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);

const cities = getCityFiles();

// Add check for empty cities array
if (!cities || cities.length === 0) {
  console.error("No cities found. Check the city-data.json file.");
  process.exit(1);
}

// Parse command line arguments
function parseCommandLineArgs() {
  const options = {
    rewrite: false,
    cityFilter: null,
  };

  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--rewrite" || arg === "-r") {
      options.rewrite = true;
    }

    if ((arg === "--city" || arg === "-c") && i + 1 < args.length) {
      options.cityFilter = args[++i];
    }
  }

  return options;
}

const options = parseCommandLineArgs();

// Host data generation helpers
const hostBackgrounds = [
  "Local chef specializing in traditional cuisines",
  "Former tour guide with extensive knowledge of local history",
  "Artist who loves sharing local cultural insights",
  "Long-time resident and community organizer",
  "University professor with expertise in local culture",
  "Retired schoolteacher passionate about sharing local traditions",
  "Local musician involved in the cultural scene",
  "Entrepreneur running a local business",
  "Expat who has lived in the city for over a decade",
  "Language teacher who enjoys helping visitors learn the local tongue",
  "Yoga instructor offering morning sessions",
  "Environmental activist working on local sustainability projects",
  "Digital nomad who settled in the city after falling in love with it",
  "Local historian researching regional traditions",
  "Organic farmer with a small plot on the outskirts of town",
];

const hostingStyles = [
  "laid-back",
  "hands-on",
  "private",
  "social",
  "family-oriented",
];

const stayTypes = [
  "private-room-in-home",
  "shared-room",
  "entire-home",
  "guest-suite",
  "farm-stay",
  "villa-stay",
  "cottage-stay",
  "urban-apartment-stay",
  "eco-stay",
  "traditional-homestay",
  "language-immersion",
  "culinary-homestay",
  "volunteer-stay",
  "art-or-craft-stay",
  "spiritual-or-wellness-retreat",
  "academic-homestay",
  "heritage-stay",
  "host-family-stay",
  "self-catering",
  "bed-and-breakfast",
  "pet-friendly-stay",
];

const houseRules = [
  "No smoking indoors",
  "Quiet hours after 10 PM",
  "No outside guests without permission",
  "Remove shoes when entering the home",
  "No pets allowed",
  "Pets welcome",
  "Respect shared spaces",
  "Recycle according to local guidelines",
  "No loud music after 9 PM",
  "Kitchen closed after 8 PM",
  "Breakfast is self-serve between 7-9 AM",
  "Please conserve water and electricity",
  "No food in the bedrooms",
  "Notify host if you'll be arriving after 10 PM",
  "Lock the door when leaving the house",
  "Please clean up after yourself in common areas",
  "Wi-Fi password will be provided upon arrival",
  "Laundry available on weekends only",
];

const guestPolicies = [
  "Children welcome",
  "No children under 12",
  "Senior-friendly accommodations",
  "LGBTQ+ friendly",
  "Suitable for digital nomads",
  "Perfect for long-term stays",
  "Ideal for solo travelers",
  "Great for couples",
  "Family-friendly environment",
  "Accessible for guests with mobility issues",
  "Suitable for business travelers",
  "Not suitable for infants (under 2 years)",
  "No parties or events",
  "Smoking allowed in designated areas only",
  "Pet-friendly accommodation",
];

// Format city name for variable and file naming
function formatCityName(cityName) {
  const formattedName = formatTitleToCamelCase(removeAccents(cityName));

  return {
    fileName: formattedName,
    variableName: formatKebabToCamelCase(formattedName) + "Homestays",
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

// Generate a host for a specific city
function generateHost(city) {
  const region = cityToRegionMap[city] || "";
  const country = cityCountryMap[city] || "";
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

  const languageCount = Math.floor(Math.random() * 3) + 2; // 2-4 languages
  const selectedLanguages = getRandomLanguages(
    languageCount,
    regionForLanguages,
  );
  const hostLanguages = selectedLanguages.map((lang) => lang.name);

  if (!hostLanguages.includes("English")) {
    hostLanguages.push("English");
  }

  // Use the utility function instead of concatenating random first and last names
  const name = getRandomName();

  // Extract first and last name for email generation
  const [firstName, lastName] = name.split(" ");

  const background =
    hostBackgrounds[Math.floor(Math.random() * hostBackgrounds.length)];
  const maxGuests = Math.floor(Math.random() * 6) + 1;

  // Generate a random time for curfew
  const curfewHour = Math.floor(Math.random() * 7) + 21; // 9 PM to 3 AM
  const curfew =
    curfewHour <= 24 ? `${curfewHour}:00 PM` : `${curfewHour - 12}:00 AM`;

  // Select hosting style
  const hostingStyle =
    hostingStyles[Math.floor(Math.random() * hostingStyles.length)];

  // Generate house rules (3-6 rules)
  const rulesCount = Math.floor(Math.random() * 4) + 3;
  const selectedRules = [];
  const ruleIndices = new Set();

  while (selectedRules.length < rulesCount) {
    const randomIndex = Math.floor(Math.random() * houseRules.length);
    if (!ruleIndices.has(randomIndex)) {
      ruleIndices.add(randomIndex);
      selectedRules.push(houseRules[randomIndex]);
    }
  }

  // Generate guest policies (2-4 policies)
  const policyCount = Math.floor(Math.random() * 3) + 2;
  const selectedPolicies = [];
  const policyIndices = new Set();

  while (selectedPolicies.length < policyCount) {
    const randomIndex = Math.floor(Math.random() * guestPolicies.length);
    if (!policyIndices.has(randomIndex)) {
      policyIndices.add(randomIndex);
      selectedPolicies.push(guestPolicies[randomIndex]);
    }
  }

  // Generate check-in/check-out times
  const checkInHour = Math.floor(Math.random() * 6) + 12; // 12 PM to 5 PM
  const checkOutHour = Math.floor(Math.random() * 4) + 9; // 9 AM to 12 PM
  const checkInTime = `${checkInHour}:00 PM`;
  const checkOutTime = `${checkOutHour}:00 AM`;

  // Generate stay type
  const stayType = stayTypes[Math.floor(Math.random() * stayTypes.length)];

  // Generate rating
  const rating = (Math.random() * 1.5 + 3.5).toFixed(1);

  // Generate review count
  const reviewCount = Math.floor(Math.random() * 100) + 5;

  // Generate quote
  const quotes = [
    `Staying with me means experiencing ${city} like a local. I love sharing the hidden gems of our beautiful city with my guests.`,
    `My home is your home in ${city}. I look forward to making your stay memorable and authentic.`,
    `I've lived in ${city} all my life and know all the best spots. Can't wait to share my city with you!`,
    `Welcome to my ${city} home! I believe in creating a warm, welcoming environment for all my guests.`,
    `Life in ${city} has its own rhythm. Stay with me to experience the true pulse of this amazing place.`,
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return {
    name,
    background,
    maxGuests,
    languages: hostLanguages,
    curfew,
    isPopular: Math.random() > 0.7, // 30% chance of being popular
    guestPolicy: selectedPolicies,
    hostingStyle,
    houseRules: selectedRules,
    location: {
      city: `${city}`,
      region: region,
      country: country,
      // Random coordinates near the city center (simplified)
      coordinates: {
        lat: Math.random() * 0.2 - 0.1 + 40, // Just a placeholder lat
        lng: Math.random() * 0.2 - 0.1 + 0, // Just a placeholder lng
      },
    },
    availability: {
      checkInTime,
      checkOutTime,
      calendarLink:
        Math.random() > 0.5
          ? "https://calendar.example.com/availability"
          : undefined,
    },
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@paragontrailshomestays.com`,
    phoneNumber:
      Math.random() > 0.3
        ? `+${Math.floor(Math.random() * 100) + 1}-${
            Math.floor(Math.random() * 1000) + 100
          }-${Math.floor(Math.random() * 10000) + 1000}`
        : undefined,
    isVerified: Math.random() > 0.1, // 90% chance of being verified
    rating: parseFloat(rating),
    reviewCount,
    quote,
    stayType: `${stayType}`,
  };
}

// Generate homestay data for a specific city
async function generateCityHomestays(city) {
  const { fileName, variableName } = formatCityName(city);

  const destDir = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "destinations",
    "homestay",
  );
  const filePath = path.join(destDir, `${city}.ts`);

  // Check if directory exists, create if needed
  await ensureDirectoryExists(destDir);

  // Check if file exists
  const exists = await fileExists(filePath);
  if (exists && !options.rewrite) {
    console.log(`File already exists: ${filePath}`);
    return;
  }

  // Generate 2-5 homestays for this city
  const homestayCount = Math.floor(Math.random() * 4) + 2;
  const homestays = Array(homestayCount)
    .fill(0)
    .map(() => {
      // Each homestay has 1-3 hosts
      const hostCount = Math.floor(Math.random() * 3) + 1;
      return {
        hosts: Array(hostCount)
          .fill(0)
          .map(() => generateHost(city)),
      };
    });

  // Create file content with proper formatting
  let content = `// Homestay data for ${city}\n`;
  content += `// This file is auto-generated. Do not edit manually.\n\n`;
  content += `import { Host } from "@/lib/interfaces/people/homestay";\n\n`;
  content += `export const ${variableName.replaceAll(".", "")}: Host[] = [\n`;

  // Each homestay with its hosts array
  homestays.forEach((homestay, homestayIndex) => {
    homestay.hosts.forEach((host, hostIndex) => {
      content += `      {\n`;

      // Add all host properties
      for (const [key, value] of Object.entries(host)) {
        if (key === "location") {
          const location = value;
          content += `        ${key}: {\n`;
          content += `          city: "${formatKebebToTitleCase(location.city)}",\n`;
          if (location.region)
            content += `          region: "${location.region}",\n`;
          content += `          country: "${location.country}",\n`;
          if (location.coordinates) {
            content += `          coordinates: { lat: ${location.coordinates.lat}, lng: ${location.coordinates.lng} },\n`;
          }
          content += `        },\n`;
        } else if (key === "availability") {
          const availability = value;
          content += `        ${key}: {\n`;
          content += `          checkInTime: "${availability.checkInTime}",\n`;
          content += `          checkOutTime: "${availability.checkOutTime}",\n`;
          if (availability.calendarLink)
            content += `          calendarLink: "${availability.calendarLink}",\n`;
          content += `        },\n`;
        } else if (typeof value === "string") {
          content += `        ${key}: "${value}",\n`;
        } else if (Array.isArray(value)) {
          content += `        ${key}: [${value
            .map((item) => `"${item}"`)
            .join(", ")}],\n`;
        } else if (typeof value === "number") {
          content += `        ${key}: ${value},\n`;
        } else if (typeof value === "boolean") {
          content += `        ${key}: ${value},\n`;
        }
      }

      content += `      }${hostIndex < homestay.hosts.length - 1 ? "," : ""}\n`;
    });

    content += `${homestayIndex < homestays.length - 1 ? "," : ""}\n`;
  });

  content += `];\n`;

  // Write file
  await writeFile(filePath, content);
  console.log(`Created file: ${filePath}`);
}

// Main function to process all cities
async function generateAllCityHomestays() {
  let citiesToProcess = getCityFiles();

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
      await generateCityHomestays(city);
    } catch (error) {
      console.error(`Error generating homestay data for ${city}:`, error);
    }
  }
}

// Execute the script
generateAllCityHomestays()
  .then(() => console.log("Homestay data files generated successfully!"))
  .catch((error) =>
    console.error("Error generating homestay data files:", error),
  );

// Print usage information
console.log(`
Usage: node generate-homestay-data.mjs [options]

Options:
  --rewrite, -r       Rewrite existing files instead of skipping them
  --city C, -c C      Process only cities matching the search term

Examples:
  node generate-homestay-data.mjs --rewrite
  node generate-homestay-data.mjs --city "Tokyo"
`);
