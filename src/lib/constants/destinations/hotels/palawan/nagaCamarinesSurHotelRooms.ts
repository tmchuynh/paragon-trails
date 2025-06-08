import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Naga Camarines Sur Hotel
export const nagaCamarinesSurHotelRooms: RoomOption[] = [
  {
    id: "hotel-palawan-4-room-3-SofaBed-MountainView",
    name: "Signature Sofa Bed Suite",
    description: "Unwind in this relaxing sofa bed suite with a view of the mountains' changing seasons, with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 662564,
    currency: "PHP",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-palawan-4-room-3-Double-OceanView",
    name: "Executive Double Suite",
    description: "Executive-themed suite with cozy decor, featuring uninterrupted ocean vistas, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 853254,
    currency: "PHP",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-palawan-4-room-3-Queen-GardenView",
    name: "Serenity Queen Suite",
    description: "This ornate queen suite promises with a view of the garden's vibrant colors, enriched by Serenity-themed details and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 968898,
    currency: "PHP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-palawan-4-room-3-King-None",
    name: "Classic King Suite",
    description: "Enjoy a lavish stay in our Classic-themed king suite, offering with a pleasant outlook, with blackout curtains for a perfect night's sleep, and unique touches of decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 936855,
    currency: "PHP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
