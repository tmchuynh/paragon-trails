import { Tour } from "@/lib/interfaces/services/tours";
export const casablancaTours: Tour[] = [
  {
    title: "Hassan II Mosque & Islamic Architecture",
    description:
      "Explore the magnificence of one of the world's largest mosques with an architecture expert, gaining special access to ornate details and design elements typically overlooked, followed by a tour of Casablanca's stunning Art Deco district.",
    images: [
      "/images/tours/casablanca/hassan-ii-mosque.jpg",
      "/images/tours/casablanca/art-deco-district.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Architecture", "Religious", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Omar Benzakour",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What should I wear when visiting the mosque?",
        answer:
          "Modest dress is required for mosque visits. Women should cover their hair, arms, and legs (headscarves and appropriate coverings are provided if needed). Men should wear long pants and shirts with sleeves. All visitors must remove shoes before entering prayer areas, so slip-on footwear is recommended.",
      },
      {
        question: "Is the mosque accessible for those with mobility issues?",
        answer:
          "Yes, the mosque is wheelchair accessible, with ramps and elevators to all main areas. Our guide can assist with any specific mobility needs during the tour.",
      },
      {
        question: "Can we take photos inside the mosque?",
        answer:
          "Yes, photography is allowed in most areas of the mosque, but please be respectful and avoid taking photos of people praying. Our guide will inform you of any specific restrictions during the tour.",
      },
    ],
  },
  {
    title: "Moroccan Culinary Journey & Spice Markets",
    description:
      "Immerse yourself in Morocco's legendary cuisine with a chef-led exploration of vibrant markets, followed by a hands-on cooking class in a traditional riad where you'll master authentic tagine, couscous, and pastry techniques.",
    images: [
      "/images/tours/casablanca/spice-market.jpg",
      "/images/tours/casablanca/cooking-class.jpg",
    ],
    duration: "6 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Cooking", "Food", "Market"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Fatima Zahra",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to prepare?",
        answer:
          "The cooking class typically includes preparing a traditional Moroccan tagine (chicken with preserved lemon and olives or vegetable option), fresh Moroccan salads, authentic couscous using hand-rolling techniques, and sweet pastries such as gazelle horns or almond briouats. All recipes are provided to take home, along with recommendations for ingredient substitutions available in your home country.",
      },
      {
        question: "Do I need prior cooking experience?",
        answer:
          "No prior cooking experience is required. Our classes are designed for all skill levels, from beginners to advanced cooks. Chef Fatima Zahra will guide you through each step, explaining techniques and cultural significance behind the dishes. The focus is on having fun while learning authentic Moroccan cooking methods.",
      },
      {
        question: "Are dietary restrictions accommodated?",
        answer:
          "Yes, we can accommodate most dietary restrictions with advance notice. Vegetarian and vegan options are available, and we can modify recipes to avoid allergens like nuts or gluten. Please inform us of any dietary needs when booking so we can prepare accordingly.",
      },
    ],
  },
  {
    title: "Casablanca Cinematic History Walking Tour",
    description:
      "Journey through the cinematic legacy of Casablanca, visiting filming locations and historic spots that inspired the legendary film, while learning about Morocco's complex role during World War II and the colonial period.",
    images: [
      "/images/tours/casablanca/rick-cafe.jpg",
      "/images/tours/casablanca/old-medina.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Film", "History", "Walking Tour"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Younes Benali",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Will we visit Rick's Café from the movie?",
        answer:
          "Yes, we visit Rick's Café, though it's important to note this is a recreation inspired by the film rather than an original filming location (the movie was actually filmed in Hollywood studios). The café was created in 2004 by an American diplomat to capture the ambiance of the film, complete with piano, curved arches, and period details. It's now a popular restaurant and bar where we'll stop for refreshments during our tour.",
      },
      {
        question: "What other locations will we see?",
        answer:
          "The tour includes stops at several key locations related to the film and Casablanca's history, such as the old medina, Place Mohammed V, the Royal Palace, and the former Jewish quarter. We'll also discuss the city's role during WWII and its colonial past, providing context for the film's themes of love and sacrifice.",
      },
    ],
  },
  {
    title: "Art Deco Architectural Heritage Tour",
    description:
      "Discover Casablanca's unique status as North Africa's Art Deco capital with an expert-led exploration of the city's stunning 1930s buildings, featuring private access to normally closed interiors and rooftop viewpoints.",
    images: [
      "/images/tours/casablanca/art-deco-buildings.jpg",
      "/images/tours/casablanca/villa-interiors.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Architecture", "Art Deco", "Photography"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Professor Laila Alaoui",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What makes Casablanca's Art Deco architecture unique?",
        answer:
          "Casablanca features a distinctive fusion of European Art Deco with traditional Moroccan elements known as 'Mauresque' architecture. During French colonial rule in the 1920s-30s, architects created buildings with classic Art Deco geometric patterns and streamlined forms, but incorporated local motifs like zellige tilework, carved stucco, and traditional Islamic patterns. This unique blend created one of the world's most distinctive architectural landscapes, which has fortunately been preserved in many neighborhoods.",
      },
      {
        question: "Will we enter any buildings?",
        answer:
          "Yes, this tour includes exclusive access to several private residences and commercial buildings that showcase original Art Deco interiors, such as grand lobbies, staircases, and rooftop terraces. These locations are not typically open to the public, allowing you to experience the full beauty of this architectural style up close. Our guide will provide detailed explanations of the design elements and historical context of each building.",
      },
      {
        question: "Is this tour suitable for photography enthusiasts?",
        answer:
          "Absolutely! This tour is perfect for photographers, as many of the buildings feature stunning details and unique perspectives. Our guide will point out the best angles and lighting conditions for capturing the intricate tilework, wrought iron balconies, and decorative motifs. We also allow time for you to take photos at each location, ensuring you can document the beauty of Casablanca's Art Deco heritage.",
      },
    ],
  },
  {
    title: "Coastal Paradise: Ain Diab Beach Day & Water Sports",
    description:
      "Escape the city bustle for a day of sun and sea at Casablanca's premier beach district, with optional water sports, beachfront lunch at an exclusive club, and guided exploration of the scenic Corniche area.",
    images: [
      "/images/tours/casablanca/ain-diab-beach.jpg",
      "/images/tours/casablanca/corniche.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.6,
    tags: ["Beach", "Water Sports", "Relaxation"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Karim Berrada",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What water activities are available?",
        answer:
          "Our beach day includes options for jet skiing, paddleboarding, kayaking, or surfing lessons with professional instructors (each activity has an additional fee payable directly to operators). Equipment rental and basic instruction are included for all beach activities. The Atlantic waters along Casablanca can be cool year-round, so we provide wetsuits when needed for water sports.",
      },
      {
        question: "Is there a beach club we will visit?",
        answer:
          "Yes, we spend the day at a private beach club that offers sun loungers, umbrellas, and access to clean restrooms and showers. The club has a beachfront restaurant serving fresh seafood, Moroccan salads, and international cuisine. You can order food and drinks directly from your sunbed or at the bar.",
      },
      {
        question: "What should I bring for the beach day?",
        answer:
          "Please bring swimwear, sunscreen, a hat, sunglasses, and a towel. We recommend wearing comfortable beach attire and sandals. If you plan to participate in water sports, please wear appropriate clothing that can get wet. We provide lockers for your belongings while you enjoy the beach.",
      },
    ],
  },
  {
    title: "Moroccan Hammam & Spa Ritual",
    description:
      "Indulge in the centuries-old tradition of the Moroccan hammam with a private spa experience featuring traditional black soap scrub, rhassoul clay treatment, argan oil massage, and mint tea relaxation.",
    images: [
      "/images/tours/casablanca/hammam.jpg",
      "/images/tours/casablanca/spa-treatment.jpg",
    ],
    duration: "3 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Wellness", "Spa", "Traditional"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Amina El Haddad, Spa Director",
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "What exactly is a hammam?",
        answer:
          "A hammam is a traditional North African steam bath and cleansing ritual that has been central to Moroccan culture for centuries. The experience typically involves relaxing in a steam room, followed by exfoliation with black soap made from olives and eucalyptus, a scrub with a special mitt called a 'kessa', application of purifying rhassoul clay from the Atlas Mountains, and finally a moisturizing treatment with argan oil. It's both a cleansing ritual and social tradition that leaves skin remarkably soft and the body deeply relaxed.",
      },
    ],
  },
  {
    title: "Hidden Medina Food & Craft Tour",
    description:
      "Navigate the labyrinthine old medina of Casablanca with a local guide, discovering hidden food stalls, artisan workshops, and authentic markets far from tourist paths, with tastings of street food specialties throughout the journey.",
    images: [
      "/images/tours/casablanca/medina-alley.jpg",
      "/images/tours/casablanca/street-food.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Food", "Local", "Shopping"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Hassan Benjelloun",
    tourCategoryId: "local-experience",
    faqs: [
      {
        question: "Is the food safe to eat?",
        answer:
          "We carefully select all food vendors based on their hygiene practices and local reputation. Our guides are experts at identifying the safest and most delicious street food options, frequented by locals rather than tourists. All food is freshly prepared, often right before your eyes. We provide hand sanitizer throughout the tour and can accommodate dietary restrictions with advance notice.",
      },
      {
        question: "What types of food will we try?",
        answer:
          "The tour includes a variety of Moroccan street food specialties such as grilled meats (kebabs), fresh seafood, traditional pastries, olives, local cheeses, and seasonal fruits. We also visit spice shops where you can sample unique blends and learn about their culinary uses. Vegetarian and vegan options are available upon request.",
      },
      {
        question: "Will we have time to shop for crafts?",
        answer:
          "Yes, the tour includes visits to artisan workshops where you can see traditional crafts being made, such as pottery, leatherwork, and textiles. You'll have opportunities to purchase unique handmade souvenirs directly from the artisans. Our guide can help with bargaining and ensure you get fair prices.",
      },
    ],
  },
  {
    title: "Day Trip: Rabat Royal City Tour",
    description:
      "Explore Morocco's elegant capital city with a day trip to Rabat featuring the royal palace, ancient Kasbah des Oudaias, historic Chellah necropolis, and the magnificent Hassan Tower, with round-trip transportation from your Casablanca hotel.",
    images: [
      "/images/tours/casablanca/rabat-kasbah.jpg",
      "/images/tours/casablanca/hassan-tower.jpg",
    ],
    duration: "9 hours",
    price: "$145",
    rating: 4.8,
    tags: ["Day Trip", "History", "Architecture"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Mohammed Cherkaoui",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How far is Rabat from Casablanca?",
        answer:
          "Rabat is approximately 87 kilometers (54 miles) northeast of Casablanca. The drive takes about 1 hour and 15 minutes each way along a modern highway. We travel in comfortable, air-conditioned vehicles with a mid-morning departure from Casablanca, giving us ample time to explore Rabat's highlights before returning in the early evening.",
      },
      {
        question: "What will we see in Rabat?",
        answer:
          "The tour includes visits to the Royal Palace (exterior only), the Kasbah des Oudaias with its stunning ocean views, the ancient Chellah necropolis with Roman ruins and gardens, and the iconic Hassan Tower and Mausoleum of Mohammed V. We also have time to explore the medina and enjoy a traditional Moroccan lunch at a local restaurant.",
      },
    ],
  },
  {
    title: "Moroccan Photography Masterclass",
    description:
      "Perfect your photography skills with a professional photographer who guides you through Casablanca's most photogenic locations, from hidden courtyards and bustling markets to architectural marvels in optimal lighting conditions.",
    images: [
      "/images/tours/casablanca/photo-workshop.jpg",
      "/images/tours/casablanca/mosque-photography.jpg",
    ],
    duration: "5 hours",
    price: "$110",
    rating: 4.7,
    tags: ["Photography", "Art", "Architecture"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Nadia Sebti",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer:
          "This tour is suitable for photographers of all levels using any type of camera, including smartphones, point-and-shoot, or DSLRs. If using a DSLR, we recommend bringing a standard zoom lens (24-70mm or similar) and perhaps a wide-angle lens for architectural shots. Tripods are welcome but not essential. Our guide can tailor instruction to your specific equipment and skill level, focusing on composition, lighting, and capturing the unique character of Moroccan scenes.",
      },
      {
        question: "Will we visit specific photography hotspots?",
        answer:
          "Yes, the tour includes carefully selected locations that offer diverse photographic opportunities, such as the Hassan II Mosque, hidden medina alleys, bustling souks, and scenic viewpoints. We also time the tour to take advantage of the best natural light for photography, including golden hour sessions at key spots. Our guide will provide tips on capturing the essence of each location and composing striking images.",
      },
      {
        question: "Can I get feedback on my photos?",
        answer:
          "Absolutely! The tour includes a post-session review where you can share your favorite shots with our guide for constructive feedback and tips on improvement. This personalized critique helps you refine your skills and gain confidence in your photography.",
      },
    ],
  },
  {
    title: "Family Adventure: Moroccan Crafts & Culture for Kids",
    description:
      "An interactive family experience designed specifically for children and parents, featuring kid-friendly workshops in pottery making, Moroccan storytelling, traditional music, and a treasure hunt through safe areas of the old medina.",
    images: [
      "/images/tours/casablanca/kids-pottery.jpg",
      "/images/tours/casablanca/family-activities.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Family", "Kids", "Interactive"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Samira & Jamal",
    tourCategoryId: "family",
    faqs: [
      {
        question: "What ages is this tour appropriate for?",
        answer:
          "This tour is specially designed for families with children ages 5-12, though older and younger siblings are always welcome. Activities are adaptable based on the ages of children in the group. Our guides are experienced educators who know how to engage children with Moroccan culture in age-appropriate, hands-on ways. Parents participate in all activities alongside their children, creating shared family memories.",
      },
      {
        question: "What types of crafts will the kids make?",
        answer:
          "Children will have the opportunity to create their own pottery pieces using traditional techniques, learn basic Moroccan music rhythms with simple instruments, and participate in storytelling sessions featuring local legends. The tour also includes a fun treasure hunt through the medina where kids can search for hidden objects and learn about Moroccan culture in an engaging way. All materials are safe and suitable for children.",
      },
      {
        question: "Is this tour suitable for children with special needs?",
        answer:
          "Yes, we strive to make our tours inclusive for all families. Please inform us in advance of any specific needs or accommodations required, and we will do our best to adapt activities accordingly. Our guides are trained to work with children of all abilities and ensure everyone has a positive experience.",
      },
    ],
  },
  {
    title: "Sunset Desert Beach Dinner & Arabian Nights",
    description:
      "Experience a magical evening beginning with a sunset camel ride along the Atlantic shore, followed by an intimate Moroccan feast in a private beach tent adorned with lanterns, cushions, and carpets, accompanied by traditional music.",
    images: [
      "/images/tours/casablanca/beach-sunset.jpg",
      "/images/tours/casablanca/romantic-dinner.jpg",
    ],
    duration: "6 hours",
    price: "$185",
    rating: 4.9,
    tags: ["Romantic", "Dinner", "Sunset"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Youssef & Leila",
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Yes, we can modify the menu for vegetarians, vegans, gluten-free, and most other dietary needs. The standard feast includes a variety of traditional Moroccan specialties: multiple salads and mezze, tagine (slow-cooked stew with meat or vegetarian options), couscous with seasonal vegetables, fresh seafood, and pastries with honey and nuts for dessert. All dietary modifications maintain the authentic Moroccan flavors and presentation.",
      },
      {
        question: "What is the camel ride like?",
        answer:
          "The sunset camel ride is a gentle, leisurely experience suitable for all ages. We provide comfortable saddles and safety instructions before setting off along the beach. The ride lasts about 30 minutes, allowing you to enjoy the stunning coastal views and take photos with the camels against the backdrop of the setting sun. Our guides ensure a safe and enjoyable experience for everyone.",
      },
      {
        question: "What should I wear for the dinner?",
        answer:
          "Dress comfortably but elegantly for this special evening. Light layers are recommended as temperatures can drop after sunset. Many guests choose to wear traditional Moroccan attire (djellaba or kaftan) for an authentic experience, but smart casual clothing is also perfectly acceptable. We provide cushions and blankets for added comfort during dinner.",
      },
    ],
  },
  {
    title: "Luxury Casablanca: Private Tour & Fine Dining",
    description:
      "Indulge in the finest Casablanca has to offer with private chauffeur-driven exploration, exclusive access to luxury locations, rooftop champagne, and dinner at Morocco's most acclaimed restaurant with a customized tasting menu.",
    images: [
      "/images/tours/casablanca/luxury-transportation.jpg",
      "/images/tours/casablanca/fine-dining.jpg",
    ],
    duration: "8 hours",
    price: "$395",
    rating: 5.0,
    tags: ["Luxury", "Exclusive", "Gourmet"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Mehdi Benkirane",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What makes this experience luxurious?",
        answer:
          "This VIP experience features transportation in a premium vehicle (Mercedes or equivalent) with professional chauffeur, a dedicated personal guide, champagne reception at an exclusive rooftop venue overlooking the Hassan II Mosque, private shopping experiences at high-end boutiques and artisan studios, and dinner at a Michelin-quality restaurant where the chef will create a custom tasting menu paired with Moroccan and international wines. Every detail is customized to your preferences.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can tailor the tasting menu to accommodate any dietary restrictions or preferences, including vegetarian, vegan, gluten-free, and allergies. Please inform us of any specific needs when booking so our chef can prepare accordingly.",
      },
      {
        question: "Is this tour suitable for special occasions?",
        answer:
          "Absolutely! This luxury experience is perfect for celebrating anniversaries, honeymoons, birthdays, or other special occasions. We can arrange additional surprises such as personalized gifts, floral arrangements, or special decorations upon request. Just let us know how we can make your experience unforgettable.",
      },
    ],
  },
  {
    title: "Day Trip: Coastal Retreat to El Jadida & Azemmour",
    description:
      "Escape to the charming coastal towns near Casablanca, exploring the UNESCO-listed Portuguese fortress of El Jadida and the artist haven of Azemmour with its whitewashed medina, including a seafood lunch by the harbor.",
    images: [
      "/images/tours/casablanca/el-jadida-cistern.jpg",
      "/images/tours/casablanca/azemmour-walls.jpg",
    ],
    duration: "9 hours",
    price: "$125",
    rating: 4.7,
    tags: ["Day Trip", "Coastal", "UNESCO"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Rachid Douiri",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "What will we see in El Jadida?",
        answer:
          "El Jadida's highlight is the Portuguese Citadel, a UNESCO World Heritage site built in the early 16th century. We'll explore its massive star-shaped fortifications, walk along the ramparts with ocean views, and visit the atmospheric underground cistern with its forest of columns reflected in the shallow pool of water—a location featured in several films. We'll also see the unique fusion of Portuguese, Moroccan and Jewish architectural influences in the old city.",
      },
      {
        question: "What about Azemmour?",
        answer:
          "Azemmour is known for its picturesque medina, whitewashed buildings, and vibrant street art scene. We'll stroll through its narrow alleys, visit local artisan workshops, and see the historic ramparts overlooking the Oum Er-Rbia River. The town has a relaxed, artistic vibe with many galleries and cafés. We also include a delicious seafood lunch at a local restaurant overlooking the harbor.",
      },
      {
        question: "How do we get to El Jadida and Azemmour?",
        answer:
          "Transportation is provided in comfortable, air-conditioned vehicles with a professional driver. The drive from Casablanca to El Jadida takes about 1.5 hours, followed by a short 30-minute drive to Azemmour. We ensure a smooth and enjoyable journey with scenic coastal views along the way.",
      },
    ],
  },
  {
    title: "Casablanca Jewish Heritage Tour",
    description:
      "Discover the rich history and cultural contributions of Morocco's Jewish community through visits to historic synagogues, the Jewish cemetery, Museum of Moroccan Judaism, and neighborhoods that once thrived with Jewish life.",
    images: [
      "/images/tours/casablanca/synagogue.jpg",
      "/images/tours/casablanca/jewish-museum.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Jewish Heritage", "History", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Dr. Simon Levy",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What is the significance of Jewish heritage in Morocco?",
        answer:
          "Morocco once had the largest Jewish community in the Muslim world, with a presence dating back over 2,000 years. Unlike many other Arab countries, Morocco has officially preserved its Jewish heritage sites and maintains positive relationships with its Jewish diaspora. Casablanca is home to the only Jewish Museum in the Arab world and still has active synagogues serving the remaining Jewish population. Our tour explores this unique history of coexistence and cultural exchange between Muslim and Jewish Moroccans throughout centuries.",
      },
    ],
  },
  {
    title: "Moroccan Artisanry Workshop: Zellige Tile Making",
    description:
      "Learn the intricate art of traditional Moroccan zellige tile mosaic from master craftsmen, creating your own geometric pattern using ancient techniques passed down through generations, with your finished piece shipped to your home.",
    images: [
      "/images/tours/casablanca/zellige-workshop.jpg",
      "/images/tours/casablanca/tile-crafting.jpg",
    ],
    duration: "5 hours",
    price: "$115",
    rating: 4.8,
    tags: ["Craft", "Workshop", "Traditional"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Master Craftsman Hamid",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is artistic experience required?",
        answer:
          "No prior artistic experience is needed. Our master craftsmen will guide you through each step, from selecting your geometric pattern to cutting tiles and setting them in plaster using traditional methods. While zellige is an intricate art form that takes years to master, we've designed the workshop so beginners can successfully create a beautiful small piece (approximately 8x8 inches) to take home. More experienced participants can attempt more complex designs.",
      },
      {
        question: "What materials are provided?",
        answer:
          "All materials are included in the workshop fee: pre-cut clay tiles in various colors, plaster, tools for cutting and setting tiles, and protective gear. You'll also receive a brief history of zellige tilework and its significance in Moroccan architecture. At the end of the workshop, your finished piece will be carefully packaged and shipped to your home address within 2-3 weeks.",
      },
      {
        question: "Can children participate?",
        answer:
          "Yes, this workshop is suitable for children ages 8 and up when accompanied by an adult. We provide child-sized tools and simplified patterns for younger participants. It's a fun, hands-on way for families to bond while learning about Moroccan culture together.",
      },
    ],
  },
  {
    title: "Modern Casablanca Urban Experience",
    description:
      "Discover contemporary Casablanca beyond the tourist sites with visits to cutting-edge art galleries, trendy cafés, modern architecture, and vibrant neighborhoods where young Moroccans are creating new expressions of their cultural heritage.",
    images: [
      "/images/tours/casablanca/modern-architecture.jpg",
      "/images/tours/casablanca/art-gallery.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.6,
    tags: ["Contemporary", "Art", "Urban"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Zineb El Rhazoui",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How is this different from standard Casablanca tours?",
        answer:
          "While most tours focus on historical or traditional aspects of Moroccan culture, this experience highlights the dynamic, evolving side of Casablanca as North Africa's business hub and cultural trendsetter. We'll visit contemporary art galleries featuring emerging Moroccan artists, see innovative architecture blending modern and traditional elements, explore neighborhoods where young entrepreneurs are opening design studios and concept stores, and discuss current social and cultural movements reshaping Morocco's largest city.",
      },
      {
        question: "Will we visit any specific neighborhoods?",
        answer:
          "Yes, the tour includes stops in neighborhoods like Maarif, Gauthier, and Anfa, known for their modern architecture, trendy cafés, and vibrant street art. We'll also explore the new Casablanca Marina area with its waterfront developments and luxury shops. Our guide will introduce you to local artists and entrepreneurs who are shaping the city's contemporary scene.",
      },
      {
        question: "Is this tour suitable for all ages?",
        answer:
          "Yes, this tour is designed to be engaging for all ages, with a focus on visual arts, architecture, and cultural discussions that appeal to both adults and children. Families are welcome, and we can adapt the content based on the interests of younger participants.",
      },
    ],
  },
];

export default casablancaTours;
