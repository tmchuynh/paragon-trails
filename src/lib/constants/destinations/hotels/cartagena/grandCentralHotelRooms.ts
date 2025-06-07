import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-cartagena-7-room-6-Double-None",
    name: "Cartagena Double Studio",
    description: "Indulge in the tasteful atmosphere of our double studio, with spectacular with a pleasant outlook, offering a lively and welcoming space, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 5502344435,
    currency: "COP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-cartagena-7-room-6-SofaBed-GardenView",
    name: "Premium Sofa Bed Room",
    description: "Premium-themed room with sizable decor, where you can enjoy the sights and sounds of nature, and including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 5590037728,
    currency: "COP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-cartagena-7-room-6-Queen-None",
    name: "Signature Queen Penthouse",
    description: "Indulge in the commodious atmosphere of our queen penthouse, with spectacular with a pleasant outlook, blending energetic designs with relaxed comfort, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 6750952344,
    currency: "COP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-cartagena-7-room-6-SofaBed-None",
    name: "Coffee Sofa Bed Loft",
    description: "Our majestic Coffee-themed loft offers with a pleasant outlook, welcoming comfort, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 5115049628,
    currency: "COP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
