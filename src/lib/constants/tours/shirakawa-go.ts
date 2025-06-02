import { Tour } from "@/lib/interfaces/services/tours";

export const shirakawaGoTours: Tour[] = [
  {
    title: "Traditional Gassho-zukuri Village Tour",
    description:
      "Experience Japan's UNESCO World Heritage site featuring unique thatched-roof farmhouses that have withstood heavy snowfall for centuries. This guided tour explores the history, architecture, and traditional way of life in this remote mountain village.",
    city: "Shirakawa-go",
    country: "Japan",
    region: "Gifu Prefecture",
    images: [
      "/images/tours/shirakawa-go/gassho-village.jpg",
      "/images/tours/shirakawa-go/traditional-houses.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.9,
    tags: ["UNESCO", "Traditional", "Cultural"],
    meetingPoint: {
      address: "Shirakawa-go Tourist Information Center, 337 Ogimachi, Shirakawa",
      coordinates: {
        latitude: 36.2599,
        longitude: 136.9041,
      },
      instructions: "Meet outside the main entrance of the Shirakawa-go Tourist Information Center. Your guide will be holding a sign with 'Gassho Village Tour'.",
      contactNumber: "+81 5769-6-1013",
      contactEmail: "info@shirakawagotour.jp"
    },
    highlights: [
      "Explore the UNESCO World Heritage village with its distinctive thatched-roof houses",
      "Visit the Wada House, one of the largest traditional gassho-zukuri buildings open to the public",
      "Learn about the unique community roof-thatching tradition that has preserved these structures for centuries",
      "Enjoy panoramic views of the village from the Shiroyama Viewpoint"
    ],
    inclusions: [
      "Professional English-speaking guide",
      "Admission to Wada House and village museums",
      "Traditional Japanese tea ceremony experience",
      "Transportation to Shiroyama Viewpoint",
      "Small group experience (maximum 8 people)"
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Meals and additional beverages",
      "Souvenir purchases",
      "Gratuities"
    ],
    itinerary: [
      "9:00 AM - Meet at Tourist Information Center and orientation",
      "9:15 AM - Guided walk through the historic village",
      "10:00 AM - Visit to Wada House and explanation of gassho-zukuri architecture",
      "11:00 AM - Visit to Myozenji Temple and village museum",
      "12:00 PM - Traditional tea ceremony and rest break",
      "12:30 PM - Transportation to Shiroyama Viewpoint",
      "1:00 PM - Return to the village center and tour conclusion"
    ],
    cancellationPolicy: "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before scheduled tour.",
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "When is the best time to visit Shirakawa-go?",
        answer: "Each season offers a unique experience: winter (December-February) showcases the famous snow-covered thatched roofs; spring (April-May) features cherry blossoms; summer (June-August) offers lush green surroundings; and autumn (October-November) displays vibrant fall colors. Winter illumination events in January and February are particularly popular."
      },
      {
        question: "Is photography allowed inside the historic houses?",
        answer: "Photography is generally permitted in the village and outside the houses. Inside the Wada House and museums, some areas may have photography restrictions which your guide will clearly indicate. Flash photography is not permitted inside any of the historic structures."
      },
      {
        question: "How much walking is involved?",
        answer: "This tour involves approximately 2-3 km (1.2-1.8 miles) of walking on village paths that may be uneven in places. In winter, paths can be snowy or icy. Comfortable walking shoes are strongly recommended."
      }
    ],
  },
  {
    title: "Gokayama and Shirakawa-go Photography Tour",
    description:
      "Capture the beauty of Japan's historic thatched-roof villages with this photography-focused tour spanning both Shirakawa-go and the lesser-visited Gokayama region, with expert guidance on the best angles and lighting.",
    city: "Shirakawa-go",
    country: "Japan",
    region: "Gifu & Toyama Prefectures",
    images: [
      "/images/tours/shirakawa-go/photography-tour.jpg",
      "/images/tours/shirakawa-go/gokayama-village.jpg",
    ],
    duration: "8 hours",
    price: "$140",
    rating: 4.8,
    tags: ["Photography", "UNESCO", "Off the beaten path"],
    meetingPoint: {
      address: "Shirakawa-go Bus Terminal, 337 Ogimachi, Shirakawa",
      coordinates: {
        latitude: 36.2602,
        longitude: 136.9045,
      },
      instructions: "Meet at the bus terminal parking lot. Your photography guide will be waiting with a sign reading 'Photo Tour'.",
      contactNumber: "+81 5769-6-2345",
      contactEmail: "photos@shirakawa-gokayama.com"
    },
    highlights: [
      "Visit both famous Shirakawa-go and less crowded Gokayama villages",
      "Photograph from special vantage points at optimal times of day",
      "Learn composition techniques for capturing traditional architecture",
      "Access to special locations normally off-limits to regular tourists"
    ],
    inclusions: [
      "Professional photographer guide",
      "Transportation between villages",
      "Admission fees to all viewpoints and special photo locations",
      "Permission arrangements for special photography access",
      "Bottled water and light snacks"
    ],
    exclusions: [
      "Camera equipment (bring your own)",
      "Meals",
      "Hotel pickup and drop-off",
      "Gratuities"
    ],
    itinerary: [
      "7:30 AM - Meet at Shirakawa-go Bus Terminal",
      "7:45 AM - Drive to morning viewpoint for early light photography",
      "8:30 AM - Village photography in Shirakawa-go when few tourists are present",
      "10:30 AM - Travel to Gokayama region (Suganuma and Ainokura villages)",
      "11:30 AM - Photography in less-visited Gokayama villages",
      "1:00 PM - Lunch break at local restaurant (not included)",
      "2:00 PM - Interior photography of selected houses with special permission",
      "3:30 PM - Return to Shirakawa-go for late afternoon light",
      "4:30 PM - Shiroyama Viewpoint for sunset/golden hour photography",
      "5:30 PM - Tour conclusion at Shirakawa-go Bus Terminal"
    ],
    cancellationPolicy: "Full refund if canceled 72 hours in advance. 50% refund if canceled 48-72 hours in advance. No refund for cancellations less than 48 hours before scheduled tour. Alternative date offered in case of severe weather affecting photography conditions.",
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isFree: false,
    isPopular: false,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "What type of camera should I bring?",
        answer: "This tour is suitable for all camera types from smartphones to professional DSLRs. For best results, we recommend a camera with manual settings and interchangeable lenses. A wide-angle lens (16-35mm equivalent) is useful for village scenes, while a medium telephoto (70-200mm equivalent) works well for details and distant landscapes. A tripod is recommended for low-light situations."
      },
      {
        question: "How does the Gokayama region differ from Shirakawa-go?",
        answer: "While both regions feature traditional gassho-zukuri architecture, Gokayama's villages (particularly Ainokura and Suganuma) are smaller, less visited by tourists, and often considered more authentic. The houses in Gokayama tend to have steeper roof angles due to heavier snowfall in that region. From a photography perspective, Gokayama offers more intimate scenes and opportunities to capture village life without crowds."
      },
      {
        question: "What if weather conditions are poor?",
        answer: "Photography is possible in various weather conditions, and foggy or snowy days can create atmospheric images. In case of heavy rain or severe weather that would significantly impact the quality of photography, we offer the option to reschedule or receive a partial refund. Your guide will make adjustments to the itinerary based on lighting conditions on the day."
      }
    ],
  },
  {
    title: "Traditional Craft Workshop & Cultural Experience",
    description:
      "Immerse yourself in Japanese traditional crafts with hands-on workshops in either washi paper making, mochi pounding, or sarubobo doll crafting, followed by a traditional lunch in a historic gassho-zukuri house.",
    city: "Shirakawa-go",
    country: "Japan",
    region: "Gifu Prefecture",
    images: [
      "/images/tours/shirakawa-go/craft-workshop.jpg",
      "/images/tours/shirakawa-go/traditional-lunch.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.7,
    tags: ["Crafts", "Hands-on", "Cultural"],
    meetingPoint: {
      address: "Shirakawa-go Heritage Center, 2499-1 Ogimachi, Shirakawa",
      coordinates: {
        latitude: 36.2576,
        longitude: 136.9049,
      },
      instructions: "Meet at the entrance of the Shirakawa-go Heritage Center. Your guide will be holding a sign with 'Craft Workshop Tour'.",
      contactNumber: "+81 5769-6-1900",
      contactEmail: "workshop@shirakawa-crafts.jp"
    },
    highlights: [
      "Participate in a traditional craft workshop of your choice: washi papermaking, mochi pounding, or sarubobo doll making",
      "Learn from local artisans who have preserved traditional techniques for generations",
      "Enjoy an authentic homecooked multi-course lunch in a historic farmhouse",
      "Take home your handmade craft as a personal souvenir"
    ],
    inclusions: [
      "Professional English-speaking cultural guide",
      "All materials for the craft workshop of your choice",
      "Traditional Japanese lunch",
      "Tea ceremony experience",
      "Village walking tour"
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional crafts beyond the selected workshop",
      "Alcoholic beverages",
      "Gratuities"
    ],
    itinerary: [
      "9:00 AM - Meet at Shirakawa-go Heritage Center",
      "9:15 AM - Introduction to village crafts and history",
      "9:45 AM - Begin craft workshop of choice with local artisan",
      "11:30 AM - Complete craft project to take home",
      "12:00 PM - Traditional lunch in historic farmhouse",
      "1:30 PM - Tea ceremony experience",
      "2:00 PM - Guided walk through village highlights",
      "2:30 PM - Tour conclusion at Heritage Center"
    ],
    cancellationPolicy: "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the tour.",
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Which craft workshop should I choose?",
        answer: "Each workshop offers a different experience: Washi papermaking involves creating delicate Japanese paper using traditional fiber methods. Mochi pounding is an energetic, interactive experience making sweet rice cakes. Sarubobo doll making creates a traditional amulet unique to this region. All workshops are suitable for beginners, and your completed craft will be yours to keep."
      },
      {
        question: "What will be served for lunch?",
        answer: "Lunch features local specialties such as hoba miso (miso grilled on a magnolia leaf), sansai mountain vegetables, homemade tofu, and seasonal dishes. The meal is prepared by local families using traditional methods and ingredients. Vegetarian options are available with advance notice."
      },
      {
        question: "Is this workshop suitable for children?",
        answer: "Yes, children aged 6 and above can participate in all workshops. The sarubobo doll making is particularly suitable for younger children. Parents should accompany children under 12 years old."
      }
    ],
  }
];

export default shirakawaGoTours;
