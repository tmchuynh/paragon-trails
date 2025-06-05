import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Pacific Horizon Hotel
export const pacificHorizonHotelRooms: RoomOption[] = [
  {
    id: "hotel-miami-3-room-2",
    name: "Superior King Loft",
    description: "Experience our intimate, gentle king loft with a view of the endless blue, complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Complimentary Bottled Water", "Luggage Rack", "Bathtub", "Dining Table", "Kitchenette"],
    pricePerNight: 396,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-miami-3-room-2",
    name: "Signature Queen Penthouse",
    description: "Step into a well-proportioned queen penthouse that combines Signature-themed with breathtaking where you can watch the waves roll in, complemented by with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Complimentary Bottled Water", "Jacuzzi Tub", "Kitchenette", "Fitness Equipment", "Soundproofing"],
    accessibilityFeatures: ["Elevator", "Wheelchair Accessible"],
    pricePerNight: 343,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-miami-3-room-2",
    name: "Manhattan Sofa Bed Studio",
    description: "This homey sofa bed accommodation offers with a view of the tranquil sea, featuring sleek urban design elements.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Wake-Up Service", "Outdoor Furniture", "Smoke Detector", "Complimentary Bottled Water", "Family Room", "Bluetooth Speaker"],
    pricePerNight: 253,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
