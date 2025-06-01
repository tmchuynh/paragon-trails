import { Tour } from "@/lib/interfaces/services/tours";

export const galapagosIslandsTours: Tour[] = [
  {
    title: "Darwin's Footsteps Wildlife Expedition",
    description:
      "Follow in the footsteps of Charles Darwin with a naturalist-led journey through the islands that inspired the theory of evolution. Observe unique wildlife including giant tortoises, marine iguanas, and blue-footed boobies in their natural habitats.",
    images: [
      "/images/tours/galapagos-islands/giant-tortoise.jpg",
      "/images/tours/galapagos-islands/blue-footed-boobies.jpg",
    ],
    duration: "7 days",
    price: "$3,250",
    rating: 4.9,
    tags: ["Scientific", "Island Hopping"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question:
          "When is the best time to visit the Galapagos for wildlife viewing?",
        answer:
          "The Galapagos offers excellent wildlife viewing year-round, but different seasons provide unique experiences. December to May is the warm season with calmer seas and better underwater visibility, ideal for snorkeling. June to November is cooler with nutrient-rich waters attracting more marine life. Many species have specific breeding or nesting seasons, so we can customize your trip depending on which animals you're most interested in seeing.",
      },
      {
        question: "What should I pack for this expedition?",
        answer:
          "We recommend lightweight, breathable clothing suitable for warm weather, sturdy walking shoes, a wide-brimmed hat, and plenty of sunscreen. Bring a reusable water bottle, binoculars for wildlife viewing, and a camera with a zoom lens. Snorkeling gear is provided, but you may bring your own if preferred. A light rain jacket is useful during the cooler months (June-November).",
      },
    ],
  },
  {
    title: "Galapagos Marine Reserve Snorkeling Safari",
    description:
      "Explore the world's second-largest marine reserve with daily snorkeling excursions to encounter sea turtles, reef sharks, manta rays, and playful sea lions. Visit multiple islands aboard our eco-friendly expedition vessel with a marine biologist guide.",
    images: [
      "/images/tours/galapagos-islands/snorkeling-sea-lions.jpg",
      "/images/tours/galapagos-islands/manta-rays.jpg",
    ],
    duration: "5 days",
    price: "$2,450",
    rating: 4.8,
    tags: ["Snorkeling", "Marine Life", "Conservation"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need to be an experienced snorkeler?",
        answer:
          "No prior experience is necessary. Our guides provide comprehensive instruction for beginners, and we supply high-quality equipment including wetsuits and prescription masks if needed. Most snorkeling sites offer both shallow, protected areas for beginners and deeper waters for experienced snorkelers. Non-swimmers can enjoy wildlife viewing from our glass-bottom boat option at most locations.",
      },
      {
        question: "What should I bring for snorkeling?",
        answer:
          "We provide all necessary snorkeling gear, but you may want to bring your own mask and fins if you prefer. Sunscreen (reef-safe), a swimsuit, a towel, and a waterproof bag for personal items are recommended. A light wetsuit is provided, but you can bring your own if preferred. We also recommend a waterproof camera or GoPro to capture underwater moments.",
      },
      {
        question: "Are there any age restrictions for this tour?",
        answer:
          "This tour is suitable for all ages, but children under 8 must be accompanied by an adult in the water. We provide flotation devices for younger children and non-swimmers. The snorkeling sites are chosen based on the group's experience level, ensuring a safe and enjoyable experience for everyone.",
      },
    ],
  },
  {
    title: "Galapagos Photography Masterclass",
    description:
      "Perfect your wildlife and landscape photography skills in one of the world's most unique ecosystems. Learn specialized techniques for capturing rare species and dramatic volcanic landscapes with guidance from a National Geographic photographer.",
    images: [
      "/images/tours/galapagos-islands/photography-workshop.jpg",
      "/images/tours/galapagos-islands/landscape-photography.jpg",
    ],
    duration: "8 days",
    price: "$4,195",
    rating: 4.9,
    tags: ["Photography", "Small Group"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "What photography equipment should I bring?",
        answer:
          "We recommend a DSLR or mirrorless camera with at least one telephoto lens (200mm or longer) for wildlife and a wide-angle lens for landscapes. A polarizing filter is essential for reducing glare in this bright environment. Bring extra batteries, memory cards, and cleaning supplies as there are limited photography stores on the islands. We provide detailed equipment recommendations after booking, and limited rental equipment is available with advance notice.",
      },
      {
        question: "Do I need prior photography experience?",
        answer:
          "This masterclass is designed for photographers of all skill levels, from beginners to advanced. Our guide will tailor instruction based on your experience, helping you improve your skills while capturing the unique wildlife and landscapes of the Galapagos. Daily critiques and group discussions will enhance your learning experience.",
      },
    ],
  },
  {
    title: "Volcanic Landscapes & Geological Wonders",
    description:
      "Discover the dramatic geological forces that created the Galapagos archipelago. Hike across lava fields, explore lava tubes, visit active volcanic craters, and learn how these young islands emerged from the sea to become an evolutionary laboratory.",
    images: [
      "/images/tours/galapagos-islands/lava-fields.jpg",
      "/images/tours/galapagos-islands/volcanic-crater.jpg",
    ],
    duration: "6 days",
    price: "$2,850",
    rating: 4.7,
    tags: ["Geology", "Volcanoes", "Hiking"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How physically demanding are the hikes?",
        answer:
          "This tour includes moderate hiking on uneven volcanic terrain, with daily hikes ranging from 3-7 km. Trail difficulty varies from easy boardwalks to challenging scrambles over lava fields. A reasonable level of fitness is required, but we set a comfortable pace with plenty of breaks for geological explanations and photography. The longest hike is to Sierra Negra volcano (about 16 km round trip), but participants can opt to do only a portion of this trek.",
      },
      {
        question: "What should I wear for the hikes?",
        answer:
          "We recommend sturdy hiking shoes with good grip, lightweight breathable clothing, a wide-brimmed hat, and plenty of sunscreen. A light rain jacket is useful during the cooler months (June-November). Bring a refillable water bottle, as we provide water stations at each stop. Trekking poles are optional but can be helpful on uneven terrain.",
      },
    ],
  },
  {
    title: "Family-Friendly Galapagos Adventure",
    description:
      "Experience the magic of the Galapagos with activities designed for explorers of all ages. Children become certified 'Darwin's Junior Naturalists' through interactive wildlife encounters, scavenger hunts, stargazing, and guided snorkeling suitable for young adventurers.",
    images: [
      "/images/tours/galapagos-islands/family-snorkeling.jpg",
      "/images/tours/galapagos-islands/kids-wildlife-activity.jpg",
    ],
    duration: "6 days",
    price: "$2,995",
    rating: 4.9,
    tags: ["Family", "Educational", "Wildlife"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "local",
    faqs: [
      {
        question: "What ages is this tour appropriate for?",
        answer:
          "This tour is specially designed for families with children ages 6-17, though we welcome children of all ages. Activities are adapted based on the ages in your specific group. For families with younger children (under 6), we offer modified itineraries with shorter excursions and more downtime. Many activities have age-appropriate versions, like shallow-water snorkeling for younger kids and deeper explorations for teenagers.",
      },
      {
        question: "What safety measures are in place for children?",
        answer:
          "Safety is our top priority. All activities are supervised by trained guides, and we provide life jackets for all water activities. Snorkeling excursions are conducted in calm, shallow waters with a focus on safety and comfort. Our guides are experienced in working with children and will ensure that all activities are age-appropriate and safe. We also provide first aid kits and emergency communication devices on all excursions.",
      },
    ],
  },
  {
    title: "Exclusive Galapagos Luxury Yacht Charter",
    description:
      "Experience the ultimate Galapagos adventure aboard a private luxury yacht with personalized itinerary, gourmet cuisine prepared by a private chef, and exclusive access to pristine visitor sites during optimal wildlife viewing hours.",
    images: [
      "/images/tours/galapagos-islands/luxury-yacht.jpg",
      "/images/tours/galapagos-islands/gourmet-dining.jpg",
    ],
    duration: "8 days",
    price: "$8,950",
    rating: 5.0,
    tags: ["Luxury", "Private Charter", "Exclusive"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "How customizable is the yacht charter experience?",
        answer:
          "Our luxury charters offer exceptional customization within the parameters of Galapagos National Park regulations. You can select your preferred islands (subject to the authorized 15-day itinerary cycles), adjust daily activities based on interests (more snorkeling vs. hiking, for example), select preferred dining options (with advance notice for provisioning), and choose your ideal pace. Your personal naturalist guide will work with you daily to tailor activities to your interests while ensuring you experience the highlights of each island.",
      },
      {
        question: "What amenities are included on the yacht?",
        answer:
          "Our luxury yachts feature spacious cabins with en-suite bathrooms, air conditioning, a sun deck with jacuzzi, a fully stocked bar, and a gourmet kitchen. We provide high-quality snorkeling gear, kayaks, paddleboards, and fishing equipment. Daily housekeeping and laundry service are included. Our private chef prepares personalized menus based on your preferences, with options for special dietary needs. Wi-Fi is available in most areas of the yacht.",
      },
    ],
  },
  {
    title: "Galapagos Conservation Experience",
    description:
      "Contribute to ongoing conservation efforts with this unique hands-on program. Work alongside researchers on tortoise breeding programs, invasive species removal, and habitat restoration while enjoying guided wildlife excursions and learning about the challenges facing this fragile ecosystem.",
    images: [
      "/images/tours/galapagos-islands/conservation-work.jpg",
      "/images/tours/galapagos-islands/tortoise-breeding-center.jpg",
    ],
    duration: "10 days",
    price: "$3,450",
    rating: 4.8,
    tags: ["Conservation", "Volunteering", "Educational"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "local",
    faqs: [
      {
        question: "What type of conservation work will we be doing?",
        answer:
          "Activities vary seasonally based on current conservation priorities but typically include monitoring tortoise nesting sites, collecting data on marine species, removing invasive plants, beach cleanups, and assisting at the tortoise breeding center. Work is usually conducted in 3-4 hour morning sessions, with traditional sightseeing and wildlife viewing in the afternoons. No scientific background is required, but participants should be prepared for some physically demanding activities like hiking while carrying equipment or removing plants in hot conditions.",
      },
      {
        question: "Is this tour suitable for families?",
        answer:
          "This tour is designed for adults and older teens (ages 16+). While we welcome younger participants, the physical nature of the work and the need for focused attention on conservation tasks make it less suitable for younger children. Families with teens interested in science or conservation will find this a rewarding experience. We can arrange alternative family-friendly activities in the afternoons if desired.",
      },
    ],
  },
  {
    title: "Galapagos Islands Birdwatching Expedition",
    description:
      "Explore the diverse avian life of the Galapagos with expert birdwatching guides. Spot endemic species like the famous Darwin's finches, flightless cormorants, and waved albatrosses while learning about their unique adaptations and conservation status.",
    images: [
      "/images/tours/galapagos-islands/birdwatching.jpg",
      "/images/tours/galapagos-islands/darwins-finches.jpg",
    ],
    duration: "5 days",
    price: "$2,200",
    rating: 4.9,
    tags: ["Birdwatching", "Nature"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "birdwatching",
    faqs: [
      {
        question: "Do I need prior birdwatching experience?",
        answer:
          "No prior experience is necessary! Our guides are skilled at helping beginners learn birdwatching techniques while also providing in-depth knowledge for more experienced birders. We provide binoculars and field guides, and our itineraries are designed to maximize sightings of both common and rare species.",
      },
      {
        question: "What should I bring for birdwatching?",
        answer:
          "We recommend lightweight, breathable clothing suitable for warm weather, sturdy walking shoes, a wide-brimmed hat, and plenty of sunscreen. Bring a refillable water bottle, binoculars (if you have your own), a notebook for field notes, and a camera with a zoom lens for photography. A light rain jacket is useful during the cooler months (June-November).",
      },
    ],
  },
];

export default galapagosIslandsTours;
