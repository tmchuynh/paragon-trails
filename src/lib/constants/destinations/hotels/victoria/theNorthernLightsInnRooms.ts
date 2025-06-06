import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Northern Lights Inn
export const theNorthernLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-victoria-5-room-4",
    name: "Northern Lights Single Loft",
    description: "Discover the charm of this Northern Lights-themed single loft, complete with comfortable ambiance, stunning where you can enjoy stunning sunsets over the water, and with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Family Room", "Mini Bar"],
    pricePerNight: 137,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-victoria-5-room-4",
    name: "Timber Single Penthouse",
    description: "Enjoy a compact stay in our Timber-themed single penthouse, offering with a backdrop of city parks and green spaces, with high-speed internet access, and unique touches of with cozy, nature-inspired themes.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Flat-Screen TV", "Fireplace", "Family Room", "Outdoor Furniture"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 104,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-victoria-5-room-4",
    name: "Aurora Double Studio",
    description: "Discover the charm of this Aurora-themed double studio, complete with retro ambiance, stunning where you can enjoy the serenity of mountain life, and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Connecting Rooms", "Mini Bar", "Balcony"],
    pricePerNight: 161,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
