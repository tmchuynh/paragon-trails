import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Pacific Horizon Hotel
export const pacificHorizonHotelRooms: RoomOption[] = [
  {
    id: "hotel-glacier-bay-2-room-1",
    name: "Modern King Room",
    description: "Modern-themed room with rustic decor, featuring awe-inspiring mountain scenery, and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Pet Friendly", "Fitness Equipment", "Blackout Curtains", "Luggage Rack", "Smoke Detector"],
    pricePerNight: 157,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
