import { Homestay } from "@/lib/interfaces/people/homestay";

export const montevideoHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Jack Carter",
        background: "Language teacher who enjoys helping visitors learn the local tongue",
        maxGuests: 2,
        languages: ["English", "Portuguese", "Spanish"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: ["Great for couples", "Pet-friendly accommodation", "Perfect for long-term stays", "Accessible for guests with mobility issues"],
        hostingStyle: "laid-back",
        houseRules: ["Remove shoes when entering the home", "Quiet hours after 10 PM", "Breakfast is self-serve between 7-9 AM", "Wi-Fi password will be provided upon arrival", "Pets welcome", "Recycle according to local guidelines"],
        location: {
          city: "Montevideo",
          region: "South America",
          country: "Uruguay",
          coordinates: { lat: 39.96508182172299, lng: -0.08489861361012215 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "jack.carter@example.com",
        phoneNumber: "+84-801-10625",
        isVerified: false,
        rating: 4.1,
        reviewCount: 25,
        quote: "I've lived in montevideo all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Traditional Homestay",
      },
      {
        name: "Valentina Harris",
        background: "Organic farmer with a small plot on the outskirts of town",
        maxGuests: 3,
        languages: ["English", "Aymara", "Haitian"],
        curfew: "21:00 PM",
        isPopular: true,
        guestPolicy: ["Suitable for digital nomads", "Ideal for solo travelers", "Great for couples", "No children under 12"],
        hostingStyle: "private",
        houseRules: ["Wi-Fi password will be provided upon arrival", "No pets allowed", "No food in the bedrooms", "Please clean up after yourself in common areas", "Respect shared spaces", "Lock the door when leaving the house"],
        location: {
          city: "Montevideo",
          region: "South America",
          country: "Uruguay",
          coordinates: { lat: 39.900858051378066, lng: -0.023797690781810793 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "valentina.harris@example.com",
        isVerified: true,
        rating: 4.9,
        reviewCount: 91,
        quote: "Welcome to my montevideo home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Heritage Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Paul Holloway",
        background: "Local chef specializing in traditional cuisines",
        maxGuests: 3,
        languages: ["English", "Portuguese", "Haitian"],
        curfew: "21:00 PM",
        isPopular: true,
        guestPolicy: ["Pet-friendly accommodation", "Suitable for business travelers", "Great for couples"],
        hostingStyle: "laid-back",
        houseRules: ["No food in the bedrooms", "Recycle according to local guidelines", "No loud music after 9 PM", "Respect shared spaces", "No outside guests without permission"],
        location: {
          city: "Montevideo",
          region: "South America",
          country: "Uruguay",
          coordinates: { lat: 40.07010766197987, lng: -0.047327586536073434 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "paul.holloway@example.com",
        phoneNumber: "+75-798-4336",
        isVerified: true,
        rating: 3.6,
        reviewCount: 55,
        quote: "Staying with me means experiencing montevideo like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Heritage Stay",
      }
    ]
  }
];
