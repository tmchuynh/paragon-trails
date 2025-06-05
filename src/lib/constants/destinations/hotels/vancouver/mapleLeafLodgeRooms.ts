import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Maple Leaf Lodge
export const mapleLeafLodgeRooms: RoomOption[] = [
  {
    id: "hotel-vancouver-4-room-3",
    name: "Aurora Single Suite",
    description: "Step into a ample single suite that combines Aurora-themed with breathtaking featuring awe-inspiring mountain scenery, complemented by with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Complimentary Bottled Water", "Pet Friendly", "In-Room Safe", "Wake-Up Service", "Ironing Facilities"],
    pricePerNight: 108,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-vancouver-4-room-3",
    name: "Northern Lights Twin Studio",
    description: "Enjoy a refined stay in our Northern Lights-themed twin studio, offering with a view of the ocean's changing tides, with a luxurious soaking tub, and unique touches of with cozy, nature-inspired themes.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Accessible Room", "Complimentary Bottled Water", "Dining Table", "Blackout Curtains"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 136,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-vancouver-4-room-3",
    name: "Timber Twin Studio",
    description: "Enjoy a homey stay in our Timber-themed twin studio, offering offering a peaceful garden outlook, offering a unique blend of style and comfort, and unique touches of featuring warm wood and stone accents.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Luggage Rack", "Family Room", "Soundproofing"],
    pricePerNight: 137,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
