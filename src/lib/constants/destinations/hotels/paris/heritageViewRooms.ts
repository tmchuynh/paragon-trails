import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-paris-1-room-0-King-MountainView",
    name: "Luxury King Penthouse",
    description: "Relax in our futuristic heartwarming king penthouse featuring with a view of the mountains' serene beauty, along with featuring premium bath amenities and featuring chic Parisian-inspired decor.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 155,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-paris-1-room-0-Twin-GardenView",
    name: "Tranquility Twin Penthouse",
    description: "Enjoy a spacious stay in our Tranquility-themed twin penthouse, offering with a view of manicured lawns and gardens, with blackout curtains for a perfect night's sleep, and unique touches of with French Provincial charm.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 87,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-paris-1-room-0-Single-CityView",
    name: "Standard Single Penthouse",
    description: "Our Standard-themed single penthouse offers eclectic luxury, panoramic where the city comes alive at dusk, and with a modern en-suite bathroom, inspired by blending French sophistication and modern comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 70,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-paris-1-room-0-King-None",
    name: "Superior King Suite",
    description: "Step into a well-proportioned king suite that combines Superior-themed with breathtaking with a pleasant outlook, complemented by with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    accessibilityFeatures: ["Wheelchair Accessible", "Hearing Support", "Visual Aids"],
    pricePerNight: 118,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
