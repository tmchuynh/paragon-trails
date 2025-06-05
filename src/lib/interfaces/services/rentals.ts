export interface Yacht {
  id: string;
  name: string;
  brand?: string; // e.g., Azimut, Sunseeker, Princess
  model?: string;
  yearBuilt: number;
  lengthInMeters: number;
  beamInMeters?: number; // width
  draftInMeters?: number; // depth below waterline
  cruisingSpeedKnots?: number;
  maxSpeedKnots?: number;
  fuelCapacityLiters?: number;
  waterCapacityLiters?: number;
  engines?: string[]; // e.g., ["2 x MTU 12V 2000"]
  hullType?: "monohull" | "catamaran" | "trimaran";
  yachtType: "motor" | "sailing" | "catamaran" | "gulet" | "mega" | "super";

  capacity: {
    guestsDay: number;
    guestsOvernight: number;
    cabins: number;
    crew: number;
    bathrooms?: number;
  };

  amenities: YachtAmenity[];
  entertainment?: YachtEntertainment[];
  waterToys?: YachtWaterToy[];
  location: {
    city: string;
    country: string;
    region?: string;
    state?: string;
    homePort: string;
  };

  availableSeasons: string[]; // e.g., ["Summer", "Winter"]
  charterType: "private" | "shared" | "day" | "weekly";

  crewIncluded: boolean;
  cateringOptions?: CateringOption[];

  description: string;
  images: string[];
  featured?: boolean;
  pricing: {
    perDay: number;
    perWeek?: number;
    currency: string; // e.g., "USD", "EUR"
    includes?: YachtAmenity[];
    excludes?: YachtAmenity[];
  };

  safetyFeatures?: string[]; // e.g., ["Life Jackets", "EPIRB", "First Aid Kit"]
  accessibilityFeatures?: string[]; // optional, e.g., ["Wheelchair Ramp"]
}

export type CateringOption =
  | "Full-Service Catering"
  | "Self-Catering"
  | "Chef Onboard"
  | "Provisioning Only"
  | "Breakfast Only"
  | "All-Inclusive"
  | "À La Carte"
  | "BBQ Onboard"
  | "Picnic-Style"
  | "Local Cuisine Packages"
  | "No Catering";

export type YachtAmenity =
  | "Jacuzzi"
  | "Wi-Fi"
  | "Air Conditioning"
  | "Sun Deck"
  | "BBQ Grill"
  | "Outdoor Shower"
  | "Indoor Lounge"
  | "Bar"
  | "Dining Area"
  | "Swim Platform"
  | "Hot Tub"
  | "Sauna"
  | "Heated Deck"
  | "Kitchen"
  | "Laundry Service"
  | "Stabilizers"
  | "Tender Garage";

export type YachtEntertainment =
  | "Satellite TV"
  | "Bluetooth Speakers"
  | "Surround Sound System"
  | "Media Library"
  | "Game Console"
  | "Projector"
  | "Onboard Cinema"
  | "Streaming Services"
  | "Board Games"
  | "Karaoke System"
  | "DJ Equipment";

export type YachtWaterToy =
  | "Jet Ski"
  | "Paddleboards"
  | "Snorkeling Gear"
  | "Kayaks"
  | "Water Skis"
  | "Wakeboard"
  | "Seabob"
  | "Inflatable Slide"
  | "Towable Tubes"
  | "Windsurf"
  | "Scuba Diving Gear"
  | "Fishing Equipment"
  | "Floating Island"
  | "Kneeboard"
  | "E-Foil";

export interface LuxuryRentalCar {
  id: string;
  make: string; // e.g., "Mercedes-Benz"
  model: string; // e.g., "S-Class"
  year: number;
  type: CarType;
  seats: number;
  transmission: "Automatic" | "Manual";
  fuelType: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  horsepower?: number;
  colorOptions: string[];
  features: CarFeature[];
  rentalPricePerDay: number;
  currency: string;
  available: boolean;
  pickUpCity: string;
  pickUpCountry: string;
  pickUpLocation?: string; // e.g., "Airport", "City Center"
  dropOffCity?: string; // Optional, if different from pick-up
  dropOffCountry?: string; // Optional, if different from pick-up
  dropOffLocation?: string; // Optional, if different from pick-up
  imageUrl?: string;
  description?: string;
  insuranceIncluded: boolean;
  minimumRentalAge: number;
  depositAmount?: number;
}

export type CarType =
  | "Sedan"
  | "SUV"
  | "Convertible"
  | "Coupe"
  | "Sports Car"
  | "Electric"
  | "Hybrid"
  | "Limousine";

export type CarFeature =
  | "Leather Seats"
  | "GPS Navigation"
  | "Sunroof"
  | "Bluetooth"
  | "Backup Camera"
  | "Heated Seats"
  | "All-Wheel Drive"
  | "Blind Spot Monitoring"
  | "Adaptive Cruise Control"
  | "Parking Sensors"
  | "Premium Sound System"
  | "Keyless Entry"
  | "Remote Start"
  | "Wireless Charging"
  | "Apple CarPlay"
  | "Android Auto"
  | "Electric Adjustable Seats"
  | "Massage Seats"
  | "Climate Control"
  | "Night Vision"
  | "Heads-Up Display"
  | "Performance Tires"
  | "Convertible Roof";

export interface Motorcycle {
  id: string;
  make: string;
  model: string;
  year: number;
  type: MotorcycleType;
  engineSize: string;
  transmission: "manual" | "automatic";
  color: string;
  seatCapacity: number;
  hasStorage: boolean;
  rentalPricePerDay: number;
  currency: string;
  available: boolean;
  pickUpCity: string;
  pickUpCountry: string;
  pickUpLocation?: string; // e.g., "Airport", "City Center"
  dropOffCity?: string; // Optional, if different from pick-up
  dropOffCountry?: string; // Optional, if different from pick-up
  dropOffLocation?: string; // Optional, if different from pick-up
  features?: MotorcycleFeature[];
  imageUrl?: string;
  requirements: MotorcycleRequirement[];
  availability?: boolean;
  location?: string;
}

export type MotorcycleType =
  | "cruiser"
  | "touring"
  | "sport"
  | "standard"
  | "dual-sport"
  | "scooter"
  | "custom";

export type MotorcycleFeature =
  | "ABS"
  | "GPS Navigation"
  | "Bluetooth Audio"
  | "USB Charging"
  | "Heated Grips"
  | "Saddlebags"
  | "Windshield"
  | "Cruise Control"
  | "Security System"
  | "Custom Exhaust"
  | "Helmet Included"
  | "Phone Mount"
  | "Backrest";

export type MotorcycleRequirement =
  | "Valid Motorcycle License"
  | "Minimum Age 21"
  | "Security Deposit Required"
  | "Helmet Required"
  | "Credit Card Required"
  | "Experience with Manual Transmission"
  | "No DUI Record"
  | "Insurance Required"
  | "Signed Waiver"
  | "Local Riding Permit"
  | "Two-Wheel Experience"
  | "International Driving Permit (for foreign renters)";
