import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Pacific Horizon Hotel
export const pacificHorizonHotelRooms: RoomOption[] = [
  {
    id: "hotel-juneau-1-room-0",
    name: "Superior Single Villa",
    description: "Enjoy a grandiose stay in our Superior-themed single villa, offering with a view of iconic landmarks, including climate control for your comfort, and unique touches of highlighting contemporary American style.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Streaming Services", "Fireplace", "Connecting Rooms", "Smoke Detector"],
    pricePerNight: 114,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-juneau-1-room-0",
    name: "Golden Gate Double Room",
    description: "Indulge in the plush atmosphere of our double room, with spectacular with a view of the mountains' breathtaking sunsets, featuring sleek urban design elements, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Connecting Rooms", "In-Room Safe", "Outdoor Furniture"],
    accessibilityFeatures: ["Wheelchair Accessible", "Accessible Bathroom"],
    pricePerNight: 176,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
