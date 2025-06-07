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
  formatTimeTo24HourClock,
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
  // City Highlights & History
  "Essential City Highlights",
  "Hidden Gems Discovery",
  "Historical Walking Tour",
  "Cultural Heritage Tour",
  "Underground Secrets Tour",
  "Ghost Stories Walk",
  "Urban Legends Tour",
  "City Origins Exploration",
  "Architectural Wonders Walk",
  "Timeless City Treasures",
  "Historic Neighborhood Stroll",
  "Legacy of the Streets Tour",
  "Time Capsule City Tour",

  // Food & Drink Experiences
  "Culinary Delights Experience",
  "Local Markets Exploration",
  "Street Food Adventure",
  "Craft Breweries Tour",
  "Wine Tasting Experience",
  "Luxury Shopping Experience",
  "Gastronomic Journey",
  "Farm-to-Table Tour",
  "Foodie’s Paradise Walk",
  "Tasting the Flavors Tour",
  "Epicurean Excursion",
  "Bites and Sips Discovery",
  "Secret Recipe Exploration",

  // Art, Culture & Photography
  "Architecture Masterpieces Tour",
  "Art and Culture Journey",
  "Art Galleries Crawl",
  "Urban Photography Journey",
  "Street Art Safari",
  "Creative Pulse Tour",
  "Gallery and Studio Walk",
  "Cultural Canvas Exploration",
  "Photo Spot Expedition",
  "Visual Arts Discovery",
  "Crafts and Artisan Walk",

  // Nature & Scenic Tours
  "Scenic Nature Walk",
  "Nature Escape",
  "Scenic Views Tour",
  "Sunset Landmarks Tour",
  "Eco-Trail Adventure",
  "Wildlife Watch Walk",
  "Botanical Gardens Tour",
  "Riverfront Ramble",
  "Hillside Hiking Tour",
  "Coastal Breeze Stroll",
  "Natural Wonders Walk",

  // Night & Entertainment
  "Nighttime City Lights Tour",
  "Nightlife Exploration",
  "Evening Cultural Experience",
  "Moonlit Stroll",
  "City After Dark Walk",
  "Live Music Crawl",
  "Theater and Performance Tour",
  "Rooftop Bars and Views Tour",

  // Adventure & Family
  "Adventure Sports Experience",
  "Family Fun Adventure",
  "Outdoor Challenge Tour",
  "Active Exploration",
  "Thrills and Spills Experience",
  "Kid-Friendly Discovery Walk",
  "Nature Play Expedition",
  "Fun for All Ages Tour",
  "Park and Playground Tour",
  "Adventure and Learning Tour",
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
  "No refunds for no-shows",
  "No changes allowed after booking",
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
const tourTypeToTitleMap = {
  "Walking Tour": [
    "Guided Walking Adventure",
    "On-Foot Exploration",
    "Pedestrian Discovery Tour",
    "Walking Excursion",
    "Step-by-Step Journey",
    "City Stroll Experience",
    "Footpath to Culture",
    "Street-Level Stories",
    "Urban Trek Tour",
    "Hidden Corners Walking Tour",
    "Scenic City Walk",
    "Historical Footsteps Tour",
    "Local Lives on Foot",
    "Wander Through the Walls",
    "From Streets to Stories",
    "Sidewalks & Secrets Tour",
    "Tales Beneath Your Feet",
    "City Pulse Walking Tour",
    "Paths of the Past",
    "Walking the Living History",
    "Streets & Stories Walk",
    "Slow-Paced City Discovery",
    "Hidden Facades and Forgotten Lanes",
    "Footnotes of the City",
    "Layers of Legacy Walk",
    "Cobbled Paths & Local Lore",
    "Insider’s Walking Loop",
    "Backstreets & Boulevards Tour",
    "Urban Soul Stroll",
    "Living Landmarks Tour",
    "Eyes on Every Corner",
    "Storybook Streets Experience",
    "Ground-Level Perspective Tour",
    "City Skin & Bones Walk",
    "Cultural Footprint Trail",
    "Daily Life in Motion Tour",
    "Everyday Icons Walking Tour",
    "People, Pavement & Places",
    "Historic Neighborhood Meander",
    "The City at 3mph",
  ],
  "Bike Tour": [
    "Cycling Discovery",
    "Two-Wheel Adventure",
    "Scenic Bicycle Expedition",
    "Pedal Through History",
    "Urban Cycling Journey",
    "Bike & Breathe Tour",
    "Rolling Landmarks Tour",
    "Pedal-Powered Exploration",
    "City Ride Experience",
    "Wheels of Culture Tour",
    "Cycling Through Nature",
    "Urban Cycling Adventure",
    "Cultural Cycling Tour",
    "Scenic Bike Ride",
    "Historical Cycling Tour",
    "Cycling the City",
    "Cycling Through the Ages",
    "Sunset Cycling Cruise",
    "Countryside Cycle Tour",
    "Trailblazer Bike Expedition",
    "Greenway Pedal Tour",
    "Bike & Brunch Experience",
    "Riverfront Cycling Journey",
    "Hidden Paths Bicycle Tour",
    "Bike and Brew Tour",
    "Eco-Friendly Cycle Adventure",
    "Mountain View Bike Ride",
    "City Streets & Stories Ride",
    "Parks and Pathways Cycling",
    "Vineyard Cycle Tour",
    "Seaside Cycling Escape",
    "Heritage Trail Bike Ride",
    "Urban Explorer Bike Tour",
    "Sunrise Pedal Tour",
    "Bike & Culture Discovery",
    "Historic District Cycle Route",
    "Leisurely Lakeside Bike Ride",
  ],
  "Food Tour": [
    "Cycling Discovery",
    "Two-Wheel Adventure",
    "Scenic Bicycle Expedition",
    "Pedal Through History",
    "Urban Cycling Journey",
    "Bike & Breathe Tour",
    "Rolling Landmarks Tour",
    "Pedal-Powered Exploration",
    "City Ride Experience",
    "Wheels of Culture Tour",
    "Cycling Through Nature",
    "Urban Cycling Adventure",
    "Cultural Cycling Tour",
    "Scenic Bike Ride",
    "Historical Cycling Tour",
    "Cycling the City",
    "Cycling Through the Ages",
    "Bikes, Boulevards & Backstreets",
    "The Spokes & Stories Ride",
    "Two Wheels Through Time",
    "Sunrise Pedal Tour",
    "Hidden Gems by Bike",
    "Panoramic Pedals Tour",
    "Pathways of the Past Ride",
    "City Loops & Landmarks",
    "Art & Architecture on Wheels",
    "Fast Lane Heritage Ride",
    "Breezy Boulevard Biking",
    "Pedal & Pause Tour",
    "Sunset City Cycle",
    "Eco Trails Bike Tour",
    "Bike Lanes & Local Tales",
    "Cyclist's City Sampler",
    "Urban Flow Bicycle Experience",
    "Bike to Bites Culinary Ride",
    "Freedom on Two Wheels Tour",
    "Historic Neighborhoods by Bike",
    "Coastal Cycling Circuit",
    "From Cobblestones to Skylines Ride",
    "Daily Life on Two Wheels",
  ],
  "Wine Tour": [
    "Wine Connoisseur's Journey",
    "Vineyard Exploration",
    "Fine Wine Discovery",
    "Wine Tasting Adventure",
    "Vintner's Secret Tour",
    "Sommelier’s Trail",
    "Grapes & Glasses Experience",
    "Wine Country Explorer",
    "Cellar Door Journey",
    "Terroir Tasting Tour",
    "Wine & Dine Experience",
    "Barrels & Bottles Tour",
    "Sip & Savor Trail",
    "Harvest to Glass Experience",
    "Old Vines & New Wines",
    "Art of the Pour Tour",
    "Rustic Vineyards Ride",
    "Winemaker's Reserve Tour",
    "Decanted Delights Tour",
    "Vine to Table Tour",
    "Bespoke Wine Journey",
    "Scenic Sips Tour",
    "The Elegant Pour",
    "Boutique Winery Experience",
    "Sunset & Syrah Tour",
    "Tannin Trails & Tastings",
    "Heritage Vineyards Walk",
    "Chardonnay & Countryside",
    "Crush Season Adventure",
    "Estate to Glass Journey",
    "The Wine Collector’s Experience",
    "Sparkling Wine Trail",
    "Cabernet Country Ride",
    "Wine Caves & Countryside",
    "Wine Wisdom Tour",
    "Private Cellar Experience",
    "Barrel Room Secrets",
  ],
  "Brewery Tour": [
    "Craft Beer Journey",
    "Brewery Hopping Adventure",
    "Beer Tasting Expedition",
    "Brewing Process Discovery",
    "Hops & Malts Experience",
    "Barrel to Tap Tour",
    "Local Brews Adventure",
    "Behind the Brew Tour",
    "Pints & Paths Tour",
    "Craft Culture Crawl",
    "Taproom Trail Experience",
    "Ale & Lager Exploration",
    "Microbrewery Marvels Tour",
    "Hoppy Trails Journey",
    "Seasonal Brews Sampling",
    "Brewmaster’s Secret Tour",
    "Brewery Backstage Pass",
    "Barley & Brew Exploration",
    "Craft Beer & Food Pairing",
    "Foam & Flavor Expedition",
    "Brewery Legends Tour",
    "Brewpub Discovery Ride",
    "Hop Harvest Experience",
    "Beer Craftsmanship Walk",
    "Brewery & Taproom Crawl",
    "Cask Ale Adventure",
    "Hophead’s Dream Tour",
    "Local Craft Beer Quest",
  ],
  "Cultural Tour": [
    "Craft Beer Journey",
    "Brewery Hopping Adventure",
    "Beer Tasting Expedition",
    "Brewing Process Discovery",
    "Hops & Malts Experience",
    "Barrel to Tap Tour",
    "Local Brews Adventure",
    "Behind the Brew Tour",
    "Pints & Paths Tour",
    "Craft Culture Crawl",
    "Taproom Trail Tour",
    "Brewmaster's Secrets",
    "Grains to Glass Experience",
    "Hophead's Urban Tour",
    "Ale Trail Expedition",
    "Yeast & Steel Tour",
    "Seasonal Sips Experience",
    "IPA Immersion Tour",
    "Flights & Bites Journey",
    "Cold Brews & Culture",
    "Microbrewery Explorer",
    "Hop Harvest Tour",
    "Keg to Glass Journey",
    "The Local Tap Tour",
    "Cask & Craft Experience",
    "Brew Scene Discovery",
    "Pour & Explore Adventure",
    "Crafted by Hand Tour",
    "Small Batch Secrets",
    "The Brewline Experience",
    "Art of Brewing Tour",
    "Urban Ale Experience",
    "Brew Lab Walkthrough",
    "Pub to Pint Tour",
    "Suds & Stories Walk",
    "The Fermentation Trail",
  ],
  "Historical Tour": [
    "Journey Through Time",
    "Historic Landmarks Experience",
    "Past & Present Discovery",
    "Heritage Site Expedition",
    "Time Traveler's Tour",
    "Legacy of the City Walk",
    "Footsteps of History Tour",
    "Echoes of the Past",
    "Architectural Timeline Tour",
    "Chronicles of the City",
    "Streets of the Past Tour",
    "Living History Experience",
    "City Through the Ages",
    "Relics & Ruins Walk",
    "Timeline Treasures Tour",
    "Historical Highlights Journey",
    "From Origins to Present",
    "Myths, Legends & Landmarks",
    "Historic Core Discovery",
    "Stone & Story Tour",
    "Walls That Whisper Tour",
    "Empire & Revolution Walk",
    "Historic Heartbeat Tour",
    "Bygone Days Exploration",
    "Layers of Legacy Tour",
    "Milestones & Monuments",
    "Architects of the Past Tour",
    "Foundation & Future Walk",
    "Old Town Tales Tour",
    "Monumental Moments Walk",
    "Witness to Time Tour",
    "Brick by Brick History Tour",
    "Historic Crossroads Journey",
  ],
  "Religious Tour": [
    "Sacred Sites Journey",
    "Spiritual Heritage Walk",
    "Religious Landmarks Tour",
    "Faith & History Discovery",
    "Pilgrimage Experience",
    "Temples & Traditions Tour",
    "Sacred Spaces Exploration",
    "Churches, Mosques & Shrines Tour",
    "Spiritual Footsteps Walk",
    "Faith in Architecture Tour",
    "Paths of Devotion Tour",
    "Silent Sanctuaries Walk",
    "Sacred Architecture Discovery",
    "Worship & Wonders Tour",
    "Spiritual Roots Journey",
    "Altars & Icons Exploration",
    "Symbols of Faith Tour",
    "Interfaith Harmony Walk",
    "Monuments of Belief Tour",
    "Holy Grounds Expedition",
    "Soulful Sites Tour",
    "Faith Across Centuries",
    "Rituals & Reverence Tour",
    "Divine Heritage Journey",
    "Prayers & Pilgrimages Walk",
    "Ancient Faiths Exploration",
    "Icons & Incense Experience",
    "Sacred Echoes Tour",
    "Mystics & Monasteries Tour",
    "Stories of Spirit & Stone",
  ],
  "Museum Tour": [
    "Curated Museum Experience",
    "Art & Artifact Journey",
    "Museum Highlights Tour",
    "Collection Explorer",
    "Exhibition Discovery",
    "Behind-the-Glass Tour",
    "Masterpieces & More",
    "Curator’s Choice Walk",
    "From Antiquity to Art",
    "Gallery to Gallery Experience",
    "Stories Behind the Exhibits",
    "Timeless Treasures Tour",
    "Art Through the Ages",
    "Echoes of Civilization Tour",
    "Inside the Archives Tour",
    "Guided Cultural Collection Tour",
    "Past Meets Present Exhibit Walk",
    "Sculptures, Paintings & Stories",
    "Immersive Exhibit Experience",
    "Wings & Halls Discovery Tour",
    "Civilizations in Context Tour",
    "Beyond the Frame: Art Tour",
    "Historical Gems & Masterpieces",
    "Silent Walls, Loud Stories Tour",
    "Themed Exhibit Exploration",
    "Visual History Journey",
    "Special Collections Spotlight",
    "Museum District Walk",
    "Global Heritage Through Objects",
    "Artifacts in Focus Tour",
  ],
  "Nature Tour": [
    "Natural Wonders Expedition",
    "Flora & Fauna Discovery",
    "Nature Lover's Journey",
    "Wilderness Exploration",
    "Outdoor Natural Experience",
    "Eco Trails Adventure",
    "Breathe the Wild Tour",
    "Scenic Nature Ramble",
    "Earth & Sky Exploration",
    "Green Escape Walk",
    "Wild Landscapes Tour",
    "Forest & Field Discovery",
    "Eco Habitat Walk",
    "Nature Immersion Experience",
    "Back to Nature Trek",
    "Seasonal Wilds Adventure",
    "Biodiversity Highlights Tour",
    "Birdsong & Botany Walk",
    "Roots & Rivers Journey",
    "Trailside Tales Tour",
    "Mountains, Meadows & More",
    "Nature’s Hidden Corners Tour",
    "Sunrise to Sunset Eco Tour",
    "Eco-Conscious Explorer's Path",
    "Life in the Wild Tour",
    "Nature’s Palette Experience",
    "Trail Through Time & Terrain",
    "Untamed Earth Discovery",
    "Eco-Systems Explorer Tour",
    "Nature’s Silence & Sound Tour",
  ],
  "Photography Tour": [
    "Perfect Shot Expedition",
    "Photographer's Dream Tour",
    "Camera-Ready Journey",
    "Visual Discovery Experience",
    "Photography Workshop Adventure",
    "Capture the City Tour",
    "Lens & Light Exploration",
    "Golden Hour Hunt",
    "Street Photography Safari",
    "Urban Frames Tour",
    "City Through the Lens",
    "Hidden Angles Photo Walk",
    "Architectural Aesthetics Tour",
    "Framing the Moment Experience",
    "Reflections & Shadows Walk",
    "Nature Through the Lens",
    "Portraits in the Wild Tour",
    "Candid Streetscapes Safari",
    "Shutter & Scene Discovery",
    "Sunrise to Sunset Capture Tour",
    "Composition & Color Journey",
    "Night Lights & Neon Photo Tour",
    "Storytelling Through Stillness",
    "Depth of Field Experience",
    "Visual Narrative Walk",
    "Vantage Points & Perspectives Tour",
    "Patterns in Place Photo Tour",
    "Focus & Frame Urban Trek",
    "Through the Photographer's Eye",
    "Light Chasing Adventure",
  ],
  "Adventure Tour": [
    "Adrenaline Seeker's Journey",
    "Thrill-Packed Experience",
    "Adventure Challenge Tour",
    "Extreme Activity Expedition",
    "Outdoor Adventure Discovery",
    "Bold Explorers Tour",
    "Rush & Roam Experience",
    "Nature’s Playground Tour",
    "Trailblazer’s Trek",
    "High-Energy Expedition",
    "Peak Pursuit Adventure",
    "Daredevil’s Trail",
    "Wild Escape Tour",
    "Endurance & Excitement Trek",
    "Risk & Reward Expedition",
    "Untamed Terrain Challenge",
    "Summit & Sprint Journey",
    "Heart-Pounding Exploration",
    "Adventurer’s Quest",
    "Extreme Terrain Adventure",
    "Power & Pace Expedition",
    "Action-Packed Odyssey",
    "Off-the-Beaten-Path Challenge",
    "Wild Frontier Trek",
    "Escape the Ordinary Adventure",
    "Pulse-Racing Pursuit",
    "Edge of Adventure Experience",
    "Adrenaline Rush Expedition",
    "Explorer’s Extreme Journey",
    "Uncharted Adventure Trail",
    "Wild & Free Trek",
  ],
  "Private Tour": [
    "Exclusive Private Experience",
    "Personalized Journey",
    "Custom Adventure",
    "VIP Discovery Tour",
    "Personal Guide Experience",
    "Tailored Tour Itinerary",
    "Luxury Private Exploration",
    "Intimate Cultural Dive",
    "Handpicked Highlights Tour",
    "Bespoke Touring Experience",
    "Elite Access Tour",
    "One-on-One Exploration",
    "Private Curated Journey",
    "Signature VIP Tour",
    "Exclusive Insider Experience",
    "Premium Personalized Tour",
    "Custom-Made City Walk",
    "Luxury Tailor-Made Expedition",
    "Private Concierge Tour",
    "Exclusive Backstage Access",
    "Private Passport Experience",
    "Ultimate VIP Exploration",
    "Intimate Discovery Session",
    "Bespoke Heritage Walk",
    "Tailored Taste & Tour",
    "Elite Cultural Experience",
  ],
  "Architecture Tour": [
    "Architecture Tour",
    "Architectural Masterpieces Walk",
    "Design & Structure Exploration",
    "Historic Architecture Journey",
    "Modern Marvels Tour",
    "City Skyline Discovery",
    "Architectural Heritage Walk",
    "Iconic Buildings Tour",
    "Architectural Styles Expedition",
    "Urban Design Exploration",
    "Architectural Wonders Walk",
    "Facade & Form Tour",
    "Architectural Timeline Experience",
    "Contemporary Architecture Tour",
    "Landmark Buildings Exploration",
    "Architectural Gems Walk",
    "Building History Tour",
    "Sustainable Architecture Journey",
    "Architectural Details Discovery",
    "Architectural Photography Tour",
    "Bridges & Monuments Walk",
    "Classic & Modern Fusion Tour",
    "Architecture & Art Tour",
    "Architectural Innovation Journey",
    "Skyline & Structure Tour",
    "Architectural Storytelling Walk",
  ],
  "Underground Tour": [
    "Beneath the City Journey",
    "Subterranean Exploration",
    "Underground Passage Tour",
    "Hidden Tunnels Adventure",
    "City Below the Surface",
    "Secret Underground Walk",
    "Mysteries Beneath Tour",
    "Historic Catacombs Expedition",
    "Underground Vaults Tour",
    "Subway & Sewer Discovery",
  ],
  "Ghost Tour": [
    "Haunted History Walk",
    "Spirits & Shadows Tour",
    "Ghostly Encounters Experience",
    "Phantom Trails Adventure",
    "City of Spirits Tour",
    "Eerie Night Walk",
    "Tales from the Haunted Streets",
    "Spectral Stories Tour",
    "Paranormal Exploration",
    "Legends of the Night Tour",
  ],
  "Street Art Tour": [
    "Urban Canvas Walk",
    "Graffiti & Murals Exploration",
    "Street Art Safari",
    "Colorful Walls Tour",
    "Creative Expression Journey",
    "Street Art & Culture Walk",
    "Mural Masterpieces Tour",
    "Hidden Street Art Gems",
    "Spray & Stencil Adventure",
    "City Walls Gallery Tour",
  ],
  "Shopping Tour": [
    "Retail Discovery Walk",
    "Local Boutiques Exploration",
    "Market & Mall Tour",
    "Shopper's Paradise Experience",
    "Artisan & Craft Shopping",
    "Trendy Streets Tour",
    "Luxury Shopping Expedition",
    "Vintage & Antique Hunt",
    "Souvenir Shopping Adventure",
    "Fashion District Tour",
  ],
  "Scenic Tour": [
    "Panoramic Views Journey",
    "Picture-Perfect Spots Tour",
    "Natural Beauty Exploration",
    "Cityscape & Landscape Walk",
    "Scenic Overlook Experience",
    "Sunrise & Sunset Tour",
    "Photography Hotspots Walk",
    "Vista Points Discovery",
    "Breathtaking Views Tour",
    "Nature & Urban Scenery Tour",
    "Hilltop Panorama Expedition",
    "Scenic Route Adventure",
    "Riverside & Skyline Tour",
    "Lookout Points Exploration",
    "Majestic Vistas Walk",
    "Coastal Views Journey",
    "Mountain Viewpoint Tour",
    "Garden & Park Scenic Walk",
    "Golden Hour Scenic Experience",
    "Top of the City Views Tour",
  ],
  "Off-Road Tour": [
    "Rugged Terrain Adventure",
    "Off the Beaten Path Journey",
    "4x4 Expedition",
    "Wild Trails Exploration",
    "Mountain & Forest Off-Road Tour",
    "Remote Nature Trek",
    "Dirt Road Adventure",
    "Off-Road Safari",
    "Adventure Terrain Tour",
    "Untamed Landscape Exploration",
    "Backcountry Expedition",
    "Trailblazer Off-Road Experience",
    "Extreme Off-Road Challenge",
    "Desert & Canyon Off-Road Tour",
    "All-Terrain Discovery",
    "Nature’s Rough Path Tour",
    "Untouched Wilderness Drive",
    "Rocky Route Adventure",
    "Explorer’s Off-Road Journey",
    "Off-Road Adventure Quest",
  ],
  "Market Tour": [
    "Local Market Exploration",
    "Fresh Finds Tour",
    "Cultural Market Walk",
    "Bazaar & Market Adventure",
    "Artisan Market Discovery",
    "Farmers Market Experience",
    "Street Market Safari",
    "Market Treasures Tour",
    "Traditional Market Walk",
    "Market Flavors & Crafts Tour",
    "Market Vendor Stories",
    "Handmade Goods Hunt",
    "Spices & Sights Tour",
    "Local Produce Journey",
    "Market Morning Stroll",
    "Crafts & Cuisine Exploration",
    "Market History Walk",
    "Daily Market Discovery",
    "Taste of the Market Tour",
    "Seasonal Market Stroll",
  ],
  "Romantic Tour": [
    "Couples' Escape Journey",
    "Romantic City Stroll",
    "Sunset Lovers' Walk",
    "Intimate Experience Tour",
    "Enchanting Evening Adventure",
    "Love & Culture Tour",
    "Romantic Hideaways Exploration",
    "Date Night City Walk",
    "Heartfelt Moments Tour",
    "Romantic Landmarks Journey",
    "Whispered Promises Walk",
    "Moonlit Romance Trail",
    "Secret Gardens of Love Tour",
    "Candlelit Streets Stroll",
    "Lover’s Lane Exploration",
    "Serene Waterfront Romance",
    "Cozy Corner Escape",
    "Timeless Lovers’ Path",
    "Starlit Rendezvous Tour",
    "Charming Alleyways for Two",
  ],
};

const tourTypes = [
  "Walking Tour",
  "Bike Tour",
  "Food Tour",
  "Wine Tour",
  "Brewery Tour",
  "Cultural Tour",
  "Historical Tour",
  "Religious Tour",
  "Museum Tour",
  "Nature Tour",
  "Photography Tour",
  "Adventure Tour",
  "Private Tour",
  "Architecture Tour",
  "Underground Tour",
  "Ghost Tour",
  "Street Art Tour",
  "Shopping Tour",
  "Scenic Tour",
  "Off-Road Tour",
  "Market Tour",
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

// Load tour guides for a city - moved up before it's called
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

// Load attractions for a city
async function loadCityAttractions(city) {
  const formattedName = city;

  const attractionsPath = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "destinations",
    "city",
    `${formattedName}.ts`,
  );

  try {
    await access(attractionsPath);
  } catch {
    console.log(
      `No attractions file found for ${city}. Using placeholder attraction IDs.`,
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
      Math.random() * availableAttractions.length,
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
        s.endTime === endTime,
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

  // Generate pricing details
  const currencyIndex = Math.floor(Math.random() * currencies.length);
  const currency = currencies[currencyIndex].code;
  const currencySymbol = currencies[currencyIndex].symbol;

  const pricePerPerson = Math.floor(Math.random() * 150) + 35;
  const price = `${currencySymbol}${pricePerPerson}`;

  // Generate group size details
  const maxGroupSize = Math.floor(Math.random() * 15) + 10; // 10-20
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
        `File already exists (use --rewrite to replace): ${filePath}`,
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
