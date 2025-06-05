import { TourGuide } from "@/lib/interfaces/people/staff";

export const ketchikanunitedStatesalaskaGuides: TourGuide[] = [
  {
    id: "guide-ketchikan-1",
    name: "Wyatt Clark",
    city: "Ketchikan",
    country: "United States",
    state: "",
    region: "Alaska",
    isPopular: true,
    bio: "Wyatt is a passionate tour guide with extensive knowledge of Ketchikan and United States. Specializing in Museums, Local Cuisine, Wyatt provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Middle East", "South America"],
    tourTypes: ["Walking Tour", "Adventure Tour", "Accessible Tour"],
    maxGroupSize: 8,
    licenseNumber: "LIC-9736-KET",
    phoneNumber: "+1-950-233-5204",
    contactEmail: "wyatt.clark@paragontrails.com",
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "15:00",
            to: "18:00",
          },
          {
            from: "09:00",
            to: "11:00",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "15:00",
            to: "21:00",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "11:00",
            to: "13:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Wyatt is a passionate tour guide with extensive knowledge of Ketchikan and United States. Specializing in Museums, Local Cuisine, Wyatt provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.4,
    reviewsCount: 16,
    quote: "The best way to discover Ketchikan is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/women/67.jpg",
    languages: ["English", "Cantonese", "Norwegian"],
    experienceYears: 10,
    certifications: ["Local History Certification"],
    specialties: ["Museums", "Local Cuisine"],
    specialTraining: [],
  },
  {
    id: "guide-ketchikan-2",
    name: "William Taylor",
    city: "Ketchikan",
    country: "United States",
    state: "",
    region: "Alaska",
    isPopular: false,
    bio: "William is a passionate tour guide with extensive knowledge of Ketchikan and United States. Specializing in Public Transportation Navigation, Photography Spots, Urban Legends, Local Cuisine, William provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast USA"],
    tourTypes: ["Craft Workshop", "Brewery Tour", "Audio Tour", "Market Tour"],
    maxGroupSize: 7,
    licenseNumber: "LIC-7825-KET",
    phoneNumber: "+1-853-509-2689",
    contactEmail: "william.taylor@paragontrails.com",
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00",
          },
          {
            from: "08:00",
            to: "11:00",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "15:00",
            to: "20:00",
          },
          {
            from: "15:00",
            to: "17:00",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "14:00",
            to: "18:00",
          },
          {
            from: "13:00",
            to: "18:00",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "10:00",
            to: "16:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "William is a passionate tour guide with extensive knowledge of Ketchikan and United States. Specializing in Public Transportation Navigation, Photography Spots, Urban Legends, Local Cuisine, William provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.9,
    reviewsCount: 95,
    quote: "Ketchikan isn't just a destination, it's an experience that stays with you forever.",
    profileImage: "https://randomuser.me/api/portraits/women/25.jpg",
    languages: ["Mandarin", "Greek", "Indonesian"],
    experienceYears: 15,
    certifications: ["Licensed City Guide"],
    specialties: ["Public Transportation Navigation", "Photography Spots", "Urban Legends", "Local Cuisine"],
    specialTraining: ["Marine Biology", "Regional Geology"],
  },
  {
    id: "guide-ketchikan-3",
    name: "Aiden Hernandez",
    city: "Ketchikan",
    country: "United States",
    state: "",
    region: "Alaska",
    isPopular: true,
    bio: "Aiden is a passionate tour guide with extensive knowledge of Ketchikan and United States. Specializing in Historical Landmarks, Architecture, Aiden provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Africa"],
    tourTypes: ["Boat Tour", "Historical Tour"],
    maxGroupSize: 5,
    licenseNumber: "LIC-4567-KET",
    phoneNumber: "+1-955-496-9933",
    contactEmail: "aiden.hernandez@paragontrails.com",
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "10:00",
            to: "15:00",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "09:00",
            to: "11:00",
          },
          {
            from: "09:00",
            to: "13:00",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "11:00",
            to: "14:00",
          },
          {
            from: "10:00",
            to: "12:00",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "09:00",
            to: "11:00",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "12:00",
            to: "15:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Aiden is a passionate tour guide with extensive knowledge of Ketchikan and United States. Specializing in Historical Landmarks, Architecture, Aiden provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.1,
    reviewsCount: 32,
    quote: "The best way to discover Ketchikan is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/men/36.jpg",
    languages: ["Swahili"],
    experienceYears: 14,
    certifications: ["Wilderness First Responder"],
    specialties: ["Historical Landmarks", "Architecture"],
    specialTraining: [],
  }
];
