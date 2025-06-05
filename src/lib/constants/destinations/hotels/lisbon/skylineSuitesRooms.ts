import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-lisbon-5-room-4",
    name: "Classic King Penthouse",
    description: "Our Classic-themed king penthouse offers traditional luxury, panoramic with a pleasant outlook, and featuring premium bath amenities, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Kitchenette", "Mini Bar"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 130,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-lisbon-5-room-4",
    name: "Premium King Penthouse",
    description: "Step into a modern king penthouse that combines Premium-themed with breathtaking with a view of the rugged mountain landscape, complemented by equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Jacuzzi Tub", "Mini Bar", "Family Room", "Refrigerator", "Ironing Facilities"],
    pricePerNight: 172,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
