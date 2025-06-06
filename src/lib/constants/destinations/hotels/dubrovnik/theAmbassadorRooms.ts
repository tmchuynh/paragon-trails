import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-dubrovnik-1-room-0",
    name: "Serenity Sofa Bed Penthouse",
    description: "This relaxing sofa bed penthouse promises where you can enjoy the city's energy, enriched by Serenity-themed details and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Accessible Room", "Smoke Detector", "Complimentary Bottled Water", "In-Room Safe", "Seating Area"],
    pricePerNight: 215,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-dubrovnik-1-room-0",
    name: "Modern Twin Apartment",
    description: "Step into a futuristic twin apartment that combines Modern-themed with breathtaking where you can find solace in nature's embrace, complemented by with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bluetooth Speaker", "Streaming Services", "Pet Friendly", "Accessible Room", "Smoke Detector", "Fireplace"],
    pricePerNight: 221,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
