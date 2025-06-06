import { Attraction } from "@/lib/interfaces/services/attractions";
import { formatKebabToCamelCase } from "../format";
import { cityCountryMap, cityToRegionMap } from "@/lib/utils/mapping";
import { cityFiles } from "@/lib/constants/info/city";

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

export async function getCityFile(city: string): Promise<any> {
  try {
    const cityFilesModule = await import("@/lib/constants/info/city");
    const cityFile = cityFilesModule.cityFiles.find(
      (file: any) => file.city === city
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

export async function getCityAttractions(city: string): Promise<any> {
  try {
    const cityFile = await getCityFile(city);
    if (cityFile && cityFile.attractions) {
      return cityFile.attractions;
    } else {
      console.error(`Attractions for ${city} not found`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading attractions for ${city}: ${error}`);
    return [];
  }
}
export async function getCityAttraction(
  city: string,
  attractionId: string
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
  attractionName: string
): Promise<Attraction | null> {
  try {
    const attractions = await getCityAttractions(city);
    const attraction = attractions.find(
      (a: any) => a.name.toLowerCase() === attractionName.toLowerCase()
    );
    if (attraction) {
      return attraction;
    } else {
      console.error(
        `Attraction with name ${attractionName} not found in ${city}`
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
  tags: string[]
): Promise<Attraction[]> {
  try {
    const attractions = await getCityAttractions(city);
    const filteredAttractions = attractions.filter((attraction: any) =>
      tags.some((tag) => attraction.tags.includes(tag))
    );
    return filteredAttractions;
  } catch (error) {
    console.error(`Error loading attractions for ${city}: ${error}`);
    return [];
  }
}

export async function getCityAttractionsByEntryFeeCategory(
  city: string,
  entryFeeCategory: string
): Promise<Attraction[]> {
  try {
    const attractions = await getCityAttractions(city);
    const filteredAttractions = attractions.filter(
      (attraction: any) => attraction.entryFeeCategory === entryFeeCategory
    );
    return filteredAttractions;
  } catch (error) {
    console.error(`Error loading attractions for ${city}: ${error}`);
    return [];
  }
}

export async function getCityAttractionsByPriceRange(
  city: string,
  priceRange: string
): Promise<Attraction[]> {
  try {
    const attractions = await getCityAttractions(city);
    const filteredAttractions = attractions.filter(
      (attraction: any) => attraction.priceRange === priceRange
    );
    return filteredAttractions;
  } catch (error) {
    console.error(`Error loading attractions for ${city}: ${error}`);
    return [];
  }
}

export async function getCityAttractionsByTimeOfDay(
  city: string,
  timeOfDay: string
): Promise<Attraction[]> {
  try {
    const attractions = await getCityAttractions(city);
    const filteredAttractions = attractions.filter(
      (attraction: any) => attraction.timeOfDay === timeOfDay
    );
    return filteredAttractions;
  } catch (error) {
    console.error(`Error loading attractions for ${city}: ${error}`);
    return [];
  }
}

export async function getCityAttractionsByRating(
  city: string,
  rating: number
): Promise<Attraction[]> {
  try {
    const attractions = await getCityAttractions(city);
    const filteredAttractions = attractions.filter(
      (attraction: any) => attraction.rating >= rating
    );
    return filteredAttractions;
  } catch (error) {
    console.error(`Error loading attractions for ${city}: ${error}`);
    return [];
  }
}
