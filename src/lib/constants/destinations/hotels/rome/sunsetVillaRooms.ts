import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-rome-2-room-1",
    name: "Superior King Room",
    description: "Step into a calming king room that combines Superior-themed with breathtaking where you can enjoy the city's energy, complemented by offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Mini Bar", "Complimentary Bottled Water"],
    pricePerNight: 403,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-rome-2-room-1",
    name: "Premium Sofa Bed Villa",
    description: "Experience our ornate, ample sofa bed villa where you can enjoy the mountains' majestic presence, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Mini Bar", "Streaming Services", "Accessible Room", "Balcony", "Jacuzzi Tub"],
    pricePerNight: 289,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-rome-2-room-1",
    name: "Classic Single Villa",
    description: "Discover the charm of this Classic-themed single villa, complete with expansive ambiance, stunning where you can watch the city wake up, and with high-speed internet access.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Family Room", "In-Room Safe", "Wake-Up Service", "Mini Bar", "Balcony"],
    pricePerNight: 232,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-rome-2-room-1",
    name: "Superior Single Villa",
    description: "A palatial single villa designed for vast comfort, with with a pleasant outlook and equipped with all the modern conveniences, reflecting featuring tasteful Mediterranean touches.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Balcony", "Bluetooth Speaker", "Wake-Up Service", "Smoke Detector", "Fireplace"],
    pricePerNight: 185,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
