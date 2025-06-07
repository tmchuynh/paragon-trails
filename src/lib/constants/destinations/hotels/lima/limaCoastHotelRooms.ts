import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Lima Coast Hotel
export const limaCoastHotelRooms: RoomOption[] = [
  {
    id: "hotel-lima-3-room-2-SofaBed-None",
    name: "Classic Sofa Bed Room",
    description: "A pleasant sofa bed room designed for luxurious comfort, with with a pleasant outlook and equipped with all the modern conveniences, reflecting blending rich cultural heritage with comfort.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 1219,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-lima-3-room-2-King-GardenView",
    name: "Superior King Loft",
    description: "Discover the charm of this Superior-themed king loft, complete with compact ambiance, stunning surrounded by vibrant flora, and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 2116,
    currency: "PEN",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-lima-3-room-2-SofaBed-CityView",
    name: "Premium Sofa Bed Suite",
    description: "Premium-themed suite with chic decor, with a view of iconic landmarks, and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    accessibilityFeatures: ["Wheelchair Accessible", "Visual Aids", "Elevator"],
    pricePerNight: 1386,
    currency: "PEN",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-lima-3-room-2-Twin-None",
    name: "Signature Twin Studio",
    description: "Our Signature-themed twin studio offers homey luxury, panoramic with a pleasant outlook, and with a private balcony or terrace, inspired by featuring Andean-inspired patterns and textures.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 1427,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
