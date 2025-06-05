/**
 * Room Options Generator Script
 * =============================
 *
 * This script generates room options for hotels in the Paragon Trails application.
 * It creates realistic room data with properties like name, description, amenities,
 * bed types, views, and pricing for each hotel in city destination folders.
 *
 * Features:
 * - Generates varied room types based on hotel rating and accommodation type
 * - Creates appropriate room descriptions with themed templates
 * - Supports country-specific room themes and descriptions
 * - Calculates realistic pricing based on hotel quality, bed type, and views
 * - Supports various filtering options to generate specific room configurations
 *
 * Usage: node scripts/generate-room-options.mjs [options]
 *
 * Options:
 *   --rewrite, -r               Rewrite existing files instead of skipping them
 *   --append, -a                Append new rooms to existing files (defaults to 3 rooms)
 *   --append-count N, -ac N     Append N new rooms to existing files
 *   --view-type V, -vt V        Generate only rooms with specified view type
 *                               (City, Ocean, Garden, Mountain, None)
 *   --bed-type B, -bt B         Generate only rooms with specified bed type
 *                               (Single, Double, Queen, King, Twin, Sofa Bed)
 *   --max-guests G, -mg G       Generate rooms with specified maximum guest count
 *   --city C, -c C              Process only cities matching the search term
 *
 * Examples:
 *   node scripts/generate-room-options.mjs --rewrite
 *   node scripts/generate-room-options.mjs --append
 *   node scripts/generate-room-options.mjs --append-count 5 --view-type "Ocean View"
 *   node scripts/generate-room-options.mjs --bed-type "King" --max-guests 3 --append
 *   node scripts/generate-room-options.mjs --city "Tokyo" --view-type "Mountain View" --append
 */

import * as fs from "fs/promises";
import * as path from "path";
import { formatTitleToCamelCase } from "./utils/format-utils.mjs";
import { cityCountryMap } from "./utils/geo-utils.mjs";
import {
  countrySpecificDescriptions,
  roomAdjectives,
  roomThemesByCountry,
} from "./utils/shared-hotel-data.mjs";

// Parse command line arguments
function parseCommandLineArgs() {
  const options = {
    rewrite: false,
    cityFilter: null,
    append: false,
    appendCount: 3, // Default number of rooms to append
    viewType: null,
    bedType: null,
    maxGuests: null,
  };

  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--rewrite" || arg === "-r") {
      options.rewrite = true;
    }

    if (arg === "--append" || arg === "-a") {
      options.append = true;
    }

    if ((arg === "--append-count" || arg === "-ac") && i + 1 < args.length) {
      const value = parseInt(args[++i]);
      if (!isNaN(value) && value > 0) {
        options.appendCount = value;
        options.append = true;
      }
    }

    if ((arg === "--view-type" || arg === "-vt") && i + 1 < args.length) {
      options.viewType = args[++i];
    }

    if ((arg === "--bed-type" || arg === "-bt") && i + 1 < args.length) {
      options.bedType = args[++i];
    }

    if ((arg === "--max-guests" || arg === "-mg") && i + 1 < args.length) {
      const value = parseInt(args[++i]);
      if (!isNaN(value) && value > 0) {
        options.maxGuests = value;
      }
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
const baseAmenities = [
  "Desk",
  "Free Wi-Fi",
  "Room Service",
  "Hair Dryer",
  "Toiletries",
  "Microwave",
  "Shower",
  "Heating",
  "Coffee Maker",
  "Slippers",
  "Bathrobe",
  "Room Service",
  "Alarm Clock",
  "Desk Lamp",
  "Daily Housekeeping",
  "Non-Smoking Room",
  "Television",
  "Air Conditioning",
];

const additionalAmenities = [
  "Mini Bar",
  "Refrigerator",
  "Ironing Facilities",
  "In-Room Safe",
  "Balcony",
  "Bathtub",
  "Seating Area",
  "Soundproofing",
  "Wake-Up Service",
  "Smoke Detector",
  "Pet Friendly",
  "Family Room",
  "Connecting Rooms",
  "Accessible Room",
  "Kitchenette",
  "Dining Table",
  "Blackout Curtains",
  "Complimentary Bottled Water",
  "Flat-Screen TV",
  "Streaming Services",
  "Bluetooth Speaker",
  "Luggage Rack",
  "Outdoor Furniture",
  "Fireplace",
  "Jacuzzi Tub",
  "Sauna",
  "Fitness Equipment",
  "Board Games",
  "Books",
];

const viewDescriptions = {
  "City View": [
    "overlooking the vibrant cityscape",
    "with stunning views of the city skyline",
    "showcasing the urban landscape",
    "offering panoramic city vistas",
    "with a window to the bustling city below",
    "where city lights twinkle at night",
    "with a front-row seat to the city's heartbeat",
    "featuring a blend of modern and historic architecture",
    "with a view of iconic landmarks",
    "where the city comes alive at dusk",
    "with a backdrop of city parks and green spaces",
    "where you can enjoy the city's energy",
    "with a view of the city's cultural landmarks",
    "where the city skyline meets the horizon",
    "with a view of the city's waterfront",
    "where you can watch the city wake up",
  ],
  "Ocean View": [
    "overlooking the sparkling ocean waves",
    "with breathtaking sea views",
    "featuring uninterrupted ocean vistas",
    "where you can watch the waves roll in",
    "with a private balcony overlooking the sea",
    "where the horizon meets the ocean",
    "with a view of the endless blue",
    "where you can hear the soothing sound of the sea",
    "with a panoramic view of the coastline",
    "where the ocean meets the sky",
    "with a view of the sandy beaches",
    "where you can enjoy stunning sunsets over the water",
    "with a view of the ocean's horizon",
    "where you can feel the ocean breeze",
    "with a view of the tranquil sea",
    "where you can relax to the sound of the waves",
    "where you can enjoy the ocean's beauty",
    "with a view of the ocean's changing tides",
    "with the sound of the ocean as your backdrop",
  ],
  "Garden View": [
    "overlooking lush garden landscapes",
    "with serene garden views",
    "surrounded by vibrant flora",
    "featuring a peaceful garden setting",
    "where you can enjoy the tranquility of nature",
    "with a view of blooming flowers and greenery",
    "where you can relax in a natural oasis",
    "with a view of manicured lawns and gardens",
    "where you can enjoy the sights and sounds of nature",
    "with a view of colorful flower beds",
    "where you can unwind in a garden paradise",
    "with a view of tranquil water features",
    "where you can enjoy the beauty of nature",
    "with a view of shaded garden paths",
    "where you can take in the fresh air",
    "with a view of the garden's seasonal changes",
    "where you can enjoy the serenity of a garden retreat",
    "with a view of the garden's natural beauty",
    "where you can escape to a green sanctuary",
    "with a view of the garden's peaceful ambiance",
    "where you can find solace in nature's embrace",
    "with a view of the garden's vibrant colors",
    "where you can enjoy the garden's seasonal blooms",
    "with a view of the garden's tranquil pathways",
    "where you can relax in a garden haven",
    "with a view of the garden's lush greenery",
    "where you can enjoy the garden's peaceful atmosphere",
    "offering a peaceful garden outlook",
    "where nature is just outside your window",
  ],
  "Mountain View": [
    "with majestic mountain vistas",
    "overlooking spectacular mountain ranges",
    "featuring awe-inspiring mountain scenery",
    "where you can gaze at the towering peaks",
    "with a view of the rugged mountain landscape",
    "where the mountains touch the sky",
    "with panoramic views of the surrounding mountains",
    "where you can enjoy the tranquility of the mountains",
    "with a view of snow-capped peaks",
    "where you can experience the beauty of nature",
    "with a view of the mountains' changing seasons",
    "where you can take in the fresh mountain air",
    "with a view of the mountains' natural beauty",
    "where you can enjoy the serenity of mountain life",
    "with a view of the mountains' breathtaking sunsets",
    "where you can escape to the mountains",
    "with a view of the mountains' rugged terrain",
    "where you can enjoy the peace of the highlands",
    "with a view of the mountains' lush valleys",
    "where you can find inspiration in the mountains",
    "with a view of the mountains' serene beauty",
    "where you can enjoy the mountains' majestic presence",
    "with panoramic views of the mountain landscape",
    "where mountains paint the horizon",
  ],
};

const amenityHighlights = [
  "featuring premium bath amenities",
  "with high-speed internet access",
  "with plush bedding for ultimate comfort",
  "complete with a well-appointed bathroom",
  "with carefully selected furnishings",
  "offering a unique blend of style and comfort",
  "with a private balcony or terrace",
  "with a spacious seating area",
  "with a modern en-suite bathroom",
  "with a luxurious soaking tub",
  "equipped with all the modern conveniences",
  "including climate control for your comfort",
  "with blackout curtains for a perfect night's sleep",
  "featuring a curated minibar selection",
  "with a spacious work area",
];

const descriptionTemplates = [
  "A {adj1} {bedType} retreat {viewPhrase}, {countryElement}.",
  "Experience our {adj1}, {adj2} {bedType} {suffix} {viewPhrase}, {amenityHighlight}.",
  "{themePhrase} {bedType} {suffix} {viewPhrase}, {countryElement} and {amenityHighlight}.",
  "Our {adj1} {themePhrase} {suffix} offers {viewPhrase}, {adj2} comfort, and {amenityHighlight}.",
  "Unwind in this {adj1} {bedType} {suffix} {viewPhrase}, {amenityHighlight}.",
  "{themePhrase} {suffix} with {adj1} decor, {viewPhrase}, and {amenityHighlight}.",
  "This {adj1} {bedType} accommodation offers {viewPhrase}, {countryElement}.",
  "Step into a {adj1} {bedType} {suffix} that combines {themePhrase} with breathtaking {viewPhrase}, complemented by {amenityHighlight}.",
  "Relax in our {adj1} {adj2} {bedType} {suffix} featuring {viewPhrase}, along with {amenityHighlight} and {countryElement}.",
  "Discover the charm of this {themePhrase} {bedType} {suffix}, complete with {adj1} ambiance, stunning {viewPhrase}, and {amenityHighlight}.",
  "A {adj1} {bedType} {suffix} designed for {adj2} comfort, with {viewPhrase} and {amenityHighlight}, reflecting {countryElement}.",
  "Enjoy a {adj1} stay in our {themePhrase} {bedType} {suffix}, offering {viewPhrase}, {amenityHighlight}, and unique touches of {countryElement}.",
  "This {adj1} {bedType} {suffix} promises {viewPhrase}, enriched by {themePhrase} details and {amenityHighlight}.",
  "Indulge in the {adj1} atmosphere of our {bedType} {suffix}, with spectacular {viewPhrase}, {countryElement}, and {amenityHighlight}.",
  "Our {themePhrase} {bedType} {suffix} offers {adj1} luxury, panoramic {viewPhrase}, and {amenityHighlight}, inspired by {countryElement}.",
];

// Generate random room options for a hotel
function generateRoomOptions(hotel, index) {
  const roomOptions = [];
  const basePricePerNight = calculateBasePrice(hotel);

  // Extract city from hotel.id (format is hotel-{city}-{index})
  const cityMatch = hotel.id.match(/hotel-([^-]+)-/);
  const city = cityMatch ? cityMatch[1] : null;

  // Get country for this city
  const country = city ? cityCountryMap[city] || "" : "";

  // Get country-specific room themes or use default
  const roomThemes =
    roomThemesByCountry[country] || roomThemesByCountry["default"];

  // Filter bed types based on command line options
  let bedTypesToUse = bedTypes;
  if (options.bedType) {
    bedTypesToUse = bedTypes.filter(
      (type) => type.toLowerCase() === options.bedType.toLowerCase(),
    );
    if (bedTypesToUse.length === 0) bedTypesToUse = [options.bedType];
  }

  // Filter view types based on command line options
  let viewTypesToUse = viewTypes;
  if (options.viewType) {
    viewTypesToUse = viewTypes.filter(
      (type) => type.toLowerCase() === options.viewType.toLowerCase(),
    );
    if (viewTypesToUse.length === 0) viewTypesToUse = [options.viewType];
  }

  // Generate different combinations of room types
  for (const bedType of getRandomSubset(bedTypesToUse, 1, 4)) {
    for (const viewType of getRandomSubset(viewTypesToUse, 1, 2)) {
      // Skip some combinations to have a varied set of rooms
      if (!options.bedType && !options.viewType && Math.random() < 0.3)
        continue;

      // Use country-specific room theme with 70% probability
      let prefix;
      if (Math.random() < 0.7 && roomThemes.length > 0) {
        prefix = roomThemes[Math.floor(Math.random() * roomThemes.length)];
      } else {
        prefix = roomPrefixes[Math.floor(Math.random() * roomPrefixes.length)];
      }

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
        6,
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
              2,
            )
          : undefined;

      // Create a more descriptive room description using the template system
      const description = generateEnhancedDescription(
        prefix,
        bedType,
        suffix,
        viewType,
        country,
      );

      // Determine max guests based on options or calculate it
      let maxGuests = options.maxGuests
        ? parseInt(options.maxGuests)
        : calculateMaxGuests(bedType);

      roomOptions.push({
        id: `${hotel.id}-room-${index}`,
        name,
        description,
        occupancy: {
          adults: calculateAdults(bedType),
          children:
            Math.random() > 0.5 ? Math.floor(Math.random() * 3) : undefined,
          maxGuests: maxGuests,
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

// Generate enhanced room descriptions
function generateEnhancedDescription(
  prefix,
  bedType,
  suffix,
  viewType,
  country,
) {
  // Pick a random template
  const template =
    descriptionTemplates[
      Math.floor(Math.random() * descriptionTemplates.length)
    ];

  // Get random adjectives
  const adjectiveCategories = Object.keys(roomAdjectives);
  const adj1 =
    roomAdjectives[
      adjectiveCategories[
        Math.floor(Math.random() * adjectiveCategories.length)
      ]
    ][Math.floor(Math.random() * roomAdjectives.luxury.length)];
  const adj2 =
    roomAdjectives[
      adjectiveCategories[
        Math.floor(Math.random() * adjectiveCategories.length)
      ]
    ][Math.floor(Math.random() * roomAdjectives.comfort.length)];

  // Get view phrase if applicable
  let viewPhrase = "";
  if (viewType !== "None" && viewDescriptions[viewType]) {
    viewPhrase =
      viewDescriptions[viewType][
        Math.floor(Math.random() * viewDescriptions[viewType].length)
      ];
  }

  // Get country specific elements
  const countryElements =
    countrySpecificDescriptions[country] ||
    countrySpecificDescriptions["default"];
  const countryElement =
    countryElements[Math.floor(Math.random() * countryElements.length)];

  // Get amenity highlight
  const amenityHighlight =
    amenityHighlights[Math.floor(Math.random() * amenityHighlights.length)];

  // Theme phrase
  const themePhrase = `${prefix}-themed`;

  // Replace placeholders in the template
  let description = template
    .replace("{adj1}", adj1)
    .replace("{adj2}", adj2)
    .replace("{bedType}", bedType.toLowerCase())
    .replace("{suffix}", suffix.toLowerCase())
    .replace("{viewPhrase}", viewPhrase || "with a pleasant outlook")
    .replace("{countryElement}", countryElement)
    .replace("{amenityHighlight}", amenityHighlight)
    .replace("{themePhrase}", themePhrase);

  return description;
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
  "hotels",
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
          /export const \w+: Hotel\[\] = \[([\s\S]*?)\];/,
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
              `Skipping hotel at index ${i}: missing required properties`,
            );
            continue;
          }

          // Create filename from hotel name
          const kebabName = formatTitleToCamelCase(hotel.name);
          const roomsFilePath = path.join(
            cityDir,
            `${kebabName.replaceAll(".", "")}Rooms.ts`,
          );

          // Check if file exists and if we should skip it
          try {
            await fs.access(roomsFilePath);
            if (!options.rewrite && !options.append) {
              console.log(
                `Skipping existing file (use --rewrite to replace or --append to add rooms): ${roomsFilePath}`,
              );
              continue;
            }

            // If appending, read existing room options
            if (options.append) {
              const existingContent = await fs.readFile(roomsFilePath, "utf-8");
              const existingRoomOptions =
                extractRoomOptionsFromContent(existingContent);

              // Generate additional room options
              const additionalOptions = generateRoomOptions(hotel, i);

              // Only take the requested number of new rooms
              const newRoomsToAdd = additionalOptions.slice(
                0,
                options.appendCount,
              );

              // Combine existing and new room options
              const combinedOptions = [
                ...existingRoomOptions,
                ...newRoomsToAdd,
              ];

              // Create updated file content
              let content = `import { RoomOption } from "@/lib/interfaces/services/rentals";\n\n`;
              content += `// Room options for ${hotel.name}\n`;
              content += `export const ${formatTitleToCamelCase(hotel.name)}Rooms: RoomOption[] = [\n`;

              combinedOptions.forEach((room, index) => {
                content += `  {\n`;
                for (const [key, value] of Object.entries(room)) {
                  // Format properties the same way as in original function
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
                    for (const [nestedKey, nestedValue] of Object.entries(
                      value,
                    )) {
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
                content += `  }${index < combinedOptions.length - 1 ? "," : ""}\n`;
              });

              content += `];\n`;

              // Write updated content to file
              await fs.writeFile(roomsFilePath, content, "utf-8");
              console.log(
                `Appended ${newRoomsToAdd.length} new room options to ${roomsFilePath}`,
              );
              continue;
            }
          } catch (err) {
            // File doesn't exist, proceed with creation
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
            `Created room options for ${hotel.name} at ${roomsFilePath}`,
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

  // Extract ID with improved regex to handle any city name format
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
    /accommodationType:\s*"([^"]+)"/,
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
Usage: node scripts/generate-room-options.mjs [options]

Options:
  --rewrite, -r               Rewrite existing files instead of skipping them
  --append, -a                Append new rooms to existing files (defaults to 3 rooms)
  --append-count N, -ac N     Append N new rooms to existing files
  --view-type V, -vt V        Generate only rooms with specified view type
                              (City, Ocean, Garden, Mountain, None)
  --bed-type B, -bt B         Generate only rooms with specified bed type
                              (Single, Double, Queen, King, Twin, Sofa Bed)
  --max-guests G, -mg G       Generate rooms with specified maximum guest count
  --city C, -c C              Process only cities matching the search term

Examples:
  node scripts/generate-room-options.mjs --rewrite
  node scripts/generate-room-options.mjs --append
  node scripts/generate-room-options.mjs --append-count 5 --view-type "Ocean View"
  node scripts/generate-room-options.mjs --bed-type "King" --max-guests 3
  node scripts/generate-room-options.mjs --city "Tokyo" --view-type "Mountain View"
`);
