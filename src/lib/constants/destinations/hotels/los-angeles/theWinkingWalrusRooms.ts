import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Winking Walrus
export const theWinkingWalrusRooms: RoomOption[] = [
  {
    id: "hotel-los-angeles-2-room-1-SofaBed-CityView",
    name: "Signature Sofa Bed Loft",
    description: "Signature-themed loft with well-proportioned decor, where you can enjoy the city's energy, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 184,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-los-angeles-2-room-1-SofaBed-None",
    name: "Serenity Sofa Bed Suite",
    description: "This intimate sofa bed suite promises with a pleasant outlook, enriched by Serenity-themed details and including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 168,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-los-angeles-2-room-1-King-MountainView",
    name: "Luxury King Penthouse",
    description: "Step into a grandiose king penthouse that combines Luxury-themed with breathtaking with a view of the mountains' changing seasons, complemented by offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 374,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-los-angeles-2-room-1-Queen-GardenView",
    name: "Deluxe Queen Loft",
    description: "A wide-ranging queen retreat with serene garden views, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 281,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-los-angeles-2-room-1-Queen-CityView",
    name: "Classic Queen Loft",
    description: "A opulent queen retreat where you can watch the city wake up, created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 244,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-los-angeles-2-room-1-Queen-None",
    name: "Horizon Queen Room",
    description: "Experience our heartwarming, prestigious queen room with a pleasant outlook, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 242,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-los-angeles-2-room-1-Single-GardenView",
    name: "Tranquility Single Suite",
    description: "Indulge in the elegant atmosphere of our single suite, with spectacular where you can unwind in a garden paradise, decorated with local artistic influences, and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator", "Hearing Support"],
    pricePerNight: 186,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
