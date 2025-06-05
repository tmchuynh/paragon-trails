import { Homestay } from "@/lib/interfaces/people/homestay";

export const bermudaHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Yuki Kim",
        background: "Expat who has lived in the city for over a decade",
        maxGuests: 3,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "13:00 AM",
        isPopular: true,
        guestPolicy: [
          "LGBTQ+ friendly",
          "Smoking allowed in designated areas only",
          "Children welcome",
        ],
        hostingStyle: "hands-on",
        houseRules: [
          "Notify host if you'll be arriving after 10 PM",
          "Breakfast is self-serve between 7-9 AM",
          "Quiet hours after 10 PM",
          "Recycle according to local guidelines",
        ],
        location: {
          city: "bermuda",
          country: "undefined",
          coordinates: { lat: 39.983442755899404, lng: -0.0775113939795416 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "yuki.kim@example.com",
        isVerified: false,
        rating: 3.7,
        reviewCount: 39,
        quote:
          "My home is your home in bermuda. I look forward to making your stay memorable and authentic.",
        stayType: "private-room-in-home",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Mei Morales",
        background: "Local chef specializing in traditional cuisines",
        maxGuests: 2,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "15:00 AM",
        isPopular: true,
        guestPolicy: [
          "Perfect for long-term stays",
          "Senior-friendly accommodations",
          "Suitable for digital nomads",
        ],
        hostingStyle: "family-oriented",
        houseRules: [
          "No outside guests without permission",
          "Please conserve water and electricity",
          "Respect shared spaces",
          "Notify host if you'll be arriving after 10 PM",
          "Wi-Fi password will be provided upon arrival",
          "No pets allowed",
        ],
        location: {
          city: "bermuda",
          country: "undefined",
          coordinates: { lat: 40.09192780495228, lng: 0.006189578707691587 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "mei.morales@example.com",
        phoneNumber: "+46-540-2585",
        isVerified: true,
        rating: 3.6,
        reviewCount: 30,
        quote:
          "Life in bermuda has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "bed-and-breakfast",
      },
      {
        name: "Emma Miller",
        background: "University professor with expertise in local culture",
        maxGuests: 3,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "14:00 AM",
        isPopular: false,
        guestPolicy: ["Suitable for digital nomads", "LGBTQ+ friendly"],
        hostingStyle: "hands-on",
        houseRules: [
          "Please clean up after yourself in common areas",
          "Breakfast is self-serve between 7-9 AM",
          "Quiet hours after 10 PM",
          "No smoking indoors",
          "Wi-Fi password will be provided upon arrival",
        ],
        location: {
          city: "bermuda",
          country: "undefined",
          coordinates: { lat: 39.93365335024364, lng: 0.0006985220253683116 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "emma.miller@example.com",
        phoneNumber: "+33-450-5825",
        isVerified: true,
        rating: 4.4,
        reviewCount: 100,
        quote:
          "I've lived in bermuda all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "entire-home",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Priya Nguyen",
        background: "Entrepreneur running a local business",
        maxGuests: 6,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "21:00 PM",
        isPopular: false,
        guestPolicy: [
          "Pet-friendly accommodation",
          "Not suitable for infants (under 2 years)",
        ],
        hostingStyle: "family-oriented",
        houseRules: [
          "Laundry available on weekends only",
          "Pets welcome",
          "Breakfast is self-serve between 7-9 AM",
        ],
        location: {
          city: "bermuda",
          country: "undefined",
          coordinates: { lat: 40.00675757840256, lng: -0.002031025758672464 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "priya.nguyen@example.com",
        isVerified: true,
        rating: 3.8,
        reviewCount: 34,
        quote:
          "I've lived in bermuda all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "host-family-stay",
      },
      {
        name: "Harper Lopez",
        background: "Entrepreneur running a local business",
        maxGuests: 4,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "21:00 PM",
        isPopular: true,
        guestPolicy: [
          "LGBTQ+ friendly",
          "Great for couples",
          "No children under 12",
          "Perfect for long-term stays",
        ],
        hostingStyle: "hands-on",
        houseRules: [
          "No loud music after 9 PM",
          "Remove shoes when entering the home",
          "Pets welcome",
        ],
        location: {
          city: "bermuda",
          country: "undefined",
          coordinates: { lat: 40.025004141633026, lng: 0.039755245743950146 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "harper.lopez@example.com",
        isVerified: true,
        rating: 4.7,
        reviewCount: 15,
        quote:
          "Life in bermuda has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "private-room-in-home",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Amelia Hernandez",
        background: "Yoga instructor offering morning sessions",
        maxGuests: 5,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "15:00 AM",
        isPopular: false,
        guestPolicy: [
          "Smoking allowed in designated areas only",
          "Great for couples",
          "Children welcome",
          "Suitable for business travelers",
        ],
        hostingStyle: "social",
        houseRules: [
          "Notify host if you'll be arriving after 10 PM",
          "No loud music after 9 PM",
          "Quiet hours after 10 PM",
          "Recycle according to local guidelines",
          "No food in the bedrooms",
          "Please clean up after yourself in common areas",
        ],
        location: {
          city: "bermuda",
          country: "undefined",
          coordinates: { lat: 40.05893187340046, lng: 0.04819194898620144 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "amelia.hernandez@example.com",
        isVerified: true,
        rating: 4,
        reviewCount: 42,
        quote:
          "I've lived in bermuda all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "art-or-craft-stay",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Lucas Rossi",
        background:
          "Digital nomad who settled in the city after falling in love with it",
        maxGuests: 4,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "14:00 AM",
        isPopular: false,
        guestPolicy: ["No parties or events", "Perfect for long-term stays"],
        hostingStyle: "private",
        houseRules: [
          "Wi-Fi password will be provided upon arrival",
          "No pets allowed",
          "Please conserve water and electricity",
          "Notify host if you'll be arriving after 10 PM",
          "Pets welcome",
          "No food in the bedrooms",
        ],
        location: {
          city: "bermuda",
          country: "undefined",
          coordinates: { lat: 40.04949246650209, lng: 0.0013998851705162296 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "lucas.rossi@example.com",
        isVerified: true,
        rating: 4.5,
        reviewCount: 42,
        quote:
          "I've lived in bermuda all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "spiritual-or-wellness-retreat",
      },
    ],
  },
];
