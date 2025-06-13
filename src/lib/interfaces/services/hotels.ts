// Hotel interfaces for Paragon Trails
export interface Hotel {
  id: string;
  name: string;
  type: "hotel" | "resort" | "boutique" | "hostel" | "apartment" | "villa" | "bed-and-breakfast";
  starRating: number;
  images: string[];
  description: string;
  location: {
    address: string;
    city: string;
    country: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    nearbyAttractions: string[];
  };
  amenities: {
    general: string[];
    business: string[];
    recreation: string[];
    dining: string[];
    accessibility: string[];
  };
  rooms: {
    types: HotelRoom[];
    totalRooms: number;
  };
  policies: {
    checkIn: string;
    checkOut: string;
    cancellation: string;
    petPolicy: string;
    smokingPolicy: string;
    ageRestrictions?: string;
  };
  services: {
    concierge: boolean;
    roomService: boolean;
    laundry: boolean;
    airportShuttle: boolean;
    spa: boolean;
    fitness: boolean;
    businessCenter: boolean;
  };
  pricing: {
    priceRange: {
      min: number;
      max: number;
      currency: string;
    };
    seasonality: {
      peak: number;
      standard: number;
      low: number;
    };
  };
  rating: number;
  reviews: number;
  awards?: string[];
  sustainability?: {
    certified: boolean;
    practices: string[];
  };
  tags: string[];
}

export interface HotelRoom {
  id: string;
  name: string;
  type: "standard" | "deluxe" | "suite" | "family" | "executive" | "presidential";
  size: {
    area: number;
    unit: string;
  };
  capacity: {
    adults: number;
    children: number;
    beds: {
      type: string;
      count: number;
    }[];
  };
  amenities: string[];
  pricing: {
    baseRate: number;
    currency: string;
    extras?: {
      name: string;
      price: number;
    }[];
  };
  availability: boolean;
  images: string[];
  description: string;
  features: string[];
}

export interface HotelBooking {
  id: string;
  hotelId: string;
  hotel: Hotel;
  roomId: string;
  room: HotelRoom;
  checkInDate: string;
  checkOutDate: string;
  guests: {
    adults: number;
    children: number;
  };
  specialRequests?: string;
  totalPrice: number;
  bookingStatus: "confirmed" | "pending" | "cancelled";
  guestInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  paymentInfo: {
    method: string;
    status: "paid" | "pending" | "failed";
    transactionId?: string;
  };
}

export interface HotelSearchFilters {
  destination?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: {
    adults: number;
    children: number;
  };
  priceRange?: {
    min: number;
    max: number;
  };
  starRating?: number[];
  amenities?: string[];
  hotelType?: string[];
  sortBy?: "price" | "rating" | "distance" | "name";
}