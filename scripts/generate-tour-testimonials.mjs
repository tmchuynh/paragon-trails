/**
 * Tour Testimonials Generator Script
 * ==================================
 *
 * This script generates realistic customer testimonials for city tours in the Paragon Trails application.
 * It creates multiple testimonials for each tour, organizing them by city in separate files.
 *
 * Features:
 * - Reads all tour data from existing city tour files
 * - Generates 9-17 testimonials for each tour
 * - Creates appropriate folder structure in src/lib/constants/testimonials/
 * - Generates realistic customer names, comments, and titles
 * - Follows the Testimonial interface structure
 *
 * Usage: node scripts/generate-tour-testimonials.mjs [options]
 *
 * Options:
 *   --rewrite, -r       Rewrite existing files instead of skipping them
 *   --city C, -c C      Process only cities matching the search term
 *   --tour T, -t T      Process only tours matching the search term
 */

import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";
import {
  formatTitleToCamelCase,
  removeAccents,
} from "./utils/format-utils.mjs";
import { getRandomName } from "./utils/name-utils.mjs";

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
    tourFilter: null,
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

    if ((arg === "--tour" || arg === "-t") && i + 1 < args.length) {
      options.tourFilter = args[++i];
    }
  }

  return options;
}

const options = parseCommandLineArgs();

// Testimonial templates and phrases
const testimonialTemplates = [
  "This tour was absolutely amazing! {GUIDE_NAME} knew everything about {CITY} and showed us places we would have never found on our own.",
  "I can't recommend the {TOUR_TITLE} enough. {GUIDE_NAME} was phenomenal, and the experience was worth every penny.",
  "My {RELATIVE} and I had the best time on this tour. {GUIDE_NAME}'s knowledge of {CITY} made it so much more special.",
  "As someone who's been to {CITY} before, I was surprised at how much I learned on the {TOUR_TITLE}. {GUIDE_NAME} is a treasure trove of information!",
  "The {TOUR_TITLE} was the highlight of our trip to {CITY}. {GUIDE_NAME} took us to all the best spots and shared fascinating stories.",
  "A truly authentic experience! {GUIDE_NAME} showed us the real {CITY}, not just the tourist spots.",
  "I've been on many tours, but this one stands out. {GUIDE_NAME} was passionate, knowledgeable, and made everyone feel welcome.",
  "This tour exceeded all my expectations. {GUIDE_NAME}'s insider knowledge made our {CITY} visit unforgettable.",
  "If you're visiting {CITY}, the {TOUR_TITLE} is a must! {GUIDE_NAME} made the history come alive in a way guidebooks never could.",
  "We got so much value from this tour. {GUIDE_NAME} took us to places we would have never discovered on our own.",
  "As a solo traveler, I felt completely comfortable on this tour. {GUIDE_NAME} created a friendly atmosphere from the start.",
  "The {TOUR_TITLE} was both entertaining and educational. {GUIDE_NAME} has a gift for storytelling that brings {CITY}'s history to life.",
  "One of the best decisions of our trip! {GUIDE_NAME} is a fantastic guide and brought incredible energy to the tour.",
  "We loved every minute of the {TOUR_TITLE}. {GUIDE_NAME}'s local tips were priceless.",
  "Thanks to {GUIDE_NAME}, we discovered parts of {CITY} we would have never seen on our own.",
  "{GUIDE_NAME} went above and beyond to make sure everyone had a great time on the {TOUR_TITLE}.",
  "This was more than just sightseeing — it was an unforgettable journey through {CITY}'s culture and history.",
  "We were blown away by the depth of knowledge and warmth {GUIDE_NAME} brought to the tour.",
  "The pace was perfect, the content was rich, and {GUIDE_NAME} made every stop memorable.",
  "Highly recommend this tour if you want more than just a photo op — {GUIDE_NAME} gives you real insight into {CITY}.",
  "My {RELATIVE} and I agreed this was the best part of our entire trip to {CITY}.",
  "The stories, the hidden gems, the expert navigation — {GUIDE_NAME} delivered on all fronts.",
  "Even our teens were engaged the entire time — {GUIDE_NAME} knows how to captivate a group!",
  "What a fantastic way to start our stay in {CITY}. {GUIDE_NAME} gave us a great foundation for exploring more on our own.",
  "From beginning to end, the {TOUR_TITLE} was seamless and so well organized.",
  "I felt like I was being shown around by a friend who knows all the secrets of {CITY}.",
  "So much fun, and so informative! {GUIDE_NAME}'s enthusiasm is contagious.",
  "This isn’t your typical tour. {GUIDE_NAME} makes it feel personal and engaging from the very start.",
  "We booked last-minute and are so glad we did. {GUIDE_NAME} made it one of our favorite memories from {CITY}.",
  "{GUIDE_NAME} brought a depth of cultural insight that gave us a new appreciation for {CITY}.",
  "We’ll be recommending the {TOUR_TITLE} to all our friends. {GUIDE_NAME} made it that special.",
  "The {TOUR_TITLE} completely changed how I see {CITY}. {GUIDE_NAME}'s insights were invaluable.",
  "{GUIDE_NAME} shared personal stories that really brought {CITY} to life for us. A truly memorable tour.",
  "We had limited time in {CITY}, and this tour made sure we saw the best of it. {GUIDE_NAME} was amazing.",
  "This tour gave us a much deeper connection to {CITY}. {GUIDE_NAME}'s passion really shines through.",
  "What an engaging experience! {GUIDE_NAME} kept us laughing and learning throughout the {TOUR_TITLE}.",
  "I thought I knew {CITY}, but this tour proved otherwise. {GUIDE_NAME} showed us a side we’d never seen.",
  "We joined the {TOUR_TITLE} on our first day in {CITY}, and it set the tone for a fantastic trip.",
  "{GUIDE_NAME} had such a great balance of history, fun facts, and local stories — truly a gifted guide.",
  "This was not just sightseeing — it was a deep dive into the heart of {CITY} thanks to {GUIDE_NAME}.",
  "The small group size and personal attention from {GUIDE_NAME} made all the difference.",
  "Our family loved every moment of the {TOUR_TITLE}. {GUIDE_NAME} even made it fun for our kids.",
  "I’ve taken dozens of tours in different countries. {GUIDE_NAME} ranks among the very best.",
  "{GUIDE_NAME} was incredibly accommodating and answered every question with patience and detail.",
  "The pacing was perfect, and the stops were all well-chosen. A very thoughtful itinerary from {GUIDE_NAME}.",
  "Absolutely worth it. {GUIDE_NAME} took care of everything so we could just relax and enjoy {CITY}.",
  "From start to finish, the experience felt curated and special. Hats off to {GUIDE_NAME}.",
  "This tour is a hidden gem — just like the spots {GUIDE_NAME} showed us around {CITY}.",
  "I was nervous about joining a group tour, but {GUIDE_NAME} made everyone feel like part of the crew.",
  "Such a memorable way to explore {CITY}. The mix of history, local culture, and stories was perfect.",
  "It felt like a private tour, even though we were with a group. {GUIDE_NAME} is incredibly engaging.",
  "We left the {TOUR_TITLE} feeling more connected to {CITY} than we ever expected.",
  "{GUIDE_NAME} is the kind of guide you want to tell your friends about. This was a five-star experience.",
  "Even the locals in our group said they learned something new. That says a lot about {GUIDE_NAME}'s depth.",
  "I wasn’t expecting to enjoy this tour so much, but {GUIDE_NAME} made it the highlight of our trip.",
  "{GUIDE_NAME} made learning about {CITY}'s history genuinely exciting — not an easy task!",
  "Perfect balance of walking, learning, and taking in the atmosphere. Highly recommend {GUIDE_NAME}.",
  "My {RELATIVE} and I didn’t want the tour to end. {GUIDE_NAME} is that engaging and informative.",
  "If you only have time for one activity in {CITY}, make it the {TOUR_TITLE}. You won’t regret it.",
  "{GUIDE_NAME}'s enthusiasm for {CITY} was contagious. We walked away feeling inspired.",
  "Everything about this tour was top-notch: the route, the stories, the guide — thank you, {GUIDE_NAME}!",
];

const relatives = [
  "partner",
  "wife",
  "husband",
  "friend",
  "daughter",
  "son",
  "mother",
  "father",
  "parent",
  "sibling",
  "sister",
  "brother",
  "cousin",
  "aunt",
  "uncle",
  "grandparent",
  "grandmother",
  "grandfather",
  "colleague",
  "workmate",
  "acquaintance",
  "classmate",
  "family",
  "colleagues",
];

const testimonialTitles = [
  "Unforgettable Experience",
  "Highlight of Our Trip",
  "Best Tour in {CITY}",
  "Don't Miss This Tour!",
  "A Perfect Day in {CITY}",
  "Worth Every Penny",
  "Hidden Gems of {CITY}",
  "Exceptional Tour Guide",
  "Beyond Our Expectations",
  "The Real {CITY} Experience",
  "Insider's Perspective",
  "Cultural Immersion at Its Best",
  "A Day to Remember",
  "Local Experience Made Easy",
  "A Must-Do in {CITY}",
  "Incredible from Start to Finish",
  "Truly Eye-Opening",
  "An Authentic Slice of {CITY}",
  "We’ll Never Forget This",
  "One of the Best Tours We've Taken",
  "The Ultimate {CITY} Tour",
  "Fascinating and Fun",
  "Better Than My Last Tinder Date",
  "History, Snacks, and Laughs—Yes Please!",
  "I Came, I Saw, I Took Too Many Photos",
  "A Tour Even My Teenager Liked",
  "Hot, Sweaty, and Absolutely Worth It",
  "Learned Stuff, Didn’t Cry—Success!",
  "Would Follow This Guide Into Battle",
  "Bought the T-Shirt, Took the Tour, Loved It",
  "Got Lost (on Purpose) with {GUIDE_NAME}",
  "The Walking Was Free—The Laughs Were Priceless",
  "A New Favorite Memory",
  "So Much More Than Expected",
  "Learned So Much!",
  "Highly Recommend to Everyone",
  "The Best Way to See {CITY}",
  "History Comes Alive",
  "Outstanding in Every Way",
  "A Stroll Through a Living Storybook",
  "Felt Like a Character in a Fairytale",
  "Where Magic Meets Cobblestone",
  "Wandered Far, Wondered More",
  "Lost in Time—in the Best Way",
  "If Cities Had Souls, {CITY} Sang to Us",
  "Sunlight, Stories, and Serendipity",
  "Followed the Guide, Found a Dream",
  "Whispers of the Past, Echoes of Joy",
  "More Enchanting Than Expected",
  "A Unique Way to Explore {CITY}",
  "Loved Every Minute",
  "Entertaining and Educational",
  "Top-Notch Guiding",
  "Impressive and Informative",
  "Absolutely Fantastic!",
  "Brought {CITY} to Life",
  "An Unexpected Highlight",
  "Well Worth Your Time",
  "So Glad We Did This",
  "The Perfect Introduction to {CITY}",
  "A Deep Dive into Local Culture",
  "Fun, Friendly, and Full of Insight",
  "Memorable from the First Step",
  "Best Decision of Our Trip",
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

function formatFileName(tourTitle) {
  return formatTitleToCamelCase(
    removeAccents(tourTitle.replace(/[^\w\s]/gi, "")),
  );
}

function getTestimonialQuote(city, tourTitle, guideName) {
  let quote =
    testimonialTemplates[
      Math.floor(Math.random() * testimonialTemplates.length)
    ];

  // Replace placeholders
  quote = quote.replace(/\{CITY\}/g, city);
  quote = quote.replace(/\{TOUR_TITLE\}/g, tourTitle);
  quote = quote.replace(/\{GUIDE_NAME\}/g, guideName);

  // Replace relative if present
  if (quote.includes("{RELATIVE}")) {
    quote = quote.replace(
      "{RELATIVE}",
      relatives[Math.floor(Math.random() * relatives.length)],
    );
  }

  return quote;
}

function getTestimonialTitle(city) {
  let title =
    testimonialTitles[Math.floor(Math.random() * testimonialTitles.length)];
  title = title.replace(/\{CITY\}/g, city);
  return title;
}

// Get all tour files
async function getTourFiles() {
  const toursDir = path.join(process.cwd(), "src", "lib", "constants", "tours");
  try {
    const files = await readdir(toursDir);
    return files.filter((file) => file.endsWith(".ts"));
  } catch (error) {
    console.error(`Error reading tour files: ${error.message}`);
    return [];
  }
}

// Parse tour data from file content
async function parseTours(filePath) {
  try {
    const fileContent = await readFile(filePath, "utf8");
    const fileName = path.basename(filePath, ".ts");

    // Extract city name from file name
    const cityName = fileName;

    // Find all tours in the file
    const tours = [];

    // Match tour objects in the array
    const tourRegex =
      /{\s*id:\s*"([^"]+)",\s*guideId:\s*"([^"]+)",\s*title:\s*"([^"]+)",.*?city:\s*"([^"]+)",\s*country:\s*"([^"]+)"/gs;
    let match;

    while ((match = tourRegex.exec(fileContent)) !== null) {
      tours.push({
        id: match[1],
        guideId: match[2],
        title: match[3],
        city: match[4],
        country: match[5],
      });
    }

    return { cityName, tours };
  } catch (error) {
    console.error(`Error parsing tours from ${filePath}: ${error.message}`);
    return { cityName: null, tours: [] };
  }
}

// Generate testimonials for a tour
function generateTestimonials(tour) {
  const count = Math.floor(Math.random() * 10) + 8; // 9-17 testimonials
  const testimonials = [];
  const guideName = getRandomName();
  const formattedCityName = tour.city
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  for (let i = 0; i < count; i++) {
    testimonials.push({
      id: `testimonial-${tour.id}-${i + 1}`, // Add unique ID with tour reference
      quote: getTestimonialQuote(formattedCityName, tour.title, guideName),
      author: getRandomName(),
      title: getTestimonialTitle(formattedCityName),
    });
  }

  return testimonials;
}

// Create testimonial file for a tour
async function createTestimonialFile(tour) {
  const fileName = formatFileName(tour.title);
  const cityDir = path.join(
    process.cwd(),
    "src",
    "lib",
    "constants",
    "testimonials",
    tour.city,
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
  const testimonials = generateTestimonials(tour);

  // Create file content
  let content = `import { Testimonial } from "@/lib/interfaces/services/testimonials";\n\n`;
  content += `export const ${fileName}Testimonials: Testimonial[] = [\n`;

  testimonials.forEach((testimonial, index) => {
    content += `  {\n`;
    content += `    id: "${testimonial.id}",\n`; // Add ID to output
    content += `    quote: "${testimonial.quote}",\n`;
    content += `    author: "${testimonial.author}",\n`;
    content += `    title: "${testimonial.title}"\n`;
    content += `  }${index < testimonials.length - 1 ? "," : ""}\n`;
  });

  content += `];\n`;

  // Write file
  await writeFile(filePath, content);
  console.log(`Created file: ${filePath}`);
}

// Main function
async function generateAllTestimonials() {
  // Get all tour files
  const tourFiles = await getTourFiles();

  for (const file of tourFiles) {
    const filePath = path.join(
      process.cwd(),
      "src",
      "lib",
      "constants",
      "tours",
      file,
    );
    const { cityName, tours } = await parseTours(filePath);

    if (!cityName || tours.length === 0) {
      console.log(`No tours found in ${file}`);
      continue;
    }

    // Apply city filter if specified
    if (
      options.cityFilter &&
      !cityName.includes(options.cityFilter.toLowerCase())
    ) {
      continue;
    }

    console.log(`Processing ${tours.length} tours for ${cityName}`);

    // Process each tour
    for (const tour of tours) {
      // Apply tour filter if specified
      if (
        options.tourFilter &&
        !tour.title.toLowerCase().includes(options.tourFilter.toLowerCase())
      ) {
        continue;
      }

      try {
        await createTestimonialFile(tour);
      } catch (error) {
        console.error(
          `Error creating testimonial file for ${tour.title}: ${error.message}`,
        );
      }
    }
  }
}

// Run the script
generateAllTestimonials()
  .then(() => console.log("Testimonial generation completed successfully!"))
  .catch((error) => console.error("Error generating testimonials:", error));
