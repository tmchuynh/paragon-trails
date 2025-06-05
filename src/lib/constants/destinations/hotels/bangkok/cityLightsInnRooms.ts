import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-bangkok-3-room-2",
    name: "Orchid Queen Loft",
    description: "Enjoy a elegant stay in our Orchid-themed queen loft, offering with a pleasant outlook, with high-speed internet access, and unique touches of with subtle nods to Thailand's rich cultural heritage.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "In-Room Safe", "Jacuzzi Tub", "Wake-Up Service", "Luggage Rack", "Ironing Facilities"],
    pricePerNight: 233,
    currency: "THB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-bangkok-3-room-2",
    name: "Orchid King Suite",
    description: "Unwind in this tasteful king suite with a pleasant outlook, with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Balcony", "Fireplace", "Streaming Services", "Complimentary Bottled Water"],
    pricePerNight: 285,
    currency: "THB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-bangkok-3-room-2",
    name: "Executive Double Penthouse",
    description: "Discover the charm of this Executive-themed double penthouse, complete with tranquil ambiance, stunning with a pleasant outlook, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bluetooth Speaker", "Family Room", "Ironing Facilities"],
    pricePerNight: 188,
    currency: "THB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
