import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Laurentian
export const theLaurentianRooms: RoomOption[] = [
  {
    id: "hotel-victoria-4-room-3",
    name: "Luxury King Penthouse",
    description: "Our Luxury-themed king penthouse offers extensive luxury, panoramic with a pleasant outlook, and equipped with all the modern conveniences, inspired by featuring warm wood and stone accents.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Complimentary Bottled Water", "Seating Area", "Sauna", "Bathtub"],
    pricePerNight: 177,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-victoria-4-room-3",
    name: "Maple Queen Suite",
    description: "This sophisticated queen accommodation offers with a view of the city's waterfront, with cozy, nature-inspired themes.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "Bathtub", "Sauna", "Luggage Rack", "Accessible Room"],
    pricePerNight: 145,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-victoria-4-room-3",
    name: "Premium Sofa Bed Room",
    description: "Indulge in the roomy atmosphere of our sofa bed room, with spectacular where you can hear the soothing sound of the sea, with cozy, nature-inspired themes, and with high-speed internet access.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Sauna", "Mini Bar", "Dining Table"],
    pricePerNight: 136,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
