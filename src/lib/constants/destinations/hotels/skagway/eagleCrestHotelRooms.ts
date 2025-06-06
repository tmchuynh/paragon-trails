import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Eagle Crest Hotel
export const eagleCrestHotelRooms: RoomOption[] = [
  {
    id: "hotel-skagway-1-room-0",
    name: "Luxury Single Apartment",
    description: "Experience our well-proportioned, calming single apartment where you can watch the waves roll in, featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "Smoke Detector", "Complimentary Bottled Water"],
    pricePerNight: 97,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-skagway-1-room-0",
    name: "Manhattan Double Suite",
    description: "Unwind in this cozy double suite with a pleasant outlook, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Sauna", "Jacuzzi Tub", "Books", "Balcony", "Bathtub"],
    pricePerNight: 95,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-skagway-1-room-0",
    name: "Classic Twin Penthouse",
    description: "Our Classic-themed twin penthouse offers tasteful luxury, panoramic with a view of the ocean's changing tides, and offering a unique blend of style and comfort, inspired by with rustic and modern influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Fitness Equipment", "Mini Bar", "Flat-Screen TV"],
    pricePerNight: 102,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
