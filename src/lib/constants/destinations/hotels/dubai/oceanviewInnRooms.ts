import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-dubai-2-room-1",
    name: "Oasis King Suite",
    description: "Step into a comfy king suite that combines Oasis-themed with breathtaking with a pleasant outlook, complemented by including climate control for your comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Jacuzzi Tub", "Bathtub", "Streaming Services", "Fitness Equipment"],
    pricePerNight: 164,
    currency: "AED",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-dubai-2-room-1",
    name: "Dubai Skyline King Villa",
    description: "A gentle king villa designed for relaxing comfort, with with a view of the ocean's changing tides and with blackout curtains for a perfect night's sleep, reflecting highlighting desert elegance and modern design.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Ironing Facilities", "Kitchenette", "Refrigerator", "Dining Table", "Bluetooth Speaker"],
    pricePerNight: 234,
    currency: "AED",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
