import { currencyRates } from "../constants/info/general";

export interface City {
  city: string;
  region?: string;
  state?: string;
  country: string;
  quote?: string; // Optional quote for the city
  subtitle?: string; // Optional subtitle for the city
  isPopular?: boolean; // Optional flag to indicate if the city is popular
}

// Set up types for our filters and sorting
export type SortField = "city" | "country" | "region" | "price" | "duration";
export type SortDirection = "asc" | "desc";
export type Currency = keyof typeof currencyRates;
