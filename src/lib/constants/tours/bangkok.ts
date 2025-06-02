import { Tour } from "@/lib/interfaces/services/tours";

export const bangkokTours: Tour[] = [
  {
    title: "Hidden Canals & Local Life Experience",
    description:
      "Escape the urban bustle on a private longtail boat journey through Bangkok's hidden canals (klongs), visiting floating markets, waterside communities, and ancient temples inaccessible by road.",
    city: "Bangkok",
    country: "Thailand",
    region: "Central Thailand",
    images: [
      "/images/tours/bangkok/klong-boat.jpg",
      "/images/tours/bangkok/floating-market.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Canals", "Local Life", "Off-the-beaten-path"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "off-the-beaten-path",
    meetingPoint: {
      address:
        "Saphan Taksin BTS Station, Exit 2, in front of the River City Shopping Complex, Bangkok, Thailand",
      coordinates: {
        latitude: 13.7262,
        longitude: 100.5149,
      },
      instructions:
        "Meet your local guide at Exit 2 of Saphan Taksin BTS Station, in front of the River City Shopping Complex. Your guide will be holding a sign with 'Hidden Canals Tour' written on it. Please arrive 15 minutes before your scheduled tour time.",
      contactNumber: "+66 81 234 5678",
      contactEmail: "canals@paragontrails.com",
    },
    faqs: [
      {
        question: "How much time will we spend on the boat?",
        answer:
          "You'll spend approximately 3 hours exploring Bangkok's hidden canals by private longtail boat. The remaining time is dedicated to stops at local communities, temples, and markets along the waterways.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. Children typically enjoy the boat ride and seeing life along the canals. We provide life jackets for all passengers, including child sizes. The boat has a canopy for sun protection, and we make regular stops to keep the experience engaging for younger travelers.",
      },
      {
        question: "What should I bring for this tour?",
        answer:
          "We recommend bringing sunscreen, a hat, sunglasses, and a light, breathable layer as protection from the sun. A small bottle of water is provided, but you may want to bring additional hydration. Don't forget your camera – the canals offer unique photographic opportunities! We also suggest bringing hand sanitizer and some small bills in Thai baht for optional purchases at the markets.",
      },
      {
        question: "Will we get wet during the tour?",
        answer:
          "While our boats are stable and you shouldn't get soaked, light splashing can happen on the canals, especially when other boats pass by. The longtail boats are covered for sun protection, but they are open-sided. We recommend not bringing valuables that cannot get slightly damp or storing them in a waterproof bag.",
      },
      {
        question:
          "What makes these canals 'hidden' or different from other canal tours?",
        answer:
          "Unlike the more touristy canal tours that stick to main waterways, our route explores the smaller, lesser-known canals where everyday Bangkok residents live and work. We visit communities rarely seen by tourists, authentic local markets instead of those set up for visitors, and temples that don't appear in guidebooks. You'll experience genuine local life rather than staged tourist attractions.",
      },
    ],
    availableDates: [
      "2024-04-05",
      "2024-04-12",
      "2024-04-19",
      "2024-04-26",
      "2024-05-03",
      "2024-05-10",
      "2024-05-17",
      "2024-05-24",
      "2024-06-07",
      "2024-06-14",
      "2024-06-21",
      "2024-06-28",
      "2024-07-05",
      "2024-07-12",
    ],
    highlights: [
      "Private longtail boat journey through Bangkok's hidden canals",
      "Visit authentic floating markets where locals shop",
      "Explore waterside communities and traditional wooden houses",
      "Discover hidden temples inaccessible by road",
      "Experience daily life along Bangkok's waterways",
    ],
    inclusions: [
      "Private longtail boat for the duration of the tour",
      "English-speaking local guide",
      "Bottled water and seasonal fruits",
      "All entrance fees to temples and markets",
      "Light refreshments at a canal-side cafe",
    ],
    exclusions: [
      "Hotel pickup and drop-off (available for additional fee)",
      "Additional food and beverages not specified",
      "Gratuities (optional)",
      "Personal expenses",
    ],
    itinerary: [
      "8:30 AM: Meet your guide at the designated meeting point",
      "9:00 AM: Board your private longtail boat and begin canal exploration",
      "10:00 AM: Visit a local floating market away from tourist crowds",
      "11:00 AM: Explore hidden temples and shrines along the canals",
      "12:00 PM: Enjoy refreshments at a canal-side community",
      "1:00 PM: Visit traditional wooden houses and artisan workshops",
      "2:30 PM: Return to the starting point and tour conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
  },
  {
    title: "Bangkok After Dark: Sky Bars & Street Food",
    description:
      "Experience Bangkok's dynamic nightlife with a curated evening visiting exclusive rooftop bars with spectacular city views, followed by an exploration of vibrant street food districts guided by a local culinary expert.",
    city: "Bangkok",
    country: "Thailand",
    region: "Central Thailand",
    images: [
      "/images/tours/bangkok/skybar-view.jpg",
      "/images/tours/bangkok/night-street-food.jpg",
    ],
    duration: "5 hours",
    price: "$115",
    rating: 4.8,
    tags: ["Nightlife", "Street Food", "Rooftops"],

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
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "culinary",
    meetingPoint: {
      address:
        "Lobby of Lebua at State Tower, 1055 Silom Road, Bangrak, Bangkok, Thailand",
      coordinates: {
        latitude: 13.7218,
        longitude: 100.5158,
      },
      instructions:
        "Meet your nightlife guide in the main lobby of Lebua at State Tower (of 'Hangover 2' fame). Your guide will be holding an illuminated sign with 'Bangkok Nights' written on it. Please arrive 15 minutes before your scheduled tour time with ID, as the sky bars have age and dress code requirements.",
      contactNumber: "+66 82 345 6789",
      contactEmail: "nightlife@paragontrails.com",
    },
    faqs: [
      {
        question: "What is the dress code for the sky bars?",
        answer:
          "Bangkok's upscale sky bars enforce smart casual dress codes. Men should wear long pants, closed shoes (no flip-flops or sandals), and collared shirts. Women have more flexibility but should dress elegantly (no beachwear or very casual attire). If your daytime attire doesn't meet these requirements, we recommend bringing a change of clothes. Some venues don't allow sleeveless shirts for men, shorts, or athletic wear.",
      },
      {
        question: "How much food is included in the street food portion?",
        answer:
          "The tour includes 6-8 substantial food tastings that add up to a full meal. You'll sample a variety of authentic Thai street foods selected by our culinary expert, from savory dishes to sweet treats. The progressive meal is paced throughout the evening to ensure you can enjoy each offering without getting too full too quickly.",
      },
      {
        question: "What drinks are included in the tour price?",
        answer:
          "One signature cocktail or beverage at each sky bar (usually 2-3 venues) is included. During the street food portion, traditional Thai drinks like fresh coconut water, Thai iced tea, or local beer are provided. Additional alcoholic beverages can be purchased at your own expense at any venue.",
      },
      {
        question: "Is the food safe to eat? What about dietary restrictions?",
        answer:
          "We visit carefully selected vendors with high standards of hygiene and fresh ingredients. Our guides are knowledgeable about food safety and choose stalls with quick turnover and proper food handling. We can accommodate most dietary restrictions with advance notice, including vegetarian, gluten-free, and common allergies—though please note that peanuts, shellfish, and other allergens are common in Thai cuisine.",
      },
      {
        question: "How do we travel between venues?",
        answer:
          "Transportation between sky bars and food districts is included, typically using a mix of tuk-tuks, taxis, and BTS Skytrain for an authentic Bangkok experience. This combination allows you to experience the city like locals do while avoiding traffic when possible. All transportation costs during the tour are covered in your tour price.",
      },
    ],
    availableDates: [
      "2024-04-02",
      "2024-04-09",
      "2024-04-16",
      "2024-04-23",
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
    ],
    highlights: [
      "Visit 3 exclusive rooftop bars with spectacular city views",
      "Sample Bangkok's best street food guided by a culinary expert",
      "Learn about Thai drinking culture and cocktail innovations",
      "Experience the vibrant nightlife scene like a local",
      "Discover hidden street food spots known only to residents",
    ],
    inclusions: [
      "English-speaking culinary guide",
      "Welcome drink at each sky bar (3 total)",
      "Street food tastings (5-7 different items)",
      "Transportation between venues (tuk-tuk or taxi)",
      "Sky bar reservation fees and fast-track entry",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks beyond included tastings",
      "Gratuities (optional)",
      "Personal expenses",
    ],
    itinerary: [
      "6:00 PM: Meet your guide at the designated meeting point",
      "6:30 PM: Visit first sky bar for sunset views and welcome drink",
      "7:30 PM: Transfer to the second rooftop bar in a different area",
      "8:30 PM: Visit third sky bar with panoramic night views",
      "9:30 PM: Begin street food exploration in vibrant night markets",
      "10:00 PM: Sample various street food specialties with expert commentary",
      "11:00 PM: Tour conclusion at a central location",
    ],
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
  },
  {
    title: "Cultural Heritage & Temple Tour",
    description:
      "Explore Bangkok's rich cultural heritage with visits to iconic temples, including Wat Pho and Wat Arun, guided by a local historian who shares insights into the city's spiritual traditions and architectural marvels.",
    city: "Bangkok",
    country: "Thailand",
    region: "Central Thailand",
    images: [
      "/images/tours/bangkok/wat-pho.jpg",
      "/images/tours/bangkok/wat-arun.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.9,
    tags: ["Cultural", "Historical", "Temples"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "historical",
    meetingPoint: {
      address: "Tha Tien Pier, near Wat Pho, Bangkok, Thailand",
      coordinates: {
        latitude: 13.7442,
        longitude: 100.4914,
      },
      instructions:
        "Meet your cultural guide at Tha Tien Pier, near the entrance to Wat Pho. Your guide will be holding an orange lotus flower and wearing a Paragon Trails name badge. Please arrive 15 minutes before your scheduled tour time wearing modest clothing that covers shoulders and knees (required for temple visits).",
      contactNumber: "+66 83 456 7890",
      contactEmail: "temples@paragontrails.com",
    },
    faqs: [
      {
        question: "What should I wear to visit the temples?",
        answer:
          "Temples in Thailand require modest dress. Both men and women must cover their shoulders and knees—no sleeveless tops, shorts, or short skirts. Avoid tight or revealing clothing. We recommend lightweight, breathable fabrics due to Bangkok's heat. Shoes must be removed before entering temple buildings, so wear footwear that's easy to take on and off. If needed, we can provide sarongs to cover up, but it's better to dress appropriately from the start.",
      },
      {
        question: "What temples will we visit on this tour?",
        answer:
          "The tour focuses on Bangkok's most significant temples: Wat Pho (Temple of the Reclining Buddha), Wat Arun (Temple of Dawn), and potentially a third lesser-known temple depending on timing and interests. Each temple has distinct architectural styles and cultural significance, which our historian guide will explain in detail.",
      },
      {
        question: "Will we see monks during our visit?",
        answer:
          "Yes, many of these temples are active religious sites where monks live and study. You may observe monks performing daily rituals or walking through the grounds. Our guide will explain proper etiquette for interacting with or photographing monks. In some cases, you might have the opportunity to receive a blessing or participate in a brief ceremony, always conducted with appropriate cultural respect.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour involves approximately 3-4 kilometers (2-2.5 miles) of walking at a leisurely pace. You'll be on your feet for most of the 4-hour tour, with some opportunities to sit while listening to explanations. Temple grounds often have uneven surfaces and stairs. While the walking isn't strenuous, comfortable footwear is essential, especially considering you'll be removing shoes frequently to enter temples.",
      },
      {
        question: "Is photography allowed in the temples?",
        answer:
          "Photography is permitted in most areas of the temples, though there may be specific sacred rooms where it's prohibited. Flash photography is generally not allowed near Buddha images. Our guide will clearly indicate any no-photo zones. When photographing Buddha images or monks, maintain a respectful distance and demeanor. Tripods are not permitted in most temple buildings but can be used in open courtyard areas.",
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
      "2024-05-29",
      "2024-06-05",
      "2024-06-12",
      "2024-06-19",
      "2024-06-26",
      "2024-07-03",
    ],
    highlights: [
      "Visit to the historic Wat Pho and its Reclining Buddha",
      "Explore the stunning Wat Arun, Temple of Dawn",
      "Learn about Buddhist traditions and temple architecture",
      "Experience a monk's blessing and participate in a merit-making ceremony",
      "Enjoy a traditional Thai lunch at a local restaurant",
    ],
    inclusions: [
      "English-speaking local guide",
      "All entrance fees to temples",
      "Traditional Thai lunch",
      "Bottled water and refreshments",
      "Hotel pickup and drop-off",
    ],
    exclusions: [
      "Gratuities (optional)",
      "Personal expenses",
      "Additional food and drinks not specified",
    ],
    itinerary: [
      "8:00 AM: Hotel pickup from central Bangkok locations",
      "9:00 AM: Visit Wat Pho and explore the temple grounds",
      "10:30 AM: Take a ferry across the river to Wat Arun",
      "11:00 AM: Tour Wat Arun and enjoy panoramic views from the temple",
      "12:00 PM: Lunch at a local restaurant",
      "1:00 PM: Participate in a monk's blessing ceremony",
      "2:00 PM: Visit a local market and learn about Thai ingredients",
      "3:00 PM: Return to hotel or drop-off point",
    ],
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
  },
  {
    title: "Bangkok Markets & Local Crafts Tour",
    description:
      "Discover Bangkok's vibrant markets and local artisans with a guided tour through Chatuchak Weekend Market, Talad Rot Fai, and hidden craft workshops, learning about traditional Thai crafts and sampling local delicacies.",
    city: "Bangkok",
    country: "Thailand",
    region: "Central Thailand",
    images: [
      "/images/tours/bangkok/chatuchak-market.jpg",
      "/images/tours/bangkok/craft-workshop.jpg",
    ],
    duration: "6 hours",
    price: "$90",
    rating: 4.8,
    tags: ["Markets", "Crafts", "Local Experience"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "local",
    meetingPoint: {
      address: "Chatuchak Park MRT Station, Exit 1, Bangkok, Thailand",
      coordinates: {
        latitude: 13.8003,
        longitude: 100.553,
      },
      instructions:
        "Meet your market guide outside Exit 1 of Chatuchak Park MRT Station. Your guide will be holding a colorful tote bag with a 'Bangkok Markets Tour' sign. Please arrive 10 minutes before your scheduled tour time wearing comfortable walking shoes and weather-appropriate clothing.",
      contactNumber: "+66 84 567 8901",
      contactEmail: "markets@paragontrails.com",
    },
    faqs: [
      {
        question: "How crowded will the markets be?",
        answer:
          "Chatuchak Weekend Market is one of the world's largest and can be very busy, particularly during peak hours (10am-2pm). Our expert guides know how to navigate the crowds and find less congested pathways. We time the visit to specific sections to minimize crowding. Talad Rot Fai is typically less crowded but livelier in the evening hours. Our route is designed to balance the authentic market experience while avoiding the most uncomfortable crush of people.",
      },
      {
        question: "Will there be time for shopping?",
        answer:
          "Yes, we allocate specific free time for personal shopping at both markets. Your guide can help with recommendations based on what you're looking for and can assist with basic price negotiations if needed. We can also point you to the best-quality vendors and help you avoid tourist traps. If you purchase bulky items, we can advise on shipping options.",
      },
      {
        question: "What kinds of crafts will we see being made?",
        answer:
          "The craft workshops we visit typically demonstrate traditional Thai crafts such as silk weaving, wood carving, traditional puppet making, or herbal product creation. The specific workshops visited may vary based on artisan availability, but you'll always get to see authentic Thai craftsmanship up close and learn about the cultural significance of these traditional arts.",
      },
      {
        question: "Is the food at the markets safe to eat?",
        answer:
          "We select vendors with good hygiene practices and high turnover of fresh products. Your guide can recommend stalls with the best reputation for both taste and cleanliness. Street food is an integral part of Thai culture, and we want you to experience it safely. Hand sanitizer is provided throughout the tour, and bottled water is included.",
      },
      {
        question: "How much walking does this tour involve?",
        answer:
          "This tour involves significant walking—approximately 6-8 kilometers (4-5 miles) in total—as we explore extensive market areas. We walk at a comfortable pace with regular breaks, but markets have uneven surfaces and can be hot with limited seating. The craft workshops provide seated rest periods. This tour is best suited for those comfortable being on their feet for most of the 6-hour duration.",
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
      "2024-05-30",
      "2024-06-06",
      "2024-06-13",
      "2024-06-20",
      "2024-06-27",
      "2024-07-04",
    ],
    highlights: [
      "Explore the vast Chatuchak Weekend Market with over 15,000 stalls",
      "Visit the trendy Talad Rot Fai night market for vintage finds",
      "Experience hands-on traditional craft workshops",
      "Meet local artisans and learn about their crafts",
      "Sample a variety of local delicacies and snacks",
    ],
    inclusions: [
      "English-speaking local guide",
      "All entrance fees to markets and workshops",
      "Food samples at various stalls",
      "Transportation between locations",
      "Bottled water and refreshments",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities (optional)",
      "Personal expenses",
      "Additional food and drinks not specified",
    ],
    itinerary: [
      "9:00 AM: Meet your guide at the designated meeting point",
      "9:30 AM: Arrive at Chatuchak Weekend Market and receive a tour overview",
      "10:00 AM: Explore the market with your guide, visiting key sections",
      "12:00 PM: Lunch at a local restaurant (own expense)",
      "1:00 PM: Visit Talad Rot Fai night market for vintage and retro goods",
      "3:00 PM: Participate in a craft workshop (options include pottery, painting, etc.)",
      "5:00 PM: Tour conclusion and return to the meeting point",
    ],
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
  },
];

export default bangkokTours;
