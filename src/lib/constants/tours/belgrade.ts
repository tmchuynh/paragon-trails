import { Tour } from "@/lib/interfaces/services/tours";

export const belgradeTours: Tour[] = [
  {
    title: "Belgrade Fortress & Underground Secrets",
    description:
      "Explore the ancient Kalemegdan Fortress with exclusive access to underground military tunnels, Roman wells, and hidden chambers spanning 2,000 years of Belgrade's turbulent history as the gateway between East and West.",
    images: [
      "/images/tours/belgrade/kalemegdan-fortress.jpg",
      "/images/tours/belgrade/underground-tunnels.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.8,
    tags: ["History", "Military", "Underground"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Professor Milan Jovanović",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Are the underground tunnels accessible for everyone?",
        answer:
          "The underground portions involve narrow passages and uneven surfaces with limited lighting. Participants should have reasonable mobility and comfort in enclosed spaces. The main fortress areas are fully accessible, so those preferring not to enter the tunnels can enjoy spectacular views of the Sava and Danube rivers confluence while the group explores below. We provide headlamps and appropriate safety equipment for the underground sections.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Comfortable walking shoes are essential as we cover uneven terrain. Dress in layers, as the temperature can vary significantly between the fortress grounds and underground areas. A light jacket or sweater is recommended, especially for the tunnels where it can be cooler. We also suggest bringing a small backpack for personal items and water.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. Children will enjoy exploring the fortress and learning about its history through engaging stories. The underground sections can be exciting for kids, but we recommend parental supervision at all times, especially in narrower passages. We also provide child-sized safety gear if needed.",
      },
      {
        question: "Can we take photos during the tour?",
        answer:
          "Absolutely! Photography is encouraged throughout the fortress and underground areas. The views from the fortress walls are particularly stunning, and the tunnels offer unique photo opportunities. We recommend bringing a camera or smartphone with good low-light capabilities for the underground sections.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable. In case of severe weather conditions that may affect safety, we will reschedule or offer a full refund.",
      },
    ],
  },
  {
    title: "Rakija Experience: Serbian Spirit Tasting Journey",
    description:
      "Discover Serbia's national drink through an immersive rakija tasting experience featuring premium artisanal varieties, traditional meze pairings, and insights into centuries-old distillation techniques from a master craftsman.",
    images: [
      "/images/tours/belgrade/rakija-tasting.jpg",
      "/images/tours/belgrade/traditional-meze.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Drinks", "Cultural", "Tasting"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Dragan Petrović",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What exactly is rakija?",
        answer:
          "Rakija is a fruit brandy traditional throughout the Balkans but particularly significant in Serbian culture. Typically distilled from plums (šljivovica), it's also made from apricots, quince, grapes, pears, and other fruits. Each family often has their own recipe passed through generations. During our tasting, you'll sample 6-8 premium varieties ranging from 40-55% alcohol content, each paired with appropriate traditional foods that complement their distinct flavors and aromas.",
      },
      {
        question: "Is this tour suitable for non-drinkers?",
        answer:
          "While the primary focus is on rakija tasting, we can accommodate non-drinkers by providing alternative beverages such as homemade juices or herbal teas. The experience also includes learning about the cultural significance of rakija in Serbian society, so non-drinkers can still enjoy the educational aspects of the tour.",
      },
      {
        question: "Can I purchase rakija to take home?",
        answer:
          "Yes, we can arrange for you to purchase bottles of artisanal rakija directly from the distillery. Please note that shipping regulations vary by country, so we recommend checking your local laws regarding importing alcohol before purchasing.",
      },
    ],
  },
  {
    title: "Yugoslav History & Architecture Tour",
    description:
      "Examine Belgrade's fascinating communist-era heritage through its monumental architecture, controversial history, and cultural impacts with visits to New Belgrade's brutalist masterpieces and the Museum of Yugoslavia.",
    images: [
      "/images/tours/belgrade/brutalist-architecture.jpg",
      "/images/tours/belgrade/house-of-flowers.jpg",
    ],
    duration: "5 hours",
    price: "$55",
    rating: 4.7,
    tags: ["Communist Era", "Architecture", "History"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Dr. Jelena Marković",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this tour politically biased?",
        answer:
          "Our tour presents Yugoslav history with historical accuracy and multiple perspectives. Your guide will present facts about the socialist period, its achievements and controversies, without imposing political judgments. We contextualize Yugoslavia's unique position between East and West during the Cold War and examine how this complex legacy continues to influence modern Serbia. Both nostalgia and criticism of this era exist among Serbians, and we explore these diverse viewpoints respectfully.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Comfortable walking shoes are recommended as we will cover significant ground, including some uneven surfaces. Dress in layers, as the weather can change throughout the day. A light jacket or sweater is advisable, especially if visiting indoor museums where air conditioning may be used.",
      },
      {
        question: "Are there any age restrictions for this tour?",
        answer:
          "This tour is suitable for all ages. However, some of the architectural sites involve stairs and uneven terrain, so we recommend parental supervision for younger children. The content is educational and appropriate for teenagers and adults.",
      },
    ],
  },
  {
    title: "Belgrade River Cruise & Sunset Dinner",
    description:
      "Cruise the confluence of the Sava and Danube rivers aboard a private boat, enjoying panoramic views of Belgrade's landmarks followed by an exclusive dinner at a floating restaurant with live traditional music.",
    images: [
      "/images/tours/belgrade/river-cruise.jpg",
      "/images/tours/belgrade/floating-restaurant.jpg",
    ],
    duration: "4 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Cruise", "Dinner", "Sunset"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Captain Nikola",
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "What type of food is served during dinner?",
        answer:
          "The dinner features contemporary Serbian cuisine highlighting local ingredients and traditional recipes with modern presentation. The menu typically includes river fish specialties, grilled meats, organic vegetables from nearby farms, and homemade desserts. Vegetarian options are available with advance notice. Each course is paired with selected Serbian wines from family-owned vineyards in the Fruška Gora region. The floating restaurant offers panoramic river views and creates an authentic yet sophisticated dining experience.",
      },
      {
        question: "Is the river cruise suitable for children?",
        answer:
          "Yes, the river cruise is family-friendly. Children will enjoy the boat ride and the opportunity to see Belgrade's landmarks from the water. We provide life jackets for all passengers, and the boat is stable and safe for families. The dinner menu includes child-friendly options, and we can accommodate dietary restrictions with advance notice.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Smart casual attire is recommended for the dinner portion of the tour. Comfortable shoes are advisable for the boat ride, as you may need to move around the deck. A light jacket or sweater is also suggested, especially if you plan to stay on deck during sunset when temperatures can drop slightly.",
      },
    ],
  },
  {
    title: "Belgrade Street Art & Alternative Culture Tour",
    description:
      "Discover Belgrade's vibrant underground culture through its striking murals, hidden galleries, and creative districts while learning how street art became a powerful form of expression during Yugoslavia's collapse and Serbia's transition.",
    images: [
      "/images/tours/belgrade/street-art.jpg",
      "/images/tours/belgrade/savamala-district.jpg",
    ],
    duration: "3 hours",
    price: "$35",
    rating: 4.6,
    tags: ["Street Art", "Urban", "Alternative"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Ana Đorđević",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Will we meet any local artists?",
        answer:
          "Whenever possible, we arrange spontaneous meetings with artists working in the districts we visit. While we can't guarantee specific encounters, many local artists know our guides and often join us briefly to discuss their work when they're painting in the area. We also visit several artist-run spaces and galleries where you can engage with creators and perhaps see works in progress. The tour concludes at a cultural center frequented by local artists, where you can continue conversations over coffee or craft beer.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, children of all ages are welcome. While some street art may address social or political themes, our guide selects appropriate works and tailors explanations to be age-appropriate. Many young visitors particularly enjoy the vibrant colors and bold imagery of Belgrade's street art scene, and we can incorporate a fun 'art hunt' element for children to stay engaged during the tour.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 2.5-3 kilometers at a relaxed pace through several urban neighborhoods. The terrain is mostly flat with some cobblestone streets. We take several breaks at cafes, galleries, and interesting spots along the route. Comfortable walking shoes are recommended.",
      },
      {
        question: "Can I take photos during the tour?",
        answer:
          "Absolutely! Photography is encouraged throughout the tour. Our guide will point out the most impressive murals and optimal angles for photos. When visiting galleries or studios, we'll advise if any photography restrictions apply. The tour provides excellent opportunities for unique urban photography that captures Belgrade's creative energy.",
      },
    ],
  },
  {
    title: "Nikola Tesla Museum Private Experience",
    description:
      "Explore the legacy of one of history's greatest inventors with a private, curator-led tour of the Nikola Tesla Museum, featuring exclusive access to the archives, original documents, and hands-on demonstrations of Tesla's revolutionary electromagnetic discoveries.",
    images: [
      "/images/tours/belgrade/tesla-museum.jpg",
      "/images/tours/belgrade/tesla-coil-demonstration.jpg",
    ],
    duration: "2.5 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Science", "History", "Museum"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Milica Jovanović",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What makes this different from a regular museum visit?",
        answer:
          "Our private experience provides exclusive access to the museum's archives not open to regular visitors, including original manuscripts, correspondence, and personal effects. The tour is led by museum curators rather than regular guides, offering deeper scientific and historical context. You'll witness extended Tesla coil demonstrations and participate in interactive experiments that aren't part of standard visits. We also arrange special access outside regular opening hours, allowing for an intimate experience without crowds.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is extremely popular with children (recommended for ages 7 and up) because of the dramatic electromagnetic demonstrations. Our curators are skilled at explaining complex scientific principles in age-appropriate ways, and the hands-on elements keep young visitors engaged. For families with younger children, we can modify the archival portion to maintain their interest.",
      },
      {
        question: "What will we see in the archives?",
        answer:
          "The archival access includes viewing selected original notebooks, blueprints, patents, and personal correspondence between Tesla and his contemporaries. You'll see Tesla's handwritten calculations, early designs for his most famous inventions, and rarely displayed photographs from his life in America and Europe. The archivist provides white gloves for handling certain permitted documents, creating a truly immersive historical experience.",
      },
      {
        question: "Can I take photos inside the museum?",
        answer:
          "Photography without flash is permitted in most areas of the museum, including during the Tesla coil demonstrations which make for spectacular photos. Some archival materials may have photography restrictions which your guide will clearly indicate. Video recording of demonstrations is allowed for personal use only.",
      },
    ],
  },
  {
    title: "Communist Yugoslavia Time Capsule Tour",
    description:
      "Step back into Yugoslavia's socialist era with visits to monumental buildings, worker neighborhoods, and the Museum of Yugoslav History, culminating with a Yugoslav-era meal in a preserved 1970s apartment decorated with original socialist furnishings and memorabilia.",
    images: [
      "/images/tours/belgrade/tito-mausoleum.jpg",
      "/images/tours/belgrade/yugoslav-apartment.jpg",
    ],
    duration: "5 hours",
    price: "$80",
    rating: 4.7,
    tags: ["Communist Era", "History", "Unique Experience"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Professor Milan Nikolić",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What will we eat during the Yugoslav-era meal?",
        answer:
          "The meal features authentic dishes popular during the Yugoslav period, prepared from original recipes. Typically includes sarma (stuffed cabbage rolls), podvarak (roasted meat with sauerkraut), Yugoslav-style potato salad, socialist-era workplace canteen specialties, and desserts like reform torta or plazma cake. The meal is accompanied by Yugoslavian sodas like Cockta or Jupi, domestic wines, and perhaps a shot of homemade rakija. Vegetarian options from the era are available upon request.",
      },
      {
        question: "Is this tour politically biased?",
        answer:
          "Our tour presents Yugoslavia's socialist period through a balanced historical lens, neither glorifying nor demonizing the era. The guide discusses both the achievements (social housing, industrialization, international standing) and failures (economic problems, political repression) of the Yugoslav system. We examine how everyday people lived during this period and the complex legacy of socialism in modern Serbia. The tour appeals to visitors with diverse political perspectives who share an interest in this unique chapter of European history.",
      },
      {
        question: "What will we see at the Museum of Yugoslav History?",
        answer:
          "The museum visit focuses on the House of Flowers (Tito's mausoleum), his vast collection of international gifts from world leaders, and exhibitions about everyday life in Yugoslavia. We view Tito's private residence, complete with original furnishings, screening room, and personal effects. The museum's rotating exhibitions often showcase Yugoslav design, propaganda, fashion, and technology from the socialist period. Our special arrangement provides access to certain areas usually closed to general visitors.",
      },
      {
        question: "How authentic is the Yugoslav apartment experience?",
        answer:
          "The apartment has been meticulously preserved/restored to represent an upper middle-class Yugoslav home from the late 1970s. Everything from the furniture and appliances to the decorations, books, records, and even the typical food products in the kitchen cabinets are period-authentic. The apartment's owner shares personal and family stories from daily life under socialism, creating an intimate glimpse into the era that goes beyond museum exhibits.",
      },
    ],
  },
  {
    title: "Belgrade Culinary Walking Journey",
    description:
      "Discover the rich flavors of Serbian cuisine through an immersive walking tour of Belgrade's food landmarks, from historic kafanas to local markets, with tastings of traditional dishes including ćevapi, kajmak, ajvar, and plum delicacies guided by a local food writer.",
    images: [
      "/images/tours/belgrade/food-market.jpg",
      "/images/tours/belgrade/traditional-dishes.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Food", "Culinary", "Walking"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Marija Petrović",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many food tastings are included?",
        answer:
          "The tour includes 7-8 generous food tastings across multiple establishments, equivalent to a substantial meal. We sample a carefully curated selection of Serbian specialties including meze platters, grilled meats, pastries, cheese, regional specialties, and traditional desserts. Each tasting is paired with explanations of the food's cultural and historical significance in Serbian cuisine. The tour includes local wine, craft beer, or rakija pairings at select stops.",
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Yes, we can accommodate vegetarians, gluten-free diets, and most food allergies with advance notice. While traditional Serbian cuisine is meat-heavy, our guides know authentic vegetarian dishes and specialty shops. Please note that strict vegan options are more limited but possible with prior arrangement. We request at least 48 hours notice for special dietary needs.",
      },
      {
        question: "What markets will we visit?",
        answer:
          "We typically visit Zeleni Venac, one of Belgrade's oldest and most authentic green markets, where you'll meet local producers and sample seasonal specialties. Depending on the day, we may also explore Bajloni Market or the historic Kalenić Market. You'll learn how to select the best produce and specialty items like kajmak (Serbian cream cheese), handmade cheeses from mountain regions, and traditional cured meats.",
      },
      {
        question: "Will we just eat or also learn about food preparation?",
        answer:
          "Beyond eating, you'll observe food preparation at several stops. Watch skilled chefs hand-rolling burek pastry, see traditional bread baking techniques, witness the grilling of ćevapi over specific wood charcoals, and learn how ajvar (red pepper spread) is traditionally made. Some stops include mini-demonstrations where you can try your hand at food preparation techniques. We provide a recipe booklet so you can recreate Serbian specialties at home.",
      },
    ],
  },
  {
    title: "Avala Mountain Nature & Monument Escape",
    description:
      "Escape the city to nearby Avala Mountain for breathtaking panoramic views, forest hiking trails, the striking Monument to the Unknown Hero, and the iconic Avala Tower with its unique architecture and viewing platforms offering vistas across Belgrade and beyond.",
    images: [
      "/images/tours/belgrade/avala-tower.jpg",
      "/images/tours/belgrade/avala-monument.jpg",
    ],
    duration: "5 hours",
    price: "$55",
    rating: 4.7,
    tags: ["Nature", "Monuments", "Hiking"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Stefan Mirković",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How difficult is the hiking on this tour?",
        answer:
          "The hiking is moderate and suitable for most fitness levels. We cover approximately 4-5 kilometers on well-maintained forest paths with gentle inclines. The trails are scenic and peaceful, winding through deciduous forest with occasional clearings offering beautiful views. For those preferring less walking, we can adjust the route to focus more on the monuments and viewpoints accessible by vehicle.",
      },
      {
        question: "What is the historical significance of the monuments?",
        answer:
          "The Monument to the Unknown Hero, designed by renowned sculptor Ivan Meštrović in 1938, commemorates Serbian and Yugoslav soldiers from World War I. It replaced an earlier monument destroyed during the war and represents a significant example of interwar memorial architecture. The Avala Tower has its own poignant history – the original 1965 tower was destroyed during the 1999 NATO bombing, with the current structure rebuilt as an exact replica in 2010, symbolizing Belgrade's resilience and renewal.",
      },
      {
        question: "Is there food available on the mountain?",
        answer:
          "Yes, we typically include a stop at a traditional Serbian mountain restaurant (planinska kuća) where you can enjoy authentic local cuisine with spectacular views. Many visitors enjoy trying the hearty mountain specialties like roasted meats, homemade bread, and local cheese. We can also arrange a picnic lunch using products from local farmers if preferred. Light snacks and refreshments are available at the Avala Tower as well.",
      },
      {
        question: "How far is Avala Mountain from Belgrade?",
        answer:
          "Avala Mountain is located approximately 16 kilometers south of Belgrade's center, making it a perfect half-day escape from the city. The drive takes about 30-40 minutes depending on traffic. Transportation in a comfortable, air-conditioned vehicle is included in the tour price, with pickup and drop-off at your accommodation. The mountain rises to 511 meters, providing a refreshing climate that's often several degrees cooler than the city center.",
      },
    ],
  },
  {
    title: "Private Serbian Cooking Class & Home Dinner",
    description:
      "Master the secrets of traditional Serbian cuisine in a private home kitchen, learning family recipes passed down through generations before enjoying your creations during a convivial dinner with local wines and homemade rakija.",
    images: [
      "/images/tours/belgrade/cooking-class.jpg",
      "/images/tours/belgrade/home-dinner.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Cooking", "Culinary", "Home Experience"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Grandmother Dušanka",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to prepare?",
        answer:
          "You'll learn to make several classic Serbian dishes, typically including sarma (stuffed cabbage rolls), gibanica (cheese pie), properly seasoned Serbian ćevapi or stuffed peppers, and traditional desserts like vanilice cookies or tufahije (walnut-stuffed poached apples). Seasonal variations may include specialties like fresh ajvar preparation in autumn. All recipes are provided to take home, including family secrets for authentic results.",
      },
      {
        question: "Do I need previous cooking experience?",
        answer:
          "No cooking experience is necessary! Our host is skilled at teaching beginners while still offering techniques to interest experienced home cooks. The class is hands-on and participatory, but structured to ensure success regardless of skill level. The focus is on learning, enjoyment, and cultural exchange rather than professional perfection.",
      },
      {
        question: "Where does the class take place?",
        answer:
          "The class takes place in an authentic Serbian family apartment in a residential neighborhood, giving you a genuine glimpse into local home life rarely experienced by tourists. The kitchen is modest but fully equipped with all necessary tools and ingredients. This intimate setting allows for personal interaction with your host family and a truly authentic cultural experience beyond the typical tourist attractions.",
      },
      {
        question: "Is alcohol served during the dinner?",
        answer:
          "Yes, the meal includes carefully selected Serbian wines from small family vineyards, showcasing indigenous varietals like Tamjanika, Prokupac, and Vranac. Your host also offers house-made rakija (fruit brandy) in several flavors like plum, quince, and apricot. Non-alcoholic options including house-made fruit juices are also available. The drinks are served in a traditional, hospitable manner with toasts and explanations of Serbian drinking customs.",
      },
    ],
  },
  {
    title: "Belgrade at Night: Splav Clubs & Nightlife Experience",
    description:
      "Immerse yourself in Belgrade's world-famous nightlife scene with VIP access to the city's renowned floating river clubs (splavovi), trendy bars, and hidden nightspots, guided by a local nightlife insider.",
    images: [
      "/images/tours/belgrade/river-clubs.jpg",
      "/images/tours/belgrade/nightlife.jpg",
    ],
    duration: "5 hours",
    price: "$70",
    rating: 4.7,
    tags: ["Nightlife", "VIP", "Party"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Ivan Popović",
    tourCategoryId: "nightlife",
    faqs: [
      {
        question: "What is the dress code for the clubs?",
        answer:
          "Belgrade's upscale venues do enforce dress codes, particularly the exclusive river clubs. Smart casual attire is recommended – no athletic wear, flip-flops, or overly casual clothing. Men typically wear nice jeans or pants with a collared shirt or stylish t-shirt, while women often dress fashionably with dresses, nice tops, or elegant jeans. Your guide will advise on specific venue requirements for your tour date, as different clubs have varying standards.",
      },
      {
        question: "Is it safe to go clubbing in Belgrade?",
        answer:
          "Belgrade's nightlife scene is generally quite safe, especially with a knowledgeable local guide. Our guide stays with your group throughout the evening, handling all arrangements and ensuring your security at all times. They help navigate between venues safely, arrange reliable transportation, and manage any communication with venue staff. Belgrade has a low crime rate compared to many European capitals, but standard nightlife precautions regarding belongings and alcohol consumption apply.",
      },
      {
        question: "Which clubs do we visit?",
        answer:
          "We typically visit 3-4 venues, customized based on your music preferences and the best events on your specific date. Options usually include one premium river club (splav), one urban cocktail bar, and one underground music venue or traditional kafana with live music. Our guides stay updated on Belgrade's dynamic nightlife scene and have access to guest lists at exclusive venues that might otherwise be fully booked.",
      },
      {
        question: "Are drinks included in the tour price?",
        answer:
          "The tour includes VIP entry/cover charges to all venues, one welcome drink at each location, and table service arrangements. Additional drinks are purchased individually. Most clubs accept credit cards, but we recommend bringing some cash for smaller venues. Expect premium venue prices for cocktails (€8-12) and beers (€4-6). Your guide can recommend good drink options and explain typical Serbian drinking customs.",
      },
    ],
  },
  {
    title: "Military History & Underground Bunker Exploration",
    description:
      "Uncover Belgrade's military history with exclusive access to secretive Yugoslav-era bunkers and military installations, including the massive Karađorđevo underground command center designed to survive nuclear attacks, with insights from military historians.",
    images: [
      "/images/tours/belgrade/military-bunker.jpg",
      "/images/tours/belgrade/military-museum.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Military", "Underground", "Cold War"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Colonel Vladimir Petrović (Ret.)",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How extensive are the underground facilities?",
        answer:
          "The main bunker complex we visit extends over 10,000 square meters underground, with multiple levels, command rooms, sleeping quarters, air filtration systems, and independent power generation facilities. Built between 1965-1977, it was designed to house government and military leadership for months during a potential nuclear conflict. The facility could accommodate several hundred people and maintain communications with military units throughout Yugoslavia. We explore approximately 60% of the accessible areas during our tour.",
      },
      {
        question: "Are the underground areas safe to visit?",
        answer:
          "Yes, the facilities we visit are structurally sound and regularly inspected for safety. However, the bunker tour involves navigating narrow corridors, steep staircases, and areas with low lighting. Participants should be comfortable in enclosed underground spaces. Our guides carry emergency equipment, and the bunkers maintain functioning ventilation systems. The facilities are not wheelchair accessible due to their military design with multiple staircases.",
      },
      {
        question: "What will we see at the Military Museum?",
        answer:
          "The Military Museum houses an extensive collection spanning centuries of Balkan conflicts. Highlights include Ottoman period weapons, World War I and II artifacts, and captured NATO equipment from the 1999 bombing campaign including parts of an F-117 stealth aircraft shot down over Serbia. Our tour provides context for how military history shaped Belgrade's development and explains the strategic significance of the city throughout European conflicts.",
      },
      {
        question: "Will we see active military facilities?",
        answer:
          "While most locations are decommissioned historical sites, some remain under military ownership with special permission granted for our tours. Photography restrictions apply in certain areas which your guide will clearly indicate. Our retired military guides have special access permissions through their professional connections, allowing entry to areas not accessible to the general public. All visits are coordinated with relevant authorities.",
      },
    ],
  },
  {
    title: "Danube Catamaran Cruise & Wine Tasting",
    description:
      "Cruise the mighty Danube River aboard a luxury catamaran, enjoying spectacular views of Belgrade's rivers and islands while sampling premium Serbian wines from riverside vineyards paired with gourmet local delicacies.",
    images: [
      "/images/tours/belgrade/danube-catamaran.jpg",
      "/images/tours/belgrade/wine-tasting.jpg",
    ],
    duration: "3 hours",
    price: "$110",
    rating: 4.9,
    tags: ["Wine", "River Cruise", "Luxury"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Sommelier Jovan Simić",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What wines will we taste?",
        answer:
          "The tasting features 6 premium wines representing different Serbian wine regions, with a focus on indigenous varieties rarely found outside the Balkans. You'll sample whites like Tamjanika (aromatic Muscat) and Smederevka, alongside reds such as Prokupac (Serbia's ancient native grape) and Vranac. Each wine is presented by our sommelier who explains the terroir, production methods, and unique characteristics. The cruise route passes near historic Slankamen vineyards, allowing for discussions about viticulture in the Danube's microclimate.",
      },
      {
        question: "What food is served with the wine?",
        answer:
          "The wines are paired with a carefully selected charcuterie and cheese board featuring local specialties: aged Zlatibor prosciutto (pršuta), Sjenica sheep cheese, kajmak spread, artisanal goat cheeses, freshly baked breads, organic honey, dried fruits, and seasonal items. All products come from small Serbian producers using traditional methods. The pairings are designed to complement each wine's characteristics while showcasing authentic regional flavors.",
      },
      {
        question: "What type of boat is used for the cruise?",
        answer:
          "We use a modern, stable catamaran with both indoor and outdoor viewing areas to ensure comfort in any weather. The vessel features comfortable seating, restroom facilities, climate control, and a premium sound system. With a maximum of 20 passengers, the experience remains intimate and uncrowded. The catamaran's design provides exceptional stability for a smooth ride even if the river has light chop.",
      },
      {
        question: "Is the cruise available year-round?",
        answer:
          "Yes, the cruise operates year-round with seasonal adaptations. Summer cruises (May-September) feature more outdoor time and later departures to catch sunset views. Winter cruises (October-April) offer a cozy indoor experience with panoramic views, earlier departure times, and a focus on full-bodied red wines. The Danube landscape transforms dramatically with the seasons, providing distinct perspectives throughout the year.",
      },
    ],
  },
  {
    title: "Orthodox Monasteries & Religious Heritage Tour",
    description:
      "Journey into the spiritual heartland of Serbia with visits to magnificent medieval monasteries including Fruška Gora's hidden gems and the stunning Krušedol, featuring exceptional frescoes, ancient manuscripts, and living monastic traditions.",
    images: [
      "/images/tours/belgrade/monastery-frescoes.jpg",
      "/images/tours/belgrade/orthodox-service.jpg",
    ],
    duration: "8 hours",
    price: "$90",
    rating: 4.8,
    tags: ["Religious", "Orthodox", "Monasteries"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Theological Scholar Nikola Jovanović",
    tourCategoryId: "spiritual",
    faqs: [
      {
        question:
          "Do we need to dress in a certain way to visit the monasteries?",
        answer:
          "Yes, modest dress is required for monastery visits out of respect for Orthodox traditions. Women should wear skirts below the knee (no pants) and have shoulders covered, while men should wear long pants (no shorts). Many monasteries provide wrap skirts at the entrance for women wearing pants. Our guide will advise you on specific requirements before the tour. Appropriate quiet, respectful behavior is also expected, especially if monks or nuns are present or services are in progress.",
      },
      {
        question: "What is the historical significance of these monasteries?",
        answer:
          "These medieval monasteries served as crucial centers for preserving Serbian identity, spirituality, and culture during five centuries of Ottoman rule. Built by Serbian rulers between the 12th-16th centuries, they became repositories of Byzantine artistic traditions, manuscript illumination, and early Slavic literacy. The monasteries we visit house exceptional examples of medieval frescoes representing the pinnacle of Orthodox religious art. Their historical importance extends beyond religion to their role in maintaining national consciousness during foreign occupation.",
      },
      {
        question: "Will we see monks or attend any religious services?",
        answer:
          "Yes, these are active monasteries with resident monks or nuns following ancient traditions. We often have the opportunity to observe or participate in brief services, depending on the daily schedule. When possible, our guide arranges for monks to share insights about monastic life or special features of their monastery. Some monasteries also maintain traditional workshops where monks create icons, wooden crafts, or herbal products which you may be able to purchase directly.",
      },
      {
        question: "How far are these monasteries from Belgrade?",
        answer:
          "The monasteries are located in the Fruška Gora region, approximately 60-90 minutes from Belgrade by car, depending on which specific monasteries we visit. The journey itself is scenic, passing through rolling hills and vineyards. We typically visit 3-4 monasteries during the day, selected based on their artistic importance, current accessibility, and religious schedule. Transportation in a comfortable vehicle is included in the tour price.",
      },
    ],
  },
  {
    title: "Traditional Serbian Music & Dance Evening",
    description:
      "Experience the soul of Serbian culture through its folk music traditions with an immersive evening featuring live performances of epic poetry, kolo dancing, and instrumental music, plus hands-on instruction in traditional instruments and dance steps.",
    images: [
      "/images/tours/belgrade/folk-musicians.jpg",
      "/images/tours/belgrade/kolo-dancing.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Music", "Folk", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Ethnomusicologist Vesna Đurić",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Do I need to know how to dance?",
        answer:
          "No dance experience is necessary! Serbian folk dances are designed for community participation, and beginners can quickly learn the basic steps. The kolo (circle dance) starts with simple movements before building to more complex patterns. Our instructors are patient and begin with easy variations suitable for all ages and abilities. Even those who prefer not to dance will enjoy watching and listening to the authentic musical performances.",
      },
      {
        question: "What instruments will we see and hear?",
        answer:
          "The performance features traditional Serbian instruments including the gusle (single-stringed fiddle used for epic poetry), frula (wooden flute), dvojnice (double flute), tambura (stringed instrument similar to a mandolin), accordion, and various percussion instruments. The evening includes demonstrations of each instrument, explanations of their cultural significance, and opportunities to try playing some instruments yourself under guidance from the musicians.",
      },
      {
        question: "Is there food and drink at the event?",
        answer:
          "Yes, the evening includes a selection of traditional Serbian meze (appetizers) such as cheese, cured meats, breads, and seasonal specialties. Drinks include local wine, beer, and rakija (fruit brandy) served in the customary Serbian manner. Full dinner options are available for an additional fee if reserved in advance. The culinary offerings complement the cultural experience, as food and music are deeply intertwined in Serbian celebrations.",
      },
      {
        question: "Where does this event take place?",
        answer:
          "The evening is hosted in an authentic traditional venue—either a Serbian cultural center or a specialized folk restaurant with proper acoustics and space for performances. These venues are decorated with traditional textiles, instruments, and artifacts creating an immersive atmosphere. The setting is chosen specifically to provide an authentic context for the musical traditions rather than a touristy performance.",
      },
    ],
  },
];

export default belgradeTours;
