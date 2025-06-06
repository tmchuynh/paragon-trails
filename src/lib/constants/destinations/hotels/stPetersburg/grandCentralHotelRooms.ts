import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-st-petersburg-3-room-2",
    name: "Classic Single Penthouse",
    description: "Step into a intimate single penthouse that combines Classic-themed with breathtaking with a pleasant outlook, complemented by with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Sauna", "Seating Area", "Complimentary Bottled Water"],
    pricePerNight: 186,
    currency: "RUB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-st-petersburg-3-room-2",
    name: "Classic Sofa Bed Villa",
    description: "Our Classic-themed sofa bed villa offers open-concept luxury, panoramic where city lights twinkle at night, and complete with a well-appointed bathroom, inspired by featuring thoughtful design elements.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Accessible Room", "Fireplace", "In-Room Safe"],
    pricePerNight: 219,
    currency: "RUB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-st-petersburg-3-room-2",
    name: "Superior Double Villa",
    description: "A classic double villa designed for ample comfort, with with a view of the rugged mountain landscape and offering a unique blend of style and comfort, reflecting designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Blackout Curtains", "Mini Bar", "Streaming Services", "Books", "Soundproofing", "Flat-Screen TV"],
    pricePerNight: 323,
    currency: "RUB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
