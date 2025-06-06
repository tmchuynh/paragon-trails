import { TourGuide } from "@/lib/interfaces/people/staff";

export const quebecCitycanadaeastCoastCanadaGuides: TourGuide[] = [
  {
    id: "guide-quebec-city-1",
    name: "Carl Hamilton",
    city: "Quebec City",
    country: "Canada",
    state: "",
    region: "East Coast Canada",
    isPopular: false,
    bio: "Carl is a passionate tour guide with extensive knowledge of Quebec City and Canada. Specializing in Local Markets, Carl provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["West Coast USA"],
    tourTypes: ["Nature Tour", "Brewery Tour", "Farm Visit"],
    maxGroupSize: 8,
    licenseNumber: "LIC-3355-QUE",
    phoneNumber: "+1-735-173-9206",
    contactEmail: "carl.hamilton@paragontrails.com",
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "01:00 PM",
            to: "04:00 PM",
          },
          {
            from: "11:00 AM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "08:00 PM",
          },
          {
            from: "03:00 PM",
            to: "09:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Carl is a passionate tour guide with extensive knowledge of Quebec City and Canada. Specializing in Local Markets, Carl provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.9,
    reviewsCount: 102,
    quote: "Quebec City isn't just a destination, it's an experience that stays with you forever.",
    profileImage: "https://randomuser.me/api/portraits/men/70.jpg",
    languages: ["Thai"],
    experienceYears: 15,
    certifications: ["Local History Certification", "Food Safety Certification"],
    specialties: ["Local Markets"],
    specialTraining: ["Photography", "Public Speaking"],
  },
  {
    id: "guide-quebec-city-2",
    name: "Stephanie Anderson",
    city: "Quebec City",
    country: "Canada",
    state: "",
    region: "East Coast Canada",
    isPopular: true,
    bio: "Stephanie is a passionate tour guide with extensive knowledge of Quebec City and Canada. Specializing in Music Scene, Stephanie provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Alaska", "Caribbean"],
    tourTypes: ["Boat Tour", "Market Tour", "Farm Visit", "Wildlife Safari", "Group Tour"],
    maxGroupSize: 17,
    licenseNumber: "LIC-6166-QUE",
    phoneNumber: "+1-285-493-4380",
    contactEmail: "stephanie.anderson@paragontrails.com",
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "03:00 PM",
          },
          {
            from: "01:00 PM",
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
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "05:00 PM",
          },
          {
            from: "03:00 PM",
            to: "06:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Stephanie is a passionate tour guide with extensive knowledge of Quebec City and Canada. Specializing in Music Scene, Stephanie provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.4,
    reviewsCount: 50,
    quote: "Every corner of Quebec City tells a story, let me share them with you.",
    profileImage: "https://randomuser.me/api/portraits/women/69.jpg",
    languages: ["Hindi"],
    experienceYears: 5,
    certifications: ["Eco-Tourism Guide"],
    specialties: ["Music Scene"],
    specialTraining: ["Group Management", "Archaeological Conservation"],
  },
  {
    id: "guide-quebec-city-3",
    name: "Olivia Grant",
    city: "Quebec City",
    country: "Canada",
    state: "",
    region: "East Coast Canada",
    isPopular: false,
    bio: "Olivia is a passionate tour guide with extensive knowledge of Quebec City and Canada. Specializing in Sustainable Tourism, Indigenous Culture, Olivia provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast USA"],
    tourTypes: ["Architecture Tour", "Ghost Tour"],
    maxGroupSize: 12,
    licenseNumber: "LIC-8686-QUE",
    phoneNumber: "+1-975-196-7813",
    contactEmail: "olivia.grant@paragontrails.com",
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "08:00 PM",
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
            from: "02:00 PM",
            to: "06:00 PM",
          },
          {
            from: "02:00 PM",
            to: "05:00 PM",
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
      }
    ],
    isCertified: true,
    description: "Olivia is a passionate tour guide with extensive knowledge of Quebec City and Canada. Specializing in Sustainable Tourism, Indigenous Culture, Olivia provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.1,
    reviewsCount: 97,
    quote: "In Quebec City, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/women/14.jpg",
    languages: ["Hindi"],
    experienceYears: 15,
    certifications: ["Eco-Tourism Guide"],
    specialties: ["Sustainable Tourism", "Indigenous Culture"],
    specialTraining: ["Religious Studies"],
  }
];
