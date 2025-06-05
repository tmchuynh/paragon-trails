import { Driver } from "@/lib/interfaces/people/staff";

export const dublinirelandnorthernEuropeDrivers: Driver[] = [
  {
    id: "driver-dublin-1",
    name: "Mia Brooks",
    licenseNumber: "S4Z502",
    licenseExpiry: "2027-08-04",
    experienceYears: 8,
    languagesSpoken: ["English", "Norwegian", "Polish", "Danish"],
    available: [
      {
        day: "Sunday",
        availableHours: [
          {
            from: "04:00",
            to: "08:00",
          },
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "21:00",
            to: "24:00",
          },
          {
            from: "16:00",
            to: "21:00",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "02:00",
            to: "05:00",
          },
        ],
      },
    ],
    ratings: 4.1,
    phone: "+667 579-791-8014",
    email: "mia.brooks@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/dublin/mia-brooks.jpg",
    specialties: ["Luxury Car Specialist", "Night Shift"],
    vehicleTypesCertified: ["Luxury SUV"],
  },
  {
    id: "driver-dublin-2",
    name: "Michelle Khan",
    licenseNumber: "J4U373",
    licenseExpiry: "2027-01-07",
    experienceYears: 13,
    languagesSpoken: ["English", "Norwegian", "Russian"],
    available: [
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "03:00",
            to: "08:00",
          },
          {
            from: "01:00",
            to: "06:00",
          },
        ],
      },
      {
        day: "Monday",
        availableHours: [
          {
            from: "19:00",
            to: "23:00",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "10:00",
            to: "13:00",
          },
          {
            from: "18:00",
            to: "22:00",
          },
        ],
      },
    ],
    ratings: 4.2,
    phone: "+648 707-387-9149",
    email: "michelle.khan@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/dublin/michelle-khan.jpg",
    specialties: ["Long-Distance Driving", "Security Detail", "Night Shift"],
    vehicleTypesCertified: ["Limousine", "Convertible", "Sedan", "Motorcoach"],
  },
  {
    id: "driver-dublin-3",
    name: "Mary Taylor",
    licenseNumber: "X3S201",
    licenseExpiry: "2028-05-15",
    experienceYears: 8,
    languagesSpoken: ["English", "Danish", "Spanish"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "05:00",
            to: "07:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "04:00",
            to: "06:00",
          },
          {
            from: "02:00",
            to: "06:00",
          },
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "03:00",
            to: "05:00",
          },
          {
            from: "15:00",
            to: "20:00",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "16:00",
            to: "21:00",
          },
        ],
      },
    ],
    ratings: 3.7,
    phone: "+894 191-661-4021",
    email: "mary.taylor@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/dublin/mary-taylor.jpg",
    specialties: ["Corporate Chauffeur", "Tour Guide Driver", "VIP Transport"],
    vehicleTypesCertified: ["Motorcoach"],
  },
  {
    id: "driver-dublin-4",
    name: "Aisha Keller",
    licenseNumber: "X0B386",
    licenseExpiry: "2027-04-18",
    experienceYears: 10,
    languagesSpoken: ["English", "Russian", "Norwegian"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "17:00",
            to: "22:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "08:00",
            to: "13:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "10:00",
            to: "12:00",
          },
          {
            from: "17:00",
            to: "22:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "06:00",
            to: "08:00",
          },
          {
            from: "04:00",
            to: "08:00",
          },
        ],
      },
    ],
    ratings: 3.5,
    phone: "+750 382-178-5309",
    email: "aisha.keller@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/dublin/aisha-keller.jpg",
    specialties: ["Night Shift", "Airport Transfers"],
    vehicleTypesCertified: ["Limousine", "SUV"],
  },
  {
    id: "driver-dublin-5",
    name: "Brenda Mason",
    licenseNumber: "T0G078",
    licenseExpiry: "2027-07-02",
    experienceYears: 15,
    languagesSpoken: ["English", "Spanish", "Czech", "Italian"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "08:00",
            to: "13:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "12:00",
            to: "16:00",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "02:00",
            to: "07:00",
          },
        ],
      },
    ],
    ratings: 4.7,
    phone: "+388 101-111-4783",
    email: "brenda.mason@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/dublin/brenda-mason.jpg",
    specialties: ["Tour Guide Driver"],
    vehicleTypesCertified: ["Luxury SUV", "Limousine", "Convertible", "Van"],
  },
];
