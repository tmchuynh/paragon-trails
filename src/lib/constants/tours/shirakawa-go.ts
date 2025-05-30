import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const shirakawagoTours: Tour[] = [
  {
    title: "Historic Gassho-Zukuri Farmhouse Experience",
    description:
      "Step back in time with an immersive visit to Shirakawa-go's UNESCO-listed traditional farmhouses. Explore these architectural marvels with distinctive steep thatched roofs designed to withstand heavy snowfall, and spend the night in an authentic gassho-style home with a local family.",
    images: [
      "/images/tours/shirakawa-go/gassho-houses.jpg",
      "/images/tours/shirakawa-go/farmhouse-interior.jpg",
    ],
    duration: "24 hours",
    price: "$175",
    rating: 4.9,
    tags: ["UNESCO Heritage", "Traditional Architecture", "Homestay"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("shirakawa-go", "historical").name,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What are the sleeping arrangements in the farmhouse?",
        answer:
          "You'll sleep on traditional futon bedding laid out on tatami mat floors in a communal sleeping area, just as Japanese families have done for centuries. The farmhouses are equipped with modern amenities like electricity, heating, and indoor plumbing, while maintaining their historic character. While the accommodations are rustic, they are clean and comfortable, offering an authentic glimpse into traditional rural Japanese lifestyle.",
      },
    ],
  },
  {
    title: "Winter Illumination & Snow Festival Tour",
    description:
      "Experience the magical winter illumination event when Shirakawa-go's historic village is lit up against a snowy backdrop, creating a scene straight from a fairy tale. View the village from the special observation deck and participate in traditional winter activities and festival celebrations.",
    images: [
      "/images/tours/shirakawa-go/winter-illumination.jpg",
      "/images/tours/shirakawa-go/snow-festival.jpg",
    ],
    duration: "8 hours",
    price: "$120",
    rating: 5.0,
    tags: ["Winter", "Festival", "Illumination"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("shirakawa-go", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "When exactly does the winter illumination take place?",
        answer:
          "The special illumination events typically occur on selected evenings in January and February, usually on Sundays and during Japanese holidays. Dates are confirmed by the village council each autumn for the coming winter season. Our tour is specifically scheduled to coincide with these magical evenings when the entire historic village is illuminated against the snow. As this is an extremely popular event, we secure access well in advance and provide special transportation to avoid the limited parking and traffic restrictions.",
      },
    ],
  },
  {
    title: "Traditional Craft Workshop & Cultural Heritage",
    description:
      "Learn traditional Japanese crafts practiced for generations in this mountain village. Master the basics of washi paper making, try your hand at sarubobo doll creation, or learn fabric dyeing techniques using traditional plant-based pigments under the guidance of local artisans.",
    images: [
      "/images/tours/shirakawa-go/craft-workshop.jpg",
      "/images/tours/shirakawa-go/washi-making.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Crafts", "Traditional Arts", "Hands-on"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("shirakawa-go", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What craft will I get to make during the workshop?",
        answer:
          "When booking, you can select one of three traditional crafts: washi paper making, where you'll create decorative papers using traditional fiber techniques; sarubobo doll creation, crafting the faceless dolls that are traditional Hida region charms for good luck; or fabric dyeing using natural indigo and plant-based dyes with traditional stencil patterns. Each workshop is approximately 2 hours and you'll create a finished piece to take home as a souvenir.",
      },
    ],
  },
  {
    title: "Shirakawa-go Photography Tour: Four Seasons",
    description:
      "Capture the stunning beauty of Shirakawa-go in your chosen season with a photography-focused tour led by a professional landscape photographer. Learn techniques specifically suited to the lighting and conditions of the village, whether blanketed in snow, surrounded by cherry blossoms, lush with summer greenery, or adorned with autumn foliage.",
    images: [
      "/images/tours/shirakawa-go/autumn-village.jpg",
      "/images/tours/shirakawa-go/photography-viewpoint.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Photography", "Landscape", "Seasonal"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("shirakawa-go", "art").name,
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "Which season is best for photography in Shirakawa-go?",
        answer:
          "Each season offers distinctive photographic opportunities: Winter (December-February) provides the classic snow-covered village scenes with dramatic lighting; Spring (April-May) features cherry blossoms and new greenery against the traditional houses; Summer (June-August) offers lush rice fields and vibrant blue skies; while Autumn (October-November) brings spectacular red and gold foliage. Our guide will take you to season-specific viewpoints and adjust techniques for the current lighting conditions. The tour operates year-round with seasonal adaptations.",
      },
    ],
  },
  {
    title: "Farm-to-Table Hida Cuisine Experience",
    description:
      "Discover the unique mountain cuisine of the Hida region with a hands-on culinary journey. Harvest seasonal ingredients from a local farm, learn traditional preservation techniques vital for mountain winters, and cook regional specialties like Hida beef, mountain vegetables, and hoba miso in a traditional irori hearth.",
    images: [
      "/images/tours/shirakawa-go/hida-beef.jpg",
      "/images/tours/shirakawa-go/irori-cooking.jpg",
    ],
    duration: "6 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Culinary", "Farm Visit", "Cooking"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("shirakawa-go", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we prepare during the cooking class?",
        answer:
          "The menu changes seasonally but typically includes: Hoba miso (local miso grilled on a magnolia leaf), Hida beef preparation (premium local wagyu), seasonal mountain vegetable dishes, traditional pickles, and gohei mochi (pounded rice cakes with walnut sauce). Vegetarian options are available with advance notice. All cooking is done using traditional methods including the irori (sunken hearth) that forms the center of traditional gassho-zukuri houses. You'll receive recipe cards to recreate these dishes at home.",
      },
    ],
  },
  {
    title: "Hidden Villages Cycling Tour",
    description:
      "Explore beyond Shirakawa-go to discover lesser-known traditional villages in the surrounding mountains. This guided bicycle tour follows scenic country roads to neighboring hamlets like Suganuma and Ainokura, which offer authentic rural experiences with fewer tourists.",
    images: [
      "/images/tours/shirakawa-go/countryside-cycling.jpg",
      "/images/tours/shirakawa-go/hidden-village.jpg",
    ],
    duration: "7 hours",
    price: "$95",
    rating: 4.6,
    tags: ["Cycling", "Rural", "Off the Beaten Path"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("shirakawa-go", "adventure").name,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How difficult is the cycling route?",
        answer:
          "The route covers approximately 25km (15.5 miles) through rolling countryside with some moderate hills. We use comfortable hybrid bikes with appropriate gearing, and the pace is leisurely with many stops for sightseeing and photography. Basic cycling experience and average fitness are sufficient. For those concerned about the hills, we offer electric-assist bicycles for an additional fee (must be reserved in advance). This tour operates from April to November when roads are clear of snow.",
      },
    ],
  },
  {
    title: "Shirakawa-go & Takayama Cultural Day Trip",
    description:
      "Combine a visit to Shirakawa-go's UNESCO World Heritage village with the beautifully preserved old town of Takayama. Explore traditional architecture, historic districts, local markets, and centuries-old traditions in these two complementary destinations that showcase rural Japan at its most authentic.",
    images: [
      "/images/tours/shirakawa-go/village-overview.jpg",
      "/images/tours/shirakawa-go/takayama-old-town.jpg",
    ],
    duration: "Full day",
    price: "$135",
    rating: 4.8,
    tags: ["Day Trip", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("shirakawa-go", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How much time do we spend in each location?",
        answer:
          "We typically spend 2-3 hours exploring Shirakawa-go in the morning, including the open-air museum and key historic buildings, followed by 3-4 hours in Takayama's old town district in the afternoon. The exact timing can be adjusted based on group interests and seasonal factors like daylight hours. Transportation between sites takes approximately 50 minutes through scenic mountain roads. Lunch is included at a traditional restaurant serving local specialties.",
      },
    ],
  },
  {
    title: "Shirakawa-go Festival & Folk Performance",
    description:
      "Coincide your visit with one of Shirakawa-go's traditional festivals or special folk performance days. Witness age-old rituals, traditional dances, music, and celebrations that have been preserved for generations in this remote mountain community.",
    images: [
      "/images/tours/shirakawa-go/doburoku-festival.jpg",
      "/images/tours/shirakawa-go/traditional-dance.jpg",
    ],
    duration: "6 hours",
    price: "$90",
    rating: 4.9,
    tags: ["Festival", "Performance", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("shirakawa-go", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What festivals might be included in this tour?",
        answer:
          "The main festivals include: Doburoku Festival (mid-October) featuring sacred sake offerings, traditional lion dances, and folk performances; Shirakawa-go Hatsubon Dance (late August) with Buddhist rituals and ancestor memorial ceremonies; and the Spring/Autumn Fire Festival drills (June and November) demonstrating the village's traditional firefighting techniques - critical for preserving these wooden structures. We schedule this special tour to coincide with festival dates or regular folk performance days at the Gassho-zukuri Minkaen open-air museum.",
      },
    ],
  },
  {
    title: "Shirakawa-go Nature Walks & Birdwatching",
    description:
      "Explore the stunning natural landscapes surrounding Shirakawa-go with a guided nature walk focusing on local flora and fauna. Ideal for birdwatchers, this tour takes you through diverse habitats where you can spot endemic species and learn about the region's ecology.",
    images: [
      "/images/tours/shirakawa-go/nature-walk.jpg",
      "/images/tours/shirakawa-go/birdwatching.jpg",
    ],
    duration: "4 hours",
    price: "$80",
    rating: 4.7,
    tags: ["Nature", "Birdwatching", "Ecology"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("shirakawa-go", "wellness").name,
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "What kind of birds can we expect to see?",
        answer:
          "Depending on the season, you may spot Japanese white eyes, Japanese thrushes, Japanese grosbeaks, and various migratory species.  The area is also home to many endemic plants and trees, including the iconic Japanese cedar. Our guide will provide binoculars and field guides, and share insights into the local ecosystem, conservation efforts, and the importance of these habitats to Shirakawa-go's cultural heritage.",
      },
    ],
  },
];
