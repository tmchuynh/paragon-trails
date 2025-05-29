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
      {
        question: "What should I wear for the hike?",
        answer:
          "Wear comfortable, moisture-wicking clothing suitable for hiking, sturdy hiking shoes with good grip, and a light jacket as it can be chilly at the summit. Don't forget a hat, sunscreen, and plenty of water.",
      },
      {
        question: "Is breakfast included?",
        answer:
          "Yes, we provide a light breakfast at the summit, including coffee/tea, pastries, and fruit. If you have dietary restrictions, please inform us in advance.",
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
      {
        question: "Is lunch included in the tour?",
        answer:
          "Yes, we stop for lunch at a local restaurant with ocean views. Lunch is included in the tour price, but please inform us of any dietary restrictions in advance.",
      },
      {
        question: "What should I bring for the day?",
        answer:
          "Bring comfortable walking shoes, a hat, sunscreen, a camera, and a light jacket as it can be windy at Cape Point. Don't forget your swimsuit if you plan to swim at Boulders Beach!",
      },
    ],
  },
  {
    title: "Cape Winelands Gourmet Tour",
    description:
      "Explore the renowned Cape Winelands with a guided tour of Stellenbosch and Franschhoek, including wine tastings at award-winning vineyards, gourmet lunch at a local bistro, and stunning vineyard views.",
    images: [
      "/images/tours/cape-town/winelands.jpg",
      "/images/tours/cape-town/wine-tasting.jpg",
    ],
    duration: "6 hours",
    price: "$150",
    rating: 4.9,
    tags: ["Wine", "Gourmet", "Scenic"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Annelie van der Merwe",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Are children allowed on this tour?",
        answer:
          "Yes, children are welcome! We can provide non-alcoholic beverages and child-friendly meal options at the restaurant. Please let us know in advance if you have specific needs.",
      },
      {
        question: "What types of wines will we taste?",
        answer:
          "You'll sample a variety of local wines including Pinotage, Chenin Blanc, and Cabernet Sauvignon from some of the region's top wineries. Our guide will explain the unique characteristics of each wine.",
      },
      {
        question: "Is transportation included?",
        answer:
          "Yes, we provide comfortable round-trip transportation from your accommodation in Cape Town to the Winelands and back.",
      },
    ],
  },
  {
    title: "Cape Town City & Culture Tour",
    description:
      "Discover Cape Town's vibrant culture with a guided city tour, visiting the District Six Museum, Bo-Kaap neighborhood, and the bustling V&A Waterfront, including local art galleries and markets.",
    images: [
      "/images/tours/cape-town/district-six.jpg",
      "/images/tours/cape-town/bo-kaap.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.7,
    tags: ["Culture", "History", "Walking Tour"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Thandiwe Khumalo",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What can we expect to see in the Bo-Kaap?",
        answer:
          "You'll explore the colorful streets of Bo-Kaap, learn about its rich history, visit a local mosque, and have the opportunity to taste traditional Cape Malay cuisine at a local eatery.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Absolutely! This tour is family-friendly with engaging activities for children, including storytelling about Cape Town's history and culture.",
      },
      {
        question: "Do we need to book in advance?",
        answer:
          "Yes, we recommend booking at least 24 hours in advance to secure your spot and allow us to prepare for any special requests.",
      },
    ],
  },
  {
    title: "Cape Town Beaches & Coastal Walk",
    description:
      "Experience Cape Town's stunning coastline with a guided walk along the scenic Sea Point Promenade, Clifton and Camps Bay beaches, including a stop for refreshments at a beachfront café.",
    images: [
      "/images/tours/cape-town/sea-point.jpg",
      "/images/tours/cape-town/clifton-beach.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.6,
    tags: ["Nature", "Walking Tour", "Coastal"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Liam Jacobs",
    tourCategoryId: "nature",
    faqs: [
      {
        question: "Is this tour suitable for all ages?",
        answer:
          "Yes, this tour is family-friendly and designed to be enjoyable for visitors of all ages. We pace the walk to accommodate everyone.",
      },
      {
        question: "What should I wear for the beach walk?",
        answer:
          "Wear comfortable walking shoes, a hat, sunscreen, and bring a light jacket as it can get breezy along the coast. Don't forget your swimsuit if you plan to take a dip!",
      },
      {
        question: "Are refreshments included?",
        answer:
          "Yes, we stop at a beachfront café where you can purchase refreshments. The café offers a variety of snacks and drinks with beautiful ocean views.",
      },
    ],
  },
  {
    title: "Cape Town Sunset Cruise",
    description:
      "End your day with a relaxing sunset cruise around the Cape Town harbor, enjoying stunning views of Table Mountain, the city skyline, and the Atlantic Ocean while sipping on complimentary drinks.",
    images: [
      "/images/tours/cape-town/sunset-cruise.jpg",
      "/images/tours/cape-town/harbor-view.jpg",
    ],
    duration: "2 hours",
    price: "$60",
    rating: 4.8,
    tags: ["Cruise", "Sunset", "Relaxation"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Zola Moyo",
    tourCategoryId: "leisure",
    faqs: [
      {
        question: "What should I bring for the cruise?",
        answer:
          "Bring a light jacket as it can get chilly on the water, especially after sunset. Don't forget your camera to capture the beautiful views!",
      },
      {
        question: "Are drinks included in the cruise?",
        answer:
          "Yes, we provide complimentary drinks including wine, beer, and soft drinks. You can also purchase additional beverages on board.",
      },
      {
        question: "Is there a restroom on the boat?",
        answer:
          "Yes, our boat is equipped with a restroom for your convenience during the cruise.",
      },
    ],
  },
];

export default capeTownTours;
