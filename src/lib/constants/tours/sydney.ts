import { Tour } from "@/lib/interfaces/services/tours";

export const sydneyTours: Tour[] = [
  {
    title: "Sydney Opera House VIP Backstage Tour",
    description:
      "Gain exclusive access to Australia's most iconic building with a backstage tour of the Sydney Opera House led by theater professionals, including areas normally closed to the public.",
    city: "Sydney",
    country: "Australia",
    region: "New South Wales",
    images: [
      "/images/tours/sydney/opera-house-backstage.jpg",
      "/images/tours/sydney/opera-house-view.jpg",
    ],
    duration: "3 hours",
    price: "$165",
    rating: 4.9,
    tags: ["Architecture", "Performing Arts", "VIP Access"],
    meetingPoint: {
      address: "Sydney Opera House Stage Door, Macquarie Street, Sydney",
      coordinates: {
        latitude: -33.8578,
        longitude: 151.215,
      },
      instructions:
        "Meet at the Stage Door entrance of the Sydney Opera House (not the main entrance). Look for the sign reading 'VIP Tours' and the guide wearing a Sydney Opera House badge.",
      contactNumber: "+61 2 9250 7250",
      contactEmail: "viptours@sydneyoperahouse.com",
    },
    highlights: [
      "Exclusive backstage access to areas normally closed to the public",
      "Visit the orchestra pit, dressing rooms, and green room",
      "Walk on the main Concert Hall stage where world-famous performers appear",
      "Learn about the challenging design and construction of this architectural masterpiece",
    ],
    inclusions: [
      "VIP backstage guided tour",
      "Professional theater guide",
      "Breakfast in the Green Room Café (morning tours only)",
      "Souvenir booklet about the Opera House",
      "Full-day access to public areas after the tour",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages beyond included breakfast",
      "Performance tickets",
      "Gratuities",
    ],
    itinerary: [
      "7:00 AM - Meet at Opera House Stage Door",
      "7:15 AM - Exclusive access to backstage areas and performance spaces",
      "8:30 AM - Visit Concert Hall and walk on the main stage",
      "9:00 AM - Explore the orchestra pit and technical areas",
      "9:30 AM - Breakfast in the Green Room Café",
      "10:00 AM - Tour conclusion with time for questions",
    ],
    cancellationPolicy:
      "Full refund if canceled 7 days in advance. 50% refund if canceled 3-7 days in advance. No refund for cancellations less than 3 days before scheduled tour.",
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
    isLuxury: true,
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is photography allowed during the tour?",
        answer:
          "Photography is permitted in most areas during the tour, except where indicated by your guide. Flash photography is not allowed in certain sensitive performance spaces.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour involves approximately 1 mile of walking, including stairs. Comfortable shoes are recommended. While the Opera House has elevators, some backstage areas are only accessible by stairs.",
      },
      {
        question: "Will we see performers or rehearsals?",
        answer:
          "While we cannot guarantee rehearsals or performers will be present during your tour, we often encounter technical crews preparing for productions. Early morning tours occasionally overlap with musician warm-ups or dance rehearsals.",
      },
    ],
  },
  {
    title: "Blue Mountains Wilderness & Wildlife",
    description:
      "Escape Sydney for a day exploring the stunning Blue Mountains National Park, including wildlife encounters, Aboriginal cultural sites, and spectacular valley views.",
    city: "Sydney",
    country: "Australia",
    region: "New South Wales",
    images: [
      "/images/tours/sydney/blue-mountains.jpg",
      "/images/tours/sydney/three-sisters.jpg",
    ],
    duration: "10 hours",
    price: "$195",
    rating: 4.8,
    tags: ["Nature", "Wildlife", "Aboriginal"],
    meetingPoint: {
      address: "178 King Street, Sydney NSW 2000",
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
      instructions:
        "Meet in front of the Wake Up! Sydney hostel on King Street. Our guide will be waiting with a 'Blue Mountains Discovery' sign.",
      contactNumber: "+61 2 9222 5800",
      contactEmail: "tours@bluemountainsdiscovery.com.au",
    },
    highlights: [
      "Visit the iconic Three Sisters rock formation with Aboriginal dreamtime stories",
      "Scenic nature walks through ancient eucalyptus forests",
      "Wildlife encounters with kangaroos, koalas, and native birds",
      "Spectacular panoramic views at Echo Point and Govetts Leap lookouts",
    ],
    inclusions: [
      "Transportation in luxury air-conditioned vehicle",
      "Professional guide with nature and cultural expertise",
      "National Park entrance fees",
      "Wildlife park admission",
      "Lunch at a local mountain café",
      "Hotel pickup and drop-off in central Sydney",
    ],
    exclusions: [
      "Additional food and drinks beyond included lunch",
      "Scenic Railway/Cableway rides (optional activity)",
      "Gratuities",
      "Personal expenses",
    ],
    itinerary: [
      "7:00 AM - Hotel pickups begin from central Sydney",
      "9:30 AM - Arrive at Echo Point for Three Sisters viewing and Aboriginal stories",
      "10:30 AM - Guided bushwalk along cliff-top trails",
      "12:00 PM - Lunch at mountain café",
      "1:30 PM - Wildlife park visit with native animal encounters",
      "3:00 PM - Visit Wentworth Falls and optional short hike",
      "4:00 PM - Begin return journey to Sydney",
      "6:00 PM - Arrive back in Sydney with hotel drop-offs",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before departure. 50% refund if canceled 24-48 hours before. No refund for cancellations less than 24 hours before scheduled tour.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
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
    tourCategoryId: "nature",
    faqs: [
      {
        question: "How much walking is involved in this tour?",
        answer:
          "The tour includes several short walks ranging from 15-30 minutes each on well-maintained trails. Total walking distance is approximately 2-3 km throughout the day. Comfortable walking shoes are recommended.",
      },
      {
        question: "What wildlife are we likely to see?",
        answer:
          "At the wildlife park, you'll see kangaroos, koalas, wombats, and various native birds up close. In the wild, we commonly spot cockatoos, rosellas, and occasionally wild kangaroos, though wildlife sightings cannot be guaranteed.",
      },
      {
        question: "What happens in case of bad weather?",
        answer:
          "The tour operates in most weather conditions including light rain. In case of severe weather, certain lookouts or walks may be substituted with alternative activities or indoor options. Full cancellations due to extreme weather are rare but would qualify for a full refund.",
      },
    ],
  },
  {
    title: "Sydney Harbour Sunset Dinner Cruise",
    description:
      "Experience Sydney's spectacular harbor at sunset aboard a luxury vessel, enjoying a gourmet dinner, premium wines, and unmatched views of the Opera House and Harbour Bridge illuminated at night.",
    city: "Sydney",
    country: "Australia",
    region: "New South Wales",
    images: [
      "/images/tours/sydney/harbour-cruise.jpg",
      "/images/tours/sydney/sunset-dinner.jpg",
    ],
    duration: "3 hours",
    price: "$149",
    rating: 4.9,
    tags: ["Cruise", "Dining", "Sunset"],
    meetingPoint: {
      address: "King Street Wharf 5, 32 The Promenade, Sydney NSW 2000",
      coordinates: {
        latitude: -33.8665,
        longitude: 151.2027,
      },
      instructions:
        "Meet at King Street Wharf 5, located in Darling Harbour. Please arrive 15 minutes before departure time for check-in.",
      contactNumber: "+61 2 8318 3900",
      contactEmail: "bookings@sydneyharbourcruises.com.au",
    },
    highlights: [
      "Cruise aboard a premium vessel with panoramic windows",
      "Witness the sunset over Sydney Harbour and watch the city lights come alive",
      "Enjoy a three-course gourmet dinner featuring fresh Australian seafood",
      "Pass iconic landmarks including Sydney Opera House and Luna Park from the water",
    ],
    inclusions: [
      "3-hour harbor cruise",
      "Three-course gourmet dinner",
      "Selection of Australian wines, beers, and soft drinks",
      "Live onboard entertainment",
      "Professional crew and attentive service",
      "All harbor fees and taxes",
    ],
    exclusions: [
      "Transportation to/from the departure point",
      "Premium spirits and cocktails (available for purchase)",
      "Souvenir photos (available for purchase onboard)",
      "Gratuities",
    ],
    itinerary: [
      "6:30 PM - Check-in at King Street Wharf 5",
      "7:00 PM - Vessel departs as canapes are served",
      "7:30 PM - Cruise past Opera House and Harbour Bridge during sunset",
      "8:00 PM - Main course dinner service begins",
      "8:45 PM - Dessert service as the vessel cruises through the illuminated harbor",
      "9:15 PM - Live entertainment and time for photographs",
      "9:45 PM - Return toward Darling Harbour",
      "10:00 PM - Disembarkation at King Street Wharf",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours before cruise. 50% refund if canceled 24-72 hours before. No refund for cancellations less than 24 hours before scheduled departure.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: false,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "Is there a dress code for the dinner cruise?",
        answer:
          "Smart casual attire is recommended. While formal wear is not required, many guests take the opportunity to dress up for this premium evening experience.",
      },
      {
        question: "Can dietary requirements be accommodated?",
        answer:
          "Yes, we can accommodate most dietary requirements including vegetarian, vegan, gluten-free, and allergies with advance notice. Please specify any dietary needs when booking.",
      },
      {
        question: "Is the vessel stable? I'm concerned about seasickness.",
        answer:
          "The vessel is large and stable, and Sydney Harbour is typically calm. However, if you're prone to motion sickness, we recommend taking preventative medication before boarding and choosing a seat in the middle of the vessel where movement is minimal.",
      },
    ],
  },
];

export default sydneyTours;
