export interface Host {
  name: string;
  background: string;
  maxGuests: number;
  languages: string[]; // Use ISO codes
  curfew: string;
  isPopular?: boolean;
  guestPolicy: string[];
  hostingStyle?:
    | "laid-back"
    | "hands-on"
    | "private"
    | "social"
    | "family-oriented";

  houseRules: string[];
  location: {
    city: string;
    region?: string;
    country: string;
    coordinates?: { lat: number; lng: number };
  };
  availability: {
    checkInTime: string;
    checkOutTime: string;
    calendarLink?: string;
  };
  email: string;
  phoneNumber?: string;
  isVerified: boolean;
  rating?: number;
  reviewCount?: number;
  quote?: string;
  stayType: HomestayStayType;
}

export interface Homestay {
  hosts: Host[];
}

type HomestayStayType =
  // By Structure/Setting
  | "private-room-in-home"
  | "shared-room"
  | "entire-home"
  | "guest-suite"
  | "farm-stay"
  | "villa-stay"
  | "cottage-stay"
  | "urban-apartment-stay"
  | "eco-stay"

  // By Cultural/Experience Focus
  | "traditional-homestay"
  | "language-immersion"
  | "culinary-homestay"
  | "volunteer-stay"
  | "art-or-craft-stay"
  | "spiritual-or-wellness-retreat"
  | "academic-homestay"
  | "heritage-stay"

  // By Guest Arrangement
  | "host-family-stay"
  | "self-catering"
  | "bed-and-breakfast"
  | "pet-friendly-stay"
  | "long-term-stay"
  | "senior-or-retirement-stay"
  | "female-only-stay"
  | "family-friendly-stay";
