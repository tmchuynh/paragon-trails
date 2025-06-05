import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Liberty Suites
export const libertySuitesRooms: RoomOption[] = [
  {
    id: "hotel-charleston-3-room-2",
    name: "Signature Queen Apartment",
    description: "This deluxe queen apartment promises with a view of manicured lawns and gardens, enriched by Signature-themed details and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Wake-Up Service", "In-Room Safe", "Books", "Smoke Detector", "Refrigerator"],
    pricePerNight: 347,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
