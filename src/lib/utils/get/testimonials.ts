import { testimonialsByCity } from "@/lib/constants/cityTestimonials";
import { cityFiles } from "@/lib/constants/info/city";
import { Testimonial } from "@/lib/interfaces/services/testimonials";
import { formatKebabToCamelCase } from "../format";

export async function getAllTestimonials(): Promise<Testimonial[]> {
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
    return testimonials;
  }
}

/**
 * Retrieves all testimonials for a specific city
 *
 * @param city - The city to get testimonials for (in kebab-case format)
 * @returns Array of testimonials for the city, or empty array if none found
 */
export async function getCityTestimonials(
  city: string
): Promise<Testimonial[]> {
  try {
    // Normalize the city name for consistent lookup
    const normalizedCity = city.toLowerCase().trim().replace(/\s+/g, "-");

    // Check if we have testimonials for this city in our map
    if (testimonialsByCity[normalizedCity]) {
      return testimonialsByCity[normalizedCity];
    }

    // If not in the map, try to dynamically import
    try {
      const formattedCity = formatKebabToCamelCase(normalizedCity);
      const testimonialModule = await import(
        `@/lib/constants/cityTestimonials/${formattedCity}Testimonials`
      );

      if (testimonialModule[`${formattedCity}Testimonials`]) {
        return testimonialModule[`${formattedCity}Testimonials`];
      }
    } catch (importError) {
      console.warn(`No testimonials found for ${city}`, importError);
    }

    // Return empty array if no testimonials found
    return [];
  } catch (error) {
    console.error(`Error fetching testimonials for ${city}:`, error);
    return [];
  }
}

/**
 * Gets a testimonial by its unique ID
 *
 * @param id - The unique ID of the testimonial
 * @returns The testimonial if found, or null
 */
export async function getTestimonialById(
  id: string
): Promise<Testimonial | null> {
  try {
    // Extract the city from the ID format "city-testimonial-{city}-{number}"
    const match = id.match(/city-testimonial-([\w-]+)-\d+/);
    if (!match) return null;

    const city = match[1];
    const cityTestimonials = await getCityTestimonials(city);

    return (
      cityTestimonials.find((testimonial) => testimonial.id === id) || null
    );
  } catch (error) {
    console.error(`Error getting testimonial by ID ${id}:`, error);
    return null;
  }
}

/**
 * Gets featured or highlighted testimonials across all cities
 *
 * @param count - Number of testimonials to return (default: 5)
 * @returns Array of featured testimonials
 */
export async function getFeaturedTestimonials(
  count: number = 5
): Promise<Testimonial[]> {
  try {
    const allTestimonials: Testimonial[] = [];

    // Get some cities from the testimonials map
    const cities = Object.keys(testimonialsByCity).slice(0, 10);

    // Get testimonials from each city
    for (const city of cities) {
      const cityTestimonials = await getCityTestimonials(city);
      if (cityTestimonials.length > 0) {
        // Just take one testimonial per city with high ratings
        const bestTestimonial = cityTestimonials
          .filter((t) => t.rating && t.rating >= 4.5)
          .sort((a, b) => (b.rating || 0) - (a.rating || 0))[0];

        if (bestTestimonial) {
          allTestimonials.push(bestTestimonial);
        }
      }

      // Break if we have enough testimonials
      if (allTestimonials.length >= count) break;
    }

    // If we don't have enough, fill with whatever we can get
    if (allTestimonials.length < count) {
      for (const city of cities) {
        if (allTestimonials.length >= count) break;

        const cityTestimonials = await getCityTestimonials(city);
        for (const testimonial of cityTestimonials) {
          // Skip testimonials we already have
          if (!allTestimonials.includes(testimonial)) {
            allTestimonials.push(testimonial);
            if (allTestimonials.length >= count) break;
          }
        }
      }
    }

    return allTestimonials.slice(0, count);
  } catch (error) {
    console.error("Error getting featured testimonials:", error);
    return [];
  }
}
