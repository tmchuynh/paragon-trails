import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Eagle Crest Hotel
export const eagleCrestHotelRooms: RoomOption[] = [
  {
    id: "hotel-los-angeles-2-room-1-SofaBed-GardenView",
    name: "Horizon Sofa Bed Villa",
    description: "Unwind in this minimalist sofa bed villa where you can enjoy the sights and sounds of nature, with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 92,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-los-angeles-2-room-1-Single-MountainView",
    name: "Modern Single Villa",
    description: "Enjoy a minimalist stay in our Modern-themed single villa, offering with panoramic views of the mountain landscape, featuring premium bath amenities, and unique touches of decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 99,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-los-angeles-2-room-1-Double-GardenView",
    name: "Standard Double Villa",
    description: "Discover the charm of this Standard-themed double villa, complete with indulgent ambiance, stunning where nature is just outside your window, and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 105,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-los-angeles-2-room-1-Twin-None",
    name: "Horizon Twin Villa",
    description: "A cozy twin retreat with a pleasant outlook, featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 84,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
