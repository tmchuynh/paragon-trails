// Auto-generated file for copenhagen hotels
import { Hotel } from "@/lib/interfaces/services/rentals";

export const copenhagenHotels: Hotel[] = [
  {
    id: "hotel-copenhagen-1",
    name: "Esbjerg Maritime Suites",
    address: "253 Vesterbrogade Plads",
    rating: 3,
    accommodationType: "Guesthouse",
    amenities: ["Spa", "24-Hour Front Desk", "Room Service", "Free Wi-Fi", "Business Center", "Laundry Service"],
    accessibilityFeatures: ["Accessible Shower", "Assistive Listening Devices"],
    checkInTime: "13:00",
    checkOutTime: "10:00",
    roomsAvailable: 37,
    isPetFriendly: true,
    currency: "DKK",
    contact: {
      contactEmail: "hi@esbjergmaritimesuites.com",
      contactPhone: "+415 718-801-3243",
    },
    policies: {
      cancellation: "No refunds for cancellations.",
      smoking: "Not Allowed",
    },
    isPopular: false,
  },
  {
    id: "hotel-copenhagen-2",
    name: "Fredericia Fortress View",
    address: "44 Upper Frederiksberg Vej",
    rating: 3,
    accommodationType: "Boutique Hotel",
    amenities: ["Parking", "Room Service", "Bar", "Airport Shuttle", "Spa", "24-Hour Front Desk"],
    accessibilityFeatures: ["Braille Signage", "Accessible Bathroom", "Visual Alarm"],
    checkInTime: "16:00",
    checkOutTime: "11:00",
    roomsAvailable: 59,
    isPetFriendly: true,
    currency: "DKK",
    contact: {
      contactEmail: "hello@fredericiafortressview.com",
      contactPhone: "+541 681-778-5617",
    },
    policies: {
      cancellation: "No cancellation fee if rebooking within 30 days; otherwise, fees apply.",
      smoking: "Not Allowed",
    },
    isPopular: true,
  },
  {
    id: "hotel-copenhagen-3",
    name: "Skagen Seaside Inn",
    address: "12 Gothersgade Vej",
    rating: 3,
    accommodationType: "Hotel",
    amenities: ["Room Service", "Bar", "Conference Room", "Laundry Service", "Free Wi-Fi", "Restaurant", "24-Hour Front Desk", "Swimming Pool"],
    accessibilityFeatures: ["Sign Language Interpretation", "Accessible Shower", "Wheelchair Accessible"],
    checkInTime: "15:00",
    checkOutTime: "11:00",
    roomsAvailable: 53,
    isPetFriendly: false,
    currency: "DKK",
    contact: {
      contactEmail: "feedback@skagenseasideinn.com",
      contactPhone: "+658 810-187-8437",
    },
    policies: {
      cancellation: "Free cancellation up to 48 hours before check-in. If cancelled later, the first night will be charged.",
      smoking: "Not Allowed",
    },
    isPopular: false,
  }
];
