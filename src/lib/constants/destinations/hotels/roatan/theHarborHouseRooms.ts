import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-roatan-1-room-0",
    name: "Copán King Villa",
    description:
      "Indulge in the lavish atmosphere of our king villa, with spectacular surrounded by vibrant flora, featuring handcrafted indigenous decor, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: [
      "Desk",
      "Free Wi-Fi",
      "Room Service",
      "Hair Dryer",
      "Toiletries",
      "Microwave",
      "Shower",
      "Heating",
      "Coffee Maker",
      "Slippers",
      "Bathrobe",
      "Room Service",
      "Alarm Clock",
      "Desk Lamp",
      "Daily Housekeeping",
      "Non-Smoking Room",
      "Television",
      "Air Conditioning",
      "Dining Table",
      "Refrigerator",
      "Jacuzzi Tub",
      "Bathtub",
    ],
    accessibilityFeatures: ["Visual Aids", "Elevator"],
    pricePerNight: 177,
    currency: "HNL",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  },
];
