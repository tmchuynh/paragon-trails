import { Driver } from "@/lib/interfaces/people/staff";

export const kyotojapanasiaPacificDrivers: Driver[] = [
  {
    id: "driver-kyoto-1",
    name: "Li Zhang",
    licenseNumber: "A1T206",
    licenseExpiry: "2026-10-21",
    experienceYears: 19,
    languagesSpoken: ["hi"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "12:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "07:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "10:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "05:00",
            to: "09:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "14:00",
            to: "16:00"
          },
          {
            from: "20:00",
            to: "23:00"
          }
        ],
      }
    ],
    ratings: 3.8,
    phone: "+293 113-872-2860",
    email: "li.zhang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/kyoto/li-zhang.jpg",
    specialties: ["Long-Distance Driving", "Luxury Car Specialist"],
    vehicleTypesCertified: ["Sports Car", "Electric Vehicle", "Convertible"],
  },
  {
    id: "driver-kyoto-2",
    name: "William Han",
    licenseNumber: "E0B885",
    licenseExpiry: "2026-08-20",
    experienceYears: 5,
    languagesSpoken: ["ja"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "00:00",
            to: "03:00"
          },
          {
            from: "15:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "19:00",
            to: "22:00"
          },
          {
            from: "16:00",
            to: "21:00"
          }
        ],
      },
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
        day: "Thursday",
        availableHours: [
          {
            from: "15:00",
            to: "17:00"
          }
        ],
      }
    ],
    ratings: 4.2,
    phone: "+273 790-245-7058",
    email: "william.han@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/kyoto/william-han.jpg",
    specialties: ["Airport Transfers", "Event Transportation"],
    vehicleTypesCertified: ["Sports Car"],
  },
  {
    id: "driver-kyoto-3",
    name: "Yui Huang",
    licenseNumber: "I6U074",
    licenseExpiry: "2027-05-10",
    experienceYears: 12,
    languagesSpoken: ["ru"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "05:00",
            to: "10:00"
          },
          {
            from: "20:00",
            to: "23:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "16:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "15:00",
            to: "19:00"
          },
          {
            from: "10:00",
            to: "14:00"
          }
        ],
      }
    ],
    ratings: 4.1,
    phone: "+444 742-312-3479",
    email: "yui.huang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/kyoto/yui-huang.jpg",
    specialties: ["Luxury Car Specialist", "Night Shift", "Security Detail", "VIP Transport"],
    vehicleTypesCertified: ["Sedan", "Motorcoach"],
  },
  {
    id: "driver-kyoto-4",
    name: "Takashi Wu",
    licenseNumber: "C8S728",
    licenseExpiry: "2029-11-05",
    experienceYears: 11,
    languagesSpoken: ["es", "ko"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "21:00",
            to: "23:00"
          },
          {
            from: "05:00",
            to: "09:00"
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
        day: "Saturday",
        availableHours: [
          {
            from: "14:00",
            to: "17:00"
          }
        ],
      }
    ],
    ratings: 3.8,
    phone: "+346 676-408-3426",
    email: "takashi.wu@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/kyoto/takashi-wu.jpg",
    specialties: ["Luxury Car Specialist"],
    vehicleTypesCertified: ["Electric Vehicle"],
  },
  {
    id: "driver-kyoto-5",
    name: "Daniel Wilson",
    licenseNumber: "C7M443",
    licenseExpiry: "2029-10-25",
    experienceYears: 7,
    languagesSpoken: ["tr", "de"],
    available: [
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
        day: "Friday",
        availableHours: [
          {
            from: "11:00",
            to: "13:00"
          },
          {
            from: "02:00",
            to: "05:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "21:00",
            to: "23:00"
          },
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
            from: "15:00",
            to: "19:00"
          }
        ],
      }
    ],
    ratings: 4.5,
    phone: "+663 875-349-5560",
    email: "daniel.wilson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/kyoto/daniel-wilson.jpg",
    specialties: ["Night Shift", "Event Transportation", "Security Detail"],
    vehicleTypesCertified: ["Van", "Sports Car", "Electric Vehicle", "SUV"],
  },
  {
    id: "driver-kyoto-6",
    name: "Donald Miller",
    licenseNumber: "F2E418",
    licenseExpiry: "2028-09-04",
    experienceYears: 17,
    languagesSpoken: ["hi"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "05:00",
            to: "07:00"
          },
          {
            from: "12:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Wednesday",
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
            from: "02:00",
            to: "05:00"
          },
          {
            from: "15:00",
            to: "18:00"
          }
        ],
      }
    ],
    ratings: 4.1,
    phone: "+163 895-183-7332",
    email: "donald.miller@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/kyoto/donald-miller.jpg",
    specialties: ["Night Shift", "Airport Transfers"],
    vehicleTypesCertified: ["Sedan", "Luxury SUV", "Van", "Sports Car"],
  }
];
