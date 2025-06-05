import { Driver } from "@/lib/interfaces/people/staff";

export const bangkokthailandasiaPacificDrivers: Driver[] = [
  {
    id: "driver-bangkok-1",
    name: "Tao Kobayashi",
    licenseNumber: "J4L124",
    licenseExpiry: "2030-06-24",
    experienceYears: 18,
    languagesSpoken: ["ar"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "05:00",
            to: "08:00"
          },
          {
            from: "00:00",
            to: "04:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "09:00",
            to: "13:00"
          },
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
            from: "14:00",
            to: "16:00"
          }
        ],
      }
    ],
    ratings: 3.6,
    phone: "+782 619-851-1980",
    email: "tao.kobayashi@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/bangkok/tao-kobayashi.jpg",
    specialties: ["Event Transportation", "Corporate Chauffeur"],
    vehicleTypesCertified: ["SUV", "Van"],
  },
  {
    id: "driver-bangkok-2",
    name: "Hui Sato",
    licenseNumber: "Z0P703",
    licenseExpiry: "2027-05-13",
    experienceYears: 7,
    languagesSpoken: ["zh", "hi", "fr"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "12:00",
            to: "16:00"
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
            from: "18:00",
            to: "23:00"
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
            from: "16:00",
            to: "21:00"
          }
        ],
      }
    ],
    ratings: 4.2,
    phone: "+111 130-271-8965",
    email: "hui.sato@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/bangkok/hui-sato.jpg",
    specialties: ["Airport Transfers", "Corporate Chauffeur"],
    vehicleTypesCertified: ["Luxury SUV", "Electric Vehicle", "Motorcoach", "Van"],
  },
  {
    id: "driver-bangkok-3",
    name: "Thomas Perez",
    licenseNumber: "D1E703",
    licenseExpiry: "2029-03-24",
    experienceYears: 7,
    languagesSpoken: ["ar"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "00:00",
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
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "03:00",
            to: "05:00"
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
            from: "00:00",
            to: "03:00"
          }
        ],
      }
    ],
    ratings: 4.2,
    phone: "+716 814-511-1897",
    email: "thomas.perez@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/bangkok/thomas-perez.jpg",
    specialties: ["Corporate Chauffeur"],
    vehicleTypesCertified: ["SUV", "Luxury SUV", "Van"],
  },
  {
    id: "driver-bangkok-4",
    name: "Camila Gonzalez",
    licenseNumber: "J9H343",
    licenseExpiry: "2028-05-22",
    experienceYears: 12,
    languagesSpoken: ["pt", "zh", "es"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "16:00",
            to: "20:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "01:00",
            to: "03:00"
          },
          {
            from: "13:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "11:00",
            to: "13:00"
          },
          {
            from: "01:00",
            to: "06:00"
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
            from: "10:00",
            to: "12:00"
          }
        ],
      }
    ],
    ratings: 4.7,
    phone: "+283 934-772-3312",
    email: "camila.gonzalez@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/bangkok/camila-gonzalez.jpg",
    specialties: ["Event Transportation", "Night Shift", "VIP Transport"],
    vehicleTypesCertified: ["Limousine"],
  },
  {
    id: "driver-bangkok-5",
    name: "Aoi Pham",
    licenseNumber: "U2S056",
    licenseExpiry: "2026-07-10",
    experienceYears: 2,
    languagesSpoken: ["ru", "ar", "ko"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "11:00",
            to: "16:00"
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
            from: "05:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
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
            from: "10:00",
            to: "15:00"
          }
        ],
      }
    ],
    ratings: 4,
    phone: "+585 293-637-8260",
    email: "aoi.pham@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/bangkok/aoi-pham.jpg",
    specialties: ["VIP Transport", "Night Shift", "Airport Transfers"],
    vehicleTypesCertified: ["Electric Vehicle"],
  },
  {
    id: "driver-bangkok-6",
    name: "Yuna Sharma",
    licenseNumber: "G1F309",
    licenseExpiry: "2028-08-09",
    experienceYears: 8,
    languagesSpoken: ["fr"],
    available: [
      {
        day: "Monday",
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
            from: "18:00",
            to: "21:00"
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
            from: "01:00",
            to: "04:00"
          },
          {
            from: "06:00",
            to: "10:00"
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
      }
    ],
    ratings: 3.5,
    phone: "+492 476-997-5984",
    email: "yuna.sharma@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/bangkok/yuna-sharma.jpg",
    specialties: ["Night Shift"],
    vehicleTypesCertified: ["Van", "Luxury SUV", "Convertible", "Motorcoach"],
  },
  {
    id: "driver-bangkok-7",
    name: "Andrew Cho",
    licenseNumber: "D6U446",
    licenseExpiry: "2030-07-28",
    experienceYears: 7,
    languagesSpoken: ["es", "en"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "03:00",
            to: "07:00"
          },
          {
            from: "16:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "10:00",
            to: "12:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "13:00",
            to: "16:00"
          }
        ],
      }
    ],
    ratings: 4.1,
    phone: "+330 252-844-8640",
    email: "andrew.cho@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/bangkok/andrew-cho.jpg",
    specialties: ["VIP Transport", "Security Detail", "Night Shift", "Event Transportation"],
    vehicleTypesCertified: ["Sedan", "Electric Vehicle", "Luxury SUV", "Motorcoach"],
  },
  {
    id: "driver-bangkok-8",
    name: "Matthew Brown",
    licenseNumber: "S6M100",
    licenseExpiry: "2029-07-21",
    experienceYears: 15,
    languagesSpoken: ["ru", "tr"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "08:00",
            to: "10:00"
          },
          {
            from: "03:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "12:00",
            to: "17:00"
          },
          {
            from: "17:00",
            to: "21:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "15:00",
            to: "18:00"
          },
          {
            from: "07:00",
            to: "12:00"
          }
        ],
      }
    ],
    ratings: 3.5,
    phone: "+651 699-190-1211",
    email: "matthew.brown@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/bangkok/matthew-brown.jpg",
    specialties: ["VIP Transport", "Event Transportation", "Airport Transfers", "Tour Guide Driver"],
    vehicleTypesCertified: ["Motorcoach", "Limousine"],
  },
  {
    id: "driver-bangkok-9",
    name: "Kenji Taylor",
    licenseNumber: "P3V254",
    licenseExpiry: "2028-01-08",
    experienceYears: 5,
    languagesSpoken: ["ar", "ru"],
    available: [
      {
        day: "Friday",
        availableHours: [
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
        day: "Wednesday",
        availableHours: [
          {
            from: "21:00",
            to: "24:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "05:00",
            to: "10:00"
          }
        ],
      }
    ],
    ratings: 4.8,
    phone: "+778 974-384-4531",
    email: "kenji.taylor@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/bangkok/kenji-taylor.jpg",
    specialties: ["Night Shift"],
    vehicleTypesCertified: ["Luxury SUV", "Motorcoach"],
  }
];
