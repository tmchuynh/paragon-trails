import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage House
export const heritageHouseRooms: RoomOption[] = [
  {
    id: "hotel-charleston-5-room-4",
    name: "Heritage Queen Loft",
    description: "Relax in our homey soothing queen loft featuring where the horizon meets the ocean, along with with high-speed internet access and with rustic and modern influences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Luggage Rack", "In-Room Safe", "Accessible Room", "Blackout Curtains", "Mini Bar"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 164,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
