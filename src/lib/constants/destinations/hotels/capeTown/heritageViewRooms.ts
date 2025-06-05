import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-cape-town-2-room-1",
    name: "Executive King Room",
    description: "Experience our vintage, deluxe king room where you can enjoy the serenity of mountain life, featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Dining Table", "Fireplace", "Accessible Room"],
    pricePerNight: 191,
    currency: "ZAR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
