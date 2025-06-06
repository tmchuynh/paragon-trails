import { TourGuide } from "@/lib/interfaces/people/staff";

export const yokohamajapanasiaPacificGuides: TourGuide[] = [
  {
    id: "guide-yokohama-1",
    name: "Ava Dean",
    city: "Yokohama",
    country: "Japan",
    state: "",
    region: "Asia Pacific",
    isPopular: true,
    bio: "Ava is a passionate tour guide with extensive knowledge of Yokohama and Japan. Specializing in Photography Spots, Historical Landmarks, Religious Sites, Ava provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast USA", "South America"],
    tourTypes: ["Market Tour", "Walking Tour", "Accessible Tour"],
    maxGroupSize: 17,
    licenseNumber: "LIC-7120-YOK",
    phoneNumber: "+1-775-876-5888",
    contactEmail: "ava.dean@paragontrails.com",
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "01:00 PM",
            to: "05:00 PM",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "02:00 PM",
          },
          {
            from: "11:00 AM",
            to: "01:00 PM",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "11:00 AM",
          },
          {
            from: "09:00 AM",
            to: "02:00 PM",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "03:00 PM",
          },
          {
            from: "01:00 PM",
            to: "06:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Ava is a passionate tour guide with extensive knowledge of Yokohama and Japan. Specializing in Photography Spots, Historical Landmarks, Religious Sites, Ava provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.6,
    reviewsCount: 67,
    quote: "In Yokohama, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/women/18.jpg",
    languages: ["Dutch", "Norwegian", "Hungarian"],
    experienceYears: 14,
    certifications: ["Certified International Tour Manager"],
    specialties: ["Photography Spots", "Historical Landmarks", "Religious Sites"],
    specialTraining: [],
  },
  {
    id: "guide-yokohama-2",
    name: "Maria Reed",
    city: "Yokohama",
    country: "Japan",
    state: "",
    region: "Asia Pacific",
    isPopular: false,
    bio: "Maria is a passionate tour guide with extensive knowledge of Yokohama and Japan. Specializing in Music Scene, Maria provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Africa"],
    tourTypes: ["Photography Tour", "Eco Tour", "Accessible Tour"],
    maxGroupSize: 13,
    licenseNumber: "LIC-6953-YOK",
    phoneNumber: "+1-371-153-3706",
    contactEmail: "maria.reed@paragontrails.com",
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "05:00 PM",
          },
          {
            from: "10:00 AM",
            to: "01:00 PM",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "02:00 PM",
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
            from: "10:00 AM",
            to: "02:00 PM",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "12:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Maria is a passionate tour guide with extensive knowledge of Yokohama and Japan. Specializing in Music Scene, Maria provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.6,
    reviewsCount: 13,
    quote: "In Yokohama, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/women/69.jpg",
    languages: ["Thai", "Serbian"],
    experienceYears: 10,
    certifications: ["Sustainable Tourism Certificate"],
    specialties: ["Music Scene"],
    specialTraining: ["Art History", "Regional Cuisine"],
  },
  {
    id: "guide-yokohama-3",
    name: "Isabella Singh",
    city: "Yokohama",
    country: "Japan",
    state: "",
    region: "Asia Pacific",
    isPopular: true,
    bio: "Isabella is a passionate tour guide with extensive knowledge of Yokohama and Japan. Specializing in Religious Sites, Isabella provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Africa", "Mediterranean"],
    tourTypes: ["Brewery Tour", "Food Tour"],
    maxGroupSize: 11,
    licenseNumber: "LIC-7973-YOK",
    phoneNumber: "+1-104-427-5293",
    contactEmail: "isabella.singh@paragontrails.com",
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "05:00 PM",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "07:00 PM",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "02:00 PM",
          },
          {
            from: "08:00 AM",
            to: "11:00 AM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Isabella is a passionate tour guide with extensive knowledge of Yokohama and Japan. Specializing in Religious Sites, Isabella provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.8,
    reviewsCount: 24,
    quote: "Yokohama isn't just a destination, it's an experience that stays with you forever.",
    profileImage: "https://randomuser.me/api/portraits/women/86.jpg",
    languages: ["Malay", "Polish", "Finnish"],
    experienceYears: 16,
    certifications: ["Heritage Interpretation Certificate"],
    specialties: ["Religious Sites"],
    specialTraining: ["Historical Research Methods"],
  }
];
