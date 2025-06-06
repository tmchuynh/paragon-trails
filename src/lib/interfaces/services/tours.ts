import { Details } from "@/lib/types/types";
import { TourGuide } from "../people/staff";
import { BaseAttraction } from "./attractions";

export interface TourCategory {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  icon: React.ComponentType;
}

export interface Tour extends Details {
  id: string;
  guideId: TourGuide["id"];
  city: string;
  country: string;
  state?: string;
  region: TourRegion;
  languagesOffered: string[];
  durationInHours: number;
  price: string;
  tags: TourTheme[];
  type: TourType;
  schedule: TourSchedule[];
  pricePerPerson: number;
  currency: string;
  maxGroupSize: number;
  minGroupSize?: number;
  privateAvailable?: boolean;
  isPopular?: boolean;
  isPetFriendly?: boolean;
  reviewsCount?: number;
  included: string[];
  notIncluded?: string[];
  requirements: TourRequirement[];
  cancellationPolicy?: string;
}

export type TourRequirement =
  | "Valid ID required"
  | "Passport required"
  | "Minimum age: 18"
  | "Minimum age: 12"
  | "All ages welcome"
  | "Must be 21+ to consume alcohol"
  | "Basic fitness level required"
  | "Advanced fitness level required"
  | "Swimming required"
  | "No mobility restrictions"
  | "Not wheelchair accessible"
  | "Wheelchair accessible"
  | "Stairs involved"
  | "Comfortable walking shoes required"
  | "Weather-appropriate clothing"
  | "No pets allowed"
  | "Service animals permitted"
  | "Photography allowed"
  | "No flash photography"
  | "Dress code enforced"
  | "Government-issued ID for entry"
  | "Pre-booking required"
  | "Tickets must be printed"
  | "E-tickets accepted"
  | "Arrive 15 minutes early"
  | "Signed waiver required"
  | "Parental consent required"
  | "COVID-19 vaccination required"
  | "Face masks required"
  | "Bring own headphones"
  | "Headphones provided"
  | "Language proficiency recommended"
  | "Local SIM card recommended"
  | "Cash only"
  | "Credit/debit cards accepted"
  | "Bring water and snacks";

export type TourTheme =
  | "Adventure"
  | "Art"
  | "Architecture"
  | "Beach"
  | "Culture"
  | "Culinary"
  | "Food & Drink"
  | "Historical"
  | "Hiking"
  | "Local Life"
  | "Nature & Wildlife"
  | "Nightlife"
  | "Photography"
  | "Religious"
  | "Shopping"
  | "Sightseeing"
  | "Spiritual"
  | "Sports"
  | "Wellness"
  | "Wine & Spirits"
  | "Scenic"
  | "Festival"
  | "Music"
  | "Luxury"
  | "Eco"
  | "Family"
  | "Solo"
  | "Romantic"
  | "LGBTQ+ Friendly"
  | "Off the Beaten Path"
  | "Educational"
  | "Volunteer"
  | "Cruise Stop"
  | "Local Market"
  | "Street Food";

export type TourRegion =
  | "Asia Pacific"
  | "Northern Europe"
  | "Mediterranean"
  | "East Coast USA"
  | "South America"
  | "Africa"
  | "Caribbean"
  | "Middle East"
  | "West Coast USA"
  | "East Coast Canada"
  | "Alaska";

export interface TourSchedule {
  attractionId: BaseAttraction["id"];
  dayOfWeek?:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  startTime: string; // "14:00"
  endTime: string; // "17:00"
}

export type TourType =
  | "Walking Tour"
  | "Bike Tour"
  | "Boat Tour"
  | "Food Tour"
  | "Wine Tour"
  | "Brewery Tour"
  | "Cultural Tour"
  | "Historical Tour"
  | "Religious Tour"
  | "Museum Tour"
  | "Nature Tour"
  | "Wildlife Safari"
  | "Photography Tour"
  | "Architecture Tour"
  | "Underground Tour"
  | "Ghost Tour"
  | "Street Art Tour"
  | "Shopping Tour"
  | "Scenic Tour"
  | "Eco Tour"
  | "Adventure Tour"
  | "Off-Road Tour"
  | "Helicopter Tour"
  | "Luxury Tour"
  | "Private Tour"
  | "Group Tour"
  | "Self-Guided Tour"
  | "Audio Tour"
  | "Accessible Tour"
  | "Cruise Excursion"
  | "Festival Tour"
  | "Market Tour"
  | "Farm Visit"
  | "Craft Workshop"
  | "Cooking Class"
  | "Relocation Tour"
  | "LGBTQ+ Friendly Tour"
  | "Family-Friendly Tour"
  | "Romantic Tour";
