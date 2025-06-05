import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-dubai-3-room-2",
    name: "Mirage King Penthouse",
    description: "Relax in our peaceful expansive king penthouse featuring where you can enjoy stunning sunsets over the water, along with complete with a well-appointed bathroom and offering lavish comfort and grandeur.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Smoke Detector", "Blackout Curtains"],
    pricePerNight: 438,
    currency: "AED",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-dubai-3-room-2",
    name: "Desert Double Villa",
    description: "A ornate double retreat with a pleasant outlook, offering lavish comfort and grandeur.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Mini Bar", "In-Room Safe", "Balcony"],
    pricePerNight: 255,
    currency: "AED",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
