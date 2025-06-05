import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Windsor House
export const windsorHouseRooms: RoomOption[] = [
  {
    id: "hotel-southampton-6-room-5",
    name: "Standard King Suite",
    description: "Our Standard-themed king suite offers sleek luxury, panoramic featuring a blend of modern and historic architecture, and with a luxurious soaking tub, inspired by decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Sauna", "Wake-Up Service", "Books", "Bluetooth Speaker"],
    pricePerNight: 145,
    currency: "GBP",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-southampton-6-room-5",
    name: "Luxury Queen Suite",
    description: "Experience our spacious, calming queen suite with a view of the garden's tranquil pathways, complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "Fitness Equipment", "In-Room Safe", "Ironing Facilities", "Family Room"],
    pricePerNight: 147,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
