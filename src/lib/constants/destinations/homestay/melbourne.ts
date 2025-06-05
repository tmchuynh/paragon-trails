import { Homestay } from "@/lib/interfaces/people/homestay";

export const melbourneHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Bruce Jansen",
        background: "Retired schoolteacher passionate about sharing local traditions",
        maxGuests: 2,
        languages: ["Bengali", "Hindi", "Korean", "English"],
        curfew: "21:00 PM",
        isPopular: true,
        guestPolicy: ["Suitable for business travelers", "Senior-friendly accommodations", "No children under 12", "Smoking allowed in designated areas only"],
        hostingStyle: "private",
        houseRules: ["Kitchen closed after 8 PM", "No pets allowed", "Wi-Fi password will be provided upon arrival"],
        location: {
          city: "Melbourne",
          region: "Asia Pacific",
          country: "Australia",
          coordinates: { lat: 40.00303328157442, lng: -0.06242270411288309 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "12:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "bruce.jansen@example.com",
        isVerified: true,
        rating: 4.3,
        reviewCount: 63,
        quote: "My home is your home in melbourne. I look forward to making your stay memorable and authentic.",
        stayType: "Self Catering",
      },
      {
        name: "Ahmed Wells",
        background: "Organic farmer with a small plot on the outskirts of town",
        maxGuests: 4,
        languages: ["Urdu", "Malay", "Chinese", "English"],
        curfew: "24:00 PM",
        isPopular: true,
        guestPolicy: ["Senior-friendly accommodations", "Pet-friendly accommodation", "Ideal for solo travelers", "Great for couples"],
        hostingStyle: "laid-back",
        houseRules: ["Remove shoes when entering the home", "No loud music after 9 PM", "Kitchen closed after 8 PM", "No pets allowed", "Laundry available on weekends only"],
        location: {
          city: "Melbourne",
          region: "Asia Pacific",
          country: "Australia",
          coordinates: { lat: 39.98505091305427, lng: -0.09370139601489336 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "ahmed.wells@example.com",
        isVerified: true,
        rating: 3.6,
        reviewCount: 30,
        quote: "My home is your home in melbourne. I look forward to making your stay memorable and authentic.",
        stayType: "Private Room In Home",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Rajesh Hall",
        background: "Yoga instructor offering morning sessions",
        maxGuests: 3,
        languages: ["Japanese", "Vietnamese", "Tagalog", "English"],
        curfew: "23:00 PM",
        isPopular: true,
        guestPolicy: ["Smoking allowed in designated areas only", "No parties or events", "No children under 12", "LGBTQ+ friendly"],
        hostingStyle: "laid-back",
        houseRules: ["No pets allowed", "Remove shoes when entering the home", "Quiet hours after 10 PM", "No food in the bedrooms", "Breakfast is self-serve between 7-9 AM", "Please clean up after yourself in common areas"],
        location: {
          city: "Melbourne",
          region: "Asia Pacific",
          country: "Australia",
          coordinates: { lat: 40.05902972685143, lng: -0.012371390200645621 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "rajesh.hall@example.com",
        phoneNumber: "+92-630-9642",
        isVerified: true,
        rating: 4.7,
        reviewCount: 37,
        quote: "Staying with me means experiencing melbourne like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Shared Room",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Oliver Mitchell",
        background: "Yoga instructor offering morning sessions",
        maxGuests: 1,
        languages: ["Hindi", "Thai", "Korean", "English"],
        curfew: "13:00 AM",
        isPopular: false,
        guestPolicy: ["LGBTQ+ friendly", "Accessible for guests with mobility issues", "Suitable for business travelers", "Suitable for digital nomads"],
        hostingStyle: "laid-back",
        houseRules: ["Please clean up after yourself in common areas", "Respect shared spaces", "Quiet hours after 10 PM", "Breakfast is self-serve between 7-9 AM", "Lock the door when leaving the house", "Recycle according to local guidelines"],
        location: {
          city: "Melbourne",
          region: "Asia Pacific",
          country: "Australia",
          coordinates: { lat: 39.94592807346394, lng: -0.08739143942958023 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "oliver.mitchell@example.com",
        isVerified: true,
        rating: 4,
        reviewCount: 20,
        quote: "My home is your home in melbourne. I look forward to making your stay memorable and authentic.",
        stayType: "Urban Apartment Stay",
      },
      {
        name: "Edward Dixon",
        background: "Retired schoolteacher passionate about sharing local traditions",
        maxGuests: 1,
        languages: ["Korean", "Japanese", "Hindi", "English"],
        curfew: "13:00 AM",
        isPopular: true,
        guestPolicy: ["Not suitable for infants (under 2 years)", "Accessible for guests with mobility issues"],
        hostingStyle: "laid-back",
        houseRules: ["Quiet hours after 10 PM", "No outside guests without permission", "Recycle according to local guidelines", "Kitchen closed after 8 PM"],
        location: {
          city: "Melbourne",
          region: "Asia Pacific",
          country: "Australia",
          coordinates: { lat: 40.003369267703704, lng: 0.041439767017752704 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "edward.dixon@example.com",
        phoneNumber: "+98-428-8674",
        isVerified: true,
        rating: 4,
        reviewCount: 69,
        quote: "Staying with me means experiencing melbourne like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Private Room In Home",
      },
      {
        name: "Margaret Brooks",
        background: "Artist who loves sharing local cultural insights",
        maxGuests: 3,
        languages: ["Tagalog", "Malay", "Urdu", "English"],
        curfew: "13:00 AM",
        isPopular: false,
        guestPolicy: ["No children under 12", "No parties or events"],
        hostingStyle: "hands-on",
        houseRules: ["Notify host if you'll be arriving after 10 PM", "Quiet hours after 10 PM", "No food in the bedrooms", "Please clean up after yourself in common areas"],
        location: {
          city: "Melbourne",
          region: "Asia Pacific",
          country: "Australia",
          coordinates: { lat: 40.02211124810779, lng: -0.0352594047794899 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "margaret.brooks@example.com",
        isVerified: true,
        rating: 4.9,
        reviewCount: 32,
        quote: "Life in melbourne has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Volunteer Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Amy Jackson",
        background: "Long-time resident and community organizer",
        maxGuests: 1,
        languages: ["Vietnamese", "Tagalog", "Urdu", "Chinese", "English"],
        curfew: "24:00 PM",
        isPopular: true,
        guestPolicy: ["Pet-friendly accommodation", "Not suitable for infants (under 2 years)", "Great for couples"],
        hostingStyle: "hands-on",
        houseRules: ["Please clean up after yourself in common areas", "Notify host if you'll be arriving after 10 PM", "No food in the bedrooms", "Respect shared spaces", "Pets welcome"],
        location: {
          city: "Melbourne",
          region: "Asia Pacific",
          country: "Australia",
          coordinates: { lat: 39.97072406589048, lng: -0.06080623575264297 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "amy.jackson@example.com",
        isVerified: true,
        rating: 3.7,
        reviewCount: 26,
        quote: "Life in melbourne has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Host Family Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Logan Bennett",
        background: "Environmental activist working on local sustainability projects",
        maxGuests: 6,
        languages: ["Chinese", "Korean", "Japanese", "English"],
        curfew: "15:00 AM",
        isPopular: false,
        guestPolicy: ["Not suitable for infants (under 2 years)", "Family-friendly environment", "Smoking allowed in designated areas only"],
        hostingStyle: "private",
        houseRules: ["Remove shoes when entering the home", "Lock the door when leaving the house", "Please conserve water and electricity", "Quiet hours after 10 PM", "No pets allowed", "Laundry available on weekends only"],
        location: {
          city: "Melbourne",
          region: "Asia Pacific",
          country: "Australia",
          coordinates: { lat: 39.97280966196801, lng: -0.0029758682697702127 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "logan.bennett@example.com",
        phoneNumber: "+5-800-1370",
        isVerified: true,
        rating: 4.9,
        reviewCount: 74,
        quote: "Life in melbourne has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Academic Homestay",
      }
    ]
  }
];
