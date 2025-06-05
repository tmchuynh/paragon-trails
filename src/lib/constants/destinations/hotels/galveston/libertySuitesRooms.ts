import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Liberty Suites
export const libertySuitesRooms: RoomOption[] = [
  {
    id: "hotel-galveston-1-room-0",
    name: "Deluxe King Room",
    description: "This sophisticated king room promises with stunning views of the city skyline, enriched by Deluxe-themed details and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Jacuzzi Tub", "Family Room", "Connecting Rooms"],
    pricePerNight: 202,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
