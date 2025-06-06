import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Laurentian
export const theLaurentianRooms: RoomOption[] = [
  {
    id: "hotel-vancouver-1-room-0",
    name: "Rockies Single Studio",
    description: "This retro single studio promises featuring awe-inspiring mountain scenery, enriched by Rockies-themed details and with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Fitness Equipment", "Sauna"],
    pricePerNight: 137,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-vancouver-1-room-0",
    name: "Rockies Twin Apartment",
    description: "Enjoy a classic stay in our Rockies-themed twin apartment, offering with a view of the mountains' natural beauty, featuring a curated minibar selection, and unique touches of inspired by the rugged beauty of Canadian landscapes.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Blackout Curtains", "Kitchenette", "Balcony", "Fireplace", "Mini Bar"],
    pricePerNight: 159,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
