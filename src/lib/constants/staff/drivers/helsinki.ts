import { Driver } from "@/lib/interfaces/people/staff";

export const helsinkifinlandnorthernEuropeDrivers: Driver[] = [
  {
    id: "driver-helsinki-1",
    name: "Timothy Mason",
    licenseNumber: "X0D564",
    licenseExpiry: "2030-11-12",
    experienceYears: 5,
    languagesSpoken: ["English", "Russian", "Czech"],
    available: [
      {
        day: "Tuesday",
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
            from: "14:00",
            to: "16:00",
          },
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "02:00",
            to: "05:00",
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
            from: "13:00",
            to: "16:00",
          },
          {
            from: "07:00",
            to: "11:00",
          },
        ],
      },
    ],
    ratings: 4.3,
    phone: "+593 123-428-9748",
    email: "timothy.mason@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/helsinki/timothy-mason.jpg",
    specialties: ["VIP Transport"],
    vehicleTypesCertified: [
      "Limousine",
      "Convertible",
      "Sports Car",
      "Electric Vehicle",
    ],
  },
  {
    id: "driver-helsinki-2",
    name: "Zola Wang",
    licenseNumber: "T6U476",
    licenseExpiry: "2027-07-09",
    experienceYears: 17,
    languagesSpoken: ["English", "Norwegian", "French", "Polish"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "20:00",
            to: "24:00",
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
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "09:00",
            to: "12:00",
          },
          {
            from: "16:00",
            to: "21:00",
          },
        ],
      },
    ],
    ratings: 4.6,
    phone: "+832 983-480-3570",
    email: "zola.wang@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/helsinki/zola-wang.jpg",
    specialties: ["VIP Transport", "Long-Distance Driving"],
    vehicleTypesCertified: ["Sports Car"],
  },
  {
    id: "driver-helsinki-3",
    name: "Aiden Fisher",
    licenseNumber: "M4S112",
    licenseExpiry: "2026-04-26",
    experienceYears: 1,
    languagesSpoken: ["English", "Dutch", "Norwegian"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "08:00",
            to: "11:00",
          },
          {
            from: "10:00",
            to: "12:00",
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
          {
            from: "21:00",
            to: "24:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "08:00",
            to: "11:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "17:00",
            to: "19:00",
          },
          {
            from: "06:00",
            to: "10:00",
          },
        ],
      },
    ],
    ratings: 4.2,
    phone: "+15 586-191-8654",
    email: "aiden.fisher@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/helsinki/aiden-fisher.jpg",
    specialties: [
      "Airport Transfers",
      "Security Detail",
      "Event Transportation",
      "VIP Transport",
    ],
    vehicleTypesCertified: ["Sedan", "Motorcoach", "Convertible", "Luxury SUV"],
  },
  {
    id: "driver-helsinki-4",
    name: "Russell Stewart",
    licenseNumber: "P4G588",
    licenseExpiry: "2027-10-04",
    experienceYears: 11,
    languagesSpoken: ["English", "Danish", "Czech", "Polish"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "04:00",
            to: "06:00",
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
            from: "17:00",
            to: "20:00",
          },
          {
            from: "07:00",
            to: "12:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "14:00",
            to: "17:00",
          },
        ],
      },
    ],
    ratings: 4.6,
    phone: "+879 219-535-8019",
    email: "russell.stewart@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/helsinki/russell-stewart.jpg",
    specialties: ["Tour Guide Driver", "Long-Distance Driving"],
    vehicleTypesCertified: ["Sedan", "Limousine"],
  },
  {
    id: "driver-helsinki-5",
    name: "Yuki Spencer",
    licenseNumber: "R8B100",
    licenseExpiry: "2027-03-24",
    experienceYears: 8,
    languagesSpoken: ["English", "Portuguese", "Swedish", "Finnish"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "09:00",
            to: "14:00",
          },
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
            from: "08:00",
            to: "13:00",
          },
          {
            from: "03:00",
            to: "05:00",
          },
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "17:00",
            to: "22:00",
          },
        ],
      },
    ],
    ratings: 4,
    phone: "+350 402-801-9950",
    email: "yuki.spencer@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/helsinki/yuki-spencer.jpg",
    specialties: ["VIP Transport", "Tour Guide Driver", "Event Transportation"],
    vehicleTypesCertified: ["Sedan"],
  },
  {
    id: "driver-helsinki-6",
    name: "Bobby Warren",
    licenseNumber: "I3O764",
    licenseExpiry: "2026-03-28",
    experienceYears: 1,
    languagesSpoken: ["English", "French", "Swedish"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
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
            from: "19:00",
            to: "22:00",
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
            from: "08:00",
            to: "13:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "10:00",
            to: "13:00",
          },
          {
            from: "19:00",
            to: "21:00",
          },
        ],
      },
    ],
    ratings: 4.6,
    phone: "+250 223-505-5463",
    email: "bobby.warren@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/helsinki/bobby-warren.jpg",
    specialties: [
      "Corporate Chauffeur",
      "Security Detail",
      "Night Shift",
      "Luxury Car Specialist",
    ],
    vehicleTypesCertified: ["Limousine"],
  },
];
