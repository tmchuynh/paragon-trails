import { TourGuide } from "@/lib/interfaces/people/staff";

export const victoriacanadaalaskaGuides: TourGuide[] = [
  {
    id: "guide-victoria-1",
    name: "Owen Walker",
    city: "Victoria",
    country: "Canada",
    state: "",
    region: "Alaska",
    isPopular: true,
    bio: "Owen is a passionate tour guide with extensive knowledge of Victoria and Canada. Specializing in Adventure Sports, Public Transportation Navigation, LGBTQ+ History, Owen provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["West Coast USA", "Asia Pacific"],
    tourTypes: ["Eco Tour", "Religious Tour", "Private Tour", "LGBTQ+ Friendly Tour"],
    maxGroupSize: 10,
    licenseNumber: "LIC-5538-VIC",
    phoneNumber: "+1-773-393-4468",
    contactEmail: "owen.walker@paragontrails.com",
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "14:00",
            to: "20:00",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "15:00",
            to: "19:00",
          },
          {
            from: "08:00",
            to: "11:00",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "11:00",
            to: "13:00",
          },
          {
            from: "14:00",
            to: "19:00",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "12:00",
            to: "17:00",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "11:00",
            to: "13:00",
          },
          {
            from: "13:00",
            to: "19:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Owen is a passionate tour guide with extensive knowledge of Victoria and Canada. Specializing in Adventure Sports, Public Transportation Navigation, LGBTQ+ History, Owen provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.7,
    reviewsCount: 29,
    quote: "The best way to discover Victoria is with someone who lives and breathes its culture.",
    profileImage: "https://randomuser.me/api/portraits/women/30.jpg",
    languages: ["Cantonese"],
    experienceYears: 14,
    certifications: ["Sustainable Tourism Certificate", "Cultural Heritage Specialist"],
    specialties: ["Adventure Sports", "Public Transportation Navigation", "LGBTQ+ History"],
    specialTraining: [],
  },
  {
    id: "guide-victoria-2",
    name: "Emily King",
    city: "Victoria",
    country: "Canada",
    state: "",
    region: "Alaska",
    isPopular: true,
    bio: "Emily is a passionate tour guide with extensive knowledge of Victoria and Canada. Specializing in Adventure Sports, Religious Sites, Emily provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Mediterranean", "Africa"],
    tourTypes: ["Bike Tour", "Private Tour", "Cruise Excursion", "Shopping Tour"],
    maxGroupSize: 10,
    licenseNumber: "LIC-5615-VIC",
    phoneNumber: "+1-834-893-1987",
    contactEmail: "emily.king@paragontrails.com",
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "10:00",
            to: "12:00",
          },
          {
            from: "11:00",
            to: "13:00",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "14:00",
            to: "20:00",
          },
          {
            from: "14:00",
            to: "17:00",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "11:00",
            to: "17:00",
          },
          {
            from: "08:00",
            to: "13:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Emily is a passionate tour guide with extensive knowledge of Victoria and Canada. Specializing in Adventure Sports, Religious Sites, Emily provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.9,
    reviewsCount: 101,
    quote: "In Victoria, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
    languages: ["Polish", "English"],
    experienceYears: 15,
    certifications: ["Professional Tour Guide Association", "Certified International Tour Manager", "Adventure Tourism Safety Certificate"],
    specialties: ["Adventure Sports", "Religious Sites"],
    specialTraining: ["Accessibility Services", "Religious Studies"],
  },
  {
    id: "guide-victoria-3",
    name: "Benjamin Sanchez",
    city: "Victoria",
    country: "Canada",
    state: "",
    region: "Alaska",
    isPopular: false,
    bio: "Benjamin is a passionate tour guide with extensive knowledge of Victoria and Canada. Specializing in Wine Tasting, Public Transportation Navigation, Benjamin provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["West Coast USA", "Middle East"],
    tourTypes: ["Boat Tour", "Wildlife Safari", "Eco Tour", "Craft Workshop", "Food Tour"],
    maxGroupSize: 6,
    licenseNumber: "LIC-1604-VIC",
    phoneNumber: "+1-403-229-4952",
    contactEmail: "benjamin.sanchez@paragontrails.com",
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "15:00",
            to: "18:00",
          },
          {
            from: "10:00",
            to: "15:00",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
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
            from: "09:00",
            to: "15:00",
          },
          {
            from: "14:00",
            to: "17:00",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "12:00",
            to: "18:00",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Benjamin is a passionate tour guide with extensive knowledge of Victoria and Canada. Specializing in Wine Tasting, Public Transportation Navigation, Benjamin provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.9,
    reviewsCount: 76,
    quote: "In Victoria, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/women/70.jpg",
    languages: ["Malay"],
    experienceYears: 14,
    certifications: ["Cultural Heritage Specialist", "Sustainable Tourism Certificate"],
    specialties: ["Wine Tasting", "Public Transportation Navigation"],
    specialTraining: [],
  }
];
