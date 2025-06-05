import { TourRegion, TourType } from "../services/tours";

export interface TeamMember {
  name: string;
  certifications?: string[];
  languages: string[];
  experienceYears: number;
  specialties?: string[];
  specialTraining?: string[];
  qualifiedAircraft?: string[];
  responsibilities?: string[];
  availability?: string;
}

export interface StaffCategory {
  category: string;
  profiles: TeamMember[];
}

export interface TourGuide extends TeamMember {
  id: string;
  name: string;
  city: string;
  country: string;
  state?: string;
  region?: string;
  isPopular?: boolean;
  bio: string;
  regionsCovered: TourRegion[];
  tourTypes: TourType[];
  maxGroupSize: number;
  licenseNumber: string;
  phoneNumber: string;
  contactEmail?: string;
  available: WeeklyAvailability[];
  isCertified?: boolean;
  description?: string;
  rating: number; // 1–5
  reviewsCount: number;
  quote: string;
  profileImage: string;
  languages: string[];
}

export interface WeeklyAvailability {
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  availableHours: { from: string; to: string }[];
}
