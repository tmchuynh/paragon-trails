import { TourGuide } from "@/lib/interfaces/people/staff";

export const bostonunitedStateseastCoastUsaGuides: TourGuide[] = [
  {
    id: "guide-boston-1",
    name: "Walter da Costa",
    city: "Boston",
    country: "United States",
    state: "",
    region: "East Coast USA",
    isPopular: false,
    bio: "Walter is a passionate tour guide with extensive knowledge of Boston and United States. Specializing in Wine Tasting, Walter provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Northern Europe", "East Coast Canada"],
    tourTypes: ["Museum Tour", "Romantic Tour", "Photography Tour", "Scenic Tour"],
    maxGroupSize: 11,
    licenseNumber: "LIC-1254-BOS",
    phoneNumber: "+1-149-971-4342",
    contactEmail: "walter.da@paragontrails.com",
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "08:00 AM",
            to: "02:00 PM",
          },
          {
            from: "08:00 AM",
            to: "11:00 AM",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
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
            from: "02:00 PM",
            to: "07:00 PM",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "05:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Walter is a passionate tour guide with extensive knowledge of Boston and United States. Specializing in Wine Tasting, Walter provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.5,
    reviewsCount: 36,
    quote: "My goal is to help you fall in love with Boston just as I have.",
    profileImage: "https://randomuser.me/api/portraits/men/44.jpg",
    languages: ["Bulgarian", "Swahili", "Hungarian"],
    experienceYears: 7,
    certifications: ["Local History Certification", "Professional Tour Guide Association", "Licensed City Guide"],
    specialties: ["Wine Tasting"],
    specialTraining: ["Regional Geology", "Photography"],
  },
  {
    id: "guide-boston-2",
    name: "Stella Gibson",
    city: "Boston",
    country: "United States",
    state: "",
    region: "East Coast USA",
    isPopular: false,
    bio: "Stella is a passionate tour guide with extensive knowledge of Boston and United States. Specializing in Architecture, Public Transportation Navigation, Religious Sites, Stella provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Mediterranean"],
    tourTypes: ["Cooking Class", "Audio Tour", "Adventure Tour", "Nature Tour"],
    maxGroupSize: 16,
    licenseNumber: "LIC-4953-BOS",
    phoneNumber: "+1-624-351-3655",
    contactEmail: "stella.gibson@paragontrails.com",
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "12:00 PM",
            to: "05:00 PM",
          },
          {
            from: "11:00 AM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "07:00 PM",
          },
          {
            from: "02:00 PM",
            to: "08:00 PM",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "12:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Stella is a passionate tour guide with extensive knowledge of Boston and United States. Specializing in Architecture, Public Transportation Navigation, Religious Sites, Stella provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.1,
    reviewsCount: 15,
    quote: "My goal is to help you fall in love with Boston just as I have.",
    profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
    languages: ["Croatian", "Cantonese"],
    experienceYears: 16,
    certifications: ["Cultural Heritage Specialist"],
    specialties: ["Architecture", "Public Transportation Navigation", "Religious Sites"],
    specialTraining: [],
  },
  {
    id: "guide-boston-3",
    name: "David Johnson",
    city: "Boston",
    country: "United States",
    state: "",
    region: "East Coast USA",
    isPopular: false,
    bio: "David is a passionate tour guide with extensive knowledge of Boston and United States. Specializing in Cultural Etiquette, David provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Mediterranean"],
    tourTypes: ["Accessible Tour", "Luxury Tour", "Off-Road Tour", "Private Tour", "Food Tour"],
    maxGroupSize: 8,
    licenseNumber: "LIC-8931-BOS",
    phoneNumber: "+1-998-400-3482",
    contactEmail: "david.johnson@paragontrails.com",
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "08:00 PM",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
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
            from: "11:00 AM",
            to: "05:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "David is a passionate tour guide with extensive knowledge of Boston and United States. Specializing in Cultural Etiquette, David provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.9,
    reviewsCount: 36,
    quote: "Boston isn't just a destination, it's an experience that stays with you forever.",
    profileImage: "https://randomuser.me/api/portraits/men/36.jpg",
    languages: ["Hindi", "Dutch"],
    experienceYears: 15,
    certifications: ["Certified International Tour Manager", "Sustainable Tourism Certificate", "Heritage Interpretation Certificate"],
    specialties: ["Cultural Etiquette"],
    specialTraining: ["Archaeological Conservation", "Mountain Survival"],
  }
];
