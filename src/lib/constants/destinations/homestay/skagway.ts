import { Homestay } from "@/lib/interfaces/people/homestay";

export const skagwayHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Claire Price",
        background: "Language teacher who enjoys helping visitors learn the local tongue",
        maxGuests: 3,
        languages: ["English", "Spanish", "Italian", "Japanese"],
        curfew: "15:00 AM",
        isPopular: false,
        guestPolicy: ["No parties or events", "Perfect for long-term stays", "LGBTQ+ friendly"],
        hostingStyle: "hands-on",
        houseRules: ["Quiet hours after 10 PM", "Kitchen closed after 8 PM", "Respect shared spaces", "No outside guests without permission", "Laundry available on weekends only", "Lock the door when leaving the house"],
        location: {
          city: "Skagway",
          region: "Alaska",
          country: "United States",
          coordinates: { lat: 39.977375613333066, lng: 0.02652458232710503 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "claire.price@example.com",
        phoneNumber: "+91-221-10509",
        isVerified: true,
        rating: 4.8,
        reviewCount: 29,
        quote: "My home is your home in skagway. I look forward to making your stay memorable and authentic.",
        stayType: "Guest Suite",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Patricia Kim",
        background: "Environmental activist working on local sustainability projects",
        maxGuests: 6,
        languages: ["English", "Russian", "Portuguese"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: ["Senior-friendly accommodations", "Great for couples", "Perfect for long-term stays"],
        hostingStyle: "family-oriented",
        houseRules: ["Laundry available on weekends only", "Quiet hours after 10 PM", "Notify host if you'll be arriving after 10 PM", "Breakfast is self-serve between 7-9 AM", "Respect shared spaces"],
        location: {
          city: "Skagway",
          region: "Alaska",
          country: "United States",
          coordinates: { lat: 39.94093277237661, lng: -0.08495269940371282 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "patricia.kim@example.com",
        phoneNumber: "+21-897-9036",
        isVerified: true,
        rating: 4.6,
        reviewCount: 19,
        quote: "I've lived in skagway all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Academic Homestay",
      },
      {
        name: "John Rossi",
        background: "Digital nomad who settled in the city after falling in love with it",
        maxGuests: 3,
        languages: ["English", "Chinese", "Italian", "Russian"],
        curfew: "15:00 AM",
        isPopular: false,
        guestPolicy: ["LGBTQ+ friendly", "Pet-friendly accommodation", "Smoking allowed in designated areas only", "No parties or events"],
        hostingStyle: "hands-on",
        houseRules: ["Notify host if you'll be arriving after 10 PM", "Lock the door when leaving the house", "Breakfast is self-serve between 7-9 AM"],
        location: {
          city: "Skagway",
          region: "Alaska",
          country: "United States",
          coordinates: { lat: 39.92623598848556, lng: 0.06018632585577152 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "john.rossi@example.com",
        phoneNumber: "+76-236-7407",
        isVerified: true,
        rating: 4.5,
        reviewCount: 87,
        quote: "Welcome to my skagway home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Bed And Breakfast",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Christopher Thomas",
        background: "Expat who has lived in the city for over a decade",
        maxGuests: 3,
        languages: ["English", "German", "French"],
        curfew: "15:00 AM",
        isPopular: true,
        guestPolicy: ["Pet-friendly accommodation", "Great for couples", "Family-friendly environment", "Not suitable for infants (under 2 years)"],
        hostingStyle: "social",
        houseRules: ["Notify host if you'll be arriving after 10 PM", "No outside guests without permission", "Recycle according to local guidelines", "No loud music after 9 PM"],
        location: {
          city: "Skagway",
          region: "Alaska",
          country: "United States",
          coordinates: { lat: 39.924094673967474, lng: -0.06033163396677024 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "christopher.thomas@example.com",
        phoneNumber: "+99-221-7372",
        isVerified: true,
        rating: 4.3,
        reviewCount: 19,
        quote: "Staying with me means experiencing skagway like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Language Immersion",
      }
    ]
  }
];
