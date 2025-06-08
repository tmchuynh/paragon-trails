/**
 * City Tours Generator Script
 * ==========================
 *
 * This script generates realistic tour offerings for city destinations in the Paragon Trails application.
 * It creates detailed tour information with properties like title, description, pricing,
 *  scheduling, included items, requirements, and policies for each city.
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
  formatTimeTo12HourClock,
  removeSpecialCharacters,
  normalizeString,
} from "./utils/format-utils.mjs";
import { weekDays } from "./generate-tour-guides.mjs";
import {
  cityCountryMap,
  cityToRegionMap,
  countryCurrencyMap,
  currenciesMap,
  countryLanguagesMap,
  currencyRates,
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

export const tourThemes = [
  "City Highlights And History",
  "Culinary And Food",
  "Art And Culture",
  "Nature And Scenic",
  "Nightlife And Entertainment",
  "Adventure And Thrill",
  "Family Friendly",
  "Poetic And Whimsical",
];

export const tourThemeToTitleMap = {
  "City Highlights And History": [
    "City of Echoes: A Historical Stroll",
    "Essential City Highlights",
    "Hidden Gems Discovery",
    "City Secrets Unveiled",
    "Streets of Time: A Walking Chronicle",
    "Historical Walking Tour",
    "Cultural Heritage Tour",
    "Underground Secrets Tour",
    "Echoes of the Empire",
    "The Royal Route Revealed",
    "In the Footsteps of Kings and Rebels",
    "Sunset Over the Spires",
    "Citadel Secrets and Market Murmurs",
    "From Founding to Revolution",
    "Boulevards and Backstories",
    "Monarchs, Myths, and Marketplaces",
    "The Architect’s Journey",
    "Through the Gates of Time",
    "Pastel Facades & Painted Stories",
    "Palaces, Plazas, and Power",
    "Clocktowers & Cannon Fire",
    "Colonial Shadows & Golden Ages",
    "From Fortress to Freedom",
    "Legends Carved in Stone",
    "Tales Between the Tram Lines",
    "City Legends and Lore",
    "Legends of the Old World",
    "Temples, Thrones & Timelines",
    "Empires of Stone and Silk",
    "Chronicles of the Crimson Kingdom",
    "The Silk Route Revival",
    "Pilgrims & Palaces",
    "Ghost Stories Walk",
    "Historic Neighborhood Stroll",
    "City Through the Ages",
    "Beneath the Cobblestones: Hidden City Tales",
    "City Origins Exploration",
    "Architectural Wonders Walk",
  ],

  "Culinary And Food": [
    "Culinary Delights Experience",
    "Local Markets Exploration",
    "Street Food Adventure",
    "Craft Breweries Tour",
    "Culinary Heritage Journey",
    "Spices of the Silk Coast",
    "Harvest to Table Trails",
    "Gourmet Food Walk",
    "Saffron Streets & Sweet Bazaars",
    "Wines of the Winding Valley",
    "Gastronomy & Gondolas",
    "Truffle Trails & Tuscan Tales",
    "Gastronomic Delights Tour",
    "Tea Houses & Temple Bells",
    "Culinary Traditions Experience",
    "Food and Culture Fusion",
    "Taste of the City Tour",
    "Gourmet Street Eats Tour",
    "Culinary Arts Experience",
    "Culinary Heritage Tour",
    "Gourmet Food Tour",
    "Culinary Traditions Tour",
    "Wine Tasting Experience",
    "Forks and Footpaths",
    "Bites and Sips Discovery",
    "Luxury Shopping Experience",
    "Gastronomic Journey",
    "Farm-to-Table Tour",
    "Foodie’s Paradise Walk",
    "Tasting the Flavors Tour",
    "Epicurean Excursion",
    "Sizzle & Serenity Journey",
    "Oceanside Eats & Island Beats",
    "Secret Recipe Exploration",
  ],

  "Art And Culture": [
    "Architecture Masterpieces Tour",
    "Art and Culture Journey",
    "Art Galleries Crawl",
    "Cultural Heritage Photography",
    "Street Art Safari",
    "Galleries, Graffiti & Golden Light",
    "Creative Pulse Tour",
    "Gallery and Studio Walk",
    "Brushstrokes of the Old Masters",
    "The Renaissance Reverie",
    "Urban Photography Journey",
    "Colorwalk: Murals & Markets",
    "From Canvases to Cathedrals",
    "The Artisan’s Passage",
    "Chisel & Canvas: A Sculptor’s Tour",
    "Impressionist Journeys",
    "Studio to Street: Urban Art Trails",
    "Pastel Cities & Painted Skies",
    "Museums After Midnight",
    "Street Art & Sidewalk Stories",
    "Living Walls & Local Legends",
    "Cultural Canvas Exploration",
    "Ink & Ivory: The Calligraphy Circuit",
    "Photo Spot Expedition",
    "Visual Arts Discovery",
    "Crafts and Artisan Walk",
    "Crafted by Hand, Guided by Heart",
    "Artistic Inspirations Tour",
    "Cultural Icons and Artifacts Tour",
    "Cultural Mosaic Tour",
    "Art and Soul of the City",
    "Cultural Icons Tour",
  ],

  "Nature And Scenic": [
    "Scenic Nature Walk",
    "Crater Lakes & Cloud Forests",
    "Nature Escape",
    "Scenic Views Tour",
    "Scenic Trails and Views Tour",
    "Sunset Landmarks Tour",
    "Eco-Trail Adventure",
    "Wildlife Watch Walk",
    "Botanical Gardens Tour",
    "Riverfront Ramble",
    "Hillside Hiking Tour",
    "Frozen Stars Arctic Expedition",
    "Nature’s Wonders Tour",
    "Coastal Breeze Stroll",
    "Natural Wonders Walk",
    "Park and Recreation Tour",
    "Nature’s Hidden Corners Tour",
    "Nature’s Palette Tour",
    "Summit to Sea Escape",
    "Beyond the Bamboo Trail",
    "Volcanoes & Vineyards",
    "Glaciers, Fjords & Firelight",
    "Tides of the Tropics",
    "Highland Spirits Trek",
    "The Wildflower Way",
    "Desert Dreams & Dune Rides",
  ],

  "Nightlife And Entertainment": [
    "Nighttime City Lights Tour",
    "Nightlife Exploration",
    "Evening Cultural Experience",
    "City Lights and Sounds",
    "Night Markets and Street Food",
    "Nocturnal City Adventure",
    "Night Markets and Food Tour",
    "Candlelit Heritage Walk",
    "Twilight Tales Tour",
    "City Pulse After Hours",
    "Neon Nights & Rooftop Rites",
    "Rhythms of the Underground",
    "The Velvet Night Circuit",
    "Cocktails & City Lights",
    "After Dark: A Cultural Crawl",
    "Moonlit Markets & Midnight Meals",
    "Rooftop Bars and Views Tour",
    "Dancing Through the Decades",
    "Jazz Alleys & Whiskey Rooms",
    "Skyline Soirees",
    "From Dusk Till Dancefloor",
    "Cabarets & Candlelight",
    "Twilight Taverns Tour",
    "Silent Discos & Soundscapes",
    "Starlight Streets: The Night Walk",
    "Samba, Soul & Streetlights",
    "Moonlit Stroll",
    "City After Dark Walk",
    "Live Music Crawl",
    "Theater and Performance Tour",
    "Nocturnal Nature Walk",
    "Starlit City Exploration",
  ],

  "Adventure And Thrill": [
    "Edge of the Earth Expedition",
    "The Summit Seekers Journey",
    "Trailblazers & Hidden Valleys",
    "Into the Wild: Wilderness Trek",
    "The Great Outdoors Adventure",
    "The Urban Explorer's Quest",
    "Fearless Frontier Challenge",
    "The Ultimate Ascent",
    "Speed, Sand & Survival",
    "White-Knuckle Wilderness",
    "No Limits: Adventure Reloaded",
    "Gravity Defiers: Air & Earth",
    "Beyond the Edge: Risk & Reward",
    "Adrenaline in the Andes",
    "Beyond the Map: Off-Grid Escapes",
    "Peaks, Paths & Panorama Views",
    "The Wild Coast Adventure",
  ],

  "Family Friendly": [
    "Wonders for All Ages",
    "The Great Family Escape",
    "Legends & Laughter Trail",
    "Park Hoppers & Picnic Stops",
    "Cultural Treasures: Kids Welcome!",
    "The Family Discovery Loop",
    "Lakeside Legends & Campfire Nights",
    "All Aboard: Family Rail Adventure",
    "Sunshine, Stories & Sandcastles",
    "Castles, Creatures & Carousel Days",
    "Nature’s Playground Adventure",
    "Time Travelers Family Quest",
    "Farms, Forests & Friendly Faces",
    "Oceanfront Odyssey for Families",
    "Magic in the Mountains",
    "Adventure and Learning Tour",
    "Family Memory Makers Tour",
    "Kid-Friendly Discovery Walk",
  ],

  "Poetic And Whimsical": [
    "Echoes of the Horizon",
    "Whispers Beneath the Avalanche",
    "Whispers of the Wild",
    "Where Lightning Dances and Shadows Race",
    "Lanterns Over Water",
    "The Ridge Where Night Never Sleeps",
    "Runes of the Roaring Deep",
    "To Catch the Mountain’s Breath",
    "Ravine of the Wandering Spirits",
    "Moonlight on Marble Streets",
    "Petals and Pagodas",
    "Velvet Dusk Adventures",
    "The Cloudpath Trail",
    "Through Tempest and Flame",
    "The Wind Rider's Trial",
    "Ashes on the Summit Trail",
    "The Falcon's Drop: A Descent Into Sky",
    "The Howl of Hollow Peaks",
    "Vaulting Over the Veil",
    "Chasing Thunder in the Valley of Fire",
    "The Crag and the Cloud",
    "A Reckless Waltz with Gravity",
    "Beneath the Sky’s Last Roar",
    "Oaths in Ice and Ember",
    "Midnight Cliff and the Siren’s Cry",
    "Leap of the Burning Horizon",
    "The Wind & the Willow Route",
    "Starlit Shores Sojourn",
    "Pastel Cities & Golden Hours",
  ],
};

// Arrays for random data generation
export const tourTitles = [
  // City Highlights & History
  "City of Echoes: A Historical Stroll",
  "Essential City Highlights",
  "Hidden Gems Discovery",
  "City Secrets Unveiled",
  "Streets of Time: A Walking Chronicle",
  "Historical Walking Tour",
  "Cultural Heritage Tour",
  "Underground Secrets Tour",
  "Echoes of the Empire",
  "The Royal Route Revealed",
  "In the Footsteps of Kings and Rebels",
  "Sunset Over the Spires",
  "Citadel Secrets and Market Murmurs",
  "From Founding to Revolution",
  "Boulevards and Backstories",
  "Monarchs, Myths, and Marketplaces",
  "The Architect’s Journey",
  "Through the Gates of Time",
  "Pastel Facades & Painted Stories",
  "Palaces, Plazas, and Power",
  "Clocktowers & Cannon Fire",
  "Colonial Shadows & Golden Ages",
  "From Fortress to Freedom",
  "Legends Carved in Stone",
  "Tales Between the Tram Lines",
  "City Legends and Lore",
  "Legends of the Old World",
  "Temples, Thrones & Timelines",
  "Empires of Stone and Silk",
  "Chronicles of the Crimson Kingdom",
  "The Silk Route Revival",
  "Pilgrims & Palaces",
  "Ghost Stories Walk",
  "Historic Neighborhood Stroll",
  "City Through the Ages",
  "Beneath the Cobblestones: Hidden City Tales",
  "Cultural Icons Tour",
  "City Legends and Lore",
  "Artisan Roads & Hidden Crafts",
  "From Ruins to Renaissance",
  "Kingdoms of Earth & Sky",
  "City Origins Exploration",
  "Architectural Wonders Walk",
  "Museums, Markets, and Monasteries",
  "Timeless City Treasures",
  "Time Capsule City Tour",

  // Food & Drink Experiences
  "Culinary Delights Experience",
  "Local Markets Exploration",
  "Street Food Adventure",
  "Craft Breweries Tour",
  "Culinary Heritage Journey",
  "Spices of the Silk Coast",
  "Harvest to Table Trails",
  "Gourmet Food Walk",
  "Saffron Streets & Sweet Bazaars",
  "Wines of the Winding Valley",
  "Gastronomy & Gondolas",
  "Truffle Trails & Tuscan Tales",
  "Gastronomic Delights Tour",
  "Tea Houses & Temple Bells",
  "Gastronomic Delights Tour",
  "Culinary Traditions Experience",
  "Food and Culture Fusion",
  "Taste of the City Tour",
  "Gourmet Street Eats Tour",
  "Culinary Arts Experience",
  "Culinary Heritage Tour",
  "Gourmet Food Tour",
  "Culinary Traditions Tour",
  "Wine Tasting Experience",
  "Culinary Heritage Journey",
  "Forks and Footpaths",
  "Bites and Sips Discovery",
  "Luxury Shopping Experience",
  "Gastronomic Journey",
  "Farm-to-Table Tour",
  "Foodie’s Paradise Walk",
  "Tasting the Flavors Tour",
  "Epicurean Excursion",
  "Sizzle & Serenity Journey",
  "Oceanside Eats & Island Beats",
  "Gastronomic Delights Tour",
  "Culinary Traditions Experience",
  "Culinary Arts Experience",
  "Secret Recipe Exploration",

  // Art, Culture & Photography
  "Architecture Masterpieces Tour",
  "Art and Culture Journey",
  "Art Galleries Crawl",
  "Cultural Heritage Photography",
  "Street Art Safari",
  "Galleries, Graffiti & Golden Light",
  "Creative Pulse Tour",
  "Gallery and Studio Walk",
  "Brushstrokes of the Old Masters",
  "The Renaissance Reverie",
  "Urban Photography Journey",
  "Colorwalk: Murals & Markets",
  "From Canvases to Cathedrals",
  "The Artisan’s Passage",
  "Chisel & Canvas: A Sculptor’s Tour",
  "Impressionist Journeys",
  "Studio to Street: Urban Art Trails",
  "Pastel Cities & Painted Skies",
  "Museums After Midnight",
  "Street Art & Sidewalk Stories",
  "Living Walls & Local Legends",
  "Cultural Canvas Exploration",
  "Ink & Ivory: The Calligraphy Circuit",
  "Photo Spot Expedition",
  "Visual Arts Discovery",
  "Crafts and Artisan Walk",
  "Crafted by Hand, Guided by Heart",
  "Artistic Inspirations Tour",
  "Cultural Icons and Artifacts Tour",
  "Cultural Mosaic Tour",
  "Art and Soul of the City",

  // Nature & Scenic Tours
  "Scenic Nature Walk",
  "Crater Lakes & Cloud Forests",
  "Nature Escape",
  "Scenic Views Tour",
  "Scenic Trails and Views Tour",
  "Sunset Landmarks Tour",
  "Eco-Trail Adventure",
  "Wildlife Watch Walk",
  "Botanical Gardens Tour",
  "Riverfront Ramble",
  "Hillside Hiking Tour",
  "Frozen Stars Arctic Expedition",
  "Nature’s Wonders Tour",
  "Coastal Breeze Stroll",
  "Natural Wonders Walk",
  "Park and Recreation Tour",
  "Nature’s Hidden Corners Tour",
  "Nature’s Palette Tour",
  "Summit to Sea Escape",
  "Beyond the Bamboo Trail",
  "Volcanoes & Vineyards",
  "Glaciers, Fjords & Firelight",
  "Tides of the Tropics",
  "Highland Spirits Trek",
  "The Wildflower Way",
  "Desert Dreams & Dune Rides",

  // Night & Entertainment
  "Nighttime City Lights Tour",
  "Nightlife Exploration",
  "Evening Cultural Experience",
  "City Lights and Sounds",
  "Night Markets and Street Food",
  "Nocturnal City Adventure",
  "City Lights and Sounds",
  "Night Markets and Food Tour",
  "Candlelit Heritage Walk",
  "Twilight Tales Tour",
  "City Pulse After Hours",
  "Neon Nights & Rooftop Rites",
  "Rhythms of the Underground",
  "The Velvet Night Circuit",
  "Cocktails & City Lights",
  "After Dark: A Cultural Crawl",
  "Moonlit Markets & Midnight Meals",
  "Rooftop Bars and Views Tour",
  "Dancing Through the Decades",
  "Jazz Alleys & Whiskey Rooms",
  "Skyline Soirees",
  "From Dusk Till Dancefloor",
  "Cabarets & Candlelight",
  "Twilight Taverns Tour",
  "Silent Discos & Soundscapes",
  "Starlight Streets: The Night Walk",
  "Samba, Soul & Streetlights",
  "Moonlit Stroll",
  "City After Dark Walk",
  "Live Music Crawl",
  "Theater and Performance Tour",
  "Nocturnal Nature Walk",
  "Starlit City Exploration",

  // Adventure
  "Edge of the Earth Expedition",
  "The Summit Seekers Journey",
  "Trailblazers & Hidden Valleys",
  "Into the Wild: Wilderness Trek",
  "The Great Outdoors Adventure",
  "The Urban Explorer's Quest",
  "Fearless Frontier Challenge",
  "The Ultimate Ascent",
  "Speed, Sand & Survival",
  "White-Knuckle Wilderness",
  "No Limits: Adventure Reloaded",
  "Gravity Defiers: Air & Earth",
  "Beyond the Edge: Risk & Reward",
  "Adrenaline in the Andes",
  "Beyond the Map: Off-Grid Escapes",
  "Peaks, Paths & Panorama Views",
  "The Wild Coast Adventure",

  // Family & Kids
  "Wonders for All Ages",
  "The Great Family Escape",
  "Legends & Laughter Trail",
  "Park Hoppers & Picnic Stops",
  "Cultural Treasures: Kids Welcome!",
  "The Family Discovery Loop",
  "Lakeside Legends & Campfire Nights",
  "All Aboard: Family Rail Adventure",
  "Sunshine, Stories & Sandcastles",
  "Castles, Creatures & Carousel Days",
  "Nature’s Playground Adventure",
  "Time Travelers Family Quest",
  "Farms, Forests & Friendly Faces",
  "Oceanfront Odyssey for Families",
  "Magic in the Mountains",
  "Adventure and Learning Tour",
  "Family Memory Makers Tour",
  "Kid-Friendly Discovery Walk",

  // Whimsical & Poetic
  "Echoes of the Horizon",
  "Whispers Beneath the Avalanche",
  "Whispers of the Wild",
  "Where Lightning Dances and Shadows Race",
  "Lanterns Over Water",
  "The Ridge Where Night Never Sleeps",
  "Runes of the Roaring Deep",
  "To Catch the Mountain’s Breath",
  "Ravine of the Wandering Spirits",
  "Moonlight on Marble Streets",
  "Petals and Pagodas",
  "Velvet Dusk Adventures",
  "The Cloudpath Trail",
  "Through Tempest and Flame",
  "The Wind Rider's Trial",
  "Ashes on the Summit Trail",
  "The Falcon's Drop: A Descent Into Sky",
  "The Howl of Hollow Peaks",
  "Vaulting Over the Veil",
  "Chasing Thunder in the Valley of Fire",
  "The Crag and the Cloud",
  "A Reckless Waltz with Gravity",
  "Beneath the Sky’s Last Roar",
  "Oaths in Ice and Ember",
  "Midnight Cliff and the Siren’s Cry",
  "Leap of the Burning Horizon",
  "The Wind & the Willow Route",
  "Starlit Shores Sojourn",
  "Pastel Cities & Golden Hours",
];

const includedItems = [
  "Entrance fees (if applicable)",
  "Hotel pickup and drop-off",
  "Transportation during tour (if applicable)",
  "Bottled water",
  "Snacks",
  "Food samples",
  "Coffee and/or Tea",
  "Souvenir photos",
  "Rain ponchos (if needed)",
  "Gratuities",
  "Local taxes",
  "Headsets to hear the guide",
];

const notIncludedItems = [
  "Gratuities",
  "Food and drinks at restaurants and/or cafes",
  "Personal expenses",
  "Additional tickets for attractions",
  "Travel insurance",
  "Luggage storage",
  "Parking fees",
  "Hotel accommodations",
  "Airport transfers",
  "Transportation to/from the tour start point",
  "Optional activities not included in the tour",
];

const cancellationPolicies = [
  "Free cancellation up to 24 hours before the experience starts",
  "Free cancellation up to 48 hours before the experience starts",
  "Free cancellation up to 72 hours before the experience starts",
  "Non-refundable. No cancellation allowed.",
  "50% refund if canceled 24 hours before the experience",
  "50% refund if canceled 48 hours before the experience",
  "Full refund if canceled due to weather",
  "Flexible cancellation policy: full refund with 24-hour notice",
  "Flexible cancellation policy: full refund with 12-hour notice",
  "Group bookings: Free cancellation up to 7 days in advance",
  "No refunds for no-shows",
  "No refunds for cancellations within 24 hours",
  "No changes allowed after booking",
  "Changes allowed up to 24 hours before the experience starts",
  "Changes allowed up to 48 hours before the experience starts",
];

const tourRequirements = [
  "Valid ID required",
  "Passport required",
  "Minimum age: 18",
  "Minimum age: 12",
  "Basic fitness level required",
  "Advanced fitness level required",
  "Swimming required",
  "Not wheelchair accessible",
  "Comfortable walking shoes required",
  "No pets allowed",
  "Service animals permitted",
  "No flash photography",
  "Dress code enforced",
  "Government-issued ID for entry",
  "Tickets must be printed",
  "Arrive 15 minutes early",
  "Signed waiver required",
  "COVID-19 vaccination required",
  "Face masks required",
  "Bring own headphones",
  "Cash only",
];

export const tourTypeToTitleMap = {
  "Walking Tours": [
    "City of Echoes: A Historical Stroll",
    "Hidden Gems Discovery",
    "City Secrets Unveiled",
    "Streets of Time: A Walking Chronicle",
    "Historical Walking Tour",
    "Cultural Heritage Tour",
    "Underground Secrets Tour",
    "Ghost Stories Walk",
    "Historic Neighborhood Stroll",
    "City Through the Ages",
    "Beneath the Cobblestones: Hidden City Tales",
    "Street Art Safari",
    "Gallery and Studio Walk",
    "Crafts and Artisan Walk",
    "City After Dark Walk",
    "Moonlit Stroll",
    "Nature Escape",
    "Wildlife Watch Walk",
    "Riverfront Ramble",
    "Botanical Gardens Tour",
    "Scenic Nature Walk",
    "Park and Recreation Tour",
    "Nighttime City Lights Tour",
    "Candlelit Heritage Walk",
    "Twilight Taverns Tour",
    "Nocturnal Nature Walk",
    "Family Memory Makers Tour",
    "Kid-Friendly Discovery Walk",
  ],

  "Food Tours": [
    "Culinary Delights Experience",
    "Local Markets Exploration",
    "Street Food Adventure",
    "Craft Breweries Tour",
    "Culinary Heritage Journey",
    "Spices of the Silk Coast",
    "Harvest to Table Trails",
    "Gourmet Food Walk",
    "Saffron Streets & Sweet Bazaars",
    "Wines of the Winding Valley",
    "Gastronomy & Gondolas",
    "Truffle Trails & Tuscan Tales",
    "Gastronomic Delights Tour",
    "Tea Houses & Temple Bells",
    "Culinary Traditions Experience",
    "Food and Culture Fusion",
    "Taste of the City Tour",
    "Gourmet Street Eats Tour",
    "Culinary Arts Experience",
    "Culinary Heritage Tour",
    "Gourmet Food Tour",
    "Culinary Traditions Tour",
    "Wine Tasting Experience",
    "Forks and Footpaths",
    "Bites and Sips Discovery",
    "Luxury Shopping Experience",
    "Farm-to-Table Tour",
    "Foodie’s Paradise Walk",
    "Tasting the Flavors Tour",
    "Epicurean Excursion",
    "Sizzle & Serenity Journey",
    "Oceanside Eats & Island Beats",
    "Secret Recipe Exploration",
  ],

  "Cultural Tours": [
    "Cultural Heritage Tour",
    "Cultural Icons Tour",
    "Art and Culture Journey",
    "Art Galleries Crawl",
    "Cultural Heritage Photography",
    "Galleries, Graffiti & Golden Light",
    "Creative Pulse Tour",
    "Brushstrokes of the Old Masters",
    "The Renaissance Reverie",
    "Urban Photography Journey",
    "Colorwalk: Murals & Markets",
    "From Canvases to Cathedrals",
    "The Artisan’s Passage",
    "Impressionist Journeys",
    "Studio to Street: Urban Art Trails",
    "Pastel Cities & Painted Skies",
    "Museums After Midnight",
    "Street Art & Sidewalk Stories",
    "Living Walls & Local Legends",
    "Cultural Canvas Exploration",
    "Ink & Ivory: The Calligraphy Circuit",
    "Visual Arts Discovery",
    "Crafted by Hand, Guided by Heart",
    "Artistic Inspirations Tour",
    "Cultural Icons and Artifacts Tour",
    "Cultural Mosaic Tour",
    "Art and Soul of the City",
    "Cultural Treasures: Kids Welcome!",
  ],

  "Historical Tours": [
    "City of Echoes: A Historical Stroll",
    "Historical Walking Tour",
    "Echoes of the Empire",
    "The Royal Route Revealed",
    "In the Footsteps of Kings and Rebels",
    "Citadel Secrets and Market Murmurs",
    "From Founding to Revolution",
    "Boulevards and Backstories",
    "Monarchs, Myths, and Marketplaces",
    "The Architect’s Journey",
    "Through the Gates of Time",
    "Palaces, Plazas, and Power",
    "Clocktowers & Cannon Fire",
    "Colonial Shadows & Golden Ages",
    "From Fortress to Freedom",
    "Legends Carved in Stone",
    "City Legends and Lore",
    "Legends of the Old World",
    "Temples, Thrones & Timelines",
    "Chronicles of the Crimson Kingdom",
    "The Silk Route Revival",
    "Pilgrims & Palaces",
    "Ghost Stories Walk",
    "Historic Neighborhood Stroll",
    "City Through the Ages",
    "Beneath the Cobblestones: Hidden City Tales",
    "From Ruins to Renaissance",
    "Kingdoms of Earth & Sky",
    "City Origins Exploration",
    "Architectural Wonders Walk",
    "Museums, Markets, and Monasteries",
    "Timeless City Treasures",
    "Time Capsule City Tour",
    "Candlelit Heritage Walk",
    "Twilight Tales Tour",
  ],

  "Museum Tours": [
    "Museums, Markets, and Monasteries",
    "Museums After Midnight",
  ],

  "Religious Tours": [
    "Temples, Thrones & Timelines",
    "Tea Houses & Temple Bells",
    "Pilgrims & Palaces",
  ],

  "Nature Tours": [
    "Scenic Nature Walk",
    "Crater Lakes & Cloud Forests",
    "Nature Escape",
    "Scenic Views Tour",
    "Scenic Trails and Views Tour",
    "Sunset Landmarks Tour",
    "Eco-Trail Adventure",
    "Wildlife Watch Walk",
    "Botanical Gardens Tour",
    "Riverfront Ramble",
    "Hillside Hiking Tour",
    "Frozen Stars Arctic Expedition",
    "Nature’s Wonders Tour",
    "Coastal Breeze Stroll",
    "Natural Wonders Walk",
    "Park and Recreation Tour",
    "Nature’s Hidden Corners Tour",
    "Nature’s Palette Tour",
    "Summit to Sea Escape",
    "Beyond the Bamboo Trail",
    "Volcanoes & Vineyards",
    "Glaciers, Fjords & Firelight",
    "Tides of the Tropics",
    "Highland Spirits Trek",
    "The Wildflower Way",
    "Desert Dreams & Dune Rides",
    "The Great Outdoors Adventure",
    "Into the Wild: Wilderness Trek",
  ],

  "Romantic Tours": [
    "Sunset Over the Spires",
    "Moonlight on Marble Streets",
    "Velvet Dusk Adventures",
    "Lanterns Over Water",
    "Moonlit Markets & Midnight Meals",
    "Rooftop Bars and Views Tour",
    "Skyline Soirees",
    "Cabarets & Candlelight",
    "Starlit Shores Sojourn",
    "Twilight Taverns Tour",
    "Dancing Through the Decades",
    "The Wind & the Willow Route",
    "Pastel Cities & Golden Hours",
    "Moonlit Stroll",
  ],

  "Nightlife Tours": [
    "Nighttime City Lights Tour",
    "Nightlife Exploration",
    "Evening Cultural Experience",
    "City Lights and Sounds",
    "Night Markets and Street Food",
    "Nocturnal City Adventure",
    "Night Markets and Food Tour",
    "City Pulse After Hours",
    "Neon Nights & Rooftop Rites",
    "Rhythms of the Underground",
    "The Velvet Night Circuit",
    "Cocktails & City Lights",
    "After Dark: A Cultural Crawl",
    "Dancing Through the Decades",
    "Jazz Alleys & Whiskey Rooms",
    "Silent Discos & Soundscapes",
    "Starlight Streets: The Night Walk",
    "Samba, Soul & Streetlights",
    "Live Music Crawl",
    "Theater and Performance Tour",
    "City After Dark Walk",
    "Starlit City Exploration",
  ],

  "Adventure Tour": [
    "Edge of the Earth Expedition",
    "The Summit Seekers Journey",
    "Trailblazers & Hidden Valleys",
    "The Urban Explorer's Quest",
    "Fearless Frontier Challenge",
    "The Ultimate Ascent",
    "Speed, Sand & Survival",
    "White-Knuckle Wilderness",
    "No Limits: Adventure Reloaded",
    "Gravity Defiers: Air & Earth",
    "Beyond the Edge: Risk & Reward",
    "Adrenaline in the Andes",
    "Beyond the Map: Off-Grid Escapes",
    "Peaks, Paths & Panorama Views",
    "The Wild Coast Adventure",
    "Leap of the Burning Horizon",
    "A Reckless Waltz with Gravity",
  ],

  "Family Tours": [
    "Wonders for All Ages",
    "The Great Family Escape",
    "Legends & Laughter Trail",
    "Park Hoppers & Picnic Stops",
    "Cultural Treasures: Kids Welcome!",
    "The Family Discovery Loop",
    "Lakeside Legends & Campfire Nights",
    "All Aboard: Family Rail Adventure",
    "Sunshine, Stories & Sandcastles",
    "Castles, Creatures & Carousel Days",
    "Nature’s Playground Adventure",
    "Time Travelers Family Quest",
    "Farms, Forests & Friendly Faces",
    "Oceanfront Odyssey for Families",
    "Magic in the Mountains",
    "Adventure and Learning Tour",
    "Family Memory Makers Tour",
    "Kid-Friendly Discovery Walk",
  ],

  "Mystery Tours": [
    "Echoes of the Horizon",
    "Whispers Beneath the Avalanche",
    "Whispers of the Wild",
    "Where Lightning Dances and Shadows Race",
    "Runes of the Roaring Deep",
    "To Catch the Mountain’s Breath",
    "Ravine of the Wandering Spirits",
    "Petals and Pagodas",
    "The Cloudpath Trail",
    "Through Tempest and Flame",
    "The Wind Rider's Trial",
    "Ashes on the Summit Trail",
    "The Falcon's Drop: A Descent Into Sky",
    "The Howl of Hollow Peaks",
    "Vaulting Over the Veil",
    "Chasing Thunder in the Valley of Fire",
    "The Crag and the Cloud",
    "Beneath the Sky’s Last Roar",
    "Oaths in Ice and Ember",
    "Midnight Cliff and the Siren’s Cry",
    "Starlit Shores Sojourn",
  ],
};

const tourTypes = [
  "Walking Tour",
  "Bike Tour",
  "Food Tour",
  "Cultural Tour",
  "Historical Tour",
  "Museum Tour",
  "Religious Tours",
  "Nature Tour",
  "Adventure Tour",
  "Private Tour",
  "Nightlife Tours",
  "Family Tours",
  "Mystery Tours",
  "Romantic Tour",
];

// Load tour guides for a city - moved up before it's called
async function loadCityGuides(city) {
  const formattedName = removeAccents(city);

  const guidesPath = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "staff",
    "guides",
    `${formattedName}.ts`
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

// Load attractions for a city
async function loadCityAttractions(city) {
  const formattedName = city;

  const attractionsPath = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "destinations",
    "city-attractions",
    `${formattedName}.ts`
  );

  try {
    await access(attractionsPath);
  } catch {
    console.log(
      `No attractions file found for ${city}. Using placeholder attraction IDs.`
    );
    return Array.from({ length: 5 }, (_, i) => ({
      id: `attraction-${removeAccents(city).toLowerCase().replace(/\s+/g, "-")}-${i + 1}`,
    }));
  }

  try {
    const content = await readFile(attractionsPath, "utf-8");

    // Extract all attraction IDs using regex
    const attractionMatches = content.match(/id: "([^"]+)"/g);
    if (!attractionMatches) return [];

    return attractionMatches.map((match) => {
      const id = match.match(/id: "([^"]+)"/)[1];
      return { id };
    });
  } catch (error) {
    console.error(`Error loading attractions for ${city}:`, error);
    return [];
  }
}

// Generate random schedules for a tour with real attractions
function generateSchedules(attractions) {
  if (!attractions || attractions.length === 0) {
    return [];
  }

  const schedule = [];
  // Generate 1-4 different schedule entries
  const numSessions = Math.floor(Math.random() * 4) + 1;

  // Create a copy of attractions array to select from
  const availableAttractions = [...attractions];

  // Shuffle for random selection
  const shuffledDays = [...weekDays].sort(() => 0.5 - Math.random());

  for (let i = 0; i < numSessions && availableAttractions.length > 0; i++) {
    // Select a random day
    const dayOfWeek = shuffledDays[i % shuffledDays.length];

    // Select a random attraction (without replacement)
    const attractionIndex = Math.floor(
      Math.random() * availableAttractions.length
    );
    const attraction = availableAttractions.splice(attractionIndex, 1)[0];

    // Generate time slots
    const startHour = 8 + Math.floor(Math.random() * 10); // 8 AM to 6 PM
    const tourDuration = 1 + Math.floor(Math.random() * 4); // 1-4 hours
    const endHour = Math.min(startHour + tourDuration, 22); // Don't go past 10 PM

    const startTime = `${startHour}:00`;
    const endTime = `${endHour}:00`;

    // Ensure no duplicate schedules
    const existing = schedule.find(
      (s) =>
        s.dayOfWeek === dayOfWeek &&
        s.startTime === startTime &&
        s.endTime === endTime
    );

    if (!existing) {
      schedule.push({
        attractionId: attraction.id,
        dayOfWeek,
        startTime: formatTimeTo12Hour(startTime),
        endTime: formatTimeTo12Hour(endTime),
      });
    }
  }

  return schedule;
}

// Helper function to convert time to 12-hour format
function formatTimeTo12Hour(time) {
  const [hours, minutes] = time.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const adjustedHours = hours % 12 || 12;
  return `${adjustedHours}:${minutes.toString().padStart(2, "0")} ${period}`;
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

  // Generate schedule
  const schedule = generateSchedules();

  // --- Currency selection based on country ---
  let currencyCode = countryCurrencyMap[countryName] || "USD";
  let currencyObj = currenciesMap.find(
    (c) => c.code === currencyCode && c.country === countryName
  ) ||
    currenciesMap.find((c) => c.code === currencyCode) || {
      code: "USD",
      symbol: "$",
    };
  const currency = currencyObj.code;
  const currencySymbol = currencyObj.symbol;

  // --- Price range logic based on city/country ---
  // Example: expensive cities/countries
  const expensiveCities = [
    "paris",
    "london",
    "new-york-city",
    "tokyo",
    "singapore",
    "sydney",
    "dubai",
    "amsterdam",
    "berlin",
    "san-francisco",
    "los-angeles",
    "hong-kong",
  ];
  const cheapCities = [
    "bangkok",
    "ho-chi-minh-city",
    "lima",
    "hanoi",
    "bali",
    "istanbul",
    "athens",
    "lisbon",
    "rio-de-janeiro",
    "cape-town",
  ];
  let basePriceMin = 35,
    basePriceMax = 185;
  if (expensiveCities.includes(city.toLowerCase())) {
    basePriceMin = 80;
    basePriceMax = 350;
  } else if (cheapCities.includes(city.toLowerCase())) {
    basePriceMin = 15;
    basePriceMax = 60;
  }
  // Generate a base price in USD
  const basePriceUSD =
    Math.floor(Math.random() * (basePriceMax - basePriceMin + 1)) +
    basePriceMin;

  // --- Currency conversion using currencyRates ---
  const rate = currencyRates[currency] || 1;
  let localPrice = basePriceUSD * rate;
  // Round price for local conventions
  if (
    currency === "JPY" ||
    currency === "KRW" ||
    currency === "VND" ||
    currency === "IDR" ||
    currency === "HUF" ||
    currency === "CLP" ||
    currency === "COP" ||
    currency === "ARS"
  ) {
    localPrice = Math.round(localPrice / 100) * 100; // round to nearest 100
  } else if (currency === "ISK") {
    localPrice = Math.round(localPrice / 10) * 10;
  } else if (
    currency === "USD" ||
    currency === "CAD" ||
    currency === "AUD" ||
    currency === "NZD" ||
    currency === "EUR" ||
    currency === "GBP" ||
    currency === "CHF" ||
    currency === "SGD" ||
    currency === "HKD"
  ) {
    localPrice = Math.round(localPrice);
  } else {
    localPrice = Math.round(localPrice * 100) / 100; // 2 decimals for others
  }
  const pricePerPerson = localPrice;
  const price = `${currencySymbol}${pricePerPerson}`;

  // Generate group size details
  const maxGroupSize = Math.floor(Math.random() * 30) + 20; // 20-50
  const minGroupSize = Math.floor(Math.random() * 10) + 5; // 5-15

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

  // --- Languages offered based on countryLanguagesMap ---
  let countryLangs = countryLanguagesMap[countryName] || ["English"];
  // Always include English if available, then randomly add up to 2 more from the country's languages
  const languages = [];
  if (countryLangs.includes("English")) languages.push("English");
  // Add up to 2 more unique languages from the country's list
  const otherLangs = countryLangs.filter((l) => l !== "English");
  const numAdditionalLangs = Math.min(
    otherLangs.length,
    Math.floor(Math.random() * 3)
  );
  for (let i = 0; i < numAdditionalLangs; i++) {
    // Pick a random language not already in the list
    const available = otherLangs.filter((l) => !languages.includes(l));
    if (available.length === 0) break;
    const lang = available[Math.floor(Math.random() * available.length)];
    languages.push(lang);
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

  // Generate tour themes (tags) - FIXED: Properly define tags here
  const numThemes = Math.floor(Math.random() * 3) + 1; // 1-3 additional themes
  const tags = [theme]; // Start with the main theme as first tag

  // Add additional themes as tags
  for (let i = 0; i < numThemes; i++) {
    const randomTheme =
      tourThemes[Math.floor(Math.random() * tourThemes.length)];
    // Avoid duplicates
    if (randomTheme !== theme && !tags.includes(randomTheme)) {
      tags.push(randomTheme);
    }
  }

  return {
    id,
    guideId,
    title,
    description,
    city,
    country: countryName,
    region: regionName,
    languagesOffered: languages,
    price,
    tags, // Now properly defined
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

  const formattedCountry = formatTitleToCamelCase(normalizeString(countryName));
  const formattedRegion = formatTitleToCamelCase(normalizeString(regionName));

  const formattedName = normalizeString(city);

  const variableName = `${formatKebabToCamelCase(formattedName)}${formattedCountry}${formattedRegion}Tours`;

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

  // ADDED: Load attractions for the city
  const attractions = await loadCityAttractions(city);
  console.log(`Loaded ${attractions.length} attractions for ${city}`);

  // Generate tours
  const numNewTours = options.append || Math.floor(Math.random() * 5) + 3; // 3-7 tours

  // Now generate the tours with attractions included
  const newTours = [];
  for (let i = 0; i < numNewTours; i++) {
    const tour = generateTour(city, tours.length + i, guides);

    // MODIFIED: Generate schedules with actual attractions
    tour.schedule = generateSchedules(attractions);

    newTours.push(tour);
  }

  // Combine existing and new tours
  tours = tours.concat(newTours);

  // Create file content with proper formatting
  let content = `// Auto-generated file for ${city} tours\n`;
  content += `// Country: ${countryName}, Region: ${regionName}\n\n`;
  content += `// This file is auto-generated. Do not edit manually.\n`;
  content += `import { Tour } from "@/lib/interfaces/services/tours";\n\n`;
  content += `export const ${variableName.replaceAll(".", "")}: Tour[] = [\n`;
  tours.forEach((tour, index) => {
    content += `  {\n`;
    for (const [key, value] of Object.entries(tour)) {
      if (typeof value === "string") {
        content += `    ${key}: "${value}",\n`;
      } else if (Array.isArray(value)) {
        if (value.length === 0) {
          content += `    ${key}: [],\n`;
        } else {
          content += `    ${key}: [\n`;
          value.forEach((item, i) => {
            if (typeof item === "string") {
              content += `      "${item}",\n`;
            } else if (typeof item === "object" && item !== null) {
              content += `      {\n`;
              for (const [subKey, subValue] of Object.entries(item)) {
                content += `        ${subKey}: "${subValue}",\n`;
              }
              content += `      },\n`;
            }
          });
          content += `    ],\n`;
        }
      } else if (typeof value === "object" && value !== null) {
        content += `    ${key}: {\n`;
        for (const [subKey, subValue] of Object.entries(value)) {
          content += `      ${subKey}: "${subValue}",\n`;
        }
        content += `    },\n`;
      } else {
        content += `    ${key}: ${value},\n`;
      }
    }
    content += `  },${index < tours.length - 1 ? "\n" : ""}`;
  });
  content += `\n];\n`;

  // Write the file
  await writeFile(filePath, content);
  console.log(`Tour data written to: ${filePath}`);
}

// Main script execution
async function main() {
  console.log("City Tours Generator - Starting tour generation process...\n");

  // Create destination directory if not exists
  const destDir = path.join(process.cwd(), "src", "lib", "constants", "tours");
  await ensureDirectoryExists(destDir);

  // Process each city
  for (const city of cities) {
    console.log(`Processing tours for ${city}...`);

    await generateCityTourFile(city);

    console.log(`Tours for ${city} processed successfully.\n`);
  }

  console.log("City Tours Generator - Tour generation process completed.");
}

main().catch((error) => {
  console.error("Error during tour generation:", error);
  process.exit(1);
});
