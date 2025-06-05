import { Driver } from "@/lib/interfaces/people/staff";

export const dublinirelandnorthernEuropeDrivers: Driver[] = [
  {
    id: "driver-dublin-1",
    name: "Rin Choi",
    licenseNumber: "J8X665",
    licenseExpiry: "2030-09-10",
    experienceYears: 3,
    languagesSpoken: ["it", "en"],
    available: [
      {
        day: "Wednesday",
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
            from: "03:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "09:00",
            to: "13:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "18:00",
            to: "21:00"
          }
        ],
      }
    ],
    ratings: 4.3,
    phone: "+461 942-841-9362",
    email: "rin.choi@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/dublin/rin-choi.jpg",
    specialties: ["Event Transportation"],
    vehicleTypesCertified: ["Limousine", "Van", "Luxury SUV"],
  },
  {
    id: "driver-dublin-2",
    name: "Joseph Garcia",
    licenseNumber: "B3Y457",
    licenseExpiry: "2030-03-12",
    experienceYears: 12,
    languagesSpoken: ["tr", "fr"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "08:00",
            to: "13:00"
          },
          {
            from: "17:00",
            to: "20:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "05:00",
            to: "07:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "14:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "19:00",
            to: "24:00"
          }
        ],
      }
    ],
    ratings: 4,
    phone: "+315 438-282-3421",
    email: "joseph.garcia@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/dublin/joseph-garcia.jpg",
    specialties: ["Tour Guide Driver", "Security Detail", "Airport Transfers"],
    vehicleTypesCertified: ["Limousine", "Luxury SUV"],
  },
  {
    id: "driver-dublin-3",
    name: "Barbara Watanabe",
    licenseNumber: "J4Y403",
    licenseExpiry: "2029-09-06",
    experienceYears: 6,
    languagesSpoken: ["tr"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "11:00",
            to: "16:00"
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
            from: "17:00",
            to: "22:00"
          },
          {
            from: "08:00",
            to: "13:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "02:00",
            to: "06:00"
          }
        ],
      }
    ],
    ratings: 4.1,
    phone: "+85 807-838-5363",
    email: "barbara.watanabe@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/dublin/barbara-watanabe.jpg",
    specialties: ["Event Transportation"],
    vehicleTypesCertified: ["Sports Car"],
  },
  {
    id: "driver-dublin-4",
    name: "Wei Han",
    licenseNumber: "X0K141",
    licenseExpiry: "2030-03-05",
    experienceYears: 18,
    languagesSpoken: ["ar"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "07:00",
            to: "09:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "04:00",
            to: "07:00"
          },
          {
            from: "14:00",
            to: "16:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "04:00",
            to: "06:00"
          }
        ],
      }
    ],
    ratings: 3.9,
    phone: "+789 446-703-7338",
    email: "wei.han@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/dublin/wei-han.jpg",
    specialties: ["Night Shift", "Long-Distance Driving", "Security Detail"],
    vehicleTypesCertified: ["Sedan", "SUV", "Sports Car"],
  },
  {
    id: "driver-dublin-5",
    name: "Koharu Garcia",
    licenseNumber: "S4E927",
    licenseExpiry: "2026-08-06",
    experienceYears: 4,
    languagesSpoken: ["ar", "it"],
    available: [
      {
        day: "Sunday",
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
            from: "02:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "08:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "19:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "11:00",
            to: "16:00"
          }
        ],
      }
    ],
    ratings: 3.5,
    phone: "+185 394-648-1943",
    email: "koharu.garcia@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/dublin/koharu-garcia.jpg",
    specialties: ["Tour Guide Driver"],
    vehicleTypesCertified: ["Convertible", "Electric Vehicle"],
  },
  {
    id: "driver-dublin-6",
    name: "Charlotte Thompson",
    licenseNumber: "X2J924",
    licenseExpiry: "2029-07-16",
    experienceYears: 5,
    languagesSpoken: ["ar"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "18:00",
            to: "21:00"
          },
          {
            from: "12:00",
            to: "17:00"
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
            from: "16:00",
            to: "18:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "13:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "08:00",
            to: "10:00"
          },
          {
            from: "02:00",
            to: "06:00"
          }
        ],
      }
    ],
    ratings: 3.8,
    phone: "+510 282-977-9522",
    email: "charlotte.thompson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/dublin/charlotte-thompson.jpg",
    specialties: ["Luxury Car Specialist", "Night Shift", "Long-Distance Driving"],
    vehicleTypesCertified: ["Electric Vehicle"],
  },
  {
    id: "driver-dublin-7",
    name: "Susan Jung",
    licenseNumber: "T0B051",
    licenseExpiry: "2030-04-04",
    experienceYears: 17,
    languagesSpoken: ["es"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "18:00",
            to: "20:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "08:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "02:00",
            to: "04:00"
          }
        ],
      }
    ],
    ratings: 4.6,
    phone: "+638 956-386-7688",
    email: "susan.jung@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/dublin/susan-jung.jpg",
    specialties: ["Event Transportation", "VIP Transport", "Airport Transfers"],
    vehicleTypesCertified: ["Van", "Luxury SUV", "Sedan", "SUV", "Motorcoach"],
  },
  {
    id: "driver-dublin-8",
    name: "Kazuki Singh",
    licenseNumber: "W9Q146",
    licenseExpiry: "2028-08-01",
    experienceYears: 9,
    languagesSpoken: ["tr", "it"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "20:00",
            to: "23:00"
          },
          {
            from: "10:00",
            to: "12:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "12:00",
            to: "16:00"
          },
          {
            from: "18:00",
            to: "23:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "02:00",
            to: "04:00"
          }
        ],
      }
    ],
    ratings: 4.5,
    phone: "+483 264-488-3346",
    email: "kazuki.singh@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/dublin/kazuki-singh.jpg",
    specialties: ["VIP Transport"],
    vehicleTypesCertified: ["Limousine"],
  },
  {
    id: "driver-dublin-9",
    name: "Lei Anderson",
    licenseNumber: "B6Q045",
    licenseExpiry: "2030-06-10",
    experienceYears: 7,
    languagesSpoken: ["ar"],
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
        day: "Tuesday",
        availableHours: [
          {
            from: "17:00",
            to: "20:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "08:00",
            to: "12:00"
          },
          {
            from: "02:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "19:00",
            to: "23:00"
          }
        ],
      }
    ],
    ratings: 4.6,
    phone: "+731 174-926-3368",
    email: "lei.anderson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/dublin/lei-anderson.jpg",
    specialties: ["Night Shift", "Security Detail"],
    vehicleTypesCertified: ["SUV"],
  }
];
