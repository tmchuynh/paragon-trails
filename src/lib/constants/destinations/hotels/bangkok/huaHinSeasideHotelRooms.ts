import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Hua Hin Seaside Hotel
export const huaHinSeasideHotelRooms: RoomOption[] = [
  {
    id: "hotel-bangkok-5-room-4-Double-CityView",
    name: "Orchid Double Suite",
    description: "Our Orchid-themed double suite offers homey luxury, panoramic overlooking the vibrant cityscape, and with blackout curtains for a perfect night's sleep, inspired by featuring traditional Thai craftsmanship.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 121275,
    currency: "THB",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-bangkok-5-room-4-King-CityView",
    name: "Superior King Loft",
    description: "Superior-themed loft with palatial decor, with a front-row seat to the city's heartbeat, and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 145989,
    currency: "THB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-bangkok-5-room-4-Twin-OceanView",
    name: "Jasmine Twin Villa",
    description: "Discover the charm of this Jasmine-themed twin villa, complete with compact ambiance, stunning where you can enjoy the ocean's beauty, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 133948,
    currency: "THB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-bangkok-5-room-4-Queen-None",
    name: "Superior Queen Studio",
    description: "Relax in our deluxe glamorous queen studio featuring with a pleasant outlook, along with with a spacious seating area and adorned with Thai-inspired decor.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 116756,
    currency: "THB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
