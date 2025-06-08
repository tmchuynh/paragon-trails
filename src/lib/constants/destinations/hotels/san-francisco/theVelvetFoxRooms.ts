import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Velvet Fox
export const theVelvetFoxRooms: RoomOption[] = [
  {
    id: "hotel-san-francisco-4-room-3-Single-GardenView",
    name: "Modern Single Apartment",
    description: "Discover the charm of this Modern-themed single apartment, complete with exquisite ambiance, stunning with a view of manicured lawns and gardens, and with high-speed internet access.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 100,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-san-francisco-4-room-3-Double-GardenView",
    name: "Executive Double Apartment",
    description: "Unwind in this compact double apartment with a view of the garden's vibrant colors, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 126,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-san-francisco-4-room-3-King-GardenView",
    name: "Deluxe King Studio",
    description: "Enjoy a stretching stay in our Deluxe-themed king studio, offering where you can relax in a natural oasis, with a private balcony or terrace, and unique touches of decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 151,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-san-francisco-4-room-3-SofaBed-OceanView",
    name: "Standard Sofa Bed Room",
    description: "This ample sofa bed accommodation offers where you can relax to the sound of the waves, decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 109,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
