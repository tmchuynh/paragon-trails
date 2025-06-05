import { Driver } from "@/lib/interfaces/people/staff";

export const florenceitalymediterraneanDrivers: Driver[] = [
  {
    id: "driver-florence-1",
    name: "Fang Jung",
    licenseNumber: "U8O638",
    licenseExpiry: "2027-02-14",
    experienceYears: 3,
    languagesSpoken: ["it", "en", "ja"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "15:00",
            to: "18:00"
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
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "05:00",
            to: "10:00"
          }
        ],
      }
    ],
    ratings: 3.6,
    phone: "+268 903-147-4308",
    email: "fang.jung@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/florence/fang-jung.jpg",
    specialties: ["Night Shift", "Event Transportation"],
    vehicleTypesCertified: ["Limousine", "Motorcoach", "Electric Vehicle"],
  },
  {
    id: "driver-florence-2",
    name: "Kazuki Vo",
    licenseNumber: "K1O424",
    licenseExpiry: "2028-06-18",
    experienceYears: 16,
    languagesSpoken: ["ja", "ko", "zh"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "08:00",
            to: "10:00"
          },
          {
            from: "10:00",
            to: "13:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "18:00",
            to: "20:00"
          },
          {
            from: "06:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "17:00",
            to: "20:00"
          }
        ],
      }
    ],
    ratings: 3.6,
    phone: "+449 918-345-4985",
    email: "kazuki.vo@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/florence/kazuki-vo.jpg",
    specialties: ["Luxury Car Specialist", "VIP Transport", "Corporate Chauffeur"],
    vehicleTypesCertified: ["Sports Car", "Sedan", "Van"],
  },
  {
    id: "driver-florence-3",
    name: "Xin Vo",
    licenseNumber: "D7K781",
    licenseExpiry: "2027-07-04",
    experienceYears: 15,
    languagesSpoken: ["es", "ja"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "14:00",
            to: "16:00"
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
            from: "11:00",
            to: "16:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "13:00",
            to: "17:00"
          }
        ],
      }
    ],
    ratings: 3.8,
    phone: "+16 239-635-1682",
    email: "xin.vo@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/florence/xin-vo.jpg",
    specialties: ["Corporate Chauffeur", "VIP Transport", "Event Transportation"],
    vehicleTypesCertified: ["Motorcoach", "Limousine"],
  },
  {
    id: "driver-florence-4",
    name: "Yuna Han",
    licenseNumber: "H8Y277",
    licenseExpiry: "2027-04-10",
    experienceYears: 4,
    languagesSpoken: ["de"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "08:00",
            to: "11:00"
          },
          {
            from: "14:00",
            to: "17:00"
          }
        ],
      },
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
        day: "Saturday",
        availableHours: [
          {
            from: "02:00",
            to: "04:00"
          },
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
            from: "02:00",
            to: "05:00"
          },
          {
            from: "02:00",
            to: "07:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "16:00",
            to: "21:00"
          },
          {
            from: "06:00",
            to: "09:00"
          }
        ],
      }
    ],
    ratings: 3.7,
    phone: "+453 780-553-5364",
    email: "yuna.han@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/florence/yuna-han.jpg",
    specialties: ["Tour Guide Driver"],
    vehicleTypesCertified: ["Convertible"],
  },
  {
    id: "driver-florence-5",
    name: "Richard Liu",
    licenseNumber: "B3L385",
    licenseExpiry: "2030-03-13",
    experienceYears: 14,
    languagesSpoken: ["pt", "de", "hi"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "14:00",
            to: "16:00"
          },
          {
            from: "15:00",
            to: "20:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "14:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "09:00",
            to: "13:00"
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
            from: "04:00",
            to: "09:00"
          }
        ],
      }
    ],
    ratings: 3.7,
    phone: "+192 757-137-3390",
    email: "richard.liu@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/florence/richard-liu.jpg",
    specialties: ["Tour Guide Driver", "Night Shift"],
    vehicleTypesCertified: ["Sedan", "Sports Car", "Van"],
  },
  {
    id: "driver-florence-6",
    name: "Akira Yang",
    licenseNumber: "C7X159",
    licenseExpiry: "2030-12-20",
    experienceYears: 17,
    languagesSpoken: ["en"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "14:00",
            to: "18:00"
          },
          {
            from: "00:00",
            to: "03:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "11:00",
            to: "14:00"
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
            from: "01:00",
            to: "06:00"
          },
          {
            from: "08:00",
            to: "10:00"
          }
        ],
      }
    ],
    ratings: 4.1,
    phone: "+853 207-279-6853",
    email: "akira.yang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/florence/akira-yang.jpg",
    specialties: ["Tour Guide Driver", "Event Transportation"],
    vehicleTypesCertified: ["Luxury SUV", "Sports Car", "Motorcoach"],
  },
  {
    id: "driver-florence-7",
    name: "Wei Vo",
    licenseNumber: "F8V603",
    licenseExpiry: "2026-03-03",
    experienceYears: 11,
    languagesSpoken: ["ar", "zh"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "20:00",
            to: "24:00"
          },
          {
            from: "12:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "05:00",
            to: "10:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "02:00",
            to: "06:00"
          },
          {
            from: "12:00",
            to: "16:00"
          }
        ],
      }
    ],
    ratings: 4.4,
    phone: "+577 415-493-9331",
    email: "wei.vo@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/florence/wei-vo.jpg",
    specialties: ["Night Shift", "Long-Distance Driving"],
    vehicleTypesCertified: ["Convertible", "SUV", "Motorcoach", "Luxury SUV"],
  },
  {
    id: "driver-florence-8",
    name: "Li Brown",
    licenseNumber: "G8K480",
    licenseExpiry: "2027-03-11",
    experienceYears: 10,
    languagesSpoken: ["fr"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "05:00",
            to: "09:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "04:00",
            to: "09:00"
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
            from: "04:00",
            to: "07:00"
          }
        ],
      }
    ],
    ratings: 4.5,
    phone: "+569 847-278-5441",
    email: "li.brown@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/florence/li-brown.jpg",
    specialties: ["Long-Distance Driving", "Night Shift", "Event Transportation"],
    vehicleTypesCertified: ["Convertible"],
  },
  {
    id: "driver-florence-9",
    name: "Akira Yang",
    licenseNumber: "Y9F091",
    licenseExpiry: "2029-12-07",
    experienceYears: 2,
    languagesSpoken: ["ja", "hi", "ru"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "12:00",
            to: "16:00"
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
            from: "07:00",
            to: "12:00"
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
      }
    ],
    ratings: 3.9,
    phone: "+587 874-638-6527",
    email: "akira.yang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/florence/akira-yang.jpg",
    specialties: ["Long-Distance Driving", "Luxury Car Specialist"],
    vehicleTypesCertified: ["Van", "Motorcoach", "SUV"],
  }
];
