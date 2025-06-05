import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Metropolitan
export const theMetropolitanRooms: RoomOption[] = [
  {
    id: "hotel-galveston-3-room-2",
    name: "Liberty King Apartment",
    description: "This voluminous king accommodation offers where city lights twinkle at night, highlighting contemporary American style.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Smoke Detector", "Bluetooth Speaker", "Fitness Equipment", "Luggage Rack"],
    pricePerNight: 189,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-galveston-3-room-2",
    name: "Colonial Single Studio",
    description: "Relax in our compact luxurious single studio featuring with a pleasant outlook, along with including climate control for your comfort and offering a classic yet modern American experience.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "Books", "In-Room Safe", "Balcony", "Mini Bar", "Bathtub"],
    pricePerNight: 93,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-galveston-3-room-2",
    name: "Luxury Sofa Bed Suite",
    description: "This classic sofa bed accommodation offers where you can watch the city wake up, featuring sleek urban design elements.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Board Games", "In-Room Safe", "Ironing Facilities", "Refrigerator"],
    pricePerNight: 113,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
