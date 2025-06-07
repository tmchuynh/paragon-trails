import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Laguna Vista Hotel
export const lagunaVistaHotelRooms: RoomOption[] = [
  {
    id: "hotel-san-francisco-1-room-0-Twin-OceanView",
    name: "Classic Twin Apartment",
    description: "Enjoy a deluxe stay in our Classic-themed twin apartment, offering where you can relax to the sound of the waves, with carefully selected furnishings, and unique touches of designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 110,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-san-francisco-1-room-0-Double-None",
    name: "Modern Double Suite",
    description: "Step into a ornate double suite that combines Modern-themed with breathtaking with a pleasant outlook, complemented by featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 94,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-san-francisco-1-room-0-King-GardenView",
    name: "Standard King Villa",
    description: "Discover the charm of this Standard-themed king villa, complete with welcoming ambiance, stunning with a view of tranquil water features, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 174,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-san-francisco-1-room-0-SofaBed-CityView",
    name: "Standard Sofa Bed Loft",
    description: "Standard-themed sofa bed loft overlooking the vibrant cityscape, decorated with local artistic influences and with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 93,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
