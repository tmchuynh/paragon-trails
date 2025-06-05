import { TourGuide } from "@/lib/interfaces/people/staff";

export const hongKongchinaasiaPacificGuides: TourGuide[] = [
  {
    id: "guide-hong-kong-1",
    name: "Penelope Robinson",
    city: "hong-kong",
    country: "China",
    state: "",
    region: "Asia Pacific",
    isPopular: false,
    bio: "Penelope is a passionate tour guide with extensive knowledge of hong-kong and China. Specializing in Wine Tasting, Penelope provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["West Coast USA", "Caribbean"],
    tourTypes: ["Cruise Excursion", "Cooking Class"],
    maxGroupSize: 8,
    licenseNumber: "LIC-6903-HON",
    phoneNumber: "+1-641-237-5191",
    contactEmail: "penelope.robinson@paragontrails.com",
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "15:00",
            to: "17:00",
          },
          {
            from: "14:00",
            to: "16:00",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "13:00",
            to: "17:00",
          },
          {
            from: "11:00",
            to: "13:00",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "15:00",
            to: "18:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Penelope is a passionate tour guide with extensive knowledge of hong-kong and China. Specializing in Wine Tasting, Penelope provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.7,
    reviewsCount: 33,
    quote: "The best way to discover hong-kong is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/men/42.jpg",
    languages: ["English", "Croatian", "Romanian"],
    experienceYears: 5,
    certifications: ["Cultural Heritage Specialist", "Licensed City Guide"],
    specialties: ["Wine Tasting"],
    specialTraining: ["Regional Cuisine", "Archaeological Conservation"],
  },
  {
    id: "guide-hong-kong-2",
    name: "Evelyn King",
    city: "hong-kong",
    country: "China",
    state: "",
    region: "Asia Pacific",
    isPopular: true,
    bio: "Evelyn is a passionate tour guide with extensive knowledge of hong-kong and China. Specializing in Street Food, Evelyn provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Asia Pacific"],
    tourTypes: ["Photography Tour", "Walking Tour", "Wildlife Safari", "Religious Tour"],
    maxGroupSize: 16,
    licenseNumber: "LIC-4141-HON",
    phoneNumber: "+1-703-889-7466",
    contactEmail: "evelyn.king@paragontrails.com",
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "15:00",
            to: "17:00",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "13:00",
            to: "19:00",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "08:00",
            to: "13:00",
          },
          {
            from: "13:00",
            to: "18:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Evelyn is a passionate tour guide with extensive knowledge of hong-kong and China. Specializing in Street Food, Evelyn provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.9,
    reviewsCount: 41,
    quote: "The best way to discover hong-kong is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/men/57.jpg",
    languages: ["Malay", "Japanese", "Thai"],
    experienceYears: 16,
    certifications: ["Certified International Tour Manager", "Eco-Tourism Guide"],
    specialties: ["Street Food"],
    specialTraining: ["Urban Planning"],
  },
  {
    id: "guide-hong-kong-3",
    name: "Charlotte Robinson",
    city: "hong-kong",
    country: "China",
    state: "",
    region: "Asia Pacific",
    isPopular: true,
    bio: "Charlotte is a passionate tour guide with extensive knowledge of hong-kong and China. Specializing in Architecture, Charlotte provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Caribbean"],
    tourTypes: ["Food Tour", "Accessible Tour", "Religious Tour", "Architecture Tour", "LGBTQ+ Friendly Tour"],
    maxGroupSize: 17,
    licenseNumber: "LIC-1981-HON",
    phoneNumber: "+1-262-669-8608",
    contactEmail: "charlotte.robinson@paragontrails.com",
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "08:00",
            to: "14:00",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "15:00",
            to: "18:00",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "11:00",
            to: "14:00",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "11:00",
            to: "16:00",
          },
          {
            from: "12:00",
            to: "17:00",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "11:00",
            to: "13:00",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "11:00",
            to: "17:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Charlotte is a passionate tour guide with extensive knowledge of hong-kong and China. Specializing in Architecture, Charlotte provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.1,
    reviewsCount: 52,
    quote: "The best way to discover hong-kong is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/men/65.jpg",
    languages: ["Finnish", "Norwegian"],
    experienceYears: 13,
    certifications: ["CPR & First Aid", "Certified International Tour Manager", "Regional Tourism Ambassador"],
    specialties: ["Architecture"],
    specialTraining: ["Group Management", "Wine Education"],
  }
];
