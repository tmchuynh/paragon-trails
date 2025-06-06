import { TourGuide } from "@/lib/interfaces/people/staff";

export const kyotojapanasiaPacificGuides: TourGuide[] = [
  {
    id: "guide-kyoto-1",
    name: "Patricia Stewart",
    city: "Kyoto",
    country: "Japan",
    state: "",
    region: "Asia Pacific",
    isPopular: false,
    bio: "Patricia is a passionate tour guide with extensive knowledge of Kyoto and Japan. Specializing in Museums, Architecture, LGBTQ+ History, Patricia provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Middle East"],
    tourTypes: ["Helicopter Tour", "Photography Tour", "Nature Tour"],
    maxGroupSize: 13,
    licenseNumber: "LIC-8872-KYO",
    phoneNumber: "+1-465-342-3790",
    contactEmail: "patricia.stewart@paragontrails.com",
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "07:00 PM",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "05:00 PM",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "02:00 PM",
          },
          {
            from: "10:00 AM",
            to: "02:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Patricia is a passionate tour guide with extensive knowledge of Kyoto and Japan. Specializing in Museums, Architecture, LGBTQ+ History, Patricia provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.9,
    reviewsCount: 88,
    quote: "My goal is to help you fall in love with Kyoto just as I have.",
    profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
    languages: ["English"],
    experienceYears: 14,
    certifications: ["Cultural Heritage Specialist", "Wilderness First Responder"],
    specialties: ["Museums", "Architecture", "LGBTQ+ History"],
    specialTraining: ["Desert Navigation"],
  },
  {
    id: "guide-kyoto-2",
    name: "Stella Bennett",
    city: "Kyoto",
    country: "Japan",
    state: "",
    region: "Asia Pacific",
    isPopular: true,
    bio: "Stella is a passionate tour guide with extensive knowledge of Kyoto and Japan. Specializing in Family Activities, Street Food, Stella provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast Canada", "Middle East"],
    tourTypes: ["Cooking Class", "Museum Tour", "Self-Guided Tour", "Religious Tour"],
    maxGroupSize: 16,
    licenseNumber: "LIC-4471-KYO",
    phoneNumber: "+1-551-802-1328",
    contactEmail: "stella.bennett@paragontrails.com",
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "05:00 PM",
          },
          {
            from: "01:00 PM",
            to: "05:00 PM",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "06:00 PM",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "08:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Stella is a passionate tour guide with extensive knowledge of Kyoto and Japan. Specializing in Family Activities, Street Food, Stella provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.1,
    reviewsCount: 53,
    quote: "In Kyoto, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/women/75.jpg",
    languages: ["Portuguese", "Serbian"],
    experienceYears: 12,
    certifications: ["Food Safety Certification", "Heritage Interpretation Certificate"],
    specialties: ["Family Activities", "Street Food"],
    specialTraining: ["Photography", "Group Management"],
  },
  {
    id: "guide-kyoto-3",
    name: "Billy Watson",
    city: "Kyoto",
    country: "Japan",
    state: "",
    region: "Asia Pacific",
    isPopular: false,
    bio: "Billy is a passionate tour guide with extensive knowledge of Kyoto and Japan. Specializing in Photography Spots, Billy provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast USA", "Middle East"],
    tourTypes: ["Market Tour", "Family-Friendly Tour"],
    maxGroupSize: 6,
    licenseNumber: "LIC-8377-KYO",
    phoneNumber: "+1-451-255-2478",
    contactEmail: "billy.watson@paragontrails.com",
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "08:00 AM",
            to: "12:00 PM",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "02:00 PM",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "06:00 PM",
          },
          {
            from: "09:00 AM",
            to: "01:00 PM",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "07:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Billy is a passionate tour guide with extensive knowledge of Kyoto and Japan. Specializing in Photography Spots, Billy provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.6,
    reviewsCount: 84,
    quote: "Every corner of Kyoto tells a story, let me share them with you.",
    profileImage: "https://randomuser.me/api/portraits/men/52.jpg",
    languages: ["Thai"],
    experienceYears: 15,
    certifications: ["Professional Tour Guide Association"],
    specialties: ["Photography Spots"],
    specialTraining: [],
  }
];
