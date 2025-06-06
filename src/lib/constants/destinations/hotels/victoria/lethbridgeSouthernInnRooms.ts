import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Lethbridge Southern Inn
export const lethbridgeSouthernInnRooms: RoomOption[] = [
  {
    id: "hotel-victoria-1-room-0-Queen-CityView",
    name: "Executive Queen Room",
    description: "Our intimate Executive-themed room offers overlooking the vibrant cityscape, plush comfort, and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 448,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-victoria-1-room-0-Twin-CityView",
    name: "Standard Twin Apartment",
    description: "Indulge in the ornate atmosphere of our twin apartment, with spectacular offering panoramic city vistas, featuring warm wood and stone accents, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 377,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-victoria-1-room-0-King-None",
    name: "Superior King Villa",
    description: "This luxurious king villa promises with a pleasant outlook, enriched by Superior-themed details and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 557,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-victoria-1-room-0-Twin-MountainView",
    name: "Standard Twin Loft",
    description: "This soothing twin loft promises with a view of the mountains' lush valleys, enriched by Standard-themed details and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    accessibilityFeatures: ["Accessible Bathroom", "Visual Aids"],
    pricePerNight: 418,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-victoria-1-room-0-Single-CityView",
    name: "Northern Lights Single Loft",
    description: "This ornate single loft promises with a view of the city's cultural landmarks, enriched by Northern Lights-themed details and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 356,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-victoria-1-room-0-Twin-GardenView",
    name: "Deluxe Twin Penthouse",
    description: "Indulge in the commodious atmosphere of our twin penthouse, with spectacular where nature is just outside your window, blending urban sophistication with wilderness charm, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    accessibilityFeatures: ["Visual Aids", "Wheelchair Accessible", "Hearing Support"],
    pricePerNight: 359,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
