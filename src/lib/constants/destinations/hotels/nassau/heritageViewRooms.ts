import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-nassau-5-room-4",
    name: "Deluxe King Loft",
    description: "Relax in our plush room-filled king loft featuring with a backdrop of city parks and green spaces, along with offering a unique blend of style and comfort and blending island vibes with elegant comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Complimentary Bottled Water", "Pet Friendly", "Soundproofing", "Ironing Facilities", "Blackout Curtains", "Fireplace"],
    pricePerNight: 200,
    currency: "BSD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-nassau-5-room-4",
    name: "Lagoon King Villa",
    description: "A serene king retreat with serene garden views, offering a relaxed yet stylish atmosphere.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Ironing Facilities", "Fireplace", "Smoke Detector", "Dining Table", "Balcony"],
    pricePerNight: 211,
    currency: "BSD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
