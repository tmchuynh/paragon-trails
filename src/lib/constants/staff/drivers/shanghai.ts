import { Driver } from "@/lib/interfaces/people/staff";

export const shanghaichinaasiaPacificDrivers: Driver[] = [
  {
    id: "driver-shanghai-1",
    name: "Isabella Taylor",
    licenseNumber: "W0O654",
    licenseExpiry: "2030-11-23",
    experienceYears: 13,
    languagesSpoken: ["pt", "en"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "12:00",
            to: "14:00"
          },
          {
            from: "08:00",
            to: "12:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "16:00",
            to: "19:00"
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
            from: "08:00",
            to: "10:00"
          },
          {
            from: "20:00",
            to: "22:00"
          }
        ],
      }
    ],
    ratings: 4.4,
    phone: "+461 553-652-5226",
    email: "isabella.taylor@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/shanghai/isabella-taylor.jpg",
    specialties: ["Event Transportation"],
    vehicleTypesCertified: ["Motorcoach", "Limousine", "Luxury SUV", "SUV"],
  },
  {
    id: "driver-shanghai-2",
    name: "Takashi Taylor",
    licenseNumber: "L0Q958",
    licenseExpiry: "2030-04-23",
    experienceYears: 19,
    languagesSpoken: ["it", "de"],
    available: [
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
        day: "Sunday",
        availableHours: [
          {
            from: "00:00",
            to: "05:00"
          },
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
            from: "06:00",
            to: "11:00"
          },
          {
            from: "15:00",
            to: "18:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "21:00",
            to: "24:00"
          }
        ],
      }
    ],
    ratings: 4.6,
    phone: "+282 168-735-6007",
    email: "takashi.taylor@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/shanghai/takashi-taylor.jpg",
    specialties: ["Corporate Chauffeur", "Airport Transfers"],
    vehicleTypesCertified: ["Sports Car"],
  },
  {
    id: "driver-shanghai-3",
    name: "Akira Williams",
    licenseNumber: "H7S745",
    licenseExpiry: "2030-10-06",
    experienceYears: 16,
    languagesSpoken: ["tr", "hi", "es"],
    available: [
      {
        day: "Wednesday",
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
            from: "10:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "10:00",
            to: "12:00"
          },
          {
            from: "11:00",
            to: "14:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "04:00",
            to: "06:00"
          },
          {
            from: "14:00",
            to: "17:00"
          }
        ],
      }
    ],
    ratings: 3.6,
    phone: "+627 329-816-3171",
    email: "akira.williams@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/shanghai/akira-williams.jpg",
    specialties: ["Tour Guide Driver", "Luxury Car Specialist", "Security Detail"],
    vehicleTypesCertified: ["Sedan"],
  },
  {
    id: "driver-shanghai-4",
    name: "Hao Jung",
    licenseNumber: "O4V780",
    licenseExpiry: "2027-02-13",
    experienceYears: 15,
    languagesSpoken: ["it", "ru"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "10:00",
            to: "12:00"
          },
          {
            from: "08:00",
            to: "10:00"
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
            from: "05:00",
            to: "08:00"
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
            to: "17:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "14:00",
            to: "19:00"
          },
          {
            from: "02:00",
            to: "07:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "05:00",
            to: "07:00"
          }
        ],
      }
    ],
    ratings: 4.7,
    phone: "+74 834-175-3523",
    email: "hao.jung@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/shanghai/hao-jung.jpg",
    specialties: ["Event Transportation", "Long-Distance Driving", "Airport Transfers"],
    vehicleTypesCertified: ["Luxury SUV", "Electric Vehicle"],
  },
  {
    id: "driver-shanghai-5",
    name: "Hong Yamamoto",
    licenseNumber: "D6Y309",
    licenseExpiry: "2027-09-06",
    experienceYears: 1,
    languagesSpoken: ["de"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "14:00",
            to: "19:00"
          },
          {
            from: "14:00",
            to: "18:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "05:00",
            to: "09:00"
          },
          {
            from: "17:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "05:00",
            to: "08:00"
          },
          {
            from: "10:00",
            to: "15:00"
          }
        ],
      }
    ],
    ratings: 4.1,
    phone: "+550 218-654-4605",
    email: "hong.yamamoto@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/shanghai/hong-yamamoto.jpg",
    specialties: ["Luxury Car Specialist", "Night Shift"],
    vehicleTypesCertified: ["SUV"],
  },
  {
    id: "driver-shanghai-6",
    name: "Joseph Khan",
    licenseNumber: "Z8K736",
    licenseExpiry: "2026-12-19",
    experienceYears: 18,
    languagesSpoken: ["ja"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "14:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "00:00",
            to: "03:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "11:00",
            to: "16:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "21:00",
            to: "24:00"
          },
          {
            from: "06:00",
            to: "08:00"
          }
        ],
      }
    ],
    ratings: 3.7,
    phone: "+612 303-309-1080",
    email: "joseph.khan@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/shanghai/joseph-khan.jpg",
    specialties: ["Luxury Car Specialist", "VIP Transport", "Tour Guide Driver"],
    vehicleTypesCertified: ["Luxury SUV"],
  },
  {
    id: "driver-shanghai-7",
    name: "Barbara Lee",
    licenseNumber: "E9Y013",
    licenseExpiry: "2026-05-18",
    experienceYears: 2,
    languagesSpoken: ["it", "fr"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "00:00",
            to: "02:00"
          },
          {
            from: "05:00",
            to: "10:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "02:00",
            to: "07:00"
          },
          {
            from: "11:00",
            to: "13:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "09:00",
            to: "13:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "02:00",
            to: "04:00"
          },
          {
            from: "04:00",
            to: "06:00"
          }
        ],
      }
    ],
    ratings: 4.2,
    phone: "+580 452-794-5921",
    email: "barbara.lee@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/shanghai/barbara-lee.jpg",
    specialties: ["Airport Transfers"],
    vehicleTypesCertified: ["Van", "Sedan"],
  },
  {
    id: "driver-shanghai-8",
    name: "Mariana Ahmed",
    licenseNumber: "V2O274",
    licenseExpiry: "2026-08-26",
    experienceYears: 11,
    languagesSpoken: ["de", "en", "fr"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "03:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "05:00",
            to: "09:00"
          },
          {
            from: "10:00",
            to: "14:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "12:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "02:00",
            to: "04:00"
          },
          {
            from: "13:00",
            to: "16:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "16:00",
            to: "18:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "02:00",
            to: "05:00"
          },
          {
            from: "09:00",
            to: "11:00"
          }
        ],
      }
    ],
    ratings: 3.7,
    phone: "+655 833-680-3140",
    email: "mariana.ahmed@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/shanghai/mariana-ahmed.jpg",
    specialties: ["Airport Transfers", "VIP Transport"],
    vehicleTypesCertified: ["Convertible", "Electric Vehicle", "Sedan"],
  },
  {
    id: "driver-shanghai-9",
    name: "Emma Park",
    licenseNumber: "N4V628",
    licenseExpiry: "2026-11-25",
    experienceYears: 18,
    languagesSpoken: ["ko", "de"],
    available: [
      {
        day: "Monday",
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
        day: "Thursday",
        availableHours: [
          {
            from: "03:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "07:00",
            to: "09:00"
          }
        ],
      }
    ],
    ratings: 4.2,
    phone: "+592 835-730-2339",
    email: "emma.park@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/shanghai/emma-park.jpg",
    specialties: ["Night Shift", "Security Detail", "Corporate Chauffeur"],
    vehicleTypesCertified: ["Electric Vehicle", "Limousine", "Motorcoach"],
  }
];
