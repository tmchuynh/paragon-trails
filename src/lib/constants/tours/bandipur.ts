import { Tour } from "@/lib/interfaces/services/tours";

export const bandipurTours: Tour[] = [
  {
    title: "Wildlife Safari: Tiger & Elephant Expedition",
    description:
      "Explore Bandipur National Park's diverse ecosystems on an exclusive safari led by wildlife experts, with prime opportunities to spot Bengal tigers, wild elephants, leopards, and over 200 bird species in their natural habitat.",
    images: [
      "/images/tours/bandipur/tiger-safari.jpg",
      "/images/tours/bandipur/elephant-sighting.jpg",
    ],
    duration: "Full day",
    price: "$195",
    rating: 4.9,
    tags: ["Safari", "Tigers", "Wildlife Photography"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What are the chances of seeing tigers?",
        answer:
          "While wildlife sightings can never be guaranteed, Bandipur has one of India's highest tiger densities. Our experienced naturalists know the territories and behaviors of resident tigers, giving us a 60-70% chance of sightings during the dry season (March-June). Even without tigers, you'll encounter diverse wildlife including elephants, gaur (Indian bison), leopards, deer species, and numerous birds.",
      },
      {
        question: "What should I wear for the safari?",
        answer:
          "Dress in neutral, earth-toned clothing to blend into the environment. Lightweight, breathable fabrics are best for daytime safaris. Sturdy walking shoes or sandals are recommended. Bring a hat, sunglasses, and sunscreen for sun protection. Avoid bright colors and strong fragrances that can disturb wildlife.",
      },
      {
        question: "Are meals included during the safari?",
        answer:
          "Yes, we provide a packed lunch and refreshments during the full-day safari. Our meals are prepared with fresh, local ingredients and can accommodate dietary restrictions with advance notice. We also carry plenty of water to keep you hydrated throughout the day.",
      },
      {
        question: "What if it rains during the safari?",
        answer:
          "Safaris operate rain or shine, as wildlife is often more active during light rain. We provide ponchos for light showers, but please dress appropriately for wet conditions. Heavy rains may lead to temporary road closures, in which case we will adjust the itinerary accordingly to ensure your safety and comfort.",
      },
      {
        question: "Can children join the safari?",
        answer:
          "Yes, children are welcome on our safaris. We recommend ages 6 and up for full-day safaris due to the length and potential for bumpy rides. Children under 12 must be accompanied by an adult. We can provide child-friendly meals and activities to keep younger participants engaged.",
      },
      {
        question: "What safety measures are in place during the safari?",
        answer:
          "Your safety is our top priority. Our guides are trained in wildlife safety protocols and carry first aid kits. We maintain a safe distance from all wildlife and follow strict guidelines to minimize disturbance. All vehicles are equipped with seat belts, and we provide safety briefings before departure. In case of emergencies, we have communication devices to contact local authorities.",
      },
      {
        question: "Can I bring my own camera?",
        answer:
          "Absolutely! We encourage you to bring your camera to capture the incredible wildlife and landscapes. A telephoto lens (200mm or longer) is recommended for close-up shots. If you need assistance with photography tips, our guides are happy to help. Please ensure your camera equipment is securely stored during the safari to prevent damage.",
      },
    ],
  },
  {
    title: "Indigenous Soliga Tribe Cultural Experience",
    description:
      "Connect with the indigenous Soliga tribe who have called the Bandipur forests home for centuries. Learn their traditional knowledge of medicinal plants, participate in cultural rituals, and understand their sustainable forest conservation practices.",
    images: [
      "/images/tours/bandipur/soliga-tribe.jpg",
      "/images/tours/bandipur/medicinal-plants.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Indigenous", "Cultural", "Conservation"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How does this tour benefit the local community?",
        answer:
          "This program was developed in partnership with Soliga tribal elders and 80% of tour proceeds go directly to the community. Your participation helps fund education, healthcare, and forest conservation initiatives while providing sustainable income for tribal families. This economic alternative helps preserve their traditional knowledge and reduces dependence on forest resources.",
      },
      {
        question: "What should I wear for the cultural experience?",
        answer:
          "Wear comfortable, breathable clothing suitable for walking in the forest. Long sleeves and pants are recommended to protect against insects and thorns. Sturdy shoes or hiking boots are essential for uneven terrain. We also suggest bringing a hat, sunglasses, and sunscreen for sun protection.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children aged 6 and up. The Soliga community welcomes young visitors and provides engaging activities tailored to different age groups. Children will learn about traditional forest skills, participate in cultural games, and enjoy storytelling sessions. Parental supervision is required for younger participants.",
      },
      {
        question: "What can I expect to learn during the tour?",
        answer:
          "You will gain insights into the Soliga tribe's deep connection with the forest, including their sustainable practices, medicinal plant knowledge, and cultural traditions. The experience includes hands-on activities like preparing traditional meals, learning about forest conservation, and participating in rituals that honor nature. You'll leave with a greater appreciation for indigenous wisdom and its relevance to modern conservation efforts.",
      },
      {
        question: "Are meals provided during the tour?",
        answer:
          "Yes, a traditional Soliga meal is included, featuring locally sourced ingredients and recipes passed down through generations. Dietary restrictions can be accommodated with advance notice. The meal is prepared in a communal setting, allowing you to experience the tribe's culinary traditions firsthand.",
      },
      {
        question: "What is the best time to visit the Soliga community?",
        answer:
          "The Soliga community can be visited year-round, but the best time is from October to March when the weather is cooler and more comfortable for outdoor activities. During the monsoon season (June-September), access may be limited due to heavy rains, and some activities may be modified for safety. We recommend checking with us for seasonal highlights and any special events.",
      },
    ],
  },
  {
    title: "Bandipur Wilderness Photography Workshop",
    description:
      "Perfect your wildlife photography skills with expert guidance in one of India's premier tiger reserves. Learn specialized techniques for capturing elusive wildlife, dramatic landscapes, and macro shots of Bandipur's rich biodiversity.",
    images: [
      "/images/tours/bandipur/photography-workshop.jpg",
      "/images/tours/bandipur/wildlife-camera.jpg",
    ],
    duration: "2 days",
    price: "$295",
    rating: 4.9,
    tags: ["Photography", "Workshop"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "What photography equipment should I bring?",
        answer:
          "For wildlife photography, we recommend a DSLR or mirrorless camera with a telephoto lens (minimum 300mm, ideally 400-600mm). Bring a sturdy tripod, extra batteries, memory cards, and a laptop for our evening editing sessions. If you don't have suitable equipment, we offer telephoto lens rentals with advance notice. Smartphone photographers are welcome but will have limited opportunities for close-up wildlife shots.",
      },
      {
        question: "Do I need prior photography experience?",
        answer:
          "This workshop is designed for all skill levels, from beginners to advanced photographers. Our expert guides will provide personalized instruction based on your experience level, covering topics like composition, lighting, and wildlife behavior. We also offer post-processing tips for enhancing your images in software like Lightroom and Photoshop.",
      },
      {
        question: "What is the group size for the workshop?",
        answer:
          "To ensure personalized attention, we limit each workshop to a maximum of 8 participants. This allows for hands-on guidance and ample opportunities for individual feedback on your photography techniques.",
      },
      {
        question: "What if the weather conditions are not ideal?",
        answer:
          "Wildlife photography often involves unpredictable weather. We will adapt our schedule to make the most of available light and conditions. Overcast days can actually provide excellent diffused lighting for wildlife shots. If heavy rains occur, we have alternative indoor sessions focused on editing and theory.",
      },
    ],
  },
  {
    title: "Bird Watching Expedition: Nilgiri Specialties",
    description:
      "Discover Bandipur's incredible avian diversity with an expert ornithologist, focusing on endemic species of the Nilgiri Biosphere Reserve including the Malabar Trogon, Nilgiri Flycatcher, and Malabar Whistling Thrush.",
    images: [
      "/images/tours/bandipur/birdwatching.jpg",
      "/images/tours/bandipur/malabar-trogon.jpg",
    ],
    duration: "6 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Birding", "Nature", "Endemic Species"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "When is the best time for bird watching in Bandipur?",
        answer:
          "While Bandipur offers good birding year-round, the optimal season is November to March when resident birds are joined by winter migrants. Early mornings (6-9am) typically provide the most active bird sightings and best light conditions. During the monsoon (June-September), lush vegetation makes spotting more challenging but brings spectacular breeding plumages and nesting behaviors.",
      },
      {
        question: "What should I bring for the bird watching tour?",
        answer:
          "Please bring binoculars (we can provide rentals if needed), a field guide or birding app, comfortable walking shoes, and weather-appropriate clothing. A notebook for field notes and a camera with a zoom lens are also recommended. We provide refreshments, but you may want to bring water and snacks.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children aged 8 and up. We encourage young birders to participate and learn about local species. Our guides will tailor the experience to keep children engaged, including fun facts and interactive activities like bird calls.",
      },
      {
        question: "What if I can't identify a bird?",
        answer:
          "Don't worry! Our expert guides are here to help you learn and identify species in real-time. We encourage you to take notes and ask questions throughout the tour. If you're new to birding, we can provide a brief introduction to common identification techniques and tips for recognizing key features like size, color, and behavior.",
      },
      {
        question: "Can I bring my own birding equipment?",
        answer:
          "Absolutely! If you have your own binoculars, field guide, or birding app, please bring them along. We also recommend bringing a notebook for field notes and a camera with a zoom lens for capturing photos of the birds you see. If you need assistance with equipment recommendations, our guides are happy to help.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable. If weather conditions make the tour unsafe, we will reschedule or provide a full refund.",
      },
    ],
  },
  {
    title: "Bandipur Sunset Jeep Safari & Stargazing",
    description:
      "Experience the magic of Bandipur as day transitions to night with an evening safari capturing golden hour light, followed by dinner under the stars and guided astronomy with powerful telescopes far from light pollution.",
    images: [
      "/images/tours/bandipur/sunset-safari.jpg",
      "/images/tours/bandipur/stargazing.jpg",
    ],
    duration: "5 hours",
    price: "$125",
    rating: 4.8,
    tags: ["Sunset", "Safari", "Astronomy"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What might we see during an evening safari?",
        answer:
          "Evening hours offer excellent wildlife viewing as animals become active in the cooler temperatures. You're likely to encounter elephants, gaur (Indian bison), various deer species, and potentially predators like leopards beginning their nocturnal hunts. While tigers are sometimes spotted, they're less predictable in evenings. After sunset, we may encounter nocturnal species like civets, jungle cats, and nightjars during our return journey.",
      },
      {
        question: "What should I wear for the evening safari?",
        answer:
          "Dress in layers as temperatures can drop significantly after sunset. Long sleeves and pants are recommended to protect against insects. Comfortable walking shoes or sandals are ideal for the jeep ride. Bring a light jacket or sweater for warmth during stargazing. Avoid bright colors and strong fragrances that can disturb wildlife.",
      },
      {
        question: "Is dinner included in the tour?",
        answer:
          "Yes, a delicious dinner is included, featuring local specialties prepared with fresh ingredients. We can accommodate dietary restrictions with advance notice. Dinner will be served in a scenic location under the stars, enhancing your experience of the natural surroundings.",
      },
      {
        question: "What if it rains during the safari?",
        answer:
          "Safaris operate rain or shine, as wildlife is often more active during light rain. We provide ponchos for light showers, but please dress appropriately for wet conditions. Heavy rains may lead to temporary road closures, in which case we will adjust the itinerary accordingly to ensure your safety and comfort.",
      },
    ],
  },
];

export default bandipurTours;
