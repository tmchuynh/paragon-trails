import { Details, Flags } from "@/lib/types/types";
import { WeeklyAvailability } from "../people/staff";

export interface BaseAttraction {
  id: string;
  city: string;
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
    | "regular"
    | "moderate"
    | "midrange"
    | "free (tram extra)"
    | "expensive"
    | "free (guided tours must be booked)"
    | "luxury"
    | "varies";
  priceRange:
    | "$"
    | "£"
    | "$$"
    | "$$$"
    | "$$$$"
    | "Free"
    | "$–$$$"
    | "$$-$$$"
    | "varies"
    | "free"
    | "varies by cruise"
    | "free (ferry ticket required)";
  priceCategory:
    | "free"
    | "low"
    | "cheap"
    | "budget"
    | "moderate"
    | "luxury"
    | "midrange"
    | "mixed"
    | "varies"
    | "expensive";
  timeOfDay:
    | "all day"
    | "daytime"
    | "any"
    | "evening"
    | "night"
    | "nighttime"
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
