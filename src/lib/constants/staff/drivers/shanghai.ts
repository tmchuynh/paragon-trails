import { Driver } from "@/lib/interfaces/people/staff";

export const shanghaichinaasiaPacificDrivers: Driver[] = [
  {
    id: "driver-shanghai-1",
    name: "Jane Foster",
    licenseNumber: "Y2M863",
    licenseExpiry: "2026-02-16",
    experienceYears: 16,
    languagesSpoken: ["Urdu", "Japanese", "Vietnamese"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "14:00",
            to: "18:00",
          },
          {
            from: "04:00",
            to: "09:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "05:00",
            to: "10:00",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "16:00",
            to: "19:00",
          },
          {
            from: "20:00",
            to: "23:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "07:00",
            to: "10:00",
          },
        ],
      },
    ],
    ratings: 4.9,
    phone: "+396 986-799-2460",
    email: "jane.foster@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/shanghai/jane-foster.jpg",
    specialties: [
      "Tour Guide Driver",
      "Airport Transfers",
      "Corporate Chauffeur",
    ],
    vehicleTypesCertified: [
      "Sports Car",
      "Electric Vehicle",
      "Convertible",
      "Luxury SUV",
    ],
  },
  {
    id: "driver-shanghai-2",
    name: "Gerald Keller",
    licenseNumber: "B9U062",
    licenseExpiry: "2029-11-08",
    experienceYears: 11,
    languagesSpoken: ["Korean", "Malay", "Thai", "Tagalog"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "13:00",
            to: "16:00",
          },
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "06:00",
            to: "08:00",
          },
          {
            from: "03:00",
            to: "07:00",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "02:00",
            to: "06:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "21:00",
            to: "24:00",
          },
          {
            from: "08:00",
            to: "12:00",
          },
        ],
      },
    ],
    ratings: 3.7,
    phone: "+603 494-184-2220",
    email: "gerald.keller@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/shanghai/gerald-keller.jpg",
    specialties: ["Tour Guide Driver", "Event Transportation"],
    vehicleTypesCertified: ["Sedan"],
  },
  {
    id: "driver-shanghai-3",
    name: "Luis Moore",
    licenseNumber: "V2C990",
    licenseExpiry: "2027-03-22",
    experienceYears: 7,
    languagesSpoken: ["Bengali", "Malay", "Japanese", "Korean"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "07:00",
            to: "11:00",
          },
          {
            from: "05:00",
            to: "09:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "17:00",
            to: "22:00",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "20:00",
            to: "23:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "19:00",
            to: "24:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "10:00",
            to: "12:00",
          },
        ],
      },
    ],
    ratings: 3.7,
    phone: "+437 460-813-2094",
    email: "luis.moore@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/shanghai/luis-moore.jpg",
    specialties: ["Airport Transfers", "Long-Distance Driving"],
    vehicleTypesCertified: ["Limousine"],
  },
  {
    id: "driver-shanghai-4",
    name: "Ella Holloway",
    licenseNumber: "R1V674",
    licenseExpiry: "2026-11-02",
    experienceYears: 5,
    languagesSpoken: ["Hindi", "Japanese", "Urdu"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "00:00",
            to: "02:00",
          },
          {
            from: "11:00",
            to: "15:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "01:00",
            to: "03:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "05:00",
            to: "08:00",
          },
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "06:00",
            to: "08:00",
          },
        ],
      },
    ],
    ratings: 4.6,
    phone: "+255 782-952-6402",
    email: "ella.holloway@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/shanghai/ella-holloway.jpg",
    specialties: ["Long-Distance Driving", "Airport Transfers"],
    vehicleTypesCertified: ["SUV"],
  },
  {
    id: "driver-shanghai-5",
    name: "Samantha Mitchell",
    licenseNumber: "K4K658",
    licenseExpiry: "2026-04-03",
    experienceYears: 3,
    languagesSpoken: ["Korean", "Japanese", "Vietnamese"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "19:00",
            to: "22:00",
          },
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "00:00",
            to: "05:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "20:00",
            to: "22:00",
          },
        ],
      },
    ],
    ratings: 4.6,
    phone: "+263 538-464-6071",
    email: "samantha.mitchell@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/shanghai/samantha-mitchell.jpg",
    specialties: ["Security Detail", "Corporate Chauffeur"],
    vehicleTypesCertified: ["Convertible", "Motorcoach", "Sedan"],
  },
];
