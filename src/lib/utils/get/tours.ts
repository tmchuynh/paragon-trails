import { Tour } from "@/lib/interfaces/services/tours";
import { formatKebabToCamelCase, formatTitleToCamelCase } from "../format";
import { cityCountryMap, cityToRegionMap } from "@/lib/utils/mapping";
import { cityFiles } from "@/lib/constants/info/city";

export async function getAllTours(): Promise<Tour[]> {
  const tours: Tour[] = [];
  try {
    for (const cityFile of cityFiles) {
      const country = cityCountryMap[cityFile as keyof typeof cityCountryMap];
      const region = cityToRegionMap[cityFile as keyof typeof cityToRegionMap];
      const formattedCity = formatKebabToCamelCase(cityFile);
      const formattedCountry = formatTitleToCamelCase(country);

      // Remove spaces and format region correctly
      const formattedRegion = formatTitleToCamelCase(region);

      const tourId = `${formattedCity}${formattedCountry.replaceAll(".", "")}${formattedRegion}Tours`;

      // Log the city we're processing and constructed tourId
      console.log(
        `Processing city: ${cityFile}, looking for tourId: ${tourId}`,
      );

      try {
        // Try both potential import paths
        let cityModule;
        try {
          cityModule = await import(
            `@/lib/constants/tours/${formatKebabToCamelCase(cityFile)}`
          );
        } catch (importError) {
          console.log(
            `Failed to import from tours directory: ${importError.message}`,
          );
          try {
            cityModule = await import(
              `@/lib/constants/destinations/city/${cityFile}`
            );
            console.log(
              `Successfully imported from destinations/city directory`,
            );
          } catch (secondImportError) {
            console.error(`Failed both import attempts for ${cityFile}`);
            continue; // Skip this city and move to next one
          }
        }

        // Debug: Print all exported keys from the module
        console.log(
          `Available keys in module for ${cityFile}:`,
          Object.keys(cityModule),
        );

        if (cityModule[tourId]) {
          console.log(
            `Found ${cityModule[tourId].length} tours for ${cityFile}`,
          );
          tours.push(...(cityModule[tourId] as Tour[]));
        } else {
          // Try a different case format or without "Tours" suffix
          const alternativeId = `${formattedCity}${formattedCountry.replaceAll(".", "")}${formattedRegion}`;
          if (cityModule[alternativeId]) {
            console.log(`Found tours using alternative ID: ${alternativeId}`);
            tours.push(...(cityModule[alternativeId] as Tour[]));
          } else {
            // Log all available keys in the module to help debug
            console.error(
              `No tours found for city: ${cityFile}, tried IDs: ${tourId}, ${alternativeId}`,
            );
          }
        }
      } catch (cityError) {
        console.error(`Error processing city ${cityFile}: ${cityError}`);
      }
    }
  } catch (error) {
    console.error(`Error loading city files: ${error}`);
  } finally {
    console.log(`Total tours loaded: ${tours.length}`);
    return tours;
  }
}

export async function getCityTours(city: string): Promise<Tour[]> {
  try {
    const country = cityCountryMap[city as keyof typeof cityCountryMap];
    const region = cityToRegionMap[city as keyof typeof cityToRegionMap];
    const formattedCity = formatKebabToCamelCase(city);
    const formattedCountry = formatTitleToCamelCase(country);
    const formattedRegion = formatTitleToCamelCase(region);

    const tourId = `${formattedCity}${formattedCountry.replaceAll(".", "")}${formattedRegion}Tours`;

    console.log(`Looking for city tour ID: ${tourId}`);

    let cityModule;
    try {
      cityModule = await import(
        `@/lib/constants/tours/${formatKebabToCamelCase(city)}`
      );
    } catch (importError) {
      console.log(
        `Failed to import from tours directory: ${importError.message}`,
      );
      cityModule = await import(`@/lib/constants/destinations/city/${city}`);
    }

    console.log(
      `Available keys in module for ${city}:`,
      Object.keys(cityModule),
    );

    if (cityModule[tourId]) {
      return cityModule[tourId] as Tour[];
    } else {
      // Try a different case format or without "Tours" suffix
      const alternativeId = `${formattedCity}${formattedCountry.replaceAll(".", "")}${formattedRegion}`;
      if (cityModule[alternativeId]) {
        return cityModule[alternativeId] as Tour[];
      }
      console.error(
        `No tours found for city: ${city}, tried IDs: ${tourId}, ${alternativeId}`,
      );
      return [];
    }
  } catch (error) {
    console.error(`Error loading tours for city ${city}: ${error}`);
    return [];
  }
}

export async function getTourByLanguage(
  city: string,
  language: string,
): Promise<Tour[]> {
  try {
    const tours = await getCityTours(city);
    return tours.filter((tour) => tour.languagesOffered.includes(language));
  } catch (error) {
    console.error(
      `Error filtering tours by language ${language} in city ${city}: ${error}`,
    );
    return [];
  }
}

export async function getTourByType(
  city: string,
  type: string,
): Promise<Tour[]> {
  try {
    const tours = await getCityTours(city);
    return tours.filter((tour) => tour.type === type);
  } catch (error) {
    console.error(
      `Error filtering tours by type ${type} in city ${city}: ${error}`,
    );
    return [];
  }
}

export async function getTourByPrice(
  city: string,
  maxPrice: number,
): Promise<Tour[]> {
  try {
    const tours = await getCityTours(city);
    return tours.filter((tour) => parseFloat(tour.price) <= maxPrice);
  } catch (error) {
    console.error(
      `Error filtering tours by price ${maxPrice} in city ${city}: ${error}`,
    );
    return [];
  }
}
