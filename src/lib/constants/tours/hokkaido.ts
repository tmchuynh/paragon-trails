import { Tour } from "@/lib/interfaces/services/tours";

export const hokkaidoTours: Tour[] = [
  {
    title: "Hokkaido Powder Skiing & Onsen Experience",
    description:
      "Experience Japan's legendary powder snow with guided skiing at premier resorts including Niseko and Rusutsu, followed by relaxing evenings in traditional hot spring onsen baths and authentic izakaya dining.",
    images: [
      "/images/tours/hokkaido/powder-skiing.jpg",
      "/images/tours/hokkaido/onsen-bath.jpg",
    ],
    duration: "7 days",
    price: "$2,950",
    rating: 4.9,
    tags: ["Skiing", "Winter", "Onsen"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What skill level of skiing is required?",
        answer:
          "This tour accommodates intermediate to advanced skiers who are comfortable on blue and black runs. Our guides will separate the group based on abilities to ensure everyone has an optimal experience. Beginners can be accommodated with private lessons (additional fee) but would not be able to participate in the off-piste powder skiing portions of the tour. Niseko's international ski school is excellent for improving skills before joining the main group activities.",
      },
      {
        question: "What should I pack for the tour?",
        answer:
          "We provide a detailed packing list upon booking, but generally, you should bring warm winter clothing suitable for skiing (layers, waterproof jacket/pants, gloves, goggles), swimwear for onsen visits, and comfortable evening attire for dining out. Ski equipment can be rented locally or brought from home; we recommend renting to avoid excess baggage fees. Don't forget your camera to capture the stunning winter landscapes!",
      },
      {
        question: "Are meals included in the tour price?",
        answer:
          "Yes, the tour includes daily breakfast, several group dinners at local izakayas, and one special kaiseki dinner. Lunches are generally not included to allow flexibility for skiing days, but our guides can recommend great local options. Dietary restrictions can be accommodated with advance notice.",
      },
    ],
  },
  {
    title: "Hokkaido Culinary Journey & Farm Experience",
    description:
      "Discover why Hokkaido is Japan's gourmet paradise with visits to dairy farms, wasabi fields, seafood markets, and whisky distilleries. Learn traditional cooking techniques and enjoy exclusive dining experiences featuring the island's renowned seafood and produce.",
    images: [
      "/images/tours/hokkaido/seafood-market.jpg",
      "/images/tours/hokkaido/farm-visit.jpg",
    ],
    duration: "5 days",
    price: "$1,895",
    rating: 4.8,
    tags: ["Food", "Agriculture", "Cooking"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What makes Hokkaido cuisine unique in Japan?",
        answer:
          "Hokkaido's cuisine is distinctly different from the rest of Japan due to its northern climate, vast farmland, and surrounding seas. The region produces 70% of Japan's dairy (rare in traditional Japanese cuisine), exceptional seafood (especially crab, sea urchin, and salmon), and unique crops like corn and potatoes. You'll experience Genghis Khan (grilled lamb), soup curry, fresh dairy desserts, and the freshest sushi—all specialties rarely found with the same quality elsewhere in Japan. Hokkaido's brewing and distilling traditions also produce distinctive sake, beer, and internationally acclaimed whisky.",
      },
      {
        question: "Do I need prior cooking experience for the workshops?",
        answer:
          "No prior cooking experience is necessary! Our workshops are designed for all skill levels, from complete beginners to experienced cooks. We focus on traditional techniques and local ingredients, with hands-on guidance from professional chefs. The goal is to have fun while learning about Hokkaido's culinary heritage, so come ready to enjoy the process!",
      },
    ],
  },
  {
    title: "Wildlife & Nature Photography in Eastern Hokkaido",
    description:
      "Photograph Hokkaido's spectacular wildlife including red-crowned cranes, Steller's sea eagles, and Blakiston's fish owls with guidance from a professional wildlife photographer in pristine winter landscapes and volcanic national parks.",
    images: [
      "/images/tours/hokkaido/red-crowned-cranes.jpg",
      "/images/tours/hokkaido/sea-eagles.jpg",
    ],
    duration: "6 days",
    price: "$2,750",
    rating: 4.9,
    tags: ["Photography", "Winter"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "What photography equipment should I bring?",
        answer:
          "For wildlife photography, we recommend a DSLR or mirrorless camera with telephoto lenses (minimum 300mm, ideally 500-600mm for birds). A sturdy tripod is essential, as is a backup camera body if possible. For landscape work, wide-angle lenses (16-35mm range) and neutral density filters are useful. Winter conditions require extra batteries (cold depletes them quickly), weather protection for gear, and appropriate gloves that allow camera operation. We provide detailed equipment lists upon booking and offer limited lens rental with advance reservation.",
      },
      {
        question:
          "What is the best time of year for wildlife photography in Hokkaido?",
        answer:
          "The best time for wildlife photography in Hokkaido is winter (December to March) when snow covers the landscape, creating stunning contrasts with wildlife. This period is ideal for photographing red-crowned cranes, Steller's sea eagles, and other migratory birds. Spring (April to June) offers opportunities to capture bears emerging from hibernation and the blooming of wildflowers. Each season has unique photographic opportunities, so we tailor our itineraries based on your interests and the wildlife activity during your visit.",
      },
      {
        question: "Do I need prior photography experience for this tour?",
        answer:
          "While basic photography knowledge is helpful, this tour is designed for all skill levels. Our guide provides daily workshops covering composition, lighting, and wildlife behavior to help you improve your skills. We focus on practical field techniques rather than technical jargon, so whether you're a beginner or advanced photographer, you'll gain valuable insights and have the opportunity to capture stunning images.",
      },
      {
        question: "Are meals included during the photography tour?",
        answer:
          "Yes, all meals are included during the tour. We provide hearty breakfasts, packed lunches for field days, and dinners featuring local cuisine. Dietary restrictions can be accommodated with advance notice. The focus is on nutritious meals that provide energy for long days in the field while enjoying Hokkaido's culinary specialties.",
      },
    ],
  },
  {
    title: "Volcano Hiking & Hot Springs Tour",
    description:
      "Explore Hokkaido's dramatic volcanic landscapes with guided hikes through Shikotsu-Toya National Park, ascending active volcanoes, walking through ancient calderas, and relaxing in therapeutic hot springs fed by geothermal activity.",
    images: [
      "/images/tours/hokkaido/volcano-hiking.jpg",
      "/images/tours/hokkaido/crater-lake.jpg",
    ],
    duration: "4 days",
    price: "$1,250",
    rating: 4.7,
    tags: ["Hiking", "Volcanoes", "Hot Springs"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult are the hikes?",
        answer:
          "The tour includes moderate hiking with daily treks ranging from 5-10km (3-6 miles) with elevation gains of 300-600m (980-1970ft). Trails are generally well-maintained but sometimes steep or rocky. A reasonable level of fitness is required, but we maintain a comfortable pace with frequent stops for photography and geological explanation. The most challenging hike is Mt. Tarumae (approximately 5 hours round-trip), but alternative activities can be arranged for those who prefer a less strenuous option.",
      },
      {
        question: "What should I pack for the hikes?",
        answer:
          "We provide a detailed packing list upon booking, but generally, you should bring sturdy hiking boots, moisture-wicking clothing, a waterproof jacket, a hat, and sunscreen. Trekking poles are recommended for steeper sections. We also suggest bringing a refillable water bottle (we provide water purification tablets) and snacks for the trail. A small daypack is useful for carrying personal items during hikes.",
      },
    ],
  },
  {
    title: "Hokkaido Winter Festivals & Ice Sculpture Tour",
    description:
      "Experience Hokkaido's world-famous winter festivals including the Sapporo Snow Festival with its massive ice sculptures, the ethereal Otaru Snow Light Path Festival, and participate in a hands-on ice sculpting workshop with master artists.",
    images: [
      "/images/tours/hokkaido/sapporo-snow-festival.jpg",
      "/images/tours/hokkaido/ice-sculpture-workshop.jpg",
    ],
    duration: "5 days",
    price: "$1,950",
    rating: 4.8,
    tags: ["Winter Festivals", "Cultural", "Art"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "When exactly do these festivals take place?",
        answer:
          "The main festivals occur in early to mid-February each year, with the Sapporo Snow Festival typically running for one week in the first half of February. The exact dates vary slightly each year and are usually announced in autumn. Our tour is carefully timed to include the peak days of the major festivals while avoiding the most crowded weekends. This tour only operates during the festival period in February, and we recommend booking at least 6 months in advance due to high demand for accommodations during this popular season.",
      },
      {
        question: "What should I wear for the winter festivals?",
        answer:
          "Dress warmly in layers, including thermal base layers, insulated jackets, waterproof pants, and good winter boots. Hats, gloves, and scarves are essential to protect against the cold. We recommend bringing hand warmers and a small backpack for carrying personal items. The festivals are outdoors, so be prepared for cold temperatures and potential snow. We provide a detailed packing list upon booking to ensure you have everything needed for comfort during the events.",
      },
    ],
  },
  {
    title: "Ainu Indigenous Culture Immersion",
    description:
      "Learn about Hokkaido's indigenous Ainu people through intimate cultural experiences, museum visits, craft workshops with master artisans, traditional performances, and forest walks highlighting traditional ecological knowledge and spiritual beliefs.",
    images: [
      "/images/tours/hokkaido/ainu-village.jpg",
      "/images/tours/hokkaido/ainu-crafts.jpg",
    ],
    duration: "3 days",
    price: "$1,150",
    rating: 4.6,
    tags: ["Indigenous", "Cultural", "Crafts"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Who are the Ainu people?",
        answer:
          "The Ainu are the indigenous people of Hokkaido, northern Japan, and parts of Russia with a distinct language, religion, and cultural traditions different from mainstream Japanese culture. They traditionally lived by hunting, fishing, and gathering, with deep spiritual connections to nature. After centuries of discrimination and forced assimilation policies, the Japanese government only officially recognized the Ainu as indigenous people in 2019. Today, there is a revitalization of Ainu language, arts, and cultural practices, though there are fewer than 20,000 people who identify as Ainu. This tour provides respectful insight into their heritage while supporting contemporary Ainu cultural practitioners.",
      },
      {
        question:
          "What types of activities are included in the cultural immersion?",
        answer:
          "The tour includes visits to Ainu cultural museums, traditional craft workshops (such as wood carving and textile weaving), performances of Ainu music and dance, guided forest walks explaining traditional ecological knowledge, and opportunities to interact with Ainu artisans. We also include meals featuring traditional Ainu cuisine. The focus is on respectful engagement with Ainu culture, providing a deeper understanding of their history and contemporary practices.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children. The activities are designed to be engaging and educational for all ages, with opportunities for hands-on participation in crafts and performances. Children will enjoy learning about Ainu stories, music, and traditional ways of life in a respectful and interactive environment. We encourage families to participate together in the cultural experiences.",
      },
      {
        question: "How does this tour support Ainu communities?",
        answer:
          "A portion of the tour fees goes directly to supporting Ainu cultural organizations and artisans. We prioritize working with Ainu guides and businesses to ensure that the experiences are authentic and benefit the community. By participating in this tour, you are helping to preserve and promote Ainu culture while providing economic support to contemporary Ainu practitioners.",
      },
      {
        question:
          "What is the best time to visit for Ainu cultural experiences?",
        answer:
          "The best time for this tour is during the summer months (June to September) when the weather is mild, and many Ainu festivals and events take place. However, we can arrange private tours year-round based on demand. Winter tours focus more on indoor cultural experiences due to cold weather, while summer allows for outdoor activities like forest walks and traditional fishing.",
      },
      {
        question: "Are there any language barriers?",
        answer:
          "While many Ainu people speak Japanese, some may also speak Ainu language. Our guides are fluent in both English and Japanese, and we ensure that all cultural experiences are accessible to non-Japanese speakers. We also provide translation for any Ainu language components to enhance understanding of their cultural significance.",
      },
      {
        question: "What should I wear for the cultural immersion activities?",
        answer:
          "Dress comfortably and respectfully, with layers suitable for the season. Outdoor activities may require sturdy shoes for walking in natural areas. We recommend avoiding overly casual attire (like beachwear) to show respect for Ainu traditions. If participating in craft workshops, we suggest wearing clothes that can get a bit messy.",
      },
      {
        question: "Can I take photos during the cultural experiences?",
        answer:
          "Photography is generally allowed, but we ask that you respect any specific requests from Ainu guides or artisans regarding when and where photos can be taken. Some cultural practices may be private or sacred, so we will inform you in advance if photography is restricted in certain contexts. Always ask permission before photographing individuals.",
      },
      {
        question: "Is this tour accessible for people with mobility issues?",
        answer:
          "We strive to make our tours as accessible as possible, but some activities (like forest walks) may not be suitable for those with significant mobility challenges. Please contact us in advance to discuss any specific accessibility needs, and we will do our best to accommodate them. Some cultural experiences can be adapted for wheelchair users or those with limited mobility.",
      },
    ],
  },
  {
    title: "Hokkaido Lavender Fields & Flower Farm Experience",
    description:
      "Visit Hokkaido during its spectacular summer bloom with exclusive access to Furano's lavender fields, flower farms, and renowned gardens. Join a photography workshop during 'magic hour' and create your own lavender products in a hands-on workshop.",
    images: [
      "/images/tours/hokkaido/lavender-fields.jpg",
      "/images/tours/hokkaido/flower-farms.jpg",
    ],
    duration: "4 days",
    price: "$1,450",
    rating: 4.9,
    tags: ["Flowers", "Photography", "Summer"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "When is the best time to see the lavender fields?",
        answer:
          "The lavender in Furano typically blooms from late June to early August, with peak bloom usually occurring in mid-July. This can vary slightly depending on weather conditions each year. Our tours are scheduled during the optimal viewing periods, and we monitor bloom conditions closely before your visit. The tour also includes visits to flower farms with different blooming schedules, ensuring spectacular floral displays throughout the summer season. Each month offers different flowers: lupins and tulips in June, lavender in July, and sunflowers and dahlias in August.",
      },
      {
        question: "What should I wear for the flower farm visits?",
        answer:
          "Dress comfortably for warm summer weather, with breathable clothing and sturdy shoes suitable for walking on uneven terrain. A wide-brimmed hat and sunscreen are recommended to protect against sun exposure. We also suggest bringing a refillable water bottle to stay hydrated during outdoor activities. If you plan to participate in the photography workshop, consider bringing a camera or smartphone with good photo capabilities.",
      },
      {
        question: "Can I purchase lavender products during the tour?",
        answer:
          "Yes, we visit local shops where you can purchase high-quality lavender products such as essential oils, soaps, dried lavender bundles, and culinary items like lavender honey. The hands-on workshop also allows you to create your own lavender sachets or infused oils to take home as unique souvenirs.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children. The flower farms are safe and engaging for kids, with opportunities to learn about plants and nature. The photography workshop can be adapted for all ages, and children will enjoy the hands-on activities like making lavender sachets. We encourage families to participate together in the outdoor experiences.",
      },
      {
        question: "What photography skills will the workshop cover?",
        answer:
          "The photography workshop focuses on capturing the beauty of the lavender fields and surrounding landscapes during 'magic hour' (the hour before sunset). Topics include composition, lighting techniques, and using natural elements to enhance your photos. Our guide provides practical tips for both smartphone and DSLR users, ensuring everyone can improve their photography skills regardless of experience level. The goal is to help you capture stunning images while enjoying the serene beauty of Hokkaido's summer blooms.",
      },
    ],
  },
  {
    title: "Hokkaido Coastal Wilderness Kayaking",
    description:
      "Paddle along Hokkaido's dramatic Shiretoko Peninsula, a UNESCO World Heritage site, observing brown bears, whales, and sea birds from stable sea kayaks with expert guides. Camp on secluded beaches and soak in natural hot springs accessible only by water.",
    images: [
      "/images/tours/hokkaido/sea-kayaking.jpg",
      "/images/tours/hokkaido/coastal-camping.jpg",
    ],
    duration: "5 days",
    price: "$1,850",
    rating: 4.7,
    tags: ["Kayaking", "Camping"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need previous kayaking experience?",
        answer:
          "No prior kayaking experience is necessary, though a moderate fitness level and comfort around water are required. We use stable, two-person sea kayaks and provide comprehensive instruction before departure. The paddling distances are manageable (typically 3-5 hours per day) with plenty of breaks. Our route stays relatively close to shore in protected waters, though sea conditions can change. For those with limited outdoor experience, we offer an optional pre-trip training day for additional comfort and skill building.",
      },
      {
        question: "What should I pack for the kayaking tour?",
        answer:
          "We provide a detailed packing list upon booking, but generally, you should bring quick-drying clothing suitable for kayaking (swimsuit, moisture-wicking layers), waterproof jacket and pants, sturdy sandals or water shoes, and a hat. We also recommend a refillable water bottle, sunscreen, and personal toiletries. Camping gear (tents, sleeping bags) is provided, but you may want to bring your own sleeping pad for extra comfort. A small dry bag for personal items is useful to keep things organized while on the water.",
      },
      {
        question: "Are meals included during the kayaking tour?",
        answer:
          "Yes, all meals are included during the tour. We provide hearty breakfasts, packed lunches for kayaking days, and dinners cooked over campfires or portable stoves. Our guides prepare fresh ingredients sourced from local markets whenever possible. Dietary restrictions can be accommodated with advance notice. The focus is on nutritious meals that provide energy for outdoor activities while enjoying the natural surroundings.",
      },
    ],
  },
  {
    title: "Hokkaido Snowshoeing & Winter Wildlife Tour",
    description:
      "Explore Hokkaido's winter wilderness on snowshoes, tracking wildlife like red foxes, deer, and owls with expert naturalist guides. Visit frozen lakes, ancient forests, and scenic viewpoints while learning about the region's unique ecology.",
    images: [
      "/images/tours/hokkaido/snowshoeing.jpg",
      "/images/tours/hokkaido/winter-wildlife.jpg",
    ],
    duration: "4 days",
    price: "$1,350",
    rating: 4.8,
    tags: ["Snowshoeing", "Winter"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need prior snowshoeing experience?",
        answer:
          "No prior snowshoeing experience is necessary! Our guides provide comprehensive instruction on using snowshoes and adjusting your technique for different terrain. The trails are designed for all skill levels, from beginners to experienced outdoor enthusiasts. A moderate fitness level is required, as we cover approximately 5-10km (3-6 miles) per day at a relaxed pace with plenty of breaks for wildlife observation and photography.",
      },
      {
        question: "What should I wear for the snowshoeing tour?",
        answer:
          "Dress in layers suitable for cold weather, including thermal base layers, insulated jackets, waterproof pants, and warm gloves. Sturdy waterproof boots are essential for comfort while snowshoeing. We recommend wearing a hat and bringing sunglasses to protect against glare from the snow. A small backpack for personal items (water bottle, snacks) is useful during hikes.",
      },
      {
        question: "Are meals included during the tour?",
        answer:
          "Yes, all meals are included during the tour. We provide hearty breakfasts, packed lunches for snowshoeing days, and dinners featuring local cuisine. Dietary restrictions can be accommodated with advance notice. The focus is on nutritious meals that provide energy for outdoor activities while enjoying Hokkaido's winter landscapes.",
      },
    ],
  },
];

export default hokkaidoTours;
