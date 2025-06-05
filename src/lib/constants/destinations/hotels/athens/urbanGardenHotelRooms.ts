import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-athens-2-room-1",
    name: "Tranquility King Apartment",
    description: "Our Tranquility-themed king apartment offers generous luxury, panoramic with a pleasant outlook, and with a private balcony or terrace, inspired by featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Balcony", "Fireplace", "Kitchenette"],
    pricePerNight: 95,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
