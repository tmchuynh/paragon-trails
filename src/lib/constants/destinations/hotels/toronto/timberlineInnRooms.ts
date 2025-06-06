import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Timberline Inn
export const timberlineInnRooms: RoomOption[] = [
  {
    id: "hotel-toronto-1-room-0",
    name: "Frontier King Penthouse",
    description:
      "Indulge in the lavish atmosphere of our king penthouse, with spectacular with a view of the garden's seasonal changes, featuring warm wood and stone accents, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 2,
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
      "Outdoor Furniture",
      "Blackout Curtains",
      "Mini Bar",
      "Kitchenette",
      "Dining Table",
      "Sauna",
    ],
    pricePerNight: 314,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
];
