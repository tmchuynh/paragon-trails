import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Ming Dynasty Inn
export const mingDynastyInnRooms: RoomOption[] = [
  {
    id: "hotel-shanghai-3-room-2",
    name: "Imperial King Room",
    description: "This upscale king accommodation offers with a pleasant outlook, offering a refined and harmonious ambiance.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Books", "Bathtub", "Balcony", "Complimentary Bottled Water"],
    pricePerNight: 157,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-shanghai-3-room-2",
    name: "Silk King Apartment",
    description: "Silk-themed king apartment where you can enjoy the serenity of mountain life, offering a refined and harmonious ambiance and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Connecting Rooms", "Luggage Rack", "Mini Bar", "Outdoor Furniture"],
    pricePerNight: 196,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
