import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Pacific Horizon Hotel
export const pacificHorizonHotelRooms: RoomOption[] = [
  {
    id: "hotel-new-york-city-4-room-3",
    name: "Tranquility Twin Studio",
    description: "Experience our prestigious, large-scale twin studio with a view of the garden's vibrant colors, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Fitness Equipment", "Kitchenette", "Books", "Family Room", "Bathtub"],
    pricePerNight: 205,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
