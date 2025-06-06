import { Driver } from "@/lib/interfaces/people/staff";

export const stPetersburgrussianorthernEuropeDrivers: Driver[] = [
  {
    id: "driver-st-petersburg-1",
    name: "Ava Gonzalez",
    licenseNumber: "U8F147",
    licenseExpiry: "2028-07-05",
    experienceYears: 10,
    languagesSpoken: ["English", "Italian", "Dutch"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "19:00",
            to: "24:00",
          },
          {
            from: "08:00",
            to: "11:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "08:00",
            to: "10:00",
          },
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
            from: "03:00",
            to: "07:00",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "10:00",
            to: "12:00",
          },
        ],
      },
    ],
    ratings: 3.8,
    phone: "+441 145-307-4565",
    email: "ava.gonzalez@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/80.jpg",
    specialties: ["Long-Distance Driving", "VIP Transport", "Security Detail"],
    vehicleTypesCertified: ["SUV", "Van", "Electric Vehicle"],
  },
  {
    id: "driver-st-petersburg-2",
    name: "Carl Müller",
    licenseNumber: "L5J801",
    licenseExpiry: "2029-06-11",
    experienceYears: 13,
    languagesSpoken: ["English", "Greek", "Swedish"],
    available: [
      {
        day: "Thursday",
        availableHours: [
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
            from: "03:00",
            to: "05:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "00:00",
            to: "05:00",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "03:00",
            to: "06:00",
          },
        ],
      },
    ],
    ratings: 3.9,
    phone: "+210 326-117-1261",
    email: "carl.müller@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/33.jpg",
    specialties: ["Tour Guide Driver", "Long-Distance Driving"],
    vehicleTypesCertified: ["SUV", "Sedan", "Van"],
  },
  {
    id: "driver-st-petersburg-3",
    name: "Sebastian Martin",
    licenseNumber: "S5Z161",
    licenseExpiry: "2026-04-18",
    experienceYears: 10,
    languagesSpoken: ["English", "Finnish", "Danish", "Italian"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "01:00",
            to: "06:00",
          },
          {
            from: "07:00",
            to: "09:00",
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
        day: "Friday",
        availableHours: [
          {
            from: "20:00",
            to: "22:00",
          },
          {
            from: "09:00",
            to: "13:00",
          },
        ],
      },
    ],
    ratings: 3.9,
    phone: "+579 439-553-4305",
    email: "sebastian.martin@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/34.jpg",
    specialties: ["Corporate Chauffeur"],
    vehicleTypesCertified: ["Convertible", "Sports Car"],
  },
  {
    id: "driver-st-petersburg-4",
    name: "Brenda Ellis",
    licenseNumber: "O5U747",
    licenseExpiry: "2029-12-11",
    experienceYears: 7,
    languagesSpoken: ["English", "Czech", "Italian"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "19:00",
            to: "24:00",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "13:00",
            to: "17:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "02:00",
            to: "06:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "15:00",
            to: "17:00",
          },
          {
            from: "05:00",
            to: "10:00",
          },
        ],
      },
    ],
    ratings: 4.2,
    phone: "+96 763-473-5893",
    email: "brenda.ellis@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/12.jpg",
    specialties: ["Event Transportation", "VIP Transport", "Night Shift"],
    vehicleTypesCertified: ["Limousine", "Luxury SUV", "Convertible"],
  },
  {
    id: "driver-st-petersburg-5",
    name: "Zola Foster",
    licenseNumber: "U8L252",
    licenseExpiry: "2029-05-10",
    experienceYears: 8,
    languagesSpoken: ["English", "Danish", "German"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "20:00",
            to: "23:00",
          },
          {
            from: "09:00",
            to: "14:00",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "14:00",
            to: "16:00",
          },
          {
            from: "20:00",
            to: "23:00",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "04:00",
            to: "06:00",
          },
          {
            from: "21:00",
            to: "23:00",
          },
        ],
      },
    ],
    ratings: 3.9,
    phone: "+13 121-390-6224",
    email: "zola.foster@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/29.jpg",
    specialties: ["Luxury Car Specialist"],
    vehicleTypesCertified: ["Convertible", "Electric Vehicle", "Sedan"],
  },
];
