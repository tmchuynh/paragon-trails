// Auto-generated file for nassau hotels
import { Hotel } from "@/lib/interfaces/services/rentals";

export const nassauHotels: Hotel[] = [
  {
    id: "hotel-nassau-1",
    name: "Coconut Grove Inn",
    address: "204 New East Street",
    rating: 3,
    accommodationType: "Family Resort",
    amenities: ["Room Service", "Swimming Pool", "Airport Shuttle", "Business Center", "Conference Room", "Parking"],
    checkInTime: "13:00",
    checkOutTime: "10:00",
    roomsAvailable: 35,
    isPetFriendly: false,
    currency: "BSD",
    contact: {
      contactEmail: "services@coconutgroveinn.com",
      contactPhone: "+127 765-709-7906",
    },
    policies: {
      cancellation: "Free cancellation within 24 hours of booking; after that, 25% fee applies.",
      smoking: "Not Allowed",
    },
    isPopular: true,
  },
  {
    id: "hotel-nassau-2",
    name: "The Exuma Cays Retreat",
    address: "261 East Rosetta Drive",
    rating: 4,
    accommodationType: "Extended Stay Hotel",
    amenities: ["Airport Shuttle", "Room Service", "Free Wi-Fi", "Laundry Service", "Non-Smoking Rooms"],
    accessibilityFeatures: ["Accessible Bathroom", "Accessible Parking"],
    checkInTime: "13:00",
    checkOutTime: "12:00",
    roomsAvailable: 28,
    isPetFriendly: true,
    currency: "BSD",
    contact: {
      contactEmail: "inquiries@theexumacaysretreat.com",
      contactPhone: "+265 101-884-5160",
    },
    policies: {
      cancellation: "No cancellation fee if rebooking within 30 days; otherwise, fees apply.",
      smoking: "Designated Areas",
    },
    isPopular: true,
  },
  {
    id: "hotel-nassau-3",
    name: "The Cat Island Heritage Hotel",
    address: "212 Frederick Avenue",
    rating: 3,
    accommodationType: "Glamping Resort",
    amenities: ["Swimming Pool", "Room Service", "Free Wi-Fi", "Non-Smoking Rooms", "24-Hour Front Desk", "Fitness Center", "Airport Shuttle", "Business Center", "Parking"],
    checkInTime: "14:00",
    checkOutTime: "11:00",
    roomsAvailable: 36,
    isPetFriendly: false,
    currency: "BSD",
    contact: {
      contactEmail: "care@thecatislandheritagehotel.com",
      contactPhone: "+731 573-698-8104",
    },
    policies: {
      cancellation: "Free cancellation within 24 hours of booking; after that, 25% fee applies.",
      smoking: "Allowed",
    },
    isPopular: false,
  }
];
