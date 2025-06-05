import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-roatan-5-room-4",
    name: "Lenca Single Penthouse",
    description: "Our homey Lenca-themed penthouse offers with a view of the mountains' breathtaking sunsets, artistic comfort, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Connecting Rooms", "Sauna", "Complimentary Bottled Water", "Pet Friendly", "Blackout Curtains"],
    pricePerNight: 98,
    currency: "HNL",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
