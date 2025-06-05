import { Driver } from "@/lib/interfaces/people/staff";

export const yokohamajapanasiaPacificDrivers: Driver[] = [
  {
    id: "driver-yokohama-1",
    name: "Fang Khan",
    licenseNumber: "H9H829",
    licenseExpiry: "2027-02-05",
    experienceYears: 7,
    languagesSpoken: ["ar", "it"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "18:00",
            to: "20:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "00:00",
            to: "04:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "07:00",
            to: "12:00"
          }
        ],
      }
    ],
    ratings: 4,
    phone: "+510 973-512-7973",
    email: "fang.khan@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/yokohama/fang-khan.jpg",
    specialties: ["Luxury Car Specialist"],
    vehicleTypesCertified: ["Sports Car", "Electric Vehicle", "Motorcoach"],
  },
  {
    id: "driver-yokohama-2",
    name: "Koharu Chen",
    licenseNumber: "A4V955",
    licenseExpiry: "2027-08-02",
    experienceYears: 5,
    languagesSpoken: ["ko", "zh", "tr"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "10:00",
            to: "13:00"
          },
          {
            from: "06:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "21:00",
            to: "24:00"
          },
          {
            from: "06:00",
            to: "10:00"
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
            from: "17:00",
            to: "21:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "19:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Wednesday",
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
            from: "01:00",
            to: "04:00"
          },
          {
            from: "13:00",
            to: "16:00"
          }
        ],
      }
    ],
    ratings: 3.5,
    phone: "+43 339-485-5088",
    email: "koharu.chen@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/yokohama/koharu-chen.jpg",
    specialties: ["Luxury Car Specialist"],
    vehicleTypesCertified: ["Electric Vehicle"],
  },
  {
    id: "driver-yokohama-3",
    name: "Jessica Lopez",
    licenseNumber: "H0T494",
    licenseExpiry: "2026-12-09",
    experienceYears: 20,
    languagesSpoken: ["it", "de"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "06:00",
            to: "10:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "09:00",
            to: "14:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "02:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "12:00",
            to: "15:00"
          },
          {
            from: "06:00",
            to: "10:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
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
            from: "00:00",
            to: "03:00"
          }
        ],
      }
    ],
    ratings: 4.6,
    phone: "+21 846-782-4528",
    email: "jessica.lopez@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/yokohama/jessica-lopez.jpg",
    specialties: ["Security Detail", "Tour Guide Driver"],
    vehicleTypesCertified: ["Van", "Sports Car"],
  },
  {
    id: "driver-yokohama-4",
    name: "Ava Chen",
    licenseNumber: "G6O800",
    licenseExpiry: "2028-01-13",
    experienceYears: 16,
    languagesSpoken: ["ar", "fr", "it"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "16:00",
            to: "21:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
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
            from: "00:00",
            to: "03:00"
          },
          {
            from: "03:00",
            to: "05:00"
          }
        ],
      }
    ],
    ratings: 4.4,
    phone: "+560 638-781-4773",
    email: "ava.chen@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/yokohama/ava-chen.jpg",
    specialties: ["Airport Transfers", "Event Transportation", "Corporate Chauffeur"],
    vehicleTypesCertified: ["Van", "Motorcoach", "Limousine", "Electric Vehicle", "Luxury SUV"],
  },
  {
    id: "driver-yokohama-5",
    name: "Sakura Han",
    licenseNumber: "H7B501",
    licenseExpiry: "2027-05-14",
    experienceYears: 8,
    languagesSpoken: ["pt", "en", "hi"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "01:00",
            to: "05:00"
          },
          {
            from: "06:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "04:00",
            to: "07:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "12:00",
            to: "16:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "17:00",
            to: "19:00"
          }
        ],
      }
    ],
    ratings: 4.5,
    phone: "+237 692-174-1437",
    email: "sakura.han@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/yokohama/sakura-han.jpg",
    specialties: ["Long-Distance Driving", "Airport Transfers", "Event Transportation", "Corporate Chauffeur"],
    vehicleTypesCertified: ["Luxury SUV", "Van", "Electric Vehicle", "Sedan"],
  },
  {
    id: "driver-yokohama-6",
    name: "Hong Williams",
    licenseNumber: "V6A548",
    licenseExpiry: "2029-02-12",
    experienceYears: 9,
    languagesSpoken: ["it", "tr"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
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
            from: "04:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "11:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "06:00",
            to: "11:00"
          }
        ],
      }
    ],
    ratings: 4.3,
    phone: "+213 821-304-5563",
    email: "hong.williams@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/yokohama/hong-williams.jpg",
    specialties: ["VIP Transport", "Security Detail"],
    vehicleTypesCertified: ["Motorcoach", "SUV"],
  },
  {
    id: "driver-yokohama-7",
    name: "Yu Williams",
    licenseNumber: "A6A528",
    licenseExpiry: "2030-09-24",
    experienceYears: 1,
    languagesSpoken: ["zh", "hi", "de"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "01:00",
            to: "05:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "08:00",
            to: "10:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "03:00",
            to: "08:00"
          }
        ],
      }
    ],
    ratings: 4.2,
    phone: "+381 336-660-1790",
    email: "yu.williams@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/yokohama/yu-williams.jpg",
    specialties: ["Long-Distance Driving"],
    vehicleTypesCertified: ["Sedan", "Limousine"],
  },
  {
    id: "driver-yokohama-8",
    name: "Mei Shin",
    licenseNumber: "K4T171",
    licenseExpiry: "2030-06-14",
    experienceYears: 3,
    languagesSpoken: ["fr", "pt", "hi"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "14:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "21:00",
            to: "23:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "16:00",
            to: "20:00"
          },
          {
            from: "01:00",
            to: "05:00"
          }
        ],
      }
    ],
    ratings: 4.5,
    phone: "+733 368-762-4796",
    email: "mei.shin@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/yokohama/mei-shin.jpg",
    specialties: ["Luxury Car Specialist"],
    vehicleTypesCertified: ["Electric Vehicle", "SUV"],
  },
  {
    id: "driver-yokohama-9",
    name: "Sakura Miller",
    licenseNumber: "B2F872",
    licenseExpiry: "2027-12-24",
    experienceYears: 19,
    languagesSpoken: ["de", "es"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "16:00",
            to: "20:00"
          },
          {
            from: "05:00",
            to: "10:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "21:00",
            to: "23:00"
          }
        ],
      },
      {
        day: "Thursday",
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
            from: "17:00",
            to: "21:00"
          },
          {
            from: "11:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "04:00",
            to: "07:00"
          },
          {
            from: "15:00",
            to: "18:00"
          }
        ],
      }
    ],
    ratings: 3.8,
    phone: "+216 264-695-2300",
    email: "sakura.miller@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/yokohama/sakura-miller.jpg",
    specialties: ["Tour Guide Driver", "Night Shift"],
    vehicleTypesCertified: ["Van"],
  }
];
