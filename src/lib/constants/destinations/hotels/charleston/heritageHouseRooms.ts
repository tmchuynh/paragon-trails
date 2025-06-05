import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage House
export const heritageHouseRooms: RoomOption[] = [
  {
    id: "hotel-charleston-5-room-4",
    name: "Liberty Sofa Bed Villa",
    description: "Discover the charm of this Liberty-themed sofa bed villa, complete with futuristic ambiance, stunning where you can enjoy the beauty of nature, and with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Mini Bar", "Streaming Services"],
    pricePerNight: 106,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-charleston-5-room-4",
    name: "Heritage Twin Room",
    description: "Step into a regal twin room that combines Heritage-themed with breathtaking with panoramic views of the surrounding mountains, complemented by with a spacious work area.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Ironing Facilities", "Fireplace", "Balcony"],
    pricePerNight: 102,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
