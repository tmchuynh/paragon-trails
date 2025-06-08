/**
 * Guide Reviews Generator Script
 * ==============================
 *
 * This script generates realistic reviews for tour guides in each city.
 * It creates 3-4 personalized reviews per guide with randomized content, ratings, and dates.
 *
 * Features:
 * - Processes all tour guides from existing guide data files
 * - Generates 3-4 unique reviews per guide with realistic content
 * - Creates files in src/lib/constants/testimonials/guides/ directory
 * - Uses city name in camel case for file names (e.g., "newYork.js")
 * - Exports variable as "{cityName}GuideReviews"
 * - Includes realistic quotes mentioning guide specialties
 * - Follows the Testimonial interface structure
 *
 * Output Structure:
 * - Review ID format: {guideId}-review-{index}
 * - Review content mentions guide's name and specialty
 * - Includes random author name, city, rating (3-5), and date
 *
 * Usage: node scripts/generateGuideReviews.mjs
 *
 * Dependencies:
 * - Tour guide data files in src/lib/constants/staff/guides/
 * - utils/name-utils.mjs for random name generation
 * - utils/file-utils.mjs for city file list
 */

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { getRandomName } from "./utils/name-utils.mjs";
import { getCityFiles } from "./utils/file-utils.mjs";
import { cityCountryMap, cityToRegionMap } from "./utils/geo-utils.mjs";
import {
  formatKebabToCamelCase,
  formatTitleToCamelCase,
  formatCamelCaseToTitle,
  normalizeString,
} from "./utils/format-utils.mjs";

// Get directory name using ES module approach
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const positiveAdjectives = [
  "amazing",
  "outstanding",
  "exceptional",
  "wonderful",
  "fantastic",
  "excellent",
  "knowledgeable",
  "charming",
  "engaging",
  "insightful",
  "captivating",
  "incredible",
  "remarkable",
  "superb",
  "brilliant",
  "inspiring",
  "passionate",
  "professional",
  "friendly",
  "attentive",
  "helpful",
  "informative",
  "engaging",
  "charismatic",
  "insightful",
  "enthusiastic",
  "welcoming",
  "patient",
  "reliable",
  "accommodating",
  "approachable",
  "thoughtful",
  "motivating",
  "skilled",
  "resourceful",
  "trustworthy",
  "detail-oriented",
  "inspiring",
  "dedicated",
  "personable",
  "cheerful",
  "generous",
  "genuine",
  "thorough",
  "flexible",
];

const reviewTemplates = [
  "{name} was an {adj} guide who truly brought the city to life. {pronoun.possessive} knowledge of {specialty} was impressive.",
  "Our experience with {name} was {adj}. {pronoun.subject} showed us hidden gems we would have never found on our own.",
  "I highly recommend {name} for anyone interested in {specialty}. {pronoun} made our tour memorable.",
  "We had a {adj} time with {name}. {pronoun} passion for {specialty} was evident throughout the tour.",
  "{name}'s tour was the highlight of our trip. {pronoun} {adj} approach to sharing the history made everything interesting.",
  "{name} is simply {adj}. The tour was well-paced and {pronoun} attention to detail was remarkable.",
  "Touring with {name} was a delight. {pronoun} {adj} personality and deep knowledge made the experience unforgettable.",
  "What an {adj} experience with {name}! {pronoun} expertise in {specialty} added so much value to our visit.",
  "If you’re looking for a {adj} experience in {specialty}, {name} is the one to book. {pronoun} professionalism stood out.",
  "We felt completely at ease with {name}. {pronoun} {adj} style made even complex topics accessible and fun.",
  "I’ve taken many tours, but {name}'s was by far the most {adj}. {pronoun} storytelling ability was incredible.",
  "{name} went above and beyond. {pronoun} {adj} energy and personal touch made the day extra special.",
  "Every moment with {name} felt intentional. {pronoun} {adj} guidance made this one of the best parts of our trip.",
  "From start to finish, {name} delivered a {adj} experience. {pronoun} expertise and care were unmatched.",
  "{name} tailored the tour perfectly to our interests. {pronoun} {adj} nature made everyone feel welcome.",
  "The way {name} brought {specialty} to life was truly {adj}. You could tell {pronoun} loves what {pronoun} does.",
  "I wasn’t expecting to learn so much and enjoy it this much. {name} was {adj} and incredibly knowledgeable.",
  "{name} created an environment that was both informative and relaxing. {pronoun} {adj} approach kept everyone engaged.",
  "Even our kids loved the tour—{name} was so {adj} and made sure everyone was involved.",
  "We were lucky to have {name} as our guide. {pronoun} {adj} insights made a big difference in how we experienced {specialty}.",
  "{name} didn’t just give us a tour—{pronoun} gave us a connection to the city through {adj} storytelling.",
  "I’ve traveled a lot, but this was one of the most {adj} tours I’ve ever taken. {name} was fantastic from start to finish.",
  "{name} brought warmth and {adj} energy to the day. {pronoun} made us feel like locals instead of tourists.",
  "A truly {adj} experience thanks to {name}. {pronoun} balance of facts and fun was exactly what we were hoping for.",
  "You could tell that {name} genuinely cares about what {pronoun} does. {pronoun} {adj} nature was a highlight of our trip.",
  "{name} has a gift for storytelling. The entire group was engaged, laughing, and learning—it was such a {adj} time.",
  "We left the tour inspired. {name}'s {adj} way of sharing knowledge made a lasting impression on us.",
  "It’s rare to find a guide as {adj} as {name}. {pronoun} ability to connect with people from all walks of life was exceptional.",
  "I booked the tour last minute, but I’m so glad I did. {name}'s {adj} leadership and local tips were invaluable.",
  "{name} delivered a perfect mix of history, humor, and heart. {pronoun} {adj} delivery kept us engaged throughout.",
  "You’ll leave the tour smarter and smiling if {name} is your guide. {pronoun} {adj} energy is contagious.",
  "We learned so much and had so much fun, all thanks to {name}'s {adj} approach to sharing {specialty}.",
  "{name} made even the smallest detail feel important. {pronoun} {adj} touch made this tour stand out from the rest.",
];

const specialties = [
  "architecture",
  "local cuisine",
  "hidden history",
  "street art",
  "cultural landmarks",
  "urban legends",
  "market scenes",
  "historical neighborhoods",
  "design",
  "heritage sites",
  "modern architecture",
  "religious history",
  "royal history",
  "indigenous cultures",
  "culinary traditions",
  "wine and spirits",
  "art galleries",
  "public art installations",
  "food markets",
  "regional cooking techniques",
  "urban planning",
  "sustainable design",
  "fashion history",
  "coffee culture",
  "artisan communities",
  "photography hotspots",
  "music history",
  "film locations",
  "political history",
  "literary landmarks",
  "local festivals",
  "natural landscapes",
  "seaside history",
  "transportation history",
  "museums and exhibits",
  "famous residences",
  "underground culture",
  "industrial heritage",
  "craft traditions",
  "maritime heritage",
];

const pronouns = [
  { subject: "He", object: "him", possessive: "His" },
  { subject: "She", object: "her", possessive: "Her" },
  { subject: "They", object: "them", possessive: "Their" },
];

const cityFiles = getCityFiles();

// Generate a random date within the last year
function getRandomRecentDate() {
  const now = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  const randomTimestamp =
    oneYearAgo.getTime() +
    Math.random() * (now.getTime() - oneYearAgo.getTime());
  const randomDate = new Date(randomTimestamp);

  return randomDate.toISOString().split("T")[0];
}

// Generate random reviews for a given guide
function generateReviews(guide) {
  const reviews = [];
  const count = 3 + Math.floor(Math.random() * 2); // 3 or 4 reviews

  for (let i = 0; i < count; i++) {
    const templateIndex = Math.floor(Math.random() * reviewTemplates.length);
    const adjectiveIndex = Math.floor(
      Math.random() * positiveAdjectives.length
    );

    // Use guide specialties or tour types, and add additional specialties for variety
    let specialty;
    if (Math.random() > 0.7 && specialties.length > 0) {
      // 30% chance to use a generic specialty
      specialty = specialties[Math.floor(Math.random() * specialties.length)];
    } else {
      specialty =
        guide.specialties && guide.specialties.length > 0
          ? guide.specialties[
              Math.floor(Math.random() * guide.specialties.length)
            ]
          : guide.tourTypes[Math.floor(Math.random() * guide.tourTypes.length)];
    }

    // Select a pronoun object randomly
    const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];

    // Replace template variables with more comprehensive pronoun handling
    let quote = reviewTemplates[templateIndex]
      .replace("{name}", guide.name)
      .replace("{adj}", positiveAdjectives[adjectiveIndex])
      .replace("{specialty}", specialty);

    // Replace pronoun placeholders with the appropriate form
    quote = quote.replace(/{pronoun\.subject}/g, pronoun.subject);
    quote = quote.replace(/{pronoun\.object}/g, pronoun.object);
    quote = quote.replace(/{pronoun\.possessive}/g, pronoun.possessive);
    // For backward compatibility with existing templates
    quote = quote.replace(/{pronoun}/g, pronoun.possessive);

    // Weighted ratings - more 5s than 4s, and occasional 3
    let rating = 5;
    const ratingRandom = Math.random();
    if (ratingRandom > 0.7) rating = 4;
    if (ratingRandom > 0.95) rating = 3;

    reviews.push({
      id: `${guide.id}-review-${i}`,
      quote,
      author: getRandomName(),
      title: "Verified Tour Participant",
      city: guide.city,
      rating,
      date: getRandomRecentDate(),
    });
  }

  return reviews;
}

// Main function to process each city and generate reviews
async function generateAllGuideReviews() {
  try {
    // Ensure the directory exists
    const outputDir = path.resolve(
      __dirname,
      "../src/lib/constants/testimonials/guides"
    );

    try {
      await fs.mkdir(outputDir, { recursive: true });
    } catch (err) {
      if (err.code !== "EEXIST") {
        throw err;
      }
    }

    for (const cityFile of cityFiles) {
      const formattedCity = formatKebabToCamelCase(cityFile);
      const country = cityCountryMap[cityFile];
      const region = cityToRegionMap[cityFile];
      const formattedCountry = formatTitleToCamelCase(normalizeString(country));
      const formattedRegion = formatTitleToCamelCase(normalizeString(region));

      // Construct the path to the TypeScript file (not directory)
      const filePath = path.join(
        process.cwd(),
        "src",
        "lib",
        "constants",
        "staff",
        "guides",
        `${cityFile}.ts`
      );

      const guideId = `${formattedCity}${formattedCountry.replaceAll(".", "")}${formattedRegion}Guides`;

      try {
        // Check if the file exists before trying to access it
        try {
          await fs.access(filePath);
        } catch (error) {
          console.error(`File not found: ${filePath}`);
          continue; // Skip to the next city
        }

        // Read the file content to extract guide data
        const fileContent = await fs.readFile(filePath, "utf8");

        // Extract guide objects using regex
        const guideObjects = [];
        const regex =
          /\{\s*id:\s*["']([^"']+)["'],\s*name:\s*["']([^"']+)["']/g;
        let match;

        while ((match = regex.exec(fileContent)) !== null) {
          const [fullMatch, id, name] = match;

          // Find the end of this guide object
          const startPos = match.index;
          let braceCount = 1;
          let endPos = startPos + 1;

          while (braceCount > 0 && endPos < fileContent.length) {
            if (fileContent[endPos] === "{") braceCount++;
            if (fileContent[endPos] === "}") braceCount--;
            endPos++;
          }

          if (braceCount === 0) {
            const guideObjectText = fileContent.substring(startPos, endPos);

            // Extract specialties and tourTypes
            const specialtiesMatch = guideObjectText.match(
              /specialties:\s*\[(.*?)\]/s
            );
            const specialties = specialtiesMatch
              ? specialtiesMatch[1]
                  .split(",")
                  .map((s) => s.trim().replace(/["']/g, ""))
                  .filter((s) => s)
              : [];

            const tourTypesMatch = guideObjectText.match(
              /tourTypes:\s*\[(.*?)\]/s
            );
            const tourTypes = tourTypesMatch
              ? tourTypesMatch[1]
                  .split(",")
                  .map((s) => s.trim().replace(/["']/g, ""))
                  .filter((s) => s)
              : [];

            guideObjects.push({
              id,
              name,
              city: `${formatCamelCaseToTitle(formattedCity)}`,
              specialties,
              tourTypes,
            });
          }
        }

        if (guideObjects.length === 0) {
          console.error(`No guide data extracted from ${formattedCity}`);
          continue;
        }

        const allReviews = {};

        for (const guide of guideObjects) {
          allReviews[guide.id] = generateReviews(guide);
        }

        const outputFile = path.join(outputDir, `${formattedCity}.ts`);
        const outputContent = `// This file is auto-generated. Do not edit manually.
// Tour guide reviews for ${formattedCity}
export const ${formattedCity}GuideReviews = ${JSON.stringify(allReviews, null, 2)};
`;

        await fs.writeFile(outputFile, outputContent);
        console.log(
          `Generated reviews for ${guideObjects.length} guides in ${cityFile}`
        );
      } catch (error) {
        console.error(`Error processing city ${cityFile}:`, error);
      }
    }

    console.log("Guide review generation complete!");
  } catch (error) {
    console.error("Error generating guide reviews:", error);
  }
}

// Execute the main function
generateAllGuideReviews();
