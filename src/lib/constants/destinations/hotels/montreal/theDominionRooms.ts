import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Dominion
export const theDominionRooms: RoomOption[] = [
  {
    id: "hotel-montreal-6-room-5",
    name: "Superior King Apartment",
    description: "Enjoy a inviting stay in our Superior-themed king apartment, offering where you can take in the fresh air, with carefully selected furnishings, and unique touches of with cozy, nature-inspired themes.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Luggage Rack", "Jacuzzi Tub", "Bathtub"],
    pricePerNight: 392,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
