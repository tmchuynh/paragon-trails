import { Homestay } from "@/lib/interfaces/people/homestay";

export const florenceHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Audrey Singh",
        background: "Local musician involved in the cultural scene",
        maxGuests: 3,
        languages: ["English", "French", "Norwegian"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: ["Great for couples", "Accessible for guests with mobility issues"],
        hostingStyle: "social",
        houseRules: ["No pets allowed", "Breakfast is self-serve between 7-9 AM", "Remove shoes when entering the home", "Please clean up after yourself in common areas", "Notify host if you'll be arriving after 10 PM"],
        location: {
          city: "Florence",
          region: "Mediterranean",
          country: "Italy",
          coordinates: { lat: 39.97617928871618, lng: -0.011568612787426644 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "audrey.singh@example.com",
        isVerified: true,
        rating: 4.8,
        reviewCount: 8,
        quote: "Welcome to my florence home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Shared Room",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Thabo Ivanov",
        background: "Long-time resident and community organizer",
        maxGuests: 6,
        languages: ["English", "Czech", "Danish", "German"],
        curfew: "13:00 AM",
        isPopular: true,
        guestPolicy: ["Family-friendly environment", "Perfect for long-term stays"],
        hostingStyle: "laid-back",
        houseRules: ["Respect shared spaces", "Pets welcome", "Kitchen closed after 8 PM", "Remove shoes when entering the home"],
        location: {
          city: "Florence",
          region: "Mediterranean",
          country: "Italy",
          coordinates: { lat: 40.085101205698734, lng: 0.0042209074773857935 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "thabo.ivanov@example.com",
        isVerified: true,
        rating: 4.7,
        reviewCount: 92,
        quote: "I've lived in florence all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Villa Stay",
      },
      {
        name: "Aaliyah Young",
        background: "Digital nomad who settled in the city after falling in love with it",
        maxGuests: 1,
        languages: ["English", "Russian", "Dutch", "Greek"],
        curfew: "14:00 AM",
        isPopular: false,
        guestPolicy: ["Great for couples", "Suitable for business travelers", "Children welcome", "Perfect for long-term stays"],
        hostingStyle: "laid-back",
        houseRules: ["Please conserve water and electricity", "Respect shared spaces", "Laundry available on weekends only"],
        location: {
          city: "Florence",
          region: "Mediterranean",
          country: "Italy",
          coordinates: { lat: 40.07979751860386, lng: -0.06361736596013831 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "aaliyah.young@example.com",
        isVerified: true,
        rating: 4.4,
        reviewCount: 48,
        quote: "Life in florence has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Self Catering",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Linda Stewart",
        background: "Local historian researching regional traditions",
        maxGuests: 3,
        languages: ["English", "Russian", "Norwegian", "Polish"],
        curfew: "24:00 PM",
        isPopular: true,
        guestPolicy: ["LGBTQ+ friendly", "Suitable for business travelers", "Children welcome"],
        hostingStyle: "family-oriented",
        houseRules: ["Pets welcome", "Please clean up after yourself in common areas", "Kitchen closed after 8 PM"],
        location: {
          city: "Florence",
          region: "Mediterranean",
          country: "Italy",
          coordinates: { lat: 40.00919786712749, lng: -0.07831115035658907 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "linda.stewart@example.com",
        phoneNumber: "+87-214-10400",
        isVerified: true,
        rating: 4.4,
        reviewCount: 39,
        quote: "Life in florence has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Spiritual Or Wellness Retreat",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Kyle Hernandez",
        background: "University professor with expertise in local culture",
        maxGuests: 5,
        languages: ["English", "Spanish", "Polish"],
        curfew: "14:00 AM",
        isPopular: false,
        guestPolicy: ["Not suitable for infants (under 2 years)", "Family-friendly environment", "Accessible for guests with mobility issues", "Children welcome"],
        hostingStyle: "hands-on",
        houseRules: ["Please clean up after yourself in common areas", "Lock the door when leaving the house", "No loud music after 9 PM"],
        location: {
          city: "Florence",
          region: "Mediterranean",
          country: "Italy",
          coordinates: { lat: 40.018284592367536, lng: -0.009747437999500314 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "kyle.hernandez@example.com",
        phoneNumber: "+51-454-9437",
        isVerified: true,
        rating: 4.2,
        reviewCount: 49,
        quote: "Welcome to my florence home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Spiritual Or Wellness Retreat",
      },
      {
        name: "Stephen Khan",
        background: "Local historian researching regional traditions",
        maxGuests: 4,
        languages: ["English", "Dutch", "Spanish"],
        curfew: "15:00 AM",
        isPopular: true,
        guestPolicy: ["Children welcome", "Family-friendly environment", "Great for couples"],
        hostingStyle: "laid-back",
        houseRules: ["Remove shoes when entering the home", "No smoking indoors", "Quiet hours after 10 PM", "No outside guests without permission", "Breakfast is self-serve between 7-9 AM"],
        location: {
          city: "Florence",
          region: "Mediterranean",
          country: "Italy",
          coordinates: { lat: 39.956291783421555, lng: 0.06748455424534172 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "12:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "stephen.khan@example.com",
        phoneNumber: "+96-662-6534",
        isVerified: false,
        rating: 3.8,
        reviewCount: 91,
        quote: "Staying with me means experiencing florence like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Farm Stay",
      }
    ]
  }
];
