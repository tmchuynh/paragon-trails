import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-kiel-5-room-4",
    name: "Serenity Sofa Bed Loft",
    description: "A artistic sofa bed retreat with a view of the mountains' natural beauty, decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Mini Bar", "Fireplace", "Bluetooth Speaker", "Balcony", "Kitchenette"],
    pricePerNight: 243,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
