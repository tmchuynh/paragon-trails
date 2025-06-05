import { Hotel } from "@/lib/interfaces/services/rentals";

export const roatanHotels: Hotel[] = [
  {
    id: "hotel-roatan-1",
    name: "The Harbor House",
    address: "102 Riverside Street",
    rating: 3,
    accommodationType: "Family Resort",
    amenities: ["Parking", "Free Wi-Fi", "Spa", "Pet Friendly", "Conference Room"],
    accessibilityFeatures: ["Accessible Pathways", "Accessible Parking"],
    checkInTime: "14:00",
    checkOutTime: "10:00",
    roomsAvailable: 34,
    isPetFriendly: false,
    currency: "HNL",
    contact: {
      contactEmail: "customerservice@theharborhouse.com",
      contactPhone: "+40 276-406-7750",
    },
    policies: {
      cancellation: "Free cancellation up to 48 hours before check-in. If cancelled later, the first night will be charged.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  },
  {
    id: "hotel-roatan-2",
    name: "Urban Garden Hotel",
    address: "291 King Avenue",
    rating: 3,
    accommodationType: "Eco-Lodge",
    amenities: ["24-Hour Front Desk", "Conference Room", "Parking", "Fitness Center", "Bar", "Spa"],
    checkInTime: "13:00",
    checkOutTime: "10:00",
    roomsAvailable: 54,
    isPetFriendly: false,
    currency: "HNL",
    contact: {
      contactEmail: "reception@urbangardenhotel.com",
      contactPhone: "+367 874-419-5140",
    },
    policies: {
      cancellation: "No refunds for cancellations.",
      smoking: "Not Allowed",
    },
    isPopular: false,
  },
  {
    id: "hotel-roatan-3",
    name: "Sunset Villa",
    address: "131 King Rd",
    rating: 4,
    accommodationType: "Serviced Apartment",
    amenities: ["Restaurant", "Room Service", "Parking", "Conference Room", "Airport Shuttle"],
    checkInTime: "14:00",
    checkOutTime: "10:00",
    roomsAvailable: 36,
    isPetFriendly: true,
    currency: "HNL",
    contact: {
      contactEmail: "welcome@sunsetvilla.com",
      contactPhone: "+7 757-245-7530",
    },
    policies: {
      cancellation: "No cancellation fee if rebooking within 30 days; otherwise, fees apply.",
      smoking: "Not Allowed",
    },
    isPopular: false,
  }
];
