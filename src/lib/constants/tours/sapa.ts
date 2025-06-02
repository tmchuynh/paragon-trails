import { Tour } from "@/lib/interfaces/services/tours";

export const sapaTours: Tour[] = [
  {
    title: "Fansipan Summit Expedition",
    description:
      "Conquer the 'Roof of Indochina' with a challenging trek up Mount Fansipan (3,143m), Vietnam's highest peak. This guided adventure takes you through diverse ecosystems from bamboo forests to cloud-shrouded alpine terrain, with spectacular panoramic views of Sapa's valleys and beyond to China's Yunnan province.",
    city: "Sapa",
    country: "Vietnam",
    region: "Lào Cai",
    images: [
      "/images/tours/sapa/fansipan-summit.jpg",
      "/images/tours/sapa/mountain-trail.jpg",
    ],
    duration: "2 days",
    price: "$175",
    rating: 4.7,
    tags: ["Mountain Climbing", "Adventure", "Hiking"],

    meetingPoint: {
      address: "Sapa Adventure Tours Office, 25 Fansipan Road, Sapa Town",
      coordinates: {
        latitude: 22.3364,
        longitude: 103.8438,
      },
      instructions:
        "Meet at our office at 6:00 AM. Bring your backpack with essential items for overnight trekking.",
      contactNumber: "+84 214 387 2233",
      contactEmail: "bookings@sapatrekking.com",
    },
    highlights: [
      "Summit Vietnam's highest peak at 3,143 meters",
      "Trek through pristine bamboo forests and alpine meadows",
      "Experience breathtaking panoramic views of Hoang Lien Son mountain range",
      "Overnight camping in the wilderness with stargazing opportunities",
    ],
    inclusions: [
      "Professional mountain guide (English speaking)",
      "Camping equipment (tent, sleeping bag, mat)",
      "All meals during the trek (2 breakfasts, 2 lunches, 1 dinner)",
      "Entrance fees to Hoang Lien National Park",
      "Porters for group equipment",
      "First aid kit and safety equipment",
    ],
    exclusions: [
      "Personal porter (available for $30 per day)",
      "Travel insurance",
      "Personal trekking gear (hiking boots, clothing, etc.)",
      "Gratuities",
      "Transportation to/from Sapa",
    ],
    itinerary: [
      "Day 1: 6:00 AM - Meet at Sapa office for briefing",
      "Day 1: 7:00 AM - Transfer to Tram Ton Pass trailhead",
      "Day 1: 8:00 AM - Begin ascent through bamboo forests",
      "Day 1: 12:00 PM - Lunch stop at 2,200m elevation",
      "Day 1: 4:00 PM - Arrive at base camp (2,800m) and set up tents",
      "Day 1: 6:00 PM - Dinner and rest",
      "Day 2: 4:00 AM - Early morning start for summit push",
      "Day 2: 6:30 AM - Reach Fansipan summit for sunrise",
      "Day 2: 8:00 AM - Begin descent after summit celebrations",
      "Day 2: 12:00 PM - Lunch break during descent",
      "Day 2: 4:00 PM - Return to Sapa town",
    ],
    cancellationPolicy:
      "Full refund if canceled 7 days in advance. 50% refund if canceled 3-7 days before departure. No refund for cancellations less than 3 days in advance. Alternative dates offered in case of severe weather conditions.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How physically demanding is this trek?",
        answer:
          "This is our most challenging trek, requiring good physical fitness and some hiking experience. You'll cover approximately 12km each day with significant elevation gain (1,400m total) over sometimes steep and uneven terrain. While technical climbing skills aren't necessary, stamina and determination are essential. We maintain a steady pace with regular breaks, and your guide carries safety equipment including first aid supplies and communication devices.",
      },
      {
        question: "What should I pack for the expedition?",
        answer:
          "Essential items include: hiking boots (broken in), warm layers (even in summer, temperatures near the summit can drop to near freezing), waterproof jacket, hat, gloves, sunscreen, personal medications, headlamp, and 2-3 liters of water capacity. A detailed packing list will be provided upon booking.",
      },
      {
        question: "Is altitude sickness a concern?",
        answer:
          "While Fansipan is not high enough to cause severe altitude issues for most people, some may experience mild symptoms above 2,500m. Our itinerary includes proper acclimatization time, and guides are trained to recognize and address altitude-related problems.",
      },
    ],
  },
  {
    title: "Sapa Photography: Misty Mountains & Cultural Portraits",
    description:
      "Capture the ethereal beauty of Sapa's landscapes and the vibrant cultures of its ethnic minorities with guidance from a professional photographer. This tour is timed for optimal lighting conditions and provides unique access to photogenic locations and cultural experiences.",
    city: "Sapa",
    country: "Vietnam",
    region: "Lào Cai",
    images: [
      "/images/tours/sapa/misty-mountains.jpg",
      "/images/tours/sapa/ethnic-portraits.jpg",
    ],
    duration: "10 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Photography", "Landscape", "Portraits"],

    meetingPoint: {
      address: "Sapa Photo Gallery, 45 Cầu Mây Street, Sapa Town",
      coordinates: {
        latitude: 22.3321,
        longitude: 103.8419,
      },
      instructions:
        "Meet at the gallery at 4:30 AM for sunrise photography. Look for the sign with a camera logo.",
      contactNumber: "+84 214 655 7890",
      contactEmail: "info@sapaphototours.com",
    },
    highlights: [
      "Photograph Sapa's iconic rice terraces during golden hour light",
      "Capture authentic portraits of ethnic minority people in traditional dress",
      "Visit remote villages with special photo opportunities not available to regular tourists",
      "Receive professional guidance on camera settings, composition, and cultural sensitivity",
    ],
    inclusions: [
      "Professional photographer guide",
      "Private transportation to remote photo locations",
      "Permission arrangements for portrait photography",
      "Small tokens for portrait subjects",
      "Breakfast and lunch at local spots",
      "Photo review session with editing tips",
    ],
    exclusions: [
      "Camera equipment (bring your own)",
      "Gratuities for portrait subjects",
      "Optional drone permits",
      "Professional photo editing",
      "Printed photographs",
    ],
    itinerary: [
      "4:30 AM - Meet at gallery, equipment check and briefing",
      "5:00 AM - Depart for sunrise location in valleys",
      "5:30 AM - Landscape photography at prime sunrise spots",
      "7:30 AM - Local breakfast and photo review",
      "9:00 AM - Visit H'mong village for cultural photography",
      "11:30 AM - Lunch in traditional home",
      "1:00 PM - Red Dao village portrait session",
      "3:00 PM - Rice terrace photography with farmers",
      "5:00 PM - Golden hour shots at valley viewpoint",
      "7:00 PM - Return to Sapa, photo review and feedback",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. Alternative date offered if poor weather conditions affect photography opportunities.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer:
          "For landscape photography, a wide-angle lens (16-35mm equivalent) is ideal for capturing the vast rice terraces, while a medium telephoto (70-200mm equivalent) works well for portraits and details. A sturdy tripod is recommended for low-light conditions in the early morning mist. That said, photographers of all levels from smartphone users to professionals will benefit from this tour as our guide focuses on composition, timing, and cultural sensitivity when photographing local people.",
      },
      {
        question: "Is it ethical to photograph the local people?",
        answer:
          "Our tour emphasizes responsible photography. We have established relationships with local communities and individuals who have agreed to be photographed. Your guide will teach you culturally appropriate ways to interact and request permission. A portion of your tour fee goes directly to the communities we photograph.",
      },
      {
        question: "What if the weather is foggy or rainy?",
        answer:
          "Mist and fog can actually create atmospheric conditions that are ideal for moody landscape photography in Sapa. In case of heavy rain, we adapt the itinerary to focus more on cultural indoor photography or can reschedule for another day if your travel plans allow.",
      },
    ],
  },
  {
    title: "Red Dao Herbal Bath & Traditional Medicine",
    description:
      "Experience the healing traditions of the Red Dao ethnic group, famous throughout Vietnam for their medicinal knowledge. Learn about forest herbs, participate in gathering plants, and enjoy a therapeutic herbal bath prepared using centuries-old recipes known for their restorative properties.",
    city: "Ta Phin",
    country: "Vietnam",
    region: "Lào Cai",
    images: [
      "/images/tours/sapa/herbal-bath.jpg",
      "/images/tours/sapa/red-dao-healer.jpg",
    ],
    duration: "6 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Wellness", "Traditional Medicine", "Cultural"],

    meetingPoint: {
      address: "Ta Phin Village Entrance, 12km from Sapa Town",
      coordinates: {
        latitude: 22.3956,
        longitude: 103.8421,
      },
      instructions:
        "Meet at Ta Phin village entrance or arrange pickup from your Sapa accommodation (additional $5).",
      contactNumber: "+84 214 633 4455",
      contactEmail: "redherbalhealing@gmail.com",
    },
    highlights: [
      "Learn about traditional Red Dao medicinal herbs with a village healer",
      "Participate in gathering herbs from forest gardens",
      "Experience an authentic herbal bath ritual in wooden tubs",
      "Discover ancient healing techniques passed down through generations",
    ],
    inclusions: [
      "Transfer from Sapa town (if option selected)",
      "English-speaking Red Dao guide",
      "Forest herb gathering experience",
      "Private herbal bath session (60 minutes)",
      "Traditional Red Dao tea ceremony",
      "Herbal sachet souvenir",
    ],
    exclusions: [
      "Gratuities",
      "Additional spa treatments",
      "Lunch (available for purchase in village)",
      "Professional photos (available for purchase)",
    ],
    itinerary: [
      "9:00 AM - Pickup from Sapa (if selected) or meet at Ta Phin",
      "9:30 AM - Welcome ceremony and introduction to Red Dao medicine",
      "10:00 AM - Guided herb gathering walk with local healer",
      "11:30 AM - Demonstration of herb preparation techniques",
      "12:30 PM - Lunch break in village home (optional)",
      "2:00 PM - Herbal bath preparation and ritual explanation",
      "2:30 PM - Private herbal bath experience",
      "3:30 PM - Tea ceremony and discussion of herbal properties",
      "4:30 PM - Return to Sapa town",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours in advance. 50% refund if canceled 12-24 hours in advance. No refund for cancellations less than 12 hours before scheduled time.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "What are the health benefits of the herbal bath?",
        answer:
          "Red Dao herbal baths use a proprietary blend of up to 10-12 forest plants and herbs known for their medicinal properties. These baths are traditionally used to relieve muscle pain, improve circulation, reduce stress, and treat skin conditions. While we don't make specific medical claims, many visitors report feeling deeply relaxed and refreshed after the experience. The herbs used vary seasonally and are freshly harvested from the surrounding mountains by Red Dao healers who have preserved this knowledge through generations.",
      },
      {
        question: "What should I bring or wear?",
        answer:
          "Bring your swimwear for the herbal bath and a change of clothes. The experience is modest and private, with separate bathing areas for men and women. Comfortable walking shoes are recommended for the herb gathering portion of the tour.",
      },
      {
        question: "Are there any health considerations I should be aware of?",
        answer:
          "If you have sensitive skin, allergies, or are pregnant, please notify us in advance. The Red Dao healers can adjust the herbal mixture accordingly. Those with serious medical conditions should consult their physician before participating in the herbal bath.",
      },
    ],
  },
];

export default sapaTours;
