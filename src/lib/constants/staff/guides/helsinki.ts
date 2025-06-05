import { TourGuide } from "@/lib/interfaces/people/staff";

export const helsinkifinlandnorthernEuropeGuides: TourGuide[] = [
  {
    id: "guide-helsinki-1",
    name: "Joseph Rivera",
    city: "helsinki",
    country: "Finland",
    state: "",
    region: "Northern Europe",
    isPopular: false,
    bio: "Joseph is a passionate tour guide with extensive knowledge of helsinki and Finland. Specializing in Wildlife, Sustainable Tourism, Joseph provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Mediterranean"],
    tourTypes: ["Walking Tour", "Off-Road Tour", "Romantic Tour", "Farm Visit"],
    maxGroupSize: 17,
    licenseNumber: "LIC-3286-HEL",
    phoneNumber: "+1-785-885-6562",
    contactEmail: "joseph.rivera@paragontrails.com",
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "11:00",
            to: "15:00",
          },
          {
            from: "11:00",
            to: "17:00",
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
    description: "Joseph is a passionate tour guide with extensive knowledge of helsinki and Finland. Specializing in Wildlife, Sustainable Tourism, Joseph provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.7,
    reviewsCount: 13,
    quote: "Every corner of helsinki tells a story, let me share them with you.",
    profileImage: "https://randomuser.me/api/portraits/men/31.jpg",
    languages: ["Spanish", "Bulgarian"],
    experienceYears: 13,
    certifications: ["Adventure Tourism Safety Certificate", "Certified International Tour Manager"],
    specialties: ["Wildlife", "Sustainable Tourism"],
    specialTraining: ["Conflict Resolution"],
  },
  {
    id: "guide-helsinki-2",
    name: "Matthew Gonzalez",
    city: "helsinki",
    country: "Finland",
    state: "",
    region: "Northern Europe",
    isPopular: false,
    bio: "Matthew is a passionate tour guide with extensive knowledge of helsinki and Finland. Specializing in Film Locations, Urban Legends, Matthew provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Africa"],
    tourTypes: ["Museum Tour", "Nature Tour", "Historical Tour"],
    maxGroupSize: 7,
    licenseNumber: "LIC-5817-HEL",
    phoneNumber: "+1-414-467-1676",
    contactEmail: "matthew.gonzalez@paragontrails.com",
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "12:00",
            to: "16:00",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "11:00",
            to: "17:00",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "09:00",
            to: "11:00",
          },
          {
            from: "11:00",
            to: "14:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Matthew is a passionate tour guide with extensive knowledge of helsinki and Finland. Specializing in Film Locations, Urban Legends, Matthew provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.3,
    reviewsCount: 55,
    quote: "My goal is to help you fall in love with helsinki just as I have.",
    profileImage: "https://randomuser.me/api/portraits/women/47.jpg",
    languages: ["Russian"],
    experienceYears: 16,
    certifications: ["CPR & First Aid", "Regional Tourism Ambassador"],
    specialties: ["Film Locations", "Urban Legends"],
    specialTraining: [],
  },
  {
    id: "guide-helsinki-3",
    name: "Lucas Smith",
    city: "helsinki",
    country: "Finland",
    state: "",
    region: "Northern Europe",
    isPopular: false,
    bio: "Lucas is a passionate tour guide with extensive knowledge of helsinki and Finland. Specializing in Local Markets, Lucas provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast Canada", "Asia Pacific"],
    tourTypes: ["Festival Tour", "Architecture Tour", "Adventure Tour", "Accessible Tour"],
    maxGroupSize: 5,
    licenseNumber: "LIC-2858-HEL",
    phoneNumber: "+1-307-973-5741",
    contactEmail: "lucas.smith@paragontrails.com",
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "15:00",
            to: "19:00",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "14:00",
            to: "20:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Lucas is a passionate tour guide with extensive knowledge of helsinki and Finland. Specializing in Local Markets, Lucas provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.6,
    reviewsCount: 56,
    quote: "The best way to discover helsinki is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/women/62.jpg",
    languages: ["Japanese", "Malay", "Cantonese"],
    experienceYears: 13,
    certifications: ["Urban Navigation Specialist", "CPR & First Aid"],
    specialties: ["Local Markets"],
    specialTraining: ["Desert Navigation"],
  }
];
