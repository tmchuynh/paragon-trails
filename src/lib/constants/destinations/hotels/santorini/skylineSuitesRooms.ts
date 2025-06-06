import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-santorini-1-room-0",
    name: "Serenity Sofa Bed Studio",
    description: "Step into a palatial sofa bed studio that combines Serenity-themed with breathtaking with a view of blooming flowers and greenery, complemented by with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Complimentary Bottled Water", "Luggage Rack", "Sauna", "Bathtub"],
    pricePerNight: 211,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-santorini-1-room-0",
    name: "Classic Double Room",
    description: "This large-scale double room promises where you can enjoy the ocean's beauty, enriched by Classic-themed details and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Fireplace", "Bluetooth Speaker", "Smoke Detector"],
    pricePerNight: 235,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-santorini-1-room-0",
    name: "Serenity Twin Loft",
    description: "Experience our open-concept, peaceful twin loft with a pleasant outlook, with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Streaming Services", "Board Games", "Soundproofing", "Kitchenette"],
    pricePerNight: 189,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
