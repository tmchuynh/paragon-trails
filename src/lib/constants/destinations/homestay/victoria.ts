import { Homestay } from "@/lib/interfaces/people/homestay";

export const victoriaHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Daniel Jennings",
        background: "Digital nomad who settled in the city after falling in love with it",
        maxGuests: 5,
        languages: ["English", "French", "Chinese"],
        curfew: "14:00 AM",
        isPopular: false,
        guestPolicy: ["Senior-friendly accommodations", "Smoking allowed in designated areas only", "Great for couples"],
        hostingStyle: "family-oriented",
        houseRules: ["Kitchen closed after 8 PM", "Notify host if you'll be arriving after 10 PM", "No food in the bedrooms", "Lock the door when leaving the house", "Recycle according to local guidelines"],
        location: {
          city: "Victoria",
          region: "Alaska",
          country: "Canada",
          coordinates: { lat: 39.959137284100414, lng: -0.005097163982327402 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "daniel.jennings@example.com",
        phoneNumber: "+27-364-6665",
        isVerified: false,
        rating: 3.9,
        reviewCount: 99,
        quote: "I've lived in victoria all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Host Family Stay",
      },
      {
        name: "Harper Williams",
        background: "Local historian researching regional traditions",
        maxGuests: 4,
        languages: ["English", "Italian", "Arabic"],
        curfew: "22:00 PM",
        isPopular: false,
        guestPolicy: ["Not suitable for infants (under 2 years)", "Pet-friendly accommodation", "LGBTQ+ friendly"],
        hostingStyle: "private",
        houseRules: ["Remove shoes when entering the home", "No pets allowed", "Wi-Fi password will be provided upon arrival"],
        location: {
          city: "Victoria",
          region: "Alaska",
          country: "Canada",
          coordinates: { lat: 39.981809352039896, lng: 0.05025284858609699 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "harper.williams@example.com",
        phoneNumber: "+83-170-6950",
        isVerified: true,
        rating: 4.6,
        reviewCount: 75,
        quote: "Staying with me means experiencing victoria like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Academic Homestay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Aaron Carpenter",
        background: "Yoga instructor offering morning sessions",
        maxGuests: 2,
        languages: ["English", "Spanish", "Portuguese"],
        curfew: "15:00 AM",
        isPopular: false,
        guestPolicy: ["Suitable for business travelers", "Suitable for digital nomads", "Not suitable for infants (under 2 years)"],
        hostingStyle: "hands-on",
        houseRules: ["Please clean up after yourself in common areas", "No pets allowed", "Recycle according to local guidelines"],
        location: {
          city: "Victoria",
          region: "Alaska",
          country: "Canada",
          coordinates: { lat: 39.91649198913247, lng: 0.0021538020861358864 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "aaron.carpenter@example.com",
        isVerified: true,
        rating: 3.9,
        reviewCount: 80,
        quote: "Welcome to my victoria home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Art Or Craft Stay",
      },
      {
        name: "Victor Price",
        background: "University professor with expertise in local culture",
        maxGuests: 4,
        languages: ["English", "Italian", "Chinese", "Arabic"],
        curfew: "13:00 AM",
        isPopular: false,
        guestPolicy: ["Suitable for digital nomads", "Suitable for business travelers", "LGBTQ+ friendly", "Family-friendly environment"],
        hostingStyle: "social",
        houseRules: ["Wi-Fi password will be provided upon arrival", "No smoking indoors", "Quiet hours after 10 PM", "Please conserve water and electricity"],
        location: {
          city: "Victoria",
          region: "Alaska",
          country: "Canada",
          coordinates: { lat: 40.04488813292605, lng: -0.08120539544399669 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "12:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "victor.price@example.com",
        isVerified: true,
        rating: 4.4,
        reviewCount: 85,
        quote: "Staying with me means experiencing victoria like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Villa Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Lily Crawford",
        background: "Former tour guide with extensive knowledge of local history",
        maxGuests: 2,
        languages: ["English", "Portuguese", "Arabic"],
        curfew: "22:00 PM",
        isPopular: false,
        guestPolicy: ["LGBTQ+ friendly", "Suitable for business travelers", "Not suitable for infants (under 2 years)"],
        hostingStyle: "family-oriented",
        houseRules: ["Remove shoes when entering the home", "Laundry available on weekends only", "Respect shared spaces"],
        location: {
          city: "Victoria",
          region: "Alaska",
          country: "Canada",
          coordinates: { lat: 40.012952791901114, lng: -0.06391737217142404 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "lily.crawford@example.com",
        phoneNumber: "+93-338-4720",
        isVerified: true,
        rating: 4.5,
        reviewCount: 8,
        quote: "I've lived in victoria all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Pet Friendly Stay",
      }
    ]
  }
];
