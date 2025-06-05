import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-rome-2-room-1",
    name: "Luxury King Suite",
    description: "A upscale king retreat with a view of the ocean's changing tides, inspired by Italian Renaissance design.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Complimentary Bottled Water", "Seating Area", "Fitness Equipment", "Kitchenette", "Dining Table"],
    pricePerNight: 156,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-rome-2-room-1",
    name: "Classic King Villa",
    description: "Unwind in this intimate king villa with a view of the mountains' changing seasons, with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Ironing Facilities", "Smoke Detector"],
    pricePerNight: 162,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
