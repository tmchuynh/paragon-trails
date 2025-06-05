import { Driver } from "@/lib/interfaces/people/staff";

export const yokohamajapanasiaPacificDrivers: Driver[] = [
  {
    id: "driver-yokohama-1",
    name: "Mia Jansen",
    licenseNumber: "X0V684",
    licenseExpiry: "2026-09-11",
    experienceYears: 17,
    languagesSpoken: ["Urdu", "Vietnamese", "Hindi"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "01:00",
            to: "06:00"
          },
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
            from: "05:00",
            to: "10:00"
          },
          {
            from: "21:00",
            to: "23:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "12:00",
            to: "15:00"
          }
        ],
      }
    ],
    ratings: 4.8,
    phone: "+876 524-536-9656",
    email: "mia.jansen@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/33.jpg",
    specialties: ["Tour Guide Driver", "Event Transportation", "VIP Transport"],
    vehicleTypesCertified: ["Sedan"],
  },
  {
    id: "driver-yokohama-2",
    name: "Jennifer da Costa",
    licenseNumber: "T4F895",
    licenseExpiry: "2026-05-02",
    experienceYears: 5,
    languagesSpoken: ["Vietnamese", "Bengali", "Malay", "Korean"],
    available: [
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
        day: "Sunday",
        availableHours: [
          {
            from: "17:00",
            to: "19:00"
          },
          {
            from: "08:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Friday",
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
            from: "03:00",
            to: "07:00"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "14:00",
            to: "19:00"
          },
          {
            from: "11:00",
            to: "15:00"
          }
        ],
      }
    ],
    ratings: 4.2,
    phone: "+179 374-141-3499",
    email: "jennifer.da@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/31.jpg",
    specialties: ["Event Transportation", "Tour Guide Driver"],
    vehicleTypesCertified: ["Sports Car"],
  },
  {
    id: "driver-yokohama-3",
    name: "Maria Russell",
    licenseNumber: "Y7N567",
    licenseExpiry: "2028-01-12",
    experienceYears: 9,
    languagesSpoken: ["Bengali", "Vietnamese", "Indonesian", "Japanese"],
    available: [
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
        day: "Sunday",
        availableHours: [
          {
            from: "21:00",
            to: "24:00"
          },
          {
            from: "03:00",
            to: "07:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00"
          },
          {
            from: "17:00",
            to: "20:00"
          }
        ],
      }
    ],
    ratings: 4.8,
    phone: "+868 531-910-3459",
    email: "maria.russell@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/31.jpg",
    specialties: ["Long-Distance Driving"],
    vehicleTypesCertified: ["Sports Car", "Luxury SUV", "Electric Vehicle", "Sedan", "Convertible"],
  },
  {
    id: "driver-yokohama-4",
    name: "Ashley Davis",
    licenseNumber: "R8P514",
    licenseExpiry: "2027-12-08",
    experienceYears: 2,
    languagesSpoken: ["Korean", "Vietnamese", "Urdu", "Malay"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "08:00",
            to: "11:00"
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
        day: "Friday",
        availableHours: [
          {
            from: "12:00",
            to: "17:00"
          },
          {
            from: "00:00",
            to: "02:00"
          }
        ],
      }
    ],
    ratings: 4.4,
    phone: "+866 340-376-3319",
    email: "ashley.davis@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/33.jpg",
    specialties: ["Tour Guide Driver"],
    vehicleTypesCertified: ["Sports Car", "Van"],
  },
  {
    id: "driver-yokohama-5",
    name: "Stephen Carpenter",
    licenseNumber: "A2K453",
    licenseExpiry: "2029-07-28",
    experienceYears: 18,
    languagesSpoken: ["Malay", "Tagalog", "Hindi"],
    available: [
      {
        day: "Saturday",
        availableHours: [
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
            from: "09:00",
            to: "11:00"
          }
        ],
      },
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
        day: "Friday",
        availableHours: [
          {
            from: "17:00",
            to: "19:00"
          }
        ],
      }
    ],
    ratings: 4.2,
    phone: "+169 621-328-8178",
    email: "stephen.carpenter@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/53.jpg",
    specialties: ["Airport Transfers"],
    vehicleTypesCertified: ["Motorcoach"],
  },
  {
    id: "driver-yokohama-6",
    name: "Wei Reed",
    licenseNumber: "E4J948",
    licenseExpiry: "2030-08-01",
    experienceYears: 14,
    languagesSpoken: ["Korean", "Vietnamese", "Indonesian"],
    available: [
      {
        day: "Wednesday",
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
            from: "12:00",
            to: "17:00"
          },
          {
            from: "10:00",
            to: "14:00"
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
        day: "Saturday",
        availableHours: [
          {
            from: "21:00",
            to: "24:00"
          }
        ],
      }
    ],
    ratings: 4.8,
    phone: "+97 314-527-8508",
    email: "wei.reed@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/19.jpg",
    specialties: ["Security Detail", "Luxury Car Specialist", "Long-Distance Driving"],
    vehicleTypesCertified: ["Motorcoach", "Convertible"],
  }
];
