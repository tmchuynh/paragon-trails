import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-dubai-7-room-6",
    name: "Pearl Double Apartment",
    description: "Enjoy a artistic stay in our Pearl-themed double apartment, offering with a view of the garden's peaceful ambiance, with plush bedding for ultimate comfort, and unique touches of featuring opulent Arabian-inspired decor.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Smoke Detector", "Wake-Up Service", "In-Room Safe", "Fireplace", "Flat-Screen TV"],
    pricePerNight: 151,
    currency: "AED",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-dubai-7-room-6",
    name: "Pearl King Suite",
    description: "Relax in our majestic contemporary king suite featuring where you can relax to the sound of the waves, along with featuring a curated minibar selection and featuring opulent Arabian-inspired decor.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Jacuzzi Tub", "Fitness Equipment", "Pet Friendly", "Soundproofing", "Streaming Services"],
    pricePerNight: 257,
    currency: "AED",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
