import { cityFiles } from "@/lib/constants/info/city";
import { Testimonial } from "@/lib/interfaces/services/testimonials";
import { getCityTours } from "@/lib/utils/get/tours";
import { formatKebabToCamelCase, formatTitleToCamelCase } from "../format";
import { cityCountryMap, cityToRegionMap } from "@/lib/utils/mapping";
import { Tour } from "@/lib/interfaces/services/tours";

export async function getAllTestimonials(): Promise<any> {
  const testimonials: Testimonial[] = [];
  try {
    for (const cityFile of cityFiles) {
      const formattedCity = cityFile.replace(/-/g, "");
      const testimonialId = `${formattedCity}Testimonials`;
      const cityModule = await import(
        `@/lib/constants/testimonials/${cityFile}`
      );

      if (cityModule[testimonialId]) {
        testimonials.push(...(cityModule[testimonialId] as Testimonial[]));
      } else {
        console.error(`No testimonials found for city: ${cityFile}`);
      }
    }
  } catch (error) {
    console.error(`Error loading city testimonials: ${error}`);
  } finally {
    testimonials.push(...testimonials);
  }
}

export async function getTestimonialsForCity(
  city: string
): Promise<Testimonial[]> {
  const formattedCity = city.replace(" ", "").toLowerCase();
  const testimonialId = `${formattedCity}Testimonials`;
  try {
    const cityModule = await import(
      `@/lib/constants/cityTestimonials/${testimonialId}.ts`
    );

    if (cityModule[testimonialId]) {
      return cityModule[testimonialId] as Testimonial[];
    } else {
      console.error(`No testimonials found for city: ${city}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading testimonials for city ${city}: ${error}`);
    return [];
  }
}

export async function getTourTestimonialsForCity(city: string): Promise<any> {
  const testimonials: Testimonial[] = [];

  const allTours: Tour[] = [];

  console.log(`Loading tour testimonials for city: ${city}`);

  const cityRegion = cityToRegionMap[city as keyof typeof cityToRegionMap];
  const country = cityCountryMap[city as keyof typeof cityCountryMap];
  const formattedCity = formatKebabToCamelCase(city);
  const formattedRegion = formatTitleToCamelCase(cityRegion);
  const formattedCountry = formatTitleToCamelCase(country);
  const tourId = `${formattedCity}${formattedCountry.replaceAll(".", "")}${formattedRegion}Tours`;

  try {
    const tours = await getCityTours(city);
    if (tours.length > 0) {
      allTours.push(...tours);
    } else {
      console.warn(`No tours found for city ${city} with ID ${tourId}`);
    }
  } catch (error) {
    console.error(`Error loading tours for city ${city}:`, error);
    return [];
  }
  // Log the total number of tours loaded for the city
  if (allTours.length === 0) {
    console.warn(`No tours found for city ${city} with ID ${tourId}`);
    return [];
  }
  // Log the total number of tours loaded for the city
  allTours.sort((a, b) => a.title.localeCompare(b.title));
  allTours.forEach((tour) => {
    console.log(`Tour ID: ${tour.id}, Title: ${tour.title}`);
  });

  console.log(`Total tours loaded for city ${city}: ${allTours.length}`);

  if (allTours.length > 0) {
    for (const tour of allTours) {
      const tourFormatted = `${formatTitleToCamelCase(tour.title)}Testimonials`;
      try {
        // Import all tour testimonial files for the city
        const cityModule = await import(
          `@/lib/constants/testimonials/${city}/tourFormatted`
        );

        // Find all exports that end with "TourTestimonials"
        const tourTestimonialKeys = Object.keys(cityModule).filter((key) =>
          key.endsWith("TourTestimonials")
        );

        // Merge all tour testimonials
        for (const key of tourTestimonialKeys) {
          const tourTestimonials = cityModule[key] as Testimonial[];

          // Add tour name to each testimonial based on the key name
          const tourName = key
            .replace(/TourTestimonials$/, "")
            .replace(/([A-Z])/g, " $1")
            .trim();

          // Add tour testimonials with tour name
          testimonials.push(
            ...tourTestimonials.map((t) => ({
              ...t,
              tourName,
              rating: t.rating || 4.5, // Default rating if none exists
            }))
          );
        }

        return testimonials;
      } catch (error) {
        console.error(
          `Error loading tour testimonials for city ${city}:`,
          error
        );
        return [];
      }
    }
    console.log(
      `Total tour testimonials loaded for city ${city}: ${testimonials.length}`
    );
    return testimonials;
  }
}
