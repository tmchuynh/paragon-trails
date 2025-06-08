import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Gouda Cheese Hotel
export const goudaCheeseHotelRooms: RoomOption[] = [
  {
    id: "hotel-amsterdam-8-room-7-Twin-CityView",
    name: "Premium Twin Penthouse",
    description: "Unwind in this restful twin penthouse featuring a blend of modern and historic architecture, featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 92,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-amsterdam-8-room-7-SofaBed-GardenView",
    name: "Premium Sofa Bed Penthouse",
    description: "Unwind in this regal sofa bed penthouse where you can enjoy the sights and sounds of nature, featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 92,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-amsterdam-8-room-7-Single-GardenView",
    name: "Standard Single Apartment",
    description: "This heartwarming single accommodation offers with a view of shaded garden paths, featuring modern design with Dutch influences.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 77,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-amsterdam-8-room-7-Twin-None",
    name: "Standard Twin Penthouse",
    description: "Relax in our luxurious generous twin penthouse featuring with a pleasant outlook, along with with plush bedding for ultimate comfort and blending minimalist style with comfortable amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 74,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
