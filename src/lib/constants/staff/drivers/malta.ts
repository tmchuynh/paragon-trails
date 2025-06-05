import { Driver } from "@/lib/interfaces/people/staff";

export const maltamaltamediterraneanDrivers: Driver[] = [
  {
    id: "driver-malta-1",
    name: "Ronald Garcia",
    licenseNumber: "S3N882",
    licenseExpiry: "2026-07-09",
    experienceYears: 9,
    languagesSpoken: ["English", "Finnish", "Italian"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "13:00",
            to: "18:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "00:00",
            to: "04:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "04:00",
            to: "07:00"
          }
        ],
      }
    ],
    ratings: 4.9,
    phone: "+731 321-482-7065",
    email: "ronald.garcia@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/malta/ronald-garcia.jpg",
    specialties: ["VIP Transport"],
    vehicleTypesCertified: ["Sports Car", "Limousine", "SUV"],
  },
  {
    id: "driver-malta-2",
    name: "William Davis",
    licenseNumber: "U3B624",
    licenseExpiry: "2027-12-17",
    experienceYears: 20,
    languagesSpoken: ["English", "Italian", "German", "French"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "20:00",
            to: "22:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "02:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "04:00",
            to: "06:00"
          }
        ],
      }
    ],
    ratings: 4.7,
    phone: "+94 802-322-1040",
    email: "william.davis@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/malta/william-davis.jpg",
    specialties: ["Security Detail"],
    vehicleTypesCertified: ["Motorcoach"],
  },
  {
    id: "driver-malta-3",
    name: "Maria Wright",
    licenseNumber: "D3M535",
    licenseExpiry: "2030-09-22",
    experienceYears: 6,
    languagesSpoken: ["English", "Finnish", "Swedish", "Russian"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "07:00",
            to: "10:00"
          },
          {
            from: "15:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "19:00",
            to: "23:00"
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
            from: "05:00",
            to: "08:00"
          }
        ],
      }
    ],
    ratings: 4.7,
    phone: "+92 840-204-6356",
    email: "maria.wright@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/malta/maria-wright.jpg",
    specialties: ["Security Detail", "Tour Guide Driver", "Corporate Chauffeur", "VIP Transport"],
    vehicleTypesCertified: ["Electric Vehicle", "Sports Car", "Van"],
  },
  {
    id: "driver-malta-4",
    name: "Ashley Murray",
    licenseNumber: "G8X807",
    licenseExpiry: "2029-10-09",
    experienceYears: 5,
    languagesSpoken: ["English", "Portuguese", "Swedish"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "13:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "14:00",
            to: "17:00"
          },
          {
            from: "11:00",
            to: "13:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "10:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "15:00",
            to: "17:00"
          }
        ],
      }
    ],
    ratings: 4.2,
    phone: "+305 540-320-1559",
    email: "ashley.murray@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/malta/ashley-murray.jpg",
    specialties: ["Luxury Car Specialist", "VIP Transport", "Corporate Chauffeur", "Event Transportation"],
    vehicleTypesCertified: ["Motorcoach", "Convertible", "Sedan", "Sports Car"],
  },
  {
    id: "driver-malta-5",
    name: "Stephanie Dean",
    licenseNumber: "V4D963",
    licenseExpiry: "2027-07-12",
    experienceYears: 7,
    languagesSpoken: ["English", "Russian", "Norwegian"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "12:00",
            to: "15:00"
          },
          {
            from: "02:00",
            to: "07:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "07:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "13:00",
            to: "18:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "04:00",
            to: "08:00"
          },
          {
            from: "19:00",
            to: "21:00"
          }
        ],
      }
    ],
    ratings: 3.5,
    phone: "+151 185-986-6764",
    email: "stephanie.dean@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/malta/stephanie-dean.jpg",
    specialties: ["Luxury Car Specialist"],
    vehicleTypesCertified: ["Sports Car"],
  }
];
