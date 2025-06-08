import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Iquitos River Hotel
export const iquitosRiverHotelRooms: RoomOption[] = [
  {
    id: "hotel-lima-7-room-6-King-MountainView",
    name: "Classic King Loft",
    description: "Classic-themed king loft where you can take in the fresh mountain air, highlighting the natural beauty of the region and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 5461,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-lima-7-room-6-Queen-MountainView",
    name: "Inca Queen Room",
    description: "A sumptuous queen room designed for soft comfort, with where you can enjoy the tranquility of the mountains and with high-speed internet access, reflecting offering warm and inviting interiors.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 4540,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-lima-7-room-6-King-GardenView",
    name: "Sacred Valley King Studio",
    description: "Enjoy a sophisticated stay in our Sacred Valley-themed king studio, offering where you can enjoy the serenity of a garden retreat, complete with a well-appointed bathroom, and unique touches of offering warm and inviting interiors.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 4273,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-lima-7-room-6-Twin-OceanView",
    name: "Luxury Twin Suite",
    description: "Luxury-themed twin suite with a private balcony overlooking the sea, offering warm and inviting interiors and with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 3134,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
