import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Lakeview Retreat
export const lakeviewRetreatRooms: RoomOption[] = [
  {
    id: "hotel-victoria-1-room-0",
    name: "Classic Single Suite",
    description: "Relax in our artistic indulgent single suite featuring with a pleasant outlook, along with equipped with all the modern conveniences and inspired by the rugged beauty of Canadian landscapes.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Smoke Detector", "Jacuzzi Tub", "Seating Area", "Fireplace"],
    pricePerNight: 75,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  }
];
