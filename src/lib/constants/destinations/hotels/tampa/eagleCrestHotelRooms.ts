import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Eagle Crest Hotel
export const eagleCrestHotelRooms: RoomOption[] = [
  {
    id: "hotel-tampa-7-room-6",
    name: "Heritage Sofa Bed Room",
    description: "A upscale sofa bed retreat with stunning views of the city skyline, featuring sleek urban design elements.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Wake-Up Service", "Soundproofing", "Smoke Detector", "Blackout Curtains", "Dining Table", "Bathtub"],
    pricePerNight: 181,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-tampa-7-room-6",
    name: "Liberty Sofa Bed Room",
    description: "Our Liberty-themed sofa bed room offers gentle luxury, panoramic where you can hear the soothing sound of the sea, and including climate control for your comfort, inspired by highlighting contemporary American style.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "In-Room Safe", "Blackout Curtains", "Complimentary Bottled Water", "Sauna"],
    accessibilityFeatures: ["Wheelchair Accessible", "Visual Aids"],
    pricePerNight: 218,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
