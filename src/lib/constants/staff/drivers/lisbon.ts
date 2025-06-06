import { Driver } from "@/lib/interfaces/people/staff";

export const lisbonportugalmediterraneanDrivers: Driver[] = [
  {
    id: "driver-lisbon-1",
    name: "Jacob Jackson",
    licenseNumber: "A9Z992",
    licenseExpiry: "2027-05-01",
    experienceYears: 19,
    languagesSpoken: ["English", "German", "Norwegian", "French"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "16:00",
            to: "18:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "12:00",
            to: "16:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "01:00",
            to: "06:00",
          },
          {
            from: "03:00",
            to: "05:00",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "20:00",
            to: "24:00",
          },
          {
            from: "19:00",
            to: "22:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "05:00",
            to: "10:00",
          },
          {
            from: "21:00",
            to: "23:00",
          },
        ],
      },
    ],
    ratings: 3.7,
    phone: "+445 243-416-4739",
    email: "jacob.jackson@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/71.jpg",
    specialties: ["Night Shift", "Long-Distance Driving"],
    vehicleTypesCertified: ["Van", "Electric Vehicle"],
  },
  {
    id: "driver-lisbon-2",
    name: "Sofia Foster",
    licenseNumber: "S9Z540",
    licenseExpiry: "2028-08-16",
    experienceYears: 1,
    languagesSpoken: ["English", "French", "Finnish"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "15:00",
            to: "17:00",
          },
          {
            from: "14:00",
            to: "18:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "21:00",
            to: "24:00",
          },
          {
            from: "12:00",
            to: "15:00",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "02:00",
            to: "07:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "06:00",
            to: "11:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "04:00",
            to: "06:00",
          },
          {
            from: "11:00",
            to: "16:00",
          },
        ],
      },
    ],
    ratings: 4.1,
    phone: "+815 314-637-1316",
    email: "sofia.foster@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/32.jpg",
    specialties: ["Security Detail", "Night Shift", "Tour Guide Driver"],
    vehicleTypesCertified: ["Convertible", "Sports Car"],
  },
  {
    id: "driver-lisbon-3",
    name: "Austin Lawson",
    licenseNumber: "Z8I030",
    licenseExpiry: "2028-06-28",
    experienceYears: 4,
    languagesSpoken: ["English", "Norwegian", "Portuguese", "Russian"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "00:00",
            to: "03:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "10:00",
            to: "14:00",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "17:00",
            to: "19:00",
          },
          {
            from: "10:00",
            to: "13:00",
          },
        ],
      },
    ],
    ratings: 4.8,
    phone: "+866 780-126-7049",
    email: "austin.lawson@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/40.jpg",
    specialties: [
      "Event Transportation",
      "VIP Transport",
      "Luxury Car Specialist",
    ],
    vehicleTypesCertified: ["Electric Vehicle"],
  },
  {
    id: "driver-lisbon-4",
    name: "Virginia Johnson",
    licenseNumber: "W1L269",
    licenseExpiry: "2027-01-23",
    experienceYears: 5,
    languagesSpoken: ["English", "Norwegian", "Swedish"],
    available: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "17:00",
            to: "19:00",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "14:00",
            to: "17:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "12:00",
            to: "15:00",
          },
          {
            from: "04:00",
            to: "09:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "02:00",
            to: "06:00",
          },
          {
            from: "10:00",
            to: "15:00",
          },
        ],
      },
    ],
    ratings: 4.1,
    phone: "+530 274-592-3912",
    email: "virginia.johnson@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/women/19.jpg",
    specialties: ["Event Transportation", "Airport Transfers"],
    vehicleTypesCertified: ["Sedan", "Luxury SUV", "Motorcoach", "Sports Car"],
  },
  {
    id: "driver-lisbon-5",
    name: "Louis Fisher",
    licenseNumber: "D4K460",
    licenseExpiry: "2030-07-01",
    experienceYears: 10,
    languagesSpoken: ["English", "French", "Norwegian", "Russian"],
    available: [
      {
        day: "Saturday",
        availableHours: [
          {
            from: "05:00",
            to: "09:00",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "12:00",
            to: "15:00",
          },
          {
            from: "14:00",
            to: "17:00",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "11:00",
            to: "14:00",
          },
          {
            from: "05:00",
            to: "08:00",
          },
        ],
      },
    ],
    ratings: 4.4,
    phone: "+582 525-147-5684",
    email: "louis.fisher@paragontrailsdrivers.com",
    photoUrl: "https://randomuser.me/api/portraits/men/37.jpg",
    specialties: [
      "Corporate Chauffeur",
      "Tour Guide Driver",
      "Airport Transfers",
      "VIP Transport",
    ],
    vehicleTypesCertified: ["SUV", "Limousine"],
  },
];
