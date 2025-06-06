import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Grandview Inn
export const theGrandviewInnRooms: RoomOption[] = [
  {
    id: "hotel-los-angeles-5-room-4",
    name: "Harmony Single Penthouse",
    description: "Indulge in the ample atmosphere of our single penthouse, with spectacular where you can enjoy stunning sunsets over the water, decorated with local artistic influences, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Smoke Detector", "Family Room", "Balcony", "Fitness Equipment"],
    pricePerNight: 249,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-los-angeles-5-room-4",
    name: "Deluxe Double Studio",
    description: "Relax in our compact homey double studio featuring overlooking the sparkling ocean waves, along with equipped with all the modern conveniences and created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Complimentary Bottled Water", "Blackout Curtains", "Bluetooth Speaker", "Luggage Rack", "Fireplace", "Streaming Services"],
    pricePerNight: 290,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-los-angeles-5-room-4",
    name: "Serenity Sofa Bed Suite",
    description: "Step into a palatial sofa bed suite that combines Serenity-themed with breathtaking where the horizon meets the ocean, complemented by with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Outdoor Furniture", "Flat-Screen TV", "Wake-Up Service", "Books", "Seating Area", "Luggage Rack"],
    pricePerNight: 258,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
