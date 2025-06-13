export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  aircraft: string;
  origin: {
    code: string;
    city: string;
    airport: string;
    terminal?: string;
  };
  destination: {
    code: string;
    city: string;
    airport: string;
    terminal?: string;
  };
  departure: {
    date: string;
    time: string;
    timezone: string;
  };
  arrival: {
    date: string;
    time: string;
    timezone: string;
  };
  duration: string;
  pricing: {
    economy: number;
    business: number;
    first: number;
    currency: string;
  };
  availability: {
    economy: number;
    business: number;
    first: number;
  };
  amenities: string[];
  baggage: {
    carryOn: string;
    checked: string;
  };
  meal: string;
  entertainment: string[];
  rating: number;
  reviews: number;
  stops: number;
  layovers?: {
    airport: string;
    duration: string;
  }[];
}