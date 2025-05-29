import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const berlinTours: Tour[] = [
  {
    title: "Berlin Cold War History & Underground Bunkers",
    description:
      "Explore Berlin's dramatic Cold War history with visits to the Berlin Wall, Checkpoint Charlie, and exclusive access to declassified underground bunkers and escape tunnels from the divided city era.",
    images: [
      "/images/tours/berlin/berlin-wall.jpg",
      "/images/tours/berlin/cold-war-bunker.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["History", "Cold War", "Underground"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("berlin", "historical").name,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Are the underground bunkers accessible for everyone?",
        answer:
          "The bunker portion involves steep stairs and narrow passages with no elevator access. Those with mobility issues may find this challenging, but we can offer an alternative above-ground Cold War history route covering additional sites on request.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly and suitable for older children (10+). We provide age-appropriate historical context, but parents should be aware that some Cold War topics may be intense. Younger children may find the content less engaging.",
      },
      {
        question: "What should I wear for the tour?",
        answer:
          "We recommend comfortable walking shoes and weather-appropriate clothing, as we will be outdoors for part of the tour. The bunker can be cool and damp, so a light jacket is advisable.",
      },
    ],
  },
  {
    title: "Berlin's Alternative Scene & Street Art",
    description:
      "Discover Berlin's world-famous counterculture with an insider tour of street art, urban gardens, artist squats, and underground clubs in the trendy neighborhoods of Kreuzberg and Friedrichshain.",
    images: [
      "/images/tours/berlin/street-art.jpg",
      "/images/tours/berlin/kreuzberg.jpg",
    ],
    duration: "3 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Alternative", "Art", "Urban"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("berlin", "local").name,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Is this tour suitable for teenagers?",
        answer:
          "The tour is generally appropriate for older teenagers (16+) interested in contemporary culture and art. While we don't focus on controversial content, some street art may contain political themes or occasional mature imagery. Parents should use discretion based on their teen's maturity level.",
      },
      {
        question: "Will we visit any galleries or exhibitions?",
        answer:
          "Yes, we often include visits to local artist-run galleries or pop-up exhibitions showcasing emerging talent. However, the focus is primarily on outdoor street art and urban culture rather than formal gallery spaces.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Comfortable walking shoes are recommended, as we will be exploring neighborhoods on foot. Dress casually and be prepared for variable weather, as we may spend time outdoors in urban settings.",
      },
    ],
  },
  {
    title: "Berlin Food Tour: From Currywurst to Fine Dining",
    description:
      "Experience Berlin's diverse culinary scene with a guided food tour sampling iconic street foods like currywurst, local specialties, and fine dining at Michelin-starred restaurants.",
    images: [
      "/images/tours/berlin/currywurst.jpg",
      "/images/tours/berlin/fine-dining.jpg",
    ],
    duration: "5 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Food", "Culinary", "Local"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("berlin", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Are vegetarian options available?",
        answer:
          "Yes, we can accommodate vegetarians and vegans with advance notice. Please inform us of any dietary restrictions when booking.",
      },
      {
        question: "What types of food will we try?",
        answer:
          "The tour includes a variety of dishes from traditional currywurst and doner kebab to modern German cuisine and international influences. We also visit local markets and specialty shops.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "Yes, we recommend booking at least 24 hours in advance to secure your spot and ensure we can accommodate any dietary needs.",
      },
      {
        question: "What should I wear for the food tour?",
        answer:
          "Dress comfortably! We will be walking between venues, so wear comfortable shoes. Berlin's food scene is casual, so feel free to dress down.",
      },
    ],
  },
  {
    title: "Berlin's Historic Pubs & Beer Gardens",
    description:
      "Explore Berlin's vibrant beer culture with a guided tour of historic pubs, traditional beer gardens, and local breweries, sampling a variety of German beers and learning about the city's brewing history.",
    images: [
      "/images/tours/berlin/historic-pub.jpg",
      "/images/tours/berlin/beer-garden.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Culinary", "Local", "Nightlife"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("berlin", "nightlife").name,
    tourCategoryId: "nightlife",
    faqs: [
      {
        question: "Is this tour suitable for non-drinkers?",
        answer:
          "Yes, we can accommodate non-drinkers with soft drink options or non-alcoholic beers. Please inform us when booking if you prefer not to consume alcohol.",
      },
      {
        question: "What types of beers will we sample?",
        answer:
          "The tour includes a variety of local beers, including lagers, wheat beers, and seasonal brews. We also visit a brewery where you can learn about the brewing process.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "Yes, we recommend booking at least 24 hours in advance to secure your spot and ensure we can accommodate any special requests.",
      },
      {
        question: "What should I wear for the pub tour?",
        answer:
          "Dress casually! Berlin's pub scene is relaxed, so comfortable clothing and shoes are recommended as we will be walking between venues.",
      },
    ],
  },
  {
    title: "Berlin's Hidden Gardens & Parks",
    description:
      "Discover Berlin's secret green spaces with a guided tour of hidden gardens, tranquil parks, and urban oases, including the historic Tiergarten and lesser-known botanical gems.",
    images: [
      "/images/tours/berlin/tiergarten.jpg",
      "/images/tours/berlin/hidden-garden.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.6,
    tags: ["Nature", "Hidden Gems", "Walking Tour"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("berlin", "wellness").name,
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive activities and storytelling about Berlin's green spaces.",
      },
      {
        question: "What should I wear for the garden tour?",
        answer:
          "Comfortable walking shoes are recommended, as we will be exploring parks on foot. Dress in layers as the weather can change quickly in Berlin.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "Yes, we recommend booking at least 24 hours in advance to secure your spot and allow us to prepare for any special requests.",
      },
    ],
  },
];

export default berlinTours;
