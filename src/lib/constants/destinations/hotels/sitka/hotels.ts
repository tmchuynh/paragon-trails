import { Hotel } from "@/lib/interfaces/services/rentals";

export const sitkaHotels: Hotel[] = [
  {
    id: "hotel-sitka-1",
    name: "The Palms",
    address: "121 Park Ct",
    rating: 3,
    accommodationType: "Extended Stay Hotel",
    amenities: ["Free Wi-Fi", "Airport Shuttle", "Swimming Pool", "Laundry Service", "Parking", "Room Service", "Restaurant"],
    accessibilityFeatures: ["Accessible Shower", "Hearing Support"],
    checkInTime: "13:00",
    checkOutTime: "10:00",
    roomsAvailable: 53,
    isPetFriendly: false,
    currency: "USD",
    contact: {
      contactEmail: "connect@thepalms.com",
      contactPhone: "+684 583-847-6780",
    },
    policies: {
      cancellation: "Full refund if cancelled within 48 hours of booking, minus service fees.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  },
  {
    id: "hotel-sitka-2",
    name: "The Grandview Inn",
    address: "258 Broadway Blvd",
    rating: 3,
    accommodationType: "Guesthouse",
    amenities: ["Non-Smoking Rooms", "Airport Shuttle", "Parking", "Restaurant", "Bar", "Spa", "Fitness Center", "24-Hour Front Desk", "Swimming Pool", "Conference Room"],
    accessibilityFeatures: ["Visual Aids", "Accessible Parking"],
    checkInTime: "13:00",
    checkOutTime: "10:00",
    roomsAvailable: 17,
    isPetFriendly: false,
    currency: "USD",
    contact: {
      contactEmail: "general@thegrandviewinn.com",
      contactPhone: "+879 248-568-7753",
    },
    policies: {
      cancellation: "Non-refundable; full amount charged at time of booking.",
      smoking: "Allowed",
    },
    isPopular: false,
  },
  {
    id: "hotel-sitka-3",
    name: "The Metropolitan",
    address: "46 NW Main Sq",
    rating: 3,
    accommodationType: "Hotel",
    amenities: ["Laundry Service", "24-Hour Front Desk", "Conference Room", "Fitness Center", "Room Service", "Pet Friendly", "Non-Smoking Rooms", "Swimming Pool", "Airport Shuttle"],
    accessibilityFeatures: ["Hearing Support", "Hearing Loop"],
    checkInTime: "14:00",
    checkOutTime: "11:00",
    roomsAvailable: 33,
    isPetFriendly: false,
    currency: "USD",
    contact: {
      contactEmail: "contact@themetropolitan.com",
      contactPhone: "+197 909-553-1801",
    },
    policies: {
      cancellation: "Free cancellation up to 14 days before check-in; 50% refund for cancellations made within 14 days.",
      smoking: "Allowed",
    },
    isPopular: true,
  }
];
