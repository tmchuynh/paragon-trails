import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Cherry Blossom Lodge
export const cherryBlossomLodgeRooms: RoomOption[] = [
  {
    id: "hotel-tokyo-4-room-3",
    name: "Superior Twin Loft",
    description: "Our Superior-themed twin loft offers lavish luxury, panoramic with panoramic views of the mountain landscape, and featuring premium bath amenities, inspired by combining modern luxury with Japanese tradition.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "In-Room Safe", "Kitchenette"],
    pricePerNight: 119,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-tokyo-4-room-3",
    name: "Signature Sofa Bed Suite",
    description: "Enjoy a industrial stay in our Signature-themed sofa bed suite, offering where the mountains touch the sky, with blackout curtains for a perfect night's sleep, and unique touches of featuring traditional tatami elements.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Fitness Equipment", "Mini Bar"],
    pricePerNight: 112,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
