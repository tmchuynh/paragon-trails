import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Niagara Suites
export const niagaraSuitesRooms: RoomOption[] = [
  {
    id: "hotel-quebec-city-1-room-0",
    name: "Premium King Villa",
    description: "Unwind in this classic king villa where the city comes alive at dusk, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Ironing Facilities", "Pet Friendly"],
    pricePerNight: 198,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-quebec-city-1-room-0",
    name: "Deluxe Double Studio",
    description: "Experience our refreshing, contemporary double studio with a view of the mountains' breathtaking sunsets, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Bathtub", "Luggage Rack", "Streaming Services", "Smoke Detector"],
    pricePerNight: 151,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-quebec-city-1-room-0",
    name: "Serenity Twin Room",
    description: "Experience our opulent, majestic twin room with a backdrop of city parks and green spaces, with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Jacuzzi Tub", "Board Games", "Smoke Detector", "Family Room", "Soundproofing"],
    pricePerNight: 119,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
