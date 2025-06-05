import { Homestay } from "@/lib/interfaces/people/homestay";

export const ketchikanHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Gabriel Price",
        background: "Local historian researching regional traditions",
        maxGuests: 5,
        languages: ["English", "Russian", "Arabic"],
        curfew: "22:00 PM",
        isPopular: false,
        guestPolicy: ["Suitable for digital nomads", "Family-friendly environment", "Not suitable for infants (under 2 years)"],
        hostingStyle: "laid-back",
        houseRules: ["No pets allowed", "Wi-Fi password will be provided upon arrival", "Quiet hours after 10 PM", "No loud music after 9 PM", "Breakfast is self-serve between 7-9 AM", "Please clean up after yourself in common areas"],
        location: {
          city: "Ketchikan",
          region: "Alaska",
          country: "United States",
          coordinates: { lat: 40.050029198992206, lng: -0.015016102372561235 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "gabriel.price@example.com",
        phoneNumber: "+34-518-1260",
        isVerified: true,
        rating: 4.9,
        reviewCount: 86,
        quote: "Life in ketchikan has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Entire Home",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Fatima Holloway",
        background: "University professor with expertise in local culture",
        maxGuests: 5,
        languages: ["English", "Spanish", "Arabic", "Italian"],
        curfew: "24:00 PM",
        isPopular: true,
        guestPolicy: ["Senior-friendly accommodations", "Children welcome", "Suitable for digital nomads", "LGBTQ+ friendly"],
        hostingStyle: "family-oriented",
        houseRules: ["No food in the bedrooms", "Lock the door when leaving the house", "Breakfast is self-serve between 7-9 AM", "No pets allowed", "Recycle according to local guidelines", "No loud music after 9 PM"],
        location: {
          city: "Ketchikan",
          region: "Alaska",
          country: "United States",
          coordinates: { lat: 39.949483961491254, lng: 0.0956863748579623 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "fatima.holloway@example.com",
        phoneNumber: "+27-411-10774",
        isVerified: true,
        rating: 4.4,
        reviewCount: 51,
        quote: "My home is your home in ketchikan. I look forward to making your stay memorable and authentic.",
        stayType: "Art Or Craft Stay",
      },
      {
        name: "David Crawford",
        background: "Artist who loves sharing local cultural insights",
        maxGuests: 3,
        languages: ["English", "French", "Russian"],
        curfew: "13:00 AM",
        isPopular: true,
        guestPolicy: ["Suitable for business travelers", "LGBTQ+ friendly"],
        hostingStyle: "hands-on",
        houseRules: ["Please conserve water and electricity", "Remove shoes when entering the home", "No pets allowed", "Please clean up after yourself in common areas"],
        location: {
          city: "Ketchikan",
          region: "Alaska",
          country: "United States",
          coordinates: { lat: 39.945067356737475, lng: -0.06300895314020663 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "david.crawford@example.com",
        phoneNumber: "+28-515-4829",
        isVerified: true,
        rating: 4.6,
        reviewCount: 57,
        quote: "Staying with me means experiencing ketchikan like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Entire Home",
      }
    ]
  }
];
