import { Tour } from "@/lib/interfaces/services/tours";

export const bhaktapurTours: Tour[] = [
  {
    title: "Ancient Temples & Living Heritage of Bhaktapur",
    description:
      "Explore the magnificent medieval architecture of Nepal's best-preserved Durbar Square with a cultural historian, gaining special access to normally restricted temple interiors and private family shrines in this UNESCO World Heritage city.",
    images: [
      "/images/tours/bhaktapur/nyatapola-temple.jpg",
      "/images/tours/bhaktapur/durbar-square.jpg",
    ],
    duration: "6 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Temples", "Architecture"],

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
    tourCategoryId: "historical",
    meetingPoint: {
      address: "Bhaktapur Durbar Square Main Gate, Bhaktapur 44800, Nepal",
      coordinates: {
        latitude: 27.6712,
        longitude: 85.428,
      },
      instructions:
        "Meet your cultural historian guide at the main ticket counter of Bhaktapur Durbar Square. Your guide will be holding a sign with the Paragon Trails logo and your name. Please arrive 15 minutes before the scheduled tour time with your passport for entrance fee purposes.",
      contactNumber: "+977 984-1234567",
      contactEmail: "bhaktapur@paragontrails.com",
    },
    faqs: [
      {
        question: "How was Bhaktapur affected by the 2015 earthquake?",
        answer:
          "Bhaktapur suffered significant damage during the 2015 earthquake, with many historic structures partially collapsed. However, it has undergone remarkable restoration using traditional methods. Our tour includes discussions of earthquake-resistant features in Newari architecture and how traditional building techniques proved more resilient than modern structures. We'll see both fully restored temples and sites still undergoing careful reconstruction, offering unique insights into conservation challenges and traditional craftsmanship.",
      },
      {
        question: "Are there any dress codes for visiting temples?",
        answer:
          "Yes, visitors are expected to dress modestly when entering temples. This means covering shoulders and knees. We recommend wearing lightweight, breathable clothing suitable for warm weather, and we can provide shawls or wraps if needed. Footwear must be removed before entering temple interiors, so comfortable sandals or slip-ons are advisable.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. The pace is relaxed, and our guide engages children with stories and legends about the temples and their significance. We can also tailor the tour to include more interactive elements like scavenger hunts or storytelling sessions to keep younger visitors engaged.",
      },
      {
        question:
          "What makes Bhaktapur different from Kathmandu's other ancient cities?",
        answer:
          "Bhaktapur stands distinct from Kathmandu's other Durbar Squares as the best-preserved medieval city-state in Nepal. Unlike Kathmandu and Patan, Bhaktapur maintains a more authentic, lived-in atmosphere with fewer modern intrusions. The city is known for its exceptional concentration of temples, traditional red-brick buildings, intricate woodcarvings, and unique cultural traditions that have remained largely unchanged for centuries. Bhaktapur has maintained its traditional urban planning with designated areas for specific castes and crafts, creating an open-air museum of living heritage.",
      },
      {
        question: "What is the significance of the entrance fee to Bhaktapur?",
        answer:
          "The entrance fee (approximately $15 USD for foreign visitors) directly supports the preservation efforts of this UNESCO World Heritage site. Unlike many heritage sites worldwide, Bhaktapur has pioneered a sustainable conservation model where a significant portion of tourist revenues is reinvested in restoration projects, traditional craft preservation, and community development. This system has enabled the remarkable post-earthquake reconstruction and helps maintain authentic cultural practices. Our tour fee includes this entrance fee, and we provide a breakdown of how these funds support local heritage conservation.",
      },
    ],
  },
  {
    title: "Newari Pottery Workshop & Cultural Experience",
    description:
      "Learn the ancient art of traditional pottery making with master craftsmen from Bhaktapur's Potter's Square, creating your own piece using techniques unchanged for centuries, followed by an authentic Newari feast in a historic courtyard home.",
    images: [
      "/images/tours/bhaktapur/pottery-workshop.jpg",
      "/images/tours/bhaktapur/potters-square.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Crafts", "Pottery", "Hands-on"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
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
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "Pottery Square (Talako), Bhaktapur 44800, Nepal",
      coordinates: {
        latitude: 27.6721,
        longitude: 85.4296,
      },
      instructions:
        "Meet your pottery master at the center of Pottery Square (Talako), near the clay preparation area. Your guide will be preparing clay and wearing a traditional Newari cap. Please arrive 10 minutes before the scheduled workshop time in clothes you don't mind getting clay on.",
      contactNumber: "+977 984-2345678",
      contactEmail: "pottery@paragontrails.com",
    },
    faqs: [
      {
        question: "Can I take my pottery creation home with me?",
        answer:
          "Yes! Your finished pottery piece will be fired in a traditional kiln after your workshop. This process takes 3-4 days to complete. We can arrange to have your creation delivered to your hotel in Kathmandu before your departure, or we offer worldwide shipping for an additional fee. Many participants choose to create small items like traditional tea cups or oil lamps that are easier to transport. No prior pottery experience is necessary to create something beautiful under our master potter's guidance.",
      },
      {
        question: "What should I wear for the pottery workshop?",
        answer:
          "Wear comfortable clothes that you don't mind getting dirty, as pottery can be a messy process. Closed-toe shoes are recommended for safety. We provide aprons, but you may want to bring a change of clothes if you plan to continue exploring Bhaktapur afterward.",
      },
      {
        question: "What is the history of pottery making in Bhaktapur?",
        answer:
          "Pottery making in Bhaktapur dates back over 1,000 years, with the Prajapati (Kumhale) caste traditionally dedicated to this craft. Bhaktapur's clay vessels have been essential to Newari culture, from everyday cooking pots to ceremonial items used in life-cycle rituals and festivals. The distinctive black pottery technique used here involves burying fired pots in rice husks, creating a reaction that results in the signature black finish. Pottery Square has been the center of this tradition for centuries, with families passing down techniques through generations.",
      },
      {
        question: "Do we need to be artistic to enjoy the workshop?",
        answer:
          "No artistic ability is required! The master potters are skilled at guiding beginners through the process of creating beautiful functional pieces. The traditional techniques are accessible to everyone, and our potters focus on having you successfully create something meaningful rather than achieving artistic perfection. Many participants find the tactile experience of working with clay both meditative and satisfying, regardless of their artistic background.",
      },
      {
        question: "Will we see traditional pottery firing techniques?",
        answer:
          "Yes, depending on the workshop timing, you may witness traditional firing methods that have remained unchanged for centuries. This includes preparation of the distinctive straw-firing technique that creates Bhaktapur's famous black pottery. If no firing is scheduled during your visit, we include detailed explanations and visual demonstrations of the process, along with examples at various stages of completion. The workshop includes a tour of the entire pottery-making process from clay preparation to finished products.",
      },
    ],
  },
  {
    title: "Bhaktapur Photography: Dawn to Dusk",
    description:
      "Capture the magical light and living heritage of Bhaktapur across a full day of photography, from misty morning rituals to golden hour illumination of ancient temples, with guidance from an award-winning photographer.",
    images: [
      "/images/tours/bhaktapur/morning-photography.jpg",
      "/images/tours/bhaktapur/evening-light.jpg",
    ],
    duration: "10 hours",
    price: "$120",
    rating: 4.7,
    tags: ["Photography", "Cultural", "Full Day"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: true,
    tourCategoryId: "art-and-music",
    meetingPoint: {
      address:
        "Nyatapola Temple Steps, Taumadhi Square, Bhaktapur 44800, Nepal",
      coordinates: {
        latitude: 27.6716,
        longitude: 85.4287,
      },
      instructions:
        "Meet your photography guide at the base of the Nyatapola Temple steps in Taumadhi Square before sunrise. Your guide will have professional camera equipment and will be wearing a navy blue Paragon Trails photography vest. Please arrive 15 minutes before the scheduled start time with your camera gear ready.",
      contactNumber: "+977 984-3456789",
      contactEmail: "photo@paragontrails.com",
    },
    faqs: [
      {
        question: "What photography skill level is this tour designed for?",
        answer:
          "This tour accommodates all skill levels from smartphone photographers to professional DSLR users. Our guide provides personalized instruction based on your equipment and experience. Beginners receive guidance on composition and capturing daily life, while advanced photographers can explore challenging lighting conditions and cultural documentary techniques. The small group size (maximum 6) ensures everyone receives individual attention. We visit locations at optimal times for photography and gain access to vantage points not available to regular tourists.",
      },
      {
        question: "What should I bring for the photography tour?",
        answer:
          "Bring your camera (DSLR, mirrorless, or smartphone), extra batteries, and memory cards. A tripod is recommended for low-light shots, but not required. Wear comfortable walking shoes and dress in layers as temperatures can vary throughout the day. We also suggest bringing a notebook or sketchbook if you enjoy jotting down thoughts or sketching scenes.",
      },
      {
        question: "What are the most photogenic locations we'll visit?",
        answer:
          "The tour includes Bhaktapur's most visually stunning locations at optimal lighting times: Taumadhi Square with the 5-story Nyatapola Temple at dawn when the golden light first hits the pagoda; Pottery Square during morning work hours when artisans are actively creating; hidden courtyards with ancient stone spouts and local washing rituals; Dattatreya Square during midday craft activities; Durbar Square during afternoon light when the golden gate glows; and sunset from vantage points that capture the entire medieval cityscape against the Himalayan backdrop.",
      },
      {
        question: "How physically demanding is this full-day photography tour?",
        answer:
          "The tour involves approximately 4-5 kilometers of walking throughout the day at a relaxed pace suitable for photographers. Bhaktapur's terrain includes some uneven cobblestone streets, narrow alleys, and occasional steps to viewpoints. We incorporate several rest breaks at atmospheric cafes where you can review images with your guide. While not strenuous, comfortable walking shoes are essential, and participants should be prepared for a full day on their feet with camera gear.",
      },
      {
        question:
          "How will we handle midday light which is typically harsh for photography?",
        answer:
          "During midday when lighting conditions are challenging for exterior shots, we focus on indoor cultural activities, workshops with controlled lighting, portrait opportunities in shaded courtyards, and architectural detail work. Your guide will teach specific techniques for managing high-contrast lighting situations and creating compelling images even during these traditionally difficult hours. We'll also visit locations that particularly benefit from overhead light, such as certain temple interiors and craftspeople's workshops.",
      },
    ],
  },
  {
    title: "Traditional Newari Cooking Class & Market Tour",
    description:
      "Discover the rich flavors of Newari cuisine with a local family, shopping for ingredients in the ancient market square before preparing authentic dishes in a traditional kitchen using centuries-old techniques and recipes.",
    images: [
      "/images/tours/bhaktapur/cooking-class.jpg",
      "/images/tours/bhaktapur/local-market.jpg",
    ],
    duration: "5 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Cooking", "Market", "Local Food"],

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
      address: "Bhaktapur Local Market, Suryamadhi, Bhaktapur 44800, Nepal",
      coordinates: {
        latitude: 27.6724,
        longitude: 85.4276,
      },
      instructions:
        "Meet your culinary guide at the entrance to Bhaktapur's local produce market in Suryamadhi. Your guide will be holding a shopping basket with the Paragon Trails logo. Please arrive 10 minutes before the scheduled tour time wearing comfortable clothes for cooking.",
      contactNumber: "+977 984-4567890",
      contactEmail: "cooking@paragontrails.com",
    },
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "You'll learn to prepare a complete traditional Newari meal including chatamari (rice flour pancake), kachila (spiced minced buffalo), aloo tama (bamboo shoot soup), and yomari (sweet stuffed dumplings) for dessert. Vegetarian options are available for all dishes. Newari cuisine features unique preparation methods and distinctive spice blends not found in standard Nepali food. You'll receive recipe cards to recreate these dishes at home, and our cooking instructor will suggest ingredient substitutions available in Western countries.",
      },
      {
        question: "Do I need prior cooking experience?",
        answer:
          "No prior cooking experience is necessary. Our class is designed for all skill levels, from beginners to experienced cooks. We provide step-by-step instructions and hands-on guidance throughout the cooking process. The focus is on learning traditional techniques and understanding the cultural significance of each dish, making it accessible and enjoyable for everyone.",
      },
      {
        question: "What is unique about Newari cuisine?",
        answer:
          "Newari cuisine is considered one of the most sophisticated culinary traditions in Nepal, with techniques and flavors developed over centuries. It's characterized by complex spice mixtures, fermentation techniques, and elaborate preparation methods that reflect the advanced civilization of the Kathmandu Valley. Newari food features distinctive items like bara (lentil patties), chatamari (rice flour crepes), and kwati (nine-bean soup), along with unique ceremonial dishes rarely found in commercial restaurants. The cuisine beautifully balances flavors, incorporating tangy, spicy, and savory elements in precisely calibrated combinations.",
      },
      {
        question:
          "Will we learn about traditional kitchen tools and techniques?",
        answer:
          "Yes, you'll work with traditional Newari kitchen implements including stone grinders, wooden mortars and pestles, clay cooking pots, and bamboo steamers. Our host will demonstrate centuries-old techniques like manually grinding spices on sil-batta (grinding stones), fermenting ingredients, and cooking over traditional clay stoves. These methods produce distinctive flavors and textures that cannot be replicated with modern equipment. You'll gain insight into how these traditional techniques influenced the development of Newari cuisine and why they're still preferred by local cooks today.",
      },
      {
        question: "Is alcohol served during the cooking class?",
        answer:
          "The class includes the opportunity to taste traditional Newari alcoholic beverages like aila (rice spirit) and thon (rice beer) which play important roles in Newari culture and cuisine. These are offered in small tasting portions with explanations of their cultural significance and traditional production methods. Non-alcoholic alternatives like lassi (yogurt drink) or traditional herbal teas are available for those who prefer not to consume alcohol.",
      },
    ],
  },
  {
    title: "Spiritual Journey: Morning Rituals & Meditation",
    description:
      "Experience Bhaktapur's spiritual traditions with early morning temple rituals, a private blessing ceremony with a Hindu priest, and guided meditation session in an ancient monastery courtyard, connecting with Nepal's living religious practices.",
    images: [
      "/images/tours/bhaktapur/morning-rituals.jpg",
      "/images/tours/bhaktapur/monastery-meditation.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.8,
    tags: ["Spiritual", "Meditation", "Rituals"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "spiritual",
    meetingPoint: {
      address: "Dattatreya Temple, Dattatreya Square, Bhaktapur 44800, Nepal",
      coordinates: {
        latitude: 27.6719,
        longitude: 85.4307,
      },
      instructions:
        "Meet your spiritual guide at the entrance to Dattatreya Temple before sunrise. Your guide will be wearing traditional Nepali clothes and will greet you with a traditional 'namaste'. Please arrive 10 minutes before the scheduled time wearing modest clothing that covers shoulders and knees.",
      contactNumber: "+977 984-5678901",
      contactEmail: "spiritual@paragontrails.com",
    },
    faqs: [
      {
        question: "Do I need prior meditation experience?",
        answer:
          "No prior experience is necessary. Our guide provides clear instruction suitable for beginners while creating an authentic experience respectful of local spiritual traditions. The meditation session lasts approximately 30 minutes and takes place in a peaceful 15th-century monastery courtyard. We focus on simple mindfulness techniques accessible to everyone regardless of religious background. The experience offers a deeper understanding of how Hinduism and Buddhism have harmoniously blended in Nepalese daily life for centuries.",
      },
      {
        question: "What should I wear for the spiritual tour?",
        answer:
          "Dress modestly and comfortably, covering shoulders and knees. Lightweight, breathable clothing is recommended due to the warm climate. We can provide shawls or wraps if needed. Footwear must be removed before entering temple interiors, so comfortable sandals or slip-ons are advisable. The focus is on creating a respectful atmosphere during the rituals and meditation.",
      },
      {
        question: "What types of rituals will we observe or participate in?",
        answer:
          "The experience includes witnessing Hindu morning puja (worship) rituals with oil lamps and flower offerings, observing Buddhist prayer ceremonies at monasteries, participating in a traditional blessing ceremony conducted by a temple priest, and joining a guided meditation session in a historic monastery courtyard. The focus is on respectful observation and mindful participation rather than religious conversion or appropriation. Our spiritual guide provides cultural and philosophical context for each ritual, explaining its significance in everyday Nepali spiritual life.",
      },
      {
        question:
          "Is this experience respectful to local religious traditions?",
        answer:
          "Yes, we prioritize cultural respect and authentic engagement. Our guides have formal training in Hindu and Buddhist traditions and maintain relationships with the religious communities we visit. Participation levels are carefully calibrated to what local religious authorities consider appropriate for visitors. Modest dress is required (we provide wraps if needed), and photography is limited to non-intrusive settings. A portion of your tour fee is donated directly to the temples and monasteries we visit to support their preservation and religious activities.",
      },
      {
        question: "Will we interact with local monks or priests?",
        answer:
          "Yes, the tour includes meaningful interactions with practicing religious figures. Depending on the day, you may meet with Buddhist monks during their morning routines, receive a blessing from a Hindu temple priest, or learn meditation techniques from a practicing spiritual teacher. These are not staged interactions but rather authentic engagements with religious practitioners who share insights about their spiritual paths and daily practices. Translation is provided when necessary, allowing for genuine cultural exchange.",
      },
    ],
  },
];

export default bhaktapurTours;
