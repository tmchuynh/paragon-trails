import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-melbourne-3-room-2",
    name: "Bushland King Penthouse",
    description: "Discover the charm of this Bushland-themed king penthouse, complete with refined ambiance, stunning where you can hear the soothing sound of the sea, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Accessible Room", "Kitchenette", "Wake-Up Service"],
    pricePerNight: 238,
    currency: "AUD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
