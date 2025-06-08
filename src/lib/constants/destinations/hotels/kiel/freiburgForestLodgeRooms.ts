import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Freiburg Forest Lodge
export const freiburgForestLodgeRooms: RoomOption[] = [
  {
    id: "hotel-kiel-5-room-4-Queen-MountainView",
    name: "Classic Queen Apartment",
    description: "This open-concept queen accommodation offers with a view of the rugged mountain landscape, created with both style and function in mind.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 249,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-kiel-5-room-4-SofaBed-None",
    name: "Serenity Sofa Bed Villa",
    description: "This comfortable sofa bed accommodation offers with a pleasant outlook, decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 150,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-kiel-5-room-4-Single-None",
    name: "Tranquility Single Studio",
    description: "Tranquility-themed studio with bohemian decor, with a pleasant outlook, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 127,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-kiel-5-room-4-Queen-OceanView",
    name: "Serenity Queen Penthouse",
    description: "Enjoy a industrial stay in our Serenity-themed queen penthouse, offering overlooking the sparkling ocean waves, with a luxurious soaking tub, and unique touches of decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 251,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
