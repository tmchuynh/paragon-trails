import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Mountain Lodge
export const theMountainLodgeRooms: RoomOption[] = [
  {
    id: "hotel-tangier-2-room-1-Queen-MountainView",
    name: "Signature Queen Apartment",
    description: "A soothing queen retreat where you can experience the beauty of nature, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 31476,
    currency: "MAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-tangier-2-room-1-King-MountainView",
    name: "Signature King Suite",
    description: "A prestigious king suite designed for tasteful comfort, with where you can enjoy the tranquility of the mountains and with carefully selected furnishings, reflecting designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 37234,
    currency: "MAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-tangier-2-room-1-SofaBed-MountainView",
    name: "Standard Sofa Bed Villa",
    description: "Discover the charm of this Standard-themed sofa bed villa, complete with plush ambiance, stunning where you can enjoy the serenity of mountain life, and with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 24224,
    currency: "MAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-tangier-2-room-1-Single-MountainView",
    name: "Deluxe Single Apartment",
    description: "Indulge in the eclectic atmosphere of our single apartment, with spectacular where you can find inspiration in the mountains, created with both style and function in mind, and with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 21332,
    currency: "MAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
