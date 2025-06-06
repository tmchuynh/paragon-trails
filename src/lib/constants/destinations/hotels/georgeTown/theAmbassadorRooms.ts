import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-george-town-1-room-0",
    name: "Harmony Single Room",
    description: "Our Harmony-themed single room offers voluminous luxury, panoramic where you can escape to a green sanctuary, and offering a unique blend of style and comfort, inspired by decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Ironing Facilities", "Seating Area", "Sauna", "Wake-Up Service"],
    pricePerNight: 226,
    currency: "KYD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-george-town-1-room-0",
    name: "Horizon Double Suite",
    description: "Discover the charm of this Horizon-themed double suite, complete with sleek ambiance, stunning with a view of the city's cultural landmarks, and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Soundproofing", "Family Room", "Wake-Up Service", "In-Room Safe"],
    pricePerNight: 308,
    currency: "KYD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-george-town-1-room-0",
    name: "Horizon Sofa Bed Room",
    description: "Horizon-themed sofa bed room where you can gaze at the towering peaks, designed for ultimate comfort and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Dining Table", "Bluetooth Speaker", "Wake-Up Service", "Seating Area"],
    pricePerNight: 293,
    currency: "KYD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-george-town-1-room-0",
    name: "Serenity Twin Apartment",
    description: "Unwind in this elegant twin apartment with a view of shaded garden paths, with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Blackout Curtains", "Seating Area", "Balcony"],
    pricePerNight: 275,
    currency: "KYD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
