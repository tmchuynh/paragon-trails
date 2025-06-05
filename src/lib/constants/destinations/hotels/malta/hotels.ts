import { Hotel } from "@/lib/interfaces/services/rentals";

export const maltaHotels: Hotel[] = [
  {
    id: "hotel-malta-1",
    name: "The Ambassador",
    address: "289 Liberty Drive",
    rating: 4,
    accommodationType: "Extended Stay Hotel",
    amenities: ["Parking", "Bar", "Non-Smoking Rooms", "Airport Shuttle", "Room Service", "Free Wi-Fi", "Swimming Pool"],
    accessibilityFeatures: ["Visual Alarm", "Visual Aids"],
    checkInTime: "14:00",
    checkOutTime: "10:00",
    roomsAvailable: 23,
    isPetFriendly: true,
    currency: "EUR",
    contact: {
      contactEmail: "team@theambassador.com",
      contactPhone: "+136 365-244-4335",
    },
    policies: {
      cancellation: "No refunds for cancellations.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  },
  {
    id: "hotel-malta-2",
    name: "Heritage View",
    address: "231 South Queen Place",
    rating: 4,
    accommodationType: "Bed and Breakfast",
    amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Conference Room", "Parking", "Fitness Center", "Spa", "Bar", "Laundry Service", "24-Hour Front Desk"],
    checkInTime: "16:00",
    checkOutTime: "10:00",
    roomsAvailable: 46,
    isPetFriendly: true,
    currency: "EUR",
    contact: {
      contactEmail: "support@heritageview.com",
      contactPhone: "+247 800-657-3149",
    },
    policies: {
      cancellation: "No refunds for cancellations.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  },
  {
    id: "hotel-malta-3",
    name: "The Harbor House",
    address: "96 Park Avenue",
    rating: 3,
    accommodationType: "Business Hotel",
    amenities: ["Fitness Center", "Airport Shuttle", "Business Center", "Bar", "Swimming Pool", "24-Hour Front Desk", "Parking", "Room Service"],
    checkInTime: "16:00",
    checkOutTime: "10:00",
    roomsAvailable: 27,
    isPetFriendly: true,
    currency: "EUR",
    contact: {
      contactEmail: "contact@theharborhouse.com",
      contactPhone: "+591 438-578-7109",
    },
    policies: {
      cancellation: "Cancellation fee equivalent to one night's stay if cancelled less than 48 hours before check-in.",
      smoking: "Not Allowed",
    },
    isPopular: false,
  }
];
