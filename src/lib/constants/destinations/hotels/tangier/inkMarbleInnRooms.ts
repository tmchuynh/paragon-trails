import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Ink & Marble Inn
export const inkMarbleInnRooms: RoomOption[] = [
  {
    id: "hotel-tangier-1-room-0-Twin-MountainView",
    name: "Superior Twin Villa",
    description: "Unwind in this intimate twin villa with panoramic views of the mountain landscape, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    accessibilityFeatures: ["Elevator", "Wheelchair Accessible"],
    pricePerNight: 23808,
    currency: "MAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-tangier-1-room-0-Queen-OceanView",
    name: "Serenity Queen Penthouse",
    description: "This intimate queen penthouse promises where you can enjoy the ocean's beauty, enriched by Serenity-themed details and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    accessibilityFeatures: ["Wheelchair Accessible", "Visual Aids"],
    pricePerNight: 33721,
    currency: "MAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-tangier-1-room-0-King-None",
    name: "Classic King Loft",
    description: "Unwind in this large-scale king loft with a pleasant outlook, with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 26099,
    currency: "MAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-tangier-1-room-0-Twin-CityView",
    name: "Signature Twin Loft",
    description: "Unwind in this opulent twin loft where city lights twinkle at night, featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 18804,
    currency: "MAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
