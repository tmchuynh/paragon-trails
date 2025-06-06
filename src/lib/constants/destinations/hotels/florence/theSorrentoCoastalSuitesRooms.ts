import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Sorrento Coastal Suites
export const theSorrentoCoastalSuitesRooms: RoomOption[] = [
  {
    id: "hotel-florence-6-room-5-Single-GardenView",
    name: "Standard Single Villa",
    description: "Step into a spacious single villa that combines Standard-themed with breathtaking with serene garden views, complemented by with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 151,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-florence-6-room-5-Queen-OceanView",
    name: "Premium Queen Villa",
    description: "Step into a elegant queen villa that combines Premium-themed with breathtaking where you can enjoy the ocean's beauty, complemented by with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 256,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-florence-6-room-5-SofaBed-None",
    name: "Horizon Sofa Bed Suite",
    description: "Relax in our fashionable fashionable sofa bed suite featuring with a pleasant outlook, along with offering a unique blend of style and comfort and with classic Italian elegance.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    accessibilityFeatures: ["Wheelchair Accessible", "Visual Aids"],
    pricePerNight: 155,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-florence-6-room-5-Twin-MountainView",
    name: "Superior Twin Room",
    description: "Superior-themed twin room with a view of the rugged mountain landscape, featuring tasteful Mediterranean touches and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    accessibilityFeatures: ["Accessible Bathroom", "Hearing Support"],
    pricePerNight: 201,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-florence-6-room-5-King-MountainView",
    name: "Luxury King Room",
    description: "Our lavish Luxury-themed room offers where you can experience the beauty of nature, inviting comfort, and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    accessibilityFeatures: ["Hearing Support", "Visual Aids"],
    pricePerNight: 285,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-florence-6-room-5-SofaBed-CityView",
    name: "Serenity Sofa Bed Suite",
    description: "Relax in our chic homey sofa bed suite featuring where you can enjoy the city's energy, along with with a private balcony or terrace and offering a touch of la dolce vita.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 178,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-florence-6-room-5-Double-CityView",
    name: "Signature Double Loft",
    description: "Enjoy a inviting stay in our Signature-themed double loft, offering with a backdrop of city parks and green spaces, with a private balcony or terrace, and unique touches of offering a touch of la dolce vita.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 176,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-florence-6-room-5-Double-MountainView",
    name: "Harmony Double Room",
    description: "A bohemian double retreat where you can enjoy the tranquility of the mountains, inspired by Italian Renaissance design.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 225,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-florence-6-room-5-King-CityView",
    name: "Premium King Apartment",
    description: "Indulge in the intimate atmosphere of our king apartment, with spectacular where city lights twinkle at night, inspired by Italian Renaissance design, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 287,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
