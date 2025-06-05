import { Driver } from "@/lib/interfaces/people/staff";

export const santiagochilesouthAmericaDrivers: Driver[] = [
  {
    id: "driver-santiago-1",
    name: "Isabella Thompson",
    licenseNumber: "Y8F083",
    licenseExpiry: "2027-02-22",
    experienceYears: 10,
    languagesSpoken: ["pt", "ar", "ko"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "20:00",
            to: "23:00"
          },
          {
            from: "10:00",
            to: "12:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "15:00",
            to: "20:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "15:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "04:00",
            to: "08:00"
          }
        ],
      }
    ],
    ratings: 4.4,
    phone: "+10 405-142-8736",
    email: "isabella.thompson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/santiago/isabella-thompson.jpg",
    specialties: ["Tour Guide Driver", "VIP Transport", "Security Detail"],
    vehicleTypesCertified: ["Sedan"],
  },
  {
    id: "driver-santiago-2",
    name: "Isabella Johnson",
    licenseNumber: "R9O262",
    licenseExpiry: "2029-04-27",
    experienceYears: 1,
    languagesSpoken: ["en", "ar", "pt"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "20:00",
            to: "24:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "18:00",
            to: "22:00"
          },
          {
            from: "13:00",
            to: "16:00"
          }
        ],
      },
      {
        day: "Saturday",
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
            from: "18:00",
            to: "21:00"
          }
        ],
      }
    ],
    ratings: 4.9,
    phone: "+677 679-224-9448",
    email: "isabella.johnson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/santiago/isabella-johnson.jpg",
    specialties: ["Airport Transfers", "Luxury Car Specialist", "Night Shift", "VIP Transport"],
    vehicleTypesCertified: ["Sports Car", "Motorcoach"],
  },
  {
    id: "driver-santiago-3",
    name: "Valeria Martin",
    licenseNumber: "P0A791",
    licenseExpiry: "2027-03-23",
    experienceYears: 3,
    languagesSpoken: ["tr"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "09:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "09:00",
            to: "13:00"
          },
          {
            from: "17:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "14:00",
            to: "16:00"
          }
        ],
      }
    ],
    ratings: 4.4,
    phone: "+830 416-755-4885",
    email: "valeria.martin@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/santiago/valeria-martin.jpg",
    specialties: ["Tour Guide Driver", "VIP Transport"],
    vehicleTypesCertified: ["Convertible"],
  },
  {
    id: "driver-santiago-4",
    name: "Kazuki Le",
    licenseNumber: "Z3Z223",
    licenseExpiry: "2027-03-04",
    experienceYears: 5,
    languagesSpoken: ["pt", "en", "ru"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "05:00",
            to: "07:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "09:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "11:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "05:00",
            to: "08:00"
          },
          {
            from: "18:00",
            to: "20:00"
          }
        ],
      }
    ],
    ratings: 4,
    phone: "+1 289-187-8365",
    email: "kazuki.le@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/santiago/kazuki-le.jpg",
    specialties: ["Airport Transfers"],
    vehicleTypesCertified: ["Sedan", "Motorcoach", "SUV", "Limousine"],
  },
  {
    id: "driver-santiago-5",
    name: "Joshua Nakamura",
    licenseNumber: "K5B290",
    licenseExpiry: "2030-03-02",
    experienceYears: 13,
    languagesSpoken: ["es", "ar", "fr"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "01:00",
            to: "04:00"
          },
          {
            from: "00:00",
            to: "05:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "13:00",
            to: "16:00"
          },
          {
            from: "02:00",
            to: "05:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "09:00",
            to: "12:00"
          },
          {
            from: "00:00",
            to: "03:00"
          }
        ],
      }
    ],
    ratings: 4.7,
    phone: "+557 876-710-8906",
    email: "joshua.nakamura@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/santiago/joshua-nakamura.jpg",
    specialties: ["Airport Transfers", "Event Transportation"],
    vehicleTypesCertified: ["Motorcoach", "Convertible", "Electric Vehicle", "Sedan"],
  }
];
