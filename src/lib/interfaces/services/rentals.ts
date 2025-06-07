export interface LuxuryRentalCar {
  id: string;
  make: string; // e.g., "Mercedes-Benz"
  model: string; // e.g., "S-Class"
  year: number;
  type: CarType;
  seats: number;
  transmission: "Automatic" | "Manual";
  fuelType: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  horsepower: number;
  colorOptions: string[];
  features: string[];
  rentalPricePerDay: number;
  currency: string;
  available: boolean;
  pickUpCity: string;
  pickUpCountry: string;
  pickUpRegion?: string;
  pickUpLocation?: string; // e.g., "Airport", "City Center"
  dropOffCity?: string; // Optional, if different from pick-up
  dropOffCountry?: string; // Optional, if different from pick-up
  dropOffLocation?: string; // Optional, if different from pick-up
  imageUrl?: string;
  description?: string;
  insuranceIncluded: boolean;
  minimumRentalAge: number;
  depositAmount: number;
}

type CarType =
  | "Sedan"
  | "SUV"
  | "Convertible"
  | "Coupe"
  | "Sports Car"
  | "Electric"
  | "Hybrid"
  | "Limousine";

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
  features: MotorcycleFeature[];
  imageUrl?: string;
  requirements: MotorcycleRequirement[];
  availability?: boolean;
  location?: string;
}

type MotorcycleType =
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

type MotorcycleRequirement =
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

// Hotel interfaces
export interface Hotel {
  id: string;
  name: string;
  address: string;
  rating: number;
  checkInTime: string;
  checkOutTime: string;
  accommodationType: string;
  isPetFriendly: boolean;
  isPopular: boolean;
  roomsAvailable: number;
  currency: string;
  policies: {
    cancellation?: string;
    smoking?: string;
  };
  amenities: string[];
  accessibilityFeatures?: string[];
  contact?: {
    contactPhone?: string;
    contactEmail?: string;
  };
  roomFile?: string; // Add this line
}

export interface RoomOption {
  id: string;
  name: string;
  description: string;
  occupancy: {
    adults: number;
    children?: number;
    maxGuests: number;
  };
  accessibilityFeatures?: string[];
  imageUrl?: string;
  bedType: "Single" | "Double" | "Queen" | "King" | "Twin" | "Sofa Bed";
  view: "City View" | "Ocean View" | "Garden View" | "Mountain View" | "None";
  amenities: string[];
  pricePerNight: number;
  currency: string;
  refundable: boolean;
  breakfastIncluded: boolean;
  availableCount: number;
}
