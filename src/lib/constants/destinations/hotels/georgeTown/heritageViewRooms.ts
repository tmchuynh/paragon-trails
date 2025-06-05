import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-george-town-3-room-2",
    name: "Horizon Twin Room",
    description: "Step into a vast twin room that combines Horizon-themed with breathtaking with a pleasant outlook, complemented by with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Jacuzzi Tub", "Family Room", "Sauna", "Streaming Services"],
    pricePerNight: 105,
    currency: "KYD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-george-town-3-room-2",
    name: "Superior Twin Studio",
    description: "A intimate twin retreat where you can escape to the mountains, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Complimentary Bottled Water", "Kitchenette", "Jacuzzi Tub", "Sauna"],
    pricePerNight: 139,
    currency: "KYD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-george-town-3-room-2",
    name: "Harmony King Penthouse",
    description: "Experience our peaceful, minimalist king penthouse with panoramic views of the mountain landscape, with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Accessible Room", "Flat-Screen TV", "Board Games", "Seating Area"],
    pricePerNight: 203,
    currency: "KYD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
