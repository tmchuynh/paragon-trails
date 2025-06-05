import { Hotel } from "@/lib/interfaces/services/rentals";

export const copenhagenHotels: Hotel[] = [
  {
    id: "hotel-copenhagen-1",
    name: "The Ambassador",
    address: "20 West Broadway Ave",
    rating: 4,
    accommodationType: "Guesthouse",
    amenities: ["Parking", "Conference Room", "Bar", "Spa", "Restaurant"],
    accessibilityFeatures: [
      "Assistive Listening Devices",
      "Lowered Light Switches",
    ],
    checkInTime: "15:00",
    checkOutTime: "12:00",
    roomsAvailable: 51,
    isPetFriendly: false,
    currency: "EUR",
    contact: {
      contactEmail: "welcome@theambassador.com",
      contactPhone: "+719 734-824-8331",
    },
    policies: {
      cancellation:
        "Free cancellation within 24 hours of booking; after that, 25% fee applies.",
      smoking: "Allowed",
    },
    isPopular: true,
  },
  {
    id: "hotel-copenhagen-2",
    name: "The Ambassador",
    address: "171 Queen Way",
    rating: 4,
    accommodationType: "Hotel",
    amenities: [
      "Spa",
      "Room Service",
      "Airport Shuttle",
      "Laundry Service",
      "Fitness Center",
    ],
    accessibilityFeatures: ["Braille Signage", "Accessible Shower"],
    checkInTime: "16:00",
    checkOutTime: "10:00",
    roomsAvailable: 45,
    isPetFriendly: true,
    currency: "EUR",
    contact: {
      contactEmail: "connect@theambassador.com",
      contactPhone: "+768 460-318-8399",
    },
    policies: {
      cancellation:
        "Free cancellation up to 14 days before check-in; 50% refund for cancellations made within 14 days.",
      smoking: "Not Allowed",
    },
    isPopular: true,
  },
  {
    id: "hotel-copenhagen-3",
    name: "The Ambassador",
    address: "269 King Ave",
    rating: 3,
    accommodationType: "Spa Hotel",
    amenities: [
      "Fitness Center",
      "24-Hour Front Desk",
      "Non-Smoking Rooms",
      "Free Wi-Fi",
      "Pet Friendly",
      "Restaurant",
      "Spa",
      "Parking",
      "Business Center",
    ],
    checkInTime: "13:00",
    checkOutTime: "12:00",
    roomsAvailable: 22,
    isPetFriendly: true,
    currency: "EUR",
    contact: {
      contactEmail: "customerservice@theambassador.com",
      contactPhone: "+336 188-889-8781",
    },
    policies: {
      cancellation:
        "Free cancellation up to 48 hours before check-in. If cancelled later, the first night will be charged.",
      smoking: "Not Allowed",
    },
    isPopular: false,
  },
];
