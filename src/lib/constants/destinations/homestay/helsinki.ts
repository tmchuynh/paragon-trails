import { Homestay } from "@/lib/interfaces/people/homestay";

export const helsinkiHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Sophia Martinez",
        background: "Local historian researching regional traditions",
        maxGuests: 3,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "21:00 PM",
        isPopular: true,
        guestPolicy: [
          "Suitable for digital nomads",
          "Not suitable for infants (under 2 years)",
          "Perfect for long-term stays",
          "Great for couples",
        ],
        hostingStyle: "social",
        houseRules: [
          "Respect shared spaces",
          "Laundry available on weekends only",
          "No pets allowed",
          "Lock the door when leaving the house",
          "Recycle according to local guidelines",
          "Remove shoes when entering the home",
        ],
        location: {
          city: "helsinki",
          country: "undefined",
          coordinates: { lat: 39.95654367971411, lng: 0.03605855260930255 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "sophia.martinez@example.com",
        phoneNumber: "+22-758-6448",
        isVerified: true,
        rating: 4.7,
        reviewCount: 81,
        quote:
          "Staying with me means experiencing helsinki like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "traditional-homestay",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Elena Ali",
        background:
          "Environmental activist working on local sustainability projects",
        maxGuests: 5,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "21:00 PM",
        isPopular: false,
        guestPolicy: [
          "Perfect for long-term stays",
          "LGBTQ+ friendly",
          "Suitable for business travelers",
          "No parties or events",
        ],
        hostingStyle: "hands-on",
        houseRules: [
          "Notify host if you'll be arriving after 10 PM",
          "No smoking indoors",
          "Laundry available on weekends only",
        ],
        location: {
          city: "helsinki",
          country: "undefined",
          coordinates: { lat: 39.96513441037042, lng: -0.048451251626824114 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "elena.ali@example.com",
        phoneNumber: "+38-989-7461",
        isVerified: true,
        rating: 4.1,
        reviewCount: 18,
        quote:
          "My home is your home in helsinki. I look forward to making your stay memorable and authentic.",
        stayType: "eco-stay",
      },
      {
        name: "Henry Taylor",
        background: "Organic farmer with a small plot on the outskirts of town",
        maxGuests: 6,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "15:00 AM",
        isPopular: false,
        guestPolicy: [
          "Ideal for solo travelers",
          "Family-friendly environment",
        ],
        hostingStyle: "private",
        houseRules: [
          "Please clean up after yourself in common areas",
          "No smoking indoors",
          "Notify host if you'll be arriving after 10 PM",
          "No outside guests without permission",
          "Quiet hours after 10 PM",
        ],
        location: {
          city: "helsinki",
          country: "undefined",
          coordinates: { lat: 40.09622977478525, lng: -0.07408726438538565 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "henry.taylor@example.com",
        phoneNumber: "+16-280-3478",
        isVerified: true,
        rating: 3.7,
        reviewCount: 49,
        quote:
          "I've lived in helsinki all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "art-or-craft-stay",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Emma Suzuki",
        background: "Local musician involved in the cultural scene",
        maxGuests: 2,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "22:00 PM",
        isPopular: false,
        guestPolicy: [
          "Not suitable for infants (under 2 years)",
          "No children under 12",
        ],
        hostingStyle: "laid-back",
        houseRules: [
          "Breakfast is self-serve between 7-9 AM",
          "Recycle according to local guidelines",
          "No smoking indoors",
          "Respect shared spaces",
        ],
        location: {
          city: "helsinki",
          country: "undefined",
          coordinates: { lat: 39.93843233258838, lng: -0.09811578697678361 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "emma.suzuki@example.com",
        phoneNumber: "+25-582-1093",
        isVerified: true,
        rating: 4.6,
        reviewCount: 36,
        quote:
          "My home is your home in helsinki. I look forward to making your stay memorable and authentic.",
        stayType: "guest-suite",
      },
      {
        name: "Ava Taylor",
        background:
          "Digital nomad who settled in the city after falling in love with it",
        maxGuests: 6,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "22:00 PM",
        isPopular: false,
        guestPolicy: [
          "Smoking allowed in designated areas only",
          "Suitable for business travelers",
          "Senior-friendly accommodations",
          "Ideal for solo travelers",
        ],
        hostingStyle: "hands-on",
        houseRules: [
          "No smoking indoors",
          "No loud music after 9 PM",
          "Wi-Fi password will be provided upon arrival",
          "Laundry available on weekends only",
        ],
        location: {
          city: "helsinki",
          country: "undefined",
          coordinates: { lat: 40.064165626115496, lng: -0.020241267569225535 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "ava.taylor@example.com",
        phoneNumber: "+27-116-5317",
        isVerified: true,
        rating: 4,
        reviewCount: 53,
        quote:
          "Welcome to my helsinki home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "traditional-homestay",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Noah Anderson",
        background: "Expat who has lived in the city for over a decade",
        maxGuests: 2,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "21:00 PM",
        isPopular: false,
        guestPolicy: [
          "Senior-friendly accommodations",
          "Ideal for solo travelers",
          "Great for couples",
        ],
        hostingStyle: "hands-on",
        houseRules: [
          "No outside guests without permission",
          "Remove shoes when entering the home",
          "No pets allowed",
        ],
        location: {
          city: "helsinki",
          country: "undefined",
          coordinates: { lat: 40.02440284222154, lng: 0.08586653399148189 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "noah.anderson@example.com",
        phoneNumber: "+5-882-10699",
        isVerified: true,
        rating: 4.6,
        reviewCount: 102,
        quote:
          "Life in helsinki has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "bed-and-breakfast",
      },
    ],
  },
];
