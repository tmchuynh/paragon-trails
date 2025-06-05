import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-san-juan-2-room-1",
    name: "Classic King Apartment",
    description: "This inviting king apartment promises featuring a blend of modern and historic architecture, enriched by Classic-themed details and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Bathtub", "Blackout Curtains", "Pet Friendly", "Kitchenette", "Complimentary Bottled Water"],
    pricePerNight: 206,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-san-juan-2-room-1",
    name: "Horizon King Villa",
    description: "Unwind in this large-scale king villa with a view of snow-capped peaks, with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Outdoor Furniture", "Kitchenette", "Family Room"],
    pricePerNight: 223,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
