import { Driver } from "@/lib/interfaces/people/staff";

export const tokyoJapanAsiaPacificDrivers: Driver[] = [
  {
    id: "driver-tokyo-1",
    name: "Hiroshi Tanaka",
    licenseNumber: "A3B456",
    licenseExpiry: "2025-06-14",
    experienceYears: 12,
    languagesSpoken: ["ja", "en", "zh"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "08:00",
            to: "14:00",
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
            from: "09:00",
            to: "15:00",
          },
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "07:00",
            to: "13:00",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "10:00",
            to: "16:00",
          },
        ],
      },
    ],
    ratings: 4.8,
    phone: "+81 354-782-3901",
    email: "hiroshi.tanaka@example.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/tokyo/hiroshi-tanaka.jpg",
    specialties: [
      "VIP Transport",
      "Luxury Car Specialist",
      "Airport Transfers",
    ],
    vehicleTypesCertified: ["Sedan", "Limousine", "Luxury SUV"],
  },
  {
    id: "driver-tokyo-2",
    name: "Yuki Suzuki",
    licenseNumber: "C7D123",
    licenseExpiry: "2024-09-22",
    experienceYears: 8,
    languagesSpoken: ["ja", "en"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "07:00",
            to: "13:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "14:00",
            to: "20:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "09:00",
            to: "15:00",
          },
        ],
      },
    ],
    ratings: 4.5,
    phone: "+81 345-678-9012",
    email: "yuki.suzuki@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/tokyo/yuki-suzuki.jpg",
    specialties: ["Tour Guide Driver", "Corporate Chauffeur"],
    vehicleTypesCertified: ["SUV", "Electric Vehicle", "Sedan"],
  },
];
