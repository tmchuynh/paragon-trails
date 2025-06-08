import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Shizuoka Tea Plantation Hotel
export const shizuokaTeaPlantationHotelRooms: RoomOption[] = [
  {
    id: "hotel-yokohama-2-room-1-King-None",
    name: "Standard King Villa",
    description: "Our Standard-themed king villa offers well-proportioned luxury, panoramic with a pleasant outlook, and complete with a well-appointed bathroom, inspired by offering the perfect balance of Eastern serenity and Western comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 3773512,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-yokohama-2-room-1-SofaBed-GardenView",
    name: "Lotus Sofa Bed Villa",
    description: "Relax in our fashionable bohemian sofa bed villa featuring with a view of tranquil water features, along with featuring a curated minibar selection and combining modern luxury with Japanese tradition.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 2954436,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-yokohama-2-room-1-SofaBed-None",
    name: "Classic Sofa Bed Apartment",
    description: "Our plush Classic-themed apartment offers with a pleasant outlook, extensive comfort, and including climate control for your comfort.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 2539269,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-yokohama-2-room-1-Twin-GardenView",
    name: "Executive Twin Penthouse",
    description: "Enjoy a minimalist stay in our Executive-themed twin penthouse, offering where you can enjoy the tranquility of nature, equipped with all the modern conveniences, and unique touches of featuring traditional tatami elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 2678496,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
