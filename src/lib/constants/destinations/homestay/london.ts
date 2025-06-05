import { Homestay } from "@/lib/interfaces/people/homestay";

export const londonHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Diego Payne",
        background: "Environmental activist working on local sustainability projects",
        maxGuests: 6,
        languages: ["English", "Danish", "Dutch", "Czech"],
        curfew: "22:00 PM",
        isPopular: false,
        guestPolicy: ["Pet-friendly accommodation", "Ideal for solo travelers", "Suitable for digital nomads", "Great for couples"],
        hostingStyle: "social",
        houseRules: ["Recycle according to local guidelines", "Wi-Fi password will be provided upon arrival", "Laundry available on weekends only", "Notify host if you'll be arriving after 10 PM", "Kitchen closed after 8 PM"],
        location: {
          city: "London",
          region: "Northern Europe",
          country: "United Kingdom",
          coordinates: { lat: 40.0014166315145, lng: 0.018940834448922278 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "diego.payne@example.com",
        isVerified: true,
        rating: 4.8,
        reviewCount: 67,
        quote: "My home is your home in london. I look forward to making your stay memorable and authentic.",
        stayType: "Heritage Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Adeline Moore",
        background: "Organic farmer with a small plot on the outskirts of town",
        maxGuests: 3,
        languages: ["English", "Finnish", "Dutch"],
        curfew: "22:00 PM",
        isPopular: false,
        guestPolicy: ["Great for couples", "Not suitable for infants (under 2 years)"],
        hostingStyle: "hands-on",
        houseRules: ["No pets allowed", "No outside guests without permission", "Laundry available on weekends only", "Quiet hours after 10 PM"],
        location: {
          city: "London",
          region: "Northern Europe",
          country: "United Kingdom",
          coordinates: { lat: 40.093899298087905, lng: 0.010094763201554488 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "adeline.moore@example.com",
        phoneNumber: "+26-225-5355",
        isVerified: true,
        rating: 4.1,
        reviewCount: 16,
        quote: "I've lived in london all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Cottage Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Ella Patel",
        background: "Digital nomad who settled in the city after falling in love with it",
        maxGuests: 4,
        languages: ["English", "Polish", "Italian"],
        curfew: "15:00 AM",
        isPopular: true,
        guestPolicy: ["Smoking allowed in designated areas only", "Perfect for long-term stays", "Family-friendly environment"],
        hostingStyle: "hands-on",
        houseRules: ["Quiet hours after 10 PM", "No pets allowed", "No food in the bedrooms", "Notify host if you'll be arriving after 10 PM"],
        location: {
          city: "London",
          region: "Northern Europe",
          country: "United Kingdom",
          coordinates: { lat: 39.9200324647522, lng: -0.09964049432861302 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "ella.patel@example.com",
        isVerified: true,
        rating: 4.3,
        reviewCount: 25,
        quote: "Welcome to my london home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Traditional Homestay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Amanda Chambers",
        background: "Former tour guide with extensive knowledge of local history",
        maxGuests: 2,
        languages: ["English", "Polish", "Russian", "Greek"],
        curfew: "13:00 AM",
        isPopular: false,
        guestPolicy: ["No parties or events", "Accessible for guests with mobility issues"],
        hostingStyle: "hands-on",
        houseRules: ["Please clean up after yourself in common areas", "Wi-Fi password will be provided upon arrival", "No smoking indoors"],
        location: {
          city: "London",
          region: "Northern Europe",
          country: "United Kingdom",
          coordinates: { lat: 40.057649846261306, lng: 0.039351136597891745 },
        },
        availability: {
          checkInTime: "15:00 PM",
          checkOutTime: "11:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "amanda.chambers@example.com",
        phoneNumber: "+82-905-2923",
        isVerified: true,
        rating: 4.8,
        reviewCount: 36,
        quote: "My home is your home in london. I look forward to making your stay memorable and authentic.",
        stayType: "Shared Room",
      },
      {
        name: "Javier King",
        background: "Artist who loves sharing local cultural insights",
        maxGuests: 3,
        languages: ["English", "French", "Norwegian"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: ["Perfect for long-term stays", "No parties or events", "Family-friendly environment", "Great for couples"],
        hostingStyle: "social",
        houseRules: ["Laundry available on weekends only", "Remove shoes when entering the home", "Kitchen closed after 8 PM", "Recycle according to local guidelines", "Respect shared spaces"],
        location: {
          city: "London",
          region: "Northern Europe",
          country: "United Kingdom",
          coordinates: { lat: 40.072284993025896, lng: -0.08094297108199316 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "javier.king@example.com",
        phoneNumber: "+45-516-1946",
        isVerified: true,
        rating: 4.9,
        reviewCount: 82,
        quote: "Life in london has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Language Immersion",
      },
      {
        name: "Susan Carpenter",
        background: "Expat who has lived in the city for over a decade",
        maxGuests: 1,
        languages: ["English", "French", "Swedish"],
        curfew: "21:00 PM",
        isPopular: true,
        guestPolicy: ["Suitable for business travelers", "Perfect for long-term stays"],
        hostingStyle: "hands-on",
        houseRules: ["Quiet hours after 10 PM", "Recycle according to local guidelines", "Respect shared spaces"],
        location: {
          city: "London",
          region: "Northern Europe",
          country: "United Kingdom",
          coordinates: { lat: 40.087884520275736, lng: -0.05169140231607137 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "susan.carpenter@example.com",
        isVerified: true,
        rating: 4,
        reviewCount: 82,
        quote: "Welcome to my london home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "Heritage Stay",
      }
    ]
  }
];
