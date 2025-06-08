import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Ha Long Boutique Stay
export const haLongBoutiqueStayRooms: RoomOption[] = [
  {
    id: "hotel-da-nang-4-room-3-Single-None",
    name: "Deluxe Single Villa",
    description: "Experience our inviting, retro single villa with a pleasant outlook, including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 4711279,
    currency: "VND",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-da-nang-4-room-3-King-OceanView",
    name: "Classic King Penthouse",
    description: "This retro king penthouse promises where the horizon meets the ocean, enriched by Classic-themed details and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 11703209,
    currency: "VND",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-da-nang-4-room-3-Double-None",
    name: "Deluxe Double Villa",
    description: "Unwind in this relaxing double villa with a pleasant outlook, with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 6478726,
    currency: "VND",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-da-nang-4-room-3-Twin-MountainView",
    name: "Horizon Twin Villa",
    description: "Enjoy a sleek stay in our Horizon-themed twin villa, offering where you can enjoy the serenity of mountain life, featuring a curated minibar selection, and unique touches of decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 6743922,
    currency: "VND",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
