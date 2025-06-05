import { Homestay } from "@/lib/interfaces/people/homestay";

export const nassauHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Mei Williams",
        background: "Long-time resident and community organizer",
        maxGuests: 1,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "21:00 PM",
        isPopular: false,
        guestPolicy: [
          "No children under 12",
          "Suitable for digital nomads",
          "LGBTQ+ friendly",
        ],
        hostingStyle: "laid-back",
        houseRules: [
          "Quiet hours after 10 PM",
          "Lock the door when leaving the house",
          "Recycle according to local guidelines",
          "Pets welcome",
        ],
        location: {
          city: "nassau",
          country: "undefined",
          coordinates: { lat: 39.97282195994949, lng: -0.02037536764855634 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "mei.williams@example.com",
        phoneNumber: "+3-881-4081",
        isVerified: true,
        rating: 3.8,
        reviewCount: 61,
        quote:
          "Staying with me means experiencing nassau like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "language-immersion",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Henry Ali",
        background:
          "Environmental activist working on local sustainability projects",
        maxGuests: 3,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "13:00 AM",
        isPopular: false,
        guestPolicy: [
          "Family-friendly environment",
          "Smoking allowed in designated areas only",
          "Pet-friendly accommodation",
        ],
        hostingStyle: "social",
        houseRules: [
          "Remove shoes when entering the home",
          "No outside guests without permission",
          "Pets welcome",
          "Please conserve water and electricity",
          "Wi-Fi password will be provided upon arrival",
          "Quiet hours after 10 PM",
        ],
        location: {
          city: "nassau",
          country: "undefined",
          coordinates: { lat: 40.071129070104426, lng: -0.09789963327995466 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "henry.ali@example.com",
        phoneNumber: "+80-145-7202",
        isVerified: true,
        rating: 4.3,
        reviewCount: 63,
        quote:
          "Welcome to my nassau home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "self-catering",
      },
      {
        name: "Oliver Thomas",
        background: "Yoga instructor offering morning sessions",
        maxGuests: 3,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "15:00 AM",
        isPopular: false,
        guestPolicy: [
          "Smoking allowed in designated areas only",
          "Pet-friendly accommodation",
          "No parties or events",
          "Family-friendly environment",
        ],
        hostingStyle: "social",
        houseRules: [
          "Remove shoes when entering the home",
          "Laundry available on weekends only",
          "No outside guests without permission",
          "Lock the door when leaving the house",
          "Please conserve water and electricity",
        ],
        location: {
          city: "nassau",
          country: "undefined",
          coordinates: { lat: 39.98152650067473, lng: -0.08368284548724736 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "oliver.thomas@example.com",
        isVerified: true,
        rating: 4.8,
        reviewCount: 89,
        quote:
          "My home is your home in nassau. I look forward to making your stay memorable and authentic.",
        stayType: "pet-friendly-stay",
      },
    ],
  },
];
