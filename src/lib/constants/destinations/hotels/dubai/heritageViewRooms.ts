import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-dubai-7-room-6",
    name: "Standard Single Loft",
    description: "Our large-scale Standard-themed loft offers where you can feel the ocean breeze, deluxe comfort, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Blackout Curtains", "Luggage Rack", "Pet Friendly", "Jacuzzi Tub", "Refrigerator"],
    pricePerNight: 130,
    currency: "AED",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-dubai-7-room-6",
    name: "Dubai Skyline Single Penthouse",
    description: "Our Dubai Skyline-themed single penthouse offers sleek luxury, panoramic with a front-row seat to the city's heartbeat, and with carefully selected furnishings, inspired by blending traditional motifs with futuristic luxury.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Sauna", "Seating Area", "In-Room Safe", "Pet Friendly"],
    pricePerNight: 110,
    currency: "AED",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-dubai-7-room-6",
    name: "Superior Double Suite",
    description: "Experience our luxurious, heartwarming double suite with a view of the mountains' breathtaking sunsets, with a spacious work area.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "In-Room Safe", "Blackout Curtains", "Pet Friendly", "Dining Table"],
    pricePerNight: 170,
    currency: "AED",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
