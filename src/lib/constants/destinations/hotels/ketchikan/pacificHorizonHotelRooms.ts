import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Pacific Horizon Hotel
export const pacificHorizonHotelRooms: RoomOption[] = [
  {
    id: "hotel-ketchikan-6-room-5-Double-OceanView",
    name: "Standard Double Apartment",
    description: "Standard-themed double apartment where you can hear the soothing sound of the sea, featuring sleek urban design elements and with a spacious seating area.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 110,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-ketchikan-6-room-5-King-None",
    name: "Colonial King Loft",
    description: "Colonial-themed king loft with a pleasant outlook, with rustic and modern influences and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 122,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-ketchikan-6-room-5-Single-None",
    name: "Liberty Single Penthouse",
    description: "Indulge in the intimate atmosphere of our single penthouse, with spectacular with a pleasant outlook, with rustic and modern influences, and with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 69,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-ketchikan-6-room-5-Queen-MountainView",
    name: "Golden Gate Queen Studio",
    description: "A snug queen retreat where you can gaze at the towering peaks, highlighting contemporary American style.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    accessibilityFeatures: ["Wheelchair Accessible", "Accessible Bathroom", "Hearing Support"],
    pricePerNight: 129,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
