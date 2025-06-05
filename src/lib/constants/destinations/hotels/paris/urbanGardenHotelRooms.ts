import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-paris-5-room-4",
    name: "Executive Double Loft",
    description: "Discover the charm of this Executive-themed double loft, complete with eclectic ambiance, stunning where you can escape to a green sanctuary, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Complimentary Bottled Water", "Balcony", "Wake-Up Service", "Streaming Services", "Luggage Rack"],
    pricePerNight: 107,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
