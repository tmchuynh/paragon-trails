import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Niagara Suites
export const niagaraSuitesRooms: RoomOption[] = [
  {
    id: "hotel-victoria-7-room-6",
    name: "Deluxe King Apartment",
    description: "Our Deluxe-themed king apartment offers majestic luxury, panoramic where mountains paint the horizon, and featuring premium bath amenities, inspired by inspired by the rugged beauty of Canadian landscapes.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Board Games", "Ironing Facilities", "Balcony"],
    pricePerNight: 392,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
