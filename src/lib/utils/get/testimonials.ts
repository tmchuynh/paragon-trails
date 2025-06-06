import { Testimonial } from "@/lib/interfaces/services/testimonials";
import { cityFiles } from "@/lib/constants/info/city";

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

export async function getCityTestimonials(
  city: string,
): Promise<Testimonial[]> {
  try {
    const formattedCity = city.replace(/-/g, "");
    const testimonialId = `${formattedCity}Testimonials`;
    const cityModule = await import(
      `@/lib/constants/testimonials/${formattedCity}`
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
