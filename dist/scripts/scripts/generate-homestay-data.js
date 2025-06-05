"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const util_1 = require("util");
const city_1 = require("../src/lib/constants/info/city");
const languages_1 = require("../src/lib/constants/info/languages");
const format_1 = require("../src/lib/utils/format");
// To compile:
// npx tsc -p scripts/tsconfig.json
// Then run with:
// node dist/scripts/generate-homestay-data.js
// # Generate homestay data for all cities
// node generate-homestay-data.ts
// # Overwrite existing files
// node generate-homestay-data.ts --rewrite
// # Generate data only for specific cities
// node generate-homestay-data.ts --city "Tokyo"
const writeFile = (0, util_1.promisify)(fs.writeFile);
const mkdir = (0, util_1.promisify)(fs.mkdir);
const access = (0, util_1.promisify)(fs.access);
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
const firstNames = [
    "Liam",
    "Olivia",
    "Noah",
    "Emma",
    "Oliver",
    "Ava",
    "Elijah",
    "Charlotte",
    "William",
    "Sophia",
    "James",
    "Amelia",
    "Benjamin",
    "Isabella",
    "Lucas",
    "Mia",
    "Henry",
    "Evelyn",
    "Alexander",
    "Harper",
    "Sofia",
    "Muhammad",
    "Aisha",
    "Wei",
    "Yuki",
    "Juan",
    "Maria",
    "Ahmed",
    "Fatima",
    "Carlos",
    "Priya",
    "Ibrahim",
    "Elena",
    "Hiroshi",
    "Mei",
    "Diego",
    "Ana",
    "Boris",
    "Layla",
    "Ravi",
];
const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Gonzalez",
    "Wilson",
    "Anderson",
    "Thomas",
    "Taylor",
    "Moore",
    "Jackson",
    "Martin",
    "Wang",
    "Kim",
    "Singh",
    "Patel",
    "Nakamura",
    "Silva",
    "Müller",
    "Ivanov",
    "Ali",
    "Nguyen",
    "Chen",
    "Kowalski",
    "Rossi",
    "Khan",
    "Suzuki",
    "da Costa",
    "Morales",
    "Dubois",
    "Jansen",
    "Ibrahim",
];
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
    const formattedName = (0, format_1.formatTitleToCamelCase)((0, format_1.removeAccents)(cityName));
    return {
        fileName: formattedName,
        variableName: formattedName + "Homestays",
    };
}
// Check if directory exists, create if needed
async function ensureDirectoryExists(dirPath) {
    try {
        await access(dirPath);
    }
    catch {
        await mkdir(dirPath, { recursive: true });
        console.log(`Created directory: ${dirPath}`);
    }
}
// Check if file exists
async function fileExists(filePath) {
    try {
        await access(filePath, fs.constants.F_OK);
        return true;
    }
    catch {
        return false;
    }
}
// Generate random languages based on city's region/country
function generateLanguages(city) {
    const languagesList = [];
    // Always include English as a common language for tourists
    languagesList.push("en");
    // Add language based on country
    let localLanguage;
    switch (city.country.toLowerCase()) {
        case "japan":
            localLanguage = "ja";
            break;
        case "france":
            localLanguage = "fr";
            break;
        case "spain":
            localLanguage = "es";
            break;
        case "italy":
            localLanguage = "it";
            break;
        case "germany":
            localLanguage = "de";
            break;
        case "china":
            localLanguage = "zh";
            break;
        case "netherlands":
            localLanguage = "nl";
            break;
        case "russia":
            localLanguage = "ru";
            break;
        case "thailand":
            localLanguage = "th";
            break;
        case "vietnam":
            localLanguage = "vi";
            break;
        case "greece":
            localLanguage = "el";
            break;
        case "portugal":
            localLanguage = "pt";
            break;
        case "morocco":
            localLanguage = "ar";
            break;
        case "turkey":
            localLanguage = "tr";
            break;
        case "south korea":
            localLanguage = "ko";
            break;
        case "mexico":
            localLanguage = "es";
            break;
        default:
            // Default to a random language if country not recognized
            const randomLang = languages_1.languages[Math.floor(Math.random() * languages_1.languages.length)];
            localLanguage = randomLang.iso639_1;
    }
    if (localLanguage && !languagesList.includes(localLanguage)) {
        languagesList.push(localLanguage);
    }
    // Randomly add 0-2 more languages
    const additionalLanguagesCount = Math.floor(Math.random() * 3);
    for (let i = 0; i < additionalLanguagesCount; i++) {
        const randomLang = languages_1.languages[Math.floor(Math.random() * languages_1.languages.length)];
        if (!languagesList.includes(randomLang.iso639_1)) {
            languagesList.push(randomLang.iso639_1);
        }
    }
    return languagesList;
}
// Generate a host for a specific city
function generateHost(city) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const name = `${firstName} ${lastName}`;
    const background = hostBackgrounds[Math.floor(Math.random() * hostBackgrounds.length)];
    const maxGuests = Math.floor(Math.random() * 6) + 1;
    const hostLangs = generateLanguages(city);
    // Generate a random time for curfew
    const curfewHour = Math.floor(Math.random() * 7) + 21; // 9 PM to 3 AM
    const curfew = curfewHour <= 24 ? `${curfewHour}:00 PM` : `${curfewHour - 12}:00 AM`;
    // Select hosting style
    const hostingStyle = hostingStyles[Math.floor(Math.random() * hostingStyles.length)];
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
        `Staying with me means experiencing ${city.city} like a local. I love sharing the hidden gems of our beautiful city with my guests.`,
        `My home is your home in ${city.city}. I look forward to making your stay memorable and authentic.`,
        `I've lived in ${city.city} all my life and know all the best spots. Can't wait to share my city with you!`,
        `Welcome to my ${city.city} home! I believe in creating a warm, welcoming environment for all my guests.`,
        `Life in ${city.city} has its own rhythm. Stay with me to experience the true pulse of this amazing place.`,
    ];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return {
        name,
        background,
        maxGuests,
        languages: hostLangs,
        curfew,
        isPopular: Math.random() > 0.7, // 30% chance of being popular
        guestPolicy: selectedPolicies,
        hostingStyle,
        houseRules: selectedRules,
        location: {
            city: city.city,
            region: city.region,
            country: city.country,
            // Random coordinates near the city center (simplified)
            coordinates: {
                lat: Math.random() * 0.2 - 0.1 + 40, // Just a placeholder lat
                lng: Math.random() * 0.2 - 0.1 + 0, // Just a placeholder lng
            },
        },
        availability: {
            checkInTime,
            checkOutTime,
            calendarLink: Math.random() > 0.5
                ? "https://calendar.example.com/availability"
                : undefined,
        },
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
        phoneNumber: Math.random() > 0.3
            ? `+${Math.floor(Math.random() * 100) + 1}-${Math.floor(Math.random() * 1000) + 100}-${Math.floor(Math.random() * 10000) + 1000}`
            : undefined,
        isVerified: Math.random() > 0.1, // 90% chance of being verified
        rating: parseFloat(rating),
        reviewCount,
        quote,
        stayType,
    };
}
// Generate homestay data for a specific city
async function generateCityHomestays(city) {
    const { fileName, variableName } = formatCityName(city.city);
    const destDir = path.join(process.cwd(), "src", "lib", "constants", "destinations", "homestay");
    const filePath = path.join(destDir, `${fileName}.ts`);
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
    let content = `import { Homestay } from "@/lib/interfaces/people/homestay";\n\n`;
    content += `export const ${variableName}: Homestay[] = [\n`;
    // Each homestay with its hosts array
    homestays.forEach((homestay, homestayIndex) => {
        content += `  {\n`;
        content += `    hosts: [\n`;
        homestay.hosts.forEach((host, hostIndex) => {
            content += `      {\n`;
            // Add all host properties
            for (const [key, value] of Object.entries(host)) {
                if (key === "location") {
                    const location = value;
                    content += `        ${key}: {\n`;
                    content += `          city: "${location.city}",\n`;
                    if (location.region)
                        content += `          region: "${location.region}",\n`;
                    content += `          country: "${location.country}",\n`;
                    if (location.coordinates) {
                        content += `          coordinates: { lat: ${location.coordinates.lat}, lng: ${location.coordinates.lng} },\n`;
                    }
                    content += `        },\n`;
                }
                else if (key === "availability") {
                    const availability = value;
                    content += `        ${key}: {\n`;
                    content += `          checkInTime: "${availability.checkInTime}",\n`;
                    content += `          checkOutTime: "${availability.checkOutTime}",\n`;
                    if (availability.calendarLink)
                        content += `          calendarLink: "${availability.calendarLink}",\n`;
                    content += `        },\n`;
                }
                else if (typeof value === "string") {
                    content += `        ${key}: "${value}",\n`;
                }
                else if (Array.isArray(value)) {
                    content += `        ${key}: [${value
                        .map((item) => `"${item}"`)
                        .join(", ")}],\n`;
                }
                else if (typeof value === "number") {
                    content += `        ${key}: ${value},\n`;
                }
                else if (typeof value === "boolean") {
                    content += `        ${key}: ${value},\n`;
                }
            }
            content += `      }${hostIndex < homestay.hosts.length - 1 ? "," : ""}\n`;
        });
        content += `    ]\n`;
        content += `  }${homestayIndex < homestays.length - 1 ? "," : ""}\n`;
    });
    content += `];\n`;
    // Write file
    await writeFile(filePath, content);
    console.log(`Created file: ${filePath}`);
}
// Main function to process all cities
async function generateAllCityHomestays() {
    let citiesToProcess = city_1.cities;
    // Filter by city name if specified
    if (options.cityFilter) {
        const filterLower = options.cityFilter.toLowerCase();
        citiesToProcess = city_1.cities.filter((city) => city.city.toLowerCase().includes(filterLower));
        if (citiesToProcess.length === 0) {
            console.log(`No cities found matching: ${options.cityFilter}`);
            return;
        }
        console.log(`Processing ${citiesToProcess.length} cities matching: ${options.cityFilter}`);
    }
    for (const city of citiesToProcess) {
        try {
            await generateCityHomestays(city);
        }
        catch (error) {
            console.error(`Error generating homestay data for ${city.city}:`, error);
        }
    }
}
// Execute the script
generateAllCityHomestays()
    .then(() => console.log("Homestay data files generated successfully!"))
    .catch((error) => console.error("Error generating homestay data files:", error));
// Print usage information
console.log(`
Usage: node generate-homestay-data.js [options]

Options:
  --rewrite, -r       Rewrite existing files instead of skipping them
  --city C, -c C      Process only cities matching the search term

Examples:
  node generate-homestay-data.js --rewrite
  node generate-homestay-data.js --city "Tokyo"
`);
