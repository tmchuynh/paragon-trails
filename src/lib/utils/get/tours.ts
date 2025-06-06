import { cityFiles } from "@/lib/constants/info/city";
import { Tour } from "@/lib/interfaces/services/tours";
import { cityCountryMap, cityToRegionMap } from "@/lib/utils/mapping";
import { formatKebabToCamelCase, formatTitleToCamelCase } from "../format";

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
            cityModule = await import(
              `@/lib/constants/destinations/city/${cityFile}`
            );
            console.log(
              `Successfully imported from destinations/city directory`
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

export async function getCityTours(city: string): Promise<any> {
  const allTours: Tour[] = [];

  for (const cityFile of cityFiles) {
    try {
      const tourModule = await import(
        `@/lib/constants/destinations/city/${cityFile}`
      );

      const cityRegion =
        cityToRegionMap[cityFile as keyof typeof cityToRegionMap];
      const formattedCity = formatKebabToCamelCase(cityFile);
      const formattedRegion = formatTitleToCamelCase(cityRegion);

      const tourId = `${formattedCity}${formattedRegion}Tours`;

      if (tourModule[tourId]) {
        const tours = tourModule[tourId] as Tour[];
        const filteredTours = tours.filter((tour) => tour.city === city);
        allTours.push(...filteredTours);
      } else {
        console.warn(
          `No tours found for city ${city} in module ${cityFile} with ID ${tourId}`
        );
      }
    } catch (error) {
      console.error(
        `Error loading tours for city ${city} from module ${cityFile}: ${error}`
      );
      return [];
    } finally {
      console.log(`Total tours loaded for city ${city}: ${allTours.length}`);
      return [];
    }
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
    return tours.filter(
      (tour: { price: string }) => parseFloat(tour.price) <= maxPrice
    );
  } catch (error) {
    console.error(
      `Error filtering tours by price ${maxPrice} in city ${city}: ${error}`
    );
    return [];
  }
}

export async function getTourById(city: string, tourId: string): Promise<any> {
  console.log(`Fetching tour with ID: ${tourId} for city: ${city}`);
  const formattedCity = formatKebabToCamelCase(city);

  console.log(`Formatted city: ${formattedCity}`);

  const cityRegion = cityToRegionMap[city as keyof typeof cityToRegionMap];
  console.log(`City region mapping:`, cityRegion);

  const formattedRegion = formatTitleToCamelCase(cityRegion);

  console.log(`Formatted region: ${formattedRegion}`);

  const tourIdFormatted = `${formattedCity}${formattedRegion}Tours`;

  try {
    const tourModule = await import(`@/lib/constants/tours/${formattedCity}`);

    if (tourModule[tourIdFormatted]) {
      const tours = tourModule[tourIdFormatted] as Tour[];
      const foundTour = tours.find((tour) => tour.id === tourId);
      if (foundTour) {
        return foundTour;
      } else {
        console.warn(
          `Tour with ID ${tourIdFormatted} not found in city ${formattedCity}.`
        );
        return [];
      }
    } else {
      console.warn(
        `No tours found for city ${city} with ID ${tourIdFormatted}`
      );
      return [];
    }
  } catch (error) {
    console.error(`Error loading tours for city ${city}: ${error}`);
    return [];
  }
}
