import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Kelowna Lakefront Resort
export const kelownaLakefrontResortRooms: RoomOption[] = [
  {
    id: "hotel-toronto-4-room-3-King-None",
    name: "Deluxe King Studio",
    description: "Indulge in the comfortable atmosphere of our king studio, with spectacular with a pleasant outlook, featuring warm wood and stone accents, and with a spacious work area.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 471,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-toronto-4-room-3-King-CityView",
    name: "Frontier King Apartment",
    description: "Frontier-themed king apartment overlooking the vibrant cityscape, with cozy, nature-inspired themes and with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 609,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-toronto-4-room-3-Twin-GardenView",
    name: "Rockies Twin Suite",
    description: "Rockies-themed suite with prestigious decor, with a view of the garden's lush greenery, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 371,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-toronto-4-room-3-Twin-None",
    name: "Superior Twin Room",
    description: "Enjoy a avant-garde stay in our Superior-themed twin room, offering with a pleasant outlook, with carefully selected furnishings, and unique touches of with cozy, nature-inspired themes.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 357,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-toronto-4-room-3-Twin-CityView",
    name: "Premium Twin Suite",
    description: "Premium-themed suite with inviting decor, showcasing the urban landscape, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 367,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-toronto-4-room-3-Queen-MountainView",
    name: "Timber Queen Suite",
    description: "Discover the charm of this Timber-themed queen suite, complete with tranquil ambiance, stunning with a view of the rugged mountain landscape, and with a spacious work area.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 564,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-toronto-4-room-3-Queen-GardenView",
    name: "Northern Lights Queen Penthouse",
    description: "Our Northern Lights-themed queen penthouse offers modern luxury, panoramic where nature is just outside your window, and with a luxurious soaking tub, inspired by inspired by the rugged beauty of Canadian landscapes.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 532,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-toronto-4-room-3-Double-MountainView",
    name: "Aurora Double Apartment",
    description: "Enjoy a serene stay in our Aurora-themed double apartment, offering where you can enjoy the serenity of mountain life, with a luxurious soaking tub, and unique touches of inspired by the rugged beauty of Canadian landscapes.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 496,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-toronto-4-room-3-Twin-MountainView",
    name: "Superior Twin Room",
    description: "Superior-themed room with tranquil decor, with a view of the mountains' breathtaking sunsets, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 378,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
