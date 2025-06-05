import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Lakeview Retreat
export const lakeviewRetreatRooms: RoomOption[] = [
  {
    id: "hotel-quebec-city-6-room-5",
    name: "Classic King Room",
    description: "Classic-themed king room with panoramic views of the surrounding mountains, decorated with local artistic influences and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Fitness Equipment", "Refrigerator", "Dining Table", "Complimentary Bottled Water", "Books"],
    pricePerNight: 160,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
