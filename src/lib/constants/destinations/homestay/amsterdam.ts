import { Homestay } from "@/lib/interfaces/people/homestay";

export const amsterdamHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Vincent Rossi",
        background: "Long-time resident and community organizer",
        maxGuests: 3,
        languages: ["English", "Greek", "Russian", "Danish"],
        curfew: "21:00 PM",
        isPopular: true,
        guestPolicy: ["Great for couples", "Not suitable for infants (under 2 years)", "Suitable for business travelers", "Ideal for solo travelers"],
        hostingStyle: "laid-back",
        houseRules: ["No food in the bedrooms", "Laundry available on weekends only", "No pets allowed"],
        location: {
          city: "Amsterdam",
          region: "Northern Europe",
          country: "Netherlands",
          coordinates: { lat: 39.918358498206594, lng: 0.010592709139106843 },
        },
        availability: {
          checkInTime: "12:00 PM",
          checkOutTime: "12:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "vincent.rossi@example.com",
        phoneNumber: "+44-272-10833",
        isVerified: true,
        rating: 4.7,
        reviewCount: 16,
        quote: "Life in amsterdam has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Volunteer Stay",
      },
      {
        name: "Janet Hawkins",
        background: "Former tour guide with extensive knowledge of local history",
        maxGuests: 2,
        languages: ["English", "Czech", "Italian"],
        curfew: "21:00 PM",
        isPopular: false,
        guestPolicy: ["Suitable for business travelers", "Family-friendly environment", "Children welcome"],
        hostingStyle: "laid-back",
        houseRules: ["Please conserve water and electricity", "Lock the door when leaving the house", "Kitchen closed after 8 PM", "Recycle according to local guidelines", "Breakfast is self-serve between 7-9 AM", "Quiet hours after 10 PM"],
        location: {
          city: "Amsterdam",
          region: "Northern Europe",
          country: "Netherlands",
          coordinates: { lat: 39.96277365683311, lng: 0.05524956562019506 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "11:00 AM",
        },
        email: "janet.hawkins@example.com",
        phoneNumber: "+6-164-5472",
        isVerified: true,
        rating: 4.3,
        reviewCount: 100,
        quote: "I've lived in amsterdam all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "Spiritual Or Wellness Retreat",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Ariana Martin",
        background: "Local historian researching regional traditions",
        maxGuests: 5,
        languages: ["English", "French", "Finnish", "Greek"],
        curfew: "24:00 PM",
        isPopular: false,
        guestPolicy: ["Accessible for guests with mobility issues", "Suitable for digital nomads", "Senior-friendly accommodations", "No parties or events"],
        hostingStyle: "hands-on",
        houseRules: ["Quiet hours after 10 PM", "Breakfast is self-serve between 7-9 AM", "Kitchen closed after 8 PM", "No loud music after 9 PM", "Respect shared spaces"],
        location: {
          city: "Amsterdam",
          region: "Northern Europe",
          country: "Netherlands",
          coordinates: { lat: 40.05909324235516, lng: 0.07121730286416478 },
        },
        availability: {
          checkInTime: "13:00 PM",
          checkOutTime: "12:00 AM",
        },
        email: "ariana.martin@example.com",
        isVerified: true,
        rating: 4.6,
        reviewCount: 68,
        quote: "Life in amsterdam has its own rhythm. Stay with me to experience the true pulse of this amazing place.",
        stayType: "Shared Room",
      }
    ]
  }
];
