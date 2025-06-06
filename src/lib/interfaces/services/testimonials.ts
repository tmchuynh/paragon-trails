export interface Testimonial {
  id: string; // Unique identifier for the testimonial
  quote: string;
  author: string;
  title: string;
  city?: string; // Optional city where the testimonial is from
  rating?: number; // Optional rating given by the author
  date?: string; // Optional date of the testimonial
}
