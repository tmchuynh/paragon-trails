import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Regent Hotel
export const theRegentHotelRooms: RoomOption[] = [
  {
    id: "hotel-london-1-room-0",
    name: "Signature King Room",
    description: "Relax in our eclectic refined king room featuring with stunning views of the city skyline, along with with a spacious seating area and created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Bluetooth Speaker", "Luggage Rack", "Books", "Connecting Rooms"],
    pricePerNight: 113,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-london-1-room-0",
    name: "Tudor King Penthouse",
    description: "Enjoy a palatial stay in our Tudor-themed king penthouse, offering with the sound of the ocean as your backdrop, with a spacious work area, and unique touches of designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Blackout Curtains", "Accessible Room", "Dining Table", "Soundproofing", "Mini Bar", "Outdoor Furniture"],
    pricePerNight: 133,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
