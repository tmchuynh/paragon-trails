import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Kanchanaburi River Kwai Inn
export const kanchanaburiRiverKwaiInnRooms: RoomOption[] = [
  {
    id: "hotel-phuket-6-room-5-SofaBed-OceanView",
    name: "Classic Sofa Bed Loft",
    description: "This rustic sofa bed accommodation offers with the sound of the ocean as your backdrop, with subtle nods to Thailand's rich cultural heritage.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 375394,
    currency: "THB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-phuket-6-room-5-Double-None",
    name: "Thai Double Studio",
    description: "Step into a industrial double studio that combines Thai-themed with breathtaking with a pleasant outlook, complemented by including climate control for your comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    accessibilityFeatures: ["Elevator", "Wheelchair Accessible", "Visual Aids"],
    pricePerNight: 320079,
    currency: "THB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-phuket-6-room-5-Single-CityView",
    name: "Premium Single Loft",
    description: "A intimate single loft designed for comfortable comfort, with featuring a blend of modern and historic architecture and with a modern en-suite bathroom, reflecting adorned with Thai-inspired decor.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 294196,
    currency: "THB",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-phuket-6-room-5-Twin-GardenView",
    name: "Classic Twin Villa",
    description: "Our generous Classic-themed villa offers where you can enjoy the serenity of a garden retreat, deluxe comfort, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 330878,
    currency: "THB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
