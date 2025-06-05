import { TourGuide } from "@/lib/interfaces/people/staff";

export const maltamaltamediterraneanGuides: TourGuide[] = [
  {
    id: "guide-malta-1",
    name: "Lily Rodriguez",
    city: "malta",
    country: "Malta",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Lily is a passionate tour guide with extensive knowledge of malta and Malta. Specializing in Film Locations, LGBTQ+ History, Sustainable Tourism, Adventure Sports, Lily provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast Canada", "East Coast USA"],
    tourTypes: ["Romantic Tour", "Brewery Tour", "Boat Tour"],
    maxGroupSize: 7,
    licenseNumber: "LIC-6564-MAL",
    phoneNumber: "+1-883-801-2834",
    contactEmail: "lily.rodriguez@paragontrails.com",
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "12:00",
            to: "15:00",
          },
          {
            from: "12:00",
            to: "18:00",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "11:00",
            to: "14:00",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "12:00",
            to: "17:00",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "13:00",
            to: "16:00",
          },
          {
            from: "08:00",
            to: "13:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Lily is a passionate tour guide with extensive knowledge of malta and Malta. Specializing in Film Locations, LGBTQ+ History, Sustainable Tourism, Adventure Sports, Lily provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.4,
    reviewsCount: 102,
    quote: "malta isn't just a destination, it's an experience that stays with you forever.",
    profileImage: "https://randomuser.me/api/portraits/women/37.jpg",
    languages: ["Mandarin"],
    experienceYears: 13,
    certifications: ["Adventure Tourism Safety Certificate"],
    specialties: ["Film Locations", "LGBTQ+ History", "Sustainable Tourism", "Adventure Sports"],
    specialTraining: ["Archaeological Conservation", "Emergency Response"],
  },
  {
    id: "guide-malta-2",
    name: "Abigail Nguyen",
    city: "malta",
    country: "Malta",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Abigail is a passionate tour guide with extensive knowledge of malta and Malta. Specializing in Photography Spots, Abigail provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast Canada"],
    tourTypes: ["Farm Visit", "Adventure Tour", "Photography Tour"],
    maxGroupSize: 6,
    licenseNumber: "LIC-5520-MAL",
    phoneNumber: "+1-298-900-7321",
    contactEmail: "abigail.nguyen@paragontrails.com",
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "10:00",
            to: "13:00",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "11:00",
            to: "16:00",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "15:00",
            to: "21:00",
          },
          {
            from: "09:00",
            to: "12:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Abigail is a passionate tour guide with extensive knowledge of malta and Malta. Specializing in Photography Spots, Abigail provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.5,
    reviewsCount: 73,
    quote: "Every corner of malta tells a story, let me share them with you.",
    profileImage: "https://randomuser.me/api/portraits/men/48.jpg",
    languages: ["Polish", "Swahili"],
    experienceYears: 14,
    certifications: ["Urban Navigation Specialist", "Adventure Tourism Safety Certificate"],
    specialties: ["Photography Spots"],
    specialTraining: ["Local Transit Systems"],
  },
  {
    id: "guide-malta-3",
    name: "Victoria Jackson",
    city: "malta",
    country: "Malta",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Victoria is a passionate tour guide with extensive knowledge of malta and Malta. Specializing in LGBTQ+ History, Street Food, Local Markets, Hidden Gems, Victoria provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Middle East"],
    tourTypes: ["Walking Tour", "Relocation Tour", "Photography Tour", "Private Tour"],
    maxGroupSize: 12,
    licenseNumber: "LIC-9655-MAL",
    phoneNumber: "+1-739-332-1378",
    contactEmail: "victoria.jackson@paragontrails.com",
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "14:00",
            to: "16:00",
          },
          {
            from: "09:00",
            to: "15:00",
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
            from: "14:00",
            to: "16:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Victoria is a passionate tour guide with extensive knowledge of malta and Malta. Specializing in LGBTQ+ History, Street Food, Local Markets, Hidden Gems, Victoria provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.6,
    reviewsCount: 28,
    quote: "In malta, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/men/78.jpg",
    languages: ["Japanese", "Hebrew"],
    experienceYears: 11,
    certifications: ["Sustainable Tourism Certificate"],
    specialties: ["LGBTQ+ History", "Street Food", "Local Markets", "Hidden Gems"],
    specialTraining: ["Art History", "Urban Planning"],
  }
];
