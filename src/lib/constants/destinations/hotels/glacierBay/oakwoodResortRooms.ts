import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oakwood Resort
export const oakwoodResortRooms: RoomOption[] = [
  {
    id: "hotel-glacier-bay-4-room-3",
    name: "Tranquility Twin Penthouse",
    description: "A calming twin retreat where you can enjoy the city's energy, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Complimentary Bottled Water", "In-Room Safe", "Jacuzzi Tub", "Fireplace", "Smoke Detector"],
    pricePerNight: 182,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
