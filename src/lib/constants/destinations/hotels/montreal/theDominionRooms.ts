import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Dominion
export const theDominionRooms: RoomOption[] = [
  {
    id: "hotel-montreal-2-room-1",
    name: "Aurora King Suite",
    description: "Experience our relaxing, sizable king suite with a pleasant outlook, including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Ironing Facilities", "Luggage Rack"],
    pricePerNight: 242,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-montreal-2-room-1",
    name: "Rockies King Studio",
    description: "Indulge in the chic atmosphere of our king studio, with spectacular where you can enjoy the mountains' majestic presence, with cozy, nature-inspired themes, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Balcony", "Mini Bar", "Kitchenette", "Blackout Curtains"],
    pricePerNight: 328,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
