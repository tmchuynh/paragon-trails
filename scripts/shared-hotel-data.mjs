/**
 * Shared hotel data used by various generation scripts
 * Contains hotel names, street names, and other location-specific data
 */

// Hotel name lists by country
export const hotelNames = {
  "United States": [
    "The Grandview Inn",
    "Liberty Suites",
    "Pacific Horizon Hotel",
    "Sunset Lodge",
    "The Metropolitan",
    "Oakwood Resort",
    "Riverside Manor",
    "Eagle Crest Hotel",
    "The Palms",
    "Heritage House",
  ],
  Canada: [
    "Maple Leaf Lodge",
    "The Northern Lights Inn",
    "Aurora Grand",
    "Lakeview Retreat",
    "The Laurentian",
    "True North Hotel",
    "Rockies Resort",
    "Niagara Suites",
    "The Dominion",
    "Timberline Inn",
  ],
  "United Kingdom": [
    "The King's Arms",
    "Royal Crescent Hotel",
    "The Abbey Court",
    "The Crown and Anchor",
    "Windsor House",
    "The Regent Hotel",
    "The Mayfair Inn",
    "Hampshire Hall",
    "The White Rose",
    "Greenwich Grand",
  ],
  Japan: [
    "Sakura Palace",
    "The Zen Garden Inn",
    "Mt. Fuji View Hotel",
    "Kobe Bay Resort",
    "The Tokyo Courtyard",
    "Hikari Hotel",
    "Kyoto Imperial Inn",
    "Osaka Serenity",
    "Nippon Prestige",
    "Cherry Blossom Lodge",
  ],
  China: [
    "The Forbidden Garden Hotel",
    "Beijing Palace Inn",
    "Pearl River Suites",
    "The Imperial Jade",
    "Shanghai Grand",
    "Great Wall Lodge",
    "The Golden Dragon",
    "Lotus Bloom Hotel",
    "Ming Dynasty Inn",
    "Silk Road Retreat",
  ],
  // ...include other countries from generate-hotels.mjs...
  default: [
    "Grand Central Hotel",
    "The Ambassador",
    "City Lights Inn",
    "Heritage View",
    "Urban Garden Hotel",
    "Skyline Suites",
    "The Harbor House",
    "Sunset Villa",
    "Oceanview Inn",
    "The Prestige Hotel",
  ],
};

// Street suffixes for different regions
export const streetSuffixes = {
  "United States": [
    "St",
    "Ave",
    "Blvd",
    "Dr",
    "Ln",
    "Way",
    "Rd",
    "Ct",
    "Pl",
    "Ter",
    "Cir",
    "Pkwy",
    "Hwy",
    "Trl",
    "Cres",
    "Sq",
  ],
  // ...include other countries from generate-hotels.mjs...
  default: [
    "St",
    "Ave",
    "Blvd",
    "Rd",
    "Street",
    "Road",
    "Avenue",
    "Drive",
    "Place",
    "Way",
    "Court",
    "Terrace",
  ],
};

// Street names for different countries
export const streetNames = {
  "United States": [
    "Main",
    "Oak",
    "Maple",
    "Cedar",
    "Elm",
    "Washington",
    "Lincoln",
    "Sunset",
    "Park",
    "Broadway",
  ],
  Japan: [
    "Shinjuku",
    "Ginza",
    "Harajuku",
    "Akihabara",
    "Ueno",
    "Asakusa",
    "Roppongi",
    "Meguro",
    "Aoyama",
    "Ebisu",
  ],
  "United Kingdom": [
    "High",
    "Church",
    "Station",
    "London",
    "Oxford",
    "Victoria",
    "Mill",
    "Bridge",
    "George",
    "Queen",
  ],
  // ...include other countries from generate-hotels.mjs...
  default: [
    "Main",
    "Central",
    "Sunset",
    "Broadway",
    "Park",
    "Riverside",
    "Liberty",
    "King",
    "Queen",
    "Hilltop",
  ],
};

export const streetPrefixes = {
  // ...copy from generate-hotels.mjs...
  default: ["North", "South", "East", "West", "Upper", "Lower", "Old", "New"],
};

// Room name enhancement variables
export const roomThemesByCountry = {
  Japan: ["Zen", "Sakura", "Fuji", "Imperial", "Bamboo", "Harmony", "Lotus"],
  "United Kingdom": [
    "Royal",
    "Victorian",
    "Tudor",
    "Piccadilly",
    "Westminster",
    "Kensington",
  ],
  Thailand: ["Siam", "Thai", "Orchid", "Jasmine", "Emerald", "Tropical"],
  "United States": [
    "Liberty",
    "Heritage",
    "Colonial",
    "Pioneer",
    "Golden Gate",
    "Manhattan",
  ],
  default: [
    "Classic",
    "Modern",
    "Harmony",
    "Tranquility",
    "Serenity",
    "Horizon",
  ],
};
