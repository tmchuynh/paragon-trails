import { Homestay } from "@/lib/interfaces/people/homestay";

export const parisHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Ashley Carter",
        background: "Long-time resident and community organizer",
        maxGuests: 3,
        languages: ["English", "Russian", "French"],
        curfew: "14:00 AM",
        isPopular: false,
        guestPolicy: ["Senior-friendly accommodations", "No children under 12", "Suitable for digital nomads"],
        hostingStyle: "social",
        houseRules: ["Quiet hours after 10 PM", "Remove shoes when entering the home", "Notify host if you'll be arriving after 10 PM", "Kitchen closed after 8 PM", "No smoking indoors"],
        location: {
          city: "Paris",
          region: "Northern Europe",
          country: "France",
          coordinates: { lat: 39.92403279720792, lng: -0.07674949026276812 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "ashley.carter@example.com",
        phoneNumber: "+25-886-3487",
        isVerified: true,
        rating: 4.7,
        reviewCount: 54,
        quote: "I've lived in paris all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Pet Friendly Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Gerald Silva",
        background: "Local musician involved in the cultural scene",
        maxGuests: 2,
        languages: ["English", "Swedish", "Finnish", "German"],
        curfew: "24:00 PM",
        isPopular: true,
        guestPolicy: ["Not suitable for infants (under 2 years)", "No parties or events", "Perfect for long-term stays", "Great for couples"],
        hostingStyle: "hands-on",
        houseRules: ["Please conserve water and electricity", "No pets allowed", "Quiet hours after 10 PM", "No smoking indoors", "Pets welcome"],
        location: {
          city: "Paris",
          region: "Northern Europe",
          country: "France",
          coordinates: { lat: 40.024118192128306, lng: -0.0639200389314408 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "12:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "gerald.silva@example.com",
        isVerified: true,
        rating: 3.9,
        reviewCount: 90,
        quote: "Staying with me means experiencing paris like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Farm Stay",
      },
      {
        name: "Ahmed Hall",
        background: "Retired schoolteacher passionate about sharing local traditions",
        maxGuests: 5,
        languages: ["English", "Polish", "German"],
        curfew: "13:00 AM",
        isPopular: false,
        guestPolicy: ["No parties or events", "Smoking allowed in designated areas only", "Children welcome", "Senior-friendly accommodations"],
        hostingStyle: "family-oriented",
        houseRules: ["No smoking indoors", "Lock the door when leaving the house", "Kitchen closed after 8 PM"],
        location: {
          city: "Paris",
          region: "Northern Europe",
          country: "France",
          coordinates: { lat: 39.90820180298309, lng: -0.01776378266052525 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "ahmed.hall@example.com",
        phoneNumber: "+40-903-4906",
        isVerified: true,
        rating: 3.8,
        reviewCount: 86,
        quote: "Staying with me means experiencing paris like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Bed And Breakfast",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Noah Hayes",
        background: "Yoga instructor offering morning sessions",
        maxGuests: 4,
        languages: ["English", "Russian", "Polish", "French"],
        curfew: "22:00 PM",
        isPopular: true,
        guestPolicy: ["No children under 12", "Smoking allowed in designated areas only", "Family-friendly environment", "Pet-friendly accommodation"],
        hostingStyle: "laid-back",
        houseRules: ["Lock the door when leaving the house", "Pets welcome", "Remove shoes when entering the home"],
        location: {
          city: "Paris",
          region: "Northern Europe",
          country: "France",
          coordinates: { lat: 40.03523702171094, lng: -0.009214682119203885 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "noah.hayes@example.com",
        isVerified: true,
        rating: 4.6,
        reviewCount: 77,
        quote: "I've lived in paris all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Culinary Homestay",
      },
      {
        name: "Noah Rossi",
        background: "Local musician involved in the cultural scene",
        maxGuests: 2,
        languages: ["English", "Spanish", "French"],
        curfew: "22:00 PM",
        isPopular: false,
        guestPolicy: ["Senior-friendly accommodations", "Accessible for guests with mobility issues", "Smoking allowed in designated areas only", "Great for couples"],
        hostingStyle: "private",
        houseRules: ["Wi-Fi password will be provided upon arrival", "Quiet hours after 10 PM", "Lock the door when leaving the house", "No food in the bedrooms"],
        location: {
          city: "Paris",
          region: "Northern Europe",
          country: "France",
          coordinates: { lat: 40.014973843662005, lng: 0.021623096657633137 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "noah.rossi@example.com",
        phoneNumber: "+54-212-1341",
        isVerified: true,
        rating: 4.6,
        reviewCount: 48,
        quote: "I've lived in paris all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Academic Homestay",
      }
    ]
  }
];
