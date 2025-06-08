import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sydney Harbor Hotel
export const sydneyHarborHotelRooms: RoomOption[] = [
  {
    id: "hotel-sydney-10-room-9-King-None",
    name: "Sunburnt King Penthouse",
    description: "Discover the charm of this Sunburnt-themed king penthouse, complete with intimate ambiance, stunning with a pleasant outlook, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 308,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-sydney-10-room-9-Queen-GardenView",
    name: "Superior Queen Apartment",
    description: "Superior-themed queen apartment with a view of colorful flower beds, featuring airy, sun-drenched interiors and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 312,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-sydney-10-room-9-Double-MountainView",
    name: "Luxury Double Penthouse",
    description: "Luxury-themed penthouse with eclectic decor, with a view of the mountains' rugged terrain, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 275,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-sydney-10-room-9-SofaBed-OceanView",
    name: "Superior Sofa Bed Suite",
    description: "Superior-themed suite with intimate decor, where the horizon meets the ocean, and including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 240,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
