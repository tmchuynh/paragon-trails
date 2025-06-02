import { Tour } from "@/lib/interfaces/services/tours";

export const washingtonTours: Tour[] = [
  {
    title: "Monuments & Memorials by Moonlight",
    description:
      "Experience the magic of Washington DC's iconic monuments and memorials illuminated against the night sky, with fewer crowds and dramatic lighting.",
    city: "Washington",
    country: "United States",
    region: "District of Columbia",
    images: [
      "/images/tours/washington/lincoln-memorial-night.jpg",
      "/images/tours/washington/washington-monument-night.jpg",
    ],
    duration: "3 hours",
    price: "$55",
    rating: 4.9,
    tags: ["Monuments", "Night Tour", "Photography"],
    meetingPoint: {
      address: "2 Lincoln Memorial Cir NW, Washington, DC 20037",
      coordinates: {
        latitude: 38.8893,
        longitude: -77.0502,
      },
      instructions:
        "Meet at the bottom of the Lincoln Memorial steps. Your guide will be holding a blue lantern.",
      contactNumber: "+1 (202) 555-7890",
      contactEmail: "tours@dcbynight.com",
    },
    highlights: [
      "Experience the Lincoln Memorial with dramatic evening lighting",
      "Visit the Vietnam Veterans Memorial as it takes on a particularly moving atmosphere at night",
      "See the Washington Monument reflected in the Reflecting Pool",
      "Learn fascinating historical details that most visitors miss",
    ],
    inclusions: [
      "Professional licensed guide",
      "Small group experience (maximum 12 people)",
      "Bottled water",
      "Commemorative postcard",
      "Photography tips for night shooting",
    ],
    exclusions: [
      "Transportation to/from meeting point",
      "Food and beverages beyond water",
      "Gratuities",
    ],
    itinerary: [
      "7:30 PM - Meet at Lincoln Memorial",
      "7:45 PM - Lincoln Memorial tour and history",
      "8:15 PM - Vietnam Veterans Memorial by night",
      "8:45 PM - Korean War Veterans Memorial illuminated",
      "9:15 PM - World War II Memorial with fountain lights",
      "9:45 PM - Washington Monument and Reflecting Pool views",
      "10:30 PM - Tour conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours in advance. 50% refund if canceled 12-24 hours in advance. No refund for cancellations less than 12 hours before the tour or no-shows.",
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: true,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 2 miles (3.2 km) of walking at a leisurely pace with many stops. Comfortable shoes are recommended.",
      },
      {
        question: "Is this tour good for photography?",
        answer:
          "Absolutely! The monuments are beautifully illuminated at night, creating perfect photo opportunities. Your guide will point out the best angles and provide night photography tips for smartphones and cameras.",
      },
      {
        question: "What happens in bad weather?",
        answer:
          "Tours operate in light rain with umbrellas provided. In cases of severe weather, we may modify the route to include more covered areas or offer to reschedule for another evening.",
      },
    ],
  },
  {
    title: "Smithsonian & National Archives VIP Tour",
    description:
      "Get insider access to the treasures of Washington's premier museums with skip-the-line privileges and expert guidance through the most significant exhibits.",
    city: "Washington",
    country: "United States",
    region: "District of Columbia",
    images: [
      "/images/tours/washington/smithsonian.jpg",
      "/images/tours/washington/national-archives.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Museums", "History", "Art"],
    meetingPoint: {
      address:
        "Constitution Ave NW Entrance, National Museum of American History",
      coordinates: {
        latitude: 38.8915,
        longitude: -77.0307,
      },
      instructions:
        "Meet at the Constitution Avenue entrance of the National Museum of American History. Your guide will be holding a 'Smithsonian VIP' sign.",
      contactNumber: "+1 (202) 555-1234",
      contactEmail: "vip@dctourexperts.com",
    },
    highlights: [
      "Skip-the-line access to the National Archives' Rotunda for the Charters of Freedom",
      "View the Declaration of Independence, Constitution, and Bill of Rights up close",
      "Access the Smithsonian 'nation's attic' collections not on public display",
      "Expert commentary on America's most treasured historical artifacts",
    ],
    inclusions: [
      "Expert historian guide with museum expertise",
      "Reserved entry times for popular exhibits",
      "Behind-the-scenes access where available",
      "Small group size (maximum 8 people)",
      "Lunch at the Smithsonian Castle café",
    ],
    exclusions: [
      "Transportation between museums (walking tour)",
      "Additional food and beverages beyond included lunch",
      "Gratuities",
      "Museum souvenirs",
    ],
    itinerary: [
      "9:30 AM - Meet at National Museum of American History",
      "9:45 AM - VIP tour of American History highlights",
      "11:15 AM - Walk to National Archives",
      "11:30 AM - Priority access to the National Archives Rotunda",
      "12:45 PM - Lunch at Smithsonian Castle café",
      "1:45 PM - Tour of National Air and Space Museum",
      "3:00 PM - Special access to selected museum archives or conservation lab",
      "3:45 PM - Tour conclusion with recommendations for further exploration",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours in advance. 50% refund if canceled 48-72 hours in advance. No refund for cancellations less than 48 hours before the tour.",
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
        question: "Which Smithsonian museums does this tour visit?",
        answer:
          "The tour typically includes the National Museum of American History, National Air and Space Museum, and National Archives. Specific museums can be customized based on your interests.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour involves approximately 1.5 miles of walking throughout the day, mostly indoors. There is considerable standing in museums, though seating is available in many galleries.",
      },
      {
        question: "Can I take photographs in the National Archives?",
        answer:
          "Photography is prohibited in the Rotunda where the Declaration of Independence, Constitution, and Bill of Rights are displayed. Photography is permitted in most areas of the Smithsonian museums, though some exhibits may have restrictions.",
      },
    ],
  },
  {
    title: "Georgetown's Historic Homes & Waterfront",
    description:
      "Explore the charming streets of Georgetown with a local historian, visiting historic homes, gardens, and the scenic waterfront while learning about the neighborhood's rich history.",
    city: "Washington",
    country: "United States",
    region: "District of Columbia",
    images: [
      "/images/tours/washington/georgetown-homes.jpg",
      "/images/tours/washington/georgetown-waterfront.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.7,
    tags: ["History", "Architecture", "Waterfront"],
    meetingPoint: {
      address: "3000 M Street NW, Washington, DC 20007",
      coordinates: {
        latitude: 38.9048,
        longitude: -77.0616,
      },
      instructions:
        "Meet in front of Dean & DeLuca at the corner of M Street and Potomac Street in Georgetown.",
      contactNumber: "+1 (202) 555-4567",
      contactEmail: "tours@historicgeorgetown.com",
    },
    highlights: [
      "Stroll along the picturesque C&O Canal with its historic lockkeeper's house",
      "View Georgetown's oldest surviving building, the Old Stone House (1765)",
      "Explore hidden residential streets with Federal, Victorian, and Georgian architecture",
      "Visit the scenic Georgetown Waterfront Park with Potomac River views",
    ],
    inclusions: [
      "Expert local historian guide",
      "Small group experience (maximum 10 people)",
      "Access to select private gardens (seasonal)",
      "Georgetown history booklet",
      "Bottled water",
    ],
    exclusions: [
      "Transportation to/from Georgetown",
      "Food and additional beverages",
      "Interior visits to private homes",
      "Gratuities",
    ],
    itinerary: [
      "10:00 AM - Meet at M Street starting point",
      "10:15 AM - Walking tour of historic commercial district",
      "10:45 AM - Visit to Old Stone House and gardens",
      "11:30 AM - Explore residential streets and historic homes",
      "12:30 PM - Visit Tudor Place exterior and gardens",
      "1:15 PM - Stroll along C&O Canal",
      "1:45 PM - Georgetown Waterfront Park and harbor views",
      "2:00 PM - Tour conclusion with lunch recommendations",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the tour.",
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
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: true,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Are the historic homes open for interior visits?",
        answer:
          "The tour includes exterior visits to several historic homes and gardens. Some homes may offer limited interior access depending on availability and scheduling.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive storytelling and exploration.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 2 miles of walking at a leisurely pace on sidewalks, cobblestone streets, and occasionally uneven surfaces. Georgetown has some hills, so comfortable walking shoes are essential.",
      },
    ],
  },
];

export default washingtonTours;
