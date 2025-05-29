import { Tour } from "@/lib/interfaces/services/tours";
export const capeTownTours: Tour[] = [
  {
    title: "Table Mountain Sunrise Hike",
    description:
      "Begin your Cape Town adventure with a guided sunrise hike up iconic Table Mountain via a secret trail that avoids crowds, rewarded with breathtaking panoramic views and a mountain-top breakfast.",
    images: [
      "/images/tours/cape-town/table-mountain-sunrise.jpg",
      "/images/tours/cape-town/table-mountain-view.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Hiking", "Sunrise", "Nature"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "David Ndlovu",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult is the hike?",
        answer:
          "This is a moderately challenging hike requiring reasonable fitness. We ascend approximately 700 meters elevation over 2.5km using a scenic route with several stops. While no technical climbing is involved, some sections are steep and rocky.",
      },
    ],
  },
  {
    title: "Cape Peninsula & Penguin Experience",
    description:
      "Journey along the stunning Cape Peninsula to Cape Point, visit the African penguin colony at Boulders Beach, and enjoy a scenic coastal drive along Chapman's Peak with wildlife spotting opportunities.",
    images: [
      "/images/tours/cape-town/cape-point.jpg",
      "/images/tours/cape-town/penguins-boulders.jpg",
    ],
    duration: "Full day",
    price: "$125",
    rating: 4.8,
    tags: ["Coastal", "Wildlife", "Scenic Drive"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Sophie Williams",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "Will we be able to swim with the penguins?",
        answer:
          "For the penguins' protection, direct swimming with them isn't permitted, but at Boulders Beach you can swim in adjacent areas where penguins often waddle and swim nearby. Our guide knows the best spots for respectful penguin encounters.",
      },
    ],
  },
];

export default capeTownTours;
