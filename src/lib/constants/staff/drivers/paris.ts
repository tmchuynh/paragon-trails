import { Driver } from "@/lib/interfaces/people/staff";

export const parisfrancenorthernEuropeDrivers: Driver[] = [
  {
    id: "driver-paris-1",
    name: "Valeria Nakamura",
    licenseNumber: "Z5S431",
    licenseExpiry: "2026-06-01",
    experienceYears: 18,
    languagesSpoken: ["ko"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "00:00",
            to: "04:00"
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
            from: "19:00",
            to: "24:00"
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
            from: "05:00",
            to: "10:00"
          },
          {
            from: "19:00",
            to: "24:00"
          }
        ],
      },
      {
        day: "Monday",
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
            from: "15:00",
            to: "18:00"
          },
          {
            from: "07:00",
            to: "11:00"
          }
        ],
      }
    ],
    ratings: 4.9,
    phone: "+85 364-447-1896",
    email: "valeria.nakamura@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/paris/valeria-nakamura.jpg",
    specialties: ["Event Transportation", "Security Detail"],
    vehicleTypesCertified: ["Electric Vehicle"],
  },
  {
    id: "driver-paris-2",
    name: "Satoshi Sato",
    licenseNumber: "H2D502",
    licenseExpiry: "2028-08-10",
    experienceYears: 14,
    languagesSpoken: ["pt", "ja"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "05:00",
            to: "07:00"
          },
          {
            from: "15:00",
            to: "18:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "00:00",
            to: "02:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "11:00",
            to: "13:00"
          }
        ],
      }
    ],
    ratings: 4.7,
    phone: "+630 269-879-3563",
    email: "satoshi.sato@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/paris/satoshi-sato.jpg",
    specialties: ["Tour Guide Driver"],
    vehicleTypesCertified: ["Sports Car", "Limousine", "Convertible"],
  },
  {
    id: "driver-paris-3",
    name: "Ying Li",
    licenseNumber: "O9B235",
    licenseExpiry: "2029-07-03",
    experienceYears: 10,
    languagesSpoken: ["es", "ja"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "04:00",
            to: "06:00"
          },
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
            from: "03:00",
            to: "05:00"
          },
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
            from: "11:00",
            to: "15:00"
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
            from: "10:00",
            to: "15:00"
          }
        ],
      }
    ],
    ratings: 4.6,
    phone: "+604 678-853-4763",
    email: "ying.li@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/paris/ying-li.jpg",
    specialties: ["Night Shift", "Long-Distance Driving"],
    vehicleTypesCertified: ["Sedan", "Van", "Luxury SUV", "Convertible", "Motorcoach"],
  },
  {
    id: "driver-paris-4",
    name: "Mei Johnson",
    licenseNumber: "Z8B330",
    licenseExpiry: "2028-05-01",
    experienceYears: 13,
    languagesSpoken: ["ar", "zh"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "20:00",
            to: "24:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "06:00",
            to: "09:00"
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
            from: "12:00",
            to: "16:00"
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
            from: "10:00",
            to: "15:00"
          }
        ],
      }
    ],
    ratings: 4.7,
    phone: "+39 315-437-7126",
    email: "mei.johnson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/paris/mei-johnson.jpg",
    specialties: ["Event Transportation", "Tour Guide Driver", "Long-Distance Driving"],
    vehicleTypesCertified: ["Limousine", "Sedan", "SUV"],
  },
  {
    id: "driver-paris-5",
    name: "Victoria Gonzalez",
    licenseNumber: "R0W982",
    licenseExpiry: "2027-11-20",
    experienceYears: 16,
    languagesSpoken: ["hi"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "02:00",
            to: "06:00"
          },
          {
            from: "21:00",
            to: "24:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "21:00",
            to: "24:00"
          },
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
            from: "19:00",
            to: "22:00"
          },
          {
            from: "01:00",
            to: "06:00"
          }
        ],
      }
    ],
    ratings: 3.7,
    phone: "+771 438-738-9719",
    email: "victoria.gonzalez@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/paris/victoria-gonzalez.jpg",
    specialties: ["Long-Distance Driving", "Night Shift", "VIP Transport"],
    vehicleTypesCertified: ["Van", "Motorcoach", "Electric Vehicle"],
  },
  {
    id: "driver-paris-6",
    name: "Wei Kumar",
    licenseNumber: "Y2B779",
    licenseExpiry: "2029-10-24",
    experienceYears: 11,
    languagesSpoken: ["ru"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "20:00",
            to: "24:00"
          },
          {
            from: "06:00",
            to: "09:00"
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
            from: "10:00",
            to: "12:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "10:00",
            to: "12:00"
          },
          {
            from: "17:00",
            to: "21:00"
          }
        ],
      }
    ],
    ratings: 4.5,
    phone: "+285 680-216-4848",
    email: "wei.kumar@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/paris/wei-kumar.jpg",
    specialties: ["Corporate Chauffeur"],
    vehicleTypesCertified: ["Electric Vehicle"],
  }
];
