import { Homestay } from "@/lib/interfaces/people/homestay";

export const bermudaHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Abigail Marshall",
        background: "Local musician involved in the cultural scene",
        maxGuests: 5,
        languages: ["English", "Haitian", "French", "Guarani"],
        curfew: "13:00 AM",
        isPopular: false,
        guestPolicy: ["No children under 12", "Suitable for business travelers"],
        hostingStyle: "private",
        houseRules: ["Notify host if you'll be arriving after 10 PM", "Wi-Fi password will be provided upon arrival", "Recycle according to local guidelines", "Remove shoes when entering the home", "Lock the door when leaving the house", "Please clean up after yourself in common areas"],
        location: {
          city: "Bermuda",
          region: "Caribbean",
          country: "Bermuda",
          coordinates: { lat: 39.94590349000026, lng: 0.034308597852805406 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "abigail.marshall@example.com",
        phoneNumber: "+23-130-6066",
        isVerified: true,
        rating: 4.1,
        reviewCount: 17,
        quote: "Welcome to my bermuda home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Spiritual Or Wellness Retreat",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Laura Baker",
        background: "Digital nomad who settled in the city after falling in love with it",
        maxGuests: 1,
        languages: ["English", "Quechua", "Guarani"],
        curfew: "13:00 AM",
        isPopular: false,
        guestPolicy: ["Accessible for guests with mobility issues", "Suitable for business travelers", "Children welcome"],
        hostingStyle: "social",
        houseRules: ["Lock the door when leaving the house", "No loud music after 9 PM", "No smoking indoors", "Wi-Fi password will be provided upon arrival", "Please clean up after yourself in common areas", "Quiet hours after 10 PM"],
        location: {
          city: "Bermuda",
          region: "Caribbean",
          country: "Bermuda",
          coordinates: { lat: 39.940626199083574, lng: 0.06844354906407499 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "12:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "laura.baker@example.com",
        phoneNumber: "+92-140-7164",
        isVerified: false,
        rating: 3.8,
        reviewCount: 22,
        quote: "Staying with me means experiencing bermuda like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Volunteer Stay",
      }
    ]
  }
];
