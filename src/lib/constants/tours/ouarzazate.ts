import { Tour } from "@/lib/interfaces/services/tours";

export const ouarzazateTours: Tour[] = [
  {
    title: "Ait Benhaddou & UNESCO Heritage Experience",
    description:
      "Explore the magnificent fortified village of Ait Benhaddou with privileged access to areas normally closed to visitors, guided by a local resident whose family has lived in the ksar for generations, followed by a traditional Berber lunch in a family home.",
    images: [
      "/images/tours/ouarzazate/ait-benhaddou.jpg",
      "/images/tours/ouarzazate/kasbah-interior.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.9,
    tags: ["UNESCO", "Historical", "Berber Culture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Ibrahim Ait Said",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How difficult is the walk through Ait Benhaddou?",
        answer:
          "The tour involves moderate walking on uneven surfaces, including some steep sections and stairs within the ksar. The full tour includes a climb to the granary at the top of the village for panoramic views, but this portion can be optional for those with mobility concerns. Most reasonably fit visitors can complete the full tour comfortably, and our guide can adjust the pace based on the group's needs.",
      },
    ],
  },
  {
    title: "Morocco Film Studios Behind the Scenes",
    description:
      "Discover why Ouarzazate is known as 'Africa's Hollywood' with exclusive access to Atlas Studios and CLA Studios where blockbusters from Gladiator to Game of Thrones have been filmed, including active sets and the craftspeople who create movie magic.",
    images: [
      "/images/tours/ouarzazate/atlas-studios.jpg",
      "/images/tours/ouarzazate/film-sets.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Film", "Studios", "Behind the Scenes"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Youssef Benhamo, Film Industry Professional",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we see any actual filming during the tour?",
        answer:
          "While we cannot guarantee active filming on the day of your visit, our industry connections allow us to know the current production schedule. If filming is taking place, we'll include appropriate viewing opportunities from designated areas. The studios are frequently active with international productions, especially during spring and fall. Even without active shooting, the standing sets, prop departments, costume workshops, and special effects facilities provide fascinating insights into the filmmaking process.",
      },
    ],
  },
  {
    title: "Draa Valley Oasis & Ancient Kasbahs",
    description:
      "Journey through the spectacular Draa Valley with its endless palm groves, hidden oases, and centuries-old kasbahs. Visit traditional villages, meet local families, and witness time-honored agricultural practices that sustain life in this desert environment.",
    images: [
      "/images/tours/ouarzazate/draa-valley.jpg",
      "/images/tours/ouarzazate/palm-oasis.jpg",
    ],
    duration: "8 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Oasis", "Kasbahs", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Mohammed Oubark",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How long is the drive to the Draa Valley?",
        answer:
          "The journey from Ouarzazate to the heart of the Draa Valley (near Agdz) takes approximately 1.5 hours each way. However, this is a scenic route with frequent stops at viewpoints, kasbahs, and villages, so the journey itself is very much part of the experience. We travel in comfortable, air-conditioned 4x4 vehicles that can access the more remote areas of the valley away from standard tourist routes.",
      },
    ],
  },
  {
    title: "Sahara Desert Expedition & Overnight Camping",
    description:
      "Experience the magic of the Sahara with a journey into golden dunes, camel trekking at sunset, traditional music around the campfire, and a night in a luxury desert camp under countless stars, culminating in a spectacular sunrise over the dunes.",
    images: [
      "/images/tours/ouarzazate/sahara-sunset.jpg",
      "/images/tours/ouarzazate/desert-camp.jpg",
    ],
    duration: "2 days",
    price: "$225",
    rating: 5.0,
    tags: ["Desert", "Camping", "Camel Trek"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Omar Ait Bella",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What are the sleeping arrangements in the desert camp?",
        answer:
          "Our desert camp offers traditional Berber-style tents with proper beds (not sleeping bags), quality linens, and comfortable furnishings. Each tent has rugs, bedside tables, solar lighting, and access to shared bathroom facilities with flush toilets and hot showers. For those seeking ultimate luxury, we offer an upgraded 'Sahara Glamping' option with en-suite bathrooms, luxury bedding, private dining, and exclusive activities.",
      },
    ],
  },
  {
    title: "Moroccan Astronomy Experience & Star Photography",
    description:
      "Witness the incredible night skies of the Moroccan desert with an astronomy expert and astrophotographer. Learn to identify constellations, observe celestial objects through a professional telescope, and capture stunning star images with specialized photography techniques.",
    images: [
      "/images/tours/ouarzazate/night-sky.jpg",
      "/images/tours/ouarzazate/astronomy.jpg",
    ],
    duration: "5 hours",
    price: "$90",
    rating: 4.9,
    tags: ["Astronomy", "Photography", "Night Sky"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Professor Hassan Abdelhak",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer:
          "For basic star photography, any camera with manual settings capability will work, but ideally a DSLR or mirrorless camera with a fast wide-angle lens (f/2.8 or faster). A sturdy tripod is essential. We provide specialized star trackers and filters for those who want to try more advanced techniques. If you don't have suitable equipment, we have rental cameras available with advance reservation. Smartphone users can also participate, as newer phones have night sky modes that can capture basic star images with our guidance.",
      },
    ],
  },
  {
    title: "Berber Carpet Weaving Workshop",
    description:
      "Learn the ancient art of traditional Berber carpet making from master artisans. Try your hand at wool carding, natural dyeing, and simple weaving techniques while discovering the symbolic language of patterns and colors that tell stories of tribal heritage.",
    images: [
      "/images/tours/ouarzazate/carpet-weaving.jpg",
      "/images/tours/ouarzazate/berber-artisans.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.7,
    tags: ["Traditional Crafts", "Weaving", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Fatima Ait Khouya",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will I make my own carpet to take home?",
        answer:
          "The workshop includes creating a small woven piece (approximately 8x10 inches) that you can take home as a souvenir. Complete carpets take weeks or months to create, but you'll learn all the fundamental techniques and participate in each step of the process. The workshop focuses on understanding the cultural significance and techniques rather than producing a large finished product. High-quality authentic carpets are available for purchase directly from the artisan cooperative at fair, non-inflated prices.",
      },
    ],
  },
  {
    title: "Photography Tour: Doors & Kasbahs of Ouarzazate",
    description:
      "Capture the unique architectural beauty of southern Morocco with a photography tour focused on the ornate doors, weathered kasbahs, and magical light that has drawn photographers and filmmakers to this region for decades.",
    images: [
      "/images/tours/ouarzazate/kasbah-doors.jpg",
      "/images/tours/ouarzazate/architectural-details.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Photography", "Architecture", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Rachid Tafraouti",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What photography skill level is this tour designed for?",
        answer:
          "Our photography tour accommodates all skill levels. For beginners, we focus on composition techniques and finding the best light for capturing the rich textures and colors of Moroccan architecture. For advanced photographers, we provide guidance on more technical aspects like HDR techniques for handling the high contrast of desert light, architectural perspective correction, and creative approaches to capturing detail and scale. The small group size ensures personalized instruction regardless of your level.",
      },
    ],
  },
  {
    title: "Fint Oasis Hidden Paradise & Tea Ceremony",
    description:
      "Discover one of Morocco's most beautiful yet least visited oases, a lush green paradise of palm groves and clear streams surrounded by stark mountains, followed by a traditional tea ceremony with a local family in their mud-brick home.",
    images: [
      "/images/tours/ouarzazate/fint-oasis.jpg",
      "/images/tours/ouarzazate/berber-tea.jpg",
    ],
    duration: "5 hours",
    price: "$70",
    rating: 4.9,
    tags: ["Oasis", "Local Experience", "Nature"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Ahmed Ait Omar",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How do we reach the Fint Oasis?",
        answer:
          "The oasis is located about 12km south of Ouarzazate, requiring travel on an unpaved track only accessible by 4x4 vehicles. The journey takes about 30 minutes from central Ouarzazate. The rough approach road keeps this beautiful oasis relatively free from mass tourism. Upon arrival, we explore on foot, walking through the four traditional villages, alongside the irrigation channels, and through the lush palm gardens that provide a dramatic contrast to the surrounding arid landscape.",
      },
    ],
  },
];

export default ouarzazateTours;
