import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-berlin-8-room-7-SofaBed-MountainView",
    name: "Classic Sofa Bed Villa",
    description: "This homey sofa bed accommodation offers where you can enjoy the peace of the highlands, featuring thoughtful design elements.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 89,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-berlin-8-room-7-Single-OceanView",
    name: "Serenity Single Studio",
    description: "Serenity-themed studio with comfortable decor, where you can relax to the sound of the waves, and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 71,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-berlin-8-room-7-Twin-MountainView",
    name: "Signature Twin Studio",
    description: "Relax in our regal soothing twin studio featuring where you can escape to the mountains, along with complete with a well-appointed bathroom and featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 82,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-berlin-8-room-7-Double-MountainView",
    name: "Standard Double Loft",
    description: "Standard-themed loft with large-scale decor, where the mountains touch the sky, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 85,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
