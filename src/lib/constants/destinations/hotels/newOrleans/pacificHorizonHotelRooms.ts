import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Pacific Horizon Hotel
export const pacificHorizonHotelRooms: RoomOption[] = [
  {
    id: "hotel-new-orleans-2-room-1",
    name: "Modern King Suite",
    description: "This palatial king suite promises with a view of iconic landmarks, enriched by Modern-themed details and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Wake-Up Service", "Seating Area", "Balcony", "Dining Table", "Mini Bar"],
    pricePerNight: 150,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-new-orleans-2-room-1",
    name: "Serenity King Penthouse",
    description: "Step into a stretching king penthouse that combines Serenity-themed with breathtaking with a private balcony overlooking the sea, complemented by with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Seating Area", "Balcony", "Family Room", "Soundproofing"],
    pricePerNight: 168,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  }
];
