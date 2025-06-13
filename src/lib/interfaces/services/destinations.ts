export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  description: string;
  images: string[];
  climate: {
    season: string;
    temperature: {
      high: number;
      low: number;
      unit: string;
    };
    rainfall: string;
    humidity: string;
  };
  currency: {
    code: string;
    symbol: string;
    name: string;
  };
  language: string[];
  timezone: string;
  highlights: string[];
  bestTimeToVisit: string[];
  attractions: string[];
  activities: string[];
  cuisine: string[];
  culture: string[];
  transportation: {
    airport: string;
    publicTransport: string[];
    taxi: boolean;
    rental: boolean;
  };
  accommodation: {
    budget: number;
    midRange: number;
    luxury: number;
    currency: string;
  };
  rating: number;
  reviews: number;
  tags: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
  visa: {
    required: boolean;
    details: string;
  };
  safety: {
    level: string;
    advisories: string[];
  };
}