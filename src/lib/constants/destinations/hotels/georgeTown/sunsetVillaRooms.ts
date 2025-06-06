import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-george-town-2-room-1",
    name: "Modern Twin Villa",
    description: "Modern-themed villa with generous decor, where you can watch the city wake up, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Jacuzzi Tub", "Wake-Up Service", "Kitchenette", "Outdoor Furniture"],
    pricePerNight: 90,
    currency: "KYD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
