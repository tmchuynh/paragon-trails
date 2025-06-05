import { Homestay } from "@/lib/interfaces/people/homestay";

export const cozumelHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Lily Crawford",
        background: "Retired schoolteacher passionate about sharing local traditions",
        maxGuests: 5,
        languages: ["English", "Portuguese", "Aymara", "Quechua"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: ["Not suitable for infants (under 2 years)", "Great for couples", "No children under 12", "Accessible for guests with mobility issues"],
        hostingStyle: "private",
        houseRules: ["Kitchen closed after 8 PM", "Please conserve water and electricity", "No outside guests without permission"],
        location: {
          city: "Cozumel",
          region: "Caribbean",
          country: "Mexico",
          coordinates: { lat: 39.97793606196382, lng: -0.023498271036700616 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "lily.crawford@example.com",
        isVerified: true,
        rating: 3.8,
        reviewCount: 104,
        quote: "Staying with me means experiencing cozumel like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Academic Homestay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Dylan Silva",
        background: "Environmental activist working on local sustainability projects",
        maxGuests: 1,
        languages: ["English", "Quechua", "Guarani", "French"],
        curfew: "15:00 AM",
        isPopular: true,
        guestPolicy: ["Accessible for guests with mobility issues", "Great for couples", "Not suitable for infants (under 2 years)", "Children welcome"],
        hostingStyle: "laid-back",
        houseRules: ["Respect shared spaces", "Kitchen closed after 8 PM", "Pets welcome", "Please conserve water and electricity"],
        location: {
          city: "Cozumel",
          region: "Caribbean",
          country: "Mexico",
          coordinates: { lat: 39.962248056324015, lng: 0.021938017011065153 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "dylan.silva@example.com",
        phoneNumber: "+71-1053-1041",
        isVerified: true,
        rating: 4.1,
        reviewCount: 10,
        quote: "Staying with me means experiencing cozumel like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Volunteer Stay",
      },
      {
        name: "Sophia Russell",
        background: "Local chef specializing in traditional cuisines",
        maxGuests: 6,
        languages: ["English", "French", "Spanish"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: ["Suitable for digital nomads", "Not suitable for infants (under 2 years)"],
        hostingStyle: "hands-on",
        houseRules: ["Quiet hours after 10 PM", "Respect shared spaces", "Please clean up after yourself in common areas", "Laundry available on weekends only", "No pets allowed"],
        location: {
          city: "Cozumel",
          region: "Caribbean",
          country: "Mexico",
          coordinates: { lat: 39.933788824559876, lng: -0.03596998620383056 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "sophia.russell@example.com",
        isVerified: true,
        rating: 4.2,
        reviewCount: 6,
        quote: "My home is your home in cozumel. I look forward to making your stay memorable and authentic.",
        stayType: "Cottage Stay",
      },
      {
        name: "Valentina Morales",
        background: "Local historian researching regional traditions",
        maxGuests: 5,
        languages: ["English", "Quechua", "Aymara", "Portuguese"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: ["No children under 12", "No parties or events"],
        hostingStyle: "laid-back",
        houseRules: ["No pets allowed", "No loud music after 9 PM", "No outside guests without permission", "Laundry available on weekends only"],
        location: {
          city: "Cozumel",
          region: "Caribbean",
          country: "Mexico",
          coordinates: { lat: 39.99385871962302, lng: 0.08605843871207366 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "valentina.morales@example.com",
        phoneNumber: "+36-1016-5217",
        isVerified: true,
        rating: 4.6,
        reviewCount: 45,
        quote: "I've lived in cozumel all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Traditional Homestay",
      }
    ]
  }
];
