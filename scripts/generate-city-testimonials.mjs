/**
 * City Testimonials Generator Script
 * ==================================
 *
 * This script generates realistic testimonials from residents about living in cities for the Paragon Trails application.
 * It creates multiple testimonials for each city, organizing them by city in separate files.
 *
 * Features:
 * - Reads all city data from existing city information files
 * - Generates 5-10 testimonials for each city
 * - Creates appropriate folder structure in src/lib/constants/cityTestimonials/
 * - Generates realistic resident names, comments about living experiences
 * - Follows the Testimonial interface structure
 *
 * Usage: node scripts/generate-city-testimonials.mjs [options]
 *
 * Options:
 *   --rewrite, -r       Rewrite existing files instead of skipping them
 *   --city C, -c C      Process only cities matching the search term
 */

import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";
import {
  formatTitleToCamelCase,
  removeAccents,
} from "./utils/format-utils.mjs";
import { getRandomName } from "./utils/name-utils.mjs";
import { cityCountryMap } from "./utils/geo-utils.mjs";

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const readdir = promisify(fs.readdir);
const access = promisify(fs.access);

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

// Testimonial templates and phrases focused on living in cities
const cityLivingTestimonialTemplates = [
  "Living in {CITY} has been one of the best decisions of my life. The {CHARACTERISTIC} here makes everyday life so enjoyable.",
  "As a {DURATION} resident of {CITY}, I can't imagine living anywhere else. The {ASPECT} here is something you can't find elsewhere.",
  "What I love most about living in {CITY} is the {FEATURE}. It creates such a unique atmosphere that feels like home.",
  "After moving to {CITY} {YEARS_AGO} years ago, I fell in love with the {QUALITY} of this place. It's truly special.",
  "{CITY} has been my home for {DURATION}, and the {COMMUNITY} here is what keeps me rooted.",
  "Living in {CITY} means experiencing {EXPERIENCE} on a daily basis, which is why I could never leave.",
  "The {FEATURE} in {CITY} makes everyday life feel like an adventure. I've been here {YEARS_AGO} years and still discover new things.",
  "What most people don't realize about living in {CITY} is how {UNEXPECTED_QUALITY} it actually is. I've found my true home here.",
  "As someone who's lived in many cities, I can say that {CITY}'s {UNIQUE_ASPECT} is unmatched anywhere else.",
  "{CITY} isn't just where I live—it's part of my identity now. The {CHARACTERISTIC} has shaped who I am.",
  "I came to {CITY} for work but stayed for the {REASON_TO_STAY}. Best decision I ever made.",
  "Raising my family in {CITY} gives us access to {FAMILY_BENEFIT}, which is truly invaluable.",
  "The balance of {BALANCE_ASPECT} in {CITY} creates a quality of life that's hard to find elsewhere.",
  "Living in {CITY} means being surrounded by {SURROUNDING}, which feeds my soul every day.",
  "After {YEARS_AGO} years as a {CITY} local, I still appreciate the {EVERYDAY_JOY} that makes this place special.",
  "The {SEASONAL_HIGHLIGHT} in {CITY} is something I look forward to every year. It's what makes living here magical.",
  "From my apartment in {CITY}, I can {LOCAL_ACTIVITY}. Where else could you do that?",
  "The {NEIGHBORHOOD_VIBE} neighborhoods in {CITY} each have their own character, which keeps life interesting year after year.",
  "{CITY}'s {CULTURAL_ASPECT} scene has become central to my life here. I couldn't imagine living without it now.",
  "What I tell friends considering moving to {CITY} is to appreciate the {HIDDEN_GEM}—it's what makes daily life here so rich.",
  "No two days are the same living in {CITY}. The {DYNAMIC_ASPECT} keeps me excited to wake up every morning.",
  "If you want a city that offers {LIFESTYLE_BENEFIT}, {CITY} is the place to be.",
  "Despite its size, {CITY} manages to feel {SMALL_TOWN_QUALITY}, which is rare and wonderful.",
  "The food scene in {CITY} is incredible; living here means enjoying {CULINARY_FEATURE} all year round.",
  "One of the best things about living in {CITY} is the {ACCESSIBILITY_FEATURE}—it makes everything so convenient.",
  "The {GREEN_SPACES} in {CITY} offer a perfect escape from the urban buzz without leaving the city limits.",
  "Community events and festivals in {CITY} bring everyone together, making the {COMMUNITY_ASPECT} really stand out.",
  "The cost of living in {CITY} is {COST_CHARACTERISTIC}, but the quality of life here more than makes up for it.",
  "Living in {CITY} has opened my eyes to {PERSONAL_GROWTH_ASPECT} that I never expected.",
  "The mix of old and new in {CITY}'s architecture and culture keeps the city feeling fresh yet grounded.",
  "I've found that {CITY}'s {TRANSPORT_FEATURE} really makes getting around effortless and enjoyable.",
  "The sense of {SAFETY} in {CITY} makes me feel comfortable raising my kids here.",
  "I love how {CITY} celebrates {FESTIVAL_OR_EVENT}, it brings so much joy and community spirit.",
  "One thing I didn’t expect when moving to {CITY} was the {WEATHER_FEATURE}—it’s truly refreshing.",
  "The nightlife in {CITY} is vibrant and full of {ENTERTAINMENT_FEATURE} for everyone.",
  "{CITY}'s {EDUCATIONAL_OPPORTUNITY} options made it the perfect place for my family.",
  "The art and creativity flowing through {CITY} is inspiring. It feels like living inside a masterpiece.",
  "One of my favorite parts about living in {CITY} is the {MARKET_OR_SHOPPING_FEATURE} just around the corner.",
  "I appreciate how {CITY} balances {TECH_INNOVATION} with historic charm perfectly.",
  "Public services like {PUBLIC_SERVICE_FEATURE} in {CITY} make daily life convenient and stress-free.",
  "Living in {CITY} means I get to enjoy {SPORTS_OR_OUTDOOR_ACTIVITY} year-round.",
  "The people of {CITY} are incredibly welcoming and have made me feel at home since day one.",
  "The {TRANQUILITY_FEATURE} in {CITY} offers a peaceful retreat from the busy world.",
  "Living here means being a part of {CITY}'s ongoing story of innovation and tradition.",
  "What really surprised me about {CITY} is its {DIVERSITY_FEATURE} — it’s a true melting pot.",
  "Every weekend in {CITY} brings a new adventure with {LOCAL_EVENT_OR_FEATURE} to explore.",
  "The historical significance of {CITY} adds a depth to daily life that I truly cherish.",
  "Living in {CITY} has allowed me to connect deeply with {NATURE_FEATURE} nearby.",
  "The {FESTIVAL_OR_EVENT} season in {CITY} brings so much excitement and pride to the community.",
];

const cityCharacteristics = [
  "vibrant energy",
  "laid-back atmosphere",
  "sense of community",
  "cultural diversity",
  "historical charm",
  "innovative spirit",
  "artistic soul",
  "connection to nature",
  "urban convenience",
  "architectural beauty",
  "culinary scene",
  "walkability",
  "seasonality",
  "outdoor lifestyle",
  "cafe culture",
  "market scene",
  "nightlife",
  "public transportation",
  "green spaces",
  "neighborly feel",
  "creative energy",
  "entrepreneurial vibe",
  "academic atmosphere",
  "family-friendly environment",
  "coastal lifestyle",
  "mountain access",
  "festival tradition",
  "tech hub",
  "historic neighborhoods",
  "multilingual community",
  "artisan craftsmanship",
  "sustainable initiatives",
  "waterfront views",
  "sports enthusiasm",
  "music scene",
  "local craftsmanship",
  "seasonal festivals",
  "boutique shopping",
  "eco-consciousness",
  "pet-friendly parks",
  "urban gardens",
  "innovative architecture",
  "street art culture",
  "farmers markets",
  "lively plazas",
  "heritage preservation",
  "diverse nightlife",
  "public art installations",
  "culinary innovation",
  "tranquil retreats",
];

const cityAspects = [
  "work-life balance",
  "access to nature",
  "cultural offerings",
  "diverse neighborhoods",
  "public spaces",
  "local traditions",
  "seasonal festivals",
  "community events",
  "food markets",
  "music scene",
  "arts community",
  "historical landmarks",
  "educational opportunities",
  "healthcare system",
  "local businesses",
  "startup ecosystem",
  "recreational facilities",
  "waterfront activities",
  "cycling infrastructure",
  "coffee culture",
  "street food scene",
  "craft beer community",
  "farmers markets",
  "public art",
  "architecture",
  "museums and galleries",
  "theater scene",
  "outdoor dining",
  "professional opportunities",
  "green initiatives",
  "public transportation",
  "family-friendly parks",
  "urban gardening",
  "nightlife diversity",
  "sports culture",
  "wellness centers",
  "library systems",
  "multicultural cuisine",
  "historic districts",
  "artisan workshops",
  "tech innovation hubs",
  "volunteer opportunities",
  "local storytelling",
  "boutique shopping",
  "community centers",
  "riverwalks",
  "cycling tours",
  "seasonal outdoor markets",
  "fitness clubs",
  "creative workshops",
  "farm-to-table restaurants",
];

const cityFeatures = [
  "network of parks",
  "historic old town",
  "efficient public transit",
  "walkable neighborhoods",
  "waterfront promenade",
  "vibrant street markets",
  "network of bike paths",
  "community gardens",
  "local cafe scene",
  "independent bookstores",
  "beach access",
  "mountain views",
  "cultural diversity",
  "festival calendar",
  "food hall culture",
  "art district",
  "theater district",
  "university presence",
  "startup hubs",
  "family-friendly attractions",
  "sports facilities",
  "pedestrian streets",
  "historic architecture",
  "cultural institutions",
  "live music venues",
  "riverside parks",
  "urban murals and street art",
  "botanical gardens",
  "public libraries",
  "farmers market",
  "open-air cinemas",
  "skate parks",
  "aquatic centers",
  "vintage shopping districts",
  "local craft breweries",
  "rooftop bars",
  "culinary tours",
  "harbor views",
  "artisanal food shops",
  "community theaters",
  "green rooftops",
  "seasonal outdoor festivals",
  "heritage museums",
  "scenic hiking trails",
  "urban plazas",
  "concert halls",
  "eco-friendly transport options",
  "historic churches",
];

const cityQualities = [
  "welcoming nature",
  "creative energy",
  "historical depth",
  "culinary diversity",
  "architectural beauty",
  "seasonal transformations",
  "cultural richness",
  "outdoor accessibility",
  "community spirit",
  "urban convenience",
  "entrepreneurial drive",
  "intellectual atmosphere",
  "artistic expression",
  "generational diversity",
  "balanced lifestyle",
  "progressive thinking",
  "traditional values",
  "sustainable practices",
  "global perspective",
  "local pride",
  "resilience",
  "adaptability",
  "innovative mindset",
  "collaborative approach",
  "inclusive environment",
  "vibrant nightlife",
  "family-oriented",
  "green consciousness",
  "historical preservation",
  "modern infrastructure",
  "friendly neighborhoods",
  "dynamic economy",
  "strong social fabric",
  "multilingual community",
  "high quality of life",
  "rich folklore",
  "tech-savvy population",
  "active volunteerism",
  "artisanal craftsmanship",
  "civic engagement",
  "access to education",
  "safe and secure",
];

const communityDescriptors = [
  "tight-knit community",
  "diverse population",
  "creative circles",
  "entrepreneurial network",
  "supportive neighbors",
  "family-oriented community",
  "expat community",
  "artistic collective",
  "professional network",
  "academic community",
  "culinary scene",
  "outdoor enthusiasts",
  "activist groups",
  "cultural organizations",
  "volunteer networks",
  "sports communities",
  "music scene",
  "tech ecosystem",
  "craft community",
  "literary circles",
  "multicultural neighborhoods",
  "wellness community",
  "environmental advocates",
  "heritage societies",
  "youth organizations",
  "senior citizen groups",
  "local artisans",
  "startup founders",
  "community gardeners",
  "language exchange groups",
  "makerspaces",
  "film enthusiasts",
  "philanthropic circles",
  "digital nomads",
  "social clubs",
  "religious communities",
  "neighborhood associations",
  "gaming communities",
];

const cityExperiences = [
  "cultural immersion",
  "natural beauty",
  "historical richness",
  "urban innovation",
  "artistic expression",
  "culinary exploration",
  "community connection",
  "outdoor adventure",
  "architectural wonder",
  "intellectual stimulation",
  "creative inspiration",
  "professional growth",
  "seasonal celebrations",
  "multicultural exchange",
  "local traditions",
  "access to both city and nature",
  "work-life harmony",
  "continuous discovery",
  "international exposure",
  "civic engagement",
  "festival participation",
  "nightlife excitement",
  "wellness and relaxation",
  "eco-tourism experiences",
  "sports and recreation",
  "family-friendly activities",
  "music and performing arts",
  "shopping and markets",
  "historic tours",
  "volunteering opportunities",
];

const unexpectedQualities = [
  "peaceful",
  "affordable",
  "connected",
  "green",
  "artistic",
  "innovative",
  "traditional",
  "welcoming",
  "diverse",
  "accessible",
  "family-friendly",
  "entrepreneurial",
  "culturally rich",
  "historically preserved",
  "forward-thinking",
  "balanced",
  "sustainable",
  "adaptable",
  "creative",
  "inspiring",
  "hidden gem",
  "underrated",
  "eco-conscious",
  "inclusive",
  "resilient",
  "vibrant",
  "quiet",
  "charming",
  "multifaceted",
];

const uniqueAspects = [
  "seasonal transitions",
  "cultural celebrations",
  "architectural harmony",
  "natural integration",
  "historical continuity",
  "innovative design",
  "public spaces",
  "local cuisine",
  "artistic expression",
  "community initiatives",
  "neighborhood identities",
  "educational resources",
  "creative economy",
  "cultural preservation",
  "urban planning",
  "quality of life",
  "environmental consciousness",
  "local government",
  "public services",
  "social cohesion",
  "transport infrastructure",
  "heritage sites",
  "green initiatives",
  "tech innovation",
  "public art installations",
  "walkability",
  "local festivals",
  "multilingualism",
  "community resilience",
];

const reasonsToStay = [
  "sense of community",
  "quality of life",
  "cultural vibrancy",
  "economic opportunities",
  "natural environment",
  "educational system",
  "healthcare access",
  "food scene",
  "arts community",
  "outdoor activities",
  "social connections",
  "family support",
  "professional network",
  "urban amenities",
  "sustainable lifestyle",
  "public transportation",
  "political climate",
  "recreational options",
  "affordability",
  "work opportunities",
  "safety and security",
  "climate comfort",
  "diverse neighborhoods",
  "access to innovation hubs",
  "vibrant nightlife",
  "local traditions",
  "community engagement",
  "green spaces",
  "transport connectivity",
  "inclusive culture",
];

const familyBenefits = [
  "excellent schools",
  "safe neighborhoods",
  "family-friendly activities",
  "green spaces",
  "community centers",
  "educational resources",
  "cultural exposure",
  "diverse experiences",
  "outdoor recreation",
  "quality healthcare",
  "public programs",
  "youth opportunities",
  "supportive community",
  "enrichment activities",
  "international perspective",
  "multigenerational interactions",
  "art education",
  "sports facilities",
  "nature connection",
  "cultural institutions",
  "after-school programs",
  "childcare services",
  "family-oriented events",
  "accessible playgrounds",
  "parent support groups",
  "safe pedestrian areas",
  "library programs",
  "healthy food options",
  "family healthcare specialists",
  "early childhood education",
];

const balanceAspects = [
  "urban convenience and nature access",
  "historical preservation and modern innovation",
  "local community and global perspective",
  "professional opportunity and personal time",
  "cultural diversity and local identity",
  "excitement and tranquility",
  "tradition and progress",
  "affordability and quality",
  "urban density and open spaces",
  "work ethic and leisure time",
  "family life and nightlife",
  "indoor culture and outdoor activity",
  "intellectual life and physical activity",
  "artistic expression and practical living",
  "bustling energy and quiet retreats",
  "modern amenities and vintage charm",
  "fast-paced lifestyle and slow weekends",
  "cosmopolitan vibe and small-town feel",
  "cutting-edge technology and nature conservation",
  "diverse culinary experiences and local farmers markets",
  "vibrant nightlife and peaceful mornings",
  "public transit convenience and bike-friendly paths",
  "dynamic economy and preserved heritage",
  "creative hubs and traditional craftsmanship",
  "community engagement and personal space",
];

const surroundings = [
  "architectural beauty",
  "historical landmarks",
  "natural landscapes",
  "cultural diversity",
  "artistic expression",
  "innovative thinking",
  "community spirit",
  "culinary creativity",
  "urban greenery",
  "seasonal beauty",
  "entrepreneurial energy",
  "academic excellence",
  "historic preservation",
  "modern development",
  "cultural institutions",
  "recreational spaces",
  "diverse neighborhoods",
  "international influences",
  "traditional customs",
  "creative enterprises",
  "waterfront promenades",
  "lush parks and gardens",
  "vibrant street art",
  "festival grounds",
  "historic districts",
  "open-air markets",
  "scenic hiking trails",
  "botanical gardens",
  "city skylines",
  "quiet residential streets",
  "coastal vistas",
  "urban plazas and squares",
];

const everydayJoys = [
  "morning coffee culture",
  "evening light on the buildings",
  "neighborhood markets",
  "seasonal changes in the parks",
  "street performances",
  "local bakeries",
  "weekend rituals",
  "public spaces",
  "community events",
  "friendly shopkeepers",
  "chance encounters",
  "architectural details",
  "urban wildlife",
  "hidden courtyards",
  "riverside walks",
  "neighborhood cafes",
  "local music venues",
  "public art",
  "sunset views",
  "seasonal festivals",
  "bike-friendly streets",
  "farmers market mornings",
  "quiet reading spots",
  "community gardens",
  "late-night diners",
  "pop-up food stalls",
  "urban street murals",
  "sun-drenched plazas",
  "family picnics in the park",
  "early morning jogs",
];

const seasonalHighlights = [
  "spring cherry blossoms",
  "summer outdoor concerts",
  "fall foliage in the parks",
  "winter holiday markets",
  "spring art festivals",
  "summer street fairs",
  "autumn harvest events",
  "winter snow transformations",
  "spring garden openings",
  "summer waterfront activities",
  "fall cultural season",
  "winter café coziness",
  "spring outdoor dining",
  "summer night events",
  "autumn neighborhood walks",
  "winter architectural beauty",
  "spring market reopenings",
  "summer public pool scene",
  "fall university energy",
  "winter community celebrations",
  "spring bike rides",
  "summer food truck gatherings",
  "fall wine harvest festivals",
  "winter ice skating rinks",
  "spring bird watching",
  "summer festival parades",
  "autumn craft fairs",
  "winter fireside gatherings",
  "spring yoga in the park",
  "summer beach bonfires",
];

const localActivities = [
  "walk to world-class museums",
  "bike to the beach in minutes",
  "hike mountain trails on weekends",
  "shop at farmers markets any day",
  "attend cultural events nightly",
  "enjoy waterfront dining",
  "access nature preserves easily",
  "participate in community gardens",
  "visit historic sites casually",
  "enjoy rooftop views of the skyline",
  "access international cuisine",
  "attend impromptu concerts",
  "join community sports leagues",
  "take classes at renowned institutions",
  "participate in local governance",
  "enjoy seasonal festivals",
  "access multiple parks within walking distance",
  "engage with diverse cultural communities",
  "connect with professional networks",
  "enjoy both urban and natural environments",
  "explore vibrant street art",
  "relax in cozy neighborhood cafes",
  "discover hidden local boutiques",
  "join weekend yoga sessions in the park",
  "experience night markets",
  "attend open-air theater performances",
  "take part in charity runs",
  "visit botanical gardens",
  "enjoy riverfront walks",
  "experience local craft workshops",
];

const neighborhoodVibes = [
  "historic",
  "trendy",
  "artistic",
  "family-friendly",
  "diverse",
  "academic",
  "bohemian",
  "upscale",
  "working-class",
  "waterfront",
  "creative",
  "commercial",
  "residential",
  "multicultural",
  "green",
  "bustling",
  "quiet",
  "gentrifying",
  "established",
  "evolving",
  "urban",
  "suburban",
  "industrial",
  "hipster",
  "eco-conscious",
  "touristy",
  "luxurious",
  "community-oriented",
  "historic preservation",
];

const culturalAspects = [
  "music",
  "art",
  "theater",
  "culinary",
  "literary",
  "dance",
  "film",
  "architectural",
  "historical",
  "academic",
  "fashion",
  "design",
  "nightlife",
  "festival",
  "museum",
  "sports",
  "outdoor recreation",
  "craft beer",
  "coffee",
  "wine",
  "street art",
  "public art",
  "folk traditions",
  "cultural heritage",
  "live performances",
  "gallery openings",
  "film festivals",
  "food festivals",
  "ethnic cuisine",
];

const hiddenGems = [
  "neighborhood parks",
  "local bakeries",
  "historic alleyways",
  "community events",
  "seasonal traditions",
  "small museums",
  "independent bookstores",
  "family-run restaurants",
  "urban gardens",
  "architectural details",
  "public art installations",
  "weekend markets",
  "riverside paths",
  "volunteer opportunities",
  "community classes",
  "informal music venues",
  "cultural festivals",
  "craft workshops",
  "historic preservation",
  "creative incubators",
  "hidden courtyards",
  "boutique coffee shops",
  "artisan markets",
  "local theaters",
  "quiet reading spots",
  "secret viewpoints",
  "underground clubs",
  "old libraries",
  "street murals",
  "pop-up galleries",
];

const durations = [
  "long-time",
  "decade-long",
  "lifelong",
  "devoted",
  "committed",
  "passionate",
  "dedicated",
  "enthusiastic",
  "6-year",
  "10-year",
  "20-year",
  "third-generation",
  "second-generation",
  "newly converted",
  "recent but committed",
  "born-and-raised",
  "adopted",
  "returning",
  "permanent",
  "settled",
  "seasoned",
  "experienced",
  "veteran",
  "established",
  "resilient",
  "steadfast",
];

const yearsRange = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 18, 20, 25, 30];

const testimonialTitles = [
  "Life in {CITY}: A Local Perspective",
  "Why {CITY} Feels Like Home",
  "What Makes {CITY} Special to Live In",
  "The Real {CITY} Experience",
  "Living the {CITY} Lifestyle",
  "Why I Chose {CITY} as Home",
  "{CITY}: Beyond the Tourist Experience",
  "The Everyday Magic of {CITY}",
  "What I Love About Living in {CITY}",
  "{CITY} Through a Resident's Eyes",
  "The Soul of {CITY}: A Local's View",
  "Living and Thriving in {CITY}",
  "{CITY}'s Hidden Treasures for Locals",
  "My {CITY} Story: Life as a Resident",
  "The True Character of {CITY}",
  "Why {CITY} Keeps Getting Better",
  "The Beauty of Everyday Life in {CITY}",
  "{CITY}: Where I Found My Community",
  "The Unexpected Joys of {CITY} Living",
  "What Makes {CITY} Uniquely Livable",
  "Finding Balance in {CITY}",
  "My Corner of {CITY}",
  "{CITY}: A City That Grows With You",
  "The Perfect Imperfections of {CITY}",
  "{CITY} Living: Worth Every Moment",
  "Discovering Home in {CITY}",
  "Why I’m Proud to Call {CITY} Home",
  "The Heartbeat of {CITY} Life",
  "Stories From the Streets of {CITY}",
  "{CITY}: More Than Just a Place",
  "From Newcomer to Local in {CITY}",
  "How {CITY} Changed My Life",
  "The Community Spirit That Defines {CITY}",
  "A Love Letter to {CITY}",
  "The Vibrant Life of {CITY} Residents",
  "Inside the Culture of {CITY}",
  "The Challenges and Charms of Living in {CITY}",
  "Finding Inspiration Every Day in {CITY}",
  "A Resident's Guide to Living Well in {CITY}",
  "Why {CITY} Is a Place to Grow",
  "The Neighborhoods That Make {CITY} Home",
  "Living Sustainably in {CITY}",
  "What Makes {CITY} Feel Like Family",
  "Uncovering the Layers of {CITY}",
  "The Joys of Slow Living in {CITY}",
  "How {CITY} Balances Tradition and Innovation",
];
  
  

// Helper functions
async function ensureDirectoryExists(dirPath) {
  try {
    await access(dirPath);
  } catch {
    await mkdir(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

async function fileExists(filePath) {
  try {
    await access(filePath, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function formatFileName(cityName) {
  return formatTitleToCamelCase(
    removeAccents(cityName.replace(/[^\w\s]/gi, "")),
  );
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getCityLivingTestimonialQuote(city) {
  let quote = getRandomItem(cityLivingTestimonialTemplates);

  // Replace placeholders
  quote = quote.replace(/\{CITY\}/g, city);
  quote = quote.replace(
    /\{CHARACTERISTIC\}/g,
    getRandomItem(cityCharacteristics),
  );
  quote = quote.replace(/\{ASPECT\}/g, getRandomItem(cityAspects));
  quote = quote.replace(/\{FEATURE\}/g, getRandomItem(cityFeatures));
  quote = quote.replace(/\{QUALITY\}/g, getRandomItem(cityQualities));
  quote = quote.replace(/\{COMMUNITY\}/g, getRandomItem(communityDescriptors));
  quote = quote.replace(/\{EXPERIENCE\}/g, getRandomItem(cityExperiences));
  quote = quote.replace(
    /\{UNEXPECTED_QUALITY\}/g,
    getRandomItem(unexpectedQualities),
  );
  quote = quote.replace(/\{UNIQUE_ASPECT\}/g, getRandomItem(uniqueAspects));
  quote = quote.replace(/\{DURATION\}/g, getRandomItem(durations));
  quote = quote.replace(/\{YEARS_AGO\}/g, getRandomItem(yearsRange).toString());
  quote = quote.replace(/\{REASON_TO_STAY\}/g, getRandomItem(reasonsToStay));
  quote = quote.replace(/\{FAMILY_BENEFIT\}/g, getRandomItem(familyBenefits));
  quote = quote.replace(/\{BALANCE_ASPECT\}/g, getRandomItem(balanceAspects));
  quote = quote.replace(/\{SURROUNDING\}/g, getRandomItem(surroundings));
  quote = quote.replace(/\{EVERYDAY_JOY\}/g, getRandomItem(everydayJoys));
  quote = quote.replace(
    /\{SEASONAL_HIGHLIGHT\}/g,
    getRandomItem(seasonalHighlights),
  );
  quote = quote.replace(/\{LOCAL_ACTIVITY\}/g, getRandomItem(localActivities));
  quote = quote.replace(
    /\{NEIGHBORHOOD_VIBE\}/g,
    getRandomItem(neighborhoodVibes),
  );
  quote = quote.replace(/\{CULTURAL_ASPECT\}/g, getRandomItem(culturalAspects));
  quote = quote.replace(/\{HIDDEN_GEM\}/g, getRandomItem(hiddenGems));

  return quote;
}

function getTestimonialTitle(city) {
  let title = getRandomItem(testimonialTitles);
  title = title.replace(/\{CITY\}/g, city);
  return title;
}

// Get list of cities from the mapping file
async function getCities() {
  try {
    const cities = Object.keys(cityCountryMap);
    return cities;
  } catch (error) {
    console.error(`Error getting city list: ${error.message}`);
    return [];
  }
}

// Generate testimonials for a city
function generateCityTestimonials(city, cityDisplayName) {
  const count = Math.floor(Math.random() * 6) + 5; // 5-10 testimonials
  const testimonials = [];

  // Generate current year and up to 2 years back for realistic dates
  const currentYear = new Date().getFullYear();
  const years = [currentYear, currentYear - 1, currentYear - 2];

  for (let i = 0; i < count; i++) {
    // Create a random date within the past 2 years
    const randomYear = getRandomItem(years);
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const randomDay = Math.floor(Math.random() * 28) + 1;
    const formattedDate = `${randomYear}-${randomMonth.toString().padStart(2, "0")}-${randomDay.toString().padStart(2, "0")}`;

    // Generate random rating between 4.0 and 5.0
    const rating = (4 + Math.random()).toFixed(1);

    testimonials.push({
      id: `city-testimonial-${city}-${i + 1}`, // Add unique ID
      quote: getCityLivingTestimonialQuote(cityDisplayName),
      author: getRandomName(),
      title: getTestimonialTitle(cityDisplayName),
      city: cityDisplayName,
      rating: parseFloat(rating),
      date: formattedDate,
    });
  }

  return testimonials;
}

// Create testimonial file for a city
async function createCityTestimonialFile(city) {
  // Format city display name from kebab case
  const cityDisplayName = city
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const fileName = formatFileName(city);
  const cityDir = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "cityTestimonials",
  );
  const filePath = path.join(cityDir, `${fileName}Testimonials.ts`);

  // Ensure directory exists
  await ensureDirectoryExists(cityDir);

  // Check if file exists and should be skipped
  if ((await fileExists(filePath)) && !options.rewrite) {
    console.log(`Skipping existing file: ${filePath}`);
    return;
  }

  // Generate testimonials
  const testimonials = generateCityTestimonials(city, cityDisplayName);

  // Create file content
  let content = `import { Testimonial } from "@/lib/interfaces/services/testimonials";\n\n`;
  content += `export const ${fileName}Testimonials: Testimonial[] = [\n`;

  testimonials.forEach((testimonial, index) => {
    content += `  {\n`;
    content += `    id: "${testimonial.id}",\n`;
    content += `    quote: "${testimonial.quote}",\n`;
    content += `    author: "${testimonial.author}",\n`;
    content += `    title: "${testimonial.title}",\n`;
    content += `    city: "${testimonial.city}",\n`;
    content += `    rating: ${testimonial.rating},\n`;
    content += `    date: "${testimonial.date}"\n`;
    content += `  }${index < testimonials.length - 1 ? "," : ""}\n`;
  });

  content += `];\n`;

  // Write file
  await writeFile(filePath, content);
  console.log(`Created file: ${filePath}`);
}

// Main function
async function generateAllCityTestimonials() {
  // Get all cities
  const cities = await getCities();

  for (const city of cities) {
    // Apply city filter if specified
    if (
      options.cityFilter &&
      !city.includes(options.cityFilter.toLowerCase())
    ) {
      continue;
    }

    try {
      await createCityTestimonialFile(city);
    } catch (error) {
      console.error(
        `Error creating testimonial file for ${city}: ${error.message}`,
      );
    }
  }
}

// Create the testimonials interface if it doesn't exist
async function ensureTestimonialInterfaceExists() {
  const interfacePath = path.join(
    process.cwd(),
    "src",
    "lib",
    "interfaces",
    "services",
    "testimonials.ts",
  );

  // Create directory if it doesn't exist
  await ensureDirectoryExists(path.dirname(interfacePath));

  // Check if file already exists
  if (await fileExists(interfacePath)) {
    return;
  }

  // Create interface file
  const interfaceContent = `export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  city?: string;
  rating?: number;
  date?: string;
}\n`;

  await writeFile(interfacePath, interfaceContent);
  console.log(`Created Testimonial interface file at ${interfacePath}`);
}

// Run the script
(async () => {
  await ensureTestimonialInterfaceExists();
  await generateAllCityTestimonials();
  console.log("City testimonial generation completed successfully!");
})().catch((error) =>
  console.error("Error generating city testimonials:", error),
);
