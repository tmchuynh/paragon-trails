import { Hotel } from "@/lib/interfaces/services/rentals";

export const florenceHotels: Hotel[] = [
  {
    id: "hotel-florence-1",
    name: "The Harbor House",
    address: "14 Riverside Avenue",
    rating: 3,
    accommodationType: "Vacation Rental",
    amenities: ["Restaurant", "Spa", "Swimming Pool", "Fitness Center", "Airport Shuttle", "Laundry Service"],
    accessibilityFeatures: ["Accessible Pathways", "Assistive Listening Devices"],
    checkInTime: "13:00",
    checkOutTime: "12:00",
    roomsAvailable: 14,
    isPetFriendly: false,
    currency: "EUR",
    contact: {
      contactEmail: "office@theharborhouse.com",
      contactPhone: "+298 342-520-9701",
    },
    policies: {
      cancellation: "Free cancellation up to 48 hours before check-in. If cancelled later, the first night will be charged.",
      smoking: "Not Allowed",
    },
    isPopular: false,
  },
  {
    id: "hotel-florence-2",
    name: "The Ambassador",
    address: "290 Old King Ave",
    rating: 4,
    accommodationType: "Eco-Lodge",
    amenities: ["24-Hour Front Desk", "Restaurant", "Non-Smoking Rooms", "Free Wi-Fi", "Laundry Service", "Spa", "Pet Friendly", "Bar", "Airport Shuttle", "Conference Room"],
    checkInTime: "13:00",
    checkOutTime: "12:00",
    roomsAvailable: 25,
    isPetFriendly: true,
    currency: "EUR",
    contact: {
      contactEmail: "help@theambassador.com",
      contactPhone: "+97 419-840-7878",
    },
    policies: {
      cancellation: "Cancellation made less than 3 days before check-in will incur a 75% charge.",
      smoking: "Not Allowed",
    },
    isPopular: false,
  },
  {
    id: "hotel-florence-3",
    name: "Grand Central Hotel",
    address: "286 Broadway Court",
    rating: 3,
    accommodationType: "Hotel",
    amenities: ["Free Wi-Fi", "Airport Shuttle", "Laundry Service", "Spa", "Room Service", "Bar", "Restaurant", "Conference Room", "Swimming Pool", "Parking"],
    accessibilityFeatures: ["Accessible Parking", "Wheelchair Accessible"],
    checkInTime: "16:00",
    checkOutTime: "11:00",
    roomsAvailable: 52,
    isPetFriendly: false,
    currency: "EUR",
    contact: {
      contactEmail: "support@grandcentralhotel.com",
      contactPhone: "+305 593-844-8748",
    },
    policies: {
      cancellation: "Free cancellation up to 7 days before arrival; no refund after that.",
      smoking: "Not Allowed",
    },
    isPopular: false,
  }
];
