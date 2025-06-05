import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-cartagena-3-room-2",
    name: "Salsa Twin Room",
    description: "A retro twin room designed for sleek comfort, with with a view of the mountains' lush valleys and with plush bedding for ultimate comfort, reflecting offering a lively and welcoming space.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Dining Table", "Jacuzzi Tub", "Complimentary Bottled Water"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 319,
    currency: "COP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
