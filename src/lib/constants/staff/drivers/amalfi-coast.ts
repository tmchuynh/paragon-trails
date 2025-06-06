import { Driver } from "@/lib/interfaces/people/staff";

export const amalfiCoastDrivers: Driver[] = [
  {
    id: "driver-amalfi-coast-1",
    name: "Ahmed Murray",
    licenseNumber: "P4E990",
    licenseExpiry: "2030-10-09",
    experienceYears: 1,
    languagesSpoken: ["English", "German", "Japanese"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00",
          },
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "09:00",
            to: "12:00",
          },
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "16:00",
            to: "21:00",
          },
        ],
      },
    ],
    ratings: 4.2,
    phone: "+789 134-651-9618",
    email: "ahmed.murray@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    specialties: [
      "Event Transportation",
      "Security Detail",
      "Long-Distance Driving",
      "VIP Transport",
    ],
    vehicleTypesCertified: ["SUV", "Sedan", "Limousine", "Luxury SUV"],
  },
  {
    id: "driver-amalfi-coast-2",
    name: "Chen Hernandez",
    licenseNumber: "B6M717",
    licenseExpiry: "2027-06-17",
    experienceYears: 13,
    languagesSpoken: ["English", "Arabic", "Italian"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "09:00",
            to: "13:00",
          },
          {
            from: "21:00",
            to: "24:00",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00",
          },
          {
            from: "01:00",
            to: "05:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "09:00",
            to: "13:00",
          },
        ],
      },
    ],
    ratings: 4,
    phone: "+275 156-208-8107",
    email: "chen.hernandez@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/29.jpg",
    specialties: ["Airport Transfers", "Corporate Chauffeur"],
    vehicleTypesCertified: ["Sports Car", "SUV"],
  },
  {
    id: "driver-amalfi-coast-3",
    name: "Carl Crawford",
    licenseNumber: "C6C756",
    licenseExpiry: "2030-01-13",
    experienceYears: 5,
    languagesSpoken: ["English", "Japanese", "Russian"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00",
          },
          {
            from: "14:00",
            to: "17:00",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "15:00",
            to: "17:00",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "00:00",
            to: "04:00",
          },
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "08:00",
            to: "13:00",
          },
          {
            from: "21:00",
            to: "23:00",
          },
        ],
      },
    ],
    ratings: 4.8,
    phone: "+225 820-825-3576",
    email: "carl.crawford@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/84.jpg",
    specialties: [
      "Long-Distance Driving",
      "Luxury Car Specialist",
      "Airport Transfers",
    ],
    vehicleTypesCertified: ["Sports Car"],
  },
  {
    id: "driver-amalfi-coast-4",
    name: "Julie Crawford",
    licenseNumber: "J3B669",
    licenseExpiry: "2027-04-27",
    experienceYears: 3,
    languagesSpoken: ["English", "Japanese", "French"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "12:00",
            to: "15:00",
          },
          {
            from: "06:00",
            to: "09:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "20:00",
            to: "24:00",
          },
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "03:00",
            to: "05:00",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "21:00",
            to: "23:00",
          },
          {
            from: "18:00",
            to: "23:00",
          },
        ],
      },
    ],
    ratings: 4.5,
    phone: "+195 480-107-3694",
    email: "julie.crawford@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/34.jpg",
    specialties: [
      "Security Detail",
      "Corporate Chauffeur",
      "Luxury Car Specialist",
    ],
    vehicleTypesCertified: ["Luxury SUV", "SUV"],
  },
  {
    id: "driver-amalfi-coast-5",
    name: "Bobby Moore",
    licenseNumber: "I7F904",
    licenseExpiry: "2029-10-14",
    experienceYears: 18,
    languagesSpoken: ["English", "Japanese", "Italian"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "09:00",
            to: "14:00",
          },
          {
            from: "12:00",
            to: "15:00",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "13:00",
            to: "15:00",
          },
          {
            from: "02:00",
            to: "07:00",
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
    ratings: 4.2,
    phone: "+231 633-204-9444",
    email: "bobby.moore@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/84.jpg",
    specialties: ["Event Transportation", "Night Shift"],
    vehicleTypesCertified: [
      "Convertible",
      "Van",
      "Electric Vehicle",
      "SUV",
      "Sedan",
    ],
  },
  {
    id: "driver-amalfi-coast-6",
    name: "Lucas Campbell",
    licenseNumber: "V0S919",
    licenseExpiry: "2030-04-09",
    experienceYears: 19,
    languagesSpoken: ["English", "Spanish", "Russian"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "14:00",
            to: "18:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "19:00",
            to: "24:00",
          },
          {
            from: "07:00",
            to: "10:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "14:00",
            to: "18:00",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "15:00",
            to: "19:00",
          },
          {
            from: "18:00",
            to: "20:00",
          },
        ],
      },
    ],
    ratings: 4.9,
    phone: "+235 805-708-9653",
    email: "lucas.campbell@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/33.jpg",
    specialties: ["Security Detail"],
    vehicleTypesCertified: ["SUV"],
  },
  {
    id: "driver-amalfi-coast-7",
    name: "Melissa Chambers",
    licenseNumber: "E6Q191",
    licenseExpiry: "2029-04-25",
    experienceYears: 17,
    languagesSpoken: ["English", "Arabic", "German"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "13:00",
            to: "18:00",
          },
          {
            from: "17:00",
            to: "20:00",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "08:00",
            to: "12:00",
          },
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "14:00",
            to: "18:00",
          },
        ],
      },
    ],
    ratings: 4.9,
    phone: "+33 543-856-9064",
    email: "melissa.chambers@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/9.jpg",
    specialties: [
      "Corporate Chauffeur",
      "Airport Transfers",
      "Tour Guide Driver",
    ],
    vehicleTypesCertified: ["Electric Vehicle"],
  },
  {
    id: "driver-amalfi-coast-8",
    name: "Joan Payne",
    licenseNumber: "C1L500",
    licenseExpiry: "2028-04-20",
    experienceYears: 16,
    languagesSpoken: ["English", "Portuguese", "Japanese"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "19:00",
            to: "23:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "03:00",
            to: "08:00",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "07:00",
            to: "11:00",
          },
        ],
      },
    ],
    ratings: 3.8,
    phone: "+178 938-918-6110",
    email: "joan.payne@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/82.jpg",
    specialties: ["Tour Guide Driver", "Long-Distance Driving", "Night Shift"],
    vehicleTypesCertified: ["Luxury SUV", "Sports Car"],
  },
  {
    id: "driver-amalfi-coast-9",
    name: "Emily Gonzalez",
    licenseNumber: "W0O490",
    licenseExpiry: "2029-08-15",
    experienceYears: 7,
    languagesSpoken: ["English", "Spanish", "Japanese", "Russian"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "01:00",
            to: "04:00",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "11:00",
            to: "13:00",
          },
          {
            from: "06:00",
            to: "08:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "19:00",
            to: "22:00",
          },
          {
            from: "13:00",
            to: "17:00",
          },
        ],
      },
    ],
    ratings: 3.7,
    phone: "+70 550-586-1643",
    email: "emily.gonzalez@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/15.jpg",
    specialties: ["Event Transportation", "Night Shift", "Corporate Chauffeur"],
    vehicleTypesCertified: ["SUV", "Luxury SUV"],
  },
];
