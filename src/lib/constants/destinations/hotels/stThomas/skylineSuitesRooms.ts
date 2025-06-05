import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-st-thomas-4-room-3",
    name: "Executive Single Apartment",
    description: "Relax in our prestigious vast single apartment featuring with a view of the mountains' changing seasons, along with offering a unique blend of style and comfort and created with both style and function in mind.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Luggage Rack", "Dining Table", "Connecting Rooms"],
    accessibilityFeatures: ["Wheelchair Accessible", "Hearing Support"],
    pricePerNight: 263,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-st-thomas-4-room-3",
    name: "Executive King Apartment",
    description: "Relax in our lavish indulgent king apartment featuring with a view of the rugged mountain landscape, along with with a luxurious soaking tub and created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Connecting Rooms", "Bathtub", "Soundproofing", "Outdoor Furniture", "Balcony"],
    accessibilityFeatures: ["Elevator"],
    pricePerNight: 532,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
