import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-kiel-1-room-0",
    name: "Modern Queen Suite",
    description: "Relax in our welcoming sumptuous queen suite featuring where you can enjoy stunning sunsets over the water, along with with a private balcony or terrace and created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Connecting Rooms", "Family Room", "Bluetooth Speaker"],
    pricePerNight: 152,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
