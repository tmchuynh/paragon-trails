import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sofitel Bali Nusa Dua Beach Resort
export const sofitelBaliNusaDuaBeachResortRooms: RoomOption[] = [
  {
    id: "hotel-bali-9-room-8-Double-None",
    name: "Luxury Double Loft",
    description: "Luxury-themed loft with classic decor, with a pleasant outlook, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 48865927554,
    currency: "IDR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-bali-9-room-8-King-CityView",
    name: "Standard King Studio",
    description: "Unwind in this inviting king studio with a backdrop of city parks and green spaces, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 73035148523,
    currency: "IDR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-bali-9-room-8-Single-CityView",
    name: "Classic Single Penthouse",
    description: "Step into a sizable single penthouse that combines Classic-themed with breathtaking featuring a blend of modern and historic architecture, complemented by complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 46356663006,
    currency: "IDR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-bali-9-room-8-Twin-None",
    name: "Ubud Twin Penthouse",
    description: "Enjoy a comfortable stay in our Ubud-themed twin penthouse, offering with a pleasant outlook, featuring premium bath amenities, and unique touches of featuring Balinese art and natural materials.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    accessibilityFeatures: ["Hearing Support"],
    pricePerNight: 45353441259,
    currency: "IDR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
