import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-bangkok-3-room-2",
    name: "Signature King Villa",
    description: "A fashionable king retreat with the sound of the ocean as your backdrop, blending Thai elegance with modern comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Sauna", "Connecting Rooms", "Fireplace", "In-Room Safe"],
    pricePerNight: 164,
    currency: "THB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-bangkok-3-room-2",
    name: "Orchid King Studio",
    description: "Indulge in the voluminous atmosphere of our king studio, with spectacular with a view of tranquil water features, featuring traditional Thai craftsmanship, and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Smoke Detector", "Bluetooth Speaker", "Family Room"],
    pricePerNight: 172,
    currency: "THB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
