import { Tour } from "@/lib/interfaces/services/tours";

export const sydneyTours: Tour[] = [
  {
    title: "Sydney Opera House VIP Backstage Tour",
    description:
      "Gain exclusive access to Australia's most iconic building with a backstage tour of the Sydney Opera House led by theater professionals, including areas normally closed to the public.",
    images: [
      "/images/tours/sydney/opera-house-backstage.jpg",
      "/images/tours/sydney/opera-house-view.jpg",
    ],
    duration: "2.5 hours",
    price: "$165",
    rating: 4.9,
    tags: ["Architecture", "Performing Arts", "VIP Access"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we see a performance during the tour?",
        answer:
          "The backstage tour does not include a performance, but you'll often see rehearsals in progress and stagehands preparing for upcoming shows. We can arrange discounted performance tickets on request to complement your backstage experience.",
      },
    ],
  },
  {
    title: "Hidden Sydney Beaches & Coastal Hike",
    description:
      "Discover secluded beaches and breathtaking viewpoints on Sydney's spectacular coastline with a local guide, accessing hidden coves and swimming spots known only to residents.",
    images: [
      "/images/tours/sydney/hidden-beach.jpg",
      "/images/tours/sydney/coastal-path.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Beaches", "Hiking", "Swimming"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How difficult is the hiking portion?",
        answer:
          "The coastal walk is moderately challenging with some steep sections and beach access points. We cover approximately 7km (4.3 miles) over varied terrain including boardwalks, steps, and some rock scrambling. Good fitness and comfortable walking shoes are recommended.",
      },
      {
        question: "Are there facilities at the beaches?",
        answer:
          "Most of the hidden beaches have basic facilities like restrooms and picnic areas, but some are more remote with limited amenities. We recommend bringing water, snacks, and sunscreen. Our guide will ensure you have everything you need for a comfortable day outdoors.",
      },
    ],
  },
  {
    title: "Sydney's Historic Pubs & Brewery Tour",
    description:
      "Experience Sydney's vibrant pub culture with a guided tour of historic pubs and local breweries, sampling craft beers and learning about the city's brewing heritage.",
    images: [
      "/images/tours/sydney/historic-pub.jpg",
      "/images/tours/sydney/brewery-tour.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Food & Drink", "History", "Local Culture"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Are non-alcoholic options available?",
        answer:
          "Yes, we offer non-alcoholic beverages at each stop, including local sodas and juices. Please inform us in advance if you prefer non-alcoholic options.",
      },
      {
        question: "What types of beers will we sample?",
        answer:
          "The tour includes tastings of a variety of craft beers from local breweries, including IPAs, stouts, lagers, and seasonal specialties. We can accommodate most dietary preferences with advance notice.",
      },
    ],
  },
];

export default sydneyTours;
