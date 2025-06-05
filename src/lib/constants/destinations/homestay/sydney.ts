import { Homestay } from "@/lib/interfaces/people/homestay";

export const sydneyHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Amelia Martin",
        background: "Digital nomad who settled in the city after falling in love with it",
        maxGuests: 4,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "21:00 PM",
        isPopular: true,
        guestPolicy: ["Great for couples", "Perfect for long-term stays", "LGBTQ+ friendly"],
        hostingStyle: "family-oriented",
        houseRules: ["Remove shoes when entering the home", "Please conserve water and electricity", "No pets allowed", "No food in the bedrooms", "Laundry available on weekends only"],
        location: {
          city: "sydney",
          country: "undefined",
          coordinates: { lat: 40.04504688966834, lng: 0.0515740823306545 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "amelia.martin@example.com",
        phoneNumber: "+50-219-4212",
        isVerified: true,
        rating: 4.9,
        reviewCount: 103,
        quote: "I've lived in sydney all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "guest-suite",
      },
      {
        name: "Maria Lopez",
        background: "Local musician involved in the cultural scene",
        maxGuests: 3,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: ["Senior-friendly accommodations", "Pet-friendly accommodation", "Not suitable for infants (under 2 years)", "Family-friendly environment"],
        hostingStyle: "social",
        houseRules: ["No food in the bedrooms", "Respect shared spaces", "Remove shoes when entering the home", "No loud music after 9 PM", "No smoking indoors", "Pets welcome"],
        location: {
          city: "sydney",
          country: "undefined",
          coordinates: { lat: 40.09460983431653, lng: 0.021498209050734032 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "maria.lopez@example.com",
        phoneNumber: "+25-655-6579",
        isVerified: true,
        rating: 4.4,
        reviewCount: 53,
        quote: "Welcome to my sydney home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "shared-room",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Mei Moore",
        background: "Local chef specializing in traditional cuisines",
        maxGuests: 3,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "13:00 AM",
        isPopular: true,
        guestPolicy: ["Suitable for business travelers", "Great for couples", "Not suitable for infants (under 2 years)"],
        hostingStyle: "family-oriented",
        houseRules: ["Breakfast is self-serve between 7-9 AM", "Lock the door when leaving the house", "Please conserve water and electricity", "Remove shoes when entering the home", "Wi-Fi password will be provided upon arrival"],
        location: {
          city: "sydney",
          country: "undefined",
          coordinates: { lat: 40.00260119944614, lng: -0.017925949052717632 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "mei.moore@example.com",
        isVerified: true,
        rating: 3.5,
        reviewCount: 46,
        quote: "I've lived in sydney all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "language-immersion",
      },
      {
        name: "Henry Wilson",
        background: "Organic farmer with a small plot on the outskirts of town",
        maxGuests: 2,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: ["Senior-friendly accommodations", "Not suitable for infants (under 2 years)", "Ideal for solo travelers", "Suitable for digital nomads"],
        hostingStyle: "social",
        houseRules: ["Lock the door when leaving the house", "Kitchen closed after 8 PM", "Breakfast is self-serve between 7-9 AM", "Remove shoes when entering the home"],
        location: {
          city: "sydney",
          country: "undefined",
          coordinates: { lat: 40.06153699642345, lng: 0.09352909180455748 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "12:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "henry.wilson@example.com",
        phoneNumber: "+43-277-7232",
        isVerified: true,
        rating: 5,
        reviewCount: 63,
        quote: "My home is your home in sydney. I look forward to making your stay memorable and authentic.",
        stayType: "pet-friendly-stay",
      }
    ]
  }
];
