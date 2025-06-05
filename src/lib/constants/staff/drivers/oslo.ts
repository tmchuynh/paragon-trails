import { Driver } from "@/lib/interfaces/people/staff";

export const oslonorwaynorthernEuropeDrivers: Driver[] = [
  {
    id: "driver-oslo-1",
    name: "Jessica Gonzalez",
    licenseNumber: "F7K945",
    licenseExpiry: "2028-02-14",
    experienceYears: 1,
    languagesSpoken: ["es"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "18:00",
            to: "21:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "12:00",
            to: "14:00"
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
            from: "19:00",
            to: "21:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "15:00",
            to: "17:00"
          }
        ],
      }
    ],
    ratings: 4.1,
    phone: "+665 263-237-7815",
    email: "jessica.gonzalez@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/oslo/jessica-gonzalez.jpg",
    specialties: ["Long-Distance Driving", "Airport Transfers"],
    vehicleTypesCertified: ["Motorcoach", "Electric Vehicle", "Sedan", "SUV"],
  },
  {
    id: "driver-oslo-2",
    name: "Sakura Wilson",
    licenseNumber: "V0Q167",
    licenseExpiry: "2027-11-05",
    experienceYears: 13,
    languagesSpoken: ["es"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "07:00",
            to: "11:00"
          },
          {
            from: "08:00",
            to: "10:00"
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
            from: "17:00",
            to: "20:00"
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
            from: "09:00",
            to: "13:00"
          }
        ],
      }
    ],
    ratings: 4,
    phone: "+568 548-841-4763",
    email: "sakura.wilson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/oslo/sakura-wilson.jpg",
    specialties: ["Night Shift", "VIP Transport", "Luxury Car Specialist"],
    vehicleTypesCertified: ["Electric Vehicle"],
  },
  {
    id: "driver-oslo-3",
    name: "Satoshi Torres",
    licenseNumber: "T0P179",
    licenseExpiry: "2029-08-01",
    experienceYears: 20,
    languagesSpoken: ["hi", "pt"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "06:00",
            to: "11:00"
          },
          {
            from: "09:00",
            to: "13:00"
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
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "13:00",
            to: "17:00"
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
            from: "14:00",
            to: "17:00"
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
          }
        ],
      }
    ],
    ratings: 4.6,
    phone: "+764 245-322-5982",
    email: "satoshi.torres@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/oslo/satoshi-torres.jpg",
    specialties: ["Luxury Car Specialist", "Event Transportation", "Tour Guide Driver"],
    vehicleTypesCertified: ["Electric Vehicle", "Convertible"],
  },
  {
    id: "driver-oslo-4",
    name: "Jun Thompson",
    licenseNumber: "G1T916",
    licenseExpiry: "2028-12-09",
    experienceYears: 4,
    languagesSpoken: ["ko", "en", "es"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "12:00",
            to: "16:00"
          },
          {
            from: "15:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "08:00",
            to: "10:00"
          },
          {
            from: "10:00",
            to: "12:00"
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
            from: "14:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "13:00",
            to: "16:00"
          },
          {
            from: "06:00",
            to: "10:00"
          }
        ],
      }
    ],
    ratings: 3.7,
    phone: "+170 256-290-8379",
    email: "jun.thompson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/oslo/jun-thompson.jpg",
    specialties: ["Luxury Car Specialist"],
    vehicleTypesCertified: ["Electric Vehicle", "SUV", "Limousine"],
  },
  {
    id: "driver-oslo-5",
    name: "Barbara Huynh",
    licenseNumber: "J2T353",
    licenseExpiry: "2027-01-23",
    experienceYears: 4,
    languagesSpoken: ["pt", "ja"],
    available: [
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
            from: "10:00",
            to: "13:00"
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
            from: "16:00",
            to: "21:00"
          },
          {
            from: "04:00",
            to: "06:00"
          }
        ],
      }
    ],
    ratings: 4.3,
    phone: "+55 644-907-3495",
    email: "barbara.huynh@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/oslo/barbara-huynh.jpg",
    specialties: ["VIP Transport", "Tour Guide Driver"],
    vehicleTypesCertified: ["Limousine", "SUV", "Van"],
  },
  {
    id: "driver-oslo-6",
    name: "Robert Wang",
    licenseNumber: "N4I325",
    licenseExpiry: "2027-05-21",
    experienceYears: 2,
    languagesSpoken: ["ko", "ru"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "04:00",
            to: "07:00"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "07:00",
            to: "11:00"
          },
          {
            from: "01:00",
            to: "03:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "15:00",
            to: "19:00"
          }
        ],
      }
    ],
    ratings: 3.9,
    phone: "+809 751-593-7428",
    email: "robert.wang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/oslo/robert-wang.jpg",
    specialties: ["Security Detail", "Long-Distance Driving"],
    vehicleTypesCertified: ["Sedan"],
  },
  {
    id: "driver-oslo-7",
    name: "Amelia Thomas",
    licenseNumber: "B9I286",
    licenseExpiry: "2030-08-20",
    experienceYears: 3,
    languagesSpoken: ["it"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "02:00",
            to: "04:00"
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
            from: "10:00",
            to: "15:00"
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
      }
    ],
    ratings: 4,
    phone: "+389 329-360-3173",
    email: "amelia.thomas@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/oslo/amelia-thomas.jpg",
    specialties: ["Tour Guide Driver", "Night Shift"],
    vehicleTypesCertified: ["Sedan", "Sports Car"],
  }
];
