import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-florence-2-room-1",
    name: "Modern Double Loft",
    description: "Relax in our fashionable upscale double loft featuring with a view of the mountains' natural beauty, along with equipped with all the modern conveniences and featuring tasteful Mediterranean touches.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Complimentary Bottled Water", "In-Room Safe", "Family Room", "Streaming Services"],
    pricePerNight: 234,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-florence-2-room-1",
    name: "Signature Queen Penthouse",
    description: "Discover the charm of this Signature-themed queen penthouse, complete with expansive ambiance, stunning with panoramic views of the mountain landscape, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Mini Bar", "Family Room", "In-Room Safe", "Jacuzzi Tub"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 288,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
