import { Driver } from "@/lib/interfaces/people/staff";

export const romeitalymediterraneanDrivers: Driver[] = [
  {
    id: "driver-rome-1",
    name: "Harry Crawford",
    licenseNumber: "Q8E611",
    licenseExpiry: "2027-12-17",
    experienceYears: 3,
    languagesSpoken: ["English", "German", "Finnish"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "09:00",
            to: "13:00",
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
        day: "Saturday",
        availableHours: [
          {
            from: "11:00",
            to: "16:00",
          },
          {
            from: "06:00",
            to: "10:00",
          },
        ],
      },
    ],
    ratings: 3.9,
    phone: "+156 517-289-9024",
    email: "harry.crawford@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    specialties: [
      "Night Shift",
      "VIP Transport",
      "Luxury Car Specialist",
      "Event Transportation",
    ],
    vehicleTypesCertified: ["Electric Vehicle", "Sedan", "Convertible"],
  },
  {
    id: "driver-rome-2",
    name: "Angela Lee",
    licenseNumber: "H7X152",
    licenseExpiry: "2028-02-11",
    experienceYears: 11,
    languagesSpoken: ["English", "Dutch", "Russian"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "04:00",
            to: "06:00",
          },
          {
            from: "18:00",
            to: "22:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00",
          },
          {
            from: "07:00",
            to: "09:00",
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
          {
            from: "04:00",
            to: "06:00",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "10:00",
            to: "13:00",
          },
        ],
      },
    ],
    ratings: 4.1,
    phone: "+441 617-946-9940",
    email: "angela.lee@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/54.jpg",
    specialties: [
      "Event Transportation",
      "VIP Transport",
      "Luxury Car Specialist",
    ],
    vehicleTypesCertified: ["Van"],
  },
  {
    id: "driver-rome-3",
    name: "Aiden Rodriguez",
    licenseNumber: "E3C459",
    licenseExpiry: "2028-11-08",
    experienceYears: 6,
    languagesSpoken: ["English", "French", "Swedish"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "00:00",
            to: "03:00",
          },
          {
            from: "16:00",
            to: "20:00",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "05:00",
            to: "10:00",
          },
          {
            from: "10:00",
            to: "12:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "16:00",
            to: "18:00",
          },
          {
            from: "05:00",
            to: "08:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "15:00",
            to: "17:00",
          },
        ],
      },
    ],
    ratings: 3.9,
    phone: "+273 551-992-4543",
    email: "aiden.rodriguez@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/86.jpg",
    specialties: ["VIP Transport"],
    vehicleTypesCertified: [
      "Electric Vehicle",
      "Sports Car",
      "Van",
      "Motorcoach",
    ],
  },
  {
    id: "driver-rome-4",
    name: "Logan Dixon",
    licenseNumber: "M1W397",
    licenseExpiry: "2029-10-07",
    experienceYears: 3,
    languagesSpoken: ["English", "Italian", "Swedish"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00",
          },
          {
            from: "01:00",
            to: "04:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "02:00",
            to: "07:00",
          },
          {
            from: "17:00",
            to: "20:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "21:00",
            to: "23:00",
          },
          {
            from: "09:00",
            to: "13:00",
          },
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "05:00",
            to: "08:00",
          },
        ],
      },
    ],
    ratings: 4.5,
    phone: "+857 597-795-7395",
    email: "logan.dixon@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/61.jpg",
    specialties: ["Night Shift", "Corporate Chauffeur", "Airport Transfers"],
    vehicleTypesCertified: ["Sedan", "SUV", "Luxury SUV"],
  },
  {
    id: "driver-rome-5",
    name: "Stella Patel",
    licenseNumber: "Z0V063",
    licenseExpiry: "2027-09-17",
    experienceYears: 16,
    languagesSpoken: ["English", "Norwegian", "Polish"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "08:00",
            to: "10:00",
          },
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
            from: "21:00",
            to: "24:00",
          },
          {
            from: "10:00",
            to: "12:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "19:00",
            to: "22:00",
          },
          {
            from: "18:00",
            to: "21:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "00:00",
            to: "02:00",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "19:00",
            to: "21:00",
          },
        ],
      },
    ],
    ratings: 4.3,
    phone: "+489 451-331-2626",
    email: "stella.patel@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/25.jpg",
    specialties: ["Tour Guide Driver"],
    vehicleTypesCertified: ["Sports Car"],
  },
  {
    id: "driver-rome-6",
    name: "Layla Müller",
    licenseNumber: "A3S614",
    licenseExpiry: "2027-08-04",
    experienceYears: 12,
    languagesSpoken: ["English", "Finnish", "Russian"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "14:00",
            to: "16:00",
          },
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "15:00",
            to: "19:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "09:00",
            to: "13:00",
          },
          {
            from: "15:00",
            to: "19:00",
          },
        ],
      },
    ],
    ratings: 5,
    phone: "+247 812-875-6617",
    email: "layla.müller@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/63.jpg",
    specialties: [
      "Event Transportation",
      "Tour Guide Driver",
      "Long-Distance Driving",
    ],
    vehicleTypesCertified: ["Electric Vehicle", "Luxury SUV", "Motorcoach"],
  },
  {
    id: "driver-rome-7",
    name: "William Lopez",
    licenseNumber: "V0O676",
    licenseExpiry: "2027-10-20",
    experienceYears: 16,
    languagesSpoken: ["English", "Dutch", "Czech", "Italian"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "15:00",
            to: "17:00",
          },
          {
            from: "18:00",
            to: "23:00",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "20:00",
            to: "22:00",
          },
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "21:00",
            to: "23:00",
          },
          {
            from: "08:00",
            to: "11:00",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "17:00",
            to: "20:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "02:00",
            to: "07:00",
          },
          {
            from: "02:00",
            to: "04:00",
          },
        ],
      },
    ],
    ratings: 3.9,
    phone: "+848 829-590-6866",
    email: "william.lopez@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/57.jpg",
    specialties: ["Luxury Car Specialist", "Airport Transfers"],
    vehicleTypesCertified: ["Motorcoach", "Sedan"],
  },
  {
    id: "driver-rome-8",
    name: "Ibrahim Graves",
    licenseNumber: "M6B914",
    licenseExpiry: "2027-04-28",
    experienceYears: 19,
    languagesSpoken: ["English", "German", "Italian"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "17:00",
            to: "22:00",
          },
          {
            from: "03:00",
            to: "07:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00",
          },
          {
            from: "03:00",
            to: "06:00",
          },
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "13:00",
            to: "18:00",
          },
          {
            from: "05:00",
            to: "09:00",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "04:00",
            to: "09:00",
          },
          {
            from: "21:00",
            to: "23:00",
          },
        ],
      },
    ],
    ratings: 4.5,
    phone: "+624 862-203-6530",
    email: "ibrahim.graves@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/47.jpg",
    specialties: ["Security Detail", "Airport Transfers"],
    vehicleTypesCertified: ["Sedan", "Electric Vehicle", "Convertible"],
  },
];
