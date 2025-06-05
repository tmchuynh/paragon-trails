import { Homestay } from "@/lib/interfaces/people/homestay";

export const milanHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Juan Kowalski",
        background:
          "Former tour guide with extensive knowledge of local history",
        maxGuests: 2,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "15:00 AM",
        isPopular: false,
        guestPolicy: [
          "Not suitable for infants (under 2 years)",
          "Smoking allowed in designated areas only",
          "Pet-friendly accommodation",
        ],
        hostingStyle: "family-oriented",
        houseRules: [
          "Breakfast is self-serve between 7-9 AM",
          "Notify host if you'll be arriving after 10 PM",
          "Remove shoes when entering the home",
          "No pets allowed",
          "No outside guests without permission",
        ],
        location: {
          city: "milan",
          country: "undefined",
          coordinates: { lat: 40.08788958060257, lng: 0.057222884193771195 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "juan.kowalski@example.com",
        phoneNumber: "+5-860-2670",
        isVerified: true,
        rating: 4,
        reviewCount: 93,
        quote:
          "My home is your home in milan. I look forward to making your stay memorable and authentic.",
        stayType: "private-room-in-home",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Ahmed Ali",
        background:
          "Former tour guide with extensive knowledge of local history",
        maxGuests: 4,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "24:00 PM",
        isPopular: true,
        guestPolicy: ["Children welcome", "No children under 12"],
        hostingStyle: "hands-on",
        houseRules: [
          "Breakfast is self-serve between 7-9 AM",
          "Kitchen closed after 8 PM",
          "Please clean up after yourself in common areas",
          "No loud music after 9 PM",
          "Respect shared spaces",
          "Lock the door when leaving the house",
        ],
        location: {
          city: "milan",
          country: "undefined",
          coordinates: { lat: 40.0818980466018, lng: -0.023720829572783805 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "ahmed.ali@example.com",
        phoneNumber: "+65-794-2154",
        isVerified: true,
        rating: 3.5,
        reviewCount: 18,
        quote:
          "Staying with me means experiencing milan like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "traditional-homestay",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Isabella Jones",
        background: "Artist who loves sharing local cultural insights",
        maxGuests: 1,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "14:00 AM",
        isPopular: false,
        guestPolicy: [
          "Great for couples",
          "Family-friendly environment",
          "Perfect for long-term stays",
          "Children welcome",
        ],
        hostingStyle: "social",
        houseRules: [
          "Please clean up after yourself in common areas",
          "Laundry available on weekends only",
          "Remove shoes when entering the home",
          "Lock the door when leaving the house",
          "Breakfast is self-serve between 7-9 AM",
        ],
        location: {
          city: "milan",
          country: "undefined",
          coordinates: { lat: 39.978311451989, lng: -0.08001706362875671 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "12:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "isabella.jones@example.com",
        isVerified: true,
        rating: 3.6,
        reviewCount: 55,
        quote:
          "My home is your home in milan. I look forward to making your stay memorable and authentic.",
        stayType: "urban-apartment-stay",
      },
      {
        name: "Mia Jackson",
        background: "Local historian researching regional traditions",
        maxGuests: 4,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "21:00 PM",
        isPopular: true,
        guestPolicy: [
          "Family-friendly environment",
          "Accessible for guests with mobility issues",
          "No children under 12",
        ],
        hostingStyle: "hands-on",
        houseRules: [
          "No pets allowed",
          "Pets welcome",
          "Recycle according to local guidelines",
          "No outside guests without permission",
        ],
        location: {
          city: "milan",
          country: "undefined",
          coordinates: { lat: 40.07991491954814, lng: 0.0348860012748656 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "mia.jackson@example.com",
        phoneNumber: "+23-434-3792",
        isVerified: true,
        rating: 4.1,
        reviewCount: 91,
        quote:
          "Life in milan has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "eco-stay",
      },
      {
        name: "Juan Taylor",
        background: "Local historian researching regional traditions",
        maxGuests: 6,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: [
          "Not suitable for infants (under 2 years)",
          "Accessible for guests with mobility issues",
          "Children welcome",
        ],
        hostingStyle: "social",
        houseRules: [
          "Wi-Fi password will be provided upon arrival",
          "Please conserve water and electricity",
          "Kitchen closed after 8 PM",
          "No outside guests without permission",
          "Quiet hours after 10 PM",
        ],
        location: {
          city: "milan",
          country: "undefined",
          coordinates: { lat: 40.088884461081456, lng: -0.014913283007707806 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "juan.taylor@example.com",
        phoneNumber: "+80-750-8529",
        isVerified: false,
        rating: 3.7,
        reviewCount: 10,
        quote:
          "I've lived in milan all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "eco-stay",
      },
    ],
  },
];
