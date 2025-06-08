import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Coastal Inn
export const theCoastalInnRooms: RoomOption[] = [
  {
    id: "hotel-tangier-6-room-5-King-GardenView",
    name: "Tranquility King Loft",
    description: "This tasteful king accommodation offers where you can enjoy the tranquility of nature, created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 15595,
    currency: "MAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-tangier-6-room-5-Queen-GardenView",
    name: "Superior Queen Apartment",
    description: "This refined queen accommodation offers where you can enjoy the beauty of nature, featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 12491,
    currency: "MAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-tangier-6-room-5-Twin-MountainView",
    name: "Deluxe Twin Loft",
    description: "Unwind in this inviting twin loft with a view of the mountains' breathtaking sunsets, equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 12248,
    currency: "MAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-tangier-6-room-5-King-MountainView",
    name: "Executive King Studio",
    description: "Relax in our glamorous stylish king studio featuring with a view of the rugged mountain landscape, along with with a luxurious soaking tub and featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 17573,
    currency: "MAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
