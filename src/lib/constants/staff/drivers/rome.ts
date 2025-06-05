import { Driver } from "@/lib/interfaces/people/staff";

export const romeitalymediterraneanDrivers: Driver[] = [
  {
    id: "driver-rome-1",
    name: "Victoria Carter",
    licenseNumber: "P0F694",
    licenseExpiry: "2027-08-20",
    experienceYears: 14,
    languagesSpoken: ["English", "Danish", "Swedish"],
    available: [
      {
        day: "Saturday",
        availableHours: [
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
            from: "00:00",
            to: "03:00",
          },
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "05:00",
            to: "07:00",
          },
        ],
      },
    ],
    ratings: 4.5,
    phone: "+46 256-957-6654",
    email: "victoria.carter@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/rome/victoria-carter.jpg",
    specialties: ["Security Detail", "Tour Guide Driver"],
    vehicleTypesCertified: ["Van", "Motorcoach"],
  },
  {
    id: "driver-rome-2",
    name: "Harry da Costa",
    licenseNumber: "C8S969",
    licenseExpiry: "2026-04-12",
    experienceYears: 11,
    languagesSpoken: ["English", "Dutch", "Norwegian"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "03:00",
            to: "06:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "20:00",
            to: "24:00",
          },
          {
            from: "12:00",
            to: "17:00",
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
          {
            from: "06:00",
            to: "09:00",
          },
        ],
      },
    ],
    ratings: 4,
    phone: "+278 861-690-1022",
    email: "harry.da@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/rome/harry-da.jpg",
    specialties: ["Long-Distance Driving", "Night Shift"],
    vehicleTypesCertified: ["Luxury SUV", "Convertible"],
  },
  {
    id: "driver-rome-3",
    name: "Ali Ali",
    licenseNumber: "P9Z149",
    licenseExpiry: "2027-11-15",
    experienceYears: 19,
    languagesSpoken: ["English", "Finnish", "Norwegian"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "09:00",
            to: "11:00",
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
            from: "20:00",
            to: "24:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "03:00",
            to: "05:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "01:00",
            to: "03:00",
          },
          {
            from: "20:00",
            to: "22:00",
          },
        ],
      },
    ],
    ratings: 4,
    phone: "+719 998-785-8815",
    email: "ali.ali@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/rome/ali-ali.jpg",
    specialties: ["Airport Transfers", "Corporate Chauffeur"],
    vehicleTypesCertified: [
      "Limousine",
      "Convertible",
      "Motorcoach",
      "Electric Vehicle",
    ],
  },
  {
    id: "driver-rome-4",
    name: "Lisa Graves",
    licenseNumber: "E6D950",
    licenseExpiry: "2026-07-13",
    experienceYears: 14,
    languagesSpoken: ["English", "Italian", "Dutch"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "19:00",
            to: "22:00",
          },
          {
            from: "10:00",
            to: "14:00",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "04:00",
            to: "07:00",
          },
          {
            from: "05:00",
            to: "07:00",
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
      {
        day: "Wednesday",
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
            from: "20:00",
            to: "24:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "01:00",
            to: "04:00",
          },
        ],
      },
    ],
    ratings: 4.6,
    phone: "+514 743-319-4212",
    email: "lisa.graves@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/rome/lisa-graves.jpg",
    specialties: ["Tour Guide Driver", "VIP Transport"],
    vehicleTypesCertified: [
      "Convertible",
      "Motorcoach",
      "Electric Vehicle",
      "Sedan",
    ],
  },
  {
    id: "driver-rome-5",
    name: "Helen Wright",
    licenseNumber: "E4Y598",
    licenseExpiry: "2028-03-24",
    experienceYears: 14,
    languagesSpoken: ["English", "Spanish", "Finnish"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "20:00",
            to: "22:00",
          },
          {
            from: "12:00",
            to: "16:00",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "07:00",
            to: "11:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "19:00",
            to: "23:00",
          },
        ],
      },
    ],
    ratings: 3.9,
    phone: "+826 560-512-8946",
    email: "helen.wright@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/rome/helen-wright.jpg",
    specialties: ["Tour Guide Driver", "Corporate Chauffeur", "Night Shift"],
    vehicleTypesCertified: ["Motorcoach", "Sedan"],
  },
  {
    id: "driver-rome-6",
    name: "Roy Marshall",
    licenseNumber: "I3I421",
    licenseExpiry: "2027-02-06",
    experienceYears: 8,
    languagesSpoken: ["English", "Czech", "Portuguese", "German"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "17:00",
            to: "19:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "11:00",
            to: "16:00",
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
            from: "04:00",
            to: "06:00",
          },
        ],
      },
    ],
    ratings: 3.6,
    phone: "+94 827-209-2079",
    email: "roy.marshall@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/rome/roy-marshall.jpg",
    specialties: ["VIP Transport", "Luxury Car Specialist"],
    vehicleTypesCertified: ["Sports Car", "Luxury SUV", "Limousine"],
  },
  {
    id: "driver-rome-7",
    name: "Audrey Palmer",
    licenseNumber: "N3I552",
    licenseExpiry: "2029-08-16",
    experienceYears: 5,
    languagesSpoken: ["English", "Norwegian", "Czech", "Polish"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "21:00",
            to: "24:00",
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
            from: "10:00",
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
            from: "18:00",
            to: "22:00",
          },
        ],
      },
    ],
    ratings: 4.4,
    phone: "+206 341-700-4639",
    email: "audrey.palmer@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/rome/audrey-palmer.jpg",
    specialties: [
      "Event Transportation",
      "Security Detail",
      "Corporate Chauffeur",
    ],
    vehicleTypesCertified: ["Electric Vehicle", "Limousine"],
  },
];
