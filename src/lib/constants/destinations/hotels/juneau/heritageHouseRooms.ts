import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage House
export const heritageHouseRooms: RoomOption[] = [
  {
    id: "hotel-juneau-2-room-1",
    name: "Standard King Villa",
    description: "This sophisticated king accommodation offers with a front-row seat to the city's heartbeat, offering a classic yet modern American experience.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "In-Room Safe", "Family Room", "Mini Bar", "Board Games"],
    pricePerNight: 283,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-juneau-2-room-1",
    name: "Pioneer Twin Apartment",
    description: "Discover the charm of this Pioneer-themed twin apartment, complete with wide-ranging ambiance, stunning with stunning views of the city skyline, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "Luggage Rack", "Outdoor Furniture", "Dining Table", "Streaming Services"],
    pricePerNight: 210,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
