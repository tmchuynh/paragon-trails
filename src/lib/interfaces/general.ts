import { currencyRates } from "../constants/info/general";
import { BaseAttraction } from "./services/attractions";
import { Testimonial } from "./services/testimonials";

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
export type SortField =
  | "city"
  | "country"
  | "region"
  | "price"
  | "duration"
  | "rating";
export type SortDirection = "asc" | "desc";
export type Currency = keyof typeof currencyRates;

export interface CityInfo extends City {
  id: string; // Unique identifier for the city
  coordinates?: { lat: number; lng: number };
  imageUrl: string;
  rating: number;
  description: string;
  population?: number;
  timeZone?: string;
  isEcoCertified?: boolean;
  currency?: string;
  priceCategory: "budget" | "moderate" | "luxury";
  languagesSpoken?: string[];
  tags?: string[]; // e.g. ["urban", "historic", "coastal"]
  climate?: string;
  localDialingCode?: string;
  topAttractions?: BaseAttraction["id"];
  services?: CityServices;
  testimonials?: Testimonial[];
}

export interface CityServices {
  carRentalAvailable: boolean;
  motorcycleRentalAvailable: boolean;
  yachtRentalAvailable: boolean;
  airportTransfers?: boolean;
  localTransitPasses?: boolean;
}
