import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-kiel-4-room-3",
    name: "Classic King Loft",
    description: "Discover the charm of this Classic-themed king loft, complete with soft ambiance, stunning where you can experience the beauty of nature, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Streaming Services", "Connecting Rooms", "Mini Bar", "Kitchenette", "Fitness Equipment"],
    pricePerNight: 392,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-kiel-4-room-3",
    name: "Signature King Room",
    description: "Signature-themed king room overlooking lush garden landscapes, designed for ultimate comfort and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Streaming Services", "Books", "Connecting Rooms", "In-Room Safe"],
    pricePerNight: 351,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
