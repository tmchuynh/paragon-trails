import { Hotel } from "@/lib/interfaces/services/rentals";

export const athensHotels: Hotel[] = [
  {
    id: "hotel-athens-1",
    name: "The Prestige Hotel",
    address: "158 Upper Broadway Ave",
    rating: 3,
    accommodationType: "Extended Stay Hotel",
    amenities: [
      "Free Wi-Fi",
      "Room Service",
      "Spa",
      "Non-Smoking Rooms",
      "Swimming Pool",
      "Bar",
      "Fitness Center",
      "Airport Shuttle",
    ],
    accessibilityFeatures: [
      "Wheelchair Accessible",
      "Visual Aids",
      "Grab Bars",
    ],
    checkInTime: "16:00",
    checkOutTime: "12:00",
    roomsAvailable: 46,
    isPetFriendly: false,
    currency: "EUR",
    contact: {
      contactEmail: "connect@theprestigehotel.com",
      contactPhone: "+437 442-295-7194",
    },
    policies: {
      cancellation:
        "Cancellation made less than 3 days before check-in will incur a 75% charge.",
      smoking: "Designated Areas",
    },
    isPopular: true,
  },
  {
    id: "hotel-athens-2",
    name: "Skyline Suites",
    address: "249 Sunset Rd",
    rating: 4,
    accommodationType: "Luxury Villa",
    amenities: [
      "Non-Smoking Rooms",
      "Airport Shuttle",
      "Spa",
      "Restaurant",
      "Bar",
      "Free Wi-Fi",
      "Room Service",
    ],
    accessibilityFeatures: [
      "Accessible Bathroom",
      "Assistive Listening Devices",
    ],
    checkInTime: "13:00",
    checkOutTime: "11:00",
    roomsAvailable: 22,
    isPetFriendly: false,
    currency: "EUR",
    contact: {
      contactEmail: "clientservices@skylinesuites.com",
      contactPhone: "+454 183-384-5496",
    },
    policies: {
      cancellation:
        "Cancellation fee equivalent to one night's stay if cancelled less than 48 hours before check-in.",
      smoking: "Designated Areas",
    },
    isPopular: true,
  },
  {
    id: "hotel-athens-3",
    name: "The Prestige Hotel",
    address: "17 Riverside Drive",
    rating: 4,
    accommodationType: "Resort",
    amenities: [
      "Laundry Service",
      "Fitness Center",
      "24-Hour Front Desk",
      "Business Center",
      "Non-Smoking Rooms",
    ],
    accessibilityFeatures: [
      "Visual Alarm",
      "Large Print Materials",
      "Wheelchair Accessible",
    ],
    checkInTime: "15:00",
    checkOutTime: "10:00",
    roomsAvailable: 48,
    isPetFriendly: true,
    currency: "EUR",
    contact: {
      contactEmail: "clientservices@theprestigehotel.com",
      contactPhone: "+556 748-883-9321",
    },
    policies: {
      cancellation:
        "Full refund if cancelled within 48 hours of booking, minus service fees.",
      smoking: "Allowed",
    },
    isPopular: true,
  },
];
