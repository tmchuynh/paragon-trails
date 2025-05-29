import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const patagoniaTours: Tour[] = [
  {
    title: "Torres del Paine W Trek Adventure",
    description:
      "Experience Patagonia's most iconic trek through the heart of Torres del Paine National Park, hiking to the base of the towering granite spires, through French Valley, and alongside Grey Glacier on this challenging but rewarding 5-day wilderness journey.",
    images: [
      "/images/tours/patagonia/torres-del-paine.jpg",
      "/images/tours/patagonia/w-trek.jpg",
    ],
    duration: "5 days",
    price: "$1,295",
    rating: 4.9,
    tags: ["Trekking", "National Park", "Wilderness"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("patagonia", "adventure").name,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How physically demanding is the W Trek?",
        answer:
          "The W Trek is moderately challenging, covering approximately 80 km (50 miles) over 5 days with varied terrain and daily elevation gains. Hikers should be in good physical condition, able to walk 6-8 hours daily with a daypack. The most challenging sections include the steep climb to the Torres base (800m elevation gain) and the undulating terrain of French Valley. While no technical climbing skills are required, prior hiking experience and proper conditioning will greatly enhance your enjoyment of this spectacular trek.",
      },
      {
        question: "What gear do I need for the trek?",
        answer:
          "Essential gear includes a sturdy pair of hiking boots, waterproof jacket and pants, warm layers (fleece or down jacket), hat and gloves, sun protection (sunscreen, sunglasses), a daypack, trekking poles (optional but recommended), and a refillable water bottle. We provide a detailed packing list upon booking to ensure you have everything needed for comfort and safety in Patagonia's variable weather conditions.",
      },
    ],
  },
  {
    title: "Perito Moreno Glacier Ice Trekking",
    description:
      "Walk on the surface of the magnificent Perito Moreno Glacier, one of the world's few advancing glaciers. After viewing the massive ice wall from special balconies, gear up with crampons for a guided trek across the glacier's surface to witness crevasses, ice caves, and stunning blue ice formations up close.",
    images: [
      "/images/tours/patagonia/perito-moreno.jpg",
      "/images/tours/patagonia/ice-trekking.jpg",
    ],
    duration: "Full day",
    price: "$285",
    rating: 4.8,
    tags: ["Ice Trekking", "Adventure"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("patagonia", "adventure").name,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need previous ice trekking experience?",
        answer:
          "No prior ice trekking experience is necessary. Our guides provide comprehensive instruction on using crampons and walking safely on ice. Participants should be reasonably fit and able to walk on uneven terrain for about 2 hours. The minimum age is 10 years, and the maximum age is typically 65, though exceptions can be made based on fitness level. The activity is not recommended for pregnant women or people with knee or back problems.",
      },
      {
        question: "What should I wear for the ice trekking?",
        answer:
          "Dress in layers suitable for cold weather, including a waterproof jacket and pants, warm gloves, a hat, and sturdy hiking boots. We provide crampons and all necessary safety gear. It's important to wear clothing that allows for freedom of movement while keeping you warm and dry.",
      },
    ],
  },
  {
    title: "Patagonia Wildlife Safari: Pumas & Guanacos",
    description:
      "Join expert wildlife trackers in search of Patagonia's elusive puma and other wildlife including guanacos, foxes, and Andean condors. Explore prime habitats while learning about conservation efforts and wildlife behavior from experienced naturalist guides.",
    images: [
      "/images/tours/patagonia/puma-tracking.jpg",
      "/images/tours/patagonia/guanacos-wildlife.jpg",
    ],
    duration: "3 days",
    price: "$1,450",
    rating: 4.7,
    tags: ["Photography", "Conservation"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Dr. Carolina Martinez",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What are the chances of seeing pumas?",
        answer:
          "The Torres del Paine region has one of the highest densities of wild pumas in the world, and our expert trackers have a success rate of approximately 85% for puma sightings during the 3-day safari. Sightings are most likely during early morning and late afternoon/evening, which is why we schedule multiple excursions during these prime times. While pumas are our main focus, we'll also encounter numerous other species including guanacos, foxes, armadillos, and majestic Andean condors.",
      },
      {
        question: "What should I bring for the wildlife safari?",
        answer:
          "Bring binoculars, a good camera with zoom lens, comfortable hiking boots, layered clothing for variable weather, a hat, sunscreen, and insect repellent. We provide all necessary safety gear and expert guides to enhance your wildlife viewing experience. A detailed packing list will be provided upon booking.",
      },
    ],
  },
  {
    title: "Patagonian Cooking Class & Lamb Asado",
    description:
      "Master the art of traditional Patagonian cuisine with expert instruction in preparing a classic lamb asado (slow-roasted over an open fire), along with regional specialties like chimichurri, empanadas, and tortas fritas, using local ingredients and time-honored techniques.",
    images: [
      "/images/tours/patagonia/lamb-asado.jpg",
      "/images/tours/patagonia/cooking-class.jpg",
    ],
    duration: "6 hours",
    price: "$145",
    rating: 4.9,
    tags: ["Cooking", "Culinary", "Traditional"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Maria Sánchez",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "You'll learn to prepare an authentic Patagonian feast including cordero al palo (lamb slow-roasted on a cross stake), handmade empanadas with various fillings, pebre (Chilean salsa), tortas fritas (fried bread), and calafate berry dessert. Throughout the class, you'll learn about the cultural significance of these dishes and the influence of indigenous, Spanish, and other European traditions on Patagonian cuisine. All recipes and techniques are provided to take home.",
      },
      {
        question: "Do I need any prior cooking experience?",
        answer:
          "No prior cooking experience is necessary! This class is designed for all skill levels, from complete beginners to experienced cooks. Our chef will guide you through each step of the cooking process, ensuring you understand the techniques and ingredients used in traditional Patagonian cuisine. You'll leave with new skills and recipes to recreate these dishes at home.",
      },
    ],
  },
  {
    title: "Fitz Roy & Cerro Torre Photography Expedition",
    description:
      "Capture the dramatic peaks of Mount Fitz Roy and Cerro Torre during optimal lighting conditions with expert guidance from a professional landscape photographer. Trek to prime viewpoints and learn specialized techniques for mountain photography in Patagonia's challenging conditions.",
    images: [
      "/images/tours/patagonia/fitz-roy.jpg",
      "/images/tours/patagonia/cerro-torre.jpg",
    ],
    duration: "3 days",
    price: "$895",
    rating: 4.7,
    tags: ["Photography", "Mountains", "Trekking"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Alejandro Fuentes",
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "What photography equipment should I bring?",
        answer:
          "For optimal results, bring a DSLR or mirrorless camera, sturdy tripod, wide-angle lens (16-35mm or similar), medium telephoto (70-200mm), graduated neutral density filters, and polarizing filter. A remote shutter release and extra batteries are essential. While specialized equipment is recommended for serious photographers, participants with any camera type, including smartphones, will benefit from the compositional guidance and being at the right locations during optimal lighting conditions.",
      },
      {
        question: "What is the fitness level required for this expedition?",
        answer:
          "This photography expedition involves moderate hiking with daily treks of 6-10 km (3.7-6.2 miles) over varied terrain, including some steep sections. Participants should be in good physical condition and able to walk for 4-6 hours daily while carrying a camera pack. The hikes are designed to reach the best viewpoints for photography, and our guides will pace the group to accommodate different fitness levels.",
      },
    ],
  },
  {
    title: "Patagonia Multi-Sport Adventure",
    description:
      "Experience Patagonia's diverse landscapes through a variety of activities including kayaking among icebergs on Grey Lake, mountain biking through steppe landscapes, hiking to viewpoints of the Paine Massif, and horseback riding through lenga forests.",
    images: [
      "/images/tours/patagonia/kayak-icebergs.jpg",
      "/images/tours/patagonia/mountain-biking.jpg",
    ],
    duration: "4 days",
    price: "$1,350",
    rating: 4.8,
    tags: ["Multi-sport", "Kayaking", "Biking"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Felipe Torres",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What fitness level is required?",
        answer:
          "This tour requires moderate to good fitness levels as you'll be active for 4-6 hours daily across various activities. Prior experience in each sport is not necessary, but general athletic ability and comfort with outdoor activities is important. The kayaking portion is on a lake (not whitewater), the mountain biking follows established trails without technical sections, and hikes cover 6-12 km daily with moderate elevation gain.",
      },
      {
        question: "What should I bring for the multi-sport tour?",
        answer:
          "Bring comfortable athletic clothing suitable for variable weather, sturdy hiking boots, a swimsuit for kayaking, sunscreen, a hat, and a refillable water bottle. We provide all necessary equipment for kayaking, biking, and horseback riding. A detailed packing list will be provided upon booking to ensure you have everything needed for each activity.",
      },
    ],
  },
  {
    title: "Zodiac Boat Expedition: Fjords & Glaciers",
    description:
      "Navigate the remote fjords and channels of Patagonia aboard a nimble Zodiac boat, approaching massive glacier fronts, hidden waterfalls, and marine wildlife including sea lions and dolphins, with access to pristine areas unreachable by larger vessels.",
    images: [
      "/images/tours/patagonia/zodiac-glacier.jpg",
      "/images/tours/patagonia/fjords.jpg",
    ],
    duration: "Full day",
    price: "$265",
    rating: 4.6,
    tags: ["Boat Tour", "Wildlife"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Captain Jorge Estevez",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Will we get wet during the Zodiac tour?",
        answer:
          "While Zodiac boats are relatively dry in calm conditions, you should expect some spray, especially when traveling at speed or if the water is choppy. We provide full waterproof gear including jackets, pants, and life vests for all participants. The boats have reinforced hulls for safety when navigating near ice, and our experienced captains maintain a safe but exciting distance from glacier fronts where calving can occur.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, children aged 6 and up can participate in the Zodiac tour, provided they meet the minimum height requirement of 120 cm (4 feet). All participants must wear life jackets at all times. The tour is designed to be family-friendly, with opportunities to spot marine wildlife and learn about the unique Patagonian ecosystem. However, parents should assess their child's comfort level with boat rides and variable weather conditions.",
      },
    ],
  },
  {
    title: "Cueva de las Manos: Rock Art & Patagonian History",
    description:
      "Explore the UNESCO World Heritage site of Cueva de las Manos, home to ancient rock art created by indigenous hunter-gatherers over 9,000 years ago. Learn about the history and significance of these artworks while hiking through stunning Patagonian landscapes.",
    images: [
      "/images/tours/patagonia/cueva-de-las-manos.jpg",
      "/images/tours/patagonia/rock-art.jpg",
    ],
    duration: "Full day",
    price: "$180",
    rating: 4.7,
    tags: ["Archaeology", "History", "Rock Art"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Dr. Ana Gutierrez",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How old are the rock paintings?",
        answer:
          "The rock paintings at Cueva de las Manos date back approximately 9,000 years, created by the indigenous Tehuelche people. The site features hand stencils, hunting scenes, and geometric designs that provide insight into the lives and beliefs of these early inhabitants of Patagonia. Our guide will explain the cultural context and significance of the artworks during the visit.",
      },
      {
        question: "What should I wear for the cave visit?",
        answer:
          "Wear comfortable hiking shoes suitable for rocky terrain, layered clothing for variable weather conditions, and a hat for sun protection. The cave itself can be cool, so a light jacket is recommended. We provide all necessary safety gear for exploring the site.",
      },
    ],
  },
];

export default patagoniaTours;
