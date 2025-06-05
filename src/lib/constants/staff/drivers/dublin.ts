import { Driver } from "@/lib/interfaces/people/staff";

export const dublinirelandnorthernEuropeDrivers: Driver[] = [
  {
    id: "driver-dublin-1",
    name: "Claire Nash",
    licenseNumber: "N6D630",
    licenseExpiry: "2030-01-22",
    experienceYears: 1,
    languagesSpoken: ["English", "German", "Czech"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "09:00",
            to: "14:00"
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
            from: "07:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "01:00",
            to: "05:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "05:00",
            to: "07:00"
          }
        ],
      }
    ],
    ratings: 4,
    phone: "+779 417-888-2145",
    email: "claire.nash@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/dublin/claire-nash.jpg",
    specialties: ["Night Shift", "Corporate Chauffeur"],
    vehicleTypesCertified: ["Electric Vehicle", "Motorcoach", "Limousine"],
  },
  {
    id: "driver-dublin-2",
    name: "Caroline Anderson",
    licenseNumber: "H6T376",
    licenseExpiry: "2030-04-14",
    experienceYears: 17,
    languagesSpoken: ["English", "Portuguese", "Italian"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "03:00",
            to: "06:00"
          },
          {
            from: "02:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Thursday",
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
            from: "03:00",
            to: "08:00"
          },
          {
            from: "18:00",
            to: "23:00"
          }
        ],
      }
    ],
    ratings: 4.4,
    phone: "+606 169-236-7550",
    email: "caroline.anderson@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/dublin/caroline-anderson.jpg",
    specialties: ["Night Shift", "Long-Distance Driving"],
    vehicleTypesCertified: ["Van", "Luxury SUV", "Motorcoach"],
  },
  {
    id: "driver-dublin-3",
    name: "Nora Fletcher",
    licenseNumber: "Y9F216",
    licenseExpiry: "2030-07-13",
    experienceYears: 9,
    languagesSpoken: ["English", "Norwegian", "Swedish"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "12:00",
            to: "14:00"
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
            from: "05:00",
            to: "08:00"
          }
        ],
      }
    ],
    ratings: 4.3,
    phone: "+527 746-282-6914",
    email: "nora.fletcher@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/dublin/nora-fletcher.jpg",
    specialties: ["VIP Transport", "Night Shift"],
    vehicleTypesCertified: ["Motorcoach", "Electric Vehicle"],
  },
  {
    id: "driver-dublin-4",
    name: "Antonio Wang",
    licenseNumber: "D5K973",
    licenseExpiry: "2026-12-19",
    experienceYears: 12,
    languagesSpoken: ["English", "Dutch", "Finnish"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "19:00",
            to: "22:00"
          },
          {
            from: "01:00",
            to: "04:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "16:00",
            to: "18:00"
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
        day: "Friday",
        availableHours: [
          {
            from: "05:00",
            to: "08:00"
          }
        ],
      }
    ],
    ratings: 4.1,
    phone: "+813 366-961-7501",
    email: "antonio.wang@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/dublin/antonio-wang.jpg",
    specialties: ["Long-Distance Driving"],
    vehicleTypesCertified: ["Sports Car", "Sedan", "Van"],
  },
  {
    id: "driver-dublin-5",
    name: "Harper Moore",
    licenseNumber: "T3R900",
    licenseExpiry: "2026-10-14",
    experienceYears: 3,
    languagesSpoken: ["English", "Finnish", "Greek"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "21:00",
            to: "24:00"
          },
          {
            from: "05:00",
            to: "09:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "06:00",
            to: "09:00"
          },
          {
            from: "21:00",
            to: "23:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00"
          }
        ],
      }
    ],
    ratings: 3.7,
    phone: "+706 644-114-8436",
    email: "harper.moore@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/dublin/harper-moore.jpg",
    specialties: ["Long-Distance Driving"],
    vehicleTypesCertified: ["SUV", "Luxury SUV", "Limousine"],
  }
];
