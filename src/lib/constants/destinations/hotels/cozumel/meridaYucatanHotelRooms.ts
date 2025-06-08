import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Merida Yucatan Hotel
export const meridaYucatanHotelRooms: RoomOption[] = [
  {
    id: "hotel-cozumel-1-room-0-Single-MountainView",
    name: "Signature Single Loft",
    description: "Indulge in the welcoming atmosphere of our single loft, with spectacular where the mountains touch the sky, featuring bright colors and handcrafted decor, and with a spacious work area.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 54761,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-cozumel-1-room-0-Double-MountainView",
    name: "Mayan Double Room",
    description: "Our vintage Mayan-themed room offers with a view of the mountains' lush valleys, serene comfort, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 79775,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-cozumel-1-room-0-Double-CityView",
    name: "Standard Double Villa",
    description: "Unwind in this welcoming double villa where you can enjoy the city's energy, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 68151,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-cozumel-1-room-0-Queen-OceanView",
    name: "Mayan Queen Loft",
    description: "Enjoy a inviting stay in our Mayan-themed queen loft, offering where you can enjoy stunning sunsets over the water, with high-speed internet access, and unique touches of offering a festive and welcoming environment.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 97846,
    currency: "MXN",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
