import { Homestay } from "@/lib/interfaces/people/homestay";

export const dubaiHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Henry Silva",
        background: "Expat who has lived in the city for over a decade",
        maxGuests: 1,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "13:00 AM",
        isPopular: false,
        guestPolicy: [
          "Great for couples",
          "No children under 12",
          "Pet-friendly accommodation",
        ],
        hostingStyle: "family-oriented",
        houseRules: [
          "No food in the bedrooms",
          "No loud music after 9 PM",
          "Pets welcome",
          "Breakfast is self-serve between 7-9 AM",
          "No pets allowed",
          "Please clean up after yourself in common areas",
        ],
        location: {
          city: "dubai",
          country: "undefined",
          coordinates: { lat: 39.9073652232953, lng: -0.07724004806466037 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "12:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "henry.silva@example.com",
        phoneNumber: "+63-397-10219",
        isVerified: true,
        rating: 4.6,
        reviewCount: 21,
        quote:
          "My home is your home in dubai. I look forward to making your stay memorable and authentic.",
        stayType: "volunteer-stay",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Charlotte da Costa",
        background: "Local musician involved in the cultural scene",
        maxGuests: 5,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "13:00 AM",
        isPopular: false,
        guestPolicy: [
          "No children under 12",
          "Not suitable for infants (under 2 years)",
        ],
        hostingStyle: "family-oriented",
        houseRules: [
          "No loud music after 9 PM",
          "No food in the bedrooms",
          "Please clean up after yourself in common areas",
          "Quiet hours after 10 PM",
          "Breakfast is self-serve between 7-9 AM",
          "Lock the door when leaving the house",
        ],
        location: {
          city: "dubai",
          country: "undefined",
          coordinates: { lat: 39.94368505951953, lng: 0.07755714993353613 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "charlotte.da costa@example.com",
        isVerified: true,
        rating: 4.6,
        reviewCount: 104,
        quote:
          "I've lived in dubai all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "shared-room",
      },
      {
        name: "Juan Khan",
        background:
          "Former tour guide with extensive knowledge of local history",
        maxGuests: 1,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: [
          "Smoking allowed in designated areas only",
          "Accessible for guests with mobility issues",
          "Family-friendly environment",
        ],
        hostingStyle: "private",
        houseRules: [
          "Recycle according to local guidelines",
          "Lock the door when leaving the house",
          "Laundry available on weekends only",
        ],
        location: {
          city: "dubai",
          country: "undefined",
          coordinates: { lat: 40.06543373249611, lng: -0.04768342432487663 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "juan.khan@example.com",
        phoneNumber: "+14-512-9189",
        isVerified: false,
        rating: 3.7,
        reviewCount: 104,
        quote:
          "Life in dubai has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "entire-home",
      },
      {
        name: "Carlos Johnson",
        background: "Expat who has lived in the city for over a decade",
        maxGuests: 2,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "21:00 PM",
        isPopular: false,
        guestPolicy: ["Great for couples", "No children under 12"],
        hostingStyle: "family-oriented",
        houseRules: [
          "Breakfast is self-serve between 7-9 AM",
          "No smoking indoors",
          "Laundry available on weekends only",
        ],
        location: {
          city: "dubai",
          country: "undefined",
          coordinates: { lat: 40.04347636831277, lng: -0.07496334231307206 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "carlos.johnson@example.com",
        phoneNumber: "+54-152-8150",
        isVerified: true,
        rating: 3.9,
        reviewCount: 101,
        quote:
          "Welcome to my dubai home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "academic-homestay",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Carlos Thomas",
        background: "Artist who loves sharing local cultural insights",
        maxGuests: 3,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "14:00 AM",
        isPopular: false,
        guestPolicy: [
          "Perfect for long-term stays",
          "Accessible for guests with mobility issues",
          "Children welcome",
        ],
        hostingStyle: "private",
        houseRules: [
          "Respect shared spaces",
          "Pets welcome",
          "No loud music after 9 PM",
          "Kitchen closed after 8 PM",
          "Remove shoes when entering the home",
          "No food in the bedrooms",
        ],
        location: {
          city: "dubai",
          country: "undefined",
          coordinates: { lat: 39.945541824975805, lng: -0.07957347682939525 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "carlos.thomas@example.com",
        phoneNumber: "+89-484-1419",
        isVerified: true,
        rating: 4.8,
        reviewCount: 30,
        quote:
          "Life in dubai has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "language-immersion",
      },
    ],
  },
];
