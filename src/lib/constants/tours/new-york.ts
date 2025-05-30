import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const newYorkTours: Tour[] = [
  {
    title: "Hidden New York: Secret Spaces & Underground Art",
    description:
      "Discover the city beneath the city with exclusive access to secret subway stations, abandoned tunnels, and underground art installations rarely seen by tourists or even locals.",
    images: [
      "/images/tours/new-york/city-hall-station.jpg",
      "/images/tours/new-york/underground-art.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Underground", "History", "Art"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("new-york", "art").name,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Is this tour physically demanding?",
        answer:
          "The tour involves moderate walking (about 2 miles total) and climbing several flights of stairs. While we maintain a comfortable pace with breaks, participants should be able to handle standing for periods of time and navigating urban terrain including some narrow passages.",
      },
      {
        question: "Are there any age restrictions for this tour?",
        answer:
          "This tour is suitable for ages 12 and up. Children under 18 must be accompanied by an adult. Due to the nature of the underground spaces, we do not recommend this tour for very young children or those with mobility issues.",
      },
    ],
  },
  {
    title: "Hidden Gems of Brooklyn",
    description:
      "Discover the artistic neighborhoods and culinary delights of Brooklyn that most tourists never see.",
    images: [
      "/images/tours/nyc/brooklyn-bridge.jpg",
      "/images/tours/nyc/williamsburg.jpg",
    ],
    duration: "5 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Food", "Art", "Local"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("new-york", "local").name,
    tourCategoryId: "local",
    faqs: [
      {
        question: "Does this tour include food tastings?",
        answer:
          "Yes, we'll stop at 4-5 local eateries for samples of Brooklyn's best cuisine.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Absolutely! This tour is family-friendly and includes activities that children will enjoy, such as street art exploration and local snacks.",
      },
    ],
  },
  {
    title: "NYC Highlights Walking Tour",
    description:
      "Explore the iconic landmarks of Manhattan including Times Square, Central Park, and Fifth Avenue with a knowledgeable local guide.",
    images: [
      "/images/tours/nyc/times-square.jpg",
      "/images/tours/nyc/central-park.jpg",
    ],
    duration: "4 hours",
    price: "$49",
    rating: 4.8,
    tags: ["Walking", "Urban", "Landmarks"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("new-york", "historical").name,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer: "Yes, this tour is designed to be engaging for all ages.",
      },
      {
        question: "What should I wear for the tour?",
        answer:
          "We recommend comfortable walking shoes and weather-appropriate clothing, as we will be outdoors for the duration of the tour.",
      },
    ],
  },
  {
    title: "Manhattan Skyline Helicopter & VIP Observation Deck",
    description:
      "Experience New York from extraordinary perspectives with a private helicopter tour over Manhattan landmarks, followed by champagne at exclusive top-floor observation decks with zero waiting time.",
    images: [
      "/images/tours/new-york/helicopter-view.jpg",
      "/images/tours/new-york/edge-observation.jpg",
    ],
    duration: "3 hours",
    price: "$395",
    rating: 4.8,
    tags: ["Aerial", "Skyline", "Luxury"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("new-york", "luxury").name,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Can we request specific flight paths over landmarks?",
        answer:
          "Yes, while flight paths must adhere to FAA regulations, we can customize the route to focus on landmarks of particular interest to your group. Please note that weather conditions may occasionally require route adjustments for safety.",
      },
      {
        question: "What is the maximum group size for the helicopter tour?",
        answer:
          "Our helicopter can accommodate up to 6 passengers per flight, ensuring an intimate experience with unobstructed views. Larger groups can be accommodated by scheduling multiple flights.",
      },
    ],
  },
  {
    title: "Culinary Tour of Queens: Global Flavors",
    description:
      "Embark on a culinary journey through Queens, sampling authentic dishes from around the world in one of NYC's most diverse boroughs.",
    images: [
      "/images/tours/nyc/queens-food.jpg",
      "/images/tours/nyc/queens-markets.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Food", "Cultural", "Diverse"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("new-york", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Are dietary restrictions accommodated?",
        answer:
          "Yes, we can accommodate most dietary restrictions with advance notice. Please inform us of any allergies or preferences when booking.",
      },
      {
        question: "What types of cuisine will we sample?",
        answer:
          "The tour includes a variety of cuisines reflecting Queens' diversity, such as Indian, Colombian, Greek, and more. Each stop features a unique dish representative of that culture.",
      },
    ],
  },
];

export default newYorkTours;
