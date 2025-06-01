import { Tour } from "@/lib/interfaces/services/tours";

export const dubaiTours: Tour[] = [
  {
    title: "Modern Dubai Architecture Tour",
    description:
      "Explore Dubai's spectacular futuristic architecture with an architectural photographer, going beyond tourist spots to photograph unique perspectives of the Burj Khalifa, Dubai Frame, and other innovative structures.",
    images: [
      "/images/tours/dubai/burj-khalifa.jpg",
      "/images/tours/dubai/dubai-architecture.jpg",
    ],
    duration: "5 hours",
    price: "$150",
    rating: 4.8,
    tags: ["Architecture", "Photography", "Modern"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Do I need professional camera equipment?",
        answer:
          "While professional equipment is not required, a camera that allows manual settings will help you get the most out of the photography guidance. Smartphone users are welcome and will receive specific tips for mobile photography. Tripods are recommended for evening tours, and we can provide tripods upon request.",
      },
      {
        question: "Will we go inside the Burj Khalifa?",
        answer:
          "This tour focuses on exterior architectural photography from strategic vantage points. Entry to observation decks is not included, but we can arrange tickets as an add-on if requested in advance. Our guide will show you unique perspectives that most tourists miss.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour includes moderate walking between photo locations with opportunities to rest. Transportation is provided between major sites. Comfortable shoes and weather-appropriate clothing are recommended.",
      },
    ],
  },
  {
    title: "Desert Safari & Bedouin Experience",
    description:
      "Venture beyond the city for an authentic desert experience including dune bashing in vintage Land Rovers, falconry demonstrations, traditional Bedouin hospitality with local cuisine, and stargazing away from city lights.",
    images: [
      "/images/tours/dubai/desert-safari.jpg",
      "/images/tours/dubai/bedouin-camp.jpg",
    ],
    duration: "7 hours",
    price: "$195",
    rating: 4.9,
    tags: ["Desert", "Adventure", "Cultural"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Is dune bashing safe?",
        answer:
          "Yes, our experienced drivers are specially trained for desert terrain and use well-maintained vehicles equipped with safety features. The activity can be quite thrilling with some steep ascents and descents over dunes. Those with back problems, heart conditions, or who are pregnant should skip this portion of the tour.",
      },
      {
        question: "What should I wear for the desert?",
        answer:
          "Wear loose, comfortable clothing and bring a light jacket or sweater as desert temperatures drop significantly after sunset. Sandals are suitable, but closed shoes are recommended for walking in sand. Don't forget sunglasses, sunscreen, and a camera!",
      },
      {
        question: "Is food provided during the tour?",
        answer:
          "Yes, a traditional Bedouin dinner is included featuring grilled meats, fresh salads, Arabic bread, hummus, and desserts. Vegetarian options are available with advance notice. Water, soft drinks, Arabic coffee, and tea are complimentary.",
      },
    ],
  },
  {
    title: "Old Dubai Cultural Walking Tour",
    description:
      "Step back in time to discover Dubai's origins through the historic Al Fahidi district, Dubai Creek, traditional souks, and cultural museums with a local guide sharing insights into Emirati heritage and traditions.",
    images: [
      "/images/tours/dubai/al-fahidi-district.jpg",
      "/images/tours/dubai/dubai-creek.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Cultural", "Historical", "Walking"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This is primarily a walking tour covering approximately 3-4 kilometers at a leisurely pace with frequent stops. Comfortable walking shoes are recommended. The terrain is mostly flat, though some areas have uneven surfaces or steps.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and provides children with an engaging introduction to local culture and history. We can adapt the content to keep younger participants interested with stories and interactive elements.",
      },
      {
        question: "What museums will we visit?",
        answer:
          "We typically visit the Dubai Museum in Al Fahidi Fort and a traditional house museum showcasing local architecture and lifestyles. All entrance fees are included in the tour price.",
      },
    ],
  },
  {
    title: "Dubai Culinary Tour: Emirati Flavors & Fusion",
    description:
      "Sample Dubai's diverse culinary landscape from traditional Emirati dishes to innovative fusion cuisine with a food expert guiding you through local neighborhoods, hidden gems, and explaining the cultural significance of Middle Eastern cuisine.",
    images: [
      "/images/tours/dubai/emirati-cuisine.jpg",
      "/images/tours/dubai/spice-souk.jpg",
    ],
    duration: "5 hours",
    price: "$135",
    rating: 4.8,
    tags: ["Food", "Culture", "Local Experience"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many food tastings are included?",
        answer:
          "The tour includes 7-8 different food tastings ranging from street food to higher-end establishments. Portions are generous and amount to a substantial meal by the end of the tour. Come hungry!",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate vegetarian, halal, and most dietary restrictions with advance notice. Please inform us of any allergies or dietary needs when booking so we can arrange suitable alternatives.",
      },
      {
        question: "Will we visit the spice and gold souks?",
        answer:
          "Yes, the tour includes visits to both the Spice Souk and nearby Gold Souk. You'll have time to explore these traditional markets with guidance on shopping etiquette and tips for finding quality products at fair prices.",
      },
    ],
  },
  {
    title: "Dubai Luxury Yacht Cruise",
    description:
      "Sail along Dubai's stunning coastline aboard a private luxury yacht, taking in breathtaking views of iconic landmarks like Palm Jumeirah, Burj Al Arab, and the city skyline while enjoying premium refreshments and personalized service.",
    images: [
      "/images/tours/dubai/luxury-yacht.jpg",
      "/images/tours/dubai/dubai-marina.jpg",
    ],
    duration: "4 hours",
    price: "$450",
    rating: 4.9,
    tags: ["Luxury", "Yacht", "Scenic"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "How many people does the yacht accommodate?",
        answer:
          "This private charter accommodates up to 10 guests comfortably. The yacht features indoor and outdoor seating areas, a premium sound system, and dedicated crew to ensure your experience is perfect.",
      },
      {
        question: "What refreshments are provided?",
        answer:
          "The cruise includes soft drinks, water, premium juices, and a selection of gourmet snacks and fresh fruits. Alcoholic beverages are not included but can be arranged upon request for an additional fee (subject to licensing regulations).",
      },
      {
        question: "Can we customize the sailing route?",
        answer:
          "Yes, the captain can customize the sailing route based on your preferences while ensuring you see the major landmarks. Popular routes include Dubai Marina, Palm Jumeirah, Burj Al Arab, and Bluewaters Island.",
      },
    ],
  },
  {
    title: "Abu Dhabi Day Trip: Sheikh Zayed Grand Mosque & Louvre",
    description:
      "Explore the highlights of Abu Dhabi on this full-day excursion from Dubai, visiting the magnificent Sheikh Zayed Grand Mosque, culturally significant Louvre Abu Dhabi, and enjoying panoramic views of the city's striking skyline.",
    images: [
      "/images/tours/dubai/sheikh-zayed-mosque.jpg",
      "/images/tours/dubai/louvre-abu-dhabi.jpg",
    ],
    duration: "9 hours",
    price: "$180",
    rating: 4.8,
    tags: ["Abu Dhabi", "Architecture", "Culture"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What is the dress code for visiting the Grand Mosque?",
        answer:
          "The Sheikh Zayed Grand Mosque requires modest dress. Women must wear loose, long clothing covering arms, legs and head (abayas with hoods are provided free of charge). Men must wear long trousers and a shirt that covers shoulders. No transparent clothing, visible tattoos, or intimate behavior is permitted out of respect for local culture.",
      },
      {
        question: "Is lunch included in this tour?",
        answer:
          "Yes, a midday meal is included at a select restaurant featuring international and local cuisine. Please inform us of any dietary restrictions when booking.",
      },
      {
        question: "How long does it take to reach Abu Dhabi from Dubai?",
        answer:
          "The journey from Dubai to Abu Dhabi takes approximately 1.5 hours each way in our comfortable, air-conditioned vehicle. We use the time to provide interesting information about the UAE and its development.",
      },
    ],
  },
  {
    title: "Dubai Shopping Experience: From Souks to Luxury Malls",
    description:
      "Discover Dubai's reputation as a shopping paradise with a guided tour from traditional gold and spice souks to ultra-modern luxury malls, with personalized shopping guidance and insights into finding the best values.",
    images: [
      "/images/tours/dubai/gold-souk.jpg",
      "/images/tours/dubai/dubai-mall.jpg",
    ],
    duration: "6 hours",
    price: "$110",
    rating: 4.6,
    tags: ["Shopping", "Luxury", "Markets"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Will I get good prices with this tour?",
        answer:
          "Our guide provides valuable assistance with negotiation in traditional souks and information about tax-free shopping benefits. While we don't guarantee specific discounts, clients typically report better prices and more confident shopping experiences with our expert guidance on fair pricing and authentic merchandise.",
      },
      {
        question: "Is transportation included between shopping venues?",
        answer:
          "Yes, comfortable air-conditioned transportation is provided between different shopping destinations. The tour is designed to maximize shopping time with efficient transfers.",
      },
      {
        question: "What unique items should I look for in Dubai?",
        answer:
          "Your guide will highlight distinctive shopping opportunities including gold jewelry (often at competitive prices), authentic Arabian perfumes, spices, handcrafted items, luxury brands (sometimes with regional-exclusive designs), and electronics. We can focus on specific items you're interested in purchasing.",
      },
    ],
  },
  {
    title: "Dubai at Dawn: Hot Air Balloon Desert Adventure",
    description:
      "Witness the magical transformation of the desert at sunrise from a hot air balloon, floating serenely over golden sand dunes while spotting desert wildlife such as gazelles and camels, followed by a gourmet breakfast at a Bedouin-inspired camp.",
    images: [
      "/images/tours/dubai/hot-air-balloon.jpg",
      "/images/tours/dubai/desert-sunrise.jpg",
    ],
    duration: "6 hours",
    price: "$295",
    rating: 4.9,
    tags: ["Hot Air Balloon", "Sunrise", "Desert"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Is hot air ballooning safe?",
        answer:
          "Yes, our hot air balloon rides are operated by experienced pilots certified to international standards with thousands of flight hours. The balloons undergo rigorous safety checks, and the activity is regulated by aviation authorities. Safety briefings are provided before the flight.",
      },
      {
        question: "What time does the tour start?",
        answer:
          "Pickup from your Dubai hotel is very early, typically between 3:30-4:30am depending on the season and your hotel location. The early start is necessary to reach the desert launch site before sunrise. Many guests tell us the spectacular experience is well worth the early wake-up call!",
      },
      {
        question: "What should I wear for the hot air balloon ride?",
        answer:
          "Dress in comfortable clothing suitable for desert conditions. Early mornings can be cool, so we recommend layers that can be removed as the temperature rises. Flat, closed-toe shoes are required. Don't forget sunglasses and sunscreen for after sunrise.",
      },
    ],
  },
  {
    title: "Burj Khalifa VIP Access & Fine Dining",
    description:
      "Skip all lines with VIP access to the exclusive Burj Khalifa SKY level on the 148th floor, the highest outdoor observation deck in the world, followed by a gourmet dinner at the prestigious Armani restaurant with perfect views of the Dubai Fountain show.",
    images: [
      "/images/tours/dubai/burj-khalifa-sky.jpg",
      "/images/tours/dubai/armani-dining.jpg",
    ],
    duration: "5 hours",
    price: "$385",
    rating: 5.0,
    tags: ["Luxury", "VIP", "Fine Dining"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "How is this different from regular Burj Khalifa tickets?",
        answer:
          "This exclusive experience provides access to the premium SKY level (148th floor), which is significantly higher than the standard observation decks and limited to fewer visitors. You'll enjoy private elevator access, personalized welcome, refreshments in the SKY lounge, and zero waiting time with our VIP privileges.",
      },
      {
        question: "What is included in the dining experience?",
        answer:
          "The dining experience includes a 3-course gourmet meal at Armani Ristorante, featuring signature Italian cuisine with Japanese or Mediterranean influences depending on your preference. A glass of premium champagne is included, with additional beverages available for purchase. The restaurant offers perfect views of the Dubai Fountain shows.",
      },
      {
        question: "Is there a dress code?",
        answer:
          "Yes, smart elegant attire is required for this experience. For men, collared shirts, trousers and closed shoes are required (no shorts or sportswear). Women should dress in smart attire. The Armani restaurant has a sophisticated atmosphere befitting its luxury setting.",
      },
    ],
  },
];

export default dubaiTours;
