import { Driver } from "@/lib/interfaces/people/staff";

export const aucklandnewZealandasiaPacificDrivers: Driver[] = [
  {
    id: "driver-auckland-1",
    name: "Wei Torres",
    licenseNumber: "F9A777",
    licenseExpiry: "2027-12-28",
    experienceYears: 20,
    languagesSpoken: ["it", "ja"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "04:00",
            to: "06:00"
          },
          {
            from: "09:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "02:00",
            to: "06:00"
          },
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
            from: "07:00",
            to: "11:00"
          }
        ],
      }
    ],
    ratings: 3.9,
    phone: "+580 431-932-4057",
    email: "wei.torres@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/auckland/wei-torres.jpg",
    specialties: ["Night Shift", "Tour Guide Driver"],
    vehicleTypesCertified: ["Motorcoach"],
  },
  {
    id: "driver-auckland-2",
    name: "Sofia Nguyen",
    licenseNumber: "C3A568",
    licenseExpiry: "2029-10-09",
    experienceYears: 6,
    languagesSpoken: ["fr"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "09:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "13:00",
            to: "17:00"
          },
          {
            from: "19:00",
            to: "21:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "07:00",
            to: "12:00"
          }
        ],
      }
    ],
    ratings: 3.5,
    phone: "+413 287-220-3295",
    email: "sofia.nguyen@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/auckland/sofia-nguyen.jpg",
    specialties: ["Long-Distance Driving", "Corporate Chauffeur"],
    vehicleTypesCertified: ["Sedan", "SUV", "Limousine", "Sports Car"],
  },
  {
    id: "driver-auckland-3",
    name: "Mary Lee",
    licenseNumber: "P8J106",
    licenseExpiry: "2030-01-03",
    experienceYears: 6,
    languagesSpoken: ["pt", "it", "ru"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "19:00",
            to: "22:00"
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
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "11:00",
            to: "14:00"
          }
        ],
      }
    ],
    ratings: 4.3,
    phone: "+332 904-462-5439",
    email: "mary.lee@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/auckland/mary-lee.jpg",
    specialties: ["Corporate Chauffeur"],
    vehicleTypesCertified: ["SUV"],
  },
  {
    id: "driver-auckland-4",
    name: "William Zhang",
    licenseNumber: "S3K569",
    licenseExpiry: "2029-09-21",
    experienceYears: 13,
    languagesSpoken: ["ru", "it", "de"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "09:00",
            to: "14:00"
          },
          {
            from: "14:00",
            to: "18:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "04:00",
            to: "09:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "13:00",
            to: "18:00"
          },
          {
            from: "06:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "19:00",
            to: "24:00"
          },
          {
            from: "04:00",
            to: "09:00"
          }
        ],
      }
    ],
    ratings: 3.8,
    phone: "+433 474-992-1162",
    email: "william.zhang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/auckland/william-zhang.jpg",
    specialties: ["Night Shift", "Airport Transfers"],
    vehicleTypesCertified: ["Electric Vehicle", "Sports Car"],
  },
  {
    id: "driver-auckland-5",
    name: "Hui White",
    licenseNumber: "Q9Y598",
    licenseExpiry: "2028-03-20",
    experienceYears: 14,
    languagesSpoken: ["ru"],
    available: [
      {
        day: "Sunday",
        availableHours: [
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
            from: "16:00",
            to: "18:00"
          },
          {
            from: "07:00",
            to: "10:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "03:00",
            to: "08:00"
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
            from: "03:00",
            to: "07:00"
          },
          {
            from: "02:00",
            to: "06:00"
          }
        ],
      }
    ],
    ratings: 3.5,
    phone: "+897 384-534-2263",
    email: "hui.white@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/auckland/hui-white.jpg",
    specialties: ["Night Shift", "Event Transportation", "Luxury Car Specialist"],
    vehicleTypesCertified: ["Sports Car"],
  },
  {
    id: "driver-auckland-6",
    name: "Daniel Thompson",
    licenseNumber: "E3H329",
    licenseExpiry: "2027-12-12",
    experienceYears: 18,
    languagesSpoken: ["ja", "ru", "pt"],
    available: [
      {
        day: "Sunday",
        availableHours: [
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
            from: "14:00",
            to: "18:00"
          },
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
            from: "05:00",
            to: "09:00"
          },
          {
            from: "15:00",
            to: "18:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "03:00",
            to: "07:00"
          }
        ],
      }
    ],
    ratings: 4.9,
    phone: "+104 149-507-9147",
    email: "daniel.thompson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/auckland/daniel-thompson.jpg",
    specialties: ["Security Detail", "Airport Transfers", "Night Shift"],
    vehicleTypesCertified: ["Sedan", "Luxury SUV", "SUV"],
  },
  {
    id: "driver-auckland-7",
    name: "Lucia Martin",
    licenseNumber: "P6D382",
    licenseExpiry: "2027-10-26",
    experienceYears: 7,
    languagesSpoken: ["zh", "ru", "tr"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "03:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
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
            from: "11:00",
            to: "13:00"
          }
        ],
      }
    ],
    ratings: 4.1,
    phone: "+778 566-265-3355",
    email: "lucia.martin@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/auckland/lucia-martin.jpg",
    specialties: ["Event Transportation", "VIP Transport", "Corporate Chauffeur", "Airport Transfers"],
    vehicleTypesCertified: ["Van", "Motorcoach"],
  },
  {
    id: "driver-auckland-8",
    name: "Kenji Watanabe",
    licenseNumber: "R5U013",
    licenseExpiry: "2026-05-11",
    experienceYears: 17,
    languagesSpoken: ["de"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "05:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "02:00",
            to: "04:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
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
            to: "19:00"
          }
        ],
      }
    ],
    ratings: 4.3,
    phone: "+184 485-778-3138",
    email: "kenji.watanabe@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/auckland/kenji-watanabe.jpg",
    specialties: ["Long-Distance Driving"],
    vehicleTypesCertified: ["Limousine", "Luxury SUV"],
  },
  {
    id: "driver-auckland-9",
    name: "Haruki Thompson",
    licenseNumber: "N7R932",
    licenseExpiry: "2027-10-18",
    experienceYears: 9,
    languagesSpoken: ["fr"],
    available: [
      {
        day: "Friday",
        availableHours: [
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
            from: "21:00",
            to: "24:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "02:00",
            to: "06:00"
          },
          {
            from: "16:00",
            to: "18:00"
          }
        ],
      }
    ],
    ratings: 4.1,
    phone: "+199 165-510-2893",
    email: "haruki.thompson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/auckland/haruki-thompson.jpg",
    specialties: ["Airport Transfers"],
    vehicleTypesCertified: ["Electric Vehicle", "Limousine", "Van", "Convertible"],
  }
];
