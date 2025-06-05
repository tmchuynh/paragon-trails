import { Homestay } from "@/lib/interfaces/people/homestay";

export const bangkokHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Ibrahim Müller",
        background: "Yoga instructor offering morning sessions",
        maxGuests: 6,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "22:00 PM",
        isPopular: true,
        guestPolicy: [
          "Children welcome",
          "No parties or events",
          "Ideal for solo travelers",
        ],
        hostingStyle: "laid-back",
        houseRules: [
          "Breakfast is self-serve between 7-9 AM",
          "Kitchen closed after 8 PM",
          "Respect shared spaces",
        ],
        location: {
          city: "bangkok",
          country: "undefined",
          coordinates: { lat: 40.08089897273103, lng: -0.0210014979652485 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "ibrahim.müller@example.com",
        phoneNumber: "+24-1041-3877",
        isVerified: true,
        rating: 4,
        reviewCount: 78,
        quote:
          "Life in bangkok has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "language-immersion",
      },
      {
        name: "Emma Jones",
        background: "University professor with expertise in local culture",
        maxGuests: 6,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "13:00 AM",
        isPopular: false,
        guestPolicy: [
          "No children under 12",
          "Not suitable for infants (under 2 years)",
          "Accessible for guests with mobility issues",
          "Family-friendly environment",
        ],
        hostingStyle: "hands-on",
        houseRules: [
          "Laundry available on weekends only",
          "Lock the door when leaving the house",
          "Please conserve water and electricity",
          "Wi-Fi password will be provided upon arrival",
          "No pets allowed",
          "Kitchen closed after 8 PM",
        ],
        location: {
          city: "bangkok",
          country: "undefined",
          coordinates: { lat: 39.995668378107794, lng: 0.023791788767961772 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "emma.jones@example.com",
        phoneNumber: "+84-104-5964",
        isVerified: true,
        rating: 4.5,
        reviewCount: 22,
        quote:
          "Life in bangkok has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "villa-stay",
      },
    ],
  },
  {
    hosts: [
      {
        name: "Oliver da Costa",
        background:
          "Environmental activist working on local sustainability projects",
        maxGuests: 3,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: [
          "Accessible for guests with mobility issues",
          "Senior-friendly accommodations",
        ],
        hostingStyle: "private",
        houseRules: [
          "No outside guests without permission",
          "Notify host if you'll be arriving after 10 PM",
          "Quiet hours after 10 PM",
        ],
        location: {
          city: "bangkok",
          country: "undefined",
          coordinates: { lat: 39.994239178179235, lng: 0.032059572599152514 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "oliver.da costa@example.com",
        isVerified: true,
        rating: 4.9,
        reviewCount: 23,
        quote:
          "Life in bangkok has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "traditional-homestay",
      },
    ],
  },
];
