import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Dominion
export const theDominionRooms: RoomOption[] = [
  {
    id: "hotel-victoria-3-room-2",
    name: "Frontier King Penthouse",
    description: "Experience our sleek, serene king penthouse where you can enjoy the serenity of mountain life, with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "Mini Bar", "Fitness Equipment", "Refrigerator"],
    pricePerNight: 164,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-victoria-3-room-2",
    name: "Timber King Studio",
    description: "Indulge in the generous atmosphere of our king studio, with spectacular where the ocean meets the sky, blending urban sophistication with wilderness charm, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Sauna", "Accessible Room", "Bathtub", "Family Room"],
    pricePerNight: 164,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
