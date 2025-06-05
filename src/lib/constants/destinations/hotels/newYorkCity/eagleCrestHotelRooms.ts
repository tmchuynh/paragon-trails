import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Eagle Crest Hotel
export const eagleCrestHotelRooms: RoomOption[] = [
  {
    id: "hotel-new-york-city-2-room-1",
    name: "Serenity King Loft",
    description: "Discover the charm of this Serenity-themed king loft, complete with voluminous ambiance, stunning showcasing the urban landscape, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Sauna", "Outdoor Furniture", "Dining Table", "Jacuzzi Tub"],
    pricePerNight: 303,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-new-york-city-2-room-1",
    name: "Harmony King Villa",
    description: "Relax in our peaceful broad king villa featuring where the mountains touch the sky, along with with a spacious seating area and decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Jacuzzi Tub", "Refrigerator", "Kitchenette", "Soundproofing", "Dining Table"],
    pricePerNight: 383,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
