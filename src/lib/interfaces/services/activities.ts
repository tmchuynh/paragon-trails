export interface Activity {
  id: string;
  name: string;
  category: string;
  description: string;
  images: string[];
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging" | "Expert";
  groupSize: {
    min: number;
    max: number;
  };
  pricing: {
    adult: number;
    child: number;
    senior?: number;
    currency: string;
  };
  location: {
    city: string;
    country: string;
    address?: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  schedule: {
    frequency: string;
    times: string[];
    seasonality?: string;
  };
  inclusions: string[];
  exclusions: string[];
  requirements: string[];
  equipment: {
    provided: string[];
    required: string[];
  };
  safety: {
    certification: string[];
    guidelines: string[];
  };
  cancellation: {
    policy: string;
    refund: string;
  };
  rating: number;
  reviews: number;
  tags: string[];
  ageRestriction: {
    minimum: number;
    maximum?: number;
  };
  physicalRequirements: string[];
  weatherDependent: boolean;
}