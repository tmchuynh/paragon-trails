import { TourGuide } from "@/lib/interfaces/people/staff";

export const athensgreecemediterraneanGuides: TourGuide[] = [
  {
    id: "guide-athens-1",
    name: "Noah Walker",
    city: "Athens",
    country: "Greece",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Noah is a passionate tour guide with extensive knowledge of Athens and Greece. Specializing in Hidden Gems, Adventure Sports, Sustainable Tourism, Historical Landmarks, Noah provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Africa", "East Coast Canada"],
    tourTypes: ["Scenic Tour", "Architecture Tour", "Shopping Tour"],
    maxGroupSize: 18,
    licenseNumber: "LIC-9060-ATH",
    phoneNumber: "+1-501-814-4702",
    contactEmail: "noah.walker@paragontrails.com",
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "09:00",
            to: "14:00",
          },
          {
            from: "09:00",
            to: "15:00",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "09:00",
            to: "12:00",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "08:00",
            to: "12:00",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "09:00",
            to: "14:00",
          },
          {
            from: "09:00",
            to: "14:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Noah is a passionate tour guide with extensive knowledge of Athens and Greece. Specializing in Hidden Gems, Adventure Sports, Sustainable Tourism, Historical Landmarks, Noah provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4,
    reviewsCount: 75,
    quote: "The best way to discover Athens is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/men/33.jpg",
    languages: ["Bulgarian"],
    experienceYears: 3,
    certifications: ["Wilderness First Responder"],
    specialties: ["Hidden Gems", "Adventure Sports", "Sustainable Tourism", "Historical Landmarks"],
    specialTraining: ["Art History"],
  },
  {
    id: "guide-athens-2",
    name: "Alexander Garcia",
    city: "Athens",
    country: "Greece",
    state: "",
    region: "Mediterranean",
    isPopular: true,
    bio: "Alexander is a passionate tour guide with extensive knowledge of Athens and Greece. Specializing in Wildlife, LGBTQ+ History, Sustainable Tourism, Local Cuisine, Alexander provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Africa"],
    tourTypes: ["Accessible Tour", "Nature Tour", "Bike Tour", "Ghost Tour"],
    maxGroupSize: 19,
    licenseNumber: "LIC-2640-ATH",
    phoneNumber: "+1-202-789-3515",
    contactEmail: "alexander.garcia@paragontrails.com",
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "11:00",
            to: "15:00",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "13:00",
            to: "17:00",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "11:00",
            to: "13:00",
          },
          {
            from: "10:00",
            to: "12:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Alexander is a passionate tour guide with extensive knowledge of Athens and Greece. Specializing in Wildlife, LGBTQ+ History, Sustainable Tourism, Local Cuisine, Alexander provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.5,
    reviewsCount: 54,
    quote: "Athens isn't just a destination, it's an experience that stays with you forever.",
    profileImage: "https://randomuser.me/api/portraits/men/24.jpg",
    languages: ["Russian", "Tagalog"],
    experienceYears: 12,
    certifications: ["Sustainable Tourism Certificate", "Food Safety Certification", "Local History Certification"],
    specialties: ["Wildlife", "LGBTQ+ History", "Sustainable Tourism", "Local Cuisine"],
    specialTraining: ["Local Flora & Fauna"],
  },
  {
    id: "guide-athens-3",
    name: "Scarlett Lewis",
    city: "Athens",
    country: "Greece",
    state: "",
    region: "Mediterranean",
    isPopular: true,
    bio: "Scarlett is a passionate tour guide with extensive knowledge of Athens and Greece. Specializing in Local Craftsmanship, Scarlett provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Alaska"],
    tourTypes: ["Food Tour", "Wine Tour", "Brewery Tour", "Relocation Tour", "Craft Workshop"],
    maxGroupSize: 18,
    licenseNumber: "LIC-8033-ATH",
    phoneNumber: "+1-951-768-6012",
    contactEmail: "scarlett.lewis@paragontrails.com",
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "10:00",
            to: "16:00",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "12:00",
            to: "15:00",
          },
          {
            from: "15:00",
            to: "18:00",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "14:00",
            to: "17:00",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "13:00",
            to: "18:00",
          },
          {
            from: "13:00",
            to: "18:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Scarlett is a passionate tour guide with extensive knowledge of Athens and Greece. Specializing in Local Craftsmanship, Scarlett provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.8,
    reviewsCount: 47,
    quote: "Every corner of Athens tells a story, let me share them with you.",
    profileImage: "https://randomuser.me/api/portraits/men/41.jpg",
    languages: ["Swedish", "Swahili", "Japanese"],
    experienceYears: 15,
    certifications: ["Eco-Tourism Guide", "CPR & First Aid", "Food Safety Certification"],
    specialties: ["Local Craftsmanship"],
    specialTraining: ["Marine Biology", "Religious Studies"],
  },
  {
    id: "guide-athens-4",
    name: "Matthew Thomas",
    city: "Athens",
    country: "Greece",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Matthew is a passionate tour guide with extensive knowledge of Athens and Greece. Specializing in Music Scene, Wine Tasting, Matthew provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Alaska"],
    tourTypes: ["Private Tour", "Adventure Tour", "Museum Tour", "Self-Guided Tour", "Cultural Tour"],
    maxGroupSize: 14,
    licenseNumber: "LIC-9002-ATH",
    phoneNumber: "+1-942-624-7941",
    contactEmail: "matthew.thomas@paragontrails.com",
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "10:00",
            to: "16:00",
          },
          {
            from: "14:00",
            to: "19:00",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "15:00",
            to: "18:00",
          },
          {
            from: "15:00",
            to: "21:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Matthew is a passionate tour guide with extensive knowledge of Athens and Greece. Specializing in Music Scene, Wine Tasting, Matthew provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.8,
    reviewsCount: 70,
    quote: "Every corner of Athens tells a story, let me share them with you.",
    profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
    languages: ["Bulgarian", "Swahili"],
    experienceYears: 8,
    certifications: ["Language Proficiency Certification", "CPR & First Aid"],
    specialties: ["Music Scene", "Wine Tasting"],
    specialTraining: [],
  }
];
