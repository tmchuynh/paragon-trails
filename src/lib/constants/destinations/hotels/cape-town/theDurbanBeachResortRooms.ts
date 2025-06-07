import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Durban Beach Resort
export const theDurbanBeachResortRooms: RoomOption[] = [
  {
    id: "hotel-cape-town-4-room-3-King-None",
    name: "Superior King Apartment",
    description: "Relax in our majestic classic king apartment featuring with a pleasant outlook, along with offering a unique blend of style and comfort and featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 7070,
    currency: "ZAR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-cape-town-4-room-3-King-CityView",
    name: "Signature King Villa",
    description: "Step into a tranquil king villa that combines Signature-themed with breathtaking offering panoramic city vistas, complemented by offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 7934,
    currency: "ZAR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-cape-town-4-room-3-SofaBed-MountainView",
    name: "Tranquility Sofa Bed Room",
    description: "Step into a plush sofa bed room that combines Tranquility-themed with breathtaking where you can enjoy the tranquility of the mountains, complemented by including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 5784,
    currency: "ZAR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-cape-town-4-room-3-SofaBed-None",
    name: "Classic Sofa Bed Villa",
    description: "Experience our ornate, welcoming sofa bed villa with a pleasant outlook, with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 4404,
    currency: "ZAR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
