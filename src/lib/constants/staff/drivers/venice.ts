import { Driver } from "@/lib/interfaces/people/staff";

export const veniceitalymediterraneanDrivers: Driver[] = [
  {
    id: "driver-venice-1",
    name: "Miku Wang",
    licenseNumber: "A7T652",
    licenseExpiry: "2030-04-01",
    experienceYears: 5,
    languagesSpoken: ["es", "zh"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "12:00",
            to: "17:00"
          },
          {
            from: "09:00",
            to: "14:00"
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
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "10:00",
            to: "13:00"
          },
          {
            from: "11:00",
            to: "13:00"
          }
        ],
      }
    ],
    ratings: 4.1,
    phone: "+452 674-218-6432",
    email: "miku.wang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/venice/miku-wang.jpg",
    specialties: ["Security Detail", "Long-Distance Driving", "Corporate Chauffeur"],
    vehicleTypesCertified: ["Convertible", "Limousine", "Van"],
  },
  {
    id: "driver-venice-2",
    name: "Hao Jung",
    licenseNumber: "Z6A190",
    licenseExpiry: "2026-05-10",
    experienceYears: 7,
    languagesSpoken: ["it", "ko", "tr"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "14:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "03:00",
            to: "05:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "03:00",
            to: "07:00"
          },
          {
            from: "03:00",
            to: "07:00"
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
            to: "12:00"
          }
        ],
      }
    ],
    ratings: 4.5,
    phone: "+568 654-848-5556",
    email: "hao.jung@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/venice/hao-jung.jpg",
    specialties: ["Event Transportation"],
    vehicleTypesCertified: ["Motorcoach"],
  },
  {
    id: "driver-venice-3",
    name: "Hana Zhang",
    licenseNumber: "I3E425",
    licenseExpiry: "2030-07-17",
    experienceYears: 13,
    languagesSpoken: ["ru", "pt"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "02:00",
            to: "07:00"
          }
        ],
      },
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
        day: "Sunday",
        availableHours: [
          {
            from: "02:00",
            to: "04:00"
          },
          {
            from: "20:00",
            to: "24:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "14:00",
            to: "16:00"
          }
        ],
      }
    ],
    ratings: 3.5,
    phone: "+165 568-973-9181",
    email: "hana.zhang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/venice/hana-zhang.jpg",
    specialties: ["Luxury Car Specialist", "Tour Guide Driver", "Night Shift"],
    vehicleTypesCertified: ["Van", "SUV"],
  },
  {
    id: "driver-venice-4",
    name: "Paul Le",
    licenseNumber: "L1R019",
    licenseExpiry: "2030-04-13",
    experienceYears: 20,
    languagesSpoken: ["tr", "es"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "09:00",
            to: "14:00"
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
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "02:00",
            to: "06:00"
          },
          {
            from: "04:00",
            to: "09:00"
          }
        ],
      }
    ],
    ratings: 4.4,
    phone: "+746 607-732-9615",
    email: "paul.le@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/venice/paul-le.jpg",
    specialties: ["Airport Transfers", "Tour Guide Driver"],
    vehicleTypesCertified: ["Sedan"],
  },
  {
    id: "driver-venice-5",
    name: "Hiroshi Kang",
    licenseNumber: "H1L520",
    licenseExpiry: "2030-10-08",
    experienceYears: 3,
    languagesSpoken: ["en"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "09:00",
            to: "12:00"
          },
          {
            from: "14:00",
            to: "16:00"
          }
        ],
      },
      {
        day: "Sunday",
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
            from: "01:00",
            to: "04:00"
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
            from: "11:00",
            to: "14:00"
          }
        ],
      }
    ],
    ratings: 4.2,
    phone: "+680 399-249-3724",
    email: "hiroshi.kang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/venice/hiroshi-kang.jpg",
    specialties: ["VIP Transport", "Night Shift"],
    vehicleTypesCertified: ["Limousine", "Electric Vehicle", "Convertible", "Sedan"],
  },
  {
    id: "driver-venice-6",
    name: "Xia Rodriguez",
    licenseNumber: "A0R423",
    licenseExpiry: "2028-02-04",
    experienceYears: 9,
    languagesSpoken: ["es", "ko"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "14:00",
            to: "17:00"
          },
          {
            from: "12:00",
            to: "14:00"
          }
        ],
      },
      {
        day: "Sunday",
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
            from: "10:00",
            to: "12:00"
          }
        ],
      }
    ],
    ratings: 3.5,
    phone: "+892 385-866-6642",
    email: "xia.rodriguez@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/venice/xia-rodriguez.jpg",
    specialties: ["Event Transportation"],
    vehicleTypesCertified: ["Sedan", "Van", "Convertible", "Luxury SUV"],
  },
  {
    id: "driver-venice-7",
    name: "Yuki Nguyen",
    licenseNumber: "H9Q957",
    licenseExpiry: "2026-08-13",
    experienceYears: 1,
    languagesSpoken: ["hi"],
    available: [
      {
        day: "Thursday",
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
            from: "09:00",
            to: "13:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "02:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00"
          },
          {
            from: "07:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "07:00",
            to: "12:00"
          },
          {
            from: "20:00",
            to: "22:00"
          }
        ],
      }
    ],
    ratings: 3.8,
    phone: "+395 107-883-7329",
    email: "yuki.nguyen@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/venice/yuki-nguyen.jpg",
    specialties: ["Tour Guide Driver", "Night Shift"],
    vehicleTypesCertified: ["Motorcoach", "Sedan", "Sports Car"],
  }
];
