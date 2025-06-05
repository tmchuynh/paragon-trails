import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-mykonos-2-room-1",
    name: "Signature King Apartment",
    description: "Enjoy a chic stay in our Signature-themed king apartment, offering overlooking spectacular mountain ranges, with blackout curtains for a perfect night's sleep, and unique touches of designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Connecting Rooms", "Dining Table", "Wake-Up Service", "In-Room Safe"],
    pricePerNight: 180,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-mykonos-2-room-1",
    name: "Classic Double Loft",
    description: "A eclectic double retreat with a pleasant outlook, created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Bluetooth Speaker", "Refrigerator"],
    pricePerNight: 103,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
