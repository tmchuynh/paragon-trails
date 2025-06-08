import { cityFiles } from "@/lib/constants/info/city";
import { Tour } from "@/lib/interfaces/services/tours";
import { cityCountryMap, cityToRegionMap } from "@/lib/utils/mapping";
import {
  formatKebabToCamelCase,
  formatTitleToCamelCase,
  formatTitleCaseToKebabCase,
} from "../format";

/**
 * Gets all available tours for a specific city
 *
 * @param city The city ID in kebab-case (e.g., "new-york-city")
 * @returns An array of tours for the specified city
 */
export async function getCityTours(city: string): Promise<Tour[]> {
  const kebabCasedCity = formatTitleCaseToKebabCase(city);
  console.log(`Loading tours for city: ${kebabCasedCity}`);
  const tours: Tour[] = [];

  try {
    // Convert kebab-case city ID to camelCase for module naming
    const cityCamelCase = formatKebabToCamelCase(city);

    // Get the region for this city from the mapping
    const region =
      cityToRegionMap[kebabCasedCity as keyof typeof cityToRegionMap] || "";
    const country =
      cityCountryMap[kebabCasedCity as keyof typeof cityCountryMap];
    const formattedCountry = formatTitleToCamelCase(country);
    const formattedRegion = formatTitleToCamelCase(region);

    console.log(
      `Processing city: ${city}, country: ${formattedCountry}, region: ${formattedRegion}`
    );

    // For each tour type, try to load its module
    try {
      // Construct the module ID following the naming convention
      // e.g., "newYorkCityGeneralTours" or "amalfiCoastCoastalTours"
      const moduleId = `${cityCamelCase}${formattedCountry.replaceAll(".", "")}${formattedRegion}Tours`;

      console.log(`Looking for module ID: ${moduleId}`);
      // Log the import path for debugging
      console.log(
        `Importing tours module from: @/lib/constants/tours/${kebabCasedCity}`
      );
      // Try to import the module dynamically
      const tourModule = await import(
        `@/lib/constants/tours/${kebabCasedCity}`
      );

      // If the module exports the expected data
      if (tourModule[moduleId]) {
        const cityTours = tourModule[moduleId] as Tour[];
        tours.push(...cityTours);
      } else {
        console.warn(
          `No tours found in module ${formatTitleToCamelCase(city)} - missing export with ID ${moduleId}`
        );
      }
    } catch (error) {
      // This is expected for cities that don't have this specific tour type
      console.warn(
        `No  tours module found for ${formatTitleToCamelCase(city)}`
      );
    }
    return tours;
  } catch (error) {
    console.error(`Error loading tours for city ${city}:`, error);
    return [];
  }
}

/**
 * Gets a specific tour by its ID
 *
 * @param city The city ID in kebab-case
 * @param tourId The tour ID
 * @returns The tour object or null if not found
 */
export async function getTourById(
  city: string,
  tourId: string
): Promise<Tour | null> {
  try {
    const cityTours = await getCityTours(city);
    return cityTours.find((tour) => tour.id === tourId) || null;
  } catch (error) {
    console.error(`Error getting tour ${tourId} for city ${city}:`, error);
    return null;
  }
}

/**
 * Creates a tour module structure for a city
 * This is mainly used for development and testing
 *
 * @param city The city name
 * @param tours Array of tours
 * @returns An object with the correct module structure
 */
export function createTourModule(
  city: string,
  tourType: string,
  tours: Tour[]
) {
  const cityCamelCase = formatKebabToCamelCase(city);
  const firstUpperTourType =
    tourType.charAt(0).toUpperCase() + tourType.slice(1);
  const moduleId = `${cityCamelCase}${firstUpperTourType}Tours`;

  return {
    [moduleId]: tours,
  };
}

/**
 * Gets all tours
 *
 * @returns An array of all tours
 */
export async function getAllTours(): Promise<Tour[]> {
  const tours: Tour[] = [];
  try {
    for (const cityFile of cityFiles) {
      const country = cityCountryMap[cityFile as keyof typeof cityCountryMap];
      const region =
        cityToRegionMap[cityFile as keyof typeof cityToRegionMap] || "";
      const formattedCity = formatKebabToCamelCase(cityFile);
      const formattedCountry = formatTitleToCamelCase(country);

      // Remove spaces and format region correctly
      const formattedRegion = formatTitleToCamelCase(region);

      const tourId = `${formattedCity}${formattedCountry.replaceAll(".", "")}${formattedRegion}Tours`;

      // Log the city we're processing and constructed tourId
      console.log(
        `Processing city: ${cityFile}, looking for tourId: ${tourId}`
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
            `Failed to import from tours directory: ${
              importError instanceof Error
                ? importError.message
                : "Unknown error"
            }`
          );
          try {
            cityModule = await import(`@/lib/constants/tours/${cityFile}`);
            console.log(
              `Successfully imported from tours directory (fallback)`
            );
          } catch (secondImportError) {
            console.error(`Failed both import attempts for ${cityFile}`);
            continue; // Skip this city and move to next one
          }
        }

        // Debug: Print all exported keys from the module
        console.log(
          `Available keys in module for ${cityFile}:`,
          Object.keys(cityModule)
        );

        if (cityModule[tourId]) {
          console.log(
            `Found ${cityModule[tourId].length} tours for ${cityFile}`
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
              `No tours found for city: ${cityFile}, tried IDs: ${tourId}, ${alternativeId}`
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
