import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Riverside Manor
export const riversideManorRooms: RoomOption[] = [
  {
    id: "hotel-skagway-6-room-5",
    name: "Heritage Twin Penthouse",
    description: "Heritage-themed twin penthouse where you can enjoy the tranquility of the mountains, with rustic and modern influences and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Sauna", "Outdoor Furniture", "Fitness Equipment", "Jacuzzi Tub"],
    pricePerNight: 219,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-skagway-6-room-5",
    name: "Colonial King Room",
    description: "Experience our exquisite, voluminous king room where you can watch the city wake up, complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Accessible Room", "Board Games"],
    pricePerNight: 328,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-skagway-6-room-5",
    name: "Heritage Sofa Bed Villa",
    description: "Discover the charm of this Heritage-themed sofa bed villa, complete with stretching ambiance, stunning where the mountains touch the sky, and with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Seating Area", "Mini Bar"],
    pricePerNight: 246,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
