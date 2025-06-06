import { TourGuide } from "@/lib/interfaces/people/staff";

export const amalfiCoastGuides: TourGuide[] = [
  {
    id: "guide-amalfi-coast-1",
    name: "Layla Ramirez",
    city: "Amalfi Coast",
    country: "Unknown Country",
    state: "",
    region: "Unknown Region",
    isPopular: true,
    bio: "Layla is a passionate tour guide with extensive knowledge of Amalfi Coast and Unknown Country. Specializing in Adventure Sports, Layla provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Middle East", "East Coast USA"],
    tourTypes: ["Helicopter Tour", "Museum Tour", "Group Tour", "Boat Tour"],
    maxGroupSize: 18,
    licenseNumber: "LIC-2349-AMA",
    phoneNumber: "+1-691-874-5159",
    contactEmail: "layla.ramirez@paragontrails.com",
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "08:00",
            to: "13:00",
          },
          {
            from: "10:00",
            to: "15:00",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "09:00",
            to: "15:00",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "09:00",
            to: "12:00",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "11:00",
            to: "13:00",
          },
          {
            from: "13:00",
            to: "15:00",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "10:00",
            to: "16:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Layla is a passionate tour guide with extensive knowledge of Amalfi Coast and Unknown Country. Specializing in Adventure Sports, Layla provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4,
    reviewsCount: 85,
    quote: "Every corner of Amalfi Coast tells a story, let me share them with you.",
    profileImage: "https://randomuser.me/api/portraits/women/27.jpg",
    languages: ["Finnish"],
    experienceYears: 15,
    certifications: ["Regional Tourism Ambassador", "Heritage Interpretation Certificate"],
    specialties: ["Adventure Sports"],
    specialTraining: ["Local Flora & Fauna", "Group Management"],
  },
  {
    id: "guide-amalfi-coast-2",
    name: "Logan Hill",
    city: "Amalfi Coast",
    country: "Unknown Country",
    state: "",
    region: "Unknown Region",
    isPopular: false,
    bio: "Logan is a passionate tour guide with extensive knowledge of Amalfi Coast and Unknown Country. Specializing in Public Transportation Navigation, Adventure Sports, Wildlife, Logan provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast Canada", "Africa"],
    tourTypes: ["Off-Road Tour", "Architecture Tour"],
    maxGroupSize: 8,
    licenseNumber: "LIC-5973-AMA",
    phoneNumber: "+1-690-639-6231",
    contactEmail: "logan.hill@paragontrails.com",
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "15:00",
            to: "18:00",
          },
          {
            from: "08:00",
            to: "14:00",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "09:00",
            to: "14:00",
          },
          {
            from: "15:00",
            to: "21:00",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "09:00",
            to: "11:00",
          },
          {
            from: "10:00",
            to: "13:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Logan is a passionate tour guide with extensive knowledge of Amalfi Coast and Unknown Country. Specializing in Public Transportation Navigation, Adventure Sports, Wildlife, Logan provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.4,
    reviewsCount: 79,
    quote: "The best way to discover Amalfi Coast is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
    languages: ["Czech", "Serbian", "Finnish"],
    experienceYears: 13,
    certifications: ["Cultural Heritage Specialist", "Licensed City Guide"],
    specialties: ["Public Transportation Navigation", "Adventure Sports", "Wildlife"],
    specialTraining: ["Regional Cuisine", "Art History"],
  },
  {
    id: "guide-amalfi-coast-3",
    name: "Mason Brown",
    city: "Amalfi Coast",
    country: "Unknown Country",
    state: "",
    region: "Unknown Region",
    isPopular: true,
    bio: "Mason is a passionate tour guide with extensive knowledge of Amalfi Coast and Unknown Country. Specializing in Adventure Sports, Film Locations, Mason provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast USA"],
    tourTypes: ["LGBTQ+ Friendly Tour", "Self-Guided Tour", "Luxury Tour", "Audio Tour", "Romantic Tour"],
    maxGroupSize: 15,
    licenseNumber: "LIC-3449-AMA",
    phoneNumber: "+1-954-430-9750",
    contactEmail: "mason.brown@paragontrails.com",
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "08:00",
            to: "14:00",
          },
          {
            from: "14:00",
            to: "20:00",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "08:00",
            to: "10:00",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "12:00",
            to: "15:00",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "15:00",
            to: "21:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Mason is a passionate tour guide with extensive knowledge of Amalfi Coast and Unknown Country. Specializing in Adventure Sports, Film Locations, Mason provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.5,
    reviewsCount: 48,
    quote: "My goal is to help you fall in love with Amalfi Coast just as I have.",
    profileImage: "https://randomuser.me/api/portraits/men/41.jpg",
    languages: ["Bulgarian"],
    experienceYears: 5,
    certifications: ["Urban Navigation Specialist", "Wilderness First Responder", "Food Safety Certification"],
    specialties: ["Adventure Sports", "Film Locations"],
    specialTraining: ["Religious Studies", "Regional Cuisine"],
  }
];
