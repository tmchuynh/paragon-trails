import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Quanzhou Maritime Museum Hotel
export const quanzhouMaritimeMuseumHotelRooms: RoomOption[] = [
  {
    id: "hotel-shanghai-10-room-9-Single-GardenView",
    name: "Classic Single Loft",
    description: "Experience our exquisite, inviting single loft with a view of the garden's seasonal changes, with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 14252,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-shanghai-10-room-9-Twin-MountainView",
    name: "Dynasty Twin Suite",
    description: "A gentle twin retreat where you can experience the beauty of nature, blending imperial tradition with modern design.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 17469,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-shanghai-10-room-9-SofaBed-None",
    name: "Premium Sofa Bed Room",
    description: "Relax in our voluminous restful sofa bed room featuring with a pleasant outlook, along with with high-speed internet access and offering a refined and harmonious ambiance.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 14477,
    currency: "CNY",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-shanghai-10-room-9-King-OceanView",
    name: "Luxury King Apartment",
    description: "Relax in our intimate ornate king apartment featuring overlooking the sparkling ocean waves, along with with plush bedding for ultimate comfort and blending imperial tradition with modern design.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    accessibilityFeatures: ["Elevator"],
    pricePerNight: 27204,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
