import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Rhodes Knights Inn
export const rhodesKnightsInnRooms: RoomOption[] = [
  {
    id: "hotel-mykonos-8-room-7-Twin-None",
    name: "Executive Twin Penthouse",
    description: "Step into a calming twin penthouse that combines Executive-themed with breathtaking with a pleasant outlook, complemented by complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 191,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-mykonos-8-room-7-Single-MountainView",
    name: "Deluxe Single Penthouse",
    description: "A opulent single retreat where mountains paint the horizon, blending traditional style with luxurious amenities.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 210,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-mykonos-8-room-7-Twin-CityView",
    name: "Deluxe Twin Villa",
    description: "Discover the charm of this Deluxe-themed twin villa, complete with deluxe ambiance, stunning with a window to the bustling city below, and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 220,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-mykonos-8-room-7-Double-None",
    name: "Aegean Double Suite",
    description: "Indulge in the modern atmosphere of our double suite, with spectacular with a pleasant outlook, with classic Greek architectural elements and modern comforts, and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 208,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
