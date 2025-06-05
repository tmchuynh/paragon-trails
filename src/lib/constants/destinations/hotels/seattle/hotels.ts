import { Hotel } from "@/lib/interfaces/services/rentals";

export const seattleHotels: Hotel[] = [
  {
    id: "hotel-seattle-1",
    name: "Sunset Lodge",
    address: "66 Elm Ct",
    rating: 4,
    accommodationType: "Luxury Hotel",
    amenities: ["Free Wi-Fi", "Laundry Service", "Non-Smoking Rooms", "Conference Room", "Bar"],
    accessibilityFeatures: ["Wheelchair Accessible", "Accessible Parking"],
    checkInTime: "14:00",
    checkOutTime: "10:00",
    roomsAvailable: 33,
    isPetFriendly: true,
    currency: "USD",
    contact: {
      contactEmail: "customerservice@sunsetlodge.com",
      contactPhone: "+566 197-915-6504",
    },
    policies: {
      cancellation: "Flexible cancellation policy: free cancellation up to 12 hours before check-in.",
      smoking: "Not Allowed",
    },
    isPopular: true,
  },
  {
    id: "hotel-seattle-2",
    name: "Pacific Horizon Hotel",
    address: "166 N Broadway Trl",
    rating: 4,
    accommodationType: "Boutique Inn",
    amenities: ["Bar", "Airport Shuttle", "Business Center", "Pet Friendly", "Swimming Pool", "24-Hour Front Desk", "Non-Smoking Rooms", "Parking", "Free Wi-Fi"],
    checkInTime: "16:00",
    checkOutTime: "10:00",
    roomsAvailable: 31,
    isPetFriendly: true,
    currency: "USD",
    contact: {
      contactEmail: "contact@pacifichorizonhotel.com",
      contactPhone: "+716 231-174-4521",
    },
    policies: {
      cancellation: "Flexible cancellation policy: free cancellation up to 12 hours before check-in.",
      smoking: "Allowed",
    },
    isPopular: false,
  },
  {
    id: "hotel-seattle-3",
    name: "Heritage House",
    address: "65 NE Cedar Pl",
    rating: 3,
    accommodationType: "Hostel",
    amenities: ["Free Wi-Fi", "Non-Smoking Rooms", "24-Hour Front Desk", "Laundry Service", "Swimming Pool", "Fitness Center"],
    accessibilityFeatures: ["Sign Language Interpretation", "Visual Alarm", "Lowered Light Switches"],
    checkInTime: "13:00",
    checkOutTime: "12:00",
    roomsAvailable: 10,
    isPetFriendly: false,
    currency: "USD",
    contact: {
      contactEmail: "communications@heritagehouse.com",
      contactPhone: "+608 111-242-3425",
    },
    policies: {
      cancellation: "Free cancellation up to 72 hours before check-in. If cancelled later, the first night will be charged.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  }
];
