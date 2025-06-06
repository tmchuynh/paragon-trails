import { TourGuide } from "@/lib/interfaces/people/staff";

export const aucklandnewZealandasiaPacificGuides: TourGuide[] = [
  {
    id: "guide-auckland-1",
    name: "Benjamin Wright",
    city: "Auckland",
    country: "New Zealand",
    state: "",
    region: "Asia Pacific",
    isPopular: false,
    bio: "Benjamin is a passionate tour guide with extensive knowledge of Auckland and New Zealand. Specializing in Adventure Sports, Family Activities, Wildlife, Street Food, Benjamin provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["South America", "West Coast USA"],
    tourTypes: ["Adventure Tour", "Walking Tour", "Farm Visit"],
    maxGroupSize: 5,
    licenseNumber: "LIC-2388-AUC",
    phoneNumber: "+1-863-864-9847",
    contactEmail: "benjamin.wright@paragontrails.com",
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "03:00 PM",
          },
          {
            from: "03:00 PM",
            to: "05:00 PM",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "04:00 PM",
          },
          {
            from: "01:00 PM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "08:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Benjamin is a passionate tour guide with extensive knowledge of Auckland and New Zealand. Specializing in Adventure Sports, Family Activities, Wildlife, Street Food, Benjamin provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.9,
    reviewsCount: 17,
    quote: "In Auckland, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
    languages: ["German", "Korean"],
    experienceYears: 10,
    certifications: ["Wilderness First Responder"],
    specialties: ["Adventure Sports", "Family Activities", "Wildlife", "Street Food"],
    specialTraining: ["Religious Studies"],
  },
  {
    id: "guide-auckland-2",
    name: "Leah Foster",
    city: "Auckland",
    country: "New Zealand",
    state: "",
    region: "Asia Pacific",
    isPopular: true,
    bio: "Leah is a passionate tour guide with extensive knowledge of Auckland and New Zealand. Specializing in Indigenous Culture, Local Markets, Leah provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["South America"],
    tourTypes: ["LGBTQ+ Friendly Tour", "Adventure Tour", "Ghost Tour", "Group Tour", "Off-Road Tour"],
    maxGroupSize: 14,
    licenseNumber: "LIC-3567-AUC",
    phoneNumber: "+1-358-139-8138",
    contactEmail: "leah.foster@paragontrails.com",
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "01:00 PM",
          },
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
          },
          {
            from: "08:00 AM",
            to: "02:00 PM",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "01:00 PM",
            to: "05:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Leah is a passionate tour guide with extensive knowledge of Auckland and New Zealand. Specializing in Indigenous Culture, Local Markets, Leah provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.3,
    reviewsCount: 83,
    quote: "My goal is to help you fall in love with Auckland just as I have.",
    profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
    languages: ["Dutch", "Bulgarian"],
    experienceYears: 13,
    certifications: ["Certified International Tour Manager", "Heritage Interpretation Certificate"],
    specialties: ["Indigenous Culture", "Local Markets"],
    specialTraining: ["Conflict Resolution", "Local Transit Systems"],
  },
  {
    id: "guide-auckland-3",
    name: "Brandon Nash",
    city: "Auckland",
    country: "New Zealand",
    state: "",
    region: "Asia Pacific",
    isPopular: false,
    bio: "Brandon is a passionate tour guide with extensive knowledge of Auckland and New Zealand. Specializing in Architecture, Brandon provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Caribbean"],
    tourTypes: ["Family-Friendly Tour", "Off-Road Tour", "Food Tour", "Museum Tour"],
    maxGroupSize: 12,
    licenseNumber: "LIC-8966-AUC",
    phoneNumber: "+1-985-428-4654",
    contactEmail: "brandon.nash@paragontrails.com",
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "02:00 PM",
          },
          {
            from: "09:00 AM",
            to: "02:00 PM",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "11:00 AM",
          },
          {
            from: "11:00 AM",
            to: "05:00 PM",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "12:00 PM",
            to: "03:00 PM",
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "02:00 PM",
          },
          {
            from: "03:00 PM",
            to: "08:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Brandon is a passionate tour guide with extensive knowledge of Auckland and New Zealand. Specializing in Architecture, Brandon provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.8,
    reviewsCount: 82,
    quote: "In Auckland, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/men/83.jpg",
    languages: ["English", "Turkish", "Romanian"],
    experienceYears: 13,
    certifications: ["Certified International Tour Manager", "Cultural Heritage Specialist", "CPR & First Aid"],
    specialties: ["Architecture"],
    specialTraining: [],
  }
];
