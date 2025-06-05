import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-bermuda-5-room-4",
    name: "Grotto Double Penthouse",
    description: "Our plush Grotto-themed penthouse offers where city lights twinkle at night, peaceful comfort, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Accessible Room", "Bluetooth Speaker", "Ironing Facilities"],
    pricePerNight: 119,
    currency: "BMD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-bermuda-5-room-4",
    name: "Reefside Double Penthouse",
    description: "Indulge in the lavish atmosphere of our double penthouse, with spectacular where the ocean meets the sky, featuring pastel colors and colonial influences, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Soundproofing", "Bluetooth Speaker"],
    pricePerNight: 132,
    currency: "BMD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-bermuda-5-room-4",
    name: "Pink Sand King Studio",
    description: "Enjoy a voluminous stay in our Pink Sand-themed king studio, offering where you can relax to the sound of the waves, with a private balcony or terrace, and unique touches of featuring pastel colors and colonial influences.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bluetooth Speaker", "Fitness Equipment", "Soundproofing", "Balcony"],
    pricePerNight: 167,
    currency: "BMD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
