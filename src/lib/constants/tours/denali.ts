import { Tour } from "@/lib/interfaces/services/tours";

export const denaliTours: Tour[] = [
  {
    title: "Denali National Park Wildlife Safari",
    description:
      "Embark on a guided safari through Denali National Park, home to North America's highest peak and diverse wildlife including grizzly bears, moose, and caribou.",
    city: "Denali Park",
    country: "United States",
    state: "Alaska",
    region: "Interior Alaska",
    images: [
      "/images/tours/denali/wildlife-safari.jpg",
      "/images/tours/denali/grizzly-bear.jpg",
    ],
    duration: "8 hours",
    price: "$150",
    rating: 4.9,
    tags: ["Wildlife", "Adventure", "Nature"],
    isHistorical: false,
    isRomantic: false,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "adventure",
    meetingPoint: {
      address: "Denali Visitor Center, Parks Hwy, Denali Park, AK",
      coordinates: {
        latitude: 63.7284,
        longitude: -148.8867,
      },
      instructions:
        "Meet your guide at the Visitor Center entrance at 8:00 AM sharp.",
      contactNumber: "+1 907-555-0198",
    },
    faqs: [
      {
        question: "What should I wear for the safari?",
        answer:
          "Dress in layers with waterproof clothing, sturdy hiking boots, and bring binoculars for wildlife viewing.",
      },
      {
        question: "Is lunch provided during the tour?",
        answer:
          "Yes, a packed lunch will be provided. Please inform us of any dietary restrictions in advance.",
      },
      {
        question: "Can we see the Northern Lights on this tour?",
        answer:
          "This tour focuses on wildlife viewing. For Northern Lights experiences, consider our evening tours.",
      },
    ],
    highlights: [
      "See wildlife such as bears, moose, and caribou in their natural habitat",
      "Explore the breathtaking scenery of Denali National Park",
      "Ride in a comfortable safari vehicle with expert narration",
      "Learn about Denali’s unique ecosystems and geography",
      "Stop at scenic overlooks for photography opportunities",
    ],
    inclusions: [
      "Guided safari tour by wildlife expert",
      "Packed lunch and bottled water",
      "Use of binoculars and wildlife spotting gear",
      "Park entrance fees",
      "Transportation within the park",
    ],
    exclusions: [
      "Gratuities for the guide",
      "Travel insurance",
      "Personal snacks or drinks",
      "Transportation to/from the park",
    ],
    itinerary: [
      "08:00 - Meet at Denali Visitor Center",
      "08:15 - Orientation and safety briefing",
      "08:30 - Depart for wildlife viewing safari",
      "11:00 - Scenic photo stop and light refreshments",
      "12:30 - Lunch break at Toklat River rest area",
      "14:00 - Continue wildlife viewing en route back",
      "16:00 - Return to Visitor Center",
    ],
  },
  {
    title: "Denali Scenic Flight & Glacier Landing",
    description:
      "Experience breathtaking aerial views of Denali's glaciers and peaks, followed by a thrilling glacier landing for an up-close encounter with the Alaskan wilderness.",
    city: "Denali Park",
    country: "United States",
    state: "Alaska",
    region: "Interior Alaska",
    images: [
      "/images/tours/denali/scenic-flight.jpg",
      "/images/tours/denali/glacier-landing.jpg",
    ],
    duration: "3 hours",
    price: "$300",
    rating: 4.8,
    tags: ["Scenic", "Adventure", "Glacier"],
    isHistorical: false,
    isRomantic: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "adventure",
    meetingPoint: {
      address: "Talkeetna Air Taxi Office, Talkeetna, AK",
      coordinates: {
        latitude: 62.3209,
        longitude: -150.1066,
      },
      instructions:
        "Arrive at the Talkeetna Air Taxi 30 minutes before departure. Check-in at the front desk.",
      contactNumber: "+1 907-555-0123",
    },
    faqs: [
      {
        question: "Do I need prior flying experience for this tour?",
        answer:
          "No prior flying experience is required. Our experienced pilots will guide you throughout the flight.",
      },
      {
        question: "What should I bring on the flight?",
        answer:
          "Bring a camera, warm clothing, and any personal items you may need. We provide safety gear for the glacier landing.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, children are welcome on this tour. However, they must be accompanied by an adult and meet the minimum age requirement for safety.",
      },
    ],
    highlights: [
      "Aerial views of Denali and surrounding ranges",
      "Landing on a remote glacier with time to explore",
      "Professional narration from experienced pilot",
      "Unmatched photography opportunities from the sky",
      "Experience Denali from a unique and unforgettable perspective",
    ],
    inclusions: [
      "Flight tour with glacier landing",
      "Safety gear and glacier footwear",
      "Professional pilot guide",
      "Photo opportunities and commentary",
    ],
    exclusions: [
      "Hotel transfers",
      "Meals or snacks",
      "Gratuities",
      "Travel insurance",
    ],
    itinerary: [
      "09:30 - Check in at Talkeetna Air Taxi Office",
      "10:00 - Depart for flight tour",
      "10:30 - Glacier landing and exploration",
      "11:30 - Return flight to base",
      "12:00 - Tour concludes",
    ],
  },
  {
    title: "Denali Hiking Adventure",
    description:
      "Join a guided hiking adventure through Denali's stunning landscapes, exploring hidden trails and enjoying panoramic views of the park's natural beauty.",
    city: "Denali Park",
    country: "United States",
    state: "Alaska",
    region: "Interior Alaska",
    images: [
      "/images/tours/denali/hiking-adventure.jpg",
      "/images/tours/denali/panoramic-view.jpg",
    ],
    duration: "6 hours",
    price: "$120",
    rating: 4.7,
    tags: ["Hiking", "Nature", "Adventure"],
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
    isFree: false,
    isPopular: false,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "adventure",
    meetingPoint: {
      address: "Denali Park Village Lodge, Milepost 231, Parks Hwy",
      coordinates: {
        latitude: 63.6552,
        longitude: -148.8457,
      },
      instructions:
        "Meet your hiking guide at the main lodge entrance 15 minutes before departure.",
      contactNumber: "+1 907-555-0175",
    },
    faqs: [
      {
        question: "What level of fitness is required for this hike?",
        answer:
          "This hike is suitable for moderate fitness levels. Our guides will adjust the pace based on the group's abilities.",
      },
      {
        question: "Are trekking poles provided?",
        answer:
          "Yes, trekking poles are available for use during the hike. We recommend bringing your own if you prefer.",
      },
      {
        question: "Can I bring my dog on this hike?",
        answer:
          "Unfortunately, pets are not allowed on this guided hike to protect the wildlife and natural environment of Denali National Park.",
      },
    ],
    highlights: [
      "Hike through unspoiled wilderness with expert naturalists",
      "Discover native flora and fauna along hidden trails",
      "Experience panoramic vistas of Denali's rugged terrain",
      "Learn about park geology and conservation efforts",
      "Perfect for photography and nature lovers",
    ],
    inclusions: [
      "Guided hike with expert naturalist",
      "Trekking poles (optional)",
      "Bottled water and snacks",
      "National park permit fees",
    ],
    exclusions: [
      "Transportation to/from trailhead",
      "Gratuities",
      "Travel insurance",
      "Lunch (optional box lunch available for purchase)",
    ],
    itinerary: [
      "09:00 - Meet at Denali Park Village Lodge",
      "09:15 - Begin guided hike",
      "12:00 - Rest and snack break with scenic views",
      "14:30 - Conclude hike and return to lodge",
    ],
  },
];

export default denaliTours;
