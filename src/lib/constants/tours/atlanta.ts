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
      {
        question: "Are there any physical requirements for this tour?",
        answer:
          "The tour involves walking and some standing, but we keep a leisurely pace with plenty of breaks. Most locations are wheelchair accessible, but please inform us in advance if you have specific mobility needs so we can accommodate you appropriately.",
      },
      {
        question: "Can this tour be customized for school groups?",
        answer:
          "Absolutely! We can tailor the tour to focus on specific aspects of the Civil Rights Movement that align with educational goals. Please contact us in advance to discuss your group's needs, and we can create a customized itinerary that includes relevant discussions, activities, and learning objectives.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable. We understand that plans can change, so please contact us as soon as possible if you need to reschedule.",
      },
      {
        question: "Is photography allowed during the tour?",
        answer:
          "Yes, photography is encouraged at most locations, especially at the Martin Luther King Jr. National Historical Park and the Center for Civil and Human Rights. However, please be respectful of any signs indicating no photography in specific areas, particularly in sensitive exhibits or memorials.",
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

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Sandra Mitchell",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we see celebrities during the tour?",
        answer:
          "While we cannot guarantee celebrity sightings, we do visit active production locations where filming regularly takes place. Occasionally, our groups have been lucky enough to witness filming in progress or spot actors on set. Our industry-connected guides will share insider stories about working with the many productions that have made Atlanta the 'Hollywood of the South'.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to be engaging for all ages. We cover the basics of film production in an entertaining way, and children often enjoy seeing the sets and learning about how their favorite movies and shows are made. However, please note that some studio areas may have age restrictions due to safety regulations.",
      },
      {
        question: "Can we take photos during the tour?",
        answer:
          "Photography policies vary by location. While many areas allow photos, some active sets or restricted zones may not permit photography for security reasons. Our guides will inform you of any restrictions at each stop, and we encourage you to capture the experience where permitted.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable. If you need to reschedule, please contact us as soon as possible, and we will do our best to accommodate your request.",
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
      {
        question: "Are drinks included in the tour price?",
        answer:
          "Yes, the tour price includes all food tastings and a selection of craft cocktails at each stop. Non-alcoholic options are also available for those who prefer them. We aim to provide a comprehensive tasting experience that showcases the best of Atlanta's culinary scene.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "This tour is primarily designed for adults and does not include child-friendly options. However, we can customize a family-friendly culinary experience upon request, focusing on Southern dishes that appeal to younger palates.",
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
      {
        question: "Are there restroom facilities along the route?",
        answer:
          "Yes, there are public restrooms available at several points along the BeltLine, including parks and community centers. Our guide will point these out during the tour.",
      },
      {
        question: "Can I bring my dog on this tour?",
        answer:
          "Yes, well-behaved dogs on leashes are welcome! The BeltLine is a pet-friendly area, and many locals enjoy walking their dogs along the trails. Just be sure to clean up after your pet and keep them under control around other visitors.",
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
      {
        question: "Will we visit any recording studios?",
        answer:
          "Yes, the tour includes visits to iconic recording studios where many famous tracks were produced. Depending on availability, you may have the chance to see where artists record and learn about the production process from industry professionals. However, please note that access to active sessions may be limited due to privacy and security protocols.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "This tour is primarily geared towards adults and older teens due to the mature themes often present in hip-hop music and culture. However, we can customize a family-friendly version focusing on the positive cultural aspects of Atlanta's music scene if requested in advance.",
      },
    ],
  },
];

export default atlantaTours;
