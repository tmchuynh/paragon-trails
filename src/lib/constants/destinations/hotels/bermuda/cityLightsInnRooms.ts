import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-bermuda-4-room-3",
    name: "Grotto King Room",
    description: "Our Grotto-themed king room offers futuristic luxury, panoramic with a backdrop of city parks and green spaces, and with plush bedding for ultimate comfort, inspired by blending seaside charm with refined comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Books", "Bathtub", "Kitchenette", "Outdoor Furniture", "Blackout Curtains"],
    pricePerNight: 264,
    currency: "BMD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-bermuda-4-room-3",
    name: "Standard King Suite",
    description: "Step into a lavish king suite that combines Standard-themed with breathtaking where you can hear the soothing sound of the sea, complemented by complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Board Games", "Bathtub"],
    pricePerNight: 335,
    currency: "BMD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-bermuda-4-room-3",
    name: "Grotto Sofa Bed Villa",
    description: "Unwind in this well-proportioned sofa bed villa with panoramic views of the surrounding mountains, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Sauna", "In-Room Safe", "Accessible Room"],
    accessibilityFeatures: ["Visual Aids", "Elevator"],
    pricePerNight: 218,
    currency: "BMD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
