import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oakwood Resort
export const oakwoodResortRooms: RoomOption[] = [
  {
    id: "hotel-los-angeles-2-room-1",
    name: "Tranquility Sofa Bed Suite",
    description: "This sophisticated sofa bed suite promises where you can take in the fresh air, enriched by Tranquility-themed details and featuring premium bath amenities.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Bluetooth Speaker", "Seating Area", "Fitness Equipment"],
    pricePerNight: 187,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
