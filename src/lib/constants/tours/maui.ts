import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const mauiTours: Tour[] = [
  {
    title: "Road to Hana Private Adventure",
    description:
      "Journey along Maui's legendary Road to Hana with a private guide who knows hidden waterfalls, secret beaches, and local stories missed by typical tours. Enjoy customized stops, gourmet picnic lunch, and photography at your own pace.",
    images: [
      "/images/tours/maui/road-to-hana.jpg",
      "/images/tours/maui/hana-waterfall.jpg",
    ],
    duration: "10 hours",
    price: "$295",
    rating: 4.9,
    tags: ["Scenic Drive", "Waterfalls", "Private Tour"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("maui", "adventure").name,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Will we have time to swim at any waterfalls?",
        answer:
          "Yes! Unlike rushed group tours, our private format allows time for swimming at 2-3 waterfall pools (weather permitting). Our guides know which falls are safest for swimming on any given day based on recent rainfall. We provide towels and dry bags for your convenience, so bring swimwear and water shoes if you'd like to take a dip in these pristine natural pools.",
      },
    ],
  },
  {
    title: "Sunrise at Haleakalā & Downhill Bike Adventure",
    description:
      "Witness the spectacular sunrise from the summit of Haleakalā volcano at 10,023 feet, then enjoy an exhilarating 27-mile guided bicycle descent through multiple climate zones with breathtaking views of Maui's central valley.",
    images: [
      "/images/tours/maui/haleakala-sunrise.jpg",
      "/images/tours/maui/volcano-biking.jpg",
    ],
    duration: "8 hours",
    price: "$195",
    rating: 4.8,
    tags: ["Sunrise", "Cycling", "National Park"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("maui", "adventure").name,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult is the bike ride down the volcano?",
        answer:
          "The bike descent is not technically challenging as it's primarily downhill on paved roads with very little pedaling required. Riders should be comfortable on bicycles and capable of controlling their speed. The main challenge is adapting to the switchbacks and maintaining safe distances between riders. We provide high-quality bikes with powerful disk brakes, helmets, gloves, and windbreaker jackets, plus comprehensive safety instruction before beginning the descent.",
      },
    ],
  },
  {
    title: "Traditional Hawaiian Cultural Immersion",
    description:
      "Connect deeply with Hawaiian culture through hands-on experiences taught by cultural practitioners. Learn traditional lei making, practice hula dancing, try your hand at ancient games, and participate in a traditional Hawaiian earth oven (imu) feast preparation.",
    images: [
      "/images/tours/maui/lei-making.jpg",
      "/images/tours/maui/hawaiian-culture.jpg",
    ],
    duration: "6 hours",
    price: "$175",
    rating: 4.9,
    tags: ["Hawaiian Culture", "Traditions", "Hands-on"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("maui", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this authentic Hawaiian culture or a tourist show?",
        answer:
          "This experience is designed and led by Native Hawaiian cultural practitioners who share genuine traditions passed down through generations. Unlike commercial luau shows, our program focuses on meaningful cultural education and participation. You'll learn about the spiritual significance behind practices like lei-making and hula, the historical context of Hawaiian traditions, and how these cultural elements remain vital in contemporary Hawaiian life. Our practitioners are respected community members committed to authentic cultural perpetuation.",
      },
    ],
  },
  {
    title: "Molokini Crater Snorkel & Marine Life Adventure",
    description:
      "Explore the vibrant underwater world of Molokini Crater, a submerged volcanic caldera with crystal-clear visibility. Snorkel alongside tropical fish, sea turtles, and coral formations with marine naturalist guides providing insight into Maui's unique ecosystem.",
    images: [
      "/images/tours/maui/molokini-crater.jpg",
      "/images/tours/maui/turtle-snorkeling.jpg",
    ],
    duration: "5 hours",
    price: "$145",
    rating: 4.7,
    tags: ["Snorkeling", "Marine Life", "Boat Tour"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("maui", "adventure").name,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need to be a strong swimmer to enjoy this tour?",
        answer:
          "While basic swimming ability is recommended, we accommodate all comfort levels with flotation devices, swim noodles, and guided instruction. Our boat has easy water entry platforms and our guides provide assistance in the water. For non-swimmers, we offer 'view boxes' to observe marine life from the boat and glass-bottom viewing areas. The water at Molokini is typically calm and clear, making it an ideal location even for beginners.",
      },
      {
        question: "What should I bring for the snorkeling portion?",
        answer:
          "We provide all necessary snorkeling gear including masks, fins, and snorkels. We recommend bringing a swimsuit, towel, sunscreen (reef-safe), a hat, and a light cover-up. If you have your own gear that you're comfortable with, feel free to bring it along. We also provide dry storage for personal items on the boat.",
      },
    ],
  },
  {
    title: "Farm-to-Table Culinary Tour & Cooking Class",
    description:
      "Discover Maui's agricultural bounty and culinary diversity with visits to upcountry farms, a goat cheese dairy, and tropical fruit plantations. Learn to prepare Hawaiian fusion cuisine in a hands-on cooking class featuring just-harvested ingredients.",
    images: [
      "/images/tours/maui/upcountry-farm.jpg",
      "/images/tours/maui/cooking-class.jpg",
    ],
    duration: "7 hours",
    price: "$215",
    rating: 4.8,
    tags: ["Culinary", "Farms", "Cooking"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("maui", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to prepare?",
        answer:
          "The menu varies seasonally based on farm harvests, but typically includes fresh poke (marinated raw fish), taro or breadfruit preparations, tropical fruit salsas, locally raised meats with Hawaiian seasonings, and lilikoi (passion fruit) desserts. Vegetarian, vegan, and gluten-free options are readily available. You'll learn traditional Hawaiian cooking techniques alongside modern Pacific Rim fusion approaches, with recipe cards provided to recreate these dishes at home.",
      },
      {
        question: "Do I need prior cooking experience?",
        answer:
          "No prior cooking experience is necessary! Our classes are designed for all skill levels, from beginners to experienced cooks. Chef James provides step-by-step guidance, and we encourage hands-on participation. You'll leave with new skills and confidence in preparing Hawaiian-inspired dishes.",
      },
    ],
  },
  {
    title: "Maui Photography Workshop & Sunset Safari",
    description:
      "Perfect your photography skills while capturing Maui's diverse landscapes from cascading waterfalls to dramatic coastlines. Culminates with an unforgettable sunset session at a prime location chosen based on current conditions and light.",
    images: [
      "/images/tours/maui/landscape-photography.jpg",
      "/images/tours/maui/sunset-photography.jpg",
    ],
    duration: "6 hours",
    price: "$185",
    rating: 4.8,
    tags: ["Photography", "Landscapes", "Sunset"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("maui", "art").name,
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "What locations will we photograph?",
        answer:
          "We select from over a dozen premier photography locations based on current weather conditions, seasonal factors, and group interests. Typical locations include the bamboo forests of Pipiwai Trail, dramatic lava-rock coastlines at Waianapanapa, colorful eucalyptus trees along the road to Hana, rolling lavender farms in upcountry Maui, and various beach locations optimal for sunset conditions on your specific tour date. Our guides monitor lighting conditions daily to determine the ideal sunset location.",
      },
      {
        question: "Do I need to bring my own camera?",
        answer:
          "Yes, please bring your own camera or smartphone. We can accommodate all skill levels and equipment types, from professional DSLRs to smartphones. If you have specific lenses or filters you prefer, feel free to bring them along. Our guides can provide tips on composition, lighting, and camera settings tailored to your equipment.",
      },
    ],
  },
  {
    title: "Private Outrigger Canoe & Cultural Ocean Experience",
    description:
      "Connect with Hawaii's voyaging heritage aboard a traditional outrigger canoe. Learn paddling techniques, navigation principles, and marine cultural knowledge while spotting sea turtles, dolphins, and seasonal whales in their natural habitat.",
    images: [
      "/images/tours/maui/outrigger-canoe.jpg",
      "/images/tours/maui/ocean-paddling.jpg",
    ],
    duration: "3 hours",
    price: "$125",
    rating: 4.9,
    tags: ["Cultural", "Paddling", "Ocean"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("maui", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Do we actually get to paddle the canoe?",
        answer:
          "Yes! This is a hands-on, participatory experience where everyone becomes part of the paddling team. After basic instruction on paddling technique and important Hawaiian canoe terminology, you'll join your guide in paddling the canoe. The outrigger design provides excellent stability, and no prior paddling experience is necessary. Children as young as 5 can participate with proper-sized paddles provided. The cooperative nature of canoe paddling makes this a wonderful bonding activity for families and groups.",
      },
      {
        question: "What should I wear for the canoe experience?",
        answer:
          "Wear comfortable, quick-drying clothing suitable for water activities. Swimsuits or athletic wear are ideal. We recommend water shoes or sandals with straps to keep them secure while paddling. Sunscreen, a hat, and sunglasses are also advisable, as you'll be exposed to the sun during the tour. We provide life jackets for all participants, which must be worn at all times while on the water.",
      },
    ],
  },
  {
    title: "Luxury Helicopter Tour: Complete Maui Experience",
    description:
      "Witness Maui's breathtaking diversity from the ultimate vantage point with this comprehensive helicopter tour featuring hidden waterfalls, inaccessible valleys, dormant volcano craters, and dramatic coastlines not visible from ground level.",
    images: [
      "/images/tours/maui/helicopter-waterfalls.jpg",
      "/images/tours/maui/aerial-coastline.jpg",
    ],
    duration: "90 minutes",
    price: "$395",
    rating: 5.0,
    tags: ["Helicopter", "Aerial", "Sightseeing"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("maui", "luxury").name,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Is seating assigned on the helicopter?",
        answer:
          "For optimal viewing, we rotate seating positions during the flight, ensuring every passenger gets front-seat views for portions of the journey. Our helicopters feature floor-to-ceiling glass windows specifically designed for sightseeing. For photography enthusiasts, we offer a doors-off option (additional fee) on certain helicopters for unobstructed shooting. Weight and balance requirements sometimes influence seating arrangements for safety purposes.",
      },
      {
        question: "What should I wear for the helicopter tour?",
        answer:
          "Dress comfortably in lightweight, breathable clothing. We recommend closed-toe shoes and a light jacket as it can be cooler at higher altitudes. Avoid loose items that could fly around in the cabin. We provide noise-canceling headsets for each passenger, which also include a microphone for communication with the pilot and other passengers.",
      },
    ],
  },
  {
    title: "Maui Whale Watching & Marine Conservation Cruise",
    description:
      "Join a marine biologist-led expedition to witness the majestic humpback whales that migrate to Maui's warm waters each winter. Learn about their behavior, conservation efforts, and the unique marine ecosystem of Hawaii.",
    images: [
      "/images/tours/maui/whale-watching.jpg",
      "/images/tours/maui/humpback-whale.jpg",
    ],
    duration: "3 hours",
    price: "$99",
    rating: 4.9,
    tags: ["Whale Watching", "Marine Life", "Conservation"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("maui", "adventure").name,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "When is the best time for whale watching in Maui?",
        answer:
          "The peak whale watching season in Maui runs from mid-December through early May, with the highest concentrations typically from January to March. During this time, thousands of humpback whales migrate from Alaska to breed and give birth in Maui's warm waters. Our tours are timed to maximize sightings, and we often see multiple whales breaching, tail slapping, and even mothers with calves during this period.",
      },
      {
        question: "What should I bring for the whale watching tour?",
        answer:
          "We recommend wearing layers as it can be cooler on the water, especially in the morning. Bring a light jacket, sunscreen (reef-safe), a hat, and sunglasses. A camera or smartphone with a zoom lens is great for capturing photos of the whales. We provide binoculars for all guests, but feel free to bring your own if you prefer.",
      },
    ],
  },
];

export default mauiTours;
