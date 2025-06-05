import { Hotel } from "@/lib/interfaces/services/rentals";

export const osloHotels: Hotel[] = [
  {
    id: "hotel-oslo-1",
    name: "The Prestige Hotel",
    address: "160 Park Place",
    rating: 4,
    accommodationType: "Luxury Villa",
    amenities: ["Bar", "Conference Room", "Pet Friendly", "Free Wi-Fi", "Parking"],
    accessibilityFeatures: ["Hearing Support", "Visual Aids"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    roomsAvailable: 24,
    isPetFriendly: false,
    currency: "EUR",
    contact: {
      contactEmail: "admin@theprestigehotel.com",
      contactPhone: "+863 430-520-7165",
    },
    policies: {
      cancellation: "Cancellation made less than 3 days before check-in will incur a 75% charge.",
      smoking: "Allowed",
    },
    isPopular: false,
  },
  {
    id: "hotel-oslo-2",
    name: "Sunset Villa",
    address: "128 Main Court",
    rating: 4,
    accommodationType: "Hotel",
    amenities: ["Bar", "Fitness Center", "Spa", "Airport Shuttle", "Pet Friendly", "Room Service", "Conference Room"],
    accessibilityFeatures: ["Accessible Pathways", "Visual Aids", "Sign Language Interpretation"],
    checkInTime: "14:00",
    checkOutTime: "11:00",
    roomsAvailable: 31,
    isPetFriendly: false,
    currency: "EUR",
    contact: {
      contactEmail: "support@sunsetvilla.com",
      contactPhone: "+246 846-768-3762",
    },
    policies: {
      cancellation: "Free cancellation up to 72 hours before check-in. If cancelled later, the first night will be charged.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  },
  {
    id: "hotel-oslo-3",
    name: "Urban Garden Hotel",
    address: "213 South King Road",
    rating: 3,
    accommodationType: "Luxury Lodge",
    amenities: ["Swimming Pool", "Bar", "Business Center", "24-Hour Front Desk", "Room Service", "Fitness Center", "Airport Shuttle", "Free Wi-Fi"],
    accessibilityFeatures: ["Accessible Shower", "Lowered Light Switches"],
    checkInTime: "13:00",
    checkOutTime: "12:00",
    roomsAvailable: 41,
    isPetFriendly: false,
    currency: "EUR",
    contact: {
      contactEmail: "reception@urbangardenhotel.com",
      contactPhone: "+747 760-117-9546",
    },
    policies: {
      cancellation: "Cancellation made less than 3 days before check-in will incur a 75% charge.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  }
];
