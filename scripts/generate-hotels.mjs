import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";
import { getCityFiles, getRandomEmail } from "./utils/file-utils.mjs";
import {
  formatKebabToCamelCase,
  removeAccents,
} from "./utils/format-utils.mjs";
import {
  cityCountryMap,
  cityToRegionMap,
  countryCurrencyMap,
  euroCountries,
  regionCurrencyMap,
} from "./utils/geo-utils.mjs";

// Utility functions for file operations
// Rewrite Flag: Use --rewrite or -r to overwrite existing files instead of skipping them
// node scripts/generate-hotels.mjs --rewrite

// Append Flag: Use --append N or -a N to add N new hotels to existing files
// node scripts/generate-hotels.mjs --append 5

// City Filter: Use --city "CityName" or -c "CityName" to process only specific cities
// node scripts/generate-hotels.mjs --city "Tokyo"

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

// Hotel data components
const hotelNames = {
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
  Australia: [
    "Koala Bay Resort",
    "Outback Lodge",
    "Sydney Harbor View",
    "The Coral Sands",
    "The Great Barrier Inn",
    "The Platypus Hotel",
    "Southern Cross Suites",
    "Kangaroo Hill Inn",
    "The Eucalyptus",
    "Oceanfront Retreat",
  ],
  "New Zealand": [
    "Aoraki Alpine Lodge",
    "Kiwi Bay Hotel",
    "Rotorua Retreat",
    "The Milford Inn",
    "Wellington Waterfront",
    "Tasman Peaks Resort",
    "The Pohutukawa Hotel",
    "North Star Inn",
    "Silver Fern Suites",
    "Lakeside Haven",
  ],
  Singapore: [
    "The Marina Luxe",
    "Lion City Grand",
    "Sentosa Vista",
    "Raffles Marina Hotel",
    "Orchard Central Inn",
    "Merlion Suites",
    "The Colonial Club",
    "Skyline Bay Hotel",
    "East Coast Retreat",
    "Sands Serenity",
  ],
  Thailand: [
    "Bangkok Royal Inn",
    "Chiang Mai Serenity",
    "The Lotus Pavilion",
    "Phuket Bayview Resort",
    "The Thai Orchid Hotel",
    "Elephant Grove Inn",
    "Silom Skyline",
    "The Emerald Temple Inn",
    "Siam Grand",
    "Andaman Horizon",
  ],
  Vietnam: [
    "Hanoi Lakeview Hotel",
    "The Saigon Pearl",
    "Da Nang Coast Inn",
    "The Mekong Retreat",
    "Hue Imperial Lodge",
    "The Dragon River Hotel",
    "Hoi An Heritage Inn",
    "The Bamboo Garden",
    "Indochine Palace",
    "Lotus Breeze Hotel",
  ],
  Indonesia: [
    "Bali Beachfront Resort",
    "Jakarta Skyline Hotel",
    "Ubud Serenity Lodge",
    "The Island Haven",
    "Sumatra Bay Inn",
    "The Garuda Grand",
    "Yogyakarta Retreat",
    "The Spice Island Hotel",
    "Borneo Rainforest Lodge",
    "Java Crest Inn",
  ],
  Russia: [
    "The Tsar Palace",
    "Moscow Royal Suites",
    "Winter Garden Hotel",
    "St. Petersburg Grand",
    "The Kremlin View Inn",
    "Siberian Lodge",
    "Red Square Hotel",
    "Volga River Retreat",
    "The Matryoshka Inn",
    "Nevsky Avenue Hotel",
  ],
  Brazil: [
    "Copacabana Breeze",
    "Amazon Rainforest Lodge",
    "Rio Heights Hotel",
    "The Carnival Inn",
    "Ipanema Bay Suites",
    "Brasilia Luxe",
    "The Samba Palace",
    "The Iguazu Inn",
    "Pantanal Eco Resort",
    "Bahia Grand",
  ],
  Argentina: [
    "The Pampas Retreat",
    "Buenos Aires Luxe",
    "Patagonia Peaks Hotel",
    "Tango Grand Inn",
    "Mendoza Wine Resort",
    "Iguazu Falls Inn",
    "Cordoba Capital Suites",
    "Andes View Hotel",
    "The Obelisk Hotel",
    "Estancia Royale",
  ],
  Mexico: [
    "Cancun Sunset Resort",
    "Aztec Gold Inn",
    "Playa del Sol Hotel",
    "The Tequila Grove",
    "Tulum Serenity",
    "Mexico City Luxe",
    "Mayan Palace Hotel",
    "Los Cabos Grand",
    "Oaxaca Colonial Inn",
    "The Yucatan Bay Hotel",
  ],
  "South Africa": [
    "Cape Point Lodge",
    "Kruger Safari Inn",
    "Table Mountain View",
    "Durban Coast Resort",
    "Garden Route Hotel",
    "The Veld Retreat",
    "Joburg Urban Suites",
    "The Baobab Inn",
    "Savanna Serenity",
    "Robben Island View",
  ],
  India: [
    "Taj Harmony Hotel",
    "The Lotus Courtyard",
    "Mumbai Marina Inn",
    "Goa Sea Breeze",
    "Udaipur Palace Hotel",
    "The Spice Route Lodge",
    "Himalayan Retreat",
    "New Delhi Grand",
    "Jaipur Heritage Inn",
    "Bangalore Heights",
  ],
  "United Arab Emirates": [
    "Burj Royale Hotel",
    "Dubai Dunes Inn",
    "Abu Dhabi Marina Suites",
    "The Oasis Retreat",
    "Palm Island View",
    "Sheikh Zayed Tower",
    "The Pearl Hotel",
    "The Desert Mirage",
    "Jumeirah Sunset Lodge",
    "Zabeel Palace Inn",
  ],
  Bahamas: [
    "Paradise Reef Hotel",
    "Nassau Pearl Inn",
    "Blue Lagoon Lodge",
    "Harbour Breeze",
    "The Bahama Bay Hotel",
    "Island Dreams Resort",
    "Tropical Tide Inn",
    "Ocean Breeze Suites",
    "The White Sand Hotel",
    "Atlantis View",
  ],
  "Cayman Islands": [
    "Seven Mile Retreat",
    "George Town Grand",
    "The Coral Breeze",
    "Tropical Haven Inn",
    "Island Reef Resort",
    "Caribbean Sunset Hotel",
    "Cayman Shores",
    "The Mangrove Inn",
    "West Bay Waters",
    "The Conch Club",
  ],
  "Puerto Rico": [
    "El Caribe Inn",
    "Old San Juan Suites",
    "Condado Vista Hotel",
    "Borinquen Breeze",
    "La Isla Grand",
    "Rainforest Ridge Lodge",
    "The Vieques Retreat",
    "Ponce Plaza Inn",
    "The Coqui Hotel",
    "Caribbean Pearl",
  ],
  "Sint Maarten": [
    "Great Bay Resort",
    "Philipsburg Paradise",
    "Island Jewel Inn",
    "The Dutch Caribbean Hotel",
    "Ocean Crest Suites",
    "Marigot Marina Lodge",
    "St. Maarten Luxe",
    "Seaside Harmony Inn",
    "The Caribbean Key",
    "Sapphire Breeze Hotel",
  ],
  Bermuda: [
    "Hamilton Bay Hotel",
    "Bermuda Coral Inn",
    "The Grotto View",
    "St. George’s Grand",
    "Pink Sands Resort",
    "Island Charm Hotel",
    "The Royal Cove",
    "Blue Horizon Inn",
    "Lighthouse Reef Hotel",
    "Somerset Bay Inn",
  ],
  "U.S. Virgin Islands": [
    "St. Thomas Shores",
    "The Caribbean Crown",
    "Island View Hotel",
    "Charlotte Amalie Inn",
    "Sunset Bay Resort",
    "Virgin Breeze Hotel",
    "Coral Harbour Inn",
    "The Sugar Mill Lodge",
    "The Palm Grove",
    "Cruz Bay Inn",
  ],
  Honduras: [
    "Roatán Reef Inn",
    "Tegucigalpa Grand",
    "Copán Mayan Lodge",
    "San Pedro Sunrise",
    "The Island Retreat",
    "Bay Islands Hotel",
    "La Ceiba Breeze",
    "The Caribbean Maya",
    "The Jungle View",
    "Honduras Heritage Inn",
  ],
  Uruguay: [
    "Montevideo Bay Hotel",
    "Punta del Este Luxe",
    "The Gaucho Inn",
    "Colonia Heritage Hotel",
    "Uruguay Coast Resort",
    "The Atlantic Breeze",
    "Sierra de Minas Retreat",
    "Salto Springs Hotel",
    "The Charrúa Lodge",
    "Rivera Suites",
  ],
  Peru: [
    "Cusco Andes Lodge",
    "Lima City Grand",
    "Machu Picchu View",
    "Sacred Valley Retreat",
    "Arequipa Colonial Inn",
    "Lake Titicaca Hotel",
    "The Amazon Hideaway",
    "Inca Sun Hotel",
    "Peruvian Peaks Inn",
    "Nazca Dunes Hotel",
  ],
  Colombia: [
    "Bogotá Capital Inn",
    "Cartagena Breeze",
    "Medellín Heights",
    "Santa Marta Grand",
    "Cali Urban Suites",
    "Café Region Retreat",
    "The Andes Hotel",
    "Barranquilla Bay Inn",
    "The Emerald Coast Hotel",
    "Villa del Rosario Inn",
  ],
  Chile: [
    "Santiago Central Inn",
    "Valparaíso Bay Hotel",
    "Patagonia Edge Resort",
    "Atacama Dunes Lodge",
    "The Andes Crest",
    "Lakes District Inn",
    "Viña del Mar Retreat",
    "Puerto Montt View",
    "Chile Norte Suites",
    "Torres del Paine Inn",
  ],
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
const streetSuffixes = {
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
  Canada: [
    "Street",
    "Avenue",
    "Road",
    "Drive",
    "Crescent",
    "Lane",
    "Court",
    "Place",
    "Trail",
    "Terrace",
    "Boulevard",
  ],
  "United Kingdom": [
    "Street",
    "Road",
    "Avenue",
    "Lane",
    "Drive",
    "Place",
    "Way",
    "Crescent",
    "Close",
    "Court",
    "Terrace",
    "Walk",
    "Grove",
    "Hill",
    "Gardens",
  ],
  Japan: [
    "Dori",
    "Street",
    "Avenue",
    "Boulevard",
    "Chome",
    "Banchi",
    "Go",
    "Tori",
    "Michi",
  ],
  China: [
    "Road",
    "Street",
    "Avenue",
    "Boulevard",
    "Lu",
    "Jie",
    "Dao",
    "Xiang",
    "Qu",
    "Xian",
  ],
  Australia: [
    "Street",
    "Road",
    "Avenue",
    "Drive",
    "Crescent",
    "Place",
    "Lane",
    "Terrace",
    "Court",
    "Boulevard",
    "Way",
    "Parade",
  ],
  "New Zealand": [
    "Street",
    "Avenue",
    "Road",
    "Drive",
    "Crescent",
    "Lane",
    "Terrace",
    "Place",
    "Court",
    "Close",
  ],
  Singapore: [
    "Street",
    "Avenue",
    "Road",
    "Drive",
    "Lane",
    "Terrace",
    "Close",
    "Walk",
    "Crescent",
    "Way",
  ],
  Thailand: ["Thanon", "Soi", "Road", "Avenue", "Street", "Lane"],
  Vietnam: ["Đường", "Phố", "Hẻm", "Ngõ", "Ngách", "Quốc lộ", "Tỉnh lộ"],
  Indonesia: ["Jalan", "Gang", "Lorong", "Jembatan", "Boulevard", "Avenue"],
  Russia: ["Ulitsa", "Prospekt", "Pereulok", "Shosse", "Ploshchad", "Bulvar"],
  Brazil: ["Rua", "Avenida", "Travessa", "Alameda", "Largo", "Estrada"],
  Argentina: ["Calle", "Avenida", "Pasaje", "Boulevard", "Camino", "Ruta"],
  Mexico: [
    "Calle",
    "Avenida",
    "Boulevard",
    "Camino",
    "Carretera",
    "Calzada",
    "Privada",
  ],
  "South Africa": [
    "Street",
    "Road",
    "Avenue",
    "Drive",
    "Crescent",
    "Lane",
    "Terrace",
    "Close",
    "Place",
    "Boulevard",
  ],
  India: ["Marg", "Road", "Street", "Avenue", "Nagar", "Path", "Chowk", "Gali"],
  "United Arab Emirates": [
    "Street",
    "Road",
    "Avenue",
    "Boulevard",
    "Lane",
    "Way",
    "Drive",
  ],
  Bahamas: [
    "Street",
    "Road",
    "Avenue",
    "Drive",
    "Lane",
    "Boulevard",
    "Terrace",
    "Close",
  ],
  "Cayman Islands": [
    "Street",
    "Drive",
    "Road",
    "Avenue",
    "Place",
    "Lane",
    "Terrace",
  ],
  "Puerto Rico": [
    "Calle",
    "Avenida",
    "Carretera",
    "Camino",
    "Boulevard",
    "Urbanización",
  ],
  "Sint Maarten": ["Street", "Road", "Avenue", "Drive", "Lane", "Way", "Close"],
  Bermuda: ["Street", "Lane", "Road", "Drive", "Avenue", "Close", "Terrace"],
  "U.S. Virgin Islands": [
    "Street",
    "Road",
    "Avenue",
    "Boulevard",
    "Drive",
    "Lane",
  ],
  Honduras: ["Calle", "Avenida", "Boulevard", "Pasaje", "Colonia", "Barrio"],
  Uruguay: ["Calle", "Avenida", "Boulevard", "Camino", "Pasaje"],
  Peru: ["Calle", "Avenida", "Jirón", "Pasaje", "Boulevard", "Malecón"],
  Colombia: [
    "Calle",
    "Carrera",
    "Avenida",
    "Transversal",
    "Diagonal",
    "Autopista",
  ],
  Chile: ["Calle", "Avenida", "Pasaje", "Camino", "Boulevard", "Costanera"],
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

const streetPrefixes = {
  "United States": [
    "N",
    "S",
    "E",
    "W",
    "NE",
    "NW",
    "SE",
    "SW",
    "Old",
    "New",
    "Upper",
    "Lower",
  ],
  Canada: ["North", "South", "East", "West", "Upper", "Lower", "Old", "New"],
  "United Kingdom": [
    "North",
    "South",
    "East",
    "West",
    "Upper",
    "Lower",
    "Old",
    "New",
  ],
  Japan: [
    "Minami",
    "Kita",
    "Higashi",
    "Nishi",
    "Shin",
    "Chuo",
    "Kami",
    "Shimo",
  ],
  China: ["Dong", "Xi", "Nan", "Bei", "Zhong", "Xin", "Jiu"],
  Australia: ["North", "South", "East", "West", "Upper", "Lower", "Old", "New"],
  "New Zealand": [
    "North",
    "South",
    "East",
    "West",
    "Upper",
    "Lower",
    "Old",
    "New",
  ],
  Singapore: ["North", "South", "East", "West", "Upper", "Lower", "Old", "New"],
  Thailand: ["Thanon", "Soi", "Chang", "Mueang", "Bang", "Pak"],
  Vietnam: ["Đường", "Ngõ", "Hẻm", "Quốc lộ", "Tỉnh lộ", "Xã", "Phường"],
  Indonesia: ["Jalan", "Gang", "Komplek", "Kelurahan", "Kecamatan"],
  Russia: ["Ulitsa", "Prospekt", "Pereulok", "Shosse", "Ploshchad", "Bulvar"],
  Brazil: ["Rua", "Avenida", "Travessa", "Alameda", "Estrada", "Rodovia"],
  Argentina: ["Calle", "Avenida", "Pasaje", "Ruta", "Boulevard"],
  Mexico: [
    "Calle",
    "Avenida",
    "Boulevard",
    "Calzada",
    "Privada",
    "Prolongación",
  ],
  "South Africa": ["North", "South", "East", "West", "Upper", "Lower"],
  India: [
    "MG",
    "NH",
    "SH",
    "GT",
    "Link",
    "Main",
    "Ring",
    "Outer",
    "Old",
    "New",
  ],
  "United Arab Emirates": [
    "Sheikh",
    "Al",
    "Bin",
    "Hessa",
    "Mohammed",
    "Jumeirah",
    "Emirates",
  ],
  Bahamas: ["Queen", "Bay", "East", "West", "Old", "New"],
  "Cayman Islands": ["North", "South", "East", "West", "Old", "New"],
  "Puerto Rico": [
    "Calle",
    "Avenida",
    "Carretera",
    "Camino",
    "Ruta",
    "Urbanización",
  ],
  "Sint Maarten": ["Front", "Back", "Main", "Upper", "Lower"],
  Bermuda: ["North", "South", "East", "West", "Middle", "Old", "New"],
  "U.S. Virgin Islands": ["Main", "North", "South", "East", "West"],
  Honduras: ["Calle", "Avenida", "Pasaje", "Barrio", "Colonia"],
  Uruguay: ["Calle", "Avenida", "Boulevard", "Camino"],
  Peru: ["Avenida", "Calle", "Jirón", "Pasaje", "Malecón"],
  Colombia: ["Calle", "Carrera", "Transversal", "Diagonal", "Avenida"],
  Chile: ["Calle", "Avenida", "Pasaje", "Camino", "Costanera"],
  default: ["North", "South", "East", "West", "Upper", "Lower", "Old", "New"],
};

const streetNames = {
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
  Canada: [
    "Maple",
    "Queen",
    "King",
    "Victoria",
    "Laurier",
    "Confederation",
    "Pine",
    "Bay",
    "Church",
    "Front",
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
  China: [
    "Nanjing",
    "Changan",
    "Fuxing",
    "Beijing",
    "Heping",
    "Renmin",
    "Tianhe",
    "Zhongshan",
    "Xinhua",
    "Jianguo",
  ],
  Australia: [
    "George",
    "William",
    "Elizabeth",
    "Anzac",
    "Victoria",
    "Collins",
    "Sturt",
    "Smith",
    "King",
    "Queen",
  ],
  "New Zealand": [
    "Queen",
    "Victoria",
    "Karangahape",
    "Ponsonby",
    "Dominion",
    "Symonds",
    "Grafton",
    "Albert",
    "Jervois",
    "Khyber",
  ],
  Singapore: [
    "Orchard",
    "Raffles",
    "Bukit Timah",
    "Serangoon",
    "Tampines",
    "East Coast",
    "Thomson",
    "Jurong",
    "Changi",
    "Clementi",
  ],
  Thailand: [
    "Sukhumvit",
    "Silom",
    "Ratchada",
    "Sathorn",
    "Ramkhamhaeng",
    "Phahonyothin",
    "Phetchaburi",
    "Charoenkrung",
    "Nana",
    "Asoke",
  ],
  Vietnam: [
    "Nguyen Trai",
    "Le Loi",
    "Hai Ba Trung",
    "Tran Hung Dao",
    "Dien Bien Phu",
    "Pham Ngu Lao",
    "Ly Thuong Kiet",
    "Vo Van Kiet",
    "Hoang Hoa Tham",
    "Nguyen Hue",
  ],
  Indonesia: [
    "Sudirman",
    "Thamrin",
    "Gatot Subroto",
    "Rasuna Said",
    "Fatmawati",
    "Kemang",
    "Menteng",
    "Pondok Indah",
    "Cipete",
    "Tebet",
  ],
  Russia: [
    "Tverskaya",
    "Arbat",
    "Nevsky",
    "Kutuzovsky",
    "Leningradsky",
    "Komsomolskaya",
    "Lenina",
    "Pushkinskaya",
    "Gorky",
    "Sovetskaya",
  ],
  Brazil: [
    "Paulista",
    "Ipanema",
    "Copacabana",
    "Leblon",
    "Rio Branco",
    "Lapa",
    "Avenida Brasil",
    "Getúlio Vargas",
    "Oscar Freire",
    "Sete de Setembro",
  ],
  Argentina: [
    "Corrientes",
    "Florida",
    "Santa Fe",
    "Belgrano",
    "San Martín",
    "Rivadavia",
    "Callao",
    "Independencia",
    "Entre Ríos",
    "Mitre",
  ],
  Mexico: [
    "Reforma",
    "Insurgentes",
    "Juárez",
    "Zaragoza",
    "Madero",
    "Morelos",
    "Pino Suárez",
    "Guerrero",
    "Constituyentes",
    "Tlalpan",
  ],
  "South Africa": [
    "Nelson Mandela",
    "Long",
    "Main",
    "Bree",
    "Adderley",
    "Loop",
    "Voortrekker",
    "Smith",
    "Durban",
    "Pretorius",
  ],
  India: [
    "MG Road",
    "Ring Road",
    "Connaught Place",
    "Anna Salai",
    "Marine Drive",
    "Park Street",
    "Linking Road",
    "Brigade Road",
    "Baner",
    "Rajpath",
  ],
  "United Arab Emirates": [
    "Sheikh Zayed",
    "Al Wasl",
    "Jumeirah",
    "Al Nahda",
    "Khalifa",
    "Maktoum",
    "Zabeel",
    "Al Rigga",
    "Hessa",
    "Salahuddin",
  ],
  Bahamas: [
    "Bay",
    "Queen",
    "East Street",
    "Market",
    "Parliament",
    "Shirley",
    "Prince Charles",
    "Blue Hill",
    "Wulff",
    "Carmichael",
  ],
  "Cayman Islands": [
    "West Bay",
    "Eastern Avenue",
    "Walkers Road",
    "Smith Road",
    "South Church",
    "Goring Avenue",
    "North Sound",
    "Bodden",
    "Red Bay",
    "Seven Mile",
  ],
  "Puerto Rico": [
    "Ashford",
    "Constitución",
    "Muñoz Rivera",
    "Del Parque",
    "De Diego",
    "San Jorge",
    "Loíza",
    "Roosevelt",
    "Ponce de León",
    "Hostos",
  ],
  "Sint Maarten": [
    "Front Street",
    "Back Street",
    "Coconut Grove",
    "Zorg en Rust",
    "Orange Grove",
    "Great Bay",
    "Madame Estate",
    "Airport Road",
    "Bush Road",
    "Beacon Hill",
  ],
  Bermuda: [
    "Front Street",
    "Middle Road",
    "North Shore",
    "South Road",
    "Cobb's Hill",
    "Harbour Road",
    "Par-la-Ville",
    "Reid",
    "King",
    "Church",
  ],
  "U.S. Virgin Islands": [
    "Main Street",
    "Veterans Drive",
    "Krum Bay",
    "Frenchman's Bay",
    "Crown Mountain",
    "Hospital Street",
    "Smith Bay",
    "Estates Road",
    "Market Square",
    "Havensight",
  ],
  Honduras: [
    "La Reforma",
    "San Pedro",
    "Central",
    "Morazán",
    "Santa Rosa",
    "Francisco Morazán",
    "Comayagua",
    "Tela",
    "La Ceiba",
    "Copán",
  ],
  Uruguay: [
    "18 de Julio",
    "Rivera",
    "Artigas",
    "Montevideo",
    "Libertad",
    "Paysandú",
    "Florida",
    "Maldonado",
    "Soriano",
    "Canelones",
  ],
  Peru: [
    "Arequipa",
    "Abancay",
    "Tacna",
    "Colonial",
    "Salaverry",
    "Sucre",
    "Ayacucho",
    "Cusco",
    "La Marina",
    "Larco",
  ],
  Colombia: [
    "Autopista Norte",
    "Carrera 7",
    "Calle 26",
    "Avenida Caracas",
    "Diagonal 60",
    "Transversal 74",
    "Avenida Boyacá",
    "Calle 100",
    "Carrera 15",
    "Calle 72",
  ],
  Chile: [
    "Providencia",
    "Apoquindo",
    "Alameda",
    "Irarrázaval",
    "Macul",
    "Vitacura",
    "Pedro de Valdivia",
    "Vicuña Mackenna",
    "Bellavista",
    "Santa Rosa",
  ],
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

const accommodationTypes = [
  "Hotel",
  "Resort",
  "Boutique Hotel",
  "Hostel",
  "Bed and Breakfast",
  "Guesthouse",
  "Eco-Lodge",
  "Motel",
  "Serviced Apartment",
  "Vacation Rental",
  "Luxury Hotel",
  "Business Hotel",
  "Spa Hotel",
  "All-Inclusive Resort",
  "Family Resort",
  "Boutique Resort",
  "Luxury Lodge",
  "Glamping Resort",
  "Extended Stay Hotel",
  "Luxury Villa",
  "Chalet",
  "Boutique Inn",
];

const amenityTypes = [
  "Free Wi-Fi",
  "Swimming Pool",
  "Fitness Center",
  "Spa",
  "Parking",
  "Restaurant",
  "Bar",
  "Room Service",
  "Airport Shuttle",
  "Pet Friendly",
  "Business Center",
  "Laundry Service",
  "24-Hour Front Desk",
  "Conference Room",
  "Non-Smoking Rooms",
];

const accessibilityFeatures = [
  "Wheelchair Accessible",
  "Elevator",
  "Accessible Bathroom",
  "Visual Aids",
  "Hearing Support",
  "Braille Signage",
  "Accessible Parking",
  "Visual Alarm",
  "Hearing Loop",
  "Grab Bars",
  "Accessible Shower",
  "Lowered Light Switches",
  "Accessible Pathways",
  "Assistive Listening Devices",
  "Sign Language Interpretation",
  "Tactile Maps",
  "Large Print Materials",
];

const smokingPolicies = ["Allowed", "Not Allowed", "Designated Areas"];

const cancellationPolicies = [
  "Free cancellation up to 24 hours before check-in. If cancelled later, the first night will be charged.",
  "Free cancellation up to 48 hours before check-in. If cancelled later, the first night will be charged.",
  "Free cancellation up to 72 hours before check-in. If cancelled later, the first night will be charged.",
  "No refunds for cancellations",
  "50% refund for cancellations made 7 days before check-in",
];

// Get currency for a city based on country and region
function getCurrencyForCity(city) {
  const countryName = cityCountryMap[city] || "";
  const regionName = cityToRegionMap[city] || "";

  // First check if country has specific currency
  if (countryName && countryCurrencyMap[countryName]) {
    return countryCurrencyMap[countryName];
  }

  // Check if it's a Euro country
  if (countryName && euroCountries.includes(countryName)) {
    return "EUR";
  }

  // Check if region has default currency
  if (regionName && regionCurrencyMap[regionName]) {
    return regionCurrencyMap[regionName];
  }

  // Default to USD
  return "USD";
}

// Generate random check-in/out times
function getRandomTime(startHour, endHour) {
  const hour =
    Math.floor(Math.random() * (endHour - startHour + 1)) + startHour;
  return `${hour.toString().padStart(2, "0")}:00`;
}

// Generate a random phone number
function getRandomPhone() {
  let phone = "+";
  // Country code (1-3 digits)
  phone += Math.floor(Math.random() * 900) + 1;
  // Space
  phone += " ";
  // Area code (3 digits)
  phone += Math.floor(Math.random() * 900) + 100;
  // Separator
  phone += "-";
  // First part (3 digits)
  phone += Math.floor(Math.random() * 900) + 100;
  // Separator
  phone += "-";
  // Second part (4 digits)
  phone += Math.floor(Math.random() * 9000) + 1000;

  return phone;
}


// Generate random subset of array elements
function getRandomSubset(array, minItems, maxItems) {
  const numItems =
    Math.floor(Math.random() * (maxItems - minItems + 1)) + minItems;
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
}

// Generate a random address based on the city and country
function generateAddress(city, country) {
  // Get appropriate street suffix for the country
  const suffixes = streetSuffixes[country] || streetSuffixes["default"];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  // Generate random building number
  const buildingNumber = Math.floor(Math.random() * 300) + 1;

  // Select random street name
  const streetName =
    streetNames[Math.floor(Math.random() * streetNames.length)];

  // For some countries, building number comes after street name
  if (["Japan", "China", "South Korea"].includes(country)) {
    return `${streetName} ${suffix} ${buildingNumber}`;
  }

  // For most countries, building number comes first
  return `${buildingNumber} ${streetName} ${suffix}`;
}

// Generate a hotel with all required properties
function generateHotel(city, index) {
  const hotelName = `${hotelNames[Math.floor(Math.random() * hotelNames.length)]}`;
  const rating = Math.floor(Math.random() * 2) + 3; // 3-5 stars
  const accommodationType =
    accommodationTypes[Math.floor(Math.random() * accommodationTypes.length)];

  // Get country for this city
  const country = cityCountryMap[city] || "";

  // Generate address
  const address = generateAddress(city, country);

  // Random amenities (5-10)
  const hotelAmenities = getRandomSubset(amenityTypes, 5, 10);

  // Random accessibility features (0-3)
  const hotelAccessibility =
    Math.random() > 0.3
      ? getRandomSubset(accessibilityFeatures, 1, 3)
      : undefined;

  const checkInTime = getRandomTime(13, 16); // 13:00 - 16:00
  const checkOutTime = getRandomTime(10, 12); // 10:00 - 12:00

  const roomsAvailable = Math.floor(Math.random() * 50) + 10; // 10-60 rooms
  const isPetFriendly = Math.random() > 0.7; // 30% are pet friendly

  const currency = getCurrencyForCity(city);

  const contactEmail = getRandomEmail(hotelName);
  const contactPhone = getRandomPhone();

  const cancellationPolicy =
    cancellationPolicies[
      Math.floor(Math.random() * cancellationPolicies.length)
    ];
  const smokingPolicy =
    smokingPolicies[Math.floor(Math.random() * smokingPolicies.length)];

  const isPopular = Math.random() > 0.7; // 30% are popular

  return {
    id: `hotel-${city}-${index}`,
    name: hotelName,
    address,
    rating,
    accommodationType,
    amenities: hotelAmenities,
    accessibilityFeatures: hotelAccessibility,
    checkInTime,
    checkOutTime,
    roomsAvailable,
    isPetFriendly,
    currency,
    contact: {
      contactEmail,
      contactPhone,
    },
    policies: {
      cancellation: cancellationPolicy,
      smoking: smokingPolicy,
    },
    isPopular,
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

// Extract existing hotels from a file
async function extractExistingHotels(filePath) {
  try {
    const content = await readFile(filePath, "utf-8");
    const match = content.match(
      /export const \w+: Hotel\[\] = \[([\s\S]*?)\];/
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
          console.warn("Failed to parse hotel:", e);
          currentItem = "";
        }
      }
    }

    return items;
  } catch (e) {
    console.error("Error extracting hotels:", e);
    return [];
  }
}

// Generate hotels and write to file
async function generateCityFile(city) {
  const formattedName = formatKebabToCamelCase(removeAccents(city));
  const variableName = `${formattedName}Hotels`;

  // Use camelCase for folder name
  const destDir = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "destinations",
    "hotels",
    formattedName
  );
  const filePath = path.join(destDir, "hotels.ts");

  // Check if directory exists
  await ensureDirectoryExists(destDir);

  // Check if file exists
  const exists = await fileExists(filePath);

  // Handle existing file based on options
  let hotels = [];
  if (exists) {
    if (options.rewrite) {
      console.log(`Rewriting existing file: ${filePath}`);
    } else if (options.append) {
      console.log(`Appending ${options.append} hotels to: ${filePath}`);
      hotels = await extractExistingHotels(filePath);
    } else {
      console.log(
        `File already exists (use --rewrite to replace): ${filePath}`
      );
      return;
    }
  }

  // Generate hotels
  const numNewHotels = options.append || Math.floor(Math.random() * 5) + 3; // 3-8 hotels
  const newHotels = Array(numNewHotels)
    .fill(0)
    .map((_, index) => generateHotel(city, hotels.length + index + 1));

  // Combine existing and new hotels
  hotels = hotels.concat(newHotels);

  // Create file content with proper formatting
  let content = `import { Hotel } from "@/lib/interfaces/services/rentals";\n\n`;
  content += `export const ${variableName}: Hotel[] = [\n`;

  hotels.forEach((hotel, index) => {
    content += `  {\n`;
    for (const [key, value] of Object.entries(hotel)) {
      if (typeof value === "string") {
        content += `    ${key}: "${value}",\n`;
      } else if (Array.isArray(value)) {
        if (value.length === 0) {
          content += `    ${key}: [],\n`;
        } else {
          content += `    ${key}: [${value.map((item) => `"${item}"`).join(", ")}],\n`;
        }
      } else if (typeof value === "object" && value !== null) {
        content += `    ${key}: {\n`;
        for (const [nestedKey, nestedValue] of Object.entries(value)) {
          if (nestedValue !== undefined) {
            content += `      ${nestedKey}: "${nestedValue}",\n`;
          }
        }
        content += `    },\n`;
      } else if (value !== undefined) {
        content += `    ${key}: ${value},\n`;
      }
    }
    content += `  }${index < hotels.length - 1 ? "," : ""}\n`;
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
      city.toLowerCase().includes(filterLower)
    );

    if (citiesToProcess.length === 0) {
      console.log(`No cities found matching: ${options.cityFilter}`);
      return;
    }

    console.log(
      `Processing ${citiesToProcess.length} cities matching: ${options.cityFilter}`
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
  .then(() => console.log("Hotel files generated successfully!"))
  .catch((error) => console.error("Error generating hotel files:", error));

// Print usage information
console.log(`
Usage: node generate-hotels.mjs [options]

Options:
  --rewrite, -r       Rewrite existing files instead of skipping them
  --append N, -a N    Append N new hotels to existing files
  --city C, -c C      Process only cities matching the search term

Examples:
  node generate-hotels.mjs --rewrite
  node generate-hotels.mjs --append 3
  node generate-hotels.mjs --city "Tokyo"
`);
