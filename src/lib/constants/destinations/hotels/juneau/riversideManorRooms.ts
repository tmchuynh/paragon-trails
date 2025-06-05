import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Riverside Manor
export const riversideManorRooms: RoomOption[] = [
  {
    id: "hotel-juneau-5-room-4",
    name: "Golden Gate Queen Penthouse",
    description: "Our majestic Golden Gate-themed penthouse offers with a view of the mountains' rugged terrain, sophisticated comfort, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Streaming Services", "Luggage Rack", "Ironing Facilities", "Connecting Rooms", "Wake-Up Service", "Balcony"],
    accessibilityFeatures: ["Visual Aids", "Wheelchair Accessible"],
    pricePerNight: 140,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
