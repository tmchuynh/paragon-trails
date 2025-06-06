import { Flags, Details } from "@/lib/types/types";
import { WeeklyAvailability } from "../people/staff";

export interface BaseAttraction {
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  openingHours: WeeklyAvailability[];
  entryFee?: string;
  entryFeeCategory?:
    | "free"
    | "low"
    | "budget"
    | "cheap"
    | "moderate"
    | "free (tram extra)"
    | "expensive"
    | "free (guided tours must be booked)"
    | "luxury"
    | "varies";
  priceRange:
    | "$"
    | "$$"
    | "$$$"
    | "$$$$"
    | "free"
    | "$–$$$"
    | "$$-$$$"
    | "varies"
    | "varies by cruise"
    | "free (ferry ticket required)";
  priceCategory:
    | "free"
    | "low"
    | "cheap"
    | "budget"
    | "moderate"
    | "luxury"
    | "mixed"
    | "varies"
    | "expensive";
  timeOfDay:
    | "all day"
    | "daytime"
    | "evening"
    | "night"
    | "daytime and evening"
    | "day or evening"
    | "sunset and evening"
    | "morning"
    | "afternoon"
    | "varies"
    | "anytime"
    | "24 hours"
    | "seasonal"
    | "year-round"
    | "weekdays"
    | "day or night"
    | "sunset";
  rating: number;
  tags: string[];
  accessibilityFeatures?: string[];
  entryFees: EntryFeeDetail[];
  features: string[];
}

export type Attraction = BaseAttraction & Flags & Details;

interface EntryFeeDetail {
  category: string;
  priceRange: string;
  priceCategory?: string;
}
