import { Hotel } from "@/lib/interfaces/services/rentals";

export const stPetersburgHotels: Hotel[] = [
  {
    id: "hotel-st-petersburg-1",
    name: "Sunset Villa",
    address: "289 Queen Avenue",
    rating: 3,
    accommodationType: "Boutique Hotel",
    amenities: ["Room Service", "Fitness Center", "Business Center", "Free Wi-Fi", "Conference Room", "Bar"],
    accessibilityFeatures: ["Accessible Bathroom", "Assistive Listening Devices", "Accessible Parking"],
    checkInTime: "16:00",
    checkOutTime: "12:00",
    roomsAvailable: 48,
    isPetFriendly: true,
    currency: "RUB",
    contact: {
      contactEmail: "feedback@sunsetvilla.com",
      contactPhone: "+144 629-446-5172",
    },
    policies: {
      cancellation: "Full refund if cancelled within 48 hours of booking, minus service fees.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  },
  {
    id: "hotel-st-petersburg-2",
    name: "The Ambassador",
    address: "229 Park St",
    rating: 3,
    accommodationType: "Hostel",
    amenities: ["Free Wi-Fi", "24-Hour Front Desk", "Parking", "Conference Room", "Room Service", "Bar", "Laundry Service", "Airport Shuttle", "Spa", "Fitness Center"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    roomsAvailable: 12,
    isPetFriendly: true,
    currency: "RUB",
    contact: {
      contactEmail: "admin@theambassador.com",
      contactPhone: "+664 701-551-4744",
    },
    policies: {
      cancellation: "Full refund if cancelled within 48 hours of booking, minus service fees.",
      smoking: "Not Allowed",
    },
    isPopular: false,
  },
  {
    id: "hotel-st-petersburg-3",
    name: "Grand Central Hotel",
    address: "44 Riverside Ave",
    rating: 4,
    accommodationType: "Vacation Rental",
    amenities: ["Room Service", "Parking", "Laundry Service", "Business Center", "Spa", "Free Wi-Fi"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    checkInTime: "16:00",
    checkOutTime: "12:00",
    roomsAvailable: 52,
    isPetFriendly: false,
    currency: "RUB",
    contact: {
      contactEmail: "communications@grandcentralhotel.com",
      contactPhone: "+433 239-113-1999",
    },
    policies: {
      cancellation: "Free cancellation up to 72 hours before check-in. If cancelled later, the first night will be charged.",
      smoking: "Allowed",
    },
    isPopular: true,
  }
];
