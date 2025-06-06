import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-roatan-3-room-2",
    name: "Deluxe Single Room",
    description: "Step into a traditional single room that combines Deluxe-themed with breathtaking where the mountains touch the sky, complemented by with high-speed internet access.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Family Room", "Mini Bar"],
    pricePerNight: 98,
    currency: "HNL",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
