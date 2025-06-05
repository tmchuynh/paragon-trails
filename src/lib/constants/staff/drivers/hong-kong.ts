import { Driver } from "@/lib/interfaces/people/staff";

export const hongKongchinaasiaPacificDrivers: Driver[] = [
  {
    id: "driver-hong-kong-1",
    name: "Alexa Sutton",
    licenseNumber: "Z4D181",
    licenseExpiry: "2028-03-25",
    experienceYears: 9,
    languagesSpoken: ["Indonesian", "Bengali", "Vietnamese", "Malay"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "03:00",
            to: "05:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "04:00",
            to: "07:00"
          },
          {
            from: "06:00",
            to: "11:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "12:00",
            to: "15:00"
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
      }
    ],
    ratings: 3.8,
    phone: "+869 685-410-8787",
    email: "alexa.sutton@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/46.jpg",
    specialties: ["Airport Transfers", "VIP Transport", "Event Transportation"],
    vehicleTypesCertified: ["Convertible"],
  },
  {
    id: "driver-hong-kong-2",
    name: "Zoe Nakamura",
    licenseNumber: "Q8Z598",
    licenseExpiry: "2029-11-14",
    experienceYears: 17,
    languagesSpoken: ["Tagalog", "Chinese", "Korean"],
    available: [
      {
        day: "Wednesday",
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
            from: "12:00",
            to: "14:00"
          },
          {
            from: "12:00",
            to: "14:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "02:00",
            to: "06:00"
          }
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "17:00",
            to: "21:00"
          }
        ],
      }
    ],
    ratings: 4.3,
    phone: "+736 498-341-6238",
    email: "zoe.nakamura@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/9.jpg",
    specialties: ["Night Shift", "Tour Guide Driver"],
    vehicleTypesCertified: ["Sports Car", "Sedan", "Limousine", "Electric Vehicle"],
  },
  {
    id: "driver-hong-kong-3",
    name: "Priya Jansen",
    licenseNumber: "M5S457",
    licenseExpiry: "2026-06-26",
    experienceYears: 14,
    languagesSpoken: ["Vietnamese", "Bengali", "Urdu"],
    available: [
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
        day: "Sunday",
        availableHours: [
          {
            from: "02:00",
            to: "05:00"
          }
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "14:00",
            to: "18:00"
          }
        ],
      }
    ],
    ratings: 4.7,
    phone: "+724 871-613-4369",
    email: "priya.jansen@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/59.jpg",
    specialties: ["Corporate Chauffeur"],
    vehicleTypesCertified: ["Electric Vehicle", "Van", "Limousine"],
  },
  {
    id: "driver-hong-kong-4",
    name: "Ella Ellis",
    licenseNumber: "T6Y304",
    licenseExpiry: "2029-11-17",
    experienceYears: 9,
    languagesSpoken: ["Chinese", "Urdu", "Thai", "Tagalog"],
    available: [
      {
        day: "Thursday",
        availableHours: [
          {
            from: "16:00",
            to: "20:00"
          }
        ],
      },
      {
        day: "Wednesday",
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
            from: "02:00",
            to: "04:00"
          }
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "02:00",
            to: "07:00"
          }
        ],
      }
    ],
    ratings: 3.6,
    phone: "+444 231-960-7726",
    email: "ella.ellis@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/54.jpg",
    specialties: ["Long-Distance Driving", "Security Detail"],
    vehicleTypesCertified: ["Van"],
  },
  {
    id: "driver-hong-kong-5",
    name: "Edward Johnson",
    licenseNumber: "Y5S963",
    licenseExpiry: "2028-04-17",
    experienceYears: 12,
    languagesSpoken: ["Urdu", "Japanese", "Korean", "Vietnamese"],
    available: [
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
        day: "Saturday",
        availableHours: [
          {
            from: "17:00",
            to: "21:00"
          }
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "16:00",
            to: "18:00"
          }
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "17:00",
            to: "22:00"
          }
        ],
      }
    ],
    ratings: 4.3,
    phone: "+807 699-924-9667",
    email: "edward.johnson@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/14.jpg",
    specialties: ["Event Transportation", "Security Detail"],
    vehicleTypesCertified: ["Sports Car", "SUV"],
  }
];
