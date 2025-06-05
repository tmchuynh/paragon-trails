import { TourGuide } from "@/lib/interfaces/people/staff";

export const vancouvercanadaalaskaGuides: TourGuide[] = [
  {
    id: "guide-vancouver-1",
    name: "Zoe Thompson",
    city: "vancouver",
    country: "Canada",
    state: "",
    region: "Alaska",
    isPopular: true,
    bio: "Zoe is a passionate tour guide with extensive knowledge of vancouver and Canada. Specializing in Art Galleries, Museums, Zoe provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Middle East", "Northern Europe"],
    tourTypes: ["Wildlife Safari", "LGBTQ+ Friendly Tour", "Underground Tour", "Accessible Tour"],
    maxGroupSize: 14,
    licenseNumber: "LIC-9617-VAN",
    phoneNumber: "+1-891-192-2437",
    contactEmail: "zoe.thompson@paragontrails.com",
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "15:00",
            to: "21:00",
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
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "09:00",
            to: "12:00",
          },
          {
            from: "11:00",
            to: "15:00",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "10:00",
            to: "13:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Zoe is a passionate tour guide with extensive knowledge of vancouver and Canada. Specializing in Art Galleries, Museums, Zoe provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.6,
    reviewsCount: 49,
    quote: "The best way to discover vancouver is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/women/52.jpg",
    languages: ["Bulgarian"],
    experienceYears: 10,
    certifications: ["CPR & First Aid"],
    specialties: ["Art Galleries", "Museums"],
    specialTraining: [],
  },
  {
    id: "guide-vancouver-2",
    name: "Scarlett Johnson",
    city: "vancouver",
    country: "Canada",
    state: "",
    region: "Alaska",
    isPopular: true,
    bio: "Scarlett is a passionate tour guide with extensive knowledge of vancouver and Canada. Specializing in Street Food, Music Scene, Hidden Gems, Scarlett provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast Canada"],
    tourTypes: ["Relocation Tour", "Underground Tour"],
    maxGroupSize: 14,
    licenseNumber: "LIC-5628-VAN",
    phoneNumber: "+1-843-622-8204",
    contactEmail: "scarlett.johnson@paragontrails.com",
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "11:00",
            to: "16:00",
          },
          {
            from: "10:00",
            to: "12:00",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "11:00",
            to: "14:00",
          },
          {
            from: "15:00",
            to: "19:00",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "15:00",
            to: "19:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Scarlett is a passionate tour guide with extensive knowledge of vancouver and Canada. Specializing in Street Food, Music Scene, Hidden Gems, Scarlett provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.8,
    reviewsCount: 5,
    quote: "The best way to discover vancouver is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
    languages: ["Czech"],
    experienceYears: 13,
    certifications: ["Adventure Tourism Safety Certificate", "Heritage Interpretation Certificate"],
    specialties: ["Street Food", "Music Scene", "Hidden Gems"],
    specialTraining: ["Desert Navigation"],
  },
  {
    id: "guide-vancouver-3",
    name: "Alexander Rodriguez",
    city: "vancouver",
    country: "Canada",
    state: "",
    region: "Alaska",
    isPopular: false,
    bio: "Alexander is a passionate tour guide with extensive knowledge of vancouver and Canada. Specializing in Art Galleries, Sustainable Tourism, Alexander provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast Canada"],
    tourTypes: ["Bike Tour", "Cultural Tour", "Street Art Tour", "LGBTQ+ Friendly Tour", "Adventure Tour"],
    maxGroupSize: 11,
    licenseNumber: "LIC-4634-VAN",
    phoneNumber: "+1-844-737-4996",
    contactEmail: "alexander.rodriguez@paragontrails.com",
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "14:00",
            to: "20:00",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "15:00",
            to: "21:00",
          },
          {
            from: "15:00",
            to: "20:00",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "11:00",
            to: "15:00",
          },
          {
            from: "11:00",
            to: "15:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Alexander is a passionate tour guide with extensive knowledge of vancouver and Canada. Specializing in Art Galleries, Sustainable Tourism, Alexander provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.5,
    reviewsCount: 49,
    quote: "In vancouver, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
    languages: ["Turkish", "Croatian", "Bulgarian"],
    experienceYears: 16,
    certifications: ["Certified International Tour Manager"],
    specialties: ["Art Galleries", "Sustainable Tourism"],
    specialTraining: ["Regional Cuisine"],
  }
];
