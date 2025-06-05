import { Hotel } from "@/lib/interfaces/services/rentals";

export const bangkokHotels: Hotel[] = [
  {
    id: "hotel-bangkok-1",
    name: "Urban Garden Hotel",
    address: "26 Liberty Place",
    rating: 3,
    accommodationType: "Resort",
    amenities: ["Free Wi-Fi", "Swimming Pool", "Airport Shuttle", "Fitness Center", "Room Service", "Spa"],
    checkInTime: "14:00",
    checkOutTime: "10:00",
    roomsAvailable: 45,
    isPetFriendly: true,
    currency: "THB",
    contact: {
      contactEmail: "ask@urbangardenhotel.com",
      contactPhone: "+170 803-338-6895",
    },
    policies: {
      cancellation: "50% refund for cancellations made at least 7 days before check-in.",
      smoking: "Allowed",
    },
    isPopular: false,
  },
  {
    id: "hotel-bangkok-2",
    name: "Urban Garden Hotel",
    address: "37 Soi Queen Avenue",
    rating: 4,
    accommodationType: "Chalet",
    amenities: ["Bar", "Conference Room", "Room Service", "Spa", "Airport Shuttle", "Swimming Pool", "Non-Smoking Rooms", "Free Wi-Fi", "24-Hour Front Desk", "Parking"],
    checkInTime: "14:00",
    checkOutTime: "10:00",
    roomsAvailable: 40,
    isPetFriendly: true,
    currency: "THB",
    contact: {
      contactEmail: "welcome@urbangardenhotel.com",
      contactPhone: "+780 174-312-4848",
    },
    policies: {
      cancellation: "Free cancellation up to 24 hours before check-in. If cancelled later, the first night will be charged.",
      smoking: "Not Allowed",
    },
    isPopular: false,
  },
  {
    id: "hotel-bangkok-3",
    name: "City Lights Inn",
    address: "121 Thanon Hilltop Drive",
    rating: 4,
    accommodationType: "Chalet",
    amenities: ["Bar", "Restaurant", "Parking", "Conference Room", "Spa", "24-Hour Front Desk", "Fitness Center", "Pet Friendly", "Airport Shuttle"],
    checkInTime: "15:00",
    checkOutTime: "10:00",
    roomsAvailable: 31,
    isPetFriendly: true,
    currency: "THB",
    contact: {
      contactEmail: "communications@citylightsinn.com",
      contactPhone: "+336 748-911-1865",
    },
    policies: {
      cancellation: "Free cancellation up to 72 hours before check-in. If cancelled later, the first night will be charged.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  }
];
