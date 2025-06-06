import { cityFiles } from "@/lib/constants/info/city";
import { Attraction } from "@/lib/interfaces/services/attractions";
import { cityCountryMap } from "@/lib/utils/mapping";
import { formatKebabToCamelCase } from "../format";

export async function getAllAttractions(): Promise<Attraction[]> {
  const attractions: Attraction[] = [];
  try {
    for (const cityFile of cityFiles) {
      const country = cityCountryMap[cityFile as keyof typeof cityCountryMap];
      const formattedCity = formatKebabToCamelCase(cityFile);
      const formattedCountry = formatKebabToCamelCase(country);

      const attractionId = `${formattedCity}${formattedCountry}Attractions`;
      const cityModule = await import(
        `@/lib/constants/destinations/city/${cityFile}`
      );

      if (cityModule[attractionId]) {
        attractions.push(...(cityModule[attractionId] as Attraction[]));
      }
      console.error(`No attractions found for city: ${cityFile}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading city files: ${error}`);
    return [];
  } finally {
    return attractions;
  }
}

export async function getCityAttractionById(
  city: string,
  attractionId: string,
): Promise<Attraction | null> {
  try {
    // Normalize the city name for the file path (kebab-case)
    const normalizedCity = city.toLowerCase().trim().replace(/\s+/g, "-");

    // Import the attractions file for this city
    try {
      const attractionsModule = await import(
        `@/lib/constants/destinations/city/${normalizedCity}`
      );

      // Get all the export names from the module
      const exportNames = Object.keys(attractionsModule);

      // Look for exports that contain "Attractions"
      const attractionsExports = exportNames.filter((name) =>
        name.includes("Attractions"),
      );

      // Try each export that might contain attractions
      for (const exportName of attractionsExports) {
        const attractions = attractionsModule[exportName] as Attraction[];
        if (!Array.isArray(attractions)) continue;

        const attraction = attractions.find((a) => a.id === attractionId);
        if (attraction) {
          return attraction;
        }
      }

      console.warn(
        `Attraction with ID ${attractionId} not found in ${city} (checked exports: ${attractionsExports.join(
          ", ",
        )})`,
      );
      return null;
    } catch (importError) {
      console.error(
        `Failed to import attractions for ${normalizedCity}:`,
        importError,
      );
      return null;
    }
  } catch (error) {
    console.error(
      `Error loading attraction for ${city} with ID ${attractionId}:`,
      error,
    );
    return null;
  }
}

export async function getCityFile(city: string): Promise<any> {
  try {
    const cityFilesModule = await import("@/lib/constants/info/city");
    const cityFile = cityFilesModule.cityFiles.find(
      (file: any) => file.city === city,
    );
    if (cityFile) {
      return cityFile;
    } else {
      console.error(`City file for ${city} not found`);
      return null;
    }
  } catch (error) {
    console.error(`Error loading city file: ${error}`);
    return null;
  }
}

export async function getCityAttractions(city: string): Promise<Attraction[]> {
  try {
    // Normalize the city name for the file path
    const normalizedCity = city.toLowerCase().trim().replace(/\s+/g, "-");

    try {
      // Import the attractions file for this city
      const attractionsModule = await import(
        `@/lib/constants/destinations/city/${normalizedCity}`
      );

      // Get all exports that contain "Attractions"
      const attractionsExports = Object.keys(attractionsModule).filter((name) =>
        name.includes("Attractions"),
      );

      // Return the first valid attractions array we find
      for (const exportName of attractionsExports) {
        const attractions = attractionsModule[exportName];
        if (Array.isArray(attractions) && attractions.length > 0) {
          console.log(
            `Found ${attractions.length} attractions for ${city} in export ${exportName}`,
          );
          return attractions;
        }
      }

      console.error(
        `No attractions found for city: ${city} (checked exports: ${attractionsExports.join(
          ", ",
        )})`,
      );
      return [];
    } catch (importError) {
      console.error(
        `Failed to import attractions for ${normalizedCity}:`,
        importError,
      );
      return [];
    }
  } catch (error) {
    console.error(`Error loading attractions for ${city}:`, error);
    return [];
  }
}

export async function getCityAttraction(
  city: string,
  attractionId: string,
): Promise<Attraction | null> {
  try {
    const attractions = await getCityAttractions(city);
    const attraction = attractions.find((a: any) => a.id === attractionId);
    if (attraction) {
      return attraction;
    } else {
      console.error(`Attraction with ID ${attractionId} not found in ${city}`);
      return null;
    }
  } catch (error) {
    console.error(`Error loading attraction for ${city}: ${error}`);
    return null;
  }
}
export async function getCityAttractionByName(
  city: string,
  attractionName: string,
): Promise<Attraction | null> {
  try {
    const attractions = await getCityAttractions(city);
    console.log(
      `Looking for attraction "${attractionName}" in ${city}, found ${attractions.length} attractions`
    );

    // First try exact match on title
    let attraction = attractions.find(
      (a: any) => a.title?.toLowerCase() === attractionName.toLowerCase()
    );

    // If not found by title, try name property as fallback
    if (!attraction) {
      attraction = attractions.find(
        (a: any) => a.name?.toLowerCase() === attractionName.toLowerCase()
      );
    }

    // Log all attraction titles to help debug
    console.log(
      "Available attractions:",
      attractions.map((a) => a.title)
    );
    
    if (attraction) {
      console.log(`Found attraction: ${attraction.title}`);
      return attraction;
    } else {
      console.error(
        `Attraction with name ${attractionName} not found in ${city}`,
      );
      return null;
    }
  } catch (error) {
    console.error(`Error loading attraction for ${city}: ${error}`);
    return null;
  }
}

export async function getCityAttractionsByTags(
  city: string,
  tags: string[],
): Promise<Attraction[]> {
  try {
    const attractions = await getCityAttractions(city);
    const filteredAttractions = attractions.filter((attraction: any) =>
      tags.some((tag) => attraction.tags.includes(tag)),
    );
    return filteredAttractions;
  } catch (error) {
    console.error(`Error loading attractions for ${city}: ${error}`);
    return [];
  }
}

export async function getCityAttractionsByEntryFeeCategory(
  city: string,
  entryFeeCategory: string,
): Promise<Attraction[]> {
  try {
    const attractions = await getCityAttractions(city);
    const filteredAttractions = attractions.filter(
      (attraction: any) => attraction.entryFeeCategory === entryFeeCategory,
    );
    return filteredAttractions;
  } catch (error) {
    console.error(`Error loading attractions for ${city}: ${error}`);
    return [];
  }
}

export async function getCityAttractionsByPriceRange(
  city: string,
  priceRange: string,
): Promise<Attraction[]> {
  try {
    const attractions = await getCityAttractions(city);
    const filteredAttractions = attractions.filter(
      (attraction: any) => attraction.priceRange === priceRange,
    );
    return filteredAttractions;
  } catch (error) {
    console.error(`Error loading attractions for ${city}: ${error}`);
    return [];
  }
}

export async function getCityAttractionsByTimeOfDay(
  city: string,
  timeOfDay: string,
): Promise<Attraction[]> {
  try {
    const attractions = await getCityAttractions(city);
    const filteredAttractions = attractions.filter(
      (attraction: any) => attraction.timeOfDay === timeOfDay,
    );
    return filteredAttractions;
  } catch (error) {
    console.error(`Error loading attractions for ${city}: ${error}`);
    return [];
  }
}

export async function getCityAttractionsByRating(
  city: string,
  rating: number,
): Promise<Attraction[]> {
  try {
    const attractions = await getCityAttractions(city);
    const filteredAttractions = attractions.filter(
      (attraction: any) => attraction.rating >= rating,
    );
    return filteredAttractions;
  } catch (error) {
    console.error(`Error loading attractions for ${city}: ${error}`);
    return [];
  }
}
