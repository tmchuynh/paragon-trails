import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-lisbon-3-room-2",
    name: "Classic Queen Villa",
    description: "Our Classic-themed queen villa offers extravagant luxury, panoramic with a window to the bustling city below, and with a modern en-suite bathroom, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Dining Table", "Fitness Equipment", "Fireplace", "Connecting Rooms", "Mini Bar"],
    accessibilityFeatures: ["Elevator", "Visual Aids"],
    pricePerNight: 202,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-lisbon-3-room-2",
    name: "Harmony Single Apartment",
    description: "A room-filled single apartment designed for traditional comfort, with overlooking the vibrant cityscape and offering a unique blend of style and comfort, reflecting designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "Smoke Detector", "Refrigerator", "Luggage Rack", "Dining Table"],
    pricePerNight: 142,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-lisbon-3-room-2",
    name: "Modern Twin Suite",
    description: "Enjoy a luxurious stay in our Modern-themed twin suite, offering where you can watch the city wake up, with a modern en-suite bathroom, and unique touches of created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Bluetooth Speaker", "Mini Bar", "Fireplace", "Jacuzzi Tub"],
    pricePerNight: 168,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
