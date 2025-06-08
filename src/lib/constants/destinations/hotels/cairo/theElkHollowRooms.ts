import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Elk Hollow
export const theElkHollowRooms: RoomOption[] = [
  {
    id: "hotel-cairo-7-room-6-King-GardenView",
    name: "Luxury King Loft",
    description: "Indulge in the stretching atmosphere of our king loft, with spectacular surrounded by vibrant flora, featuring thoughtful design elements, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 281875,
    currency: "EGP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-cairo-7-room-6-Double-MountainView",
    name: "Signature Double Penthouse",
    description: "Unwind in this minimalist double penthouse overlooking spectacular mountain ranges, featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 232378,
    currency: "EGP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-cairo-7-room-6-Double-None",
    name: "Harmony Double Studio",
    description: "This artistic double accommodation offers with a pleasant outlook, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 188565,
    currency: "EGP",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-cairo-7-room-6-King-MountainView",
    name: "Signature King Suite",
    description: "Indulge in the sleek atmosphere of our king suite, with spectacular with a view of the mountains' lush valleys, created with both style and function in mind, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 301498,
    currency: "EGP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
