import { Driver } from "@/lib/interfaces/people/staff";

export const lisbonportugalmediterraneanDrivers: Driver[] = [
  {
    id: "driver-lisbon-1",
    name: "Akira Park",
    licenseNumber: "F1I507",
    licenseExpiry: "2026-07-17",
    experienceYears: 16,
    languagesSpoken: ["hi", "zh"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "17:00",
            to: "21:00"
          },
          {
            from: "10:00",
            to: "13:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "13:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "07:00",
            to: "11:00"
          },
          {
            from: "01:00",
            to: "04:00"
          }
        ],
      }
    ],
    ratings: 4.3,
    phone: "+560 149-379-3917",
    email: "akira.park@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/lisbon/akira-park.jpg",
    specialties: ["Airport Transfers"],
    vehicleTypesCertified: ["Luxury SUV", "Sports Car", "Convertible"],
  },
  {
    id: "driver-lisbon-2",
    name: "Yui Johnson",
    licenseNumber: "U5E254",
    licenseExpiry: "2030-03-19",
    experienceYears: 10,
    languagesSpoken: ["ko", "ar"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "06:00",
            to: "11:00"
          },
          {
            from: "21:00",
            to: "24:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "15:00",
            to: "17:00"
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
            from: "18:00",
            to: "20:00"
          }
        ],
      }
    ],
    ratings: 3.6,
    phone: "+94 426-289-8852",
    email: "yui.johnson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/lisbon/yui-johnson.jpg",
    specialties: ["Tour Guide Driver", "VIP Transport", "Corporate Chauffeur"],
    vehicleTypesCertified: ["Limousine", "SUV", "Van"],
  },
  {
    id: "driver-lisbon-3",
    name: "Charlotte Smith",
    licenseNumber: "X9B479",
    licenseExpiry: "2027-02-27",
    experienceYears: 10,
    languagesSpoken: ["en"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00"
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
        day: "Friday",
        availableHours: [
          {
            from: "00:00",
            to: "05:00"
          },
          {
            from: "03:00",
            to: "08:00"
          }
        ],
      }
    ],
    ratings: 4.6,
    phone: "+306 927-840-8055",
    email: "charlotte.smith@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/lisbon/charlotte-smith.jpg",
    specialties: ["Airport Transfers", "Night Shift", "Luxury Car Specialist"],
    vehicleTypesCertified: ["Electric Vehicle", "Van"],
  },
  {
    id: "driver-lisbon-4",
    name: "Hao Wang",
    licenseNumber: "K2F780",
    licenseExpiry: "2030-08-21",
    experienceYears: 1,
    languagesSpoken: ["ko", "de"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "02:00",
            to: "05:00"
          },
          {
            from: "20:00",
            to: "23:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "13:00",
            to: "15:00"
          },
          {
            from: "04:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
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
            from: "16:00",
            to: "21:00"
          },
          {
            from: "02:00",
            to: "05:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "14:00",
            to: "19:00"
          },
          {
            from: "16:00",
            to: "18:00"
          }
        ],
      }
    ],
    ratings: 3.9,
    phone: "+741 564-245-2180",
    email: "hao.wang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/lisbon/hao-wang.jpg",
    specialties: ["Security Detail", "Long-Distance Driving", "Corporate Chauffeur"],
    vehicleTypesCertified: ["Sports Car", "Motorcoach"],
  },
  {
    id: "driver-lisbon-5",
    name: "Olivia Han",
    licenseNumber: "S6V662",
    licenseExpiry: "2028-08-02",
    experienceYears: 10,
    languagesSpoken: ["es"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "02:00",
            to: "06:00"
          },
          {
            from: "10:00",
            to: "13:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "15:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "06:00",
            to: "08:00"
          },
          {
            from: "14:00",
            to: "16:00"
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
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "00:00",
            to: "02:00"
          },
          {
            from: "12:00",
            to: "15:00"
          }
        ],
      }
    ],
    ratings: 4.4,
    phone: "+285 996-740-4163",
    email: "olivia.han@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/lisbon/olivia-han.jpg",
    specialties: ["Luxury Car Specialist", "Corporate Chauffeur", "Long-Distance Driving"],
    vehicleTypesCertified: ["Motorcoach", "Van", "Luxury SUV"],
  },
  {
    id: "driver-lisbon-6",
    name: "Akira Tanaka",
    licenseNumber: "V4W423",
    licenseExpiry: "2028-01-22",
    experienceYears: 17,
    languagesSpoken: ["hi", "es"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "11:00",
            to: "15:00"
          },
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
            from: "03:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "21:00",
            to: "23:00"
          },
          {
            from: "09:00",
            to: "12:00"
          }
        ],
      }
    ],
    ratings: 4.7,
    phone: "+427 988-779-8648",
    email: "akira.tanaka@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/lisbon/akira-tanaka.jpg",
    specialties: ["Tour Guide Driver", "Airport Transfers", "Luxury Car Specialist", "Long-Distance Driving"],
    vehicleTypesCertified: ["Limousine", "Electric Vehicle"],
  }
];
