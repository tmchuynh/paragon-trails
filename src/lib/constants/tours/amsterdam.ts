import { Tour } from "@/lib/interfaces/services/tours";
export const amsterdamTours: Tour[] = [
  {
    title: "Hidden Canals & Secret Gardens",
    description:
      "Explore Amsterdam beyond the tourist paths with a local historian, discovering hidden hofjes (courtyard gardens), secret canals, and architectural gems from the Golden Age that most visitors never see.",
    images: [
      "/images/tours/amsterdam/hidden-canals.jpg",
      "/images/tours/amsterdam/secret-hofjes.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Hidden Gems", "Architecture", "History"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Dr. Emma van der Berg",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 4km at a leisurely pace with plenty of stops. We walk along some narrow cobblestone paths and cross several small bridges, so comfortable footwear is recommended. The route is relatively flat but does include some stairs to access certain hidden courtyards.",
      },
    ],
  },
  {
    title: "Dutch Masters & Rijksmuseum After Hours",
    description:
      "Experience the world-renowned Rijksmuseum without the crowds during a special after-hours visit, with an art historian guide illuminating the stories behind Rembrandt's Night Watch, Vermeer's masterpieces, and other Dutch Golden Age treasures.",
    images: [
      "/images/tours/amsterdam/rijksmuseum-night-watch.jpg",
      "/images/tours/amsterdam/rijksmuseum-hall.jpg",
    ],
    duration: "2.5 hours",
    price: "$125",
    rating: 5.0,
    tags: ["Art", "Museum", "After Hours"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Professor Jan de Vries",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What makes this museum visit special?",
        answer:
          "Our after-hours access means you'll experience the Rijksmuseum with only a small group (maximum 12 guests), enjoying the masterpieces without the usual crowds. Your guide is a published art historian specializing in Dutch Golden Age painting who provides context and stories about the artists and their work that bring the collection to life. The quieter atmosphere allows for an intimate experience with world-famous artworks.",
      },
    ],
  },
  {
    title: "Amsterdam Culinary Journey",
    description:
      "Taste your way through Amsterdam's diverse food scene with a local chef as your guide. Sample Dutch classics like stroopwafels and herring alongside international influences that make Amsterdam's cuisine unique. Visit local markets, family-owned cafés, and specialty shops off the tourist track.",
    images: [
      "/images/tours/amsterdam/food-market.jpg",
      "/images/tours/amsterdam/dutch-cuisine.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Food", "Culinary", "Local Markets"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Chef Marieke Jansen",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Are dietary restrictions accommodated?",
        answer:
          "Yes, we can accommodate vegetarian, vegan, gluten-free, and most other dietary needs with advance notice. Please let us know your requirements when booking so we can arrange suitable alternatives.",
      },
    ],
  },
  {
    title: "Amsterdam by Bike: City Cycling Adventure",
    description:
      "Experience Amsterdam like a local – on two wheels! This guided cycling tour takes you through picturesque neighborhoods, along scenic canals, and past iconic landmarks. Learn about Amsterdam's cycling culture and discover why this city is the cycling capital of the world.",
    images: [
      "/images/tours/amsterdam/bike-canal.jpg",
      "/images/tours/amsterdam/cycling-group.jpg",
    ],
    duration: "3 hours",
    price: "$55",
    rating: 4.7,
    tags: ["Cycling", "Outdoor", "City Tour"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Lars Bakker",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need to be an experienced cyclist?",
        answer:
          "No prior experience is necessary. Amsterdam is flat and cyclist-friendly, with dedicated bike lanes throughout the city. We ride at a leisurely pace and our guides ensure everyone feels comfortable. Bikes are adjusted to fit each rider, and we provide a brief orientation before departing.",
      },
    ],
  },
  {
    title: "Evening Canal Cruise with Wine & Cheese",
    description:
      "Glide through Amsterdam's illuminated waterways on an intimate evening cruise aboard a traditional salon boat. Enjoy fine Dutch cheeses paired with selected wines as you pass under historic bridges and past magnificent 17th-century merchant houses glowing in the twilight.",
    images: [
      "/images/tours/amsterdam/canal-night-cruise.jpg",
      "/images/tours/amsterdam/canal-boat-wine.jpg",
    ],
    duration: "2 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Canal Cruise", "Evening", "Wine & Cheese"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Sophie van Dijk",
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "Is the boat covered in case of rain?",
        answer:
          "Yes, our salon boats have a transparent cover that can be used in case of inclement weather, allowing you to still enjoy the views while staying dry. The boats are also heated during colder months for your comfort.",
      },
    ],
  },
  {
    title: "Windmills, Cheese & Clogs: Dutch Countryside Day Trip",
    description:
      "Escape the city for a day exploring the quintessential Dutch countryside. Visit the historic windmill village of Zaanse Schans, learn the art of cheese-making at a traditional farm, and watch wooden clogs being crafted by hand using centuries-old techniques.",
    images: [
      "/images/tours/amsterdam/windmills-zaanse-schans.jpg",
      "/images/tours/amsterdam/cheese-farm.jpg",
    ],
    duration: "7 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Day Trip", "Countryside", "Traditional"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Peter Smit",
    tourCategoryId: "local-experience",
    faqs: [
      {
        question: "How far is the countryside from Amsterdam?",
        answer:
          "The Zaanse Schans windmill village is approximately 30 minutes by private coach from central Amsterdam. The countryside locations we visit are close enough for a comfortable day trip while offering a complete contrast to the urban environment of the city.",
      },
    ],
  },
  {
    title: "Red Light District: Culture & History Tour",
    description:
      "Discover the fascinating history and cultural significance of Amsterdam's famous Red Light District with an informed local guide. Learn about the area's evolution from medieval times to today, the Dutch approach to social issues, and the lives of those who work in this unique neighborhood.",
    images: [
      "/images/tours/amsterdam/red-light-canal.jpg",
      "/images/tours/amsterdam/old-church-square.jpg",
    ],
    duration: "2 hours",
    price: "$45",
    rating: 4.6,
    tags: ["Cultural", "History", "Adults Only"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Thomas Visser",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this tour respectful to the workers in the area?",
        answer:
          "Absolutely. We maintain a respectful distance from working areas and never photograph the workers. Our guides are trained to discuss the subject matter factually and without sensationalism, focusing on the historical, cultural, and social aspects of the district. We support ethical tourism practices that respect both the local community and visitors.",
      },
    ],
  },
];

export default amsterdamTours;
