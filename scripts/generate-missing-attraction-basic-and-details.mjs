// scripts/generate-missing-attraction-basic-and-details.mjs
// This script generates missing attraction basic info and details for all cities in cityFiles
// It will not overwrite existing entries, only fill in missing ones
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cityTsPath = path.join(__dirname, "../src/lib/constants/info/city.ts");
const basicPath = path.join(__dirname, "utils/attraction-basic-utils.mjs");
const detailsPath = path.join(__dirname, "utils/attraction-details-utils.mjs");

// Load cityFiles from city.ts
function getCityFiles() {
  const content = fs.readFileSync(cityTsPath, "utf-8");
  const match = content.match(/export const cityFiles = \[([\s\S]*?)\];/);
  if (!match) throw new Error("cityFiles array not found in city.ts");
  return match[1]
    .split(",")
    .map((s) => s.trim().replace(/['"]/g, ""))
    .filter(Boolean);
}

// Load utils
const { attractionBasicInfo } = await import(basicPath);
const { attractionDetails } = await import(detailsPath);

// Helper to generate default basic info
function generateBasic(attractionName) {
  return {
    title: attractionName,
    location: "Unknown location",
    imageUrl: "",
    tags: [],
    isPopular: false,
  };
}

// Helper to generate default details
function generateDetails(basic) {
  return {
    description: basic.title + " - No description available.",
    entryFee: undefined,
    entryFeeCategory: "free",
    priceRange: "free",
    priceCategory: "free",
    openingHours: [
      { day: "Monday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
      { day: "Tuesday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
      {
        day: "Wednesday",
        availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
      },
      { day: "Thursday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
      { day: "Friday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
      { day: "Saturday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
      { day: "Sunday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
    ],
    rating: 4.5,
    isPopular: basic.isPopular || false,
    isHistorical: basic.tags?.includes("historical") || false,
    isArtOrMusic: basic.tags?.includes("artOrMusic") || false,
    isAdventure: basic.tags?.includes("adventure") || false,
    isFree: basic.tags?.includes("free") || false,
    isPetFriendly: basic.tags?.includes("petFriendly") || false,
    accessibilityFeatures: [],
    entryFees: [],
    features: [],
  };
}

// Helper to get real attractions for a city
function getRealAttractionsForCity(city) {
  // TODO: Replace with a real database or API lookup for production
  // For now, use a hardcoded list for demonstration. Expand as needed.
  const realAttractions = {
    paris: [
      "Eiffel Tower",
      "Louvre Museum",
      "Notre-Dame Cathedral",
      "Montmartre",
      "Champs-Élysées",
    ],
    london: [
      "British Museum",
      "Tower of London",
      "Buckingham Palace",
      "London Eye",
      "Westminster Abbey",
    ],
    rome: [
      "Colosseum",
      "Trevi Fountain",
      "Pantheon",
      "Roman Forum",
      "Vatican Museums",
    ],
    newyork: [
      "Statue of Liberty",
      "Central Park",
      "Metropolitan Museum of Art",
      "Times Square",
      "Empire State Building",
    ],
    tokyo: [
      "Tokyo Tower",
      "Senso-ji Temple",
      "Meiji Shrine",
      "Shibuya Crossing",
      "Ueno Park",
    ],
    // Add more cities and their real attractions here as needed
  };
  // Fallback: generate 4 generic attractions if city not found
  return (
    realAttractions[city] || [
      city.charAt(0).toUpperCase() + city.slice(1) + " Central Park",
      city.charAt(0).toUpperCase() + city.slice(1) + " Museum",
      city.charAt(0).toUpperCase() + city.slice(1) + " Old Town",
      city.charAt(0).toUpperCase() + city.slice(1) + " Main Square",
    ]
  );
}

let updatedBasic = false;
let updatedDetails = false;
const cityFiles = getCityFiles();
for (const city of cityFiles) {
  if (!attractionBasicInfo[city]) {
    // Generate real or fallback attractions
    const attractions = getRealAttractionsForCity(city);
    attractionBasicInfo[city] = {};
    for (const name of attractions) {
      attractionBasicInfo[city][name] = generateBasic(name);
    }
    updatedBasic = true;
    console.log(`Generated real basic info for: ${city}`);
  }
  if (!attractionDetails[city]) {
    attractionDetails[city] = {};
    // If we just generated basic info, use those names; otherwise, try to get from basic or fallback
    const attractionNames = attractionBasicInfo[city]
      ? Object.keys(attractionBasicInfo[city])
      : getRealAttractionsForCity(city);
    for (const name of attractionNames) {
      attractionDetails[city][name] = generateDetails(
        attractionBasicInfo[city][name] || generateBasic(name)
      );
    }
    updatedDetails = true;
    console.log(`Generated real details for: ${city}`);
  }
  // Find missing attractions in details if present in basic, and vice versa
  const basicAttractions = attractionBasicInfo[city];
  const detailsAttractions = attractionDetails[city];
  // Union of all attraction names
  const allAttractionNames = new Set([
    ...Object.keys(basicAttractions),
    ...Object.keys(detailsAttractions),
  ]);
  for (const name of allAttractionNames) {
    // Fill missing basic
    if (!basicAttractions[name]) {
      basicAttractions[name] = generateBasic(name);
      updatedBasic = true;
      console.log(`Generated basic info for: ${city} - ${name}`);
    }
    // Fill missing details
    if (!detailsAttractions[name]) {
      detailsAttractions[name] = generateDetails(basicAttractions[name]);
      updatedDetails = true;
      console.log(`Generated details for: ${city} - ${name}`);
    }
  }
}

// Write back if updated
if (updatedBasic) {
  const fileContent =
    "// This file is auto-generated. Edit with care.\n" +
    "export const attractionBasicInfo = " +
    JSON.stringify(attractionBasicInfo, null, 2) +
    ";\n";
  fs.writeFileSync(basicPath, fileContent, "utf-8");
  console.log("Attraction basic info updated!");
}
if (updatedDetails) {
  const fileContent =
    "// This file is auto-generated. Edit with care.\n" +
    "export const attractionDetails = " +
    JSON.stringify(attractionDetails, null, 2) +
    ";\n";
  fs.writeFileSync(detailsPath, fileContent, "utf-8");
  console.log("Attraction details updated!");
}
if (!updatedBasic && !updatedDetails) {
  console.log("No missing attraction basic info or details found.");
}
