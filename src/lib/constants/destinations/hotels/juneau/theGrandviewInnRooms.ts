import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Grandview Inn
export const theGrandviewInnRooms: RoomOption[] = [
  {
    id: "hotel-juneau-3-room-2",
    name: "Liberty Single Villa",
    description: "Step into a restful single villa that combines Liberty-themed with breathtaking where nature is just outside your window, complemented by equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Connecting Rooms", "Balcony", "Mini Bar", "Smoke Detector"],
    pricePerNight: 181,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-juneau-3-room-2",
    name: "Manhattan Single Room",
    description: "Our Manhattan-themed single room offers room-filled luxury, panoramic with a view of the endless blue, and including climate control for your comfort, inspired by highlighting contemporary American style.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Balcony", "Soundproofing", "Dining Table", "Accessible Room", "Family Room"],
    accessibilityFeatures: ["Visual Aids", "Elevator"],
    pricePerNight: 194,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
