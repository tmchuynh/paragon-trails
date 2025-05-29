import { Tour } from "@/lib/interfaces/services/tours";
export const anchorageTours: Tour[] = [
  {
    title: "Wildlife & Glacier Flight Safari",
    description:
      "Soar over Alaska's breathtaking wilderness in a floatplane to spot bears, moose, and wolves in their natural habitat, landing on a remote glacial lake for a wilderness champagne picnic.",
    images: [
      "/images/tours/anchorage/floatplane.jpg",
      "/images/tours/anchorage/glacier-landing.jpg",
    ],
    duration: "6 hours",
    price: "$495",
    rating: 5.0,
    tags: ["Flightseeing", "Wildlife", "Glacier"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Captain Jack Stevens",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "What are our chances of seeing wildlife?",
        answer:
          "While wildlife sightings can never be guaranteed, our success rate exceeds 90% for bear sightings and 95% for moose during summer months. Our skilled pilots know the best areas and flying routes to maximize wildlife viewing opportunities.",
      },
    ],
  },
  {
    title: "Alaskan Culinary Foraging & Feast",
    description:
      "Explore Chugach State Park with a local chef to gather wild Alaskan ingredients, then enjoy a gourmet wilderness cooking class featuring freshly caught salmon and foraged delicacies.",
    images: [
      "/images/tours/anchorage/foraging.jpg",
      "/images/tours/anchorage/wilderness-cooking.jpg",
    ],
    duration: "7 hours",
    price: "$235",
    rating: 4.9,
    tags: ["Foraging", "Cooking", "Wilderness"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Chef Alyeska Jones",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of things might we forage?",
        answer:
          "Depending on the season, we may gather wild berries (blueberries, salmonberries, crowberries), spruce tips, fireweed, fiddlehead ferns, mushrooms, and various edible flowers and herbs. Your guide is an expert in identifying safe and delicious wild Alaskan foods.",
      },
    ],
  },
  {
    title: "Northern Lights Photography Expedition",
    description:
      "Venture into the Alaskan wilderness away from city lights with a professional photographer to capture the mesmerizing aurora borealis. Learn night photography techniques while witnessing one of nature's most spectacular light shows.",
    images: [
      "/images/tours/anchorage/northern-lights.jpg",
      "/images/tours/anchorage/aurora-photography.jpg",
    ],
    duration: "6 hours",
    price: "$275",
    rating: 4.8,
    tags: ["Northern Lights", "Photography", "Night Tour"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Maria Winters",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What are the chances of seeing the Northern Lights?",
        answer:
          "During peak season (September-March), we have approximately 70% success rate. We monitor aurora forecasts closely and only run the tour when conditions are favorable. If no aurora activity is visible during your tour, we offer a 50% discount on a second attempt.",
      },
    ],
  },
  {
    title: "Historic Anchorage Walking Tour",
    description:
      "Walk through time as you explore Anchorage's rich history, from its indigenous origins to the 1964 earthquake that shaped the modern city. Visit historical landmarks and hear fascinating stories of gold rushes, railroad development, and frontier spirit.",
    images: [
      "/images/tours/anchorage/historic-downtown.jpg",
      "/images/tours/anchorage/earthquake-park.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.7,
    tags: ["History", "Walking Tour", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Professor Robert Thompson",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 2 miles at a leisurely pace with frequent stops. The terrain is mostly flat with paved sidewalks, though some portions may involve slight inclines. We recommend comfortable walking shoes and weather-appropriate clothing.",
      },
    ],
  },
  {
    title: "Iditarod Dog Sledding Experience",
    description:
      "Join an Iditarod veteran and their champion sled dogs for an authentic dog sledding adventure through snowy Alaskan wilderness. Learn mushing techniques, the history of this traditional transportation method, and bond with these incredible working dogs.",
    images: [
      "/images/tours/anchorage/dog-sledding.jpg",
      "/images/tours/anchorage/husky-team.jpg",
    ],
    duration: "5 hours",
    price: "$325",
    rating: 4.9,
    tags: ["Dog Sledding", "Winter", "Adventure"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Mitch Johnson, Iditarod Finisher",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I get to drive the sled myself?",
        answer:
          "Yes! After a comprehensive safety briefing and basic training, each participant gets the opportunity to mush their own dog team on a specially designed trail under the supervision of our experienced guides. The dogs know the trails well, making this a safe yet exhilarating experience even for beginners.",
      },
    ],
  },
  {
    title: "Denali Wilderness Day Adventure",
    description:
      "Experience the majesty of Denali National Park on this full-day excursion from Anchorage. Travel along the scenic Alaska Railroad, then explore the park's wilderness with a naturalist guide, spotting wildlife and learning about this unique ecosystem.",
    images: [
      "/images/tours/anchorage/denali-vista.jpg",
      "/images/tours/anchorage/denali-wildlife.jpg",
    ],
    duration: "12 hours",
    price: "$375",
    rating: 4.9,
    tags: ["Denali", "National Park", "Wildlife"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Sarah Miller, Park Naturalist",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "What wildlife might we see?",
        answer:
          "Denali is home to the 'Big Five': grizzly bears, wolves, moose, caribou, and Dall sheep. While wildlife sightings vary by season and luck, our expert guides know the best viewing areas. You'll also likely spot smaller mammals like foxes and marmots, plus numerous bird species including eagles and ptarmigan.",
      },
    ],
  },
  {
    title: "Native Alaskan Cultural Heritage Tour",
    description:
      "Immerse yourself in Alaska's indigenous cultures with visits to the Alaska Native Heritage Center. Meet native artists, witness traditional dancing and storytelling, and learn about the customs and challenges of Alaska's first peoples.",
    images: [
      "/images/tours/anchorage/native-heritage-center.jpg",
      "/images/tours/anchorage/indigenous-art.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Indigenous Culture", "Art", "Education"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Anna Kayotuk",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is photography allowed?",
        answer:
          "Photography is permitted in most areas, but there may be specific ceremonies or artifacts where photos are not allowed out of cultural respect. Your guide will clearly indicate these moments. When photographing people, especially elders or during cultural demonstrations, please ask permission first as a sign of respect.",
      },
    ],
  },
  {
    title: "Family Ice Fishing Adventure",
    description:
      "Bundle up for a fun-filled day of ice fishing on a frozen Alaskan lake. Learn to drill ice holes, set up fishing gear, and hopefully catch Arctic char, trout or salmon. Enjoy a lakeside cookout of your fresh catch prepared by your guide.",
    images: [
      "/images/tours/anchorage/ice-fishing.jpg",
      "/images/tours/anchorage/winter-lake.jpg",
    ],
    duration: "6 hours",
    price: "$195",
    rating: 4.7,
    tags: ["Ice Fishing", "Winter", "Family Fun"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Mike Peterson",
    tourCategoryId: "family",
    faqs: [
      {
        question: "Do we need to bring our own fishing equipment?",
        answer:
          "No, all fishing equipment is provided, including ice augers, fishing rods, bait, warm shelters, and ice scoops. We even provide hand and foot warmers! You should dress warmly in layers and bring sunglasses (the ice glare can be bright), but all technical equipment is included.",
      },
    ],
  },
  {
    title: "Luxury Wilderness Retreat & Spa",
    description:
      "Escape to an exclusive wilderness lodge accessible only by seaplane for a day of ultimate relaxation and indulgence. Enjoy hot stone therapy using Alaskan river rocks, a cedar sauna with glacier views, and gourmet dining featuring local ingredients.",
    images: [
      "/images/tours/anchorage/wilderness-lodge.jpg",
      "/images/tours/anchorage/mountain-spa.jpg",
    ],
    duration: "10 hours",
    price: "$895",
    rating: 5.0,
    tags: ["Luxury", "Spa", "Wilderness"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Elizabeth Grant, Spa Director",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What spa treatments are included?",
        answer:
          "The package includes a 60-minute massage using heated Alaskan river stones and locally sourced botanical oils, followed by a private cedar sauna session and glacial plunge pool access. Additional treatments like facials or extended massages can be arranged for an additional fee when booking.",
      },
    ],
  },
];

export default anchorageTours;
