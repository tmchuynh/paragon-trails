import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oakwood Resort
export const oakwoodResortRooms: RoomOption[] = [
  {
    id: "hotel-boston-2-room-1",
    name: "Colonial Single Room",
    description: "Experience our contemporary, soft single room showcasing the urban landscape, with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Mini Bar", "Bluetooth Speaker", "Board Games"],
    pricePerNight: 76,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
