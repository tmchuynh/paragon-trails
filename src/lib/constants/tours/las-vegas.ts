import { Tour } from "@/lib/interfaces/services/tours";

export const lasVegasTours: Tour[] = [
  {
    title: "VIP Nightclub & Entertainment Tour",
    description:
      "Skip the lines and experience Las Vegas' legendary nightlife with VIP access to exclusive clubs, lounges, and entertainment venues.",
    images: [
      "/images/tours/las-vegas/nightclub.jpg",
      "/images/tours/las-vegas/strip-night.jpg",
    ],
    duration: "5 hours",
    price: "$149",
    rating: 4.7,
    tags: ["Nightlife", "VIP", "Entertainment"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Is there a dress code?",
        answer:
          "Yes, upscale attire is required. Men should wear collared shirts and dress shoes. Athletic wear, sneakers, and sandals are not permitted in most venues.",
      },
    ],
  },
  {
    title: "Grand Canyon Helicopter & Landing",
    description:
      "Fly from Las Vegas over the Hoover Dam and Lake Mead to the Grand Canyon for a champagne picnic on the canyon floor.",
    images: [
      "/images/tours/las-vegas/helicopter.jpg",
      "/images/tours/las-vegas/grand-canyon-landing.jpg",
    ],
    duration: "4 hours",
    price: "$399",
    rating: 4.9,
    tags: ["Helicopter", "Grand Canyon", "Adventure"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Are there weight restrictions for the helicopter?",
        answer:
          "Yes, for safety reasons, passengers weighing over 300 pounds (136 kg) may need to purchase an additional seat. Exact weight information is required at booking.",
      },
    ],
  },
  {
    title: "Culinary Tour: Celebrity Chef Restaurants",
    description:
      "Experience the gastronomic wonders of Las Vegas with exclusive dining at three world-renowned celebrity chef restaurants. Enjoy signature dishes, wine pairings, and behind-the-scenes kitchen tours with opportunities to meet the culinary teams behind these legendary establishments.",
    images: [
      "/images/tours/las-vegas/celebrity-chef.jpg",
      "/images/tours/las-vegas/gourmet-dining.jpg",
    ],
    duration: "5 hours",
    price: "$295",
    rating: 4.8,
    tags: ["Culinary", "Fine Dining", "Luxury"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate most dietary restrictions including vegetarian, vegan, gluten-free, and food allergies with at least 48 hours notice. Our partner restaurants are accustomed to creating exceptional experiences regardless of dietary needs.",
      },
      {
        question: "Which restaurants are included in the tour?",
        answer:
          "The tour typically includes three restaurants from our rotating selection of celebrity chef establishments. While specific venues may change based on availability, they may include Gordon Ramsay Hell's Kitchen, Giada, Nobu, Wolfgang Puck's Spago, or Emeril's. All venues offer signature dishes and exceptional dining experiences.",
      },
    ],
  },
  {
    title: "Luxor Ancient Egypt VIP Museum Tour",
    description:
      "Delve into the secrets of ancient Egypt with an expert Egyptologist guiding you through the world-class Luxor Ancient Egypt Museum. This behind-the-scenes experience includes private access to rare artifacts not on public display and interactive examinations of authentic relics.",
    images: [
      "/images/tours/las-vegas/egypt-artifacts.jpg",
      "/images/tours/las-vegas/luxor-museum.jpg",
    ],
    duration: "3 hours",
    price: "$89",
    rating: 4.6,
    tags: ["Museum", "History", "Educational"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is this tour appropriate for children?",
        answer:
          "Yes, children are welcome and typically find the Egyptian artifacts fascinating. Our guides adjust their presentation style to engage younger audiences with interactive elements and age-appropriate historical stories. The tour is especially recommended for children 8 and older who have an interest in ancient civilizations.",
      },
      {
        question: "Are the artifacts real?",
        answer:
          "The museum houses both authentic ancient artifacts and museum-quality reproductions. During the tour, your expert guide will clearly identify which pieces are original and which are replicas, explaining the historical significance of each item and the intricate processes used to create faithful reproductions when original pieces cannot be removed from Egypt.",
      },
    ],
  },
  {
    title: "Red Rock Canyon Hiking Adventure",
    description:
      "Escape the neon lights for the natural beauty of Red Rock Canyon National Conservation Area. Hike through spectacular sandstone formations, ancient petroglyphs, and desert landscapes with an experienced naturalist guide sharing insights about the geology, flora, and fauna of the Mojave Desert.",
    images: [
      "/images/tours/las-vegas/red-rock-canyon.jpg",
      "/images/tours/las-vegas/desert-hiking.jpg",
    ],
    duration: "6 hours",
    price: "$125",
    rating: 4.9,
    tags: ["Hiking", "Nature", "Desert"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What fitness level is required?",
        answer:
          "This tour can be adapted to various fitness levels. We offer three trail options: easy (2 miles with minimal elevation gain), moderate (4 miles with 600 ft elevation gain), or challenging (6 miles with 1,200 ft elevation gain). All participants should be able to walk comfortably on uneven terrain and handle desert conditions.",
      },
      {
        question: "What should I bring for the hike?",
        answer:
          "Essentials include at least 2 liters of water per person, sun protection (hat, sunscreen, sunglasses), sturdy closed-toe shoes, and layered clothing as desert temperatures can vary. We provide trekking poles, light snacks, and a backpack if needed. A camera is highly recommended for the spectacular landscapes.",
      },
    ],
  },
  {
    title: "Hidden Speakeasies & Prohibition History Tour",
    description:
      "Discover Las Vegas's secretive side as you explore exclusive speakeasy-style bars and lounges hidden throughout the city. Learn about prohibition-era history, organized crime's influence on early Vegas, and enjoy craft cocktails prepared by master mixologists at each location.",
    images: [
      "/images/tours/las-vegas/speakeasy-bar.jpg",
      "/images/tours/las-vegas/craft-cocktail.jpg",
    ],
    duration: "4 hours",
    price: "$129",
    rating: 4.8,
    tags: ["Nightlife", "History", "Cocktails"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How many drinks are included?",
        answer:
          "The tour includes one signature cocktail at each of the three speakeasy venues we visit. Additional drinks can be purchased at your own expense. We focus on quality craft cocktails that represent historic recipes with modern twists.",
      },
      {
        question: "How do we access these 'secret' bars?",
        answer:
          "Part of the fun is discovering the hidden entrances! Some venues require passwords, others are tucked behind unmarked doors or disguised as other businesses. Your guide knows all the secrets to access these exclusive establishments that many tourists and even locals never discover.",
      },
    ],
  },
  {
    title: "Vegas Strip Aerial Photography Helicopter Tour",
    description:
      "Capture breathtaking aerial photographs of the Las Vegas Strip with guidance from a professional photographer. This doors-off helicopter experience provides unobstructed views and expert advice on camera settings, composition, and techniques for spectacular night photography of the illuminated cityscape.",
    images: [
      "/images/tours/las-vegas/aerial-strip-night.jpg",
      "/images/tours/las-vegas/photography-helicopter.jpg",
    ],
    duration: "2 hours",
    price: "$349",
    rating: 4.9,
    tags: ["Photography", "Aerial", "Nighttime"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer:
          "For optimal results, we recommend a DSLR or mirrorless camera with a lens in the 24-70mm range, a secure camera strap, and extra memory cards. Your camera must be securely strapped to you at all times. While a professional camera is ideal, modern smartphones can also capture excellent images, and our photographer guide can provide specific tips for mobile photography.",
      },
      {
        question: "Is it safe to fly with the doors off?",
        answer:
          "Yes, this is a completely safe experience conducted with FAA-approved safety measures. You'll be securely harnessed to the aircraft and receive comprehensive safety briefings. All equipment must be tethered. Doors-off flights provide the clearest photos without window reflections or obstructions, but doors-on options are available for those who prefer them.",
      },
    ],
  },
  {
    title: "Grand Canyon West Rim & Skywalk Adventure",
    description:
      "Visit the spectacular Grand Canyon West Rim on Hualapai tribal lands, featuring the breathtaking glass Skywalk extending 70 feet over the canyon edge. Meet Native American guides, enjoy traditional performances, and discover perspectives on this natural wonder not available in the National Park.",
    images: [
      "/images/tours/las-vegas/grand-canyon-skywalk.jpg",
      "/images/tours/las-vegas/hualapai-tribal-lands.jpg",
    ],
    duration: "10 hours",
    price: "$325",
    rating: 4.8,
    tags: ["Grand Canyon", "Native American", "Scenic"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Can I take my own photos on the Skywalk?",
        answer:
          "Personal cameras and phones are not permitted on the Skywalk itself to prevent drops and damage to the glass surface. Professional photographers are stationed on the Skywalk to take your photos, which are available for purchase afterward. You can take your own photos everywhere else throughout Grand Canyon West.",
      },
      {
        question:
          "How is this different from the National Park section of the Grand Canyon?",
        answer:
          "Grand Canyon West is on Hualapai tribal land, offering unique experiences not available at the National Park, including the Skywalk, native cultural performances, and closer helicopter access. The West Rim is also much closer to Las Vegas (approximately 2.5 hours versus 4.5 hours to the South Rim), allowing for a comfortable day trip.",
      },
    ],
  },
  {
    title: "Behind-the-Scenes Las Vegas Show Production Tour",
    description:
      "Go backstage at one of Las Vegas's iconic production shows to discover the technical wizardry, artistic design, and complex choreography that creates the magic. Meet cast and crew members, learn about special effects, and gain insights into the massive operational effort behind world-class entertainment.",
    images: [
      "/images/tours/las-vegas/backstage-tour.jpg",
      "/images/tours/las-vegas/production-tech.jpg",
    ],
    duration: "4 hours",
    price: "$155",
    rating: 4.7,
    tags: ["Entertainment", "Backstage", "Production"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Which shows are featured on this tour?",
        answer:
          "We partner with several major productions on the Strip, and the specific show varies based on performance schedules and backstage availability. Possible productions include Cirque du Soleil shows, major magic acts, or production shows at MGM, Caesars, or Wynn properties. We confirm the specific show when you book.",
      },
      {
        question: "Does this tour include tickets to watch the show?",
        answer:
          "The standard tour focuses on the backstage experience and production elements during non-performance hours. However, we offer premium packages that include show tickets for the evening performance, allowing you to appreciate the production with your new behind-the-scenes knowledge. These packages can be arranged for an additional fee.",
      },
    ],
  },
  {
    title: "Valley of Fire State Park Photography Expedition",
    description:
      "Capture the otherworldly beauty of Valley of Fire State Park with its vibrant red sandstone formations, ancient petroglyphs, and sweeping desert vistas. This photography-focused tour times your visit for optimal lighting conditions and provides expert guidance on composition and technique.",
    images: [
      "/images/tours/las-vegas/valley-of-fire.jpg",
      "/images/tours/las-vegas/fire-wave.jpg",
    ],
    duration: "7 hours",
    price: "$185",
    rating: 4.9,
    tags: ["Photography", "Nature", "Landscapes"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "What photography skill level is this tour designed for?",
        answer:
          "This tour accommodates all skill levels from smartphone photographers to advanced DSLR users. Our photography guide provides tailored instruction based on your equipment and experience level. Beginners receive guidance on basic composition and camera settings, while advanced photographers can explore more technical aspects like long exposures, HDR techniques, and advanced composition for dramatic landscape imagery.",
      },
      {
        question: "What are the best seasons to photograph Valley of Fire?",
        answer:
          "Each season offers unique photographic opportunities. Spring brings desert wildflowers, winter offers softer light throughout the day and fewer visitors, summer creates dramatic heat waves and stark shadows (though temperatures can be challenging), and fall provides warm light and moderate temperatures. We adjust departure times seasonally to capture optimal lighting conditions.",
      },
    ],
  },
  {
    title: "Area 51 & Extraterrestrial Highway Mystery Tour",
    description:
      "Journey to the edges of the mysterious Area 51 military facility and explore the quirky attractions along Nevada's Extraterrestrial Highway. Visit the famous black mailbox, alien-themed establishments, and hear stories of UFO sightings from local residents in this offbeat adventure.",
    images: [
      "/images/tours/las-vegas/area-51-sign.jpg",
      "/images/tours/las-vegas/et-highway.jpg",
    ],
    duration: "10 hours",
    price: "$179",
    rating: 4.5,
    tags: ["Unusual", "Area 51", "Off the Grid"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Will we actually see Area 51?",
        answer:
          "We'll take you to the famous 'Black Mailbox' and the perimeter of the restricted area, where warning signs make it clear that photography is prohibited and trespassing has serious consequences. While we can't enter the facility (no civilian can), you'll get as close as legally possible while learning about its history and the many conspiracy theories surrounding it.",
      },
      {
        question: "Is this tour serious or more entertainment?",
        answer:
          "Our tour presents both factual information about the history of Area 51 as a military testing facility and the folklore and conspiracy theories that have made it legendary. Your guide presents various perspectives on UFO phenomena, allowing you to draw your own conclusions. The tour balances education with entertainment and includes visits to quirky attractions like alien-themed restaurants and the Little A'Le'Inn.",
      },
    ],
  },
  {
    title: "Vegas Vintage Neon Sign Tour & Neon Museum After Dark",
    description:
      "Experience the glowing history of Las Vegas through its iconic neon signage. Tour the famous Neon Museum collection including the Neon Boneyard after dark when the restored signs are illuminated, and explore downtown's canopy of vintage neon with insights into the artists and technology behind these glowing masterpieces.",
    images: [
      "/images/tours/las-vegas/neon-museum.jpg",
      "/images/tours/las-vegas/vintage-signs.jpg",
    ],
    duration: "4 hours",
    price: "$119",
    rating: 4.7,
    tags: ["Neon", "Art", "History"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is photography allowed at the Neon Museum?",
        answer:
          "Yes, photography for personal, non-commercial use is permitted throughout the tour. Tripods and professional equipment require advance permits. Our guide will point out the most photogenic installations and suggest optimal camera settings for capturing these unique light displays. The museum offers spectacular photography opportunities, especially during blue hour and after dark.",
      },
      {
        question: "Is transportation included?",
        answer:
          "Yes, we provide round-trip transportation from your Strip hotel in a comfortable, air-conditioned vehicle. The tour includes both the Neon Museum and stops along Fremont Street to view functioning vintage signs in their natural habitat. Your guide provides narration throughout the journey, connecting the evolution of neon signage to Las Vegas's fascinating history.",
      },
    ],
  },
  {
    title: "Las Vegas Wedding Chapel Vow Renewal Experience",
    description:
      "Rekindle the romance with a personalized vow renewal ceremony at an iconic Las Vegas wedding chapel. Choose from classic vintage Vegas, Elvis-officiated, elegant traditional, or quirky themed ceremonies, complete with professional photography and champagne celebration.",
    images: [
      "/images/tours/las-vegas/vegas-chapel.jpg",
      "/images/tours/las-vegas/vow-renewal.jpg",
    ],
    duration: "3 hours",
    price: "$499",
    rating: 5.0,
    tags: ["Romance", "Wedding", "Celebration"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "Is this legally binding like a wedding?",
        answer:
          "No, vow renewals are ceremonial celebrations with no legal requirements or paperwork. This makes them perfect for couples celebrating anniversaries, milestone events, or simply wanting to reaffirm their commitment in a fun Vegas setting. Though not legally binding, the experience is designed to be meaningful and memorable.",
      },
      {
        question: "Can we customize our ceremony?",
        answer:
          "Absolutely! We offer several base packages (Classic Vegas, Elvis-themed, Traditional Elegant, or Themed Fantasy), but all can be customized with your choice of music, personalized vows, specific photo opportunities, and special inclusions. Our wedding coordinator will work with you in advance to design your perfect ceremony.",
      },
    ],
  },
  {
    title: "High-Roller Luxury Casino Experience",
    description:
      "Get the red carpet treatment with a casino host guiding you through the exclusive high-limit rooms and VIP experiences of Las Vegas's premier casinos. Learn insider gambling strategies, enjoy complimentary drinks and amenities, and experience the thrill of luxury gaming.",
    images: [
      "/images/tours/las-vegas/high-limit-room.jpg",
      "/images/tours/las-vegas/casino-vip.jpg",
    ],
    duration: "5 hours",
    price: "$250",
    rating: 4.6,
    tags: ["Casino", "Gambling", "Luxury"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Do I need to gamble during this experience?",
        answer:
          "While the tour focuses on high-end casino experiences, there is no obligation to gamble. You can observe and learn about the games without placing bets. However, if you wish to gamble, you should bring funds appropriate to your comfort level. The tour itself does not include gambling money.",
      },
      {
        question: "Will we learn game strategies?",
        answer:
          "Yes, your guide will explain optimal strategies for common casino games including blackjack, craps, and baccarat - the games favored in high-limit rooms. You'll learn about house edges, payback percentages, and how to maximize your odds while enjoying the VIP gaming experience. This educational component is valuable whether you choose to gamble or not.",
      },
    ],
  },
  {
    title: "Hoover Dam Engineering Marvel Tour",
    description:
      "Explore the engineering wonder of Hoover Dam with exclusive access to areas not available on standard tours. Learn about the dam's construction, power generation systems, and historical significance from engineering experts, and enjoy spectacular views from restricted observation points.",
    images: [
      "/images/tours/las-vegas/hoover-dam.jpg",
      "/images/tours/las-vegas/dam-interior.jpg",
    ],
    duration: "6 hours",
    price: "$145",
    rating: 4.8,
    tags: ["Engineering", "History", "Architecture"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How much walking and climbing is involved?",
        answer:
          "This in-depth tour involves approximately 1 mile of walking including several staircases and some narrow passages within the dam. Participants should be able to walk unassisted and stand for periods of 30-45 minutes. For those with mobility concerns, we offer an abbreviated tour option focusing on the visitor center and observation areas with minimal walking.",
      },
      {
        question: "What will we see that's not on the standard tour?",
        answer:
          "Our engineering tour accesses the rarely-seen diversion tunnels used during construction, lower power plant levels not on public tours, original construction galleries within the dam body, and historical technical areas. You'll also receive detailed technical explanations of the dam's construction methods, power generation systems, and ongoing maintenance operations from our engineering expert guides.",
      },
    ],
  },
  {
    title: "Death Valley National Park Extreme Landscapes",
    description:
      "Journey through the surreal landscapes of Death Valley—the hottest, driest, and lowest national park in the USA. Explore multicolored badlands, vast salt flats, towering sand dunes, and unique geological formations with an expert naturalist guide explaining this extreme environment's fascinating features.",
    images: [
      "/images/tours/las-vegas/death-valley.jpg",
      "/images/tours/las-vegas/badwater-basin.jpg",
    ],
    duration: "6 hours",
    price: "$195",
    rating: 4.7,
    tags: ["National Park", "Desert", "Geology"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What is the best season to visit Death Valley?",
        answer:
          "While we operate this tour year-round, optimal conditions are found from October through April when temperatures are moderate (65-85°F/18-29°C). Summer temperatures regularly exceed 115°F/46°C, so our summer tours depart very early and focus on higher elevation sites. Each season offers different photography conditions and natural phenomena, from winter's clear air to spring wildflower blooms.",
      },
      {
        question: "How extreme are the conditions?",
        answer:
          "Death Valley holds the record for the highest temperature ever recorded on Earth (134°F/56.7°C). Our tours are designed with safety as the priority, including air-conditioned vehicles, frequent water breaks, and adjusted itineraries based on conditions. The dramatic landscape ranges from Badwater Basin at 282 feet below sea level to mountains over 11,000 feet high, creating some of the most diverse desert scenery in the world.",
      },
    ],
  },
];

export default lasVegasTours;
