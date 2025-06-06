export interface Yacht {
  id: string;
  name: string;
  brand: string; // e.g., Azimut, Sunseeker, Princess
  model: string;
  yearBuilt: number;
  lengthInMeters: number;
  beamInMeters?: number; // width
  draftInMeters?: number; // depth below waterline
  cruisingSpeedKnots?: number;
  maxSpeedKnots?: number;
  fuelCapacityLiters?: number;
  waterCapacityLiters?: number;
  engines: string[]; // e.g., ["2 x MTU 12V 2000"]
  hullType: "monohull" | "catamaran" | "trimaran";
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
    perWeek: number;
    currency: string; // e.g., "USD", "EUR"
    includes?: YachtAmenity[];
    excludes?: YachtAmenity[];
  };

  safetyFeatures?: string[]; // e.g., ["Life Jackets", "EPIRB", "First Aid Kit"]
  accessibilityFeatures?: string[]; // optional, e.g., ["Wheelchair Ramp"]
}

type CateringOption =
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

type YachtEntertainment =
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

type YachtWaterToy =
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
  horsepower: number;
  colorOptions: string[];
  features: string[];
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

export interface Hotel {
  id: string;
  name: string;
  rating: number;
  address: string;
  accommodationType: AccommodationType;
  amenities: AmenityType[];
  accessibilityFeatures?: AccessibilityFeature[];
  checkInTime: string; // e.g., "15:00"
  checkOutTime: string; // e.g., "11:00"
  roomsAvailable: number;
  isPetFriendly?: boolean;
  currency: string;
  contact: {
    contactEmail?: string;
    contactPhone: string;
  };
  policies: {
    cancellation: string;
    smoking: "Allowed" | "Not Allowed" | "Designated Areas";
  };
  isPopular?: boolean;
}

type AccommodationType =
  | "Hotel"
  | "Resort"
  | "Boutique Hotel"
  | "Hostel"
  | "Bed and Breakfast"
  | "Guesthouse"
  | "Motel"
  | "Serviced Apartment"
  | "Family Resort"
  | "Boutique Inn"
  | "Boutique Resort"
  | "Extended Stay Hotel"
  | "Luxury Lodge"
  | "Vacation Rental"
  | "Glamping Resort"
  | "Chalet"
  | "Luxury Villa"
  | "Luxury Hotel"
  | "All-Inclusive Resort"
  | "Spa Hotel"
  | "Luxury Hotel"
  | "Business Hotel"
  | "Eco-Lodge";

type AmenityType =
  | "Free Wi-Fi"
  | "Swimming Pool"
  | "Fitness Center"
  | "Spa"
  | "Parking"
  | "Restaurant"
  | "Bar"
  | "Room Service"
  | "Airport Shuttle"
  | "Laundry Service"
  | "24-Hour Front Desk"
  | "Conference Room"
  | "Non-Smoking Rooms"
  | "Pet Friendly"
  | "Business Center";

type AccessibilityFeature =
  | "Wheelchair Accessible"
  | "Elevator"
  | "Accessible Bathroom"
  | "Braille Signage"
  | "Accessible Parking"
  | "Visual Alarm"
  | "Hearing Loop"
  | "Accessible Shower"
  | "Grab Bars"
  | "Lowered Light Switches"
  | "Accessible Pathways"
  | "Assistive Listening Devices"
  | "Sign Language Interpretation"
  | "Tactile Maps"
  | "Large Print Materials"
  | "Visual Aids"
  | "Hearing Support";

export interface RoomOption {
  id: string;
  name: string; // e.g. "Deluxe Suite", "Standard Room"
  description?: string;
  occupancy: {
    adults: number;
    children?: number;
    maxGuests: number;
  };
  bedType: RoomBedType;
  view?: RoomViewType;
  amenities: RoomAmenities[];
  accessibilityFeatures?: AccessibilityFeature[];
  photos?: string[];
  pricePerNight: number;
  currency: string; // e.g. "USD"
  refundable: boolean;
  breakfastIncluded?: boolean;
  availableCount: number; // how many rooms of this type are available
}

type RoomBedType = "Single" | "Double" | "Queen" | "King" | "Twin" | "Sofa Bed";

type RoomViewType =
  | "City View"
  | "Ocean View"
  | "Garden View"
  | "Mountain View"
  | "None";

type RoomAmenities =
  | "Free Wi-Fi"
  | "Air Conditioning"
  | "Television"
  | "Mini Bar"
  | "Coffee Maker"
  | "Microwave"
  | "Refrigerator"
  | "Hair Dryer"
  | "Ironing Facilities"
  | "In-Room Safe"
  | "Balcony"
  | "Bathtub"
  | "Shower"
  | "Toiletries"
  | "Desk"
  | "Seating Area"
  | "Soundproofing"
  | "Daily Housekeeping"
  | "Room Service"
  | "Wake-Up Service"
  | "Smoke Detector"
  | "Heating"
  | "Non-Smoking Room"
  | "Pet Friendly"
  | "Family Room"
  | "Connecting Rooms"
  | "Accessible Room"
  | "Kitchenette"
  | "Dining Table"
  | "Blackout Curtains"
  | "Complimentary Bottled Water"
  | "Bathrobe"
  | "Slippers"
  | "Flat-Screen TV"
  | "Streaming Services"
  | "Bluetooth Speaker"
  | "Desk Lamp"
  | "Alarm Clock"
  | "Luggage Rack"
  | "Outdoor Furniture"
  | "Fireplace"
  | "Jacuzzi Tub"
  | "Sauna"
  | "Fitness Equipment"
  | "Board Games"
  | "Books";
