import { Driver } from "@/lib/interfaces/people/staff";

export const romeitalymediterraneanDrivers: Driver[] = [
  {
    id: "driver-rome-1",
    name: "Isabella Rodriguez",
    licenseNumber: "S4L064",
    licenseExpiry: "2029-10-18",
    experienceYears: 10,
    languagesSpoken: ["pt", "ru", "ar"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "21:00",
            to: "23:00"
          },
          {
            from: "19:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "11:00",
            to: "16:00"
          },
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
            from: "05:00",
            to: "09:00"
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
            from: "19:00",
            to: "23:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "01:00",
            to: "05:00"
          }
        ],
      }
    ],
    ratings: 4.5,
    phone: "+820 585-479-9064",
    email: "isabella.rodriguez@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/rome/isabella-rodriguez.jpg",
    specialties: ["Corporate Chauffeur", "Security Detail", "Event Transportation", "Night Shift"],
    vehicleTypesCertified: ["Limousine", "Luxury SUV", "Convertible"],
  },
  {
    id: "driver-rome-2",
    name: "Jie Kang",
    licenseNumber: "P3P882",
    licenseExpiry: "2026-02-13",
    experienceYears: 14,
    languagesSpoken: ["ko"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "09:00",
            to: "14:00"
          }
        ],
      },
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
        day: "Tuesday",
        availableHours: [
          {
            from: "03:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
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
            from: "15:00",
            to: "18:00"
          }
        ],
      }
    ],
    ratings: 3.8,
    phone: "+37 451-480-6067",
    email: "jie.kang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/rome/jie-kang.jpg",
    specialties: ["Night Shift", "Event Transportation"],
    vehicleTypesCertified: ["SUV", "Sedan", "Motorcoach", "Limousine"],
  },
  {
    id: "driver-rome-3",
    name: "David Perez",
    licenseNumber: "R9I402",
    licenseExpiry: "2030-12-22",
    experienceYears: 7,
    languagesSpoken: ["it"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "16:00",
            to: "21:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
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
            from: "08:00",
            to: "13:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "11:00",
            to: "13:00"
          },
          {
            from: "15:00",
            to: "17:00"
          }
        ],
      }
    ],
    ratings: 4,
    phone: "+678 893-654-4491",
    email: "david.perez@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/rome/david-perez.jpg",
    specialties: ["Security Detail", "Airport Transfers"],
    vehicleTypesCertified: ["SUV"],
  },
  {
    id: "driver-rome-4",
    name: "John Ito",
    licenseNumber: "W8E319",
    licenseExpiry: "2028-05-20",
    experienceYears: 6,
    languagesSpoken: ["pt", "ja"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
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
            from: "20:00",
            to: "24:00"
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
            from: "15:00",
            to: "20:00"
          },
          {
            from: "20:00",
            to: "23:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "09:00",
            to: "13:00"
          }
        ],
      }
    ],
    ratings: 4.4,
    phone: "+591 137-245-6698",
    email: "john.ito@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/rome/john-ito.jpg",
    specialties: ["VIP Transport"],
    vehicleTypesCertified: ["Convertible"],
  },
  {
    id: "driver-rome-5",
    name: "Anthony Han",
    licenseNumber: "R4H904",
    licenseExpiry: "2028-10-08",
    experienceYears: 14,
    languagesSpoken: ["en"],
    available: [
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
            from: "17:00",
            to: "21:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "01:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
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
            from: "21:00",
            to: "24:00"
          },
          {
            from: "10:00",
            to: "14:00"
          }
        ],
      }
    ],
    ratings: 4.8,
    phone: "+169 573-451-3729",
    email: "anthony.han@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/rome/anthony-han.jpg",
    specialties: ["Event Transportation", "Airport Transfers", "Corporate Chauffeur"],
    vehicleTypesCertified: ["Motorcoach", "Convertible", "Limousine"],
  }
];
