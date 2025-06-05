import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-sydney-5-room-4",
    name: "Coral Reef Double Suite",
    description: "Step into a soft double suite that combines Coral Reef-themed with breathtaking where the mountains touch the sky, complemented by complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Outdoor Furniture", "Bathtub", "Accessible Room"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 269,
    currency: "AUD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-sydney-5-room-4",
    name: "Bushland Queen Studio",
    description: "Unwind in this gentle queen studio with a pleasant outlook, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Books", "Smoke Detector", "Ironing Facilities", "Bluetooth Speaker", "Streaming Services"],
    pricePerNight: 232,
    currency: "AUD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-sydney-5-room-4",
    name: "Oceanic Sofa Bed Loft",
    description: "Step into a regal sofa bed loft that combines Oceanic-themed with breathtaking with a pleasant outlook, complemented by featuring premium bath amenities.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Luggage Rack", "Dining Table", "Streaming Services", "Books", "Balcony"],
    pricePerNight: 181,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
