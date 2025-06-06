import { TourGuide } from "@/lib/interfaces/people/staff";

export const yokohamajapanasiaPacificGuides: TourGuide[] = [
  {
    id: "guide-yokohama-1",
    name: "Sebastian Wallace",
    city: "Yokohama",
    country: "Japan",
    state: "",
    region: "Asia Pacific",
    isPopular: false,
    bio: "Sebastian is a passionate tour guide with extensive knowledge of Yokohama and Japan. Specializing in Religious Sites, Cultural Etiquette, Urban Legends, Wildlife, Sebastian provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast USA"],
    tourTypes: ["Cruise Excursion", "Street Art Tour", "Nature Tour", "Scenic Tour"],
    maxGroupSize: 15,
    licenseNumber: "LIC-2402-YOK",
    phoneNumber: "+1-935-590-6110",
    contactEmail: "sebastian.wallace@paragontrails.com",
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "02:00 PM",
          },
          {
            from: "03:00 PM",
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
            from: "03:00 PM",
            to: "05:00 PM",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "01:00 PM",
          },
          {
            from: "01:00 PM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "08:00 AM",
            to: "01:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Sebastian is a passionate tour guide with extensive knowledge of Yokohama and Japan. Specializing in Religious Sites, Cultural Etiquette, Urban Legends, Wildlife, Sebastian provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.8,
    reviewsCount: 38,
    quote: "In Yokohama, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/men/83.jpg",
    languages: ["Serbian", "French"],
    experienceYears: 5,
    certifications: ["Certified International Tour Manager", "Heritage Interpretation Certificate"],
    specialties: ["Religious Sites", "Cultural Etiquette", "Urban Legends", "Wildlife"],
    specialTraining: [],
  },
  {
    id: "guide-yokohama-2",
    name: "Alexander Smith",
    city: "Yokohama",
    country: "Japan",
    state: "",
    region: "Asia Pacific",
    isPopular: true,
    bio: "Alexander is a passionate tour guide with extensive knowledge of Yokohama and Japan. Specializing in Urban Legends, Parks & Gardens, Indigenous Culture, Alexander provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast USA", "West Coast USA"],
    tourTypes: ["Scenic Tour", "LGBTQ+ Friendly Tour"],
    maxGroupSize: 10,
    licenseNumber: "LIC-9191-YOK",
    phoneNumber: "+1-356-398-4552",
    contactEmail: "alexander.smith@paragontrails.com",
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "08:00 AM",
            to: "01:00 PM",
          },
          {
            from: "11:00 AM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "08:00 AM",
            to: "10:00 AM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Alexander is a passionate tour guide with extensive knowledge of Yokohama and Japan. Specializing in Urban Legends, Parks & Gardens, Indigenous Culture, Alexander provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.5,
    reviewsCount: 86,
    quote: "The best way to discover Yokohama is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/men/66.jpg",
    languages: ["Indonesian"],
    experienceYears: 2,
    certifications: ["Eco-Tourism Guide"],
    specialties: ["Urban Legends", "Parks & Gardens", "Indigenous Culture"],
    specialTraining: ["Regional Cuisine", "Cultural Sensitivity"],
  },
  {
    id: "guide-yokohama-3",
    name: "Chen Reeves",
    city: "Yokohama",
    country: "Japan",
    state: "",
    region: "Asia Pacific",
    isPopular: false,
    bio: "Chen is a passionate tour guide with extensive knowledge of Yokohama and Japan. Specializing in Music Scene, Hidden Gems, Adventure Sports, Local Craftsmanship, Chen provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Northern Europe"],
    tourTypes: ["Bike Tour", "Market Tour"],
    maxGroupSize: 18,
    licenseNumber: "LIC-8884-YOK",
    phoneNumber: "+1-237-412-2388",
    contactEmail: "chen.reeves@paragontrails.com",
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "05:00 PM",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
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
            from: "08:00 AM",
            to: "11:00 AM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Chen is a passionate tour guide with extensive knowledge of Yokohama and Japan. Specializing in Music Scene, Hidden Gems, Adventure Sports, Local Craftsmanship, Chen provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.7,
    reviewsCount: 99,
    quote: "Every corner of Yokohama tells a story, let me share them with you.",
    profileImage: "https://randomuser.me/api/portraits/men/70.jpg",
    languages: ["Tagalog"],
    experienceYears: 12,
    certifications: ["Cultural Heritage Specialist"],
    specialties: ["Music Scene", "Hidden Gems", "Adventure Sports", "Local Craftsmanship"],
    specialTraining: ["Regional Cuisine"],
  }
];
