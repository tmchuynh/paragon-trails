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

export async function getTestimonialsForCity(
  city: string
): Promise<Testimonial[]> {
  const formattedCity = formatKebabToCamelCase(city);
  const testimonialId = `${formattedCity}Testimonials`;
  try {
    const cityModule = await import(`@/lib/constants/testimonials/${city}.ts`);

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
    // Import all tour testimonial files for the city
    const cityModule = await import(`@/lib/constants/testimonials/${city}`);

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
    console.error(`Error loading tour testimonials for city ${city}:`, error);
    return [];
  }
}
