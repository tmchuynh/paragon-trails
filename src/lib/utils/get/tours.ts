import { Tour } from "@/lib/interfaces/services/tours";
import { formatKebabToCamelCase } from "../format";
import { cityCountryMap, cityToRegionMap } from "@/lib/utils/mapping";
import { cityFiles } from "@/lib/constants/info/city";

export async function getAllTours(): Promise<Tour[]> {
  const tours: Tour[] = [];
  try {
    for (const cityFile of cityFiles) {
      const country = cityCountryMap[cityFile as keyof typeof cityCountryMap];
      const formattedCity = formatKebabToCamelCase(cityFile);
      const formattedCountry = formatKebabToCamelCase(country);

      const tourId = `${formattedCity}${formattedCountry}Tours`;
      const cityModule = await import(
        `@/lib/constants/destinations/city/${cityFile}`
      );

      if (cityModule[tourId]) {
        tours.push(...(cityModule[tourId] as Tour[]));
      } else {
        console.error(`No tours found for city: ${cityFile}`);
      }
    }
  } catch (error) {
    console.error(`Error loading city files: ${error}`);
  } finally {
    return tours;
  }
}

export async function getCityTours(city: string): Promise<Tour[]> {
  try {
    const country = cityCountryMap[city as keyof typeof cityCountryMap];
    const formattedCity = formatKebabToCamelCase(city);
    const formattedCountry = formatKebabToCamelCase(country);

    const tourId = `${formattedCity}${formattedCountry}Tours`;
    const cityModule = await import(
      `@/lib/constants/destinations/city/${city}`
    );

    if (cityModule[tourId]) {
      return cityModule[tourId] as Tour[];
    } else {
      console.error(`No tours found for city: ${city}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading tours for city ${city}: ${error}`);
    return [];
  }
}

export async function getTourByLanguage(
  city: string,
  language: string
): Promise<Tour[]> {
  try {
    const tours = await getCityTours(city);
    return tours.filter((tour) => tour.languagesOffered.includes(language));
  } catch (error) {
    console.error(
      `Error filtering tours by language ${language} in city ${city}: ${error}`
    );
    return [];
  }
}

export async function getTourByType(
  city: string,
  type: string
): Promise<Tour[]> {
  try {
    const tours = await getCityTours(city);
    return tours.filter((tour) => tour.type === type);
  } catch (error) {
    console.error(
      `Error filtering tours by type ${type} in city ${city}: ${error}`
    );
    return [];
  }
}

export async function getTourByPrice(
  city: string,
  maxPrice: number
): Promise<Tour[]> {
  try {
    const tours = await getCityTours(city);
    return tours.filter((tour) => parseFloat(tour.price) <= maxPrice);
  } catch (error) {
    console.error(
      `Error filtering tours by price ${maxPrice} in city ${city}: ${error}`
    );
    return [];
  }
}
