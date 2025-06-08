import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Tsim Sha Tsui Residence
export const tsimShaTsuiResidenceRooms: RoomOption[] = [
  {
    id: "hotel-hong-kong-10-room-9-Queen-CityView",
    name: "Executive Queen Villa",
    description: "Unwind in this luxurious queen villa with a front-row seat to the city's heartbeat, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 2373,
    currency: "HKD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-hong-kong-10-room-9-Queen-OceanView",
    name: "Premium Queen Villa",
    description: "Our airy Premium-themed villa offers where you can enjoy stunning sunsets over the water, homey comfort, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 2918,
    currency: "HKD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-hong-kong-10-room-9-Single-None",
    name: "Executive Single Studio",
    description: "This open-concept single studio promises with a pleasant outlook, enriched by Executive-themed details and with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 1485,
    currency: "HKD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-hong-kong-10-room-9-Double-GardenView",
    name: "Harmony Double Suite",
    description: "Discover the charm of this Harmony-themed double suite, complete with extensive ambiance, stunning where you can enjoy the serenity of a garden retreat, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 2217,
    currency: "HKD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
