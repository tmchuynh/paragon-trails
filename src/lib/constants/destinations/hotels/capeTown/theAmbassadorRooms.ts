import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-cape-town-3-room-2",
    name: "Harmony King Villa",
    description: "Relax in our deluxe heartwarming king villa featuring with stunning views of the city skyline, along with with a spacious work area and decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Bathtub", "Bluetooth Speaker", "Jacuzzi Tub", "Mini Bar"],
    pricePerNight: 154,
    currency: "ZAR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
