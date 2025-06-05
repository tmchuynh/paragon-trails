import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Osaka Serenity
export const osakaSerenityRooms: RoomOption[] = [
  {
    id: "hotel-yokohama-5-room-4",
    name: "Premium Sofa Bed Room",
    description: "Indulge in the deluxe atmosphere of our sofa bed room, with spectacular with a pleasant outlook, combining modern luxury with Japanese tradition, and featuring premium bath amenities.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Dining Table", "Bluetooth Speaker"],
    pricePerNight: 97,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-yokohama-5-room-4",
    name: "Bamboo Queen Loft",
    description: "Enjoy a plush stay in our Bamboo-themed queen loft, offering with a window to the bustling city below, with a private balcony or terrace, and unique touches of featuring traditional tatami elements.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Jacuzzi Tub", "Mini Bar", "Bluetooth Speaker", "Luggage Rack", "Outdoor Furniture", "Accessible Room"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 130,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-yokohama-5-room-4",
    name: "Zen Queen Villa",
    description: "Indulge in the expansive atmosphere of our queen villa, with spectacular where nature is just outside your window, combining modern luxury with Japanese tradition, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Flat-Screen TV", "Soundproofing"],
    pricePerNight: 139,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
