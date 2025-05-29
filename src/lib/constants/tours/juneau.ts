import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const juneauTours: Tour[] = [
  {
    title: "Mendenhall Glacier Ice Cave Expedition",
    description:
      "Journey deep into the heart of Mendenhall Glacier to explore stunning ice caves with their ethereal blue chambers. This challenging guided trek crosses temperate rainforest and glacial terrain before descending into otherworldly ice formations carved by meltwater.",
    images: [
      "/images/tours/juneau/ice-cave-blue.jpg",
      "/images/tours/juneau/glacier-trek.jpg",
    ],
    duration: "8 hours",
    price: "$250",
    rating: 4.9,
    tags: ["Ice Caves", "Hiking"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("juneau", "adventure").name,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How physically demanding is this tour?",
        answer:
          "This is our most challenging tour, requiring good physical fitness and hiking experience. The route covers 8 miles round-trip with significant elevation gain over rough terrain including slippery rocks, ice, and uneven surfaces. Participants should be comfortable hiking for 6-7 hours and able to navigate challenging conditions. The extraordinary ice cave experience is worth the effort for those who are properly prepared.",
      },
      {
        question: "What should I wear for the glacier trek?",
        answer:
          "Dress in layers suitable for variable weather conditions. Waterproof hiking boots with good traction are essential, along with warm socks, moisture-wicking base layers, an insulating mid-layer, and a waterproof outer layer. We provide crampons for traction on ice and trekking poles to assist with balance. Don't forget a hat, gloves, and sunglasses to protect against glare from the ice.",
      },
    ],
  },
  {
    title: "Whale Watching & Wilderness Exploration",
    description:
      "Experience the majesty of humpback whales in their summer feeding grounds aboard our expedition vessel designed for optimal wildlife viewing. Journey into Stephen's Passage and Auke Bay where whales, orcas, sea lions, and bald eagles thrive in protected waters.",
    images: [
      "/images/tours/juneau/humpback-breach.jpg",
      "/images/tours/juneau/orcas-pod.jpg",
    ],
    duration: "5 hours",
    price: "$145",
    rating: 4.8,
    tags: ["Whales", "Marine"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("juneau", "adventure").name,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Is whale sighting guaranteed?",
        answer:
          "We have a 99% success rate for whale sightings during the peak season (May-September). Our company is so confident you'll see whales that we offer a $100 refund if no whales are spotted on your tour. Beyond whales, you'll likely encounter other marine wildlife including orcas, Steller sea lions, Dall's porpoises, harbor seals, and bald eagles. Our expert naturalist guides are skilled at locating wildlife and providing interpretation about their behaviors and the ecosystem.",
      },
      {
        question: "What should I bring on the whale watching tour?",
        answer:
          "Dress in layers suitable for variable weather conditions, as it can be chilly on the water even in summer. We recommend waterproof jackets, warm hats, gloves, and comfortable shoes. Bring a camera with a zoom lens for wildlife photography, binoculars if you have them, and any personal items like snacks or medications. We provide complimentary hot beverages and light snacks onboard.",
      },
    ],
  },
  {
    title: "Tlingit Cultural Heritage & Native Art",
    description:
      "Immerse yourself in Alaska's indigenous Tlingit culture through art, storytelling, and traditional practices. Visit a clan house, observe master carvers creating totem poles, participate in a drum ceremony, and create your own formline design under the guidance of Native artists.",
    images: [
      "/images/tours/juneau/tlingit-carving.jpg",
      "/images/tours/juneau/clan-house.jpg",
    ],
    duration: "6 hours",
    price: "$115",
    rating: 4.7,
    tags: ["Indigenous", "Cultural", "Art"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("juneau", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How is this tour supporting the Tlingit community?",
        answer:
          "This tour was developed in direct partnership with Tlingit elders and artists. The majority of your tour fee goes directly to the participating clan members, artists, and cultural preservation projects. By joining this experience, you're helping support the transmission of cultural knowledge to younger generations and providing sustainable economic opportunities that allow community members to maintain their traditional practices while sharing them respectfully with visitors.",
      },
      {
        question: "Can we purchase Native art during the tour?",
        answer:
          "Yes, there will be opportunities to purchase authentic Tlingit art directly from the artists. We encourage supporting local artisans by buying pieces that resonate with you. All purchases go directly to the artists and help sustain their craft and cultural practices. Please note that photography of artworks is allowed, but flash photography is not permitted in sacred spaces.",
      },
    ],
  },
  {
    title: "Helicopter Glacier Dogsledding Adventure",
    description:
      "Combine the thrill of helicopter flightseeing with an authentic dogsledding experience high on the Juneau Icefield. Land on a remote glacier camp to meet professional mushers and their Alaskan huskies before driving your own dog team across ancient snow fields.",
    images: [
      "/images/tours/juneau/helicopter-glacier.jpg",
      "/images/tours/juneau/dogsled-team.jpg",
    ],
    duration: "3 hours",
    price: "$550",
    rating: 4.9,
    tags: ["Helicopter", "Dogsledding", "Glacier"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("juneau", "adventure").name,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Is dogsledding ethical?",
        answer:
          "Our operation partners with mushers who prioritize the welfare and happiness of their dogs. These Alaskan huskies are purpose-bred working dogs who thrive in cold conditions and genuinely love to run—most dogs become visibly excited when it's time to pull the sleds. The dogs receive excellent veterinary care, nutrition, and housing. During summer operations on the glacier, runs are kept short with plenty of rest time, and dogs are rotated regularly to prevent overwork. Visitors are encouraged to interact with and learn about these remarkable animals and their historical importance to Alaska.",
      },
      {
        question: "What should I wear for the dogsledding tour?",
        answer:
          "Dress in warm, layered clothing suitable for cold weather conditions. We provide waterproof boots, gloves, and insulated jackets, but you should wear thermal base layers and warm hats. Sunglasses are also recommended to protect against glare from the snow. The helicopter ride is short but can be chilly, so be prepared for variable temperatures.",
      },
    ],
  },
  {
    title: "Alaska Seafood Culinary Experience",
    description:
      "Discover why Alaska is world-renowned for its seafood with this immersive culinary journey. Visit local fishing boats, learn sustainable harvesting practices, participate in a chef-led cooking class, and enjoy a gourmet seafood feast featuring the day's freshest catch.",
    images: [
      "/images/tours/juneau/salmon-cooking.jpg",
      "/images/tours/juneau/fishing-boats.jpg",
    ],
    duration: "6 hours",
    price: "$185",
    rating: 4.8,
    tags: ["Seafood", "Cooking", "Culinary"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("juneau", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of seafood will we work with?",
        answer:
          "This varies by season and what's freshest that day, but typically includes wild Alaska salmon (king, sockeye, or coho depending on season), halibut, spot prawns, Dungeness crab, or black cod. We focus on sustainable seafood harvested using responsible methods. You'll learn multiple cooking techniques for different species, including traditional Alaska Native preparation methods and contemporary approaches that highlight the natural flavor of these premium ingredients.",
      },
      {
        question: "Do I need prior cooking experience?",
        answer:
          "No prior cooking experience is required! This class is designed for all skill levels, from complete beginners to experienced home cooks. Our chef will guide you through each step of the process, providing tips and techniques that you can apply in your own kitchen. The focus is on having fun while learning about Alaska's incredible seafood and culinary traditions.",
      },
    ],
  },
  {
    title: "Flightseeing & Alpine Glacier Lake Landing",
    description:
      "Soar above Juneau's breathtaking wilderness in a floatplane, witnessing cascading waterfalls, mountain peaks, and vast glaciers before landing on a remote alpine lake surrounded by pristine wilderness accessible only by air.",
    images: [
      "/images/tours/juneau/floatplane-glacier.jpg",
      "/images/tours/juneau/alpine-lake.jpg",
    ],
    duration: "3 hours",
    price: "$375",
    rating: 4.9,
    tags: ["Flightseeing", "Wilderness", "Exclusive"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("juneau", "luxury").name,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What will we do at the alpine lake?",
        answer:
          "After landing on the pristine alpine lake, you'll have approximately 20-30 minutes to explore the shoreline, take photos of the incredible mountain scenery, and enjoy the profound silence of this remote wilderness. Depending on the specific lake and season, activities might include a short guided nature walk identifying alpine wildflowers and wildlife signs, sampling crystal-clear glacial water, or simply taking time for reflection in one of Alaska's most beautiful settings. Our pilot-guides are knowledgeable naturalists who enhance your experience with information about the unique ecosystem.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this flightseeing tour is family-friendly and suitable for children of all ages. The floatplane is stable and spacious, providing a comfortable ride with excellent visibility for everyone. Children will be captivated by the stunning aerial views and the opportunity to land in a remote wilderness area. We recommend bringing snacks and entertainment for younger children during the flight, as the experience can be quite long (up to 1 hour each way depending on weather conditions).",
      },
    ],
  },
  {
    title: "Juneau City & Glacier Gardens Tour",
    description:
      "Explore Juneau's rich history and stunning natural beauty with a guided city tour that includes visits to the Alaska State Capitol, historic downtown, and the breathtaking Glacier Gardens Rainforest Adventure featuring unique upside-down trees and lush botanical gardens.",
    images: [
      "/images/tours/juneau/city-capitol.jpg",
      "/images/tours/juneau/glacier-gardens.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.6,
    tags: ["City Tour", "Botanical", "History"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("juneau", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is designed to be family-friendly with engaging activities for all ages. Children will enjoy the interactive elements at Glacier Gardens, including the unique upside-down trees and educational exhibits about local flora and fauna. The city tour includes fun facts and stories that make Juneau's history accessible and interesting for younger visitors. We also provide child-friendly options for snacks and breaks during the tour.",
      },
      {
        question: "Can we customize the city tour?",
        answer:
          "Yes, we can tailor the city tour to focus on specific interests such as local art, indigenous culture, or historical landmarks. If you have particular sites or themes you'd like to explore more deeply, please let us know in advance so we can adjust the itinerary accordingly. Our goal is to provide a personalized experience that highlights the aspects of Juneau that matter most to you.",
      },
    ],
  },
  {
    title: "Juneau's Hidden Waterfalls & Rainforest Hike",
    description:
      "Discover Juneau's lush temperate rainforest and hidden waterfalls on this guided hiking adventure. Traverse scenic trails through towering trees, moss-covered rocks, and vibrant wildflowers while learning about the unique ecosystem that thrives in this coastal wilderness.",
    images: [
      "/images/tours/juneau/rainforest-waterfall.jpg",
      "/images/tours/juneau/hiking-trail.jpg",
    ],
    duration: "5 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Hiking", "Rainforest", "Nature"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("juneau", "wellness").name,
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "What should I wear for the rainforest hike?",
        answer:
          "Dress in layers suitable for variable weather conditions. Waterproof hiking boots with good traction are essential, along with moisture-wicking base layers, an insulating mid-layer, and a waterproof outer layer. We recommend bringing a hat, gloves, and sunglasses to protect against rain and sun glare. Trekking poles can also be helpful on uneven terrain.",
      },
      {
        question: "How difficult is the hike?",
        answer:
          "This hike is moderate in difficulty, covering approximately 5 miles round-trip with some elevation gain. The trails can be muddy and uneven, so good physical fitness is recommended. However, we take breaks to enjoy the scenery and learn about the unique rainforest ecosystem, making it accessible for most hikers with a reasonable level of fitness.",
      },
    ],
  },
];

export default juneauTours;
