import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-rome-1-room-0",
    name: "Luxury King Loft",
    description: "Step into a luxurious king loft that combines Luxury-themed with breathtaking with a pleasant outlook, complemented by with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Luggage Rack", "Books", "Mini Bar", "Flat-Screen TV", "Kitchenette"],
    pricePerNight: 303,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-rome-1-room-0",
    name: "Serenity King Villa",
    description: "Step into a tasteful king villa that combines Serenity-themed with breathtaking where you can hear the soothing sound of the sea, complemented by with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "Fireplace", "Seating Area"],
    pricePerNight: 413,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
