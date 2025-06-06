import { TourGuide } from "@/lib/interfaces/people/staff";

export const romeitalymediterraneanGuides: TourGuide[] = [
  {
    id: "guide-rome-1",
    name: "Cynthia Keller",
    city: "Rome",
    country: "Italy",
    state: "",
    region: "Mediterranean",
    isPopular: true,
    bio: "Cynthia is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Art Galleries, Museums, Street Food, Cynthia provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Mediterranean"],
    tourTypes: ["Festival Tour", "Religious Tour"],
    maxGroupSize: 8,
    licenseNumber: "LIC-5856-ROM",
    phoneNumber: "+1-357-221-1967",
    contactEmail: "cynthia.keller@paragontrails.com",
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "05:00 PM",
          },
          {
            from: "01:00 PM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "12:00 PM",
            to: "02:00 PM",
          },
          {
            from: "09:00 AM",
            to: "11:00 AM",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "08:00 AM",
            to: "11:00 AM",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "08:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Cynthia is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Art Galleries, Museums, Street Food, Cynthia provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.7,
    reviewsCount: 38,
    quote: "The best way to discover Rome is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
    languages: ["Portuguese", "Bulgarian", "Russian"],
    experienceYears: 3,
    certifications: ["Food Safety Certification", "Language Proficiency Certification", "Urban Navigation Specialist"],
    specialties: ["Art Galleries", "Museums", "Street Food"],
    specialTraining: ["Marine Biology"],
  },
  {
    id: "guide-rome-2",
    name: "Harper Wallace",
    city: "Rome",
    country: "Italy",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Harper is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Local Cuisine, Harper provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Caribbean"],
    tourTypes: ["Private Tour", "Cultural Tour"],
    maxGroupSize: 6,
    licenseNumber: "LIC-9411-ROM",
    phoneNumber: "+1-967-879-9085",
    contactEmail: "harper.wallace@paragontrails.com",
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "01:00 PM",
          },
          {
            from: "08:00 AM",
            to: "10:00 AM",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "03:00 PM",
          },
          {
            from: "12:00 PM",
            to: "03:00 PM",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "02:00 PM",
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
          },
          {
            from: "03:00 PM",
            to: "08:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Harper is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Local Cuisine, Harper provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.6,
    reviewsCount: 29,
    quote: "The best way to discover Rome is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/women/83.jpg",
    languages: ["Bulgarian", "Korean"],
    experienceYears: 2,
    certifications: ["Wilderness First Responder"],
    specialties: ["Local Cuisine"],
    specialTraining: ["Local Transit Systems"],
  },
  {
    id: "guide-rome-3",
    name: "Sophia Smith",
    city: "Rome",
    country: "Italy",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Sophia is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Adventure Sports, Sophia provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["West Coast USA", "Alaska"],
    tourTypes: ["Street Art Tour", "Craft Workshop", "Religious Tour", "Private Tour"],
    maxGroupSize: 10,
    licenseNumber: "LIC-9931-ROM",
    phoneNumber: "+1-262-907-3030",
    contactEmail: "sophia.smith@paragontrails.com",
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "12:00 PM",
            to: "05:00 PM",
          },
          {
            from: "08:00 AM",
            to: "01:00 PM",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "12:00 PM",
            to: "05:00 PM",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "08:00 PM",
          },
          {
            from: "09:00 AM",
            to: "02:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Sophia is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Adventure Sports, Sophia provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.8,
    reviewsCount: 31,
    quote: "In Rome, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/women/28.jpg",
    languages: ["Japanese", "German", "Polish"],
    experienceYears: 3,
    certifications: ["Heritage Interpretation Certificate"],
    specialties: ["Adventure Sports"],
    specialTraining: ["Archaeological Conservation"],
  },
  {
    id: "guide-rome-4",
    name: "Allison Müller",
    city: "Rome",
    country: "Italy",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Allison is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Architecture, Allison provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast USA"],
    tourTypes: ["Historical Tour", "Underground Tour", "Relocation Tour", "Wine Tour"],
    maxGroupSize: 14,
    licenseNumber: "LIC-3436-ROM",
    phoneNumber: "+1-518-516-9441",
    contactEmail: "allison.müller@paragontrails.com",
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "04:00 PM",
          },
          {
            from: "02:00 PM",
            to: "05:00 PM",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "08:00 AM",
            to: "02:00 PM",
          },
          {
            from: "02:00 PM",
            to: "08:00 PM",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "08:00 AM",
            to: "12:00 PM",
          },
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
            from: "12:00 PM",
            to: "02:00 PM",
          },
          {
            from: "10:00 AM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "12:00 PM",
            to: "03:00 PM",
          },
          {
            from: "12:00 PM",
            to: "02:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Allison is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Architecture, Allison provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 5,
    reviewsCount: 10,
    quote: "In Rome, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
    languages: ["English", "French"],
    experienceYears: 3,
    certifications: ["Language Proficiency Certification", "Professional Tour Guide Association", "Licensed City Guide"],
    specialties: ["Architecture"],
    specialTraining: [],
  },
  {
    id: "guide-rome-5",
    name: "Rebecca West",
    city: "Rome",
    country: "Italy",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Rebecca is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Indigenous Culture, Wildlife, Local Craftsmanship, Hidden Gems, Rebecca provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast USA", "South America"],
    tourTypes: ["Cultural Tour", "Architecture Tour", "Group Tour", "Ghost Tour"],
    maxGroupSize: 7,
    licenseNumber: "LIC-1035-ROM",
    phoneNumber: "+1-100-252-2603",
    contactEmail: "rebecca.west@paragontrails.com",
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "08:00 AM",
            to: "02:00 PM",
          },
          {
            from: "09:00 AM",
            to: "02:00 PM",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "08:00 PM",
          },
          {
            from: "11:00 AM",
            to: "01:00 PM",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "12:00 PM",
          },
          {
            from: "10:00 AM",
            to: "02:00 PM",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "05:00 PM",
          },
          {
            from: "02:00 PM",
            to: "04:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Rebecca is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Indigenous Culture, Wildlife, Local Craftsmanship, Hidden Gems, Rebecca provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.6,
    reviewsCount: 69,
    quote: "The best way to discover Rome is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
    languages: ["Thai", "Mandarin", "Dutch"],
    experienceYears: 4,
    certifications: ["Local History Certification", "Cultural Heritage Specialist"],
    specialties: ["Indigenous Culture", "Wildlife", "Local Craftsmanship", "Hidden Gems"],
    specialTraining: ["Regional Cuisine"],
  },
  {
    id: "guide-rome-6",
    name: "Keith Dean",
    city: "Rome",
    country: "Italy",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Keith is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Adventure Sports, Film Locations, Keith provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Northern Europe"],
    tourTypes: ["Wine Tour", "Ghost Tour", "Relocation Tour"],
    maxGroupSize: 13,
    licenseNumber: "LIC-5825-ROM",
    phoneNumber: "+1-562-263-2060",
    contactEmail: "keith.dean@paragontrails.com",
    available: [
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
        day: "Monday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "06:00 PM",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "05:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Keith is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Adventure Sports, Film Locations, Keith provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.1,
    reviewsCount: 86,
    quote: "My goal is to help you fall in love with Rome just as I have.",
    profileImage: "https://randomuser.me/api/portraits/men/51.jpg",
    languages: ["Polish", "Arabic"],
    experienceYears: 13,
    certifications: ["Local History Certification", "Wilderness First Responder"],
    specialties: ["Adventure Sports", "Film Locations"],
    specialTraining: ["Group Management"],
  },
  {
    id: "guide-rome-7",
    name: "William Jennings",
    city: "Rome",
    country: "Italy",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "William is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Art Galleries, Sustainable Tourism, Family Activities, William provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Caribbean"],
    tourTypes: ["Wildlife Safari"],
    maxGroupSize: 5,
    licenseNumber: "LIC-5731-ROM",
    phoneNumber: "+1-889-372-4872",
    contactEmail: "william.jennings@paragontrails.com",
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "09:00 PM",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "01:00 PM",
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
            from: "01:00 PM",
            to: "05:00 PM",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "05:00 PM",
          },
          {
            from: "02:00 PM",
            to: "07:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "William is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Art Galleries, Sustainable Tourism, Family Activities, William provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.4,
    reviewsCount: 76,
    quote: "My goal is to help you fall in love with Rome just as I have.",
    profileImage: "https://randomuser.me/api/portraits/men/72.jpg",
    languages: ["Hungarian"],
    experienceYears: 5,
    certifications: ["Urban Navigation Specialist", "Adventure Tourism Safety Certificate"],
    specialties: ["Art Galleries", "Sustainable Tourism", "Family Activities"],
    specialTraining: [],
  }
];
