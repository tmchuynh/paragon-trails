import { TourGuide } from "@/lib/interfaces/people/staff";

export const veniceitalymediterraneanGuides: TourGuide[] = [
  {
    id: "guide-venice-1",
    name: "Emily Flores",
    city: "Venice",
    country: "Italy",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Emily is a passionate tour guide with extensive knowledge of Venice and Italy. Specializing in Nightlife, Photography Spots, Indigenous Culture, Emily provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Caribbean"],
    tourTypes: ["Architecture Tour", "Romantic Tour"],
    maxGroupSize: 7,
    licenseNumber: "LIC-3832-VEN",
    phoneNumber: "+1-140-681-6708",
    contactEmail: "emily.flores@paragontrails.com",
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "15:00",
            to: "17:00",
          },
          {
            from: "10:00",
            to: "13:00",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "08:00",
            to: "13:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Emily is a passionate tour guide with extensive knowledge of Venice and Italy. Specializing in Nightlife, Photography Spots, Indigenous Culture, Emily provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.9,
    reviewsCount: 56,
    quote: "Every corner of Venice tells a story, let me share them with you.",
    profileImage: "https://randomuser.me/api/portraits/men/14.jpg",
    languages: ["Bulgarian", "Hebrew"],
    experienceYears: 14,
    certifications: ["Regional Tourism Ambassador"],
    specialties: ["Nightlife", "Photography Spots", "Indigenous Culture"],
    specialTraining: ["Photography"],
  },
  {
    id: "guide-venice-2",
    name: "Lucas Miller",
    city: "Venice",
    country: "Italy",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Lucas is a passionate tour guide with extensive knowledge of Venice and Italy. Specializing in Sustainable Tourism, Religious Sites, Indigenous Culture, Lucas provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Asia Pacific"],
    tourTypes: ["Cultural Tour", "Eco Tour", "Wine Tour"],
    maxGroupSize: 10,
    licenseNumber: "LIC-9809-VEN",
    phoneNumber: "+1-354-798-3397",
    contactEmail: "lucas.miller@paragontrails.com",
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "14:00",
            to: "17:00",
          },
          {
            from: "10:00",
            to: "14:00",
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
            from: "14:00",
            to: "20:00",
          },
          {
            from: "08:00",
            to: "13:00",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "11:00",
            to: "14:00",
          },
          {
            from: "15:00",
            to: "18:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Lucas is a passionate tour guide with extensive knowledge of Venice and Italy. Specializing in Sustainable Tourism, Religious Sites, Indigenous Culture, Lucas provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.8,
    reviewsCount: 23,
    quote: "My goal is to help you fall in love with Venice just as I have.",
    profileImage: "https://randomuser.me/api/portraits/men/16.jpg",
    languages: ["Malay", "German", "Portuguese"],
    experienceYears: 12,
    certifications: ["Certified International Tour Manager", "Heritage Interpretation Certificate"],
    specialties: ["Sustainable Tourism", "Religious Sites", "Indigenous Culture"],
    specialTraining: ["Photography"],
  },
  {
    id: "guide-venice-3",
    name: "Henry Wilson",
    city: "Venice",
    country: "Italy",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Henry is a passionate tour guide with extensive knowledge of Venice and Italy. Specializing in Parks & Gardens, Henry provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Caribbean"],
    tourTypes: ["Scenic Tour", "Group Tour"],
    maxGroupSize: 15,
    licenseNumber: "LIC-4579-VEN",
    phoneNumber: "+1-954-729-3858",
    contactEmail: "henry.wilson@paragontrails.com",
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00",
          },
          {
            from: "12:00",
            to: "15:00",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "09:00",
            to: "11:00",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Henry is a passionate tour guide with extensive knowledge of Venice and Italy. Specializing in Parks & Gardens, Henry provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.8,
    reviewsCount: 47,
    quote: "The best way to discover Venice is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/women/73.jpg",
    languages: ["Arabic", "Swedish"],
    experienceYears: 4,
    certifications: ["Eco-Tourism Guide", "Adventure Tourism Safety Certificate"],
    specialties: ["Parks & Gardens"],
    specialTraining: ["Marine Biology", "Local Transit Systems"],
  }
];
