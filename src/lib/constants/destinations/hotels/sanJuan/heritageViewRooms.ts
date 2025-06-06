import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-san-juan-5-room-4",
    name: "Horizon Sofa Bed Studio",
    description: "A sumptuous sofa bed retreat with panoramic views of the mountain landscape, created with both style and function in mind.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Family Room", "Accessible Room", "Ironing Facilities"],
    pricePerNight: 113,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
