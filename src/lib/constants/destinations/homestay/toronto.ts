import { Homestay } from "@/lib/interfaces/people/homestay";

export const torontoHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Lucas Jansen",
        background: "Former tour guide with extensive knowledge of local history",
        maxGuests: 6,
        languages: ["English", "Haitian", "Portuguese"],
        curfew: "13:00 AM",
        isPopular: false,
        guestPolicy: ["Suitable for digital nomads", "No parties or events", "Smoking allowed in designated areas only"],
        hostingStyle: "hands-on",
        houseRules: ["Remove shoes when entering the home", "Please clean up after yourself in common areas", "Please conserve water and electricity", "No smoking indoors", "No food in the bedrooms", "Laundry available on weekends only"],
        location: {
          city: "Toronto",
          region: "East Coast Canada",
          country: "Canada",
          coordinates: { lat: 39.96074248303442, lng: -0.09767964184672434 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "lucas.jansen@example.com",
        phoneNumber: "+22-951-6745",
        isVerified: true,
        rating: 3.7,
        reviewCount: 84,
        quote: "Welcome to my toronto home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Host Family Stay",
      },
      {
        name: "Sarah Murray",
        background: "Long-time resident and community organizer",
        maxGuests: 2,
        languages: ["English", "Guarani", "Spanish"],
        curfew: "13:00 AM",
        isPopular: false,
        guestPolicy: ["Perfect for long-term stays", "Ideal for solo travelers", "Not suitable for infants (under 2 years)"],
        hostingStyle: "laid-back",
        houseRules: ["Please conserve water and electricity", "Respect shared spaces", "Kitchen closed after 8 PM", "No smoking indoors", "Laundry available on weekends only", "Remove shoes when entering the home"],
        location: {
          city: "Toronto",
          region: "East Coast Canada",
          country: "Canada",
          coordinates: { lat: 39.97915079207758, lng: 0.07654785846363785 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "sarah.murray@example.com",
        isVerified: true,
        rating: 4.2,
        reviewCount: 83,
        quote: "Life in toronto has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Language Immersion",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Dennis Clark",
        background: "Entrepreneur running a local business",
        maxGuests: 4,
        languages: ["English", "French", "Aymara"],
        curfew: "15:00 AM",
        isPopular: false,
        guestPolicy: ["Pet-friendly accommodation", "Smoking allowed in designated areas only", "No parties or events"],
        hostingStyle: "laid-back",
        houseRules: ["No loud music after 9 PM", "Laundry available on weekends only", "Please clean up after yourself in common areas", "Wi-Fi password will be provided upon arrival", "No outside guests without permission"],
        location: {
          city: "Toronto",
          region: "East Coast Canada",
          country: "Canada",
          coordinates: { lat: 40.026623749512765, lng: 0.04554749704899383 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "dennis.clark@example.com",
        phoneNumber: "+84-320-5223",
        isVerified: true,
        rating: 4.4,
        reviewCount: 20,
        quote: "My home is your home in toronto. I look forward to making your stay memorable and authentic.",
        stayType: "Heritage Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Nathan Grant",
        background: "Local chef specializing in traditional cuisines",
        maxGuests: 5,
        languages: ["English", "Guarani", "Portuguese"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: ["No parties or events", "Pet-friendly accommodation", "Ideal for solo travelers", "Not suitable for infants (under 2 years)"],
        hostingStyle: "laid-back",
        houseRules: ["Please conserve water and electricity", "Notify host if you'll be arriving after 10 PM", "Lock the door when leaving the house", "Please clean up after yourself in common areas"],
        location: {
          city: "Toronto",
          region: "East Coast Canada",
          country: "Canada",
          coordinates: { lat: 39.989028657582004, lng: 0.02392459848600939 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "12:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "nathan.grant@example.com",
        phoneNumber: "+70-219-9990",
        isVerified: true,
        rating: 3.7,
        reviewCount: 21,
        quote: "I've lived in toronto all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Pet Friendly Stay",
      },
      {
        name: "Maya Knight",
        background: "Digital nomad who settled in the city after falling in love with it",
        maxGuests: 6,
        languages: ["English", "Portuguese", "Spanish"],
        curfew: "22:00 PM",
        isPopular: true,
        guestPolicy: ["Suitable for digital nomads", "Great for couples"],
        hostingStyle: "private",
        houseRules: ["No pets allowed", "Kitchen closed after 8 PM", "Wi-Fi password will be provided upon arrival", "No loud music after 9 PM"],
        location: {
          city: "Toronto",
          region: "East Coast Canada",
          country: "Canada",
          coordinates: { lat: 40.016305951630635, lng: 0.025298904993154597 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "maya.knight@example.com",
        phoneNumber: "+85-245-5775",
        isVerified: true,
        rating: 4.5,
        reviewCount: 5,
        quote: "I've lived in toronto all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Spiritual Or Wellness Retreat",
      }
    ]
  }
];
