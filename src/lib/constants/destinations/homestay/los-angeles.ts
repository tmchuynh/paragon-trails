import { Homestay } from "@/lib/interfaces/people/homestay";

export const losAngelesHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Terry Henderson",
        background: "Retired schoolteacher passionate about sharing local traditions",
        maxGuests: 5,
        languages: ["English", "Quechua", "Portuguese"],
        curfew: "14:00 AM",
        isPopular: false,
        guestPolicy: ["Not suitable for infants (under 2 years)", "Perfect for long-term stays", "Family-friendly environment"],
        hostingStyle: "social",
        houseRules: ["Laundry available on weekends only", "No outside guests without permission", "Please clean up after yourself in common areas"],
        location: {
          city: "Los angeles",
          region: "West Coast USA",
          country: "United States",
          coordinates: { lat: 40.047723012615926, lng: 0.016333470168050687 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "12:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "terry.henderson@example.com",
        isVerified: true,
        rating: 4.8,
        reviewCount: 56,
        quote: "Welcome to my los-angeles home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Villa Stay",
      },
      {
        name: "Amina Rossi",
        background: "Digital nomad who settled in the city after falling in love with it",
        maxGuests: 5,
        languages: ["English", "Haitian", "Aymara", "Guarani"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: ["Children welcome", "Pet-friendly accommodation", "No children under 12"],
        hostingStyle: "private",
        houseRules: ["No loud music after 9 PM", "Pets welcome", "Please conserve water and electricity", "Recycle according to local guidelines", "Remove shoes when entering the home", "No smoking indoors"],
        location: {
          city: "Los angeles",
          region: "West Coast USA",
          country: "United States",
          coordinates: { lat: 39.92382453922315, lng: -0.09812798046938345 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "amina.rossi@example.com",
        isVerified: true,
        rating: 4.4,
        reviewCount: 17,
        quote: "Welcome to my los-angeles home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Host Family Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Kenneth Mitchell",
        background: "Environmental activist working on local sustainability projects",
        maxGuests: 1,
        languages: ["English", "Portuguese", "Haitian"],
        curfew: "14:00 AM",
        isPopular: false,
        guestPolicy: ["LGBTQ+ friendly", "Pet-friendly accommodation", "Great for couples"],
        hostingStyle: "family-oriented",
        houseRules: ["No smoking indoors", "No food in the bedrooms", "Kitchen closed after 8 PM", "Lock the door when leaving the house"],
        location: {
          city: "Los angeles",
          region: "West Coast USA",
          country: "United States",
          coordinates: { lat: 40.0079428082482, lng: -0.0652893492363143 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "kenneth.mitchell@example.com",
        phoneNumber: "+32-190-9856",
        isVerified: true,
        rating: 4.8,
        reviewCount: 23,
        quote: "Welcome to my los-angeles home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Eco Stay",
      }
    ]
  }
];
