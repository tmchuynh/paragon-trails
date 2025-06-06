import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Riu Palace St. Martin
export const riuPalaceStMartinRooms: RoomOption[] = [
  {
    id: "hotel-philipsburg-1-room-0-SofaBed-MountainView",
    name: "Deluxe Sofa Bed Apartment",
    description: "Experience our avant-garde, sleek sofa bed apartment where you can enjoy the mountains' majestic presence, with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 455,
    currency: "ANG",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-philipsburg-1-room-0-King-GardenView",
    name: "Seashell King Room",
    description: "Discover the charm of this Seashell-themed king room, complete with lavish ambiance, stunning where you can enjoy the serenity of a garden retreat, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 628,
    currency: "ANG",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-philipsburg-1-room-0-Double-GardenView",
    name: "Marigot Double Loft",
    description: "Indulge in the stylish atmosphere of our double loft, with spectacular where nature is just outside your window, with tropical and nautical themes, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 459,
    currency: "ANG",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-philipsburg-1-room-0-Queen-CityView",
    name: "Tropical Sky Queen Room",
    description: "This stretching queen room promises with a window to the bustling city below, enriched by Tropical Sky-themed details and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    accessibilityFeatures: ["Accessible Bathroom", "Wheelchair Accessible", "Elevator"],
    pricePerNight: 499,
    currency: "ANG",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-philipsburg-1-room-0-SofaBed-CityView",
    name: "Classic Sofa Bed Suite",
    description: "This peaceful sofa bed accommodation offers showcasing the urban landscape, with tropical and nautical themes.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 359,
    currency: "ANG",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-philipsburg-1-room-0-Queen-GardenView",
    name: "Classic Queen Apartment",
    description: "This classic queen accommodation offers with a view of the garden's tranquil pathways, with tropical and nautical themes.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 587,
    currency: "ANG",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
