import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Dominion
export const theDominionRooms: RoomOption[] = [
  {
    id: "hotel-quebec-city-1-room-0",
    name: "Classic King Apartment",
    description: "Classic-themed king apartment with a pleasant outlook, featuring thoughtful design elements and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Wake-Up Service", "Books", "Bathtub", "Family Room"],
    pricePerNight: 120,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
