import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const edinburghTours: Tour[] = [
  {
    title: "Edinburgh Castle & Royal Mile Historical Tour",
    description:
      "Explore Edinburgh's iconic castle and the historic Royal Mile with an expert local historian revealing fascinating stories of royalty, warfare, and intrigue spanning over 1,000 years of Scottish history.",
    images: [
      "/images/tours/edinburgh/edinburgh-castle.jpg",
      "/images/tours/edinburgh/royal-mile.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Historical", "Castle", "Royal"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("edinburgh", "historical").name,
    tourCategoryId: "historical",
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
    title: "Underground Edinburgh: Vaults & Hidden Passages",
    description:
      "Descend beneath the city streets to explore Edinburgh's forgotten underground vaults and hidden passages while hearing chilling tales of murders, hauntings, and the grim realities of life in historic Edinburgh.",
    images: [
      "/images/tours/edinburgh/underground-vaults.jpg",
      "/images/tours/edinburgh/hidden-passages.jpg",
    ],
    duration: "2 hours",
    price: "$35",
    rating: 4.8,
    tags: ["Underground", "Spooky", "Historical"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("edinburgh", "historical").name,
    tourCategoryId: "off-the-beaten-path",
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
    title: "Scottish Whisky Tasting Experience",
    description:
      "Embark on a guided journey through Scotland's national drink with expert-led tastings of fine single malt whiskies from distinct regions, learning about production methods and flavor profiles in an authentic Scottish setting.",
    images: [
      "/images/tours/edinburgh/whisky-tasting.jpg",
      "/images/tours/edinburgh/whisky-barrels.jpg",
    ],
    duration: "2.5 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Whisky", "Tasting", "Cultural"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("edinburgh", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many whiskies will we taste?",
        answer:
          "The experience includes guided tastings of five premium single malt whiskies selected to showcase Scotland's diverse whisky regions (Highlands, Speyside, Islay, Lowlands, and Campbeltown). Each whisky is paired with artisanal Scottish cheeses or chocolate to complement its specific flavor profile.",
      },
      {
        question: "I don't know much about whisky. Is this suitable for beginners?",
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
    duration: "12 hours",
    price: "$125",
    rating: 4.8,
    tags: ["Highlands", "Scenery", "Day Trip"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("edinburgh", "adventure").name,
    tourCategoryId: "adventure",
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
    tourGuide: findGuideBySpecialty("edinburgh", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Do I need to be a Harry Potter expert to enjoy this tour?",
        answer:
          "Not at all! This tour is designed for everyone from dedicated Potterheads to those with casual interest in the books or films. Our guides explain the connections clearly and include the wider literary and historical context of Edinburgh that influenced Rowling's writing. Even those with limited Harry Potter knowledge will enjoy discovering how a real city inspired aspects of this magical world.",
      },
      {
        question: "Will we enter The Elephant House café where J.K. Rowling wrote?",
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
    tourGuide: findGuideBySpecialty("edinburgh", "culinary").name,
    tourCategoryId: "culinary",
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
    tourGuide: findGuideBySpecialty("edinburgh", "nightlife").name,
    tourCategoryId: "nightlife",
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
    tourGuide: findGuideBySpecialty("edinburgh", "historical").name,
    tourCategoryId: "historical",
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
    tourGuide: findGuideBySpecialty("edinburgh", "cultural").name,
    tourCategoryId: "cultural",
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
    tourGuide: findGuideBySpecialty("edinburgh", "nightlife").name,
    tourCategoryId: "nightlife",
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
