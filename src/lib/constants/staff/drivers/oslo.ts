import { Driver } from "@/lib/interfaces/people/staff";

export const oslonorwaynorthernEuropeDrivers: Driver[] = [
  {
    id: "driver-oslo-1",
    name: "Jacob Hall",
    licenseNumber: "G6C561",
    licenseExpiry: "2028-07-04",
    experienceYears: 7,
    languagesSpoken: ["English", "Finnish", "Czech", "Polish"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "13:00",
            to: "18:00"
          },
          {
            from: "00:00",
            to: "03:00"
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
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "07:00",
            to: "10:00"
          },
          {
            from: "21:00",
            to: "24:00"
          }
        ],
      }
    ],
    ratings: 3.5,
    phone: "+818 911-599-5476",
    email: "jacob.hall@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/21.jpg",
    specialties: ["Long-Distance Driving", "Tour Guide Driver"],
    vehicleTypesCertified: ["Van", "Motorcoach", "Sports Car"],
  },
  {
    id: "driver-oslo-2",
    name: "Elena Mason",
    licenseNumber: "Z0D755",
    licenseExpiry: "2026-11-05",
    experienceYears: 7,
    languagesSpoken: ["English", "Russian", "Norwegian", "German"],
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
        day: "Monday",
        availableHours: [
          {
            from: "20:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "14:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "08:00",
            to: "11:00"
          },
          {
            from: "14:00",
            to: "18:00"
          }
        ],
      }
    ],
    ratings: 4.1,
    phone: "+62 887-393-6849",
    email: "elena.mason@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/61.jpg",
    specialties: ["Security Detail", "Tour Guide Driver"],
    vehicleTypesCertified: ["Motorcoach", "Convertible"],
  },
  {
    id: "driver-oslo-3",
    name: "Andrew Hawkins",
    licenseNumber: "B9S443",
    licenseExpiry: "2027-07-17",
    experienceYears: 15,
    languagesSpoken: ["English", "Danish", "Polish", "Spanish"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
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
            to: "14:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "07:00",
            to: "12:00"
          },
          {
            from: "15:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00"
          },
          {
            from: "21:00",
            to: "24:00"
          }
        ],
      }
    ],
    ratings: 3.9,
    phone: "+587 696-622-8361",
    email: "andrew.hawkins@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/38.jpg",
    specialties: ["VIP Transport"],
    vehicleTypesCertified: ["Limousine", "Sports Car"],
  },
  {
    id: "driver-oslo-4",
    name: "Grace Jansen",
    licenseNumber: "R2I926",
    licenseExpiry: "2028-03-23",
    experienceYears: 14,
    languagesSpoken: ["English", "Spanish", "Russian"],
    available: [
      {
        day: "Saturday",
        availableHours: [
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
            from: "08:00",
            to: "13:00"
          },
          {
            from: "15:00",
            to: "18:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "00:00",
            to: "05:00"
          },
          {
            from: "07:00",
            to: "10:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "00:00",
            to: "02:00"
          }
        ],
      }
    ],
    ratings: 3.8,
    phone: "+585 656-763-1757",
    email: "grace.jansen@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/13.jpg",
    specialties: ["Corporate Chauffeur"],
    vehicleTypesCertified: ["Convertible", "Sedan"],
  },
  {
    id: "driver-oslo-5",
    name: "Brandon Knight",
    licenseNumber: "O4V292",
    licenseExpiry: "2027-10-23",
    experienceYears: 10,
    languagesSpoken: ["English", "Portuguese", "French"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "11:00",
            to: "16:00"
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
            from: "11:00",
            to: "16:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "06:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "18:00",
            to: "22:00"
          },
          {
            from: "19:00",
            to: "23:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "13:00",
            to: "15:00"
          }
        ],
      }
    ],
    ratings: 3.8,
    phone: "+237 644-746-7155",
    email: "brandon.knight@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/77.jpg",
    specialties: ["Event Transportation", "Tour Guide Driver", "Airport Transfers"],
    vehicleTypesCertified: ["Motorcoach", "Luxury SUV", "Sports Car"],
  },
  {
    id: "driver-oslo-6",
    name: "Bella Foster",
    licenseNumber: "S9V884",
    licenseExpiry: "2028-02-18",
    experienceYears: 12,
    languagesSpoken: ["English", "Dutch", "French", "Polish"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "00:00",
            to: "03:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "05:00",
            to: "07:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "12:00",
            to: "14:00"
          }
        ],
      }
    ],
    ratings: 3.7,
    phone: "+542 578-163-1583",
    email: "bella.foster@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/33.jpg",
    specialties: ["Luxury Car Specialist"],
    vehicleTypesCertified: ["Sports Car", "Convertible"],
  },
  {
    id: "driver-oslo-7",
    name: "Austin Gonzalez",
    licenseNumber: "I1V637",
    licenseExpiry: "2028-09-26",
    experienceYears: 5,
    languagesSpoken: ["English", "Greek", "Norwegian"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "07:00",
            to: "12:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "10:00",
            to: "13:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "00:00",
            to: "02:00"
          },
          {
            from: "03:00",
            to: "06:00"
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
        day: "Thursday",
        availableHours: [
          {
            from: "05:00",
            to: "09:00"
          }
        ],
      }
    ],
    ratings: 4.7,
    phone: "+369 117-607-9748",
    email: "austin.gonzalez@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/77.jpg",
    specialties: ["Event Transportation", "Long-Distance Driving"],
    vehicleTypesCertified: ["Electric Vehicle"],
  },
  {
    id: "driver-oslo-8",
    name: "Ahmed Keller",
    licenseNumber: "O7P821",
    licenseExpiry: "2028-04-19",
    experienceYears: 7,
    languagesSpoken: ["English", "German", "Polish", "Portuguese"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "02:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "10:00",
            to: "13:00"
          },
          {
            from: "04:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Saturday",
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
        day: "Sunday",
        availableHours: [
          {
            from: "09:00",
            to: "11:00"
          },
          {
            from: "04:00",
            to: "09:00"
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
            from: "10:00",
            to: "12:00"
          }
        ],
      }
    ],
    ratings: 3.8,
    phone: "+175 889-827-3619",
    email: "ahmed.keller@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    specialties: ["Corporate Chauffeur", "Luxury Car Specialist", "VIP Transport", "Night Shift"],
    vehicleTypesCertified: ["Electric Vehicle", "SUV"],
  },
  {
    id: "driver-oslo-9",
    name: "Zoe Garcia",
    licenseNumber: "V9Y576",
    licenseExpiry: "2027-02-18",
    experienceYears: 17,
    languagesSpoken: ["English", "French", "Swedish", "Norwegian"],
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
        day: "Sunday",
        availableHours: [
          {
            from: "08:00",
            to: "13:00"
          },
          {
            from: "11:00",
            to: "16:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "10:00",
            to: "13:00"
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
            from: "02:00",
            to: "06:00"
          },
          {
            from: "07:00",
            to: "12:00"
          }
        ],
      }
    ],
    ratings: 4.5,
    phone: "+249 134-296-9609",
    email: "zoe.garcia@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/16.jpg",
    specialties: ["VIP Transport"],
    vehicleTypesCertified: ["Van"],
  }
];
