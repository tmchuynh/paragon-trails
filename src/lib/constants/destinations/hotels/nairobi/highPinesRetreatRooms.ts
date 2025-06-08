import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for High Pines Retreat
export const highPinesRetreatRooms: RoomOption[] = [
  {
    id: "hotel-nairobi-11-room-10-Twin-GardenView",
    name: "Classic Twin Studio",
    description: "Unwind in this indulgent twin studio with a view of the garden's vibrant colors, with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 2427952,
    currency: "KES",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-nairobi-11-room-10-Queen-CityView",
    name: "Luxury Queen Penthouse",
    description: "Discover the charm of this Luxury-themed queen penthouse, complete with chic ambiance, stunning with a front-row seat to the city's heartbeat, and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 3043690,
    currency: "KES",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-nairobi-11-room-10-Double-MountainView",
    name: "Classic Double Penthouse",
    description: "Our ample Classic-themed penthouse offers where you can enjoy the serenity of mountain life, voluminous comfort, and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 2629281,
    currency: "KES",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-nairobi-11-room-10-King-OceanView",
    name: "Premium King Apartment",
    description: "Our Premium-themed king apartment offers minimalist luxury, panoramic featuring uninterrupted ocean vistas, and complete with a well-appointed bathroom, inspired by decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 3749404,
    currency: "KES",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
