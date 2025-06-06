import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sheraton Buenos Aires Hotel
export const sheratonBuenosAiresHotelRooms: RoomOption[] = [
  {
    id: "hotel-buenos-aires-6-room-5-Single-OceanView",
    name: "Signature Single Villa",
    description: "Our Signature-themed single villa offers comfortable luxury, panoramic where the ocean meets the sky, and with carefully selected furnishings, inspired by decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 56885,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-buenos-aires-6-room-5-Double-GardenView",
    name: "Luxury Double Suite",
    description: "Discover the charm of this Luxury-themed double suite, complete with comfortable ambiance, stunning featuring a peaceful garden setting, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    accessibilityFeatures: ["Hearing Support", "Visual Aids"],
    pricePerNight: 70027,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-buenos-aires-6-room-5-King-OceanView",
    name: "Standard King Suite",
    description: "Indulge in the indulgent atmosphere of our king suite, with spectacular featuring uninterrupted ocean vistas, decorated with local artistic influences, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 107848,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-buenos-aires-6-room-5-King-MountainView",
    name: "Premium King Suite",
    description: "Premium-themed king suite with a view of the mountains' serene beauty, designed for ultimate comfort and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator", "Hearing Support"],
    pricePerNight: 110460,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-buenos-aires-6-room-5-Twin-MountainView",
    name: "Modern Twin Villa",
    description: "Our classic Modern-themed villa offers with panoramic views of the mountain landscape, traditional comfort, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator", "Hearing Support"],
    pricePerNight: 71030,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-buenos-aires-6-room-5-Single-CityView",
    name: "Tranquility Single Suite",
    description: "Unwind in this intimate single suite with a window to the bustling city below, featuring premium bath amenities.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 53911,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-buenos-aires-6-room-5-Queen-None",
    name: "Signature Queen Apartment",
    description: "Enjoy a classic stay in our Signature-themed queen apartment, offering with a pleasant outlook, offering a unique blend of style and comfort, and unique touches of decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator", "Accessible Bathroom"],
    pricePerNight: 69413,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-buenos-aires-6-room-5-Single-GardenView",
    name: "Deluxe Single Room",
    description: "Deluxe-themed room with expansive decor, where you can enjoy the sights and sounds of nature, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 52310,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-buenos-aires-6-room-5-Single-MountainView",
    name: "Executive Single Apartment",
    description: "Discover the charm of this Executive-themed single apartment, complete with luxurious ambiance, stunning where you can enjoy the mountains' majestic presence, and with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 58700,
    currency: "ARS",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
