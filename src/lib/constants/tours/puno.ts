import { Tour } from "@/lib/interfaces/services/tours";

export const punoTours: Tour[] = [
  {
    title: "Uros Floating Islands & Taquile Cultural Experience",
    description:
      "Journey across the world's highest navigable lake to visit the unique floating reed islands of Uros and the UNESCO-recognized textile community of Taquile Island. Learn ancient techniques for reed island construction and witness master weavers creating textiles designated as Masterpieces of Intangible Cultural Heritage.",
    images: [
      "/images/tours/lake-titicaca/uros-islands.jpg",
      "/images/tours/lake-titicaca/taquile-textiles.jpg",
    ],
    duration: "Full day",
    price: "$95",
    rating: 4.8,
    tags: ["Cultural", "Indigenous", "UNESCO"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How do people build and maintain floating islands?",
        answer:
          "The Uros people construct their islands entirely from totora reeds that grow in the shallows of Lake Titicaca. They stack multiple layers of cut reed blocks to create a floating foundation, then add loose reeds on top to form the island surface. As the bottom layers decompose (every 3 months), new layers are continuously added on top. A typical island lasts about 30 years with proper maintenance. During your visit, community members demonstrate the reed-cutting and island-building process, and you'll learn how these ingenious floating communities have sustained their unique way of life for centuries.",
      },
      {
        question: "What is the significance of Taquile textiles?",
        answer:
          "Taquile textiles are renowned for their intricate designs and high-quality craftsmanship, representing centuries of Andean weaving traditions. The island's weavers use natural dyes and traditional techniques passed down through generations. In 2005, UNESCO recognized Taquile textiles as a Masterpiece of the Oral and Intangible Heritage of Humanity. During your visit, you'll have the opportunity to see weavers at work, learn about the symbolism in their patterns, and purchase authentic textiles directly from the artisans.",
      },
      {
        question: "What should I wear for the tour?",
        answer:
          "Dress in layers, as temperatures can vary significantly throughout the day. Comfortable walking shoes are recommended for exploring Taquile Island's trails. A hat, sunglasses, and sunscreen are advisable due to the high altitude and strong sun exposure. The boat ride can be windy, so a light jacket or windbreaker is also a good idea. We provide life jackets for all participants during the boat ride.",
      },
      {
        question: "Are there restroom facilities on the islands?",
        answer:
          "Yes, both Uros and Taquile Islands have basic restroom facilities. On Uros, restrooms are located on the main island where you will spend most of your time. On Taquile, restrooms are available in the community center where you will have lunch. Please note that facilities may be basic and not comparable to urban standards, so we recommend bringing hand sanitizer and tissues.",
      },
      {
        question: "What is the best time of year to visit Lake Titicaca?",
        answer:
          "The best time to visit Lake Titicaca is during the dry season from May to October, when the weather is generally sunny and dry with clear skies. However, the lake can be visited year-round, and each season offers unique experiences. The rainy season (November to April) brings lush landscapes and fewer tourists, but expect occasional rain showers and cooler temperatures.",
      },
    ],
  },
  {
    title: "Sacred Temples of the Sun & Moon",
    description:
      "Explore the ancient pre-Inca ceremonial sites on the Islands of the Sun and Moon, birthplace of Andean civilization according to mythology. Visit the Pilkokaina Temple, Sacred Rock, and Iñak Uyu temple with an expert in Andean spirituality and archaeology.",
    images: [
      "/images/tours/lake-titicaca/isla-del-sol.jpg",
      "/images/tours/lake-titicaca/inca-stairs.jpg",
    ],
    duration: "Full day",
    price: "$110",
    rating: 4.7,
    tags: ["Archaeological", "Spiritual", "Hiking"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How physically demanding is this tour?",
        answer:
          "This tour involves moderate hiking at high altitude (12,500+ feet), including ancient Inca stone stairs and uneven terrain. The main hike on Isla del Sol takes approximately 3-4 hours and includes significant elevation gain. Visitors should be in reasonably good physical condition and take time to acclimatize to the altitude before the tour. The spectacular views and archaeological significance make the effort worthwhile, and we maintain a comfortable pace with plenty of breaks.",
      },
      {
        question: "What should I bring for the hike?",
        answer:
          "Dress in layers suitable for changing weather conditions, as temperatures can vary widely. Sturdy hiking shoes are essential, and we recommend bringing a hat, sunglasses, sunscreen, and a reusable water bottle. A small backpack for personal items is also advisable. We provide a packed lunch and snacks, but feel free to bring additional food or drinks if desired.",
      },
      {
        question: "Are there restroom facilities on the islands?",
        answer:
          "Yes, basic restroom facilities are available at key sites on both islands, including the main visitor center on Isla del Sol. However, they may be rustic and not comparable to urban standards. We recommend bringing hand sanitizer and tissues for convenience.",
      },
    ],
  },
  {
    title: "Lake Titicaca Luxury Catamaran Cruise",
    description:
      "Cruise the sapphire waters of Lake Titicaca aboard a luxury catamaran with gourmet dining and premium service. Visit the major islands with private guides while enjoying the comfort of a high-end vessel equipped with panoramic viewing decks.",
    images: [
      "/images/tours/lake-titicaca/luxury-catamaran.jpg",
      "/images/tours/lake-titicaca/gourmet-dining.jpg",
    ],
    duration: "Full day",
    price: "$275",
    rating: 4.9,
    tags: ["Luxury", "Cruise", "Islands"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What amenities are available on the catamaran?",
        answer:
          "Our luxury catamaran features indoor and outdoor viewing areas, climate-controlled cabins, gourmet dining facilities, comfortable seating, premium bathrooms, and a fully-stocked bar. The vessel is equipped with state-of-the-art navigation and safety equipment. A four-course lunch featuring high-altitude Andean cuisine with international influences is served onboard, accompanied by fine South American wines and altitude-friendly cocktails. The catamaran provides a smooth, stable cruising experience even on windy days when traditional boats might experience rough conditions.",
      },
      {
        question: "How many people can the catamaran accommodate?",
        answer:
          "The luxury catamaran comfortably accommodates up to 30 guests, ensuring an intimate and personalized experience. We maintain a high staff-to-guest ratio to provide attentive service throughout the cruise. Private charters for larger groups are also available upon request.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the luxury catamaran cruise is family-friendly and suitable for children of all ages. The spacious decks and comfortable seating areas allow families to relax and enjoy the stunning views together. We can provide child-friendly meal options upon request.",
      },
    ],
  },
  {
    title: "Totora Reed Boat Building Workshop",
    description:
      "Learn the ancient art of reed boat construction from master Uros craftsmen. Participate in harvesting, drying, and bundling totora reeds, then help construct a traditional vessel following techniques unchanged for thousands of years.",
    images: [
      "/images/tours/lake-titicaca/reed-boat-building.jpg",
      "/images/tours/lake-titicaca/reed-boat-sailing.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Crafts", "Cultural", "Hands-on"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we get to sail in the boat we help build?",
        answer:
          "Yes! The workshop culminates with launching and sailing in a traditional reed boat. While the full construction process typically takes weeks, you'll participate in key stages of construction of a small boat, and then complete your experience by sailing in a finished vessel. You'll also receive a miniature reed boat crafted by the Uros artisans as a memento of your experience. The workshop directly supports the preservation of this ancient craft, which is increasingly being lost as younger generations leave the islands.",
      },
      {
        question: "What should I wear for the workshop?",
        answer:
          "Dress in comfortable, weather-appropriate clothing that you don't mind getting a bit dirty. Closed-toe shoes are recommended, as you'll be working with natural materials and may be on uneven terrain. A hat and sunscreen are advisable, especially if the sun is strong. We provide gloves and tools for the workshop.",
      },
    ],
  },
  {
    title: "Lake Titicaca Sunrise Photography Expedition",
    description:
      "Capture the magical light of sunrise over Lake Titicaca and the distant Bolivian Andes with guidance from a professional photographer. Visit prime locations for shooting the islands, traditional boats, and lake activities in optimal morning conditions.",
    images: [
      "/images/tours/lake-titicaca/sunrise-photography.jpg",
      "/images/tours/lake-titicaca/golden-hour-islands.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.7,
    tags: ["Photography", "Sunrise", "Landscapes"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer:
          "For best results, we recommend bringing a DSLR or mirrorless camera with wide-angle lens (16-35mm or similar) for landscapes and a medium zoom (24-70mm) for details and portraits. A tripod is essential for low-light sunrise shots. Filters (polarizing and graduated ND) are useful but not required. That said, photographers of all levels are welcome, including smartphone photographers—our guide provides tips specific to your equipment. The dramatic light and reflections of Lake Titicaca create spectacular photo opportunities regardless of your gear.",
      },
      {
        question: "What time does the sunrise photography tour start?",
        answer:
          "The tour begins approximately 1 hour before sunrise to ensure we arrive at the best vantage points in time for the golden hour. Exact start times vary by season, so we will provide details upon booking. Participants should be prepared for an early start, but the breathtaking views and peaceful atmosphere make it well worth it.",
      },
      {
        question: "Is this tour suitable for beginners?",
        answer:
          "Yes! The sunrise photography expedition is designed for photographers of all skill levels, from beginners to advanced. Our guide provides personalized instruction and tips based on your experience level, helping you improve your skills while capturing stunning images. Whether you're using a professional camera or a smartphone, you'll leave with beautiful photos and new techniques.",
      },
    ],
  },
  {
    title: "Andean Spirituality & Nature Retreat",
    description:
      "Reconnect with nature and Andean spirituality on a multi-day retreat featuring guided meditations, traditional ceremonies, and hikes to sacred sites. Experience the healing power of the lake and mountains while learning about Pachamama (Mother Earth) and Andean cosmology.",
    images: [
      "/images/tours/lake-titicaca/spiritual-retreat.jpg",
      "/images/tours/lake-titicaca/pachamama-ceremony.jpg",
    ],
    duration: "3 days",
    price: "$350",
    rating: 4.9,
    tags: ["Spiritual", "Nature", "Retreat"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "spiritual",
    faqs: [
      {
        question: "What should I bring for the retreat?",
        answer:
          "Participants should bring comfortable clothing suitable for both warm days and cool nights, sturdy hiking shoes, a reusable water bottle, sunscreen, a hat, and personal toiletries. We provide all meals, accommodations, and spiritual materials. If you have a personal journal or items for offerings (flowers, herbs), feel free to bring them. The retreat is designed to be a digital detox, so we encourage leaving devices behind or using them minimally to fully immerse in the experience.",
      },
      {
        question: "Is this retreat suitable for beginners?",
        answer:
          "Absolutely! This retreat is designed for all levels of experience with Andean spirituality and nature practices. Our guide provides gentle introductions to meditation, ceremony, and hiking, making it accessible even for those new to these traditions. The focus is on personal connection with nature and self-discovery, so everyone can participate at their own pace.",
      },
      {
        question: "Are there any physical requirements?",
        answer:
          "The retreat includes moderate hiking and physical activities, but we maintain a relaxed pace suitable for most fitness levels. Participants should be able to walk 2-3 miles per day on uneven terrain at high altitude (12,500+ feet). If you have specific health concerns, please consult with us in advance so we can accommodate your needs.",
      },
      {
        question: "What is the group size for the retreat?",
        answer:
          "To ensure a personalized experience, we limit the retreat to 10 participants. This allows for meaningful interactions, individual attention, and a supportive community atmosphere. Early booking is recommended as spaces fill quickly.",
      },
    ],
  },
  {
    title: "Titicaca Wildlife & Birdwatching Tour",
    description:
      "Explore the unique wildlife of Lake Titicaca, including endemic bird species and aquatic life. Visit the floating reed islands and surrounding wetlands with an expert naturalist guide to learn about the lake's biodiversity and conservation efforts.",
    images: [
      "/images/tours/lake-titicaca/birdwatching.jpg",
      "/images/tours/lake-titicaca/wildlife.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.6,
    tags: ["Birdwatching", "Nature"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "What wildlife can we expect to see?",
        answer:
          "Lake Titicaca is home to over 200 bird species, including the endemic Titicaca Grebe, Andean Flamingos, and various waterfowl. You may also spot unique aquatic life like the giant Titicaca water frog and endemic fish species. Our guide will help you identify birds and explain their behaviors and habitats. The wetlands and reed islands provide excellent opportunities for photography and observation, especially during migration seasons.",
      },
      {
        question: "Do I need special equipment for birdwatching?",
        answer:
          "While binoculars are highly recommended for birdwatching, we provide high-quality binoculars for all participants. A camera with a zoom lens is also useful for capturing wildlife photos. Dress in layers and bring a hat and sunscreen, as the sun can be strong even at high altitudes. The tour is suitable for both beginner and experienced birdwatchers, with our guide providing insights tailored to your level of expertise.",
      },
    ],
  },
  {
    title: "Titicaca Culinary Journey",
    description:
      "Discover the flavors of Lake Titicaca with a culinary tour featuring traditional Andean dishes, local ingredients, and cooking classes. Visit local markets, learn about indigenous food practices, and enjoy a multi-course meal prepared with your own hands.",
    images: [
      "/images/tours/lake-titicaca/culinary-journey.jpg",
      "/images/tours/lake-titicaca/andean-cuisine.jpg",
    ],
    duration: "5 hours",
    price: "$90",
    rating: 4.8,
    tags: ["Culinary", "Cooking Class", "Local Cuisine"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to prepare?",
        answer:
          "Participants will learn to prepare traditional Andean dishes such as quinoa soup, stuffed peppers (rocoto relleno), and lake trout with local herbs. The class includes a visit to a local market to select fresh ingredients, followed by hands-on cooking instruction. Vegetarian and vegan options are available upon request. The experience concludes with a communal meal where you can savor the dishes you've created.",
      },
      {
        question: "Is this suitable for all cooking skill levels?",
        answer:
          "Yes! The culinary journey is designed for all skill levels, from beginners to experienced cooks. Chef Maria provides step-by-step instructions and adaptations for dietary preferences, ensuring everyone can participate and enjoy the experience. The focus is on learning about Andean culinary traditions while having fun in the kitchen.",
      },
      {
        question: "Do we need to bring any cooking equipment?",
        answer:
          "No special equipment is required. All necessary cooking tools and ingredients are provided. Just bring your enthusiasm for cooking and a willingness to learn! Comfortable clothing and closed-toe shoes are recommended, as we will be working in a kitchen environment.",
      },
    ],
  },
];
