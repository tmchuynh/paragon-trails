import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Metropolitan
export const theMetropolitanRooms: RoomOption[] = [
  {
    id: "hotel-miami-1-room-0",
    name: "Manhattan King Penthouse",
    description: "A homey king retreat where you can escape to a green sanctuary, featuring sleek urban design elements.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Connecting Rooms", "In-Room Safe", "Accessible Room"],
    pricePerNight: 152,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-miami-1-room-0",
    name: "Golden Gate King Loft",
    description: "Golden Gate-themed king loft with a view of the rugged mountain landscape, offering a classic yet modern American experience and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Outdoor Furniture", "Refrigerator", "Smoke Detector", "Flat-Screen TV", "Pet Friendly"],
    pricePerNight: 163,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
