import { Homestay } from "@/lib/interfaces/people/homestay";

export const tokyoHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Mia Wilson",
        background: "Expat who has lived in the city for over a decade",
        maxGuests: 6,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "14:00 AM",
        isPopular: true,
        guestPolicy: ["Suitable for business travelers", "Smoking allowed in designated areas only"],
        hostingStyle: "private",
        houseRules: ["Recycle according to local guidelines", "Please conserve water and electricity", "Remove shoes when entering the home", "Wi-Fi password will be provided upon arrival", "No loud music after 9 PM"],
        location: {
          city: "tokyo",
          country: "undefined",
          coordinates: { lat: 40.03849244268157, lng: -0.05416316480934041 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "mia.wilson@example.com",
        isVerified: true,
        rating: 4.2,
        reviewCount: 96,
        quote: "Staying with me means experiencing tokyo like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "villa-stay",
      },
      {
        name: "Evelyn Wilson",
        background: "Digital nomad who settled in the city after falling in love with it",
        maxGuests: 5,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "21:00 PM",
        isPopular: false,
        guestPolicy: ["Smoking allowed in designated areas only", "Suitable for business travelers", "Family-friendly environment", "Perfect for long-term stays"],
        hostingStyle: "laid-back",
        houseRules: ["Wi-Fi password will be provided upon arrival", "No loud music after 9 PM", "Laundry available on weekends only", "No food in the bedrooms", "Lock the door when leaving the house", "No smoking indoors"],
        location: {
          city: "tokyo",
          country: "undefined",
          coordinates: { lat: 40.01935146428377, lng: -0.052235375391306564 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "evelyn.wilson@example.com",
        phoneNumber: "+33-618-10637",
        isVerified: true,
        rating: 4.9,
        reviewCount: 21,
        quote: "I've lived in tokyo all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "urban-apartment-stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Ava Nakamura",
        background: "Environmental activist working on local sustainability projects",
        maxGuests: 3,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "14:00 AM",
        isPopular: false,
        guestPolicy: ["LGBTQ+ friendly", "No parties or events", "Suitable for business travelers"],
        hostingStyle: "social",
        houseRules: ["No pets allowed", "No loud music after 9 PM", "Kitchen closed after 8 PM", "No smoking indoors"],
        location: {
          city: "tokyo",
          country: "undefined",
          coordinates: { lat: 40.03915140170411, lng: 0.045469857378456935 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "ava.nakamura@example.com",
        phoneNumber: "+14-109-9271",
        isVerified: true,
        rating: 4.8,
        reviewCount: 39,
        quote: "I've lived in tokyo all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "heritage-stay",
      }
    ]
  }
];
