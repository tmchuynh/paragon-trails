import { Homestay } from "@/lib/interfaces/people/homestay";

export const ketchikanHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Layla Rossi",
        background: "Local musician involved in the cultural scene",
        maxGuests: 1,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "22:00 PM",
        isPopular: true,
        guestPolicy: ["Children welcome", "Suitable for business travelers"],
        hostingStyle: "laid-back",
        houseRules: [
          "Laundry available on weekends only",
          "No loud music after 9 PM",
          "Breakfast is self-serve between 7-9 AM",
          "No smoking indoors",
          "Respect shared spaces",
          "Recycle according to local guidelines",
        ],
        location: {
          city: "ketchikan",
          country: "undefined",
          coordinates: { lat: 40.03509863866045, lng: 0.056975929090998356 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "layla.rossi@example.com",
        phoneNumber: "+13-169-3938",
        isVerified: false,
        rating: 3.6,
        reviewCount: 85,
        quote:
          "Life in ketchikan has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "self-catering",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Liam Johnson",
        background: "Local historian researching regional traditions",
        maxGuests: 2,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "24:00 PM",
        isPopular: true,
        guestPolicy: [
          "Accessible for guests with mobility issues",
          "Smoking allowed in designated areas only",
          "Suitable for digital nomads",
        ],
        hostingStyle: "social",
        houseRules: [
          "Quiet hours after 10 PM",
          "Recycle according to local guidelines",
          "Laundry available on weekends only",
        ],
        location: {
          city: "ketchikan",
          country: "undefined",
          coordinates: { lat: 39.96785932013623, lng: 0.02184424442615293 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "liam.johnson@example.com",
        isVerified: true,
        rating: 3.9,
        reviewCount: 104,
        quote:
          "Staying with me means experiencing ketchikan like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "academic-homestay",
      },
      {
        name: "Aisha Jones",
        background:
          "Language teacher who enjoys helping visitors learn the local tongue",
        maxGuests: 3,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "22:00 PM",
        isPopular: false,
        guestPolicy: [
          "Pet-friendly accommodation",
          "Perfect for long-term stays",
          "Accessible for guests with mobility issues",
        ],
        hostingStyle: "laid-back",
        houseRules: [
          "Breakfast is self-serve between 7-9 AM",
          "Lock the door when leaving the house",
          "Wi-Fi password will be provided upon arrival",
          "Respect shared spaces",
        ],
        location: {
          city: "ketchikan",
          country: "undefined",
          coordinates: { lat: 40.05424238000448, lng: -0.03754070721838807 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "aisha.jones@example.com",
        isVerified: true,
        rating: 3.9,
        reviewCount: 60,
        quote:
          "I've lived in ketchikan all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "guest-suite",
      },
    ],
  },
];
