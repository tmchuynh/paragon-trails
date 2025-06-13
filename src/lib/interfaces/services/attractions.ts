export interface Attraction {
  id: string;
  name: string;
  type: string;
  category: string;
  description: string;
  images: string[];
  location: {
    city: string;
    country: string;
    address: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  pricing: {
    adult: number;
    child: number;
    senior: number;
    student?: number;
    family?: number;
    currency: string;
  };
  openingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
    holidays?: string;
  };
  duration: {
    recommended: string;
    minimum: string;
  };
  features: string[];
  accessibility?: {
    wheelchairAccessible: boolean;
    hearingImpaired: boolean;
    visuallyImpaired: boolean;
    languageSupport: string[];
  };
  amenities: string[];
  restrictions: string[];
  bestTimeToVisit: string[];
  nearbyAttractions: string[];
  transportation: {
    publicTransport: string[];
    parking: boolean;
    walkingDistance: string[];
  };
  tickets: {
    advanceBooking: boolean;
    skipTheLine: boolean;
    groupDiscounts: boolean;
  };
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  rating: number;
  reviews: number;
  tags: string[];
  culturalSignificance?: string;
  historicalPeriod?: string;
  architect?: string;
  yearBuilt?: number;
}