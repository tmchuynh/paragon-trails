import { Driver } from "@/lib/interfaces/people/staff";

export const tokyojapanasiaPacificDrivers: Driver[] = [
  {
    id: "driver-tokyo-1",
    name: "Joel Moore",
    licenseNumber: "Q5F352",
    licenseExpiry: "2027-06-04",
    experienceYears: 15,
    languagesSpoken: ["Vietnamese", "Japanese", "Thai"],
    available: [],
    ratings: 4.9,
    phone: "+467 906-153-5526",
    email: "joel.moore@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/tokyo/joel-moore.jpg",
    specialties: ["Airport Transfers"],
    vehicleTypesCertified: [
      "Limousine",
      "Electric Vehicle",
      "Van",
      "Luxury SUV",
    ],
  },
  {
    id: "driver-tokyo-2",
    name: "Thandiwe Jansen",
    licenseNumber: "Q1G486",
    licenseExpiry: "2028-11-12",
    experienceYears: 3,
    languagesSpoken: ["Thai", "Chinese", "Tagalog", "Vietnamese"],
    available: [],
    ratings: 4.2,
    phone: "+276 770-262-6129",
    email: "thandiwe.jansen@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/tokyo/thandiwe-jansen.jpg",
    specialties: [
      "Event Transportation",
      "Night Shift",
      "VIP Transport",
      "Corporate Chauffeur",
    ],
    vehicleTypesCertified: ["Sedan", "Van", "Motorcoach"],
  },
  {
    id: "driver-tokyo-3",
    name: "Sophia Singh",
    licenseNumber: "T3W138",
    licenseExpiry: "2027-02-21",
    experienceYears: 7,
    languagesSpoken: ["Japanese", "Korean", "Bengali"],
    available: [],
    ratings: 3.9,
    phone: "+835 892-167-7485",
    email: "sophia.singh@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/tokyo/sophia-singh.jpg",
    specialties: [
      "Event Transportation",
      "Airport Transfers",
      "Luxury Car Specialist",
    ],
    vehicleTypesCertified: ["Sports Car", "Luxury SUV", "Limousine"],
  },
  {
    id: "driver-tokyo-4",
    name: "Walter Bennett",
    licenseNumber: "K2U987",
    licenseExpiry: "2028-03-23",
    experienceYears: 11,
    languagesSpoken: ["Thai", "Hindi", "Vietnamese"],
    available: [],
    ratings: 4.7,
    phone: "+642 347-379-7404",
    email: "walter.bennett@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/tokyo/walter-bennett.jpg",
    specialties: ["Night Shift"],
    vehicleTypesCertified: ["Van", "Convertible", "Luxury SUV"],
  },
  {
    id: "driver-tokyo-5",
    name: "Nicole Martin",
    licenseNumber: "Y8U495",
    licenseExpiry: "2030-09-10",
    experienceYears: 17,
    languagesSpoken: ["Vietnamese", "Japanese", "Malay"],
    available: [],
    ratings: 4.8,
    phone: "+729 428-317-6474",
    email: "nicole.martin@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/tokyo/nicole-martin.jpg",
    specialties: ["Event Transportation", "Night Shift", "Corporate Chauffeur"],
    vehicleTypesCertified: ["Sports Car", "Convertible"],
  },
  {
    id: "driver-tokyo-6",
    name: "Samantha Hall",
    licenseNumber: "N3U072",
    licenseExpiry: "2026-08-19",
    experienceYears: 5,
    languagesSpoken: ["Korean", "Urdu", "Indonesian"],
    available: [],
    ratings: 3.9,
    phone: "+421 456-994-2641",
    email: "samantha.hall@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/tokyo/samantha-hall.jpg",
    specialties: ["Luxury Car Specialist", "Long-Distance Driving"],
    vehicleTypesCertified: [
      "Electric Vehicle",
      "Convertible",
      "Sports Car",
      "Motorcoach",
    ],
  },
  {
    id: "driver-tokyo-7",
    name: "Harold Anderson",
    licenseNumber: "X2S111",
    licenseExpiry: "2029-12-25",
    experienceYears: 17,
    languagesSpoken: ["Bengali", "Vietnamese", "Malay", "Japanese"],
    available: [],
    ratings: 3.7,
    phone: "+364 568-400-4312",
    email: "harold.anderson@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/tokyo/harold-anderson.jpg",
    specialties: ["Corporate Chauffeur"],
    vehicleTypesCertified: ["Electric Vehicle", "Luxury SUV", "Convertible"],
  },
  {
    id: "driver-tokyo-8",
    name: "Deborah Coleman",
    licenseNumber: "F8I447",
    licenseExpiry: "2029-05-14",
    experienceYears: 15,
    languagesSpoken: ["Tagalog", "Hindi", "Korean", "Indonesian"],
    available: [],
    ratings: 4.7,
    phone: "+464 590-854-9452",
    email: "deborah.coleman@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/tokyo/deborah-coleman.jpg",
    specialties: ["Long-Distance Driving", "Tour Guide Driver"],
    vehicleTypesCertified: ["Limousine", "Luxury SUV"],
  },
  {
    id: "driver-tokyo-9",
    name: "Henry Coleman",
    licenseNumber: "G5P138",
    licenseExpiry: "2029-02-13",
    experienceYears: 6,
    languagesSpoken: ["Bengali", "Korean", "Thai"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "16:00",
            to: "21:00",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "12:00",
            to: "14:00",
          },
          {
            from: "21:00",
            to: "24:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "12:00",
            to: "14:00",
          },
          {
            from: "00:00",
            to: "04:00",
          },
        ],
      },
    ],
    ratings: 3.9,
    phone: "+691 921-582-4002",
    email: "henry.coleman@paragontrailsdrivers.com",
    photoUrl:
      "https://paragon-trails-driver-images.com/tokyo/henry-coleman.jpg",
    specialties: ["VIP Transport", "Security Detail", "Tour Guide Driver"],
    vehicleTypesCertified: ["Sports Car", "SUV", "Electric Vehicle"],
  },
  {
    id: "driver-tokyo-10",
    name: "Liam Ali",
    licenseNumber: "W2V914",
    licenseExpiry: "2027-08-15",
    experienceYears: 14,
    languagesSpoken: ["Chinese", "Indonesian", "Hindi"],
    available: [
      {
        day: "Friday",
        availableHours: [
          {
            from: "02:00",
            to: "07:00",
          },
          {
            from: "12:00",
            to: "15:00",
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
          {
            from: "08:00",
            to: "11:00",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "01:00",
            to: "05:00",
          },
          {
            from: "15:00",
            to: "18:00",
          },
        ],
      },
    ],
    ratings: 3.9,
    phone: "+609 286-584-5687",
    email: "liam.ali@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/tokyo/liam-ali.jpg",
    specialties: [
      "Security Detail",
      "Airport Transfers",
      "Corporate Chauffeur",
      "VIP Transport",
    ],
    vehicleTypesCertified: ["Luxury SUV", "Sedan", "Motorcoach"],
  },
  {
    id: "driver-tokyo-11",
    name: "Nora Parker",
    licenseNumber: "T7G443",
    licenseExpiry: "2026-03-27",
    experienceYears: 8,
    languagesSpoken: ["Indonesian", "Malay", "Thai"],
    available: [
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "12:00",
            to: "17:00",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "00:00",
            to: "02:00",
          },
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "18:00",
            to: "21:00",
          },
          {
            from: "21:00",
            to: "23:00",
          },
        ],
      },
    ],
    ratings: 3.6,
    phone: "+433 958-495-6151",
    email: "nora.parker@paragontrailsdrivers.com",
    photoUrl: "https://paragon-trails-driver-images.com/tokyo/nora-parker.jpg",
    specialties: [
      "Luxury Car Specialist",
      "Airport Transfers",
      "VIP Transport",
    ],
    vehicleTypesCertified: ["Convertible"],
  },
];
