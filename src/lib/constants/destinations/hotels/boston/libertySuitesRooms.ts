import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Liberty Suites
export const libertySuitesRooms: RoomOption[] = [
  {
    id: "hotel-boston-3-room-2",
    name: "Manhattan Twin Room",
    description: "Enjoy a wide-ranging stay in our Manhattan-themed twin room, offering with a pleasant outlook, featuring premium bath amenities, and unique touches of with rustic and modern influences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Connecting Rooms", "Outdoor Furniture", "Kitchenette"],
    pricePerNight: 184,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
