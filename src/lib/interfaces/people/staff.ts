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

export interface Driver {
  id: string; // Unique identifier
  name: string; // Full name
  licenseNumber: string; // Valid driver’s license number
  licenseExpiry: string; // License expiration date (ISO string)
  experienceYears: number; // Years of professional driving experience
  languagesSpoken: string[]; // ISO language codes or language names
  available: WeeklyAvailability[];
  ratings?: number; // Average customer rating (1-5)
  phone: string; // Contact number
  email?: string; // Optional email
  photoUrl?: string; // Optional profile photo URL
  specialties?: DriverSpecialty[];
  vehicleTypesCertified: VehicleTypeCertified[];
}

export type DriverSpecialty =
  | "VIP Transport"
  | "Airport Transfers"
  | "Corporate Chauffeur"
  | "Event Transportation"
  | "Long-Distance Driving"
  | "Tour Guide Driver"
  | "Luxury Car Specialist"
  | "Night Shift"
  | "Security Detail";

export type VehicleTypeCertified =
  | "Sedan"
  | "Limousine"
  | "SUV"
  | "Convertible"
  | "Van"
  | "Electric Vehicle"
  | "Motorcoach"
  | "Sports Car"
  | "Luxury SUV";
