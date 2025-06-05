import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Riverside Manor
export const riversideManorRooms: RoomOption[] = [
  {
    id: "hotel-skagway-3-room-2",
    name: "Pioneer King Suite",
    description: "Discover the charm of this Pioneer-themed king suite, complete with expansive ambiance, stunning with stunning views of the city skyline, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Board Games", "Complimentary Bottled Water", "Mini Bar", "Bluetooth Speaker", "Books"],
    pricePerNight: 315,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-skagway-3-room-2",
    name: "Premium King Studio",
    description: "Premium-themed studio with grandiose decor, with a view of tranquil water features, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Smoke Detector", "Board Games", "Luggage Rack", "Refrigerator", "Books"],
    pricePerNight: 281,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
