import { Tour } from "@/lib/interfaces/services/tours";

export const sanFranciscoTours: Tour[] = [
  {
    title: "Golden Gate Bridge Bike Tour",
    description:
      "Cycle across San Francisco's iconic Golden Gate Bridge with breathtaking views of the bay, Alcatraz, and the city skyline.",
    city: "San Francisco",
    country: "United States",
    region: "California",
    images: [
      "/images/tours/san-francisco/golden-gate-cycling.jpg",
      "/images/tours/san-francisco/sausalito-view.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Cycling", "Bridge", "Views"],
    meetingPoint: {
      address: "2157 Lombard Street, San Francisco, CA 94123",
      coordinates: {
        latitude: 37.8004,
        longitude: -122.4356,
      },
      instructions:
        "Meet at our bike shop in the Marina District. Look for the blue 'SF Bike Tours' sign.",
      contactNumber: "+1 (415) 123-4567",
      contactEmail: "reservations@sfbiketours.com",
    },
    highlights: [
      "Cycle across the iconic Golden Gate Bridge with a professional guide",
      "Capture stunning photos of San Francisco Bay, Alcatraz Island, and the city skyline",
      "Explore charming Sausalito with its waterfront cafes and boutiques",
      "Learn about the history and engineering of the Golden Gate Bridge",
    ],
    inclusions: [
      "High-quality bike rental (hybrid or electric options available)",
      "Helmet, lock, and water bottle",
      "Professional guide",
      "Map with recommended route and points of interest",
      "Ferry ticket for return journey (from Sausalito to San Francisco)",
    ],
    exclusions: [
      "Lunch (time will be allowed for purchasing food in Sausalito)",
      "Gratuities",
      "Hotel pickup and drop-off",
      "Rain gear (available for rent if needed)",
    ],
    itinerary: [
      "9:30 AM - Meet at bike shop for bike fitting and safety briefing",
      "10:00 AM - Begin cycling through the Marina District and Presidio",
      "10:45 AM - Arrive at Golden Gate Bridge and cross the 1.7-mile span",
      "11:30 AM - Descend into Sausalito for lunch break and exploration",
      "1:00 PM - Board ferry for return trip to San Francisco (with bikes)",
      "1:30 PM - Arrive at Ferry Building and cycle back to starting point",
      "2:30 PM - Tour concludes at original bike shop",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours in advance. 50% refund if canceled 12-24 hours before departure. No refund for cancellations less than 12 hours before departure or no-shows.",
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult is the bike ride?",
        answer:
          "The ride includes some moderate hills but is generally suitable for anyone comfortable on a bike. Electric bike upgrades are available for an additional fee.",
      },
      {
        question: "What happens if it rains?",
        answer:
          "Tours typically run rain or shine. We provide optional rain ponchos for an additional $5. In case of severe weather, we may reschedule or offer a full refund.",
      },
      {
        question: "How far do we bike in total?",
        answer:
          "The total biking distance is approximately 8 miles (13 km), not including the ferry ride back from Sausalito.",
      },
    ],
  },
  {
    title: "Alcatraz & San Francisco Highlights",
    description:
      "Visit the infamous Alcatraz Island prison with audio tour, then explore San Francisco's diverse neighborhoods, including Chinatown, North Beach, and Haight-Ashbury.",
    city: "San Francisco",
    country: "United States",
    region: "California",
    images: [
      "/images/tours/san-francisco/alcatraz.jpg",
      "/images/tours/san-francisco/chinatown.jpg",
    ],
    duration: "8 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Prison", "History", "Neighborhoods"],
    meetingPoint: {
      address: "Pier 33, The Embarcadero, San Francisco, CA 94111",
      coordinates: {
        latitude: 37.8072,
        longitude: -122.4027,
      },
      instructions:
        "Meet at the Alcatraz Landing Visitor Center at Pier 33. Your guide will be waiting with a sign that says 'SF Highlights Tour'.",
      contactNumber: "+1 (415) 234-5678",
      contactEmail: "support@sfcitytours.com",
    },
    highlights: [
      "Tour the infamous Alcatraz Island prison with award-winning audio guide",
      "Visit San Francisco's iconic neighborhoods including Chinatown, North Beach (Little Italy), and Haight-Ashbury",
      "Drive across the Golden Gate Bridge and stop at a vista point for photos",
      "See historic landmarks including Lombard Street, Painted Ladies Victorian homes, and Palace of Fine Arts",
    ],
    inclusions: [
      "Round-trip ferry to Alcatraz Island",
      "Alcatraz admission and audio tour",
      "Transportation in climate-controlled vehicle for city portion",
      "Expert local guide",
      "Hotel pickup and drop-off (selected hotels only)",
    ],
    exclusions: [
      "Meals and beverages",
      "Optional gratuities",
      "Souvenir photos",
      "Hotel pickup/drop-off for hotels outside downtown",
    ],
    itinerary: [
      "9:00 AM - Hotel pickup or meet at Pier 33",
      "9:30 AM - Ferry departure to Alcatraz Island",
      "9:45 AM - Arrive at Alcatraz for prison tour and audio guide",
      "12:00 PM - Return ferry to San Francisco",
      "12:30 PM - Lunch break in Fisherman's Wharf (not included)",
      "1:30 PM - Begin city highlights tour with Chinatown and North Beach",
      "2:30 PM - Visit Golden Gate Bridge vista point",
      "3:30 PM - Explore Haight-Ashbury neighborhood",
      "4:45 PM - See Painted Ladies Victorian homes at Alamo Square",
      "5:15 PM - Hotel drop-off or return to original meeting point",
    ],
    cancellationPolicy:
      "Due to limited Alcatraz tickets: No refund within 7 days of tour. 50% refund if canceled 7-14 days before tour. Full refund if canceled more than 14 days in advance.",
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
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How far in advance should I book this tour?",
        answer:
          "Alcatraz tickets often sell out 2-3 months in advance, especially during summer and holidays. Early booking is strongly recommended.",
      },
      {
        question: "Is Alcatraz suitable for children?",
        answer:
          "Yes, Alcatraz is suitable for children of all ages. The audio tour is engaging and educational, with a special version available for younger visitors.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "There is a moderate amount of walking on this tour, including uphill sections on Alcatraz Island. The island has some steep paths equivalent to climbing about 13 stories. Comfortable walking shoes are strongly recommended.",
      },
    ],
  },
  {
    title: "San Francisco Food Truck Tour",
    description:
      "Taste the best of San Francisco's food truck scene with a guided tour through the Mission District, sampling gourmet tacos, artisanal ice cream, and more.",
    city: "San Francisco",
    country: "United States",
    region: "California",
    images: [
      "/images/tours/san-francisco/food-truck.jpg",
      "/images/tours/san-francisco/mission-district.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Food", "Street Food", "Local Cuisine"],
    meetingPoint: {
      address:
        "24th Street Mission BART Station, 2800 Mission St, San Francisco, CA 94110",
      coordinates: {
        latitude: 37.7526,
        longitude: -122.4186,
      },
      instructions:
        "Meet outside the main entrance of the 24th Street Mission BART station. Your guide will be wearing a red cap with 'SF Food Tours' logo.",
      contactNumber: "+1 (415) 345-6789",
      contactEmail: "eat@sffoodtrucktours.com",
    },
    highlights: [
      "Sample diverse cuisines from 5-6 of San Francisco's best food trucks and pop-ups",
      "Explore the vibrant Mission District with its colorful street art and murals",
      "Learn about the history of the neighborhood and its food culture",
      "Meet food truck owners and hear their stories",
    ],
    inclusions: [
      "All food tastings at 5-6 different vendors (enough for a full meal)",
      "One non-alcoholic beverage",
      "Expert local foodie guide",
      "Mission District mural and street art tour",
      "Small group experience (maximum 10 people)",
    ],
    exclusions: [
      "Additional food and drinks beyond included tastings",
      "Alcoholic beverages (available for purchase at some stops)",
      "Transportation to/from meeting point",
      "Gratuities",
    ],
    itinerary: [
      "11:00 AM - Meet at 24th Street Mission BART Station",
      "11:15 AM - Introduction to the Mission District and its food scene",
      "11:30 AM - First tasting stop: gourmet tacos from award-winning truck",
      "12:00 PM - Second tasting: fusion cuisine with local ingredients",
      "12:30 PM - Street art tour while walking to next stop",
      "1:00 PM - Third tasting: international street food specialties",
      "1:30 PM - Fourth tasting: artisanal dessert or baked goods",
      "2:00 PM - Final tasting: seasonal specialty item",
      "2:30 PM - Tour conclusion with recommendations for the area",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the tour or no-shows.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
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
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate vegetarian, vegan, and gluten-free diets with advance notice. Please inform us of any specific dietary needs when booking.",
      },
      {
        question: "What types of food will we try?",
        answer:
          "The tour includes a variety of dishes from different food trucks, such as gourmet tacos, fusion sandwiches, artisanal desserts, and local beverages.",
      },
      {
        question: "Does the tour run in rainy weather?",
        answer:
          "Yes, the tour runs rain or shine. In case of light rain, we'll prioritize food trucks with covered seating areas. In severe weather, we may modify the route or reschedule if necessary.",
      },
    ],
  },
];

export default sanFranciscoTours;
