import { Tour } from "@/lib/interfaces/services/tours";

export const svanetiRegionTours: Tour[] = [
  {
    title: "Svaneti Medieval Towers & High Mountain Villages",
    description:
      "Explore Georgia's remote Svaneti region with its UNESCO-listed medieval defensive towers, ancient villages, and stunning high-mountain landscapes, accompanied by a local Svan guide.",
    city: "Mestia",
    country: "Georgia",
    region: "Svaneti",
    images: [
      "/images/tours/svaneti/defensive-towers.jpg",
      "/images/tours/svaneti/mountain-village.jpg",
    ],
    duration: "3 days",
    price: "$390",
    rating: 4.9,
    tags: ["Cultural", "Historical", "Mountains"],
    meetingPoint: {
      address: "Seti Square, Mestia 3200, Georgia",
      coordinates: {
        latitude: 43.0359,
        longitude: 42.7236,
      },
      instructions: "Meet at the central square in Mestia near the Tourism Information Center. Your guide will be waiting with a 'Svaneti Tours' sign.",
      contactNumber: "+995 598 12 34 56",
      contactEmail: "info@svanetitours.ge"
    },
    highlights: [
      "Visit UNESCO-protected medieval tower houses in Ushguli, Europe's highest permanently inhabited settlement",
      "Stay with local families in traditional Svan homes",
      "Hike to pristine alpine meadows with views of Mt. Ushba and surrounding glaciers",
      "Experience authentic Svan culture, cuisine, and folk music"
    ],
    inclusions: [
      "Professional local Svan guide with deep historical knowledge",
      "2 nights accommodation in traditional guesthouses",
      "All meals featuring authentic Svan cuisine",
      "4x4 transportation between villages",
      "Entry fees to museums and cultural sites",
      "Folk music performance"
    ],
    exclusions: [
      "Transportation to/from Mestia",
      "Alcoholic beverages",
      "Personal expenses and souvenirs",
      "Travel insurance",
      "Gratuities"
    ],
    itinerary: [
      "Day 1: Meet in Mestia, visit Svaneti History Museum, explore Mestia towers, overnight in local guesthouse",
      "Day 2: 4x4 journey to Ushguli village complex, hike to Queen Tamar's tower, visit ancient churches, overnight in Ushguli family home",
      "Day 3: Morning hike to Shkhara Glacier viewpoint, return to Ushguli for lunch, afternoon return to Mestia with stops at panoramic viewpoints"
    ],
    cancellationPolicy: "Full refund if canceled 7 days in advance. 50% refund if canceled 3-7 days before departure. No refund for cancellations less than 3 days in advance. Alternative dates offered in case of severe weather affecting access.",
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: true,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isFree: false,
    isPopular: false,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Why were the defensive towers built?",
        answer: "The distinctive Svan towers, dating from the 9th-12th centuries, served multiple purposes: protection during clan feuds that were common in medieval Svaneti, defense against invaders (the region was never conquered by the Mongols or Ottoman Empire), storage for food and valuables, and as refuge during harsh winter avalanches. Each family built and maintained their own tower, with most standing 20-25 meters tall with walls up to 1.5 meters thick."
      },
      {
        question: "What is the accommodation like?",
        answer: "You'll stay in authentic Svan guesthouses - historic family homes with traditional wood and stone architecture. Accommodations are clean and comfortable but rustic, typically with shared bathrooms. These homestays provide a genuine cultural experience with home-cooked meals and interaction with local families. Some homes may have limited electricity during certain hours, and internet connectivity is minimal."
      },
      {
        question: "How difficult is the terrain and hiking?",
        answer: "This tour includes moderate hiking (2-3 hours daily) on varied terrain with some steep sections. Trails reach elevations of 2,200-2,500 meters above sea level. While no technical climbing skills are required, participants should be reasonably fit and accustomed to walking. The region's remote nature means medical facilities are limited, so those with serious health concerns should consult their doctor before booking."
      }
    ],
  },
  {
    title: "Trekking the Svaneti Range: Mestia to Ushguli",
    description:
      "Challenge yourself with a multi-day trek through the spectacular Svaneti mountains, following ancient pathways between remote villages with views of the Greater Caucasus peaks.",
    city: "Mestia",
    country: "Georgia",
    region: "Svaneti",
    images: [
      "/images/tours/svaneti/mountain-trekking.jpg",
      "/images/tours/svaneti/caucasus-peaks.jpg",
    ],
    duration: "4 days",
    price: "$480",
    rating: 4.8,
    tags: ["Trekking", "Adventure", "Nature"],
    meetingPoint: {
      address: "Svaneti Trekking Center, 15 Queen Tamar Street, Mestia",
      coordinates: {
        latitude: 43.0366,
        longitude: 42.7276,
      },
      instructions: "Meet at the Svaneti Trekking Center office in Mestia. Look for the building with mountain gear displayed in the windows.",
      contactNumber: "+995 598 98 76 54",
      contactEmail: "trek@svanetihiking.ge"
    },
    highlights: [
      "Trek the spectacular route from Mestia to Ushguli through diverse mountain landscapes",
      "Cross high mountain passes with panoramic views of glaciers and 5000m+ peaks",
      "Stay in remote mountain villages inaccessible by road",
      "Experience the untouched natural beauty of the Caucasus Mountains"
    ],
    inclusions: [
      "Experienced mountain guide and assistant",
      "3 nights accommodation in village guesthouses",
      "All meals during the trek",
      "Luggage transport between overnight stops",
      "Return transportation from Ushguli to Mestia",
      "Trekking permits and maps"
    ],
    exclusions: [
      "Personal trekking equipment (hiking boots, backpacks, etc.)",
      "Transportation to/from Mestia",
      "Travel insurance (mandatory)",
      "Personal expenses",
      "Alcoholic beverages",
      "Gratuities"
    ],
    itinerary: [
      "Day 1: Orientation in Mestia, trek to Zhabeshi village (16km, +250m/-350m elevation)",
      "Day 2: Trek from Zhabeshi to Adishi village crossing Adishi Pass (17km, +1100m/-700m elevation)",
      "Day 3: Trek from Adishi to Iprali, crossing the Chkhunderi Pass (17km, +900m/-1000m elevation)",
      "Day 4: Final trek from Iprali to Ushguli, then 4x4 transfer back to Mestia (15km, +500m/-300m elevation)"
    ],
    cancellationPolicy: "Full refund if canceled 14 days in advance. 50% refund if canceled 7-14 days before departure. No refund for cancellations less than 7 days before trek. Alternative dates offered in case of severe weather.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: false,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How physically demanding is this trek?",
        answer: "This is a moderately difficult trek requiring good physical fitness. You'll walk 15-17km daily with elevation gain/loss of 500-1100m, reaching maximum altitudes of approximately 2,700m at mountain passes. The terrain includes rocky paths, stream crossings, and steep sections. Previous mountain hiking experience is recommended."
      },
      {
        question: "What should I pack for the trek?",
        answer: "Essential items include: broken-in hiking boots, layered clothing for variable mountain weather (temperatures can range from 25°C/77°F to near freezing), waterproof jacket and pants, sun protection, personal medications, basic first aid supplies, and a day pack (15-30L). A detailed packing list will be provided after booking. Your main luggage is transported between overnight stops."
      },
      {
        question: "What are the accommodation conditions along the trek?",
        answer: "Accommodations are in local family guesthouses in remote mountain villages. These are simple but clean with authentic character. Expect shared rooms with 2-4 people and shared bathroom facilities. Hot water and electricity may be limited. The hospitality and home-cooked meals featuring fresh local ingredients are highlights of the experience."
      }
    ],
  },
  {
    title: "Svaneti Photography Expedition",
    description:
      "Capture the stunning landscapes, ancient architecture, and vibrant culture of Svaneti on this photography-focused tour led by a professional landscape photographer.",
    city: "Mestia",
    country: "Georgia",
    region: "Svaneti",
    images: [
      "/images/tours/svaneti/photography-expedition.jpg",
      "/images/tours/svaneti/svaneti-landscape.jpg",
    ],
    duration: "5 days",
    price: "$790",
    rating: 4.7,
    tags: ["Photography", "Cultural", "Landscape"],
    meetingPoint: {
      address: "Hotel Suntower, 3 Kakhiani Street, Mestia",
      coordinates: {
        latitude: 43.0375,
        longitude: 42.7298,
      },
      instructions: "Meet in the lobby of Hotel Suntower in Mestia. Your photography guide will welcome you with a photography briefing.",
      contactNumber: "+995 599 87 65 43",
      contactEmail: "photo@svanetilens.com"
    },
    highlights: [
      "Photograph medieval towers at optimal golden hour lighting",
      "Capture sunrise and sunset over the Caucasus mountain range",
      "Document traditional Svan cultural practices with local permission",
      "Learn specialized landscape and cultural photography techniques"
    ],
    inclusions: [
      "Professional photographer guide throughout the expedition",
      "4 nights accommodation in comfortable guesthouses",
      "All meals featuring local cuisine",
      "All transportation during the tour",
      "4x4 vehicle access to remote shooting locations",
      "Daily photography instruction and image review sessions"
    ],
    exclusions: [
      "Transportation to/from Mestia",
      "Camera equipment (bring your own)",
      "Tripod (essential for this tour)",
      "Personal travel insurance",
      "Alcoholic beverages",
      "Gratuities"
    ],
    itinerary: [
      "Day 1: Evening arrival in Mestia, equipment check, photography brief, and sunset shoot of Mestia towers",
      "Day 2: Pre-dawn start for sunrise at Hatsvali overlooking the Caucasus range, daytime cultural photography in Mestia, evening light on tower reflections",
      "Day 3: Full day expedition to Ushguli for mountain landscape photography and ancient tower compositions",
      "Day 4: Hike to alpine meadows for wildflower macro photography and dramatic mountain backdrops, evening village life documentation",
      "Day 5: Final sunrise shoot, morning image review session, post-processing workshop, afternoon conclusion"
    ],
    cancellationPolicy: "Full refund if canceled 21 days in advance. 50% refund if canceled 10-21 days before departure. No refund for cancellations less than 10 days before tour. Weather-dependent alternative shooting locations are provided rather than cancellation.",
    isHistorical: true,
    isRomantic: false,
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
    isIndoor: false,
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer: "A DSLR or mirrorless camera with manual controls is recommended. Essential lenses include a wide-angle (16-35mm equivalent) for landscapes and architecture, standard zoom (24-70mm equivalent) for versatility, and telephoto (70-200mm equivalent) for mountain details and portraits. A sturdy tripod is essential for low-light shooting. Bring plenty of batteries, memory cards, cleaning supplies, and weather protection for your gear as charging opportunities may be limited."
      },
      {
        question: "Do I need to be a professional photographer to join?",
        answer: "No, this tour is designed for enthusiast photographers with a basic understanding of their camera's manual settings (aperture, shutter speed, ISO). Our guide provides instruction tailored to all skill levels, from intermediate to advanced. Complete beginners may find some technical aspects challenging but will still capture amazing images with guidance."
      },
      {
        question: "Is it ethical to photograph local people?",
        answer: "Cultural sensitivity is a cornerstone of this tour. Our local connections and guide's experience ensure we photograph people with proper permission and respect. We'll learn appropriate approaches to documentary photography, including when to ask permission, when photography may be intrusive, and how to compensate or share images with subjects. In some cases, we arrange specific cultural demonstrations for photography purposes with fair compensation to participants."
      }
    ],
  }
];

export default svanetiRegionTours;
