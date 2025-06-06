import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Hotel Bella Sicilia
export const hotelBellaSiciliaRooms: RoomOption[] = [
  {
    id: "hotel-milan-5-room-4-Twin-CityView",
    name: "Horizon Twin Villa",
    description: "Unwind in this relaxing twin villa where the city comes alive at dusk, featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 170,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-milan-5-room-4-Twin-OceanView",
    name: "Horizon Twin Apartment",
    description: "Our welcoming Horizon-themed apartment offers where the ocean meets the sky, roomy comfort, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 186,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-milan-5-room-4-SofaBed-GardenView",
    name: "Classic Sofa Bed Villa",
    description: "A regal sofa bed villa designed for indulgent comfort, with with a view of manicured lawns and gardens and with a luxurious soaking tub, reflecting featuring tasteful Mediterranean touches.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 163,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-milan-5-room-4-Double-CityView",
    name: "Signature Double Apartment",
    description: "Signature-themed double apartment overlooking the vibrant cityscape, offering a touch of la dolce vita and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 175,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-milan-5-room-4-Double-GardenView",
    name: "Classic Double Suite",
    description: "Classic-themed suite with serene decor, where you can relax in a natural oasis, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 207,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
