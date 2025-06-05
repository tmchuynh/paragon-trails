import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for True North Hotel
export const trueNorthHotelRooms: RoomOption[] = [
  {
    id: "hotel-vancouver-7-room-6",
    name: "Aurora Queen Loft",
    description: "Enjoy a well-proportioned stay in our Aurora-themed queen loft, offering with a pleasant outlook, featuring premium bath amenities, and unique touches of inspired by the rugged beauty of Canadian landscapes.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Connecting Rooms", "In-Room Safe", "Seating Area"],
    accessibilityFeatures: ["Visual Aids", "Accessible Bathroom"],
    pricePerNight: 243,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-vancouver-7-room-6",
    name: "Aurora King Penthouse",
    description: "This retro king accommodation offers where city lights twinkle at night, featuring warm wood and stone accents.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Fireplace", "Accessible Room", "Flat-Screen TV", "In-Room Safe"],
    pricePerNight: 334,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-vancouver-7-room-6",
    name: "Timber Twin Penthouse",
    description: "Step into a snug twin penthouse that combines Timber-themed with breathtaking with a view of the city's cultural landmarks, complemented by with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Accessible Room", "Streaming Services", "Books"],
    pricePerNight: 190,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
