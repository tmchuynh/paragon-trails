import { TourGuide } from "@/lib/interfaces/people/staff";

export const sitkaunitedStatesalaskaGuides: TourGuide[] = [
  {
    id: "guide-sitka-1",
    name: "Victoria Perez",
    city: "Sitka",
    country: "United States",
    state: "",
    region: "Alaska",
    isPopular: true,
    bio: "Victoria is a passionate tour guide with extensive knowledge of Sitka and United States. Specializing in Parks & Gardens, Historical Landmarks, Urban Legends, Victoria provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Africa", "East Coast Canada"],
    tourTypes: ["Scenic Tour", "Market Tour", "Family-Friendly Tour"],
    maxGroupSize: 12,
    licenseNumber: "LIC-8501-SIT",
    phoneNumber: "+1-979-429-1000",
    contactEmail: "victoria.perez@paragontrails.com",
    available: [],
    isCertified: true,
    description: "Victoria is a passionate tour guide with extensive knowledge of Sitka and United States. Specializing in Parks & Gardens, Historical Landmarks, Urban Legends, Victoria provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.7,
    reviewsCount: 103,
    quote: "My goal is to help you fall in love with Sitka just as I have.",
    profileImage: "https://randomuser.me/api/portraits/men/21.jpg",
    languages: ["Danish", "Romanian"],
    experienceYears: 12,
    certifications: ["Adventure Tourism Safety Certificate", "Heritage Interpretation Certificate"],
    specialties: ["Parks & Gardens", "Historical Landmarks", "Urban Legends"],
    specialTraining: ["Local Transit Systems", "Art History"],
  },
  {
    id: "guide-sitka-2",
    name: "David Rivera",
    city: "Sitka",
    country: "United States",
    state: "",
    region: "Alaska",
    isPopular: true,
    bio: "David is a passionate tour guide with extensive knowledge of Sitka and United States. Specializing in Art Galleries, Film Locations, Sustainable Tourism, David provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["South America"],
    tourTypes: ["Street Art Tour", "Festival Tour"],
    maxGroupSize: 11,
    licenseNumber: "LIC-2217-SIT",
    phoneNumber: "+1-795-923-9859",
    contactEmail: "david.rivera@paragontrails.com",
    available: [],
    isCertified: true,
    description: "David is a passionate tour guide with extensive knowledge of Sitka and United States. Specializing in Art Galleries, Film Locations, Sustainable Tourism, David provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.6,
    reviewsCount: 37,
    quote: "Sitka isn't just a destination, it's an experience that stays with you forever.",
    profileImage: "https://randomuser.me/api/portraits/women/69.jpg",
    languages: ["Portuguese"],
    experienceYears: 7,
    certifications: ["CPR & First Aid", "Adventure Tourism Safety Certificate"],
    specialties: ["Art Galleries", "Film Locations", "Sustainable Tourism"],
    specialTraining: ["Group Management", "Accessibility Services"],
  },
  {
    id: "guide-sitka-3",
    name: "Samuel Johnson",
    city: "Sitka",
    country: "United States",
    state: "",
    region: "Alaska",
    isPopular: false,
    bio: "Samuel is a passionate tour guide with extensive knowledge of Sitka and United States. Specializing in Sustainable Tourism, Architecture, Photography Spots, Music Scene, Samuel provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Middle East", "Northern Europe"],
    tourTypes: ["Walking Tour", "Scenic Tour", "Bike Tour", "Cooking Class"],
    maxGroupSize: 12,
    licenseNumber: "LIC-7366-SIT",
    phoneNumber: "+1-281-861-4057",
    contactEmail: "samuel.johnson@paragontrails.com",
    available: [],
    isCertified: true,
    description: "Samuel is a passionate tour guide with extensive knowledge of Sitka and United States. Specializing in Sustainable Tourism, Architecture, Photography Spots, Music Scene, Samuel provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.4,
    reviewsCount: 51,
    quote: "My goal is to help you fall in love with Sitka just as I have.",
    profileImage: "https://randomuser.me/api/portraits/women/25.jpg",
    languages: ["Croatian", "Bulgarian"],
    experienceYears: 2,
    certifications: ["Licensed City Guide", "Sustainable Tourism Certificate", "Regional Tourism Ambassador"],
    specialties: ["Sustainable Tourism", "Architecture", "Photography Spots", "Music Scene"],
    specialTraining: ["Mountain Survival", "Archaeological Conservation"],
  },
  {
    id: "guide-sitka-4",
    name: "Logan Jackson",
    city: "Sitka",
    country: "United States",
    state: "",
    region: "Alaska",
    isPopular: false,
    bio: "Logan is a passionate tour guide with extensive knowledge of Sitka and United States. Specializing in Adventure Sports, Logan provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Africa"],
    tourTypes: ["Photography Tour", "Walking Tour", "Cultural Tour"],
    maxGroupSize: 8,
    licenseNumber: "LIC-7770-SIT",
    phoneNumber: "+1-223-811-7164",
    contactEmail: "logan.jackson@paragontrails.com",
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "12:00",
            to: "14:00",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
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
            from: "09:00",
            to: "13:00",
          },
          {
            from: "12:00",
            to: "14:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Logan is a passionate tour guide with extensive knowledge of Sitka and United States. Specializing in Adventure Sports, Logan provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4,
    reviewsCount: 30,
    quote: "Every corner of Sitka tells a story, let me share them with you.",
    profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
    languages: ["Arabic", "Dutch", "Portuguese"],
    experienceYears: 10,
    certifications: ["Professional Tour Guide Association", "Local History Certification", "Sustainable Tourism Certificate"],
    specialties: ["Adventure Sports"],
    specialTraining: ["Desert Navigation", "Regional Cuisine"],
  },
  {
    id: "guide-sitka-5",
    name: "Matthew Ramirez",
    city: "Sitka",
    country: "United States",
    state: "",
    region: "Alaska",
    isPopular: false,
    bio: "Matthew is a passionate tour guide with extensive knowledge of Sitka and United States. Specializing in Museums, Public Transportation Navigation, Religious Sites, Parks & Gardens, Matthew provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Caribbean"],
    tourTypes: ["Craft Workshop", "Cultural Tour"],
    maxGroupSize: 9,
    licenseNumber: "LIC-6175-SIT",
    phoneNumber: "+1-108-472-6582",
    contactEmail: "matthew.ramirez@paragontrails.com",
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "13:00",
            to: "17:00",
          },
          {
            from: "08:00",
            to: "12:00",
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
        day: "Wednesday",
        availableHours: [
          {
            from: "11:00",
            to: "15:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Matthew is a passionate tour guide with extensive knowledge of Sitka and United States. Specializing in Museums, Public Transportation Navigation, Religious Sites, Parks & Gardens, Matthew provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.5,
    reviewsCount: 96,
    quote: "In Sitka, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    languages: ["Indonesian", "Bulgarian", "Finnish"],
    experienceYears: 4,
    certifications: ["Wilderness First Responder", "Language Proficiency Certification", "Sustainable Tourism Certificate"],
    specialties: ["Museums", "Public Transportation Navigation", "Religious Sites", "Parks & Gardens"],
    specialTraining: ["Accessibility Services"],
  },
  {
    id: "guide-sitka-6",
    name: "Aiden Martinez",
    city: "Sitka",
    country: "United States",
    state: "",
    region: "Alaska",
    isPopular: false,
    bio: "Aiden is a passionate tour guide with extensive knowledge of Sitka and United States. Specializing in Religious Sites, Art Galleries, Aiden provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Asia Pacific"],
    tourTypes: ["Cooking Class", "Wildlife Safari"],
    maxGroupSize: 7,
    licenseNumber: "LIC-7221-SIT",
    phoneNumber: "+1-194-979-6364",
    contactEmail: "aiden.martinez@paragontrails.com",
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "14:00",
            to: "18:00",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "09:00",
            to: "11:00",
          },
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
            from: "09:00",
            to: "15:00",
          },
          {
            from: "08:00",
            to: "13:00",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "14:00",
            to: "20:00",
          },
          {
            from: "08:00",
            to: "11:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Aiden is a passionate tour guide with extensive knowledge of Sitka and United States. Specializing in Religious Sites, Art Galleries, Aiden provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.4,
    reviewsCount: 55,
    quote: "My goal is to help you fall in love with Sitka just as I have.",
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
    languages: ["Spanish"],
    experienceYears: 3,
    certifications: ["Eco-Tourism Guide"],
    specialties: ["Religious Sites", "Art Galleries"],
    specialTraining: ["Accessibility Services", "Group Management"],
  }
];
