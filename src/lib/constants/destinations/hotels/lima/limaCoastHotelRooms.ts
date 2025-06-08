import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Lima Coast Hotel
export const limaCoastHotelRooms: RoomOption[] = [
  {
    id: "hotel-lima-9-room-8-Twin-GardenView",
    name: "Luxury Twin Apartment",
    description: "Our Luxury-themed twin apartment offers room-filled luxury, panoramic where you can relax in a garden haven, and with a spacious work area, inspired by blending rich cultural heritage with comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 2901,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-lima-9-room-8-King-None",
    name: "Deluxe King Studio",
    description: "Our Deluxe-themed king studio offers inviting luxury, panoramic with a pleasant outlook, and featuring premium bath amenities, inspired by offering warm and inviting interiors.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 3671,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-lima-9-room-8-SofaBed-CityView",
    name: "Signature Sofa Bed Studio",
    description: "Unwind in this majestic sofa bed studio with a view of the city's cultural landmarks, equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 2532,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-lima-9-room-8-Twin-CityView",
    name: "Nazca Twin Room",
    description: "Our generous Nazca-themed room offers with a window to the bustling city below, generous comfort, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 2924,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
