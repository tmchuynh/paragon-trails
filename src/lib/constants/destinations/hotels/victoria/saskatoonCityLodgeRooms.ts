import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Saskatoon City Lodge
export const saskatoonCityLodgeRooms: RoomOption[] = [
  {
    id: "hotel-victoria-1-room-0-King-None",
    name: "Frontier King Penthouse",
    description: "This avant-garde king accommodation offers with a pleasant outlook, blending urban sophistication with wilderness charm.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 191,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-victoria-1-room-0-King-GardenView",
    name: "Deluxe King Villa",
    description: "This comfy king villa promises where you can find solace in nature's embrace, enriched by Deluxe-themed details and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 250,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-victoria-1-room-0-King-OceanView",
    name: "Premium King Penthouse",
    description: "Our elegant Premium-themed penthouse offers with a private balcony overlooking the sea, bohemian comfort, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 272,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-victoria-1-room-0-SofaBed-CityView",
    name: "Aurora Sofa Bed Apartment",
    description: "Discover the charm of this Aurora-themed sofa bed apartment, complete with open-concept ambiance, stunning with a front-row seat to the city's heartbeat, and featuring premium bath amenities.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 141,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
