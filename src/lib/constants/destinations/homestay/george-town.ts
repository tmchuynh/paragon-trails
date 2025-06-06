import { Host } from "@/lib/interfaces/people/homestay";

export const georgeTownHomestays: Host[] = [
      {
        name: "Harold Edwards",
        background: "Retired schoolteacher passionate about sharing local traditions",
        maxGuests: 1,
        languages: ["English", "Quechua", "Aymara", "Guarani"],
        curfew: "14:00 AM",
        isPopular: false,
        guestPolicy: ["Perfect for long-term stays", "Great for couples", "Pet-friendly accommodation", "Ideal for solo travelers"],
        hostingStyle: "hands-on",
        houseRules: ["Laundry available on weekends only", "Remove shoes when entering the home", "No food in the bedrooms"],
        location: {
          city: "George Town",
          region: "Caribbean",
          country: "Cayman Islands",
          coordinates: { lat: 39.94916802579213, lng: -0.025903484222000464 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "9:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "harold.edwards@paragontrailshomestays.com",
        isVerified: true,
        rating: 3.9,
        reviewCount: 88,
        quote: "Staying with me means experiencing george-town like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "guest-suite",
      }
,
      {
        name: "Lisa Ellis",
        background: "Language teacher who enjoys helping visitors learn the local tongue",
        maxGuests: 6,
        languages: ["English", "Spanish", "Quechua"],
        curfew: "22:00 PM",
        isPopular: true,
        guestPolicy: ["No children under 12", "Smoking allowed in designated areas only", "Children welcome"],
        hostingStyle: "laid-back",
        houseRules: ["Wi-Fi password will be provided upon arrival", "Breakfast is self-serve between 7-9 AM", "Please clean up after yourself in common areas", "No outside guests without permission", "Quiet hours after 10 PM", "Please conserve water and electricity"],
        location: {
          city: "George Town",
          region: "Caribbean",
          country: "Cayman Islands",
          coordinates: { lat: 39.9524044463249, lng: -0.06534186243246051 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "lisa.ellis@paragontrailshomestays.com",
        isVerified: true,
        rating: 4.7,
        reviewCount: 26,
        quote: "My home is your home in george-town. I look forward to making your stay memorable and authentic.",
        stayType: "art-or-craft-stay",
      }

];
