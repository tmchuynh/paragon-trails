import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Liberty Suites
export const libertySuitesRooms: RoomOption[] = [
  {
    id: "hotel-miami-2-room-1",
    name: "Deluxe Single Suite",
    description: "This prestigious single accommodation offers where you can hear the soothing sound of the sea, with rustic and modern influences.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Pet Friendly", "Bluetooth Speaker"],
    pricePerNight: 129,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-miami-2-room-1",
    name: "Signature Queen Loft",
    description: "Relax in our soothing sumptuous queen loft featuring with a pleasant outlook, along with with a spacious work area and highlighting contemporary American style.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Fireplace", "Mini Bar", "Dining Table", "Complimentary Bottled Water"],
    accessibilityFeatures: ["Wheelchair Accessible", "Visual Aids"],
    pricePerNight: 144,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
