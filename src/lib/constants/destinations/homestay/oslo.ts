import { Homestay } from "@/lib/interfaces/people/homestay";

export const osloHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Kimberly Hernandez",
        background: "Local chef specializing in traditional cuisines",
        maxGuests: 3,
        languages: ["English", "Danish", "Russian"],
        curfew: "13:00 AM",
        isPopular: false,
        guestPolicy: ["Senior-friendly accommodations", "Ideal for solo travelers", "Family-friendly environment"],
        hostingStyle: "family-oriented",
        houseRules: ["Kitchen closed after 8 PM", "Recycle according to local guidelines", "Lock the door when leaving the house"],
        location: {
          city: "Oslo",
          region: "Northern Europe",
          country: "Norway",
          coordinates: { lat: 39.9341697620184, lng: -0.04531878709729727 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "kimberly.hernandez@example.com",
        phoneNumber: "+15-851-6123",
        isVerified: true,
        rating: 3.8,
        reviewCount: 50,
        quote: "Welcome to my oslo home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Traditional Homestay",
      },
      {
        name: "Diego Clark",
        background: "Long-time resident and community organizer",
        maxGuests: 2,
        languages: ["English", "Russian", "Polish"],
        curfew: "15:00 AM",
        isPopular: false,
        guestPolicy: ["Family-friendly environment", "Perfect for long-term stays"],
        hostingStyle: "family-oriented",
        houseRules: ["Lock the door when leaving the house", "No food in the bedrooms", "No loud music after 9 PM", "No pets allowed"],
        location: {
          city: "Oslo",
          region: "Northern Europe",
          country: "Norway",
          coordinates: { lat: 39.96663556189244, lng: -0.04553829340079161 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "diego.clark@example.com",
        phoneNumber: "+46-344-1411",
        isVerified: true,
        rating: 4.8,
        reviewCount: 77,
        quote: "Welcome to my oslo home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Art Or Craft Stay",
      },
      {
        name: "Priya Collins",
        background: "Local musician involved in the cultural scene",
        maxGuests: 1,
        languages: ["English", "Italian", "Spanish"],
        curfew: "21:00 PM",
        isPopular: false,
        guestPolicy: ["Perfect for long-term stays", "Ideal for solo travelers", "LGBTQ+ friendly", "Smoking allowed in designated areas only"],
        hostingStyle: "laid-back",
        houseRules: ["Pets welcome", "Please conserve water and electricity", "Lock the door when leaving the house", "Notify host if you'll be arriving after 10 PM", "Please clean up after yourself in common areas"],
        location: {
          city: "Oslo",
          region: "Northern Europe",
          country: "Norway",
          coordinates: { lat: 39.97724231764259, lng: -0.018965017314635485 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "priya.collins@example.com",
        isVerified: true,
        rating: 3.6,
        reviewCount: 48,
        quote: "I've lived in oslo all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Villa Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Mary Martin",
        background: "Local historian researching regional traditions",
        maxGuests: 5,
        languages: ["English", "Finnish", "German", "French"],
        curfew: "13:00 AM",
        isPopular: true,
        guestPolicy: ["Family-friendly environment", "Children welcome"],
        hostingStyle: "laid-back",
        houseRules: ["No food in the bedrooms", "Notify host if you'll be arriving after 10 PM", "Wi-Fi password will be provided upon arrival", "Pets welcome"],
        location: {
          city: "Oslo",
          region: "Northern Europe",
          country: "Norway",
          coordinates: { lat: 40.084430677502134, lng: -0.08626344141451954 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "mary.martin@example.com",
        phoneNumber: "+65-892-5045",
        isVerified: true,
        rating: 4,
        reviewCount: 95,
        quote: "My home is your home in oslo. I look forward to making your stay memorable and authentic.",
        stayType: "Traditional Homestay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Aaron Russell",
        background: "Organic farmer with a small plot on the outskirts of town",
        maxGuests: 5,
        languages: ["English", "Russian", "Dutch", "Polish"],
        curfew: "14:00 AM",
        isPopular: true,
        guestPolicy: ["Suitable for digital nomads", "No parties or events", "Senior-friendly accommodations"],
        hostingStyle: "hands-on",
        houseRules: ["No food in the bedrooms", "Kitchen closed after 8 PM", "Remove shoes when entering the home", "Respect shared spaces", "Breakfast is self-serve between 7-9 AM", "Pets welcome"],
        location: {
          city: "Oslo",
          region: "Northern Europe",
          country: "Norway",
          coordinates: { lat: 39.92326889496261, lng: 0.09850504984043709 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "aaron.russell@example.com",
        phoneNumber: "+81-391-7561",
        isVerified: true,
        rating: 3.8,
        reviewCount: 87,
        quote: "Life in oslo has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Volunteer Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Jessica Chen",
        background: "Expat who has lived in the city for over a decade",
        maxGuests: 2,
        languages: ["English", "Portuguese", "Russian", "Swedish"],
        curfew: "21:00 PM",
        isPopular: false,
        guestPolicy: ["Senior-friendly accommodations", "No children under 12"],
        hostingStyle: "hands-on",
        houseRules: ["No smoking indoors", "Wi-Fi password will be provided upon arrival", "Laundry available on weekends only", "Kitchen closed after 8 PM"],
        location: {
          city: "Oslo",
          region: "Northern Europe",
          country: "Norway",
          coordinates: { lat: 40.002124176010994, lng: -0.08656771189048845 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "jessica.chen@example.com",
        phoneNumber: "+70-494-10216",
        isVerified: true,
        rating: 3.6,
        reviewCount: 59,
        quote: "I've lived in oslo all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Eco Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Alice Silva",
        background: "Entrepreneur running a local business",
        maxGuests: 1,
        languages: ["English", "Spanish", "Dutch", "Italian"],
        curfew: "15:00 AM",
        isPopular: false,
        guestPolicy: ["Smoking allowed in designated areas only", "Senior-friendly accommodations", "Suitable for business travelers", "Children welcome"],
        hostingStyle: "hands-on",
        houseRules: ["Kitchen closed after 8 PM", "Breakfast is self-serve between 7-9 AM", "Lock the door when leaving the house", "Quiet hours after 10 PM", "Laundry available on weekends only", "No food in the bedrooms"],
        location: {
          city: "Oslo",
          region: "Northern Europe",
          country: "Norway",
          coordinates: { lat: 39.91522985302996, lng: -0.08722534007324696 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "alice.silva@example.com",
        phoneNumber: "+64-826-1058",
        isVerified: true,
        rating: 4.9,
        reviewCount: 58,
        quote: "Life in oslo has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Eco Stay",
      },
      {
        name: "Harper Miller",
        background: "Language teacher who enjoys helping visitors learn the local tongue",
        maxGuests: 3,
        languages: ["English", "Danish", "French"],
        curfew: "21:00 PM",
        isPopular: false,
        guestPolicy: ["Family-friendly environment", "Smoking allowed in designated areas only"],
        hostingStyle: "family-oriented",
        houseRules: ["No smoking indoors", "Please conserve water and electricity", "No pets allowed"],
        location: {
          city: "Oslo",
          region: "Northern Europe",
          country: "Norway",
          coordinates: { lat: 39.94461582296502, lng: -0.03686608168577435 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "harper.miller@example.com",
        phoneNumber: "+55-821-8638",
        isVerified: true,
        rating: 4.6,
        reviewCount: 62,
        quote: "Staying with me means experiencing oslo like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Pet Friendly Stay",
      }
    ]
  }
];
