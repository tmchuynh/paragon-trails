import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Sleepy Seahorse
export const theSleepySeahorseRooms: RoomOption[] = [
  {
    id: "hotel-austin-5-room-4-Twin-MountainView",
    name: "Colonial Twin Suite",
    description: "This luxurious twin accommodation offers with panoramic views of the mountain landscape, highlighting contemporary American style.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 205,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-austin-5-room-4-SofaBed-GardenView",
    name: "Signature Sofa Bed Villa",
    description: "Experience our calming, inviting sofa bed villa with a view of shaded garden paths, with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 206,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-austin-5-room-4-King-None",
    name: "Luxury King Apartment",
    description: "Relax in our serene contemporary king apartment featuring with a pleasant outlook, along with complete with a well-appointed bathroom and offering a classic yet modern American experience.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 283,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-austin-5-room-4-Queen-None",
    name: "Executive Queen Villa",
    description: "Unwind in this expansive queen villa with a pleasant outlook, with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 258,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
