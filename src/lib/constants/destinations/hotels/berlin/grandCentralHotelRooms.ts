import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-berlin-1-room-0-Double-CityView",
    name: "Tranquility Double Studio",
    description: "This palatial double accommodation offers where the city comes alive at dusk, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 212,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-berlin-1-room-0-Double-OceanView",
    name: "Superior Double Room",
    description: "Our Superior-themed double room offers stretching luxury, panoramic where you can enjoy stunning sunsets over the water, and with high-speed internet access, inspired by featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 290,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-berlin-1-room-0-Queen-MountainView",
    name: "Standard Queen Loft",
    description: "Experience our opulent, tasteful queen loft where you can experience the beauty of nature, featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 332,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-berlin-1-room-0-King-CityView",
    name: "Serenity King Suite",
    description: "This refreshing king accommodation offers showcasing the urban landscape, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 351,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
