import { Homestay } from "@/lib/interfaces/people/homestay";

export const sitkaHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Jack Gibson",
        background: "Artist who loves sharing local cultural insights",
        maxGuests: 2,
        languages: ["English", "Japanese", "Portuguese"],
        curfew: "24:00 PM",
        isPopular: true,
        guestPolicy: ["LGBTQ+ friendly", "Family-friendly environment", "Great for couples", "No parties or events"],
        hostingStyle: "social",
        houseRules: ["No outside guests without permission", "Kitchen closed after 8 PM", "No food in the bedrooms", "No smoking indoors", "Please conserve water and electricity", "Remove shoes when entering the home"],
        location: {
          city: "Sitka",
          region: "Alaska",
          country: "United States",
          coordinates: { lat: 40.06636949608116, lng: -0.03364723958003357 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "jack.gibson@example.com",
        phoneNumber: "+34-932-10523",
        isVerified: true,
        rating: 4,
        reviewCount: 75,
        quote: "My home is your home in sitka. I look forward to making your stay memorable and authentic.",
        stayType: "Culinary Homestay",
      },
      {
        name: "Cynthia Hernandez",
        background: "Local chef specializing in traditional cuisines",
        maxGuests: 5,
        languages: ["English", "Portuguese", "Spanish"],
        curfew: "15:00 AM",
        isPopular: false,
        guestPolicy: ["LGBTQ+ friendly", "Smoking allowed in designated areas only", "Suitable for digital nomads", "Accessible for guests with mobility issues"],
        hostingStyle: "social",
        houseRules: ["No food in the bedrooms", "No outside guests without permission", "Remove shoes when entering the home", "Recycle according to local guidelines", "Quiet hours after 10 PM"],
        location: {
          city: "Sitka",
          region: "Alaska",
          country: "United States",
          coordinates: { lat: 39.94285938791607, lng: 0.043862883265694264 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "cynthia.hernandez@example.com",
        isVerified: true,
        rating: 4.9,
        reviewCount: 80,
        quote: "Staying with me means experiencing sitka like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Cottage Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Muhammad Anderson",
        background: "Expat who has lived in the city for over a decade",
        maxGuests: 2,
        languages: ["English", "German", "Chinese", "Russian"],
        curfew: "24:00 PM",
        isPopular: true,
        guestPolicy: ["Not suitable for infants (under 2 years)", "Perfect for long-term stays"],
        hostingStyle: "hands-on",
        houseRules: ["Kitchen closed after 8 PM", "Please clean up after yourself in common areas", "No smoking indoors", "No pets allowed", "Please conserve water and electricity"],
        location: {
          city: "Sitka",
          region: "Alaska",
          country: "United States",
          coordinates: { lat: 40.06176079042368, lng: -0.04846633789867383 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "muhammad.anderson@example.com",
        isVerified: true,
        rating: 4.2,
        reviewCount: 5,
        quote: "I've lived in sitka all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Cottage Stay",
      },
      {
        name: "Keith Marshall",
        background: "Environmental activist working on local sustainability projects",
        maxGuests: 2,
        languages: ["English", "Chinese", "Spanish"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: ["Smoking allowed in designated areas only", "Family-friendly environment", "Senior-friendly accommodations"],
        hostingStyle: "private",
        houseRules: ["Wi-Fi password will be provided upon arrival", "Please clean up after yourself in common areas", "Respect shared spaces", "No outside guests without permission", "Notify host if you'll be arriving after 10 PM", "Quiet hours after 10 PM"],
        location: {
          city: "Sitka",
          region: "Alaska",
          country: "United States",
          coordinates: { lat: 39.916712433995386, lng: 0.006205223713658017 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "keith.marshall@example.com",
        phoneNumber: "+17-379-6476",
        isVerified: true,
        rating: 4,
        reviewCount: 46,
        quote: "My home is your home in sitka. I look forward to making your stay memorable and authentic.",
        stayType: "Culinary Homestay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Robert Stewart",
        background: "Yoga instructor offering morning sessions",
        maxGuests: 5,
        languages: ["English", "German", "Arabic"],
        curfew: "15:00 AM",
        isPopular: false,
        guestPolicy: ["No parties or events", "Great for couples"],
        hostingStyle: "family-oriented",
        houseRules: ["No pets allowed", "Recycle according to local guidelines", "Please conserve water and electricity"],
        location: {
          city: "Sitka",
          region: "Alaska",
          country: "United States",
          coordinates: { lat: 39.96974952317049, lng: -0.0924360528158105 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "robert.stewart@example.com",
        phoneNumber: "+26-767-9889",
        isVerified: true,
        rating: 4.1,
        reviewCount: 36,
        quote: "Life in sitka has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Host Family Stay",
      }
    ]
  }
];
