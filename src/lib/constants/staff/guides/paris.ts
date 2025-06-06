import { TourGuide } from "@/lib/interfaces/people/staff";

export const parisfrancenorthernEuropeGuides: TourGuide[] = [
  {
    id: "guide-paris-1",
    name: "Ahmed Hayes",
    city: "Paris",
    country: "France",
    state: "",
    region: "Northern Europe",
    isPopular: false,
    bio: "Ahmed is a passionate tour guide with extensive knowledge of Paris and France. Specializing in Religious Sites, Public Transportation Navigation, Cultural Etiquette, Sustainable Tourism, Ahmed provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Caribbean", "East Coast Canada"],
    tourTypes: ["Wildlife Safari", "Ghost Tour"],
    maxGroupSize: 6,
    licenseNumber: "LIC-2997-PAR",
    phoneNumber: "+1-988-504-6373",
    contactEmail: "ahmed.hayes@paragontrails.com",
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "08:00 PM",
          },
          {
            from: "02:00 PM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "02:00 PM",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "08:00 AM",
            to: "11:00 AM",
          },
          {
            from: "02:00 PM",
            to: "05:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Ahmed is a passionate tour guide with extensive knowledge of Paris and France. Specializing in Religious Sites, Public Transportation Navigation, Cultural Etiquette, Sustainable Tourism, Ahmed provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.1,
    reviewsCount: 74,
    quote: "The best way to discover Paris is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/men/82.jpg",
    languages: ["Arabic"],
    experienceYears: 13,
    certifications: ["Language Proficiency Certification", "Heritage Interpretation Certificate"],
    specialties: ["Religious Sites", "Public Transportation Navigation", "Cultural Etiquette", "Sustainable Tourism"],
    specialTraining: ["Group Management"],
  },
  {
    id: "guide-paris-2",
    name: "Ava Graves",
    city: "Paris",
    country: "France",
    state: "",
    region: "Northern Europe",
    isPopular: true,
    bio: "Ava is a passionate tour guide with extensive knowledge of Paris and France. Specializing in Local Cuisine, Nightlife, Ava provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Northern Europe", "West Coast USA"],
    tourTypes: ["Wildlife Safari", "Family-Friendly Tour", "Street Art Tour"],
    maxGroupSize: 16,
    licenseNumber: "LIC-3596-PAR",
    phoneNumber: "+1-996-205-8508",
    contactEmail: "ava.graves@paragontrails.com",
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "12:00 PM",
            to: "06:00 PM",
          },
          {
            from: "08:00 AM",
            to: "11:00 AM",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "12:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Ava is a passionate tour guide with extensive knowledge of Paris and France. Specializing in Local Cuisine, Nightlife, Ava provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.3,
    reviewsCount: 85,
    quote: "In Paris, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/women/40.jpg",
    languages: ["Czech", "Polish"],
    experienceYears: 10,
    certifications: ["Language Proficiency Certification", "Regional Tourism Ambassador", "Professional Tour Guide Association"],
    specialties: ["Local Cuisine", "Nightlife"],
    specialTraining: [],
  },
  {
    id: "guide-paris-3",
    name: "Ahmed Bennett",
    city: "Paris",
    country: "France",
    state: "",
    region: "Northern Europe",
    isPopular: false,
    bio: "Ahmed is a passionate tour guide with extensive knowledge of Paris and France. Specializing in Public Transportation Navigation, Ahmed provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["South America", "Middle East"],
    tourTypes: ["Street Art Tour", "Relocation Tour", "Walking Tour", "Cooking Class"],
    maxGroupSize: 10,
    licenseNumber: "LIC-2200-PAR",
    phoneNumber: "+1-801-715-8027",
    contactEmail: "ahmed.bennett@paragontrails.com",
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "01:00 PM",
            to: "06:00 PM",
          },
          {
            from: "10:00 AM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "12:00 PM",
            to: "04:00 PM",
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
        day: "Saturday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "03:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Ahmed is a passionate tour guide with extensive knowledge of Paris and France. Specializing in Public Transportation Navigation, Ahmed provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4,
    reviewsCount: 28,
    quote: "In Paris, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/men/18.jpg",
    languages: ["Romanian"],
    experienceYears: 2,
    certifications: ["Urban Navigation Specialist", "Adventure Tourism Safety Certificate", "Language Proficiency Certification"],
    specialties: ["Public Transportation Navigation"],
    specialTraining: ["Wine Education"],
  }
];
