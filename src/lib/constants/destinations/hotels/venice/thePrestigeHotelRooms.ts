import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-venice-4-room-3",
    name: "Classic Queen Loft",
    description: "Classic-themed queen loft with a view of the sandy beaches, featuring tasteful Mediterranean touches and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Dining Table", "Mini Bar", "Connecting Rooms"],
    pricePerNight: 185,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-venice-4-room-3",
    name: "Serenity Sofa Bed Room",
    description: "Unwind in this room-filled sofa bed room with a view of the mountains' changing seasons, with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Mini Bar", "Outdoor Furniture", "Blackout Curtains", "Books", "Bluetooth Speaker"],
    pricePerNight: 131,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-venice-4-room-3",
    name: "Serenity Sofa Bed Villa",
    description: "Indulge in the stylish atmosphere of our sofa bed villa, with spectacular where you can enjoy the tranquility of nature, offering a touch of la dolce vita, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Sauna", "Jacuzzi Tub", "Family Room"],
    pricePerNight: 119,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
