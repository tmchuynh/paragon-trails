import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-st-petersburg-6-room-5",
    name: "Premium King Villa",
    description: "Step into a prestigious king villa that combines Premium-themed with breathtaking with a view of the garden's natural beauty, complemented by complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Luggage Rack", "Complimentary Bottled Water", "Soundproofing"],
    pricePerNight: 301,
    currency: "RUB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-st-petersburg-6-room-5",
    name: "Standard King Room",
    description: "Discover the charm of this Standard-themed king room, complete with cozy ambiance, stunning with a view of the city's waterfront, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Complimentary Bottled Water", "Outdoor Furniture", "Mini Bar", "Accessible Room", "Bluetooth Speaker"],
    pricePerNight: 303,
    currency: "RUB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
