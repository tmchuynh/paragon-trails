import { Driver } from "@/lib/interfaces/people/staff";

export const berlingermanynorthernEuropeDrivers: Driver[] = [
  {
    id: "driver-berlin-1",
    name: "Walter Grant",
    licenseNumber: "D0K328",
    licenseExpiry: "2027-01-28",
    experienceYears: 17,
    languagesSpoken: ["English", "Russian", "Swedish", "Portuguese"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "14:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "06:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "03:00",
            to: "07:00"
          },
          {
            from: "14:00",
            to: "18:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "01:00",
            to: "05:00"
          },
          {
            from: "05:00",
            to: "09:00"
          }
        ],
      }
    ],
    ratings: 3.6,
    phone: "+228 525-314-8401",
    email: "walter.grant@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/berlin/walter-grant.jpg",
    specialties: ["Long-Distance Driving"],
    vehicleTypesCertified: ["Motorcoach", "Electric Vehicle", "SUV", "Convertible"],
  },
  {
    id: "driver-berlin-2",
    name: "Steven Kim",
    licenseNumber: "L3B707",
    licenseExpiry: "2027-06-08",
    experienceYears: 5,
    languagesSpoken: ["English", "Greek", "Czech"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "20:00",
            to: "24:00"
          },
          {
            from: "11:00",
            to: "14:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "02:00",
            to: "06:00"
          },
          {
            from: "17:00",
            to: "19:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "20:00",
            to: "24:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "03:00",
            to: "05:00"
          }
        ],
      }
    ],
    ratings: 4.5,
    phone: "+330 623-370-4407",
    email: "steven.kim@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/berlin/steven-kim.jpg",
    specialties: ["Airport Transfers", "Tour Guide Driver", "Security Detail", "Luxury Car Specialist"],
    vehicleTypesCertified: ["Electric Vehicle", "Sedan", "Motorcoach"],
  },
  {
    id: "driver-berlin-3",
    name: "Ariana Hall",
    licenseNumber: "U7L318",
    licenseExpiry: "2029-06-26",
    experienceYears: 16,
    languagesSpoken: ["English", "Polish", "German", "Portuguese"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "16:00",
            to: "21:00"
          },
          {
            from: "12:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Thursday",
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
            from: "05:00",
            to: "09:00"
          },
          {
            from: "02:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "09:00",
            to: "11:00"
          },
          {
            from: "11:00",
            to: "13:00"
          }
        ],
      }
    ],
    ratings: 4.9,
    phone: "+363 537-970-1771",
    email: "ariana.hall@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/berlin/ariana-hall.jpg",
    specialties: ["Airport Transfers", "VIP Transport", "Long-Distance Driving"],
    vehicleTypesCertified: ["Sedan", "Sports Car", "Luxury SUV"],
  },
  {
    id: "driver-berlin-4",
    name: "Emma Lopez",
    licenseNumber: "M5Q673",
    licenseExpiry: "2026-08-19",
    experienceYears: 7,
    languagesSpoken: ["English", "Finnish", "Italian"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "21:00",
            to: "24:00"
          },
          {
            from: "10:00",
            to: "12:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "00:00",
            to: "03:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "07:00",
            to: "09:00"
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
      }
    ],
    ratings: 4.4,
    phone: "+657 757-839-8128",
    email: "emma.lopez@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/berlin/emma-lopez.jpg",
    specialties: ["Event Transportation", "Luxury Car Specialist"],
    vehicleTypesCertified: ["SUV", "Motorcoach", "Electric Vehicle", "Sports Car"],
  },
  {
    id: "driver-berlin-5",
    name: "Allison Dean",
    licenseNumber: "A0E546",
    licenseExpiry: "2029-04-19",
    experienceYears: 2,
    languagesSpoken: ["English", "Danish", "Swedish"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "11:00",
            to: "15:00"
          },
          {
            from: "12:00",
            to: "16:00"
          }
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "09:00",
            to: "13:00"
          },
          {
            from: "05:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "13:00",
            to: "17:00"
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
            from: "06:00",
            to: "11:00"
          },
          {
            from: "00:00",
            to: "05:00"
          }
        ],
      }
    ],
    ratings: 4.2,
    phone: "+548 792-203-5867",
    email: "allison.dean@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/berlin/allison-dean.jpg",
    specialties: ["Airport Transfers", "Luxury Car Specialist", "VIP Transport"],
    vehicleTypesCertified: ["Electric Vehicle", "Limousine", "SUV"],
  }
];
