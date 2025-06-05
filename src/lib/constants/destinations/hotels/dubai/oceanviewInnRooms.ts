import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-dubai-4-room-3",
    name: "Superior Twin Apartment",
    description: "Step into a roomy twin apartment that combines Superior-themed with breathtaking where city lights twinkle at night, complemented by with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Connecting Rooms", "Bathtub", "Board Games", "Mini Bar", "Smoke Detector", "Wake-Up Service"],
    pricePerNight: 249,
    currency: "AED",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-dubai-4-room-3",
    name: "Desert Twin Villa",
    description: "Our extravagant Desert-themed villa offers with a pleasant outlook, sophisticated comfort, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Luggage Rack", "Mini Bar"],
    pricePerNight: 228,
    currency: "AED",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-dubai-4-room-3",
    name: "Luxury Double Loft",
    description: "Indulge in the classic atmosphere of our double loft, with spectacular with a pleasant outlook, offering lavish comfort and grandeur, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Seating Area", "Bluetooth Speaker"],
    pricePerNight: 264,
    currency: "AED",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
