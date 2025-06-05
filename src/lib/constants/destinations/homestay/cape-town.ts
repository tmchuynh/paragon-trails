import { Homestay } from "@/lib/interfaces/people/homestay";

export const capeTownHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Yuki Fletcher",
        background: "Long-time resident and community organizer",
        maxGuests: 5,
        languages: ["Fulah", "Arabic", "Yoruba", "English"],
        curfew: "13:00 AM",
        isPopular: true,
        guestPolicy: ["Not suitable for infants (under 2 years)", "Children welcome"],
        hostingStyle: "laid-back",
        houseRules: ["Notify host if you'll be arriving after 10 PM", "Pets welcome", "Respect shared spaces"],
        location: {
          city: "Cape town",
          region: "Africa",
          country: "South Africa",
          coordinates: { lat: 39.935823849006056, lng: 0.018060023099435663 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "yuki.fletcher@example.com",
        phoneNumber: "+2-986-8212",
        isVerified: true,
        rating: 4.3,
        reviewCount: 55,
        quote: "Life in cape-town has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Urban Apartment Stay",
      },
      {
        name: "Sophia Kim",
        background: "Local chef specializing in traditional cuisines",
        maxGuests: 4,
        languages: ["Arabic", "Igbo", "Ganda", "Yoruba", "English"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: ["Pet-friendly accommodation", "No parties or events"],
        hostingStyle: "family-oriented",
        houseRules: ["Wi-Fi password will be provided upon arrival", "Quiet hours after 10 PM", "No pets allowed", "Please clean up after yourself in common areas", "Kitchen closed after 8 PM", "Recycle according to local guidelines"],
        location: {
          city: "Cape town",
          region: "Africa",
          country: "South Africa",
          coordinates: { lat: 39.98299474108625, lng: -0.07826164084607874 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "sophia.kim@example.com",
        phoneNumber: "+27-483-7921",
        isVerified: false,
        rating: 4.4,
        reviewCount: 66,
        quote: "I've lived in cape-town all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Pet Friendly Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Hassan Hudson",
        background: "Local historian researching regional traditions",
        maxGuests: 5,
        languages: ["Yoruba", "Swahili", "Southern Sotho", "English"],
        curfew: "14:00 AM",
        isPopular: true,
        guestPolicy: ["Ideal for solo travelers", "No parties or events"],
        hostingStyle: "private",
        houseRules: ["Please clean up after yourself in common areas", "Please conserve water and electricity", "Breakfast is self-serve between 7-9 AM", "Pets welcome", "Notify host if you'll be arriving after 10 PM", "Quiet hours after 10 PM"],
        location: {
          city: "Cape town",
          region: "Africa",
          country: "South Africa",
          coordinates: { lat: 40.05150808769212, lng: -0.01696553040697761 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "hassan.hudson@example.com",
        isVerified: true,
        rating: 3.9,
        reviewCount: 40,
        quote: "Welcome to my cape-town home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Heritage Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Hiroshi Johnson",
        background: "Artist who loves sharing local cultural insights",
        maxGuests: 1,
        languages: ["Amharic", "Yoruba", "Arabic", "Xhosa", "English"],
        curfew: "15:00 AM",
        isPopular: true,
        guestPolicy: ["Perfect for long-term stays", "Family-friendly environment"],
        hostingStyle: "private",
        houseRules: ["No food in the bedrooms", "No outside guests without permission", "Notify host if you'll be arriving after 10 PM", "Breakfast is self-serve between 7-9 AM", "Kitchen closed after 8 PM"],
        location: {
          city: "Cape town",
          region: "Africa",
          country: "South Africa",
          coordinates: { lat: 40.0477119725021, lng: 0.05628742205522527 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "hiroshi.johnson@example.com",
        phoneNumber: "+16-433-4712",
        isVerified: true,
        rating: 4,
        reviewCount: 93,
        quote: "I've lived in cape-town all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Traditional Homestay",
      }
    ]
  }
];
