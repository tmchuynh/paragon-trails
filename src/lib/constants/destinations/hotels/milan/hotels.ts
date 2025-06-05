import { Hotel } from "@/lib/interfaces/services/rentals";

export const milanHotels: Hotel[] = [
  {
    id: "hotel-milan-1",
    name: "Grand Central Hotel",
    address: "82 Lower Queen St",
    rating: 3,
    accommodationType: "Boutique Hotel",
    amenities: ["Conference Room", "Pet Friendly", "Spa", "Room Service", "Bar"],
    accessibilityFeatures: ["Accessible Pathways", "Visual Alarm", "Braille Signage"],
    checkInTime: "14:00",
    checkOutTime: "10:00",
    roomsAvailable: 20,
    isPetFriendly: true,
    currency: "EUR",
    contact: {
      contactEmail: "support@grandcentralhotel.com",
      contactPhone: "+682 127-444-7832",
    },
    policies: {
      cancellation: "Free cancellation up to 24 hours before check-in. If cancelled later, the first night will be charged.",
      smoking: "Allowed",
    },
    isPopular: false,
  },
  {
    id: "hotel-milan-2",
    name: "The Ambassador",
    address: "89 Hilltop Ave",
    rating: 4,
    accommodationType: "Boutique Hotel",
    amenities: ["Non-Smoking Rooms", "Conference Room", "Restaurant", "Free Wi-Fi", "Laundry Service", "Airport Shuttle", "Swimming Pool"],
    checkInTime: "15:00",
    checkOutTime: "10:00",
    roomsAvailable: 59,
    isPetFriendly: false,
    currency: "EUR",
    contact: {
      contactEmail: "ask@theambassador.com",
      contactPhone: "+233 684-531-1568",
    },
    policies: {
      cancellation: "Free cancellation up to 72 hours before check-in. If cancelled later, the first night will be charged.",
      smoking: "Allowed",
    },
    isPopular: true,
  },
  {
    id: "hotel-milan-3",
    name: "Oceanview Inn",
    address: "106 Upper Main Ave",
    rating: 3,
    accommodationType: "Hostel",
    amenities: ["Room Service", "Fitness Center", "24-Hour Front Desk", "Laundry Service", "Spa", "Free Wi-Fi", "Bar", "Restaurant"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    checkInTime: "13:00",
    checkOutTime: "11:00",
    roomsAvailable: 39,
    isPetFriendly: true,
    currency: "EUR",
    contact: {
      contactEmail: "reachus@oceanviewinn.com",
      contactPhone: "+208 385-166-4261",
    },
    policies: {
      cancellation: "50% refund for cancellations made at least 7 days before check-in.",
      smoking: "Designated Areas",
    },
    isPopular: true,
  }
];
