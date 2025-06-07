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
  formatKebabToCamelCase,
  formatTitleToCamelCase,
  removeAccents,
  formatKebebToTitleCase,
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
  "Can-Am",
  "Zero",
  "Benelli",
  "CFMoto",
  "Bajaj",
  "GasGas",
];

const motorcycleModels = {
  "Harley-Davidson": [
    "Road King",
    "Street Glide",
    "Fat Boy",
    "Sportster",
    "Electra Glide",
    "Road Glide",
    "Street 750",
    "Fat Bob",
    "Heritage Classic",
    "Street Rod",
    "LiveWire",
    "Pan America",
    "Softail Slim",
    "Street Bob",
    "Fat Bob 114",
    "Low Rider S",
    "Roadster",
    "Nightster",
    "Street Glide Special",
    "Road King Special",
    "CVO Limited",
    "CVO Street Glide",
    "CVO Road Glide",
    "CVO Tri Glide",
    "CVO Breakout",
    "CVO Road King",
    "CVO Street Bob",
    "Softail",
    "Iron 883",
    "Breakout",
  ],
  Honda: [
    "CB500X",
    "Africa Twin",
    "Gold Wing",
    "Rebel",
    "CBR1000RR",
    "Shadow",
    "CB650R",
    "CB500F",
    "CBR500R",
    "CBR600RR",
    "CBR1000RR-R Fireblade",
    "CBR250RR",
    "CB125R",
    "CB300R",
    "CB500S",
    "CB650F",
    "CBR250R",
    "CBR500X",
    "CBR650F",
    "CBR1000RR SP",
    "CBR1100XX Super Blackbird",
    "CBR929RR",
    "CBR954RR",
    "CBR600F4i",
    "CBR1100XX",
    "CBR125R",
    "CBR150R",
    "CBR250R",
    "CBR300R",
    "CBR500R",
    "CBR650R",
    "CBR1000RR-R SP",
    "CRF450L",
    "CBR650R",
    "NC750X",
  ],
  Yamaha: [
    "MT-09",
    "YZF-R1",
    "Super Ténéré",
    "V Star",
    "MT-07",
    "FZ-07",
    "FZ-09",
    "Bolt",
    "Tracer 9 GT",
    "XSR700",
    "XSR900",
    "YZF-R3",
    "YZF-R6",
    "YZF-R7",
    "FZ-10",
    "FZ-6R",
    "FZ-6",
    "FZ-8",
    "FZ-03",
    "FZ-1",
    "Tenere 700",
  ],
  Kawasaki: [
    "Ninja",
    "Vulcan",
    "Versys",
    "Z900",
    "Z650",
    "Concours",
    "Ninja 650",
    "KLR 650",
    "Z125 Pro",
    "Z400",
    "Ninja 1000",
    "Ninja ZX-6R",
    "Ninja ZX-10R",
    "Ninja ZX-14R",
    "Ninja H2",
    "Ninja H2R",
    "KX450",
    "KX250",
    "KX85",
    "KX65",
    "KLX250",
    "KLX140",
    "KLX110",
    "KLX300R",
    "KX450F",
    "KX250F",
  ],
  Suzuki: [
    "GSX-R1000",
    "V-Strom",
    "Boulevard",
    "Hayabusa",
    "SV650",
    "DR-Z400",
    "GSX-S750",
    "GSX250R",
    "GSX-R600",
    "GSX-R750",
    "GSX-R125",
    "GSX-R150",
    "GSX-R250",
    "GSX-R300",
    "GSX-R400",
    "GSX-R500",
  ],
  BMW: [
    "R1250GS",
    "S1000RR",
    "F850GS",
    "K1600",
    "R nineT",
    "F750GS",
    "G310R",
    "C400GT",
    "C400X",
    "R1250RT",
    "R1250R",
    "R1250RS",
    "F900R",
    "F900XR",
    "K1600B",
    "K1600GT",
    "K1600GTL",
    "R1200GS",
  ],
  Ducati: [
    "Panigale",
    "Monster",
    "Multistrada",
    "Diavel",
    "Scrambler",
    "Hypermotard",
    "SuperSport",
    "Streetfighter V4",
    "XDiavel",
    "Panigale V2",
    "Panigale V4",
    "Monster 1200",
    "Monster 821",
    "Multistrada V4",
    "Multistrada 950",
    "Multistrada 1260",
    "Diavel 1260",
    "Diavel 1260 S",
    "Scrambler Icon",
    "Scrambler Desert Sled",
    "Scrambler Cafe Racer",
    "Scrambler Full Throttle",
    "Scrambler Sixty2",
    "Hypermotard 950",
    "Hypermotard 950 SP",
    "SuperSport 950",
    "SuperSport 950 S",
    "Streetfighter V4 S",
    "Streetfighter V4 SP",
    "Streetfighter V4 Lamborghini",
    "Streetfighter V4 Lamborghini Speciale",
    "Streetfighter V4 SP2",
    "Streetfighter V4 SP2 S",
    "Streetfighter V4 SP2 Speciale",
    "Streetfighter V4 SP2 Lamborghini",
    "Streetfighter V4 SP2 Lamborghini Speciale",
    "Streetfighter V4 SP2 S Lamborghini",
    "Streetfighter V4 SP2 S Lamborghini Speciale",
    "Streetfighter V4 SP2 S Lamborghini Speciale 2023",
    "Streetfighter V4 SP2 S Lamborghini Speciale 2024",
    "Streetfighter V4 SP2 S Lamborghini Speciale 2025",
    "Streetfighter V4 SP2 S Lamborghini Speciale 2026",
    "Streetfighter V4 SP2 S Lamborghini Speciale 2027",
    "Streetfighter V4 SP2 S Lamborghini Speciale 2028",
    "Streetfighter V4 SP2 S Lamborghini Speciale 2029",
    "Streetfighter V4 SP2 S Lamborghini Speciale 2030",
    "Streetfighter V4 SP2 S Lamborghini Speciale 2031",
    "Streetfighter V4 SP2 S Lamborghini Speciale 2032",
    "Streetfighter V4 SP2 S Lamborghini Speciale 2033",
    "Streetfighter V4 SP2 S Lamborghini Speciale 2034",
    "Streetfighter V4 SP2 S Lamborghini Speciale 2035",
    "Streetfighter V4 SP2 S Lamborghini Speciale 2036",
    "Streetfighter V4 SP2 S Lamborghini Speciale 2037",
  ],
  Triumph: [
    "Street Triple",
    "Tiger",
    "Bonneville",
    "Speed Triple",
    "Rocket 3",
    "Thruxton",
    "Scrambler",
    "Daytona Moto2 765",
    "Tiger 900",
    "Tiger 1200",
    "Tiger Sport 660",
    "Tiger 850 Sport",
    "Street Twin",
    "Street Scrambler",
    "Speed Twin",
    "Bonneville T120",
    "Bonneville Bobber",
    "Bonneville Speedmaster",
    "Rocket 3 R",
    "Rocket 3 GT",
    "Speed Triple 1200 RS",
    "Speed Triple 1200 RR",
    "Tiger 1200 GT",
    "Tiger 1200 Rally",
    "Tiger 1200 GT Pro",
    "Tiger 1200 Rally Pro",
    "Tiger 1200 GT Explorer",
    "Tiger 1200 Rally Explorer",
    "Tiger 900 GT",
    "Tiger 900 Rally",
    "Tiger 900 GT Pro",
    "Tiger 900 Rally Pro",
    "Tiger 900 GT Low",
    "Tiger 900 Rally Low",
    "Tiger 900 GT Explorer",
    "Tiger 900 Rally Explorer",
    "Street Triple RS",
    "Street Triple R",
    "Street Triple S",
    "Street Triple 765",
    "Street Triple 765 R",
    "Street Triple 765 RS",
  ],
  KTM: [
    "1290 Super Duke",
    "790 Adventure",
    "690 Enduro",
    "390 Duke",
    "1290 Super Adventure",
    "RC390",
    "690 SMC",
    "890 Adventure R",
    "890 Duke R",
    "890 Adventure",
    "890 Duke GP",
    "890 Duke",
    "890 Adventure R Rally",
    "890 Adventure R",
    "890 Adventure R Rally",
    "890 Adventure R Rally Pro",
    "890 Adventure R Rally Pro S",
    "890 Adventure R Rally Pro S Special",
    "890 Adventure R Rally Pro S Special Edition",
    "890 Adventure R Rally Pro S Special Edition 2023",
    "890 Adventure R Rally Pro S Special Edition 2024",
    "890 Adventure R Rally Pro S Special Edition 2025",
    "890 Adventure R Rally Pro S Special Edition 2026",
    "890 Adventure R Rally Pro S Special Edition 2027",
    "890 Adventure R Rally Pro S Special Edition 2028",
    "890 Adventure R Rally Pro S Special Edition 2029",
    "890 Adventure R Rally Pro S Special Edition 2030",
    "890 Adventure R Rally Pro S Special Edition 2031",
  ],
  Indian: [
    "Chief",
    "Scout",
    "Chieftain",
    "FTR",
    "Roadmaster",
    "Springfield",
    "Challenger",
    "Pursuit",
    "Dark Horse",
    "Chief Dark Horse",
    "Scout Bobber",
    "Scout Sixty",
    "Chief Vintage",
    "Chief Classic",
    "Chief Limited",
    "Chief Super Chief",
    "Chief Super Chief Limited",
    "Chief Super Chief Dark Horse",
    "Chief Super Chief Bobber",
    "Chief Super Chief Bobber Dark Horse",
    "Chief Super Chief Bobber Twenty",
    "Chief Super Chief Bobber Twenty Dark Horse",
    "Chief Super Chief Bobber Twenty Limited",
    "Chief Super Chief Bobber Twenty Limited Dark Horse",
    "Chief Super Chief Bobber Twenty Limited Dark Horse 2023",
    "Chief Super Chief Bobber Twenty Limited Dark Horse 2024",
    "Chief Super Chief Bobber Twenty Limited Dark Horse 2025",
    "Chief Super Chief Bobber Twenty Limited Dark Horse 2026",
    "Chief Super Chief Bobber Twenty Limited Dark Horse 2027",
    "Chief Super Chief Bobber Twenty Limited Dark Horse 2028",
    "Chief Super Chief Bobber Twenty Limited Dark Horse 2029",
    "Chief Super Chief Bobber Twenty Limited Dark Horse 2030",
  ],
  Victory: [
    "Cross Country",
    "Hammer",
    "Vegas",
    "Vision",
    "High-Ball",
    "Gunner",
    "Octane",
    "Judge",
    "Kingpin",
    "Cross Roads",
    "Gunner",
    "Hammer S",
    "High-Ball",
    "Judge",
    "Magnum",
    "Vision Tour",
    "Vision Street",
  ],
  Aprilia: [
    "RSV4",
    "Tuono",
    "Dorsoduro",
    "Shiver",
    "RS 660",
    "Caponord",
    "SX 125",
    "Tuareg 660",
    "RS 125",
    "RS 250",
    "RS 500",
    "RS 660 Factory",
    "RS 660 Limited Edition",
  ],
  "Moto Guzzi": [
    "V7",
    "V85 TT",
    "California",
    "Eldorado",
    "Audace",
    "Griso",
    "Norge",
    "MGX-21",
    "Bellagio",
    "Stelvio",
    "California Touring",
    "California Touring 1400",
    "California Touring 1400 Touring",
    "California Touring 1400 Touring Special",
    "California Touring 1400 Touring Special Edition",
    "California Touring 1400 Touring Special Edition 2023",
    "California Touring 1400 Touring Special Edition 2024",
    "California Touring 1400 Touring Special Edition 2025",
    "California Touring 1400 Touring Special Edition 2026",
    "California Touring 1400 Touring Special Edition 2027",
    "California Touring 1400 Touring Special Edition 2028",
  ],
  "Royal Enfield": [
    "Himalayan",
    "Classic 350",
    "Interceptor 650",
    "Continental GT",
    "Bullet",
    "Meteor",
    "Hunter",
    "Super Meteor 650",
    "Classic 500",
    "Thunderbird X",
    "Thunderbird X 500",
    "Thunderbird X 350",
    "Thunderbird X 350X",
    "Thunderbird X 500X",
    "Thunderbird X 650",
    "Thunderbird X 650X",
    "Thunderbird X 650X Special",
    "Thunderbird X 650X Special Edition",
    "Thunderbird X 650X Special Edition 2023",
    "Thunderbird X 650X Special Edition 2024",
    "Thunderbird X 650X Special Edition 2025",
    "Thunderbird X 650X Special Edition 2026",
    "Thunderbird X 650X Special Edition 2027",
  ],
  Husqvarna: [
    "Vitpilen 701",
    "Svartpilen 401",
    "FE 501",
    "701 Enduro",
    "701 Supermoto",
    "TE 300i",
    "FX 450",
    "FC 450",
    "FC 250",
    "FC 350",
    "FE 350",
    "FE 501",
    "FE 450",
    "FE 250",
    "FE 350s",
    "FE 501s",
    "FE 450s",
    "FE 250s",
    "FE 350s TE 300i",
    "FE 501s TE 300",
    "FE 450s TE 300",
    "FE 250s TE 300",
    "FE 350s TE 300",
    "FE 501s TE 300i",
    "FE 450s TE 300i",
    "FE 250s TE 300i",
    "FE 350s TE 300i",
    "FE 501s TE 300i",
    "FE 450s TE 300i",
    "FE 250s TE 300i",
    "FE 350s TE 300i",
    "FE 501s TE 300i",
    "FE 450s TE 300i",
    "FE 250s TE 300i",
    "FE 350s TE 300i",
    "FE 501s TE 300i",
    "FE 450s TE 300i",
    "FE 250s TE 300i",
    "FE 350s TE 300i",
    "FE 501s TE 300i",
    "TE 150",
  ],
  "Can-Am": [
    "Ryker",
    "Spyder F3",
    "Spyder RT",
    "Spyder ST",
    "Spyder RS",
    "Spyder GS",
    "Spyder RT Limited",
    "Spyder F3 Limited",
    "Ryker Rally Edition",
    "Ryker Sport",
    "Ryker 600",
    "Ryker 900",
    "Ryker 900 ACE",
    "Ryker 600 ACE",
    "Ryker 900 Sport",
  ],
  Zero: [
    "SR/F",
    "DSR/X",
    "FXE",
    "S",
    "DS",
    "SR",
    "D",
    "FXS",
    "FX",
    "SR/S",
    "SR/F Premium",
    "SR/S Premium",
    "SR/F ZF14.4",
  ],
  Benelli: [
    "TRK502",
    "Leoncino",
    "302S",
    "TNT135",
    "502C",
    "Tornado 302R",
    "TNT600i",
    "TNT899",
    "TNT1130",
    "502R",
    "752S",
    "Leonardo 125",
    "Leonardo 150",
    "Leonardo 250",
  ],
  CFMoto: [
    "650NK",
    "300SS",
    "650MT",
    "700CL-X",
    "300NK",
    "250SR",
    "650GT",
    "800MT",
    "700CL-X Sport",
    "650TR",
    "650TK",
    "650GT Sport",
  ],
  Bajaj: [
    "Pulsar NS200",
    "Dominar 400",
    "Avenger Street 160",
    "CT100",
    "V15",
    "V12",
    "Pulsar RS200",
    "Pulsar AS200",
    "Pulsar 220F",
    "Avenger Cruise 220",
    "Dominar 250",
  ],
  GasGas: [
    "MC 450F",
    "EC 300",
    "SM 700",
    "EX 250F",
    "EX 300",
    "EC 250",
    "MC 250F",
    "MC 125",
    "MC 85",
    "MC 65",
    "MC 50",
    "EC 450F",
    "EC 250F",
    "EC 350F",
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
  "adventure",
  "cafe racer",
  "dirt bike",
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
  "Matte White",
  "Metallic Blue",
  "Metallic Red",
  "Metallic Silver",
  "Metallic Green",
  "Metallic Yellow",
  "Metallic Orange",
  "Metallic Gray",
  "Metallic Brown",
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
  "LED Headlights",
  "Quick Shifter",
  "Traction Control",
  "Anti-lock Braking System (ABS)",
  "Adjustable Suspension",
  "Keyless Ignition",
  "Riding Modes",
  "Tire Pressure Monitoring System (TPMS)",
  "Comfort Seat",
  "Performance Tires",
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
  "Safety Gear Required",
  "Proof of Residency",
  "Emergency Contact Information",
  "Rider Training Course Completion",
];

const pickupLocations = [
  "Downtown",
  "Airport",
  "Train Station",
  "Harley-Davidson Dealership",
  "Hotel Pickup",
  "Tourist District",
  "Convention Center",
  "Transit Hub",
  "Motorcycle Dealership",
  "Residential Area",
  "Shopping Center",
  "City Center",
  "RV Park / Campground",
  "Car Rental Lot",
  "University Area",
  "Local Motorcycle Club",
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
  }

  const rentalPricePerDay = Math.floor(Math.random() * 150) + 50; // $50-$200
  const available = Math.random() > 0.3; // 70% available
  const location =
    pickupLocations[Math.floor(Math.random() * pickupLocations.length)];

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
    ? pickupLocations[Math.floor(Math.random() * pickupLocations.length)]
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
    pickUpCity: `${formatKebebToTitleCase(cityName)}`,
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
    imageUrl: `https://images.unsplash.com/${type}/${make.toLowerCase().replace(/\s+/g, "-")}-${model.toLowerCase().replace(/\s+/g, "-")}.jpg`,
    requirements,
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

  const variableName = `${formattedName}${formattedCountry.replaceAll(".", "")}${formattedRegion}Motorcycles`;

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
  let content = `// Auto-generated file for ${city} motorcycle rentals\n`;
  content += `// City: ${city}, Country: ${countryName}, Region: ${regionName}\n\n`;
  content += `import { Motorcycle } from "@/lib/interfaces/services/rentals";\n\n`;
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
  .then(() => console.log("Motorcycle rental files generated successfully!"))
  .catch((error) =>
    console.error("Error generating motorcycle rental files:", error),
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
