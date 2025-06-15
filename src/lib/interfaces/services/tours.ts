export interface Tour {
  id: string;
  name: string;
  title: string;
  type: string;
  category: string;
  duration: string;
  description: string;
  images: string[];
  location: {
    city: string;
    country: string;
  };
  pricing: {
    adult: number;
    child: number;
    senior: number;
    currency: string;
    inclusions: string[];
    exclusions: string[];
  };
  reviews: {
    rating: number;
    totalReviews: number;
  };
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  groupSize: {
    min: number;
    max: number;
  };
  difficulty: string;
  bestTime: string;
  languages: string[];
  highlights: string[];
  policies: {
    cancellation: string;
    payment: string;
    age: string;
  };
  rating: number;
  tags: string[];
  destinations: TourDestination[];
  operator: {
    name: string;
    license: string;
    rating: number;
    yearsInBusiness: number;
  };
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: string[];
  accommodation: string;
}

export interface TourDestination {
  id: number;
  name: string;
  daysSpent: number;
}
