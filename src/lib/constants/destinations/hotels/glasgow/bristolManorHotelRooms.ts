import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Bristol Manor Hotel
export const bristolManorHotelRooms: RoomOption[] = [
  {
    id: "hotel-glasgow-8-room-7-Queen-MountainView",
    name: "Deluxe Queen Apartment",
    description: "Step into a stylish queen apartment that combines Deluxe-themed with breathtaking with panoramic views of the mountain landscape, complemented by with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 231,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-glasgow-8-room-7-Queen-None",
    name: "Piccadilly Queen Loft",
    description: "Experience our regal, eclectic queen loft with a pleasant outlook, with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 185,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-glasgow-8-room-7-Double-GardenView",
    name: "Kensington Double Apartment",
    description: "Our well-proportioned Kensington-themed apartment offers where you can take in the fresh air, refreshing comfort, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 162,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-glasgow-8-room-7-Single-MountainView",
    name: "Deluxe Single Villa",
    description: "This sleek single accommodation offers with panoramic views of the mountain landscape, decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 148,
    currency: "GBP",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
