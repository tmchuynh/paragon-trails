import { AttractionTags, Details, Flags } from "@/lib/types/types";

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
  tags: AttractionTags[];
  accessibilityFeatures?: string[];
}

export type Attraction = BaseAttraction & Flags & Details;
