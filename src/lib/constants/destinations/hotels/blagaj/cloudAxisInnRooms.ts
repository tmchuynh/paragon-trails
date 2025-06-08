import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Cloud Axis Inn
export const cloudAxisInnRooms: RoomOption[] = [
  {
    id: "hotel-blagaj-3-room-2-Single-None",
    name: "Modern Single Studio",
    description: "Unwind in this gentle single studio with a pleasant outlook, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 233,
    currency: "BAM",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-blagaj-3-room-2-Single-MountainView",
    name: "Tranquility Single Villa",
    description: "Experience our airy, indulgent single villa where you can experience the beauty of nature, with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 296,
    currency: "BAM",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-blagaj-3-room-2-King-CityView",
    name: "Serenity King Villa",
    description: "A futuristic king villa designed for soothing comfort, with where you can enjoy the city's energy and with plush bedding for ultimate comfort, reflecting created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 408,
    currency: "BAM",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-blagaj-3-room-2-Queen-None",
    name: "Deluxe Queen Apartment",
    description: "Relax in our calming intimate queen apartment featuring with a pleasant outlook, along with with a spacious work area and designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 314,
    currency: "BAM",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
