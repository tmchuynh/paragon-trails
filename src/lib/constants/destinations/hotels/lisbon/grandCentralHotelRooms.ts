import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-lisbon-4-room-3",
    name: "Horizon King Penthouse",
    description: "This elegant king accommodation offers with a pleasant outlook, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Seating Area", "Bluetooth Speaker", "Outdoor Furniture", "Luggage Rack", "Kitchenette"],
    pricePerNight: 154,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-lisbon-4-room-3",
    name: "Serenity King Villa",
    description: "Enjoy a contemporary stay in our Serenity-themed king villa, offering where you can watch the city wake up, with a spacious work area, and unique touches of featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Streaming Services", "Family Room", "Ironing Facilities", "Bluetooth Speaker", "Luggage Rack"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 169,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
