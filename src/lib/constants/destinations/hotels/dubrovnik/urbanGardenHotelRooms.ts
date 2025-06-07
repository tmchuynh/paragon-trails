import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-dubrovnik-10-room-9-Queen-OceanView",
    name: "Superior Queen Studio",
    description: "Indulge in the eclectic atmosphere of our queen studio, with spectacular where you can hear the soothing sound of the sea, featuring thoughtful design elements, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 144,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-dubrovnik-10-room-9-Double-None",
    name: "Superior Double Loft",
    description: "Step into a prestigious double loft that combines Superior-themed with breathtaking with a pleasant outlook, complemented by with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 90,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-dubrovnik-10-room-9-Double-MountainView",
    name: "Deluxe Double Room",
    description: "Deluxe-themed double room where you can escape to the mountains, decorated with local artistic influences and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 103,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-dubrovnik-10-room-9-SofaBed-CityView",
    name: "Luxury Sofa Bed Room",
    description: "This lavish sofa bed accommodation offers where you can watch the city wake up, designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 87,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
