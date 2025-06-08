import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Puerto Vallarta Ocean View Hotel
export const puertoVallartaOceanViewHotelRooms: RoomOption[] = [
  {
    id: "hotel-puerto-vallarta-3-room-2-Double-None",
    name: "Superior Double Penthouse",
    description: "Enjoy a contemporary stay in our Superior-themed double penthouse, offering with a pleasant outlook, equipped with all the modern conveniences, and unique touches of created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 1811,
    currency: "MXN",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-puerto-vallarta-3-room-2-Queen-MountainView",
    name: "Premium Queen Studio",
    description: "Our vast Premium-themed studio offers where you can escape to the mountains, futuristic comfort, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 2791,
    currency: "MXN",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-puerto-vallarta-3-room-2-Single-None",
    name: "Standard Single Penthouse",
    description: "Unwind in this prestigious single penthouse with a pleasant outlook, complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    accessibilityFeatures: ["Wheelchair Accessible", "Hearing Support", "Elevator"],
    pricePerNight: 1292,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-puerto-vallarta-3-room-2-Single-OceanView",
    name: "Deluxe Single Villa",
    description: "This compact single villa promises with a view of the tranquil sea, enriched by Deluxe-themed details and with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 1743,
    currency: "MXN",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
