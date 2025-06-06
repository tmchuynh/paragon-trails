import { Homestay } from "@/lib/interfaces/people/homestay";

export const amalfiCoastHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Carl Nash",
        background: "Organic farmer with a small plot on the outskirts of town",
        maxGuests: 6,
        languages: ["English", "Chinese", "Arabic"],
        curfew: "13:00 AM",
        isPopular: true,
        guestPolicy: ["Suitable for digital nomads", "Children welcome", "No children under 12"],
        hostingStyle: "hands-on",
        houseRules: ["Pets welcome", "Lock the door when leaving the house", "Laundry available on weekends only", "Notify host if you'll be arriving after 10 PM"],
        location: {
          city: "Amalfi coast",
          country: "",
          coordinates: { lat: 40.09391942407621, lng: -0.08328335074650442 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "10:00 AM",
        },
        email: "carl.nash@example.com",
        isVerified: true,
        rating: 4.8,
        reviewCount: 89,
        quote: "Staying with me means experiencing amalfi-coast like a local. I love sharing the hidden gems of our beautiful city with my guests.",
        stayType: "Cottage Stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Javier Watson",
        background: "Entrepreneur running a local business",
        maxGuests: 6,
        languages: ["English", "Portuguese", "French"],
        curfew: "21:00 PM",
        isPopular: false,
        guestPolicy: ["Ideal for solo travelers", "Smoking allowed in designated areas only", "Perfect for long-term stays"],
        hostingStyle: "private",
        houseRules: ["Please conserve water and electricity", "Remove shoes when entering the home", "No loud music after 9 PM", "No food in the bedrooms", "Breakfast is self-serve between 7-9 AM", "Quiet hours after 10 PM"],
        location: {
          city: "Amalfi coast",
          country: "",
          coordinates: { lat: 40.017121396926434, lng: 0.015857141021639348 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "javier.watson@example.com",
        phoneNumber: "+25-179-1136",
        isVerified: true,
        rating: 4.7,
        reviewCount: 55,
        quote: "My home is your home in amalfi-coast. I look forward to making your stay memorable and authentic.",
        stayType: "Pet Friendly Stay",
      },
      {
        name: "Javier Bennett",
        background: "Local historian researching regional traditions",
        maxGuests: 2,
        languages: ["English", "Portuguese", "German"],
        curfew: "22:00 PM",
        isPopular: false,
        guestPolicy: ["Senior-friendly accommodations", "Pet-friendly accommodation", "Great for couples", "Children welcome"],
        hostingStyle: "social",
        houseRules: ["Pets welcome", "Respect shared spaces", "Quiet hours after 10 PM", "No outside guests without permission", "Breakfast is self-serve between 7-9 AM"],
        location: {
          city: "Amalfi coast",
          country: "",
          coordinates: { lat: 39.90639553472694, lng: 0.08618270571507028 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "12:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "javier.bennett@example.com",
        phoneNumber: "+9-533-5257",
        isVerified: false,
        rating: 3.8,
        reviewCount: 35,
        quote: "I've lived in amalfi-coast all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Bed And Breakfast",
      }
    ]
  }
];
