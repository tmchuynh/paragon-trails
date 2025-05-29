import { Tour } from "@/lib/interfaces/services/tours";

export const atlasMountainsTours: Tour[] = [
  {
    title: "Berber Villages & High Atlas Trek",
    description:
      "Embark on an authentic trek through Morocco's High Atlas Mountains, staying in traditional Berber villages, sharing meals with local families, and exploring remote valleys and ancient paths known only to local guides.",
    images: [
      "/images/tours/atlas-mountains/berber-village.jpg",
      "/images/tours/atlas-mountains/mountain-trek.jpg",
    ],
    duration: "3 days",
    price: "$295",
    rating: 4.9,
    tags: ["Trekking", "Cultural", "Villages"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Ibrahim Ouazzani",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How physically demanding is the trek?",
        answer:
          "This trek is moderately challenging, involving 4-6 hours of walking daily on mountain trails with some steep ascents and descents. Participants should have good overall fitness and some hiking experience. The maximum altitude reached is approximately 2,500 meters (8,200 feet), which is not high enough to cause altitude sickness for most people.",
      },
      {
        question: "What should I pack for the trek?",
        answer:
          "We recommend packing lightweight, moisture-wicking clothing, a good pair of hiking boots, a warm jacket for evenings, a hat, sunglasses, sunscreen, and a refillable water bottle. A detailed packing list will be provided upon booking. We also suggest bringing a small daypack for daily essentials.",
      },
      {
        question: "Are meals included during the trek?",
        answer:
          "Yes, all meals are included. You'll enjoy traditional Berber dishes prepared by local families, including tagines, couscous, and fresh salads. Dietary restrictions can be accommodated with advance notice.",
      },
      {
        question: "What is the accommodation like?",
        answer:
          "Accommodation includes guesthouses in Berber villages and camping in scenic locations. Guesthouses are basic but comfortable, with shared bathrooms. Camping equipment is provided, including tents and sleeping mats.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, children aged 10 and above can join this trek with parental supervision. The trek is designed to be family-friendly, but parents should assess their child's fitness level and hiking experience before booking.",
      },
      {
        question: "What is the best time to do this trek?",
        answer:
          "The best time for trekking in the High Atlas Mountains is from March to June and September to November when temperatures are mild and the trails are less crowded. July and August can be very hot, especially at lower altitudes, while winter months may have snow at higher elevations.",
      },
      {
        question: "What if the weather is bad during the trek?",
        answer:
          "We monitor weather conditions closely and will adjust the itinerary if necessary for safety. In case of severe weather, we may need to cancel or postpone the trek. A full refund or rescheduling option will be provided in such cases.",
      },
      {
        question: "Do I need travel insurance for this trek?",
        answer:
          "Yes, we strongly recommend that all participants have travel insurance that covers trekking activities. This should include coverage for medical emergencies, trip cancellations, and personal liability. Please check with your insurance provider to ensure you are adequately covered.",
      },
    ],
  },
  {
    title: "Mount Toubkal Summit Expedition",
    description:
      "Challenge yourself to summit North Africa's highest peak guided by experienced mountain guides. This adventure includes professional equipment, high mountain refuges, and breathtaking panoramic views across Morocco and the Sahara.",
    images: [
      "/images/tours/atlas-mountains/toubkal-summit.jpg",
      "/images/tours/atlas-mountains/high-atlas-view.jpg",
    ],
    duration: "2 days",
    price: "$225",
    rating: 4.8,
    tags: ["Mountaineering", "Summit", "Challenge"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Hassan Ait Brahim",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What equipment do I need to bring?",
        answer:
          "We provide technical mountain equipment including crampons and ice axes when needed in winter. You should bring sturdy hiking boots, layered clothing, hat, gloves, sunglasses, sunscreen, headlamp, and a 30-40L backpack. A detailed packing list will be sent upon booking. Sleeping bags can be rented locally if you don't want to travel with one.",
      },
      {
        question: "Is prior mountaineering experience required?",
        answer:
          "No prior mountaineering experience is necessary, but participants should be in good physical condition and comfortable with long hikes at high altitudes. We recommend some training hikes before the expedition to prepare your body for the challenge.",
      },
      {
        question: "What is the best time to attempt the summit?",
        answer:
          "The best months for summiting Mount Toubkal are May to October when conditions are generally stable. Winter ascents (December to March) are possible but require additional technical skills and equipment due to snow and ice.",
      },
      {
        question: "What if I can't reach the summit?",
        answer:
          "Our guides will assess weather and trail conditions daily. If conditions are unsafe or if you are unable to continue, we will prioritize your safety and may turn back. A partial refund may be available depending on how much of the tour was completed.",
      },
    ],
  },
  {
    title: "Atlas Mountains Photography Workshop",
    description:
      "Capture the dramatic landscapes, unique light, and authentic culture of the Atlas Mountains under the guidance of a National Geographic photographer. Visit photogenic locations at optimal times and learn advanced techniques.",
    images: [
      "/images/tours/atlas-mountains/photography-workshop.jpg",
      "/images/tours/atlas-mountains/mountain-light.jpg",
    ],
    duration: "4 days",
    price: "$895",
    rating: 4.9,
    tags: ["Photography", "Landscapes", "Workshop"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Jean-Michel Laurent",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer:
          "This workshop is suitable for DSLR and mirrorless camera users. We recommend bringing your camera body, a variety of lenses (wide-angle, standard zoom, and telephoto if possible), tripod, filters (ND and polarizing), extra batteries, and memory cards. A laptop with editing software is useful for our evening review and editing sessions. Rental equipment can be arranged with advance notice.",
      },
      {
        question: "Do I need prior photography experience?",
        answer:
          "This workshop is designed for intermediate to advanced photographers. A basic understanding of exposure, composition, and camera settings is required. We will cover advanced techniques such as long exposure, low light photography, and landscape composition. Beginners may find the pace challenging.",
      },
      {
        question: "What is the group size for the workshop?",
        answer:
          "To ensure personalized instruction, we limit the group size to a maximum of 8 participants. This allows for individual feedback and ample time at each location.",
      },
      {
        question: "Will we have access to unique locations?",
        answer:
          "Yes, we will visit lesser-known spots in the Atlas Mountains that are not typically included in standard tours. Our local guides know the best times and places for stunning photographs, including sunrise and sunset shoots.",
      },
    ],
  },
  {
    title: "Atlas Mountains Luxury Kasbahs & Spas",
    description:
      "Indulge in Morocco's finest mountain retreats with stays at luxurious kasbahs and resorts featuring infinity pools overlooking dramatic valleys, hammam spa treatments, and gourmet Moroccan cuisine with French influences.",
    images: [
      "/images/tours/atlas-mountains/luxury-kasbah.jpg",
      "/images/tours/atlas-mountains/mountain-spa.jpg",
    ],
    duration: "5 days",
    price: "$1,495",
    rating: 5.0,
    tags: ["Luxury", "Relaxation", "Gourmet"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Sofia Belkacem",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What makes this experience luxurious?",
        answer:
          "This tour features accommodations in Morocco's most exclusive mountain properties, some formerly royal residences converted to luxury hotels. You'll enjoy private terraces with mountain views, heated pools, personalized spa treatments using local argan oil and rose products, and dining experiences created by internationally trained chefs using local ingredients. Private transfers are in luxury 4x4 vehicles, and each property offers unique cultural activities exclusively for guests.",
      },
      {
        question: "Are meals included in the tour price?",
        answer:
          "Yes, all meals are included, featuring gourmet Moroccan cuisine with a modern twist. Breakfasts are served on private terraces, and dinners include multi-course tasting menus with wine pairings. Special dietary requests can be accommodated with advance notice.",
      },
      {
        question: "What activities are included?",
        answer:
          "Activities include guided hikes to hidden waterfalls, private cooking classes with local chefs, traditional music performances, and wellness sessions such as yoga or meditation in scenic locations. Each kasbah offers unique experiences tailored to its surroundings.",
      },
    ],
  },
  {
    title: "Atlas Mountains Cooking & Culinary Herbs",
    description:
      "Discover the unique flavors of Berber cuisine through hands-on cooking classes, visits to mountain herb gardens, and traditional bread baking in village clay ovens, all while learning about the medicinal properties of local ingredients.",
    images: [
      "/images/tours/atlas-mountains/cooking-class.jpg",
      "/images/tours/atlas-mountains/herb-garden.jpg",
    ],
    duration: "2 days",
    price: "$195",
    rating: 4.7,
    tags: ["Cooking", "Herbs", "Traditional"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Fatima Ourika",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to prepare?",
        answer:
          "You'll learn to prepare traditional Berber mountain cuisine including tagines with preserved lemons and olives, couscous prepared the authentic way by hand, mountain herb tea blends, flatbreads baked in clay ovens, and preserves made from local fruits. All recipes use locally sourced, seasonal ingredients, and you'll receive recipe cards to recreate these dishes at home.",
      },
      {
        question: "Do I need prior cooking experience?",
        answer:
          "No prior cooking experience is necessary. This class is designed for all skill levels, from beginners to experienced cooks. Fatima is an excellent teacher who will guide you through each step with patience and enthusiasm.",
      },
      {
        question: "What should I bring for the cooking class?",
        answer:
          "Please bring an apron, a notebook for notes, and any personal cooking tools you prefer (though all necessary equipment will be provided). Comfortable shoes are recommended as we will be standing for several hours. A camera is also welcome to capture the cooking process and final dishes.",
      },
      {
        question: "Are meals included during the class?",
        answer:
          "Yes, all meals are included. You'll enjoy the dishes you prepare together, along with traditional mountain bread and local cheeses. Refreshments such as mint tea and fresh fruit will also be provided throughout the class.",
      },
    ],
  },
];

export default atlasMountainsTours;
