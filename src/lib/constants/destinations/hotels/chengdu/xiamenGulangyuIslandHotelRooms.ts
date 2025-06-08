import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Xiamen Gulangyu Island Hotel
export const xiamenGulangyuIslandHotelRooms: RoomOption[] = [
  {
    id: "hotel-chengdu-3-room-2-Twin-None",
    name: "Dynasty Twin Penthouse",
    description: "A majestic twin penthouse designed for vintage comfort, with with a pleasant outlook and equipped with all the modern conveniences, reflecting featuring elegant calligraphy and silk accents.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 5034,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-chengdu-3-room-2-Twin-OceanView",
    name: "Deluxe Twin Apartment",
    description: "Experience our open-concept, soothing twin apartment where you can relax to the sound of the waves, with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 6102,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-chengdu-3-room-2-Single-GardenView",
    name: "Premium Single Room",
    description: "Relax in our sophisticated classic single room featuring where you can enjoy the garden's seasonal blooms, along with complete with a well-appointed bathroom and featuring elegant calligraphy and silk accents.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 4801,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-chengdu-3-room-2-Queen-MountainView",
    name: "Dynasty Queen Suite",
    description: "Dynasty-themed queen suite where you can escape to the mountains, offering a refined and harmonious ambiance and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 8131,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  }
];
