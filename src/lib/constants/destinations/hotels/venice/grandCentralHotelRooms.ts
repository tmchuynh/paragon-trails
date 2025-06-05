import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-venice-5-room-4",
    name: "Luxury King Room",
    description: "Enjoy a glamorous stay in our Luxury-themed king room, offering featuring a blend of modern and historic architecture, including climate control for your comfort, and unique touches of offering a touch of la dolce vita.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Streaming Services", "Pet Friendly", "Soundproofing"],
    pricePerNight: 159,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-venice-5-room-4",
    name: "Serenity King Penthouse",
    description: "Discover the charm of this Serenity-themed king penthouse, complete with tranquil ambiance, stunning where you can relax to the sound of the waves, and with a spacious seating area.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Outdoor Furniture", "Dining Table", "Ironing Facilities", "Kitchenette"],
    pricePerNight: 179,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
