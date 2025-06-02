import { Tour } from "@/lib/interfaces/services/tours";

export const cartagenaTours: Tour[] = [
  {
    title: "Colonial City Walls & Hidden Fortresses",
    description:
      "Explore Cartagena's impressive UNESCO-listed fortifications with a military historian, discovering secret tunnels, hidden chambers, and strategic viewpoints while learning about the city's defense against pirates and rival empires.",
    images: [
      "/images/tours/cartagena/city-walls.jpg",
      "/images/tours/cartagena/san-felipe-fortress.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Historical", "Architecture", "UNESCO"],

    isHistorical: true,
    isRomantic: false,
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
    tourCategoryId: "historical",
    meetingPoint: {
      address: "Plaza de los Coches, Cartagena, Colombia",
      coordinates: {
        latitude: 10.4234,
        longitude: -75.5492,
      },
      instructions:
        "Meet your historian guide at the entrance to the Clock Tower (Torre del Reloj) at Plaza de los Coches. Your guide will be holding a blue flag with 'Colonial Fortifications Tour' written on it. Please arrive 15 minutes before your scheduled tour time.",
      contactNumber: "+57 5 660 1234",
      contactEmail: "fortifications@paragontrails.com",
    },
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 3 kilometers along the city walls and includes climbing sections of the fortress with steep steps. While we maintain a leisurely pace with plenty of breaks, comfortable shoes and moderate fitness are recommended. Alternative routes with fewer stairs can be arranged for those with mobility concerns.",
      },
      {
        question: "Are there restroom facilities available?",
        answer:
          "Yes, there are restroom facilities at key points along the tour, including the San Felipe Fortress and Plaza de los Coches. We also make stops at local cafes where you can use restrooms and purchase refreshments.",
      },
      {
        question: "What makes Cartagena's fortifications unique?",
        answer:
          "Cartagena's defensive system is one of the most complete and best-preserved examples of Spanish military architecture in the Americas. Built over three centuries, these fortifications protected the strategic port city from countless pirate attacks and military sieges. You'll learn how the ingenious design incorporated natural features, employed advanced military principles of the era, and adapted to evolving threats. The walls and fortresses represent the largest Spanish military investment in the New World.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, children often enjoy exploring the fortresses, cannons, and tunnels. Our guide engages younger visitors with stories of pirates, treasure, and naval battles that bring history to life. For families, we can adapt the tour to focus on the more interactive elements while still providing historical context. Children under 12 receive a special activity booklet about Cartagena's defenses.",
      },
      {
        question: "What's the best time of day for this tour?",
        answer:
          "We recommend the morning (starting at 8:00 AM) or late afternoon (starting at 4:00 PM) to avoid the strongest midday heat. The late afternoon option offers beautiful sunset views from the city walls, while morning tours provide cooler temperatures for climbing the fortress. Both times ensure good lighting for photography of these impressive structures.",
      },
    ],
  },
  {
    title: "Caribbean Culinary Journey & Cooking Class",
    description:
      "Discover the vibrant flavors of Colombian Caribbean cuisine through market visits, rum tastings, and a hands-on cooking class led by a local chef in a beautiful colonial mansion in the historic center.",
    images: [
      "/images/tours/cartagena/cooking-class.jpg",
      "/images/tours/cartagena/bazurto-market.jpg",
    ],
    duration: "6 hours",
    price: "$115",
    rating: 4.8,
    tags: ["Food", "Cooking", "Market"],

    isHistorical: false,
    isRomantic: true,
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
      address: "Mercado de Bazurto, Cartagena, Colombia",
      coordinates: {
        latitude: 10.4115,
        longitude: -75.5269,
      },
      instructions:
        "Meet your culinary guide at the north entrance of Mercado de Bazurto. Look for a chef wearing a traditional Colombian hat and holding a sign with 'Culinary Experience' written on it. Transportation from your hotel to the market can be arranged for an additional fee.",
      contactNumber: "+57 5 660 8765",
      contactEmail: "cuisine@paragontrails.com",
    },
    faqs: [
      {
        question: "What dishes will we learn to prepare?",
        answer:
          "You'll create an authentic Caribbean Colombian meal including ceviche with fresh local seafood, coconut rice, patacones (fried plantains), and a traditional dessert like coconut flan. Our chef adapts recipes based on seasonal ingredients from the morning's market visit. Vegetarian options are available with advance notice, and all participants receive recipe cards to recreate these dishes at home.",
      },
      {
        question: "Do I need prior cooking experience?",
        answer:
          "No prior cooking experience is required! Our class is designed for all skill levels, from beginners to experienced cooks. Chef Catalina provides step-by-step instructions and personalized guidance throughout the cooking process. The focus is on having fun while learning about Caribbean flavors and techniques.",
      },
      {
        question: "Is the Bazurto Market safe for tourists?",
        answer:
          "While Bazurto Market can be overwhelming for independent travelers, our guided visit ensures a safe and enriching experience. Your chef-guide knows the market intimately and takes you to trusted vendors while explaining the local ingredients and customs. The market is where real Cartageneros shop and provides authentic insights into daily life beyond the tourist zones.",
      },
      {
        question: "What types of local ingredients will we use?",
        answer:
          "The Caribbean coast of Colombia has a unique pantry of ingredients including fresh seafood (like red snapper and prawns), tropical fruits (such as guava, passion fruit, and soursop), native root vegetables, and distinctive herbs and spices. Our chef will introduce you to local specialties like corozo palm fruit, ñame root, and aromatics like annatto seeds that create the signature flavors of Caribbean Colombian cuisine.",
      },
      {
        question:
          "Will we learn about the cultural significance of the dishes?",
        answer:
          "Absolutely! Colombian Caribbean cuisine reflects the region's diverse heritage, blending Indigenous, Spanish, and African culinary traditions. Throughout the class, Chef Catalina explains how historical influences shaped local gastronomy, the role of food in celebrations, and how traditional cooking techniques have been preserved across generations. This cultural context makes the cooking experience more meaningful and gives you a deeper appreciation of Cartagena's food culture.",
      },
    ],
  },
  {
    title: "Rosario Islands Private Yacht Experience",
    description:
      "Escape to the stunning Rosario Islands aboard a private yacht, enjoying crystal-clear waters perfect for snorkeling, a fresh seafood lunch on a secluded beach, and the exclusive experience of Caribbean paradise without the crowds.",
    images: [
      "/images/tours/cartagena/rosario-islands-yacht.jpg",
      "/images/tours/cartagena/snorkeling-coral.jpg",
    ],
    duration: "Full day",
    price: "$345",
    rating: 5.0,
    tags: ["Islands", "Yacht", "Snorkeling"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "luxury",
    meetingPoint: {
      address: "Club Náutico de Cartagena, Manga, Cartagena, Colombia",
      coordinates: {
        latitude: 10.41,
        longitude: -75.54,
      },
      instructions:
        "Meet at the private dock of Club Náutico in the Manga neighborhood. Look for your captain at slip #14. The crew will be wearing white uniforms with the Paragon Trails logo. Please arrive 30 minutes before departure for boarding procedures and safety briefing.",
      contactNumber: "+57 5 660 9876",
      contactEmail: "yachting@paragontrails.com",
    },
    faqs: [
      {
        question: "What's included in this yacht experience?",
        answer:
          "Your private yacht charter includes an experienced captain and crew, all snorkeling equipment, towels, unlimited beverages (including local beer and rum), a gourmet lunch featuring fresh-caught seafood, and transportation to/from your hotel. The yacht accommodates up to 8 passengers and features comfortable seating areas, shade options, and a freshwater shower. We customize the itinerary based on sea conditions and your preferences.",
      },
      {
        question: "How long does it take to reach the Rosario Islands?",
        answer:
          "The journey from Cartagena to the Rosario Islands takes approximately 45-60 minutes by yacht, depending on sea conditions and which part of the archipelago we're visiting. The scenic boat ride offers beautiful views of Cartagena's skyline receding into the distance and the approach to the Caribbean island paradise.",
      },
      {
        question: "What marine life might we see while snorkeling?",
        answer:
          "The Rosario Islands are part of a national marine park with diverse coral reefs. While snorkeling, you might spot tropical fish like parrotfish and angelfish, as well as rays, sea turtles, and colorful coral formations. Our crew knows the best spots for snorkeling based on current conditions and will provide guidance even for beginners.",
      },
      {
        question: "What should I bring for the day?",
        answer:
          "We recommend bringing swimwear, sunscreen (preferably reef-safe), a hat, sunglasses, and a light cover-up. We provide towels, snorkeling equipment, and all necessary amenities on board. Don't forget your camera for capturing the stunning island scenery! We also suggest bringing any specific medications you might need, though we carry a basic first-aid kit.",
      },
      {
        question: "What if the weather turns bad during our trip?",
        answer:
          "Your safety is our priority. If weather conditions are unsafe for the yacht excursion, we'll offer to reschedule or provide a full refund. For changing weather during the trip, the captain might modify the itinerary to visit more sheltered areas of the archipelago. Our yachts are equipped with weather monitoring systems, and our experienced captains make informed decisions to ensure both safety and comfort.",
      },
    ],
  },
  {
    title: "Palenque Cultural Heritage Experience",
    description:
      "Visit San Basilio de Palenque, the first free African town in the Americas and UNESCO Cultural Heritage site, meeting descendants of escaped slaves who maintain unique cultural traditions, music, and language.",
    images: [
      "/images/tours/cartagena/palenque-drummers.jpg",
      "/images/tours/cartagena/palenque-village.jpg",
    ],
    duration: "7 hours",
    price: "$95",
    rating: 4.7,
    tags: ["Cultural", "African Heritage", "UNESCO"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "Plaza de la Trinidad, Getsemaní, Cartagena, Colombia",
      coordinates: {
        latitude: 10.4217,
        longitude: -75.5461,
      },
      instructions:
        "Meet your cultural guide at the Plaza de la Trinidad in the Getsemaní neighborhood. The guide will be standing near the church with a yellow folder featuring African heritage symbols. Please arrive 15 minutes before departure as transportation to Palenque (approximately 1-hour drive) leaves promptly.",
      contactNumber: "+57 5 660 7654",
      contactEmail: "cultural@paragontrails.com",
    },
    faqs: [
      {
        question: "What makes Palenque culturally significant?",
        answer:
          "San Basilio de Palenque was founded by escaped enslaved Africans in the 17th century and became the first free Black town in the Americas. Its residents developed their own language (Palenquero, a Spanish-Bantu creole), preserved unique African musical traditions, and maintained distinct cultural practices that survived into the modern era. UNESCO recognized Palenque's cultural space as a Masterpiece of the Oral and Intangible Heritage of Humanity due to its importance in preserving Afro-Colombian identity.",
      },
      {
        question: "What activities are included in the tour?",
        answer:
          "The tour includes a guided walk through the village, visits to local artisans, a traditional Palenque lunch, and live performances of Palenquero music and dance. You'll also have opportunities to interact with community members, learn about their history, and purchase handmade crafts directly from artisans. The experience is designed to be immersive and respectful, providing insight into the living culture of Palenque.",
      },
      {
        question: "How is this tour beneficial to the local community?",
        answer:
          "This tour follows ethical community tourism principles, with the majority of your fee going directly to Palenque families and organizations. We work with a cooperative of local guides, musicians, and cooks rather than outside operators. The community has established tourism as a sustainable way to preserve their heritage while creating economic opportunities, and your visit contributes to cultural preservation projects and educational initiatives for Palenque youth.",
      },
      {
        question: "Can I take photographs during the visit?",
        answer:
          "Photography is permitted in most areas, and community members are generally open to being photographed during organized performances. However, we encourage asking permission before taking photos of individuals, especially in more personal contexts. Your guide will advise on specific protocols for respectful photography that honors the community's cultural heritage and privacy.",
      },
      {
        question: "What kind of food will we try in Palenque?",
        answer:
          "Your lunch features authentic Palenquero cuisine, which blends African cooking techniques with Caribbean ingredients. Typical dishes include coconut rice, stewed fish or meat prepared with local herbs, fried plantains, and yucca. You'll also sample traditional sweets like cocadas (coconut candies) and alegrías (sesame seed treats) that Palenque women have been making and selling in Cartagena for generations. The meal provides another window into how African heritage has been preserved through culinary traditions.",
      },
    ],
  },
  {
    title: "Sunset Photography: Colonial Gems & Caribbean Light",
    description:
      "Capture the magical golden hour light of Cartagena with a professional photographer guiding you through the most photogenic spots, from colorful colonial streets to panoramic views from the historic walls.",
    images: [
      "/images/tours/cartagena/sunset-photography.jpg",
      "/images/tours/cartagena/colonial-balconies.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Photography", "Sunset", "Architecture"],

    isHistorical: false,
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
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "art-and-music",
    meetingPoint: {
      address: "Plaza de Santo Domingo, Cartagena, Colombia",
      coordinates: {
        latitude: 10.4262,
        longitude: -75.5511,
      },
      instructions:
        "Meet your photography guide at the center of Plaza Santo Domingo, near the Botero sculpture. Your guide will be carrying a professional camera and wearing a black photography vest. Please arrive 10 minutes early to prepare your equipment.",
      contactNumber: "+57 5 660 5432",
      contactEmail: "photography@paragontrails.com",
    },
    faqs: [
      {
        question: "Which locations will we visit for photography?",
        answer:
          "We time our tour to catch the best light, beginning with the narrow streets of Getsemaní neighborhood with its colorful houses and street art, followed by Plaza Santo Domingo as afternoon shadows create dramatic light. We then move to the city walls for golden hour, catching spectacular views of the Caribbean Sea and the colonial skyline. We conclude at Café del Mar for classic sunset shots over the water while enjoying a complimentary cocktail.",
      },
      {
        question: "Do I need to bring my own camera?",
        answer:
          "While you can bring your own camera, our guide provides professional-grade cameras and lenses for you to use during the tour. This allows you to experiment with different settings and techniques without needing prior photography experience. We also provide tips on composition, lighting, and capturing the essence of Cartagena's unique architecture and vibrant street life.",
      },
      {
        question: "Do you accommodate all skill levels?",
        answer:
          "Yes, our photography tours welcome everyone from complete beginners to advanced photographers. For beginners, we focus on basic composition techniques and how to best use your equipment (including smartphones). For experienced photographers, our guide can suggest creative approaches to capture Cartagena's unique light and suggest technical settings for challenging lighting conditions. The small group size ensures personal attention.",
      },
      {
        question: "What makes Cartagena's light special for photography?",
        answer:
          "Cartagena enjoys what photographers call 'magical light' due to its Caribbean location and colorful colonial architecture. The combination of vibrant painted walls, the quality of light reflecting off the sea, and the golden hues of sunset create perfect conditions for photography. The contrast between bright colors and deep shadows in the narrow streets offers dramatic compositional opportunities that our guide will help you identify and capture.",
      },
      {
        question: "Will I receive the photos I take during the tour?",
        answer:
          "For guests using our professional equipment, we provide a digital collection of your best shots, professionally edited and delivered via email within 48 hours after the tour. If you're using your own camera, our photographer can help you review your images at the end of the tour, offering advice on selecting and editing the strongest photographs. We also take some group shots that are included in your package.",
      },
    ],
  },
  {
    title: "Gabriel García Márquez Literary Tour",
    description:
      "Follow in the footsteps of Nobel Prize-winning author Gabriel García Márquez, exploring the real Cartagena locations that inspired scenes from 'Love in the Time of Cholera' and other works of magical realism.",
    images: [
      "/images/tours/cartagena/garcia-marquez-sites.jpg",
      "/images/tours/cartagena/colonial-streets.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.6,
    tags: ["Literary", "Cultural", "Walking Tour"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "Portal de los Dulces, Plaza de los Coches, Cartagena, Colombia",
      coordinates: {
        latitude: 10.4237,
        longitude: -75.5495,
      },
      instructions:
        "Meet your literary guide at the Portal de los Dulces (Sweet Portal) in Plaza de los Coches. Your guide will be holding a copy of 'Love in the Time of Cholera' and wearing glasses. Please arrive 10 minutes before the scheduled tour start time.",
      contactNumber: "+57 5 660 4321",
      contactEmail: "literary@paragontrails.com",
    },
    faqs: [
      {
        question:
          "Do I need to have read García Márquez's books before taking this tour?",
        answer:
          "While prior familiarity with works like 'Love in the Time of Cholera' or '100 Years of Solitude' enhances the experience, it's not required. Our guide provides context about García Márquez's life, the literary movement of magical realism, and key passages that connect to Cartagena's locations. Many guests find themselves inspired to read his books after experiencing the real-world settings that influenced his fictional world of Macondo.",
      },
      {
        question: "What locations will we visit?",
        answer:
          "The tour includes stops at key sites such as the Plaza de los Coches, where García Márquez's family lived, the Hotel Santa Clara (inspiration for the hotel in his novels), and the colonial streets that feature prominently in his stories. We also discuss how Cartagena's history and culture influenced his writing, making this a unique blend of literature and local heritage.",
      },
      {
        question:
          "How much is fact versus fiction in García Márquez's portrayal of Cartagena?",
        answer:
          "While García Márquez never explicitly named Cartagena in his novels, he transformed the city's essence into his fictional settings. Our guide reveals the fascinating connections between real Cartagena landmarks and their fictional counterparts, explaining how the author blended historical events with imagination to create his unique literary style of magical realism. Understanding these connections offers a deeper appreciation of both the literature and the city itself.",
      },
      {
        question: "What is García Márquez's relationship with Cartagena?",
        answer:
          "Though born in Aracataca, Colombia, García Márquez maintained a special connection with Cartagena throughout his life. He worked as a journalist here in his early career, owned a home in the historic center later in life, and chose the city as the setting for several works. The tour explores how his experiences in Cartagena shaped his worldview and writing, and how he in turn influenced the city's cultural identity and tourism.",
      },
      {
        question:
          "Will I receive any materials about García Márquez and his work?",
        answer:
          "Yes, all participants receive a custom-designed literary map of Cartagena highlighting García Márquez's key locations, along with a booklet containing selected passages from his works that correspond to places visited on the tour. Additionally, your guide can recommend which of his books might appeal to you based on your interests, and suggest local bookshops where you can find his works in various languages.",
      },
    ],
  },
  {
    title: "Cartagena Street Art & Urban Culture Tour",
    description:
      "Discover the vibrant street art scene of Cartagena with a local artist, exploring colorful murals, graffiti, and urban installations that reflect the city's cultural identity and social issues.",
    images: [
      "/images/tours/cartagena/street-art.jpg",
      "/images/tours/cartagena/urban-murals.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.7,
    tags: ["Art", "Culture", "Walking Tour"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: false,
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
      address: "Plaza de la Trinidad, Getsemaní, Cartagena, Colombia",
      coordinates: {
        latitude: 10.4217,
        longitude: -75.5461,
      },
      instructions:
        "Meet your artist guide at Plaza de la Trinidad in Getsemaní. Look for someone with colorful backpack patches and a sketchbook. Please arrive 10 minutes before the scheduled tour time.",
      contactNumber: "+57 5 660 2109",
      contactEmail: "streetart@paragontrails.com",
    },
    faqs: [
      {
        question: "What types of street art will we see?",
        answer:
          "The tour showcases a diverse range of street art styles, from large-scale murals by renowned Colombian artists to smaller, hidden pieces that tell stories about local life. You'll learn about the techniques used, the messages behind the art, and how it reflects Cartagena's social and political landscape. We also visit community art projects that engage local youth in creative expression.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly! Our guide engages children with interactive activities like scavenger hunts to find specific artworks and encourages them to express their own creativity through drawing or photography during the tour.",
      },
      {
        question:
          "How does this street art tour differ from a typical city tour?",
        answer:
          "Unlike conventional city tours that focus on historical sites, our street art experience explores contemporary Cartagena through its vibrant urban expression. We venture beyond the tourist areas into neighborhoods like Getsemaní and San Diego where local artists are transforming spaces with meaningful artwork. Your guide, an artist connected to the local creative community, provides insider perspectives on the evolving art scene and social context that standard tours cannot offer.",
      },
      {
        question: "Which neighborhoods will we visit?",
        answer:
          "The tour primarily explores Getsemaní, Cartagena's artistic soul and formerly overlooked neighborhood now experiencing creative revitalization. We also venture into less-visited corners of the historic center and potentially the emerging arts district in San Diego, depending on current exhibitions and new murals. These areas showcase how street art has become both a form of community expression and a catalyst for neighborhood transformation.",
      },
      {
        question: "Will we meet any local artists during the tour?",
        answer:
          "Whenever possible, we arrange for participants to meet working street artists or visit active studios where you can see works in progress. These encounters provide authentic connections to Cartagena's creative community and opportunities to learn about artistic techniques firsthand. The specific artists available vary depending on current projects and schedules, making each tour experience unique.",
      },
    ],
  },
  {
    title: "Cartagena Salsa Night: Dance Lessons & Local Clubs",
    description:
      "Experience Cartagena's vibrant nightlife with private salsa lessons from professional dancers, followed by guided visits to authentic local clubs where you can practice your moves alongside Cartageneros.",
    images: [
      "/images/tours/cartagena/salsa-lesson.jpg",
      "/images/tours/cartagena/local-club.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Dance", "Nightlife", "Music"],

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
    tourCategoryId: "nightlife",
    meetingPoint: {
      address: "Centro Cultural Ciudad Móvil, Getsemaní, Cartagena, Colombia",
      coordinates: {
        latitude: 10.422,
        longitude: -75.5465,
      },
      instructions:
        "Meet your dance instructor at the Centro Cultural Ciudad Móvil in Getsemaní. The instructor will be waiting in the main dance studio. Please arrive in comfortable clothing and shoes suitable for dancing.",
      contactNumber: "+57 5 660 3210",
      contactEmail: "salsa@paragontrails.com",
    },
    faqs: [
      {
        question: "Do I need dance experience for this tour?",
        answer:
          "No prior dance experience is necessary! Our instructors are experts at teaching complete beginners. The lesson starts with basic steps and gradually builds to simple combinations that will have you dancing confidently by the end of the session. If you already have some salsa experience, our instructors will adapt to your level with more advanced patterns and styling.",
      },
      {
        question: "What should I wear for salsa dancing?",
        answer:
          "Comfortable clothing that allows free movement is recommended. For footwear, avoid sneakers with rubber soles that might stick to the floor—dress shoes, low heels, or dance shoes are ideal. Ladies often wear skirts or dresses that flow with movement, but this is entirely optional. The clubs in Cartagena have a casual-festive dress code, so there's no need for formal attire.",
      },
      {
        question: "Do I need to bring a dance partner?",
        answer:
          "Not at all! You're welcome to come solo, with friends, or with a partner. During the lesson, we rotate partners to practice with different people (though this is optional if you prefer to stay with your companion). For solo travelers, this is a wonderful opportunity to meet other visitors and locals in a fun, social atmosphere.",
      },
      {
        question: "Which clubs will we visit?",
        answer:
          "After your lesson, we visit 2-3 authentic local venues, carefully selected based on the night's best offerings. These typically include Café Havana for classic Cuban salsa, Bazurto Social Club for champeta and African-influenced rhythms, and smaller neighborhood spots where locals gather to dance. We avoid tourist traps in favor of places where Cartageneros actually go to enjoy their music and dancing.",
      },
      {
        question: "Are drinks included in the tour price?",
        answer:
          "The tour includes one welcome drink at each venue we visit. Additional beverages can be purchased at your own expense. Your guide can recommend local specialties like aguardiente (Colombia's anise-flavored spirit) or tropical fruit cocktails. Water is always available to stay hydrated while dancing.",
      },
    ],
  },
  {
    title: "Mangrove Eco-Tour & Birdwatching",
    description:
      "Explore the rich ecosystem of Cartagena's surrounding mangrove forests by canoe, spotting diverse bird species and learning about the crucial environmental role these coastal wetlands play in the Caribbean.",
    images: [
      "/images/tours/cartagena/mangrove-canoe.jpg",
      "/images/tours/cartagena/coastal-birds.jpg",
    ],
    duration: "4 hours",
    price: "$60",
    rating: 4.7,
    tags: ["Nature", "Eco-Tour", "Birdwatching"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: false,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    meetingPoint: {
      address: "La Boquilla, Cartagena, Colombia",
      coordinates: {
        latitude: 10.4789,
        longitude: -75.5096,
      },
      instructions:
        "Meet at the community center in La Boquilla fishing village, approximately 15 minutes north of Cartagena. Transportation from your hotel can be arranged for an additional fee. Your guide will be waiting with binoculars and field guides. Please wear neutral-colored clothing for better wildlife viewing.",
      contactNumber: "+57 5 660 8765",
      contactEmail: "ecotour@paragontrails.com",
    },
    faqs: [
      {
        question: "What wildlife might we see in the mangroves?",
        answer:
          "The mangrove ecosystem supports abundant wildlife. Bird species commonly spotted include herons, egrets, kingfishers, and if you're lucky, roseate spoonbills or flamingos. You might also see mangrove crabs, iguanas, and occasionally raccoons or sloths. Our guides are expert spotters who can identify species and explain their ecological roles. Each tour is different as wildlife sightings depend on season, time of day, and natural movement patterns.",
      },
      {
        question: "Do I need any special equipment for birdwatching?",
        answer:
          "We provide high-quality binoculars and field guides for all participants. If you have your own binoculars that you're comfortable using, feel free to bring them. A camera with zoom capability is recommended for wildlife photography. We also suggest bringing sun protection, insect repellent, and a water bottle. Our canoes have waterproof compartments for storing personal items.",
      },
      {
        question: "How physically demanding is the canoe trip?",
        answer:
          "This is a low-impact activity suitable for most fitness levels. You'll be seated in a stable, traditional canoe paddled by an experienced local guide, so no paddling experience is required. The tour moves at a leisurely pace through calm waters with frequent stops for wildlife observation. The total time on water is approximately 2.5 hours with a break at a scenic spot.",
      },
      {
        question: "How is this tour environmentally responsible?",
        answer:
          "This tour was developed in collaboration with local environmental NGOs and the La Boquilla fishing community. We follow strict protocols to minimize our impact, including maintaining proper distances from wildlife, staying on designated waterways, and practicing leave-no-trace principles. A portion of your tour fee supports mangrove conservation projects and environmental education for local youth. All guides are trained in sustainable tourism practices.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is appropriate for children aged 6 and older who are comfortable on water. We provide child-sized life vests, and the stable canoes are very safe. Young visitors often enjoy spotting wildlife, and our guides are experienced at engaging children with age-appropriate information about the ecosystem. The tour length and pace can be adjusted slightly for family groups.",
      },
    ],
  },
  {
    title: "Caribbean Fishing With Local Fishermen",
    description:
      "Join traditional fishermen from the coastal village of La Boquilla for an authentic Caribbean fishing experience, learning ancestral techniques passed down through generations and enjoying the freshest seafood lunch possible.",
    images: [
      "/images/tours/cartagena/traditional-fishing.jpg",
      "/images/tours/cartagena/fresh-catch.jpg",
    ],
    duration: "6 hours",
    price: "$90",
    rating: 4.6,
    tags: ["Fishing", "Cultural", "Culinary"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: false,
    isAdventure: true,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "off-the-beaten-path",
    meetingPoint: {
      address: "La Boquilla Beach, Cartagena, Colombia",
      coordinates: {
        latitude: 10.4795,
        longitude: -75.5055,
      },
      instructions:
        "Meet at the fishermen's cooperative building on La Boquilla Beach, located approximately 20 minutes north of Cartagena. Look for the blue building with fishing nets outside. Your fisherman guide will greet you there. Transportation from central Cartagena can be arranged for an additional fee.",
      contactNumber: "+57 5 660 7654",
      contactEmail: "fishing@paragontrails.com",
    },
    faqs: [
      {
        question: "What fishing methods will we learn?",
        answer:
          "You'll experience traditional Caribbean fishing techniques including cast net throwing (atarrayas), line fishing with hand-made tackle, and setting/checking crab traps. These methods have been used by coastal communities for generations and require skill and knowledge of the local marine environment. Your guides are master fishermen who have been practicing these techniques since childhood and are proud to share their cultural heritage.",
      },
      {
        question: "Do I need fishing experience to participate?",
        answer:
          "No prior fishing experience is necessary. This experience is designed for beginners, with patient instruction from local fishermen. You'll start with basic techniques and progress at your own pace. Both children and adults can participate and usually catch something with the guidance provided. The focus is on cultural exchange and learning rather than fishing expertise.",
      },
      {
        question: "What happens with the fish we catch?",
        answer:
          "Whatever you catch becomes part of a communal lunch prepared by families from the fishing village. You'll enjoy your fresh catch cooked in traditional Caribbean style with coconut rice, plantains, and local seasonings. This authentic meal is a highlight of the experience, representing the true 'sea to table' cuisine of coastal Colombia. Any excess catch is shared with community members or preserved traditionally.",
      },
      {
        question: "What should I wear for this activity?",
        answer:
          "Wear comfortable clothing that can get wet and slightly dirty. Quick-drying shorts/pants and a light shirt are ideal, along with sandals or water shoes. Bring sun protection including a hat, sunscreen, and sunglasses. We provide any necessary equipment including life vests for boat portions of the experience. A change of clothes might be comfortable for the return journey.",
      },
      {
        question: "How does this tour benefit the local community?",
        answer:
          "This experience was created in partnership with the La Boquilla Fishermen's Collective, ensuring that tourism directly supports local families while preserving traditional practices. The fishermen receive fair compensation as expert guides, and community members benefit from preparing meals and sharing their cultural knowledge. Additionally, the program includes training in sustainable fishing practices and environmental conservation, helping to protect the marine resources that the community depends upon.",
      },
    ],
  },
  {
    title: "Colonial Cocktail Journey: Historic Bars & Mixology",
    description:
      "Sample the spirits of Colombia through a guided mixology tour of Cartagena's most historic and innovative cocktail venues, learning about traditional ingredients while enjoying drinks in atmospheric colonial settings.",
    images: [
      "/images/tours/cartagena/craft-cocktails.jpg",
      "/images/tours/cartagena/colonial-bar.jpg",
    ],
    duration: "3 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Cocktails", "Nightlife", "Culinary"],

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
      address: "El Arsenal: The Rum Box, Cartagena, Colombia",
      coordinates: {
        latitude: 10.4244,
        longitude: -75.5486,
      },
      instructions:
        "Meet your mixology guide at El Arsenal: The Rum Box in the historic center. Look for a guide holding a cocktail shaker with the Paragon Trails logo. Please arrive 10 minutes before the scheduled start time. The tour begins with a welcome drink at this location.",
      contactNumber: "+57 5 660 4321",
      contactEmail: "cocktails@paragontrails.com",
    },
    faqs: [
      {
        question: "How many drinks are included in the tour?",
        answer:
          "The experience includes four signature cocktails (one at each venue we visit), carefully selected to showcase different Colombian spirits and ingredients. Each cocktail comes with a detailed explanation of its historical context, ingredients, and cultural significance. Additional drinks can be purchased at your own expense if desired. We encourage responsible enjoyment, and non-alcoholic alternatives are available at each stop.",
      },
      {
        question: "Which venues do we visit on the cocktail tour?",
        answer:
          "We visit four distinctive bars, each with a unique atmosphere and specialty. These typically include El Barón for craft cocktails using local ingredients, Alquímico housed in a restored colonial mansion with a rooftop garden supplying fresh herbs, Café del Mar for sunset views along the city walls, and a hidden speakeasy that changes regularly to keep the experience fresh even for returning visitors.",
      },
      {
        question: "Is food included with the cocktail tour?",
        answer:
          "Light appetizers are served at two of our stops to complement the cocktails and ensure a comfortable experience. These typically include local favorites like patacones (plantain chips) with dips, empanadas, or other finger foods. The focus remains on the drinks, so we recommend having dinner either before or after the tour. We can provide excellent restaurant recommendations to continue your evening.",
      },
      {
        question: "What makes Colombian cocktails unique?",
        answer:
          "Colombian cocktails feature distinctive local ingredients including tropical fruits unknown outside South America, indigenous herbs, and spirits with regional character like aguardiente (anise-flavored sugarcane spirit) and ron añejo (aged rum with specific Colombian production methods). The mixology scene in Cartagena blends these traditional elements with contemporary techniques, creating drinks that tell the story of Colombia's diverse cultural influences from Spanish colonization to African heritage.",
      },
      {
        question: "Will we learn how to make the cocktails ourselves?",
        answer:
          "Yes! At one of our stops, you'll participate in a mini mixology class where a professional bartender demonstrates techniques for making a classic Colombian cocktail, which you'll then create yourself. You'll learn proper measuring, mixing, and garnishing methods while understanding how to balance flavors. You'll receive recipe cards for all featured cocktails so you can recreate your favorites at home.",
      },
    ],
  },
];

export default cartagenaTours;
