import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-cape-town-3-room-2",
    name: "Deluxe Single Room",
    description: "Enjoy a bohemian stay in our Deluxe-themed single room, offering with a view of the mountains' changing seasons, including climate control for your comfort, and unique touches of created with both style and function in mind.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Streaming Services", "In-Room Safe", "Blackout Curtains", "Ironing Facilities"],
    pricePerNight: 184,
    currency: "ZAR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-cape-town-3-room-2",
    name: "Modern Single Apartment",
    description: "Unwind in this gentle single apartment where you can find solace in nature's embrace, with high-speed internet access.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Accessible Room", "Outdoor Furniture", "Pet Friendly", "Connecting Rooms"],
    pricePerNight: 170,
    currency: "ZAR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
