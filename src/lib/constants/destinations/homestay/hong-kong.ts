import { Homestay } from "@/lib/interfaces/people/homestay";

export const hongKongHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Charlotte Williams",
        background: "Retired schoolteacher passionate about sharing local traditions",
        maxGuests: 1,
        languages: ["Chinese", "Korean", "Indonesian", "Tagalog", "English"],
        curfew: "23:00 PM",
        isPopular: true,
        guestPolicy: ["No children under 12", "Smoking allowed in designated areas only"],
        hostingStyle: "hands-on",
        houseRules: ["Please conserve water and electricity", "No smoking indoors", "Breakfast is self-serve between 7-9 AM"],
        location: {
          city: "Hong kong",
          region: "Asia Pacific",
          country: "China",
          coordinates: { lat: 39.919605787043125, lng: 0.003750428098268005 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "charlotte.williams@example.com",
        isVerified: true,
        rating: 3.8,
        reviewCount: 10,
        quote: "I've lived in hong-kong all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Self Catering",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Amy Spencer",
        background: "Entrepreneur running a local business",
        maxGuests: 3,
        languages: ["Chinese", "Korean", "Malay", "English"],
        curfew: "15:00 AM",
        isPopular: false,
        guestPolicy: ["Great for couples", "Senior-friendly accommodations"],
        hostingStyle: "family-oriented",
        houseRules: ["No outside guests without permission", "Respect shared spaces", "Recycle according to local guidelines", "Pets welcome", "Breakfast is self-serve between 7-9 AM"],
        location: {
          city: "Hong kong",
          region: "Asia Pacific",
          country: "China",
          coordinates: { lat: 40.07930349584636, lng: -0.0004781537005181524 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "amy.spencer@example.com",
        phoneNumber: "+40-286-7184",
        isVerified: true,
        rating: 4.2,
        reviewCount: 20,
        quote: "Staying with me means experiencing hong-kong like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Culinary Homestay",
      },
      {
        name: "Ibrahim Mason",
        background: "Long-time resident and community organizer",
        maxGuests: 5,
        languages: ["Urdu", "Hindi", "Bengali", "English"],
        curfew: "21:00 PM",
        isPopular: false,
        guestPolicy: ["Great for couples", "Ideal for solo travelers"],
        hostingStyle: "social",
        houseRules: ["Lock the door when leaving the house", "Recycle according to local guidelines", "Please clean up after yourself in common areas", "No food in the bedrooms"],
        location: {
          city: "Hong kong",
          region: "Asia Pacific",
          country: "China",
          coordinates: { lat: 39.92877727872885, lng: -0.08816678300476655 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "ibrahim.mason@example.com",
        phoneNumber: "+64-1012-7992",
        isVerified: true,
        rating: 3.5,
        reviewCount: 21,
        quote: "Welcome to my hong-kong home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Private Room In Home",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Lawrence Kim",
        background: "Local musician involved in the cultural scene",
        maxGuests: 3,
        languages: ["Japanese", "Indonesian", "Tagalog", "English"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: ["Ideal for solo travelers", "No parties or events"],
        hostingStyle: "laid-back",
        houseRules: ["Breakfast is self-serve between 7-9 AM", "Quiet hours after 10 PM", "No loud music after 9 PM", "Kitchen closed after 8 PM", "Lock the door when leaving the house"],
        location: {
          city: "Hong kong",
          region: "Asia Pacific",
          country: "China",
          coordinates: { lat: 39.9371852865301, lng: 0.05836176404988344 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "lawrence.kim@example.com",
        phoneNumber: "+64-622-10437",
        isVerified: true,
        rating: 3.7,
        reviewCount: 12,
        quote: "Life in hong-kong has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Art Or Craft Stay",
      }
    ]
  }
];
