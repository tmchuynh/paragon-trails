import { Driver } from "@/lib/interfaces/people/staff";

export const oslonorwaynorthernEuropeDrivers: Driver[] = [
  {
    id: "driver-oslo-1",
    name: "Ahmed Hunter",
    licenseNumber: "Y2Z500",
    licenseExpiry: "2030-04-12",
    experienceYears: 16,
    languagesSpoken: ["English", "Czech", "Spanish", "Portuguese"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "03:00",
            to: "06:00"
          },
          {
            from: "20:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "06:00",
            to: "10:00"
          },
          {
            from: "02:00",
            to: "04:00"
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
            from: "00:00",
            to: "04:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "11:00",
            to: "14:00"
          }
        ],
      }
    ],
    ratings: 4.7,
    phone: "+2 858-339-7694",
    email: "ahmed.hunter@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/oslo/ahmed-hunter.jpg",
    specialties: ["Long-Distance Driving", "Security Detail"],
    vehicleTypesCertified: ["Electric Vehicle", "Van", "SUV"],
  },
  {
    id: "driver-oslo-2",
    name: "Johnny Keller",
    licenseNumber: "N8L621",
    licenseExpiry: "2029-05-28",
    experienceYears: 17,
    languagesSpoken: ["English", "Dutch", "French", "Polish"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "00:00",
            to: "05:00"
          },
          {
            from: "13:00",
            to: "16:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "10:00",
            to: "13:00"
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
            to: "16:00"
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
            from: "03:00",
            to: "07:00"
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
      }
    ],
    ratings: 4.6,
    phone: "+887 459-273-5625",
    email: "johnny.keller@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/oslo/johnny-keller.jpg",
    specialties: ["Corporate Chauffeur", "Luxury Car Specialist"],
    vehicleTypesCertified: ["SUV", "Van"],
  },
  {
    id: "driver-oslo-3",
    name: "Elijah Carter",
    licenseNumber: "T4Y808",
    licenseExpiry: "2028-05-21",
    experienceYears: 5,
    languagesSpoken: ["English", "Dutch", "Spanish", "Finnish"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "07:00",
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
        day: "Friday",
        availableHours: [
          {
            from: "19:00",
            to: "21:00"
          }
        ],
      }
    ],
    ratings: 3.8,
    phone: "+795 487-260-2117",
    email: "elijah.carter@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/oslo/elijah-carter.jpg",
    specialties: ["VIP Transport", "Long-Distance Driving"],
    vehicleTypesCertified: ["Convertible"],
  },
  {
    id: "driver-oslo-4",
    name: "Larry Morgan",
    licenseNumber: "X5V566",
    licenseExpiry: "2029-12-05",
    experienceYears: 6,
    languagesSpoken: ["English", "Greek", "Norwegian", "German"],
    available: [
      {
        day: "Friday",
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
            from: "18:00",
            to: "21:00"
          },
          {
            from: "01:00",
            to: "04:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "16:00",
            to: "18:00"
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
            from: "07:00",
            to: "10:00"
          }
        ],
      }
    ],
    ratings: 4.1,
    phone: "+795 640-556-2196",
    email: "larry.morgan@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/oslo/larry-morgan.jpg",
    specialties: ["Security Detail", "Event Transportation", "Airport Transfers"],
    vehicleTypesCertified: ["Sedan", "Luxury SUV"],
  },
  {
    id: "driver-oslo-5",
    name: "Elena Edwards",
    licenseNumber: "T1Q766",
    licenseExpiry: "2027-07-07",
    experienceYears: 6,
    languagesSpoken: ["English", "Russian", "Polish"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "14:00",
            to: "16:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "05:00",
            to: "07:00"
          },
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
            from: "16:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "15:00",
            to: "19:00"
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
            from: "16:00",
            to: "19:00"
          }
        ],
      }
    ],
    ratings: 4.7,
    phone: "+432 560-323-6727",
    email: "elena.edwards@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/oslo/elena-edwards.jpg",
    specialties: ["Luxury Car Specialist", "Security Detail"],
    vehicleTypesCertified: ["Convertible", "Limousine", "Van"],
  },
  {
    id: "driver-oslo-6",
    name: "Gerald Taylor",
    licenseNumber: "Q2I026",
    licenseExpiry: "2030-06-18",
    experienceYears: 11,
    languagesSpoken: ["English", "Greek", "Finnish"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "15:00",
            to: "17:00"
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
            from: "17:00",
            to: "20:00"
          }
        ],
      },
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
        day: "Wednesday",
        availableHours: [
          {
            from: "21:00",
            to: "24:00"
          },
          {
            from: "11:00",
            to: "15:00"
          }
        ],
      }
    ],
    ratings: 3.9,
    phone: "+364 287-241-4820",
    email: "gerald.taylor@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/oslo/gerald-taylor.jpg",
    specialties: ["Tour Guide Driver", "Night Shift"],
    vehicleTypesCertified: ["Electric Vehicle", "Sedan", "Convertible"],
  },
  {
    id: "driver-oslo-7",
    name: "Raymond Chen",
    licenseNumber: "Q8J815",
    licenseExpiry: "2030-09-15",
    experienceYears: 11,
    languagesSpoken: ["English", "French", "Portuguese"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "14:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Sunday",
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
            from: "08:00",
            to: "10:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "05:00",
            to: "08:00"
          }
        ],
      }
    ],
    ratings: 3.9,
    phone: "+412 167-125-4485",
    email: "raymond.chen@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/oslo/raymond-chen.jpg",
    specialties: ["Corporate Chauffeur", "Event Transportation", "VIP Transport"],
    vehicleTypesCertified: ["SUV", "Convertible", "Van"],
  },
  {
    id: "driver-oslo-8",
    name: "Elijah Gonzalez",
    licenseNumber: "X4S101",
    licenseExpiry: "2029-05-23",
    experienceYears: 15,
    languagesSpoken: ["English", "Portuguese", "Dutch", "French"],
    available: [
      {
        day: "Saturday",
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
        day: "Friday",
        availableHours: [
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
            from: "00:00",
            to: "03:00"
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
            from: "07:00",
            to: "10:00"
          }
        ],
      }
    ],
    ratings: 4.5,
    phone: "+685 652-352-3938",
    email: "elijah.gonzalez@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/oslo/elijah-gonzalez.jpg",
    specialties: ["VIP Transport", "Security Detail", "Luxury Car Specialist"],
    vehicleTypesCertified: ["Limousine", "Luxury SUV", "SUV"],
  }
];
