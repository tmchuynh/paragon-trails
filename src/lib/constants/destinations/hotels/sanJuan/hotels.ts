import { Hotel } from "@/lib/interfaces/services/rentals";

export const sanJuanHotels: Hotel[] = [
  {
    id: "hotel-san-juan-1",
    name: "Sunset Villa",
    address: "231 Urbanización Hilltop Place",
    rating: 4,
    accommodationType: "Luxury Lodge",
    amenities: ["Non-Smoking Rooms", "Airport Shuttle", "24-Hour Front Desk", "Restaurant", "Spa", "Laundry Service", "Pet Friendly", "Bar", "Room Service", "Swimming Pool"],
    accessibilityFeatures: ["Sign Language Interpretation"],
    checkInTime: "13:00",
    checkOutTime: "11:00",
    roomsAvailable: 59,
    isPetFriendly: false,
    currency: "USD",
    contact: {
      contactEmail: "care@sunsetvilla.com",
      contactPhone: "+562 891-178-6911",
    },
    policies: {
      cancellation: "Free cancellation up to 14 days before check-in; 50% refund for cancellations made within 14 days.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  },
  {
    id: "hotel-san-juan-2",
    name: "City Lights Inn",
    address: "20 Ruta Hilltop Avenue",
    rating: 4,
    accommodationType: "Hostel",
    amenities: ["Free Wi-Fi", "Room Service", "Spa", "Business Center", "Parking", "Bar"],
    checkInTime: "16:00",
    checkOutTime: "11:00",
    roomsAvailable: 40,
    isPetFriendly: false,
    currency: "USD",
    contact: {
      contactEmail: "customerservice@citylightsinn.com",
      contactPhone: "+554 818-147-4709",
    },
    policies: {
      cancellation: "Cancellation fee equivalent to one night's stay if cancelled less than 48 hours before check-in.",
      smoking: "Not Allowed",
    },
    isPopular: false,
  },
  {
    id: "hotel-san-juan-3",
    name: "Heritage View",
    address: "43 Sunset Road",
    rating: 3,
    accommodationType: "All-Inclusive Resort",
    amenities: ["Bar", "Room Service", "Free Wi-Fi", "Swimming Pool", "Pet Friendly", "24-Hour Front Desk", "Conference Room", "Non-Smoking Rooms"],
    accessibilityFeatures: ["Visual Alarm", "Hearing Support"],
    checkInTime: "13:00",
    checkOutTime: "10:00",
    roomsAvailable: 35,
    isPetFriendly: true,
    currency: "USD",
    contact: {
      contactEmail: "general@heritageview.com",
      contactPhone: "+616 992-762-3380",
    },
    policies: {
      cancellation: "Free cancellation within 24 hours of booking; after that, 25% fee applies.",
      smoking: "Designated Areas",
    },
    isPopular: false,
  }
];
