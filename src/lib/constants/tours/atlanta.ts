import { Tour } from "@/lib/interfaces/services/tours";

export const atlantaTours: Tour[] = [
  {
    title: "Civil Rights Legacy Tour",
    description:
      "Explore Atlanta's pivotal role in the Civil Rights Movement with visits to the Martin Luther King Jr. National Historical Park, Center for Civil and Human Rights, and historically significant locations guided by civil rights scholars.",
    images: [
      "/images/tours/atlanta/mlk-center.jpg",
      "/images/tours/atlanta/civil-rights-center.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Civil Rights", "History", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Marcus Johnson",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is this tour appropriate for children?",
        answer:
          "Yes, we welcome children and have designed the tour to be educational and engaging for all ages. Our guides are skilled at explaining complex historical events in age-appropriate ways, and the Center for Civil and Human Rights offers interactive exhibits specifically designed for young visitors to understand these important concepts.",
      },
    ],
  },
  {
    title: "Atlanta Film & TV Production Tour",
    description:
      "Go behind the scenes of Atlanta's booming film industry with exclusive access to production studios, filming locations from popular shows and movies, and meetings with industry professionals who bring Hollywood to the South.",
    images: [
      "/images/tours/atlanta/film-studio.jpg",
      "/images/tours/atlanta/filming-location.jpg",
    ],
    duration: "5 hours",
    price: "$125",
    rating: 4.7,
    tags: ["Film", "Entertainment", "Behind the Scenes"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Sandra Mitchell, Film Industry Veteran",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we see celebrities during the tour?",
        answer:
          "While we cannot guarantee celebrity sightings, we do visit active production locations where filming regularly takes place. Occasionally, our groups have been lucky enough to witness filming in progress or spot actors on set. Our industry-connected guides will share insider stories about working with the many productions that have made Atlanta the 'Hollywood of the South'.",
      },
    ],
  },
  {
    title: "Southern Food & Cocktail Experience",
    description:
      "Savor the diverse flavors of Atlanta's renowned culinary scene, from traditional Southern comfort food to innovative farm-to-table creations, paired with craft cocktails at award-winning establishments.",
    images: [
      "/images/tours/atlanta/southern-cuisine.jpg",
      "/images/tours/atlanta/craft-cocktails.jpg",
    ],
    duration: "4 hours",
    price: "$115",
    rating: 4.8,
    tags: ["Food", "Cocktails", "Southern Cuisine"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Darius Williams",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Absolutely! We can accommodate vegetarian, vegan, gluten-free, and most other dietary restrictions with advance notice. Southern cuisine is traditionally diverse, and our restaurant partners are skilled at creating excellent alternatives that maintain the spirit of the dishes while meeting dietary needs.",
      },
    ],
  },
  {
    title: "Atlanta BeltLine Art & Nature Walk",
    description:
      "Explore the Atlanta BeltLine, an innovative urban redevelopment project transforming former railway corridors into a network of public parks, multi-use trails and stunning public art installations.",
    images: [
      "/images/tours/atlanta/beltline-art.jpg",
      "/images/tours/atlanta/beltline-trail.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.6,
    tags: ["Urban Art", "Walking", "Outdoors"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Elena Rodriguez",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 3 miles of the BeltLine at a leisurely pace with frequent stops to admire art installations and discuss the project's history and impact. The terrain is flat and paved, making it accessible for most fitness levels. We recommend comfortable walking shoes and weather-appropriate clothing.",
      },
    ],
  },
  {
    title: "Atlanta Hip-Hop Heritage Experience",
    description:
      "Dive into Atlanta's influential hip-hop scene with visits to legendary studios, iconic neighborhoods, and venues that shaped the sound of Southern rap, guided by music industry insiders with personal connections to the scene.",
    images: [
      "/images/tours/atlanta/recording-studio.jpg",
      "/images/tours/atlanta/hip-hop-mural.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Music", "Hip-Hop", "Cultural"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "DJ Tron",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Do I need to be a hip-hop fan to enjoy this tour?",
        answer:
          "While hip-hop enthusiasts will certainly appreciate the specific references and history, the tour is designed to be engaging for anyone interested in music, culture, and Atlanta's impact on the entertainment industry. Our guides contextualize the importance of Atlanta's hip-hop scene within broader cultural movements, making it accessible and interesting even for those with limited knowledge of the genre.",
      },
    ],
  },
];

export default atlantaTours;
