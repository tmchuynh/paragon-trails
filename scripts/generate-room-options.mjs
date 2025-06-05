import * as fs from "fs/promises";
import * as path from "path";
import { formatTitleToCamelCase } from "./utils/format-utils.mjs";

/**
 * Room Options Generator Script
 *
 * This script generates room options for each hotel in the destinations/hotels directory.
 * It creates a separate file for each hotel using the hotel name in kebab-case.
 *
 * Basic usage:
 *   node scripts/generate-room-options.mjs
 *
 * Options:
 *   --rewrite, -r       Rewrite existing room files instead of skipping them
 *                       Example: node scripts/generate-room-options.mjs --rewrite
 *
 *   --city C, -c C      Process only cities matching the search term
 *                       Example: node scripts/generate-room-options.mjs --city "Tokyo"
 *
 * Combined options:
 *   node scripts/generate-room-options.mjs --city "Tokyo" --rewrite
 */

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

// Room data components
const bedTypes = ["Single", "Double", "Queen", "King", "Twin", "Sofa Bed"];
const viewTypes = [
  "City View",
  "Ocean View",
  "Garden View",
  "Mountain View",
  "None",
];
const roomPrefixes = [
  "Standard",
  "Deluxe",
  "Premium",
  "Executive",
  "Luxury",
  "Superior",
  "Classic",
  "Signature",
];
const roomSuffixes = [
  "Suite",
  "Room",
  "Studio",
  "Apartment",
  "Loft",
  "Penthouse",
  "Villa",
];

// Room amenities
const baseAmenities = ["Free Wi-Fi", "Room Service"];
const additionalAmenities = [
  "Air Conditioning",
  "Television",
  "Mini Bar",
  "Coffee Maker",
  "Microwave",
  "Refrigerator",
  "Hair Dryer",
  "Ironing Facilities",
  "In-Room Safe",
  "Balcony",
  "Bathtub",
  "Shower",
  "Toiletries",
  "Desk",
  "Seating Area",
  "Soundproofing",
  "Daily Housekeeping",
  "Room Service",
  "Wake-Up Service",
  "Smoke Detector",
  "Heating",
  "Non-Smoking Room",
  "Pet Friendly",
  "Family Room",
  "Connecting Rooms",
  "Accessible Room",
  "Kitchenette",
  "Dining Table",
  "Blackout Curtains",
  "Complimentary Bottled Water",
  "Bathrobe",
  "Slippers",
  "Flat-Screen TV",
  "Streaming Services",
  "Bluetooth Speaker",
  "Desk Lamp",
  "Alarm Clock",
  "Luggage Rack",
  "Outdoor Furniture",
  "Fireplace",
  "Jacuzzi Tub",
  "Sauna",
  "Fitness Equipment",
  "Board Games",
  "Books",
];

// Generate random room options for a hotel
function generateRoomOptions(hotel, index) {
  const roomOptions = [];
  const basePricePerNight = calculateBasePrice(hotel);

  // Generate different combinations of room types
  for (const bedType of getRandomSubset(bedTypes, 1, 4)) {
    for (const viewType of getRandomSubset(viewTypes, 1, 2)) {
      // Skip some combinations to have a varied set of rooms
      if (Math.random() < 0.3) continue;

      const prefix =
        roomPrefixes[Math.floor(Math.random() * roomPrefixes.length)];
      const suffix =
        roomSuffixes[Math.floor(Math.random() * roomSuffixes.length)];
      const name = `${prefix} ${bedType} ${suffix}`;

      const price = calculateRoomPrice(basePricePerNight, bedType, viewType);

      // Generate room amenities
      const amenities = [...baseAmenities];
      // Add 3-6 more amenities
      const additionalRoomAmenities = getRandomSubset(
        additionalAmenities,
        3,
        6
      );
      amenities.push(...additionalRoomAmenities);

      // Determine if this room should have accessibility features (20% chance)
      const accessibilityFeatures =
        Math.random() < 0.2
          ? getRandomSubset(
              [
                "Wheelchair Accessible",
                "Elevator",
                "Accessible Bathroom",
                "Visual Aids",
                "Hearing Support",
              ],
              1,
              2
            )
          : undefined;

      roomOptions.push({
        id: `${hotel.id}-room-${index}`,
        name,
        description: `Comfortable ${viewType.toLowerCase()} ${bedType.toLowerCase()} accommodation with modern amenities.`,
        occupancy: {
          adults: calculateAdults(bedType),
          children:
            Math.random() > 0.5 ? Math.floor(Math.random() * 3) : undefined,
          maxGuests: calculateMaxGuests(bedType),
        },
        bedType,
        view: viewType !== "None" ? viewType : undefined,
        amenities,
        accessibilityFeatures,
        pricePerNight: price,
        currency: hotel.currency,
        refundable: Math.random() > 0.3, // 70% are refundable
        breakfastIncluded: Math.random() > 0.5, // 50% include breakfast
        availableCount: Math.floor(Math.random() * 10) + 1, // 1-10 rooms available
      });
    }
  }

  return roomOptions;
}

// Calculate base price based on hotel rating, accommodation type, and location
function calculateBasePrice(hotel) {
  // Base price by hotel rating
  let basePrice;
  switch (hotel.rating) {
    case 5:
      basePrice = 300;
      break;
    case 4:
      basePrice = 200;
      break;
    default:
      basePrice = 100;
  }

  // Adjust for accommodation type
  const accommodationMultiplier = {
    Resort: 1.4,
    "Boutique Hotel": 1.3,
    Hotel: 1.0,
    "Bed and Breakfast": 0.9,
    Guesthouse: 0.8,
    Hostel: 0.7,
    "Eco-Lodge": 0.95,
  };

  basePrice *= accommodationMultiplier[hotel.accommodationType] || 1;

  // Adjust for popular status
  if (hotel.isPopular) {
    basePrice *= 1.2;
  }

  // Return price in local currency
  return basePrice;
}

// Calculate room price based on bed type and view
function calculateRoomPrice(basePrice, bedType, viewType) {
  const bedMultiplier = {
    Single: 0.8,
    Twin: 0.9,
    Double: 1.0,
    Queen: 1.2,
    King: 1.4,
    "Sofa Bed": 0.9,
  };

  const viewMultiplier = {
    "City View": 1.1,
    "Ocean View": 1.3,
    "Garden View": 1.15,
    "Mountain View": 1.25,
    None: 1.0,
  };

  let price =
    basePrice * (bedMultiplier[bedType] || 1) * (viewMultiplier[viewType] || 1);

  // Add some random variation (+/- 10%)
  price *= 0.9 + Math.random() * 0.2;

  // Round to nearest integer
  return Math.round(price);
}

function calculateAdults(bedType) {
  switch (bedType) {
    case "Single":
      return 1;
    case "Sofa Bed":
      return 1;
    default:
      return 2;
  }
}

function calculateMaxGuests(bedType) {
  switch (bedType) {
    case "Single":
      return 1;
    case "Twin":
      return 2;
    case "Double":
      return 2;
    case "Queen":
      return 2;
    case "King":
      return 3;
    case "Sofa Bed":
      return 2;
    default:
      return 2;
  }
}

// Get random subset of array elements
function getRandomSubset(array, minItems, maxItems) {
  const numItems =
    Math.floor(Math.random() * (maxItems - minItems + 1)) + minItems;
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
}

// Path to the hotels directory
const hotelsDir = path.join(
  process.cwd(),
  "src",
  "lib",
  "constants",
  "destinations",
  "hotels"
);

async function generateRoomOptionsForHotels() {
  try {
    // Get all city directories
    const cities = await fs.readdir(hotelsDir);

    // Filter cities if needed
    let citiesToProcess = cities;
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

    // Process each city
    for (const city of citiesToProcess) {
      // Get the path to the hotels.ts file
      const cityDir = path.join(hotelsDir, city);
      const hotelFilePath = path.join(cityDir, "hotels.ts");

      try {
        // Check if the hotels.ts file exists
        await fs.access(hotelFilePath);

        // Read and parse the hotels.ts file
        const fileContent = await fs.readFile(hotelFilePath, "utf-8");

        // Extract the hotel array content
        const hotelArrayMatch = fileContent.match(
          /export const \w+: Hotel\[\] = \[([\s\S]*?)\];/
        );
        if (!hotelArrayMatch || !hotelArrayMatch[1]) {
          console.warn(`Could not find hotel array in ${hotelFilePath}`);
          continue;
        }

        // Parse the hotel objects from the array
        const hotelObjects = extractHotelsFromContent(hotelArrayMatch[1]);

        if (hotelObjects.length === 0) {
          console.warn(`No hotels found in ${hotelFilePath}`);
          continue;
        }

        console.log(`Found ${hotelObjects.length} hotels in ${city}`);

        // Generate room options for each hotel
        for (let i = 0; i < hotelObjects.length; i++) {
          const hotel = hotelObjects[i];

          // Skip if hotel doesn't have required properties
          if (!hotel || !hotel.name) {
            console.warn(
              `Skipping hotel at index ${i}: missing required properties`
            );
            continue;
          }

          // Create filename from hotel name
          const kebabName = formatTitleToCamelCase(hotel.name);
          const roomsFilePath = path.join(cityDir, `${kebabName}-rooms.ts`);

          // Check if file exists and if we should skip it
          try {
            await fs.access(roomsFilePath);
            if (!options.rewrite) {
              console.log(
                `Skipping existing file (use --rewrite to replace): ${roomsFilePath}`
              );
              continue;
            }
          } catch (err) {
            // File doesn't exist, proceed
          }

          // Generate room options
          const roomOptions = generateRoomOptions(hotel, i);

          // Create file content
          let content = `import { RoomOption } from "@/lib/interfaces/services/rentals";\n\n`;
          content += `// Room options for ${hotel.name}\n`;
          content += `export const ${formatTitleToCamelCase(hotel.name)}Rooms: RoomOption[] = [\n`;

          roomOptions.forEach((room, index) => {
            content += `  {\n`;
            for (const [key, value] of Object.entries(room)) {
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
                    if (typeof nestedValue === "string") {
                      content += `      ${nestedKey}: "${nestedValue}",\n`;
                    } else {
                      content += `      ${nestedKey}: ${nestedValue},\n`;
                    }
                  }
                }
                content += `    },\n`;
              } else if (value !== undefined) {
                content += `    ${key}: ${value},\n`;
              }
            }
            content += `  }${index < roomOptions.length - 1 ? "," : ""}\n`;
          });

          content += `];\n`;

          // Write to file
          await fs.writeFile(roomsFilePath, content, "utf-8");
          console.log(
            `Created room options for ${hotel.name} at ${roomsFilePath}`
          );
        }
      } catch (error) {
        console.error(`Error processing ${city}:`, error);
      }
    }
  } catch (error) {
    console.error("Error reading hotels directory:", error);
  }
}

// Extract hotel objects from the content string
function extractHotelsFromContent(content) {
  const hotels = [];
  let bracketCount = 0;
  let currentItem = "";

  for (let i = 0; i < content.length; i++) {
    const char = content[i];

    if (char === "{") bracketCount++;
    if (char === "}") bracketCount--;

    currentItem += char;

    if (bracketCount === 0 && currentItem.trim()) {
      try {
        // Parse the hotel object using regex instead of eval/Function
        const hotel = parseHotelObject(currentItem);
        if (hotel) {
          hotels.push(hotel);
        }
        currentItem = "";
      } catch (e) {
        console.warn("Failed to parse hotel:", e);
        currentItem = "";
      }
    }
  }

  return hotels;
}

// Parse a hotel object string using regex for each property
function parseHotelObject(objString) {
  // Make sure it's a valid object
  if (!objString.trim().startsWith("{") || !objString.trim().endsWith("}")) {
    return null;
  }

  const hotel = {
    amenities: [],
    contact: {},
    policies: {},
  };

  // Extract ID
  const idMatch = objString.match(/id:\s*"([^"]+)"/);
  if (idMatch) hotel.id = idMatch[1];

  // Extract name
  const nameMatch = objString.match(/name:\s*"([^"]+)"/);
  if (nameMatch) hotel.name = nameMatch[1];

  // Extract address
  const addressMatch = objString.match(/address:\s*"([^"]+)"/);
  if (addressMatch) hotel.address = addressMatch[1];

  // Extract rating
  const ratingMatch = objString.match(/rating:\s*(\d+)/);
  if (ratingMatch) hotel.rating = parseInt(ratingMatch[1]);

  // Extract accommodationType
  const accommodationTypeMatch = objString.match(
    /accommodationType:\s*"([^"]+)"/
  );
  if (accommodationTypeMatch)
    hotel.accommodationType = accommodationTypeMatch[1];

  // Extract currency
  const currencyMatch = objString.match(/currency:\s*"([^"]+)"/);
  if (currencyMatch) hotel.currency = currencyMatch[1];

  // Extract isPopular
  const isPopularMatch = objString.match(/isPopular:\s*(true|false)/);
  if (isPopularMatch) hotel.isPopular = isPopularMatch[1] === "true";

  // Return the hotel if we got at least name and currency
  if (hotel.name && hotel.currency) {
    return hotel;
  }

  return null;
}

// Execute the script
generateRoomOptionsForHotels()
  .then(() => console.log("Room options generated successfully!"))
  .catch((error) => console.error("Error generating room options:", error));

// Print usage information
console.log(`
Usage: node generate-room-options.mjs [options]

Options:
  --rewrite, -r       Rewrite existing files instead of skipping them
  --city C, -c C      Process only cities matching the search term

Examples:
  node generate-room-options.mjs --rewrite
  node generate-room-options.mjs --city "Tokyo"
`);
