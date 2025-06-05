import { Driver } from "@/lib/interfaces/people/staff";

export const kielgermanynorthernEuropeDrivers: Driver[] = [
  {
    id: "driver-kiel-1",
    name: "Alan Hawkins",
    licenseNumber: "M1A450",
    licenseExpiry: "2029-04-19",
    experienceYears: 17,
    languagesSpoken: ["English", "Swedish", "Polish"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "00:00",
            to: "02:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "00:00",
            to: "02:00"
          },
          {
            from: "10:00",
            to: "13:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "10:00",
            to: "15:00"
          },
          {
            from: "14:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "18:00",
            to: "23:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "20:00",
            to: "24:00"
          },
          {
            from: "02:00",
            to: "05:00"
          }
        ],
      }
    ],
    ratings: 4.5,
    phone: "+141 216-186-9404",
    email: "alan.hawkins@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/kiel/alan-hawkins.jpg",
    specialties: ["Event Transportation"],
    vehicleTypesCertified: ["SUV", "Luxury SUV", "Sedan", "Convertible", "Sports Car"],
  },
  {
    id: "driver-kiel-2",
    name: "Raymond Patel",
    licenseNumber: "K3F774",
    licenseExpiry: "2027-04-02",
    experienceYears: 8,
    languagesSpoken: ["English", "Danish", "Czech"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "20:00",
            to: "23:00"
          },
          {
            from: "06:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "01:00",
            to: "04:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "02:00",
            to: "06:00"
          },
          {
            from: "20:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "13:00",
            to: "16:00"
          },
          {
            from: "05:00",
            to: "09:00"
          }
        ],
      }
    ],
    ratings: 3.8,
    phone: "+456 829-110-7074",
    email: "raymond.patel@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/kiel/raymond-patel.jpg",
    specialties: ["VIP Transport", "Event Transportation"],
    vehicleTypesCertified: ["Van", "SUV", "Sports Car"],
  },
  {
    id: "driver-kiel-3",
    name: "Alan Harris",
    licenseNumber: "E2W435",
    licenseExpiry: "2026-03-28",
    experienceYears: 6,
    languagesSpoken: ["English", "Spanish", "Portuguese", "Czech"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "05:00",
            to: "07:00"
          },
          {
            from: "21:00",
            to: "24:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "13:00",
            to: "18:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "07:00",
            to: "12:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "09:00",
            to: "14:00"
          }
        ],
      }
    ],
    ratings: 3.6,
    phone: "+66 196-459-8156",
    email: "alan.harris@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/kiel/alan-harris.jpg",
    specialties: ["Tour Guide Driver", "Night Shift"],
    vehicleTypesCertified: ["Electric Vehicle"],
  },
  {
    id: "driver-kiel-4",
    name: "Eleanor Ivanov",
    licenseNumber: "T4F159",
    licenseExpiry: "2029-01-15",
    experienceYears: 2,
    languagesSpoken: ["English", "French", "Danish", "Spanish"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "10:00",
            to: "12:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "17:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "21:00",
            to: "24:00"
          },
          {
            from: "13:00",
            to: "16:00"
          }
        ],
      }
    ],
    ratings: 3.5,
    phone: "+644 271-291-6326",
    email: "eleanor.ivanov@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/kiel/eleanor-ivanov.jpg",
    specialties: ["Corporate Chauffeur", "Security Detail"],
    vehicleTypesCertified: ["Electric Vehicle", "Limousine", "Van", "Luxury SUV"],
  },
  {
    id: "driver-kiel-5",
    name: "Ali Lee",
    licenseNumber: "G8Q114",
    licenseExpiry: "2030-09-25",
    experienceYears: 6,
    languagesSpoken: ["English", "German", "Finnish", "Spanish"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "15:00",
            to: "20:00"
          },
          {
            from: "17:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "12:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "01:00",
            to: "04:00"
          }
        ],
      }
    ],
    ratings: 4.3,
    phone: "+59 779-249-4048",
    email: "ali.lee@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/kiel/ali-lee.jpg",
    specialties: ["Long-Distance Driving", "VIP Transport"],
    vehicleTypesCertified: ["Convertible", "Sedan"],
  },
  {
    id: "driver-kiel-6",
    name: "Charlotte Wright",
    licenseNumber: "U0I071",
    licenseExpiry: "2026-05-15",
    experienceYears: 12,
    languagesSpoken: ["English", "German", "Swedish"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "15:00",
            to: "20:00"
          },
          {
            from: "17:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "20:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "11:00",
            to: "16:00"
          },
          {
            from: "15:00",
            to: "20:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "09:00",
            to: "14:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "16:00",
            to: "21:00"
          },
          {
            from: "09:00",
            to: "14:00"
          }
        ],
      }
    ],
    ratings: 3.9,
    phone: "+425 268-114-3602",
    email: "charlotte.wright@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/kiel/charlotte-wright.jpg",
    specialties: ["Tour Guide Driver"],
    vehicleTypesCertified: ["Convertible", "Sports Car", "Sedan"],
  },
  {
    id: "driver-kiel-7",
    name: "Rachel Chen",
    licenseNumber: "T4U523",
    licenseExpiry: "2029-02-23",
    experienceYears: 6,
    languagesSpoken: ["English", "Russian", "Italian", "French"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "03:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "15:00",
            to: "20:00"
          },
          {
            from: "09:00",
            to: "14:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "14:00",
            to: "18:00"
          }
        ],
      }
    ],
    ratings: 4.1,
    phone: "+348 290-972-1948",
    email: "rachel.chen@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/kiel/rachel-chen.jpg",
    specialties: ["Event Transportation", "Airport Transfers", "Tour Guide Driver", "Night Shift"],
    vehicleTypesCertified: ["SUV", "Convertible"],
  },
  {
    id: "driver-kiel-8",
    name: "Stephanie Kim",
    licenseNumber: "O9V555",
    licenseExpiry: "2028-07-25",
    experienceYears: 9,
    languagesSpoken: ["English", "Portuguese", "Swedish"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "12:00",
            to: "15:00"
          },
          {
            from: "08:00",
            to: "13:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "09:00",
            to: "13:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "00:00",
            to: "04:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "19:00",
            to: "21:00"
          },
          {
            from: "05:00",
            to: "07:00"
          }
        ],
      }
    ],
    ratings: 4.9,
    phone: "+57 776-496-5463",
    email: "stephanie.kim@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/kiel/stephanie-kim.jpg",
    specialties: ["Event Transportation", "Night Shift", "Tour Guide Driver", "Security Detail"],
    vehicleTypesCertified: ["Limousine", "SUV", "Convertible"],
  },
  {
    id: "driver-kiel-9",
    name: "Chen Jones",
    licenseNumber: "V5G747",
    licenseExpiry: "2030-08-24",
    experienceYears: 9,
    languagesSpoken: ["English", "Danish", "Polish", "Portuguese"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "15:00",
            to: "17:00"
          },
          {
            from: "05:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "21:00",
            to: "23:00"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "13:00",
            to: "18:00"
          },
          {
            from: "13:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "08:00",
            to: "10:00"
          }
        ],
      }
    ],
    ratings: 4.1,
    phone: "+762 291-211-6682",
    email: "chen.jones@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/kiel/chen-jones.jpg",
    specialties: ["Event Transportation"],
    vehicleTypesCertified: ["Motorcoach", "Convertible"],
  }
];
