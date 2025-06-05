import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-ho-chi-minh-city-1-room-0",
    name: "Modern Single Villa",
    description: "Our Modern-themed single villa offers roomy luxury, panoramic with a view of the rugged mountain landscape, and including climate control for your comfort, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Jacuzzi Tub", "Family Room", "Seating Area", "Dining Table", "Smoke Detector"],
    pricePerNight: 76,
    currency: "VND",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
