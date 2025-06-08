import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Tokyo Courtyard
export const theTokyoCourtyardRooms: RoomOption[] = [
  {
    id: "hotel-yokohama-4-room-3-King-GardenView",
    name: "Superior King Apartment",
    description: "Experience our regal, intimate king apartment where you can take in the fresh air, with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 4557628,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-yokohama-4-room-3-King-OceanView",
    name: "Bamboo King Room",
    description: "Unwind in this roomy king room with a view of the tranquil sea, with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 4655993,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-yokohama-4-room-3-Twin-GardenView",
    name: "Imperial Twin Loft",
    description: "Our industrial Imperial-themed loft offers with a view of shaded garden paths, retro comfort, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 2606087,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-yokohama-4-room-3-King-MountainView",
    name: "Sakura King Room",
    description: "Our Sakura-themed king room offers prestigious luxury, panoramic with a view of the rugged mountain landscape, and offering a unique blend of style and comfort, inspired by featuring traditional tatami elements.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 4791484,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
