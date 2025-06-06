import { TourGuide } from "@/lib/interfaces/people/staff";

export const newYorkCityunitedStateseastCoastUsaGuides: TourGuide[] = [
  {
    id: "guide-new-york-city-1",
    name: "Skylar King",
    city: "New York City",
    country: "United States",
    state: "",
    region: "East Coast USA",
    isPopular: false,
    bio: "Skylar is a passionate tour guide with extensive knowledge of New York City and United States. Specializing in Local Craftsmanship, Photography Spots, Museums, Local Markets, Skylar provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["West Coast USA", "Alaska"],
    tourTypes: ["Adventure Tour", "Luxury Tour", "Street Art Tour", "Festival Tour"],
    maxGroupSize: 16,
    licenseNumber: "LIC-4768-NEW",
    phoneNumber: "+1-418-559-7456",
    contactEmail: "skylar.king@paragontrails.com",
    available: [
      {
        day: "Monday",
        availableHours: [
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
            from: "12:00 PM",
            to: "06:00 PM",
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
            from: "08:00 AM",
            to: "11:00 AM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Skylar is a passionate tour guide with extensive knowledge of New York City and United States. Specializing in Local Craftsmanship, Photography Spots, Museums, Local Markets, Skylar provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.8,
    reviewsCount: 8,
    quote: "New York City isn't just a destination, it's an experience that stays with you forever.",
    profileImage: "https://randomuser.me/api/portraits/women/72.jpg",
    languages: ["Mandarin", "Korean", "Thai"],
    experienceYears: 2,
    certifications: ["Language Proficiency Certification"],
    specialties: ["Local Craftsmanship", "Photography Spots", "Museums", "Local Markets"],
    specialTraining: ["Historical Research Methods"],
  },
  {
    id: "guide-new-york-city-2",
    name: "Genesis Mitchell",
    city: "New York City",
    country: "United States",
    state: "",
    region: "East Coast USA",
    isPopular: true,
    bio: "Genesis is a passionate tour guide with extensive knowledge of New York City and United States. Specializing in Architecture, Nightlife, Genesis provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Africa"],
    tourTypes: ["Architecture Tour", "Photography Tour", "Brewery Tour"],
    maxGroupSize: 19,
    licenseNumber: "LIC-6257-NEW",
    phoneNumber: "+1-432-348-5364",
    contactEmail: "genesis.mitchell@paragontrails.com",
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "08:00 AM",
            to: "02:00 PM",
          },
          {
            from: "03:00 PM",
            to: "08:00 PM",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "01:00 PM",
            to: "07:00 PM",
          },
          {
            from: "01:00 PM",
            to: "06:00 PM",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "03:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Genesis is a passionate tour guide with extensive knowledge of New York City and United States. Specializing in Architecture, Nightlife, Genesis provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4,
    reviewsCount: 27,
    quote: "Every corner of New York City tells a story, let me share them with you.",
    profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
    languages: ["Croatian", "Thai", "Greek"],
    experienceYears: 4,
    certifications: ["Adventure Tourism Safety Certificate", "Local History Certification", "Cultural Heritage Specialist"],
    specialties: ["Architecture", "Nightlife"],
    specialTraining: [],
  },
  {
    id: "guide-new-york-city-3",
    name: "Omar Nash",
    city: "New York City",
    country: "United States",
    state: "",
    region: "East Coast USA",
    isPopular: false,
    bio: "Omar is a passionate tour guide with extensive knowledge of New York City and United States. Specializing in Urban Legends, Omar provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["West Coast USA", "East Coast Canada"],
    tourTypes: ["Craft Workshop", "Self-Guided Tour", "Bike Tour"],
    maxGroupSize: 13,
    licenseNumber: "LIC-8333-NEW",
    phoneNumber: "+1-990-277-9478",
    contactEmail: "omar.nash@paragontrails.com",
    available: [
      {
        day: "Sunday",
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
            from: "12:00 PM",
            to: "02:00 PM",
          },
          {
            from: "12:00 PM",
            to: "06:00 PM",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "01:00 PM",
            to: "03:00 PM",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "08:00 AM",
            to: "12:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Omar is a passionate tour guide with extensive knowledge of New York City and United States. Specializing in Urban Legends, Omar provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.5,
    reviewsCount: 11,
    quote: "Every corner of New York City tells a story, let me share them with you.",
    profileImage: "https://randomuser.me/api/portraits/men/0.jpg",
    languages: ["Portuguese", "Norwegian"],
    experienceYears: 15,
    certifications: ["Cultural Heritage Specialist"],
    specialties: ["Urban Legends"],
    specialTraining: ["Accessibility Services", "Group Management"],
  }
];
