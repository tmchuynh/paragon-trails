import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Golden Marlin
export const theGoldenMarlinRooms: RoomOption[] = [
  {
    id: "hotel-miami-9-room-8-King-GardenView",
    name: "Classic King Room",
    description: "Unwind in this soothing king room where you can enjoy the sights and sounds of nature, with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 342,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-miami-9-room-8-Twin-CityView",
    name: "Superior Twin Penthouse",
    description: "Superior-themed twin penthouse overlooking the vibrant cityscape, with rustic and modern influences and with a spacious seating area.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 202,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-miami-9-room-8-SofaBed-GardenView",
    name: "Colonial Sofa Bed Room",
    description: "Colonial-themed room with roomy decor, where you can relax in a natural oasis, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 187,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-miami-9-room-8-Double-CityView",
    name: "Premium Double Studio",
    description: "Unwind in this luxurious double studio where the city comes alive at dusk, with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 203,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
