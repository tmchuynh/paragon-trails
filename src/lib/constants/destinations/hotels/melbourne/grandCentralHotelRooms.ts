import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-melbourne-4-room-3",
    name: "Coral Reef King Penthouse",
    description: "Experience our tasteful, opulent king penthouse where you can enjoy the sights and sounds of nature, complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Smoke Detector", "Luggage Rack", "Books", "Family Room", "Ironing Facilities"],
    pricePerNight: 310,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-melbourne-4-room-3",
    name: "Outback King Loft",
    description: "Experience our indulgent, peaceful king loft where mountains paint the horizon, featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Connecting Rooms", "Bathtub", "Fireplace", "Wake-Up Service", "Jacuzzi Tub"],
    pricePerNight: 331,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
