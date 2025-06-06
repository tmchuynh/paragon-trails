import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Rio Carnival Hotel
export const rioCarnivalHotelRooms: RoomOption[] = [
  {
    id: "hotel-rio-de-janeiro-3-room-2-Single-None",
    name: "Serenity Single Villa",
    description: "A extensive single villa designed for wide-ranging comfort, with with a pleasant outlook and with a luxurious soaking tub, reflecting featuring thoughtful design elements.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 432,
    currency: "BRL",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-rio-de-janeiro-3-room-2-Double-OceanView",
    name: "Standard Double Loft",
    description: "This open-concept double loft promises where you can enjoy stunning sunsets over the water, enriched by Standard-themed details and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    accessibilityFeatures: ["Visual Aids", "Accessible Bathroom", "Hearing Support"],
    pricePerNight: 658,
    currency: "BRL",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-rio-de-janeiro-3-room-2-Twin-CityView",
    name: "Modern Twin Penthouse",
    description: "Enjoy a retro stay in our Modern-themed twin penthouse, offering featuring a blend of modern and historic architecture, with a luxurious soaking tub, and unique touches of created with both style and function in mind.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 502,
    currency: "BRL",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-rio-de-janeiro-3-room-2-Queen-GardenView",
    name: "Classic Queen Room",
    description: "This retro queen accommodation offers where you can unwind in a garden paradise, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 712,
    currency: "BRL",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-rio-de-janeiro-3-room-2-King-MountainView",
    name: "Horizon King Room",
    description: "This artistic king room promises with a view of snow-capped peaks, enriched by Horizon-themed details and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 958,
    currency: "BRL",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
