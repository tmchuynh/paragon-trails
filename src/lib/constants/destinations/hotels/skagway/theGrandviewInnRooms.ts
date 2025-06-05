import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Grandview Inn
export const theGrandviewInnRooms: RoomOption[] = [
  {
    id: "hotel-skagway-2-room-1",
    name: "Heritage Single Loft",
    description: "Indulge in the intimate atmosphere of our single loft, with spectacular overlooking spectacular mountain ranges, featuring sleek urban design elements, and with high-speed internet access.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Blackout Curtains", "Bluetooth Speaker", "Outdoor Furniture", "Fitness Equipment"],
    pricePerNight: 96,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-skagway-2-room-1",
    name: "Colonial Single Studio",
    description: "Experience our intimate, airy single studio featuring a peaceful garden setting, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Pet Friendly", "Accessible Room", "Flat-Screen TV", "Complimentary Bottled Water", "Jacuzzi Tub"],
    pricePerNight: 89,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
