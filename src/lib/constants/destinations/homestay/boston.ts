import { Host } from "@/lib/interfaces/people/homestay";

export const bostonHomestays: Host[] = [
  {
    name: "Priya Graham",
    background:
      "Digital nomad who settled in the city after falling in love with it",
    maxGuests: 5,
    languages: ["English", "Guarani", "Portuguese"],
    curfew: "24:00 PM",
    isPopular: false,
    guestPolicy: [
      "Accessible for guests with mobility issues",
      "LGBTQ+ friendly",
      "Not suitable for infants (under 2 years)",
      "Ideal for solo travelers",
    ],
    hostingStyle: "private",
    houseRules: [
      "Please conserve water and electricity",
      "No smoking indoors",
      "Lock the door when leaving the house",
      "Recycle according to local guidelines",
      "No outside guests without permission",
    ],
    location: {
      city: "Boston",
      region: "East Coast USA",
      country: "United States",
      coordinates: { lat: 40.089339702200554, lng: -0.05856065944828766 },
    },
    availability: {
      checkInTime: "15:00 PM",
      checkOutTime: "12:00 AM",
    },
    email: "priya.graham@paragontrailshomestays.com",
    phoneNumber: "+30-758-9495",
    isVerified: true,
    rating: 4,
    reviewCount: 76,
    quote:
      "I've lived in boston all my life and know all the best spots. Can't wait to share my city with you!",
    stayType: "self-catering",
  },
  {
    name: "Mateo Holloway",
    background:
      "Environmental activist working on local sustainability projects",
    maxGuests: 4,
    languages: ["English", "Spanish", "Portuguese", "Haitian"],
    curfew: "24:00 PM",
    isPopular: false,
    guestPolicy: [
      "Not suitable for infants (under 2 years)",
      "No parties or events",
      "LGBTQ+ friendly",
    ],
    hostingStyle: "hands-on",
    houseRules: [
      "Laundry available on weekends only",
      "Recycle according to local guidelines",
      "Wi-Fi password will be provided upon arrival",
      "No outside guests without permission",
    ],
    location: {
      city: "Boston",
      region: "East Coast USA",
      country: "United States",
      coordinates: { lat: 39.96962870667833, lng: -0.0714511424708678 },
    },
    availability: {
      checkInTime: "13:00 PM",
      checkOutTime: "9:00 AM",
      calendarLink: "https://calendar.example.com/availability",
    },
    email: "mateo.holloway@paragontrailshomestays.com",
    phoneNumber: "+38-586-1779",
    isVerified: true,
    rating: 4,
    reviewCount: 17,
    quote:
      "My home is your home in boston. I look forward to making your stay memorable and authentic.",
    stayType: "bed-and-breakfast",
  },
  {
    name: "Diego Marshall",
    background:
      "Language teacher who enjoys helping visitors learn the local tongue",
    maxGuests: 1,
    languages: ["English", "Guarani", "Aymara"],
    curfew: "21:00 PM",
    isPopular: false,
    guestPolicy: [
      "Not suitable for infants (under 2 years)",
      "Children welcome",
      "LGBTQ+ friendly",
      "Suitable for digital nomads",
    ],
    hostingStyle: "social",
    houseRules: [
      "Please conserve water and electricity",
      "Wi-Fi password will be provided upon arrival",
      "No outside guests without permission",
    ],
    location: {
      city: "Boston",
      region: "East Coast USA",
      country: "United States",
      coordinates: { lat: 39.901259266227044, lng: 0.03240513711884527 },
    },
    availability: {
      checkInTime: "14:00 PM",
      checkOutTime: "10:00 AM",
    },
    email: "diego.marshall@paragontrailshomestays.com",
    phoneNumber: "+67-406-10781",
    isVerified: false,
    rating: 3.6,
    reviewCount: 56,
    quote:
      "Staying with me means experiencing boston like a local. I love sharing the hidden gems of our beautiful city with my guests.",
    stayType: "self-catering",
  },
  {
    name: "Jonathan Ellis",
    background:
      "Retired schoolteacher passionate about sharing local traditions",
    maxGuests: 2,
    languages: ["English", "Portuguese", "Haitian"],
    curfew: "22:00 PM",
    isPopular: true,
    guestPolicy: [
      "Family-friendly environment",
      "Smoking allowed in designated areas only",
    ],
    hostingStyle: "family-oriented",
    houseRules: [
      "Pets welcome",
      "Recycle according to local guidelines",
      "No loud music after 9 PM",
      "Kitchen closed after 8 PM",
    ],
    location: {
      city: "Boston",
      region: "East Coast USA",
      country: "United States",
      coordinates: { lat: 40.00010247340897, lng: 0.05117451421397107 },
    },
    availability: {
      checkInTime: "13:00 PM",
      checkOutTime: "12:00 AM",
    },
    email: "jonathan.ellis@paragontrailshomestays.com",
    phoneNumber: "+50-263-7100",
    isVerified: false,
    rating: 4.6,
    reviewCount: 14,
    quote:
      "I've lived in boston all my life and know all the best spots. Can't wait to share my city with you!",
    stayType: "villa-stay",
  },
];
