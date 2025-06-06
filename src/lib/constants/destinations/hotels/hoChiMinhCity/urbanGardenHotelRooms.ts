import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-ho-chi-minh-city-5-room-4",
    name: "Tranquility Single Villa",
    description: "Our Tranquility-themed single villa offers ornate luxury, panoramic with a view of the mountains' lush valleys, and complete with a well-appointed bathroom, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Soundproofing", "Blackout Curtains", "Jacuzzi Tub", "In-Room Safe"],
    pricePerNight: 201,
    currency: "VND",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
