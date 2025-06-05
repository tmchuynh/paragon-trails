import { Homestay } from "@/lib/interfaces/people/homestay";

export const maltaHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Boris Miller",
        background:
          "Former tour guide with extensive knowledge of local history",
        maxGuests: 3,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: [
          "Ideal for solo travelers",
          "Pet-friendly accommodation",
          "Great for couples",
        ],
        hostingStyle: "hands-on",
        houseRules: [
          "No food in the bedrooms",
          "Kitchen closed after 8 PM",
          "Quiet hours after 10 PM",
          "No outside guests without permission",
          "No pets allowed",
        ],
        location: {
          city: "malta",
          country: "undefined",
          coordinates: { lat: 40.06086359398884, lng: -0.0844159650431514 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "12:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "boris.miller@example.com",
        phoneNumber: "+3-554-2089",
        isVerified: true,
        rating: 4.4,
        reviewCount: 98,
        quote:
          "Life in malta has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "cottage-stay",
      },
    ],
  },
  {
    hosts: [
      {
        name: "William Brown",
        background:
          "Retired schoolteacher passionate about sharing local traditions",
        maxGuests: 6,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "21:00 PM",
        isPopular: false,
        guestPolicy: [
          "Family-friendly environment",
          "Not suitable for infants (under 2 years)",
          "Perfect for long-term stays",
          "Suitable for digital nomads",
        ],
        hostingStyle: "family-oriented",
        houseRules: [
          "Wi-Fi password will be provided upon arrival",
          "Kitchen closed after 8 PM",
          "Laundry available on weekends only",
          "Quiet hours after 10 PM",
        ],
        location: {
          city: "malta",
          country: "undefined",
          coordinates: { lat: 39.90012941041623, lng: -0.056551663483015484 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "william.brown@example.com",
        isVerified: true,
        rating: 4.9,
        reviewCount: 30,
        quote:
          "Welcome to my malta home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "pet-friendly-stay",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Maria Müller",
        background:
          "Digital nomad who settled in the city after falling in love with it",
        maxGuests: 5,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "22:00 PM",
        isPopular: false,
        guestPolicy: ["Ideal for solo travelers", "Great for couples"],
        hostingStyle: "hands-on",
        houseRules: [
          "No smoking indoors",
          "Respect shared spaces",
          "Lock the door when leaving the house",
        ],
        location: {
          city: "malta",
          country: "undefined",
          coordinates: { lat: 39.91798507908956, lng: -0.0035206047984822353 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "maria.müller@example.com",
        phoneNumber: "+73-1000-8705",
        isVerified: true,
        rating: 4.7,
        reviewCount: 18,
        quote:
          "Welcome to my malta home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "bed-and-breakfast",
      },
      {
        name: "Diego Moore",
        background: "Expat who has lived in the city for over a decade",
        maxGuests: 1,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: [
          "Smoking allowed in designated areas only",
          "Accessible for guests with mobility issues",
          "No children under 12",
          "Ideal for solo travelers",
        ],
        hostingStyle: "family-oriented",
        houseRules: [
          "Respect shared spaces",
          "Notify host if you'll be arriving after 10 PM",
          "Quiet hours after 10 PM",
          "Lock the door when leaving the house",
        ],
        location: {
          city: "malta",
          country: "undefined",
          coordinates: { lat: 39.93046253267471, lng: 0.010458708204129377 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "diego.moore@example.com",
        phoneNumber: "+32-414-6924",
        isVerified: true,
        rating: 4.3,
        reviewCount: 45,
        quote:
          "Welcome to my malta home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "farm-stay",
      },
    ],
  },
];
