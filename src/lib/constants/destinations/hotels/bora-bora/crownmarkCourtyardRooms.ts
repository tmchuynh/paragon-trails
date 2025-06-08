import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Crownmark Courtyard
export const crownmarkCourtyardRooms: RoomOption[] = [
  {
    id: "hotel-bora-bora-6-room-5-Twin-MountainView",
    name: "Serenity Twin Apartment",
    description: "Our Serenity-themed twin apartment offers plush luxury, panoramic where you can find inspiration in the mountains, and with a spacious seating area, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 10649,
    currency: "XPF",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-bora-bora-6-room-5-Double-None",
    name: "Standard Double Loft",
    description: "Standard-themed double loft with a pleasant outlook, decorated with local artistic influences and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 10950,
    currency: "XPF",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-bora-bora-6-room-5-King-MountainView",
    name: "Serenity King Room",
    description: "This glamorous king accommodation offers featuring awe-inspiring mountain scenery, created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 15711,
    currency: "XPF",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-bora-bora-6-room-5-Queen-GardenView",
    name: "Superior Queen Room",
    description: "Superior-themed room with gentle decor, offering a peaceful garden outlook, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 13789,
    currency: "XPF",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
