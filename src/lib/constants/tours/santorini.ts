import { Tour } from "@/lib/interfaces/services/tours";

export const santoriniTours: Tour[] = [
  {
    title: "Santorini Sunset Cruise",
    description:
      "Experience the breathtaking sunsets of Santorini from the sea with a romantic sunset cruise.",
    city: "Fira",
    country: "Greece",
    region: "South Aegean",
    images: [
      "/images/tours/santorini/sunset-cruise.jpg",
      "/images/tours/santorini/sunset-view.jpg",
    ],
    duration: "3 hours",
    price: "$60",
    rating: 4.9,
    tags: ["Romantic", "Adventure", "Nature"],
    meetingPoint: {
      address: "Ammoudi Bay Harbor, Oia, Santorini 84702",
      coordinates: {
        latitude: 36.4618,
        longitude: 25.3711,
      },
      instructions:
        "Meet at the Ammoudi Bay Harbor entrance near the blue dome chapel. Look for our catamaran with 'Santorini Sailing' flag.",
      contactNumber: "+30 22860 72200",
      contactEmail: "cruises@santoriniocean.com",
    },
    highlights: [
      "Sail around the volcanic caldera on a luxury catamaran",
      "Swim in crystal-clear waters at secluded bays",
      "Visit the hot springs near the volcanic islands",
      "Witness the world-famous Santorini sunset from the perfect vantage point",
    ],
    inclusions: [
      "Catamaran cruise with experienced captain and crew",
      "Greek appetizers and snacks onboard",
      "Open bar with local wine, beer and soft drinks",
      "Snorkeling equipment",
      "Hotel pickup and drop-off from select locations",
    ],
    exclusions: [
      "Gratuities",
      "Professional photography (available onboard for purchase)",
      "Towels (please bring your own)",
    ],
    itinerary: [
      "4:00 PM - Hotel pickup and transfer to Ammoudi Bay",
      "4:30 PM - Welcome aboard, safety briefing, and departure",
      "5:00 PM - Cruise to Red Beach for swimming and snorkeling",
      "5:45 PM - Visit to White Beach with more swimming opportunities",
      "6:30 PM - Stop at the volcanic hot springs",
      "7:00 PM - Greek appetizers and wine served while sailing",
      "7:30 PM - Position for optimal sunset viewing",
      "8:00 PM - Witness the famous Santorini sunset",
      "8:30 PM - Return to Ammoudi Bay",
      "9:00 PM - Transfer back to hotels",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before departure. 50% refund if canceled 24-48 hours before departure. No refund for cancellations less than 24 hours before scheduled cruise.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: true,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "What should I bring on the sunset cruise?",
        answer:
          "We recommend bringing a towel, swimwear, sunscreen, a light jacket for after sunset, and a camera. All other necessities including food, drinks, and snorkeling equipment are provided.",
      },
      {
        question: "Is swimming mandatory during the cruise?",
        answer:
          "Swimming is entirely optional. You can enjoy the cruise without entering the water if you prefer, relaxing on the catamaran deck while others swim.",
      },
      {
        question: "What happens in case of bad weather?",
        answer:
          "Your safety is our priority. If weather conditions are deemed unsafe for sailing, we will offer to reschedule your cruise to another day or provide a full refund.",
      },
    ],
  },
  {
    title: "Santorini Wine Tasting Tour",
    description:
      "Discover the unique wines of Santorini with a guided tour of local vineyards and tastings.",
    city: "Fira",
    country: "Greece",
    region: "South Aegean",
    images: [
      "/images/tours/santorini/wine-tasting.jpg",
      "/images/tours/santorini/vineyards.jpg",
    ],
    duration: "4 hours",
    price: "$50",
    rating: 4.8,
    tags: ["Culinary", "Cultural", "Local Experience"],
    meetingPoint: {
      address: "Central Square, Fira, Santorini 84700",
      coordinates: {
        latitude: 36.4167,
        longitude: 25.4333,
      },
      instructions:
        "Meet in front of the Fira Cathedral at Central Square. Your guide will be holding a sign reading 'Wine Tour'.",
      contactNumber: "+30 22860 36300",
      contactEmail: "tastings@santoriniwinetours.gr",
    },
    highlights: [
      "Visit three distinctive family-owned wineries",
      "Learn about Santorini's unique viticulture techniques including the kouloura (basket) vine-training system",
      "Sample 12-15 different wines including the famous Assyrtiko variety",
      "Enjoy breathtaking vineyard views overlooking the caldera",
    ],
    inclusions: [
      "Professional sommelier guide",
      "Transportation between wineries in air-conditioned vehicle",
      "All wine tasting fees (12-15 wines total)",
      "Greek appetizers and snacks to complement the wines",
      "Bottled water",
    ],
    exclusions: [
      "Hotel pickup and drop-off (available for additional €15 per person)",
      "Additional food beyond provided appetizers",
      "Wine bottle purchases",
      "Gratuities",
    ],
    itinerary: [
      "3:30 PM - Meet in Fira and introduction to Santorini's wine history",
      "4:00 PM - Visit first winery with tour of volcanic soil vineyards",
      "4:30 PM - First wine tasting session (4-5 wines)",
      "5:15 PM - Travel to second winery with caldera views",
      "5:30 PM - Second tasting with focus on Assyrtiko wines",
      "6:15 PM - Visit third traditional family winery",
      "6:30 PM - Final tasting with food pairings and dessert wines",
      "7:15 PM - Discussion of wine production techniques and traditions",
      "7:30 PM - Return to Fira",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before the tour. 50% refund for cancellations within 24 hours. No refund for same-day cancellations or no-shows.",
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Do I need wine knowledge to enjoy this tour?",
        answer:
          "Not at all! This tour is designed for everyone from curious beginners to wine enthusiasts. Our sommelier guides explain everything in an accessible, non-pretentious way.",
      },
      {
        question: "Is there a minimum drinking age?",
        answer:
          "The legal drinking age in Greece is 18. Participants under 18 are welcome on the tour but will be served non-alcoholic grape juice during tastings.",
      },
      {
        question: "What makes Santorini wines unique?",
        answer:
          "Santorini's wines are distinctive due to the island's volcanic soil, dry climate, and ancient vine-training methods. The indigenous Assyrtiko grape produces minerals, high-acidity wines unlike any others in the world. Our tour explains these unique characteristics in depth.",
      },
    ],
  },
  {
    title: "Akrotiri Archaeological Site Tour",
    description:
      "Explore the ancient ruins of Akrotiri, a Minoan Bronze Age settlement preserved in volcanic ash.",
    city: "Akrotiri",
    country: "Greece",
    region: "South Aegean",
    images: [
      "/images/tours/santorini/akrotiri.jpg",
      "/images/tours/santorini/archaeological-site.jpg",
    ],
    duration: "2 hours",
    price: "$30",
    rating: 4.7,
    tags: ["Historical", "Cultural", "Educational"],
    meetingPoint: {
      address: "Akrotiri Archaeological Site Entrance, Santorini 84700",
      coordinates: {
        latitude: 36.3513,
        longitude: 25.4037,
      },
      instructions:
        "Meet at the ticket office of the Akrotiri Archaeological Site. Your guide will be holding a blue 'Archaeology Tours' folder.",
      contactNumber: "+30 22860 81939",
      contactEmail: "info@santoriniarchaeology.com",
    },
    highlights: [
      "Tour the remarkably preserved Bronze Age city buried under volcanic ash for 3,600 years",
      "See advanced urban planning with multi-story buildings, sewage systems, and elaborate frescoes",
      "Learn about the connection between Akrotiri and the legend of Atlantis",
      "Understand how the volcanic eruption preserved this important Minoan settlement",
    ],
    inclusions: [
      "Licensed archaeological guide",
      "Skip-the-line entrance tickets",
      "Audio headsets to clearly hear the guide",
      "Informative booklet about Akrotiri",
    ],
    exclusions: [
      "Transportation to/from the archaeological site",
      "Food and beverages",
      "Gratuities",
      "Personal expenses",
    ],
    itinerary: [
      "10:00 AM - Meet at site entrance, introduction and context",
      "10:15 AM - Enter the archaeological site with skip-the-line access",
      "10:30 AM - Tour of residential quarters and public buildings",
      "11:00 AM - Detailed exploration of advanced drainage systems and architecture",
      "11:30 AM - Learn about the remarkable preservation techniques and ongoing excavation",
      "11:45 AM - Discussion of daily life in Bronze Age Akrotiri",
      "12:00 PM - Tour conclusion with time for questions",
      "12:15 PM - Optional visit to site gift shop and museum",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before the tour. No refund for cancellations less than 24 hours before the scheduled tour or no-shows.",
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
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
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How much walking is involved in this tour?",
        answer:
          "The tour involves about 1.5 hours of slow-paced walking on level surfaces. The archaeological site has ramps and walkways making it accessible for most visitors.",
      },
      {
        question: "Are photographs allowed inside the archaeological site?",
        answer:
          "Yes, photography without flash is permitted throughout the site. Your guide will indicate any specific areas where photography may be restricted.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "The tour is designed to be engaging for visitors of all ages. Children often find the 'buried city' concept fascinating, though very young children might not appreciate the historical details. We recommend the tour for children aged 8 and older.",
      },
    ],
  },
];

export default santoriniTours;
