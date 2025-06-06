import { Host } from "@/lib/interfaces/people/homestay";

export const veniceHomestays: Host[] = [
  {
    name: "Amanda Spencer",
    background:
      "Retired schoolteacher passionate about sharing local traditions",
    maxGuests: 6,
    languages: ["English", "Swedish", "German"],
    curfew: "23:00 PM",
    isPopular: false,
    guestPolicy: [
      "Pet-friendly accommodation",
      "Smoking allowed in designated areas only",
    ],
    hostingStyle: "laid-back",
    houseRules: [
      "No loud music after 9 PM",
      "No pets allowed",
      "Pets welcome",
      "Kitchen closed after 8 PM",
      "Remove shoes when entering the home",
    ],
    location: {
      city: "Venice",
      region: "Mediterranean",
      country: "Italy",
      coordinates: { lat: 39.96895486766896, lng: -0.08280762450927757 },
    },
    availability: {
      checkInTime: "17:00 PM",
      checkOutTime: "11:00 AM",
    },
    email: "amanda.spencer@paragontrailshomestays.com",
    isVerified: true,
    rating: 4.4,
    reviewCount: 88,
    quote:
      "Welcome to my venice home! I believe in creating a warm, welcoming environment for all my guests.",
    stayType: "villa-stay",
  },
  {
    name: "Robert Crawford",
    background: "Former tour guide with extensive knowledge of local history",
    maxGuests: 5,
    languages: ["English", "Norwegian", "Portuguese"],
    curfew: "23:00 PM",
    isPopular: false,
    guestPolicy: [
      "Great for couples",
      "No children under 12",
      "Suitable for digital nomads",
      "Senior-friendly accommodations",
    ],
    hostingStyle: "laid-back",
    houseRules: [
      "Wi-Fi password will be provided upon arrival",
      "Recycle according to local guidelines",
      "Remove shoes when entering the home",
      "No pets allowed",
    ],
    location: {
      city: "Venice",
      region: "Mediterranean",
      country: "Italy",
      coordinates: { lat: 39.95318229431701, lng: 0.04471969331418166 },
    },
    availability: {
      checkInTime: "16:00 PM",
      checkOutTime: "12:00 AM",
      calendarLink: "https://calendar.example.com/availability",
    },
    email: "robert.crawford@paragontrailshomestays.com",
    phoneNumber: "+89-668-7764",
    isVerified: true,
    rating: 4.7,
    reviewCount: 54,
    quote:
      "My home is your home in venice. I look forward to making your stay memorable and authentic.",
    stayType: "villa-stay",
  },
];
