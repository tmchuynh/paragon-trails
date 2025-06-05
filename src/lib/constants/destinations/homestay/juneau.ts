import { Homestay } from "@/lib/interfaces/people/homestay";

export const juneauHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "James da Costa",
        background:
          "Retired schoolteacher passionate about sharing local traditions",
        maxGuests: 2,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: [
          "Children welcome",
          "Smoking allowed in designated areas only",
          "LGBTQ+ friendly",
        ],
        hostingStyle: "laid-back",
        houseRules: [
          "Quiet hours after 10 PM",
          "No food in the bedrooms",
          "Recycle according to local guidelines",
        ],
        location: {
          city: "juneau",
          country: "undefined",
          coordinates: { lat: 40.045813455409835, lng: -0.08070230022985161 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "james.da costa@example.com",
        phoneNumber: "+83-465-8709",
        isVerified: true,
        rating: 4.5,
        reviewCount: 43,
        quote:
          "Welcome to my juneau home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "guest-suite",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Aisha Kowalski",
        background: "Expat who has lived in the city for over a decade",
        maxGuests: 2,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "14:00 AM",
        isPopular: true,
        guestPolicy: [
          "Senior-friendly accommodations",
          "LGBTQ+ friendly",
          "Great for couples",
          "Perfect for long-term stays",
        ],
        hostingStyle: "private",
        houseRules: [
          "Notify host if you'll be arriving after 10 PM",
          "Kitchen closed after 8 PM",
          "Wi-Fi password will be provided upon arrival",
          "No food in the bedrooms",
        ],
        location: {
          city: "juneau",
          country: "undefined",
          coordinates: { lat: 39.99218133693127, lng: 0.060446822511521836 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "aisha.kowalski@example.com",
        isVerified: true,
        rating: 4.3,
        reviewCount: 30,
        quote:
          "My home is your home in juneau. I look forward to making your stay memorable and authentic.",
        stayType: "art-or-craft-stay",
      },
      {
        name: "Lucas Ivanov",
        background:
          "Former tour guide with extensive knowledge of local history",
        maxGuests: 5,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: [
          "LGBTQ+ friendly",
          "Smoking allowed in designated areas only",
          "Accessible for guests with mobility issues",
        ],
        hostingStyle: "private",
        houseRules: [
          "Remove shoes when entering the home",
          "Kitchen closed after 8 PM",
          "Wi-Fi password will be provided upon arrival",
        ],
        location: {
          city: "juneau",
          country: "undefined",
          coordinates: { lat: 39.91541325536282, lng: 0.02384180596664401 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "lucas.ivanov@example.com",
        isVerified: true,
        rating: 4.8,
        reviewCount: 62,
        quote:
          "I've lived in juneau all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "eco-stay",
      },
    ],
  },
];
