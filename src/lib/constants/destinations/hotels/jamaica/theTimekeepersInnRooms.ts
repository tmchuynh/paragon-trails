import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Timekeeper’s Inn
export const theTimekeepersInnRooms: RoomOption[] = [
  {
    id: "hotel-jamaica-6-room-5-Twin-CityView",
    name: "Deluxe Twin Loft",
    description: "Enjoy a eclectic stay in our Deluxe-themed twin loft, offering showcasing the urban landscape, featuring premium bath amenities, and unique touches of designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 3945176,
    currency: "JMD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-jamaica-6-room-5-Queen-None",
    name: "Executive Queen Apartment",
    description: "This open-concept queen accommodation offers with a pleasant outlook, created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 5676422,
    currency: "JMD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-jamaica-6-room-5-Twin-None",
    name: "Deluxe Twin Villa",
    description: "Relax in our open-concept sleek twin villa featuring with a pleasant outlook, along with with a spacious seating area and designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 4111539,
    currency: "JMD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-jamaica-6-room-5-Double-GardenView",
    name: "Horizon Double Studio",
    description: "Horizon-themed double studio with serene garden views, designed for ultimate comfort and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 4802647,
    currency: "JMD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
