import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Hikari Hotel
export const hikariHotelRooms: RoomOption[] = [
  {
    id: "hotel-tokyo-3-room-2",
    name: "Sakura Single Room",
    description: "A plush single retreat with a view of the city's waterfront, offering the perfect balance of Eastern serenity and Western comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Outdoor Furniture", "Kitchenette", "Flat-Screen TV"],
    pricePerNight: 86,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-tokyo-3-room-2",
    name: "Signature King Room",
    description: "Our Signature-themed king room offers voluminous luxury, panoramic with panoramic views of the surrounding mountains, and with a private balcony or terrace, inspired by combining modern luxury with Japanese tradition.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Refrigerator", "Balcony", "Flat-Screen TV", "In-Room Safe", "Board Games"],
    pricePerNight: 179,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-tokyo-3-room-2",
    name: "Imperial Sofa Bed Suite",
    description: "Indulge in the compact atmosphere of our sofa bed suite, with spectacular where mountains paint the horizon, offering the perfect balance of Eastern serenity and Western comfort, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Pet Friendly", "Board Games", "Soundproofing"],
    pricePerNight: 105,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-tokyo-3-room-2",
    name: "Premium Queen Villa",
    description: "Discover the charm of this Premium-themed queen villa, complete with vintage ambiance, stunning with a pleasant outlook, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Streaming Services", "In-Room Safe", "Fitness Equipment"],
    pricePerNight: 121,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
