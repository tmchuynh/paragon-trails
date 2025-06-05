import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Lakeview Retreat
export const lakeviewRetreatRooms: RoomOption[] = [
  {
    id: "hotel-victoria-1-room-0",
    name: "Timber King Loft",
    description: "This homey king accommodation offers with a view of the mountains' serene beauty, inspired by the rugged beauty of Canadian landscapes.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Bluetooth Speaker", "Accessible Room", "Wake-Up Service"],
    pricePerNight: 158,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-victoria-1-room-0",
    name: "Frontier King Suite",
    description: "A open-concept king suite designed for peaceful comfort, with with a pleasant outlook and including climate control for your comfort, reflecting blending urban sophistication with wilderness charm.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Dining Table", "Accessible Room", "Seating Area"],
    pricePerNight: 135,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
