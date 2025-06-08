import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Corfu Ionian View
export const corfuIonianViewRooms: RoomOption[] = [
  {
    id: "hotel-athens-2-room-1-Queen-GardenView",
    name: "Luxury Queen Villa",
    description: "Step into a comfortable queen villa that combines Luxury-themed with breathtaking with a view of the garden's natural beauty, complemented by with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 117,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-athens-2-room-1-Twin-CityView",
    name: "Aegean Twin Suite",
    description: "This majestic twin suite promises offering panoramic city vistas, enriched by Aegean-themed details and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 80,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-athens-2-room-1-King-GardenView",
    name: "Executive King Apartment",
    description: "Our plush Executive-themed apartment offers where you can take in the fresh air, comfy comfort, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 152,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-athens-2-room-1-Twin-None",
    name: "Luxury Twin Room",
    description: "Indulge in the comfortable atmosphere of our twin room, with spectacular with a pleasant outlook, with classic Greek architectural elements and modern comforts, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 74,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
