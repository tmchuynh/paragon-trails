import { Homestay } from "@/lib/interfaces/people/homestay";

export const miamiHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Benjamin Williams",
        background:
          "Environmental activist working on local sustainability projects",
        maxGuests: 2,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "15:00 AM",
        isPopular: true,
        guestPolicy: [
          "Perfect for long-term stays",
          "Pet-friendly accommodation",
          "Children welcome",
        ],
        hostingStyle: "private",
        houseRules: [
          "Pets welcome",
          "Notify host if you'll be arriving after 10 PM",
          "Quiet hours after 10 PM",
          "Laundry available on weekends only",
          "Breakfast is self-serve between 7-9 AM",
        ],
        location: {
          city: "miami",
          country: "undefined",
          coordinates: { lat: 39.9791217030326, lng: -0.09898158164501236 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "benjamin.williams@example.com",
        phoneNumber: "+59-678-10658",
        isVerified: true,
        rating: 4.2,
        reviewCount: 62,
        quote:
          "My home is your home in miami. I look forward to making your stay memorable and authentic.",
        stayType: "private-room-in-home",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Ibrahim Garcia",
        background: "Local musician involved in the cultural scene",
        maxGuests: 6,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: [
          "Perfect for long-term stays",
          "Senior-friendly accommodations",
          "Ideal for solo travelers",
        ],
        hostingStyle: "social",
        houseRules: [
          "No food in the bedrooms",
          "No loud music after 9 PM",
          "Pets welcome",
          "No outside guests without permission",
          "Breakfast is self-serve between 7-9 AM",
        ],
        location: {
          city: "miami",
          country: "undefined",
          coordinates: { lat: 40.065352962881256, lng: 0.08876326609370247 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "ibrahim.garcia@example.com",
        phoneNumber: "+95-792-2085",
        isVerified: true,
        rating: 4.1,
        reviewCount: 89,
        quote:
          "Staying with me means experiencing miami like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "self-catering",
      },
      {
        name: "Sophia Rodriguez",
        background: "Long-time resident and community organizer",
        maxGuests: 2,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "15:00 AM",
        isPopular: false,
        guestPolicy: [
          "Suitable for digital nomads",
          "Children welcome",
          "Suitable for business travelers",
        ],
        hostingStyle: "private",
        houseRules: [
          "Notify host if you'll be arriving after 10 PM",
          "Recycle according to local guidelines",
          "No smoking indoors",
          "Remove shoes when entering the home",
        ],
        location: {
          city: "miami",
          country: "undefined",
          coordinates: { lat: 39.9159877104896, lng: -0.09278361757998708 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "sophia.rodriguez@example.com",
        isVerified: true,
        rating: 4,
        reviewCount: 27,
        quote:
          "Staying with me means experiencing miami like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "farm-stay",
      },
    ],
  },
];
