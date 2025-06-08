import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Pavillion Grand
export const thePavillionGrandRooms: RoomOption[] = [
  {
    id: "hotel-fort-kochi-8-room-7-SofaBed-None",
    name: "Modern Sofa Bed Studio",
    description: "Modern-themed studio with rustic decor, with a pleasant outlook, and including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 14870,
    currency: "INR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-fort-kochi-8-room-7-SofaBed-GardenView",
    name: "Executive Sofa Bed Villa",
    description: "Enjoy a generous stay in our Executive-themed sofa bed villa, offering featuring a peaceful garden setting, with plush bedding for ultimate comfort, and unique touches of designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 16620,
    currency: "INR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-fort-kochi-8-room-7-Single-MountainView",
    name: "Modern Single Room",
    description: "Experience our minimalist, classic single room with a view of the mountains' serene beauty, equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 14311,
    currency: "INR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-fort-kochi-8-room-7-Single-None",
    name: "Horizon Single Penthouse",
    description: "Unwind in this elegant single penthouse with a pleasant outlook, with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 12811,
    currency: "INR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
