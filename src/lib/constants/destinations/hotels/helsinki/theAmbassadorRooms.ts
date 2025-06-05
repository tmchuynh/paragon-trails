import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-helsinki-3-room-2",
    name: "Serenity King Studio",
    description: "Discover the charm of this Serenity-themed king studio, complete with stylish ambiance, stunning showcasing the urban landscape, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Connecting Rooms", "Sauna"],
    pricePerNight: 380,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  }
];
