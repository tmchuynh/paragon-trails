import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Tranquil Reef
export const theTranquilReefRooms: RoomOption[] = [
  {
    id: "hotel-seattle-1-room-0-Double-CityView",
    name: "Classic Double Apartment",
    description: "Indulge in the cozy atmosphere of our double apartment, with spectacular with a view of iconic landmarks, featuring sleek urban design elements, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 106,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-seattle-1-room-0-King-CityView",
    name: "Standard King Penthouse",
    description: "A vintage king retreat where city lights twinkle at night, featuring sleek urban design elements.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 143,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-seattle-1-room-0-Double-None",
    name: "Colonial Double Apartment",
    description: "Colonial-themed double apartment with a pleasant outlook, featuring sleek urban design elements and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 105,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-seattle-1-room-0-SofaBed-GardenView",
    name: "Superior Sofa Bed Penthouse",
    description: "Superior-themed penthouse with glamorous decor, with a view of the garden's tranquil pathways, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 111,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  }
];
