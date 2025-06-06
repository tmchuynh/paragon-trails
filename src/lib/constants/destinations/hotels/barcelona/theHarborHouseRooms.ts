import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-barcelona-2-room-1",
    name: "Harmony Queen Loft",
    description: "This minimalist queen loft promises with a view of the garden's vibrant colors, enriched by Harmony-themed details and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Luggage Rack", "Bluetooth Speaker", "Balcony"],
    pricePerNight: 338,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-barcelona-2-room-1",
    name: "Classic Twin Villa",
    description: "Discover the charm of this Classic-themed twin villa, complete with luxurious ambiance, stunning where you can enjoy the peace of the highlands, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Mini Bar", "Refrigerator", "Complimentary Bottled Water", "Family Room", "Accessible Room"],
    pricePerNight: 292,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-barcelona-2-room-1",
    name: "Modern Single Penthouse",
    description: "Enjoy a calming stay in our Modern-themed single penthouse, offering where you can enjoy the mountains' majestic presence, with plush bedding for ultimate comfort, and unique touches of created with both style and function in mind.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Outdoor Furniture", "Fireplace", "Fitness Equipment", "Mini Bar", "In-Room Safe"],
    pricePerNight: 237,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
