import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oakwood Resort
export const oakwoodResortRooms: RoomOption[] = [
  {
    id: "hotel-ketchikan-6-room-5",
    name: "Liberty King Villa",
    description: "This ample king villa promises with a view of the mountains' rugged terrain, enriched by Liberty-themed details and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Books", "Mini Bar"],
    pricePerNight: 173,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-ketchikan-6-room-5",
    name: "Manhattan King Penthouse",
    description: "This large-scale king accommodation offers where you can relax in a garden haven, highlighting contemporary American style.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Sauna", "Balcony", "Outdoor Furniture"],
    pricePerNight: 169,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  }
];
