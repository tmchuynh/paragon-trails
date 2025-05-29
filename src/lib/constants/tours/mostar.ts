import { Tour } from "@/lib/interfaces/services/tours";

export const mostarTours: Tour[] = [
  {
    title: "Stari Most: Bridge Diving Traditions & History",
    description:
      "Discover the fascinating history and traditions surrounding Mostar's iconic Ottoman bridge. Meet local divers from the centuries-old diving club, learn about the bridge's destruction and reconstruction, and witness the breathtaking 24-meter dive into the emerald waters below.",
    images: [
      "/images/tours/mostar/stari-most-bridge.jpg",
      "/images/tours/mostar/bridge-diver.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.9,
    tags: ["Cultural", "Historical", "UNESCO"],
 
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Emir Balić",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we see actual bridge diving during the tour?",
        answer:
          "Yes, we coordinate with the local diving club to ensure you witness this spectacular tradition. During summer months (May-September), divers perform regularly for visitors. In cooler months, dives are less frequent but still arranged for our tours when water conditions permit. The tradition dates back over 450 years, with young men proving their courage by making the dangerous 24-meter jump into the shallow Neretva River.",
      },
      {
        question: "Is the bridge safe to walk on?",
        answer:
          "Absolutely! The Stari Most has been fully restored to its original 16th-century design and is structurally sound. It is a UNESCO World Heritage site and a symbol of peace and reconciliation. The bridge is open to pedestrians year-round, and our guides will share its rich history and significance during your visit.",
      },
    ],
  },
  {
    title: "War History & Reconciliation Walking Tour",
    description:
      "Gain deep insights into Bosnia's complex recent history through the eyes of local residents who lived through the 1990s conflict. Visit sites of significance including the former front line, restored buildings, and powerful memorials while hearing personal stories of war and peace.",
    images: [
      "/images/tours/mostar/war-damage.jpg",
      "/images/tours/mostar/reconciliation-memorial.jpg",
    ],
    duration: "4 hours",
    price: "$35",
    rating: 4.8,
    tags: ["War History", "Educational", "Walking Tour"],
 
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Damir Jazić",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is this tour politically biased?",
        answer:
          "Our guides present multiple perspectives on the conflict, representing the complexity of Bosnia's history without promoting any single ethnic or political narrative. The tour focuses on human stories, architectural impacts, and the path to reconciliation rather than assigning blame. Our guides have personal experiences from the war period but are committed to presenting balanced information that helps visitors understand this difficult chapter in Bosnia's history.",
      },
      {
        question: "Is the tour suitable for children?",
        answer:
          "While the tour is educational, it does cover sensitive topics related to war and conflict. We recommend it for teenagers and adults who can engage with these themes maturely. For younger children, we suggest our family-friendly cultural tours that focus on Mostar's history and traditions without delving into the war period.",
      },
    ],
  },
  {
    title: "Ottoman Crafts & Coppersmith Workshop",
    description:
      "Experience the living heritage of Mostar's traditional crafts with a hands-on workshop in a family-run coppersmith studio. Create your own decorated copper souvenir using centuries-old techniques while learning about Ottoman artistic traditions that have survived through generations.",
    images: [
      "/images/tours/mostar/coppersmith-workshop.jpg",
      "/images/tours/mostar/copper-crafts.jpg",
    ],
    duration: "3 hours",
    price: "$55",
    rating: 4.7,
    tags: ["Crafts", "Workshop", "Cultural"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Master Craftsman Samir Temim",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What will I make during the workshop?",
        answer:
          "You'll create a small decorative copper plate (approximately 5 inches in diameter) using traditional tools and techniques. After learning basic hammering and embossing methods, you'll engrave a design of your choice with the craftsman's guidance—typically geometric patterns, floral motifs, or Mostar Bridge imagery. The finished piece is yours to keep as a unique souvenir. No prior artistic experience is necessary to create a beautiful piece.",
      },
      {
        question: "Is the workshop suitable for children?",
        answer:
          "Yes, this workshop is family-friendly and suitable for children aged 8 and up. Younger children can participate with adult supervision. The craftsman tailors the experience to each participant's skill level, ensuring everyone can create something special. It's a fun and educational activity that introduces kids to traditional craftsmanship in an engaging way.",
      },
    ],
  },
  {
    title: "Neretva River Rafting Adventure",
    description:
      "Navigate crystal-clear turquoise waters on an exciting rafting journey down the Neretva River. Encounter rapids, tranquil stretches, and dramatic canyons while experiencing Bosnia's stunning natural landscapes from a unique perspective.",
    images: [
      "/images/tours/mostar/neretva-rafting.jpg",
      "/images/tours/mostar/river-canyon.jpg",
    ],
    duration: "6 hours",
    price: "$75",
    rating: 4.6,
    tags: ["Rafting", "Adventure", "Nature"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Armin Jusufović",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need previous rafting experience?",
        answer:
          "No prior experience is necessary. This Class II-III rafting trip is suitable for beginners with a reasonable level of fitness. Our professional guides provide comprehensive safety instructions and paddling techniques before departure. The Neretva River offers a perfect mix of exciting rapids and calm sections, making it ideal for first-time rafters. All safety equipment including helmets, life jackets, and wetsuits is provided.",
      },
      {
        question: "What should I bring for the rafting trip?",
        answer:
          "Wear a swimsuit or quick-drying athletic wear, and bring a towel and change of clothes for after the trip. We provide all necessary safety gear including wetsuits, helmets, and life jackets. Waterproof bags are available for personal items like phones or cameras. Sunscreen and water shoes are also recommended. Our guides will ensure you have everything you need for a safe and enjoyable adventure.",
      },
    ],
  },
  {
    title: "Herzegovina Wine Route & Village Lunch",
    description:
      "Discover Herzegovina's emerging wine scene with tastings at family-owned vineyards specializing in indigenous grape varieties. Visit stone cellars, meet winemakers, and enjoy a homestyle lunch in a traditional village home featuring local specialties paired with regional wines.",
    images: [
      "/images/tours/mostar/wine-tasting.jpg",
      "/images/tours/mostar/village-lunch.jpg",
    ],
    duration: "7 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Wine", "Food", "Countryside"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Mirjana Bošković",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of wines will we taste?",
        answer:
          "Herzegovina's unique Mediterranean-continental climate produces distinctive wines, particularly from the indigenous Žilavka (white) and Blatina (red) grape varieties that you rarely find outside the region. You'll taste these alongside international varieties grown locally like Chardonnay and Merlot. The region's winemaking tradition dates back to Roman times but is only now gaining international recognition. Most vineyards are small, family operations producing limited quantities with traditional methods.",
      },
      {
        question: "Is the village lunch suitable for vegetarians?",
        answer:
          "Yes, the lunch features a variety of traditional Herzegovinian dishes, many of which are vegetarian-friendly. Options typically include fresh salads, grilled vegetables, homemade bread, and local cheeses. If you have specific dietary restrictions or preferences, please inform us in advance so we can accommodate your needs.",
      },
    ],
  },
  {
    title: "Mostar Photography Walk at Dawn",
    description:
      "Capture stunning images of Mostar's medieval architecture and dramatic landscapes in the magical morning light. A professional photographer guides you to prime shooting locations at optimal times, providing technical advice and historical context.",
    images: [
      "/images/tours/mostar/dawn-photography.jpg",
      "/images/tours/mostar/bridge-sunrise.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Photography", "Sunrise", "Architecture"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Jasmina Fazlić",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What time does the tour start?",
        answer:
          "The tour begins approximately 45 minutes before sunrise, which varies seasonally (around 5:00 AM in summer and 7:00 AM in winter). This early start is essential for capturing the magical quality of light and experiencing the Old Town without crowds. The effort of the early wake-up is rewarded with serene scenes and perfect photographic conditions that are impossible to achieve later in the day.",
      },
      {
        question: "Do I need professional photography equipment?",
        answer:
          "While a DSLR or mirrorless camera is recommended for the best results, you can also use a high-quality smartphone with manual controls. Our guide provides tips on composition, lighting, and camera settings suitable for all skill levels. Whether you're a beginner or an experienced photographer, you'll leave with stunning images and improved techniques.",
      },
    ],
  },
  {
    title: "Kravice Waterfalls & Natural Bosnia",
    description:
      "Escape to the breathtaking Kravice Waterfalls, a hidden natural wonder with cascades spanning 25 meters high and 120 meters across. Swim in crystal-clear emerald pools, enjoy a picnic lunch in this pristine setting, and explore surrounding villages and landscapes.",
    images: [
      "/images/tours/mostar/kravice-waterfalls.jpg",
      "/images/tours/mostar/waterfall-swimming.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Nature", "Swimming", "Waterfalls"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Adnan Hodžić",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "When is the best time to visit Kravice Waterfalls?",
        answer:
          "The waterfalls are most impressive in late spring (May-June) when snowmelt increases water volume, creating powerful cascades. Summer (July-August) offers ideal swimming conditions with warmer water temperatures, though this is also the most popular time. Early fall (September) provides a wonderful balance with comfortable temperatures, reduced crowds, and still-flowing falls. Winter visits offer a uniquely beautiful frozen landscape, though swimming is not possible.",
      },
      {
        question: "What should I bring for the Kravice trip?",
        answer:
          "Wear comfortable clothing and sturdy shoes suitable for walking on uneven terrain. Bring a swimsuit and towel if you plan to swim, as well as sunscreen, a hat, and water shoes for rocky areas. We provide picnic lunches, but feel free to bring snacks or drinks. A camera is essential to capture the stunning scenery!",
      },
    ],
  },
  {
    title: "Blagaj Tekke & Buna River Springs",
    description:
      "Visit the serene Blagaj Tekke, a 16th-century Dervish monastery built into a cliff overlooking the Buna River springs. Learn about Sufi traditions, explore the tranquil grounds, and enjoy a riverside tea break in this spiritual oasis.",
    images: [
      "/images/tours/mostar/blagaj-tekke.jpg",
      "/images/tours/mostar/buna-river.jpg",
    ],
    duration: "4 hours",
    price: "$40",
    rating: 4.8,
    tags: ["Cultural", "Spiritual", "Nature"],
 
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Selma Dervišević",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What is the significance of Blagaj Tekke?",
        answer:
          "Blagaj Tekke is one of Bosnia's most important spiritual sites, representing the peaceful coexistence of different cultures and religions. It was built by the Ottoman Empire in the 16th century as a Sufi monastery and remains an active place of worship today. The stunning natural setting at the source of the Buna River adds to its spiritual ambiance.",
      },
      {
        question: "Can we swim in the Buna River?",
        answer:
          "Swimming is not permitted in the Buna River due to its cultural significance and conservation efforts. However, you can enjoy the beautiful views, take photos, and relax by the riverside. There are also cafes where you can enjoy traditional Bosnian coffee or tea while taking in the serene surroundings.",
      },
    ],
  },
];

export default mostarTours;
