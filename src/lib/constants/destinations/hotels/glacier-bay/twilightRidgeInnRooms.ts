import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Twilight Ridge Inn
export const twilightRidgeInnRooms: RoomOption[] = [
  {
    id: "hotel-glacier-bay-5-room-4-Queen-GardenView",
    name: "Signature Queen Suite",
    description: "Enjoy a cozy stay in our Signature-themed queen suite, offering with a view of the garden's tranquil pathways, with a private balcony or terrace, and unique touches of decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 125,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-glacier-bay-5-room-4-SofaBed-None",
    name: "Classic Sofa Bed Studio",
    description: "Discover the charm of this Classic-themed sofa bed studio, complete with futuristic ambiance, stunning with a pleasant outlook, and including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 95,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-glacier-bay-5-room-4-Single-CityView",
    name: "Signature Single Apartment",
    description: "Our Signature-themed single apartment offers large-scale luxury, panoramic with a view of the city's cultural landmarks, and featuring premium bath amenities, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 89,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-glacier-bay-5-room-4-Twin-CityView",
    name: "Horizon Twin Studio",
    description: "Unwind in this deluxe twin studio offering panoramic city vistas, with a spacious work area.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 108,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
