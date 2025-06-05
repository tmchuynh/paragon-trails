import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-st-thomas-3-room-2",
    name: "Horizon Twin Room",
    description: "Our voluminous Horizon-themed room offers with a pleasant outlook, generous comfort, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Board Games", "Sauna", "Soundproofing"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 115,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-st-thomas-3-room-2",
    name: "Harmony Twin Penthouse",
    description: "This serene twin penthouse promises with a view of the mountains' lush valleys, enriched by Harmony-themed details and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "In-Room Safe", "Bathtub", "Family Room", "Luggage Rack", "Board Games"],
    pricePerNight: 135,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  }
];
