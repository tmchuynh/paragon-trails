import { Flags, Details } from "@/lib/types/types";
import { WeeklyAvailability } from "../people/staff";

export interface BaseAttraction {
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  openingHoursDetailed?: WeeklyAvailability[];
  entryFee?: string;
  entryFeeCategory?: "free" | "budget" | "moderate" | "expensive" | "luxury";
  priceRange: "$" | "$$" | "$$$" | "$$$$" | "free";
  priceCategory: "free" | "budget" | "moderate" | "expensive" | "luxury";
  timeOfDay: "all day" | "daytime" | "evening" | "night";
  rating: number;
  tags: string[];
  accessibilityFeatures?: string[];
  entryFees?: EntryFeeDetail[];
  features?: string[];
}

export type Attraction = BaseAttraction & Flags & Details;

interface EntryFeeDetail {
  category: string;
  priceRange: string;
  priceCategory?: string;
}
