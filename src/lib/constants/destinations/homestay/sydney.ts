import { Host } from "@/lib/interfaces/people/homestay";

export const sydneyHomestays: Host[] = [
  {
    name: "Larry Kim",
    background: "Former tour guide with extensive knowledge of local history",
    maxGuests: 4,
    languages: ["Urdu", "Hindi", "Bengali", "English"],
    curfew: "13:00 AM",
    isPopular: false,
    guestPolicy: [
      "Not suitable for infants (under 2 years)",
      "Family-friendly environment",
    ],
    hostingStyle: "social",
    houseRules: [
      "Remove shoes when entering the home",
      "Please clean up after yourself in common areas",
      "Respect shared spaces",
    ],
    location: {
      city: "Sydney",
      region: "Asia Pacific",
      country: "Australia",
      coordinates: { lat: 40.03194769015726, lng: 0.051244530693078355 },
    },
    availability: {
      checkInTime: "14:00 PM",
      checkOutTime: "11:00 AM",
      calendarLink: "https://calendar.example.com/availability",
    },
    email: "larry.kim@paragontrailshomestays.com",
    phoneNumber: "+47-682-9073",
    isVerified: true,
    rating: 4.6,
    reviewCount: 49,
    quote:
      "I've lived in sydney all my life and know all the best spots. Can't wait to share my city with you!",
    stayType: "culinary-homestay",
  },
  {
    name: "Charlotte Marshall",
    background:
      "Environmental activist working on local sustainability projects",
    maxGuests: 2,
    languages: ["Tagalog", "Japanese", "Vietnamese", "Urdu", "English"],
    curfew: "14:00 AM",
    isPopular: false,
    guestPolicy: [
      "Accessible for guests with mobility issues",
      "Pet-friendly accommodation",
    ],
    hostingStyle: "private",
    houseRules: [
      "Breakfast is self-serve between 7-9 AM",
      "No pets allowed",
      "Lock the door when leaving the house",
    ],
    location: {
      city: "Sydney",
      region: "Asia Pacific",
      country: "Australia",
      coordinates: { lat: 40.08051255413901, lng: -0.05419614659410206 },
    },
    availability: {
      checkInTime: "13:00 PM",
      checkOutTime: "9:00 AM",
      calendarLink: "https://calendar.example.com/availability",
    },
    email: "charlotte.marshall@paragontrailshomestays.com",
    phoneNumber: "+46-513-6818",
    isVerified: true,
    rating: 4.4,
    reviewCount: 6,
    quote:
      "Welcome to my sydney home! I believe in creating a warm, welcoming environment for all my guests.",
    stayType: "villa-stay",
  },
  {
    name: "Chloe Gonzalez",
    background:
      "Digital nomad who settled in the city after falling in love with it",
    maxGuests: 5,
    languages: ["Urdu", "Chinese", "Japanese", "Hindi", "English"],
    curfew: "14:00 AM",
    isPopular: true,
    guestPolicy: ["Suitable for business travelers", "Children welcome"],
    hostingStyle: "laid-back",
    houseRules: [
      "Lock the door when leaving the house",
      "No outside guests without permission",
      "Remove shoes when entering the home",
      "Breakfast is self-serve between 7-9 AM",
      "Respect shared spaces",
      "Kitchen closed after 8 PM",
    ],
    location: {
      city: "Sydney",
      region: "Asia Pacific",
      country: "Australia",
      coordinates: { lat: 39.99801172941679, lng: 0.09479271085887095 },
    },
    availability: {
      checkInTime: "16:00 PM",
      checkOutTime: "9:00 AM",
      calendarLink: "https://calendar.example.com/availability",
    },
    email: "chloe.gonzalez@paragontrailshomestays.com",
    phoneNumber: "+17-266-7844",
    isVerified: true,
    rating: 4.6,
    reviewCount: 19,
    quote:
      "I've lived in sydney all my life and know all the best spots. Can't wait to share my city with you!",
    stayType: "academic-homestay",
  },
];
