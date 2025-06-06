import { TourGuide } from "@/lib/interfaces/people/staff";

export const dubrovnikcroatiamediterraneanGuides: TourGuide[] = [
  {
    id: "guide-dubrovnik-1",
    name: "Javier Martinez",
    city: "Dubrovnik",
    country: "Croatia",
    state: "",
    region: "Mediterranean",
    isPopular: true,
    bio: "Javier is a passionate tour guide with extensive knowledge of Dubrovnik and Croatia. Specializing in Local Cuisine, Local Craftsmanship, Javier provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast Canada", "South America"],
    tourTypes: ["Adventure Tour", "Food Tour"],
    maxGroupSize: 7,
    licenseNumber: "LIC-2009-DUB",
    phoneNumber: "+1-583-424-4271",
    contactEmail: "javier.martinez@paragontrails.com",
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "01:00 PM",
            to: "03:00 PM",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "01:00 PM",
            to: "05:00 PM",
          },
          {
            from: "08:00 AM",
            to: "10:00 AM",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "08:00 PM",
          },
          {
            from: "02:00 PM",
            to: "08:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Javier is a passionate tour guide with extensive knowledge of Dubrovnik and Croatia. Specializing in Local Cuisine, Local Craftsmanship, Javier provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.2,
    reviewsCount: 45,
    quote: "In Dubrovnik, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/men/84.jpg",
    languages: ["Greek"],
    experienceYears: 15,
    certifications: ["Regional Tourism Ambassador", "Urban Navigation Specialist", "Cultural Heritage Specialist"],
    specialties: ["Local Cuisine", "Local Craftsmanship"],
    specialTraining: ["Local Flora & Fauna"],
  },
  {
    id: "guide-dubrovnik-2",
    name: "Susan Johnson",
    city: "Dubrovnik",
    country: "Croatia",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Susan is a passionate tour guide with extensive knowledge of Dubrovnik and Croatia. Specializing in Cultural Etiquette, Wildlife, Parks & Gardens, Susan provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Caribbean"],
    tourTypes: ["Luxury Tour", "Walking Tour"],
    maxGroupSize: 5,
    licenseNumber: "LIC-2545-DUB",
    phoneNumber: "+1-108-868-6943",
    contactEmail: "susan.johnson@paragontrails.com",
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "06:00 PM",
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
            from: "02:00 PM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "07:00 PM",
          },
          {
            from: "11:00 AM",
            to: "02:00 PM",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "12:00 PM",
            to: "02:00 PM",
          },
          {
            from: "01:00 PM",
            to: "05:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Susan is a passionate tour guide with extensive knowledge of Dubrovnik and Croatia. Specializing in Cultural Etiquette, Wildlife, Parks & Gardens, Susan provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 5,
    reviewsCount: 49,
    quote: "Dubrovnik isn't just a destination, it's an experience that stays with you forever.",
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
    languages: ["Portuguese"],
    experienceYears: 15,
    certifications: ["Regional Tourism Ambassador"],
    specialties: ["Cultural Etiquette", "Wildlife", "Parks & Gardens"],
    specialTraining: [],
  },
  {
    id: "guide-dubrovnik-3",
    name: "Samantha Baker",
    city: "Dubrovnik",
    country: "Croatia",
    state: "",
    region: "Mediterranean",
    isPopular: true,
    bio: "Samantha is a passionate tour guide with extensive knowledge of Dubrovnik and Croatia. Specializing in Nightlife, Cultural Etiquette, Historical Landmarks, Samantha provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Middle East", "Asia Pacific"],
    tourTypes: ["Cruise Excursion", "Romantic Tour", "Wine Tour"],
    maxGroupSize: 16,
    licenseNumber: "LIC-9746-DUB",
    phoneNumber: "+1-770-577-4733",
    contactEmail: "samantha.baker@paragontrails.com",
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "05:00 PM",
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
            from: "09:00 AM",
            to: "01:00 PM",
          },
          {
            from: "08:00 AM",
            to: "11:00 AM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Samantha is a passionate tour guide with extensive knowledge of Dubrovnik and Croatia. Specializing in Nightlife, Cultural Etiquette, Historical Landmarks, Samantha provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.6,
    reviewsCount: 51,
    quote: "Dubrovnik isn't just a destination, it's an experience that stays with you forever.",
    profileImage: "https://randomuser.me/api/portraits/women/75.jpg",
    languages: ["Bulgarian"],
    experienceYears: 8,
    certifications: ["Cultural Heritage Specialist"],
    specialties: ["Nightlife", "Cultural Etiquette", "Historical Landmarks"],
    specialTraining: [],
  }
];
