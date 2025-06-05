import { Hotel } from "@/lib/interfaces/services/rentals";

export const capeTownHotels: Hotel[] = [
  {
    id: "hotel-cape-town-1",
    name: "Skyline Suites",
    address: "66 Broadway Court",
    rating: 4,
    accommodationType: "Guesthouse",
    amenities: ["Laundry Service", "Bar", "Room Service", "Free Wi-Fi", "Restaurant"],
    checkInTime: "13:00",
    checkOutTime: "10:00",
    roomsAvailable: 20,
    isPetFriendly: true,
    currency: "ZAR",
    contact: {
      contactEmail: "hi@skylinesuites.com",
      contactPhone: "+795 152-106-1448",
    },
    policies: {
      cancellation: "Cancellation made less than 3 days before check-in will incur a 75% charge.",
      smoking: "Not Allowed",
    },
    isPopular: false,
  },
  {
    id: "hotel-cape-town-2",
    name: "Oceanview Inn",
    address: "260 Park Way",
    rating: 3,
    accommodationType: "All-Inclusive Resort",
    amenities: ["24-Hour Front Desk", "Spa", "Non-Smoking Rooms", "Swimming Pool", "Room Service"],
    accessibilityFeatures: ["Wheelchair Accessible", "Accessible Parking"],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    roomsAvailable: 18,
    isPetFriendly: false,
    currency: "ZAR",
    contact: {
      contactEmail: "inquiries@oceanviewinn.com",
      contactPhone: "+476 471-247-9259",
    },
    policies: {
      cancellation: "Free cancellation within 24 hours of booking; after that, 25% fee applies.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  },
  {
    id: "hotel-cape-town-3",
    name: "Sunset Villa",
    address: "250 King Place",
    rating: 4,
    accommodationType: "Chalet",
    amenities: ["Restaurant", "Parking", "Spa", "Business Center", "Bar", "Laundry Service", "24-Hour Front Desk", "Fitness Center", "Room Service"],
    accessibilityFeatures: ["Wheelchair Accessible", "Visual Alarm"],
    checkInTime: "15:00",
    checkOutTime: "11:00",
    roomsAvailable: 43,
    isPetFriendly: false,
    currency: "ZAR",
    contact: {
      contactEmail: "general@sunsetvilla.com",
      contactPhone: "+612 101-131-1258",
    },
    policies: {
      cancellation: "50% refund for cancellations made at least 7 days before check-in.",
      smoking: "Allowed",
    },
    isPopular: false,
  }
];
