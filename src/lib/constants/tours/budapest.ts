import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const budapestTours: Tour[] = [
  {
    title: "Thermal Bath Experience & Spa Heritage",
    description:
      "Immerse yourself in Budapest's famous spa culture with an expert-guided tour of historic bath houses, culminating in a private thermal spa experience with treatments based on centuries-old Hungarian wellness traditions.",
    images: [
      "/images/tours/budapest/szechenyi-baths.jpg",
      "/images/tours/budapest/gellert-spa.jpg",
    ],
    duration: "4 hours",
    price: "$145",
    rating: 4.9,
    tags: ["Thermal Baths", "Wellness", "History"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("budapest", "wellness").name,
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "What should I bring for the thermal bath experience?",
        answer:
          "Please bring your swimwear, a towel (though towels can also be rented), flip-flops, and a water bottle. Shower facilities and lockers are provided. For the mixed-gender areas, swimwear is required, while in certain single-gender sections, it may be optional following European spa traditions.",
      },
      {
        question: "Are the thermal baths suitable for children?",
        answer:
          "Yes, many of Budapest's thermal baths are family-friendly, with designated areas for children. However, some treatments and certain pools may have age restrictions. Please check with us if you plan to bring children.",
      },
      {
        question: "Can I book spa treatments in advance?",
        answer:
          "Yes, we can arrange additional spa treatments such as massages or beauty therapies at the baths. Please let us know your preferences when booking.",
      },
    ],
  },
  {
    title: "Underground Budapest: Caves & Bunkers",
    description:
      "Discover Budapest's fascinating subterranean world with explorations of natural cave systems beneath Buda Castle, WWII bunkers, and the secret Hospital in the Rock, revealing hidden aspects of the city's geology and turbulent history.",
    images: [
      "/images/tours/budapest/hospital-rock.jpg",
      "/images/tours/budapest/cave-system.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Underground", "History", "Caves"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("budapest", "adventure").name,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Is this tour suitable for claustrophobic individuals?",
        answer:
          "Parts of this tour involve narrow passages and underground spaces that may be challenging for those with severe claustrophobia. The Hospital in the Rock and certain bunker sections have wider spaces and higher ceilings, while some cave passages are narrower with lower clearance. Please contact us to discuss specific concerns before booking.",
      },
      {
        question: "What should I wear for the underground tour?",
        answer:
          "We recommend wearing comfortable, sturdy shoes suitable for uneven terrain, as well as clothing that can get dirty. A light jacket is advisable, as underground temperatures can be cooler than above ground. Helmets are provided where necessary.",
      },
      {
        question: "Are there any age restrictions for this tour?",
        answer:
          "This tour is generally suitable for all ages, but children must be accompanied by an adult. Some areas may not be stroller-friendly, so please consider this if bringing young children.",
      },
    ],
  },
  {
    title: "Budapest Culinary Delights: Market & Cooking Class",
    description:
      "Experience Budapest's vibrant food scene with a guided tour of the Great Market Hall, followed by a hands-on cooking class where you will learn to prepare traditional Hungarian dishes using fresh, local ingredients.",
    images: [
      "/images/tours/budapest/great-market-hall.jpg",
      "/images/tours/budapest/cooking-class.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Culinary", "Cooking Class", "Local Experience"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("budapest", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Do I need any cooking experience for the class?",
        answer:
          "No prior cooking experience is required. Our classes are designed for all skill levels, from beginners to experienced cooks. We provide step-by-step instructions and all necessary equipment.",
      },
      {
        question: "What types of dishes will we prepare?",
        answer:
          "You will learn to make classic Hungarian dishes such as goulash, chimney cake, and stuffed peppers. Vegetarian options are available upon request.",
      },
      {
        question: "Is the market tour included in the price?",
        answer:
          "Yes, the market tour is included in the package. You will explore the market with your guide before heading to the cooking class location.",
      },
    ],
  },
  {
    title: "Budapest's Hidden Ruin Bars & Street Art",
    description:
      "Explore Budapest's unique ruin bars and vibrant street art scene with a local guide, visiting eclectic bars set in abandoned buildings and discovering the city's creative urban art in hidden alleys and courtyards.",
    images: [
      "/images/tours/budapest/ruin-bar.jpg",
      "/images/tours/budapest/street-art.jpg",
    ],
    duration: "3 hours",
    price: "$70",
    rating: 4.6,
    tags: ["Nightlife", "Street Art", "Local Experience"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("budapest", "nightlife").name,
    tourCategoryId: "nightlife",
    faqs: [
      {
        question: "Are the ruin bars suitable for all ages?",
        answer:
          "Most ruin bars are 18+ venues due to their nightlife focus, but some may allow younger visitors during the day. Please check with us if you plan to bring minors.",
      },
      {
        question: "What should I wear for the bar tour?",
        answer:
          "Dress casually! Budapest's ruin bars have a relaxed atmosphere, so comfortable clothing and shoes are recommended. Some bars may have dress codes, so check in advance if you're unsure.",
      },
      {
        question: "Is this tour available at night?",
        answer:
          "Yes, we offer evening tours that start around 7 PM to experience the nightlife. Daytime tours are also available for those who prefer a more relaxed pace.",
      },
    ],
  },
  {
    title: "Buda Castle & Fisherman's Bastion: History & Views",
    description:
      "Discover the rich history of Buda Castle and the stunning views from Fisherman's Bastion with a knowledgeable guide, exploring medieval architecture, royal history, and panoramic vistas of the Danube and Pest side.",
    images: [
      "/images/tours/budapest/buda-castle.jpg",
      "/images/tours/budapest/fishermans-bastion.jpg",
    ],
    duration: "3 hours",
    price: "$60",
    rating: 4.8,
    tags: ["History", "Architecture", "Views"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("budapest", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive storytelling and fun facts about the history of Buda Castle.",
      },
      {
        question: "What should I wear for the castle tour?",
        answer:
          "Comfortable walking shoes are recommended as there will be some uphill walking. The castle area can be windy, so a light jacket is advisable.",
      },
      {
        question: "Are there any accessibility options available?",
        answer:
          "Yes, while some areas have cobblestone paths, there are accessible routes available. Please inform us in advance if you have specific accessibility needs.",
      },
    ],
  },
  {
    title: "Danube River Cruise & City Lights",
    description:
      "Experience Budapest's stunning skyline from the water with a scenic evening cruise on the Danube, enjoying views of illuminated landmarks like the Parliament, Buda Castle, and the Chain Bridge while sipping on Hungarian wine.",
    images: [
      "/images/tours/budapest/danube-cruise.jpg",
      "/images/tours/budapest/city-lights.jpg",
    ],
    duration: "2 hours",
    price: "$50",
    rating: 4.9,
    tags: ["Scenic", "Nightlife", "Romantic"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("budapest", "romantic").name,
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "What time does the cruise start?",
        answer:
          "Our evening cruises typically start at 7 PM, but we recommend checking the schedule as times may vary depending on the season.",
      },
      {
        question: "Is food and drink included in the cruise?",
        answer:
          "Yes, a welcome drink is included in the ticket price. Additional drinks and snacks can be purchased on board.",
      },
      {
        question: "Can I book a private table for a special occasion?",
        answer:
          "Yes, we offer private table bookings for special occasions. Please contact us in advance to arrange this.",
      },
    ],
  },
  {
    title: "Jewish Heritage Tour: Synagogues & History",
    description:
      "Explore Budapest's rich Jewish heritage with a guided tour of the Dohany Street Synagogue, the largest in Europe, and other significant sites, learning about the history, culture, and contributions of the Jewish community in Budapest.",
    images: [
      "/images/tours/budapest/dohany-synagogue.jpg",
      "/images/tours/budapest/jewish-quarter.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Cultural", "Historical", "Religious"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("budapest", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is there a dress code for visiting the synagogue?",
        answer:
          "Yes, visitors are required to dress modestly when entering the synagogue. This typically means covering shoulders and knees. Scarves are available for those who need them.",
      },
      {
        question: "Are there any age restrictions for this tour?",
        answer:
          "This tour is suitable for all ages. Children are welcome, and we can provide family-friendly explanations of the historical sites.",
      },
      {
        question: "Can I take photos inside the synagogue?",
        answer:
          "Photography is allowed in most areas of the synagogue, but please be respectful and avoid using flash during services or ceremonies.",
      },
    ],
  },
];

export default budapestTours;
