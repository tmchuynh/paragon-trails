// Vehicle rental interfaces for Paragon Trails
export interface Vehicle {
  id: string;
  name: string;
  type: "car" | "motorcycle" | "luxury-car" | "suv" | "sports-car" | "truck";
  brand: string;
  model: string;
  year: number;
  images: string[];
  description: string;
  features: string[];
  specifications: {
    engine?: string;
    transmission?: string;
    fuelType?: string;
    seatingCapacity?: number;
    doors?: number;
    luggage?: number;
    topSpeed?: string;
    acceleration?: string;
    fuelEconomy?: string;
  };
  pricing: {
    daily: number;
    weekly: number;
    monthly: number;
    currency: string;
    deposit?: number;
    insurance?: number;
  };
  availability: {
    locations: string[];
    isAvailable: boolean;
    minimumAge: number;
    licenseRequired: string[];
  };
  insurance: {
    included: string[];
    optional: string[];
  };
  rating: number;
  reviews: number;
  category: string;
  tags: string[];
}

export interface VehicleBooking {
  id: string;
  vehicleId: string;
  vehicle: Vehicle;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  returnLocation: string;
  driverAge: number;
  licenseType: string;
  additionalServices: string[];
  totalDays: number;
  pricing: {
    baseCost: number;
    insurance: number;
    fees: number;
    taxes: number;
    total: number;
  };
  status: "pending" | "confirmed" | "completed" | "cancelled";
}

export interface RentalLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  hours: string;
  phone: string;
  services: string[];
  vehicleTypes: Vehicle["type"][];
}
