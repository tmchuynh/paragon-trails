import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Kanchanaburi River Kwai Inn
export const kanchanaburiRiverKwaiInnRooms: RoomOption[] = [
  {
    id: "hotel-bangkok-1-room-0-King-CityView",
    name: "Superior King Villa",
    description: "Step into a large-scale king villa that combines Superior-themed with breathtaking with a window to the bustling city below, complemented by featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    accessibilityFeatures: ["Accessible Bathroom", "Visual Aids"],
    pricePerNight: 200459,
    currency: "THB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-bangkok-1-room-0-Double-OceanView",
    name: "Thai Double Suite",
    description: "Our Thai-themed double suite offers stylish luxury, panoramic with a view of the endless blue, and featuring a curated minibar selection, inspired by adorned with Thai-inspired decor.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 185280,
    currency: "THB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-bangkok-1-room-0-Single-MountainView",
    name: "Signature Single Studio",
    description: "Our Signature-themed single studio offers pleasant luxury, panoramic where you can experience the beauty of nature, and with a private balcony or terrace, inspired by adorned with Thai-inspired decor.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    accessibilityFeatures: ["Elevator", "Hearing Support", "Wheelchair Accessible"],
    pricePerNight: 129038,
    currency: "THB",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-bangkok-1-room-0-Single-GardenView",
    name: "Deluxe Single Penthouse",
    description: "Relax in our indulgent homey single penthouse featuring with a view of the garden's natural beauty, along with with high-speed internet access and with subtle nods to Thailand's rich cultural heritage.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 129198,
    currency: "THB",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-bangkok-1-room-0-Queen-OceanView",
    name: "Superior Queen Apartment",
    description: "Unwind in this bohemian queen apartment with the sound of the ocean as your backdrop, including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 198783,
    currency: "THB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
