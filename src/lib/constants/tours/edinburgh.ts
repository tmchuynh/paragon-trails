import { Tour } from "@/lib/interfaces/services/tours";
export const edinburghTours: Tour[] = [
  {
    title: "Underground Edinburgh & Ghost Stories",
    description:
      "Descend beneath the Royal Mile to explore Edinburgh's forgotten underground city of Mary King's Close, hear tales of plague victims and ghostly residents, and visit haunted locations with a local historian and master storyteller.",
    images: [
      "/images/tours/edinburgh/mary-kings-close.jpg",
      "/images/tours/edinburgh/underground-vaults.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Ghost Stories", "Underground", "History"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Claire MacDonald",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How scary is this tour?",
        answer:
          "This tour focuses on historical accuracy with atmospheric storytelling rather than jump scares. While some stories involve plague, death, and alleged hauntings, they're presented in a captivating educational manner rather than for shock value. That said, the underground locations are dimly lit and can feel eerie, which contributes to the experience.",
      },
      {
        question: "Is the tour suitable for children?",
        answer:
          "The tour is recommended for ages 12 and up due to its historical themes and ghost stories. Younger children may find the atmosphere unsettling. Parental discretion is advised.",
      },
      {
        question: "Are the underground spaces accessible?",
        answer:
          "The underground portions involve narrow passageways, uneven surfaces, and stairs with no elevator access. Those with mobility limitations or claustrophobia may find this challenging. Please contact us in advance if you have concerns, as we offer an alternative 'Haunted Edinburgh' above-ground route covering similar historical themes.",
      },
      {
        question: "Can we take photographs during the tour?",
        answer:
          "Photography is permitted in most locations, though some restricted areas of Mary King's Close prohibit photography to preserve the historical artifacts. Flash photography is discouraged throughout as it diminishes the atmosphere. Your guide will clearly indicate where photos are allowed or restricted.",
      },
    ],
  },
  {
    title: "Scottish Whisky Journey & Tasting Masterclass",
    description:
      "Embark on a guided exploration of Scotland's national drink with visits to historic pubs, exclusive tastings of rare single malts, and expert insights into whisky production regions, flavor profiles, and drinking traditions.",
    images: [
      "/images/tours/edinburgh/whisky-tasting.jpg",
      "/images/tours/edinburgh/historic-pub.jpg",
    ],
    duration: "4 hours",
    price: "$125",
    rating: 4.9,
    tags: ["Whisky", "Tasting", "Scottish Culture"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Alistair Campbell",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many whiskies will we taste?",
        answer:
          "The tour includes guided tastings of 6 premium single malt whiskies selected to showcase Scotland's diverse whisky regions and styles. Each whisky is paired with information about its production, history, and tasting notes. Water and small food pairings are provided to complement the experience.",
      },
      {
        question: "Do I need prior whisky knowledge?",
        answer:
          "No prior knowledge is required. The tour is designed for whisky enthusiasts of all levels, from beginners to connoisseurs. Our expert guide will explain everything you need to know about whisky production, tasting techniques, and the unique characteristics of each whisky sampled.",
      },
      {
        question: "Is there a non-alcoholic option available?",
        answer:
          "Yes, we offer a non-alcoholic alternative featuring Scottish craft sodas, specialty teas, and alcohol-free 'spirit' alternatives with similar complexity to whisky. Please notify us when booking if you prefer this option.",
      },
      {
        question: "What's the difference between whisky and whiskey?",
        answer:
          "The spelling difference reflects origin traditions: 'Whisky' (without the 'e') is used in Scotland, Canada, and Japan, while 'Whiskey' (with the 'e') is used in Ireland and the United States. In Scotland, it's always 'whisky'—and locals are quite particular about this distinction! Our tour explains these differences along with the various production methods that create distinct regional styles.",
      },
    ],
  },
  {
    title: "Edinburgh Castle & Royal Mile Historians' Tour",
    description:
      "Discover the dramatic history of Scotland's most iconic fortress with exclusive access to areas normally closed to the public. Our expert historian guides you through Edinburgh Castle's royal chambers, ancient dungeons, and military museums, before exploring the historic Royal Mile with its hidden closes and centuries of intrigue.",
    images: [
      "/images/tours/edinburgh/edinburgh-castle.jpg",
      "/images/tours/edinburgh/royal-mile.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Castle", "Royal History", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Professor James MacDonald",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Do we get to skip the queue at Edinburgh Castle?",
        answer:
          "Yes, our tour includes pre-arranged priority access to Edinburgh Castle, allowing you to bypass the often lengthy general admission lines. This is particularly valuable during summer months when wait times can exceed 1-2 hours. We coordinate our arrival to coincide with quieter periods for a more enjoyable experience.",
      },
      {
        question: "What special access does this tour include?",
        answer:
          "Our special partnership with Historic Scotland provides access to selected areas not included in general admission, such as the Governor's House, certain sections of the military prisons, and occasionally the royal jewel vault when not crowded. The specific areas vary based on castle operations, but always include at least one exclusive location.",
      },
      {
        question: "Will we see the One O'Clock Gun being fired?",
        answer:
          "If you select our morning tour option, we time your visit to witness the famous One O'Clock Gun firing ceremony. This tradition dates back to 1861 when it helped ships in the Firth of Forth set their maritime clocks. Your guide will position your group in an optimal viewing location and explain the fascinating history behind this daily ritual.",
      },
      {
        question: "How much walking does this tour involve?",
        answer:
          "This tour involves approximately 3 miles (5 km) of walking, including steep inclines, cobblestone streets, and numerous steps within the castle. We maintain a moderate pace with frequent stops for historical explanations and rest. Comfortable walking shoes are strongly recommended. While the castle has made efforts toward accessibility, some historic sections remain challenging for those with mobility limitations.",
      },
    ],
  },
  {
    title: "Scottish Highlands Day Adventure: Loch Ness & Glencoe",
    description:
      "Journey through Scotland's breathtaking landscapes on this full-day adventure from Edinburgh. Traverse the haunting battlefield of Culloden, cruise the mysterious waters of Loch Ness, and stand in awe amidst the dramatic mountain scenery of Glencoe with its tragic clan history.",
    images: [
      "/images/tours/edinburgh/loch-ness.jpg",
      "/images/tours/edinburgh/glencoe.jpg",
    ],
    duration: "12 hours",
    price: "$145",
    rating: 4.8,
    tags: ["Highlands", "Nature", "History"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Callum Stewart",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Is this a private tour or will we join others?",
        answer:
          "This is a small group tour with a maximum of 16 passengers, traveling in a comfortable climate-controlled mini-coach. The small group size allows access to locations bigger coaches can't reach and ensures a more personalized experience with your Highland guide. Private tours can be arranged for an additional fee.",
      },
      {
        question: "How long is the drive to the Highlands?",
        answer:
          "The journey from Edinburgh to our first Highland stop takes approximately 2.5 hours, but we make a short comfort stop along the way. The scenery changes dramatically as we travel, and your guide provides fascinating commentary throughout the journey, making the travel time an enjoyable part of the experience.",
      },
      {
        question: "Is the Loch Ness boat cruise included in the price?",
        answer:
          "The 1-hour Loch Ness cruise is optional at £16 per adult and £10 per child (payable on the day). Approximately 90% of our guests choose this option as it offers unique perspectives of the loch and Urquhart Castle ruins. Those who prefer not to cruise can explore the Loch Ness Exhibition Centre or take a shoreline walk with our guide.",
      },
      {
        question: "Will I see the Loch Ness Monster?",
        answer:
          "While Nessie sightings can't be guaranteed (she's quite shy!), our boat is equipped with underwater scanning equipment that provides interesting sonar readings of the loch's depths. Your guide will share both the scientific explanations and the legendary tales of Scotland's most famous mythical creature, allowing you to decide what to believe!",
      },
    ],
  },
  {
    title: "Literary Edinburgh: Writers & Poets Walking Tour",
    description:
      "Follow in the footsteps of Edinburgh's literary giants—from Robert Burns and Sir Walter Scott to J.K. Rowling and Ian Rankin. Visit the haunts that inspired classic characters, see the café where Harry Potter was written, and enjoy readings in atmospheric locations connected to Scotland's greatest writers.",
    images: [
      "/images/tours/edinburgh/writers-museum.jpg",
      "/images/tours/edinburgh/elephant-house-cafe.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Literature", "Walking Tour", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Isla MacLeod",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Which authors and books are featured on the tour?",
        answer:
          "The tour covers a wide literary spectrum including Sir Walter Scott, Robert Louis Stevenson, Robert Burns, Arthur Conan Doyle, Ian Rankin, Alexander McCall Smith, and J.K. Rowling. We discuss classics like 'Strange Case of Dr Jekyll and Mr Hyde,' 'Sherlock Holmes,' and contemporary works like the Inspector Rebus series and the Harry Potter books. Our guides tailor the emphasis somewhat based on the group's interests.",
      },
      {
        question:
          "Will we visit the café where J.K. Rowling wrote Harry Potter?",
        answer:
          "Yes, we stop outside The Elephant House café, widely known as one of the locations where J.K. Rowling wrote early Harry Potter novels. We also visit Greyfriars Kirkyard to see tombstones that inspired character names. However, please note that since a fire in 2021, The Elephant House's interior has been closed for restoration, though the exterior remains an important literary landmark.",
      },
      {
        question: "Do I need to have read specific books to enjoy this tour?",
        answer:
          "No prior reading is necessary! Our guides provide engaging context that makes the tour enjoyable regardless of your familiarity with Scottish literature. That said, the experience is particularly enriching for those who have read works by the featured authors. We provide a recommended reading list when you book if you'd like to prepare for the tour.",
      },
    ],
  },
  {
    title: "Royal Yacht Britannia & Historic Leith Experience",
    description:
      "Step aboard the former royal yacht that served as the Queen's floating residence for over 40 years. Explore all five decks of this majestic vessel, from the State Apartments and Royal Bedrooms to the engine room, followed by time in historic Leith with its maritime heritage and vibrant food scene.",
    images: [
      "/images/tours/edinburgh/royal-yacht.jpg",
      "/images/tours/edinburgh/leith-shore.jpg",
    ],
    duration: "5 hours",
    price: "$115",
    rating: 4.8,
    tags: ["Royal", "Maritime", "Exclusive"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Callum Stewart",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Will we see the Queen's bedroom on the Royal Yacht?",
        answer:
          "Yes, the tour includes the Royal Apartments where you'll see the Queen's bedroom, Prince Philip's separate bedroom (they had adjoining doors), and the sun lounge which was Her Majesty's favorite room on the yacht. You'll also view the state dining room where world leaders were entertained, the officers' wardroom, and crew quarters, providing fascinating contrasts between royal luxury and working naval vessel efficiency.",
      },
      {
        question: "Is there time for lunch during the tour?",
        answer:
          "Yes, we include time for lunch at either the Royal Deck Tea Room aboard Britannia itself (offering spectacular views and royal recipes) or at one of Leith's award-winning seafood restaurants along the waterfront. Lunch costs are not included in the tour price, but your guide will make reservations in advance based on your preferences.",
      },
      {
        question: "How do we get to Leith from Edinburgh?",
        answer:
          "Our tour includes comfortable transportation from central Edinburgh to Leith (approximately 15 minutes by road). We use a private mini-coach for this journey, avoiding the need to navigate public transportation. The coach waits during your Britannia visit and then provides transportation between other Leith locations before returning to Edinburgh.",
      },
    ],
  },
  {
    title: "Edinburgh Festival Fringe Insider Experience",
    description:
      "Navigate the world's largest arts festival like a local with priority access to carefully selected shows, behind-the-scenes venue tours, and meetings with performers. This guided experience cuts through the overwhelming program of 3,000+ shows to deliver the best of comedy, theater, music, and street performance.",
    images: [
      "/images/tours/edinburgh/fringe-performance.jpg",
      "/images/tours/edinburgh/royal-mile-performers.jpg",
    ],
    duration: "6 hours",
    price: "$125",
    rating: 4.9,
    tags: ["Festival", "Arts", "Entertainment"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Callum Stewart",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "When does this tour operate?",
        answer:
          "This tour only operates during the Edinburgh Festival Fringe, which typically runs for approximately three weeks in August each year (exact dates vary annually). We offer the tour daily during the festival period, with morning and evening departure options to catch different types of performances.",
      },
      {
        question: "Which shows will we see?",
        answer:
          "Each tour includes tickets to three carefully selected performances representing different genres—typically a comedy show, a theater/drama piece, and a music or physical performance. Our festival experts curate these selections based on critical reviews, audience feedback, and insider knowledge, focusing on high-quality shows that wouldn't be easily discovered by visitors. The specific shows rotate throughout the festival as new productions gain acclaim.",
      },
      {
        question: "Is food and drink included?",
        answer:
          "The tour includes a stop at a festival pop-up bar/restaurant where you'll receive one complimentary drink and light appetizers. This venue offers additional food and beverages for purchase. We also provide recommendations for quick dining options between shows if desired, as timing can be tight during the festival schedule.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The Festival Fringe takes place across hundreds of venues throughout Edinburgh. Our tour typically involves 2-3 miles of walking between venues, often navigating crowded streets and occasionally climbing the city's steep hills and steps. We maintain a brisk pace to ensure timely arrival at scheduled performances. Comfortable shoes are essential, and this tour is not recommended for those with mobility limitations.",
      },
    ],
  },
  {
    title: "Scottish Highland Whisky Distillery Tour",
    description:
      "Journey into the heart of Scotch whisky production with this day trip from Edinburgh to two legendary Highland distilleries. Learn the secrets of malt whisky creation from master distillers, enjoy extensive tastings of rare expressions not available to the general public, and bring home a personalized bottled sample.",
    images: [
      "/images/tours/edinburgh/distillery-warehouse.jpg",
      "/images/tours/edinburgh/whisky-tasting.jpg",
    ],
    duration: "10 hours",
    price: "$195",
    rating: 4.9,
    tags: ["Whisky", "Distillery", "Highlands"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Alistair Campbell",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Which distilleries do we visit?",
        answer:
          "We typically visit one larger historic distillery (either Glenlivet, Dalwhinnie, or Glenfiddich depending on the day) and one smaller artisanal producer (such as Edradour, Scotland's smallest traditional distillery). This combination provides insight into both traditional methods and modern innovations in Scotch production. Each distillery offers a different perspective on whisky making traditions.",
      },
      {
        question: "How many whisky tastings are included?",
        answer:
          "The tour includes guided tastings of 8-10 different whiskies throughout the day. At each distillery, you'll sample their core range plus special editions or aged expressions. Our guide also brings along independent bottlings for comparative tastings during the journey. For those who prefer not to drive later that evening, we offer sealed 'drivers' drams' to take away and enjoy later.",
      },
      {
        question: "Is this tour suitable for whisky beginners?",
        answer:
          "Absolutely! While whisky enthusiasts will certainly appreciate the rare access and tastings, our guides excel at making whisky appreciation accessible to beginners. You'll learn the basics of production, tasting techniques, regional differences, and whisky vocabulary in an approachable way. The tour focuses on enjoyment and discovery rather than pretension.",
      },
      {
        question: "Can I purchase whisky at the distilleries?",
        answer:
          "Yes, both distilleries have excellent shops where you can purchase their products, including distillery-exclusive bottles not available elsewhere. Our guides can help with recommendations based on your taste preferences discovered during the tastings. Some distilleries also offer 'fill your own bottle' experiences direct from special casks at additional cost.",
      },
    ],
  },
  {
    title: "Arthur's Seat Sunrise Hike & Scottish Breakfast",
    description:
      "Start your day with an invigorating guided hike to the summit of Arthur's Seat—an ancient volcano in the heart of Edinburgh—to witness a spectacular sunrise over the city and distant highlands. Descend to a traditional Scottish breakfast featuring local specialties and hot tea or coffee.",
    images: [
      "/images/tours/edinburgh/arthurs-seat-sunrise.jpg",
      "/images/tours/edinburgh/scottish-breakfast.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Hiking", "Nature", "Breakfast"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Chef Alistair Campbell",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult is the hike up Arthur's Seat?",
        answer:
          "The hike is moderately challenging, covering approximately 3 miles (5km) round-trip with an elevation gain of about 820 feet (250m). We take the most scenic but gradual path to the summit, suitable for anyone with reasonable fitness who can walk uphill for 45-60 minutes. The trail can be rocky and uneven in places, occasionally muddy after rain. We maintain a steady pace with stops to observe the changing light and landscapes.",
      },
      {
        question: "What time does this tour start?",
        answer:
          "Start times vary seasonally with sunrise times. In summer (May-August), we typically begin around 4:00-4:30 AM, while winter departures (November-February) start at a more reasonable 6:30-7:00 AM. Exact meeting times are confirmed upon booking based on your specific date. While the early start can be challenging, the reward of seeing Edinburgh bathed in first light makes it worthwhile!",
      },
      {
        question: "What should I wear and bring?",
        answer:
          "Dress in layers appropriate for changeable Scottish weather, including a waterproof jacket and sturdy hiking shoes or boots with good grip. Bring a small backpack with water, camera, and any personal items. We provide walking poles for those who want them, along with flashlights/headlamps for early morning visibility when needed. Gloves and hats are recommended in cooler months.",
      },
      {
        question: "What's included in the Scottish breakfast?",
        answer:
          "After descending from Arthur's Seat, we visit a traditional Scottish cafe for a hearty breakfast that typically includes eggs, bacon, local haggis, black pudding, potato scones, grilled tomatoes, mushrooms, beans, buttered toast, and strong Scottish tea or coffee. Vegetarian and other dietary options are available with advance notice.",
      },
    ],
  },
  {
    title: "Edinburgh Photography Tour: Light & History",
    description:
      "Capture Edinburgh's unique beauty with guidance from a professional photographer who knows the city's most photogenic spots and hidden vantage points. Learn techniques for architectural, street, and landscape photography while exploring locations from medieval closes to panoramic hilltops.",
    images: [
      "/images/tours/edinburgh/calton-hill-photography.jpg",
      "/images/tours/edinburgh/royal-mile-photography.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Photography", "Architecture", "Creative"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Callum Stewart",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What type of camera should I bring?",
        answer:
          "This tour accommodates all types of cameras from smartphones to professional DSLRs. Our guide provides tailored instruction for your specific equipment. For those with interchangeable lens cameras, we recommend bringing a wide-angle lens (ideal for architecture and cityscapes) and a standard zoom lens. Tripods are optional but useful for certain locations. If you don't have a camera, we can arrange rental equipment with advance notice.",
      },
      {
        question: "Is this tour suitable for photography beginners?",
        answer:
          "Absolutely! The tour is designed for all skill levels from complete beginners to advanced photographers. Our guide adjusts the technical instruction to match your experience, focusing on composition and creative perspectives for beginners while helping more advanced photographers with specific techniques like long exposures, HDR, and challenging lighting scenarios.",
      },
      {
        question: "What locations will we photograph?",
        answer:
          "The itinerary typically includes both iconic landmarks and hidden gems, such as Edinburgh Castle from unusual angles, secret viewpoints in the Old Town, hidden closes off the Royal Mile, Calton Hill monuments, and Dean Village. We time the tour to optimize lighting conditions and avoid crowds where possible. The specific route may adjust based on weather and lighting conditions to ensure optimal photography opportunities.",
      },
      {
        question: "Will we have time to set up tripods and compose shots?",
        answer:
          "Yes, we pace the tour to allow ample time for setting up equipment and thoughtfully composing images at each location. Unlike standard walking tours, our photography tour builds in time for creative exploration. Our guide helps with composition suggestions while encouraging you to develop your unique perspective. The group size is limited to 8 participants to ensure everyone receives personalized attention.",
      },
    ],
  },
  {
    title: "Scottish Folk Music Evening & Traditional Ceilidh",
    description:
      "Experience the heart and soul of Scotland's rich musical heritage with an evening of authentic folk music performed by local musicians, followed by a fun introduction to traditional Scottish dancing at a ceilidh. Includes a tasting menu of Scottish specialties and a warming dram of whisky.",
    images: [
      "/images/tours/edinburgh/folk-musicians.jpg",
      "/images/tours/edinburgh/scottish-ceilidh.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Music", "Dance", "Evening"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Callum Stewart",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Do I need to know Scottish dancing for the ceilidh?",
        answer:
          "No experience is needed! Ceilidh dancing is designed to be accessible to everyone. Our dance caller provides clear instructions for each dance before the music begins, and experienced dancers help guide beginners through the steps. The atmosphere is relaxed and encouraging—mistakes are part of the fun! You can participate as much or as little as you like, though most guests find themselves drawn to the dance floor as the evening progresses.",
      },
      {
        question: "What kind of Scottish music will we hear?",
        answer:
          "The evening features a diverse showcase of Scottish musical traditions performed by professional folk musicians. You'll hear haunting Gaelic ballads, energetic fiddle tunes, bagpipe performances, Jacobite rebel songs, Robert Burns classics, and contemporary Scottish folk. Musicians introduce each piece with background on its history and significance in Scottish culture.",
      },
      {
        question: "What food and drinks are included?",
        answer:
          "The evening includes a tasting menu of Scottish specialties such as smoked salmon, Cullen skink (fish soup), haggis bon bons with whisky sauce, Scottish cheeses, and cranachan dessert. One complimentary dram of single malt whisky is provided (or a non-alcoholic alternative). Additional drinks can be purchased from the bar throughout the evening.",
      },
      {
        question: "Is this a tourist show or an authentic experience?",
        answer:
          "While designed to be accessible to visitors, this is an authentic music session featuring professional Scottish folk musicians who regularly perform at major festivals and venues. Many locals attend these events, creating a genuine cultural experience rather than a staged performance. The venue is a traditional Edinburgh establishment rather than a tourist-oriented attraction.",
      },
    ],
  },
  {
    title: "Scottish Borders Castles & Abbeys Tour",
    description:
      "Journey through the scenic Scottish Borders to discover romantic castle ruins, majestic medieval abbeys, and sites connected to Scottish legends including Sir Walter Scott, Robert the Bruce, and Mary Queen of Scots. This tour reveals a less-visited but historically rich region just outside Edinburgh.",
    images: [
      "/images/tours/edinburgh/melrose-abbey.jpg",
      "/images/tours/edinburgh/scottish-borders-castle.jpg",
    ],
    duration: "9 hours",
    price: "$135",
    rating: 4.7,
    tags: ["Castles", "Abbeys", "Countryside"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Claire MacDonald",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Which historic sites do we visit?",
        answer:
          "The tour typically includes Melrose Abbey (burial place of Robert the Bruce's heart), either Abbotsford House (Sir Walter Scott's magnificent home) or Traquair House (Scotland's oldest inhabited house), and one of the Border region's dramatic castles such as Floors Castle or the ruins of Hermitage Castle. We also stop at scenic viewpoints along the River Tweed and visit at least one traditional Borders town with its characteristic architecture and history.",
      },
      {
        question: "How is this different from Highland tours?",
        answer:
          "While Highland tours showcase dramatic mountains and clan warfare history, the Borders reveal a different side of Scotland—rolling green hills, ancient abbeys, grand country houses, and a unique history shaped by the centuries-long conflict between Scotland and England. The Borders region offers equally fascinating history but with fewer tourists, more accessible distances from Edinburgh, and a distinct cultural heritage including textile traditions, literary connections, and border reiver history.",
      },
      {
        question: "Is lunch included in this tour?",
        answer:
          "We stop for lunch at either a historic coaching inn or a countryside tearoom featuring regional specialties, but meals are not included in the tour price. Your guide will recommend local dishes and specialties. Most venues offer options ranging from light bites to full meals, typically costing £10-20 per person.",
      },
      {
        question: "Is this tour available year-round?",
        answer:
          "Yes, this tour operates year-round with seasonal adjustments. Summer offers longer daylight hours allowing more extensive exploration, while autumn brings spectacular foliage around the historic sites. Winter visits benefit from atmospheric lighting for photography and fewer tourists at major attractions, though some interior spaces may have limited opening hours during the off-season.",
      },
    ],
  },
];

export default edinburghTours;
