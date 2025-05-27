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
  bio: string;
  image?: string;
  city: string;
  state?: string;
  region?: string;
  isPopular?: boolean;
  description: string;
  quote: string;
}