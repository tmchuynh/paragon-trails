import { TourGuide } from "@/lib/interfaces/people/staff";

export const melbourneaustraliaasiaPacificGuides: TourGuide[] = [
  {
    id: "guide-melbourne-1",
    name: "Nancy Martinez",
    city: "Melbourne",
    country: "Australia",
    state: "",
    region: "Asia Pacific",
    isPopular: false,
    bio: "Nancy is a passionate tour guide with extensive knowledge of Melbourne and Australia. Specializing in LGBTQ+ History, Local Craftsmanship, Nancy provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["South America", "Middle East"],
    tourTypes: ["Street Art Tour", "Farm Visit"],
    maxGroupSize: 5,
    licenseNumber: "LIC-2049-MEL",
    phoneNumber: "+1-810-175-1487",
    contactEmail: "nancy.martinez@paragontrails.com",
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "12:00 PM",
            to: "02:00 PM",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "01:00 PM",
          },
          {
            from: "08:00 AM",
            to: "02:00 PM",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "02:00 PM",
          },
          {
            from: "10:00 AM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "01:00 PM",
            to: "04:00 PM",
          },
          {
            from: "12:00 PM",
            to: "02:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Nancy is a passionate tour guide with extensive knowledge of Melbourne and Australia. Specializing in LGBTQ+ History, Local Craftsmanship, Nancy provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 3.7,
    reviewsCount: 73,
    quote: "In Melbourne, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/women/30.jpg",
    languages: ["Swahili", "Bulgarian"],
    experienceYears: 15,
    certifications: ["Adventure Tourism Safety Certificate", "Urban Navigation Specialist"],
    specialties: ["LGBTQ+ History", "Local Craftsmanship"],
    specialTraining: ["Historical Research Methods"],
  },
  {
    id: "guide-melbourne-2",
    name: "Tyler Fox",
    city: "Melbourne",
    country: "Australia",
    state: "",
    region: "Asia Pacific",
    isPopular: false,
    bio: "Tyler is a passionate tour guide with extensive knowledge of Melbourne and Australia. Specializing in Wildlife, Tyler provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["West Coast USA"],
    tourTypes: ["Adventure Tour", "Underground Tour", "Luxury Tour", "Private Tour"],
    maxGroupSize: 14,
    licenseNumber: "LIC-8086-MEL",
    phoneNumber: "+1-360-485-6643",
    contactEmail: "tyler.fox@paragontrails.com",
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "01:00 PM",
          },
          {
            from: "03:00 PM",
            to: "08:00 PM",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "01:00 PM",
            to: "03:00 PM",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "12:00 PM",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "01:00 PM",
          },
          {
            from: "08:00 AM",
            to: "02:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Tyler is a passionate tour guide with extensive knowledge of Melbourne and Australia. Specializing in Wildlife, Tyler provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4,
    reviewsCount: 66,
    quote: "In Melbourne, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/men/50.jpg",
    languages: ["Bulgarian", "Japanese", "Indonesian"],
    experienceYears: 15,
    certifications: ["Certified International Tour Manager", "Food Safety Certification"],
    specialties: ["Wildlife"],
    specialTraining: ["Conflict Resolution", "Archaeological Conservation"],
  },
  {
    id: "guide-melbourne-3",
    name: "Henry Brown",
    city: "Melbourne",
    country: "Australia",
    state: "",
    region: "Asia Pacific",
    isPopular: true,
    bio: "Henry is a passionate tour guide with extensive knowledge of Melbourne and Australia. Specializing in Parks & Gardens, LGBTQ+ History, Henry provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Middle East"],
    tourTypes: ["Accessible Tour", "Wine Tour"],
    maxGroupSize: 14,
    licenseNumber: "LIC-1322-MEL",
    phoneNumber: "+1-700-539-3609",
    contactEmail: "henry.brown@paragontrails.com",
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "11:00 AM",
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
            from: "09:00 AM",
            to: "01:00 PM",
          },
          {
            from: "01:00 PM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "04:00 PM",
          },
          {
            from: "02:00 PM",
            to: "08:00 PM",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "08:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Henry is a passionate tour guide with extensive knowledge of Melbourne and Australia. Specializing in Parks & Gardens, LGBTQ+ History, Henry provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.5,
    reviewsCount: 44,
    quote: "In Melbourne, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    languages: ["Danish", "Finnish", "Croatian"],
    experienceYears: 6,
    certifications: ["Language Proficiency Certification", "Licensed City Guide"],
    specialties: ["Parks & Gardens", "LGBTQ+ History"],
    specialTraining: [],
  }
];
