import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Crown and Anchor
export const theCrownAndAnchorRooms: RoomOption[] = [
  {
    id: "hotel-southampton-17-room-16-Twin-None",
    name: "Piccadilly Twin Suite",
    description: "Indulge in the glamorous atmosphere of our twin suite, with spectacular with a pleasant outlook, designed for ultimate comfort, and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 57,
    currency: "GBP",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-southampton-17-room-16-King-OceanView",
    name: "Superior King Penthouse",
    description: "Step into a futuristic king penthouse that combines Superior-themed with breathtaking where you can hear the soothing sound of the sea, complemented by with a spacious seating area.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 104,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-southampton-17-room-16-SofaBed-None",
    name: "Kensington Sofa Bed Penthouse",
    description: "A opulent sofa bed retreat with a pleasant outlook, decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 53,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-southampton-17-room-16-King-CityView",
    name: "Superior King Villa",
    description: "Enjoy a futuristic stay in our Superior-themed king villa, offering where you can watch the city wake up, featuring premium bath amenities, and unique touches of created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 93,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
