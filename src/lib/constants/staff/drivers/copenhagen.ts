import { Driver } from "@/lib/interfaces/people/staff";

export const copenhagendenmarknorthernEuropeDrivers: Driver[] = [
  {
    id: "driver-copenhagen-1",
    name: "Susan White",
    licenseNumber: "R8G162",
    licenseExpiry: "2028-04-04",
    experienceYears: 9,
    languagesSpoken: ["ja"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "00:00",
            to: "02:00"
          },
          {
            from: "10:00",
            to: "12:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "14:00",
            to: "18:00"
          },
          {
            from: "21:00",
            to: "24:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "11:00",
            to: "16:00"
          }
        ],
      }
    ],
    ratings: 4.5,
    phone: "+242 780-133-1622",
    email: "susan.white@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/copenhagen/susan-white.jpg",
    specialties: ["Security Detail", "VIP Transport"],
    vehicleTypesCertified: ["Van"],
  },
  {
    id: "driver-copenhagen-2",
    name: "Daniel Wilson",
    licenseNumber: "S7E138",
    licenseExpiry: "2027-10-26",
    experienceYears: 16,
    languagesSpoken: ["fr", "ko"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "13:00",
            to: "16:00"
          },
          {
            from: "21:00",
            to: "23:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "04:00",
            to: "08:00"
          },
          {
            from: "01:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "08:00",
            to: "13:00"
          }
        ],
      }
    ],
    ratings: 4.7,
    phone: "+365 832-162-5434",
    email: "daniel.wilson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/copenhagen/daniel-wilson.jpg",
    specialties: ["Security Detail", "Long-Distance Driving", "Tour Guide Driver", "Event Transportation"],
    vehicleTypesCertified: ["Van"],
  },
  {
    id: "driver-copenhagen-3",
    name: "Xia Kang",
    licenseNumber: "G2X271",
    licenseExpiry: "2027-08-02",
    experienceYears: 18,
    languagesSpoken: ["ar", "ru"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "14:00",
            to: "19:00"
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
            from: "12:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "09:00",
            to: "12:00"
          }
        ],
      }
    ],
    ratings: 3.9,
    phone: "+563 972-687-2452",
    email: "xia.kang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/copenhagen/xia-kang.jpg",
    specialties: ["VIP Transport", "Airport Transfers", "Tour Guide Driver"],
    vehicleTypesCertified: ["Motorcoach", "Sedan", "Limousine"],
  },
  {
    id: "driver-copenhagen-4",
    name: "Mia Harris",
    licenseNumber: "H7X724",
    licenseExpiry: "2026-05-11",
    experienceYears: 6,
    languagesSpoken: ["es", "zh", "ru"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "09:00",
            to: "14:00"
          },
          {
            from: "00:00",
            to: "02:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "09:00",
            to: "14:00"
          },
          {
            from: "20:00",
            to: "24:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "08:00",
            to: "10:00"
          }
        ],
      }
    ],
    ratings: 4.2,
    phone: "+190 484-875-4909",
    email: "mia.harris@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/copenhagen/mia-harris.jpg",
    specialties: ["Event Transportation", "Corporate Chauffeur"],
    vehicleTypesCertified: ["Sedan"],
  },
  {
    id: "driver-copenhagen-5",
    name: "John Jackson",
    licenseNumber: "M8W688",
    licenseExpiry: "2026-09-14",
    experienceYears: 5,
    languagesSpoken: ["fr", "hi"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "13:00",
            to: "16:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "19:00",
            to: "22:00"
          },
          {
            from: "01:00",
            to: "04:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "01:00",
            to: "04:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "13:00",
            to: "15:00"
          }
        ],
      }
    ],
    ratings: 4.1,
    phone: "+252 366-790-1068",
    email: "john.jackson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/copenhagen/john-jackson.jpg",
    specialties: ["Luxury Car Specialist", "Night Shift"],
    vehicleTypesCertified: ["Sedan", "Sports Car"],
  },
  {
    id: "driver-copenhagen-6",
    name: "Ying Thompson",
    licenseNumber: "I7M478",
    licenseExpiry: "2027-05-25",
    experienceYears: 13,
    languagesSpoken: ["pt"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "08:00",
            to: "12:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "06:00",
            to: "10:00"
          },
          {
            from: "14:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "13:00",
            to: "15:00"
          },
          {
            from: "04:00",
            to: "09:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "00:00",
            to: "03:00"
          }
        ],
      }
    ],
    ratings: 4.5,
    phone: "+190 360-125-1893",
    email: "ying.thompson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/copenhagen/ying-thompson.jpg",
    specialties: ["Event Transportation", "Airport Transfers"],
    vehicleTypesCertified: ["SUV", "Sedan", "Sports Car"],
  },
  {
    id: "driver-copenhagen-7",
    name: "Mia Das",
    licenseNumber: "I7K731",
    licenseExpiry: "2027-02-20",
    experienceYears: 11,
    languagesSpoken: ["pt", "zh", "en"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "01:00",
            to: "05:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "00:00",
            to: "03:00"
          },
          {
            from: "06:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "16:00",
            to: "19:00"
          }
        ],
      }
    ],
    ratings: 4.4,
    phone: "+825 475-747-7477",
    email: "mia.das@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/copenhagen/mia-das.jpg",
    specialties: ["Corporate Chauffeur"],
    vehicleTypesCertified: ["Sports Car", "Electric Vehicle", "SUV"],
  },
  {
    id: "driver-copenhagen-8",
    name: "Sofia Williams",
    licenseNumber: "W6F587",
    licenseExpiry: "2028-06-20",
    experienceYears: 9,
    languagesSpoken: ["zh", "hi"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "14:00",
            to: "19:00"
          },
          {
            from: "11:00",
            to: "14:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "12:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "18:00",
            to: "23:00"
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
    ratings: 4.8,
    phone: "+227 592-294-5182",
    email: "sofia.williams@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/copenhagen/sofia-williams.jpg",
    specialties: ["Event Transportation", "Night Shift"],
    vehicleTypesCertified: ["Van", "Sedan", "Limousine", "Luxury SUV"],
  },
  {
    id: "driver-copenhagen-9",
    name: "Wei Nakamura",
    licenseNumber: "V7X660",
    licenseExpiry: "2027-03-27",
    experienceYears: 11,
    languagesSpoken: ["tr", "hi", "es"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "16:00",
            to: "20:00"
          },
          {
            from: "01:00",
            to: "04:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "01:00",
            to: "04:00"
          },
          {
            from: "09:00",
            to: "14:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "21:00",
            to: "24:00"
          },
          {
            from: "12:00",
            to: "16:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "18:00",
            to: "20:00"
          },
          {
            from: "18:00",
            to: "23:00"
          }
        ],
      }
    ],
    ratings: 4.5,
    phone: "+767 520-330-4134",
    email: "wei.nakamura@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/copenhagen/wei-nakamura.jpg",
    specialties: ["VIP Transport"],
    vehicleTypesCertified: ["Motorcoach", "Van", "Electric Vehicle"],
  }
];
