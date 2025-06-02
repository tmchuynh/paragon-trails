import { Tour } from "@/lib/interfaces/services/tours";
export const barcelonaTours: Tour[] = [
  {
    title: "Gaudí Masterpieces & Modernist Barcelona",
    description:
      "Experience Barcelona's extraordinary architectural heritage with priority access to Sagrada Familia, Park Güell, and Casa Batlló. Learn how Antoni Gaudí's visionary designs revolutionized architecture and defined Barcelona's unique aesthetic with insights from an architectural historian.",
    city: "Barcelona",
    country: "Spain",
    region: "Catalonia",
    images: [
      "/images/tours/barcelona/sagrada-familia.jpg",
      "/images/tours/barcelona/park-guell.jpg",
    ],
    duration: "7 hours",
    price: "$115",
    rating: 4.9,
    tags: ["Architecture", "Gaudí", "Modernism"],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    tourCategoryId: "cultural",
    inclusions: [
      "Skip-the-line entry tickets to Sagrada Familia, Park Güell, and Casa Batlló",
      "Professional architectural historian guide",
      "Small group size (maximum 10 participants)",
      "Audio headsets for clear guide communication",
      "Bottled water",
      "Children's activity materials (ages 6-12)",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Food and beverages not listed",
      "Personal expenses",
      "Gratuities (optional)",
      "Transportation between sites (metro or taxi)",
    ],
    itinerary: [
      "9:00 AM: Meet your guide at Plaça de Catalunya",
      "9:30 AM: Guided tour of Casa Batlló",
      "11:00 AM: Visit to Casa Milà (La Pedrera) exterior",
      "11:30 AM: Metro to Sagrada Familia",
      "12:00 PM: In-depth guided tour of Sagrada Familia",
      "1:30 PM: Lunch break (at own expense)",
      "2:30 PM: Travel to Park Güell",
      "3:00 PM: Explore Park Güell with guided commentary",
      "4:30 PM: Tour conclusion",
      "5:00 PM: Optional free time in Park Güell",
      "5:30 PM: Return to central Barcelona via metro",
      "6:00 PM: Tour ends at Plaça de Catalunya",
    ],
    faqs: [
      {
        question:
          "Does this tour include inside visits to all Gaudí buildings?",
        answer:
          "Yes, this comprehensive tour includes pre-reserved entrance tickets and guided interior visits to Sagrada Familia, Park Güell's monumental zone, and Casa Batlló. We also view Casa Milà (La Pedrera) and other modernist landmarks from the outside. The skip-the-line access saves valuable time, allowing us to explore more sites in greater depth.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour involves approximately 3-4 km (2-2.5 miles) of walking throughout the day, including stairs, slopes, and standing during building tours. We take a comfortable pace with breaks, but comfortable walking shoes are essential. For guests with mobility concerns, please contact us in advance as we can modify certain portions of the itinerary.",
      },
      {
        question: "Is there time for taking photos?",
        answer:
          "Absolutely! We build in dedicated photo time at each location, and our guide will suggest the best vantage points and interesting details to capture. Photography is permitted in all buildings we visit, though flash photography is restricted in some areas of Sagrada Familia.",
      },
      {
        question: "Are children likely to enjoy this tour?",
        answer:
          "Yes, our guides are skilled at engaging younger visitors with the colorful, fantastical elements of Gaudí's work. Children often love the dragon at Park Güell, the skeletal features of Casa Batlló, and the forest-like columns of Sagrada Familia. We provide customized children's activity materials for ages 6-12 to enhance their experience.",
      },
    ],
    availableDates: [
      "2024-01-15",
      "2024-01-22",
      "2024-01-29",
      "2024-02-05",
      "2024-02-12",
      "2024-02-19",
      "2024-02-26",
      "2024-03-04",
      "2024-03-11",
      "2024-03-18",
      "2024-03-25",
    ],
    highlights: [
      "Skip-the-line access to Sagrada Familia, Park Güell, and Casa Batlló",
      "Guided interior visits with an architectural historian",
      "Explore the monumental zone of Park Güell",
      "See Casa Milà (La Pedrera) and other modernist landmarks",
      "Learn about Gaudí's life and design philosophy",
      "Enjoy dedicated photo opportunities at each site",
    ],
    meetingPoint: {
      address: "Plaça de Catalunya, 1, 08002 Barcelona, Spain",
      coordinates: {
        latitude: 41.3879,
        longitude: 2.16992,
      },
      instructions:
        "Meet your guide at the fountain in the center of Plaça de Catalunya. Look for the guide holding a sign with 'Gaudí Tour' written on it.",
    },
  },
  {
    title: "Barcelona Tapas & Wine Walking Tour",
    description:
      "Discover Barcelona's culinary soul through its tapas culture, visiting authentic venues in the Gothic Quarter and El Born neighborhoods. Sample over 15 traditional tapas paired with Spanish wines and local beverages while learning about Catalan food traditions.",
    city: "Barcelona",
    country: "Spain",
    region: "Catalonia",
    images: [
      "/images/tours/barcelona/tapas-variety.jpg",
      "/images/tours/barcelona/wine-tasting.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Food", "Wine", "Walking"],
    inclusions: [
      "Guided walking tour of Gothic Quarter and El Born",
      "Tastings at 4 authentic tapas venues",
      "Approximately 15 different tapas and pintxos varieties",
      "4-5 Spanish wines (cava, white, red, sweet dessert wine)",
      "Local vermut (vermouth) tasting",
      "Traditional Catalan digestifs",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages not listed",
      "Personal expenses",
      "Gratuities (optional)",
    ],
    itinerary: [
      "5:00 PM: Meet your guide at Plaça del Pi",
      "5:15 PM: Start with a glass of vermut and olives at a local bar",
      "5:45 PM: Visit a traditional tapas bar for patatas bravas and pan con tomate",
      "6:15 PM: Sample seafood pintxos at a Basque-style bar",
      "6:45 PM: Enjoy a selection of cured meats and cheeses with local wines",
      "7:15 PM: Conclude with dessert tapas and a sweet wine at a historic tavern",
      "7:45 PM: Tour conclusion",
      "8:00 PM: Optional free time to explore the area",
      "8:30 PM: Tour ends at Plaça del Pi",
    ],
    availableDates: [
      "2024-01-15",
      "2024-01-22",
      "2024-01-29",
      "2024-02-05",
      "2024-02-12",
      "2024-02-19",
      "2024-02-26",
    ],
    highlights: [
      "Experience authentic Catalan tapas culture",
      "Sample over 15 different tapas and pintxos varieties",
      "Taste 4-5 Spanish wines including cava and vermut",
      "Visit 4 distinct tapas venues in the Gothic Quarter and El Born",
      "Learn about Catalan food traditions from a local guide",
    ],
    meetingPoint: {
      address: "Plaça del Pi, 08002 Barcelona, Spain",
      coordinates: {
        latitude: 41.3809,
        longitude: 2.1734,
      },
      instructions:
        "Meet your guide at the fountain in the center of Plaça del Pi. Look for the guide holding a sign with 'Tapas Tour' written on it.",
    },
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many food and drink tastings are included?",
        answer:
          "The tour includes tastings at 4 distinct venues with approximately 15 different tapas and pintxos varieties. You'll sample 4-5 Spanish wines (including cava, white, red, and sweet dessert wine), vermut (local vermouth), and traditional Catalan digestifs. The amount of food served equals a substantial dinner, so come hungry!",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate vegetarian, pescatarian, gluten-free, and most common allergies with advance notice. Unfortunately, strict vegan or kosher diets cannot be fully accommodated on the standard tour, but we offer specialized tours for these dietary needs. Please inform us of any restrictions when booking.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 1.5 km (1 mile) at a very leisurely pace with plenty of stops. We spend most of the time seated at tapas establishments enjoying food and drink. The route is largely flat with some minor inclines on medieval streets in the Gothic Quarter.",
      },
      {
        question: "Is this tour suitable for non-drinkers?",
        answer:
          "Yes, we can provide non-alcoholic alternatives including Spanish craft sodas, juices, and specialty non-alcoholic options. The focus is equally on the food and cultural experience, so non-drinkers will still enjoy a full experience. Please let us know your preference when booking.",
      },
    ],
  },
  {
    title: "Gothic Quarter & Roman Barcelona Hidden History",
    description:
      "Peel back 2,000 years of Barcelona's layered history with an archaeological expert. Discover hidden Roman ruins beneath medieval streets, access restricted historical sites, and explore the atmospheric Gothic Quarter through the eyes of the ancient Romans, medieval merchants, and Inquisition-era residents who shaped this enigmatic district.",
    city: "Barcelona",
    country: "Spain",
    region: "Catalonia",
    images: [
      "/images/tours/barcelona/roman-ruins.jpg",
      "/images/tours/barcelona/gothic-quarter.jpg",
    ],
    duration: "3.5 hours",
    price: "$75",
    rating: 4.7,
    tags: ["History", "Roman", "Medieval"],
    inclusions: [
      "Expert archaeological guide",
      "Access to restricted historical sites",
      "Visit to the Temple of Augustus columns",
      "Entry to MUHBA (Barcelona History Museum) subterranean Roman ruins",
      "Guided exploration of the medieval royal palace complex",
      "Visit to the Jewish Quarter (El Call)",
      "Access to the ancient Roman forum location",
      "Entry to Barcelona Cathedral",
      "Visit to hidden courtyards and archaeological sites",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Food and beverages not listed",
      "Personal expenses",
      "Gratuities (optional)",
    ],
    itinerary: [
      "10:00 AM: Meet your guide at Plaça del Rei",
      "10:15 AM: Visit the Temple of Augustus columns",
      "10:45 AM: Explore the subterranean Roman ruins at MUHBA",
      "11:15 AM: Walk through the medieval royal palace complex",
      "11:45 AM: Discover the Jewish Quarter (El Call)",
      "12:15 PM: Visit the ancient Roman forum location",
      "12:45 PM: Explore Barcelona Cathedral and its cloisters",
      "1:15 PM: Visit hidden courtyards and archaeological sites",
      "1:45 PM: Tour conclusion",
    ],
    availableDates: [
      "2024-01-15",
      "2024-01-22",
      "2024-01-29",
      "2024-02-05",
      "2024-02-12",
      "2024-02-19",
      "2024-02-26",
      "2024-03-04",
      "2024-03-11",
      "2024-03-18",
      "2024-03-25",
    ],
    highlights: [
      "Access restricted historical sites not open to the public",
      "Explore the Temple of Augustus columns",
      "Visit subterranean Roman ruins at MUHBA",
      "Discover the medieval royal palace complex",
      "Walk through the atmospheric Jewish Quarter (El Call)",
      "See the ancient Roman forum location",
      "Visit Barcelona Cathedral and its cloisters",
      "Explore hidden courtyards and archaeological sites",
    ],
    meetingPoint: {
      address: "Plaça del Rei, 08002 Barcelona, Spain",
      coordinates: {
        latitude: 41.3833,
        longitude: 2.1761,
      },
      instructions:
        "Meet your guide at the fountain in the center of Plaça del Rei. Look for the guide holding a sign with 'Gothic Quarter Tour' written on it.",
    },
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Which historical sites will we visit?",
        answer:
          "The tour includes the Temple of Augustus columns, subterranean Roman ruins at MUHBA (Barcelona History Museum), medieval royal palace complex, the Jewish Quarter (El Call), the ancient Roman forum location, Barcelona Cathedral, and several hidden courtyards and archaeological sites typically overlooked by tourists. We also gain special access to a segment of Roman wall not open to the general public.",
      },
      {
        question: "How much historical knowledge do I need to enjoy this tour?",
        answer:
          "No prior knowledge is required! Our archaeological expert guides explain everything in an engaging, accessible way that brings history to life for everyone from complete beginners to history enthusiasts. The tour is chronologically organized to help you understand how Barcelona evolved from Roman Barcino to medieval capital to modern city.",
      },
      {
        question: "Is this tour appropriate for children?",
        answer:
          "Yes, this tour is suitable for curious children approximately 10 and older. Younger history enthusiasts are welcome, though parents should note that the tour involves detailed historical explanations. Our guides are skilled at engaging younger participants with stories of medieval knights, Roman soldiers, and the daily life of children in ancient times.",
      },
      {
        question: "Are there restroom breaks during the tour?",
        answer:
          "Yes, restroom facilities are available at the Barcelona History Museum and several other stops along our route. The tour is designed with comfort in mind, including a mid-tour refreshment break at a historic café where you can purchase drinks or snacks if desired.",
      },
    ],
  },
  {
    title: "Market to Table: Barcelona Cooking Experience",
    description:
      "Begin at the famous La Boqueria market selecting fresh ingredients with a professional chef, then proceed to a fully-equipped cooking school to prepare authentic Catalan dishes including paella, tapas, and crema catalana. Enjoy your creations with paired regional wines.",
    city: "Barcelona",
    country: "Spain",
    region: "Catalonia",
    images: [
      "/images/tours/barcelona/la-boqueria.jpg",
      "/images/tours/barcelona/cooking-class.jpg",
    ],
    duration: "5 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Cooking", "Market", "Culinary"],
    inclusions: [
      "Guided market visit at La Boqueria",
      "Professional chef instructor",
      "Hands-on cooking class in a fully-equipped kitchen",
      "Preparation of traditional Catalan dishes",
      "All ingredients and cooking equipment provided",
      "Lunch with wine pairings featuring your prepared dishes",
      "Recipes to take home",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages not listed",
      "Personal expenses",
      "Gratuities (optional)",
    ],
    itinerary: [
      "10:00 AM: Meet your chef at La Boqueria market",
      "10:15 AM: Guided market tour selecting fresh ingredients",
      "11:00 AM: Transfer to the cooking school",
      "11:30 AM: Hands-on cooking class begins",
      "1:30 PM: Enjoy your prepared dishes with wine pairings",
      "2:30 PM: Class concludes, recipes provided",
      "3:00 PM: Optional free time to explore the area",
      "3:30 PM: Tour ends at the cooking school",
    ],
    availableDates: [
      "2024-01-15",
      "2024-01-22",
      "2024-01-29",
      "2024-02-05",
      "2024-02-12",
      "2024-02-19",
      "2024-02-26",
      "2024-03-04",
      "2024-03-11",
      "2024-03-18",
      "2024-03-25",
    ],
    highlights: [
      "Guided market visit at La Boqueria selecting fresh ingredients",
      "Hands-on cooking class with a professional chef",
      "Prepare traditional Catalan dishes including paella and tapas",
      "Enjoy your creations with wine pairings",
      "Take home recipes to recreate the experience",
    ],
    meetingPoint: {
      address: "La Boqueria Market, La Rambla, 91, 08001 Barcelona, Spain",
      coordinates: {
        latitude: 41.3825,
        longitude: 2.1734,
      },
      instructions:
        "Meet your chef at the entrance of La Boqueria Market, near the main archway. Look for the chef holding a sign with 'Cooking Experience' written on it.",
    },
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to prepare?",
        answer:
          "The menu typically includes Catalan classics such as traditional seafood paella, pan con tomate, Spanish tortilla, seasonal vegetable dishes, and crema catalana for dessert. All recipes are provided to take home, along with tips for finding similar ingredients in your home country. The exact menu may vary slightly based on seasonal availability of ingredients at the market.",
      },
      {
        question: "Do I need cooking experience to participate?",
        answer:
          "Not at all! Our classes are designed for all skill levels from complete beginners to experienced home cooks. Each participant has their own cooking station, and our chef provides step-by-step guidance throughout the process. The techniques taught are accessible and can be replicated in a standard home kitchen.",
      },
      {
        question: "Is this class suitable for children?",
        answer:
          "Yes, this is a family-friendly experience suitable for children approximately 8 years and older. Younger chefs-in-training can participate with direct parental supervision. We have step stools for smaller children and assign age-appropriate tasks while ensuring everyone has fun and learns something new.",
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Yes, with advance notice we can accommodate vegetarian, pescatarian, gluten-free, and most common allergies. Please inform us of any dietary restrictions when booking so our chef can plan alternative recipes or ingredients that still provide an authentic Catalan culinary experience.",
      },
    ],
  },
  {
    title: "Montserrat Mountain, Monastery & Choir Experience",
    description:
      "Journey to the spectacular Montserrat mountain range to visit its legendary monastery, hear the world-famous boy's choir perform Gregorian chants, taste locally-produced liqueurs, and take a scenic mountain walk with breathtaking views of Catalonia.",
    city: "Montserrat",
    country: "Spain",
    region: "Catalonia",
    images: [
      "/images/tours/barcelona/montserrat-monastery.jpg",
      "/images/tours/barcelona/montserrat-views.jpg",
    ],
    duration: "8 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Monastery", "Mountain", "Day Trip"],
    availableDates: [
      "2024-01-15",
      "2024-01-22",
      "2024-01-29",
      "2024-02-05",
      "2024-02-12",
      "2024-02-19",
      "2024-02-26",
      "2024-03-04",
      "2024-03-11",
      "2024-03-18",
      "2024-03-25",
    ],
    inclusions: [
      "Round-trip transportation from Barcelona by air-conditioned coach",
      "Professional guide",
      "Entrance to Montserrat Monastery",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Lunch (light lunch included, but additional meals at own expense)",
      "Personal expenses",
      "Gratuities (optional)",
    ],
    meetingPoint: {
      address: "Carrer de Balmes, 5, 08007 Barcelona, Spain",
      coordinates: {
        latitude: 41.3888,
        longitude: 2.1679,
      },
      instructions:
        "Meet your guide at the entrance of the office located at Carrer de Balmes, 5. Look for the guide holding a sign with 'Montserrat Tour' written on it.",
    },
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "Will we definitely hear the boy's choir sing?",
        answer:
          "The Escolania boys' choir performs daily at 1:00 PM (except school holidays and Saturdays). Our tour is timed to ensure you experience this beautiful tradition. In the rare event that the choir is not performing due to special circumstances, we enhance the visit with additional monastery access and extended mountain walks to compensate for this portion of the experience.",
      },
      {
        question: "How difficult is the mountain walk portion?",
        answer:
          "We offer two options: an easy 30-minute walk on a relatively flat, wide path suitable for all fitness levels, or a moderate 1.5-hour hike with some elevation gain for those wanting more extensive views and natural experiences. Both options showcase the unique rock formations and panoramic vistas that make Montserrat famous. Comfortable walking shoes are recommended for either option.",
      },
      {
        question: "Is lunch included in this tour?",
        answer:
          "A light lunch of regional products is included, featuring local cheeses, cured meats, bread, and the opportunity to taste the unique herb liqueurs made by the monastery monks. For those desiring a more substantial meal, there are restaurants and cafés at the monastery where additional food can be purchased at your own expense.",
      },
      {
        question: "How long is the journey from Barcelona to Montserrat?",
        answer:
          "The journey to Montserrat takes approximately 1 hour each way by comfortable air-conditioned coach. We use this transit time to provide fascinating background information about Montserrat's history, legends, and significance in Catalan culture. The scenic route itself offers beautiful views of the Catalan countryside.",
      },
    ],
  },
  {
    title: "Evening Flamenco & Authentic Tablao Experience",
    description:
      "Experience the passionate art of flamenco in an intimate, historic tablao venue featuring top performers. Learn about this UNESCO-protected cultural tradition before enjoying front-row seats to a powerful live show, followed by tapas and wine at a nearby tavern.",
    city: "Barcelona",
    country: "Spain",
    region: "Catalonia",
    images: [
      "/images/tours/barcelona/flamenco-performance.jpg",
      "/images/tours/barcelona/tablao.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Flamenco", "Cultural", "Evening"],
    inclusions: [
      "Priority seating at an intimate flamenco tablao",
      "1 drink included (wine, beer, or soft drink)",
      "60-minute live flamenco performance",
      "Post-show tapas at a nearby traditional tavern",
      "Guided introduction to flamenco history and culture",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages not listed",
      "Personal expenses",
      "Gratuities (optional)",
    ],
    meetingPoint: {
      address: "Carrer de la Cera, 35, 08003 Barcelona, Spain",
      coordinates: {
        latitude: 41.3784,
        longitude: 2.1751,
      },
      instructions:
        "Meet your guide at the entrance of the tablao venue located at Carrer de la Cera, 35. Look for the guide holding a sign with 'Flamenco Experience' written on it.",
    },
    itinerary: [
      "7:00 PM: Meet your guide at the tablao venue",
      "7:15 PM: Guided introduction to flamenco history and culture",
      "7:30 PM: Enjoy a 60-minute live flamenco performance",
      "8:30 PM: Post-show tapas at a nearby traditional tavern",
      "9:30 PM: Tour conclusion",
      "10:00 PM: Optional free time to explore the area",
    ],
    availableDates: [
      "2024-01-15",
      "2024-01-22",
      "2024-01-29",
      "2024-02-05",
      "2024-02-12",
      "2024-02-19",
      "2024-02-26",
      "2024-03-04",
      "2024-03-11",
      "2024-03-18",
      "2024-03-25",
    ],
    highlights: [
      "Experience an authentic flamenco show in a historic tablao",
      "Learn about flamenco's UNESCO-protected cultural significance",
      "Enjoy front-row seats for an intimate performance",
      "Savor a drink of your choice during the show",
      "Indulge in traditional tapas at a nearby tavern after the performance",
    ],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What makes this flamenco experience authentic?",
        answer:
          "This experience takes place in a traditional tablao (flamenco venue) with a stage specifically designed for the acoustics of flamenco. Unlike larger tourist shows, our venue holds only 60 guests, creating an intimate atmosphere where you can hear every footstep and feel the emotions of the performers. The artists are recognized professionals who perform pure flamenco rather than diluted tourist versions, preserving the true essence of this Andalusian art form.",
      },
      {
        question: "Is dinner included in this experience?",
        answer:
          "The standard package includes the flamenco show with one drink, followed by tapas at a nearby tavern after the performance. We also offer an upgraded package that includes a full dinner of Andalusian specialties served before the show. Please specify your preference when booking.",
      },
      {
        question: "Is this show suitable for children?",
        answer:
          "Yes, children are welcome and often find the rhythmic music and expressive dancing captivating. The show lasts approximately 60 minutes, which is generally an appropriate duration for children's attention spans. We recommend the earlier show time (7:30 PM) for families with younger children.",
      },
      {
        question: "What should I wear to the flamenco show?",
        answer:
          "There is no strict dress code, but smart casual attire is recommended. Flamenco is a respected art form, and locals typically dress nicely for performances. The venue has air conditioning, so a light layer is recommended as the temperature is kept cool for the comfort of the dancers.",
      },
    ],
  },
  {
    title: "Barcelona by Bike: Beaches, Parks & Hidden Gems",
    description:
      "Discover Barcelona on two wheels with a bike tour covering both iconic landmarks and local neighborhoods. Cycle along the Mediterranean beachfront, through the Olympic Village, verdant Ciutadella Park, and the charming alleys of El Born, with stops for photos and local stories.",
    city: "Barcelona",
    country: "Spain",
    region: "Catalonia",
    images: [
      "/images/tours/barcelona/bike-barceloneta.jpg",
      "/images/tours/barcelona/bike-ciutadella.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.6,
    tags: ["Cycling", "Beach", "Active"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need to be an experienced cyclist?",
        answer:
          "No, this tour is designed for casual riders and uses comfortable city bikes with easy gears. Barcelona is mostly flat, and we stick to bike lanes, parks, and pedestrianized areas for a safe, relaxed experience. Our pace is leisurely with frequent stops. Children's bikes, child seats, and tag-alongs are available for families.",
      },
      {
        question: "How far do we bike during the tour?",
        answer:
          "We cover approximately 12-14 kilometers (7-9 miles) over the 4-hour tour, which includes numerous stops for explanations, photos, and a refreshment break. The distance is spread out with plenty of rest opportunities, making it manageable even for occasional cyclists.",
      },
      {
        question: "What happens if it rains?",
        answer:
          "Barcelona enjoys great weather year-round, but in case of rain, we offer three options: rescheduling for another day, switching to our Walking & Transit Tour covering similar highlights, or proceeding with the bike tour with provided ponchos if the rain is light. Safety is our priority, so in cases of heavy rain, we don't recommend proceeding with the cycling tour.",
      },
      {
        question: "Are helmets provided?",
        answer:
          "Yes, helmets are provided and recommended for all participants. They're required by our company policy for riders under 16, though local law only mandates helmets for children under 16. We also provide bike locks, baskets, and maps to ensure a comfortable and safe ride.",
      },
    ],
    availableDates: [
      "2024-04-03",
      "2024-04-10",
      "2024-04-17",
      "2024-04-24",
      "2024-05-01",
      "2024-05-08",
      "2024-05-15",
      "2024-05-22",
      "2024-06-05",
      "2024-06-12",
      "2024-06-19",
      "2024-06-26",
    ],
    highlights: [
      "Experience Barcelona's famous cycling culture with a local guide",
      "Ride along scenic canals and through historic neighborhoods",
      "Visit the beautiful beaches of Barceloneta",
      "Explore the lush Ciutadella Park and its attractions",
      "Discover hidden plazas and lesser-known city gems",
    ],
    inclusions: [
      "Quality bike rental with basket",
      "Helmet and safety equipment",
      "Expert local cycling guide",
      "Bottled water",
      "Photo stops at scenic locations",
      "Personalized recommendations for the rest of your stay",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Food and additional beverages",
      "Entrance fees to attractions",
      "Gratuities (optional)",
      "Rain ponchos (available for purchase if needed)",
    ],
    itinerary: [
      "10:00 AM: Meet at bike rental shop for fitting and safety briefing",
      "10:30 AM: Begin cycling through Gothic Quarter and Born neighborhood",
      "11:15 AM: Ride along the Port Vell harbor and waterfront",
      "12:00 PM: Explore Barceloneta Beach and promenade",
      "12:45 PM: Break for refreshments at beachside café (not included)",
      "1:30 PM: Cycle through Ciutadella Park with photo stops",
      "2:00 PM: Return through hidden alleys and charming plazas",
      "2:30 PM: Tour conclusion at starting point",
    ],
    meetingPoint: {
      address: "Carrer de la Princesa, 33, 08003 Barcelona, Spain",
      coordinates: {
        latitude: 41.3845,
        longitude: 2.1798,
      },
      instructions:
        "Meet at the Barcelona Bike Tours shop. Our guide will be waiting outside with the bikes. Please arrive 15 minutes before the tour starts to complete paperwork and bike fitting.",
      contactNumber: "+34 932 156 722",
    },
    cancellationPolicy:
      "Full refund if canceled at least 24 hours before the scheduled tour. 50% refund if canceled 12-24 hours in advance. No refund for cancellations less than 12 hours before the scheduled tour or in case of no-shows.",
  },
  {
    title: "Barcelona Street Art & Urban Culture Tour",
    description:
      "Explore Barcelona's vibrant street art scene with a local artist as your guide. Discover hidden murals, learn about the city's urban art history, and even create your own piece of street art to take home. Visit lesser-known neighborhoods and meet the artists behind the works.",
    city: "Barcelona",
    country: "Spain",
    region: "Catalonia",
    images: [
      "/images/tours/barcelona/street-art.jpg",
      "/images/tours/barcelona/urban-culture.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Street Art", "Culture", "Urban"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Do I need any artistic skills to participate?",
        answer:
          "Not at all! This tour is designed for everyone, regardless of artistic background. Our guide will provide all necessary materials and step-by-step instructions for creating your own street art piece. The focus is on having fun and expressing yourself creatively, not on technical skill.",
      },
      {
        question: "What neighborhoods will we visit?",
        answer:
          "We explore the vibrant neighborhoods of El Raval, Poblenou, and Gràcia, known for their dynamic street art scenes. Each area has its own unique character and style, showcasing everything from large-scale murals to intricate stencils and paste-ups. Our guide will share stories about the artists and the cultural context behind the works.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children aged 8 and up. Younger children can participate with parental supervision. The guide tailors the experience to engage younger participants, making it a fun and educational outing for the whole family.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Wear comfortable clothing that you don't mind getting a bit paint on, as we will be creating our own street art. Closed-toe shoes are recommended for safety while walking through urban areas. The tour takes place outdoors, so dress appropriately for the weather.",
      },
    ],
    availableDates: [
      "2024-04-04",
      "2024-04-11",
      "2024-04-18",
      "2024-04-25",
      "2024-05-02",
      "2024-05-09",
      "2024-05-16",
      "2024-05-23",
      "2024-06-06",
      "2024-06-13",
      "2024-06-20",
      "2024-06-27",
    ],
    highlights: [
      "Discover Barcelona's vibrant street art scene with a local artist guide",
      "Explore the creative neighborhoods of El Raval, Poblenou, and Gràcia",
      "Learn about techniques and cultural context behind urban art works",
      "Create your own piece of street art to take home",
      "Get insider knowledge on Barcelona's contemporary art movement",
    ],
    inclusions: [
      "Professional artist guide",
      "Street art workshop materials",
      "Metro tickets during the tour",
      "Your own artwork creation to take home",
      "Small group experience (maximum 8 participants)",
      "Bottled water",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Food and beverages",
      "Additional art supplies beyond those provided",
      "Gratuities (optional)",
      "Personal expenses",
    ],
    itinerary: [
      "10:00 AM: Meet your guide in El Raval neighborhood",
      "10:15 AM: Introduction to Barcelona's urban art scene and history",
      "10:45 AM: Walking tour of El Raval's significant murals and installations",
      "11:30 AM: Metro journey to the Poblenou creative district",
      "12:00 PM: Explore Poblenou's industrial spaces transformed by street art",
      "1:00 PM: Hands-on workshop to create your own street art piece",
      "2:00 PM: Metro to Gràcia neighborhood for more hidden art discoveries",
      "2:30 PM: Explore community art projects in Gràcia",
      "3:00 PM: Tour conclusion with recommendations for further exploration",
    ],
    meetingPoint: {
      address: "Plaça dels Àngels, 1, 08001 Barcelona, Spain",
      coordinates: {
        latitude: 41.3829,
        longitude: 2.1671,
      },
      instructions:
        "Meet in front of the MACBA (Barcelona Museum of Contemporary Art) entrance. Look for the guide carrying a portfolio with street art samples. Please arrive 10 minutes before the tour starts.",
      contactEmail: "streetart@barcelonatours.com",
    },
    cancellationPolicy:
      "Full refund if canceled at least 48 hours before the scheduled tour. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour or in case of no-shows.",
  },
];
export default barcelonaTours;
