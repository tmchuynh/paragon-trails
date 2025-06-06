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
    return tours.filter((tour: { languagesOffered: string | string[] }) =>
      tour.languagesOffered.includes(language)
    );
  } catch (error) {
    console.error(
      `Error filtering tours by language ${language} in city ${city}: ${error}`
    );
    return [];
  }
}

export async function getTourByType(city: string, type: string): Promise<Tour[]> {
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

export async function getTourByPrice(city: string, maxPrice: number): Promise<Tour[]> {
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

  // Normalize the city name to ensure it matches the keys in cityToRegionMap
  // Remove any trailing slashes, convert to lowercase, and ensure kebab-case format
  const normalizedCity = city
    .toLowerCase()
    .trim()
    .replace(/\/$/, "")
    .replace(/\s+/g, "-");

  const formattedCity = formatKebabToCamelCase(normalizedCity);
  // Look up the region using the normalized city name
  const cityRegion =
    cityToRegionMap[normalizedCity as keyof typeof cityToRegionMap];
  if (!cityRegion) {
    // Try to fallback to a substring match if exact match fails
    const possibleCity = Object.keys(cityToRegionMap).find((key) =>
      normalizedCity.includes(key)
    );
    if (possibleCity) {
      const region =
        cityToRegionMap[possibleCity as keyof typeof cityToRegionMap];
      console.log(
        `Found region ${region} using fallback city: ${possibleCity}`
      );
      const formattedRegion = formatTitleToCamelCase(region);
      return findTourInModule(
        formattedCity,
        formattedRegion,
        tourId,
        normalizedCity
      );
    }
    return null;
  }

  const formattedRegion = formatTitleToCamelCase(cityRegion);

  return findTourInModule(
    formattedCity,
    formattedRegion,
    tourId,
    normalizedCity
  );
}

// Helper function to find a tour in the appropriate module
async function findTourInModule(
  formattedCity: string,
  formattedRegion: string,
  tourId: string,
  normalizedCity: string
): Promise<any> {
  const tourIdFormatted = `${formattedCity}${formattedRegion}Tours`;
  console.log(`Looking for tour ID format: ${tourIdFormatted}`);

  try {
    let tourModule;
    try {
      // Try the first path format
      tourModule = await import(`@/lib/constants/tours/${formattedCity}`);
      console.log(`Loaded tour module from /constants/tours/${formattedCity}`);
    } catch (importError) {
      // Try alternative path
      try {
        tourModule = await import(`@/lib/constants/tours/${normalizedCity}`);
        console.log(
          `Loaded tour module from /constants/tours/${normalizedCity}`
        );
      } catch (secondError) {
        console.error(
          `Failed to import tour module for ${formattedCity}:`,
          secondError
        );
        return null;
      }
    }

    // Try various possible export names
    const possibleExportNames = [
      tourIdFormatted,
      `${formattedCity}Tours`,
      `${normalizedCity}Tours`,
      `${formattedCity}${formattedRegion.toLowerCase()}Tours`,
      `${formattedCity}italymediterraneanTours`, // Special case for amalfi-coast
    ];

    for (const exportName of possibleExportNames) {
      console.log(`Trying to find tours in export: ${exportName}`);
      if (tourModule[exportName]) {
        const tours = tourModule[exportName] as Tour[];
        const foundTour = tours.find((tour) => tour.id === tourId);
        if (foundTour) {
          console.log(`Found tour with ID ${tourId} in export ${exportName}`);
          return foundTour;
        }
      }
    }

    // Try an alternative format that includes the country
    const country =
      cityCountryMap[normalizedCity as keyof typeof cityCountryMap];
    if (country) {
      const formattedCountry = formatTitleToCamelCase(country);
      const alternativeId = `${formattedCity}${formattedCountry}${formattedRegion}Tours`;

      if (tourModule[alternativeId]) {
        const tours = tourModule[alternativeId] as Tour[];
        const foundTour = tours.find((tour) => tour.id === tourId);
        return foundTour || null;
      }
    }

    console.warn(
      `No tours found for city ${normalizedCity} with any known ID format`
    );
    return null;
  } catch (error) {
    console.error(`Error loading tours for city ${normalizedCity}: ${error}`);
    return null;
  }
}
