import { Homestay } from "@/lib/interfaces/people/homestay";

export const yokohamaHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Benjamin Taylor",
        background: "Local chef specializing in traditional cuisines",
        maxGuests: 1,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "15:00 AM",
        isPopular: false,
        guestPolicy: [
          "Accessible for guests with mobility issues",
          "Family-friendly environment",
          "Suitable for digital nomads",
          "Smoking allowed in designated areas only",
        ],
        hostingStyle: "social",
        houseRules: [
          "Quiet hours after 10 PM",
          "Pets welcome",
          "No food in the bedrooms",
          "Please conserve water and electricity",
        ],
        location: {
          city: "yokohama",
          country: "undefined",
          coordinates: { lat: 39.93173993233941, lng: -0.04676316000428709 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "benjamin.taylor@example.com",
        phoneNumber: "+63-206-5064",
        isVerified: true,
        rating: 3.7,
        reviewCount: 26,
        quote:
          "Life in yokohama has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "pet-friendly-stay",
      },
    ],
  },
  {
    hosts: [
      {
        name: "James Moore",
        background:
          "Digital nomad who settled in the city after falling in love with it",
        maxGuests: 5,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: [
          "Ideal for solo travelers",
          "Suitable for digital nomads",
          "Family-friendly environment",
          "LGBTQ+ friendly",
        ],
        hostingStyle: "hands-on",
        houseRules: [
          "Please conserve water and electricity",
          "Remove shoes when entering the home",
          "Laundry available on weekends only",
        ],
        location: {
          city: "yokohama",
          country: "undefined",
          coordinates: { lat: 40.003354271430666, lng: 0.02392550918029937 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "james.moore@example.com",
        isVerified: true,
        rating: 3.6,
        reviewCount: 28,
        quote:
          "My home is your home in yokohama. I look forward to making your stay memorable and authentic.",
        stayType: "urban-apartment-stay",
      },
    ],
  },
];
