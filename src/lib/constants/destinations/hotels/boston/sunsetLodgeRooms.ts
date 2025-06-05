import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Lodge
export const sunsetLodgeRooms: RoomOption[] = [
  {
    id: "hotel-boston-1-room-0",
    name: "Colonial Twin Room",
    description: "A expansive twin retreat with a pleasant outlook, offering a classic yet modern American experience.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Connecting Rooms", "Mini Bar", "Jacuzzi Tub", "Bluetooth Speaker", "Family Room", "Complimentary Bottled Water"],
    pricePerNight: 232,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
