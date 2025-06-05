import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-dubai-4-room-3",
    name: "Superior King Suite",
    description: "Enjoy a relaxing stay in our Superior-themed king suite, offering where you can watch the city wake up, with a spacious seating area, and unique touches of blending traditional motifs with futuristic luxury.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bluetooth Speaker", "Seating Area", "In-Room Safe", "Luggage Rack", "Ironing Facilities"],
    pricePerNight: 299,
    currency: "AED",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  }
];
