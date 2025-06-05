import { Homestay } from "@/lib/interfaces/people/homestay";

export const lisbonHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Mei Gonzalez",
        background: "Local chef specializing in traditional cuisines",
        maxGuests: 6,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "13:00 AM",
        isPopular: true,
        guestPolicy: [
          "Perfect for long-term stays",
          "Suitable for digital nomads",
          "Senior-friendly accommodations",
          "No children under 12",
        ],
        hostingStyle: "private",
        houseRules: [
          "Wi-Fi password will be provided upon arrival",
          "No smoking indoors",
          "Lock the door when leaving the house",
          "Pets welcome",
          "Please clean up after yourself in common areas",
        ],
        location: {
          city: "lisbon",
          country: "undefined",
          coordinates: { lat: 39.96804678137208, lng: 0.09479223024050781 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "mei.gonzalez@example.com",
        phoneNumber: "+91-308-6400",
        isVerified: true,
        rating: 4.1,
        reviewCount: 68,
        quote:
          "I've lived in lisbon all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "art-or-craft-stay",
      },
      {
        name: "Charlotte Jones",
        background: "Local musician involved in the cultural scene",
        maxGuests: 3,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "13:00 AM",
        isPopular: false,
        guestPolicy: ["Children welcome", "LGBTQ+ friendly"],
        hostingStyle: "family-oriented",
        houseRules: [
          "Please clean up after yourself in common areas",
          "Quiet hours after 10 PM",
          "Please conserve water and electricity",
          "No loud music after 9 PM",
        ],
        location: {
          city: "lisbon",
          country: "undefined",
          coordinates: { lat: 39.98858203434406, lng: -0.05015139235123574 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "charlotte.jones@example.com",
        phoneNumber: "+53-635-1212",
        isVerified: true,
        rating: 4.8,
        reviewCount: 90,
        quote:
          "Life in lisbon has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "host-family-stay",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Oliver Garcia",
        background: "Local chef specializing in traditional cuisines",
        maxGuests: 2,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: [
          "Suitable for business travelers",
          "Smoking allowed in designated areas only",
          "LGBTQ+ friendly",
        ],
        hostingStyle: "family-oriented",
        houseRules: [
          "Please conserve water and electricity",
          "No pets allowed",
          "Notify host if you'll be arriving after 10 PM",
          "Lock the door when leaving the house",
          "Pets welcome",
          "No food in the bedrooms",
        ],
        location: {
          city: "lisbon",
          country: "undefined",
          coordinates: { lat: 39.906183238738436, lng: 0.02999407250709299 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "oliver.garcia@example.com",
        isVerified: true,
        rating: 3.7,
        reviewCount: 97,
        quote:
          "Life in lisbon has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "urban-apartment-stay",
      },
    ],
  },
];
