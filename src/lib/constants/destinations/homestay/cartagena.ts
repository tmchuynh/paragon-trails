import { Homestay } from "@/lib/interfaces/people/homestay";

export const cartagenaHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Nicole Jennings",
        background: "Entrepreneur running a local business",
        maxGuests: 3,
        languages: ["English", "Aymara", "Portuguese"],
        curfew: "22:00 PM",
        isPopular: true,
        guestPolicy: ["Senior-friendly accommodations", "Ideal for solo travelers", "Perfect for long-term stays"],
        hostingStyle: "private",
        houseRules: ["Kitchen closed after 8 PM", "Remove shoes when entering the home", "Notify host if you'll be arriving after 10 PM", "Pets welcome", "No outside guests without permission", "Quiet hours after 10 PM"],
        location: {
          city: "Cartagena",
          region: "Caribbean",
          country: "Colombia",
          coordinates: { lat: 40.0899078830115, lng: 0.08937849521269889 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "12:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "nicole.jennings@example.com",
        isVerified: true,
        rating: 4.8,
        reviewCount: 46,
        quote: "Life in cartagena has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Self Catering",
      },
      {
        name: "Ibrahim Anderson",
        background: "Expat who has lived in the city for over a decade",
        maxGuests: 2,
        languages: ["English", "Quechua", "Aymara"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: ["Great for couples", "Suitable for digital nomads", "Senior-friendly accommodations"],
        hostingStyle: "laid-back",
        houseRules: ["Breakfast is self-serve between 7-9 AM", "Notify host if you'll be arriving after 10 PM", "Wi-Fi password will be provided upon arrival", "No food in the bedrooms", "Quiet hours after 10 PM"],
        location: {
          city: "Cartagena",
          region: "Caribbean",
          country: "Colombia",
          coordinates: { lat: 39.962361923337, lng: 0.029012576673589002 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "ibrahim.anderson@example.com",
        phoneNumber: "+71-1081-10681",
        isVerified: true,
        rating: 3.8,
        reviewCount: 86,
        quote: "Welcome to my cartagena home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Heritage Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Justin Mason",
        background: "Retired schoolteacher passionate about sharing local traditions",
        maxGuests: 1,
        languages: ["English", "Guarani", "Aymara"],
        curfew: "13:00 AM",
        isPopular: false,
        guestPolicy: ["No parties or events", "Not suitable for infants (under 2 years)", "LGBTQ+ friendly", "Smoking allowed in designated areas only"],
        hostingStyle: "hands-on",
        houseRules: ["Quiet hours after 10 PM", "Lock the door when leaving the house", "No food in the bedrooms", "No outside guests without permission"],
        location: {
          city: "Cartagena",
          region: "Caribbean",
          country: "Colombia",
          coordinates: { lat: 39.964973550815785, lng: 0.0002987818096724659 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "justin.mason@example.com",
        isVerified: true,
        rating: 3.8,
        reviewCount: 21,
        quote: "I've lived in cartagena all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Culinary Homestay",
      },
      {
        name: "Boris Warren",
        background: "Former tour guide with extensive knowledge of local history",
        maxGuests: 1,
        languages: ["English", "Aymara", "Spanish"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: ["Children welcome", "Not suitable for infants (under 2 years)"],
        hostingStyle: "social",
        houseRules: ["Please conserve water and electricity", "Lock the door when leaving the house", "Wi-Fi password will be provided upon arrival"],
        location: {
          city: "Cartagena",
          region: "Caribbean",
          country: "Colombia",
          coordinates: { lat: 40.00443078623769, lng: 0.059352369817168155 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "boris.warren@example.com",
        isVerified: true,
        rating: 3.8,
        reviewCount: 34,
        quote: "Welcome to my cartagena home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Guest Suite",
      }
    ]
  }
];
