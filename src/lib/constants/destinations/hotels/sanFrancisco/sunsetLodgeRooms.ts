import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Lodge
export const sunsetLodgeRooms: RoomOption[] = [
  {
    id: "hotel-san-francisco-5-room-4",
    name: "Serenity King Apartment",
    description: "This serene king apartment promises with panoramic views of the surrounding mountains, enriched by Serenity-themed details and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Flat-Screen TV", "Ironing Facilities"],
    pricePerNight: 230,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-san-francisco-5-room-4",
    name: "Modern King Room",
    description: "This wide-ranging king accommodation offers where you can enjoy the tranquility of nature, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Blackout Curtains", "Bathtub", "Mini Bar", "Fireplace", "In-Room Safe"],
    pricePerNight: 181,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
