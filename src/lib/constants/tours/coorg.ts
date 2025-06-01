import { Tour } from "@/lib/interfaces/services/tours";

export const coorgTours: Tour[] = [
  {
    title: "Coffee Plantation Experience & Tasting",
    description:
      "Immerse yourself in the world of premium coffee production with a guided tour through lush Coorg plantations, learning the journey from bean to cup before participating in a professional cupping session to discern flavor profiles.",
    images: [
      "/images/tours/coorg/coffee-plantation.jpg",
      "/images/tours/coorg/coffee-tasting.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Coffee", "Agriculture", "Tasting"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "When is the best time to see coffee harvesting?",
        answer:
          "The main coffee harvesting season in Coorg runs from November through January. During this time, you'll see the entire process from picking the ripe red coffee cherries to processing and drying. However, our plantation tours are educational and enjoyable year-round. In the flowering season (March-April), the plantations are filled with fragrant white blossoms, while the monsoon period (June-August) showcases the lush green landscapes that make Coorg famous.",
      },
      {
        question: "Can I buy fresh coffee beans?",
        answer:
          "Yes, you can purchase freshly roasted coffee beans directly from the plantation. We offer a selection of single-origin Coorg coffees, including Arabica and Robusta varieties, as well as specialty blends. Our guides can help you choose the best beans based on your taste preferences.",
      },
    ],
  },
  {
    title: "Kodava Cultural Heritage & Traditional Homes",
    description:
      "Discover the unique culture of Coorg's indigenous Kodava people with visits to traditional ainmanes (ancestral homes), interactions with local families, and insights into their distinct customs, cuisine, and martial heritage.",
    images: [
      "/images/tours/coorg/kodava-home.jpg",
      "/images/tours/coorg/traditional-dress.jpg",
    ],
    duration: "6 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Cultural", "Heritage", "Local Life"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Who are the Kodava people?",
        answer:
          "The Kodavas are the indigenous people of Coorg (Kodagu) with a distinct culture that sets them apart from other groups in South India. They have unique traditions including a martial heritage, ancestor worship, and their own language. Kodavas are known for their distinctive dress (men wear a traditional wrap called 'Kupya' and carry ceremonial knives called 'Peeche Kathi'), their non-vegetarian cuisine featuring pork and wild game, and their special relationship with firearms and warfare, having been exempted from Indian arms licensing laws due to their historical role as warriors.",
      },
      {
        question: "What can we expect during the home visit?",
        answer:
          "During the ainmane visit, you'll be welcomed into a traditional Kodava home where you can observe daily life, learn about family customs, and even participate in cooking a Kodava meal. The hosts will share stories about their ancestors and the significance of the ainmane as a gathering place for family members. You'll also have the opportunity to try on traditional Kodava attire and learn about their unique rituals and festivals.",
      },
    ],
  },
  {
    title: "Dubare Elephant Camp & River Experience",
    description:
      "Spend a morning with rescued elephants at Dubare Camp, assisting mahouts with bathing and feeding these gentle giants, followed by a coracle boat ride on the scenic Kaveri River and a forest trek to spot diverse birdlife.",
    images: [
      "/images/tours/coorg/elephant-bathing.jpg",
      "/images/tours/coorg/coracle-ride.jpg",
    ],
    duration: "5 hours",
    price: "$55",
    rating: 4.7,
    tags: ["River", "Nature"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Is this an ethical elephant experience?",
        answer:
          "The Dubare Elephant Camp is primarily a sanctuary for former working elephants that were used in logging operations and religious ceremonies. These domesticated elephants cannot be released into the wild, so they are cared for here with proper veterinary support. While the elephants do interact with visitors, they are not forced to perform tricks or carry tourists. The bathing activity is part of their natural care routine, and participation is carefully managed to minimize stress on the animals. The camp is run by the state forest department with a focus on education and conservation.",
      },
      {
        question: "Can we ride the elephants?",
        answer:
          "No, riding elephants is not part of this experience. The focus is on observing and interacting with the elephants in a respectful manner that prioritizes their well-being. Riding can cause physical harm to elephants and is not allowed at this camp. Instead, you will learn about their care, behavior, and the challenges they face in the wild.",
      },
    ],
  },
  {
    title: "Talakaveri Temple Trek & Source of the Kaveri",
    description:
      "Hike to the sacred source of the River Kaveri at Talakaveri, visiting the ancient temple complex and climbing Brahmagiri Hill for spectacular views across the Western Ghats, while learning about the spiritual significance of this pilgrimage site.",
    images: [
      "/images/tours/coorg/talakaveri-temple.jpg",
      "/images/tours/coorg/brahmagiri-view.jpg",
    ],
    duration: "7 hours",
    price: "$85",
    rating: 4.6,
    tags: ["Trekking", "Spiritual", "Nature"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "spiritual",
    faqs: [
      {
        question: "How difficult is the hike to Brahmagiri Hill?",
        answer:
          "The hike involves climbing approximately 350 steps from the temple complex to reach Brahmagiri Hill. Most people with reasonable fitness can complete this in about 45-60 minutes at a comfortable pace. The steps are well-maintained but can be steep in sections. The trail offers beautiful viewpoints for breaks along the way. Early morning departures are recommended to avoid afternoon heat and mist that can obscure the spectacular views from the summit.",
      },
      {
        question: "What should I wear for the trek?",
        answer:
          "Wear comfortable, breathable clothing suitable for hiking, along with sturdy shoes or trekking sandals with good grip. A hat and sunglasses are advisable for sun protection, and carrying a light jacket is recommended as it can get chilly at higher elevations. Don't forget to bring water and snacks for the hike.",
      },
    ],
  },
  {
    title: "Coorg Spice Plantation & Cooking Workshop",
    description:
      "Explore aromatic spice gardens nestled in the misty hills of Coorg, learning about pepper, cardamom, and vanilla cultivation before joining a hands-on cooking class featuring traditional Kodava cuisine with freshly harvested ingredients.",
    images: [
      "/images/tours/coorg/spice-plantation.jpg",
      "/images/tours/coorg/kodava-cooking.jpg",
    ],
    duration: "5 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Spices", "Cooking", "Food"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "You'll learn to prepare authentic Kodava specialties including 'Pandi Curry' (spicy pork curry with Kachampuli, a local souring agent), 'Kadambuttu' (rice dumplings), 'Bamboo Shoot Curry' (seasonal), and 'Akki Roti' (rice flatbread). Vegetarian options are available featuring local ingredients like bamboo shoots, jackfruit, and wild mushrooms. The cooking session takes place in a traditional Kodava kitchen using wood-fired stoves and traditional utensils, though techniques will be adapted for you to recreate these dishes at home.",
      },
      {
        question: "Can we take home the spices we harvest?",
        answer:
          "Yes, you can purchase fresh spices harvested during the tour. We offer a selection of high-quality Coorg spices including black pepper, cardamom, cinnamon, and vanilla beans. Our guides will help you choose the best spices based on your cooking preferences and provide tips on how to use them in your own dishes.",
      },
    ],
  },
  {
    title: "Abbey Falls & Raja's Seat Sunset Tour",
    description:
      "Experience the natural beauty of Coorg with a visit to the cascading Abbey Falls hidden in coffee plantations, followed by sunset at Raja's Seat garden with panoramic views of mist-covered valleys and Western Ghats mountains.",
    images: [
      "/images/tours/coorg/abbey-falls.jpg",
      "/images/tours/coorg/rajas-seat-sunset.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.7,
    tags: ["Waterfall", "Sunset", "Scenery"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "When is the best time to visit Abbey Falls?",
        answer:
          "Abbey Falls is most spectacular during and immediately after the monsoon season (July-October) when water volume is at its peak. However, this is also when the paths can be slippery and leeches may be present in the surrounding forest. The post-monsoon period (October-December) offers a good balance of water flow and comfortable visiting conditions. During the summer months (March-May), the waterfall has less volume but is still beautiful and the surroundings are more easily navigable.",
      },
      {
        question: "Is Raja's Seat suitable for children?",
        answer:
          "Yes, Raja's Seat is family-friendly with paved paths and gardens that are easy to navigate. The sunset views are particularly enchanting for children, and the garden has plenty of space for them to run around. However, please supervise young children near the edges of the viewing platforms as there are steep drops in some areas.",
      },
    ],
  },
  {
    title: "Nagarhole National Park Wildlife Safari",
    description:
      "Embark on an exciting jeep safari through Nagarhole National Park, home to tigers, leopards, elephants and over 250 bird species, with naturalist guides expertly tracking wildlife through diverse habitats from deciduous forests to serene waterways.",
    images: [
      "/images/tours/coorg/nagarhole-elephants.jpg",
      "/images/tours/coorg/tiger-safari.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Safari", "Tiger"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What wildlife might we see?",
        answer:
          "Nagarhole (also known as Rajiv Gandhi National Park) is home to a rich diversity of wildlife including Bengal tigers, Indian leopards, wild elephants, gaur (Indian bison), sambar and spotted deer, wild dogs, and numerous bird species. While sightings of specific animals cannot be guaranteed, our experienced naturalist guides know the territory well and track recent wildlife movements to maximize your chances of memorable encounters. The park has one of the highest tiger densities in India, though these elusive cats require patience and some luck to spot.",
      },
      {
        question: "What should we wear for the safari?",
        answer:
          "Dress in neutral, earth-toned clothing to blend into the natural surroundings and avoid startling wildlife. Lightweight, breathable fabrics are best for comfort in the warm climate. Sturdy closed-toe shoes are recommended for getting in and out of the jeep. A hat, sunglasses, and sunscreen are advisable for sun protection during the safari. We also recommend bringing a light jacket or shawl as it can get chilly in the early morning or late afternoon.",
      },
    ],
  },
  {
    title: "Coorg Heritage Walk & Local Market Tour",
    description:
      "Explore the rich history and vibrant culture of Coorg with a guided walking tour through the town's heritage sites, ancient temples, and bustling local markets, sampling traditional snacks and learning about local crafts.",
    images: [
      "/images/tours/coorg/heritage-walk.jpg",
      "/images/tours/coorg/local-market.jpg",
    ],
    duration: "3 hours",
    price: "$40",
    rating: 4.5,
    tags: ["Heritage", "Culture", "Walking Tour"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culture",
    faqs: [
      {
        question: "What historical sites will we visit?",
        answer:
          "The heritage walk includes visits to ancient temples like the Omkareshwara Temple, built in the Indo-Saracenic style, and the historic Madikeri Fort with its museum showcasing Coorg's royal history. You'll also see colonial-era buildings, traditional Kodava homes, and learn about the region's unique architecture and cultural influences.",
      },
      {
        question: "What can we expect at the local market?",
        answer:
          "The local market offers a sensory experience with vibrant stalls selling fresh produce, spices, handmade crafts, and traditional snacks like 'Kadubu' (steamed rice dumplings) and 'Pandi Curry' (pork curry). You'll have opportunities to interact with local vendors, sample street food, and purchase unique souvenirs such as Coorgi coffee, spices, and handicrafts.",
      },
    ],
  },
];

export default coorgTours;
