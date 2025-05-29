import { homestaysAndHeritageStays } from "../constants/services/homestay/destinations";
import { driverQualificationMatrix } from "../constants/services/transportation/staff/drivers";
import { tourGuides } from "../constants/staff/tourGuides";
import { TourGuide } from "../interfaces/people/staff";
import { formatTitleToCamelCase, formatToSlug, removeAccents } from "./format";

export async function getTourData(city: string): Promise<any> {
  const cityFormatted =
    removeAccents(city).replaceAll(" ", "-").charAt(0).toLowerCase() +
    formatTitleToCamelCase(city.slice(1)).replace("'", "");
  const tourID = `${cityFormatted}Tours`;

  try {
    const tourModule = await import(
      `@/lib/constants/tours/${formatToSlug(city)}`
    );
    // Return the specific named export that matches tourID
    if (tourModule[tourID]) {
      return tourModule[tourID];
    } else {
      console.error(`Export named ${tourID} not found in module`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading resource: ${error}`);
    return [];
  }
}

export const driverLanguages = Array.from(
  new Set(
    driverQualificationMatrix.flatMap((category) =>
      category.profiles.flatMap((driver) => driver.languages)
    )
  )
).sort();

/**
 * Fetches attractions for a specified city.
 *
 * This function attempts to import attractions data for a city from a local module.
 * It formats the city, region, and country names to camelCase and removes apostrophes,
 * then combines them to create a key to access the attractions data.
 *
 * @param city - The name of the city to fetch attractions for
 * @param region - The region/state/province where the city is located
 * @param country - The country where the city is located
 * @returns A Promise that resolves to an array of attractions or an empty array if none are found
 *
 * @example
 * // Returns attractions for New York
 * const attractions = await getCityAttractions("New York", "New York", "United States");
 */
export async function getCityAttractions(
  city: string,
  region: string,
  country: string
): Promise<any> {
  // Format city name for file path using slug format
  const citySlug = formatToSlug(city);

  // Format city name for variable name (camelCase starting with lowercase)
  const cityFormatted =
    removeAccents(city).charAt(0).toLowerCase() +
    formatTitleToCamelCase(removeAccents(city).slice(1)).replace(/['\-]/g, "");

  // Format region and country (camelCase starting with uppercase)
  const regionFormatted =
    removeAccents(region).charAt(0).toUpperCase() +
    formatTitleToCamelCase(removeAccents(region).slice(1)).replace(
      /['\-]/g,
      ""
    );

  const countryFormatted =
    removeAccents(country).charAt(0).toUpperCase() +
    formatTitleToCamelCase(removeAccents(country).slice(1)).replace(
      /['\-]/g,
      ""
    );

  // Combine properly formatted parts
  const cityRegionCountry = `${cityFormatted}${regionFormatted}${countryFormatted}`;

  console.log("Fetching attractions for:", cityRegionCountry);
  try {
    const attractionsModule = await import(
      `@/lib/constants/destinations/city/${cityFormatted}`
    );
    if (attractionsModule[cityRegionCountry]) {
      return attractionsModule[cityRegionCountry];
    } else {
      console.error(`No attractions found for ${city}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading attractions for ${city}: ${error}`);
    return [];
  }
}

/**
 * Finds the original city name from a slug.
 *
 * Iterates through all locations in homestaysAndHeritageStays array,
 * formats each city name to a slug, and compares it with the provided slug.
 *
 * @param slug - The slugified city name to search for
 * @returns The original city name if found, or null if no match is found
 */
export function findOriginalCityName(slug: string): string | null {
  for (const country of homestaysAndHeritageStays) {
    for (const location of country.locations) {
      const locationSlug = formatToSlug(removeAccents(location.city));
      if (locationSlug === slug) {
        return location.city;
      }
    }
  }
  return null;
}

/**
 * Finds a tour guide by city and specialty.
 *
 * @param city - The city where the tour guide operates
 * @param specialty - The specialty to look for in the tour guide's skills
 * @returns A matching TourGuide object based on the following priority:
 *   1. A random guide from the specified city with the matching specialty
 *   2. If no specialty match, a random guide from the specified city
 *   3. If no city match, a default generic tour guide object
 *
 * @remarks
 * The function performs case-insensitive matching for both city and specialty.
 * When multiple guides match the criteria, one is randomly selected using the Fisher-Yates shuffle algorithm.
 */
export function findGuideBySpecialty(
  city: string,
  specialty: string
): TourGuide {
  // Format the city name to lowercase for consistent comparison
  const cityLower = city.toLowerCase();

  // Find all guides that match the city and specialty
  const matchingGuides = tourGuides.filter(
    (guide) =>
      guide.city.toLowerCase() === cityLower &&
      guide.specialties.some((guideSpecialty) =>
        guideSpecialty.toLowerCase().includes(specialty.toLowerCase())
      )
  );

  // If we have matching guides, return one randomly
  if (matchingGuides.length > 0) {
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = matchingGuides.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [matchingGuides[i], matchingGuides[j]] = [
        matchingGuides[j],
        matchingGuides[i],
      ];
    }
    return matchingGuides[0]; // Return a random guide
  }

  // Try to find any guide from this city as a fallback
  const cityGuides = tourGuides.filter(
    (guide) => guide.city.toLowerCase() === cityLower
  );

  if (cityGuides.length > 0) {
    // Return a random guide from this city
    return cityGuides[Math.floor(Math.random() * cityGuides.length)];
  }

  // Return default guide if no matches found
  return {
    id: "",
    name: "Local Expert Guide",
    city: "",
    country: "",
    state: "",
    region: "",
    isPopular: false,
    bio: "A knowledgeable local expert in this destination",
    description: "",
    quote: "",
    profileImage: "/images/staff/guides/default-guide.jpg",
    specialties: [],
    languages: ["English"],
    certifications: [],
    experienceYears: 5,
  };
}