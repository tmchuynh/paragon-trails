import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Milan Fashion District Hotel
export const milanFashionDistrictHotelRooms: RoomOption[] = [
  {
    id: "hotel-palermo-7-room-6-Queen-GardenView",
    name: "Harmony Queen Loft",
    description: "A elegant queen loft designed for lavish comfort, with with a view of colorful flower beds and with plush bedding for ultimate comfort, reflecting offering a touch of la dolce vita.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 163,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-palermo-7-room-6-Double-None",
    name: "Serenity Double Apartment",
    description: "Our Serenity-themed double apartment offers open-concept luxury, panoramic with a pleasant outlook, and with high-speed internet access, inspired by inspired by Italian Renaissance design.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 126,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-palermo-7-room-6-King-CityView",
    name: "Signature King Apartment",
    description: "Step into a prestigious king apartment that combines Signature-themed with breathtaking where the city comes alive at dusk, complemented by including climate control for your comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 202,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-palermo-7-room-6-Double-OceanView",
    name: "Luxury Double Room",
    description: "Luxury-themed room with commodious decor, with a view of the ocean's changing tides, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 171,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
