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
  id?: string;
  name: string;
  city: string;
  country: string;
  state?: string;
  region?: string;
  isPopular?: boolean;
  bio: string;
  profileImage: string;
  specialties: string[];
  languages: string[];
}