import { Hotel } from "@/lib/interfaces/services/rentals";

export const florenceHotels: Hotel[] = [
  {
    id: "hotel-florence-1",
    name: "Grand Central Hotel",
    address: "87 Broadway St",
    rating: 4,
    accommodationType: "All-Inclusive Resort",
    amenities: [
      "Parking",
      "24-Hour Front Desk",
      "Spa",
      "Restaurant",
      "Pet Friendly",
      "Business Center",
    ],
    checkInTime: "15:00",
    checkOutTime: "10:00",
    roomsAvailable: 35,
    isPetFriendly: false,
    currency: "EUR",
    contact: {
      contactEmail: "hello@grandcentralhotel.com",
      contactPhone: "+523 903-534-6052",
    },
    policies: {
      cancellation:
        "Free cancellation up to 7 days before arrival; no refund after that.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  },
  {
    id: "hotel-florence-2",
    name: "The Harbor House",
    address: "119 Queen Rd",
    rating: 3,
    accommodationType: "Luxury Villa",
    amenities: [
      "Room Service",
      "24-Hour Front Desk",
      "Conference Room",
      "Restaurant",
      "Business Center",
      "Parking",
      "Spa",
      "Fitness Center",
      "Non-Smoking Rooms",
      "Swimming Pool",
    ],
    checkInTime: "13:00",
    checkOutTime: "10:00",
    roomsAvailable: 31,
    isPetFriendly: true,
    currency: "EUR",
    contact: {
      contactEmail: "team@theharborhouse.com",
      contactPhone: "+315 568-309-5006",
    },
    policies: {
      cancellation:
        "Free cancellation up to 7 days before arrival; no refund after that.",
      smoking: "Not Allowed",
    },
    isPopular: false,
  },
  {
    id: "hotel-florence-3",
    name: "Grand Central Hotel",
    address: "133 Sunset Court",
    rating: 4,
    accommodationType: "Boutique Hotel",
    amenities: [
      "Free Wi-Fi",
      "Swimming Pool",
      "Conference Room",
      "Laundry Service",
      "Bar",
      "Fitness Center",
    ],
    accessibilityFeatures: ["Visual Alarm"],
    checkInTime: "13:00",
    checkOutTime: "10:00",
    roomsAvailable: 32,
    isPetFriendly: false,
    currency: "EUR",
    contact: {
      contactEmail: "info@grandcentralhotel.com",
      contactPhone: "+633 786-814-7377",
    },
    policies: {
      cancellation:
        "Cancellation made less than 3 days before check-in will incur a 75% charge.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  },
];
