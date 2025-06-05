import { TourGuide } from "@/lib/interfaces/people/staff";

export const romeitalymediterraneanGuides: TourGuide[] = [
  {
    id: "guide-rome-1",
    name: "Olivia Davis",
    city: "rome",
    country: "Italy",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Olivia is a passionate tour guide with extensive knowledge of rome and Italy. Specializing in Hidden Gems, Olivia provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast Canada"],
    tourTypes: ["Underground Tour", "Self-Guided Tour"],
    maxGroupSize: 8,
    licenseNumber: "LIC-1251-ROM",
    phoneNumber: "+1-310-646-6787",
    contactEmail: "olivia.davis@paragontrails.com",
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "09:00",
            to: "13:00",
          },
          {
            from: "10:00",
            to: "13:00",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "11:00",
            to: "14:00",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "08:00",
            to: "11:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Olivia is a passionate tour guide with extensive knowledge of rome and Italy. Specializing in Hidden Gems, Olivia provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.3,
    reviewsCount: 104,
    quote: "The best way to discover rome is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/men/13.jpg",
    languages: ["Indonesian", "Bulgarian"],
    experienceYears: 16,
    certifications: ["Food Safety Certification", "Wilderness First Responder"],
    specialties: ["Hidden Gems"],
    specialTraining: ["Conflict Resolution"],
  },
  {
    id: "guide-rome-2",
    name: "Logan Young",
    city: "rome",
    country: "Italy",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Logan is a passionate tour guide with extensive knowledge of rome and Italy. Specializing in Architecture, Logan provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["West Coast USA", "South America"],
    tourTypes: ["Wine Tour", "Museum Tour", "Romantic Tour", "Craft Workshop", "Bike Tour"],
    maxGroupSize: 13,
    licenseNumber: "LIC-3121-ROM",
    phoneNumber: "+1-438-550-4048",
    contactEmail: "logan.young@paragontrails.com",
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "10:00",
            to: "15:00",
          },
          {
            from: "10:00",
            to: "16:00",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "08:00",
            to: "14:00",
          },
          {
            from: "10:00",
            to: "13:00",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "08:00",
            to: "11:00",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "12:00",
            to: "15:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Logan is a passionate tour guide with extensive knowledge of rome and Italy. Specializing in Architecture, Logan provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.6,
    reviewsCount: 90,
    quote: "In rome, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
    languages: ["Czech", "Spanish", "Thai"],
    experienceYears: 16,
    certifications: ["Heritage Interpretation Certificate"],
    specialties: ["Architecture"],
    specialTraining: ["Regional Geology"],
  },
  {
    id: "guide-rome-3",
    name: "David Wright",
    city: "rome",
    country: "Italy",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "David is a passionate tour guide with extensive knowledge of rome and Italy. Specializing in Museums, Local Cuisine, David provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast USA"],
    tourTypes: ["Family-Friendly Tour", "Walking Tour", "Cruise Excursion"],
    maxGroupSize: 6,
    licenseNumber: "LIC-3585-ROM",
    phoneNumber: "+1-131-951-1214",
    contactEmail: "david.wright@paragontrails.com",
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "15:00",
            to: "17:00",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "09:00",
            to: "13:00",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "15:00",
            to: "19:00",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "13:00",
            to: "18:00",
          },
          {
            from: "09:00",
            to: "11:00",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "13:00",
            to: "19:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "David is a passionate tour guide with extensive knowledge of rome and Italy. Specializing in Museums, Local Cuisine, David provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.7,
    reviewsCount: 45,
    quote: "The best way to discover rome is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/women/37.jpg",
    languages: ["Croatian"],
    experienceYears: 11,
    certifications: ["Urban Navigation Specialist", "Language Proficiency Certification"],
    specialties: ["Museums", "Local Cuisine"],
    specialTraining: [],
  }
];
