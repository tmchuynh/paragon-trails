import { TourGuide } from "@/lib/interfaces/people/staff";

export const oslonorwaynorthernEuropeGuides: TourGuide[] = [
  {
    id: "guide-oslo-1",
    name: "Scarlett Johnson",
    city: "oslo",
    country: "Norway",
    state: "",
    region: "Northern Europe",
    isPopular: false,
    bio: "Scarlett is a passionate tour guide with extensive knowledge of oslo and Norway. Specializing in Art Galleries, Indigenous Culture, Scarlett provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Asia Pacific"],
    tourTypes: ["Off-Road Tour", "Helicopter Tour"],
    maxGroupSize: 13,
    licenseNumber: "LIC-9522-OSL",
    phoneNumber: "+1-718-179-8689",
    contactEmail: "scarlett.johnson@paragontrails.com",
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "11:00",
            to: "17:00",
          },
          {
            from: "14:00",
            to: "16:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "12:00",
            to: "14:00",
          },
          {
            from: "15:00",
            to: "20:00",
          },
        ],
      },
    ],
    isCertified: true,
    description:
      "Scarlett is a passionate tour guide with extensive knowledge of oslo and Norway. Specializing in Art Galleries, Indigenous Culture, Scarlett provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.5,
    reviewsCount: 96,
    quote: "My goal is to help you fall in love with oslo just as I have.",
    profileImage: "https://randomuser.me/api/portraits/women/27.jpg",
    languages: ["Bulgarian", "Serbian", "Tagalog"],
    experienceYears: 6,
    certifications: [
      "Licensed City Guide",
      "Sustainable Tourism Certificate",
      "Cultural Heritage Specialist",
    ],
    specialties: ["Art Galleries", "Indigenous Culture"],
    specialTraining: ["Religious Studies"],
  },
  {
    id: "guide-oslo-2",
    name: "Sophia Harris",
    city: "oslo",
    country: "Norway",
    state: "",
    region: "Northern Europe",
    isPopular: true,
    bio: "Sophia is a passionate tour guide with extensive knowledge of oslo and Norway. Specializing in Art Galleries, Sophia provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Mediterranean"],
    tourTypes: ["Cooking Class", "Ghost Tour", "Cruise Excursion"],
    maxGroupSize: 18,
    licenseNumber: "LIC-4039-OSL",
    phoneNumber: "+1-400-841-8261",
    contactEmail: "sophia.harris@paragontrails.com",
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "13:00",
            to: "17:00",
          },
          {
            from: "11:00",
            to: "14:00",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "08:00",
            to: "10:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "14:00",
            to: "18:00",
          },
          {
            from: "09:00",
            to: "14:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00",
          },
        ],
      },
    ],
    isCertified: true,
    description:
      "Sophia is a passionate tour guide with extensive knowledge of oslo and Norway. Specializing in Art Galleries, Sophia provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.6,
    reviewsCount: 68,
    quote: "In oslo, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/men/15.jpg",
    languages: ["French", "Danish"],
    experienceYears: 10,
    certifications: [
      "Professional Tour Guide Association",
      "Regional Tourism Ambassador",
    ],
    specialties: ["Art Galleries"],
    specialTraining: [],
  },
  {
    id: "guide-oslo-3",
    name: "Lily Gonzalez",
    city: "oslo",
    country: "Norway",
    state: "",
    region: "Northern Europe",
    isPopular: false,
    bio: "Lily is a passionate tour guide with extensive knowledge of oslo and Norway. Specializing in Art Galleries, Lily provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Caribbean", "Africa"],
    tourTypes: [
      "Romantic Tour",
      "Relocation Tour",
      "Eco Tour",
      "Accessible Tour",
      "Cultural Tour",
    ],
    maxGroupSize: 15,
    licenseNumber: "LIC-9377-OSL",
    phoneNumber: "+1-433-992-1877",
    contactEmail: "lily.gonzalez@paragontrails.com",
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "08:00",
            to: "14:00",
          },
          {
            from: "10:00",
            to: "14:00",
          },
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "14:00",
            to: "19:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "11:00",
            to: "17:00",
          },
        ],
      },
    ],
    isCertified: true,
    description:
      "Lily is a passionate tour guide with extensive knowledge of oslo and Norway. Specializing in Art Galleries, Lily provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.4,
    reviewsCount: 44,
    quote: "Every corner of oslo tells a story, let me share them with you.",
    profileImage: "https://randomuser.me/api/portraits/men/53.jpg",
    languages: ["Hungarian"],
    experienceYears: 4,
    certifications: [
      "Urban Navigation Specialist",
      "Language Proficiency Certification",
    ],
    specialties: ["Art Galleries"],
    specialTraining: ["Local Transit Systems", "Accessibility Services"],
  },
];
