import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Lodge
export const sunsetLodgeRooms: RoomOption[] = [
  {
    id: "hotel-skagway-4-room-3",
    name: "Liberty Twin Studio",
    description: "Unwind in this serene twin studio with panoramic views of the surrounding mountains, with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Blackout Curtains", "Accessible Room", "Soundproofing", "Ironing Facilities", "Seating Area"],
    pricePerNight: 131,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-skagway-4-room-3",
    name: "Heritage King Studio",
    description: "A industrial king retreat with a private balcony overlooking the sea, with rustic and modern influences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "Family Room", "Soundproofing", "Luggage Rack", "Dining Table", "Balcony"],
    pricePerNight: 215,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-skagway-4-room-3",
    name: "Premium Queen Penthouse",
    description: "A well-proportioned queen penthouse designed for refined comfort, with with a view of the endless blue and featuring a curated minibar selection, reflecting featuring sleek urban design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Refrigerator", "Jacuzzi Tub", "Accessible Room", "Ironing Facilities", "Flat-Screen TV"],
    pricePerNight: 163,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
