import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Athens Acropolis Hotel
export const athensAcropolisHotelRooms: RoomOption[] = [
  {
    id: "hotel-athens-2-room-1-Queen-OceanView",
    name: "Executive Queen Apartment",
    description: "Discover the charm of this Executive-themed queen apartment, complete with lavish ambiance, stunning with a view of the sandy beaches, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 124,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-athens-2-room-1-King-MountainView",
    name: "Deluxe King Suite",
    description: "This restful king suite promises where you can enjoy the mountains' majestic presence, enriched by Deluxe-themed details and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 156,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-athens-2-room-1-SofaBed-GardenView",
    name: "Executive Sofa Bed Penthouse",
    description: "Enjoy a comfortable stay in our Executive-themed sofa bed penthouse, offering where you can enjoy the serenity of a garden retreat, with blackout curtains for a perfect night's sleep, and unique touches of offering a serene and relaxing atmosphere with Mediterranean charm.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 97,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-athens-2-room-1-SofaBed-OceanView",
    name: "Parthenon Sofa Bed Penthouse",
    description: "A intimate sofa bed penthouse designed for industrial comfort, with where you can hear the soothing sound of the sea and complete with a well-appointed bathroom, reflecting with classic Greek architectural elements and modern comforts.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 95,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
