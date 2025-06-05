import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Palms
export const thePalmsRooms: RoomOption[] = [
  {
    id: "hotel-miami-4-room-3",
    name: "Manhattan King Room",
    description: "This palatial king accommodation offers with a view of the mountains' serene beauty, with rustic and modern influences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Refrigerator", "Mini Bar", "Pet Friendly", "Kitchenette", "Complimentary Bottled Water"],
    accessibilityFeatures: ["Wheelchair Accessible", "Visual Aids"],
    pricePerNight: 422,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-miami-4-room-3",
    name: "Colonial King Suite",
    description: "Indulge in the traditional atmosphere of our king suite, with spectacular with a view of the city's waterfront, highlighting contemporary American style, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Streaming Services", "Mini Bar", "Ironing Facilities", "Flat-Screen TV", "Luggage Rack", "Pet Friendly"],
    accessibilityFeatures: ["Hearing Support", "Visual Aids"],
    pricePerNight: 346,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
