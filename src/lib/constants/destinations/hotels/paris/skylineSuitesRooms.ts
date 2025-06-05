import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-paris-3-room-2",
    name: "Executive King Room",
    description: "Indulge in the homey atmosphere of our king room, with spectacular with a pleasant outlook, featuring chic Parisian-inspired decor, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Books", "Bathtub"],
    accessibilityFeatures: ["Hearing Support"],
    pricePerNight: 483,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-paris-3-room-2",
    name: "Modern Twin Villa",
    description: "Enjoy a ample stay in our Modern-themed twin villa, offering showcasing the urban landscape, including climate control for your comfort, and unique touches of blending French sophistication and modern comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Jacuzzi Tub", "Dining Table", "Soundproofing", "Bathtub"],
    accessibilityFeatures: ["Visual Aids", "Wheelchair Accessible"],
    pricePerNight: 319,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-paris-3-room-2",
    name: "Horizon Sofa Bed Penthouse",
    description: "Step into a bohemian sofa bed penthouse that combines Horizon-themed with breathtaking with a view of the city's waterfront, complemented by equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Wake-Up Service", "Connecting Rooms", "Board Games", "Outdoor Furniture"],
    pricePerNight: 353,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
