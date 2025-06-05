import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-buenos-aires-5-room-4",
    name: "Classic King Loft",
    description: "A elegant king retreat where you can enjoy the sights and sounds of nature, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Sauna", "Blackout Curtains", "Wake-Up Service", "Ironing Facilities", "Refrigerator", "Mini Bar"],
    pricePerNight: 147,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-buenos-aires-5-room-4",
    name: "Luxury King Studio",
    description: "Enjoy a fashionable stay in our Luxury-themed king studio, offering where you can take in the fresh mountain air, with a private balcony or terrace, and unique touches of decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Balcony", "Accessible Room", "Soundproofing", "Pet Friendly"],
    pricePerNight: 167,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
