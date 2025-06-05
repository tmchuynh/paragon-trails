import { Homestay } from "@/lib/interfaces/people/homestay";

export const fort-lauderdaleHomestays: Homestay[] = [
  {
    hosts: [
      {
        name: "Alexander Patel",
        background: "University professor with expertise in local culture",
        maxGuests: 5,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "14:00 AM",
        isPopular: false,
        guestPolicy: ["No parties or events", "Senior-friendly accommodations"],
        hostingStyle: "laid-back",
        houseRules: ["Please conserve water and electricity", "Quiet hours after 10 PM", "Laundry available on weekends only"],
        location: {
          city: "fort-lauderdale",
          country: "undefined",
          coordinates: { lat: 40.094930686746366, lng: 0.05365259963733898 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "12:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "alexander.patel@example.com",
        phoneNumber: "+9-974-1324",
        isVerified: true,
        rating: 4.8,
        reviewCount: 28,
        quote: "I've lived in fort-lauderdale all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "farm-stay",
      }
    ]
  },
  {
    hosts: [
      {
        name: "Ahmed Nguyen",
        background: "Digital nomad who settled in the city after falling in love with it",
        maxGuests: 5,
        languages: ["Indonesian", "Hindi", "Bengali", "Japanese", "English"],
        curfew: "13:00 AM",
        isPopular: false,
        guestPolicy: ["Not suitable for infants (under 2 years)", "No children under 12", "Accessible for guests with mobility issues"],
        hostingStyle: "hands-on",
        houseRules: ["No pets allowed", "No outside guests without permission", "Please conserve water and electricity", "No food in the bedrooms", "No loud music after 9 PM", "Lock the door when leaving the house"],
        location: {
          city: "fort-lauderdale",
          country: "undefined",
          coordinates: { lat: 39.992888258862, lng: 0.06689109094162679 },
        },
        availability: {
          checkInTime: "14:00 PM",
          checkOutTime: "10:00 AM",
          calendarLink: "https://calendar.example.com/availability",
        },
        email: "ahmed.nguyen@example.com",
        isVerified: true,
        rating: 3.8,
        reviewCount: 71,
        quote: "I've lived in fort-lauderdale all my life and know all the best spots. Can't wait to share my city with you!",
        stayType: "villa-stay",
      }
    ]
  }
];
