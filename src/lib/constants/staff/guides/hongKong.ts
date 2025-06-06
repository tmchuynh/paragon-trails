import { TourGuide } from "@/lib/interfaces/people/staff";

export const hongKongchinaasiaPacificGuides: TourGuide[] = [
  {
    id: "guide-hong-kong-1",
    name: "Olivia Morgan",
    city: "Hong Kong",
    country: "China",
    state: "",
    region: "Asia Pacific",
    isPopular: false,
    bio: "Olivia is a passionate tour guide with extensive knowledge of Hong Kong and China. Specializing in Street Food, Sustainable Tourism, Olivia provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Middle East", "South America"],
    tourTypes: ["Photography Tour", "Eco Tour", "Shopping Tour", "Walking Tour"],
    maxGroupSize: 15,
    licenseNumber: "LIC-4218-HON",
    phoneNumber: "+1-782-594-4678",
    contactEmail: "olivia.morgan@paragontrails.com",
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "05:00 PM",
          },
          {
            from: "03:00 PM",
            to: "08:00 PM",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "09:00 PM",
          },
          {
            from: "11:00 AM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "03:00 PM",
          },
          {
            from: "09:00 AM",
            to: "01:00 PM",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "01:00 PM",
          },
          {
            from: "10:00 AM",
            to: "03:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Olivia is a passionate tour guide with extensive knowledge of Hong Kong and China. Specializing in Street Food, Sustainable Tourism, Olivia provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.8,
    reviewsCount: 76,
    quote: "In Hong Kong, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/women/25.jpg",
    languages: ["Thai"],
    experienceYears: 10,
    certifications: ["Local History Certification", "Sustainable Tourism Certificate"],
    specialties: ["Street Food", "Sustainable Tourism"],
    specialTraining: ["Cultural Sensitivity"],
  },
  {
    id: "guide-hong-kong-2",
    name: "Youssef Foster",
    city: "Hong Kong",
    country: "China",
    state: "",
    region: "Asia Pacific",
    isPopular: true,
    bio: "Youssef is a passionate tour guide with extensive knowledge of Hong Kong and China. Specializing in Street Food, Religious Sites, Family Activities, Youssef provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Northern Europe"],
    tourTypes: ["Cooking Class", "Wildlife Safari", "Brewery Tour"],
    maxGroupSize: 18,
    licenseNumber: "LIC-3400-HON",
    phoneNumber: "+1-671-559-5526",
    contactEmail: "youssef.foster@paragontrails.com",
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "04:00 PM",
          },
          {
            from: "09:00 AM",
            to: "12:00 PM",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "12:00 PM",
          },
          {
            from: "01:00 PM",
            to: "07:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Youssef is a passionate tour guide with extensive knowledge of Hong Kong and China. Specializing in Street Food, Religious Sites, Family Activities, Youssef provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.2,
    reviewsCount: 10,
    quote: "Hong Kong isn't just a destination, it's an experience that stays with you forever.",
    profileImage: "https://randomuser.me/api/portraits/men/56.jpg",
    languages: ["English", "Spanish", "Greek"],
    experienceYears: 11,
    certifications: ["Local History Certification"],
    specialties: ["Street Food", "Religious Sites", "Family Activities"],
    specialTraining: ["Cultural Sensitivity", "Local Flora & Fauna"],
  },
  {
    id: "guide-hong-kong-3",
    name: "Ashley Wells",
    city: "Hong Kong",
    country: "China",
    state: "",
    region: "Asia Pacific",
    isPopular: true,
    bio: "Ashley is a passionate tour guide with extensive knowledge of Hong Kong and China. Specializing in Film Locations, Indigenous Culture, Urban Legends, Family Activities, Ashley provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Asia Pacific"],
    tourTypes: ["Architecture Tour", "Walking Tour"],
    maxGroupSize: 12,
    licenseNumber: "LIC-6168-HON",
    phoneNumber: "+1-314-275-4817",
    contactEmail: "ashley.wells@paragontrails.com",
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "12:00 PM",
            to: "03:00 PM",
          },
          {
            from: "03:00 PM",
            to: "06:00 PM",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "01:00 PM",
          },
          {
            from: "09:00 AM",
            to: "02:00 PM",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "01:00 PM",
          },
          {
            from: "12:00 PM",
            to: "03:00 PM",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "08:00 AM",
            to: "11:00 AM",
          },
          {
            from: "02:00 PM",
            to: "08:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Ashley is a passionate tour guide with extensive knowledge of Hong Kong and China. Specializing in Film Locations, Indigenous Culture, Urban Legends, Family Activities, Ashley provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.4,
    reviewsCount: 32,
    quote: "The best way to discover Hong Kong is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
    languages: ["Bulgarian", "Japanese"],
    experienceYears: 13,
    certifications: ["Heritage Interpretation Certificate"],
    specialties: ["Film Locations", "Indigenous Culture", "Urban Legends", "Family Activities"],
    specialTraining: [],
  },
  {
    id: "guide-hong-kong-4",
    name: "Wei Crawford",
    city: "Hong Kong",
    country: "China",
    state: "",
    region: "Asia Pacific",
    isPopular: false,
    bio: "Wei is a passionate tour guide with extensive knowledge of Hong Kong and China. Specializing in Architecture, Hidden Gems, Wei provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Northern Europe", "Mediterranean"],
    tourTypes: ["Cultural Tour", "Architecture Tour", "LGBTQ+ Friendly Tour", "Brewery Tour", "Off-Road Tour"],
    maxGroupSize: 11,
    licenseNumber: "LIC-3126-HON",
    phoneNumber: "+1-705-584-7220",
    contactEmail: "wei.crawford@paragontrails.com",
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "08:00 AM",
            to: "10:00 AM",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "01:00 PM",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "05:00 PM",
          },
          {
            from: "09:00 AM",
            to: "02:00 PM",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "05:00 PM",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "02:00 PM",
          },
          {
            from: "12:00 PM",
            to: "06:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Wei is a passionate tour guide with extensive knowledge of Hong Kong and China. Specializing in Architecture, Hidden Gems, Wei provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.2,
    reviewsCount: 58,
    quote: "The best way to discover Hong Kong is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/men/75.jpg",
    languages: ["Swedish", "German"],
    experienceYears: 10,
    certifications: ["Wilderness First Responder", "Local History Certification"],
    specialties: ["Architecture", "Hidden Gems"],
    specialTraining: [],
  },
  {
    id: "guide-hong-kong-5",
    name: "Santiago Nash",
    city: "Hong Kong",
    country: "China",
    state: "",
    region: "Asia Pacific",
    isPopular: true,
    bio: "Santiago is a passionate tour guide with extensive knowledge of Hong Kong and China. Specializing in Local Markets, Historical Landmarks, Santiago provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Africa", "Northern Europe"],
    tourTypes: ["Historical Tour", "Food Tour"],
    maxGroupSize: 13,
    licenseNumber: "LIC-7684-HON",
    phoneNumber: "+1-671-542-4419",
    contactEmail: "santiago.nash@paragontrails.com",
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "01:00 PM",
            to: "07:00 PM",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "08:00 AM",
            to: "10:00 AM",
          },
          {
            from: "08:00 AM",
            to: "02:00 PM",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "12:00 PM",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "01:00 PM",
          },
          {
            from: "11:00 AM",
            to: "03:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Santiago is a passionate tour guide with extensive knowledge of Hong Kong and China. Specializing in Local Markets, Historical Landmarks, Santiago provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.6,
    reviewsCount: 59,
    quote: "My goal is to help you fall in love with Hong Kong just as I have.",
    profileImage: "https://randomuser.me/api/portraits/men/34.jpg",
    languages: ["Swedish", "Danish", "Czech"],
    experienceYears: 11,
    certifications: ["Certified International Tour Manager", "Heritage Interpretation Certificate", "Food Safety Certification"],
    specialties: ["Local Markets", "Historical Landmarks"],
    specialTraining: ["Local Transit Systems"],
  }
];
