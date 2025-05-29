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
      {
        question: "Is the flight safe for children?",
        answer:
          "Yes, our planes are equipped with safety gear and child-friendly seating. Children ages 2 and up can fly, and we provide life vests for all passengers. We also offer special child rates for ages 2-12.",
      },
      {
        question: "What should we wear for the flight?",
        answer:
          "Dress in layers, as temperatures can vary significantly at altitude. We recommend a warm jacket, hat, gloves, and sturdy shoes. Sunglasses are also advisable to protect against glare from the snow and water.",
      },
      {
        question: "Can we bring cameras or drones?",
        answer:
          "Yes, cameras are encouraged! Our pilots will make stops for photo opportunities. However, drones are not allowed due to safety regulations and wildlife disturbance concerns. Please ensure your camera gear is securely fastened during the flight.",
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
      {
        question: "Do we need any special equipment?",
        answer:
          "No special equipment is required. We provide all necessary foraging tools, cooking gear, and safety equipment. Just bring comfortable clothing, sturdy shoes, and a sense of adventure!",
      },
      {
        question: "Is this tour suitable for vegetarians or vegans?",
        answer:
          "Yes! While we focus on local seafood, we can easily adapt the menu to accommodate vegetarian or vegan diets using foraged plants and mushrooms. Please inform us of dietary restrictions when booking.",
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
      {
        question: "Do I need to bring my own camera?",
        answer:
          "While we recommend bringing your own DSLR or mirrorless camera for the best results, we provide high-quality cameras and tripods for those who don't have their own. Our guide will also assist with camera settings and techniques.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Dress warmly in layers, including thermal base layers, insulated jackets, hats, gloves, and waterproof boots. Temperatures can drop significantly at night, especially in remote areas. We provide hand warmers and hot drinks to keep you comfortable.",
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
      {
        question: "Are there restroom breaks during the tour?",
        answer:
          "Yes, we include a restroom break at a local café halfway through the tour. You can also purchase refreshments if desired.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Absolutely! We welcome families and provide engaging stories and activities to keep children entertained. Children under 12 are free with a paying adult.",
      },
      {
        question: "Can we take photos during the tour?",
        answer:
          "Yes, photography is encouraged! Our guide will point out the best spots for photos along the route.",
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
      {
        question: "What should I wear for dog sledding?",
        answer:
          "Dress warmly in layers, including thermal base layers, insulated jackets, hats, gloves, and waterproof boots. We provide additional gear like blankets and goggles to keep you comfortable during the ride.",
      },
      {
        question: "Can children participate in this tour?",
        answer:
          "Yes! Children ages 5 and up can ride along as passengers. For younger children, we can arrange a special sled designed for family rides. Please inform us of children's ages when booking.",
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
      {
        question: "How long is the train ride to Denali?",
        answer:
          "The scenic train ride from Anchorage to Denali takes approximately 8 hours each way, with stunning views of mountains, rivers, and wildlife along the route. We provide comfortable seating, meals, and narration by knowledgeable guides during the journey.",
      },
      {
        question: "What should I bring for this tour?",
        answer:
          "Dress in layers for variable weather conditions. Bring a camera, binoculars for wildlife viewing, a refillable water bottle, and any personal items you may need for a full day outdoors. We provide lunch and snacks.",
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
      {
        question: "Are there any age restrictions for this tour?",
        answer:
          "No, this tour is suitable for all ages. We encourage families to participate and learn together. Children will find the stories and demonstrations engaging, and we can provide special activities for younger guests.",
      },
      {
        question: "What should we wear for this tour?",
        answer:
          "Dress comfortably for a mix of indoor and outdoor activities. We recommend wearing layers, as temperatures can vary. Comfortable walking shoes are essential, as some areas involve light walking. If visiting during colder months, a warm jacket and hat are advisable.",
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
      {
        question: "Is this tour suitable for young children?",
        answer:
          "Yes! We welcome families with children ages 5 and up. Our guides are experienced in working with kids and will ensure a safe, fun experience for all ages. Children under 12 fish for free with a paying adult.",
      },
      {
        question: "What should we wear for ice fishing?",
        answer:
          "Dress warmly in layers, including thermal base layers, insulated jackets, hats, gloves, and waterproof boots. We provide heated shelters to keep you comfortable while fishing.",
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
      {
        question: "Is transportation included?",
        answer:
          "Yes, round-trip seaplane transportation from Anchorage to the lodge is included in the tour price. The scenic flight offers stunning views of glaciers, mountains, and pristine wilderness.",
      },
      {
        question: "What should I wear for the spa day?",
        answer:
          "We provide plush robes and slippers for your comfort at the lodge. Please bring a swimsuit for the plunge pool and sauna, and wear comfortable clothing for the flight. Outdoor gear is recommended if you wish to explore the surrounding wilderness trails.",
      },
      {
        question: "Can we book this tour for a special occasion?",
        answer:
          "Absolutely! We can arrange special touches like champagne upon arrival, personalized spa treatments, or private dining experiences. Please let us know when booking so we can tailor the experience to your celebration.",
      },
    ],
  },
];

export default anchorageTours;
