import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-ho-chi-minh-city-4-room-3",
    name: "Executive Queen Studio",
    description: "Indulge in the refreshing atmosphere of our queen studio, with spectacular with a view of the tranquil sea, decorated with local artistic influences, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Board Games", "Blackout Curtains"],
    accessibilityFeatures: ["Accessible Bathroom", "Elevator"],
    pricePerNight: 130,
    currency: "VND",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
