import { cityFiles } from "@/lib/constants/info/city";
import { TourGuide } from "@/lib/interfaces/people/staff";
import { TourRegion, TourType } from "@/lib/interfaces/services/tours";
import {
  formatKebabToCamelCase,
  formatTitleCaseToKebabCase,
  formatTitleToCamelCase,
  formatCamelCaseToTitle,
} from "../format";
import { cityCountryMap, cityToRegionMap } from "@/lib/utils/mapping";
import { Testimonial } from "@/lib/interfaces/services/testimonials";

export async function getTourGuides(): Promise<any> {
  const tourGuides: TourGuide[] = [];
  try {
    for (const cityFile of cityFiles) {
      const formattedCity = formatKebabToCamelCase(cityFile);
      const country = cityCountryMap[cityFile as keyof typeof cityCountryMap];
      const region = cityToRegionMap[cityFile as keyof typeof cityToRegionMap];

      const formattedCountry = formatTitleToCamelCase(country);

      const formattedRegion = formatTitleToCamelCase(region);

      const guideId = `${formattedCity}${formattedCountry.replaceAll(".", "")}${formattedRegion}Guides`;
      const guidesModule = await import(
        `@/lib/constants/staff/guides/${cityFile}`
      );
      if (guidesModule[guideId]) {
        tourGuides.push(guidesModule[guideId]);
      } else {
        console.error(`No guides found for city: ${formattedCity}`);
        return [];
      }
    }
  } catch (error) {
    console.error(`Error loading tour guides: ${error}`);
    return [];
  } finally {
    return tourGuides.flat();
  }
}

export async function getTourGuideById(
  city: string,
  guideId: string
): Promise<TourGuide | null> {
  const formattedCity = formatKebabToCamelCase(city);
  const country = cityCountryMap[city as keyof typeof cityCountryMap];
  const region = cityToRegionMap[city as keyof typeof cityToRegionMap];
  const formattedCountry = formatTitleToCamelCase(country);
  const formattedRegion = formatTitleToCamelCase(region);

  console.log("City:", city);
  console.log(`Loading tour guide by ID for city: ${formattedCity}`);
  console.log(`Searching for guide ID: ${guideId}`);
  const variableName = `${formattedCity}${formattedCountry.replaceAll(".", "")}${formattedRegion}Guides`;

  try {
    const guidesModule = await import(`@/lib/constants/staff/guides/${city}`);

    if (guidesModule[variableName]) {
      const guides = guidesModule[variableName] as TourGuide[];
      const guide = guides.find((g) => g.id === guideId);
      if (guide) {
        return guide;
      } else {
        console.error(`Guide with ID ${guideId} not found in ${city}`);
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
      (guide: { city: string }) => formatKebabToCamelCase(guide.city) === city
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

/**
 * Get reviews for a specific tour guide
 */
export async function getTourGuideReviews(
  city: string,
  guideId: string
): Promise<Testimonial[]> {
  const formattedCity = formatTitleToCamelCase(city);
  const variableName = `${formattedCity}GuideReviews`;

  console.log("city:", city);
  console.log("formattedCity:", formattedCity);
  console.log("variableName:", variableName);

  try {
    const reviewsModule = await import(
      `@/lib/constants/testimonials/guides/${formattedCity}`
    );

    if (reviewsModule[variableName] && reviewsModule[variableName][guideId]) {
      return reviewsModule[variableName][guideId];
    } else {
      console.error(`No reviews found for guide ${guideId} in ${city}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading guide reviews: ${error}`);
    return [];
  }
}

/**
 * Get average rating for a specific tour guide based on reviews
 */
export async function getTourGuideAverageRating(
  city: string,
  guideId: string
): Promise<number> {
  try {
    const reviews = await getTourGuideReviews(city, guideId);
    if (reviews.length === 0) return 0;

    const totalRating = reviews.reduce(
      (sum, review) => sum + (review.rating || 0),
      0
    );
    return parseFloat((totalRating / reviews.length).toFixed(1));
  } catch (error) {
    console.error(`Error calculating average rating: ${error}`);
    return 0;
  }
}

/**
 * Get all reviews for all guides in a city
 */
export async function getAllGuideReviewsByCity(
  city: string
): Promise<Record<string, Testimonial[]>> {
  const formattedCity = formatKebabToCamelCase(city);
  const variableName = `${formattedCity}GuideReviews`;

  try {
    const reviewsModule = await import(
      `@/lib/constants/testimonials/guides/${city}`
    );

    if (reviewsModule[variableName]) {
      return reviewsModule[variableName];
    } else {
      console.error(`No reviews found for city: ${city}`);
      return {};
    }
  } catch (error) {
    console.error(`Error loading city guide reviews: ${error}`);
    return {};
  }
}
