import { Homestay } from "@/lib/interfaces/people/homestay";

export const mykonosHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Ava Anderson",
        background: "Yoga instructor offering morning sessions",
        maxGuests: 5,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "13:00 AM",
        isPopular: true,
        guestPolicy: [
          "Smoking allowed in designated areas only",
          "Suitable for business travelers",
          "Senior-friendly accommodations",
          "No children under 12",
        ],
        hostingStyle: "family-oriented",
        houseRules: [
          "Kitchen closed after 8 PM",
          "Please clean up after yourself in common areas",
          "Laundry available on weekends only",
          "Recycle according to local guidelines",
          "No food in the bedrooms",
          "Breakfast is self-serve between 7-9 AM",
        ],
        location: {
          city: "mykonos",
          country: "undefined",
          coordinates: { lat: 39.99424430576817, lng: 0.09675846914213096 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "ava.anderson@example.com",
        phoneNumber: "+53-546-10499",
        isVerified: true,
        rating: 4.8,
        reviewCount: 6,
        quote:
          "Staying with me means experiencing mykonos like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "culinary-homestay",
      },
      {
        name: "Ravi Dubois",
        background:
          "Language teacher who enjoys helping visitors learn the local tongue",
        maxGuests: 4,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "22:00 PM",
        isPopular: false,
        guestPolicy: [
          "Senior-friendly accommodations",
          "Smoking allowed in designated areas only",
          "Not suitable for infants (under 2 years)",
          "Suitable for digital nomads",
        ],
        hostingStyle: "hands-on",
        houseRules: [
          "Recycle according to local guidelines",
          "Kitchen closed after 8 PM",
          "Please clean up after yourself in common areas",
          "Remove shoes when entering the home",
          "Please conserve water and electricity",
        ],
        location: {
          city: "mykonos",
          country: "undefined",
          coordinates: { lat: 39.981420921277184, lng: -0.07115376295349307 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "ravi.dubois@example.com",
        phoneNumber: "+29-599-9946",
        isVerified: true,
        rating: 4.6,
        reviewCount: 101,
        quote:
          "Staying with me means experiencing mykonos like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "eco-stay",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Ahmed Miller",
        background: "Local historian researching regional traditions",
        maxGuests: 2,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "22:00 PM",
        isPopular: false,
        guestPolicy: ["Perfect for long-term stays", "No parties or events"],
        hostingStyle: "private",
        houseRules: [
          "Lock the door when leaving the house",
          "Respect shared spaces",
          "Quiet hours after 10 PM",
        ],
        location: {
          city: "mykonos",
          country: "undefined",
          coordinates: { lat: 39.917092271031535, lng: -0.005647513328140438 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "12:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "ahmed.miller@example.com",
        isVerified: true,
        rating: 4.9,
        reviewCount: 36,
        quote:
          "Welcome to my mykonos home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "language-immersion",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Noah Brown",
        background:
          "Environmental activist working on local sustainability projects",
        maxGuests: 5,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: [
          "Suitable for business travelers",
          "Children welcome",
          "No parties or events",
          "Family-friendly environment",
        ],
        hostingStyle: "social",
        houseRules: [
          "Kitchen closed after 8 PM",
          "Respect shared spaces",
          "Quiet hours after 10 PM",
          "No food in the bedrooms",
        ],
        location: {
          city: "mykonos",
          country: "undefined",
          coordinates: { lat: 39.98833360618817, lng: -0.06978095172612951 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "noah.brown@example.com",
        phoneNumber: "+66-566-7649",
        isVerified: true,
        rating: 4.9,
        reviewCount: 31,
        quote:
          "Staying with me means experiencing mykonos like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "spiritual-or-wellness-retreat",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Juan Anderson",
        background:
          "Environmental activist working on local sustainability projects",
        maxGuests: 4,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "13:00 AM",
        isPopular: false,
        guestPolicy: [
          "Not suitable for infants (under 2 years)",
          "Family-friendly environment",
          "Suitable for business travelers",
        ],
        hostingStyle: "social",
        houseRules: [
          "Please conserve water and electricity",
          "Breakfast is self-serve between 7-9 AM",
          "Lock the door when leaving the house",
          "No outside guests without permission",
          "Quiet hours after 10 PM",
        ],
        location: {
          city: "mykonos",
          country: "undefined",
          coordinates: { lat: 40.069485559057384, lng: -0.047318945806740675 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "juan.anderson@example.com",
        phoneNumber: "+60-214-8332",
        isVerified: true,
        rating: 4,
        reviewCount: 16,
        quote:
          "My home is your home in mykonos. I look forward to making your stay memorable and authentic.",
        stayType: "self-catering",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Ahmed Morales",
        background:
          "Retired schoolteacher passionate about sharing local traditions",
        maxGuests: 5,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "15:00 AM",
        isPopular: true,
        guestPolicy: ["Suitable for digital nomads", "Great for couples"],
        hostingStyle: "laid-back",
        houseRules: [
          "Please clean up after yourself in common areas",
          "No smoking indoors",
          "No outside guests without permission",
          "Laundry available on weekends only",
          "Wi-Fi password will be provided upon arrival",
          "Please conserve water and electricity",
        ],
        location: {
          city: "mykonos",
          country: "undefined",
          coordinates: { lat: 39.917066953025554, lng: -0.022023612040953197 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "ahmed.morales@example.com",
        phoneNumber: "+6-684-7916",
        isVerified: true,
        rating: 4.9,
        reviewCount: 59,
        quote:
          "My home is your home in mykonos. I look forward to making your stay memorable and authentic.",
        stayType: "academic-homestay",
      },
      {
        name: "Diego Jackson",
        background: "University professor with expertise in local culture",
        maxGuests: 4,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "15:00 AM",
        isPopular: true,
        guestPolicy: [
          "Accessible for guests with mobility issues",
          "Suitable for digital nomads",
          "Children welcome",
        ],
        hostingStyle: "family-oriented",
        houseRules: [
          "Please clean up after yourself in common areas",
          "Wi-Fi password will be provided upon arrival",
          "Laundry available on weekends only",
        ],
        location: {
          city: "mykonos",
          country: "undefined",
          coordinates: { lat: 39.9306886314407, lng: 0.05396886283099697 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "12:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "diego.jackson@example.com",
        isVerified: true,
        rating: 4.1,
        reviewCount: 13,
        quote:
          "I've lived in mykonos all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "self-catering",
      },
    ],
  },
];
