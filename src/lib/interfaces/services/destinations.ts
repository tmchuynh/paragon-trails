export interface Destination {
  id: string;
  name: string;
  country: string;
  continent?: string;
  region: string;
  description: string;
  images: string[];
  popularWith: string[];
  population: number;
  capital: string;
  area: {
    total: number;
    unit: string;
  };
  geography: {
    terrain: string;
    elevation: {
      average: number;
      highest?: number;
      lowest?: number;
      unit: string;
    };
    landmarks: string[];
  };
  connectivity: {
    internetSpeed: string;
    wifiAvailability?: boolean;
    mobileNetworkCoverage?: string;
  };
  visaRequirements: string;

  climate: {
    season: string;
    temperature: {
      high: number;
      low: number;
      unit: string;
    };
    rainfall: string;
    humidity: string;
    averageTemperature?: number;
  };
  currency: {
    code: string;
    symbol: string;
    name: string;
  };
  pricing: {
    averageDailyBudget: number;
    accommodationRange: {
      budget: number;
      midRange: number;
      luxury: number;
    };
    foodAndDrink: number;
    transportation: number;
    activitiesAndAttractions: number;
  };
  language: string[];
  timezone: string;
  highlights: string[];
  bestTimeToVisit: string[];
  attractions: string[];
  activities: string[];
  cuisine: string[];
  culture: {
    festivals: string[];
    traditions: string[];
    artsAndCrafts: string[];
    musicAndDance: string[];
    localCustoms: string[];
    languages: string[];
    cuisine: string[];
  };
  transportation: {
    airports: string[];
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
    crimeRate: string;
    healthRisks: string[];
    emergencyNumber: string;
  };
  tradition: string[];
}