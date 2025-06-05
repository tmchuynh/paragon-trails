import { Driver } from "@/lib/interfaces/people/staff";

export const vancouvercanadaalaskaDrivers: Driver[] = [
  {
    id: "driver-vancouver-1",
    name: "Valeria Choi",
    licenseNumber: "S9U007",
    licenseExpiry: "2029-11-28",
    experienceYears: 15,
    languagesSpoken: ["de"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "18:00",
            to: "21:00"
          },
          {
            from: "16:00",
            to: "20:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "04:00",
            to: "07:00"
          }
        ],
      }
    ],
    ratings: 4,
    phone: "+653 499-598-3330",
    email: "valeria.choi@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/vancouver/valeria-choi.jpg",
    specialties: ["Night Shift"],
    vehicleTypesCertified: ["Van", "Sedan", "Sports Car"],
  },
  {
    id: "driver-vancouver-2",
    name: "Haruki Park",
    licenseNumber: "V5B492",
    licenseExpiry: "2028-12-17",
    experienceYears: 10,
    languagesSpoken: ["ko", "ar", "es"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "13:00",
            to: "16:00"
          },
          {
            from: "15:00",
            to: "20:00"
          }
        ],
      },
      {
        day: "Wednesday",
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
            from: "21:00",
            to: "23:00"
          },
          {
            from: "10:00",
            to: "15:00"
          }
        ],
      }
    ],
    ratings: 4.5,
    phone: "+411 438-753-5050",
    email: "haruki.park@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/vancouver/haruki-park.jpg",
    specialties: ["Security Detail", "Tour Guide Driver", "Airport Transfers", "VIP Transport"],
    vehicleTypesCertified: ["Sports Car"],
  },
  {
    id: "driver-vancouver-3",
    name: "Daniel Ito",
    licenseNumber: "S0R696",
    licenseExpiry: "2028-09-17",
    experienceYears: 4,
    languagesSpoken: ["fr"],
    available: [
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
        day: "Saturday",
        availableHours: [
          {
            from: "00:00",
            to: "04:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "09:00",
            to: "11:00"
          },
          {
            from: "11:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "19:00",
            to: "23:00"
          },
          {
            from: "15:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "02:00",
            to: "05:00"
          },
          {
            from: "09:00",
            to: "13:00"
          }
        ],
      }
    ],
    ratings: 4.3,
    phone: "+674 504-688-1911",
    email: "daniel.ito@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/vancouver/daniel-ito.jpg",
    specialties: ["Tour Guide Driver", "Luxury Car Specialist", "Long-Distance Driving", "Security Detail"],
    vehicleTypesCertified: ["Sedan", "SUV"],
  },
  {
    id: "driver-vancouver-4",
    name: "Hana Sharma",
    licenseNumber: "H5I469",
    licenseExpiry: "2027-10-11",
    experienceYears: 14,
    languagesSpoken: ["it", "hi"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "03:00",
            to: "08:00"
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
            from: "02:00",
            to: "05:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "18:00",
            to: "21:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "15:00",
            to: "18:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "18:00",
            to: "21:00"
          }
        ],
      }
    ],
    ratings: 4.9,
    phone: "+866 449-199-6423",
    email: "hana.sharma@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/vancouver/hana-sharma.jpg",
    specialties: ["VIP Transport", "Security Detail", "Event Transportation"],
    vehicleTypesCertified: ["Sports Car", "SUV", "Motorcoach", "Electric Vehicle"],
  },
  {
    id: "driver-vancouver-5",
    name: "Lei Smith",
    licenseNumber: "V7R444",
    licenseExpiry: "2027-02-24",
    experienceYears: 6,
    languagesSpoken: ["pt", "ja", "fr"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "02:00",
            to: "07:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "19:00",
            to: "22:00"
          },
          {
            from: "17:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "15:00",
            to: "18:00"
          },
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
            from: "15:00",
            to: "19:00"
          }
        ],
      }
    ],
    ratings: 4.2,
    phone: "+717 240-312-9368",
    email: "lei.smith@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/vancouver/lei-smith.jpg",
    specialties: ["Long-Distance Driving", "Night Shift"],
    vehicleTypesCertified: ["SUV"],
  },
  {
    id: "driver-vancouver-6",
    name: "Jessica Sanchez",
    licenseNumber: "Z0X024",
    licenseExpiry: "2026-09-02",
    experienceYears: 4,
    languagesSpoken: ["hi", "ru"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "06:00",
            to: "09:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "04:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "17:00",
            to: "22:00"
          },
          {
            from: "17:00",
            to: "21:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "14:00",
            to: "17:00"
          },
          {
            from: "19:00",
            to: "24:00"
          }
        ],
      }
    ],
    ratings: 4.9,
    phone: "+494 816-861-4362",
    email: "jessica.sanchez@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/vancouver/jessica-sanchez.jpg",
    specialties: ["Long-Distance Driving", "Event Transportation"],
    vehicleTypesCertified: ["Sedan", "Sports Car"],
  },
  {
    id: "driver-vancouver-7",
    name: "Isabella Singh",
    licenseNumber: "O9L341",
    licenseExpiry: "2026-02-28",
    experienceYears: 17,
    languagesSpoken: ["ko", "zh", "pt"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "15:00",
            to: "20:00"
          }
        ],
      },
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
        day: "Thursday",
        availableHours: [
          {
            from: "16:00",
            to: "19:00"
          }
        ],
      }
    ],
    ratings: 4.7,
    phone: "+892 621-729-6228",
    email: "isabella.singh@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/vancouver/isabella-singh.jpg",
    specialties: ["Tour Guide Driver"],
    vehicleTypesCertified: ["Convertible", "Sedan", "Electric Vehicle", "Van"],
  },
  {
    id: "driver-vancouver-8",
    name: "Hong Torres",
    licenseNumber: "Q4B924",
    licenseExpiry: "2030-09-07",
    experienceYears: 2,
    languagesSpoken: ["it"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "01:00",
            to: "03:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "07:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "07:00",
            to: "09:00"
          }
        ],
      }
    ],
    ratings: 4.4,
    phone: "+83 686-317-2590",
    email: "hong.torres@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/vancouver/hong-torres.jpg",
    specialties: ["Security Detail"],
    vehicleTypesCertified: ["Sedan", "SUV", "Luxury SUV"],
  },
  {
    id: "driver-vancouver-9",
    name: "Akira Williams",
    licenseNumber: "P7R774",
    licenseExpiry: "2027-06-13",
    experienceYears: 17,
    languagesSpoken: ["tr"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "07:00",
            to: "12:00"
          },
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
            from: "18:00",
            to: "20:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "17:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "08:00",
            to: "11:00"
          },
          {
            from: "21:00",
            to: "24:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "05:00",
            to: "07:00"
          },
          {
            from: "14:00",
            to: "18:00"
          }
        ],
      }
    ],
    ratings: 4.6,
    phone: "+590 316-853-9920",
    email: "akira.williams@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/vancouver/akira-williams.jpg",
    specialties: ["Event Transportation", "Long-Distance Driving", "VIP Transport", "Night Shift"],
    vehicleTypesCertified: ["Convertible", "Luxury SUV", "Electric Vehicle"],
  }
];
