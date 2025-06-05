import { Hotel } from "@/lib/interfaces/services/rentals";

export const southamptonHotels: Hotel[] = [
  {
    id: "hotel-southampton-1",
    name: "Windsor House",
    address: "258 Upper Oxford Road",
    rating: 4,
    accommodationType: "Luxury Villa",
    amenities: ["Swimming Pool", "Free Wi-Fi", "Room Service", "Laundry Service", "Restaurant", "Non-Smoking Rooms"],
    accessibilityFeatures: ["Lowered Light Switches"],
    checkInTime: "16:00",
    checkOutTime: "11:00",
    roomsAvailable: 30,
    isPetFriendly: false,
    currency: "GBP",
    contact: {
      contactEmail: "support@windsorhouse.com",
      contactPhone: "+536 109-384-8366",
    },
    policies: {
      cancellation: "Free cancellation within 24 hours of booking; after that, 25% fee applies.",
      smoking: "Allowed",
    },
    isPopular: false,
  },
  {
    id: "hotel-southampton-2",
    name: "Windsor House",
    address: "150 Lower Station Court",
    rating: 3,
    accommodationType: "Chalet",
    amenities: ["Pet Friendly", "Conference Room", "Fitness Center", "Non-Smoking Rooms", "Room Service"],
    accessibilityFeatures: ["Accessible Shower", "Sign Language Interpretation"],
    checkInTime: "13:00",
    checkOutTime: "10:00",
    roomsAvailable: 32,
    isPetFriendly: false,
    currency: "GBP",
    contact: {
      contactEmail: "inquiries@windsorhouse.com",
      contactPhone: "+231 614-575-6874",
    },
    policies: {
      cancellation: "Free cancellation up to 72 hours before check-in. If cancelled later, the first night will be charged.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  },
  {
    id: "hotel-southampton-3",
    name: "The White Rose",
    address: "145 Upper Oxford Drive",
    rating: 3,
    accommodationType: "Hotel",
    amenities: ["Airport Shuttle", "Bar", "Restaurant", "Conference Room", "Fitness Center"],
    checkInTime: "15:00",
    checkOutTime: "10:00",
    roomsAvailable: 56,
    isPetFriendly: true,
    currency: "GBP",
    contact: {
      contactEmail: "care@thewhiterose.com",
      contactPhone: "+847 358-625-6210",
    },
    policies: {
      cancellation: "Free cancellation up to 72 hours before check-in. If cancelled later, the first night will be charged.",
      smoking: "Designated Areas",
    },
    isPopular: true,
  }
];
