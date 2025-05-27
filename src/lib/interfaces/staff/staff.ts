export interface TeamMember {
  name: string;
  certifications: string[];
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
