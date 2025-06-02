import { Tour } from "@/lib/interfaces/services/tours";

export const udaipurTours: Tour[] = [
  {
    title: "Royal City Palace & Lake Pichola Sunset Cruise",
    description:
      "Experience the grandeur of Udaipur with a guided tour of the magnificent City Palace followed by a romantic sunset boat cruise on Lake Pichola.",
    city: "Udaipur",
    country: "India",
    region: "Rajasthan",
    images: [
      "/images/tours/udaipur/city-palace.jpg",
      "/images/tours/udaipur/lake-pichola-sunset.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Royal", "Historical", "Sunset"],
    meetingPoint: {
      address: "City Palace Main Gate, City Palace Road, Udaipur 313001",
      coordinates: {
        latitude: 24.5764,
        longitude: 73.6835,
      },
      instructions:
        "Meet at the main entrance gate of City Palace. Your guide will be holding a sign with 'Royal Udaipur Tours' written on it.",
      contactNumber: "+91 294 241 1535",
      contactEmail: "bookings@royaludaipurtours.com",
    },
    highlights: [
      "Guided tour of the opulent City Palace with its intricate marble work and peacock mosaics",
      "Visit the Crystal Gallery, housing the world's largest private crystal collection",
      "Exclusive sunset boat cruise on Lake Pichola",
      "Views of Lake Palace and Jag Mandir islands during golden hour",
    ],
    inclusions: [
      "Professional English-speaking guide",
      "Skip-the-line entry to City Palace and museums",
      "Private boat ride on Lake Pichola",
      "Bottled water",
      "Hotel pickup and drop-off (central Udaipur hotels only)",
    ],
    exclusions: [
      "Food and additional beverages",
      "Camera fees at certain attractions",
      "Gratuities",
      "Optional activities outside the itinerary",
    ],
    itinerary: [
      "3:00 PM - Hotel pickup or meet at City Palace entrance",
      "3:15 PM - Begin guided tour of City Palace complex",
      "4:30 PM - Visit the Crystal Gallery and royal apartments",
      "5:00 PM - Walk to the royal boat dock",
      "5:30 PM - Board private boat for Lake Pichola cruise",
      "6:00 PM - Witness sunset over the Aravalli Hills while cruising",
      "6:45 PM - Return to dock and transfer back to hotel",
      "7:00 PM - Tour conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What should I wear for this tour?",
        answer:
          "Modest clothing is recommended for visiting palaces and temples. Shoulders and knees should be covered. Comfortable walking shoes are advised as there are many steps in the City Palace.",
      },
      {
        question: "Is photography allowed inside the City Palace?",
        answer:
          "Photography is allowed in most areas of the City Palace, but there may be a camera fee for certain sections. Photography is not permitted inside the Crystal Gallery. Your guide will advise on specific restrictions.",
      },
      {
        question: "What happens if it rains during the boat ride?",
        answer:
          "In case of light rain, the boat ride typically proceeds as the boats have canopy covers. For heavy rain or unsafe weather conditions, the boat portion may be rescheduled or refunded. The palace tour would still take place as it's mostly indoors.",
      },
    ],
  },
  {
    title: "Rural Village Safari & Artisan Workshop Experience",
    description:
      "Travel beyond Udaipur to authentic rural villages, meeting local artisans who practice traditional crafts like pottery, textile printing, and miniature painting in their home workshops.",
    city: "Udaipur",
    country: "India",
    region: "Rajasthan",
    images: [
      "/images/tours/udaipur/village-life.jpg",
      "/images/tours/udaipur/artisan-workshop.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Village", "Artisan", "Cultural"],
    meetingPoint: {
      address: "Jagdish Temple, Jagdish Chowk, Udaipur 313001",
      coordinates: {
        latitude: 24.5797,
        longitude: 73.6838,
      },
      instructions:
        "Meet in front of the Jagdish Temple steps. Your guide will be in traditional Rajasthani attire with a 'Village Connections' badge.",
      contactNumber: "+91 294 245 6789",
      contactEmail: "info@udaipurvillagesafaris.com",
    },
    highlights: [
      "Visit 3-4 authentic villages outside the tourist track",
      "Meet artisans in their home workshops and learn about traditional techniques",
      "Participate in hands-on craft activities like pottery or block printing",
      "Experience rural Rajasthani life and traditional farming practices",
    ],
    inclusions: [
      "Transportation by jeep or minivan with driver",
      "Local guide with knowledge of village traditions",
      "Hands-on craft workshop experience",
      "Traditional Rajasthani lunch in a village home",
      "Bottled water and refreshments",
      "Small souvenir crafted by you during workshop",
    ],
    exclusions: [
      "Additional crafts or artworks (available for purchase directly from artisans)",
      "Hotel pickup and drop-off (available for additional fee)",
      "Gratuities",
      "Professional photography (available for additional fee)",
    ],
    itinerary: [
      "9:00 AM - Meet at Jagdish Temple or hotel pickup",
      "9:30 AM - Scenic drive to first village with orientation about rural life",
      "10:00 AM - Visit with pottery artisan family and hands-on pottery experience",
      "11:30 AM - Drive to second village to meet textile block printers",
      "12:30 PM - Traditional home-cooked Rajasthani lunch with local family",
      "1:30 PM - Visit with miniature painters and demonstration",
      "2:30 PM - Stop at rural school or community center (when in session)",
      "3:30 PM - Return journey to Udaipur with reflections on village life",
      "4:00 PM - Arrive back in Udaipur city center",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the tour.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
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
        question: "Is this tour responsible tourism?",
        answer:
          "Yes, this tour follows ethical tourism principles. We have long-standing relationships with the villages and artisans we visit. A portion of your tour price goes directly to support community development projects in the villages, and we encourage fair payment for any crafts purchased directly from artisans.",
      },
      {
        question: "Is it appropriate to take photos in the villages?",
        answer:
          "Photography is welcomed in most situations, but your guide will advise when it's appropriate to ask permission first, especially for portraits. Some artisans may request a small donation for photographs of their specialized techniques.",
      },
      {
        question: "What type of food will be served for lunch?",
        answer:
          "You'll enjoy authentic vegetarian Rajasthani home cooking, which typically includes dal (lentils), locally grown vegetables, rice, chapati bread, and traditional dessert. The meal is prepared with fresh ingredients by village families. Please advise in advance of any dietary restrictions.",
      },
    ],
  },
  {
    title: "Udaipur Cooking Class & Market Tour",
    description:
      "Learn to prepare authentic Rajasthani cuisine with a local chef, starting with a guided market tour to select fresh ingredients, followed by a hands-on cooking class in a traditional home kitchen.",
    city: "Udaipur",
    country: "India",
    region: "Rajasthan",
    images: [
      "/images/tours/udaipur/cooking-class.jpg",
      "/images/tours/udaipur/spice-market.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.9,
    tags: ["Cooking", "Food", "Market"],
    meetingPoint: {
      address: "Clock Tower, Delhi Gate, Udaipur 313001",
      coordinates: {
        latitude: 24.5802,
        longitude: 73.6903,
      },
      instructions:
        "Meet under the Clock Tower near Delhi Gate. Your host will be wearing a red scarf and carrying a shopping basket.",
      contactNumber: "+91 294 243 8901",
      contactEmail: "cook@udaipurhomecooking.com",
    },
    highlights: [
      "Explore local vegetable and spice markets with expert guidance",
      "Learn about the medicinal and culinary properties of Indian spices",
      "Cook 5-6 traditional Rajasthani dishes in a family home",
      "Receive recipe cards to recreate the dishes at home",
      "Enjoy the meal you've prepared in an authentic home setting",
    ],
    inclusions: [
      "Market tour with local food expert",
      "All ingredients and cooking equipment",
      "Full meal of dishes prepared during class",
      "Recipe cards in English",
      "Masala spice mix to take home",
      "Non-alcoholic beverages during the meal",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Alcoholic beverages",
      "Additional market purchases",
      "Gratuities",
    ],
    itinerary: [
      "9:45 AM - Meet at Clock Tower",
      "10:00 AM - Guided market tour with explanation of ingredients",
      "11:00 AM - Travel to host's home for cooking class",
      "11:15 AM - Introduction to Rajasthani cuisine and preparation techniques",
      "11:30 AM - Begin hands-on cooking of multiple dishes",
      "1:15 PM - Final preparations and setting the table",
      "1:30 PM - Enjoy the meal you've prepared together",
      "2:30 PM - Recipe sharing and conclusion of program",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours in advance. 50% refund if canceled 12-24 hours in advance. No refund for cancellations less than 12 hours before class.",
    isHistorical: false,
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
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Do I need cooking experience to enjoy this class?",
        answer:
          "No prior cooking experience is needed. The class is designed for beginners and those new to Indian cooking. Our host will guide you through each step of the process.",
      },
      {
        question: "What types of dishes will we prepare?",
        answer:
          "The menu typically includes dal (lentils), sabzi (vegetable dish), rice pilaf or biryani, chapati bread, raita (yogurt side), chutney, and a traditional Rajasthani dessert. All dishes are vegetarian, reflecting the predominant local cuisine.",
      },
      {
        question: "Is the class conducted in English?",
        answer:
          "Yes, the class is conducted in English. Our cooking instructors speak fluent English and can answer all your questions about ingredients, techniques, and cultural aspects of the cuisine.",
      },
    ],
  },
  {
    title: "Kumbhalgarh Fort & Ranakpur Jain Temple Day Trip",
    description:
      "Journey into the Aravalli Hills to explore Kumbhalgarh Fort with its massive walls second only to the Great Wall of China, followed by a visit to the exquisite marble Jain temples at Ranakpur.",
    city: "Udaipur",
    country: "India",
    region: "Rajasthan",
    images: [
      "/images/tours/udaipur/kumbhalgarh-fort.jpg",
      "/images/tours/udaipur/ranakpur-temple.jpg",
    ],
    duration: "10 hours",
    price: "$110",
    rating: 4.7,
    tags: ["Fort", "Temple", "Day Trip"],
    meetingPoint: {
      address: "Hotel Udai Median, 4 Residency Road, Udaipur 313001",
      coordinates: {
        latitude: 24.5772,
        longitude: 73.684,
      },
      instructions:
        "Meet in the lobby of Hotel Udai Median. Our driver will be waiting with a sign bearing your name.",
      contactNumber: "+91 294 242 5678",
      contactEmail: "excursions@udaipurtravels.com",
    },
    highlights: [
      "Explore the impressive Kumbhalgarh Fort, a UNESCO World Heritage site",
      "Walk along sections of the massive wall stretching over 36 kilometers",
      "Visit the birthplace of legendary Rajput hero Maharana Pratap",
      "Marvel at the stunning Ranakpur Jain Temple with 1444 intricately carved marble pillars",
      "Travel through the scenic Aravalli mountain landscape",
    ],
    inclusions: [
      "Private air-conditioned vehicle for the day",
      "Professional English-speaking guide",
      "Entrance fees to Kumbhalgarh Fort and Ranakpur Temple",
      "Bottled water and light snacks",
      "Hotel pickup and drop-off within Udaipur city limits",
    ],
    exclusions: [
      "Lunch (available at recommended restaurants en route)",
      "Camera fees at certain attractions",
      "Temple offerings or donations",
      "Gratuities",
      "Alcoholic beverages",
    ],
    itinerary: [
      "8:00 AM - Hotel pickup in Udaipur",
      "9:45 AM - Arrive at Kumbhalgarh Fort",
      "10:00 AM - Guided tour of the fort complex and walls",
      "11:45 AM - Depart for Ranakpur (1-hour drive)",
      "1:00 PM - Lunch break at local restaurant (not included)",
      "2:00 PM - Guided tour of Ranakpur Jain Temple complex",
      "3:30 PM - Begin return journey to Udaipur",
      "5:30 PM - Arrival back at your hotel in Udaipur",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours in advance. 50% refund if canceled 48-72 hours in advance. No refund for cancellations less than 48 hours before the tour.",
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isAdventure: true,
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
        question: "How strenuous is the walking at Kumbhalgarh Fort?",
        answer:
          "The fort has steep pathways and many steps to reach the palace areas at the top. A moderate level of fitness is required, and comfortable walking shoes are essential. The total walking distance within the fort is approximately 2 km with elevation gain.",
      },
      {
        question: "Is there a dress code for visiting Ranakpur Temple?",
        answer:
          "Yes, modest dress is required for the Jain temple. Shoulders and knees must be covered. Leather items (belts, shoes, bags) are not permitted inside the temple as per Jain principles of non-violence. You can store leather items outside or cover them with provided cloth covers.",
      },
      {
        question: "What is the best time of year for this tour?",
        answer:
          "October to March offers the most pleasant weather for exploring these sites. Summer months (April-June) can be extremely hot with temperatures reaching 40°C (104°F), making the climb at Kumbhalgarh challenging. July to September may experience monsoon rains, but the landscape becomes lush and green.",
      },
    ],
  },
];

export default udaipurTours;
