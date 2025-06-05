import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Timberline Inn
export const timberlineInnRooms: RoomOption[] = [
  {
    id: "hotel-toronto-1-room-0",
    name: "Rockies Single Penthouse",
    description: "Our Rockies-themed single penthouse offers inviting luxury, panoramic with a backdrop of city parks and green spaces, and featuring premium bath amenities, inspired by featuring warm wood and stone accents.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Accessible Room", "Refrigerator", "Blackout Curtains", "Sauna"],
    pricePerNight: 177,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-toronto-1-room-0",
    name: "Northern Lights Single Villa",
    description: "Our Northern Lights-themed single villa offers tasteful luxury, panoramic with a view of the mountains' rugged terrain, and equipped with all the modern conveniences, inspired by with cozy, nature-inspired themes.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "In-Room Safe", "Accessible Room"],
    pricePerNight: 190,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
