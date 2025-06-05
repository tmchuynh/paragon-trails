import { Homestay } from "@/lib/interfaces/people/homestay";

export const ho-chi-minh-cityHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Henry Smith",
        background: "Entrepreneur running a local business",
        maxGuests: 6,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "21:00 PM",
        isPopular: false,
        guestPolicy: ["Smoking allowed in designated areas only", "LGBTQ+ friendly", "Family-friendly environment"],
        hostingStyle: "laid-back",
        houseRules: ["Quiet hours after 10 PM", "Pets welcome", "Remove shoes when entering the home", "Laundry available on weekends only", "Lock the door when leaving the house"],
        location: {
          city: "ho-chi-minh-city",
          country: "undefined",
          coordinates: { lat: 40.05309610769129, lng: 0.07283799039447114 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "henry.smith@example.com",
        isVerified: true,
        rating: 4,
        reviewCount: 99,
        quote: "My home is your home in ho-chi-minh-city. I look forward to making your stay memorable and authentic.",
        stayType: "guest-suite",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Boris Kowalski",
        background: "Digital nomad who settled in the city after falling in love with it",
        maxGuests: 4,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "21:00 PM",
        isPopular: false,
        guestPolicy: ["Senior-friendly accommodations", "Suitable for digital nomads", "Not suitable for infants (under 2 years)", "Great for couples"],
        hostingStyle: "family-oriented",
        houseRules: ["No smoking indoors", "No loud music after 9 PM", "Quiet hours after 10 PM", "Pets welcome", "Breakfast is self-serve between 7-9 AM", "Kitchen closed after 8 PM"],
        location: {
          city: "ho-chi-minh-city",
          country: "undefined",
          coordinates: { lat: 40.09589627636134, lng: 0.03146269461290338 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "boris.kowalski@example.com",
        phoneNumber: "+94-1064-7232",
        isVerified: true,
        rating: 4.2,
        reviewCount: 97,
        quote: "Life in ho-chi-minh-city has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "academic-homestay",
      },
      {
        name: "Mia Jones",
        background: "University professor with expertise in local culture",
        maxGuests: 2,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "21:00 PM",
        isPopular: true,
        guestPolicy: ["Great for couples", "Accessible for guests with mobility issues"],
        hostingStyle: "private",
        houseRules: ["Remove shoes when entering the home", "Breakfast is self-serve between 7-9 AM", "No pets allowed"],
        location: {
          city: "ho-chi-minh-city",
          country: "undefined",
          coordinates: { lat: 39.948179206608145, lng: 0.08935018009682244 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "mia.jones@example.com",
        phoneNumber: "+53-436-8459",
        isVerified: true,
        rating: 4.7,
        reviewCount: 45,
        quote: "Welcome to my ho-chi-minh-city home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "farm-stay",
      },
      {
        name: "Boris Davis",
        background: "Environmental activist working on local sustainability projects",
        maxGuests: 3,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "14:00 AM",
        isPopular: false,
        guestPolicy: ["LGBTQ+ friendly", "Ideal for solo travelers", "Family-friendly environment"],
        hostingStyle: "social",
        houseRules: ["Lock the door when leaving the house", "Quiet hours after 10 PM", "Please conserve water and electricity", "Please clean up after yourself in common areas", "No pets allowed", "No smoking indoors"],
        location: {
          city: "ho-chi-minh-city",
          country: "undefined",
          coordinates: { lat: 39.90118858413456, lng: -0.005271950624526095 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "boris.davis@example.com",
        isVerified: true,
        rating: 4.5,
        reviewCount: 54,
        quote: "Life in ho-chi-minh-city has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "bed-and-breakfast",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Boris Nguyen",
        background: "Local musician involved in the cultural scene",
        maxGuests: 4,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: ["Suitable for business travelers", "Senior-friendly accommodations", "Pet-friendly accommodation"],
        hostingStyle: "private",
        houseRules: ["Please clean up after yourself in common areas", "Respect shared spaces", "Quiet hours after 10 PM", "Lock the door when leaving the house", "No outside guests without permission", "Recycle according to local guidelines"],
        location: {
          city: "ho-chi-minh-city",
          country: "undefined",
          coordinates: { lat: 40.022124646207395, lng: -0.09993701752504491 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "boris.nguyen@example.com",
        phoneNumber: "+69-148-6413",
        isVerified: true,
        rating: 5,
        reviewCount: 65,
        quote: "My home is your home in ho-chi-minh-city. I look forward to making your stay memorable and authentic.",
        stayType: "culinary-homestay",
      },
      {
        name: "Amelia da Costa",
        background: "Expat who has lived in the city for over a decade",
        maxGuests: 5,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "15:00 AM",
        isPopular: true,
        guestPolicy: ["Suitable for digital nomads", "LGBTQ+ friendly"],
        hostingStyle: "hands-on",
        houseRules: ["Please clean up after yourself in common areas", "Remove shoes when entering the home", "No outside guests without permission", "Recycle according to local guidelines", "Please conserve water and electricity", "No loud music after 9 PM"],
        location: {
          city: "ho-chi-minh-city",
          country: "undefined",
          coordinates: { lat: 39.95177363898004, lng: 0.002181413260651549 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "amelia.da costa@example.com",
        phoneNumber: "+41-765-8243",
        isVerified: true,
        rating: 4.6,
        reviewCount: 57,
        quote: "My home is your home in ho-chi-minh-city. I look forward to making your stay memorable and authentic.",
        stayType: "pet-friendly-stay",
      }
    ]
  }
];
