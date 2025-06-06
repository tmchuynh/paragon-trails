import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Pacific Horizon Hotel
export const pacificHorizonHotelRooms: RoomOption[] = [
  {
    id: "hotel-tampa-2-room-1",
    name: "Manhattan Queen Penthouse",
    description: "Manhattan-themed queen penthouse with a view of snow-capped peaks, with rustic and modern influences and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Streaming Services", "Board Games", "Mini Bar", "Refrigerator", "Complimentary Bottled Water", "Ironing Facilities"],
    pricePerNight: 281,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-tampa-2-room-1",
    name: "Standard Single Suite",
    description: "Unwind in this expansive single suite overlooking the vibrant cityscape, featuring premium bath amenities.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Ironing Facilities", "Complimentary Bottled Water", "Balcony"],
    pricePerNight: 176,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-tampa-2-room-1",
    name: "Classic Double Suite",
    description: "Step into a lavish double suite that combines Classic-themed with breathtaking with a pleasant outlook, complemented by with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Kitchenette", "Luggage Rack", "Balcony", "Dining Table"],
    pricePerNight: 193,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
