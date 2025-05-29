import { Tour } from "@/lib/interfaces/services/tours";

export const melbourneTours: Tour[] = [
  {
    title: "Hidden Laneways & Street Art Culture",
    description:
      "Discover Melbourne's famous laneway culture with a renowned street artist guiding you through colorful alleys, explaining techniques, artist stories, and the evolution of Melbourne's dynamic urban art scene. Includes a hands-on stencil art workshop.",
    images: [
      "/images/tours/melbourne/street-art.jpg",
      "/images/tours/melbourne/hidden-laneways.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Street Art", "Culture", "Workshop"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Adrian 'Ghost' Parker",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is the street art workshop suitable for beginners?",
        answer:
          "Absolutely! Our workshop is designed for all skill levels, with step-by-step guidance from professional street artists. You'll learn basic stencil cutting and spray techniques to create your own piece of art to take home. All materials are provided, including eco-friendly water-based spray paints. The workshop takes place in a designated legal space for street art practice.",
      },
      {
        question: "What should I wear for the workshop?",
        answer:
          "We recommend wearing comfortable clothes that you don't mind getting a bit paint-splattered. Closed-toe shoes are also advisable, as we will be working outdoors in urban settings.",
      },
    ],
  },
  {
    title: "Great Ocean Road & Twelve Apostles Adventure",
    description:
      "Experience one of the world's most scenic coastal drives with a naturalist guide. Visit the iconic Twelve Apostles limestone formations, ancient rainforests, and pristine beaches while learning about unique wildlife and shipwreck history.",
    images: [
      "/images/tours/melbourne/twelve-apostles.jpg",
      "/images/tours/melbourne/great-ocean-road.jpg",
    ],
    duration: "Full day",
    price: "$145",
    rating: 4.8,
    tags: ["Coastal Drive", "Natural Wonders", "Photography"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Emma Sullivan",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How long is the drive along the Great Ocean Road?",
        answer:
          "The journey from Melbourne to the Twelve Apostles is approximately 4 hours each way, but we make the experience engaging with frequent scenic stops including Loch Ard Gorge, London Bridge, Apollo Bay, and Great Otway National Park. Our comfortable vehicle has large windows designed for sightseeing, and we limit group size to ensure everyone gets window seats for optimal viewing and photography.",
      },
      {
        question: "What should I bring for the day trip?",
        answer:
          "We recommend wearing comfortable clothing and sturdy shoes suitable for walking. Bring a hat, sunscreen, and a refillable water bottle. A light jacket is advisable as coastal weather can change quickly. We provide snacks and refreshments, but you may want to bring a packed lunch or purchase food at one of the stops.",
      },
    ],
  },
  {
    title: "Melbourne Coffee Culture & Hidden Cafés",
    description:
      "Explore Melbourne's world-famous coffee scene with a professional barista. Visit specialty roasters, learn cupping techniques, discover secret cafés in unexpected locations, and understand what makes Melbourne's coffee culture unique globally.",
    images: [
      "/images/tours/melbourne/coffee-tasting.jpg",
      "/images/tours/melbourne/hidden-cafe.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Coffee", "Food", "Cultural"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "James Taylor, Champion Barista",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "I don't drink coffee. Is this tour still worth it for me?",
        answer:
          "While coffee is our focus, this tour explores Melbourne's broader café culture and the stories behind these unique spaces. Non-coffee drinkers can enjoy specialty teas, hot chocolate, and other beverages at each stop. Many of our visitors who don't drink coffee still find the tour fascinating for its cultural insights, architectural discoveries, and the stories of entrepreneurship behind Melbourne's distinctive café scene.",
      },
      {
        question: "Will we learn how to make coffee?",
        answer:
          "Yes! The tour includes a hands-on session where you can try your hand at making espresso drinks using professional equipment. Our barista guide will demonstrate techniques for brewing the perfect cup, and you'll have the chance to practice steaming milk and pouring latte art. No prior experience is necessary, and all equipment is provided.",
      },
    ],
  },
  {
    title: "Yarra Valley Wine & Artisanal Food Journey",
    description:
      "Sample premium cool-climate wines at boutique vineyards in the scenic Yarra Valley. Meet winemakers, enjoy exclusive cellar door tastings, and indulge in a gourmet lunch featuring local produce paired perfectly with regional wines.",
    images: [
      "/images/tours/melbourne/yarra-valley-vineyard.jpg",
      "/images/tours/melbourne/wine-tasting.jpg",
    ],
    duration: "8 hours",
    price: "$195",
    rating: 4.9,
    tags: ["Wine", "Gourmet", "Scenic"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Sarah McLachlan, Sommelier",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many wineries do we visit?",
        answer:
          "We visit 4-5 carefully selected vineyards representing different styles and approaches to winemaking. Rather than rushing through many locations, we focus on quality experiences with private tastings, vineyard walks with winemakers, and behind-the-scenes glimpses of production facilities. The tour includes premium reserve tastings not available to the general public and focuses on the Yarra Valley's signature cool-climate Chardonnay, Pinot Noir, and sparkling wines.",
      },
      {
        question: "Is lunch included in the tour?",
        answer:
          "Yes, a gourmet lunch is included at one of the valley's top restaurants, featuring seasonal local produce paired with wines from the region. Dietary restrictions can be accommodated with prior notice.",
      },
    ],
  },
  {
    title: "Australian Wildlife Encounter & Penguin Parade",
    description:
      "Get up close with iconic Australian wildlife at a conservation sanctuary before witnessing the famous Phillip Island penguin parade, where hundreds of little penguins return from the ocean to their burrows at sunset.",
    images: [
      "/images/tours/melbourne/koala-encounter.jpg",
      "/images/tours/melbourne/penguin-parade.jpg",
    ],
    duration: "10 hours",
    price: "$165",
    rating: 4.8,
    tags: ["Wildlife", "Penguins", "Conservation"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Kate Wilson, Wildlife Biologist",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "What animals might we see on this tour?",
        answer:
          "At the wildlife sanctuary, you'll encounter koalas, kangaroos (with opportunities for supervised close interaction), wombats, Tasmanian devils, dingoes, and various native bird species. On Phillip Island, the main attraction is the evening 'penguin parade' featuring thousands of Little Penguins (the world's smallest penguin species). We often spot wild wallabies, cape barren geese, and native water birds on the island as well. Our wildlife biologist guide provides expert insight into behavior and conservation efforts.",
      },
      {
        question: "How long is the penguin parade?",
        answer:
          "The penguin parade lasts approximately 1.5 hours, starting at sunset when the penguins return from their day at sea. We arrive early to secure prime viewing spots and enjoy a brief introduction about the penguins' life cycle and conservation efforts. The experience is designed to minimize disturbance to the penguins while providing an unforgettable wildlife encounter.",
      },
    ],
  },
  {
    title: "Aboriginal Melbourne: Indigenous Cultural Heritage",
    description:
      "Explore Melbourne through the perspective of its first inhabitants with an Indigenous guide sharing Dreamtime stories, traditional uses of native plants, and the ongoing cultural significance of sites throughout the city and Royal Botanic Gardens.",
    images: [
      "/images/tours/melbourne/indigenous-culture.jpg",
      "/images/tours/melbourne/aboriginal-art.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Indigenous", "Cultural", "Historical"],
 
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Uncle Dave Wandin",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How does this tour support Indigenous communities?",
        answer:
          "This tour is 100% Indigenous owned and operated. Your guide is a respected Elder who shares knowledge according to cultural protocols. A percentage of tour proceeds supports Indigenous youth education programs and cultural preservation initiatives. The experience includes products from Indigenous-owned businesses, and we facilitate connections to ethical sources for Aboriginal art and crafts should you wish to purchase culturally authentic items that properly compensate Indigenous artists.",
      },
      {
        question: "What should I wear for the tour?",
        answer:
          "Wear comfortable clothing suitable for walking, as we will be exploring both urban and natural environments. Closed-toe shoes are recommended. The tour takes place in various weather conditions, so dress in layers and bring a hat and sunscreen if it's sunny.",
      },
    ],
  },
  {
    title: "Melbourne Photography Masterclass",
    description:
      "Perfect your photography skills at Melbourne's most photogenic locations with guidance from a professional architectural and urban photographer. Learn techniques for capturing cityscapes, street scenes, and iconic buildings in the best light.",
    images: [
      "/images/tours/melbourne/photography-workshop.jpg",
      "/images/tours/melbourne/cityscape-photography.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.7,
    tags: ["Photography", "Architecture", "Skills"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Mark Richards",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What photography skill level is required?",
        answer:
          "This workshop accommodates all skill levels from smartphone photographers to experienced DSLR users. Our instructor provides personalized guidance based on your equipment and experience. Beginners will learn composition principles and basic settings, while advanced photographers can focus on challenging lighting techniques, long exposures, and creative architectural perspectives. The small group size (maximum 6) ensures individual attention.",
      },
      {
        question: "What should I bring?",
        answer:
          "Please bring your camera (DSLR, mirrorless, or smartphone), a tripod if you have one, and any lenses you prefer to use. We recommend comfortable walking shoes, weather-appropriate clothing, and a refillable water bottle. If you have specific photography goals or challenges, feel free to discuss them with the instructor at the start of the workshop.",
      },
    ],
  },
  {
    title: "Melbourne Progressive Dining Experience",
    description:
      "Indulge in a moving feast across Melbourne's diverse culinary neighborhoods. Enjoy different courses at multiple acclaimed restaurants, from innovative modern Australian cuisine to authentic ethnic specialties, with expert food and wine pairings.",
    images: [
      "/images/tours/melbourne/fine-dining.jpg",
      "/images/tours/melbourne/food-tour.jpg",
    ],
    duration: "5 hours",
    price: "$225",
    rating: 4.8,
    tags: ["Gourmet", "Dining", "Wine"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Michael Greene",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What type of restaurants will we visit?",
        answer:
          "We visit 4-5 restaurants ranging from hidden local favorites to award-winning establishments. The experience is designed as a progressive meal with different courses at each location: perhaps innovative appetizers at a modern Australian restaurant, handmade pasta at an Italian trattoria, signature main courses at a chef-hatted destination, and dessert at a specialized patisserie. Each venue offers something distinctive that represents Melbourne's diverse culinary landscape, with appropriate wine pairings at each stop.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate most dietary restrictions with prior notice. Please inform us of any allergies or preferences when booking, and we will ensure that alternative dishes are provided at each restaurant to suit your needs while still allowing you to enjoy the full experience.",
      },
    ],
  },
  {
    title: "Melbourne's Historic Pubs & Craft Beer Tour",
    description:
      "Explore Melbourne's vibrant pub culture with a local guide, visiting historic pubs, hidden bars, and craft breweries. Sample a variety of local beers, learn about the city's brewing history, and enjoy traditional pub fare.",
    images: [
      "/images/tours/melbourne/historic-pub.jpg",
      "/images/tours/melbourne/craft-beer.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.6,
    tags: ["Beer", "Pubs", "Local Experience"],
 
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Tommy O'Connor, Beer Historian",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Are non-alcoholic options available?",
        answer:
          "Yes, we offer non-alcoholic beer tastings and soft drinks at each stop for those who prefer not to consume alcohol. The focus remains on exploring Melbourne's pub culture and history.",
      },
      {
        question: "What should I wear for the pub tour?",
        answer:
          "Dress casually and comfortably. We will be walking between venues, so wear comfortable shoes. Melbourne's pub scene is relaxed, so feel free to dress down.",
      },
    ],
  },
];

export default melbourneTours;
