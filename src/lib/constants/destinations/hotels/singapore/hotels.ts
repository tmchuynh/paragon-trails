import { Hotel } from "@/lib/interfaces/services/rentals";

export const singaporeHotels: Hotel[] = [
  {
    id: "hotel-singapore-1",
    name: "Sunset Villa",
    address: "250 Central Rd",
    rating: 4,
    accommodationType: "Extended Stay Hotel",
    amenities: ["Room Service", "Airport Shuttle", "Conference Room", "Free Wi-Fi", "Swimming Pool", "Restaurant", "Business Center", "Fitness Center", "Laundry Service", "Non-Smoking Rooms"],
    accessibilityFeatures: ["Accessible Bathroom"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    roomsAvailable: 33,
    isPetFriendly: false,
    currency: "SGD",
    contact: {
      contactEmail: "ask@sunsetvilla.com",
      contactPhone: "+150 370-899-9172",
    },
    policies: {
      cancellation: "Flexible cancellation policy: free cancellation up to 12 hours before check-in.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  },
  {
    id: "hotel-singapore-2",
    name: "Heritage View",
    address: "182 Sunset Place",
    rating: 3,
    accommodationType: "Hostel",
    amenities: ["Restaurant", "Room Service", "Airport Shuttle", "Free Wi-Fi", "Spa", "Fitness Center", "Non-Smoking Rooms", "24-Hour Front Desk", "Business Center"],
    accessibilityFeatures: ["Tactile Maps", "Assistive Listening Devices"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    roomsAvailable: 21,
    isPetFriendly: false,
    currency: "SGD",
    contact: {
      contactEmail: "care@heritageview.com",
      contactPhone: "+101 286-657-8637",
    },
    policies: {
      cancellation: "Free cancellation up to 14 days before check-in; 50% refund for cancellations made within 14 days.",
      smoking: "Allowed",
    },
    isPopular: true,
  },
  {
    id: "hotel-singapore-3",
    name: "Skyline Suites",
    address: "288 Queen Road",
    rating: 4,
    accommodationType: "Eco-Lodge",
    amenities: ["Business Center", "Free Wi-Fi", "Fitness Center", "Pet Friendly", "Restaurant", "Non-Smoking Rooms", "Swimming Pool", "Parking"],
    checkInTime: "16:00",
    checkOutTime: "12:00",
    roomsAvailable: 35,
    isPetFriendly: false,
    currency: "SGD",
    contact: {
      contactEmail: "hi@skylinesuites.com",
      contactPhone: "+544 998-829-8278",
    },
    policies: {
      cancellation: "Cancellation fee equivalent to one night's stay if cancelled less than 48 hours before check-in.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  }
];
