import { Hotel } from "@/lib/interfaces/services/rentals";

export const amsterdamHotels: Hotel[] = [
  {
    id: "hotel-amsterdam-1",
    name: "Skyline Suites",
    address: "249 Liberty Ave",
    rating: 3,
    accommodationType: "Vacation Rental",
    amenities: ["Airport Shuttle", "Free Wi-Fi", "Non-Smoking Rooms", "Swimming Pool", "Pet Friendly", "Conference Room", "24-Hour Front Desk", "Room Service", "Laundry Service"],
    accessibilityFeatures: ["Hearing Support", "Visual Aids", "Accessible Shower"],
    checkInTime: "15:00",
    checkOutTime: "10:00",
    roomsAvailable: 19,
    isPetFriendly: true,
    currency: "EUR",
    contact: {
      contactEmail: "admin@skylinesuites.com",
      contactPhone: "+100 917-147-2791",
    },
    policies: {
      cancellation: "50% refund for cancellations made at least 7 days before check-in.",
      smoking: "Designated Areas",
    },
    isPopular: true,
  },
  {
    id: "hotel-amsterdam-2",
    name: "Oceanview Inn",
    address: "150 Liberty Drive",
    rating: 3,
    accommodationType: "Motel",
    amenities: ["Non-Smoking Rooms", "24-Hour Front Desk", "Laundry Service", "Bar", "Conference Room", "Restaurant", "Swimming Pool", "Fitness Center", "Room Service"],
    accessibilityFeatures: ["Wheelchair Accessible", "Braille Signage"],
    checkInTime: "15:00",
    checkOutTime: "11:00",
    roomsAvailable: 16,
    isPetFriendly: false,
    currency: "EUR",
    contact: {
      contactEmail: "hi@oceanviewinn.com",
      contactPhone: "+459 563-984-6402",
    },
    policies: {
      cancellation: "Free cancellation within 24 hours of booking; after that, 25% fee applies.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  },
  {
    id: "hotel-amsterdam-3",
    name: "Oceanview Inn",
    address: "86 East King Road",
    rating: 4,
    accommodationType: "Eco-Lodge",
    amenities: ["Airport Shuttle", "Spa", "Fitness Center", "Non-Smoking Rooms", "Bar"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    roomsAvailable: 38,
    isPetFriendly: false,
    currency: "EUR",
    contact: {
      contactEmail: "contact@oceanviewinn.com",
      contactPhone: "+643 506-109-3354",
    },
    policies: {
      cancellation: "Full refund if cancelled within 48 hours of booking, minus service fees.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  }
];
