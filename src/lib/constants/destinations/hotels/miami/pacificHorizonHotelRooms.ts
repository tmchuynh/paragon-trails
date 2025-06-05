import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Pacific Horizon Hotel
export const pacificHorizonHotelRooms: RoomOption[] = [
  {
    id: "hotel-miami-2-room-1",
    name: "Luxury King Villa",
    description: "Experience our opulent, glamorous king villa where you can enjoy the tranquility of the mountains, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Smoke Detector", "Fireplace", "Mini Bar"],
    pricePerNight: 355,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
