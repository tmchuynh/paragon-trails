import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Koh Samui Island Retreat
export const kohSamuiIslandRetreatRooms: RoomOption[] = [
  {
    id: "hotel-bangkok-2-room-1-Single-None",
    name: "Superior Single Loft",
    description: "Our Superior-themed single loft offers intimate luxury, panoramic with a pleasant outlook, and featuring premium bath amenities, inspired by adorned with Thai-inspired decor.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 192320,
    currency: "THB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-bangkok-2-room-1-Queen-GardenView",
    name: "Classic Queen Loft",
    description: "Discover the charm of this Classic-themed queen loft, complete with extravagant ambiance, stunning where you can take in the fresh air, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 384651,
    currency: "THB",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-bangkok-2-room-1-Twin-GardenView",
    name: "Luxury Twin Apartment",
    description: "This expansive twin accommodation offers where you can enjoy the beauty of nature, blending Thai elegance with modern comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator", "Visual Aids"],
    pricePerNight: 270417,
    currency: "THB",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-bangkok-2-room-1-Single-MountainView",
    name: "Superior Single Villa",
    description: "Enjoy a deluxe stay in our Superior-themed single villa, offering with a view of the mountains' changing seasons, featuring premium bath amenities, and unique touches of with subtle nods to Thailand's rich cultural heritage.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 273767,
    currency: "THB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-bangkok-2-room-1-Queen-MountainView",
    name: "Signature Queen Apartment",
    description: "Step into a grandiose queen apartment that combines Signature-themed with breathtaking with majestic mountain vistas, complemented by with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 395899,
    currency: "THB",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-bangkok-2-room-1-SofaBed-CityView",
    name: "Tropical Sofa Bed Suite",
    description: "Tropical-themed sofa bed suite where you can watch the city wake up, blending Thai elegance with modern comfort and with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 245106,
    currency: "THB",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-bangkok-2-room-1-Double-OceanView",
    name: "Executive Double Apartment",
    description: "Experience our open-concept, room-filled double apartment where the horizon meets the ocean, with a spacious work area.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 321503,
    currency: "THB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-bangkok-2-room-1-Twin-CityView",
    name: "Tropical Twin Apartment",
    description: "This prestigious twin apartment promises with a view of the city's waterfront, enriched by Tropical-themed details and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 236325,
    currency: "THB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
