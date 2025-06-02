import { Tour } from "@/lib/interfaces/services/tours";
export const budapestTours: Tour[] = [
  {
    title: "Thermal Bath Experience & Spa Heritage",
    description:
      "Immerse yourself in Budapest's famous spa culture with an expert-guided tour of historic bath houses, culminating in a private thermal spa experience with treatments based on centuries-old Hungarian wellness traditions.",
    city: "Budapest",
    country: "Hungary",
    region: "Central Hungary",
    images: [
      "/images/tours/budapest/szechenyi-baths.jpg",
      "/images/tours/budapest/gellert-spa.jpg",
    ],
    duration: "4 hours",
    price: "$145",
    rating: 4.9,
    tags: ["Thermal Baths", "Wellness", "History"],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "What should I bring for the thermal bath experience?",
        answer:
          "Please bring your swimwear, a towel (though towels can also be rented), flip-flops, and a water bottle. Shower facilities and lockers are provided. For the mixed-gender areas, swimwear is required, while in certain single-gender sections, it may be optional following European spa traditions.",
      },
      {
        question: "Are the thermal baths suitable for children?",
        answer:
          "Yes, many of Budapest's thermal baths are family-friendly, with designated areas for children. However, some treatments and certain pools may have age restrictions. Please check with us if you plan to bring children.",
      },
      {
        question: "Can I book spa treatments in advance?",
        answer:
          "Yes, we can arrange additional spa treatments such as massages or beauty therapies at the baths. Please let us know your preferences when booking.",
      },
      {
        question: "What are the health benefits of thermal baths?",
        answer:
          "The thermal baths in Budapest are renowned for their healing properties, thanks to the mineral-rich waters sourced from deep beneath the Earth. These baths can help alleviate joint pain, improve circulation, reduce stress, and promote overall well-being. The combination of warm water, minerals, and various therapeutic treatments offers a holistic approach to health that has been cherished for centuries.",
      },
      {
        question: "Is it safe to drink the tap water in the baths?",
        answer:
          "While the thermal water in the baths is rich in minerals and generally safe for bathing, it is not recommended to drink the tap water in the bathhouses as it may contain high levels of minerals and other substances not suitable for consumption. We advise drinking bottled water, which is widely available, to stay hydrated during your visit.",
      },
    ],
  },
  {
    title: "Underground Budapest: Caves & Bunkers",
    description:
      "Discover Budapest's fascinating subterranean world with explorations of natural cave systems beneath Buda Castle, WWII bunkers, and the secret Hospital in the Rock, revealing hidden aspects of the city's geology and turbulent history.",
    city: "Budapest",
    country: "Hungary",
    region: "Central Hungary",
    images: [
      "/images/tours/budapest/hospital-rock.jpg",
      "/images/tours/budapest/cave-system.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Underground", "History", "Caves"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Is this tour suitable for claustrophobic individuals?",
        answer:
          "Parts of this tour involve narrow passages and underground spaces that may be challenging for those with severe claustrophobia. The Hospital in the Rock and certain bunker sections have wider spaces and higher ceilings, while some cave passages are narrower with lower clearance. Please contact us to discuss specific concerns before booking.",
      },
      {
        question: "What should I wear for the underground tour?",
        answer:
          "We recommend wearing comfortable, sturdy shoes suitable for uneven terrain, as well as clothing that can get dirty. A light jacket is advisable, as underground temperatures can be cooler than above ground. Helmets are provided where necessary.",
      },
      {
        question: "Are there any age restrictions for this tour?",
        answer:
          "This tour is generally suitable for all ages, but children must be accompanied by an adult. Some areas may not be stroller-friendly, so please consider this if bringing young children.",
      },
      {
        question:
          "What is the total length of the cave systems we will explore?",
        answer:
          "The total length of the cave systems explored during the tour is approximately 600 meters. The tour is designed to be accessible, with well-lit paths and handrails in steeper sections. However, a moderate level of fitness is recommended due to the uneven terrain and occasional steep steps.",
      },
      {
        question: "Will we see any historical artifacts or exhibits?",
        answer:
          "Yes, throughout the tour, there are several informative exhibits and displays showcasing artifacts found within the caves and bunkers, including items from the Roman period, medieval times, and World War II. These exhibits provide a deeper understanding of the historical significance of the underground sites.",
      },
    ],
  },
  {
    title: "Budapest Culinary Delights: Market & Cooking Class",
    description:
      "Experience Budapest's vibrant food scene with a guided tour of the Great Market Hall, followed by a hands-on cooking class where you will learn to prepare traditional Hungarian dishes using fresh, local ingredients.",
    city: "Budapest",
    country: "Hungary",
    region: "Central Hungary",
    images: [
      "/images/tours/budapest/great-market-hall.jpg",
      "/images/tours/budapest/cooking-class.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Culinary", "Cooking Class", "Local Experience"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Do I need any cooking experience for the class?",
        answer:
          "No prior cooking experience is required. Our classes are designed for all skill levels, from beginners to experienced cooks. We provide step-by-step instructions and all necessary equipment.",
      },
      {
        question: "What types of dishes will we prepare?",
        answer:
          "You will learn to make classic Hungarian dishes such as goulash, chimney cake, and stuffed peppers. Vegetarian options are available upon request.",
      },
      {
        question: "Is the market tour included in the price?",
        answer:
          "Yes, the market tour is included in the package. You will explore the market with your guide before heading to the cooking class location.",
      },
      {
        question: "Will we receive a recipe book after the class?",
        answer:
          "Yes, each participant will receive a recipe book containing all the dishes prepared during the class, along with additional traditional Hungarian recipes to try at home.",
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Yes, we can accommodate most dietary restrictions, including vegetarian, gluten-free, and dairy-free diets. Please inform us of any dietary restrictions or allergies at the time of booking, and we will ensure suitable ingredients are available.",
      },
    ],
  },
  {
    title: "Budapest's Hidden Ruin Bars & Street Art",
    description:
      "Explore Budapest's unique ruin bars and vibrant street art scene with a local guide, visiting eclectic bars set in abandoned buildings and discovering the city's creative urban art in hidden alleys and courtyards.",
    city: "Budapest",
    country: "Hungary",
    region: "Central Hungary",
    images: [
      "/images/tours/budapest/ruin-bar.jpg",
      "/images/tours/budapest/street-art.jpg",
    ],
    duration: "3 hours",
    price: "$70",
    rating: 4.6,
    tags: ["Nightlife", "Street Art", "Local Experience"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "nightlife",
    faqs: [
      {
        question: "Are the ruin bars suitable for all ages?",
        answer:
          "Most ruin bars are 18+ venues due to their nightlife focus, but some may allow younger visitors during the day. Please check with us if you plan to bring minors.",
      },
      {
        question: "What should I wear for the bar tour?",
        answer:
          "Dress casually! Budapest's ruin bars have a relaxed atmosphere, so comfortable clothing and shoes are recommended. Some bars may have dress codes, so check in advance if you're unsure.",
      },
      {
        question: "Is this tour available at night?",
        answer:
          "Yes, we offer evening tours that start around 7 PM to experience the nightlife. Daytime tours are also available for those who prefer a more relaxed pace.",
      },
      {
        question: "Will we meet any local artists or bar owners?",
        answer:
          "Yes, one of the tour's highlights is meeting local artists and bar owners who will share their stories and insights about Budapest's alternative scene. You'll have the opportunity to ask questions and learn about the creative community.",
      },
      {
        question: "What is a ruin bar?",
        answer:
          "Ruin bars are unique to Budapest and are typically set up in abandoned buildings or lots, featuring eclectic furniture, local art, and a laid-back atmosphere. They offer a range of drinks, including local wines, beers, and cocktails, often at affordable prices. These bars are popular gathering spots for locals and tourists alike, providing a glimpse into Budapest's vibrant nightlife and creative culture.",
      },
    ],
  },
  {
    title: "Buda Castle & Fisherman's Bastion: History & Views",
    description:
      "Discover the rich history of Buda Castle and the stunning views from Fisherman's Bastion with a knowledgeable guide, exploring medieval architecture, royal history, and panoramic vistas of the Danube and Pest side.",
    city: "Budapest",
    country: "Hungary",
    region: "Central Hungary",
    images: [
      "/images/tours/budapest/buda-castle.jpg",
      "/images/tours/budapest/fishermans-bastion.jpg",
    ],
    duration: "3 hours",
    price: "$60",
    rating: 4.8,
    tags: ["History", "Architecture", "Views"],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "Matthias Church, Szentháromság tér 2, Budapest, Hungary",
      coordinates: {
        latitude: 47.502,
        longitude: 19.0347,
      },
      instructions:
        "Meet your guide at the main entrance of Matthias Church on Trinity Square (Szentháromság tér). Your guide will be holding a Hungarian history book and wearing a Paragon Trails badge. Please arrive 10 minutes before your scheduled tour time.",
      contactNumber: "+36 30 987 6543",
      contactEmail: "castle@paragontrails.com",
    },
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive storytelling and fun facts about the history of Buda Castle.",
      },
      {
        question: "What should I wear for the castle tour?",
        answer:
          "Comfortable walking shoes are recommended as there will be some uphill walking. The castle area can be windy, so a light jacket is advisable.",
      },
      {
        question: "Are there any accessibility options available?",
        answer:
          "Yes, while some areas have cobblestone paths, there are accessible routes available. Please inform us in advance if you have specific accessibility needs.",
      },
      {
        question: "How has Buda Castle changed throughout history?",
        answer:
          "Buda Castle has undergone numerous transformations since its original construction in the 13th century. During the tour, you'll learn how it evolved from a medieval fortress to a Renaissance palace, was destroyed during the 1686 siege of Buda, rebuilt in Baroque style under Habsburg rule, damaged again in the 1848-49 Hungarian Revolution, extensively expanded during the late 19th century, and reconstructed after World War II damage. Your guide will point out architectural elements from different periods and explain how each renovation reflected changing political realities and cultural influences.",
      },
      {
        question: "What is the significance of Fisherman's Bastion?",
        answer:
          "Despite its medieval appearance, Fisherman's Bastion was actually built between 1895 and 1902 as part of millennial celebrations marking 1,000 years since Hungarian settlement in the Carpathian Basin. Architect Frigyes Schulek designed it as a viewing terrace with symbolic references to Hungary's past, featuring seven turrets representing the seven Hungarian chieftains who led the Magyar tribes to the region in 895 AD. The name refers to the fishermen's guild that defended this section of the castle walls during the Middle Ages. Your guide will decode the architectural symbolism and explain how this relatively modern structure became one of Budapest's most iconic landmarks.",
      },
    ],
  },
  {
    title: "Hungarian Wine Tasting Experience",
    description:
      "Discover Hungary's rich wine heritage with a guided tasting of premium wines from the country's major regions, including Tokaj's world-famous sweet wines and bold reds from Villány, paired with artisanal cheeses and charcuterie.",
    city: "Budapest",
    country: "Hungary",
    region: "Central Hungary",
    images: [
      "/images/tours/budapest/wine-tasting.jpg",
      "/images/tours/budapest/wine-cellar.jpg",
    ],
    duration: "2.5 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Wine", "Tasting", "Culinary"],
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
      address: "Fő utca 30, 1011 Budapest, Hungary",
      coordinates: {
        latitude: 47.5006,
        longitude: 19.039,
      },
      instructions:
        "Meet at the historic wine cellar entrance on Fő utca. Look for a small wooden door with a grape motif and your sommelier guide holding a Paragon Trails wine folder. Please arrive 10 minutes before the scheduled start time.",
      contactNumber: "+36 20 345 6789",
      contactEmail: "wine@paragontrails.com",
    },
    faqs: [
      {
        question: "How many wines will we taste during this experience?",
        answer:
          "This premium tasting includes 6 carefully selected wines representing Hungary's major wine regions. We begin with a refreshing sparkling wine, then proceed through whites, rosés, and reds, finishing with Tokaji Aszú, Hungary's legendary sweet wine. Each wine is presented with detailed information about its terroir, production methods, and historical significance.",
      },
      {
        question: "Do I need prior wine knowledge to enjoy this tasting?",
        answer:
          "Not at all! Our sommelier guides are skilled at making wine accessible and enjoyable for everyone from complete beginners to experienced oenophiles. We focus on the pleasure and discovery aspects of wine while providing as much technical information as guests desire. The intimate setting encourages questions and conversation.",
      },
      {
        question: "What food is served with the wines?",
        answer:
          "We pair the wines with a thoughtfully curated selection of Hungarian artisanal foods including local cheeses, charcuterie, fresh-baked bread, seasonal fruits, and nuts. These pairings are designed to complement and enhance the wine flavors while introducing you to Hungary's culinary traditions.",
      },
      {
        question: "What makes Hungarian wines unique?",
        answer:
          "Hungarian winemaking tradition dates back over 1,000 years with a fascinating history including royal vineyards, communist-era industrial production, and a remarkable quality renaissance since the 1990s. The tasting explores how Hungary's diverse microclimates, volcanic soils, and indigenous grape varieties like Furmint and Kadarka create distinctive wines found nowhere else. You'll learn about Tokaji Aszú, the world's first officially classified wine (predating Bordeaux), and how Hungary's historic wine regions are reclaiming their international reputation.",
      },
      {
        question: "Can we purchase wines to take home?",
        answer:
          "Yes, all wines tasted are available for purchase at special guest prices. We provide information on shipping options or safe packing for travel. Many of our featured wines are from small producers with limited distribution outside Hungary, making this a unique opportunity to acquire bottles rarely found internationally.",
      },
    ],
  },
  {
    title: "Danube River Evening Cruise",
    description:
      "Experience Budapest's breathtaking illuminated skyline from the water with a scenic evening cruise along the Danube, passing the magnificent Parliament, Buda Castle, and Chain Bridge while enjoying a glass of Hungarian sparkling wine.",
    city: "Budapest",
    country: "Hungary",
    region: "Central Hungary",
    images: [
      "/images/tours/budapest/parliament-night.jpg",
      "/images/tours/budapest/river-cruise.jpg",
    ],
    duration: "1.5 hours",
    price: "$45",
    rating: 4.8,
    tags: ["Cruise", "Sightseeing", "Evening"],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "romantic",
    meetingPoint: {
      address: "Jane Haining rakpart, Budapest 1052, Hungary (Dock 11)",
      coordinates: {
        latitude: 47.4979,
        longitude: 19.0468,
      },
      instructions:
        "Meet at Dock 11 on the Pest side of the river near the Elizabeth Bridge. Look for the boat with the 'Budapest Evening Cruise' sign. Please arrive 15 minutes before departure for boarding procedures. Your booking confirmation must be shown before boarding.",
      contactNumber: "+36 1 999 0888",
      contactEmail: "cruise@paragontrails.com",
    },
    faqs: [
      {
        question: "What will we see during the cruise?",
        answer:
          "The cruise route takes you along the most scenic sections of the Danube in Budapest, passing illuminated landmarks including the Parliament Building, Buda Castle, Gellért Hill with the Liberty Statue, the Chain Bridge, Margaret Island, and other architectural highlights. Your cruise includes an informative audio guide that explains the history and significance of each landmark.",
      },
      {
        question: "Is the boat covered or open-air?",
        answer:
          "Our vessels feature both indoor panoramic cabins with large windows and open upper decks. This allows you to enjoy the views regardless of weather. During summer, the open deck is perfect for photography and taking in the evening air, while the climate-controlled cabin provides comfort year-round.",
      },
      {
        question: "What drinks are included in the cruise?",
        answer:
          "The cruise includes a welcome glass of Hungarian sparkling wine (or a non-alcoholic alternative if preferred). Additional beverages including local wines, beers, spirits, and soft drinks are available for purchase from the onboard bar.",
      },
      {
        question: "Will there be commentary during the cruise?",
        answer:
          "Yes, the cruise includes a multilingual audio guide available in 30 languages. The commentary provides fascinating historical information and cultural context about the landmarks you pass. Additionally, each table receives a map highlighting the route and major sights.",
      },
      {
        question: "Is this cruise suitable for children?",
        answer:
          "Yes, this cruise is family-friendly and children are welcome. The illuminated buildings and bridges are captivating for all ages. We offer non-alcoholic beverages for children and those who don't drink alcohol. While there is no specific entertainment for children, the changing scenery and passing boats keep them engaged throughout the journey.",
      },
    ],
  },
  {
    title: "Communist Era Budapest: History & Memorials",
    description:
      "Explore Budapest's Communist past with visits to Memorial Park, the House of Terror museum, and Soviet-era landmarks as your historian guide explains Hungary's complex relationship with its 20th-century history.",
    city: "Budapest",
    country: "Hungary",
    region: "Central Hungary",
    images: [
      "/images/tours/budapest/memorial-park.jpg",
      "/images/tours/budapest/house-of-terror.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.7,
    tags: ["History", "Communist Era", "Cultural"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "historical",
    meetingPoint: {
      address: "House of Terror Museum, Andrássy út 60, 1062 Budapest, Hungary",
      coordinates: {
        latitude: 47.5102,
        longitude: 19.0704,
      },
      instructions:
        "Meet your historian guide in front of the House of Terror Museum on Andrássy Avenue. Your guide will be holding a black folder with historical photographs. Please arrive 15 minutes before your scheduled tour time.",
      contactNumber: "+36 30 765 4321",
      contactEmail: "history@paragontrails.com",
    },
    faqs: [
      {
        question: "What will we learn about Hungary's communist period?",
        answer:
          "This tour provides a comprehensive overview of Hungary's communist era (1947-1989), covering the Soviet occupation, the 1956 Revolution and its brutal suppression, the 'Goulash Communism' period under János Kádár, and the eventual transition to democracy. Your historian guide contextualizes the physical locations with personal stories, dissidents' accounts, and explanations of daily life under the regime.",
      },
      {
        question: "Is the House of Terror museum disturbing?",
        answer:
          "The House of Terror documents the fascist and communist regimes that operated from this building, which served as headquarters for the Arrow Cross Party and later the ÁVH (secret police). While there are some disturbing exhibits about torture and persecution, the museum's approach is educational rather than sensationalist. Some visitors find the basement cells where political prisoners were held particularly moving. We recommend the museum for adults and mature teenagers but probably not for younger children.",
      },
      {
        question: "How much walking is involved in this tour?",
        answer:
          "This tour combines walking with public transportation to reach Memorial Park (Memento Park), which is located on the outskirts of Budapest. Total walking distance is approximately 3 kilometers at a leisurely pace. There are regular rest stops, including a sit-down discussion at a historic café where many intellectuals gathered during the communist period.",
      },
      {
        question: "Is this tour politically biased?",
        answer:
          "Our tour presents multiple perspectives on this complex period of Hungarian history. While acknowledging the repression and human rights abuses of the communist regime, we also discuss aspects like education, healthcare, housing policies, and why some older Hungarians express nostalgia for certain elements of that era. Our historians provide context rather than judgment, helping visitors understand the nuances and contradictions of life under communism.",
      },
      {
        question: "What are the massive statues in Memorial Park?",
        answer:
          "Memorial Park (Memento Park) contains 42 statues and monuments that once stood prominently throughout Budapest during the communist era. After the fall of communism in 1989, rather than destroying these works, Hungary chose to collect them in this open-air museum. The statues represent socialist-realist art glorifying workers, Soviet-Hungarian friendship, and communist leaders. Your guide will explain the symbolism in these works and how public art was used for ideological purposes during this period.",
      },
    ],
  },
  {
    title: "Central Market Hall & Hungarian Cuisine",
    description:
      "Discover Hungary's culinary traditions with a guided tour of Budapest's stunning Central Market Hall, sampling traditional delicacies, learning about paprika varieties, and enjoying a food tasting that showcases the best of Hungarian gastronomy.",
    city: "Budapest",
    country: "Hungary",
    region: "Central Hungary",
    images: [
      "/images/tours/budapest/central-market.jpg",
      "/images/tours/budapest/hungarian-food.jpg",
    ],
    duration: "3 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Food", "Market", "Culinary"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "culinary",
    meetingPoint: {
      address: "Central Market Hall, Vámház körút 1-3, 1093 Budapest, Hungary",
      coordinates: {
        latitude: 47.4868,
        longitude: 19.0583,
      },
      instructions:
        "Meet your culinary guide at the main entrance of the Central Market Hall on Vámház Boulevard. Your guide will be holding a shopping basket with a red, white, and green ribbon (Hungarian national colors). Please arrive 10 minutes before your scheduled tour time.",
      contactNumber: "+36 20 123 4567",
      contactEmail: "food@paragontrails.com",
    },
    faqs: [
      {
        question: "What foods will we taste during the tour?",
        answer:
          "The tasting includes 7-8 different Hungarian specialties including several types of salami and cured meats, artisanal cheeses, freshly baked pogácsa (savory scones), pickled vegetables, traditional pastries, and Unicum (a Hungarian herbal liqueur). The exact selection varies seasonally to showcase the freshest products, but always represents the diverse flavors of Hungarian cuisine.",
      },
      {
        question: "Will we learn about Hungarian paprika?",
        answer:
          "Absolutely! Paprika is central to Hungarian cuisine and culture, and a significant portion of the tour explores the different varieties and heat levels of this essential spice. You'll learn how paprika came to Hungary through the Ottoman Turks, how it's cultivated and processed, and how to identify quality paprika. You'll have the opportunity to sample different types and purchase premium paprika to take home.",
      },
      {
        question:
          "Is the Central Market Hall accessible for those with mobility issues?",
        answer:
          "The Central Market Hall has elevator access to the upper level, making most areas accessible for visitors using wheelchairs or those with mobility challenges. However, the market can be crowded, especially on Saturdays. Please let us know if you have specific accessibility needs so we can plan the most comfortable route through the market.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate vegetarian, gluten-free, and most dietary restrictions with advance notice. Hungarian cuisine traditionally features many meat dishes, but our guides are experienced in creating alternative tasting experiences that still provide authentic insights into local food culture. Please specify any dietary needs when booking.",
      },
      {
        question: "Will there be opportunities to purchase food items?",
        answer:
          "Yes, the Central Market Hall is the perfect place to purchase authentic Hungarian food souvenirs. Your guide will help you identify high-quality products and can assist with recommendations for items that will travel well. Popular purchases include paprika, salami, honey, wines, and traditional handicrafts. We build in some shopping time toward the end of the tour.",
      },
    ],
  },
  {
    title: "Jewish Heritage & Synagogue Tour",
    description:
      "Discover Budapest's rich Jewish heritage with visits to Europe's largest synagogue, the moving Tree of Life Memorial, and the former Jewish Quarter, with insights into both historical events and the vibrant contemporary Jewish community.",
    city: "Budapest",
    country: "Hungary",
    region: "Central Hungary",
    images: [
      "/images/tours/budapest/dohany-synagogue.jpg",
      "/images/tours/budapest/tree-of-life.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Jewish Heritage", "Cultural", "Historical"],
    isHistorical: true,
    isRomantic: false,
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
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "Dohány Street Synagogue, Dohány u. 2, 1074 Budapest, Hungary",
      coordinates: {
        latitude: 47.4957,
        longitude: 19.0607,
      },
      instructions:
        "Meet your guide in front of the main entrance to the Dohány Street Synagogue. Your guide will be holding a blue folder with Star of David symbol. Please arrive 15 minutes before your scheduled tour time. Men are advised to bring a hat or head covering as it is customary in the synagogue.",
      contactNumber: "+36 1 343 0420",
      contactEmail: "jewish@paragontrails.com",
    },
    faqs: [
      {
        question: "What will we see inside the Great Synagogue?",
        answer:
          "The Dohány Street Synagogue (Great Synagogue) tour includes the stunning main sanctuary with its Moorish design elements, the Jewish Museum containing religious artifacts and historical exhibits, the moving Raoul Wallenberg Memorial Garden, and the Holocaust Memorial Cemetery. Your guide provides context about the synagogue's architecture, which influenced synagogue design worldwide, and explains its significance both religiously and culturally.",
      },
      {
        question: "What is the Tree of Life Memorial?",
        answer:
          "The Tree of Life Memorial is a weeping willow sculpture with victims' names inscribed on each leaf, commemorating the 400,000+ Hungarian Jews who perished during the Holocaust. Created by sculptor Imre Varga in 1991, it stands in the courtyard of the Great Synagogue. Your guide will explain the symbolism of the sculpture and share stories of Holocaust survivors and rescuers connected to Budapest.",
      },
      {
        question: "Is there a dress code for visiting the synagogues?",
        answer:
          "Yes, modest dress is required for synagogue visits. Men should cover their heads (kippah/yarmulkes are provided if needed) and shoulders. Women should have covered shoulders and wear skirts/dresses below the knee, or modest pants. Shawls are available to borrow if needed. This shows respect for the religious significance of these sites.",
      },
      {
        question:
          "What was the Budapest Ghetto, and will we see where it was located?",
        answer:
          "The Budapest Ghetto was established in November 1944, concentrating 70,000 Jews into an area less than half a square kilometer in the former Jewish Quarter. Our tour walks the perimeter of the former ghetto, noting surviving boundary markers and buildings with hidden Stars of David and other Jewish symbols. We'll discuss the ghetto's creation under Arrow Cross rule, the conditions inside, and its liberation by Soviet forces in January 1945, as well as the remarkable story of how Budapest's Jewish community avoided deportation until late in the war through a combination of international diplomacy and local resistance.",
      },
      {
        question: "How is Jewish life in Budapest today?",
        answer:
          "Today, Budapest has the largest Jewish community in Central Europe, estimated at 100,000 people. The tour explores the revitalization of the former Jewish Quarter with its synagogues, kosher restaurants, and cultural centers. You'll learn about the community's renaissance since the fall of communism in 1989, the growth of cultural events like the Jewish Summer Festival, and the complex dynamics of Jewish identity in contemporary Hungary. We can recommend Jewish restaurants, cultural programs, and Shabbat services for visitors interested in connecting with the modern community.",
      },
    ],
  },
  {
    title: "Hungarian Folk Dance & Music Show",
    description:
      "Experience the vibrant traditions of Hungarian folk culture with a spectacular performance of authentic dances and music from different regions of the country, featuring live orchestra, colorful costumes, and the chance to learn basic dance steps.",
    city: "Budapest",
    country: "Hungary",
    region: "Central Hungary",
    images: [
      "/images/tours/budapest/folk-dance.jpg",
      "/images/tours/budapest/folk-music.jpg",
    ],
    duration: "2 hours",
    price: "$55",
    rating: 4.7,
    tags: ["Folk", "Dance", "Cultural"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "cultural",
    meetingPoint: {
      address:
        "Duna Palota (Danube Palace), Zrínyi u. 5, 1051 Budapest, Hungary",
      coordinates: {
        latitude: 47.5003,
        longitude: 19.049,
      },
      instructions:
        "Meet in the elegant lobby of the historic Danube Palace (Duna Palota). Our representative will be at the designated 'Folk Show' desk in the main foyer. Please arrive 30 minutes before the performance to collect your tickets and enjoy the historic venue.",
      contactNumber: "+36 1 317 2754",
      contactEmail: "folk@paragontrails.com",
    },
    faqs: [
      {
        question: "What kind of dances and music will we see?",
        answer:
          "The performance features a variety of traditional dances from different Hungarian regions, including the csárdás (the national dance), verbunkos (recruiting dance), and various village dances from Transylvania and other regions. The live orchestra plays authentic folk instruments including the tárogató (wooden horn), cimbalom (hammered dulcimer), and various folk string instruments. Each dance is introduced with context about its historical significance and regional origin.",
      },
      {
        question: "Is there audience participation during the show?",
        answer:
          "Yes, at certain points in the show, dancers invite audience members to join them on stage to learn basic steps of Hungarian folk dances. Participation is entirely voluntary and designed to be fun and accessible for everyone. After the performance, you'll have the opportunity to meet the dancers and musicians in the theater foyer.",
      },
      {
        question: "What is the Danube Palace where the show takes place?",
        answer:
          "The Danube Palace (Duna Palota) is a neo-Baroque theater built in 1885 as an aristocratic casino (social club). This architectural gem features stunning details including a marble staircase, stained glass windows, and ornate chandeliers. The intimate theater creates a perfect atmosphere for experiencing Hungarian folk traditions, and the building itself is part of Budapest's cultural heritage.",
      },
      {
        question: "What should I wear to the performance?",
        answer:
          "There is no strict dress code, but smart casual attire is recommended as the venue is a historic theater. The performance is a cultural event that locals would typically dress nicely for, though formal wear is not required. Photography is permitted without flash, so bring a camera if you wish to capture memories of the colorful costumes and performances.",
      },
      {
        question: "Is dinner or drinks included with the performance?",
        answer:
          "This ticket includes the performance only, but the palace has an elegant bar where you can purchase drinks before the show and during intermission. For guests interested in dining, we can arrange an optional pre-show Hungarian dinner experience at a nearby restaurant or upgrade to a package that includes a dinner cruise after the performance. Please contact us for these enhanced options.",
      },
    ],
  },
  {
    title: "Szentendre Artists' Village Half-Day Trip",
    description:
      "Escape to the charming riverside town of Szentendre, known for its colorful Baroque architecture, cobblestone streets, and thriving artist community, with visits to galleries, museums, and a traditional marzipan workshop.",
    city: "Szentendre",
    country: "Hungary",
    region: "Central Hungary",
    images: [
      "/images/tours/budapest/szentendre-streets.jpg",
      "/images/tours/budapest/szentendre-riverside.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.6,
    tags: ["Art", "Village", "Day Trip"],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "art-and-music",
    meetingPoint: {
      address: "Batthyány tér HÉV station, Batthyány tér, Budapest, Hungary",
      coordinates: {
        latitude: 47.506,
        longitude: 19.0387,
      },
      instructions:
        "Meet your guide at the HÉV suburban railway station at Batthyány tér, near the ticket machines. Your guide will be holding a sign with 'Szentendre Art Tour' written on it. Please arrive 15 minutes before departure to purchase tickets. The HÉV journey to Szentendre takes approximately 40 minutes.",
      contactNumber: "+36 30 555 6789",
      contactEmail: "szentendre@paragontrails.com",
    },
    faqs: [
      {
        question: "How do we get to Szentendre?",
        answer:
          "We travel to Szentendre on the HÉV suburban railway, which offers scenic views along the Danube Bend. The journey takes approximately 40 minutes each way. Your guide accompanies you on the train and provides insights about the areas you pass through. For groups of 4 or more, we can arrange private transportation at an additional cost.",
      },
      {
        question: "What will we see in Szentendre?",
        answer:
          "The tour includes a guided walk through Szentendre's charming Old Town with its pastel-colored Baroque buildings, Serbian Orthodox heritage, and numerous art galleries. We visit the Kovács Margit Ceramic Museum showcasing the work of Hungary's most celebrated ceramic artist, explore 2-3 contemporary art galleries featuring local artists, and stop at the famous Szamos Marzipan Museum where you can see remarkable marzipan sculptures and learn about this traditional confectionery.",
      },
      {
        question: "Is there free time for shopping?",
        answer:
          "Yes, we include approximately one hour of free time for you to explore Szentendre's numerous boutiques, art studios, and specialty shops. The town is known for its handcrafted souvenirs, art pieces, Hungarian embroidery, ceramics, and of course, marzipan. Your guide can recommend shops specializing in authentic, locally-made items.",
      },
      {
        question: "How much walking is involved in this tour?",
        answer:
          "This tour involves approximately 2-3 kilometers of walking on cobblestone streets and some gentle hills in Szentendre. The pace is leisurely with frequent stops to admire the architecture, enter galleries, and learn about the town's history. Comfortable walking shoes are strongly recommended.",
      },
      {
        question: "Why is Szentendre known as an artists' village?",
        answer:
          "Szentendre became an artists' colony in the early 20th century when Hungarian painters, inspired by the French Barbizon School, were attracted to its Mediterranean-like atmosphere, excellent light conditions, and picturesque setting. The communist era government actively supported the artistic community by providing studios and living quarters for approved artists. Today, the tradition continues with over 200 working artists maintaining studios in and around the town, and dozens of galleries displaying everything from traditional Hungarian folk art to cutting-edge contemporary works. Our tour introduces you to both the historical artistic heritage and the current creative scene.",
      },
    ],
  },
  {
    title: "Budapest Photography Tour",
    description:
      "Capture Budapest's most photogenic locations with guidance from a professional photographer who will help you find unique angles, master camera settings, and create memorable images of the city's iconic bridges, Parliament, and hidden corners.",
    city: "Budapest",
    country: "Hungary",
    region: "Central Hungary",
    images: [
      "/images/tours/budapest/photography-parliament.jpg",
      "/images/tours/budapest/photography-bridges.jpg",
    ],
    duration: "3 hours",
    price: "$80",
    rating: 4.8,
    tags: ["Photography", "Walking Tour", "Creative"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "art-and-music",
    meetingPoint: {
      address: "Vörösmarty Square, 1051 Budapest, Hungary",
      coordinates: {
        latitude: 47.4966,
        longitude: 19.0508,
      },
      instructions:
        "Meet your photography guide at the Vörösmarty statue in the center of Vörösmarty Square. Your guide will be carrying a professional camera and a tripod. Please arrive 10 minutes early with your camera equipment ready.",
      contactNumber: "+36 20 987 6543",
      contactEmail: "photo@paragontrails.com",
    },
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer:
          "Any camera is suitable, from smartphones to DSLRs. If you have a DSLR or mirrorless camera, we recommend bringing a wide-angle lens for architecture, a standard zoom for versatility, and a tripod if available (especially for sunrise/sunset tours). The most important thing is to bring equipment you're comfortable using. Your guide can provide specific tips for your particular camera.",
      },
      {
        question: "Do I need photography experience?",
        answer:
          "No, this tour is designed for all skill levels. Whether you're a complete beginner wanting to take better vacation photos or an experienced photographer looking for local insights into the best shooting locations, our professional photographer guides tailor their instruction to your specific needs and interests.",
      },
      {
        question: "Which locations will we visit?",
        answer:
          "The exact itinerary depends on lighting conditions, your interests, and whether you've chosen a morning, afternoon, or evening tour. Typically, we visit 6-8 locations that may include the Chain Bridge, Parliament, Fisherman's Bastion, hidden courtyards in the Jewish Quarter, and lesser-known viewpoints perfect for capturing Budapest's beauty. Each location is chosen for its photographic potential at that specific time of day.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "We cover approximately 3-4 kilometers at a relaxed pace suitable for photographers. The route is designed to maximize shooting opportunities while minimizing unnecessary walking. We use public transportation (included in the tour price) for one longer distance. There are regular stops for photography, instruction, and reviewing images.",
      },
      {
        question: "Will I learn how to improve my photography skills?",
        answer:
          "Yes, throughout the tour your guide provides personalized instruction on composition, creative use of light, perspective, camera settings, and techniques specific to architectural, street, and landscape photography. You'll receive real-time feedback and suggestions for improvement. Many guests report that the skills they learn during this tour enhance their photography for the remainder of their trip and beyond.",
      },
    ],
  },
  {
    title: "Lake Balaton Day Trip",
    description:
      "Escape the city to discover Central Europe's largest freshwater lake, with visits to the peninsula of Tihany with its Benedictine Abbey, a wine tasting in the volcanic Badacsony region, and leisure time in charming lakeside villages.",
    city: "Tihany",
    country: "Hungary",
    region: "Transdanubia",
    images: [
      "/images/tours/budapest/lake-balaton.jpg",
      "/images/tours/budapest/tihany-abbey.jpg",
    ],
    duration: "10 hours",
    price: "$135",
    rating: 4.7,
    tags: ["Day Trip", "Nature", "Lake"],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: true,
    isSpiritual: true,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "wellness",
    meetingPoint: {
      address: "Deák Ferenc tér 6, 1052 Budapest, Hungary",
      coordinates: {
        latitude: 47.4974,
        longitude: 19.0544,
      },
      instructions:
        "Meet your guide in front of the Lutheran Church on Deák Ferenc Square. Your guide will be holding a sign with 'Lake Balaton Tour' written on it. Please arrive 15 minutes before departure as the vehicle leaves promptly at the scheduled time.",
      contactNumber: "+36 30 111 2222",
      contactEmail: "balaton@paragontrails.com",
    },
    faqs: [
      {
        question: "How far is Lake Balaton from Budapest?",
        answer:
          "Lake Balaton is approximately 130 kilometers (80 miles) southwest of Budapest. The journey takes about 1.5-2 hours each way in our comfortable air-conditioned vehicle. We make a brief refreshment stop during the morning drive, and your guide will share information about Hungarian countryside life and landscapes during the journey.",
      },
      {
        question: "What will we see and do at Lake Balaton?",
        answer:
          "The tour includes visits to the most scenic parts of this 77 km long lake. We explore the historic Tihany Peninsula with its 11th-century Benedictine Abbey and lavender fields, enjoy a wine tasting in the volcanic Badacsony region known for its distinctive wines, have lunch in a traditional lakeside restaurant serving fresh local fish, and have some free time in either Balatonfüred or Siófok (depending on the season) where you can stroll the promenade or take a quick dip in the lake during summer months.",
      },
      {
        question: "Is swimming possible during this tour?",
        answer:
          "During summer months (June-September), we include approximately 40 minutes of free time at a beach area where swimming is possible. Lake Balaton is known for its shallow, warm waters that are perfect for swimming. However, this is weather-dependent, and swimming is optional. Please bring swimwear and a towel if you'd like to swim. During off-season months, we substitute this time with additional cultural experiences.",
      },
      {
        question: "What is special about the wine from this region?",
        answer:
          "The Badacsony wine region along Lake Balaton's northern shore is known for its volcanic soil that creates distinctive mineral-rich wines. You'll taste several varieties including Olaszrizling (Welschriesling), Szürkebarát (Pinot Gris), and Kéknyelű (a grape variety found almost exclusively in this region). The wine tasting includes 5-6 wines paired with local cheese and bread, and your sommelier will explain how the microclimate created by the lake influences the character of these unique wines.",
      },
      {
        question: "What is the significance of Tihany Abbey?",
        answer:
          "Tihany Abbey, founded in 1055, is one of Hungary's oldest historical monuments. Its founding charter contains the first written words in the Hungarian language. The Abbey church sits on a peninsula overlooking Lake Balaton, offering spectacular panoramic views. During our visit, you'll learn about the Benedictine monastic tradition in Hungary, see the tomb of King Andrew I, and discover how this religious center influenced the development of Hungarian culture and language. The Abbey is still functioning today, and we may have the chance to hear the monks' Gregorian chant if our visit coincides with their prayer times.",
      },
    ],
  },
];
export default budapestTours;
