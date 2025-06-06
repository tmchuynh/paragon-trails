import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Heritage Grand
export const theHeritageGrandRooms: RoomOption[] = [
  {
    id: "hotel-juneau-3-room-2-Double-None",
    name: "Superior Double Room",
    description: "Our Superior-themed double room offers palatial luxury, panoramic with a pleasant outlook, and with a luxurious soaking tub, inspired by highlighting contemporary American style.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    accessibilityFeatures: ["Hearing Support"],
    pricePerNight: 128,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-juneau-3-room-2-Queen-CityView",
    name: "Executive Queen Suite",
    description: "Relax in our vintage broad queen suite featuring where city lights twinkle at night, along with with a luxurious soaking tub and highlighting contemporary American style.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    accessibilityFeatures: ["Wheelchair Accessible", "Visual Aids"],
    pricePerNight: 151,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-juneau-3-room-2-Twin-GardenView",
    name: "Premium Twin Loft",
    description: "Experience our restful, elegant twin loft where you can find solace in nature's embrace, with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 131,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-juneau-3-room-2-Single-CityView",
    name: "Executive Single Room",
    description: "Experience our soothing, ample single room with a front-row seat to the city's heartbeat, with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 110,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-juneau-3-room-2-Single-None",
    name: "Luxury Single Suite",
    description: "Unwind in this luxurious single suite with a pleasant outlook, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    accessibilityFeatures: ["Hearing Support", "Wheelchair Accessible"],
    pricePerNight: 99,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-juneau-3-room-2-King-OceanView",
    name: "Pioneer King Suite",
    description: "Relax in our cozy tranquil king suite featuring where you can watch the waves roll in, along with offering a unique blend of style and comfort and featuring sleek urban design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 209,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-juneau-3-room-2-Double-CityView",
    name: "Standard Double Studio",
    description: "Discover the charm of this Standard-themed double studio, complete with glamorous ambiance, stunning with a view of the city's waterfront, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 137,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-juneau-3-room-2-Single-MountainView",
    name: "Luxury Single Penthouse",
    description: "Step into a contemporary single penthouse that combines Luxury-themed with breathtaking with a view of the mountains' rugged terrain, complemented by with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 125,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-juneau-3-room-2-Queen-MountainView",
    name: "Pioneer Queen Apartment",
    description: "Our Pioneer-themed queen apartment offers extensive luxury, panoramic with a view of the mountains' natural beauty, and complete with a well-appointed bathroom, inspired by featuring sleek urban design elements.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 162,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
