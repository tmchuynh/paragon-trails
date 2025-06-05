import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-st-petersburg-2-room-1",
    name: "Superior King Villa",
    description: "Our Superior-themed king villa offers vintage luxury, panoramic featuring a blend of modern and historic architecture, and featuring a curated minibar selection, inspired by featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Balcony", "Outdoor Furniture", "Board Games"],
    pricePerNight: 171,
    currency: "RUB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-st-petersburg-2-room-1",
    name: "Serenity King Apartment",
    description: "Unwind in this stylish king apartment with a pleasant outlook, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Blackout Curtains", "Family Room", "In-Room Safe"],
    pricePerNight: 152,
    currency: "RUB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
