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
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Dr. Rajesh Kumar",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "What are the chances of seeing tigers?",
        answer:
          "While wildlife sightings can never be guaranteed, Bandipur has one of India's highest tiger densities. Our experienced naturalists know the territories and behaviors of resident tigers, giving us a 60-70% chance of sightings during the dry season (March-June). Even without tigers, you'll encounter diverse wildlife including elephants, gaur (Indian bison), leopards, deer species, and numerous birds.",
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
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Muthu Soliga",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How does this tour benefit the local community?",
        answer:
          "This program was developed in partnership with Soliga tribal elders and 80% of tour proceeds go directly to the community. Your participation helps fund education, healthcare, and forest conservation initiatives while providing sustainable income for tribal families. This economic alternative helps preserve their traditional knowledge and reduces dependence on forest resources.",
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
    tags: ["Photography", "Wildlife", "Workshop"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Arun Menon, National Geographic Photographer",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What photography equipment should I bring?",
        answer:
          "For wildlife photography, we recommend a DSLR or mirrorless camera with a telephoto lens (minimum 300mm, ideally 400-600mm). Bring a sturdy tripod, extra batteries, memory cards, and a laptop for our evening editing sessions. If you don't have suitable equipment, we offer telephoto lens rentals with advance notice. Smartphone photographers are welcome but will have limited opportunities for close-up wildlife shots.",
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
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Dr. Ananya Sharma",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "When is the best time for bird watching in Bandipur?",
        answer:
          "While Bandipur offers good birding year-round, the optimal season is November to March when resident birds are joined by winter migrants. Early mornings (6-9am) typically provide the most active bird sightings and best light conditions. During the monsoon (June-September), lush vegetation makes spotting more challenging but brings spectacular breeding plumages and nesting behaviors.",
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
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Vikram Singh",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What might we see during an evening safari?",
        answer:
          "Evening hours offer excellent wildlife viewing as animals become active in the cooler temperatures. You're likely to encounter elephants, gaur (Indian bison), various deer species, and potentially predators like leopards beginning their nocturnal hunts. While tigers are sometimes spotted, they're less predictable in evenings. After sunset, we may encounter nocturnal species like civets, jungle cats, and nightjars during our return journey.",
      },
    ],
  },
];

export default bandipurTours;
