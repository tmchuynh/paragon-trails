import { Homestay } from "@/lib/interfaces/people/homestay";

export const baliHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Victor Nash",
        background: "Entrepreneur running a local business",
        maxGuests: 6,
        languages: ["Indonesian", "Japanese", "Tagalog", "English"],
        curfew: "15:00 AM",
        isPopular: false,
        guestPolicy: ["No parties or events", "Children welcome"],
        hostingStyle: "social",
        houseRules: ["Lock the door when leaving the house", "Recycle according to local guidelines", "No food in the bedrooms"],
        location: {
          city: "Bali",
          region: "Asia Pacific",
          country: "Indonesia",
          coordinates: { lat: 39.92434259476672, lng: 0.09470914047796081 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "12:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "victor.nash@example.com",
        phoneNumber: "+46-732-9916",
        isVerified: true,
        rating: 4.3,
        reviewCount: 41,
        quote: "Life in bali has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Heritage Stay",
      },
      {
        name: "Russell Russell",
        background: "Long-time resident and community organizer",
        maxGuests: 2,
        languages: ["Hindi", "Urdu", "Thai", "English"],
        curfew: "22:00 PM",
        isPopular: false,
        guestPolicy: ["No parties or events", "LGBTQ+ friendly", "Accessible for guests with mobility issues"],
        hostingStyle: "private",
        houseRules: ["Please clean up after yourself in common areas", "No smoking indoors", "No outside guests without permission"],
        location: {
          city: "Bali",
          region: "Asia Pacific",
          country: "Indonesia",
          coordinates: { lat: 39.94091184053218, lng: -0.020029596788983944 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "russell.russell@example.com",
        isVerified: true,
        rating: 4.3,
        reviewCount: 88,
        quote: "My home is your home in bali. I look forward to making your stay memorable and authentic.",
        stayType: "Art Or Craft Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Johnny Moore",
        background: "Language teacher who enjoys helping visitors learn the local tongue",
        maxGuests: 3,
        languages: ["Japanese", "Thai", "Indonesian", "Tagalog", "English"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: ["No parties or events", "Family-friendly environment", "Perfect for long-term stays", "Great for couples"],
        hostingStyle: "private",
        houseRules: ["No smoking indoors", "Remove shoes when entering the home", "Notify host if you'll be arriving after 10 PM", "Laundry available on weekends only"],
        location: {
          city: "Bali",
          region: "Asia Pacific",
          country: "Indonesia",
          coordinates: { lat: 40.02883094898242, lng: -0.03955435941673056 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "johnny.moore@example.com",
        phoneNumber: "+68-248-4246",
        isVerified: true,
        rating: 3.8,
        reviewCount: 49,
        quote: "Staying with me means experiencing bali like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Culinary Homestay",
      },
      {
        name: "Aaron Dean",
        background: "Entrepreneur running a local business",
        maxGuests: 5,
        languages: ["Vietnamese", "Bengali", "Indonesian", "English"],
        curfew: "22:00 PM",
        isPopular: false,
        guestPolicy: ["No parties or events", "Family-friendly environment"],
        hostingStyle: "social",
        houseRules: ["Wi-Fi password will be provided upon arrival", "Remove shoes when entering the home", "Lock the door when leaving the house", "Recycle according to local guidelines", "No pets allowed"],
        location: {
          city: "Bali",
          region: "Asia Pacific",
          country: "Indonesia",
          coordinates: { lat: 40.01869835515524, lng: -0.09650564458889188 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "aaron.dean@example.com",
        phoneNumber: "+30-1085-1541",
        isVerified: true,
        rating: 4,
        reviewCount: 16,
        quote: "My home is your home in bali. I look forward to making your stay memorable and authentic.",
        stayType: "Language Immersion",
      }
    ]
  }
];
