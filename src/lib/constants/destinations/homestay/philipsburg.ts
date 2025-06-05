import { Homestay } from "@/lib/interfaces/people/homestay";

export const philipsburgHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Noah Wilson",
        background: "Former tour guide with extensive knowledge of local history",
        maxGuests: 6,
        languages: ["English", "Spanish", "Quechua"],
        curfew: "15:00 AM",
        isPopular: false,
        guestPolicy: ["Not suitable for infants (under 2 years)", "Suitable for digital nomads", "Perfect for long-term stays"],
        hostingStyle: "laid-back",
        houseRules: ["Remove shoes when entering the home", "Pets welcome", "Wi-Fi password will be provided upon arrival"],
        location: {
          city: "Philipsburg",
          region: "Caribbean",
          country: "Sint Maarten",
          coordinates: { lat: 39.95606673118233, lng: -0.056881516136093296 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "noah.wilson@example.com",
        phoneNumber: "+2-836-9626",
        isVerified: true,
        rating: 4.5,
        reviewCount: 93,
        quote: "My home is your home in philipsburg. I look forward to making your stay memorable and authentic.",
        stayType: "Language Immersion",
      },
      {
        name: "Robert Jennings",
        background: "University professor with expertise in local culture",
        maxGuests: 2,
        languages: ["English", "Haitian", "Quechua", "Spanish"],
        curfew: "14:00 AM",
        isPopular: true,
        guestPolicy: ["LGBTQ+ friendly", "Family-friendly environment"],
        hostingStyle: "hands-on",
        houseRules: ["No outside guests without permission", "No pets allowed", "Respect shared spaces", "Remove shoes when entering the home", "No food in the bedrooms"],
        location: {
          city: "Philipsburg",
          region: "Caribbean",
          country: "Sint Maarten",
          coordinates: { lat: 40.07580823339669, lng: 0.06790010709079783 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "robert.jennings@example.com",
        phoneNumber: "+32-818-5809",
        isVerified: true,
        rating: 4.9,
        reviewCount: 11,
        quote: "Life in philipsburg has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Farm Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Khalid Martinez",
        background: "University professor with expertise in local culture",
        maxGuests: 2,
        languages: ["English", "Aymara", "Spanish"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: ["Accessible for guests with mobility issues", "Great for couples", "Smoking allowed in designated areas only"],
        hostingStyle: "family-oriented",
        houseRules: ["Wi-Fi password will be provided upon arrival", "Recycle according to local guidelines", "Pets welcome", "Notify host if you'll be arriving after 10 PM", "Breakfast is self-serve between 7-9 AM"],
        location: {
          city: "Philipsburg",
          region: "Caribbean",
          country: "Sint Maarten",
          coordinates: { lat: 39.96098493702783, lng: -0.050749753633599376 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "khalid.martinez@example.com",
        phoneNumber: "+50-459-2696",
        isVerified: true,
        rating: 3.9,
        reviewCount: 28,
        quote: "I've lived in philipsburg all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Urban Apartment Stay",
      }
    ]
  }
];
