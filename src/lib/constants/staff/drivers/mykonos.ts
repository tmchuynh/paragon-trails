import { Driver } from "@/lib/interfaces/people/staff";

export const mykonosgreecemediterraneanDrivers: Driver[] = [
  {
    id: "driver-mykonos-1",
    name: "Yusuke Ito",
    licenseNumber: "U9T713",
    licenseExpiry: "2028-10-18",
    experienceYears: 1,
    languagesSpoken: ["es", "pt"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "08:00",
            to: "10:00"
          },
          {
            from: "20:00",
            to: "23:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
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
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "05:00",
            to: "09:00"
          },
          {
            from: "10:00",
            to: "13:00"
          }
        ],
      }
    ],
    ratings: 3.7,
    phone: "+779 842-214-9157",
    email: "yusuke.ito@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/mykonos/yusuke-ito.jpg",
    specialties: ["Airport Transfers", "VIP Transport", "Corporate Chauffeur", "Long-Distance Driving"],
    vehicleTypesCertified: ["Sedan", "Motorcoach", "Convertible", "Van"],
  },
  {
    id: "driver-mykonos-2",
    name: "Hao Yang",
    licenseNumber: "P9B189",
    licenseExpiry: "2028-10-17",
    experienceYears: 11,
    languagesSpoken: ["fr", "ja", "tr"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "03:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Thursday",
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
            from: "15:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "12:00",
            to: "14:00"
          }
        ],
      }
    ],
    ratings: 4.5,
    phone: "+282 802-290-7461",
    email: "hao.yang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/mykonos/hao-yang.jpg",
    specialties: ["Security Detail", "Night Shift", "Corporate Chauffeur"],
    vehicleTypesCertified: ["Sports Car", "Luxury SUV", "Motorcoach", "Convertible", "Van"],
  },
  {
    id: "driver-mykonos-3",
    name: "Ming Wang",
    licenseNumber: "C1B260",
    licenseExpiry: "2029-12-12",
    experienceYears: 13,
    languagesSpoken: ["hi"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "06:00",
            to: "10:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "08:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "07:00",
            to: "12:00"
          }
        ],
      }
    ],
    ratings: 3.9,
    phone: "+797 897-443-4223",
    email: "ming.wang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/mykonos/ming-wang.jpg",
    specialties: ["VIP Transport", "Long-Distance Driving", "Tour Guide Driver"],
    vehicleTypesCertified: ["SUV"],
  },
  {
    id: "driver-mykonos-4",
    name: "Yui Smith",
    licenseNumber: "D2O132",
    licenseExpiry: "2028-09-09",
    experienceYears: 1,
    languagesSpoken: ["fr"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "15:00",
            to: "20:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "07:00",
            to: "10:00"
          },
          {
            from: "02:00",
            to: "04:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "18:00",
            to: "21:00"
          }
        ],
      }
    ],
    ratings: 4.6,
    phone: "+473 610-801-6135",
    email: "yui.smith@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/mykonos/yui-smith.jpg",
    specialties: ["Luxury Car Specialist", "Event Transportation"],
    vehicleTypesCertified: ["Limousine", "SUV", "Sedan"],
  },
  {
    id: "driver-mykonos-5",
    name: "Mei Wu",
    licenseNumber: "F4C543",
    licenseExpiry: "2026-04-16",
    experienceYears: 18,
    languagesSpoken: ["ko"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "00:00",
            to: "03:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "11:00",
            to: "15:00"
          },
          {
            from: "04:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "18:00",
            to: "21:00"
          }
        ],
      }
    ],
    ratings: 3.9,
    phone: "+779 448-374-4401",
    email: "mei.wu@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/mykonos/mei-wu.jpg",
    specialties: ["Corporate Chauffeur", "Luxury Car Specialist"],
    vehicleTypesCertified: ["Convertible", "Van"],
  }
];
