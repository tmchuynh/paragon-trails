import { Homestay } from "@/lib/interfaces/people/homestay";

export const galvestonHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Sofia Thomas",
        background: "Digital nomad who settled in the city after falling in love with it",
        maxGuests: 2,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: ["Suitable for digital nomads", "Great for couples", "Pet-friendly accommodation"],
        hostingStyle: "hands-on",
        houseRules: ["Lock the door when leaving the house", "Recycle according to local guidelines", "Please conserve water and electricity"],
        location: {
          city: "galveston",
          country: "undefined",
          coordinates: { lat: 40.05015120280157, lng: 0.044565605377930556 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "sofia.thomas@example.com",
        phoneNumber: "+85-736-5796",
        isVerified: true,
        rating: 4.6,
        reviewCount: 104,
        quote: "Welcome to my galveston home! I believe in creating a warm, welcoming environment for all my guests.",
        stayType: "culinary-homestay",
      },
      {
        name: "Mei Hernandez",
        background: "Local chef specializing in traditional cuisines",
        maxGuests: 6,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "14:00 AM",
        isPopular: false,
        guestPolicy: ["No children under 12", "Ideal for solo travelers", "Great for couples"],
        hostingStyle: "hands-on",
        houseRules: ["No pets allowed", "Wi-Fi password will be provided upon arrival", "Respect shared spaces", "Pets welcome", "Lock the door when leaving the house"],
        location: {
          city: "galveston",
          country: "undefined",
          coordinates: { lat: 39.938686851152, lng: -0.07424988355758227 },
        },
        availability: {
          checkInTime: "17:00 PM",
          checkOutTime: "9:00 AM",
        },
        email: "mei.hernandez@example.com",
        phoneNumber: "+1-426-1528",
        isVerified: true,
        rating: 4.2,
        reviewCount: 65,
        quote: "Staying with me means experiencing galveston like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "volunteer-stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Muhammad Kim",
        background: "Language teacher who enjoys helping visitors learn the local tongue",
        maxGuests: 4,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: ["Smoking allowed in designated areas only", "Family-friendly environment", "No parties or events"],
        hostingStyle: "laid-back",
        houseRules: ["No smoking indoors", "Laundry available on weekends only", "Pets welcome", "Please conserve water and electricity"],
        location: {
          city: "galveston",
          country: "undefined",
          coordinates: { lat: 39.96787407720356, lng: -0.051733629823754956 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "muhammad.kim@example.com",
        phoneNumber: "+38-257-3485",
        isVerified: true,
        rating: 4.3,
        reviewCount: 66,
        quote: "My home is your home in galveston. I look forward to making your stay memorable and authentic.",
        stayType: "pet-friendly-stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Priya Rodriguez",
        background: "Long-time resident and community organizer",
        maxGuests: 5,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "23:00 PM",
        isPopular: false,
        guestPolicy: ["Smoking allowed in designated areas only", "LGBTQ+ friendly", "Suitable for digital nomads"],
        hostingStyle: "laid-back",
        houseRules: ["Quiet hours after 10 PM", "No pets allowed", "Kitchen closed after 8 PM", "No smoking indoors"],
        location: {
          city: "galveston",
          country: "undefined",
          coordinates: { lat: 39.93885557617457, lng: 0.045656028040042596 },
        },
        availability: {
          checkInTime: "16:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "priya.rodriguez@example.com",
        phoneNumber: "+48-384-4918",
        isVerified: true,
        rating: 4.5,
        reviewCount: 20,
        quote: "Life in galveston has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "art-or-craft-stay",
      },
      {
        name: "Sofia Wang",
        background: "Digital nomad who settled in the city after falling in love with it",
        maxGuests: 3,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "24:00 PM",
        isPopular: true,
        guestPolicy: ["Suitable for digital nomads", "No parties or events", "Children welcome"],
        hostingStyle: "private",
        houseRules: ["Notify host if you'll be arriving after 10 PM", "Please clean up after yourself in common areas", "No pets allowed"],
        location: {
          city: "galveston",
          country: "undefined",
          coordinates: { lat: 39.94881481524437, lng: -0.09725473509952139 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "sofia.wang@example.com",
        phoneNumber: "+55-245-5075",
        isVerified: true,
        rating: 3.9,
        reviewCount: 58,
        quote: "I've lived in galveston all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "entire-home",
      }
    ]
  }
];
