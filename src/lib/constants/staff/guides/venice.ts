import { TourGuide } from "@/lib/interfaces/people/staff";

export const veniceitalymediterraneanGuides: TourGuide[] = [
  {
    id: "guide-venice-1",
    name: "Zachary Wallace",
    city: "Venice",
    country: "Italy",
    state: "",
    region: "Mediterranean",
    isPopular: true,
    bio: "Zachary is a passionate tour guide with extensive knowledge of Venice and Italy. Specializing in Art Galleries, Street Food, Wildlife, Zachary provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["East Coast Canada"],
    tourTypes: ["Nature Tour", "Bike Tour", "Romantic Tour", "Underground Tour", "Architecture Tour"],
    maxGroupSize: 10,
    licenseNumber: "LIC-2978-VEN",
    phoneNumber: "+1-961-616-3599",
    contactEmail: "zachary.wallace@paragontrails.com",
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "09:00 AM",
            to: "03:00 PM",
          },
          {
            from: "10:00 AM",
            to: "02:00 PM",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "01:00 PM",
            to: "07:00 PM",
          },
          {
            from: "10:00 AM",
            to: "01:00 PM",
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "12:00 PM",
            to: "06:00 PM",
          },
          {
            from: "10:00 AM",
            to: "01:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Zachary is a passionate tour guide with extensive knowledge of Venice and Italy. Specializing in Art Galleries, Street Food, Wildlife, Zachary provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.8,
    reviewsCount: 14,
    quote: "Venice isn't just a destination, it's an experience that stays with you forever.",
    profileImage: "https://randomuser.me/api/portraits/men/53.jpg",
    languages: ["Finnish", "German", "Korean"],
    experienceYears: 9,
    certifications: ["Certified International Tour Manager"],
    specialties: ["Art Galleries", "Street Food", "Wildlife"],
    specialTraining: ["Accessibility Services", "Emergency Response"],
  },
  {
    id: "guide-venice-2",
    name: "Ethan Khan",
    city: "Venice",
    country: "Italy",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Ethan is a passionate tour guide with extensive knowledge of Venice and Italy. Specializing in Adventure Sports, Wine Tasting, Historical Landmarks, Ethan provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["West Coast USA"],
    tourTypes: ["Religious Tour", "Eco Tour", "Cultural Tour"],
    maxGroupSize: 14,
    licenseNumber: "LIC-8931-VEN",
    phoneNumber: "+1-277-165-3816",
    contactEmail: "ethan.khan@paragontrails.com",
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "06:00 PM",
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "08:00 AM",
            to: "11:00 AM",
          },
          {
            from: "11:00 AM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "01:00 PM",
          },
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
            from: "09:00 AM",
            to: "02:00 PM",
          },
          {
            from: "09:00 AM",
            to: "01:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Ethan is a passionate tour guide with extensive knowledge of Venice and Italy. Specializing in Adventure Sports, Wine Tasting, Historical Landmarks, Ethan provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.4,
    reviewsCount: 69,
    quote: "In Venice, we don't just see the sights - we make memories.",
    profileImage: "https://randomuser.me/api/portraits/men/52.jpg",
    languages: ["Croatian", "Czech"],
    experienceYears: 3,
    certifications: ["CPR & First Aid", "Professional Tour Guide Association"],
    specialties: ["Adventure Sports", "Wine Tasting", "Historical Landmarks"],
    specialTraining: ["Regional Geology"],
  },
  {
    id: "guide-venice-3",
    name: "Amina da Costa",
    city: "Venice",
    country: "Italy",
    state: "",
    region: "Mediterranean",
    isPopular: false,
    bio: "Amina is a passionate tour guide with extensive knowledge of Venice and Italy. Specializing in Local Craftsmanship, Local Markets, Nightlife, Amina provides authentic and engaging experiences for visitors of all backgrounds.",
    regionsCovered: ["Caribbean", "Asia Pacific"],
    tourTypes: ["Underground Tour", "Cruise Excursion", "Museum Tour", "Street Art Tour"],
    maxGroupSize: 8,
    licenseNumber: "LIC-2610-VEN",
    phoneNumber: "+1-224-854-5429",
    contactEmail: "amina.da@paragontrails.com",
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "02:00 PM",
            to: "04:00 PM",
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "03:00 PM",
            to: "09:00 PM",
          },
          {
            from: "08:00 AM",
            to: "11:00 AM",
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "12:00 PM",
            to: "03:00 PM",
          },
          {
            from: "08:00 AM",
            to: "12:00 PM",
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "11:00 AM",
            to: "04:00 PM",
          },
          {
            from: "11:00 AM",
            to: "02:00 PM",
          }
        ],
      }
    ],
    isCertified: true,
    description: "Amina is a passionate tour guide with extensive knowledge of Venice and Italy. Specializing in Local Craftsmanship, Local Markets, Nightlife, Amina provides authentic and engaging experiences for visitors of all backgrounds.",
    rating: 4.5,
    reviewsCount: 29,
    quote: "My goal is to help you fall in love with Venice just as I have.",
    profileImage: "https://randomuser.me/api/portraits/women/64.jpg",
    languages: ["Swedish", "Polish"],
    experienceYears: 6,
    certifications: ["Sustainable Tourism Certificate"],
    specialties: ["Local Craftsmanship", "Local Markets", "Nightlife"],
    specialTraining: ["Wine Education", "Religious Studies"],
  }
];
