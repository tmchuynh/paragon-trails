import { Tour } from "@/lib/interfaces/services/tours";
export const beijingTours: Tour[] = [
  {
    title: "Great Wall Exclusive: Untouched Sections & Helicopter View",
    description:
      "Experience the Great Wall of China away from the crowds with access to restored and wild sections, plus an optional helicopter flight providing unforgettable aerial perspectives of this wonder of the world.",
    images: [
      "/images/tours/beijing/unrestored-wall.jpg",
      "/images/tours/beijing/wall-helicopter.jpg",
    ],
    duration: "Full day",
    price: "$295",
    rating: 5.0,
    tags: ["Great Wall", "Exclusive", "Aerial"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Professor Wang Feng",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Which sections of the Great Wall do we visit?",
        answer:
          "We visit both Mutianyu (a beautifully restored section with fewer crowds than Badaling) and hike a private access path to Jiankou (a dramatic unrestored section). This combination provides both the majestic views of the restored wall and the authentic adventure of walking on the ancient, wild sections where you'll feel like an explorer discovering the wall for the first time.",
      },
      {
        question: "Is the helicopter flight included in the price?",
        answer:
          "The helicopter flight is an optional add-on available for an additional fee. It provides a breathtaking aerial view of the Great Wall snaking through the mountains, but can be skipped if you prefer a more traditional hiking experience.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Wear comfortable hiking shoes and clothing suitable for outdoor activities. The terrain can be rugged, especially on the Jiankou section, so sturdy footwear is essential. We recommend dressing in layers as temperatures can vary significantly throughout the day.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. Children ages 8 and up can participate in the hiking portions, though parents should assess their child's fitness level for the more strenuous Jiankou hike. The helicopter flight is also suitable for children, but they must be at least 4 years old to board.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 48 hours in advance will receive a full refund. Cancellations within 48 hours are non-refundable due to the exclusive nature of the tour and pre-arranged permits and helicopter bookings.",
      },
    ],
  },
  {
    title: "Forbidden City Behind-the-Scenes & Imperial Treasures",
    description:
      "Gain privileged access to closed sections of Beijing's Forbidden City, exploring imperial quarters and secret gardens while discovering the fascinating stories of emperors, concubines, and court intrigue.",
    images: [
      "/images/tours/beijing/forbidden-city.jpg",
      "/images/tours/beijing/imperial-garden.jpg",
    ],
    duration: "5 hours",
    price: "$165",
    rating: 4.9,
    tags: ["Imperial", "Palace", "Exclusive"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Liu Mei",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Which restricted areas will we visit?",
        answer:
          "Our special permit allows access to areas like the Treasure Gallery (Zhenbaoguan), Qianlong Garden complex with its exquisite interiors, and select areas of the Palace of Compassion and Tranquility. These sections contain some of the most spectacular examples of Chinese artistry and design, yet are closed to general visitors or require additional fees and advance reservations.",
      },
      {
        question: "How long is the walking distance?",
        answer:
          "The tour involves approximately 3-4 kilometers (1.8-2.5 miles) of walking, mostly on flat, paved paths within the palace grounds. Comfortable walking shoes are recommended, and we take breaks to rest and enjoy the surroundings.",
      },
      {
        question: "Is photography allowed inside the Forbidden City?",
        answer:
          "Yes, photography is allowed in most areas of the Forbidden City, including the restricted sections we visit. However, tripods and professional photography equipment are not permitted without special permission.",
      },
    ],
  },
  {
    title: "Beijing Hutong Food & Culture Walking Tour",
    description:
      "Explore Beijing's historic hutong alleyways while sampling authentic local cuisine from hidden family-run eateries. Learn about daily life in these traditional neighborhoods and the culinary traditions that have been preserved for generations.",
    images: [
      "/images/tours/beijing/hutong-alley.jpg",
      "/images/tours/beijing/street-food.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Food", "Hutong", "Local Culture"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Zhang Wei",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample 8-10 different local specialties including jianbing (savory crepes), handmade dumplings, Beijing yogurt, traditional sweets, and regional teas. We can accommodate most dietary restrictions with advance notice, though some authentic dishes contain wheat, peanuts, and other common allergens.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 2-3 kilometers (1.2-1.9 miles) at a leisurely pace, with plenty of stops to sample food and learn about the history and culture of the hutongs. Comfortable walking shoes are recommended.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children of all ages. The food is generally mild and kid-friendly, and our guide can adapt the experience based on your family's preferences.",
      },
    ],
  },
  {
    title: "Beijing Photography: Dawn to Dusk",
    description:
      "Capture Beijing's most photogenic locations during optimal lighting conditions with guidance from a professional photographer. From sunrise at the Temple of Heaven to sunset at the Summer Palace, perfect your photography skills while exploring iconic sites.",
    images: [
      "/images/tours/beijing/temple-heaven-sunrise.jpg",
      "/images/tours/beijing/summer-palace-sunset.jpg",
    ],
    duration: "10 hours",
    price: "$175",
    rating: 4.9,
    tags: ["Photography", "Landmarks", "Sunrise"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Li Jing, National Geographic Contributor",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What photography skill level is this tour designed for?",
        answer:
          "This tour is suitable for all skill levels from smartphone photographers to advanced DSLR users. Our guide provides tailored instruction based on your equipment and experience. Beginners will learn composition basics and how to use available light, while advanced photographers can focus on creative techniques and challenging shooting conditions.",
      },
      {
        question: "What should I bring?",
        answer:
          "Please bring your camera (smartphone or DSLR), extra batteries, memory cards, and comfortable walking shoes. A tripod is recommended for sunrise/sunset shots but not required. We also suggest bringing a water bottle and snacks, as we will be out for the entire day.",
      },
      {
        question: "Will we have time to edit photos during the tour?",
        answer:
          "While we won't have time for in-depth editing during the tour, our guide will provide tips on post-processing techniques you can apply later. You'll also receive a follow-up email with recommended apps and software for editing your photos.",
      },
    ],
  },
  {
    title: "Temple of Heaven Tai Chi at Sunrise",
    description:
      "Begin your day with a private Tai Chi lesson from a master instructor in the serene grounds of the Temple of Heaven. Practice this ancient art as locals do their morning exercises, followed by a traditional breakfast and tea ceremony.",
    images: [
      "/images/tours/beijing/tai-chi.jpg",
      "/images/tours/beijing/temple-heaven-morning.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Tai Chi", "Wellness", "Morning"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Master Chen",
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "Do I need prior Tai Chi experience?",
        answer:
          "No prior experience is necessary. Our master instructor has over 40 years of experience teaching beginners and will guide you through basic movements and breathing techniques. The session is adapted to all fitness levels and ages, focusing on the meditative and health benefits of this gentle martial art.",
      },
      {
        question: "What should I wear for the Tai Chi lesson?",
        answer:
          "Wear comfortable, loose-fitting clothing suitable for light exercise. Soft-soled shoes or sneakers are recommended. We can provide traditional Tai Chi uniforms if desired, but they are not required.",
      },
      {
        question: "Is breakfast included in the tour?",
        answer:
          "Yes, after the Tai Chi session, we will enjoy a traditional Chinese breakfast including congee (rice porridge), steamed buns, and tea at a local eatery near the Temple of Heaven.",
      },
    ],
  },
  {
    title: "Beijing Olympic Architecture Tour",
    description:
      "Explore Beijing's stunning Olympic architecture including the Bird's Nest and Water Cube with an architectural historian. Get exclusive access to normally restricted areas and learn about the fusion of traditional Chinese design with modern innovation.",
    images: [
      "/images/tours/beijing/birds-nest.jpg",
      "/images/tours/beijing/water-cube.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.6,
    tags: ["Architecture", "Olympic", "Modern"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Professor Zhao Ying",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we go inside all the Olympic venues?",
        answer:
          "Yes, we have arranged special access to enter both the National Stadium (Bird's Nest) and National Aquatics Center (Water Cube), including some behind-the-scenes areas not open to regular visitors. You'll see how these iconic venues have been repurposed following the 2008 Olympics and learn about their role in the 2022 Winter Games.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour involves approximately 2 kilometers (1.2 miles) of walking at a leisurely pace, with plenty of opportunities to sit and rest. Comfortable walking shoes are recommended.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children of all ages. The architectural features and stories are engaging for both adults and kids, and we can adapt the content based on their interests.",
      },
    ],
  },
  {
    title: "Beijing Family Adventure: Kung Fu & Kite Making",
    description:
      "A perfect day for families featuring a kid-friendly kung fu class with Shaolin-trained instructors and traditional kite making. Children will learn basic martial arts moves and create their own colorful kite to fly on the historic grounds of the Temple of Earth.",
    images: [
      "/images/tours/beijing/kids-kungfu.jpg",
      "/images/tours/beijing/kite-making.jpg",
    ],
    duration: "5 hours",
    price: "$110",
    rating: 4.9,
    tags: ["Family", "Kung Fu", "Crafts"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Master Wong & Mrs. Lin",
    tourCategoryId: "family",
    faqs: [
      {
        question: "What ages is this tour appropriate for?",
        answer:
          "This tour is designed for families with children ages 5-15, though we welcome children of all ages. The kung fu lesson is adapted based on age groups, with shorter, playful sessions for younger children and more technical instruction for older ones. Parents are encouraged to participate in both activities alongside their children.",
      },
      {
        question: "What should we wear for the kung fu class?",
        answer:
          "Wear comfortable athletic clothing suitable for movement. We recommend sneakers or soft-soled shoes. Traditional kung fu uniforms can be rented on-site if desired, but are not required.",
      },
      {
        question: "Is lunch included in the tour?",
        answer:
          "Lunch is not included, but we will take a break at a family-friendly restaurant nearby where you can purchase traditional Chinese dishes. We can also accommodate dietary restrictions with advance notice.",
      },
    ],
  },
  {
    title: "Beijing by Night: Illuminated Landmarks & Nightlife",
    description:
      "Experience Beijing's dramatic transformation after dark as ancient monuments are illuminated and modern skyscrapers create a dazzling light show. Visit night markets, enjoy a rooftop cocktail with panoramic views, and explore the city's vibrant evening scene.",
    images: [
      "/images/tours/beijing/forbidden-city-night.jpg",
      "/images/tours/beijing/cbd-lights.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Night Tour", "Lights", "Nightlife"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Michael Zhang",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this a walking tour or do we use transportation?",
        answer:
          "This tour combines comfortable private transportation between major sites with strategic walking segments to experience the nighttime atmosphere. We use a premium vehicle with an experienced driver to efficiently navigate between locations, allowing you to maximize your experience of Beijing after dark.",
      },
      {
        question: "What landmarks will we see at night?",
        answer:
          "We visit the Forbidden City, Temple of Heaven, and Olympic Park to see their stunning nighttime illuminations. We also explore the vibrant Wangfujing Night Market and end with a rooftop bar overlooking the CBD skyline.",
      },
      {
        question: "Is food included in the tour?",
        answer:
          "Light snacks are provided during the night market visit, but dinner is not included. We can recommend local restaurants for a full meal before or after the tour if desired.",
      },
      {
        question: "Can we customize the tour based on our interests?",
        answer:
          "Yes, we can tailor the tour to focus on specific interests such as photography, local culture, or nightlife. Please let us know your preferences when booking so we can create a personalized experience.",
      },
    ],
  },
  {
    title: "Luxury Beijing: Private Helicopter Tour & Imperial Dining",
    description:
      "Experience Beijing like royalty with an exclusive helicopter flight over the Forbidden City and Great Wall, followed by an imperial-style dinner in a private pavilion at one of Beijing's most exclusive restaurants.",
    images: [
      "/images/tours/beijing/helicopter-view.jpg",
      "/images/tours/beijing/imperial-dinner.jpg",
    ],
    duration: "6 hours",
    price: "$1,295",
    rating: 5.0,
    tags: ["Luxury", "Helicopter", "Exclusive"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "VIP Concierge Team",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What is included in the imperial dinner?",
        answer:
          "The dinner features a private multicourse tasting menu inspired by historic imperial recipes once served only to emperors and their court. Each dish is prepared by a master chef specializing in traditional royal cuisine and paired with premium Chinese teas or fine wines. Dietary preferences and restrictions can be accommodated with advance notice to create a fully customized dining experience.",
      },
      {
        question: "How long is the helicopter flight?",
        answer:
          "The helicopter flight lasts approximately 30 minutes, providing breathtaking aerial views of the Forbidden City, Tiananmen Square, and the Great Wall. You'll have ample time to take photos and enjoy the stunning panoramas of Beijing's skyline and surrounding mountains.",
      },
      {
        question: "Is this tour suitable for special occasions?",
        answer:
          "Absolutely! This tour is perfect for celebrating anniversaries, honeymoons, or other special occasions. We can arrange personalized touches such as a custom cake, champagne toast, or special decorations in the private dining pavilion to make your experience truly unforgettable. Please let us know your celebration details when booking so we can tailor the experience to your needs.",
      },
      {
        question: "What is the cancellation policy for this luxury tour?",
        answer:
          "Due to the exclusive nature of this tour, cancellations made at least 7 days in advance will receive a full refund. Cancellations within 7 days are non-refundable as we secure special permits and reservations for the helicopter and dining experiences. We recommend purchasing travel insurance to cover any unforeseen circumstances.",
      },
    ],
  },
];

export default beijingTours;
