import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Eagle Crest Hotel
export const eagleCrestHotelRooms: RoomOption[] = [
  {
    id: "hotel-new-orleans-3-room-2",
    name: "Serenity Sofa Bed Penthouse",
    description: "This roomy sofa bed accommodation offers where you can enjoy the city's energy, created with both style and function in mind.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Wake-Up Service", "In-Room Safe", "Sauna", "Soundproofing", "Kitchenette"],
    accessibilityFeatures: ["Elevator", "Accessible Bathroom"],
    pricePerNight: 90,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-new-orleans-3-room-2",
    name: "Horizon Single Suite",
    description: "A stylish single suite designed for grandiose comfort, with with a pleasant outlook and equipped with all the modern conveniences, reflecting featuring thoughtful design elements.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "In-Room Safe", "Accessible Room", "Ironing Facilities"],
    pricePerNight: 73,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-new-orleans-3-room-2",
    name: "Horizon Twin Villa",
    description: "Discover the charm of this Horizon-themed twin villa, complete with sumptuous ambiance, stunning with a front-row seat to the city's heartbeat, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Balcony", "Bluetooth Speaker"],
    pricePerNight: 100,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-new-orleans-3-room-2",
    name: "Serenity Twin Suite",
    description: "Experience our snug, classic twin suite with a view of the tranquil sea, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Ironing Facilities", "Outdoor Furniture"],
    pricePerNight: 122,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
