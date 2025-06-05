import { Homestay } from "@/lib/interfaces/people/homestay";

export const rioDeJaneiroHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Pamela Jansen",
        background: "University professor with expertise in local culture",
        maxGuests: 2,
        languages: ["English", "Aymara", "Quechua", "Guarani"],
        curfew: "22:00 PM",
        isPopular: false,
        guestPolicy: ["No parties or events", "Smoking allowed in designated areas only"],
        hostingStyle: "social",
        houseRules: ["Wi-Fi password will be provided upon arrival", "Please conserve water and electricity", "No outside guests without permission", "No pets allowed", "Pets welcome"],
        location: {
          city: "Rio de janeiro",
          region: "South America",
          country: "Brazil",
          coordinates: { lat: 39.94529329548355, lng: 0.023071671149797718 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "pamela.jansen@example.com",
        phoneNumber: "+26-492-8406",
        isVerified: false,
        rating: 4.4,
        reviewCount: 52,
        quote: "Staying with me means experiencing rio-de-janeiro like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Villa Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Samuel Fletcher",
        background: "Retired schoolteacher passionate about sharing local traditions",
        maxGuests: 4,
        languages: ["English", "Aymara", "Guarani"],
        curfew: "15:00 AM",
        isPopular: false,
        guestPolicy: ["Smoking allowed in designated areas only", "No parties or events"],
        hostingStyle: "laid-back",
        houseRules: ["Please clean up after yourself in common areas", "No food in the bedrooms", "Pets welcome", "Kitchen closed after 8 PM"],
        location: {
          city: "Rio de janeiro",
          region: "South America",
          country: "Brazil",
          coordinates: { lat: 39.96831236748579, lng: -0.07737510622073818 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "samuel.fletcher@example.com",
        phoneNumber: "+57-166-4115",
        isVerified: true,
        rating: 4.7,
        reviewCount: 7,
        quote: "I've lived in rio-de-janeiro all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Self Catering",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Katherine Nash",
        background: "Local chef specializing in traditional cuisines",
        maxGuests: 2,
        languages: ["English", "Spanish", "French"],
        curfew: "21:00 PM",
        isPopular: false,
        guestPolicy: ["No children under 12", "Suitable for digital nomads", "Smoking allowed in designated areas only"],
        hostingStyle: "family-oriented",
        houseRules: ["No outside guests without permission", "Please conserve water and electricity", "No smoking indoors", "Quiet hours after 10 PM", "Recycle according to local guidelines", "Remove shoes when entering the home"],
        location: {
          city: "Rio de janeiro",
          region: "South America",
          country: "Brazil",
          coordinates: { lat: 40.08834573367283, lng: -0.00005107543340580889 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "katherine.nash@example.com",
        phoneNumber: "+47-706-7772",
        isVerified: true,
        rating: 4.6,
        reviewCount: 31,
        quote: "I've lived in rio-de-janeiro all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Language Immersion",
      },
      {
        name: "Wei Foster",
        background: "Retired schoolteacher passionate about sharing local traditions",
        maxGuests: 4,
        languages: ["English", "French", "Haitian"],
        curfew: "21:00 PM",
        isPopular: true,
        guestPolicy: ["No children under 12", "Smoking allowed in designated areas only", "Senior-friendly accommodations", "No parties or events"],
        hostingStyle: "family-oriented",
        houseRules: ["Laundry available on weekends only", "Recycle according to local guidelines", "Kitchen closed after 8 PM"],
        location: {
          city: "Rio de janeiro",
          region: "South America",
          country: "Brazil",
          coordinates: { lat: 39.9384277182894, lng: 0.04961935272409815 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "wei.foster@example.com",
        isVerified: true,
        rating: 3.9,
        reviewCount: 70,
        quote: "I've lived in rio-de-janeiro all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Pet Friendly Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Alexander Young",
        background: "Expat who has lived in the city for over a decade",
        maxGuests: 4,
        languages: ["English", "Guarani", "Portuguese"],
        curfew: "21:00 PM",
        isPopular: false,
        guestPolicy: ["Great for couples", "Smoking allowed in designated areas only"],
        hostingStyle: "laid-back",
        houseRules: ["Recycle according to local guidelines", "Notify host if you'll be arriving after 10 PM", "No food in the bedrooms", "Wi-Fi password will be provided upon arrival"],
        location: {
          city: "Rio de janeiro",
          region: "South America",
          country: "Brazil",
          coordinates: { lat: 40.059342116461266, lng: -0.05007582859635478 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "alexander.young@example.com",
        phoneNumber: "+43-893-5412",
        isVerified: true,
        rating: 3.9,
        reviewCount: 33,
        quote: "I've lived in rio-de-janeiro all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Farm Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Sebastian Payne",
        background: "Yoga instructor offering morning sessions",
        maxGuests: 1,
        languages: ["English", "Spanish", "French"],
        curfew: "21:00 PM",
        isPopular: false,
        guestPolicy: ["Accessible for guests with mobility issues", "Great for couples", "Perfect for long-term stays", "Children welcome"],
        hostingStyle: "laid-back",
        houseRules: ["Kitchen closed after 8 PM", "Laundry available on weekends only", "Pets welcome", "Please conserve water and electricity", "No pets allowed"],
        location: {
          city: "Rio de janeiro",
          region: "South America",
          country: "Brazil",
          coordinates: { lat: 40.0919735426969, lng: -0.0569953547990842 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "sebastian.payne@example.com",
        isVerified: true,
        rating: 4.3,
        reviewCount: 63,
        quote: "My home is your home in rio-de-janeiro. I look forward to making your stay memorable and authentic.",
        stayType: "Academic Homestay",
      },
      {
        name: "Jane Singh",
        background: "Retired schoolteacher passionate about sharing local traditions",
        maxGuests: 6,
        languages: ["English", "Spanish", "Aymara", "Guarani"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: ["Great for couples", "LGBTQ+ friendly", "Accessible for guests with mobility issues", "Children welcome"],
        hostingStyle: "hands-on",
        houseRules: ["No food in the bedrooms", "Respect shared spaces", "Quiet hours after 10 PM", "No loud music after 9 PM"],
        location: {
          city: "Rio de janeiro",
          region: "South America",
          country: "Brazil",
          coordinates: { lat: 39.967815341763696, lng: -0.09232610975912224 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "jane.singh@example.com",
        phoneNumber: "+74-1082-5754",
        isVerified: true,
        rating: 4.5,
        reviewCount: 17,
        quote: "Life in rio-de-janeiro has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Spiritual Or Wellness Retreat",
      }
    ]
  }
];
