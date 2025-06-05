import { Homestay } from "@/lib/interfaces/people/homestay";

export const glacierBayHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Mia Spencer",
        background: "Environmental activist working on local sustainability projects",
        maxGuests: 5,
        languages: ["English", "Arabic", "Spanish"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: ["No children under 12", "Not suitable for infants (under 2 years)"],
        hostingStyle: "laid-back",
        houseRules: ["Please conserve water and electricity", "Quiet hours after 10 PM", "Recycle according to local guidelines", "Laundry available on weekends only", "Pets welcome", "Respect shared spaces"],
        location: {
          city: "Glacier bay",
          region: "Alaska",
          country: "United States",
          coordinates: { lat: 39.976028474704556, lng: 0.027442699696693273 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "mia.spencer@example.com",
        phoneNumber: "+56-517-1714",
        isVerified: true,
        rating: 4.1,
        reviewCount: 67,
        quote: "Welcome to my glacier-bay home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Shared Room",
      },
      {
        name: "Zachary Anderson",
        background: "Entrepreneur running a local business",
        maxGuests: 1,
        languages: ["English", "Japanese", "Spanish"],
        curfew: "14:00 AM",
        isPopular: false,
        guestPolicy: ["Pet-friendly accommodation", "Suitable for digital nomads", "No children under 12"],
        hostingStyle: "hands-on",
        houseRules: ["No outside guests without permission", "Respect shared spaces", "Notify host if you'll be arriving after 10 PM", "Breakfast is self-serve between 7-9 AM", "No loud music after 9 PM", "Please clean up after yourself in common areas"],
        location: {
          city: "Glacier bay",
          region: "Alaska",
          country: "United States",
          coordinates: { lat: 39.99290503055137, lng: -0.03575951589836217 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "zachary.anderson@example.com",
        phoneNumber: "+52-241-3530",
        isVerified: false,
        rating: 4.9,
        reviewCount: 62,
        quote: "Staying with me means experiencing glacier-bay like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Pet Friendly Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Hiroshi Garcia",
        background: "Local musician involved in the cultural scene",
        maxGuests: 5,
        languages: ["English", "Japanese", "Chinese"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: ["Smoking allowed in designated areas only", "Not suitable for infants (under 2 years)", "Children welcome", "Accessible for guests with mobility issues"],
        hostingStyle: "private",
        houseRules: ["No loud music after 9 PM", "Wi-Fi password will be provided upon arrival", "No food in the bedrooms", "Breakfast is self-serve between 7-9 AM", "No smoking indoors", "Lock the door when leaving the house"],
        location: {
          city: "Glacier bay",
          region: "Alaska",
          country: "United States",
          coordinates: { lat: 40.097014418139786, lng: -0.028556144016538942 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "hiroshi.garcia@example.com",
        phoneNumber: "+17-569-8359",
        isVerified: true,
        rating: 4.4,
        reviewCount: 16,
        quote: "My home is your home in glacier-bay. I look forward to making your stay memorable and authentic.",
        stayType: "Art Or Craft Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Betty Gonzalez",
        background: "Local musician involved in the cultural scene",
        maxGuests: 4,
        languages: ["English", "Italian", "Arabic", "French"],
        curfew: "13:00 AM",
        isPopular: false,
        guestPolicy: ["Family-friendly environment", "Suitable for business travelers"],
        hostingStyle: "social",
        houseRules: ["Remove shoes when entering the home", "No loud music after 9 PM", "Respect shared spaces", "No outside guests without permission", "No smoking indoors", "No pets allowed"],
        location: {
          city: "Glacier bay",
          region: "Alaska",
          country: "United States",
          coordinates: { lat: 39.992868108325425, lng: -0.01345499523278329 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "betty.gonzalez@example.com",
        phoneNumber: "+42-764-6494",
        isVerified: true,
        rating: 3.6,
        reviewCount: 61,
        quote: "My home is your home in glacier-bay. I look forward to making your stay memorable and authentic.",
        stayType: "Pet Friendly Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Dennis Taylor",
        background: "Local musician involved in the cultural scene",
        maxGuests: 1,
        languages: ["English", "Spanish", "Chinese"],
        curfew: "22:00 PM",
        isPopular: false,
        guestPolicy: ["No children under 12", "Senior-friendly accommodations"],
        hostingStyle: "private",
        houseRules: ["No smoking indoors", "Recycle according to local guidelines", "Notify host if you'll be arriving after 10 PM", "Please clean up after yourself in common areas", "No food in the bedrooms"],
        location: {
          city: "Glacier bay",
          region: "Alaska",
          country: "United States",
          coordinates: { lat: 40.090683595418646, lng: 0.051547227665537015 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "dennis.taylor@example.com",
        phoneNumber: "+38-403-2814",
        isVerified: true,
        rating: 4.1,
        reviewCount: 79,
        quote: "Staying with me means experiencing glacier-bay like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Volunteer Stay",
      }
    ]
  }
];
