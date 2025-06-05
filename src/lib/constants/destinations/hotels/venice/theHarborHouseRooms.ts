import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-venice-5-room-4",
    name: "Deluxe King Villa",
    description: "Discover the charm of this Deluxe-themed king villa, complete with restful ambiance, stunning with a view of the mountains' natural beauty, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Family Room", "Dining Table", "Flat-Screen TV"],
    pricePerNight: 190,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-venice-5-room-4",
    name: "Classic Single Apartment",
    description: "Unwind in this fashionable single apartment with a pleasant outlook, with high-speed internet access.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Jacuzzi Tub", "Smoke Detector", "Flat-Screen TV"],
    pricePerNight: 80,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-venice-5-room-4",
    name: "Serenity Single Apartment",
    description: "Our relaxing Serenity-themed apartment offers where you can enjoy the mountains' majestic presence, bohemian comfort, and including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Kitchenette", "Family Room"],
    pricePerNight: 91,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-venice-5-room-4",
    name: "Serenity Double Loft",
    description: "Serenity-themed double loft with a pleasant outlook, featuring tasteful Mediterranean touches and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Wake-Up Service", "Smoke Detector", "Dining Table", "Seating Area"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 91,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
