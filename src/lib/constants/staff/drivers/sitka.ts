import { Driver } from "@/lib/interfaces/people/staff";

export const sitkaunitedStatesalaskaDrivers: Driver[] = [
  {
    id: "driver-sitka-1",
    name: "Paul Wu",
    licenseNumber: "M5A885",
    licenseExpiry: "2027-09-17",
    experienceYears: 16,
    languagesSpoken: ["en"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "12:00",
            to: "14:00"
          },
          {
            from: "16:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "10:00",
            to: "15:00"
          },
          {
            from: "04:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "00:00",
            to: "02:00"
          },
          {
            from: "19:00",
            to: "21:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "13:00",
            to: "17:00"
          }
        ],
      }
    ],
    ratings: 4.3,
    phone: "+649 180-522-9758",
    email: "paul.wu@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/sitka/paul-wu.jpg",
    specialties: ["Event Transportation"],
    vehicleTypesCertified: ["Luxury SUV", "SUV", "Motorcoach", "Electric Vehicle"],
  },
  {
    id: "driver-sitka-2",
    name: "Mary Thompson",
    licenseNumber: "J8G759",
    licenseExpiry: "2026-09-22",
    experienceYears: 4,
    languagesSpoken: ["ar"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "15:00",
            to: "20:00"
          },
          {
            from: "12:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "07:00",
            to: "10:00"
          },
          {
            from: "01:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "06:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "01:00",
            to: "03:00"
          },
          {
            from: "03:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "13:00",
            to: "15:00"
          },
          {
            from: "05:00",
            to: "07:00"
          }
        ],
      }
    ],
    ratings: 4.3,
    phone: "+22 134-989-6492",
    email: "mary.thompson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/sitka/mary-thompson.jpg",
    specialties: ["Security Detail"],
    vehicleTypesCertified: ["Motorcoach"],
  },
  {
    id: "driver-sitka-3",
    name: "Camila Li",
    licenseNumber: "R1P337",
    licenseExpiry: "2029-01-17",
    experienceYears: 8,
    languagesSpoken: ["zh", "hi"],
    available: [
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
        day: "Thursday",
        availableHours: [
          {
            from: "06:00",
            to: "09:00"
          },
          {
            from: "05:00",
            to: "10:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "15:00",
            to: "18:00"
          },
          {
            from: "17:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "21:00",
            to: "23:00"
          },
          {
            from: "01:00",
            to: "05:00"
          }
        ],
      }
    ],
    ratings: 3.6,
    phone: "+862 778-781-1200",
    email: "camila.li@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/sitka/camila-li.jpg",
    specialties: ["Long-Distance Driving", "VIP Transport"],
    vehicleTypesCertified: ["Limousine", "Convertible", "Luxury SUV"],
  },
  {
    id: "driver-sitka-4",
    name: "Barbara Martinez",
    licenseNumber: "H3Y160",
    licenseExpiry: "2029-03-22",
    experienceYears: 2,
    languagesSpoken: ["de", "ar"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "20:00",
            to: "24:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "03:00",
            to: "07:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "13:00",
            to: "16:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "12:00",
            to: "17:00"
          },
          {
            from: "15:00",
            to: "19:00"
          }
        ],
      }
    ],
    ratings: 4.2,
    phone: "+599 644-219-5541",
    email: "barbara.martinez@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/sitka/barbara-martinez.jpg",
    specialties: ["Security Detail", "Tour Guide Driver"],
    vehicleTypesCertified: ["Luxury SUV"],
  },
  {
    id: "driver-sitka-5",
    name: "Joseph Han",
    licenseNumber: "Q2L044",
    licenseExpiry: "2029-05-17",
    experienceYears: 19,
    languagesSpoken: ["tr", "en"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "08:00",
            to: "11:00"
          },
          {
            from: "20:00",
            to: "24:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "19:00",
            to: "24:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "18:00",
            to: "22:00"
          },
          {
            from: "10:00",
            to: "12:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "02:00",
            to: "04:00"
          },
          {
            from: "12:00",
            to: "14:00"
          }
        ],
      }
    ],
    ratings: 4.6,
    phone: "+38 897-610-1918",
    email: "joseph.han@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/sitka/joseph-han.jpg",
    specialties: ["Long-Distance Driving", "Tour Guide Driver"],
    vehicleTypesCertified: ["Luxury SUV", "Van", "Motorcoach"],
  },
  {
    id: "driver-sitka-6",
    name: "Emily Thompson",
    licenseNumber: "X2B498",
    licenseExpiry: "2029-07-18",
    experienceYears: 16,
    languagesSpoken: ["en"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "09:00",
            to: "12:00"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "01:00",
            to: "04:00"
          },
          {
            from: "12:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "15:00",
            to: "17:00"
          }
        ],
      }
    ],
    ratings: 4.4,
    phone: "+76 562-673-3724",
    email: "emily.thompson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/sitka/emily-thompson.jpg",
    specialties: ["Event Transportation"],
    vehicleTypesCertified: ["Luxury SUV", "Electric Vehicle", "Van"],
  },
  {
    id: "driver-sitka-7",
    name: "Sarah Dang",
    licenseNumber: "P9W016",
    licenseExpiry: "2028-09-19",
    experienceYears: 20,
    languagesSpoken: ["es"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "01:00",
            to: "05:00"
          },
          {
            from: "01:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "09:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "20:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Monday",
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
    ratings: 4.8,
    phone: "+745 263-195-5301",
    email: "sarah.dang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/sitka/sarah-dang.jpg",
    specialties: ["Corporate Chauffeur", "VIP Transport"],
    vehicleTypesCertified: ["Convertible", "Sports Car", "Van", "Motorcoach"],
  },
  {
    id: "driver-sitka-8",
    name: "David Sanchez",
    licenseNumber: "Z2D238",
    licenseExpiry: "2030-05-06",
    experienceYears: 13,
    languagesSpoken: ["tr", "ar"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "03:00",
            to: "07:00"
          },
          {
            from: "12:00",
            to: "14:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "21:00",
            to: "24:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "13:00",
            to: "15:00"
          },
          {
            from: "20:00",
            to: "23:00"
          }
        ],
      }
    ],
    ratings: 4.2,
    phone: "+4 518-937-7343",
    email: "david.sanchez@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/sitka/david-sanchez.jpg",
    specialties: ["VIP Transport"],
    vehicleTypesCertified: ["Sedan", "Luxury SUV", "Electric Vehicle"],
  },
  {
    id: "driver-sitka-9",
    name: "Haruki Patel",
    licenseNumber: "L0P988",
    licenseExpiry: "2030-09-02",
    experienceYears: 14,
    languagesSpoken: ["ja", "es", "ar"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "01:00",
            to: "05:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "13:00",
            to: "18:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "18:00",
            to: "22:00"
          },
          {
            from: "09:00",
            to: "12:00"
          }
        ],
      }
    ],
    ratings: 4.3,
    phone: "+427 201-247-1316",
    email: "haruki.patel@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/sitka/haruki-patel.jpg",
    specialties: ["Long-Distance Driving", "Tour Guide Driver", "Night Shift", "Security Detail"],
    vehicleTypesCertified: ["Electric Vehicle"],
  }
];
