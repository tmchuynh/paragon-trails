import { Driver } from "@/lib/interfaces/people/staff";

export const helsinkifinlandnorthernEuropeDrivers: Driver[] = [
  {
    id: "driver-helsinki-1",
    name: "Sophia Hernandez",
    licenseNumber: "P6R409",
    licenseExpiry: "2026-08-04",
    experienceYears: 14,
    languagesSpoken: ["en", "fr"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "10:00",
            to: "13:00"
          },
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
            from: "09:00",
            to: "11:00"
          },
          {
            from: "20:00",
            to: "23:00"
          }
        ],
      },
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
            from: "08:00",
            to: "10:00"
          },
          {
            from: "17:00",
            to: "21:00"
          }
        ],
      }
    ],
    ratings: 4.6,
    phone: "+39 510-167-8767",
    email: "sophia.hernandez@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/helsinki/sophia-hernandez.jpg",
    specialties: ["VIP Transport", "Luxury Car Specialist", "Event Transportation"],
    vehicleTypesCertified: ["Van", "Motorcoach", "Sports Car"],
  },
  {
    id: "driver-helsinki-2",
    name: "Satoshi Kang",
    licenseNumber: "Z9M822",
    licenseExpiry: "2026-10-21",
    experienceYears: 17,
    languagesSpoken: ["es"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "00:00",
            to: "05:00"
          }
        ],
      },
      {
        day: "Thursday",
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
            from: "01:00",
            to: "05:00"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ],
      }
    ],
    ratings: 3.9,
    phone: "+794 924-992-9189",
    email: "satoshi.kang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/helsinki/satoshi-kang.jpg",
    specialties: ["Airport Transfers", "Event Transportation", "Night Shift"],
    vehicleTypesCertified: ["Sports Car", "Sedan"],
  },
  {
    id: "driver-helsinki-3",
    name: "Michael Wilson",
    licenseNumber: "N2C449",
    licenseExpiry: "2030-04-26",
    experienceYears: 17,
    languagesSpoken: ["es", "hi", "it"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "19:00",
            to: "23:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "15:00",
            to: "19:00"
          },
          {
            from: "21:00",
            to: "24:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "03:00",
            to: "08:00"
          },
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
            from: "19:00",
            to: "21:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "04:00",
            to: "09:00"
          },
          {
            from: "18:00",
            to: "20:00"
          }
        ],
      }
    ],
    ratings: 3.8,
    phone: "+139 353-902-4220",
    email: "michael.wilson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/helsinki/michael-wilson.jpg",
    specialties: ["VIP Transport", "Tour Guide Driver", "Corporate Chauffeur", "Luxury Car Specialist"],
    vehicleTypesCertified: ["Convertible", "Sports Car", "Van"],
  },
  {
    id: "driver-helsinki-4",
    name: "Fang Kumar",
    licenseNumber: "F5X315",
    licenseExpiry: "2027-02-25",
    experienceYears: 14,
    languagesSpoken: ["hi", "pt", "tr"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "15:00",
            to: "17:00"
          },
          {
            from: "18:00",
            to: "23:00"
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
            from: "06:00",
            to: "10:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "17:00",
            to: "21:00"
          },
          {
            from: "07:00",
            to: "09:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "09:00",
            to: "11:00"
          },
          {
            from: "16:00",
            to: "21:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "00:00",
            to: "04:00"
          },
          {
            from: "11:00",
            to: "16:00"
          }
        ],
      }
    ],
    ratings: 3.5,
    phone: "+383 281-827-5245",
    email: "fang.kumar@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/helsinki/fang-kumar.jpg",
    specialties: ["Luxury Car Specialist", "Airport Transfers", "Tour Guide Driver"],
    vehicleTypesCertified: ["Electric Vehicle"],
  },
  {
    id: "driver-helsinki-5",
    name: "Barbara Yang",
    licenseNumber: "J7C247",
    licenseExpiry: "2029-12-16",
    experienceYears: 19,
    languagesSpoken: ["en", "es"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "12:00",
            to: "14:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "17:00",
            to: "21:00"
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
        day: "Sunday",
        availableHours: [
          {
            from: "12:00",
            to: "16:00"
          },
          {
            from: "17:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "03:00",
            to: "05:00"
          }
        ],
      }
    ],
    ratings: 4.3,
    phone: "+119 307-525-6156",
    email: "barbara.yang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/helsinki/barbara-yang.jpg",
    specialties: ["Corporate Chauffeur", "VIP Transport", "Luxury Car Specialist"],
    vehicleTypesCertified: ["Limousine"],
  }
];
