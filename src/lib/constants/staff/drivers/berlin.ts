import { Driver } from "@/lib/interfaces/people/staff";

export const berlingermanynorthernEuropeDrivers: Driver[] = [
  {
    id: "driver-berlin-1",
    name: "Kazuki Kang",
    licenseNumber: "A7Y183",
    licenseExpiry: "2029-01-19",
    experienceYears: 9,
    languagesSpoken: ["ko"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "07:00",
            to: "10:00"
          },
          {
            from: "09:00",
            to: "12:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
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
            from: "18:00",
            to: "23:00"
          },
          {
            from: "06:00",
            to: "11:00"
          }
        ],
      }
    ],
    ratings: 4.7,
    phone: "+358 712-713-3244",
    email: "kazuki.kang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/berlin/kazuki-kang.jpg",
    specialties: ["Airport Transfers", "Security Detail", "Night Shift"],
    vehicleTypesCertified: ["SUV", "Sports Car"],
  },
  {
    id: "driver-berlin-2",
    name: "Robert Kang",
    licenseNumber: "V0J331",
    licenseExpiry: "2027-05-19",
    experienceYears: 13,
    languagesSpoken: ["zh", "hi", "ja"],
    available: [
      {
        day: "Sunday",
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
            from: "04:00",
            to: "08:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00"
          }
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "03:00",
            to: "05:00"
          }
        ],
      }
    ],
    ratings: 4.1,
    phone: "+782 308-805-1781",
    email: "robert.kang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/berlin/robert-kang.jpg",
    specialties: ["Luxury Car Specialist", "Long-Distance Driving", "Airport Transfers"],
    vehicleTypesCertified: ["Van", "Sports Car", "Convertible"],
  },
  {
    id: "driver-berlin-3",
    name: "Matthew Sanchez",
    licenseNumber: "C0U977",
    licenseExpiry: "2027-05-15",
    experienceYears: 11,
    languagesSpoken: ["es", "fr"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "04:00",
            to: "09:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "07:00",
            to: "10:00"
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
            from: "20:00",
            to: "24:00"
          },
          {
            from: "15:00",
            to: "20:00"
          }
        ],
      }
    ],
    ratings: 3.7,
    phone: "+500 610-796-7385",
    email: "matthew.sanchez@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/berlin/matthew-sanchez.jpg",
    specialties: ["Tour Guide Driver", "Night Shift", "Event Transportation", "Long-Distance Driving"],
    vehicleTypesCertified: ["Sports Car", "Convertible", "Electric Vehicle"],
  },
  {
    id: "driver-berlin-4",
    name: "Sofia Moore",
    licenseNumber: "Q6F260",
    licenseExpiry: "2027-08-16",
    experienceYears: 19,
    languagesSpoken: ["de"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "18:00",
            to: "21:00"
          },
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
            from: "19:00",
            to: "24:00"
          },
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
            from: "15:00",
            to: "17:00"
          }
        ],
      }
    ],
    ratings: 3.6,
    phone: "+544 896-739-6216",
    email: "sofia.moore@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/berlin/sofia-moore.jpg",
    specialties: ["Corporate Chauffeur", "Luxury Car Specialist", "Airport Transfers", "Long-Distance Driving"],
    vehicleTypesCertified: ["Sports Car", "Limousine", "Luxury SUV"],
  },
  {
    id: "driver-berlin-5",
    name: "Sakura Hoang",
    licenseNumber: "J3G553",
    licenseExpiry: "2030-12-01",
    experienceYears: 7,
    languagesSpoken: ["ru", "tr", "ja"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "19:00",
            to: "22:00"
          },
          {
            from: "20:00",
            to: "23:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "18:00",
            to: "20:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "10:00",
            to: "15:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "12:00",
            to: "17:00"
          },
          {
            from: "01:00",
            to: "03:00"
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
      }
    ],
    ratings: 3.9,
    phone: "+700 299-603-2945",
    email: "sakura.hoang@example.com",
    photoUrl: "https://paragon-trails-driver-images.com/berlin/sakura-hoang.jpg",
    specialties: ["Luxury Car Specialist", "Security Detail"],
    vehicleTypesCertified: ["Sports Car", "Limousine", "Electric Vehicle"],
  }
];
