import { Tour } from "@/lib/interfaces/services/tours";
export const capeTownTours: Tour[] = [
  {
    title: "Table Mountain Sunrise Hike",
    description:
      "Begin your Cape Town adventure with a guided sunrise hike up iconic Table Mountain via a secret trail that avoids crowds, rewarded with breathtaking panoramic views and a mountain-top breakfast.",
    city: "Cape Town",
    country: "South Africa",
    region: "Western Cape",
    images: [
      "/images/tours/cape-town/table-mountain-sunrise.jpg",
      "/images/tours/cape-town/table-mountain-view.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Hiking", "Sunrise", "Nature"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    meetingPoint: {
      address:
        "Kloof Nek Road, Table Mountain Lower Cable Station, Cape Town, South Africa",
      coordinates: {
        latitude: -33.9646,
        longitude: 18.4055,
      },
      instructions:
        "Meet your guide at the parking lot entrance of the Table Mountain Lower Cable Station. Your guide will be wearing a bright orange backpack and holding a sign with 'Sunrise Hike'. Please arrive 15 minutes before the scheduled start time and bring a headlamp or flashlight as we begin hiking in the dark.",
      contactNumber: "+27 21 555 1234",
      contactEmail: "hiking@paragontrails.com",
    },
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
      {
        question: "What happens if the weather is bad?",
        answer:
          "Safety is our top priority. If conditions are unsafe (strong winds, heavy rain, or poor visibility), we'll reschedule your hike or offer a full refund. Cape Town's weather can change quickly, so we monitor forecasts closely and will contact you the day before if any changes are necessary.",
      },
      {
        question: "How do we get back down from Table Mountain?",
        answer:
          "After enjoying the summit, you have two options: hike back down with your guide along a different scenic route, or take the Table Mountain Aerial Cableway (cable car ticket not included in tour price but can be purchased on-site). Most guests choose the cableway for the spectacular descending views.",
      },
    ],
  },
  {
    title: "Cape Peninsula & Penguin Experience",
    description:
      "Journey along the stunning Cape Peninsula to Cape Point, visit the African penguin colony at Boulders Beach, and enjoy a scenic coastal drive along Chapman's Peak with wildlife spotting opportunities.",
    city: "Cape Town",
    country: "South Africa",
    region: "Western Cape",
    images: [
      "/images/tours/cape-town/cape-point.jpg",
      "/images/tours/cape-town/penguins-boulders.jpg",
    ],
    duration: "Full day",
    price: "$125",
    rating: 4.8,
    tags: ["Coastal", "Scenic Drive"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    meetingPoint: {
      address: "Victoria & Alfred Waterfront, Cape Town, South Africa",
      coordinates: {
        latitude: -33.9033,
        longitude: 18.4197,
      },
      instructions:
        "Meet your guide outside the Two Oceans Aquarium entrance at the V&A Waterfront. Your guide will be holding a sign with 'Cape Peninsula Tour'. Please arrive 10 minutes before the scheduled departure time.",
      contactNumber: "+27 21 555 5678",
      contactEmail: "peninsula@paragontrails.com",
    },
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
      {
        question: "Will we see other wildlife besides penguins?",
        answer:
          "Yes! The Peninsula is rich with wildlife. We commonly spot baboons, ostriches, and various antelope species at Cape Point Nature Reserve. During whale season (July-November), we often see southern right whales from our coastal viewpoints. Your guide is also skilled at spotting smaller wildlife such as endemic bird species and rare fynbos plants.",
      },
      {
        question: "How long is the drive and how much walking is involved?",
        answer:
          "The full circular route is about 200km with regular stops at scenic points and attractions. Most locations involve short walks (10-20 minutes each) on well-maintained paths. At Cape Point, there's an optional 20-minute uphill walk to the lighthouse, or you can take the Flying Dutchman funicular for an additional fee. Overall, the tour balances driving and walking for a comfortable experience.",
      },
    ],
  },
  {
    title: "Cape Winelands Gourmet Tour",
    description:
      "Explore the renowned Cape Winelands with a guided tour of Stellenbosch and Franschhoek, including wine tastings at award-winning vineyards, gourmet lunch at a local bistro, and stunning vineyard views.",
    city: "Stellenbosch",
    country: "South Africa",
    region: "Western Cape",
    images: [
      "/images/tours/cape-town/winelands.jpg",
      "/images/tours/cape-town/wine-tasting.jpg",
    ],
    duration: "6 hours",
    price: "$150",
    rating: 4.9,
    tags: ["Wine", "Gourmet", "Scenic"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "culinary",
    meetingPoint: {
      address:
        "81 Long Street, Cape Town City Centre, Cape Town, 8001, South Africa",
      coordinates: {
        latitude: -33.9246,
        longitude: 18.4202,
      },
      instructions:
        "Meet your wine expert guide at the Cape Heritage Hotel lobby on Long Street. Your guide will be waiting in the lobby with a wine tour folder. Please arrive 10 minutes before the departure time. Hotel pickup can be arranged for central Cape Town hotels.",
      contactNumber: "+27 21 555 9012",
      contactEmail: "winelands@paragontrails.com",
    },
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
      {
        question: "How many wine estates do we visit?",
        answer:
          "The tour includes visits to three carefully selected wineries, each offering a different experience and wine style. We typically visit a historic estate, a boutique family-owned winery, and an innovative contemporary producer to showcase the diversity of the Cape Winelands.",
      },
      {
        question:
          "What makes Cape wines unique compared to other wine regions?",
        answer:
          "South African wines combine Old World tradition with New World innovation. Your guide will explain how the region's unique geography—with cool ocean breezes, diverse soils, and varying elevations—creates distinctive terroirs. You'll learn about South Africa's signature Pinotage grape (a cross between Pinot Noir and Cinsault) and how the country's winemaking has evolved dramatically post-apartheid with a focus on sustainability and quality.",
      },
    ],
  },
  {
    title: "Cape Town City & Culture Tour",
    description:
      "Discover Cape Town's vibrant culture with a guided city tour, visiting the District Six Museum, Bo-Kaap neighborhood, and the bustling V&A Waterfront, including local art galleries and markets.",
    city: "Cape Town",
    country: "South Africa",
    region: "Western Cape",
    images: [
      "/images/tours/cape-town/district-six.jpg",
      "/images/tours/cape-town/bo-kaap.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.7,
    tags: ["Culture", "History", "Walking Tour"],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
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
      address:
        "Greenmarket Square, Burg St & Longmarket St, Cape Town City Centre",
      coordinates: {
        latitude: -33.9242,
        longitude: 18.4222,
      },
      instructions:
        "Meet your cultural guide at the center of Greenmarket Square near the craft market. Your guide will be holding a blue folder with 'Cape Town Culture Tour' written on it. Please arrive 10 minutes before the scheduled start time.",
      contactNumber: "+27 21 555 3456",
      contactEmail: "culture@paragontrails.com",
    },
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
      {
        question: "Does this tour address South Africa's apartheid history?",
        answer:
          "Yes, the tour provides thoughtful context about apartheid, particularly during our visit to the District Six Museum which documents the forced removals that occurred under apartheid legislation. Our guides offer balanced perspectives that help visitors understand this difficult period and its ongoing impact on contemporary South African society while also celebrating the country's progress and vibrant multicultural identity.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This is primarily a walking tour covering approximately 3-4 kilometers at a relaxed pace over 4 hours with plenty of stops. We use transportation between some locations that are further apart. The terrain is mostly flat with some gentle slopes in the Bo-Kaap area. Comfortable walking shoes are recommended.",
      },
    ],
  },
  {
    title: "Cape Town Beaches & Coastal Walk",
    description:
      "Experience Cape Town's stunning coastline with a guided walk along the scenic Sea Point Promenade, Clifton and Camps Bay beaches, including a stop for refreshments at a beachfront café.",
    city: "Cape Town",
    country: "South Africa",
    region: "Western Cape",
    images: [
      "/images/tours/cape-town/sea-point.jpg",
      "/images/tours/cape-town/clifton-beach.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.6,
    tags: ["Nature", "Walking Tour", "Coastal"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "wellness",
    meetingPoint: {
      address: "Sea Point Swimming Pool, Beach Rd, Sea Point, Cape Town, 8005",
      coordinates: {
        latitude: -33.9111,
        longitude: 18.383,
      },
      instructions:
        "Meet your guide at the entrance to the Sea Point Swimming Pool on Beach Road. Your guide will be wearing a blue cap with a Paragon Trails logo. Please arrive 10 minutes before the scheduled start time.",
      contactNumber: "+27 21 555 7890",
      contactEmail: "beaches@paragontrails.com",
    },
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
      {
        question: "Will we have time for swimming?",
        answer:
          "Yes, we include optional swimming time at one of Clifton's four beautiful beaches. These beaches are among Cape Town's most prestigious with pristine white sand and turquoise water. However, be prepared—the Atlantic Ocean here is refreshingly cool even in summer with temperatures typically between 55-65°F (13-18°C).",
      },
      {
        question: "What marine life might we see during the coastal walk?",
        answer:
          "The coastal walk offers excellent opportunities for spotting marine life. Depending on the season, we frequently see dolphins playing in the waves, sunfish near the surface, and occasionally southern right whales during migration season (June-November). We'll also point out various coastal bird species and the diverse intertidal marine life in rock pools along our route.",
      },
    ],
  },
  {
    title: "Cape Town Sunset Cruise",
    description:
      "End your day with a relaxing sunset cruise around the Cape Town harbor, enjoying stunning views of Table Mountain, the city skyline, and the Atlantic Ocean while sipping on complimentary drinks.",
    city: "Cape Town",
    country: "South Africa",
    region: "Western Cape",
    images: [
      "/images/tours/cape-town/sunset-cruise.jpg",
      "/images/tours/cape-town/harbor-view.jpg",
    ],
    duration: "2 hours",
    price: "$60",
    rating: 4.8,
    tags: ["Cruise", "Sunset", "Relaxation"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: true,
    isWellness: true,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "romantic",
    meetingPoint: {
      address: "Victoria & Alfred Waterfront, Quay 5, Cape Town, South Africa",
      coordinates: {
        latitude: -33.906,
        longitude: 18.4197,
      },
      instructions:
        "Meet at the Quay 5 jetty in the V&A Waterfront, near the Cape Wheel. Look for the 'Sunset Cruise' sign and our boat with the Paragon Trails flag. Please arrive 20 minutes before departure for boarding procedures.",
      contactNumber: "+27 21 555 2345",
      contactEmail: "cruises@paragontrails.com",
    },
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
      {
        question: "Is the cruise suitable for people prone to seasickness?",
        answer:
          "The cruise takes place in the sheltered waters of Table Bay, which are typically calm. However, if you're particularly prone to motion sickness, we recommend taking preventative medication before boarding. The captain monitors sea conditions and will only sail when it's comfortable and safe.",
      },
      {
        question: "What are the best photo opportunities during the cruise?",
        answer:
          "The cruise offers spectacular photo opportunities of Cape Town's iconic landmarks from unique angles. Highlights include Table Mountain bathed in sunset light (known locally as the 'golden hour'), the historic harbor and working docks, Robben Island in the distance, and the city skyline as the lights begin to twinkle on at dusk. Our crew will point out the best photo moments and can even take pictures of you with the stunning backdrop.",
      },
    ],
  },
];
export default capeTownTours;
