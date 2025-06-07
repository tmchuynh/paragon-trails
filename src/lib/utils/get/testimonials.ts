import { cityFiles } from "@/lib/constants/info/city";
import { Testimonial } from "@/lib/interfaces/services/testimonials";
import { getCityTours } from "@/lib/utils/get/tours";
import {
  formatKebabToCamelCase,
  formatTitleToCamelCase,
  removeSpecialCharacters,
} from "../format";
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

export async function getTourTestimonialsForCity(
  city: string
): Promise<Testimonial[]> {
  const testimonials: Testimonial[] = [];

  try {
    // First get all tours for this city
    const tours = await getCityTours(city);

    if (!tours || tours.length === 0) {
      console.warn(`No tours found for city ${city}`);
      return [];
    }

    // For each tour found, try to load its testimonials
    for (const tour of tours) {
      try {
        // Convert tour title to camelCase format used in file names
        // E.g. "Panoramic City Tour" -> "panoramicCityTourTestimonials"
        const tourTitleFormatted = formatTitleToCamelCase(tour.title);
        const testimonialFileName = `${removeSpecialCharacters(tourTitleFormatted)}Testimonials`;
        // Import the testimonials module for this specific tour
        const tourModule = await import(
          `@/lib/constants/testimonials/${city}/${testimonialFileName}`
        );

        // Check if the module exported the testimonials
        if (tourModule[testimonialFileName]) {
          const tourTestimonials = tourModule[
            testimonialFileName
          ] as Testimonial[];

          // Add tour name to each testimonial and ensure rating exists
          testimonials.push(
            ...tourTestimonials.map((t) => ({
              ...t,
              tourName: tour.title,
              rating: t.rating || 4.5, // Default rating if none provided
            }))
          );
        } else {
          console.warn(
            `No testimonials exported from module for tour "${tour.title}"`
          );
        }
      } catch (error) {
        console.warn(
          `Error loading testimonials for tour "${tour.title}": ${error}`
        );
      }
    }

    return testimonials;
  } catch (error) {
    console.error(`Error loading tour testimonials for city ${city}:`, error);
    return [];
  }
}
