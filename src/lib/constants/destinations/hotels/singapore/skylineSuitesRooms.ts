import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-singapore-3-room-2",
    name: "Lion City King Room",
    description: "Our Lion City-themed king room offers roomy luxury, panoramic where you can enjoy the mountains' majestic presence, and with a luxurious soaking tub, inspired by highlighting innovative and sustainable design.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Wake-Up Service", "Accessible Room", "Bluetooth Speaker", "Family Room"],
    pricePerNight: 351,
    currency: "SGD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
