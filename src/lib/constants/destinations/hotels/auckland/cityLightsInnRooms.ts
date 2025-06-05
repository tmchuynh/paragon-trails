import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-auckland-1-room-0",
    name: "Luxury King Loft",
    description: "Luxury-themed king loft featuring a peaceful garden setting, blending rustic charm with modern comfort and with a spacious work area.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Fireplace", "Accessible Room", "Bathtub", "Kitchenette", "Jacuzzi Tub"],
    pricePerNight: 188,
    currency: "NZD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-auckland-1-room-0",
    name: "Signature King Studio",
    description: "Discover the charm of this Signature-themed king studio, complete with refined ambiance, stunning where you can watch the waves roll in, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Accessible Room", "Fireplace", "Sauna"],
    pricePerNight: 198,
    currency: "NZD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
