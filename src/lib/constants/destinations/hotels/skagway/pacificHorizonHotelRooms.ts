import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Pacific Horizon Hotel
export const pacificHorizonHotelRooms: RoomOption[] = [
  {
    id: "hotel-skagway-2-room-1",
    name: "Manhattan King Suite",
    description: "A soothing king suite designed for voluminous comfort, with with a view of the tranquil sea and with plush bedding for ultimate comfort, reflecting highlighting contemporary American style.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "In-Room Safe", "Fitness Equipment", "Fireplace", "Soundproofing"],
    pricePerNight: 195,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-skagway-2-room-1",
    name: "Colonial King Studio",
    description: "Our Colonial-themed king studio offers ample luxury, panoramic with a front-row seat to the city's heartbeat, and with plush bedding for ultimate comfort, inspired by with rustic and modern influences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Smoke Detector", "Soundproofing"],
    accessibilityFeatures: ["Hearing Support", "Wheelchair Accessible"],
    pricePerNight: 142,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
