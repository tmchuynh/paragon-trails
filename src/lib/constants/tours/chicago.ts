import { Tour } from "@/lib/interfaces/services/tours";

export const chicagoTours: Tour[] = [
  {
    title: "Chicago Architecture River Cruise",
    description:
      "Discover the stories behind Chicago's famous skyline from the unique perspective of the Chicago River with an expert architecture guide.",
    city: "Chicago",
    country: "United States",
    state: "Illinois",
    region: "Midwest",
    images: [
      "/images/tours/chicago/river-cruise.jpg",
      "/images/tours/chicago/skyline.jpg",
    ],
    duration: "75 minutes",
    price: "$55",
    rating: 4.9,
    tags: ["Architecture", "River", "Photography"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "400 N Michigan Ave, Chicago, IL 60611",
      coordinates: {
        latitude: 41.8894,
        longitude: -87.6242,
      },
      instructions:
        "Meet at the southeast corner of the Michigan Avenue Bridge (DuSable Bridge) by the Wrigley Building. Look for the Chicago Architecture Center tour guide in a blue shirt. Please arrive 15 minutes before departure time.",
      contactNumber: "+1 312-922-3432",
      contactEmail: "tours@architecture.org",
    },
    availableDates: [
      "2024-04-01",
      "2024-04-05",
      "2024-04-10",
      "2024-04-15",
      "2024-04-20",
      "2024-04-25",
      "2024-05-01",
      "2024-05-05",
      "2024-05-10",
      "2024-05-15",
      "2024-05-20",
      "2024-05-25",
      "2024-06-01",
      "2024-06-05",
      "2024-06-10",
      "2024-06-15",
      "2024-06-20",
      "2024-06-25",
      "2024-07-01",
      "2024-07-05",
      "2024-07-10",
      "2024-07-15",
      "2024-07-20",
      "2024-07-25",
    ],
    highlights: [
      "Experience Chicago's architectural masterpieces from the unique river perspective",
      "Learn about 50+ buildings from expert architecture guides",
      "Hear stories about Chicago's rise from the Great Fire to a city of skyscrapers",
      "Enjoy comfortable seating with unobstructed views on purpose-built vessels",
      "Capture stunning photos of iconic buildings like the Willis Tower and Tribune Tower",
    ],
    inclusions: [
      "75-minute guided architecture cruise",
      "Live commentary from a certified architecture docent",
      "Access to all boat amenities including restrooms",
      "Covered and open-air seating options",
      "Architecture guide booklet",
    ],
    exclusions: [
      "Food and beverages (available for purchase on board)",
      "Hotel pickup and drop-off",
      "Gratuities",
    ],
    itinerary: [
      "Check in 15 minutes before departure time",
      "Board the vessel and find your preferred seating",
      "Cruise down all three branches of the Chicago River",
      "View and learn about more than 50 significant buildings",
      "Return to the original departure point",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before the scheduled tour. 50% refund if canceled between 12-24 hours in advance. No refund for cancellations less than 12 hours before departure or no-shows.",
    faqs: [
      {
        question: "Does the cruise run in all weather?",
        answer:
          "Cruises operate rain or shine. In case of severe weather, we may reschedule or offer indoor viewing options. The boats have both covered and open-air seating areas to accommodate different weather conditions. In rare cases of extremely severe weather or lightning storms, cruises may be canceled for safety reasons, and you'll be offered a full refund or rescheduling options.",
      },
      {
        question: "Is food or drink available on the cruise?",
        answer:
          "Light snacks and beverages are available for purchase on board. You can also bring your own snacks. The cruise features a full-service bar offering local craft beers, wine, cocktails, and non-alcoholic options. Credit cards are accepted for all purchases. For morning cruises, coffee and breakfast pastries are available, while afternoon and evening cruises offer a wider selection of food options.",
      },
      {
        question: "Are there restrooms on the boat?",
        answer:
          "Yes, all boats are equipped with clean, accessible restrooms. The vessels are designed for comfort during your 75-minute tour, with climate control for Chicago's variable weather conditions.",
      },
      {
        question: "What makes this tour different from other river cruises?",
        answer:
          "Unlike standard sightseeing cruises, our tour is led by certified docents from the Chicago Architecture Center who undergo rigorous training in architectural history. They provide expert commentary on Chicago's architectural styles, from Beaux-Arts to Modernism and contemporary design. The vessels are specifically designed with open viewing areas and stadium-style seating to ensure every passenger has excellent sightlines of the buildings being discussed.",
      },
      {
        question:
          "Will we see the buildings featured in architectural documentaries?",
        answer:
          "Yes, the cruise includes all of Chicago's architectural icons, including the Willis Tower (formerly Sears Tower), Wrigley Building, Tribune Tower, Marina City's corn-cob towers, the Merchandise Mart, and modern marvels like Aqua Tower and St. Regis (formerly Vista) Tower. We also highlight buildings that exemplify the Chicago School of architecture and the innovations of architects like Louis Sullivan, Mies van der Rohe, Bertrand Goldberg, and Jeanne Gang.",
      },
    ],
  },
  {
    title: "Chicago Deep Dish Pizza & Blues Tour",
    description:
      "Experience two Chicago classics in one night: authentic deep dish pizza at historic pizzerias followed by live blues at legendary music venues.",
    city: "Chicago",
    country: "United States",
    state: "Illinois",
    region: "Midwest",
    images: [
      "/images/tours/chicago/deep-dish-pizza.jpg",
      "/images/tours/chicago/blues-club.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Food", "Music", "Nightlife"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "culinary",
    meetingPoint: {
      address: "619 N Wabash Ave, Chicago, IL 60611",
      coordinates: {
        latitude: 41.8925,
        longitude: -87.6267,
      },
      instructions:
        "Meet outside Lou Malnati's Pizzeria on North Wabash. Your guide will be wearing a blue cap with a Chicago flag logo. Please arrive 15 minutes early as we'll be entering the restaurant together.",
      contactNumber: "+1 312-555-8742",
      contactEmail: "blues@chicagotours.com",
    },
    availableDates: [
      "2024-04-02",
      "2024-04-09",
      "2024-04-16",
      "2024-04-23",
      "2024-04-30",
      "2024-05-07",
      "2024-05-14",
      "2024-05-21",
      "2024-05-28",
      "2024-06-04",
      "2024-06-11",
      "2024-06-18",
      "2024-06-25",
      "2024-07-02",
      "2024-07-09",
      "2024-07-16",
      "2024-07-23",
      "2024-07-30",
    ],
    highlights: [
      "Taste authentic Chicago deep dish pizza at a legendary pizzeria",
      "Learn about the history and rivalries between famous Chicago pizza establishments",
      "Experience live blues music at historic Chicago venues",
      "Hear stories about Chicago's rich blues heritage and its influence on rock and roll",
      "Skip the line at popular venues with VIP access",
    ],
    inclusions: [
      "Deep dish pizza tasting (equivalent to a meal)",
      "Cover charges for blues clubs",
      "Local guide with expertise in Chicago's food and music history",
      "Skip-the-line access at venues",
      "One drink ticket at the blues club",
    ],
    exclusions: [
      "Additional food and beverages beyond what's included",
      "Transportation between venues (walking tour)",
      "Hotel pickup and drop-off",
      "Gratuities",
    ],
    itinerary: [
      "6:00 PM: Meet at Lou Malnati's Pizzeria for deep dish pizza tasting and history",
      "7:30 PM: Walking tour through Chicago's historic musical districts",
      "8:00 PM: First blues club visit with live music",
      "9:15 PM: Optional visit to a second venue for a different blues experience",
      "10:00 PM: Tour concludes (guests can stay longer at the venue)",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the scheduled tour. 50% refund if canceled between 24-48 hours in advance. No refund for cancellations less than 24 hours before the tour or no-shows.",
    faqs: [
      {
        question: "Is there a minimum age requirement for the blues clubs?",
        answer:
          "Most venues on this tour require guests to be 21+ with valid photo ID. We offer a family-friendly alternative daytime tour that includes pizza tasting and music history suitable for all ages. The daytime version visits the same pizzerias and includes a guided tour of Chicago's musical landmarks with recorded blues samples instead of live performances.",
      },
      {
        question: "What if I have dietary restrictions?",
        answer:
          "Please inform us of any dietary restrictions when booking. We can accommodate vegetarian and gluten-free options at the pizzerias. For vegetarians, we offer cheese-only deep dish or specialty vegetable options. For gluten-free guests, some locations offer gluten-free thin crust pizzas (though not deep dish). We'll ensure everyone has a satisfying pizza experience regardless of dietary needs.",
      },
      {
        question: "Do we visit multiple blues clubs?",
        answer:
          "Yes, we visit two different venues to experience a variety of live music styles and atmospheres. Each club represents a different aspect of Chicago's blues tradition - one might feature traditional Delta-influenced Chicago blues while the other showcases more contemporary electric blues or blues-rock fusion. This provides a more comprehensive understanding of Chicago's diverse blues scene.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour involves about 1 mile (1.6 km) of walking between venues at a leisurely pace through downtown Chicago. Most of the time is spent inside the pizzeria and blues clubs. In inclement weather, we can arrange transportation between venues for an additional fee, or you're welcome to take a short taxi/rideshare at your own expense.",
      },
      {
        question: "What's the history behind Chicago deep dish pizza?",
        answer:
          "Chicago deep dish pizza was invented in 1943 at Pizzeria Uno by founders Ike Sewell and Ric Riccardo. Unlike traditional thin-crust pizza, deep dish features a tall edge that creates a basin for an abundance of cheese, chunky tomato sauce, and ingredients layered in reverse order from traditional pizzas. The tour explains how different pizzerias developed their own styles, the rivalry between famous establishments like Lou Malnati's, Giordano's, and Gino's East, and how this local specialty became internationally renowned despite being quite different from its Italian ancestors.",
      },
    ],
  },
  {
    title: "Chicago Art & Culture Walk",
    description:
      "Explore Chicago's vibrant art scene with a guided walking tour through the city's best galleries, street art, and cultural landmarks.",
    city: "Chicago",
    country: "United States",
    state: "Illinois",
    region: "Midwest",
    images: [
      "/images/tours/chicago/art-walk.jpg",
      "/images/tours/chicago/street-art.jpg",
    ],
    duration: "3 hours",
    price: "$40",
    rating: 4.7,
    tags: ["Art", "Culture", "Walking Tour"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "111 S Michigan Ave, Chicago, IL 60603",
      coordinates: {
        latitude: 41.8796,
        longitude: -87.6237,
      },
      instructions:
        "Meet at the Michigan Avenue entrance steps of the Art Institute of Chicago, by the iconic lion statues. Your guide will be holding a sign with 'Chicago Art Walk' written on it. Please arrive 10 minutes before tour start time.",
      contactNumber: "+1 312-555-9376",
      contactEmail: "art@chicagotours.com",
    },
    availableDates: [
      "2024-04-03",
      "2024-04-10",
      "2024-04-17",
      "2024-04-24",
      "2024-05-01",
      "2024-05-08",
      "2024-05-15",
      "2024-05-22",
      "2024-05-29",
      "2024-06-05",
      "2024-06-12",
      "2024-06-19",
      "2024-06-26",
      "2024-07-03",
      "2024-07-10",
      "2024-07-17",
      "2024-07-24",
      "2024-07-31",
    ],
    highlights: [
      "Visit the Art Institute of Chicago's famous outdoor installations",
      "Explore contemporary galleries in the West Loop art district",
      "Discover hidden street art and murals in Chicago's vibrant neighborhoods",
      "Learn about Chicago's public art program and iconic works like Cloud Gate (The Bean)",
      "Get exclusive insights from a guide with deep connections to the local art scene",
    ],
    inclusions: [
      "Guided walking tour with art expert",
      "Admission to 2-3 private galleries",
      "Bottle of water",
      "Art map of Chicago with recommended galleries and installations",
      "Discounted admission vouchers to select museums and galleries",
    ],
    exclusions: [
      "Art Institute of Chicago admission (optional add-on)",
      "Transportation during tour (walking tour)",
      "Food and additional beverages",
      "Gratuities",
    ],
    itinerary: [
      "10:00 AM: Meet at Art Institute lions and introduction to Chicago's art scene",
      "10:30 AM: Millennium Park public art tour including Cloud Gate and Crown Fountain",
      "11:15 AM: Cultural Center visit to see Tiffany dome (schedule permitting)",
      "12:00 PM: Walking tour of River North gallery district",
      "12:45 PM: Visit select contemporary galleries with curatorial discussions",
      "1:00 PM: Tour concludes with recommendations for further exploration",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before the scheduled tour. 50% refund if canceled between 12-24 hours in advance. No refund for cancellations less than 12 hours before the tour or no-shows.",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive art experiences. For younger children, our guide emphasizes the more accessible and visually stimulating works, like interactive public installations. For teens and adults, we delve deeper into artistic movements and techniques. We're happy to customize the tour's content to match your family's specific interests and ages.",
      },
      {
        question: "What should I wear for the walk?",
        answer:
          "Wear comfortable walking shoes and dress for the weather. We recommend bringing a water bottle and sunscreen for warm days. During Chicago's cooler months (October-April), dress in layers as we'll alternate between indoor galleries and outdoor walks. The tour runs rain or shine, so please bring appropriate rain gear if needed.",
      },
      {
        question: "Do we visit any indoor galleries?",
        answer:
          "Yes, we include visits to several indoor galleries as well as outdoor street art installations. The exact galleries visited may change based on current exhibitions, but we always select spaces showing compelling contemporary work by both established and emerging artists. Our relationships with gallery directors often provide access to back rooms and insights into upcoming exhibitions not available to the general public.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 1.5 miles (2.4 km) at a leisurely pace with plenty of stops. We walk through downtown Chicago and the River North district, with most of the route on flat terrain. There are opportunities to sit during gallery visits. For those with mobility concerns, we can adjust the route to reduce walking distances while still covering the major art highlights.",
      },
      {
        question: "What makes Chicago's art scene unique?",
        answer:
          "Chicago's art scene uniquely blends Midwestern practicality with bold experimentation. The city pioneered public art through its Percent for Art program, resulting in works by Picasso, Calder, and Kapoor becoming integral to the urban landscape. Chicago's artistic identity was shaped by distinctive movements like the Chicago Imagists who developed separately from East Coast trends, the Wall of Respect which pioneered community-based muralism, and the city's architectural innovations. Our tour connects these historical elements with Chicago's vibrant contemporary scene, which features strong support for emerging artists through institutions like the Hyde Park Art Center and thriving alternative gallery spaces.",
      },
    ],
  },
  {
    title: "Chicago Gangster & Prohibition Tour",
    description:
      "Walk in the footsteps of infamous mobsters like Al Capone and John Dillinger on this historically accurate tour of Chicago's criminal underworld during the Prohibition era, visiting former speakeasies and crime scenes.",
    city: "Chicago",
    country: "United States",
    state: "Illinois",
    region: "Midwest",
    images: [
      "/images/tours/chicago/gangster-tour.jpg",
      "/images/tours/chicago/speakeasy.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.8,
    tags: ["History", "Crime", "Prohibition"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "historical",
    meetingPoint: {
      address: "71 E Wacker Dr, Chicago, IL 60601",
      coordinates: {
        latitude: 41.8868,
        longitude: -87.6262,
      },
      instructions:
        "Meet in front of the Eastland Disaster memorial plaque on the north side of the Chicago River along the Riverwalk. Your guide will be dressed in 1920s-inspired attire. Please arrive 10 minutes before tour start time.",
      contactNumber: "+1 312-555-8712",
      contactEmail: "gangsters@chicagotours.com",
    },
    availableDates: [
      "2024-04-06",
      "2024-04-13",
      "2024-04-20",
      "2024-04-27",
      "2024-05-04",
      "2024-05-11",
      "2024-05-18",
      "2024-05-25",
      "2024-06-01",
      "2024-06-08",
      "2024-06-15",
      "2024-06-22",
      "2024-06-29",
      "2024-07-06",
      "2024-07-13",
      "2024-07-20",
      "2024-07-27",
    ],
    highlights: [
      "Visit infamous crime scenes from Chicago's gangster era",
      "Tour former speakeasies and learn their secret histories",
      "See the locations of the St. Valentine's Day Massacre and other mob hits",
      "Hear true stories about Al Capone, Bugs Moran, and other notorious figures",
      "Enjoy a Prohibition-era cocktail at a historic bar (optional)",
    ],
    inclusions: [
      "Guided walking tour with crime historian",
      "Access to exclusive locations not generally open to the public",
      "Historical photos of crime scenes and gangsters",
      "Historic map of Chicago's criminal underworld",
      "Discount coupon for a Prohibition-style cocktail",
    ],
    exclusions: [
      "Food and beverages",
      "Transportation during tour (walking tour)",
      "Entry to certain museums or attractions",
      "Gratuities",
    ],
    itinerary: [
      "7:00 PM: Meet at Eastland Disaster memorial and introduction",
      "7:15 PM: Walk through the Loop to see former gangster headquarters",
      "7:45 PM: Visit site of the Lexington Hotel, Al Capone's headquarters",
      "8:15 PM: Tour former speakeasies with option to purchase drinks",
      "9:00 PM: Walk to site of St. Valentine's Day Massacre",
      "9:30 PM: Visit a restored speakeasy for an optional cocktail",
      "10:00 PM: Tour concludes",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before the scheduled tour. 50% refund if canceled between 12-24 hours in advance. No refund for cancellations less than 12 hours before the tour or no-shows.",
    faqs: [
      {
        question: "Is this tour appropriate for children?",
        answer:
          "The tour is most appropriate for teens and adults due to the mature historical content involving crime, violence, and alcohol. While we don't sensationalize the violence, we do provide historically accurate accounts of crimes and their social context. Families with younger children may prefer our daytime version of the tour which focuses more on the historical aspects with less emphasis on the violent details.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 1.5 miles (2.4 km) at a comfortable pace with frequent stops. We walk through downtown Chicago, primarily on flat terrain with some standing at locations. Most participants find the walking manageable, but please contact us if you have mobility concerns so we can discuss accommodation options.",
      },
      {
        question: "Do we go inside any Al Capone-related buildings?",
        answer:
          "Most original buildings from Chicago's gangster era have been demolished or significantly remodeled. We visit the exteriors and locations of notorious sites, using historical photos to show how they appeared during Prohibition. We do enter 1-2 bars that operated as speakeasies during Prohibition and still maintain some original features and atmosphere from that era.",
      },
      {
        question: "Is the tour historically accurate?",
        answer:
          "Absolutely. Unlike sensationalized 'ghost tours' with dubious stories, our tour is led by historians specializing in Chicago crime history. We draw from police records, newspaper archives, court documents, and scholarly research. We distinguish between confirmed facts and popular myths about figures like Al Capone, explaining both the reality and how the legends developed. Our goal is to provide entertainment through accurate history rather than through exaggeration.",
      },
      {
        question:
          "Why was Chicago so central to Prohibition-era organized crime?",
        answer:
          "Chicago became the epicenter of Prohibition crime due to several factors we explore during the tour: its strategic location with water and rail access made it ideal for smuggling, corrupt political machines provided protection for illegal operations, and cultural attitudes toward drinking remained permissive despite the law. We explain how ethnic tensions and economic opportunities created by Prohibition allowed figures like Al Capone to build criminal empires, and how Chicago's unique neighborhood geography facilitated territorial divisions between rival gangs.",
      },
    ],
  },
  {
    title: "Chicago Lakefront Bicycle Tour",
    description:
      "Explore Chicago's magnificent lakefront, parks, and neighborhoods on a guided bicycle tour featuring stunning skyline views, historic landmarks, and hidden local gems along the scenic 18-mile Lakefront Trail.",
    city: "Chicago",
    country: "United States",
    state: "Illinois",
    region: "Midwest",
    images: [
      "/images/tours/chicago/lakefront-biking.jpg",
      "/images/tours/chicago/bike-skyline-view.jpg",
    ],
    duration: "3 hours",
    price: "$49",
    rating: 4.9,
    tags: ["Bicycle", "Lakefront", "Outdoor"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    meetingPoint: {
      address: "239 E Randolph St, Chicago, IL 60601",
      coordinates: {
        latitude: 41.8845,
        longitude: -87.6213,
      },
      instructions:
        "Meet at the Millennium Park Bike Rental shop on the northeast corner of the park near Randolph Street. Look for the guide in a bright yellow cycling jersey. Please arrive 20 minutes before departure time for bike fitting.",
      contactNumber: "+1 312-555-7629",
      contactEmail: "bikes@chicagotours.com",
    },
    availableDates: [
      "2024-04-15",
      "2024-04-22",
      "2024-04-29",
      "2024-05-06",
      "2024-05-13",
      "2024-05-20",
      "2024-05-27",
      "2024-06-03",
      "2024-06-10",
      "2024-06-17",
      "2024-06-24",
      "2024-07-01",
      "2024-07-08",
      "2024-07-15",
      "2024-07-22",
      "2024-07-29",
    ],
    highlights: [
      "Cycle the scenic 18-mile Lakefront Trail with spectacular city skyline views",
      "Visit iconic parks including Millennium Park, Grant Park, and Lincoln Park",
      "Explore diverse neighborhoods adjacent to the lakefront",
      "Learn about Chicago's innovative approach to public spaces and lakefront preservation",
      "Discover hidden beaches, harbors, and natural areas along Lake Michigan",
    ],
    inclusions: [
      "Comfortable hybrid bicycle rental",
      "Helmet and safety equipment",
      "Experienced local cycling guide",
      "Bottled water and light snacks",
      "Bicycle lock if you wish to explore specific areas",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Meals and additional beverages",
      "Gratuities",
      "Rain gear (available for purchase)",
    ],
    itinerary: [
      "9:30 AM: Meet at Millennium Park for bike fitting and safety briefing",
      "10:00 AM: Begin cycling south along the lakefront through Museum Campus",
      "10:45 AM: Photo stop at Northerly Island with panoramic skyline views",
      "11:15 AM: Continue north through Grant Park and the Chicago Harbor",
      "12:00 PM: Break at North Avenue Beach with refreshments",
      "12:30 PM: Explore Lincoln Park and its hidden gardens",
      "1:00 PM: Return to Millennium Park along the lakefront",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the scheduled tour. 50% refund if canceled between 24-48 hours in advance. No refund for cancellations less than 24 hours before the tour or in case of no-shows. Tours may be rescheduled due to severe weather conditions.",
    faqs: [
      {
        question: "What level of fitness is required for this bike tour?",
        answer:
          "This tour is designed for casual cyclists with moderate fitness levels. We maintain a leisurely pace (8-10 mph) with frequent stops, covering approximately 10 miles total on flat terrain. The Lakefront Trail is mostly flat with dedicated bike paths separated from traffic. If you can comfortably ride a bike for 1-2 hours with breaks, you'll enjoy this tour. Electric-assist bikes are available for an additional fee for those who might want extra help.",
      },
      {
        question: "Is the tour suitable for children?",
        answer:
          "Yes, we welcome families with children aged 10 and above who are confident cyclists. We provide appropriately-sized bikes for older children. For younger children (ages 5-9), we offer trailers and tag-along attachments connected to adult bikes. Please specify children's ages and heights when booking so we can prepare appropriate equipment.",
      },
      {
        question: "What happens in case of bad weather?",
        answer:
          "The tour operates in light rain (we provide ponchos), but may be rescheduled or refunded in the event of severe weather, thunderstorms, or extreme temperatures. We'll contact you at least 2 hours before the tour start time if weather conditions necessitate cancellation. If you're uncomfortable riding in light rain, we're happy to reschedule you for another day when possible.",
      },
      {
        question: "Are there bathroom breaks during the tour?",
        answer:
          "Yes, we plan the route to include access to clean public restrooms approximately every 45-60 minutes. Chicago's lakefront is well-equipped with facilities at beaches and park areas. We also take a longer break midway through the tour where bathrooms, water fountains, and sometimes food vendors are available.",
      },
      {
        question: "What makes Chicago's lakefront trail system special?",
        answer:
          "Chicago's 18-mile lakefront trail is one of the world's finest urban recreational paths, made possible by visionary urban planner Daniel Burnham's famous decree: 'The lakefront belongs to the people.' During the tour, you'll learn how Chicago's leaders fought against commercial development to preserve public access to the waterfront, creating a continuous shoreline park system that's become a model for cities worldwide. We'll explain how lakefront reclamation projects expanded the city eastward using rubble from the Great Chicago Fire and innovative engineering solutions. This history of civic activism and urban planning created the exceptional recreational asset we enjoy today.",
      },
    ],
  },
];

export default chicagoTours;
