import { TourGuide } from "@/lib/interfaces/people/staff";

export const tokyojapanasiaPacificGuides: TourGuide[] = [
  {
    id: "guide-tokyo-1",
    name: "Aiden Müller",
    city: "Tokyo",
    country: "Japan",
    state: "",
    region: "Asia Pacific",
    isPopular: false,
    bio: "Aiden is a passionate tour guide with extensive knowledge of Tokyo and Japan. Specializing in Local Craftsmanship, Art Galleries, Urban Legends, Street Food, Aiden provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Asia Pacific"],
    tourTypes: ["Ghost Tour", "Festival Tour", "Accessible Tour", "Farm Visit"],
    maxGroupSize: 18,
    licenseNumber: "LIC-8466-TOK",
    phoneNumber: "+1-184-974-7521",
    contactEmail: "aiden.müller@paragontrails.com",
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "12:00 PM",
            to: "05:00 PM",
          },
          {
            from: "03:00 PM",
            to: "08:00 PM",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "12:00 PM",
            to: "03:00 PM",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "08:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Aiden is a passionate tour guide with extensive knowledge of Tokyo and Japan. Specializing in Local Craftsmanship, Art Galleries, Urban Legends, Street Food, Aiden provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.8,
    reviewsCount: 20,
    quote: "My goal is to help you fall in love with Tokyo just as I have.",
    profileImage: "https://randomuser.me/api/portraits/men/44.jpg",
    languages: ["Swedish", "Italian"],
    experienceYears: 10,
    certifications: ["Urban Navigation Specialist"],
    specialties: ["Local Craftsmanship", "Art Galleries", "Urban Legends", "Street Food"],
    specialTraining: [],
  },
  {
    id: "guide-tokyo-2",
    name: "Arthur Brooks",
    city: "Tokyo",
    country: "Japan",
    state: "",
    region: "Asia Pacific",
    isPopular: false,
    bio: "Arthur is a passionate tour guide with extensive knowledge of Tokyo and Japan. Specializing in Street Food, Sustainable Tourism, Arthur provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast Canada"],
    tourTypes: ["Photography Tour", "Scenic Tour", "Family-Friendly Tour", "Wildlife Safari"],
    maxGroupSize: 7,
    licenseNumber: "LIC-5490-TOK",
    phoneNumber: "+1-869-754-7016",
    contactEmail: "arthur.brooks@paragontrails.com",
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "01:00 PM",
            to: "05:00 PM",
          },
          {
            from: "09:00 AM",
            to: "11:00 AM",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "07:00 PM",
          },
          {
            from: "01:00 PM",
            to: "07:00 PM",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "12:00 PM",
            to: "04:00 PM",
          },
          {
            from: "11:00 AM",
            to: "03:00 PM",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "08:00 AM",
            to: "12:00 PM",
          },
          {
            from: "12:00 PM",
            to: "02:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Arthur is a passionate tour guide with extensive knowledge of Tokyo and Japan. Specializing in Street Food, Sustainable Tourism, Arthur provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.8,
    reviewsCount: 49,
    quote: "The best way to discover Tokyo is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
    languages: ["Mandarin"],
    experienceYears: 7,
    certifications: ["Licensed City Guide", "CPR & First Aid", "Regional Tourism Ambassador"],
    specialties: ["Street Food", "Sustainable Tourism"],
    specialTraining: ["Marine Biology", "Conflict Resolution"],
  },
  {
    id: "guide-tokyo-3",
    name: "David Palmer",
    city: "Tokyo",
    country: "Japan",
    state: "",
    region: "Asia Pacific",
    isPopular: false,
    bio: "David is a passionate tour guide with extensive knowledge of Tokyo and Japan. Specializing in Cultural Etiquette, Film Locations, David provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Northern Europe", "Asia Pacific"],
    tourTypes: ["Ghost Tour", "Brewery Tour", "Luxury Tour", "Photography Tour"],
    maxGroupSize: 15,
    licenseNumber: "LIC-6715-TOK",
    phoneNumber: "+1-150-982-7504",
    contactEmail: "david.palmer@paragontrails.com",
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "03:00 PM",
          }
        ],
      },
      {
        day: "Monday",
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
            from: "11:00 AM",
            to: "03:00 PM",
          },
          {
            from: "02:00 PM",
            to: "06:00 PM",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "07:00 PM",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "04:00 PM",
          },
          {
            from: "08:00 AM",
            to: "11:00 AM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "David is a passionate tour guide with extensive knowledge of Tokyo and Japan. Specializing in Cultural Etiquette, Film Locations, David provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.9,
    reviewsCount: 10,
    quote: "In Tokyo, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/men/80.jpg",
    languages: ["Serbian"],
    experienceYears: 16,
    certifications: ["Cultural Heritage Specialist", "Language Proficiency Certification"],
    specialties: ["Cultural Etiquette", "Film Locations"],
    specialTraining: ["Photography"],
  },
  {
    id: "guide-tokyo-4",
    name: "Lerato Garcia",
    city: "Tokyo",
    country: "Japan",
    state: "",
    region: "Asia Pacific",
    isPopular: true,
    bio: "Lerato is a passionate tour guide with extensive knowledge of Tokyo and Japan. Specializing in Historical Landmarks, Sustainable Tourism, Local Markets, Local Cuisine, Lerato provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["West Coast USA", "Asia Pacific"],
    tourTypes: ["Private Tour", "Craft Workshop", "Underground Tour"],
    maxGroupSize: 15,
    licenseNumber: "LIC-3302-TOK",
    phoneNumber: "+1-717-174-4167",
    contactEmail: "lerato.garcia@paragontrails.com",
    available: [
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
        day: "Saturday",
        availableHours: [
          {
            from: "12:00 PM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "01:00 PM",
            to: "06:00 PM",
          },
          {
            from: "10:00 AM",
            to: "01:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Lerato is a passionate tour guide with extensive knowledge of Tokyo and Japan. Specializing in Historical Landmarks, Sustainable Tourism, Local Markets, Local Cuisine, Lerato provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.9,
    reviewsCount: 95,
    quote: "Tokyo isn't just a destination, it's an experience that stays with you forever.",
    profileImage: "https://randomuser.me/api/portraits/women/80.jpg",
    languages: ["Finnish"],
    experienceYears: 7,
    certifications: ["CPR & First Aid", "Heritage Interpretation Certificate", "Eco-Tourism Guide"],
    specialties: ["Historical Landmarks", "Sustainable Tourism", "Local Markets", "Local Cuisine"],
    specialTraining: ["Art History", "Historical Research Methods"],
  },
  {
    id: "guide-tokyo-5",
    name: "Maya Nakamura",
    city: "Tokyo",
    country: "Japan",
    state: "",
    region: "Asia Pacific",
    isPopular: true,
    bio: "Maya is a passionate tour guide with extensive knowledge of Tokyo and Japan. Specializing in Photography Spots, Street Food, Wine Tasting, Cultural Etiquette, Maya provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["South America", "East Coast Canada"],
    tourTypes: ["Craft Workshop", "Architecture Tour", "Cruise Excursion", "Helicopter Tour", "Festival Tour"],
    maxGroupSize: 8,
    licenseNumber: "LIC-7155-TOK",
    phoneNumber: "+1-749-576-8157",
    contactEmail: "maya.nakamura@paragontrails.com",
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "04:00 PM",
          },
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
            from: "01:00 PM",
            to: "05:00 PM",
          },
          {
            from: "11:00 AM",
            to: "04:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Maya is a passionate tour guide with extensive knowledge of Tokyo and Japan. Specializing in Photography Spots, Street Food, Wine Tasting, Cultural Etiquette, Maya provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.9,
    reviewsCount: 25,
    quote: "In Tokyo, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/women/51.jpg",
    languages: ["Danish"],
    experienceYears: 3,
    certifications: ["Adventure Tourism Safety Certificate"],
    specialties: ["Photography Spots", "Street Food", "Wine Tasting", "Cultural Etiquette"],
    specialTraining: ["Mountain Survival", "Marine Biology"],
  },
  {
    id: "guide-tokyo-6",
    name: "Omar Knight",
    city: "Tokyo",
    country: "Japan",
    state: "",
    region: "Asia Pacific",
    isPopular: false,
    bio: "Omar is a passionate tour guide with extensive knowledge of Tokyo and Japan. Specializing in Sustainable Tourism, Wine Tasting, Omar provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Northern Europe", "Mediterranean"],
    tourTypes: ["Festival Tour", "Adventure Tour"],
    maxGroupSize: 7,
    licenseNumber: "LIC-5381-TOK",
    phoneNumber: "+1-818-164-3320",
    contactEmail: "omar.knight@paragontrails.com",
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "08:00 PM",
          },
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
            from: "11:00 AM",
            to: "01:00 PM",
          },
          {
            from: "09:00 AM",
            to: "03:00 PM",
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
            to: "12:00 PM",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "02:00 PM",
          },
          {
            from: "11:00 AM",
            to: "02:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Omar is a passionate tour guide with extensive knowledge of Tokyo and Japan. Specializing in Sustainable Tourism, Wine Tasting, Omar provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.8,
    reviewsCount: 54,
    quote: "The best way to discover Tokyo is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
    languages: ["Bulgarian"],
    experienceYears: 8,
    certifications: ["Eco-Tourism Guide", "Adventure Tourism Safety Certificate", "Food Safety Certification"],
    specialties: ["Sustainable Tourism", "Wine Tasting"],
    specialTraining: ["Emergency Response", "Photography"],
  },
  {
    id: "guide-tokyo-7",
    name: "Eleanor Suzuki",
    city: "Tokyo",
    country: "Japan",
    state: "",
    region: "Asia Pacific",
    isPopular: true,
    bio: "Eleanor is a passionate tour guide with extensive knowledge of Tokyo and Japan. Specializing in LGBTQ+ History, Eleanor provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Mediterranean"],
    tourTypes: ["Accessible Tour", "Market Tour"],
    maxGroupSize: 5,
    licenseNumber: "LIC-6394-TOK",
    phoneNumber: "+1-182-920-5983",
    contactEmail: "eleanor.suzuki@paragontrails.com",
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "08:00 PM",
          },
          {
            from: "08:00 AM",
            to: "01:00 PM",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "07:00 PM",
          },
          {
            from: "09:00 AM",
            to: "12:00 PM",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "07:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Eleanor is a passionate tour guide with extensive knowledge of Tokyo and Japan. Specializing in LGBTQ+ History, Eleanor provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.2,
    reviewsCount: 67,
    quote: "The best way to discover Tokyo is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/women/47.jpg",
    languages: ["Finnish", "Portuguese"],
    experienceYears: 11,
    certifications: ["Urban Navigation Specialist", "Professional Tour Guide Association", "Cultural Heritage Specialist"],
    specialties: ["LGBTQ+ History"],
    specialTraining: ["Wine Education"],
  },
  {
    id: "guide-tokyo-8",
    name: "Amina Wallace",
    city: "Tokyo",
    country: "Japan",
    state: "",
    region: "Asia Pacific",
    isPopular: false,
    bio: "Amina is a passionate tour guide with extensive knowledge of Tokyo and Japan. Specializing in Wildlife, Adventure Sports, Amina provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Mediterranean", "Africa"],
    tourTypes: ["Accessible Tour", "Bike Tour", "Relocation Tour", "Family-Friendly Tour", "Farm Visit"],
    maxGroupSize: 16,
    licenseNumber: "LIC-7813-TOK",
    phoneNumber: "+1-927-670-1756",
    contactEmail: "amina.wallace@paragontrails.com",
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "02:00 PM",
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
            from: "03:00 PM",
            to: "05:00 PM",
          },
          {
            from: "10:00 AM",
            to: "03:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Amina is a passionate tour guide with extensive knowledge of Tokyo and Japan. Specializing in Wildlife, Adventure Sports, Amina provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.2,
    reviewsCount: 37,
    quote: "In Tokyo, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
    languages: ["Romanian"],
    experienceYears: 13,
    certifications: ["CPR & First Aid", "Local History Certification", "Professional Tour Guide Association"],
    specialties: ["Wildlife", "Adventure Sports"],
    specialTraining: ["Local Flora & Fauna", "Regional Geology"],
  }
];
