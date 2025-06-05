import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-roatan-3-room-2",
    name: "Tropical Coast King Apartment",
    description:
      "Tropical Coast-themed king apartment with a pleasant outlook, featuring handcrafted indigenous decor and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: [
      "Desk",
      "Free Wi-Fi",
      "Room Service",
      "Hair Dryer",
      "Toiletries",
      "Microwave",
      "Shower",
      "Heating",
      "Coffee Maker",
      "Slippers",
      "Bathrobe",
      "Room Service",
      "Alarm Clock",
      "Desk Lamp",
      "Daily Housekeeping",
      "Non-Smoking Room",
      "Television",
      "Air Conditioning",
      "Bathtub",
      "Balcony",
      "Family Room",
      "Fitness Equipment",
      "Blackout Curtains",
    ],
    accessibilityFeatures: ["Accessible Bathroom", "Visual Aids"],
    pricePerNight: 291,
    currency: "HNL",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
];
