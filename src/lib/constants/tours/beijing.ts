import { Tour } from "@/lib/interfaces/services/tours";

export const beijingTours: Tour[] = [
  {
    title: "Great Wall Exclusive: Untouched Sections & Helicopter View",
    description:
      "Experience the majestic Great Wall of China like few visitors ever do – with exclusive access to remote, untouched sections at Jiankou, a thrilling helicopter flyover, and expert commentary from a leading historian on Chinese military architecture.",
    city: "Beijing",
    country: "China",
    region: "Northern China",
    images: [
      "/images/tours/beijing/great-wall-helicopter.jpg",
      "/images/tours/beijing/jiankou-section.jpg",
    ],
    duration: "Full day",
    price: "$895",
    rating: 4.9,
    tags: ["Great Wall", "Helicopter", "History"],

    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "luxury",
    meetingPoint: {
      address:
        "The Peninsula Beijing Hotel, 8 Goldfish Lane, Wangfujing, Beijing, China",
      coordinates: {
        latitude: 39.9139,
        longitude: 116.4078,
      },
      instructions:
        "Meet your guide in the main lobby of The Peninsula Beijing Hotel. Your guide will be holding a sign with your name and 'Great Wall Exclusive'. Please arrive 15 minutes before the scheduled departure time. Hotel pickup from other central Beijing hotels can be arranged with advance notice.",
      contactNumber: "+86 10 8888 1234",
      contactEmail: "greatwall@paragontrails.com",
    },
    faqs: [
      {
        question: "How physically demanding is this tour?",
        answer:
          "This tour includes moderate hiking along unrestored sections of the Great Wall that feature uneven terrain and steep steps. Participants should have reasonable fitness and be comfortable walking for periods of 1-2 hours. The Jiankou section is more challenging than touristy sections like Badaling. However, our guides will tailor the pace to suit your ability, and the helicopter portion provides spectacular views without physical exertion.",
      },
      {
        question:
          "What makes this Great Wall experience different from standard tours?",
        answer:
          "This exclusive experience combines three elements rarely found together: access to the dramatic Jiankou section, known for its authentic unrestored condition and breathtaking mountain scenery; a helicopter flyover providing an extraordinary bird's-eye perspective that most visitors never see; and expert commentary from a specialist historian who brings the Wall's military significance to life.",
      },
      {
        question: "Is the helicopter flight safe?",
        answer:
          "Yes, we partner exclusively with China's premier helicopter service which maintains international safety certifications. Their fleet consists of modern helicopters with rigorous maintenance schedules, and all pilots have extensive experience including military training. Weather conditions are carefully monitored, and flights operate only when conditions are optimal for safety and visibility.",
      },
      {
        question: "What should I wear and bring?",
        answer:
          "Wear comfortable hiking shoes with good grip (hiking boots recommended), layers of clothing appropriate for the season, a hat, sunglasses, and sunscreen. Bring a small backpack with water, snacks, camera, and any personal medications. In summer, lightweight moisture-wicking clothing is recommended; in spring/fall, a light jacket is essential; in winter, warm layers, gloves and a hat are necessary as temperatures on the Wall can be significantly colder than in Beijing.",
      },
      {
        question: "How many people will be on this tour?",
        answer:
          "This is a highly exclusive experience limited to a maximum of 6 participants to ensure personalized attention and minimal impact on the fragile unrestored sections of the Wall. For the helicopter portion, we use 4-6 passenger helicopters, meaning you'll have excellent visibility and photo opportunities throughout the flight.",
      },
    ],
  },
  {
    title: "Forbidden City Behind-the-Scenes & Imperial Treasures",
    description:
      "Gain unprecedented access to normally closed sections of Beijing's Forbidden City with a former palace museum curator, exploring imperial treasures and hidden chambers while learning about the intriguing lives of emperors, concubines and eunuchs who once inhabited this mysterious complex.",
    city: "Beijing",
    country: "China",
    region: "Northern China",
    images: [
      "/images/tours/beijing/forbidden-city-restricted.jpg",
      "/images/tours/beijing/imperial-treasures.jpg",
    ],
    duration: "7 hours",
    price: "$475",
    rating: 4.9,
    tags: ["Forbidden City", "Imperial", "Exclusive"],

    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    meetingPoint: {
      address:
        "Meridian Gate (Wu Men), Forbidden City South Entrance, Beijing, China",
      coordinates: {
        latitude: 39.9163,
        longitude: 39.9163,
      },
      instructions:
        "Meet your guide at the east side of Meridian Gate (Wu Men), the main southern entrance to the Forbidden City. Your guide will be holding a yellow flag with 'Imperial Beijing' written in red. Please arrive 20 minutes before your scheduled tour time with your passport, as it's required for entry to the Forbidden City.",
      contactNumber: "+86 10 8888 2345",
      contactEmail: "forbidden@paragontrails.com",
    },
    faqs: [
      {
        question: "Which restricted areas will we visit?",
        answer:
          "Our special access permit allows entry to several areas normally closed to the public, including the Hall of Mental Cultivation (where emperors lived and worked), the Treasure Gallery with its exquisite collection of imperial jewelry, the Palace of Benevolent Peace where empresses resided, and the Imperial Library which houses rare manuscripts. The specific areas may vary slightly based on ongoing restoration work and seasonal palace schedules.",
      },
      {
        question: "How do you obtain access to the restricted sections?",
        answer:
          "We have established relationships with the Palace Museum authorities through years of academic collaboration and cultural exchange. Our special permits are arranged months in advance and are limited to small groups led by guides with specific historical expertise. These arrangements allow access to areas that are either completely closed to general visitors or require additional special tickets that often sell out weeks in advance.",
      },
      {
        question: "What stories will we learn that most visitors miss?",
        answer:
          "Our specialized guides share lesser-known historical narratives that bring the imperial court to life, including tales of palace intrigue, eunuch power struggles, concubine politics, and the daily rituals of imperial life. You'll learn how the architectural layout reflected cosmic principles and power hierarchies, discover hidden symbolism in seemingly decorative elements, and understand how the emperor's daily movements followed strict protocols designed to reinforce imperial authority.",
      },
      {
        question: "How long will we spend in the Forbidden City?",
        answer:
          "The tour includes approximately 5-6 hours inside the Forbidden City complex, allowing for an in-depth exploration that goes well beyond the central axis most tourists follow. This extended time permits visits to multiple courtyards, gardens, and specialized museums within the complex. We pace the tour carefully with strategic rest breaks, including a tea ceremony in a historic pavilion within the palace grounds.",
      },
      {
        question: "What should I wear and bring?",
        answer:
          "Comfortable walking shoes are essential as the tour involves covering significant distance on stone pavements. Dress appropriately for the weather and bring a hat, sunscreen, and water as much of the complex has limited shade. Photography is permitted in most areas (without flash), so bring your camera. Your passport is required for entry. During summer, an umbrella provides good sun protection, while in winter, layers are necessary as the vast marble courtyards can be quite cold and windy.",
      },
    ],
  },
  {
    title: "Beijing Hutong Food & Culture Walking Tour",
    description:
      "Explore Beijing's maze-like hutongs (traditional alleyways) with a local food expert, sampling authentic specialties from family-run eateries and street vendors while learning about daily life in these historic neighborhoods that preserve centuries-old traditions despite rapid modernization.",
    city: "Beijing",
    country: "China",
    region: "Northern China",
    images: [
      "/images/tours/beijing/hutong-street-food.jpg",
      "/images/tours/beijing/local-restaurant.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Food", "Hutongs", "Local Culture"],

    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    meetingPoint: {
      address:
        "Yonghegong Lama Temple, Exit C, Yonghegong Metro Station, Beijing, China",
      coordinates: {
        latitude: 39.9469,
        longitude: 116.4171,
      },
      instructions:
        "Meet your food guide outside Exit C of Yonghegong Metro Station, near the Lama Temple. Your guide will be holding a red paper lantern and wearing a Paragon Trails cap. Please arrive hungry and 10 minutes before your scheduled tour time.",
      contactNumber: "+86 10 8888 3456",
      contactEmail: "hutong@paragontrails.com",
    },
    faqs: [
      {
        question: "How many food tastings are included?",
        answer:
          "The tour includes 7-8 generous food tastings that add up to more than a full meal. We sample a carefully selected variety of Beijing specialties including hand-pulled noodles, dumplings, traditional Beijing roast duck, savory pancakes, local snacks, and seasonal desserts. Come hungry and be prepared to try dishes rarely found outside authentic local neighborhoods.",
      },
      {
        question: "Which specific hutongs will we explore?",
        answer:
          "We visit several historic hutongs in the Drum Tower area, including Nanluoguxiang, Maoer Hutong, and Banchang Hutong. Each has distinct character and history - from the more preserved and residential alleys to partially commercialized lanes with artisan shops. Our route takes you through hidden courtyards, past centuries-old residences, and into backstreet areas where Beijing residents have lived for generations, providing a comprehensive view of hutong life beyond tourist areas.",
      },
      {
        question: "How authentic are the food stops on this tour?",
        answer:
          "We prioritize family-run establishments that have been operating for generations, many of whom without English menus or international clientele. Our relationships with these vendors give you access to authentic preparations rather than tourist-modified versions. Several stops include interaction with the food preparers themselves, some using techniques passed down for generations. These include a family making dumplings in their courtyard home, street vendors who specialize in single iconic dishes, and tiny shops producing specific foods using traditional methods.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, with advance notice we can accommodate vegetarians and most common food allergies while still providing an authentic experience. Beijing cuisine does heavily feature wheat, pork, and peanuts, so please inform us of any restrictions when booking. For severe allergies, we provide detailed allergen cards in Chinese to ensure clear communication with food vendors.",
      },
      {
        question: "Will we visit any local homes?",
        answer:
          "Yes, a highlight of our tour is visiting a traditional siheyuan (courtyard home) where multiple generations of a Beijing family live together. We'll see how residents have adapted these historic structures for modern living while maintaining cultural traditions. The family demonstrates dumpling making and shares stories about neighborhood changes they've witnessed over decades. This provides an authentic glimpse into daily hutong life that most visitors never experience.",
      },
    ],
  },
  {
    title: "Beijing Photography: Dawn to Dusk",
    description:
      "Capture Beijing's visual drama from sunrise to sunset with a professional photographer guide, accessing optimal vantage points for shots of iconic landmarks in perfect light while learning specialized techniques for architectural, street, and cultural photography in one of the world's most photogenic cities.",
    city: "Beijing",
    country: "China",
    region: "Northern China",
    images: [
      "/images/tours/beijing/temple-of-heaven-dawn.jpg",
      "/images/tours/beijing/street-photography.jpg",
    ],
    duration: "10 hours",
    price: "$195",
    rating: 4.7,
    tags: ["Photography", "Full Day", "All Levels"],

    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "art-and-music",
    meetingPoint: {
      address: "East Gate of Temple of Heaven Park, Beijing, China",
      coordinates: {
        latitude: 39.8823,
        longitude: 116.4174,
      },
      instructions:
        "Meet your photography guide at the East Gate of Temple of Heaven Park before sunrise. Your guide will be carrying professional camera equipment and wearing a dark blue photography vest with multiple pockets. Please arrive 15 minutes before the scheduled start time with your camera gear ready.",
      contactNumber: "+86 10 8888 4567",
      contactEmail: "photography@paragontrails.com",
    },
    faqs: [
      {
        question: "What skill level of photography is required?",
        answer:
          "This workshop accommodates all skill levels from smartphone photographers to professionals. Our instructor adjusts guidance to match your experience, covering basics like composition and exposure for beginners, while helping advanced photographers with more technical aspects like long exposures, HDR techniques, and creative approaches to familiar landmarks. The small group size ensures personalized instruction regardless of your level.",
      },
      {
        question: "What photography locations will we visit?",
        answer:
          "We carefully time our visits to capture iconic sites in optimal light: Temple of Heaven at dawn with soft morning light and practicing tai chi participants, Summer Palace during mid-morning light reflecting on Kunming Lake, hutongs during midday for vibrant street life, Forbidden City in afternoon golden light, and the modern CCTV Building and Olympic venues at dusk for dramatic architectural shots with illumination. The itinerary maximizes diverse photographic opportunities while minimizing transit time.",
      },
      {
        question: "What specific photography techniques will we learn?",
        answer:
          "The workshop covers multiple technical and artistic skills: capturing architecture with proper perspective control, photographing local people respectfully and effectively, using early and late light to dramatic effect, night photography techniques for illuminated structures, creative composition for iconic landmarks to find fresh perspectives, and managing challenging lighting conditions common in Beijing (like haze or high contrast scenes). Techniques are tailored to your equipment and skill level.",
      },
      {
        question: "What camera equipment should I bring?",
        answer:
          "Bring whatever camera you're comfortable with, from smartphones to DSLRs. For DSLR or mirrorless users, we recommend a versatile zoom lens (24-70mm or similar), a wide-angle lens for architecture (16-35mm range), and a medium telephoto (70-200mm) if available. A tripod is highly recommended for dawn and dusk shooting. Extra batteries, memory cards, lens cleaning supplies, and a polarizing filter are also useful. Smartphone photographers should bring a portable charger.",
      },
      {
        question: "How do we handle transportation between photo locations?",
        answer:
          "Private transportation with a dedicated driver is provided throughout the day, allowing us to efficiently move between locations while securely storing extra equipment. The vehicle offers a comfortable space to review images between locations and make camera adjustments. Our carefully planned route minimizes transit time while maximizing diverse photographic opportunities, and the schedule is flexible enough to adjust for weather conditions or to spend extra time at locations where the light or activity is particularly compelling.",
      },
    ],
  },
  {
    title: "Temple of Heaven Tai Chi at Sunrise",
    description:
      "Begin your day as locals have for centuries with an early morning Tai Chi session in the mystical surroundings of the Temple of Heaven park, learning this ancient martial art from a master practitioner before exploring the imperial complex where emperors once prayed for good harvests.",
    city: "Beijing",
    country: "China",
    region: "Northern China",
    images: [
      "/images/tours/beijing/tai-chi-practice.jpg",
      "/images/tours/beijing/temple-of-heaven-morning.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Tai Chi", "Morning", "Spiritual"],

    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "wellness",
    meetingPoint: {
      address: "South Gate of Temple of Heaven Park, Beijing, China",
      coordinates: {
        latitude: 39.8716,
        longitude: 116.4077,
      },
      instructions:
        "Meet your Tai Chi master at the South Gate of Temple of Heaven Park before sunrise. Your guide will be wearing traditional Tai Chi clothing and practicing gentle movements. Please arrive 15 minutes before the scheduled start time wearing comfortable, loose clothing and flat shoes.",
      contactNumber: "+86 10 8888 5678",
      contactEmail: "taichi@paragontrails.com",
    },
    faqs: [
      {
        question: "Do I need previous Tai Chi experience?",
        answer:
          "No prior experience is necessary. Our master starts with fundamental principles and basic movements suitable for complete beginners. The instruction focuses on proper breathing, stance, and simple forms that convey the essence of Tai Chi. More experienced practitioners will still benefit from our master's corrections to technique and explanations of the philosophical underpinnings of the movements.",
      },
      {
        question: "Why practice Tai Chi at the Temple of Heaven?",
        answer:
          "The Temple of Heaven park is not only historically significant but also a traditional gathering place where locals have practiced Tai Chi for generations. The serene morning atmosphere, ancient cypress trees, and spiritual significance create an ideal setting for this mindful practice. Practicing here connects you with both local culture and the contemplative tradition of the imperial site where emperors once conducted rituals seeking harmony between heaven and earth.",
      },
      {
        question: "What are the benefits of practicing Tai Chi?",
        answer:
          "Tai Chi offers numerous physical and mental benefits that have been recognized both in traditional Chinese medicine and by modern scientific research. Physically, it improves balance, flexibility, and core strength while being gentle on joints. Mental benefits include stress reduction, improved concentration, and mindfulness development. Our master explains how the practice harmonizes qi (vital energy) and creates balance between yin and yang forces in the body. Even a single session can teach breathing techniques and simple movements that you can continue practicing at home.",
      },
      {
        question: "Who will be teaching the Tai Chi session?",
        answer:
          "Your instructor is a certified Tai Chi master with over 40 years of practice and 25 years of teaching experience. Having trained at the prestigious Beijing Physical Education University and studied under renowned masters, they specialize in Yang style Tai Chi, the most widely practiced form worldwide. They have experience teaching students of all ages and abilities, including complete beginners, and are skilled at adapting instruction to different physical capabilities while maintaining the essential principles of the art.",
      },
      {
        question: "What should I wear for the Tai Chi practice?",
        answer:
          "Wear comfortable, loose-fitting clothing that allows free movement, such as t-shirts, loose pants or sweatpants. Flat-soled shoes like sneakers or specifically designed Tai Chi shoes are ideal. Avoid restrictive clothing, jeans, or shoes with significant tread that might grip the ground too much (Tai Chi practice requires subtle weight shifts). Early mornings in Beijing can be cool even in summer, so bringing a light layer is recommended.",
      },
    ],
  },
  {
    title: "Beijing Olympic Architecture Tour",
    description:
      "Explore the architectural marvels of Beijing's Olympic Park with a design expert, gaining special access to the Bird's Nest National Stadium and Water Cube Aquatics Center while learning about the innovative engineering and cultural symbolism behind these iconic structures that transformed Beijing's skyline.",
    city: "Beijing",
    country: "China",
    region: "Northern China",
    images: [
      "/images/tours/beijing/birds-nest-exterior.jpg",
      "/images/tours/beijing/water-cube-interior.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.6,
    tags: ["Architecture", "Olympic", "Design"],

    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "Olympic Green Subway Station, Exit B, Beijing, China",
      coordinates: {
        latitude: 40.0025,
        longitude: 116.3968,
      },
      instructions:
        "Meet your architectural guide outside Exit B of Olympic Green Subway Station. Your guide will be holding an architectural model of the Bird's Nest stadium and wearing glasses. Please arrive 10 minutes before your scheduled tour time.",
      contactNumber: "+86 10 8888 6789",
      contactEmail: "olympic@paragontrails.com",
    },
    faqs: [
      {
        question: "Will we go inside the Olympic venues?",
        answer:
          "Yes, our special access permits allow entry to both the Bird's Nest National Stadium and the Water Cube Aquatics Center, including areas that regular visitors cannot access. At the Bird's Nest, we explore the structural steel framework up close and visit the VIP areas and athlete preparation zones. At the Water Cube, we examine the unique bubble-inspired ETFE cushion system from both exterior and interior perspectives while learning about its innovative engineering.",
      },
      {
        question: "Who leads this architectural tour?",
        answer:
          "The tour is led by architects or architectural historians with specialized knowledge of contemporary Chinese design and Olympic architecture. Several of our guides worked as consultants during the Olympic construction phase or have published research on these structures. Their expertise allows them to explain not only the visual aspects but also the engineering challenges, sustainability features, and cultural symbolism incorporated into these groundbreaking designs.",
      },
      {
        question:
          "What makes Beijing's Olympic architecture globally significant?",
        answer:
          "Beijing's Olympic architecture represents a pivotal moment in contemporary Chinese design, where international concepts merged with Chinese cultural elements at an unprecedented scale. The Bird's Nest (designed by Herzog & de Meuron with artist Ai Weiwei) and Water Cube (by Australian firm PTW Architects) are considered masterpieces of 21st century architecture, pioneering new structural and sustainable design approaches. These buildings symbolized China's emergence as a global power while showcasing innovative construction techniques, adaptive reuse planning, and digital design methods that have influenced architectural practices worldwide.",
      },
      {
        question: "Will we learn about the 2022 Winter Olympics adaptations?",
        answer:
          "Yes, a key focus of our tour is how Beijing became the first city to host both Summer and Winter Olympics, adapting 2008 venues for winter sports. You'll see how the Water Cube was transformed into the 'Ice Cube' for curling competitions through innovative engineering solutions, and how the National Stadium was repurposed for ceremonies. We discuss the sustainability aspects of this adaptive reuse approach, the technical challenges involved, and how these dual-purpose designs might influence future Olympic planning worldwide.",
      },
      {
        question: "Is photography allowed throughout the tour?",
        answer:
          "Photography is permitted in most areas of both venues, with certain restrictions in operational zones. Our guide will clearly indicate where photography is permitted and where it might be limited. The tour includes stops at optimal photography points for capturing both exterior and interior perspectives. Tripods are not permitted inside the venues, but monopods are acceptable. For architecture enthusiasts, we can suggest specific lenses or settings to best capture these complex structures.",
      },
    ],
  },
  {
    title: "Beijing Family Adventure: Kung Fu & Kite Making",
    description:
      "Create unforgettable family memories with this interactive tour designed specifically for children and parents, featuring a private Kung Fu class with Shaolin-trained masters, traditional Chinese kite making, and family-friendly exploration of the historic Temple of Earth Park.",
    city: "Beijing",
    country: "China",
    region: "Northern China",
    images: [
      "/images/tours/beijing/kung-fu-lesson.jpg",
      "/images/tours/beijing/kite-making.jpg",
    ],
    duration: "5 hours",
    price: "$105",
    rating: 4.9,
    tags: ["Family", "Activities", "Cultural"],

    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "family",
    meetingPoint: {
      address: "Qianmen Pedestrian Street, Archway Entrance, Beijing, China",
      coordinates: {
        latitude: 39.8978,
        longitude: 116.3956,
      },
      instructions:
        "Meet your family guide at the northern archway entrance to Qianmen Pedestrian Street. Your guide will be holding a colorful traditional kite and wearing a red Paragon Trails cap. Please arrive 10 minutes before your scheduled tour time with children wearing comfortable clothing for physical activity.",
      contactNumber: "+86 10 8888 7890",
      contactEmail: "family@paragontrails.com",
    },
    faqs: [
      {
        question: "What ages is this tour appropriate for?",
        answer:
          "This tour is specifically designed for families with children aged 5-15, though we can adapt activities for younger or older participants. The kung fu lesson and kite-making workshop are engaging for various ages, with our instructors skilled at adjusting the difficulty level appropriately. Parents and guardians participate in all activities alongside children, making this a true family bonding experience.",
      },
      {
        question: "Is the kung fu class authentic or just for tourists?",
        answer:
          "Our kung fu instruction is provided by professionally trained martial artists from reputable Beijing martial arts schools, many of whom have trained since childhood in traditional lineages. While the class is adapted to be accessible and safe for beginners, it teaches authentic techniques and principles rather than performative movements. Children learn basic stances, simple forms, and the cultural philosophy behind kung fu, providing a foundation in genuine Chinese martial arts rather than a superficial tourist experience.",
      },
      {
        question:
          "What is the history and cultural significance of kite making?",
        answer:
          "Kite making in China dates back over 2,000 years, with Beijing being a historical center of this art form. Originally developed for military communication and measurement, kites evolved into artistic and recreational objects with rich symbolic meanings. During the workshop, families learn about the different styles of Chinese kites (centipede, swallow, dragon), traditional materials and construction techniques, and the symbolism of various colors and motifs. Children gain appreciation for this intangible cultural heritage while creating a personalized souvenir.",
      },
      {
        question: "How long will we be able to fly our kites?",
        answer:
          "After completing the kite-making portion (approximately 1 hour), we spend 45-60 minutes at the Temple of Earth Park flying the kites. This historic imperial park provides ample open space without obstructions, along with beautiful scenery. Our guides help children master basic kite flying techniques and demonstrate traditional methods of control. If weather conditions aren't suitable for flying, we extend the making portion with additional decorative elements and ensure the kites are properly constructed for flying later.",
      },
      {
        question: "What should we bring for this tour?",
        answer:
          "Wear comfortable, casual clothing suitable for physical activity and appropriate for the season. Athletic shoes are recommended for the kung fu portion. Bring sunscreen, hats, and water bottles, especially during summer months. All materials for kite making and kung fu practice are provided. We recommend bringing a small backpack for storing personal items and your completed kite. Cameras are welcome as there will be many wonderful photo opportunities throughout the experience.",
      },
    ],
  },
  {
    title: "Beijing by Night: Illuminated Landmarks & Nightlife",
    description:
      "Experience Beijing's dramatic transformation after dark with visits to spectacularly illuminated historic sites, followed by your choice of evening entertainment – from acrobatic performances to trendy cocktail bars – concluding with a late-night authentic food adventure at a bustling night market.",
    city: "Beijing",
    country: "China",
    region: "Northern China",
    images: [
      "/images/tours/beijing/forbidden-city-night.jpg",
      "/images/tours/beijing/acrobat-show.jpg",
    ],
    duration: "6 hours",
    price: "$135",
    rating: 4.7,
    tags: ["Night Tour", "Entertainment", "Food"],

    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "nightlife",
    meetingPoint: {
      address:
        "The Peninsula Beijing Hotel, 8 Goldfish Lane, Wangfujing, Beijing, China",
      coordinates: {
        latitude: 39.9139,
        longitude: 116.4078,
      },
      instructions:
        "Meet your evening guide in the main lobby of The Peninsula Beijing Hotel. Your guide will be holding an illuminated lantern with 'Beijing Nights' written on it. Please arrive 10 minutes before your scheduled tour time wearing comfortable walking shoes.",
      contactNumber: "+86 10 8888 8901",
      contactEmail: "nighttour@paragontrails.com",
    },
    faqs: [
      {
        question: "Which illuminated landmarks will we visit?",
        answer:
          "The tour includes Beijing's most spectacular evening viewpoints, including the floodlit exterior of the Forbidden City and its moat, the National Centre for the Performing Arts (the 'Giant Egg') reflected in its surrounding pool, the colorfully lit Olympic Bird's Nest Stadium, and the dramatically illuminated CCTV Tower. At each location, we stop for optimal night photography opportunities with guidance on capturing these challenging lighting conditions.",
      },
      {
        question: "What entertainment options are available?",
        answer:
          "You can choose one of several evening entertainment options: a world-class acrobatic performance featuring gravity-defying stunts; a Kung Fu show combining martial arts with dramatic storytelling; a traditional Peking Opera excerpt with explanation of its symbolic movements; or for those preferring contemporary culture, access to one of Beijing's trendiest cocktail bars designed by renowned architects. Each option provides an authentic glimpse into different aspects of Chinese cultural expression.",
      },
      {
        question: "What kind of food will we try at the night market?",
        answer:
          "We visit Donghuamen or Wangfujing night market (depending on the evening) where you can sample authentic Chinese street foods ranging from familiar dishes to exotic specialties. Options include jianbing (savory crepes), lamb skewers, dumplings, and regional noodles. For adventurous eaters, more unusual options like scorpions or starfish are available but entirely optional. Your guide helps navigate the various stalls and explain the culinary significance of different offerings.",
      },
      {
        question: "Is this tour suitable for families with children?",
        answer:
          "This tour can be appropriate for families with older children (10+), particularly if selecting the acrobatic show option which is visually spectacular and appealing to all ages. However, be aware that the tour runs late (ending around 11:00 PM) and involves considerable evening activity. The night markets can be crowded and stimulating. For families with younger children, we recommend our daytime family-specific tours instead.",
      },
      {
        question: "How will we get around the city at night?",
        answer:
          "Transportation is provided in a comfortable, air-conditioned vehicle with a professional driver experienced in Beijing's night traffic patterns. This allows efficient movement between locations that would be difficult to reach via public transportation in the evening hours. The vehicle provides a comfortable respite between activities and a secure place to store any purchases from the night market or entertainment venues.",
      },
    ],
  },
  {
    title: "Luxury Beijing: Private Helicopter Tour & Imperial Dining",
    description:
      "Indulge in the ultimate Beijing luxury experience with a private helicopter journey over the Great Wall and Imperial Palace, followed by exclusive museum access with an internationally renowned historian and a bespoke multi-course imperial feast in a private pavilion of a former royal garden.",
    city: "Beijing",
    country: "China",
    region: "Northern China",
    images: [
      "/images/tours/beijing/luxury-helicopter.jpg",
      "/images/tours/beijing/imperial-dining.jpg",
    ],
    duration: "8 hours",
    price: "$2,950",
    rating: 4.9,
    tags: ["Luxury", "Helicopter", "Exclusive"],

    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "luxury",
    meetingPoint: {
      address:
        "The Peninsula Beijing Hotel, 8 Goldfish Lane, Wangfujing, Beijing, China",
      coordinates: {
        latitude: 39.9139,
        longitude: 116.4078,
      },
      instructions:
        "Your personal concierge will meet you in the lobby of your luxury hotel. For those staying at The Peninsula Beijing, the meeting point is the VIP section of the main lobby. Your concierge will be dressed in formal attire and holding a personalized greeting card with your name. Private transportation will be arranged to the helipad.",
      contactNumber: "+86 10 8888 9012",
      contactEmail: "luxury@paragontrails.com",
    },
    faqs: [
      {
        question: "What will we see during the helicopter tour?",
        answer:
          "The helicopter journey provides unparalleled aerial views of Beijing's most spectacular landmarks and surrounding countryside. The 60-minute flight follows a carefully designed route over the Mutianyu section of the Great Wall, offering a perspective of this wonder that few ever experience as it snakes across mountain ridges. You'll also fly over the Summer Palace with its magnificent lake and pavilions, the Forbidden City where you can appreciate the perfect symmetry of its imperial layout, and the modern Beijing cityscape with its architectural landmarks. The helicopter features floor-to-ceiling windows for optimal viewing and photography.",
      },
      {
        question: "Who will be our historical guide?",
        answer:
          "Your private guide is a distinguished historian specializing in Chinese imperial history, typically holding a doctorate from a major university and having published scholarly works on Beijing's historical sites. Many of our experts have museum curator experience or academic positions. For guests with specific historical interests, we can match guides with relevant specializations when arranged in advance. The guide accompanies you throughout the day, providing scholarly context that goes far beyond standard tour information.",
      },
      {
        question: "What is included in the imperial dining experience?",
        answer:
          "The imperial feast is a private multi-course banquet based on Qing Dynasty imperial recipes, prepared by a chef specializing in traditional royal cuisine. Served in an exclusive pavilion at either the Aman Summer Palace or another historic venue, the meal features dishes once reserved for the emperor, presented on reproduction imperial porcelain. A dedicated team of servers in period-inspired attire provides discreet service, while a tea master and wine specialist offer perfectly paired beverages. The menu is customized to your preferences and dietary requirements.",
      },
      {
        question: "How exclusive is the museum access?",
        answer:
          "Our special arrangements provide truly exclusive access to museum galleries or historic sites when they are closed to the general public. This could include private early morning access to specific Palace Museum collections, entry to areas of the Summer Palace not open to regular visitors, or after-hours viewings of special exhibitions. The experience is fully private, allowing unhurried appreciation of cultural treasures without crowds. Our cultural connections also sometimes permit viewing of items not currently on public display.",
      },
      {
        question: "Can you accommodate special requests for this experience?",
        answer:
          "Yes, this ultra-luxury experience is highly customizable. Whether you're interested in specific historical periods, art forms, or cultural experiences, we can adapt the itinerary accordingly. Additional elements such as private musical performances, calligraphy demonstrations by masters, or meetings with distinguished cultural figures can be arranged with advance notice. For special celebrations, we can incorporate custom elements such as champagne toasts at scenic locations or personalized cultural gifts.",
      },
    ],
  },
];

export default beijingTours;
