import { Tour } from "@/lib/interfaces/services/tours";

export const portlandTours: Tour[] = [
  {
    title: "Portland Craft Beer Tour",
    description:
      "Discover Portland's renowned craft beer scene with a guided tour of local breweries.",
    city: "Portland",
    country: "United States",
    state: "Oregon",
    region: "Pacific Northwest",
    price: "$85",
    rating: 4.7,
    tourCategoryId: "culinary",
    duration: "5 hours",
    images: ["/images/tours/portland-beer-tour.jpg"],
    highlights: [
      "Visit three local breweries",
      "Sample a variety of craft beers",
      "Learn about the brewing process from experts",
      "Enjoy a light snack at the last brewery",
      "Meet local brewers and hear their stories",
      "Experience the vibrant craft beer culture of Portland",
    ],
    availableDates: [
      "2024-05-07",
      "2024-05-08",
      "2024-05-09",
      "2024-05-10",
      "2024-05-11",
      "2024-05-12",
      "2024-05-13",
      "2024-05-14",
      "2024-05-15",
      "2024-05-16",
      "2024-05-17",
      "2024-05-18",
      "2024-05-19",
      "2024-05-20",
      "2024-05-21",
      "2024-06-01",
      "2024-06-02",
      "2024-06-03",
      "2024-06-04",
      "2024-06-05",
      "2024-06-06",
      "2024-06-07",
      "2024-06-08",
      "2024-06-09",
      "2024-06-10",
      "2024-06-11",
      "2024-06-12",
      "2024-06-13",
      "2024-06-14",
      "2024-06-15",
      "2024-06-16",
    ],
    inclusions: [
      "Guided brewery tour",
      "Beer samples at each brewery",
      "Light snack at the last brewery",
      "Local guide with beer expertise",
      "Transportation between breweries",
      "Brewery merchandise discounts",
    ],
    exclusions: [
      "Transportation to/from the tour",
      "Additional food and drinks",
      "Gratuities for the guide",
      "Personal expenses",
      "Tasting fees at some breweries may apply",
    ],
    itinerary: [
      "9:00 AM - Meet at the first brewery location",
      "9:15 AM - Guided tour of the first brewery, including beer tasting",
      "11:00 AM - Depart for the second brewery",
      "11:15 AM - Guided tour of the second brewery, including beer tasting",
      "1:00 PM - Depart for the third brewery",
      "1:15 PM - Guided tour of the third brewery, including beer tasting and light snack",
      "2:30 PM - End of the tour, optional time to purchase brewery merchandise",
    ],
    meetingPoint: {
      address: "First brewery location, downtown Portland",
      coordinates: {
        latitude: 45.523064,
        longitude: -122.676483,
      },
      instructions: "Meet your guide at the entrance of the first brewery.",
      contactNumber: "555-123-4567",
    },
    cancellationPolicy: "Free cancellation up to 24 hours before the tour.",
    isHistorical: false,
    isRomantic: false,
    isAdventure: true,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    faqs: [
      {
        question: "What should I wear for the brewery tour?",
        answer:
          "We recommend wearing comfortable clothing and closed-toe shoes. Some breweries may have specific dress codes, so check in advance.",
      },
      {
        question: "Are there vegetarian options available?",
        answer:
          "Yes, most breweries offer vegetarian snacks. Please inform us of any dietary restrictions when booking.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "Yes, we recommend booking at least 24 hours in advance to secure your spot on the tour.",
      },
      {
        question: "Is transportation included in the tour?",
        answer:
          "Transportation is not included. We recommend using public transport or rideshare services to reach the first brewery.",
      },
      {
        question: "Can I bring my children on the tour?",
        answer:
          "The brewery tour is designed for adults, but minors are allowed if accompanied by a parent or guardian. Please note that they will not be able to participate in beer tastings.",
      },
      {
        question: "What if I have allergies?",
        answer:
          "Please inform us of any allergies when booking. We will do our best to accommodate your needs, but we cannot guarantee that all breweries can cater to specific allergies.",
      },
      {
        question: "What happens if it rains?",
        answer:
          "The tour will proceed rain or shine. Please dress appropriately for the weather. Some breweries may have indoor areas to enjoy the tastings.",
      },
      {
        question: "Can I purchase beer to take home?",
        answer:
          "Yes, most breweries offer merchandise and beer for purchase. You can buy beer to take home, but please check each brewery's policy on takeout sales.",
      },
      {
        question: "Is there a minimum age for the tour?",
        answer:
          "Yes, participants must be at least 21 years old to join the brewery tour. Please bring a valid ID for age verification.",
      },
      {
        question: "What if I need to cancel my booking?",
        answer:
          "You can cancel your booking for a full refund up to 24 hours before the tour starts. After that, no refunds will be issued.",
      },
      {
        question: "Are pets allowed on the tour?",
        answer:
          "Unfortunately, pets are not allowed on the brewery tour due to health and safety regulations. Service animals are permitted with proper documentation.",
      },
      {
        question: "Can I book a private tour for a group?",
        answer:
          "Yes, we offer private tours for groups. Please contact us directly to discuss availability and pricing for private bookings.",
      },
      {
        question: "What if I have more questions?",
        answer:
          "If you have any additional questions, please feel free to contact us via email or phone. We're here to help!",
      },
    ],
  },
  {
    title: "Portland Food Cart Tour",
    description:
      "Experience Portland's vibrant food cart scene with a guided tour of the city's best food carts.",
    city: "Portland",
    country: "United States",
    state: "Oregon",
    region: "Pacific Northwest",
    price: "$65",
    rating: 4.8,
    tourCategoryId: "culinary",
    duration: "3 hours",
    images: ["/images/tours/portland-food-cart-tour.jpg"],
    highlights: [
      "Sample dishes from five different food carts",
      "Learn about Portland's food culture",
      "Meet local chefs and food cart owners",
    ],
    availableDates: [
      "2024-05-10",
      "2024-05-11",
      "2024-05-12",
      "2024-05-19",
      "2024-05-20",
      "2024-05-21",
      "2024-05-22",
      "2024-05-23",
      "2024-05-24",
      "2024-05-25",
      "2024-05-26",
      "2024-05-27",
      "2024-06-03",
      "2024-06-04",
      "2024-06-05",
      "2024-06-09",
      "2024-06-10",
      "2024-06-11",
      "2024-06-12",
      "2024-06-13",
      "2024-06-14",
      "2024-06-24",
      "2024-06-25",
      "2024-06-26",
      "2024-07-03",
      "2024-07-04",
      "2024-07-05",
      "2024-07-09",
      "2024-07-10",
      "2024-07-11",
      "2024-07-15",
      "2024-07-16",
      "2024-07-17",
    ],
    inclusions: ["Food samples", "Local guide"],
    exclusions: ["Beverages", "Additional food purchases"],
    itinerary: [
      "3:00 PM - Meet at the first food cart location",
      "3:15 PM - Sample dishes from the first food cart",
      "3:45 PM - Walk to the second food cart and sample dishes",
      "4:15 PM - Visit the third food cart for tastings",
      "4:45 PM - Sample dishes from the fourth food cart",
      "5:15 PM - Visit the fifth food cart for final tastings",
      "5:45 PM - End of the tour, optional time to purchase additional food",
      "6:00 PM - Tour concludes",
    ],
    meetingPoint: {
      address: "First food cart location, downtown Portland",
      coordinates: {
        latitude: 45.523064,
        longitude: -122.676483,
      },
      instructions: "Meet your guide at the entrance of the first food cart.",
      contactNumber: "555-123-4567",
    },
    cancellationPolicy: "Free cancellation up to 24 hours before the tour.",
    isHistorical: false,
    isRomantic: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample a variety of dishes from different food carts, including vegetarian and vegan options. The specific carts may vary based on availability.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "Yes, we recommend booking at least 24 hours in advance to secure your spot on the tour.",
      },
      {
        question: "Are there vegetarian options available?",
        answer:
          "Yes, most food carts offer vegetarian and vegan options. Please inform us of any dietary restrictions when booking.",
      },
      {
        question: "Is transportation included in the tour?",
        answer:
          "Transportation is not included. The tour is designed to be walkable, and all food carts are within a short distance of each other.",
      },
      {
        question: "Can I bring my children on the tour?",
        answer:
          "Yes, the food cart tour is family-friendly! Children are welcome, and we can accommodate their tastes and dietary restrictions with advance notice.",
      },
      {
        question: "What if it rains?",
        answer:
          "The tour will proceed rain or shine. Please dress appropriately for the weather, as some food carts may have outdoor seating.",
      },
      {
        question: "Can I purchase food to take home?",
        answer:
          "Yes, you can purchase additional food from the carts to take home. However, please note that the samples provided during the tour are meant for tasting only.",
      },
      {
        question: "Is there a minimum age for the tour?",
        answer:
          "There is no minimum age for the food cart tour. Children are welcome, but they must be accompanied by an adult. Please inform us of any children's dietary needs when booking.",
      },
      {
        question: "What if I need to cancel my booking?",
        answer:
          "You can cancel your booking for a full refund up to 24 hours before the tour starts. After that, no refunds will be issued.",
      },
      {
        question: "Are pets allowed on the tour?",
        answer:
          "Unfortunately, pets are not allowed on the food cart tour due to health and safety regulations. Service animals are permitted with proper documentation.",
      },
      {
        question: "Can I book a private tour for a group?",
        answer:
          "Yes, we offer private tours for groups. Please contact us directly to discuss availability and pricing for private bookings.",
      },
      {
        question: "What if I have more questions?",
        answer:
          "If you have any additional questions, please feel free to contact us via email or phone. We're here to help!",
      },
    ],
  },
  {
    title: "Portland City Highlights Tour",
    description:
      "Explore the iconic landmarks and hidden gems of Portland on a guided city tour.",
    city: "Portland",
    country: "United States",
    state: "Oregon",
    region: "Pacific Northwest",
    price: "$50",
    rating: 4.5,
    tourCategoryId: "cultural",
    duration: "4 hours",
    images: ["/images/tours/portland-city-tour.jpg"],
    highlights: [
      "Visit Washington Park and the International Rose Test Garden",
      "See the famous Powell's City of Books",
      "Explore the Pearl District and its art galleries",
      "Discover the history of the Portland Japanese Garden",
    ],
    availableDates: [
      "2024-05-13",
      "2024-05-14",
      "2024-05-15",
      "2024-05-16",
      "2024-05-17",
      "2024-05-18",
      "2024-05-19",
      "2024-05-20",
      "2024-05-21",
      "2024-05-22",
      "2024-05-23",
      "2024-05-24",
      "2024-05-25",
      "2024-05-26",
      "2024-05-27",
      "2024-06-01",
      "2024-06-02",
      "2024-06-03",
      "2024-06-04",
      "2024-06-05",
    ],
    inclusions: ["Local guide", "Entrance fees to gardens"],
    exclusions: ["Transportation to/from the tour", "Food and beverages"],
    itinerary: [
      "2:00 PM - Meet at the starting point in downtown Portland",
      "2:15 PM - Visit Washington Park and the International Rose Test Garden",
      "3:00 PM - Explore Powell's City of Books",
      "3:30 PM - Walk through the Pearl District and visit art galleries",
      "4:15 PM - Discover the Portland Japanese Garden",
      "5:00 PM - End of the tour, optional time to explore the area",
      "6:00 PM - Tour concludes",
    ],
    meetingPoint: {
      address: "Downtown Portland, near Pioneer Courthouse Square",
      coordinates: {
        latitude: 45.523064,
        longitude: -122.676483,
      },
      instructions:
        "Meet your guide at the entrance of Pioneer Courthouse Square.",
      contactNumber: "555-123-4567",
    },
    cancellationPolicy: "Free cancellation up to 24 hours before the tour.",
    isHistorical: true,
    isRomantic: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    faqs: [
      {
        question: "What should I wear for the city tour?",
        answer:
          "We recommend wearing comfortable clothing and walking shoes, as the tour involves a fair amount of walking. Dress in layers, as Portland's weather can change quickly.",
      },
      {
        question: "Are there any age restrictions for the tour?",
        answer:
          "There are no age restrictions for the city highlights tour. It is suitable for all ages, and children are welcome when accompanied by an adult.",
      },
      {
        question: "Is transportation included in the tour?",
        answer:
          "Transportation is not included. The tour is designed to be walkable, and all locations are within a reasonable distance from each other in downtown Portland.",
      },
      {
        question: "Can I bring my children on the tour?",
        answer:
          "Yes, the city highlights tour is family-friendly! Children are welcome, and we can accommodate their needs with advance notice. Please inform us of any specific requirements when booking.",
      },
      {
        question: "What if it rains?",
        answer:
          "The tour will proceed rain or shine. Please dress appropriately for the weather, as we will be outdoors for a significant portion of the tour. An umbrella or rain jacket is recommended.",
      },
      {
        question: "Is there a minimum age for the tour?",
        answer:
          "There is no minimum age for the city highlights tour. Children are welcome, but they must be accompanied by an adult. Please inform us of any children's needs when booking.",
      },
      {
        question: "What if I need to cancel my booking?",
        answer:
          "You can cancel your booking for a full refund up to 24 hours before the tour starts. After that, no refunds will be issued.",
      },
      {
        question: "Are pets allowed on the tour?",
        answer:
          "Unfortunately, pets are not allowed on the city highlights tour due to health and safety regulations. Service animals are permitted with proper documentation.",
      },
      {
        question: "Can I book a private tour for a group?",
        answer:
          "Yes, we offer private tours for groups. Please contact us directly to discuss availability and pricing for private bookings.",
      },
      {
        question: "What if I have more questions?",
        answer:
          "If you have any additional questions, please feel free to contact us via email or phone. We're here to help!",
      },
    ],
  },
  {
    title: "Portland Nature Walk",
    description:
      "Experience the natural beauty of Portland with a guided walk through its scenic parks and trails.",
    city: "Portland",
    country: "United States",
    state: "Oregon",
    region: "Pacific Northwest",
    price: "$40",
    rating: 4.6,
    tourCategoryId: "nature",
    duration: "2 hours",
    images: ["/images/tours/portland-nature-walk.jpg"],
    highlights: [
      "Explore Forest Park's lush trails",
      "Learn about local flora and fauna",
      "Enjoy stunning views of the city and mountains",
    ],
    availableDates: [
      "2024-05-16",
      "2024-05-17",
      "2024-05-18",
      "2024-05-19",
      "2024-05-20",
      "2024-05-21",
      "2024-05-22",
      "2024-05-23",
      "2024-05-24",
      "2024-05-25",
      "2024-05-26",
      "2024-05-27",
      "2024-05-28",
      "2024-05-29",
      "2024-05-30",
      "2024-06-01",
      "2024-06-02",
      "2024-06-03",
      "2024-06-04",
      "2024-06-05",
    ],
    inclusions: ["Local guide", "Nature guidebook"],
    exclusions: ["Transportation to/from the tour", "Food and beverages"],
    itinerary: [
      "9:00 AM - Meet at the main entrance of Forest Park",
      "9:15 AM - Begin the nature walk through scenic trails",
      "10:00 AM - Stop at viewpoints for photos and explanations",
      "10:30 AM - Continue the walk, learning about local plants and wildlife",
      "11:00 AM - End of the tour, optional time to explore more trails",
    ],
    meetingPoint: {
      address: "Forest Park, main entrance on NW Thurman St.",
      coordinates: {
        latitude: 45.5469,
        longitude: -122.7161,
      },
      instructions: "Meet your guide at the main entrance of Forest Park.",
      contactNumber: "555-123-4567",
    },
    cancellationPolicy: "Free cancellation up to 24 hours before the tour.",
    isHistorical: false,
    isRomantic: false,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    faqs: [
      {
        question: "What should I wear for the nature walk?",
        answer:
          "We recommend wearing comfortable clothing suitable for walking, sturdy shoes, and dressing in layers. Bring a water bottle and sunscreen if needed.",
      },
      {
        question: "Are there any age restrictions for the tour?",
        answer:
          "There are no age restrictions for the nature walk. It is suitable for all ages, but children must be accompanied by an adult.",
      },
      {
        question: "Is transportation included in the tour?",
        answer:
          "Transportation is not included. The tour starts at Forest Park, which can be reached by public transport or car. Parking may be available nearby.",
      },
      {
        question: "Can I bring my children on the tour?",
        answer:
          "Yes, the nature walk is family-friendly! Children are welcome, and we can accommodate their needs with advance notice. Please inform us of any specific requirements when booking.",
      },
      {
        question: "What if it rains?",
        answer:
          "The tour will proceed rain or shine. Please dress appropriately for the weather, as we will be outdoors for the entire duration of the walk. A rain jacket or umbrella is recommended.",
      },
      {
        question: "Is there a minimum age for the tour?",
        answer:
          "There is no minimum age for the nature walk. Children are welcome, but they must be accompanied by an adult. Please inform us of any children's needs when booking.",
      },
      {
        question: "What if I need to cancel my booking?",
        answer:
          "You can cancel your booking for a full refund up to 24 hours before the tour starts. After that, no refunds will be issued.",
      },
    ],
  },
  {
    title: "Portland Art Walk",
    description:
      "Discover Portland's vibrant art scene with a guided walk through its galleries and public art installations.",
    city: "Portland",
    country: "United States",
    state: "Oregon",
    region: "Pacific Northwest",
    price: "$55",
    rating: 4.9,
    tourCategoryId: "art-and-music",
    duration: "3 hours",
    images: ["/images/tours/portland-art-walk.jpg"],
    highlights: [
      "Visit local art galleries and studios",
      "Learn about Portland's art history",
      "See public art installations around the city",
    ],
    availableDates: [
      "2024-05-19",
      "2024-05-20",
      "2024-05-21",
      "2024-05-22",
      "2024-05-23",
      "2024-05-24",
      "2024-05-25",
      "2024-05-26",
      "2024-05-27",
      "2024-05-28",
      "2024-05-29",
      "2024-05-30",
      "2024-05-31",
      "2024-06-01",
      "2024-06-02",
      "2024-06-03",
      "2024-06-04",
      "2024-06-05",
      "2024-06-06",
      "2024-06-07",
      "2024-06-08",
      "2024-06-09",
      "2024-06-10",
      "2024-06-11",
      "2024-06-12",
      "2024-06-13",
      "2024-06-14",
      "2024-06-15",
    ],
    inclusions: ["Local guide", "Art guidebook"],
    exclusions: ["Transportation to/from the tour", "Food and beverages"],
    itinerary: [
      "2:00 PM - Meet at the first gallery location in the Pearl District",
      "2:15 PM - Guided tour of the first gallery, including artist talks",
      "3:00 PM - Walk to the second gallery and explore contemporary art",
      "3:45 PM - Visit public art installations around the city",
      "4:30 PM - End of the tour, optional time to visit more galleries",
      "5:00 PM - Tour concludes",
    ],
    meetingPoint: {
      address: "Pearl District, Portland",
      coordinates: {
        latitude: 45.5291,
        longitude: -122.6819,
      },
      instructions: "Meet your guide at the entrance of the first gallery.",
      contactNumber: "555-123-4567",
    },
    cancellationPolicy: "Free cancellation up to 24 hours before the tour.",
    isHistorical: true,
    isRomantic: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    faqs: [
      {
        question: "What should I wear for the art walk?",
        answer:
          "We recommend wearing comfortable clothing and walking shoes, as the tour involves a fair amount of walking. Dress in layers, as Portland's weather can change quickly.",
      },
      {
        question: "Are there any age restrictions for the tour?",
        answer:
          "There are no age restrictions for the art walk. It is suitable for all ages, and children are welcome when accompanied by an adult.",
      },
      {
        question: "Is transportation included in the tour?",
        answer:
          "Transportation is not included. The tour starts in the Pearl District, which can be reached by public transport or car. Parking may be available nearby.",
      },
      {
        question: "Can I bring my children on the tour?",
        answer:
          "Yes, the art walk is family-friendly! Children are welcome, and we can accommodate their needs with advance notice. Please inform us of any specific requirements when booking.",
      },
    ],
  },
  {
    title: "Portland Nightlife Tour",
    description:
      "Experience Portland's vibrant nightlife with a guided tour of its best bars and live music venues.",
    city: "Portland",
    country: "United States",
    state: "Oregon",
    region: "Pacific Northwest",
    price: "$70",
    rating: 4.4,
    tourCategoryId: "nightlife",
    duration: "4 hours",
    images: ["/images/tours/portland-nightlife-tour.jpg"],
    highlights: [
      "Visit three popular bars in the city",
      "Enjoy live music performances",
      "Meet local musicians and bartenders",
    ],
    availableDates: [
      "2024-05-22",
      "2024-05-23",
      "2024-05-24",
      "2024-05-25",
      "2024-05-26",
      "2024-05-27",
      "2024-05-28",
      "2024-05-29",
      "2024-05-30",
      "2024-05-31",
      "2024-06-01",
      "2024-06-02",
      "2024-06-03",
      "2024-06-04",
      "2024-06-05",
    ],
    inclusions: ["Bar cover charges", "Local guide"],
    exclusions: ["Drinks and food", "Transportation to/from the tour"],
    itinerary: [
      "7:00 PM - Meet at the first bar location in downtown Portland",
      "7:15 PM - Enjoy live music at the first bar and meet the bartender",
      "8:30 PM - Walk to the second bar for more live music and drinks",
      "9:45 PM - Visit the third bar for a final round of drinks and music",
      "11:00 PM - End of the tour, optional time to stay at the last bar",
      "11:30 PM - Tour concludes",
    ],
    meetingPoint: {
      address: "First bar location, downtown Portland",
      coordinates: {
        latitude: 45.523064,
        longitude: -122.676483,
      },
      instructions: "Meet your guide at the entrance of the first bar.",
      contactNumber: "555-123-4567",
    },
    cancellationPolicy: "Free cancellation up to 24 hours before the tour.",
    isHistorical: false,
    isRomantic: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    faqs: [
      {
        question: "What should I wear for the nightlife tour?",
        answer:
          "We recommend wearing smart casual attire. Some bars may have dress codes, so please check in advance.",
      },
      {
        question: "Are there any age restrictions for the tour?",
        answer:
          "Yes, participants must be at least 21 years old to join the nightlife tour. Please bring a valid ID for age verification.",
      },
      {
        question: "Is transportation included in the tour?",
        answer:
          "Transportation is not included. We recommend using public transport or rideshare services to reach the first bar.",
      },
      {
        question: "Can I bring my children on the tour?",
        answer:
          "No, this tour is strictly for adults aged 21 and over. Children are not permitted due to the nature of the venues visited.",
      },
    ],
  },
  {
    title: "Portland Wellness Retreat",
    description:
      "Rejuvenate your mind and body with a guided wellness retreat in the heart of Portland.",
    city: "Portland",
    country: "United States",
    state: "Oregon",
    region: "Pacific Northwest",
    price: "$120",
    rating: 4.9,
    tourCategoryId: "wellness",
    duration: "6 hours",
    images: ["/images/tours/portland-wellness-retreat.jpg"],
    highlights: [
      "Yoga and meditation sessions",
      "Healthy lunch included",
      "Guided nature walk in Forest Park",
    ],
    availableDates: [
      "2024-05-25",
      "2024-05-26",
      "2024-05-27",
      "2024-05-28",
      "2024-05-29",
      "2024-05-30",
      "2024-05-31",
      "2024-06-01",
      "2024-06-02",
      "2024-06-03",
      "2024-06-04",
      "2024-06-05",
      "2024-06-06",
      "2024-06-07",
      "2024-06-08",
      "2024-06-09",
      "2024-06-10",
      "2024-06-11",
      "2024-06-12",
      "2024-06-13",
    ],
    inclusions: ["Yoga mats", "Lunch", "Local guide"],
    exclusions: [
      "Transportation to/from the retreat",
      "Additional wellness services",
    ],
    itinerary: [
      "9:00 AM - Meet at the wellness center in downtown Portland",
      "9:15 AM - Begin with a guided yoga session",
      "10:30 AM - Meditation session to relax the mind",
      "11:30 AM - Healthy lunch provided at the wellness center",
      "12:30 PM - Guided nature walk in Forest Park",
      "2:00 PM - End of the retreat, optional time for relaxation at the center",
      "3:00 PM - Retreat concludes",
    ],
    meetingPoint: {
      address: "Wellness Center, downtown Portland",
      coordinates: {
        latitude: 45.523064,
        longitude: -122.676483,
      },
      instructions: "Meet your guide at the entrance of the wellness center.",
      contactNumber: "555-123-4567",
    },
    cancellationPolicy: "Free cancellation up to 24 hours before the retreat.",
    isHistorical: false,
    isRomantic: false,
    isAdventure: false,
    isCultural: false,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: true,
    isLuxury: true,
    isArtOrMusic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    faqs: [
      {
        question: "What should I wear for the wellness retreat?",
        answer:
          "We recommend wearing comfortable, breathable clothing suitable for yoga and meditation. Bring a water bottle and a towel if needed.",
      },
      {
        question: "Are there any age restrictions for the retreat?",
        answer:
          "There are no age restrictions for the wellness retreat. It is suitable for all ages, but children must be accompanied by an adult.",
      },
      {
        question: "Is transportation included in the retreat?",
        answer:
          "Transportation is not included. The retreat starts at the wellness center, which can be reached by public transport or car. Parking may be available nearby.",
      },
      {
        question: "Can I bring my children on the retreat?",
        answer:
          "Yes, the wellness retreat is family-friendly! Children are welcome, and we can accommodate their needs with advance notice. Please inform us of any specific requirements when booking.",
      },
    ],
  },
];
