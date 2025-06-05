import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-san-juan-2-room-1",
    name: "Harmony Twin Loft",
    description: "Our Harmony-themed twin loft offers industrial luxury, panoramic with a view of tranquil water features, and with a luxurious soaking tub, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Refrigerator", "Pet Friendly", "Fireplace", "Board Games"],
    pricePerNight: 339,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
