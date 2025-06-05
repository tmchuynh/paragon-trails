import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-cape-town-1-room-0",
    name: "Signature Single Apartment",
    description: "Step into a intimate single apartment that combines Signature-themed with breathtaking where you can watch the city wake up, complemented by complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "In-Room Safe", "Balcony", "Flat-Screen TV", "Connecting Rooms", "Refrigerator"],
    pricePerNight: 129,
    currency: "ZAR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-cape-town-1-room-0",
    name: "Horizon Double Loft",
    description: "This sleek double loft promises with a panoramic view of the coastline, enriched by Horizon-themed details and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Kitchenette", "Mini Bar", "Board Games", "Streaming Services"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 196,
    currency: "ZAR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-cape-town-1-room-0",
    name: "Modern Queen Studio",
    description: "Our Modern-themed queen studio offers cozy luxury, panoramic where you can unwind in a garden paradise, and complete with a well-appointed bathroom, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Balcony", "Ironing Facilities", "Accessible Room", "Family Room", "Dining Table"],
    pricePerNight: 228,
    currency: "ZAR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-cape-town-1-room-0",
    name: "Serenity Queen Villa",
    description: "Our Serenity-themed queen villa offers sumptuous luxury, panoramic where you can gaze at the towering peaks, and complete with a well-appointed bathroom, inspired by decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Smoke Detector", "Complimentary Bottled Water", "Jacuzzi Tub", "Outdoor Furniture", "Family Room"],
    pricePerNight: 236,
    currency: "ZAR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
