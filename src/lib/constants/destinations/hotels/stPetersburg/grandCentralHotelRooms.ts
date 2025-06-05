import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-st-petersburg-3-room-2",
    name: "Serenity Sofa Bed Loft",
    description: "This well-proportioned sofa bed loft promises where the city skyline meets the horizon, enriched by Serenity-themed details and with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Outdoor Furniture", "Kitchenette", "Connecting Rooms", "Books", "Complimentary Bottled Water", "Bluetooth Speaker"],
    pricePerNight: 216,
    currency: "RUB",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-st-petersburg-3-room-2",
    name: "Horizon Queen Studio",
    description: "Relax in our wide-ranging bohemian queen studio featuring where you can watch the city wake up, along with equipped with all the modern conveniences and featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Ironing Facilities", "Outdoor Furniture", "Family Room", "Books", "Jacuzzi Tub"],
    pricePerNight: 304,
    currency: "RUB",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
