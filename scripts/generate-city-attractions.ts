import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";
import { cities } from "../src/lib/constants/info/city";
import { City } from "../src/lib/interfaces/general";
import { formatTitleToCamelCase, removeAccents } from "../src/lib/utils/format";

// Utility functions for file operations
// Rewrite Flag: Use --rewrite or -r to overwrite existing files instead of skipping them
// node generate-city-attractions.js --rewrite

// Append Flag: Use --append N or -a N to add N new attractions to existing files
// node generate-city-attractions.js --append 5

// Price Range Flag: Use --price P or -p P to generate attractions with a specific price range
// node generate-city-attractions.js --price "$$$"

// Bonus City Filter: Added a --city flag to process only specific cities
// node generate-city-attractions.js --city "Tokyo" --append 3 --price "$$$$"

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);

// Parse command line arguments
interface CommandOptions {
  rewrite: boolean;
  append: number | null;
  price: "$" | "$$" | "$$$" | "$$$$" | "free" | null;
  cityFilter: string | null;
}

function parseCommandLineArgs(): CommandOptions {
  const options: CommandOptions = {
    rewrite: false,
    append: null,
    price: null,
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

    if ((arg === "--price" || arg === "-p") && i + 1 < args.length) {
      const value = args[++i];
      if (["$", "$$", "$$$", "$$$$", "free"].includes(value)) {
        options.price = value as any;
      }
    }

    if ((arg === "--city" || arg === "-c") && i + 1 < args.length) {
      options.cityFilter = args[++i];
    }
  }

  return options;
}

const options = parseCommandLineArgs();

// Various attraction components
const attractionTypes = [
  "Museum",
  "Park",
  "Monument",
  "Cathedral",
  "Castle",
  "Palace",
  "Market",
  "Square",
  "Bridge",
  "Tower",
  "Garden",
  "Temple",
  "Gallery",
  "Zoo",
];

const possibleTags = [
  "historical",
  "cultural",
  "romantic",
  "adventure",
  "culinary",
  "art-and-music",
  "spiritual",
  "local",
  "wellness",
];

const accessibilityOptions = [
  "wheelchair accessible",
  "limited accessibility",
  "accessible restrooms",
  "elevator access",
  "accessible entrance",
];

// Generate an attraction with all required properties
function generateAttraction(cityName: string): any {
  // Generate random price range and set dependent properties
  const priceRanges = ["$", "$$", "$$$", "$$$$", "free"] as const;

  // Use specified price range if provided, otherwise random
  const priceRange =
    options.price ||
    priceRanges[Math.floor(Math.random() * priceRanges.length)];

  let priceCategory: "free" | "budget" | "moderate" | "expensive" | "luxury";
  switch (priceRange) {
    case "free":
      priceCategory = "free";
      break;
    case "$":
      priceCategory = "budget";
      break;
    case "$$":
      priceCategory = "moderate";
      break;
    case "$$$":
      priceCategory = "expensive";
      break;
    case "$$$$":
      priceCategory = "luxury";
      break;
  }

  // Set entry fee and category
  let entryFee: string;
  let entryFeeCategory: "free" | "budget" | "moderate" | "expensive" | "luxury";

  if (priceRange === "free" || Math.random() < 0.3) {
    entryFee = "Free";
    entryFeeCategory = "free";
  } else {
    const fee = Math.floor(Math.random() * 100) + 5;
    const currencySymbols = ["$", "€", "£", "¥"];
    const currencySymbol =
      currencySymbols[Math.floor(Math.random() * currencySymbols.length)];
    entryFee = `${currencySymbol}${fee}`;

    if (fee < 15) entryFeeCategory = "budget";
    else if (fee < 50) entryFeeCategory = "moderate";
    else if (fee < 100) entryFeeCategory = "expensive";
    else entryFeeCategory = "luxury";
  }

  // Generate tags
  const numTags = Math.floor(Math.random() * 3) + 1;
  const tags = Array.from(
    new Set(
      Array(numTags)
        .fill(0)
        .map(
          () => possibleTags[Math.floor(Math.random() * possibleTags.length)]
        )
    )
  );

  // Generate accessibility features
  const numFeatures = Math.floor(Math.random() * 2) + 1;
  const accessibilityFeatures = Array.from(
    new Set(
      Array(numFeatures)
        .fill(0)
        .map(
          () =>
            accessibilityOptions[
              Math.floor(Math.random() * accessibilityOptions.length)
            ]
        )
    )
  );

  // Set accessibility-dependent property
  const isWheelchairAccessible = accessibilityFeatures.some((f) =>
    f.includes("wheelchair")
  );

  // Generate random time of day
  const timesOfDay = ["all day", "daytime", "evening", "night"] as const;
  const timeOfDay = timesOfDay[Math.floor(Math.random() * timesOfDay.length)];

  // Generate attraction details
  const attractionType =
    attractionTypes[Math.floor(Math.random() * attractionTypes.length)];
  const title = `${cityName} ${attractionType}`;
  const description = `A beautiful ${attractionType.toLowerCase()} in ${cityName} offering visitors a unique cultural experience and stunning views.`;
  const location = `${
    Math.floor(Math.random() * 200) + 1
  } Main Street, ${cityName}`;
  const hours = ["9 AM - 5 PM", "10 AM - 6 PM", "Open 24 hours"][
    Math.floor(Math.random() * 3)
  ];

  // Set isFree dependent on priceRange
  const isFree = priceRange === "free";

  // Generate other flag properties
  const isHistorical = Math.random() < 0.4;
  const isRomantic = Math.random() < 0.3;
  const isLuxury = priceCategory === "luxury";
  const isOffTheBeatenPath = Math.random() < 0.2;
  const isLocalExperience = Math.random() < 0.4;
  const isPetFriendly = Math.random() < 0.5;
  const isOutdoor = Math.random() < 0.5;
  const isIndoor = !isOutdoor;

  return {
    title,
    description,
    imageUrl: `https://plus.unsplash.com/${cityName
      .toLowerCase()
      .replace(/\s+/g, "-")}-${attractionType
      .toLowerCase()
      .replace(/\s+/g, "-")}.jpg`,
    location,
    openingHours: hours,
    entryFee,
    entryFeeCategory,
    priceRange,
    priceCategory,
    timeOfDay,
    rating: parseFloat((4.2 + Math.random() * 0.8).toFixed(1)),
    tags,
    accessibilityFeatures,
    isPopular: true,

    isFree,
    isPetFriendly,
    isWheelchairAccessible,
    isHistorical,
    isRomantic,
    isOffTheBeatenPath,
    isLocalExperience,
    isLuxury,
    isOutdoor,
    isIndoor,
  };
}

// Format city name for variable and file naming
function formatCityName(city: City): {
  fileName: string;
  variableName: string;
} {
  const cityName = formatTitleToCamelCase(removeAccents(city.city));
  const region = city.region ? city.region.replace(/\s+/g, "") : "";
  const state = city.state ? removeAccents(city.state).toLowerCase() : "";
  const country = removeAccents(city.country).replace(/\s+/g, "");

  const variableName = `${cityName}${region || state}${country}`;

  return {
    fileName: cityName,
    variableName,
  };
}

// Check if directory exists, create if needed
async function ensureDirectoryExists(dirPath: string): Promise<void> {
  try {
    await access(dirPath);
  } catch {
    await mkdir(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Check if file exists
async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

// Extract existing attractions from a file
async function extractExistingAttractions(filePath: string): Promise<any[]> {
  try {
    // Read file content
    const content = await readFile(filePath, 'utf-8');
    
    // Extract the array part using a simple regex approach
    const match = content.match(/export const \w+: Attraction\[\] = \[([\s\S]*?)\];/);
    if (!match || !match[1]) return [];
    
    // Parse the array items
    const itemsText = match[1].trim();
    if (!itemsText) return [];
    
    // Split by object boundaries and parse each attraction
    const items = [];
    let bracketCount = 0;
    let currentItem = '';
    
    for (let i = 0; i < itemsText.length; i++) {
      const char = itemsText[i];
      
      if (char === '{') bracketCount++;
      if (char === '}') bracketCount--;
      
      currentItem += char;
      
      if (bracketCount === 0 && currentItem.trim()) {
        // We've found a complete object
        try {
          // Convert the text to an actual object (this is a simplified approach)
          const cleanedItem = currentItem.replace(/,\s*$/, ''); // Remove trailing comma
          
          // Use Function constructor to evaluate the object expression safely
          // This is a simplified approach and may not handle all edge cases
          const obj = new Function(`return ${cleanedItem}`)();
          items.push(obj);
          currentItem = '';
        } catch (e) {
          console.warn('Failed to parse attraction:', e);
          currentItem = '';
        }
      }
    }
    
    return items;
  } catch (e) {
    console.error('Error extracting attractions:', e);
    return [];
  }
}

// Generate attractions and write to file
async function generateCityFile(city: City): Promise<void> {
  const { fileName, variableName } = formatCityName(city);

  const destDir = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "destinations",
    "city"
  );
  const filePath = path.join(destDir, `${fileName}.ts`);

  // Check if directory exists
  await ensureDirectoryExists(destDir);

  // Check if file exists
  const exists = await fileExists(filePath);

  // Handle existing file based on options
  let attractions: any[] = [];
  if (exists) {
    if (options.rewrite) {
      console.log(`Rewriting existing file: ${filePath}`);
    } else if (options.append) {
      console.log(`Appending ${options.append} attractions to: ${filePath}`);
      attractions = await extractExistingAttractions(filePath);
    } else {
      console.log(
        `File already exists (use --rewrite to replace): ${filePath}`
      );
      return;
    }
  }

  // Generate attractions
  const numNewAttractions =
    options.append || Math.floor(Math.random() * 10) + 9;
  const newAttractions = Array(numNewAttractions)
    .fill(0)
    .map(() => generateAttraction(city.city));

  // Combine existing and new attractions
  attractions = attractions.concat(newAttractions);

  // Create file content with proper formatting
  let content = `import { Attraction } from "@/lib/interfaces/services/attractions";\n\n`;
  content += `export const ${variableName}: Attraction[] = [\n`;

  attractions.forEach((attraction, index) => {
    content += `  {\n`;
    for (const [key, value] of Object.entries(attraction)) {
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
    content += `  }${index < attractions.length - 1 ? "," : ""}\n`;
  });

  content += `];\n`;

  // Write file
  await writeFile(filePath, content);
  console.log(
    `${exists && !options.rewrite ? "Updated" : "Created"} file: ${filePath}`
  );
}

// Main function to process all cities
async function generateAllCityFiles(): Promise<void> {
  let citiesToProcess = cities;

  // Filter by city name if specified
  if (options.cityFilter) {
    const filterLower = options.cityFilter.toLowerCase();
    citiesToProcess = cities.filter((city) =>
      city.city.toLowerCase().includes(filterLower)
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
      console.error(`Error generating file for ${city.city}:`, error);
    }
  }
}

// Execute the script
generateAllCityFiles()
  .then(() => console.log("City attraction files generated successfully!"))
  .catch((error) =>
    console.error("Error generating city attraction files:", error)
  );

// Print usage information
console.log(`
Usage: node generate-city-attractions.js [options]

Options:
  --rewrite, -r       Rewrite existing files instead of skipping them
  --append N, -a N    Append N new attractions to existing files
  --price P, -p P     Generate attractions with specified price range (options: $, $$, $$$, $$$$, free)
  --city C, -c C      Process only cities matching the search term

Examples:
  node generate-city-attractions.js --rewrite
  node generate-city-attractions.js --append 5
  node generate-city-attractions.js --price "$$$"
  node generate-city-attractions.js --city "Tokyo" --append 3
`);
