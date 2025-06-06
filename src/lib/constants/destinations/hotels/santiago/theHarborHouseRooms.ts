import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-santiago-7-room-6",
    name: "Signature Queen Apartment",
    description: "Enjoy a large-scale stay in our Signature-themed queen apartment, offering where the city comes alive at dusk, including climate control for your comfort, and unique touches of offering serene and refined interiors.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Fitness Equipment", "Books", "Blackout Curtains", "Ironing Facilities"],
    pricePerNight: 172,
    currency: "CLP",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-santiago-7-room-6",
    name: "Atacama Single Room",
    description: "This extravagant single room promises with a view of the ocean's changing tides, enriched by Atacama-themed details and with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Family Room", "Connecting Rooms", "Wake-Up Service", "Balcony"],
    pricePerNight: 129,
    currency: "CLP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-santiago-7-room-6",
    name: "Atacama Single Villa",
    description: "Experience our tasteful, palatial single villa with a view of colorful flower beds, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Soundproofing", "Sauna", "Fireplace", "Wake-Up Service", "Ironing Facilities"],
    accessibilityFeatures: ["Elevator"],
    pricePerNight: 119,
    currency: "CLP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
