import { Homestay } from "@/lib/interfaces/people/homestay";

export const veniceHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Sophia Ivanov",
        background: "Former tour guide with extensive knowledge of local history",
        maxGuests: 1,
        languages: ["English", "Finnish", "German"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: ["Smoking allowed in designated areas only", "Suitable for business travelers"],
        hostingStyle: "private",
        houseRules: ["No pets allowed", "No loud music after 9 PM", "Pets welcome", "Lock the door when leaving the house"],
        location: {
          city: "Venice",
          region: "Mediterranean",
          country: "Italy",
          coordinates: { lat: 39.99714565773478, lng: 0.0887599193053373 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "sophia.ivanov@example.com",
        isVerified: true,
        rating: 4.6,
        reviewCount: 7,
        quote: "Staying with me means experiencing venice like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Language Immersion",
      },
      {
        name: "Juan Garcia",
        background: "Long-time resident and community organizer",
        maxGuests: 3,
        languages: ["English", "French", "Russian"],
        curfew: "22:00 PM",
        isPopular: false,
        guestPolicy: ["Accessible for guests with mobility issues", "LGBTQ+ friendly", "No parties or events"],
        hostingStyle: "private",
        houseRules: ["Notify host if you'll be arriving after 10 PM", "Please clean up after yourself in common areas", "No pets allowed", "Kitchen closed after 8 PM"],
        location: {
          city: "Venice",
          region: "Mediterranean",
          country: "Italy",
          coordinates: { lat: 39.92050151861053, lng: 0.0161955750089863 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "juan.garcia@example.com",
        phoneNumber: "+97-974-6215",
        isVerified: true,
        rating: 4.7,
        reviewCount: 61,
        quote: "Staying with me means experiencing venice like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Guest Suite",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Ronald Smith",
        background: "Local historian researching regional traditions",
        maxGuests: 1,
        languages: ["English", "Russian", "Finnish"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: ["Accessible for guests with mobility issues", "LGBTQ+ friendly", "Smoking allowed in designated areas only"],
        hostingStyle: "family-oriented",
        houseRules: ["No outside guests without permission", "Lock the door when leaving the house", "No food in the bedrooms", "Respect shared spaces"],
        location: {
          city: "Venice",
          region: "Mediterranean",
          country: "Italy",
          coordinates: { lat: 39.944625692082376, lng: -0.04529795686464815 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "ronald.smith@example.com",
        isVerified: true,
        rating: 4.5,
        reviewCount: 29,
        quote: "I've lived in venice all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Urban Apartment Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Jack Russell",
        background: "Local chef specializing in traditional cuisines",
        maxGuests: 6,
        languages: ["English", "Portuguese", "Polish"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: ["Senior-friendly accommodations", "Children welcome", "Suitable for business travelers", "LGBTQ+ friendly"],
        hostingStyle: "hands-on",
        houseRules: ["Recycle according to local guidelines", "No smoking indoors", "Quiet hours after 10 PM", "Breakfast is self-serve between 7-9 AM"],
        location: {
          city: "Venice",
          region: "Mediterranean",
          country: "Italy",
          coordinates: { lat: 40.053413997207464, lng: 0.06758261695395068 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "jack.russell@example.com",
        phoneNumber: "+94-1081-8768",
        isVerified: true,
        rating: 4.4,
        reviewCount: 101,
        quote: "Life in venice has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Volunteer Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Jack Cooper",
        background: "Former tour guide with extensive knowledge of local history",
        maxGuests: 4,
        languages: ["English", "Norwegian", "Swedish"],
        curfew: "22:00 PM",
        isPopular: true,
        guestPolicy: ["Suitable for digital nomads", "Not suitable for infants (under 2 years)"],
        hostingStyle: "laid-back",
        houseRules: ["Lock the door when leaving the house", "Quiet hours after 10 PM", "Notify host if you'll be arriving after 10 PM"],
        location: {
          city: "Venice",
          region: "Mediterranean",
          country: "Italy",
          coordinates: { lat: 39.983262089604985, lng: -0.0276475002216742 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "12:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "jack.cooper@example.com",
        phoneNumber: "+4-156-5427",
        isVerified: true,
        rating: 4.5,
        reviewCount: 79,
        quote: "Welcome to my venice home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Host Family Stay",
      }
    ]
  }
];
