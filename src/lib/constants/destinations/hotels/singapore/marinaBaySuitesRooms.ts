import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Marina Bay Suites
export const marinaBaySuitesRooms: RoomOption[] = [
  {
    id: "hotel-singapore-1-room-0-SofaBed-None",
    name: "Sentosa Sofa Bed Villa",
    description: "Discover the charm of this Sentosa-themed sofa bed villa, complete with sophisticated ambiance, stunning with a pleasant outlook, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 394,
    currency: "SGD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-singapore-1-room-0-Twin-None",
    name: "Marina Twin Studio",
    description: "Unwind in this stylish twin studio with a pleasant outlook, including climate control for your comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 388,
    currency: "SGD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-singapore-1-room-0-Queen-OceanView",
    name: "Harbour Queen Suite",
    description: "Indulge in the spacious atmosphere of our queen suite, with spectacular where you can feel the ocean breeze, highlighting innovative and sustainable design, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 671,
    currency: "SGD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-singapore-1-room-0-Queen-CityView",
    name: "Signature Queen Room",
    description: "Enjoy a stylish stay in our Signature-themed queen room, offering with a view of iconic landmarks, offering a unique blend of style and comfort, and unique touches of blending urban chic with Asian elegance.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 604,
    currency: "SGD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
