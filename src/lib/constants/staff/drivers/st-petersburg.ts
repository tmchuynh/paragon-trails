import { Driver } from "@/lib/interfaces/people/staff";

export const stPetersburgrussianorthernEuropeDrivers: Driver[] = [
  {
    id: "driver-st-petersburg-1",
    name: "Elizabeth Yang",
    licenseNumber: "W7Y512",
    licenseExpiry: "2029-06-04",
    experienceYears: 20,
    languagesSpoken: ["ar", "pt"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "09:00",
            to: "13:00"
          },
          {
            from: "18:00",
            to: "21:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "20:00",
            to: "22:00"
          },
          {
            from: "08:00",
            to: "13:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "18:00",
            to: "21:00"
          },
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
            from: "04:00",
            to: "06:00"
          },
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
            from: "02:00",
            to: "07:00"
          }
        ],
      }
    ],
    ratings: 4.2,
    phone: "+105 412-206-1846",
    email: "elizabeth.yang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/st-petersburg/elizabeth-yang.jpg",
    specialties: ["Airport Transfers", "Long-Distance Driving", "Security Detail"],
    vehicleTypesCertified: ["Luxury SUV"],
  },
  {
    id: "driver-st-petersburg-2",
    name: "Barbara Sharma",
    licenseNumber: "E7R263",
    licenseExpiry: "2026-04-10",
    experienceYears: 1,
    languagesSpoken: ["ja"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "13:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00"
          },
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
            from: "15:00",
            to: "20:00"
          },
          {
            from: "14:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "19:00",
            to: "23:00"
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
            from: "08:00",
            to: "12:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "19:00",
            to: "23:00"
          }
        ],
      }
    ],
    ratings: 4.7,
    phone: "+354 189-907-5874",
    email: "barbara.sharma@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/st-petersburg/barbara-sharma.jpg",
    specialties: ["Tour Guide Driver", "VIP Transport", "Event Transportation"],
    vehicleTypesCertified: ["Motorcoach", "Sports Car", "Van"],
  },
  {
    id: "driver-st-petersburg-3",
    name: "Kenji Shin",
    licenseNumber: "P1Q725",
    licenseExpiry: "2028-08-27",
    experienceYears: 3,
    languagesSpoken: ["en", "ar"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "06:00",
            to: "09:00"
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
            to: "08:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "17:00",
            to: "21:00"
          }
        ],
      }
    ],
    ratings: 5,
    phone: "+532 536-956-8848",
    email: "kenji.shin@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/st-petersburg/kenji-shin.jpg",
    specialties: ["Corporate Chauffeur"],
    vehicleTypesCertified: ["Convertible"],
  },
  {
    id: "driver-st-petersburg-4",
    name: "Emily Suzuki",
    licenseNumber: "D6O537",
    licenseExpiry: "2026-04-25",
    experienceYears: 2,
    languagesSpoken: ["en"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "04:00",
            to: "09:00"
          },
          {
            from: "06:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "20:00",
            to: "24:00"
          },
          {
            from: "12:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "12:00",
            to: "14:00"
          },
          {
            from: "16:00",
            to: "21:00"
          }
        ],
      }
    ],
    ratings: 4.4,
    phone: "+31 403-216-1323",
    email: "emily.suzuki@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/st-petersburg/emily-suzuki.jpg",
    specialties: ["VIP Transport"],
    vehicleTypesCertified: ["Motorcoach"],
  },
  {
    id: "driver-st-petersburg-5",
    name: "Takashi Hoang",
    licenseNumber: "S8T611",
    licenseExpiry: "2030-07-18",
    experienceYears: 13,
    languagesSpoken: ["zh", "it", "en"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "00:00",
            to: "03:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
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
            from: "03:00",
            to: "05:00"
          },
          {
            from: "11:00",
            to: "13:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "09:00",
            to: "12:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "00:00",
            to: "02:00"
          }
        ],
      }
    ],
    ratings: 3.9,
    phone: "+310 412-929-8034",
    email: "takashi.hoang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/st-petersburg/takashi-hoang.jpg",
    specialties: ["Long-Distance Driving"],
    vehicleTypesCertified: ["Electric Vehicle"],
  },
  {
    id: "driver-st-petersburg-6",
    name: "Takashi Torres",
    licenseNumber: "H5K810",
    licenseExpiry: "2027-07-14",
    experienceYears: 13,
    languagesSpoken: ["it", "de", "zh"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "02:00",
            to: "07:00"
          },
          {
            from: "18:00",
            to: "20:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "12:00",
            to: "14:00"
          },
          {
            from: "07:00",
            to: "10:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "02:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "12:00",
            to: "14:00"
          },
          {
            from: "04:00",
            to: "09:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "12:00",
            to: "15:00"
          },
          {
            from: "00:00",
            to: "05:00"
          }
        ],
      }
    ],
    ratings: 3.6,
    phone: "+489 472-107-6489",
    email: "takashi.torres@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/st-petersburg/takashi-torres.jpg",
    specialties: ["Tour Guide Driver"],
    vehicleTypesCertified: ["Motorcoach", "Electric Vehicle", "Convertible"],
  },
  {
    id: "driver-st-petersburg-7",
    name: "Olivia Watanabe",
    licenseNumber: "L0L557",
    licenseExpiry: "2030-12-14",
    experienceYears: 10,
    languagesSpoken: ["ko", "en", "ar"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "18:00",
            to: "21:00"
          },
          {
            from: "07:00",
            to: "12:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "08:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "19:00",
            to: "21:00"
          },
          {
            from: "10:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "06:00",
            to: "08:00"
          },
          {
            from: "12:00",
            to: "17:00"
          }
        ],
      }
    ],
    ratings: 3.9,
    phone: "+272 999-833-2197",
    email: "olivia.watanabe@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/st-petersburg/olivia-watanabe.jpg",
    specialties: ["VIP Transport", "Event Transportation", "Tour Guide Driver"],
    vehicleTypesCertified: ["Electric Vehicle"],
  },
  {
    id: "driver-st-petersburg-8",
    name: "Fang Kang",
    licenseNumber: "N1A019",
    licenseExpiry: "2026-12-17",
    experienceYears: 9,
    languagesSpoken: ["ja", "en"],
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
        day: "Friday",
        availableHours: [
          {
            from: "03:00",
            to: "07:00"
          }
        ],
      },
      {
        day: "Saturday",
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
            from: "03:00",
            to: "07:00"
          },
          {
            from: "07:00",
            to: "10:00"
          }
        ],
      }
    ],
    ratings: 3.7,
    phone: "+163 766-303-3638",
    email: "fang.kang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/st-petersburg/fang-kang.jpg",
    specialties: ["Event Transportation"],
    vehicleTypesCertified: ["Luxury SUV", "Motorcoach", "Electric Vehicle"],
  }
];
