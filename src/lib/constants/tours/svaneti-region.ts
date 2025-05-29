import { Tour } from "@/lib/interfaces/services/tours";

export const svanetiRegionTours: Tour[] = [
  {
    title: "Medieval Tower Houses & Highland Villages",
    description:
      "Explore Svaneti's UNESCO World Heritage villages with their distinctive medieval defensive towers that have guarded Caucasus mountain passes for over a thousand years. Visit the communities of Mestia and Ushguli while learning about the unique Svan culture that has preserved ancient Georgian traditions.",
    images: [
      "/images/tours/svaneti-region/tower-houses.jpg",
      "/images/tours/svaneti-region/ushguli-village.jpg",
    ],
    duration: "2 days",
    price: "$195",
    rating: 4.9,
    tags: ["UNESCO", "Architecture", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Giorgi Margiani",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How difficult is the journey to Ushguli?",
        answer:
          "Ushguli is one of Europe's highest continuously inhabited settlements (2,200m) and the road journey there is an adventure in itself. We travel by 4x4 vehicles on unpaved mountain roads with stunning views but some bumpy sections. The drive from Mestia to Ushguli takes approximately 2 hours each way, weather permitting. During winter months (November-April), Ushguli can sometimes be inaccessible due to snow, in which case we offer alternative Svan villages that are equally authentic.",
      },
    ],
  },
  {
    title: "Trekking the Caucasus: Mestia to Ushguli",
    description:
      "Experience one of the world's great mountain hikes on this guided trek through the high Caucasus from Mestia to Ushguli. Cross alpine meadows, pass glacial streams, and enjoy panoramic views of 5,000-meter peaks while staying in remote villages where time seems to have stood still.",
    images: [
      "/images/tours/svaneti-region/mountain-trekking.jpg",
      "/images/tours/svaneti-region/alpine-meadow.jpg",
    ],
    duration: "4 days",
    price: "$395",
    rating: 4.8,
    tags: ["Trekking", "Mountain", "Adventure"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Teimuraz Nizharadze",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How challenging is this trek?",
        answer:
          "This is a moderate to challenging trek covering approximately 65km over 4 days with daily elevation gains of 500-800m. You'll be hiking 6-8 hours per day at altitudes between 1,500-2,700m. While the trails are generally well-defined, some sections can be steep or rocky. Good physical condition and previous hiking experience are recommended. We provide pack horses for carrying main luggage, so you'll only need to carry a daypack with essentials during hiking days.",
      },
    ],
  },
  {
    title: "Svan Culinary Traditions & Cooking Workshop",
    description:
      "Discover the unique flavors of high-mountain Svanetian cuisine with its distinctive spices, cheese-filled breads, and hearty stews designed to sustain life in harsh mountain environments. Join a local family to prepare traditional dishes in a hands-on cooking class using centuries-old methods.",
    images: [
      "/images/tours/svaneti-region/svan-cuisine.jpg",
      "/images/tours/svaneti-region/cooking-class.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Cooking", "Food", "Cultural"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Nana Pirtskhelani",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "You'll learn to prepare authentic Svanetian specialties including: kubdari (spiced meat-filled bread), chvishtari (corn and cheese bread), tashmijabi (potato and cheese dish), Svanetian khachapuri with local cheese, and svan salt (the region's famous spice blend with red pepper and herbs). The class takes place in a traditional Svan kitchen with an open hearth, using local ingredients and methods passed down through generations. All recipes are provided to take home.",
      },
    ],
  },
  {
    title: "Caucasus Horseback Adventure",
    description:
      "Explore Svaneti's breathtaking landscape the way locals have for centuries—on horseback. Ride sturdy mountain horses through alpine meadows, ancient forests, and high pastures with spectacular views of snow-capped peaks, visiting villages inaccessible by road.",
    images: [
      "/images/tours/svaneti-region/horseback-riding.jpg",
      "/images/tours/svaneti-region/mountain-horses.jpg",
    ],
    duration: "Full day",
    price: "$120",
    rating: 4.6,
    tags: ["Horseback Riding", "Nature", "Adventure"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Vakhtang Japaridze",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need horseback riding experience?",
        answer:
          "No prior experience is necessary as we use well-trained, sure-footed local horses accustomed to mountain terrain and beginners. We provide basic instruction before departure and match horses to riders based on their experience level and size. The pace is generally walking with some opportunities for trotting in suitable areas for those who are comfortable. Our guides are experienced horsemen who prioritize safety while sharing their deep knowledge of the mountains.",
      },
    ],
  },
  {
    title: "Svaneti Ethnographic Museum & Cultural Treasures",
    description:
      "Discover the extraordinary cultural heritage of Svaneti at Mestia's renowned Ethnographic Museum, housing medieval icons, manuscripts, and gold artifacts preserved for centuries in tower houses. Meet with local craftspeople continuing ancient traditions of woodcarving, icon painting, and textile arts.",
    images: [
      "/images/tours/svaneti-region/ethnographic-museum.jpg",
      "/images/tours/svaneti-region/medieval-icons.jpg",
    ],
    duration: "5 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Museum", "Art", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Ana Gigauri",
    tourCategoryId: "cultural",
    faqs: [
      {
        question:
          "Why are there so many valuable artifacts in such a remote region?",
        answer:
          "Svaneti's isolation and defensive tower houses made it a natural vault for Georgian cultural treasures during centuries of invasions. When lowland Georgia faced Persian, Ottoman, or Mongol attacks, priceless religious icons, manuscripts, and gold work were sent to Svaneti for safekeeping. The Svans became fierce guardians of these national treasures, often defending them with their lives. Today, the museum houses an extraordinary collection including 1,000-year-old icons, Byzantine-influenced religious artwork, and medieval manuscripts—all preserved by this highland community cut off from the outside world through harsh winters and mountain geography.",
      },
    ],
  },
  {
    title: "Glacial Lakes & Alpine Wilderness Day Hike",
    description:
      "Hike through pristine alpine environments to crystal-clear glacial lakes surrounded by 4,000+ meter peaks. This guided day trek visits either Koruldi Lakes or Tobavarchkhili Lake (depending on season), showcasing some of the Caucasus' most spectacular high-mountain scenery.",
    images: [
      "/images/tours/svaneti-region/glacial-lake.jpg",
      "/images/tours/svaneti-region/alpine-flowers.jpg",
    ],
    duration: "8 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Hiking", "Nature", "Lakes"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Irakli Avaliani",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What is the difficulty level of this hike?",
        answer:
          "This is a moderate to challenging day hike covering 12-16km (depending on the chosen lake) with approximately 800-1000m elevation gain. The trail involves some steep sections and uneven terrain at altitudes up to 3,000m. Good physical fitness is required, and hiking boots are essential. We maintain a steady pace with plenty of breaks to enjoy the scenery and adjust to the altitude. The hike operates from June to September when mountain trails are free of snow and alpine flowers are blooming.",
      },
    ],
  },
  {
    title: "Svan Polyphonic Singing & Musical Traditions",
    description:
      "Experience the haunting, UNESCO-recognized polyphonic singing traditions of Svaneti with a special performance by local masters, followed by a workshop where you'll learn the basics of this ancient three-voice harmonic style that predates Christianity in Georgia.",
    images: [
      "/images/tours/svaneti-region/polyphonic-singers.jpg",
      "/images/tours/svaneti-region/traditional-instruments.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.9,
    tags: ["Music", "UNESCO", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Ensemble Riho",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What makes Svan polyphonic singing unique?",
        answer:
          "Svanetian polyphonic singing is among the world's oldest surviving vocal traditions, characterized by close harmonies, dissonant chords, and sudden shifts that reflect the dramatic mountain landscape. UNESCO has recognized Georgian polyphonic singing as an Intangible Cultural Heritage of Humanity, with Svan examples being particularly ancient and distinctive. The songs are performed without instrumental accompaniment and often accompany ritual activities, work, or celebrations. During the workshop portion, you'll learn about the different vocal parts and try singing simple traditional songs with guidance from the masters.",
      },
    ],
  },
  {
    title: "Photography Expedition: Towers & Mountains",
    description:
      "Capture the dramatic landscapes and medieval architecture of Svaneti with a photography-focused tour led by a professional photographer. Visit optimal viewpoints at the best times of day, with guidance on composition, lighting, and technical settings to document this visually stunning region.",
    images: [
      "/images/tours/svaneti-region/photography-tour.jpg",
      "/images/tours/svaneti-region/sunset-towers.jpg",
    ],
    duration: "Full day",
    price: "$95",
    rating: 4.8,
    tags: ["Photography", "Landscape", "Architecture"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Levan Michaelidze",
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "What are the best seasons for photography in Svaneti?",
        answer:
          "Each season offers distinct photographic opportunities: Spring (May-June) features wildflowers and rushing streams; Summer (July-August) offers green alpine meadows and clear mountain views; Autumn (September-October) brings golden forests and harvest activities; Winter (December-March) transforms villages into snow-covered fairy tales with dramatic tower silhouettes. Our itinerary adjusts seasonally to capture the best conditions, with early morning and late afternoon sessions timed for optimal light on the mountains and medieval towers.",
      },
    ],
  },
  {
    title: "Svaneti's Hidden Waterfalls & Natural Wonders",
    description:
      "Discover Svaneti's lesser-known natural wonders on a guided tour to hidden waterfalls, glacial streams, and scenic viewpoints that showcase the region's dramatic geology and biodiversity. Visit places like the Shdugra Waterfall and the scenic Chkhunderi Pass.",
    images: [
      "/images/tours/svaneti-region/shdugra-waterfall.jpg",
      "/images/tours/svaneti-region/chkhunderi-pass.jpg",
    ],
    duration: "6 hours",
    price: "$70",
    rating: 4.7,
    tags: ["Nature", "Waterfalls", "Adventure"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Natia Kakhiani",
    tourCategoryId: "nature",
    faqs: [
      {
        question: "Are the waterfalls accessible year-round?",
        answer:
          "The Shdugra Waterfall is accessible from late spring through early autumn (May-October) when the trails are clear of snow. During winter months, access may be limited due to snow and ice, but we can offer alternative natural sites that are accessible year-round. The Chkhunderi Pass hike is also best done in warmer months when the alpine meadows are in bloom and the weather is stable.",
      },
    ],
  },
];

export default svanetiRegionTours;
