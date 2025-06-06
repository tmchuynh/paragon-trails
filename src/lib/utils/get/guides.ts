import { cityFiles } from "@/lib/constants/info/city";
import { TourGuide } from "@/lib/interfaces/people/staff";
import { TourRegion, TourType } from "@/lib/interfaces/services/tours";
import { formatKebabToCamelCase } from "../format";

export async function getTourGuides(): Promise<any> {
  try {
    for (const cityFile of cityFiles) {
      const formattedCity = formatKebabToCamelCase(cityFile);
      const guideId = `${formattedCity}Guides`;
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
    const formattedCity = formatKebabToCamelCase(city);
    const guidesModule = await import(
      `@/lib/constants/staff/guides/${formattedCity}`
    );

    const variableName = `${formattedCity}Guides`;

    if (guidesModule[variableName]) {
      const guide = guidesModule[variableName].find(
        (g: TourGuide) => g.id === guideId
      );
      if (guide) {
        return guide;
      } else {
        console.error(`Tour guide with ID ${guideId} not found`);
        return null;
      }
    } else {
      console.error(`No guides found for city: ${city}`);
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
        formatKebabToCamelCase(guide.city) === formattedCity
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
  regions: TourRegion[]
): Promise<TourGuide[]> {
  try {
    const guides = await getTourGuides();
    const filteredGuides = guides.filter((guide: TourGuide) =>
      regions.some((region) => guide.regionsCovered.includes(region))
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
  tourTypes: TourType[]
): Promise<TourGuide[]> {
  try {
    const guides = await getTourGuides();
    const filteredGuides = guides.filter((guide: TourGuide) =>
      tourTypes.some((type) => guide.tourTypes.includes(type))
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
  licenseNumber: string
): Promise<TourGuide | null> {
  try {
    const guides = await getTourGuides();
    const guide = guides.find(
      (g: { licenseNumber: string }) =>
        g.licenseNumber.toLowerCase() === licenseNumber.toLowerCase()
    );
    if (guide) {
      return guide;
    } else {
      console.error(
        `Tour guide with license number ${licenseNumber} not found`
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
  day: string
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
  language: string
): Promise<TourGuide[]> {
  try {
    const guides = await getTourGuides();
    const filteredGuides = guides.filter((guide: TourGuide) =>
      guide.languages.includes(language)
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
  specialization: string
): Promise<TourGuide[]> {
  try {
    const guides = await getTourGuides();
    const filteredGuides = guides.filter((guide: TourGuide) =>
      guide.specialties?.includes(specialization)
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
  maxYears?: number
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
        `No guides found with experience between ${minYears} and ${maxYears || "∞"} years`
      );
      return [];
    }
  } catch (error) {
    console.error(`Error loading guides by experience: ${error}`);
    return [];
  }
}
