import { Driver } from "@/lib/interfaces/people/staff";

export const baliindonesiaasiaPacificDrivers: Driver[] = [
  {
    id: "driver-bali-1",
    name: "Susan Liu",
    licenseNumber: "M8Q586",
    licenseExpiry: "2029-09-23",
    experienceYears: 20,
    languagesSpoken: ["pt", "tr"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "02:00",
            to: "07:00"
          },
          {
            from: "12:00",
            to: "15:00"
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
        day: "Sunday",
        availableHours: [
          {
            from: "09:00",
            to: "13:00"
          }
        ],
      }
    ],
    ratings: 4,
    phone: "+460 488-167-7293",
    email: "susan.liu@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/bali/susan-liu.jpg",
    specialties: ["Corporate Chauffeur", "Event Transportation", "Airport Transfers"],
    vehicleTypesCertified: ["SUV", "Sports Car"],
  },
  {
    id: "driver-bali-2",
    name: "Yusuke Suzuki",
    licenseNumber: "B6K272",
    licenseExpiry: "2029-02-17",
    experienceYears: 14,
    languagesSpoken: ["hi", "ko", "en"],
    available: [
      {
        day: "Monday",
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
            from: "15:00",
            to: "17:00"
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
            from: "01:00",
            to: "04:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "08:00",
            to: "12:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "12:00",
            to: "14:00"
          },
          {
            from: "17:00",
            to: "21:00"
          }
        ],
      }
    ],
    ratings: 4,
    phone: "+805 711-472-2455",
    email: "yusuke.suzuki@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/bali/yusuke-suzuki.jpg",
    specialties: ["Tour Guide Driver", "VIP Transport", "Night Shift"],
    vehicleTypesCertified: ["Motorcoach", "Van", "Sedan", "Luxury SUV"],
  },
  {
    id: "driver-bali-3",
    name: "Mariana Wang",
    licenseNumber: "O4N033",
    licenseExpiry: "2029-12-04",
    experienceYears: 16,
    languagesSpoken: ["it", "hi"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "21:00",
            to: "24:00"
          },
          {
            from: "02:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
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
            from: "06:00",
            to: "11:00"
          }
        ],
      }
    ],
    ratings: 3.9,
    phone: "+66 984-551-4027",
    email: "mariana.wang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/bali/mariana-wang.jpg",
    specialties: ["Tour Guide Driver", "Corporate Chauffeur"],
    vehicleTypesCertified: ["Sports Car", "SUV", "Van"],
  },
  {
    id: "driver-bali-4",
    name: "John Tran",
    licenseNumber: "C5D760",
    licenseExpiry: "2030-02-02",
    experienceYears: 8,
    languagesSpoken: ["es"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "09:00",
            to: "13:00"
          },
          {
            from: "15:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "07:00",
            to: "10:00"
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
            from: "02:00",
            to: "05:00"
          }
        ],
      }
    ],
    ratings: 4.5,
    phone: "+275 800-488-5570",
    email: "john.tran@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/bali/john-tran.jpg",
    specialties: ["Airport Transfers", "Night Shift"],
    vehicleTypesCertified: ["Electric Vehicle", "Van"],
  },
  {
    id: "driver-bali-5",
    name: "Matthew Garcia",
    licenseNumber: "I2N443",
    licenseExpiry: "2028-07-16",
    experienceYears: 6,
    languagesSpoken: ["ko", "ar"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "15:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "20:00",
            to: "23:00"
          },
          {
            from: "14:00",
            to: "18:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "11:00",
            to: "13:00"
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
            from: "01:00",
            to: "03:00"
          },
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
            from: "08:00",
            to: "10:00"
          },
          {
            from: "02:00",
            to: "04:00"
          }
        ],
      }
    ],
    ratings: 4.8,
    phone: "+164 748-777-9425",
    email: "matthew.garcia@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/bali/matthew-garcia.jpg",
    specialties: ["Long-Distance Driving", "Night Shift"],
    vehicleTypesCertified: ["Sports Car"],
  }
];
