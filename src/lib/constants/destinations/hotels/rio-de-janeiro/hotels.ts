// Auto-generated file for rio-de-janeiro hotels
import { Hotel } from "@/lib/interfaces/services/rentals";

export const rioDeJaneiroHotels: Hotel[] = [
  {
    id: "hotel-rio-de-janeiro-1",
    name: "Hotel Fasano São Paulo",
    address: "192 Rua 25 de Março Alameda",
    rating: 4,
    accommodationType: "Chalet",
    amenities: ["Parking", "Fitness Center", "Business Center", "Spa", "Conference Room", "Free Wi-Fi"],
    checkInTime: "16:00",
    checkOutTime: "12:00",
    roomsAvailable: 10,
    isPetFriendly: true,
    currency: "BRL",
    contact: {
      contactEmail: "info@hotelfasanosãopaulo.com",
      contactPhone: "+290 813-156-1351",
    },
    policies: {
      cancellation: "No refunds for cancellations.",
      smoking: "Allowed",
    },
    isPopular: true,
  },
  {
    id: "hotel-rio-de-janeiro-2",
    name: "The Recife Coastal Inn",
    address: "123 Avenida Ipiranga Rua",
    rating: 3,
    accommodationType: "Hostel",
    amenities: ["Spa", "Laundry Service", "Bar", "Non-Smoking Rooms", "Business Center", "Restaurant", "Parking"],
    accessibilityFeatures: ["Hearing Loop"],
    checkInTime: "16:00",
    checkOutTime: "11:00",
    roomsAvailable: 25,
    isPetFriendly: true,
    currency: "BRL",
    contact: {
      contactEmail: "hello@therecifecoastalinn.com",
      contactPhone: "+170 746-428-5303",
    },
    policies: {
      cancellation: "Free cancellation up to 7 days before arrival; no refund after that.",
      smoking: "Allowed",
    },
    isPopular: false,
  },
  {
    id: "hotel-rio-de-janeiro-3",
    name: "Rio Carnival Hotel",
    address: "255 Rua Oscar Freire Rua",
    rating: 3,
    accommodationType: "Extended Stay Hotel",
    amenities: ["Business Center", "Bar", "Free Wi-Fi", "Swimming Pool", "Fitness Center", "Laundry Service", "24-Hour Front Desk", "Restaurant"],
    checkInTime: "13:00",
    checkOutTime: "11:00",
    roomsAvailable: 36,
    isPetFriendly: false,
    currency: "BRL",
    contact: {
      contactEmail: "contact@riocarnivalhotel.com",
      contactPhone: "+343 675-436-7196",
    },
    policies: {
      cancellation: "50% refund for cancellations made at least 7 days before check-in.",
      smoking: "Allowed",
    },
    isPopular: false,
  }
];
