// Auto-generated file for auckland hotels
import { Hotel } from "@/lib/interfaces/services/rentals";

export const aucklandHotels: Hotel[] = [
  {
    id: "hotel-auckland-1",
    name: "Lake Taupo Resort",
    address: "133 Riccarton Lane",
    rating: 4,
    accommodationType: "Luxury Villa",
    amenities: ["24-Hour Front Desk", "Laundry Service", "Conference Room", "Fitness Center", "Room Service", "Swimming Pool", "Bar"],
    checkInTime: "14:00",
    checkOutTime: "10:00",
    roomsAvailable: 39,
    isPetFriendly: true,
    currency: "NZD",
    contact: {
      contactEmail: "office@laketauporesort.com",
      contactPhone: "+148 693-185-3325",
    },
    policies: {
      cancellation: "Free cancellation up to 7 days before arrival; no refund after that.",
      smoking: "Allowed",
    },
    isPopular: false,
  },
  {
    id: "hotel-auckland-2",
    name: "Marlborough Wine Lodge",
    address: "56 Cuba Lane",
    rating: 3,
    accommodationType: "Spa Hotel",
    amenities: ["Spa", "Restaurant", "Parking", "24-Hour Front Desk", "Business Center"],
    checkInTime: "16:00",
    checkOutTime: "11:00",
    roomsAvailable: 55,
    isPetFriendly: false,
    currency: "NZD",
    contact: {
      contactEmail: "mail@marlboroughwinelodge.com",
      contactPhone: "+539 960-731-2951",
    },
    policies: {
      cancellation: "Free cancellation within 24 hours of booking; after that, 25% fee applies.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  },
  {
    id: "hotel-auckland-3",
    name: "Nelson Bayview Inn",
    address: "173 Cashel Lane",
    rating: 4,
    accommodationType: "Boutique Resort",
    amenities: ["Laundry Service", "Restaurant", "24-Hour Front Desk", "Airport Shuttle", "Parking", "Spa", "Bar"],
    accessibilityFeatures: ["Braille Signage"],
    checkInTime: "14:00",
    checkOutTime: "11:00",
    roomsAvailable: 54,
    isPetFriendly: false,
    currency: "NZD",
    contact: {
      contactEmail: "general@nelsonbayviewinn.com",
      contactPhone: "+664 264-609-1228",
    },
    policies: {
      cancellation: "Cancellation made less than 3 days before check-in will incur a 75% charge.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  }
];
