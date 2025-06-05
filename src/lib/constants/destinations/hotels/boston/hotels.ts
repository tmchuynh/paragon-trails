import { Hotel } from "@/lib/interfaces/services/rentals";

export const bostonHotels: Hotel[] = [
  {
    id: "hotel-boston-1",
    name: "Sunset Lodge",
    address: "65 S Sunset Dr",
    rating: 4,
    accommodationType: "Serviced Apartment",
    amenities: ["Laundry Service", "Room Service", "Parking", "Airport Shuttle", "Swimming Pool", "24-Hour Front Desk", "Fitness Center"],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    roomsAvailable: 12,
    isPetFriendly: true,
    currency: "USD",
    contact: {
      contactEmail: "info@sunsetlodge.com",
      contactPhone: "+45 491-397-1584",
    },
    policies: {
      cancellation: "Free cancellation up to 48 hours before check-in. If cancelled later, the first night will be charged.",
      smoking: "Designated Areas",
    },
    isPopular: true,
  },
  {
    id: "hotel-boston-2",
    name: "Oakwood Resort",
    address: "108 Washington Ct",
    rating: 3,
    accommodationType: "Guesthouse",
    amenities: ["Airport Shuttle", "Free Wi-Fi", "Fitness Center", "24-Hour Front Desk", "Pet Friendly", "Conference Room", "Restaurant", "Swimming Pool", "Parking", "Non-Smoking Rooms"],
    accessibilityFeatures: ["Accessible Pathways", "Wheelchair Accessible"],
    checkInTime: "15:00",
    checkOutTime: "10:00",
    roomsAvailable: 54,
    isPetFriendly: false,
    currency: "USD",
    contact: {
      contactEmail: "services@oakwoodresort.com",
      contactPhone: "+400 633-991-1464",
    },
    policies: {
      cancellation: "No cancellation fee if rebooking within 30 days; otherwise, fees apply.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  },
  {
    id: "hotel-boston-3",
    name: "Liberty Suites",
    address: "156 Sunset Pkwy",
    rating: 4,
    accommodationType: "Boutique Resort",
    amenities: ["Conference Room", "Laundry Service", "Free Wi-Fi", "Swimming Pool", "Pet Friendly", "Restaurant", "Bar", "Fitness Center", "Spa"],
    accessibilityFeatures: ["Wheelchair Accessible", "Lowered Light Switches", "Accessible Parking"],
    checkInTime: "15:00",
    checkOutTime: "10:00",
    roomsAvailable: 13,
    isPetFriendly: false,
    currency: "USD",
    contact: {
      contactEmail: "inquiries@libertysuites.com",
      contactPhone: "+388 207-482-2685",
    },
    policies: {
      cancellation: "Free cancellation up to 14 days before check-in; 50% refund for cancellations made within 14 days.",
      smoking: "Not Allowed",
    },
    isPopular: false,
  }
];
