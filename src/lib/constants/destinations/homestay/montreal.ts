import { Homestay } from "@/lib/interfaces/people/homestay";

export const montrealHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Javier Stewart",
        background: "Yoga instructor offering morning sessions",
        maxGuests: 1,
        languages: ["English", "French", "Haitian"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: ["Senior-friendly accommodations", "Suitable for digital nomads"],
        hostingStyle: "family-oriented",
        houseRules: ["Quiet hours after 10 PM", "Respect shared spaces", "Kitchen closed after 8 PM", "Pets welcome"],
        location: {
          city: "Montreal",
          region: "East Coast Canada",
          country: "Canada",
          coordinates: { lat: 40.057061082442544, lng: 0.07649761541097586 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "javier.stewart@example.com",
        isVerified: true,
        rating: 4.4,
        reviewCount: 61,
        quote: "Staying with me means experiencing montreal like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Urban Apartment Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Julie Dunn",
        background: "Artist who loves sharing local cultural insights",
        maxGuests: 2,
        languages: ["English", "Aymara", "Guarani"],
        curfew: "14:00 AM",
        isPopular: false,
        guestPolicy: ["Not suitable for infants (under 2 years)", "LGBTQ+ friendly", "Accessible for guests with mobility issues", "Perfect for long-term stays"],
        hostingStyle: "family-oriented",
        houseRules: ["Please clean up after yourself in common areas", "Lock the door when leaving the house", "Quiet hours after 10 PM", "No outside guests without permission"],
        location: {
          city: "Montreal",
          region: "East Coast Canada",
          country: "Canada",
          coordinates: { lat: 39.978086386057775, lng: -0.04169878122705968 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "julie.dunn@example.com",
        phoneNumber: "+67-412-4547",
        isVerified: true,
        rating: 3.5,
        reviewCount: 70,
        quote: "I've lived in montreal all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Shared Room",
      },
      {
        name: "Roy Smith",
        background: "Former tour guide with extensive knowledge of local history",
        maxGuests: 4,
        languages: ["English", "Aymara", "Portuguese"],
        curfew: "15:00 AM",
        isPopular: true,
        guestPolicy: ["Family-friendly environment", "Perfect for long-term stays"],
        hostingStyle: "laid-back",
        houseRules: ["No outside guests without permission", "Quiet hours after 10 PM", "Please conserve water and electricity", "Please clean up after yourself in common areas"],
        location: {
          city: "Montreal",
          region: "East Coast Canada",
          country: "Canada",
          coordinates: { lat: 39.98422714296987, lng: -0.05639324468760059 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "roy.smith@example.com",
        phoneNumber: "+82-1093-3635",
        isVerified: false,
        rating: 4,
        reviewCount: 80,
        quote: "My home is your home in montreal. I look forward to making your stay memorable and authentic.",
        stayType: "Bed And Breakfast",
      },
      {
        name: "Gerald Baker",
        background: "Entrepreneur running a local business",
        maxGuests: 2,
        languages: ["English", "Haitian", "Quechua", "Spanish"],
        curfew: "22:00 PM",
        isPopular: false,
        guestPolicy: ["Senior-friendly accommodations", "Ideal for solo travelers"],
        hostingStyle: "private",
        houseRules: ["Please conserve water and electricity", "No loud music after 9 PM", "No pets allowed", "Recycle according to local guidelines", "Notify host if you'll be arriving after 10 PM"],
        location: {
          city: "Montreal",
          region: "East Coast Canada",
          country: "Canada",
          coordinates: { lat: 39.9117075995131, lng: -0.037989066138885044 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "gerald.baker@example.com",
        isVerified: false,
        rating: 4,
        reviewCount: 97,
        quote: "Staying with me means experiencing montreal like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Shared Room",
      }
    ]
  }
];
