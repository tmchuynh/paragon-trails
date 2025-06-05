import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-sydney-3-room-2",
    name: "Coral Reef Sofa Bed Room",
    description: "Coral Reef-themed sofa bed room with a pleasant outlook, offering a relaxed yet sophisticated Australian vibe and equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Blackout Curtains", "Luggage Rack"],
    accessibilityFeatures: ["Hearing Support", "Visual Aids"],
    pricePerNight: 87,
    currency: "AUD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
