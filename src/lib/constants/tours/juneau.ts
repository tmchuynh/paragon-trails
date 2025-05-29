import { Tour } from "@/lib/interfaces/services/tours";

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
    tags: ["Ice Caves", "Glacier", "Hiking"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Ryan Johnson, Glaciologist",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How physically demanding is this tour?",
        answer:
          "This is our most challenging tour, requiring good physical fitness and hiking experience. The route covers 8 miles round-trip with significant elevation gain over rough terrain including slippery rocks, ice, and uneven surfaces. Participants should be comfortable hiking for 6-7 hours and able to navigate challenging conditions. The extraordinary ice cave experience is worth the effort for those who are properly prepared.",
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
    tags: ["Whales", "Wildlife", "Marine"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Captain Sarah Miller, Marine Biologist",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "Is whale sighting guaranteed?",
        answer:
          "We have a 99% success rate for whale sightings during the peak season (May-September). Our company is so confident you'll see whales that we offer a $100 refund if no whales are spotted on your tour. Beyond whales, you'll likely encounter other marine wildlife including orcas, Steller sea lions, Dall's porpoises, harbor seals, and bald eagles. Our expert naturalist guides are skilled at locating wildlife and providing interpretation about their behaviors and the ecosystem.",
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
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "David Katzeek (Kingeisti)",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How is this tour supporting the Tlingit community?",
        answer:
          "This tour was developed in direct partnership with Tlingit elders and artists. The majority of your tour fee goes directly to the participating clan members, artists, and cultural preservation projects. By joining this experience, you're helping support the transmission of cultural knowledge to younger generations and providing sustainable economic opportunities that allow community members to maintain their traditional practices while sharing them respectfully with visitors.",
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
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Jack Wilson, Iditarod Musher",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Is dogsledding ethical?",
        answer:
          "Our operation partners with mushers who prioritize the welfare and happiness of their dogs. These Alaskan huskies are purpose-bred working dogs who thrive in cold conditions and genuinely love to run—most dogs become visibly excited when it's time to pull the sleds. The dogs receive excellent veterinary care, nutrition, and housing. During summer operations on the glacier, runs are kept short with plenty of rest time, and dogs are rotated regularly to prevent overwork. Visitors are encouraged to interact with and learn about these remarkable animals and their historical importance to Alaska.",
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
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Tracy Andes",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of seafood will we work with?",
        answer:
          "This varies by season and what's freshest that day, but typically includes wild Alaska salmon (king, sockeye, or coho depending on season), halibut, spot prawns, Dungeness crab, or black cod. We focus on sustainable seafood harvested using responsible methods. You'll learn multiple cooking techniques for different species, including traditional Alaska Native preparation methods and contemporary approaches that highlight the natural flavor of these premium ingredients.",
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
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Captain Michael Stevens",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What will we do at the alpine lake?",
        answer:
          "After landing on the pristine alpine lake, you'll have approximately 20-30 minutes to explore the shoreline, take photos of the incredible mountain scenery, and enjoy the profound silence of this remote wilderness. Depending on the specific lake and season, activities might include a short guided nature walk identifying alpine wildflowers and wildlife signs, sampling crystal-clear glacial water, or simply taking time for reflection in one of Alaska's most beautiful settings. Our pilot-guides are knowledgeable naturalists who enhance your experience with information about the unique ecosystem.",
      },
    ],
  },
];

export default juneauTours;
