import { Driver } from "@/lib/interfaces/people/staff";

export const melbourneaustraliaasiaPacificDrivers: Driver[] = [
  {
    id: "driver-melbourne-1",
    name: "William Brown",
    licenseNumber: "H4J999",
    licenseExpiry: "2029-10-10",
    experienceYears: 13,
    languagesSpoken: ["ar"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "12:00",
            to: "16:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
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
            from: "11:00",
            to: "14:00"
          },
          {
            from: "12:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "01:00",
            to: "04:00"
          }
        ],
      }
    ],
    ratings: 4.9,
    phone: "+459 981-860-2073",
    email: "william.brown@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/melbourne/william-brown.jpg",
    specialties: ["Night Shift"],
    vehicleTypesCertified: ["Limousine", "Electric Vehicle", "Sports Car"],
  },
  {
    id: "driver-melbourne-2",
    name: "Mei Thompson",
    licenseNumber: "B8O941",
    licenseExpiry: "2028-10-06",
    experienceYears: 14,
    languagesSpoken: ["en", "hi"],
    available: [
      {
        day: "Tuesday",
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
            from: "09:00",
            to: "12:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "18:00",
            to: "23:00"
          },
          {
            from: "12:00",
            to: "15:00"
          }
        ],
      }
    ],
    ratings: 4.6,
    phone: "+69 768-909-4901",
    email: "mei.thompson@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/melbourne/mei-thompson.jpg",
    specialties: ["Long-Distance Driving"],
    vehicleTypesCertified: ["Sports Car", "Electric Vehicle"],
  },
  {
    id: "driver-melbourne-3",
    name: "Yui Verma",
    licenseNumber: "K8R854",
    licenseExpiry: "2030-02-08",
    experienceYears: 15,
    languagesSpoken: ["hi"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "16:00",
            to: "18:00"
          },
          {
            from: "15:00",
            to: "18:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "07:00",
            to: "11:00"
          },
          {
            from: "19:00",
            to: "21:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "19:00",
            to: "24:00"
          },
          {
            from: "13:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "12:00",
            to: "17:00"
          }
        ],
      }
    ],
    ratings: 4.9,
    phone: "+443 344-863-5770",
    email: "yui.verma@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/melbourne/yui-verma.jpg",
    specialties: ["Luxury Car Specialist", "VIP Transport", "Event Transportation", "Tour Guide Driver"],
    vehicleTypesCertified: ["Sports Car", "Limousine", "Van"],
  },
  {
    id: "driver-melbourne-4",
    name: "Mark Huynh",
    licenseNumber: "S3C956",
    licenseExpiry: "2029-03-11",
    experienceYears: 9,
    languagesSpoken: ["es", "ja"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "05:00",
            to: "09:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "04:00",
            to: "08:00"
          },
          {
            from: "13:00",
            to: "17:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "07:00",
            to: "09:00"
          },
          {
            from: "10:00",
            to: "13:00"
          }
        ],
      }
    ],
    ratings: 4.1,
    phone: "+178 226-848-4474",
    email: "mark.huynh@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/melbourne/mark-huynh.jpg",
    specialties: ["Luxury Car Specialist", "Event Transportation", "Tour Guide Driver"],
    vehicleTypesCertified: ["Motorcoach"],
  },
  {
    id: "driver-melbourne-5",
    name: "Isabella Tanaka",
    licenseNumber: "T2K629",
    licenseExpiry: "2030-08-14",
    experienceYears: 10,
    languagesSpoken: ["fr", "ko", "ja"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "16:00",
            to: "18:00"
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
            from: "11:00",
            to: "14:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "19:00",
            to: "21:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "12:00",
            to: "14:00"
          },
          {
            from: "21:00",
            to: "23:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "17:00",
            to: "21:00"
          },
          {
            from: "12:00",
            to: "14:00"
          }
        ],
      }
    ],
    ratings: 4.3,
    phone: "+74 866-665-7938",
    email: "isabella.tanaka@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/melbourne/isabella-tanaka.jpg",
    specialties: ["Long-Distance Driving", "Security Detail"],
    vehicleTypesCertified: ["Sports Car", "Electric Vehicle", "Motorcoach"],
  },
  {
    id: "driver-melbourne-6",
    name: "Mia Sato",
    licenseNumber: "V4G378",
    licenseExpiry: "2028-10-10",
    experienceYears: 9,
    languagesSpoken: ["pt"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "04:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "08:00",
            to: "13:00"
          },
          {
            from: "17:00",
            to: "20:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "08:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "05:00",
            to: "08:00"
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
    ratings: 4.5,
    phone: "+322 914-598-8422",
    email: "mia.sato@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/melbourne/mia-sato.jpg",
    specialties: ["Security Detail", "Night Shift"],
    vehicleTypesCertified: ["Electric Vehicle", "Luxury SUV", "Convertible", "Motorcoach"],
  }
];
