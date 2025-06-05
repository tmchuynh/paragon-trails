import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Riverside Manor
export const riversideManorRooms: RoomOption[] = [
  {
    id: "hotel-charleston-1-room-0",
    name: "Luxury King Villa",
    description: "Indulge in the rustic atmosphere of our king villa, with spectacular with a pleasant outlook, with rustic and modern influences, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Wake-Up Service", "Mini Bar", "Pet Friendly"],
    pricePerNight: 143,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-charleston-1-room-0",
    name: "Pioneer King Loft",
    description: "Discover the charm of this Pioneer-themed king loft, complete with refined ambiance, stunning featuring a blend of modern and historic architecture, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Flat-Screen TV", "Dining Table", "Family Room", "Streaming Services", "Blackout Curtains"],
    pricePerNight: 142,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
