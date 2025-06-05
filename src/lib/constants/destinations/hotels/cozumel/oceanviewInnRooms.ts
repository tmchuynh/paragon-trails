import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-cozumel-3-room-2",
    name: "Luxury King Villa",
    description: "Experience our ornate, soft king villa with a pleasant outlook, with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bluetooth Speaker", "Streaming Services", "Mini Bar", "Fireplace", "Accessible Room"],
    pricePerNight: 149,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
