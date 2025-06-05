import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-dubai-1-room-0",
    name: "Classic Single Suite",
    description: "Indulge in the restful atmosphere of our single suite, with spectacular with majestic mountain vistas, offering lavish comfort and grandeur, and with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Kitchenette", "Blackout Curtains", "Fitness Equipment"],
    pricePerNight: 113,
    currency: "AED",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-dubai-1-room-0",
    name: "Deluxe Double Loft",
    description: "A indulgent double retreat with a view of the ocean's changing tides, blending traditional motifs with futuristic luxury.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Dining Table", "Bathtub", "Luggage Rack"],
    pricePerNight: 143,
    currency: "AED",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-dubai-1-room-0",
    name: "Falcon Twin Loft",
    description: "Enjoy a spacious stay in our Falcon-themed twin loft, offering overlooking the vibrant cityscape, with a luxurious soaking tub, and unique touches of blending traditional motifs with futuristic luxury.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Jacuzzi Tub", "Luggage Rack", "Sauna", "Balcony", "Fitness Equipment"],
    pricePerNight: 105,
    currency: "AED",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
