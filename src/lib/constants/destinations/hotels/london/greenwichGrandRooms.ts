import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Greenwich Grand
export const greenwichGrandRooms: RoomOption[] = [
  {
    id: "hotel-london-5-room-4",
    name: "Classic King Studio",
    description: "Our plush Classic-themed studio offers showcasing the urban landscape, vintage comfort, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Pet Friendly", "Mini Bar", "Connecting Rooms"],
    pricePerNight: 320,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-london-5-room-4",
    name: "Standard King Loft",
    description: "This snug king loft promises overlooking spectacular mountain ranges, enriched by Standard-themed details and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Complimentary Bottled Water", "Refrigerator", "Jacuzzi Tub", "Board Games"],
    pricePerNight: 320,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
