import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Khách Sạn Sen Trắng
export const khchSnSenTrngRooms: RoomOption[] = [
  {
    id: "hotel-ho-chi-minh-city-4-room-3-SofaBed-None",
    name: "Standard Sofa Bed Loft",
    description: "Standard-themed loft with sumptuous decor, with a pleasant outlook, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 5017513,
    currency: "VND",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-ho-chi-minh-city-4-room-3-Double-MountainView",
    name: "Harmony Double Suite",
    description: "Indulge in the contemporary atmosphere of our double suite, with spectacular where you can experience the beauty of nature, designed for ultimate comfort, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 7171268,
    currency: "VND",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-ho-chi-minh-city-4-room-3-SofaBed-CityView",
    name: "Classic Sofa Bed Villa",
    description: "Discover the charm of this Classic-themed sofa bed villa, complete with grandiose ambiance, stunning with a view of iconic landmarks, and with high-speed internet access.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 5601748,
    currency: "VND",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-ho-chi-minh-city-4-room-3-Double-OceanView",
    name: "Superior Double Penthouse",
    description: "Step into a refreshing double penthouse that combines Superior-themed with breathtaking with a view of the endless blue, complemented by featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 7806448,
    currency: "VND",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
