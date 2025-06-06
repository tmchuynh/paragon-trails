/**
 * Luxury Car Rentals Generator Script
 * ==================================
 *
 * This script generates realistic luxury car rental data for city destinations in the Paragon Trails application.
 * It creates detailed luxury vehicle listings with properties like make, model, features, pricing,
 * availability, and other specifications for each city.
 *
 * Features:
 * - Generates 3-7 luxury cars per city by default
 * - Creates appropriate folder structure in src/lib/constants/rentals/cars
 * - Supports filtering by specific car types
 * - Includes realistic specifications, features, and pricing
 * - Adapts currency based on location (country/region)
 * - Generates realistic pickup and dropoff locations
 *
 * Usage: node scripts/generate-city-cars.mjs [options]
 *
 * Options:
 *   --rewrite, -r       Rewrite existing files instead of skipping them
 *   --append N, -a N    Append N new cars to existing files
 *   --type T, -t T      Generate cars of a specific type (options: Sedan, SUV, Convertible,
 *                       Coupe, Sports Car, Electric, Hybrid, Limousine)
 *   --city C, -c C      Process only cities matching the search term
 *
 * Examples:
 *   node scripts/generate-city-cars.mjs --rewrite
 *   node scripts/generate-city-cars.mjs --append 5
 *   node scripts/generate-city-cars.mjs --type "Convertible"
 *   node scripts/generate-city-cars.mjs --city "Monaco" --append 3 --type "Sports Car"
 */

import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";
import { getCityFiles } from "./utils/file-utils.mjs";
import {
  formatKebabToCamelCase,
  formatTitleToCamelCase,
  formatKebebToTitleCase,
  removeAccents,
} from "./utils/format-utils.mjs";
import {
  cityCountryMap,
  cityToRegionMap,
  countryCurrencyMap,
  euroCountries,
  regionCurrencyMap,
} from "./utils/geo-utils.mjs";

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
    carType: null,
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
      const value = args[++i];
      const validTypes = [
        "Sedan",
        "SUV",
        "Convertible",
        "Coupe",
        "Sports Car",
        "Electric",
        "Hybrid",
        "Limousine",
      ];
      if (validTypes.includes(value)) {
        options.carType = value;
      }
    }

    if ((arg === "--city" || arg === "-c") && i + 1 < args.length) {
      options.cityFilter = args[++i];
    }
  }

  return options;
}

const options = parseCommandLineArgs();

// Car data generation constants
const carMakes = {
  Sedan: [
    "Mercedes-Benz",
    "BMW",
    "Audi",
    "Lexus",
    "Cadillac",
    "Jaguar",
    "Genesis",
    "Volvo",
    "Infiniti",
    "Acura",
    "Lincoln",
    "Chrysler",
    "Tesla",
  ],
  SUV: [
    "Range Rover",
    "Porsche",
    "Bentley",
    "Lamborghini",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Rolls-Royce",
    "Cadillac",
    "Lexus",
    "Genesis",
    "Volvo",
    "Rivian",
    "Infiniti",
    "Lincoln",
  ],
  Convertible: [
    "Ferrari",
    "Porsche",
    "Bentley",
    "Mercedes-Benz",
    "Aston Martin",
    "BMW",
    "Jaguar",
    "Maserati",
    "Lamborghini",
    "Rolls-Royce",
    "Audi",
    "Chevrolet",
    "Ford",
  ],
  Coupe: [
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Lexus",
    "Porsche",
    "Ferrari",
    "Lamborghini",
    "McLaren",
    "Aston Martin",
    "Maserati",
    "Infiniti",
    "Chevrolet",
  ],
  "Sports Car": [
    "Ferrari",
    "Lamborghini",
    "McLaren",
    "Porsche",
    "Aston Martin",
    "Bugatti",
    "Koenigsegg",
    "Pagani",
    "Lotus",
    "Maserati",
    "Corvette",
    "Nissan",
    "Toyota",
  ],
  Electric: [
    "Tesla",
    "Lucid",
    "Porsche",
    "Audi",
    "BMW",
    "Mercedes-Benz",
    "Jaguar",
    "Rivian",
    "Polestar",
    "Genesis",
    "Cadillac",
    "Ford",
    "Volkswagen",
    "Kia",
    "Hyundai",
  ],
  Hybrid: [
    "Lexus",
    "BMW",
    "Mercedes-Benz",
    "Porsche",
    "Ferrari",
    "McLaren",
    "Lamborghini",
    "Aston Martin",
    "Bentley",
    "Land Rover",
    "Toyota",
    "Ford",
    "Honda",
    "Hyundai",
  ],
  Limousine: [
    "Mercedes-Benz",
    "Rolls-Royce",
    "Bentley",
    "Cadillac",
    "Lincoln",
    "Chrysler",
    "Maybach",
    "BMW",
    "Lexus",
    "Jaguar",
    "Audi",
  ],
};

const carModels = {
  "Mercedes-Benz": [
    "S-Class",
    "E-Class",
    "C-Class",
    "AMG GT",
    "GLS",
    "GLE",
    "GLC",
    "SL",
    "Maybach S-Class",
  ],
  BMW: [
    "7 Series",
    "5 Series",
    "X7",
    "X5",
    "X6",
    "8 Series",
    "M8",
    "M5",
    "M3",
    "i7",
    "i4",
  ],
  Audi: ["A8", "A7", "Q8", "Q7", "RS7", "RS6", "S8", "e-tron GT", "R8"],
  Lexus: ["LS", "LC", "LX", "GX", "RX", "IS", "ES", "RC F"],
  Cadillac: ["Escalade", "CT6", "CT5", "XT6", "Celestiq"],
  Jaguar: ["F-TYPE", "XJ", "F-PACE", "I-PACE"],
  Maserati: ["Quattroporte", "Ghibli", "Levante", "MC20", "GranTurismo"],
  Genesis: ["G90", "G80", "GV80", "GV70"],
  "Rolls-Royce": ["Phantom", "Ghost", "Wraith", "Dawn", "Cullinan"],
  Volvo: ["S90", "XC90", "V90"],
  "Range Rover": ["Range Rover", "Range Rover Sport", "Velar", "Evoque"],
  Porsche: ["911", "Cayenne", "Panamera", "Taycan", "Macan"],
  Bentley: ["Continental GT", "Bentayga", "Flying Spur"],
  Lamborghini: ["Urus", "Aventador", "Huracán"],
  Ferrari: ["296 GTB", "SF90 Stradale", "Roma", "F8 Tributo", "812 Superfast"],
  "Aston Martin": ["DB11", "DBS Superleggera", "Vantage", "DBX"],
  McLaren: ["720S", "Artura", "GT", "765LT"],
  Bugatti: ["Chiron", "Veyron"],
  Koenigsegg: ["Jesko", "Gemera", "Regera"],
  Pagani: ["Huayra", "Zonda"],
  Lotus: ["Evija", "Emira"],
  Tesla: ["Model S", "Model X", "Model 3", "Model Y", "Roadster"],
  Lucid: ["Air"],
  Rivian: ["R1S", "R1T"],
  Polestar: ["Polestar 1", "Polestar 2"],
  Lincoln: ["Continental", "Navigator"],
  Chrysler: ["300"],
  Maybach: ["S 580", "S 680"],
  Infiniti: ["Q50", "Q60", "QX80", "QX60", "QX55"],
  Acura: ["TLX", "RLX", "MDX", "RDX", "NSX"],
  Lincoln: ["Aviator", "Corsair", "Nautilus"],
  Chrysler: ["Pacifica", "300"],
  Chevrolet: ["Corvette", "Camaro", "Bolt EUV"],
  Ford: ["Mustang", "F-150 Lightning", "Explorer Hybrid", "Escape PHEV"],
  Toyota: ["Camry Hybrid", "Prius", "Mirai", "GR Supra"],
  Honda: ["Accord Hybrid", "Clarity", "Insight", "CR-V Hybrid"],
  Hyundai: ["Ioniq 5", "Ioniq 6", "Sonata Hybrid", "Tucson Hybrid"],
  Kia: ["EV6", "Niro EV", "Sorento PHEV"],
  Volkswagen: ["ID.4", "Arteon", "Passat", "Touareg"],
  Corvette: ["C8 Stingray", "Z06", "E-Ray"],
  Maybach: ["S 680", "GLS 600"],
};

const carFeatures = [
  // Comfort & Convenience
  "Leather Seats",
  "Heated Seats",
  "Ventilated Seats",
  "Massage Seats",
  "Electric Adjustable Seats",
  "Third-Row Seating",
  "Power Tailgate",
  "Remote Start",
  "Keyless Entry",
  "Push-Button Start",
  "Dual-Zone Climate Control",
  "Tri-Zone Climate Control",
  "Ambient Lighting",

  // Tech
  "GPS Navigation",
  "Bluetooth",
  "Wireless Charging",
  "Apple CarPlay",
  "Android Auto",
  "Heads-Up Display",
  "Digital Cockpit",
  "Wi-Fi Hotspot",
  "Touchscreen Display",
  "Rear Entertainment System",

  // Safety
  "Backup Camera",
  "360-Degree Camera",
  "Blind Spot Monitoring",
  "Lane Keep Assist",
  "Adaptive Cruise Control",
  "Automatic Emergency Braking",
  "Parking Sensors",
  "Cross Traffic Alert",
  "Night Vision",
  "Driver Attention Monitoring",

  // Performance & Utility
  "All-Wheel Drive",
  "Four-Wheel Drive",
  "Performance Tires",
  "Tow Package",
  "Sport Suspension",
  "Adjustable Ride Height",
  "Launch Control",

  // Exterior
  "Sunroof",
  "Panoramic Roof",
  "Convertible Roof",
  "Roof Rack",
  "Running Boards",
  "LED Headlights",
  "Fog Lights",

  // Audio & Media
  "Premium Sound System",
  "Satellite Radio",
  "Voice Control",
];

const carColors = [
  // Luxury/Tinted Variants
  "British Racing Green",
  "Champagne",
  "Burgundy",
  "Midnight Blue",
  "Alpine White",
  "Moonlight Silver",
  "Pearl White",
  "Sunset Orange",
  "Glacier White",
  "Diamond Black",
  "Emerald Green",
  "Sapphire Blue",
  "Ruby Red",
  "Ivory",

  // Modern Finishes
  "Matte Black",
  "Carbon Black",
  "Metallic Silver",
  "Gunmetal Gray",
  "Cement Gray",
  "Nardo Gray",
  "Matte Gray",
  "Steel Blue",
  "Canyon Red",
  "Forest Green",
  "Bronze",
  "Rose Gold",
  "Copper",
  "Ice Blue",
  "Ocean Teal",
  "Graphite",
  "Lava Orange",
  "Amethyst Purple",
];

const pickupLocations = [
  "Main Terminal", // General airport terminal
  "VIP Terminal", // Private or premium terminal
  "Car Rental Center", // Dedicated car rental facility (often offsite)
  "Airport Curbside", // Direct curbside pickup at airport
  "Hotel Lobby", // Valet or front desk pickup
  "Downtown Office", // Rental branch in city center
  "Train Station", // Common for urban or intercity pickup
  "Bus Terminal", // Useful for intermodal travelers
  "Convention Center", // For events or business travelers
  "Residential Address", // Home delivery or peer-to-peer rental
  "Shopping Mall", // Parking garage pickup or storefront
  "Cruise Port", // For cities with major cruise terminals
  "Transit Hub", // Covers subway/light rail stations
  "University Campus", // Common for student rentals or short trips
  "Dealer Lot", // Often used for peer-to-peer pickup
];

// Generate a random luxury car with all required properties
function generateLuxuryRentalCar(city, index) {
  // Determine car type - use specific type if provided, otherwise random
  const carTypes = [
    "Sedan",
    "SUV",
    "Convertible",
    "Coupe",
    "Sports Car",
    "Electric",
    "Hybrid",
    "Limousine",
  ];
  const carType =
    options.carType || carTypes[Math.floor(Math.random() * carTypes.length)];

  // Select car make based on type
  const makesForType = carMakes[carType];
  const make = makesForType[Math.floor(Math.random() * makesForType.length)];

  // Select car model based on make
  const models = carModels[make] || ["Premium"];
  const model = models[Math.floor(Math.random() * models.length)];

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

  // Generate ID
  const id = `car-${city.toLowerCase().replace(/\s+/g, "-")}-${make.toLowerCase().replace(/\s+/g, "-")}-${index + 1}`;

  // Generate year (between 2019 and 2023)
  const year = Math.floor(Math.random() * 5) + 2019;

  // Generate seats (based on car type)
  let seats;
  switch (carType) {
    case "Sports Car":
      seats = Math.random() < 0.7 ? 2 : 4;
      break;
    case "Sedan":
    case "Coupe":
      seats = Math.random() < 0.8 ? 5 : 4;
      break;
    case "SUV":
      seats = Math.random() < 0.5 ? 5 : 7;
      break;
    case "Limousine":
      seats = Math.floor(Math.random() * 4) + 4; // 4-7
      break;
    default:
      seats = Math.floor(Math.random() * 3) + 2; // 2-4
  }

  // Generate transmission (mostly automatic for luxury cars)
  const transmission = Math.random() < 0.9 ? "Automatic" : "Manual";

  // Generate fuel type (based on car type)
  let fuelType;
  if (carType === "Electric") {
    fuelType = "Electric";
  } else if (carType === "Hybrid") {
    fuelType = "Hybrid";
  } else {
    fuelType = Math.random() < 0.7 ? "Petrol" : "Diesel";
  }

  // Generate horsepower
  const horsepowerBase = {
    Sedan: 250,
    SUV: 300,
    Convertible: 350,
    Coupe: 400,
    "Sports Car": 500,
    Electric: 450,
    Hybrid: 375,
    Limousine: 325,
  };
  const horsepower = horsepowerBase[carType] + Math.floor(Math.random() * 200);

  // Generate color options (3-5 colors)
  const numColors = Math.floor(Math.random() * 3) + 3;
  const colorOptions = Array.from(
    new Set(
      Array(numColors)
        .fill(0)
        .map(() => carColors[Math.floor(Math.random() * carColors.length)])
    )
  );

  // Generate features (5-10 features)
  const numFeatures = Math.floor(Math.random() * 6) + 5;
  const features = Array.from(
    new Set(
      Array(numFeatures)
        .fill(0)
        .map(() => carFeatures[Math.floor(Math.random() * carFeatures.length)])
    )
  );

  // Generate rental price per day (based on car type and make)
  let basePrice;
  switch (carType) {
    case "Sports Car":
      basePrice = 1000;
      break;
    case "Limousine":
      basePrice = 800;
      break;
    case "Convertible":
      basePrice = 600;
      break;
    case "Electric":
    case "Hybrid":
      basePrice = 500;
      break;
    case "SUV":
      basePrice = 450;
      break;
    case "Coupe":
      basePrice = 400;
      break;
    default:
      basePrice = 300;
  }

  // Premium brands add to the price
  if (
    [
      "Ferrari",
      "Lamborghini",
      "Rolls-Royce",
      "Bentley",
      "Bugatti",
      "McLaren",
    ].includes(make)
  ) {
    basePrice *= 1.8;
  } else if (["Porsche", "Aston Martin", "Maserati"].includes(make)) {
    basePrice *= 1.5;
  } else if (
    ["Mercedes-Benz", "BMW", "Audi", "Lexus", "Jaguar"].includes(make)
  ) {
    basePrice *= 1.2;
  }

  const rentalPricePerDay = Math.round(basePrice + Math.random() * 200);

  // Currency based on country (simplified)
  // const country = cityCountryMap[city] || "";
  // let currency;
  // if (["United States", "Puerto Rico"].includes(country)) {
  //   currency = "USD";
  // } else if (["United Kingdom"].includes(country)) {
  //   currency = "GBP";
  // } else if (["Japan"].includes(country)) {
  //   currency = "JPY";
  // } else {
  //   currency = "EUR"; // Default to EUR for most locations
  // }

  // Availability (70% chance of being available)
  const available = Math.random() < 0.7;

  // Pick-up location
  const pickUpLocation =
    pickupLocations[Math.floor(Math.random() * pickupLocations.length)];

  // Generate image URL
  const imageUrl = `https://paragon-trails-car-images.com/${carType.toLowerCase().replace(/\s+/g, "-")}/${make.toLowerCase().replace(/\s+/g, "-")}-${model.toLowerCase().replace(/\s+/g, "-")}.jpg`;

  // Generate description
  const descriptions = [
    `Experience the luxury and power of the ${year} ${make} ${model}. This stunning ${carType.toLowerCase()} offers an unforgettable driving experience in ${city}.`,
    `Discover ${city} in style with the ${year} ${make} ${model}. With ${horsepower} horsepower and premium features, this ${carType.toLowerCase()} is the perfect companion for your journey.`,
    `The ${year} ${make} ${model} combines elegance with performance. Enjoy premium features like ${features[0]} and ${features[1]} while exploring ${city} in this remarkable ${carType.toLowerCase()}.`,
    `Turn heads in ${city} with the sophisticated ${year} ${make} ${model}. This exceptional ${carType.toLowerCase()} offers unparalleled luxury and performance for discerning drivers.`,
    `Elevate your ${city} experience with the prestigious ${year} ${make} ${model}. This high-performance ${carType.toLowerCase()} delivers an incomparable driving experience with premium comfort.`,
  ];

  const description =
    descriptions[Math.floor(Math.random() * descriptions.length)];

  // Minimum rental age (usually 25 for luxury cars, 30 for exotic)
  const minimumRentalAge =
    ["Sports Car", "Convertible"].includes(carType) ||
    ["Ferrari", "Lamborghini", "McLaren", "Bugatti"].includes(make)
      ? 30
      : 25;

  // Generate deposit amount (typically 1.5-3x daily rate)
  const depositMultiplier = Math.floor(Math.random() * 3) + 2; // 2-4x daily rate
  const depositAmount = rentalPricePerDay * depositMultiplier;

  // Generate insurance included (50% chance)
  const insuranceIncluded = Math.random() < 0.5;

  return {
    id,
    make,
    model,
    year,
    type: carType,
    seats,
    transmission,
    fuelType,
    horsepower,
    colorOptions,
    features,
    rentalPricePerDay,
    currency, // Now using location-based currency
    available,
    pickUpCity: `${formatKebebToTitleCase(city)}`,
    pickUpCountry: country,
    pickUpLocation,
    imageUrl,
    description,
    insuranceIncluded,
    minimumRentalAge,
    depositAmount,
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

// Extract existing cars from a file
async function extractExistingCars(filePath) {
  try {
    const content = await readFile(filePath, "utf-8");
    const match = content.match(
      /export const \w+: LuxuryRentalCar\[\] = \[([\s\S]*?)\];/,
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
          console.warn("Failed to parse car:", e);
          currentItem = "";
        }
      }
    }

    return items;
  } catch (e) {
    console.error("Error extracting cars:", e);
    return [];
  }
}

// Generate cars and write to file
async function generateCityFile(city) {
  const countryName = cityCountryMap[city] || "";
  const regionName = cityToRegionMap[city] || "";

  const formattedCountry = formatTitleToCamelCase(removeAccents(countryName));
  const formattedRegion = formatTitleToCamelCase(removeAccents(regionName));

  const formattedName = formatKebabToCamelCase(removeAccents(city));

  // Follow the same variable naming convention as yachts
  let variableName;
  if (formattedCountry && formattedRegion) {
    variableName = `${formattedName}${formattedCountry.replaceAll(".", "")}${formattedRegion}Cars`;
  } else {
    variableName = `${formattedName}Cars`;
  }

  const destDir = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "rentals",
    "cars",
  );
  const filePath = path.join(destDir, `${formattedName}.ts`);

  // Check if directory exists
  await ensureDirectoryExists(destDir);

  // Check if file exists
  const exists = await fileExists(filePath);

  // Handle existing file based on options
  let cars = [];
  if (exists) {
    if (options.rewrite) {
      console.log(`Rewriting existing file: ${filePath}`);
    } else if (options.append) {
      console.log(`Appending ${options.append} cars to: ${filePath}`);
      cars = await extractExistingCars(filePath);
    } else {
      console.log(
        `File already exists (use --rewrite to replace): ${filePath}`,
      );
      return;
    }
  }

  // Generate cars
  const numNewCars = options.append || Math.floor(Math.random() * 5) + 3; // 3-7 cars
  const newCars = Array(numNewCars)
    .fill(0)
    .map((_, index) => generateLuxuryRentalCar(city, index + cars.length));

  // Combine existing and new cars
  cars = cars.concat(newCars);

  // Create file content with proper formatting
  let content = `import { LuxuryRentalCar } from "@/lib/interfaces/services/rentals";\n\n`;
  content += `export const ${variableName}: LuxuryRentalCar[] = [\n`;

  cars.forEach((car, index) => {
    content += `  {\n`;
    for (const [key, value] of Object.entries(car)) {
      if (typeof value === "string") {
        content += `    ${key}: "${value}",\n`;
      } else if (Array.isArray(value)) {
        content += `    ${key}: [${value
          .map((item) => `"${item}"`)
          .join(", ")}],\n`;
      } else {
        content += `    ${key}: ${value},\n`;
      }
    }
    content += `  }${index < cars.length - 1 ? "," : ""}\n`;
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
  .then(() => console.log("City luxury car files generated successfully!"))
  .catch((error) =>
    console.error("Error generating city luxury car files:", error),
  );

// Print usage information
console.log(`
Usage: node scripts/generate-city-cars.mjs [options]

Options:
  --rewrite, -r       Rewrite existing files instead of skipping them
  --append N, -a N    Append N new cars to existing files
  --type T, -t T      Generate cars of a specific type (options: Sedan, SUV, Convertible, Coupe, Sports Car, Electric, Hybrid, Limousine)
  --city C, -c C      Process only cities matching the search term

Examples:
  node scripts/generate-city-cars.mjs --rewrite
  node scripts/generate-city-cars.mjs --append 5
  node scripts/generate-city-cars.mjs --type "Convertible"
  node scripts/generate-city-cars.mjs --city "Monaco" --append 3 --type "Sports Car"
`);
