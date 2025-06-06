import { cityFiles } from "@/lib/constants/info/city";
import { TourGuide } from "@/lib/interfaces/people/staff";
import { TourRegion, TourType } from "@/lib/interfaces/services/tours";
import {
  formatKebabToCamelCase,
  formatTitleCaseToKebabCase,
  formatTitleToCamelCase,
} from "../format";
import { cityCountryMap, cityToRegionMap } from "@/lib/utils/mapping";

export async function getTourGuides(): Promise<any> {
  try {
    for (const cityFile of cityFiles) {
      const formattedCity = formatKebabToCamelCase(cityFile);
      const country = cityCountryMap[cityFile as keyof typeof cityCountryMap];
      const region = cityToRegionMap[cityFile as keyof typeof cityToRegionMap];

      const formattedCountry = formatTitleToCamelCase(country);

      const formattedRegion = formatTitleToCamelCase(region);

      const guideId = `${formattedCity}${formattedCountry.replaceAll(".", "")}${formattedRegion}Guides`;
      const guidesModule = await import(
        `@/lib/constants/staff/guides/${formattedCity}`
      );
      if (guidesModule[guideId]) {
        return guidesModule[guideId];
      } else {
        console.error(`No guides found for city: ${cityFile}`);
        return [];
      }
    }
  } catch (error) {
    console.error(`Error loading tour guides: ${error}`);
    return [];
  }
}

export async function getTourGuideById(
  city: string,
  guideId: string
): Promise<TourGuide | null> {
  try {
    // Clean up and normalize the city name (removing slashes and extra spaces)
    const cleanCity = city.replace(/\//g, "").trim();
    console.log(`Looking for guide with ID ${guideId} in city ${cleanCity}`);

    // Format the city name to kebab-case for the file path
    const formattedCity = formatTitleCaseToKebabCase(cleanCity);
    console.log(`Formatted city for file path: ${formattedCity}`);

    // Try to import the guides module
    try {
      const guidesModule = await import(
        `@/lib/constants/staff/guides/${formattedCity}`
      );

      // Get all export names from the module to help with debugging
      const exportNames = Object.keys(guidesModule);
      console.log(`Found exports in guides module: ${exportNames.join(", ")}`);

      // Try to get country and region info
      const country =
        cityCountryMap[cleanCity as keyof typeof cityCountryMap] ||
        cityCountryMap[formattedCity as keyof typeof cityCountryMap];
      const region =
        cityToRegionMap[cleanCity as keyof typeof cityToRegionMap] ||
        cityToRegionMap[formattedCity as keyof typeof cityToRegionMap];

      if (!country || !region) {
        console.error(
          `Could not find country or region mapping for city: ${cleanCity}`
        );
      }

      console.log(`City: ${cleanCity}, Country: ${country}, Region: ${region}`);

      // Try all possible variable name formats that could exist in the module
      const formattedCountry = country ? formatTitleToCamelCase(country) : "";
      const formattedRegion = region ? formatTitleToCamelCase(region) : "";

      // Create different possible variable name patterns
      const possibleVariableNames = [
        // Standard format from the function
        `${formattedCity}${formattedCountry.replaceAll(".", "")}${formattedRegion}Guides`,
        // Format seen in amsterdam.ts
        `${formattedCity}${formattedCountry.toLowerCase()}${formattedRegion.toLowerCase()}Guides`,
        // Simple format with just the city name
        `${formattedCity}Guides`,
        // Try with camelCase city
        `${formatKebabToCamelCase(formattedCity)}${formattedCountry}${formattedRegion}Guides`,
        // Other possible combinations
        `${formattedCity}${formattedCountry}Guides`,
        `${formattedCity}${formattedRegion}Guides`,
      ];

      console.log(
        `Trying these variable names: ${possibleVariableNames.join(", ")}`
      );

      // Try each possible variable name
      for (const varName of possibleVariableNames) {
        if (guidesModule[varName]) {
          console.log(`Found guides data with export name: ${varName}`);
          const guide = guidesModule[varName].find(
            (g: TourGuide) => g.id === guideId
          );

          if (guide) {
            console.log(`Found guide: ${guide.name} with ID ${guideId}`);
            return guide;
          }
        }
      }

      // If we get here, we've tried all variable names but found nothing
      console.error(
        `No matching export found in ${formattedCity} guides module for guide ID ${guideId}`
      );
      return null;
    } catch (importError) {
      console.error(
        `Failed to import guides for ${formattedCity}:`,
        importError
      );
      return null;
    }
  } catch (error) {
    console.error(`Error loading tour guide by ID: ${error}`);
    return null;
  }
}

export async function getTourGuide(name: string): Promise<TourGuide | null> {
  try {
    const guides = await getTourGuides();
    const guide = guides.find((g: { name: string }) => g.name === name);
    if (guide) {
      return guide;
    } else {
      console.error(`Tour guide with name ${name} not found`);
      return null;
    }
  } catch (error) {
    console.error(`Error loading tour guide: ${error}`);
    return null;
  }
}

export async function getTourGuidesByCity(city: string): Promise<TourGuide[]> {
  try {
    const guides = await getTourGuides();
    const formattedCity = formatKebabToCamelCase(city);
    const guidesInCity = guides.filter(
      (guide: { city: string }) =>
        formatKebabToCamelCase(guide.city) === formattedCity,
    );
    if (guidesInCity.length > 0) {
      return guidesInCity;
    } else {
      console.error(`No guides found in ${city}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading guides for ${city}: ${error}`);
    return [];
  }
}

export async function getTourGuidesByRegionsCovered(
  regions: TourRegion[],
): Promise<TourGuide[]> {
  try {
    const guides = await getTourGuides();
    const filteredGuides = guides.filter((guide: TourGuide) =>
      regions.some((region) => guide.regionsCovered.includes(region)),
    );
    if (filteredGuides.length > 0) {
      return filteredGuides;
    } else {
      console.error(`No guides found for regions: ${regions.join(", ")}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading guides by regions: ${error}`);
    return [];
  }
}

export async function getTourGuidesByTourTypes(
  tourTypes: TourType[],
): Promise<TourGuide[]> {
  try {
    const guides = await getTourGuides();
    const filteredGuides = guides.filter((guide: TourGuide) =>
      tourTypes.some((type) => guide.tourTypes.includes(type)),
    );
    if (filteredGuides.length > 0) {
      return filteredGuides;
    } else {
      console.error(`No guides found for tour types: ${tourTypes.join(", ")}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading guides by tour types: ${error}`);
    return [];
  }
}

export async function getTourGuideByLicenseNumber(
  licenseNumber: string,
): Promise<TourGuide | null> {
  try {
    const guides = await getTourGuides();
    const guide = guides.find(
      (g: { licenseNumber: string }) =>
        g.licenseNumber.toLowerCase() === licenseNumber.toLowerCase(),
    );
    if (guide) {
      return guide;
    } else {
      console.error(
        `Tour guide with license number ${licenseNumber} not found`,
      );
      return null;
    }
  } catch (error) {
    console.error(`Error loading tour guide by license number: ${error}`);
    return null;
  }
}

export async function getTourGuideAvailableInCity(
  city: string,
  day: string,
): Promise<TourGuide[]> {
  try {
    const guides = await getTourGuidesByCity(city);
    const guidesInCity = guides.filter((guide: TourGuide) => {
      return guide.available.some((availability) => {
        return availability.day.toLowerCase() === day.toLowerCase();
      });
    });
    if (guidesInCity.length > 0) {
      return guidesInCity;
    } else {
      console.error(`No available guides found in ${city}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading available guides for ${city}: ${error}`);
    return [];
  }
}

export async function getTourGuideBySpeakingLanguage(
  language: string,
): Promise<TourGuide[]> {
  try {
    const guides = await getTourGuides();
    const filteredGuides = guides.filter((guide: TourGuide) =>
      guide.languages.includes(language),
    );
    if (filteredGuides.length > 0) {
      return filteredGuides;
    } else {
      console.error(`No guides found speaking ${language}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading guides by language: ${error}`);
    return [];
  }
}

export async function getTourGuideBySpecialization(
  specialization: string,
): Promise<TourGuide[]> {
  try {
    const guides = await getTourGuides();
    const filteredGuides = guides.filter((guide: TourGuide) =>
      guide.specialties?.includes(specialization),
    );
    if (filteredGuides.length > 0) {
      return filteredGuides;
    } else {
      console.error(`No guides found with specialization ${specialization}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading guides by specialization: ${error}`);
    return [];
  }
}

export async function getTourGuideByExperienceYears(
  minYears: number,
  maxYears?: number,
): Promise<TourGuide[]> {
  try {
    const guides = await getTourGuides();
    const filteredGuides = guides.filter((guide: TourGuide) => {
      const years = guide.experienceYears || 0;
      return years >= minYears && (maxYears ? years <= maxYears : true);
    });
    if (filteredGuides.length > 0) {
      return filteredGuides;
    } else {
      console.error(
        `No guides found with experience between ${minYears} and ${maxYears || "∞"} years`,
      );
      return [];
    }
  } catch (error) {
    console.error(`Error loading guides by experience: ${error}`);
    return [];
  }
}
