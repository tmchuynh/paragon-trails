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
  "Scenic Nature Walk",
  "Cultural Immersion Experience",
  "Art and Culture Journey",
  "Nighttime City Lights Tour",
  "Adventure Sports Experience",
  "Cultural Heritage Tour",
  "Urban Photography Journey",
  "Religious Sites Pilgrimage",
  "Nature Escape",
  "Nightlife Exploration",
  "Craft Breweries Tour",
  "Art Galleries Crawl",
  "Wine Tasting Experience",
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

// Map themes to specific tour title templates
const tourThemeToTitleMap = {
  Adventure: [
    "Thrilling Adventure Expedition",
    "Extreme Adventure Challenge",
    "Outdoor Adventure Experience",
    "Adventure Seeker's Journey",
    "Ultimate Adventure Tour",
  ],
  Art: [
    "Artistic Heritage Tour",
    "Gallery & Studio Exploration",
    "Contemporary Art Journey",
    "Art History Discovery",
    "Local Artists Showcase",
  ],
  Architecture: [
    "Architectural Marvels Tour",
    "Historic Buildings Journey",
    "Urban Design Exploration",
    "Architectural Photography Tour",
    "Famous Structures Walk",
  ],
  Beach: [
    "Coastal Paradise Tour",
    "Hidden Beaches Expedition",
    "Seaside Relaxation Journey",
    "Beach Hopping Adventure",
    "Sunset Beach Experience",
  ],
  Culture: [
    "Cultural Immersion Experience",
    "Local Traditions Tour",
    "Cultural Heritage Journey",
    "Authentic Cultural Discovery",
    "Indigenous Culture Experience",
  ],
  Culinary: [
    "Gourmet Tasting Tour",
    "Chef's Table Experience",
    "Cooking Class & Food Tour",
    "Culinary Masterclass Journey",
    "Food Connoisseur's Tour",
  ],
  "Food & Drink": [
    "Local Delicacies Tasting",
    "Street Food Safari",
    "Food & Beverage Pairing Tour",
    "Gastronomic Adventure",
    "Food Market Exploration",
  ],
  Historical: [
    "Historic Landmarks Tour",
    "Ancient Ruins Expedition",
    "History Buff's Journey",
    "Heritage Site Discovery",
    "Historical Significance Tour",
  ],
  Hiking: [
    "Scenic Trails Expedition",
    "Mountain Hiking Adventure",
    "Nature Trek Experience",
    "Wilderness Hiking Tour",
    "Panoramic Hiking Journey",
  ],
  "Local Life": [
    "Authentic Local Experience",
    "Day in the Life Tour",
    "Local Neighborhood Walk",
    "Community Immersion Journey",
    "Off the Tourist Path Tour",
  ],
  "Nature & Wildlife": [
    "Wildlife Safari Experience",
    "Biodiversity Discovery Tour",
    "Nature Reserve Expedition",
    "Wild Animal Spotting Tour",
    "Natural Habitat Journey",
  ],
  Nightlife: [
    "After Dark Experience",
    "Nightclub Hopping Tour",
    "Evening Entertainment Journey",
    "City Lights Night Tour",
    "Vibrant Nightlife Adventure",
  ],
  Photography: [
    "Perfect Shot Tour",
    "Photography Masterclass",
    "Scenic Photo Expedition",
    "Instagram-Worthy Spots Tour",
    "Professional Photography Journey",
  ],
  Religious: [
    "Sacred Sites Pilgrimage",
    "Religious Heritage Tour",
    "Temple & Shrine Journey",
    "Spiritual Landmarks Exploration",
    "Religious History Discovery",
  ],
  Shopping: [
    "Luxury Shopping Experience",
    "Local Crafts & Markets Tour",
    "Boutique Discovery Journey",
    "Artisan Shopping Adventure",
    "Souvenir Hunter's Tour",
  ],
  Sightseeing: [
    "Must-See Attractions Tour",
    "City Highlights Experience",
    "Panoramic City Tour",
    "Landmark Discovery Journey",
    "Iconic Sites Expedition",
  ],
  Spiritual: [
    "Spiritual Awakening Journey",
    "Meditation & Mindfulness Tour",
    "Spiritual Heritage Experience",
    "Soul-Searching Retreat",
    "Ancient Wisdom Discovery",
  ],
  Sports: [
    "Sports Enthusiast Tour",
    "Stadium & Arena Experience",
    "Olympic Heritage Journey",
    "Sports History Discovery",
    "Athletic Legacy Tour",
  ],
  Wellness: [
    "Rejuvenation & Spa Experience",
    "Holistic Wellness Journey",
    "Health & Wellness Discovery",
    "Mind-Body Balance Tour",
    "Natural Healing Experience",
  ],
  "Wine & Spirits": [
    "Wine Tasting Experience",
    "Vineyard & Winery Tour",
    "Craft Spirits Journey",
    "Sommelier's Selection Tour",
    "Wine Region Discovery",
  ],
  Scenic: [
    "Breathtaking Views Tour",
    "Scenic Lookout Journey",
    "Picturesque Landscape Experience",
    "Panoramic Vista Expedition",
    "Natural Beauty Discovery",
  ],
  Festival: [
    "Festival Celebration Experience",
    "Cultural Festival Tour",
    "Seasonal Festival Journey",
    "Traditional Festivities Tour",
    "Festival Behind-the-Scenes",
  ],
  Music: [
    "Musical Heritage Tour",
    "Live Music Experience",
    "Music Venue Exploration",
    "Sound & Culture Journey",
    "Famous Musicians Trail",
  ],
  Luxury: [
    "VIP Luxury Experience",
    "Exclusive Access Tour",
    "Premium Services Journey",
    "Five-Star Experience",
    "Luxury Lifestyle Tour",
  ],
  Eco: [
    "Sustainable Eco Tour",
    "Conservation Experience",
    "Eco-Friendly Discovery",
    "Green Tourism Journey",
    "Environmental Learning Tour",
  ],
  Family: [
    "Family Fun Adventure",
    "Kid-Friendly Exploration",
    "All-Ages Experience",
    "Family Memory-Making Tour",
    "Interactive Family Journey",
  ],
  Solo: [
    "Solo Traveler's Discovery",
    "Independent Explorer Tour",
    "Solo Adventure Experience",
    "Self-Guided Journey",
    "Personal Discovery Tour",
  ],
  Romantic: [
    "Couples Retreat Experience",
    "Romantic Getaway Tour",
    "Honeymoon Special Journey",
    "Intimate Discovery Tour",
    "Love Story Experience",
  ],
  "LGBTQ+ Friendly": [
    "Pride History Tour",
    "LGBTQ+ Heritage Experience",
    "Queer Culture Discovery",
    "Pride Landmarks Journey",
    "LGBTQ+ Community Exploration",
  ],
  "Off the Beaten Path": [
    "Hidden Gems Discovery",
    "Secret Spots Tour",
    "Unexplored Territories Journey",
    "Local Secrets Experience",
    "Beyond The Guidebook Tour",
  ],
  Educational: [
    "Learning Adventure Tour",
    "Academic Insights Journey",
    "Educational Exploration",
    "Interactive Learning Experience",
    "Knowledge Discovery Tour",
  ],
  Volunteer: [
    "Meaningful Impact Experience",
    "Community Service Tour",
    "Volunteer Opportunity Journey",
    "Give-Back Adventure",
    "Social Impact Discovery",
  ],
  "Cruise Stop": [
    "Port Highlight Experience",
    "Shore Excursion Tour",
    "Port-of-Call Journey",
    "Day in Port Adventure",
    "Cruise Passenger's Special",
  ],
  "Local Market": [
    "Market Explorer Tour",
    "Vendor & Stall Journey",
    "Bargain Hunter's Experience",
    "Market Treasures Discovery",
    "Farmer's Market Tour",
  ],
  "Street Food": [
    "Street Food Tasting Adventure",
    "Local Street Eats Tour",
    "Food Cart Expedition",
    "Street Cuisine Journey",
    "Food Vendor Discovery",
  ],
};

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

// Map tour types to specific title templates
const tourTypeToTitleMap = {
  "Walking Tour": [
    "Guided Walking Adventure",
    "On-Foot Exploration",
    "Pedestrian Discovery Tour",
    "Walking Excursion",
    "Step-by-Step Journey",
  ],
  "Bike Tour": [
    "Cycling Discovery",
    "Two-Wheel Adventure",
    "Scenic Bicycle Expedition",
    "Pedal Through History",
    "Urban Cycling Journey",
  ],
  "Boat Tour": [
    "Nautical Adventure",
    "Waterway Exploration",
    "Scenic Cruise Experience",
    "Maritime Discovery",
    "Aquatic Journey",
  ],
  "Food Tour": [
    "Culinary Walk",
    "Taste Exploration",
    "Flavor Discovery Journey",
    "Local Bites Adventure",
    "Gastronomic Expedition",
  ],
  "Wine Tour": [
    "Wine Connoisseur's Journey",
    "Vineyard Exploration",
    "Fine Wine Discovery",
    "Wine Tasting Adventure",
    "Vintner's Secret Tour",
  ],
  "Brewery Tour": [
    "Craft Beer Journey",
    "Brewery Hopping Adventure",
    "Beer Tasting Expedition",
    "Brewing Process Discovery",
    "Hops & Malts Experience",
  ],
  "Cultural Tour": [
    "Cultural Heritage Journey",
    "Local Traditions Discovery",
    "Cultural Immersion Experience",
    "Heritage & Customs Tour",
    "Cultural Identity Exploration",
  ],
  "Historical Tour": [
    "Journey Through Time",
    "Historic Landmarks Experience",
    "Past & Present Discovery",
    "Heritage Site Expedition",
    "Time Traveler's Tour",
  ],
  "Religious Tour": [
    "Sacred Sites Journey",
    "Spiritual Heritage Walk",
    "Religious Landmarks Tour",
    "Faith & History Discovery",
    "Pilgrimage Experience",
  ],
  "Museum Tour": [
    "Curated Museum Experience",
    "Art & Artifact Journey",
    "Museum Highlights Tour",
    "Collection Explorer",
    "Exhibition Discovery",
  ],
  "Nature Tour": [
    "Natural Wonders Expedition",
    "Flora & Fauna Discovery",
    "Nature Lover's Journey",
    "Wilderness Exploration",
    "Outdoor Natural Experience",
  ],
  "Photography Tour": [
    "Perfect Shot Expedition",
    "Photographer's Dream Tour",
    "Camera-Ready Journey",
    "Visual Discovery Experience",
    "Photography Workshop Adventure",
  ],
  "Adventure Tour": [
    "Adrenaline Seeker's Journey",
    "Thrill-Packed Experience",
    "Adventure Challenge Tour",
    "Extreme Activity Expedition",
    "Outdoor Adventure Discovery",
  ],
  "Private Tour": [
    "Exclusive Private Experience",
    "Personalized Journey",
    "Custom Adventure",
    "VIP Discovery Tour",
    "Personal Guide Experience",
  ],
};

// ...existing code...

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

  // Select random theme and type
  const themeIndex = Math.floor(Math.random() * tourThemes.length);
  const theme = tourThemes[themeIndex];
  const type = tourTypes[Math.floor(Math.random() * tourTypes.length)];

  // Generate title considering both theme and type
  let title = "";

  // First try to use a type-specific title (33% chance)
  if (tourTypeToTitleMap[type] && Math.random() < 0.33) {
    const typeSpecificTitles = tourTypeToTitleMap[type];
    title =
      typeSpecificTitles[Math.floor(Math.random() * typeSpecificTitles.length)];
  }
  // Otherwise use a theme-specific title (if available)
  else if (tourThemeToTitleMap[theme]) {
    const themeSpecificTitles = tourThemeToTitleMap[theme];
    title =
      themeSpecificTitles[
        Math.floor(Math.random() * themeSpecificTitles.length)
      ];
  }
  // Fallback to generic titles
  else {
    const titleIndex = Math.floor(Math.random() * tourTitles.length);
    title = tourTitles[titleIndex];
  }

  // Combine theme and type into title if not already reflected (20% chance)
  if (Math.random() < 0.2) {
    // Extract the type's main activity (remove "Tour", "Class", etc.)
    const typeActivity = type.split(" ")[0];
    if (!title.includes(typeActivity)) {
      title = `${title}`;
    }
  }

  // Add city to the title if not already there
  if (!title.includes(city)) {
    title = `${title}`;
  }

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
          () => includedItems[Math.floor(Math.random() * includedItems.length)]
        )
    )
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
            ]
        )
    )
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
            ]
        )
    )
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
      `Could not parse existing tours in ${filePath}, will create fresh data`
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
        `File already exists (use --rewrite to replace): ${filePath}`
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
    `${exists && !options.rewrite ? "Updated" : "Created"} file: ${filePath}`
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
        .includes(filterLower)
    );

    if (citiesToProcess.length === 0) {
      console.log(`No cities found matching: ${options.cityFilter}`);
      console.log("\nAvailable cities (showing up to 10):");

      // Show possible matches to help the user
      const possibleMatches = cities
        .filter((city) =>
          city
            .toLowerCase()
            .includes(options.cityFilter.toLowerCase().split(/[ -]/).join(""))
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
      `Processing ${citiesToProcess.length} cities matching: ${options.cityFilter}`
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
