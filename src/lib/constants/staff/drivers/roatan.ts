import { Driver } from "@/lib/interfaces/people/staff";

export const roatanhondurascaribbeanDrivers: Driver[] = [
  {
    id: "driver-roatan-1",
    name: "Daniela Le",
    licenseNumber: "D2Y805",
    licenseExpiry: "2028-03-05",
    experienceYears: 3,
    languagesSpoken: ["fr"],
    available: [
      {
        day: "Monday",
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
        day: "Friday",
        availableHours: [
          {
            from: "06:00",
            to: "08:00"
          },
          {
            from: "05:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "02:00",
            to: "07:00"
          },
          {
            from: "20:00",
            to: "24:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "08:00",
            to: "11:00"
          }
        ],
      }
    ],
    ratings: 4.2,
    phone: "+368 830-721-5789",
    email: "daniela.le@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/roatan/daniela-le.jpg",
    specialties: ["Airport Transfers", "Night Shift", "Security Detail"],
    vehicleTypesCertified: ["Motorcoach", "Convertible", "Van", "Electric Vehicle"],
  },
  {
    id: "driver-roatan-2",
    name: "Ming Torres",
    licenseNumber: "E0O900",
    licenseExpiry: "2026-03-03",
    experienceYears: 8,
    languagesSpoken: ["fr", "zh", "de"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "16:00",
            to: "20:00"
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
            from: "11:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "09:00",
            to: "12:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "17:00",
            to: "21:00"
          },
          {
            from: "19:00",
            to: "22:00"
          }
        ],
      }
    ],
    ratings: 4,
    phone: "+144 552-576-2570",
    email: "ming.torres@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/roatan/ming-torres.jpg",
    specialties: ["Long-Distance Driving", "Security Detail", "Corporate Chauffeur"],
    vehicleTypesCertified: ["SUV", "Motorcoach", "Convertible"],
  },
  {
    id: "driver-roatan-3",
    name: "Charlotte Jones",
    licenseNumber: "F4Z712",
    licenseExpiry: "2028-05-20",
    experienceYears: 11,
    languagesSpoken: ["zh"],
    available: [
      {
        day: "Saturday",
        availableHours: [
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
            from: "04:00",
            to: "07:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "09:00",
            to: "12:00"
          },
          {
            from: "07:00",
            to: "09:00"
          }
        ],
      }
    ],
    ratings: 3.9,
    phone: "+57 375-640-1010",
    email: "charlotte.jones@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/roatan/charlotte-jones.jpg",
    specialties: ["Corporate Chauffeur", "Airport Transfers"],
    vehicleTypesCertified: ["Electric Vehicle", "SUV"],
  },
  {
    id: "driver-roatan-4",
    name: "Lucia Wilson",
    licenseNumber: "C7S997",
    licenseExpiry: "2028-09-06",
    experienceYears: 17,
    languagesSpoken: ["zh", "de"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "00:00",
            to: "03:00"
          },
          {
            from: "07:00",
            to: "09:00"
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
        day: "Friday",
        availableHours: [
          {
            from: "08:00",
            to: "12:00"
          },
          {
            from: "19:00",
            to: "21:00"
          }
        ],
      }
    ],
    ratings: 4.4,
    phone: "+648 331-790-7019",
    email: "lucia.wilson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/roatan/lucia-wilson.jpg",
    specialties: ["VIP Transport"],
    vehicleTypesCertified: ["Convertible", "Sports Car", "SUV"],
  },
  {
    id: "driver-roatan-5",
    name: "Lei Zhao",
    licenseNumber: "N9J000",
    licenseExpiry: "2026-03-19",
    experienceYears: 14,
    languagesSpoken: ["ar"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "21:00",
            to: "23:00"
          },
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
            from: "08:00",
            to: "13:00"
          }
        ],
      },
      {
        day: "Thursday",
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
            from: "09:00",
            to: "14:00"
          },
          {
            from: "05:00",
            to: "08:00"
          }
        ],
      }
    ],
    ratings: 4.8,
    phone: "+369 499-561-1273",
    email: "lei.zhao@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/roatan/lei-zhao.jpg",
    specialties: ["VIP Transport"],
    vehicleTypesCertified: ["Electric Vehicle"],
  },
  {
    id: "driver-roatan-6",
    name: "Susan Nguyen",
    licenseNumber: "R9G385",
    licenseExpiry: "2027-04-20",
    experienceYears: 9,
    languagesSpoken: ["fr", "tr"],
    available: [
      {
        day: "Thursday",
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
            from: "14:00",
            to: "18:00"
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
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "01:00",
            to: "04:00"
          }
        ],
      }
    ],
    ratings: 3.6,
    phone: "+28 754-768-4644",
    email: "susan.nguyen@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/roatan/susan-nguyen.jpg",
    specialties: ["Long-Distance Driving", "Night Shift", "Airport Transfers", "Security Detail"],
    vehicleTypesCertified: ["Sports Car", "SUV"],
  },
  {
    id: "driver-roatan-7",
    name: "Hao Shin",
    licenseNumber: "J7J596",
    licenseExpiry: "2030-06-17",
    experienceYears: 2,
    languagesSpoken: ["es", "fr", "ru"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
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
            to: "24:00"
          }
        ],
      }
    ],
    ratings: 4.3,
    phone: "+92 322-718-1731",
    email: "hao.shin@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/roatan/hao-shin.jpg",
    specialties: ["Long-Distance Driving", "Security Detail"],
    vehicleTypesCertified: ["Luxury SUV", "Convertible", "Van", "Limousine"],
  },
  {
    id: "driver-roatan-8",
    name: "Fang Suzuki",
    licenseNumber: "C9N526",
    licenseExpiry: "2026-03-10",
    experienceYears: 16,
    languagesSpoken: ["de"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "20:00",
            to: "24:00"
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
            from: "01:00",
            to: "06:00"
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
            from: "11:00",
            to: "14:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "04:00",
            to: "06:00"
          },
          {
            from: "19:00",
            to: "21:00"
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
            from: "15:00",
            to: "17:00"
          }
        ],
      }
    ],
    ratings: 4.9,
    phone: "+560 958-343-6989",
    email: "fang.suzuki@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/roatan/fang-suzuki.jpg",
    specialties: ["Long-Distance Driving", "Night Shift", "Luxury Car Specialist"],
    vehicleTypesCertified: ["Luxury SUV", "SUV", "Van"],
  }
];
