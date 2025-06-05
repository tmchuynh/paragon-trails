import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-helsinki-5-room-4",
    name: "Modern Single Apartment",
    description: "Our Modern-themed single apartment offers upscale luxury, panoramic with a pleasant outlook, and complete with a well-appointed bathroom, inspired by created with both style and function in mind.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Sauna", "Streaming Services", "Mini Bar", "Accessible Room"],
    pricePerNight: 160,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
