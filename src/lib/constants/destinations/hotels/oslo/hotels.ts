import { Hotel } from "@/lib/interfaces/services/rentals";

export const osloHotels: Hotel[] = [
  {
    id: "hotel-oslo-1",
    name: "The Harbor House",
    address: "162 Main St",
    rating: 3,
    accommodationType: "Spa Hotel",
    amenities: [
      "Airport Shuttle",
      "Parking",
      "Swimming Pool",
      "Pet Friendly",
      "Restaurant",
      "Laundry Service",
    ],
    accessibilityFeatures: [
      "Elevator",
      "Visual Alarm",
      "Wheelchair Accessible",
    ],
    checkInTime: "14:00",
    checkOutTime: "11:00",
    roomsAvailable: 44,
    isPetFriendly: false,
    currency: "EUR",
    contact: {
      contactEmail: "hi@theharborhouse.com",
      contactPhone: "+674 846-665-5678",
    },
    policies: {
      cancellation:
        "Flexible cancellation policy: free cancellation up to 12 hours before check-in.",
      smoking: "Allowed",
    },
    isPopular: false,
  },
  {
    id: "hotel-oslo-2",
    name: "Grand Central Hotel",
    address: "230 South Park Blvd",
    rating: 4,
    accommodationType: "Boutique Hotel",
    amenities: [
      "Conference Room",
      "Non-Smoking Rooms",
      "Laundry Service",
      "Parking",
      "Restaurant",
      "Fitness Center",
    ],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    roomsAvailable: 53,
    isPetFriendly: false,
    currency: "EUR",
    contact: {
      contactEmail: "admin@grandcentralhotel.com",
      contactPhone: "+149 239-447-2311",
    },
    policies: {
      cancellation: "No refunds for cancellations.",
      smoking: "Allowed",
    },
    isPopular: true,
  },
  {
    id: "hotel-oslo-3",
    name: "The Harbor House",
    address: "98 Park St",
    rating: 3,
    accommodationType: "Boutique Hotel",
    amenities: [
      "Business Center",
      "Non-Smoking Rooms",
      "Bar",
      "Spa",
      "Airport Shuttle",
      "Laundry Service",
    ],
    accessibilityFeatures: ["Grab Bars"],
    checkInTime: "15:00",
    checkOutTime: "10:00",
    roomsAvailable: 52,
    isPetFriendly: false,
    currency: "EUR",
    contact: {
      contactEmail: "support@theharborhouse.com",
      contactPhone: "+255 129-829-1275",
    },
    policies: {
      cancellation:
        "Full refund if cancelled within 48 hours of booking, minus service fees.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  },
];
