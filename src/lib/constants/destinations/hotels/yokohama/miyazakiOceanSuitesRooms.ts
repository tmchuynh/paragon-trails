import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Miyazaki Ocean Suites
export const miyazakiOceanSuitesRooms: RoomOption[] = [
  {
    id: "hotel-yokohama-6-room-5-Queen-GardenView",
    name: "Zen Queen Room",
    description: "Relax in our elegant upscale queen room featuring where you can take in the fresh air, along with with a luxurious soaking tub and combining modern luxury with Japanese tradition.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 5772408,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-yokohama-6-room-5-Single-GardenView",
    name: "Classic Single Penthouse",
    description: "A avant-garde single retreat with a view of shaded garden paths, featuring traditional tatami elements.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 4149714,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-yokohama-6-room-5-King-GardenView",
    name: "Standard King Penthouse",
    description: "This relaxing king penthouse promises surrounded by vibrant flora, enriched by Standard-themed details and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    accessibilityFeatures: ["Elevator", "Hearing Support"],
    pricePerNight: 7273105,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-yokohama-6-room-5-Single-CityView",
    name: "Harmony Single Loft",
    description: "A prestigious single loft designed for ornate comfort, with with a window to the bustling city below and featuring premium bath amenities, reflecting combining modern luxury with Japanese tradition.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    accessibilityFeatures: ["Accessible Bathroom", "Wheelchair Accessible", "Elevator"],
    pricePerNight: 4306362,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-yokohama-6-room-5-Double-OceanView",
    name: "Executive Double Suite",
    description: "Unwind in this sizable double suite where you can watch the waves roll in, with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 5337830,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
