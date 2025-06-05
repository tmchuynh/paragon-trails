export interface City {
  city: string;
  region?: string;
  state?: string;
  country: string;
  quote?: string; // Optional quote for the city
  subtitle?: string; // Optional subtitle for the city
  isPopular?: boolean; // Optional flag to indicate if the city is popular
}
