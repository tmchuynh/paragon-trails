import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Kobe Bay Resort
export const kobeBayResortRooms: RoomOption[] = [
  {
    id: "hotel-kyoto-5-room-4-Queen-GardenView",
    name: "Fuji Queen Room",
    description: "Enjoy a palatial stay in our Fuji-themed queen room, offering with serene garden views, with a spacious work area, and unique touches of combining modern luxury with Japanese tradition.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 6227226,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-kyoto-5-room-4-King-GardenView",
    name: "Superior King Studio",
    description: "Unwind in this avant-garde king studio featuring a peaceful garden setting, with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 6977115,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-kyoto-5-room-4-Twin-None",
    name: "Lotus Twin Villa",
    description: "Indulge in the heartwarming atmosphere of our twin villa, with spectacular with a pleasant outlook, offering the perfect balance of Eastern serenity and Western comfort, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 3898863,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-kyoto-5-room-4-King-MountainView",
    name: "Harmony King Room",
    description: "Our Harmony-themed king room offers intimate luxury, panoramic where you can enjoy the tranquility of the mountains, and complete with a well-appointed bathroom, inspired by offering the perfect balance of Eastern serenity and Western comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 7856482,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
