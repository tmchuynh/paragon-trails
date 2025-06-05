import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-oslo-3-room-2",
    name: "Serenity King Suite",
    description: "Relax in our deluxe roomy king suite featuring where you can enjoy the tranquility of the mountains, along with with high-speed internet access and created with both style and function in mind.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Books", "Accessible Room", "Connecting Rooms", "Mini Bar"],
    pricePerNight: 248,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-oslo-3-room-2",
    name: "Serenity King Villa",
    description: "A vast king villa designed for calming comfort, with with a view of the ocean's changing tides and with a private balcony or terrace, reflecting decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Complimentary Bottled Water", "Jacuzzi Tub", "Sauna"],
    pricePerNight: 233,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
