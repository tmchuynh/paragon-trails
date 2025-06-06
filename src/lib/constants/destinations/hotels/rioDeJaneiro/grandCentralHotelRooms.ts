import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-rio-de-janeiro-2-room-1",
    name: "Serenity Twin Penthouse",
    description: "Serenity-themed twin penthouse where you can enjoy the tranquility of nature, designed for ultimate comfort and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Complimentary Bottled Water", "Smoke Detector", "Books", "Connecting Rooms", "Wake-Up Service"],
    pricePerNight: 161,
    currency: "BRL",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-rio-de-janeiro-2-room-1",
    name: "Executive Twin Studio",
    description: "Step into a soothing twin studio that combines Executive-themed with breathtaking where you can hear the soothing sound of the sea, complemented by with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Luggage Rack", "Outdoor Furniture", "Soundproofing", "Sauna"],
    pricePerNight: 196,
    currency: "BRL",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-rio-de-janeiro-2-room-1",
    name: "Deluxe Sofa Bed Room",
    description: "This plush sofa bed accommodation offers with stunning views of the city skyline, designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Pet Friendly", "Board Games", "Outdoor Furniture", "Seating Area", "Blackout Curtains"],
    pricePerNight: 168,
    currency: "BRL",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
