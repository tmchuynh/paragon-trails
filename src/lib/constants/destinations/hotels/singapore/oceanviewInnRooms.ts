import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-singapore-6-room-5",
    name: "Lion City King Villa",
    description: "Lion City-themed villa with soft decor, where you can relax to the sound of the waves, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Books", "Board Games", "Mini Bar", "Blackout Curtains"],
    pricePerNight: 531,
    currency: "SGD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-singapore-6-room-5",
    name: "Skyline King Suite",
    description: "Indulge in the room-filled atmosphere of our king suite, with spectacular with a view of the mountains' lush valleys, featuring sleek, contemporary designs, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Fireplace", "Balcony"],
    pricePerNight: 525,
    currency: "SGD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
