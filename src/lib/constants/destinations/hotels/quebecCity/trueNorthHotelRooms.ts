import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for True North Hotel
export const trueNorthHotelRooms: RoomOption[] = [
  {
    id: "hotel-quebec-city-4-room-3",
    name: "Harmony King Studio",
    description: "This glamorous king accommodation offers with a pleasant outlook, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Fitness Equipment", "Refrigerator", "Kitchenette"],
    pricePerNight: 130,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-quebec-city-4-room-3",
    name: "Tranquility King Penthouse",
    description: "Enjoy a majestic stay in our Tranquility-themed king penthouse, offering with panoramic views of the mountain landscape, with a spacious seating area, and unique touches of created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Bathtub", "Soundproofing", "Flat-Screen TV", "Complimentary Bottled Water"],
    accessibilityFeatures: ["Hearing Support"],
    pricePerNight: 166,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
