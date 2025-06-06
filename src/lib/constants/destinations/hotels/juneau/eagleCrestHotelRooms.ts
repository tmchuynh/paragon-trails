import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Eagle Crest Hotel
export const eagleCrestHotelRooms: RoomOption[] = [
  {
    id: "hotel-juneau-6-room-5",
    name: "Golden Gate Queen Apartment",
    description: "Experience our commodious, classic queen apartment with a backdrop of city parks and green spaces, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Outdoor Furniture", "Mini Bar"],
    pricePerNight: 249,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-juneau-6-room-5",
    name: "Golden Gate Queen Studio",
    description: "Unwind in this grandiose queen studio where you can escape to a green sanctuary, with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Mini Bar", "Dining Table"],
    pricePerNight: 302,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
