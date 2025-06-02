import { Details, Flags } from "@/lib/types/types";

export interface CityAttractions {
  subtitle?: string;
  isPopular?: boolean;
  quote?: string;
  city: string;
  state?: string;
  region: string;
  country: string;
}

export interface BaseAttraction {
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  openingHours?: string;
  entryFee?: string;
  entryFeeCategory?: "free" | "budget" | "moderate" | "expensive" | "luxury";
  priceRange: "$" | "$$" | "$$$" | "$$$$" | "free";
  priceCategory: "free" | "budget" | "moderate" | "expensive" | "luxury";
  timeOfDay: "all day" | "daytime" | "evening" | "night";
  rating: number;
  tags?: string[];
  accessibilityFeatures?: string[];
}

export type Attraction = BaseAttraction & Flags & Details;
