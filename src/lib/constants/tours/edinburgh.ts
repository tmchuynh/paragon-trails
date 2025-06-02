import { Tour } from "@/lib/interfaces/services/tours";

export const edinburghTours: Tour[] = [
  {
    title: "Edinburgh Castle & Royal Mile Historical Tour",
    description:
      "Discover Edinburgh's dramatic history with an expert historian, exploring Edinburgh Castle's secrets and the Royal Mile's hidden closes, ending with a whisky tasting in a historic cellar.",
    city: "Edinburgh",
    country: "United Kingdom",
    region: "Scotland",
    images: [
      "/images/tours/edinburgh/edinburgh-castle.jpg",
      "/images/tours/edinburgh/royal-mile.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Castle", "History", "Walking Tour"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",

    meetingPoint: {
      address: "The Esplanade, Edinburgh Castle, Edinburgh EH1 2NG",
      coordinates: {
        latitude: 55.9486,
        longitude: -3.1999,
      },
      instructions:
        "Meet at the statue of Robert the Bruce on the Esplanade in front of Edinburgh Castle. Your guide will be holding a blue 'Edinburgh History Tours' flag.",
      contactNumber: "+44 131 555 1234",
      contactEmail: "castletour@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-18",
      "2023-12-21",
      "2024-01-05",
      "2024-01-12",
      "2024-01-19",
      "2024-01-26",
      "2024-02-02",
      "2024-02-09",
      "2024-02-16",
      "2024-02-23",
    ],

    highlights: [
      "Explore Edinburgh Castle with priority access and expert historical commentary",
      "See the Scottish Crown Jewels (the Honours of Scotland) and Stone of Destiny",
      "Discover hidden closes and courtyards along the Royal Mile",
      "Learn about Edinburgh's fascinating and sometimes dark history",
      "Finish with a whisky tasting in a historic cellar venue",
    ],

    inclusions: [
      "Professional historian guide",
      "Skip-the-line entrance to Edinburgh Castle",
      "Guided tour of the Royal Mile's hidden features",
      "Whisky tasting experience with 3 premium single malts",
      "Small group size (maximum 12 participants)",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks beyond the included whisky tasting",
      "Gratuities (optional)",
      "Souvenir purchases",
    ],

    itinerary: [
      "10:00 - Meet at Edinburgh Castle Esplanade for introduction",
      "10:15 - Priority entrance to Edinburgh Castle",
      "10:30 - Tour of castle highlights including Crown Jewels, Stone of Destiny, and Great Hall",
      "11:45 - Visit St. Margaret's Chapel, the oldest building in Edinburgh",
      "12:15 - Enjoy panoramic city views from the castle battlements",
      "12:45 - Begin walk down the Royal Mile with historical commentary",
      "13:15 - Explore hidden closes and courtyards off the main street",
      "13:45 - Visit St. Giles' Cathedral (optional donation for entry)",
      "14:15 - Descend to historic whisky cellar venue",
      "14:30 - Guided whisky tasting experience with Scottish single malts",
    ],

    faqs: [
      {
        question: "Does this tour include admission to Edinburgh Castle?",
        answer:
          "Yes, standard admission to Edinburgh Castle is included in the tour price. This allows you to explore the castle grounds, view the Scottish Crown Jewels (Honours of Scotland), the Stone of Destiny, and other historical exhibits during our guided tour.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly! Our guides are skilled at engaging younger visitors with exciting stories and interesting historical facts. The castle particularly appeals to children with its dungeons, military displays, and expansive grounds to explore.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour involves approximately 2 miles of walking, mostly downhill as we start at the castle and proceed down the Royal Mile. Some areas include steps and uneven surfaces. We maintain a moderate pace with several stops, but comfortable walking shoes are recommended.",
      },
    ],
  },
  {
    title: "Literary Edinburgh: Writers' Trail",
    description:
      "Walk in the footsteps of famous Scottish authors including J.K. Rowling, Robert Louis Stevenson, and Sir Walter Scott, visiting the locations that inspired their works and the pubs they frequented.",
    city: "Edinburgh",
    country: "United Kingdom",
    region: "Scotland",
    images: [
      "/images/tours/edinburgh/writers-museum.jpg",
      "/images/tours/edinburgh/elephant-house.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.7,
    tags: ["Literary", "Cultural", "Walking Tour"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "The Writers' Museum, Lady Stair's Close, Edinburgh EH1 2PA",
      coordinates: {
        latitude: 55.9498,
        longitude: -3.1953,
      },
      instructions:
        "Meet outside The Writers' Museum entrance in Lady Stair's Close, just off the Royal Mile. Your guide will be carrying a book with a blue bookmark.",
      contactNumber: "+44 131 555 2345",
      contactEmail: "literarytour@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-20",
      "2023-12-27",
      "2024-01-06",
      "2024-01-13",
      "2024-01-20",
      "2024-01-27",
      "2024-02-03",
      "2024-02-10",
      "2024-02-17",
      "2024-02-24",
    ],

    highlights: [
      "Discover locations that inspired classic and contemporary Scottish literature",
      "Visit the cafés where J.K. Rowling wrote early Harry Potter novels",
      "See the Scott Monument dedicated to Sir Walter Scott",
      "Explore Makars' Court with its famous literary quotations",
      "Walk through the streets that inspired Robert Louis Stevenson's 'Dr. Jekyll and Mr. Hyde'",
    ],

    inclusions: [
      "Literary expert guide",
      "Entrance to The Writers' Museum",
      "Map of Edinburgh's literary landmarks to keep",
      "Scottish poetry reading at a significant location",
      "Small group size (maximum 12 participants)",
      "Discount voucher for a local bookstore",
    ],

    exclusions: [
      "Food and drinks",
      "Transportation to and from meeting point",
      "Gratuities (optional)",
      "Entry fees to venues not listed in inclusions",
    ],

    itinerary: [
      "10:00 - Meet at The Writers' Museum for introduction",
      "10:15 - Guided tour of the museum focusing on Burns, Scott and Stevenson",
      "10:45 - Walk through Makars' Court to discuss contemporary Scottish writers",
      "11:15 - Visit locations associated with Robert Louis Stevenson and 'Dr. Jekyll and Mr. Hyde'",
      "11:45 - Walk to George IV Bridge to see National Library of Scotland",
      "12:00 - Stop at The Elephant House café, where J.K. Rowling wrote",
      "12:30 - Visit Greyfriars Kirkyard to see tombstones that inspired Harry Potter character names",
      "13:00 - Tour concludes with a Scottish poetry reading near the Scott Monument",
    ],

    faqs: [
      {
        question: "Do I need to be a Harry Potter expert to enjoy this tour?",
        answer:
          "Not at all! This tour is designed for everyone from dedicated Potterheads to those with casual interest in the books or films. Our guides explain the connections clearly and include the wider literary and historical context of Edinburgh that influenced Rowling's writing. Even those with limited Harry Potter knowledge will enjoy discovering how a real city inspired aspects of this magical world.",
      },
      {
        question:
          "Will we enter The Elephant House café where J.K. Rowling wrote?",
        answer:
          "We stop outside The Elephant House and other significant writing locations, but entrance is not included in the tour as these are working businesses. You're welcome to visit them independently before or after the tour. Our guide will provide recommendations for the best times to visit to avoid crowds.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes! This is a family-friendly tour designed to engage Harry Potter fans of all ages. Our guides are skilled at involving younger visitors with interactive elements and age-appropriate trivia. We recommend this tour for children aged 7 and up who are familiar with at least some of the Harry Potter stories.",
      },
    ],
  },
  {
    title: "Underground Edinburgh Ghost Tour",
    description:
      "Descend into Edinburgh's haunted underground vaults and hidden chambers with only a torch to guide you, as your guide shares spine-chilling tales of murder, mystery and supernatural encounters.",
    city: "Edinburgh",
    country: "United Kingdom",
    region: "Scotland",
    images: [
      "/images/tours/edinburgh/underground-vaults.jpg",
      "/images/tours/edinburgh/ghostly-tour.jpg",
    ],
    duration: "2 hours",
    price: "$35",
    rating: 4.6,
    tags: ["Haunted", "Ghost Tour", "Underground"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "off-the-beaten-path",

    meetingPoint: {
      address: "Mercat Cross, High Street, Royal Mile, Edinburgh EH1 1RF",
      coordinates: {
        latitude: 55.95,
        longitude: -3.1875,
      },
      instructions:
        "Meet at the Mercat Cross monument on the Royal Mile. Your guide will be dressed in a black cloak holding a lantern.",
      contactNumber: "+44 131 555 3456",
      contactEmail: "vaults@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-16",
      "2023-12-17",
      "2023-12-22",
      "2023-12-23",
      "2024-01-05",
      "2024-01-06",
      "2024-01-12",
      "2024-01-13",
      "2024-01-19",
      "2024-01-20",
      "2024-01-26",
      "2024-01-27",
      "2024-02-02",
      "2024-02-03",
      "2024-02-09",
      "2024-02-10",
      "2024-02-16",
      "2024-02-17",
      "2024-02-23",
      "2024-02-24",
    ],

    highlights: [
      "Access Edinburgh's restricted 18th-century underground vaults",
      "Hear authentic ghost stories and historical tales of murder and mystery",
      "Experience complete darkness in sections of the underground chambers",
      "Learn about Edinburgh's body snatchers and medical history",
      "Visit one of the most haunted locations in Scotland",
    ],

    inclusions: [
      "Expert storyteller guide",
      "Access to restricted underground vaults",
      "Handheld torch to navigate dark spaces",
      "Historical commentary on Edinburgh's darker history",
      "Small group size for an intimate experience (maximum 15 participants)",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Food and drinks",
      "Photos inside certain vault areas (some areas prohibit photography)",
      "Gratuities (optional)",
    ],

    itinerary: [
      "19:00 - Meet at Mercat Cross for introduction to Edinburgh's dark history",
      "19:15 - Walk down the Royal Mile with stories of public executions and historical crimes",
      "19:30 - Descend into the underground vaults beneath South Bridge",
      "19:45 - Explore the first series of chambers with historical commentary",
      "20:00 - Experience moments of complete darkness in the deeper chambers",
      "20:15 - Hear tales of paranormal experiences in the most haunted vault",
      "20:30 - Learn about the body snatchers Burke and Hare and their connection to the area",
      "20:45 - Final ghost stories and legends in the deepest chamber",
      "21:00 - Return to street level where tour concludes",
    ],

    faqs: [
      {
        question: "Is this tour scary?",
        answer:
          "The tour focuses primarily on historical facts, but does include some spooky stories and takes place in dark, atmospheric underground locations. Our guides adjust the content based on the audience - we can emphasize the history for those who prefer less frightening content, or lean into the eerier aspects for those seeking thrills.",
      },
      {
        question: "Is this tour accessible for those with mobility issues?",
        answer:
          "Unfortunately, the underground vaults involve narrow passageways and uneven surfaces with multiple stairs and no elevator access. The tour is not suitable for wheelchair users or those with significant mobility constraints. Please contact us if you have specific accessibility concerns.",
      },
      {
        question: "Are the underground vaults actually haunted?",
        answer:
          "The Edinburgh vaults have been featured on numerous ghost hunting television shows and are considered among Britain's most haunted locations. Many visitors and guides have reported unusual experiences. While we can't guarantee paranormal encounters, we share both historical facts and the many documented strange occurrences reported over the years.",
      },
    ],
  },
  {
    title: "Whisky Experience & Tasting Journey",
    description:
      "Embark on a guided whisky tasting adventure with a certified whisky expert, learning about Scotland's national drink while sampling premium single malts from different regions and distilleries.",
    city: "Edinburgh",
    country: "United Kingdom",
    region: "Scotland",
    images: [
      "/images/tours/edinburgh/whisky-tasting.jpg",
      "/images/tours/edinburgh/scotch-whisky.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Whisky", "Tasting", "Scottish Culture"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address:
        "The Scotch Whisky Experience, 354 Castlehill, Edinburgh EH1 2NE",
      coordinates: {
        latitude: 55.9487,
        longitude: -3.1953,
      },
      instructions:
        "Meet in the lobby of The Scotch Whisky Experience. Look for your guide wearing a tartan waistcoat with a 'Whisky Journey' name badge.",
      contactNumber: "+44 131 555 4567",
      contactEmail: "whisky@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-22",
      "2023-12-29",
      "2024-01-05",
      "2024-01-12",
      "2024-01-19",
      "2024-01-26",
      "2024-02-02",
      "2024-02-09",
      "2024-02-16",
      "2024-02-23",
    ],

    highlights: [
      "Guided tasting of five premium single malt whiskies from different Scottish regions",
      "Learn professional tasting techniques from a certified whisky expert",
      "Discover the history and production process of Scotland's national drink",
      "Experience food pairings that complement each whisky's unique characteristics",
      "View the world's largest collection of Scotch whisky",
    ],

    inclusions: [
      "Professional whisky expert guide",
      "Tasting of 5 premium single malt whiskies",
      "Scottish cheese and chocolate pairings",
      "Commemorative Glencairn whisky glass to take home",
      "Whisky tasting notes booklet",
      "Bottle of water and oatcakes to cleanse the palate",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food beyond the included pairings",
      "Full bottles of whisky (available for purchase)",
      "Gratuities (optional)",
    ],

    itinerary: [
      "18:00 - Meet at The Scotch Whisky Experience for welcome introduction",
      "18:15 - Brief overview of whisky history and production process",
      "18:30 - Learn professional nosing and tasting techniques",
      "18:45 - First whisky tasting: Lowland region with cheese pairing",
      "19:15 - Second whisky tasting: Highland region with chocolate pairing",
      "19:45 - Third whisky tasting: Speyside region with dried fruit pairing",
      "20:15 - Fourth whisky tasting: Islay region with smoked salmon pairing",
      "20:45 - Final whisky tasting: Special selection with artisan shortbread",
      "21:00 - Tour conclusion with recommendations for whisky bars to continue your evening",
    ],

    faqs: [
      {
        question: "How many whiskies will we taste?",
        answer:
          "The experience includes guided tastings of five premium single malt whiskies selected to showcase Scotland's diverse whisky regions (Highlands, Speyside, Islay, Lowlands, and Campbeltown). Each whisky is paired with artisanal Scottish cheeses or chocolate to complement its specific flavor profile.",
      },
      {
        question:
          "I don't know much about whisky. Is this suitable for beginners?",
        answer:
          "Absolutely! This experience is designed for both novices and connoisseurs. Our whisky expert will guide you through the basics of appreciation, including proper nosing and tasting techniques. You'll learn about production methods, regional characteristics, and how to identify different flavor notes in a friendly, unpretentious atmosphere.",
      },
      {
        question: "Is there a non-alcoholic option available?",
        answer:
          "Yes, we offer a non-alcoholic alternative featuring premium Scottish craft beverages, including artisanal tonics and specialty soft drinks. Please let us know your preference when booking so we can prepare accordingly.",
      },
    ],
  },
  {
    title: "Scottish Highlands Day Trip: Loch Ness & Glencoe",
    description:
      "Journey through Scotland's breathtaking landscapes on this full-day adventure to the Highlands, visiting the legendary Loch Ness, the dramatic valleys of Glencoe, and picturesque villages with photo stops and local experiences.",
    images: [
      "/images/tours/edinburgh/loch-ness.jpg",
      "/images/tours/edinburgh/glencoe.jpg",
    ],
    duration: "9 hours",
    price: "$125",
    rating: 4.8,
    tags: ["Highlands", "Scenery", "Day Trip"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "adventure",

    meetingPoint: {
      address: "Edinburgh Bus Station, Elder Street, Edinburgh EH1 3DX",
      coordinates: {
        latitude: 55.9559,
        longitude: -3.1874,
      },
      instructions:
        "Meet at the Highland Explorer Tours departure point inside Edinburgh Bus Station. Look for the luxury coach with 'Highlands Day Trip' signage.",
      contactNumber: "+44 131 555 5678",
      contactEmail: "highlands@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-19",
      "2023-12-23",
      "2023-12-30",
      "2024-01-06",
      "2024-01-13",
      "2024-01-20",
      "2024-01-27",
      "2024-02-03",
      "2024-02-10",
      "2024-02-17",
      "2024-02-24",
    ],

    highlights: [
      "Travel through the stunning scenery of the Scottish Highlands",
      "Visit the historic battlefield of Culloden",
      "Enjoy free time at Loch Ness with optional boat cruise",
      "Experience the dramatic landscape of Glencoe and hear its tragic history",
      "Photo stops at scenic viewpoints including Loch Lomond",
    ],

    inclusions: [
      "Transportation in luxury air-conditioned coach",
      "Professional driver and separate tour guide",
      "Live commentary throughout the journey",
      "Bottled water and Scottish shortbread",
      "Free time at Loch Ness and Glencoe",
      "Photo stops at key viewpoints",
      "Small group size (maximum 24 participants)",
    ],

    exclusions: [
      "Loch Ness boat cruise (available as add-on, £15 per person)",
      "Entrance to Urquhart Castle (optional, £12 per person)",
      "Lunch (stops made at locations with food options)",
      "Gratuities (optional)",
      "Hotel pickup and drop-off",
    ],

    itinerary: [
      "08:00 - Depart Edinburgh Bus Station in luxury coach",
      "09:30 - Coffee stop at Pitlochry with time to stretch legs",
      "10:30 - Travel through the Cairngorms National Park with commentary",
      "11:30 - Visit Culloden Battlefield with time to explore visitor center",
      "12:30 - Arrive at Loch Ness with free time for lunch and optional boat cruise",
      "14:30 - Depart Loch Ness and travel through Great Glen",
      "15:30 - Arrive at Glencoe for dramatic valley views and historical commentary",
      "16:15 - Photo stop at Loch Lomond viewpoint",
      "17:00 - Comfort break in Luss village on Loch Lomond shores",
      "19:00 - Arrive back in Edinburgh city center",
    ],

    faqs: [
      {
        question: "How long is the drive to the Highlands?",
        answer:
          "The total driving time is approximately 5 hours round trip, broken into segments between stops. The journey itself is a highlight, with spectacular scenery throughout and regular breaks for photos, refreshments, and exploration. Our comfortable coach has panoramic windows, air conditioning, and onboard Wi-Fi.",
      },
      {
        question: "Will we see the Loch Ness Monster?",
        answer:
          "While we can't guarantee Nessie sightings (she's quite shy!), you'll have free time at Loch Ness to take a scenic cruise, visit Urquhart Castle ruins, or simply enjoy the views while learning about the legends and scientific investigations surrounding Scotland's most famous mystery.",
      },
      {
        question: "Is this tour available year-round?",
        answer:
          "Yes, we operate this tour throughout the year. Each season offers a different perspective on the Highlands: summer brings lush landscapes and longer daylight hours, autumn features spectacular foliage, winter often adds snow-capped mountains, and spring showcases wildflowers and waterfalls at their peak flow.",
      },
    ],
  },
  {
    title: "Harry Potter's Edinburgh: The Real Inspiration",
    description:
      "Discover the locations and stories that inspired J.K. Rowling while writing Harry Potter in Edinburgh. Visit the cafés where she wrote, explore the real-life Diagon Alley, and see the graves that influenced character names.",
    images: [
      "/images/tours/edinburgh/harry-potter-cafe.jpg",
      "/images/tours/edinburgh/victoria-street.jpg",
    ],
    duration: "2.5 hours",
    price: "$45",
    rating: 4.7,
    tags: ["Harry Potter", "Literary", "Walking Tour"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "The Elephant House, 21 George IV Bridge, Edinburgh EH1 1EN",
      coordinates: {
        latitude: 55.9473,
        longitude: -3.1913,
      },
      instructions:
        "Meet outside The Elephant House café. Your guide will be wearing wizarding robes and carrying a wand.",
      contactNumber: "+44 131 555 6789",
      contactEmail: "potterlore@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-17",
      "2023-12-23",
      "2023-12-24",
      "2023-12-30",
      "2024-01-06",
      "2024-01-07",
      "2024-01-13",
      "2024-01-14",
      "2024-01-20",
      "2024-01-21",
      "2024-01-27",
      "2024-01-28",
      "2024-02-03",
      "2024-02-04",
      "2024-02-10",
      "2024-02-11",
      "2024-02-17",
      "2024-02-18",
      "2024-02-24",
      "2024-02-25",
    ],

    highlights: [
      "Visit The Elephant House and Spoon cafés where J.K. Rowling wrote the early novels",
      "Explore Victoria Street, the inspiration for Diagon Alley",
      "See Greyfriars Kirkyard graves that inspired character names like McGonagall and Tom Riddle",
      "Learn about Edinburgh locations that inspired Hogwarts scenes",
      "Discover the connections between Scottish history and Harry Potter themes",
    ],

    inclusions: [
      "Potter-enthusiast guide in character costume",
      "Map of Potter-related Edinburgh locations",
      "Themed quiz with magical prize",
      "Chocolate 'wizard coin' for each participant",
      "Edinburgh-Hogwarts connection photo booklet",
    ],

    exclusions: [
      "Entry to cafés (optional stop after tour)",
      "Transportation to and from meeting point",
      "Food and beverages",
      "Gratuities (optional)",
      "Hogwarts acceptance letter (sadly)",
    ],

    itinerary: [
      "10:00 - Meet outside The Elephant House for introduction to J.K. Rowling's Edinburgh",
      "10:15 - Visit Spoon café (formerly Nicolson's) where the first Potter novel was written",
      "10:45 - Walk to George Heriot's School to discuss Hogwarts inspiration",
      "11:15 - Explore Greyfriars Kirkyard to find the graves that inspired character names",
      "11:45 - Walk down magical Victoria Street (inspiration for Diagon Alley)",
      "12:00 - Visit Grassmarket area for more Potter connections",
      "12:15 - Potter-themed quiz with prizes",
      "12:30 - Tour concludes with recommendations for Potter fans",
    ],

    faqs: [
      {
        question: "Do I need to be a Harry Potter expert to enjoy this tour?",
        answer:
          "Not at all! This tour is designed for everyone from dedicated Potterheads to those with casual interest in the books or films. Our guides explain the connections clearly and include the wider literary and historical context of Edinburgh that influenced Rowling's writing. Even those with limited Harry Potter knowledge will enjoy discovering how a real city inspired aspects of this magical world.",
      },
      {
        question:
          "Will we enter The Elephant House café where J.K. Rowling wrote?",
        answer:
          "We stop outside The Elephant House and other significant writing locations, but entrance is not included in the tour as these are working businesses. You're welcome to visit them independently before or after the tour. Our guide will provide recommendations for the best times to visit to avoid crowds.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes! This is a family-friendly tour designed to engage Harry Potter fans of all ages. Our guides are skilled at involving younger visitors with interactive elements and age-appropriate trivia. We recommend this tour for children aged 7 and up who are familiar with at least some of the Harry Potter stories.",
      },
    ],
  },
  {
    title: "Edinburgh Food Tour: Scottish Culinary Delights",
    description:
      "Taste your way through Edinburgh's exciting food scene with a guided culinary journey featuring traditional Scottish dishes, artisanal products, and contemporary Scottish cuisine at award-winning establishments.",
    city: "Edinburgh",
    country: "United Kingdom",
    region: "Scotland",
    images: [
      "/images/tours/edinburgh/scottish-food.jpg",
      "/images/tours/edinburgh/edinburgh-restaurants.jpg",
    ],
    duration: "3.5 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Food", "Culinary", "Scottish"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address: "Edinburgh Farmers' Market, Castle Terrace, Edinburgh EH1 2EN",
      coordinates: {
        latitude: 55.9468,
        longitude: -3.2048,
      },
      instructions:
        "Meet at the entrance to Edinburgh Farmers' Market on Castle Terrace. Your guide will be holding a 'Scottish Food Trail' sign.",
      contactNumber: "+44 131 555 7890",
      contactEmail: "foodtour@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-23",
      "2023-12-30",
      "2024-01-06",
      "2024-01-13",
      "2024-01-20",
      "2024-01-27",
      "2024-02-03",
      "2024-02-10",
      "2024-02-17",
      "2024-02-24",
    ],

    highlights: [
      "Sample traditional Scottish dishes reimagined by local chefs",
      "Try award-winning Scottish seafood, cheese, and charcuterie",
      "Learn about Scotland's food heritage and modern culinary scene",
      "Visit specialty food shops and meet local producers",
      "Enjoy whisky and Scottish craft beer pairings with selected dishes",
    ],

    inclusions: [
      "Culinary expert guide",
      "Food tastings at 6 different establishments",
      "Three drink pairings (whisky, beer, and non-alcoholic option)",
      "Behind-the-scenes access at select venues",
      "Recipe booklet featuring Scottish classics",
      "Discount voucher for local food market",
    ],

    exclusions: [
      "Additional food and drinks beyond the tastings",
      "Transportation to and from meeting point",
      "Gratuities (optional)",
      "Personal shopping purchases",
    ],

    itinerary: [
      "11:00 - Meet at Edinburgh Farmers' Market for introduction and first tastings",
      "11:30 - Visit award-winning cheese shop with tasting and explanation",
      "12:00 - Sample Scottish seafood at specialist fishmonger",
      "12:30 - Visit historic pub for haggis tasting with whisky pairing",
      "13:15 - Artisan bakery stop for traditional Scottish baked goods",
      "13:45 - Craft butcher visit for Scottish charcuterie with beer pairing",
      "14:15 - Final stop at contemporary Scottish restaurant for innovative dessert",
      "14:30 - Tour concludes with recommendations for evening dining options",
    ],

    faqs: [
      {
        question: "Will we try haggis on this tour?",
        answer:
          "Yes, you'll have the opportunity to try traditional haggis prepared by award-winning chefs who make this classic Scottish dish approachable even for first-timers. For the adventurous, we offer traditional haggis, while those more hesitant can try contemporary variations like haggis bon-bons or vegetarian haggis. Our guide explains the history and preparation of this iconic Scottish dish.",
      },
      {
        question: "How much food is included?",
        answer:
          "The tour includes 6-7 generous tastings that amount to a substantial meal. Come hungry! Highlights include Scottish seafood, artisanal cheeses, traditional sweets, locally-sourced meat specialties, and of course, a whisky pairing. We can accommodate most dietary requirements with advance notice.",
      },
      {
        question: "Is alcohol included in the tour?",
        answer:
          "Yes, the tour includes selected alcoholic drink pairings (primarily whisky and locally-brewed beer) with some of the food tastings. Non-alcoholic alternatives are available upon request - please let us know when booking.",
      },
    ],
  },
  {
    title: "Edinburgh Ghost Tour: Murders & Mysteries",
    description:
      "Experience Edinburgh's darker side on this evening walking tour through atmospheric alleyways and haunted locations, featuring spine-chilling tales of notorious murders, body-snatchers, witch trials, and supernatural occurrences.",
    images: [
      "/images/tours/edinburgh/ghost-tour.jpg",
      "/images/tours/edinburgh/royal-mile-night.jpg",
    ],
    duration: "2 hours",
    price: "$30",
    rating: 4.6,
    tags: ["Ghost Tour", "Evening", "Spooky"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "nightlife",

    meetingPoint: {
      address: "Mercat Cross, High Street, Royal Mile, Edinburgh EH1 1RF",
      coordinates: {
        latitude: 55.95,
        longitude: -3.1875,
      },
      instructions:
        "Meet at the Mercat Cross on the Royal Mile. Your guide will be dressed in a black cloak carrying a lantern.",
      contactNumber: "+44 131 555 8901",
      contactEmail: "ghosttour@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-16",
      "2023-12-17",
      "2023-12-22",
      "2023-12-23",
      "2023-12-29",
      "2023-12-30",
      "2024-01-05",
      "2024-01-06",
      "2024-01-12",
      "2024-01-13",
      "2024-01-19",
      "2024-01-20",
      "2024-01-26",
      "2024-01-27",
      "2024-02-02",
      "2024-02-03",
      "2024-02-09",
      "2024-02-10",
      "2024-02-16",
      "2024-02-17",
      "2024-02-23",
      "2024-02-24",
    ],

    highlights: [
      "Walk through Edinburgh's most haunted locations after dark",
      "Hear tales of infamous Edinburgh characters like Burke and Hare",
      "Visit execution sites and learn about medieval punishments",
      "Discover ghostly legends and documented supernatural occurrences",
      "Explore atmospheric closes (alleyways) and courtyards normally missed by visitors",
    ],

    inclusions: [
      "Professional storyteller guide in period costume",
      "Access to restricted closes normally closed to the public",
      "Spine-chilling tales mixing history and supernatural",
      "Small group size for intimate atmosphere (maximum 15 participants)",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Food and drinks",
      "Entry to buildings and museums",
      "Gratuities (optional)",
      "Guarantee of paranormal experiences (ghosts operate on their own schedule)",
    ],

    itinerary: [
      "20:00 - Meet at Mercat Cross for introduction to Edinburgh's dark history",
      "20:15 - Walk to former execution site with tales of public punishment",
      "20:30 - Visit Canongate Kirk and its haunted graveyard",
      "20:45 - Explore Mary King's Close area and learn about plague history",
      "21:00 - Hear tales of body-snatchers Burke and Hare",
      "21:15 - Walk through haunted closes with stories of documented apparitions",
      "21:30 - Visit the site of witch trials and last witch burning",
      "21:45 - Final ghost stories and legends at a notorious haunting site",
      "22:00 - Tour concludes near Royal Mile",
    ],

    faqs: [
      {
        question: "How scary is this tour?",
        answer:
          "This tour focuses on historical tales of murder, crime and supernatural events delivered in an entertaining storytelling style. While we don't use jump scares or actors, the combination of authentic locations and grisly historical tales creates a genuinely eerie atmosphere. We recommend this tour for ages 12+ due to the mature content of some stories.",
      },
      {
        question: "Does this tour enter any buildings?",
        answer:
          "This particular ghost tour is primarily an outdoor walking tour through streets, closes (alleyways), and graveyards. We stop outside notorious locations while your guide shares their dark histories. For underground vault access, please see our 'Underground Edinburgh' tour instead.",
      },
      {
        question: "Is Edinburgh really haunted?",
        answer:
          "Edinburgh is consistently ranked among the most haunted cities in the world, with centuries of documented paranormal activity. Whether you're a skeptic or believer, the city's violent history and preserved medieval architecture create an undeniably atmospheric setting for exploring these stories. Our guides present both the historical facts and reported paranormal experiences, leaving you to form your own conclusions.",
      },
    ],
  },
  {
    title: "Royal Yacht Britannia & Edinburgh Waterfront",
    description:
      "Step aboard the Queen's former floating residence, the Royal Yacht Britannia, for an intimate glimpse into royal life at sea, followed by exploration of Edinburgh's revitalized waterfront district with its modern architecture and maritime heritage.",
    images: [
      "/images/tours/edinburgh/royal-yacht.jpg",
      "/images/tours/edinburgh/leith-waterfront.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Royal", "Maritime", "Historical"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "historical",

    meetingPoint: {
      address: "Ocean Terminal, Ocean Drive, Leith, Edinburgh EH6 6JJ",
      coordinates: {
        latitude: 55.9761,
        longitude: -3.1687,
      },
      instructions:
        "Meet at the Royal Yacht Britannia Visitor Centre entrance inside Ocean Terminal Shopping Centre, second floor. Your guide will be holding a small model yacht.",
      contactNumber: "+44 131 555 9012",
      contactEmail: "britannia@paragontrails.com",
    },

    availableDates: [
      "2023-12-17",
      "2023-12-24",
      "2023-12-31",
      "2024-01-07",
      "2024-01-14",
      "2024-01-21",
      "2024-01-28",
      "2024-02-04",
      "2024-02-11",
      "2024-02-18",
      "2024-02-25",
    ],

    highlights: [
      "Guided tour of the Royal Yacht Britannia with royal anecdotes",
      "See the State Apartments where royalty entertained world leaders",
      "Visit the Queen's bedroom and the Royal Family's private quarters",
      "Explore the gleaming Engine Room and crew's quarters",
      "Guided walk through Leith's revitalized waterfront with architecture commentary",
    ],

    inclusions: [
      "Priority entrance to Royal Yacht Britannia",
      "Expert guide with royal history knowledge",
      "Audio guide in multiple languages",
      "Transportation from central Edinburgh to Leith (if option selected)",
      "Tea or coffee at the Royal Deck Tea Room",
      "Waterfront architectural walking tour",
    ],

    exclusions: [
      "Hotel pickup and drop-off (unless transport option selected)",
      "Additional food and beverages beyond included tea/coffee",
      "Gratuities (optional)",
      "Souvenir photographs (available for purchase onboard)",
    ],

    itinerary: [
      "10:00 - Meet at Ocean Terminal for introduction (or 09:30 at city center if transport option selected)",
      "10:15 - Priority boarding of Royal Yacht Britannia",
      "10:30 - Guided tour of State Apartments and royal reception rooms",
      "11:00 - Visit the Royal Family's private quarters",
      "11:30 - Explore the crew's quarters and working areas",
      "12:00 - Tea break at the Royal Deck Tea Room",
      "12:30 - Visit the Engine Room and technical areas",
      "13:00 - Disembark and begin waterfront walking tour",
      "13:30 - Explore Leith's maritime heritage sites",
      "14:00 - Tour concludes at The Shore area with restaurant recommendations",
    ],

    faqs: [
      {
        question: "What will we see on the Royal Yacht Britannia?",
        answer:
          "You'll explore five main decks of this magnificent ship, including the State Apartments where the royal family entertained dignitaries, the Queen's bedroom, the crew's quarters, and the gleaming engine room. The audio guide (included) provides fascinating insights into life aboard for both royalty and crew during the yacht's 40+ years of service.",
      },
      {
        question: "Is transportation included to reach the Royal Yacht?",
        answer:
          "Yes, we provide comfortable transportation from central Edinburgh to the Ocean Terminal where Britannia is docked. This scenic drive takes approximately 20 minutes and includes commentary on Edinburgh's historic connection to the sea.",
      },
      {
        question: "What will we see in the waterfront district?",
        answer:
          "After visiting Britannia, we'll explore Leith - Edinburgh's historic port area that has transformed into a vibrant waterfront district. Highlights include the Shore area with its seafood restaurants, historic pubs once frequented by sailors, and architectural points of interest that showcase Leith's evolution from working port to cultural hotspot.",
      },
    ],
  },
  {
    title: "Outlander Filming Locations Day Tour",
    description:
      "Journey through the real places that bring Outlander to life, visiting key filming locations including Castle Leoch, Fort William, and Lallybroch. Hear behind-the-scenes stories and discover the historical facts behind the hit series.",
    images: [
      "/images/tours/edinburgh/outlander-castle.jpg",
      "/images/tours/edinburgh/craigh-na-dun.jpg",
    ],
    duration: "9 hours",
    price: "$115",
    rating: 4.8,
    tags: ["Outlander", "Film Locations", "Day Trip"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Waverly Bridge Bus Stop, Edinburgh EH1 1BQ",
      coordinates: {
        latitude: 55.9522,
        longitude: -3.1883,
      },
      instructions:
        "Meet at the designated tour bus stop on Waverley Bridge, opposite the train station. Look for the coach with 'Outlander Tours' signage.",
      contactNumber: "+44 131 555 0123",
      contactEmail: "outlander@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-23",
      "2023-12-30",
      "2024-01-06",
      "2024-01-13",
      "2024-01-20",
      "2024-01-27",
      "2024-02-03",
      "2024-02-10",
      "2024-02-17",
      "2024-02-24",
    ],

    highlights: [
      "Visit Doune Castle, which served as Castle Leoch in the series",
      "Explore Blackness Castle, used as Fort William's exterior",
      "See Midhope Castle, the real-life location of Lallybroch",
      "Discover the charming village of Culross that became Cranesmuir",
      "Learn behind-the-scenes stories and historical facts at each location",
    ],

    inclusions: [
      "Transportation in comfortable air-conditioned coach",
      "Professional driver and Outlander enthusiast guide",
      "Entrance fees to all castles and filming locations",
      "Themed Outlander information pack",
      "Bottled water and Scottish shortbread",
      "Photo opportunities at key filming spots",
    ],

    exclusions: [
      "Lunch (stop made at location with food options)",
      "Gratuities (optional)",
      "Outlander merchandise (available for purchase at some locations)",
      "Hotel pickup and drop-off",
    ],

    itinerary: [
      "08:30 - Depart Edinburgh from Waverley Bridge",
      "09:30 - Arrive at Doune Castle (Castle Leoch) for guided tour",
      "10:45 - Visit to Culross (Cranesmuir) with free time to explore",
      "12:00 - Lunch break at a local restaurant (not included)",
      "13:15 - Travel to Blackness Castle (Fort William) for guided visit",
      "14:30 - Visit Midhope Castle (Lallybroch) for exterior views and photos",
      "15:30 - Stop at Linlithgow Palace (Wentworth Prison)",
      "16:30 - Final stop at Falkland (which doubled as 1940s Inverness)",
      "17:30 - Return journey to Edinburgh",
      "18:30 - Arrive back in Edinburgh city center",
    ],

    faqs: [
      {
        question: "Do I need to have watched Outlander to enjoy this tour?",
        answer:
          "While Outlander fans will appreciate the specific show connections, this tour also appeals to those who haven't seen the series. The locations visited are stunning historical sites in their own right, and our guides provide both Outlander context and genuine Scottish history. That said, be aware that discussions may contain plot details from the books and TV series.",
      },
      {
        question: "Which Outlander locations do we visit?",
        answer:
          "Our itinerary typically includes Doune Castle (Castle Leoch), Blackness Castle (Fort William), Culross (Cranesmuir), Falkland (1940s Inverness), and Midhope Castle (Lallybroch exterior). Occasionally, substitutions may be necessary due to filming schedules or site closures. All entrance fees are included in the tour price.",
      },
      {
        question: "Is there a lot of walking involved?",
        answer:
          "This tour includes moderate walking at each location, typically 15-30 minutes per site on various terrains including gravel paths, grass, and stone steps. While not strenuous, comfortable walking shoes are essential. Some castle locations have optional towers or ramparts requiring more climbing for those interested.",
      },
    ],
  },
  {
    title: "Edinburgh Literary Pub Tour",
    description:
      "Combine Edinburgh's pub culture with its rich literary heritage on this entertaining walking tour led by actors who bring to life the stories of famous Scottish writers from Robert Burns to J.K. Rowling while visiting their favorite watering holes.",
    city: "Edinburgh",
    country: "United Kingdom",
    region: "Scotland",
    images: [
      "/images/tours/edinburgh/literary-pub.jpg",
      "/images/tours/edinburgh/writers-museum.jpg",
    ],
    duration: "2.5 hours",
    price: "$40",
    rating: 4.7,
    tags: ["Literary", "Pubs", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "nightlife",

    meetingPoint: {
      address: "The Beehive Inn, 18 Grassmarket, Edinburgh EH1 2JU",
      coordinates: {
        latitude: 55.9471,
        longitude: -3.1965,
      },
      instructions:
        "Meet in the upstairs room of The Beehive Inn pub in the Grassmarket. Look for your guides in period costume.",
      contactNumber: "+44 131 555 1234",
      contactEmail: "litpubtour@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-22",
      "2023-12-29",
      "2024-01-05",
      "2024-01-12",
      "2024-01-19",
      "2024-01-26",
      "2024-02-02",
      "2024-02-09",
      "2024-02-16",
      "2024-02-23",
    ],

    highlights: [
      "Visit four historic Edinburgh pubs with literary connections",
      "Enjoy theatrical performances bringing famous Scottish writers to life",
      "Learn about Edinburgh's literary heritage from Robert Burns to J.K. Rowling",
      "Hear amusing anecdotes about writers' lives, works and drinking habits",
      "Experience the contrast between Edinburgh's Old and New Towns",
    ],

    inclusions: [
      "Professional actor-guides in period costume",
      "Theatrical performances at each venue",
      "Literary map of Edinburgh to take home",
      "Reserved areas in each pub",
      "Walking tour between venues",
    ],

    exclusions: [
      "Drinks (available for purchase at each pub)",
      "Food (available for purchase at some venues)",
      "Gratuities (optional)",
      "Hotel pickup and drop-off",
    ],

    itinerary: [
      "19:30 - Meet at The Beehive Inn for introduction and first performance",
      "19:45 - Learn about Robert Burns and Scottish literary traditions",
      "20:00 - Walk to second pub in Old Town with commentary",
      "20:15 - Performance about Sir Walter Scott and Robert Louis Stevenson",
      "20:45 - Walk to New Town pub with commentary on Edinburgh's development",
      "21:00 - Learn about the Edinburgh literary scene of the early 20th century",
      "21:30 - Final pub stop with performance about contemporary Scottish writers",
      "21:50 - Literary quiz with small prize",
      "22:00 - Tour concludes with recommendations for further literary exploration",
    ],

    faqs: [
      {
        question: "Does this tour include drinks?",
        answer:
          "The tour price does not include drinks, giving you the flexibility to purchase beverages according to your preference at each pub. We visit 4 historic pubs with time at each location to purchase drinks if desired. Non-alcoholic options are available at all venues.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "We cover approximately 1 mile total, walking between pubs in Edinburgh's Old and New Towns. The route includes some uphill sections and cobblestone streets. The pace is leisurely with plenty of stops, but comfortable footwear is recommended.",
      },
      {
        question: "Which authors are featured on the tour?",
        answer:
          "The tour covers a range of Scottish literary figures including Robert Burns, Sir Walter Scott, Robert Louis Stevenson, Sir Arthur Conan Doyle, and contemporary authors like Ian Rankin and J.K. Rowling. Through dramatic performances and storytelling, our actor-guides bring to life both the writers and characters they created.",
      },
    ],
  },
];

export default edinburghTours;
