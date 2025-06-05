import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Liberty Suites
export const libertySuitesRooms: RoomOption[] = [
  {
    id: "hotel-miami-2-room-1",
    name: "Deluxe King Studio",
    description: "Enjoy a extravagant stay in our Deluxe-themed king studio, offering featuring a peaceful garden setting, with a spacious work area, and unique touches of featuring sleek urban design elements.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Mini Bar", "Kitchenette", "Smoke Detector"],
    pricePerNight: 212,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
