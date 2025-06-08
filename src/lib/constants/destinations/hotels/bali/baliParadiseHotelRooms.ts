import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Bali Paradise Hotel
export const baliParadiseHotelRooms: RoomOption[] = [
  {
    id: "hotel-bali-10-room-9-Queen-GardenView",
    name: "Deluxe Queen Villa",
    description: "Deluxe-themed villa with commodious decor, with a view of the garden's lush greenery, and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 35957988423,
    currency: "IDR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-bali-10-room-9-Single-CityView",
    name: "Luxury Single Room",
    description: "Relax in our lavish artistic single room featuring with a view of the city's waterfront, along with offering a unique blend of style and comfort and highlighting island-inspired tranquility.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 20344843472,
    currency: "IDR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-bali-10-room-9-SofaBed-None",
    name: "Volcanic Sofa Bed Villa",
    description: "Volcanic-themed sofa bed villa with a pleasant outlook, blending tropical elements with luxurious comfort and with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 23857917827,
    currency: "IDR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-bali-10-room-9-Twin-GardenView",
    name: "Executive Twin Penthouse",
    description: "This deluxe twin accommodation offers where you can enjoy the beauty of nature, highlighting island-inspired tranquility.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 25093699028,
    currency: "IDR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
