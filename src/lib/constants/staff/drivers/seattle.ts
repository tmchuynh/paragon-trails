import { Driver } from "@/lib/interfaces/people/staff";

export const seattleunitedStatesalaskaDrivers: Driver[] = [
  {
    id: "driver-seattle-1",
    name: "Mark Verma",
    licenseNumber: "U2V769",
    licenseExpiry: "2030-01-22",
    experienceYears: 14,
    languagesSpoken: ["pt"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "15:00",
            to: "20:00"
          },
          {
            from: "04:00",
            to: "07:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "19:00",
            to: "24:00"
          },
          {
            from: "05:00",
            to: "10:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "11:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "18:00",
            to: "23:00"
          }
        ],
      }
    ],
    ratings: 4.4,
    phone: "+346 193-414-9573",
    email: "mark.verma@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/seattle/mark-verma.jpg",
    specialties: ["Airport Transfers", "Luxury Car Specialist", "Security Detail"],
    vehicleTypesCertified: ["Limousine", "Convertible", "Sports Car", "SUV", "Electric Vehicle"],
  },
  {
    id: "driver-seattle-2",
    name: "Jun Martinez",
    licenseNumber: "O0Y109",
    licenseExpiry: "2030-05-10",
    experienceYears: 15,
    languagesSpoken: ["tr", "it", "ru"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "13:00",
            to: "18:00"
          },
          {
            from: "11:00",
            to: "14:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "01:00",
            to: "04:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "10:00",
            to: "12:00"
          },
          {
            from: "14:00",
            to: "19:00"
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
      }
    ],
    ratings: 4.9,
    phone: "+639 805-618-7336",
    email: "jun.martinez@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/seattle/jun-martinez.jpg",
    specialties: ["Corporate Chauffeur"],
    vehicleTypesCertified: ["Sports Car", "Electric Vehicle", "Convertible", "Motorcoach", "Limousine"],
  },
  {
    id: "driver-seattle-3",
    name: "Ava Martin",
    licenseNumber: "I6M365",
    licenseExpiry: "2028-08-24",
    experienceYears: 2,
    languagesSpoken: ["hi"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
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
            from: "17:00",
            to: "20:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "00:00",
            to: "02:00"
          },
          {
            from: "09:00",
            to: "14:00"
          }
        ],
      }
    ],
    ratings: 3.6,
    phone: "+450 131-944-4909",
    email: "ava.martin@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/seattle/ava-martin.jpg",
    specialties: ["Corporate Chauffeur", "Tour Guide Driver", "Event Transportation"],
    vehicleTypesCertified: ["Luxury SUV", "Motorcoach", "SUV", "Limousine"],
  },
  {
    id: "driver-seattle-4",
    name: "Susan Lopez",
    licenseNumber: "W7M613",
    licenseExpiry: "2027-10-04",
    experienceYears: 7,
    languagesSpoken: ["ru", "es", "ko"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "12:00",
            to: "17:00"
          },
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
            from: "03:00",
            to: "07:00"
          },
          {
            from: "02:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "06:00",
            to: "11:00"
          },
          {
            from: "15:00",
            to: "19:00"
          }
        ],
      }
    ],
    ratings: 3.7,
    phone: "+184 153-236-5469",
    email: "susan.lopez@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/seattle/susan-lopez.jpg",
    specialties: ["Long-Distance Driving", "Tour Guide Driver", "Security Detail"],
    vehicleTypesCertified: ["Sedan", "Van", "Luxury SUV"],
  },
  {
    id: "driver-seattle-5",
    name: "Donald Smith",
    licenseNumber: "B4D048",
    licenseExpiry: "2030-08-12",
    experienceYears: 10,
    languagesSpoken: ["es", "hi", "tr"],
    available: [
      {
        day: "Friday",
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
            from: "04:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "02:00",
            to: "04:00"
          },
          {
            from: "17:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "17:00",
            to: "19:00"
          },
          {
            from: "05:00",
            to: "10:00"
          }
        ],
      }
    ],
    ratings: 3.6,
    phone: "+280 243-515-4661",
    email: "donald.smith@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/seattle/donald-smith.jpg",
    specialties: ["Corporate Chauffeur", "Security Detail", "VIP Transport", "Long-Distance Driving"],
    vehicleTypesCertified: ["Luxury SUV", "Convertible", "SUV", "Sedan"],
  },
  {
    id: "driver-seattle-6",
    name: "Fang Patel",
    licenseNumber: "D4H193",
    licenseExpiry: "2027-06-26",
    experienceYears: 5,
    languagesSpoken: ["ru"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "17:00",
            to: "21:00"
          },
          {
            from: "17:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "02:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "12:00",
            to: "16:00"
          }
        ],
      }
    ],
    ratings: 3.7,
    phone: "+458 401-548-9437",
    email: "fang.patel@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/seattle/fang-patel.jpg",
    specialties: ["Tour Guide Driver", "Corporate Chauffeur"],
    vehicleTypesCertified: ["Limousine", "Electric Vehicle"],
  },
  {
    id: "driver-seattle-7",
    name: "Xin Davis",
    licenseNumber: "O7X450",
    licenseExpiry: "2026-11-25",
    experienceYears: 9,
    languagesSpoken: ["en", "ja", "hi"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "03:00",
            to: "08:00"
          },
          {
            from: "18:00",
            to: "20:00"
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
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "09:00",
            to: "14:00"
          },
          {
            from: "05:00",
            to: "08:00"
          }
        ],
      }
    ],
    ratings: 4.1,
    phone: "+20 384-634-1944",
    email: "xin.davis@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/seattle/xin-davis.jpg",
    specialties: ["Event Transportation", "Airport Transfers"],
    vehicleTypesCertified: ["Luxury SUV"],
  },
  {
    id: "driver-seattle-8",
    name: "Kenji Wilson",
    licenseNumber: "D2J893",
    licenseExpiry: "2027-02-28",
    experienceYears: 3,
    languagesSpoken: ["de", "tr", "hi"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "10:00",
            to: "12:00"
          },
          {
            from: "07:00",
            to: "09:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "19:00",
            to: "23:00"
          },
          {
            from: "16:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Wednesday",
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
            from: "07:00",
            to: "10:00"
          },
          {
            from: "06:00",
            to: "11:00"
          }
        ],
      }
    ],
    ratings: 4.9,
    phone: "+678 912-808-4005",
    email: "kenji.wilson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/seattle/kenji-wilson.jpg",
    specialties: ["Night Shift", "VIP Transport", "Tour Guide Driver"],
    vehicleTypesCertified: ["Van", "Sedan", "Limousine", "SUV", "Electric Vehicle"],
  }
];
