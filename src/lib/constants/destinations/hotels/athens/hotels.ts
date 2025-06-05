import { Hotel } from "@/lib/interfaces/services/rentals";

export const athensHotels: Hotel[] = [
  {
    id: "hotel-athens-1",
    name: "The Ambassador",
    address: "234 North Broadway Street",
    rating: 4,
    accommodationType: "Luxury Villa",
    amenities: [
      "Pet Friendly",
      "Free Wi-Fi",
      "Airport Shuttle",
      "Spa",
      "Laundry Service",
    ],
    checkInTime: "14:00",
    checkOutTime: "11:00",
    roomsAvailable: 27,
    isPetFriendly: false,
    currency: "EUR",
    contact: {
      contactEmail: "ask@theambassador.com",
      contactPhone: "+816 542-553-9245",
    },
    policies: {
      cancellation:
        "Free cancellation up to 48 hours before check-in. If cancelled later, the first night will be charged.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  },
  {
    id: "hotel-athens-2",
    name: "Urban Garden Hotel",
    address: "85 Central St",
    rating: 3,
    accommodationType: "Hostel",
    amenities: [
      "Business Center",
      "Free Wi-Fi",
      "Non-Smoking Rooms",
      "Restaurant",
      "Laundry Service",
      "Swimming Pool",
      "24-Hour Front Desk",
      "Conference Room",
      "Airport Shuttle",
    ],
    checkInTime: "15:00",
    checkOutTime: "11:00",
    roomsAvailable: 57,
    isPetFriendly: false,
    currency: "EUR",
    contact: {
      contactEmail: "office@urbangardenhotel.com",
      contactPhone: "+648 408-305-5083",
    },
    policies: {
      cancellation:
        "Full refund if cancelled within 48 hours of booking, minus service fees.",
      smoking: "Allowed",
    },
    isPopular: false,
  },
  {
    id: "hotel-athens-3",
    name: "City Lights Inn",
    address: "54 Main St",
    rating: 4,
    accommodationType: "All-Inclusive Resort",
    amenities: [
      "Spa",
      "Business Center",
      "Laundry Service",
      "Airport Shuttle",
      "Fitness Center",
      "Non-Smoking Rooms",
      "Pet Friendly",
      "Conference Room",
      "24-Hour Front Desk",
    ],
    accessibilityFeatures: [
      "Sign Language Interpretation",
      "Wheelchair Accessible",
    ],
    checkInTime: "16:00",
    checkOutTime: "10:00",
    roomsAvailable: 12,
    isPetFriendly: true,
    currency: "EUR",
    contact: {
      contactEmail: "hi@citylightsinn.com",
      contactPhone: "+533 492-763-5355",
    },
    policies: {
      cancellation:
        "Free cancellation up to 72 hours before check-in. If cancelled later, the first night will be charged.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  },
];
