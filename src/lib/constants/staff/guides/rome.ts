import { TourGuide } from "@/lib/interfaces/people/staff";

export const romeitalymediterraneanGuides: TourGuide[] = [
  {
    id: "guide-rome-1",
    name: "Nicholas Anderson",
    city: "Rome",
    country: "Italy",
    state: "",
    region: "Mediterranean",
    isPopular: true,
    bio: "Nicholas is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Wine Tasting, Hidden Gems, Architecture, Nicholas provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["South America"],
    tourTypes: ["Brewery Tour", "Luxury Tour", "Off-Road Tour", "Festival Tour", "Cooking Class"],
    maxGroupSize: 15,
    licenseNumber: "LIC-6965-ROM",
    phoneNumber: "+1-738-667-8154",
    contactEmail: "nicholas.anderson@paragontrails.com",
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "08:00 AM",
            to: "11:00 AM",
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
            from: "02:00 PM",
            to: "06:00 PM",
          },
          {
            from: "12:00 PM",
            to: "02:00 PM",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "01:00 PM",
            to: "06:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Nicholas is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Wine Tasting, Hidden Gems, Architecture, Nicholas provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4,
    reviewsCount: 29,
    quote: "My goal is to help you fall in love with Rome just as I have.",
    profileImage: "https://randomuser.me/api/portraits/men/33.jpg",
    languages: ["Japanese", "Swahili"],
    experienceYears: 5,
    certifications: ["Local History Certification", "Adventure Tourism Safety Certificate"],
    specialties: ["Wine Tasting", "Hidden Gems", "Architecture"],
    specialTraining: ["Historical Research Methods"],
  },
  {
    id: "guide-rome-2",
    name: "Grace Russell",
    city: "Rome",
    country: "Italy",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Grace is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Hidden Gems, Sustainable Tourism, Museums, Grace provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Caribbean", "Alaska"],
    tourTypes: ["Self-Guided Tour", "Family-Friendly Tour"],
    maxGroupSize: 19,
    licenseNumber: "LIC-7127-ROM",
    phoneNumber: "+1-992-606-7664",
    contactEmail: "grace.russell@paragontrails.com",
    available: [
      {
        day: "Friday",
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
        day: "Thursday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "08:00 PM",
          },
          {
            from: "02:00 PM",
            to: "08:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Grace is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Hidden Gems, Sustainable Tourism, Museums, Grace provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.9,
    reviewsCount: 64,
    quote: "The best way to discover Rome is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/women/27.jpg",
    languages: ["Croatian", "Malay", "Serbian"],
    experienceYears: 5,
    certifications: ["Cultural Heritage Specialist"],
    specialties: ["Hidden Gems", "Sustainable Tourism", "Museums"],
    specialTraining: ["Wine Education", "Archaeological Conservation"],
  },
  {
    id: "guide-rome-3",
    name: "Rebecca Reed",
    city: "Rome",
    country: "Italy",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Rebecca is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Family Activities, Music Scene, Local Cuisine, Museums, Rebecca provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["West Coast USA"],
    tourTypes: ["Brewery Tour", "Architecture Tour", "Wine Tour", "Group Tour"],
    maxGroupSize: 15,
    licenseNumber: "LIC-3333-ROM",
    phoneNumber: "+1-736-163-5266",
    contactEmail: "rebecca.reed@paragontrails.com",
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "05:00 PM",
          },
          {
            from: "10:00 AM",
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
          },
          {
            from: "09:00 AM",
            to: "12:00 PM",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "12:00 PM",
            to: "03:00 PM",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "01:00 PM",
            to: "05:00 PM",
          },
          {
            from: "10:00 AM",
            to: "04:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Rebecca is a passionate tour guide with extensive knowledge of Rome and Italy. Specializing in Family Activities, Music Scene, Local Cuisine, Museums, Rebecca provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.8,
    reviewsCount: 6,
    quote: "In Rome, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
    languages: ["Finnish", "Polish"],
    experienceYears: 13,
    certifications: ["Food Safety Certification"],
    specialties: ["Family Activities", "Music Scene", "Local Cuisine", "Museums"],
    specialTraining: ["Local Flora & Fauna"],
  }
];
