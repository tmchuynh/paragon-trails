import { Tour } from "@/lib/interfaces/services/tours";

export const kualaLumpurTours: Tour[] = [
  {
    title: "Batu Caves & Cultural Heritage Tour",
    description:
      "Discover Malaysia's religious diversity with visits to the magnificent Batu Caves, stunning heritage mosques, and vibrant Hindu and Chinese temples, gaining insight into the multicultural fabric of Malaysian society.",
    city: "Kuala Lumpur",
    country: "Malaysia",
    region: "Selangor",
    images: [
      "/images/tours/kuala-lumpur/batu-caves.jpg",
      "/images/tours/kuala-lumpur/national-mosque.jpg",
    ],
    duration: "6 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Cultural", "Religious", "Historical"],
    meetingPoint: {
      address: "KL Sentral Station, Main Entrance, Kuala Lumpur",
      coordinates: {
        latitude: 3.1343,
        longitude: 101.6863,
      },
      instructions:
        "Meet at the main entrance of KL Sentral Station near the information desk. Your guide will be holding a sign with 'Cultural Heritage Tour' written on it.",
      contactNumber: "+60 3-2273 5555",
      contactEmail: "info@malaysiatours.com",
    },
    highlights: [
      "Ascend the 272 colorful steps to the sacred Batu Caves Hindu temple",
      "Visit the National Mosque (Masjid Negara) with its distinctive blue star-shaped dome",
      "Explore the ornate Sri Mahamariamman Temple, the oldest Hindu temple in KL",
      "Discover Thean Hou Temple, one of the largest Chinese temples in Southeast Asia",
      "Learn about Malaysia's multicultural history and religious harmony",
    ],
    inclusions: [
      "Professional English-speaking guide with cultural expertise",
      "Transportation between sites in air-conditioned vehicle",
      "Entrance fees to all religious sites",
      "Bottled water",
      "Traditional Malaysian snacks",
      "Modest clothing loan for entering religious sites (if needed)",
    ],
    exclusions: [
      "Hotel pickup and drop-off (available for additional fee)",
      "Meals",
      "Personal expenses and souvenirs",
      "Tips and gratuities",
    ],
    itinerary: [
      "8:30 AM - Meet at KL Sentral Station",
      "9:00 AM - Arrive at Batu Caves, climb the steps and explore cave temples",
      "10:30 AM - Visit National Mosque (Masjid Negara)",
      "11:30 AM - Explore Sri Mahamariamman Hindu Temple in Chinatown",
      "12:30 PM - Traditional Malaysian snack break",
      "1:15 PM - Visit Thean Hou Chinese Temple",
      "2:30 PM - Return to KL Sentral with commentary on city landmarks",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before the tour. 50% refund if canceled 12-24 hours before. No refund for cancellations less than 12 hours before scheduled tour.",
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
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
        question: "What should I wear for visiting religious sites?",
        answer:
          "For religious sites, modest clothing is required. For mosques, women should cover their hair, arms and legs (we provide headscarves and robes if needed). For temples, avoid shorts and sleeveless tops. Comfortable walking shoes are essential as the tour involves climbing stairs at Batu Caves. We recommend bringing a light shawl or long-sleeved shirt that can be put on when entering religious buildings.",
      },
      {
        question: "How strenuous is the climb at Batu Caves?",
        answer:
          "The Batu Caves require climbing 272 relatively steep, colorful steps to reach the main cave temple. The climb takes 10-15 minutes at a moderate pace. While many people of average fitness complete it without issue, those with mobility concerns or heart conditions may find it challenging. There's no elevator or alternative route. You can take breaks during the climb, and our guides will accommodate a comfortable pace.",
      },
      {
        question: "Will we encounter monkeys at Batu Caves?",
        answer:
          "Yes, there are many wild macaque monkeys living around Batu Caves. While they're accustomed to humans, they can be aggressive if they think you have food. We advise keeping any food, bags, and shiny objects secure. Don't feed or touch the monkeys, and avoid direct eye contact which they may interpret as aggression. Your guide will provide safety instructions for interacting with the wildlife.",
      },
    ],
  },
  {
    title: "KL Street Food Safari",
    description:
      "Embark on a culinary adventure through Kuala Lumpur's vibrant food scene, sampling authentic dishes from Malay, Chinese, and Indian traditions while exploring bustling night markets and hidden food streets.",
    city: "Kuala Lumpur",
    country: "Malaysia",
    region: "Selangor",
    images: [
      "/images/tours/kuala-lumpur/street-food.jpg",
      "/images/tours/kuala-lumpur/food-market.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.9,
    tags: ["Food", "Cultural", "Night Markets"],
    meetingPoint: {
      address:
        "Jalan Alor Street Food Market Entrance, Bukit Bintang, Kuala Lumpur",
      coordinates: {
        latitude: 3.1455,
        longitude: 101.7099,
      },
      instructions:
        "Meet at the arch entrance to Jalan Alor Food Street. Look for your guide holding an orange umbrella with 'Food Safari' written on it.",
      contactNumber: "+60 17-881 9999",
      contactEmail: "klfoodsafari@gmail.com",
    },
    highlights: [
      "Sample 10-12 authentic Malaysian dishes from different ethnic traditions",
      "Explore the lively night atmosphere of Jalan Alor Food Street",
      "Visit a local hawker center where residents dine",
      "Learn about Malaysian spices, cooking techniques, and food culture",
      "Experience the melting pot of Malay, Chinese, and Indian culinary influences",
    ],
    inclusions: [
      "Expert local food guide",
      "All food tastings (10-12 different items)",
      "1 drink per person (non-alcoholic)",
      "Small group experience (maximum 8 people)",
      "Food map of Kuala Lumpur with recommendations",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Alcoholic beverages (available for purchase)",
      "Additional food beyond included tastings",
      "Gratuities",
    ],
    itinerary: [
      "6:00 PM - Meet at Jalan Alor entrance for introduction",
      "6:15 PM - Begin food tastings at selected stalls on Jalan Alor",
      "7:00 PM - Walk to nearby Changkat Bukit Bintang area",
      "7:30 PM - Visit local hawker center for authentic Chinese dishes",
      "8:15 PM - Try traditional Malay favorites at specialist stall",
      "8:45 PM - Sample Indian-influenced dishes at final location",
      "9:30 PM - Tour concludes with dessert and recommendations",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the tour. 50% refund if canceled 24-48 hours before. No refund for cancellations less than 24 hours before scheduled tour.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate vegetarian, halal, and most food allergies with advance notice. Please inform us of any dietary restrictions when booking so we can arrange appropriate alternatives. Malaysia's diverse cuisine offers many options for different dietary needs.",
      },
      {
        question: "How spicy is the food?",
        answer:
          "Malaysian food can range from mild to very spicy. Your guide will point out spice levels for each dish, and we can customize the selections based on your preference. We typically include a mix of spicy and non-spicy options, and condiments are usually served on the side so you can adjust to your taste.",
      },
      {
        question: "Is street food in Malaysia safe to eat?",
        answer:
          "We carefully select vendors known for fresh, high-quality food with good hygiene practices. Your guide is experienced in choosing safe options, and all the places we visit are popular with locals. Hand sanitizer is provided throughout the tour, and bottled water is included to keep you hydrated.",
      },
    ],
  },
  {
    title: "Petronas Twin Towers Skybridge & Observation Deck Experience",
    description:
      "Ascend the iconic Petronas Twin Towers with skip-the-line tickets to the Skybridge connecting the towers and the 86th-floor Observation Deck offering breathtaking panoramic views of Kuala Lumpur.",
    city: "Kuala Lumpur",
    country: "Malaysia",
    region: "Selangor",
    images: [
      "/images/tours/kuala-lumpur/petronas-towers.jpg",
      "/images/tours/kuala-lumpur/skybridge-view.jpg",
    ],
    duration: "1.5 hours",
    price: "$35",
    rating: 4.7,
    tags: ["Architecture", "City Views", "Iconic Landmark"],
    meetingPoint: {
      address:
        "Concourse Level, Petronas Twin Towers, Kuala Lumpur City Centre",
      coordinates: {
        latitude: 3.158,
        longitude: 101.7117,
      },
      instructions:
        "Meet at the Petronas Towers Ticket Counter on the Concourse Level. Please arrive 15 minutes before your scheduled time slot.",
      contactNumber: "+60 3-2331 8080",
      contactEmail: "touristinfo@petronas.com.my",
    },
    highlights: [
      "Skip-the-line access to the iconic Petronas Twin Towers",
      "Walk on the famous Skybridge connecting the towers at the 41st and 42nd floors",
      "Visit the 86th-floor Observation Deck with 360° views of Kuala Lumpur",
      "Learn about the architecture and engineering of this world-famous landmark",
      "Photo opportunities of KL city skyline from one of its most recognized buildings",
    ],
    inclusions: [
      "Skip-the-line entrance ticket",
      "Access to the Skybridge on the 41st and 42nd floors",
      "Access to the 86th-floor Observation Deck",
      "Interactive exhibits about the towers' construction",
      "Professional security and tour staff assistance",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Guide service (this is a self-guided experience with staff at key points)",
      "Food and beverages",
      "Souvenir photos (available for purchase)",
      "Access to non-public areas of the towers",
    ],
    itinerary: [
      "Check in at the Ticket Counter 15 minutes before your time slot",
      "Security screening and briefing",
      "Elevator ride to the Skybridge on the 41st and 42nd floors",
      "15 minutes to explore the Skybridge and enjoy the views",
      "Elevator ride to the 86th-floor Observation Deck",
      "25 minutes to enjoy panoramic views and interactive exhibits",
      "Return to ground level via elevator",
      "Option to explore the Suria KLCC shopping mall at the base of the towers",
    ],
    cancellationPolicy:
      "Non-refundable once confirmed. Rescheduling possible with 48 hours notice, subject to availability. In case of temporary closure due to weather or technical issues, tickets will be refunded or rescheduled.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: false,
    isCultural: false,
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
    isWheelchairAccessible: true,
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "sightseeing",
    faqs: [
      {
        question: "What is the best time to visit the Petronas Twin Towers?",
        answer:
          "For photography, early morning slots (9-10am) offer clear views with less haze, while sunset slots (6-7pm) provide stunning golden hour lighting and transition to night views. Evening visits showcase the city lights. Weekday mornings typically have fewer crowds than weekends or evenings.",
      },
      {
        question: "How much time should I allocate for the visit?",
        answer:
          "The official visit time is approximately 60 minutes, which includes security screening, elevator rides, time on the Skybridge (15 minutes) and Observation Deck (25 minutes). We recommend allocating 1.5-2 hours total to enjoy the experience without rushing and to explore the exhibits.",
      },
      {
        question: "Are there any restrictions for visiting?",
        answer:
          "Large bags and dangerous items are not permitted. Children under 12 must be accompanied by an adult. There's a smart casual dress code (no sleeveless shirts, shorts or flip-flops). The tour involves elevators and some standing, but is wheelchair accessible with advance notice. Tickets are limited and often sell out days in advance, so early booking is strongly recommended.",
      },
    ],
  },
  {
    title: "Kuala Lumpur City Highlights Half-Day Tour",
    description:
      "Discover the essential landmarks and cultural sites of Kuala Lumpur on this efficient half-day tour covering the city's most important attractions and diverse neighborhoods.",
    city: "Kuala Lumpur",
    country: "Malaysia",
    region: "Selangor",
    images: [
      "/images/tours/kuala-lumpur/city-highlights.jpg",
      "/images/tours/kuala-lumpur/merdeka-square.jpg",
    ],
    duration: "4 hours",
    price: "$40",
    rating: 4.6,
    tags: ["City Tour", "Sightseeing", "Cultural"],
    meetingPoint: {
      address: "KL Sentral Station, Main Entrance, Kuala Lumpur",
      coordinates: {
        latitude: 3.1343,
        longitude: 101.6863,
      },
      instructions:
        "Meet at the main entrance of KL Sentral Station. Your guide will be holding a blue sign with 'KL City Tour' written on it.",
      contactNumber: "+60 3-2274 6789",
      contactEmail: "bookings@kltours.my",
    },
    highlights: [
      "Visit the iconic Petronas Twin Towers (exterior view) and KLCC Park",
      "Explore Merdeka Square and discover Malaysia's independence history",
      "See the impressive National Monument and Lake Gardens",
      "Visit the National Mosque and observe its unique architectural style",
      "Experience the diverse cultures of Little India and Chinatown districts",
    ],
    inclusions: [
      "Transportation in air-conditioned vehicle",
      "Professional English-speaking guide",
      "Entrance fees to National Monument",
      "Bottled water",
      "Hotel pickup and drop-off (selected central hotels only)",
    ],
    exclusions: [
      "Food and beverages beyond water",
      "Tower entrance tickets (exterior view only)",
      "Optional activities",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      "9:00 AM - Hotel pickup or meet at KL Sentral",
      "9:30 AM - Visit Petronas Twin Towers (exterior) and KLCC Park",
      "10:15 AM - National Monument and Lake Gardens tour",
      "10:45 AM - Visit National Mosque (exterior view if prayer time)",
      "11:15 AM - Photo stop at Merdeka Square and Sultan Abdul Samad Building",
      "11:45 AM - Explore Chinatown with brief free time",
      "12:15 PM - Visit Little India neighborhood",
      "12:45 PM - Central Market visit with free time for souvenirs",
      "1:00 PM - Return to hotels or KL Sentral",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before the tour. 50% refund if canceled 12-24 hours before. No refund for cancellations less than 12 hours before scheduled tour.",
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "sightseeing",
    faqs: [
      {
        question: "Will we go inside the Petronas Twin Towers?",
        answer:
          "This tour includes viewing the towers from outside and the surrounding KLCC Park, but does not include going up the towers. If you're interested in visiting the observation deck, we recommend booking our separate 'Petronas Twin Towers Skybridge & Observation Deck Experience' or purchasing tickets directly (often requires advance booking).",
      },
      {
        question: "What should I wear for visiting religious sites?",
        answer:
          "Modest clothing is recommended as we visit sites like the National Mosque. Women may need to cover shoulders and knees, and men should avoid shorts. The tour provides modest covering wraps if needed. Comfortable walking shoes are recommended as the tour involves moderate walking.",
      },
      {
        question: "How much free time will we have for shopping?",
        answer:
          "This is primarily a sightseeing tour with brief stops (15-20 minutes) at Chinatown and Central Market for quick shopping. If shopping is a priority, consider our dedicated shopping tours or plan additional time after this tour ends. Your guide can suggest the best markets and malls to return to independently.",
      },
    ],
  },
  {
    title: "Fireflies & Kuala Selangor Evening Tour",
    description:
      "Escape the city for an evening cruise to witness the magical spectacle of thousands of synchronizing fireflies illuminating the mangrove trees along the Selangor River.",
    city: "Kuala Lumpur",
    country: "Malaysia",
    region: "Selangor",
    images: [
      "/images/tours/kuala-lumpur/fireflies.jpg",
      "/images/tours/kuala-lumpur/kuala-selangor.jpg",
    ],
    duration: "6 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Nature", "Evening", "Wildlife"],
    meetingPoint: {
      address: "KL Sentral Station, Main Entrance, Kuala Lumpur",
      coordinates: {
        latitude: 3.1343,
        longitude: 101.6863,
      },
      instructions:
        "Meet at the main entrance of KL Sentral Station. Your guide will be holding a sign with 'Fireflies Tour' written on it.",
      contactNumber: "+60 3-2275 8901",
      contactEmail: "nature@klecotours.com",
    },
    highlights: [
      "Experience the enchanting natural phenomenon of synchronizing fireflies",
      "Cruise along the Selangor River in a small boat for up-close viewing",
      "Visit the historic Kuala Selangor Fort (Bukit Melawati)",
      "Observe silver-leaf monkeys in their natural habitat",
      "Enjoy a delicious seafood dinner at a local riverside restaurant",
    ],
    inclusions: [
      "Round-trip transportation from Kuala Lumpur in air-conditioned vehicle",
      "Professional English-speaking nature guide",
      "Boat ride to view fireflies along the Selangor River",
      "Seafood dinner (vegetarian option available)",
      "Entrance fees to Kuala Selangor Nature Park",
      "Bottled water",
    ],
    exclusions: [
      "Hotel pickup and drop-off (available for additional fee)",
      "Alcoholic beverages",
      "Additional food beyond included dinner",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      "4:00 PM - Depart from KL Sentral",
      "5:30 PM - Arrive at Kuala Selangor, visit Bukit Melawati Fort",
      "6:15 PM - Silver-leaf monkey observation at Nature Park",
      "7:00 PM - Seafood dinner at local restaurant",
      "8:00 PM - Depart for firefly viewing area",
      "8:30 PM - Boat cruise to witness fireflies (approximately 30-40 minutes)",
      "9:30 PM - Begin return journey to Kuala Lumpur",
      "10:30 PM - Arrive back at KL Sentral",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the tour. 50% refund if canceled 24-48 hours before. No refund for cancellations less than 24 hours before scheduled tour. Alternative date offered if firefly viewing is canceled due to adverse weather.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: false,
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
    isIndoor: false,
    tourCategoryId: "nature-wildlife",
    faqs: [
      {
        question: "When is the best time to see the fireflies?",
        answer:
          "The fireflies can be seen year-round, but visibility is best during new moon phases when there's less ambient light. The synchronization is typically strongest between 8:00-10:00 PM. Weather conditions also affect the display—clear, warm evenings with high humidity are ideal, while heavy rain may reduce firefly activity.",
      },
      {
        question: "Can I take photographs of the fireflies?",
        answer:
          "Photographing fireflies requires specialized equipment and techniques as they're quite dim and normal camera flash can disturb them. We recommend enjoying the experience visually rather than attempting to photograph it. Your guide can offer tips if you wish to try capturing images, but please note that flash photography is not permitted during the boat ride.",
      },
      {
        question: "Is the boat ride safe?",
        answer:
          "Yes, the boat ride is conducted using stable, traditional wooden boats with experienced local operators. Life jackets are provided and must be worn throughout the cruise. The boats navigate calm river waters at slow speeds. The activity is generally suitable for all ages, though those with severe motion sickness might experience mild discomfort.",
      },
    ],
  },
];

export default kualaLumpurTours;
