import { Tour } from "@/lib/interfaces/services/tours";

export const amalfiCoastTours: Tour[] = [
  {
    title: "Positano & Path of the Gods Hike",
    description:
      "Experience the breathtaking beauty of the Amalfi Coast with a guided hike along the famous 'Path of the Gods' trail, offering spectacular panoramic views of the Mediterranean, followed by exploration of the picturesque cliffside village of Positano.",
    images: [
      "/images/tours/amalfi-coast/path-of-gods.jpg",
      "/images/tours/amalfi-coast/positano-view.jpg",
    ],
    duration: "7 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Hiking", "Scenery", "Village"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult is the hiking trail?",
        answer:
          "The Path of the Gods is a moderate hike of about 7km with some elevation changes. While not technically difficult, it requires reasonable fitness and comfortable walking shoes. The path includes some steep sections and uneven terrain, but the spectacular views make every step worthwhile. We maintain a comfortable pace with plenty of stops for photos and rest.",
      },
      {
        question: "What should I bring for the hike?",
        answer:
          "We recommend wearing sturdy hiking shoes, bringing a refillable water bottle, sunscreen, and a light jacket as temperatures can change quickly in the mountains. A small backpack for personal items is also advisable. We provide snacks and refreshments during the hike.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children aged 8 and up who are comfortable with hiking. We can adjust the pace to accommodate younger hikers, but parents should assess their child's fitness level before booking. Children under 8 may find the trail too challenging.",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "We monitor weather conditions closely. If the forecast indicates heavy rain or unsafe hiking conditions, we will reschedule your tour or offer a full refund. In case of light rain, we provide ponchos and continue with the hike as planned, as the Amalfi Coast can be even more beautiful in misty weather.",
      },
    ],
    availableDates: [
      "April 15, 2024",
      "April 29, 2024",
      "May 13, 2024",
      "May 27, 2024",
      "June 10, 2024",
      "June 24, 2024",
      "September 9, 2024",
      "September 23, 2024",
      "October 7, 2024",
      "October 21, 2024",
    ],
    highlights: [
      "Hike the famous 'Path of the Gods' trail with panoramic coastal views",
      "Professional hiking guide sharing local knowledge and history",
      "Explore the picturesque cliffside village of Positano",
      "Spectacular photo opportunities along the Mediterranean coastline",
      "Authentic local experience away from tourist crowds",
    ],
    inclusions: [
      "Professional hiking guide",
      "Small group experience (max 10 people)",
      "Trail snacks and water",
      "Local transportation between trail points",
      "Map of the path and surrounding area",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Lunch (available in Positano at own expense)",
      "Hiking poles (available for rent)",
      "Personal travel insurance",
      "Gratuities",
    ],
    itinerary: [
      "8:30 AM: Meet guide in Bomerano",
      "8:45 AM: Safety briefing and route overview",
      "9:00 AM: Begin hike along the Path of the Gods",
      "10:30 AM: Rest stop at panoramic viewpoint with refreshments",
      "11:30 AM: Continue hiking with views of Praiano and Positano",
      "12:30 PM: Descend to Nocelle",
      "1:00 PM: Transfer to Positano",
      "1:30 PM - 3:00 PM: Free time to explore Positano and have lunch",
      "3:30 PM: Return transportation to starting point",
    ],
    meetingPoint:
      "Piazza Paolo Capasso, Bomerano (Agerola), with the statue of the hiker",
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity or in case of no-show.",
  },
  {
    title: "Limoncello & Culinary Traditions",
    description:
      "Discover the secrets of Amalfi Coast cuisine with visits to family-run lemon groves, a hands-on cooking class featuring local specialties, and a limoncello making demonstration at a historic distillery in Ravello.",
    images: [
      "/images/tours/amalfi-coast/lemon-grove.jpg",
      "/images/tours/amalfi-coast/cooking-class.jpg",
    ],
    duration: "6 hours",
    price: "$145",
    rating: 5.0,
    tags: ["Food", "Cooking", "Limoncello"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What will we cook during the class?",
        answer:
          "The menu changes seasonally but typically includes traditional Amalfi Coast specialties such as scialatielli pasta with seafood, lemon-infused dishes, and local desserts like delizia al limone. Our chef adapts the class to accommodate dietary restrictions and preferences when notified in advance.",
      },
      {
        question: "Do we get to taste the limoncello?",
        answer:
          "Absolutely! After the limoncello making demonstration, you'll have the opportunity to taste several varieties of this iconic liqueur, including traditional and flavored versions. We also provide recipes so you can recreate your own limoncello at home.",
      },
      {
        question: "Is transportation included?",
        answer:
          "Yes, we provide round-trip transportation from your accommodation in Amalfi or Positano. The drive through the coastal roads is part of the experience, offering stunning views along the way.",
      },
    ],
    availableDates: [
      "April 10, 2024",
      "April 24, 2024",
      "May 8, 2024",
      "May 22, 2024",
      "June 5, 2024",
      "June 19, 2024",
      "July 10, 2024",
      "July 24, 2024",
      "September 4, 2024",
      "September 18, 2024",
      "October 9, 2024",
    ],
    highlights: [
      "Visit family-run lemon groves with centuries of tradition",
      "Learn the secrets of authentic limoncello production",
      "Hands-on cooking class featuring regional specialties",
      "Taste a variety of limoncello styles and citrus-based products",
      "Enjoy a full meal of dishes you've prepared with coastal views",
    ],
    inclusions: [
      "Transportation between locations",
      "English-speaking culinary guide",
      "Lemon grove tour with owner",
      "Limoncello making demonstration and tasting",
      "Cooking class with all ingredients",
      "Full meal with wine and your homemade limoncello",
      "Recipe booklet to take home",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional alcoholic beverages beyond included wine",
      "Personal cooking equipment",
      "Gratuities",
    ],
    itinerary: [
      "9:30 AM: Meet guide and depart for lemon grove",
      "10:00 AM: Guided tour of traditional terraced lemon cultivation",
      "11:00 AM: Limoncello production demonstration and tasting",
      "12:00 PM: Transfer to cooking school in Ravello",
      "12:30 PM: Hands-on cooking class with local chef",
      "2:30 PM: Lunch featuring dishes prepared during class",
      "3:30 PM: Tour conclusion with limoncello gift and recipes",
    ],
    meetingPoint:
      "Amalfi main bus station, Piazza Flavio Gioia, in front of the fountain",
    cancellationPolicy:
      "Full refund available if canceled 72 hours before the scheduled activity. 50% refund if canceled between 48-72 hours. No refund for cancellations less than 48 hours in advance.",
  },
  {
    title: "Private Amalfi Coast Yacht Experience",
    description:
      "Sail the stunning Amalfi coastline aboard a private luxury yacht, stopping to swim in hidden coves, visit sea caves including the famous Emerald Grotto, and enjoy a gourmet seafood lunch with local wine while anchored off a secluded beach.",
    images: [
      "/images/tours/amalfi-coast/yacht-cruise.jpg",
      "/images/tours/amalfi-coast/emerald-grotto.jpg",
    ],
    duration: "8 hours",
    price: "$795",
    rating: 4.9,
    tags: ["Yacht", "Swimming", "Luxury"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "How many people can join the yacht experience?",
        answer:
          "Our luxury yacht accommodates up to 8 guests comfortably, making it perfect for families or small groups. The experience is fully private, so you won't be sharing the vessel with other travelers. For larger groups, we can arrange for a bigger boat at an additional cost.",
      },
      {
        question: "What should we bring for the yacht trip?",
        answer:
          "We recommend bringing swimwear, sunscreen, a hat, and a light jacket for the sea breeze. We provide towels, snorkeling gear, and a gourmet lunch with local wines. Feel free to bring your own drinks or snacks if you have specific preferences.",
      },
      {
        question: "Can we customize the itinerary?",
        answer:
          "Yes! We can tailor the yacht experience to your interests, whether you want more time swimming, visiting specific coastal towns, or enjoying a sunset cruise. Just let us know your preferences when booking.",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "Safety is our top priority. If weather conditions are unsafe for sailing, we will reschedule your tour or offer a full refund. In case of light rain, we can still proceed with the trip as long as it is safe to do so.",
      },
    ],
    availableDates: [
      "April 1, 2024",
      "April 15, 2024",
      "May 1, 2024",
      "May 15, 2024",
      "June 1, 2024",
      "June 15, 2024",
      "July 1, 2024",
      "July 15, 2024",
      "August 1, 2024",
      "August 15, 2024",
      "September 1, 2024",
      "September 15, 2024",
      "October 1, 2024",
      "October 15, 2024",
    ],
    highlights: [
      "Private luxury yacht with personalized itinerary",
      "Swim in hidden coves and snorkel in crystal-clear waters",
      "Visit the famous Emerald Grotto and other sea caves",
      "Gourmet seafood lunch with local wine",
      "Relax on secluded beaches away from the crowds",
    ],
    inclusions: [
      "Private yacht for your group",
      "Professional captain and crew",
      "Snorkeling equipment",
      "Gourmet lunch and beverages",
      "Beach towels and sun loungers",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks not specified",
    ],
    itinerary: [
      "9:00 AM: Meet at the marina in Amalfi",
      "9:30 AM: Depart for a day of exploration along the coast",
      "10:00 AM: Stop at the Emerald Grotto for a guided tour",
      "11:00 AM: Swim and snorkel in a secluded cove",
      "12:30 PM: Enjoy a gourmet lunch on board",
      "2:00 PM: Visit another picturesque village or beach",
      "4:00 PM: Return to Amalfi",
    ],
    meetingPoint: "Marina Grande, Amalfi, at the main dock",
    cancellationPolicy:
      "Full refund if canceled 7 days in advance. 50% refund if canceled 3-6 days in advance. No refund for cancellations less than 3 days before the scheduled activity.",
  },
  {
    title: "Ravello's Historic Villas & Gardens",
    description:
      "Explore the elegant hill town of Ravello with exclusive access to its historic villas, magnificent gardens, and hidden corners that inspired composers and writers throughout history, accompanied by classical music performances in breathtaking settings.",
    images: [
      "/images/tours/amalfi-coast/villa-rufolo.jpg",
      "/images/tours/amalfi-coast/ravello-gardens.jpg",
    ],
    duration: "5 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Villas", "Gardens", "History"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What makes Ravello's villas so special?",
        answer:
          "Ravello's villas represent the pinnacle of medieval Italian architecture blended with Moorish influences. Villa Rufolo (1270 AD) and Villa Cimbrone offer some of the Mediterranean's most spectacular panoramic views and gardens. These villas have inspired countless artists, including composer Richard Wagner, whose visit to Villa Rufolo inspired the setting for his opera Parsifal. Our tour provides historical context and special access to areas not always open to the general public.",
      },
      {
        question: "Are the gardens accessible year-round?",
        answer:
          "Yes, both Villa Rufolo and Villa Cimbrone's gardens are open year-round, though some plants may be seasonal. We visit during the best times for blooming flowers and lush greenery. The gardens are designed to be enjoyed in all seasons, with different plants and views to appreciate throughout the year.",
      },
      {
        question: "Is this tour suitable for those with mobility issues?",
        answer:
          "While the villas and gardens are generally accessible, some areas have uneven paths and steps. We can provide assistance and adjust the itinerary to accommodate guests with limited mobility. Please inform us in advance so we can ensure a comfortable experience for everyone.",
      },
      {
        question: "Do we need to book in advance?",
        answer:
          "Yes, we recommend booking at least 48 hours in advance to secure your spot, especially during peak tourist seasons. This allows us to arrange exclusive access and ensure a personalized experience. Last-minute bookings may be accommodated based on availability.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable. We understand that plans can change, so please contact us as soon as possible if you need to cancel or reschedule.",
      },
      {
        question: "Are there any additional costs during the tour?",
        answer:
          "The tour price includes all entrance fees to the villas and gardens, guided commentary, and a light refreshment. However, any personal purchases such as souvenirs or additional food and drinks are not included. We can recommend local cafés and shops if you wish to explore further.",
      },
    ],
    availableDates: [
      "April 1, 2024",
      "April 15, 2024",
      "May 1, 2024",
      "May 15, 2024",
      "June 1, 2024",
      "June 15, 2024",
      "July 1, 2024",
      "July 15, 2024",
      "August 1, 2024",
      "August 15, 2024",
      "September 1, 2024",
      "September 15, 2024",
      "October 1, 2024",
      "October 15, 2024",
    ],
    highlights: [
      "Exclusive access to Ravello's historic villas and gardens",
      "Guided tour with expert local historian",
      "Classical music performance in a villa garden",
      "Breathtaking views of the Amalfi Coast",
      "Small group size for a personalized experience",
    ],
    inclusions: [
      "Entrance fees to all villas and gardens",
      "Guided tour with historical insights",
      "Classical music performance",
      "Light refreshments",
      "Transportation between sites",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks",
    ],
    itinerary: [
      "9:00 AM: Meet guide in Ravello",
      "9:15 AM: Visit Villa Rufolo and its gardens",
      "10:30 AM: Explore Villa Cimbrone and its famous terrace",
      "12:00 PM: Enjoy a classical music performance",
      "1:00 PM: Tour conclusion and return transportation",
    ],
    meetingPoint: "Piazza Vescovado, Ravello, in front of the Cathedral",
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity.",
  },
  {
    title: "Amalfi Paper Making & Historic Center",
    description:
      "Discover the ancient art of paper making in Amalfi, once a major medieval maritime power, with a visit to a 13th-century paper mill still producing handcrafted paper, followed by exploration of the town's impressive Duomo and historic center.",
    images: [
      "/images/tours/amalfi-coast/paper-making.jpg",
      "/images/tours/amalfi-coast/amalfi-duomo.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Crafts", "History", "Local Traditions"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we make our own paper?",
        answer:
          "Yes! This interactive experience includes a hands-on workshop where you'll create your own sheet of paper using traditional methods. You'll learn the entire process from pulp preparation to pressing and drying. Your handmade paper creation makes a unique souvenir, and you can have it custom-stamped with the historic mark of Amalfi.",
      },
      {
        question: "What else do we see in Amalfi?",
        answer:
          "After the paper-making workshop, we explore Amalfi's historic center, including the stunning Cathedral of St. Andrew (Duomo di Amalfi) with its beautiful Arab-Norman architecture. You'll also have time to wander the charming streets, visit local artisan shops, and enjoy a gelato or coffee at a traditional café.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children aged 6 and up. The paper-making workshop is engaging and educational, making it a fun experience for kids. We can adjust the pace to accommodate younger participants, ensuring everyone has an enjoyable time.",
      },
    ],
    availableDates: [
      "April 5, 2024",
      "April 19, 2024",
      "May 3, 2024",
      "May 17, 2024",
      "May 31, 2024",
      "June 14, 2024",
      "June 28, 2024",
      "September 6, 2024",
      "September 20, 2024",
      "October 4, 2024",
      "October 18, 2024",
    ],
    highlights: [
      "Hands-on experience at a traditional paper mill",
      "Create your own sheet of handmade paper",
      "Explore Amalfi's historic center and Duomo",
      "Learn about Amalfi's maritime history",
      "Small group size for personalized attention",
    ],
    inclusions: [
      "Guided paper-making workshop",
      "All materials for paper making",
      "Entrance fee to the paper museum",
      "Guided tour of Amalfi's historic center",
      "Gelato or coffee at a local café",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks",
    ],
    itinerary: [
      "9:00 AM: Meet guide in Amalfi",
      "9:15 AM: Visit the paper mill and museum",
      "10:00 AM: Hands-on paper-making workshop",
      "11:30 AM: Guided tour of Amalfi's historic center",
      "12:30 PM: Visit the Cathedral of St. Andrew",
      "1:00 PM: Tour conclusion and free time in Amalfi",
    ],
    meetingPoint: "Piazza Flavio Gioia, Amalfi, in front of the fountain",
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity.",
  },
  {
    title: "Hidden Villages & Local Life",
    description:
      "Venture beyond the tourist trail to the Amalfi Coast's hidden villages perched high in the mountains, meeting local families, visiting small-scale producers of cheese and wine, and experiencing authentic Italian daily life away from the crowds.",
    images: [
      "/images/tours/amalfi-coast/hidden-village.jpg",
      "/images/tours/amalfi-coast/local-producer.jpg",
    ],
    duration: "7 hours",
    price: "$125",
    rating: 4.8,
    tags: ["Off the Beaten Path", "Local Culture", "Food"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Which villages do we visit?",
        answer:
          "We typically visit combinations of Scala, Tramonti, and Furore - authentic mountain communities where tourism is minimal and traditions remain strong. Our exact route sometimes changes based on seasonal activities or local festivals that might be happening. These villages offer spectacular views of the coast from a completely different perspective than the typical tourist spots.",
      },
      {
        question: "What kind of local products do we sample?",
        answer:
          "During this tour, you'll have the opportunity to taste locally produced cheeses, wines, and cured meats. We visit small family-run farms and vineyards where you can see traditional production methods in action. Depending on the season, we may also sample seasonal fruits and vegetables, homemade jams, and other artisanal products unique to the region.",
      },
    ],
    availableDates: [
      "April 12, 2024",
      "April 26, 2024",
      "May 10, 2024",
      "May 24, 2024",
      "June 7, 2024",
      "June 21, 2024",
      "July 12, 2024",
      "July 26, 2024",
      "September 5, 2024",
      "September 19, 2024",
      "October 10, 2024",
    ],
    highlights: [
      "Visit authentic Amalfi Coast villages rarely seen by tourists",
      "Meet local artisans and producers in their homes",
      "Taste homemade limoncello, cheese, and local wines",
      "Learn about traditional farming and production methods",
      "Enjoy a scenic hike with breathtaking views",
    ],
    inclusions: [
      "Guided tour of hidden villages",
      "Tastings of local products",
      "Visit to a family-run farm and vineyard",
      "Traditional Italian lunch with locals",
      "Transportation from/to Amalfi",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks",
    ],
    itinerary: [
      "8:30 AM: Depart from Amalfi",
      "9:00 AM: Visit the village of Scala and its historic sites",
      "10:30 AM: Tour a local cheese producer in Tramonti",
      "12:00 PM: Wine tasting at a family-run vineyard",
      "1:00 PM: Enjoy a traditional lunch with a local family",
      "2:30 PM: Explore the village of Furore and its fjord",
      "4:00 PM: Return to Amalfi",
    ],
    meetingPoint: "Piazza Flavio Gioia, Amalfi, in front of the fountain",
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity.",
  },
  {
    title: "Sunset Photography Cruise",
    description:
      "Capture the magical light of the Amalfi Coast during the golden hour with a photography-focused sunset cruise, guided by a professional photographer who will help you master techniques for shooting coastal landscapes, architecture, and the famous Mediterranean light.",
    images: [
      "/images/tours/amalfi-coast/sunset-photography.jpg",
      "/images/tours/amalfi-coast/coast-golden-hour.jpg",
    ],
    duration: "3 hours",
    price: "$135",
    rating: 4.8,
    tags: ["Photography", "Sunset", "Boat Tour"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "Is specialized camera equipment needed?",
        answer:
          "This workshop accommodates photographers of all levels using any type of camera, from smartphones to professional DSLRs. Our instructor provides tips specific to your equipment. For DSLR users, we recommend bringing a versatile zoom lens and a tripod if possible, though we do have a limited number of tripods available to borrow during the cruise.",
      },
      {
        question: "What if the weather is cloudy?",
        answer:
          "While we hope for clear skies, the Amalfi Coast can be stunning even under overcast conditions. If the weather is unsuitable for photography, we will reschedule your cruise or offer a full refund. Cloudy sunsets can create dramatic lighting and reflections on the water, so we often find beauty in unexpected weather.",
      },
      {
        question: "Do I need prior photography experience?",
        answer:
          "No prior experience is necessary! This tour is designed for all skill levels, from beginners to advanced photographers. Our guide will provide personalized instruction based on your current knowledge and help you improve your skills during the cruise.",
      },
    ],
    availableDates: [
      "April 20, 2024",
      "May 4, 2024",
      "May 18, 2024",
      "June 1, 2024",
      "June 15, 2024",
      "June 29, 2024",
      "September 7, 2024",
      "September 21, 2024",
      "October 5, 2024",
      "October 19, 2024",
    ],
    highlights: [
      "Sunset cruise along the stunning Amalfi Coast",
      "Photography tips and guidance from a pro",
      "Capture iconic sites like Positano and the Faraglioni",
      "Small group for personalized instruction",
      "Snacks and drinks included on board",
    ],
    inclusions: [
      "3-hour private boat cruise",
      "Professional photographer as your guide",
      "Snacks and beverages on board",
      "Use of tripod and camera equipment (if needed)",
      "Post-cruise photo review and editing tips",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks",
    ],
    itinerary: [
      "5:30 PM: Meet at the marina in Amalfi",
      "6:00 PM: Depart for a sunset cruise along the coast",
      "6:30 PM: Photography session at the best sunset spots",
      "8:00 PM: Return to Amalfi",
    ],
    meetingPoint: "Marina Grande, Amalfi, at the main dock",
    cancellationPolicy:
      "Full refund if canceled 7 days in advance. 50% refund if canceled 3-6 days in advance. No refund for cancellations less than 3 days before the scheduled activity.",
  },
  {
    title: "Path of the Gods Hiking Adventure",
    description:
      "Trek along the legendary 'Path of the Gods' (Sentiero degli Dei), one of Italy's most spectacular hiking trails with breathtaking views of the Mediterranean coastline. Learn about local flora, fauna, and historical legends with an expert mountain guide.",
    images: [
      "/images/tours/amalfi-coast/path-of-gods-vista.jpg",
      "/images/tours/amalfi-coast/hiking-trail.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Hiking", "Nature", "Scenery"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult is the Path of the Gods hike?",
        answer:
          "This hike is moderately challenging with some elevation changes and uneven terrain. The total distance is about 7.8 km (4.8 miles) with approximately 650m total elevation change. While no technical climbing skills are required, good physical fitness and proper footwear are essential. We maintain a comfortable pace with plenty of stops for photos and rest.",
      },
      {
        question: "What should I bring for the hike?",
        answer:
          "Essentials include hiking boots or sturdy athletic shoes with good traction, a hat, sunscreen, at least 2 liters of water per person, and a light backpack. We recommend wearing layers as temperatures can vary, and trekking poles are suggested for those who use them. We provide a small snack pack, but you may want to bring additional food for energy.",
      },
      {
        question: "What is the best time of year for this hike?",
        answer:
          "Spring (April-June) and fall (September-October) offer the most pleasant temperatures and clearest views. Summer months can be quite hot, so we start early in the morning to avoid peak temperatures. Winter hiking is possible on fair-weather days, but may be canceled due to adverse conditions. The trail offers different charms throughout the seasons, from spring wildflowers to autumn golden light.",
      },
      {
        question: "How do we return after the hike?",
        answer:
          "The hike is one-way from Bomerano to Nocelle/Positano. Our tour includes transportation back to your starting point or accommodation. We coordinate the pickup based on the group's pace, ensuring a seamless experience without worrying about public transportation schedules.",
      },
    ],
    availableDates: [
      "April 15, 2024",
      "April 29, 2024",
      "May 13, 2024",
      "May 27, 2024",
      "June 10, 2024",
      "June 24, 2024",
      "September 9, 2024",
      "September 23, 2024",
      "October 7, 2024",
      "October 21, 2024",
    ],
    highlights: [
      "Scenic hike on the famous Path of the Gods",
      "Expert guide sharing insights on local nature and history",
      "Breathtaking views of the Amalfi Coast and Mediterranean",
      "Visit the charming village of Nocelle",
      "Small group for personalized experience",
    ],
    inclusions: [
      "Guided hike with a professional mountain guide",
      "Transportation from Bomerano to Positano",
      "Trail snacks and water",
      "Map and information about the trail",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Lunch in Positano (available at own expense)",
      "Hiking poles (available for rent)",
      "Personal travel insurance",
      "Gratuities",
    ],
    itinerary: [
      "8:30 AM: Meet guide in Bomerano",
      "8:45 AM: Safety briefing and hike overview",
      "9:00 AM: Start hiking the Path of the Gods",
      "10:30 AM: Scenic viewpoint stop with refreshments",
      "11:30 AM: Continue hike with Mediterranean views",
      "12:30 PM: Arrive in Nocelle, visit the village",
      "1:00 PM: Transfer to Positano",
      "1:30 PM - 3:00 PM: Free time in Positano for lunch and exploration",
      "3:30 PM: Return transportation to Bomerano",
    ],
    meetingPoint:
      "Piazza Paolo Capasso, Bomerano (Agerola), with the statue of the hiker",
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity or in case of no-show.",
  },
  {
    title: "Ceramics of Vietri & Artisan Workshops",
    description:
      "Discover the colorful ceramic traditions that have made the Amalfi Coast famous for centuries. Visit historic workshops in Vietri sul Mare, meet master artisans, learn traditional hand-painting techniques, and create your own ceramic piece to take home.",
    images: [
      "/images/tours/amalfi-coast/ceramic-workshop.jpg",
      "/images/tours/amalfi-coast/vietri-ceramics.jpg",
    ],
    duration: "5 hours",
    price: "$120",
    rating: 4.7,
    tags: ["Crafts", "Artisanal", "Creative"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Do I need artistic skills to participate?",
        answer:
          "Not at all! The workshop portion is designed for all skill levels, including complete beginners. Our master ceramicists provide step-by-step guidance and templates for those who prefer more structure. Everyone creates something beautiful regardless of artistic experience, and many guests are surprised by what they can accomplish with expert instruction.",
      },
      {
        question:
          "Will my ceramic creation be ready to take home the same day?",
        answer:
          "Unfortunately, ceramics require firing in a kiln after painting, which takes at least 24-48 hours. We offer secure worldwide shipping of your finished piece directly to your home address (shipping fees apply based on destination). If you're staying in the area for several days, we can arrange local pickup once your piece is ready.",
      },
      {
        question: "Can children participate in this workshop?",
        answer:
          "Yes, this tour is very family-friendly! Children especially enjoy the hands-on creative aspects. We adapt the workshop for younger participants with age-appropriate projects and guidance. The minimum recommended age is 5 years old, as younger children may find it difficult to focus for the duration of the workshop.",
      },
      {
        question: "Is there an opportunity to purchase authentic ceramics?",
        answer:
          "Absolutely! The tour includes visits to several workshops and a curated showroom featuring work from top local artisans. You'll see everything from traditional designs to contemporary interpretations, available in all price ranges. All purchases can be shipped worldwide, and our guide can help negotiate fair prices and authenticate genuine Vietri ceramics.",
      },
    ],
    availableDates: [
      "April 8, 2024",
      "April 22, 2024",
      "May 6, 2024",
      "May 20, 2024",
      "June 3, 2024",
      "June 17, 2024",
      "July 8, 2024",
      "July 22, 2024",
      "September 9, 2024",
      "September 23, 2024",
      "October 14, 2024",
    ],
    highlights: [
      "Visit historic ceramic workshops in Vietri sul Mare",
      "Learn from master ceramicists in hands-on sessions",
      "Create your own custom-painted ceramic piece",
      "Explore the techniques behind Vietri ceramics",
      "Small group size for personalized instruction",
    ],
    inclusions: [
      "Guided tour of ceramic workshops",
      "All materials and tools for ceramic painting",
      "Firing and shipping of your ceramic piece",
      "Visit to a local artisan shop",
      "Light refreshments",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks",
    ],
    itinerary: [
      "9:00 AM: Meet guide in Vietri sul Mare",
      "9:15 AM: Visit the first ceramic workshop",
      "10:30 AM: Hands-on ceramic painting session",
      "12:00 PM: Tour of Vietri's historic center",
      "1:00 PM: Lunch at a local trattoria (own expense)",
      "2:30 PM: Visit to a second ceramic workshop",
      "4:00 PM: Return to Amalfi",
    ],
    meetingPoint: "Piazza Matteotti, Vietri sul Mare, in front of the church",
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity.",
  },
  {
    title: "Lemon Groves & Limoncello Experience",
    description:
      "Immerse yourself in the Amalfi Coast's famed lemon cultivation with a visit to historic terraced groves, followed by a hands-on limoncello making workshop, tastings of lemon-inspired products, and a lemon-themed lunch with coastal views.",
    images: [
      "/images/tours/amalfi-coast/lemon-grove.jpg",
      "/images/tours/amalfi-coast/limoncello-making.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Culinary", "Limoncello", "Farm Visit"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What makes Amalfi Coast lemons special?",
        answer:
          "The Amalfi Coast is famous for its 'sfusato amalfitano' lemons, which are larger, more aromatic, and less acidic than standard lemons. These unique characteristics come from the microclimate, traditional cultivation methods on terraced hillsides, and centuries of careful selection. These lemons have Protected Geographical Indication (IGP) status and are prized for their intense flavor and fragrant essential oils used in limoncello production.",
      },
      {
        question: "Will I make my own limoncello to take home?",
        answer:
          "Yes! During the workshop, you'll prepare your own bottle of limoncello following the traditional family recipe. However, since authentic limoncello requires a steeping period of at least 30 days, you'll take home a ready-made bottle produced earlier using the same methods. You'll also receive the recipe and instructions to recreate the experience at home.",
      },
      {
        question: "Is there a lot of walking in the lemon groves?",
        answer:
          "The tour includes approximately 30-45 minutes of walking through terraced lemon groves on hillside paths with some steps. While not strenuous, comfortable shoes with good traction are recommended as the paths can be uneven. The pace is leisurely with frequent stops to learn about cultivation techniques and the history of lemon production in the region.",
      },
      {
        question: "Are there non-alcoholic options available?",
        answer:
          "Absolutely! We offer fresh lemonade, lemon sorbet, and other non-alcoholic lemon-based products for those who don't consume alcohol or prefer alternatives. Everyone can fully participate in the experience regardless of their beverage preferences.",
      },
    ],
    availableDates: [
      "April 10, 2024",
      "April 24, 2024",
      "May 8, 2024",
      "May 22, 2024",
      "June 5, 2024",
      "June 19, 2024",
      "July 10, 2024",
      "July 24, 2024",
      "September 4, 2024",
      "September 18, 2024",
      "October 9, 2024",
    ],
    highlights: [
      "Visit to historic lemon groves with stunning views",
      "Hands-on limoncello making workshop",
      "Tasting of various lemon-based products",
      "Lemon-themed lunch with local ingredients",
      "Learn about the history and cultivation of Amalfi lemons",
    ],
    inclusions: [
      "Guided tour of lemon groves",
      "Limoncello making workshop",
      "Tasting of limoncello and other lemon products",
      "Lemon-themed lunch with wine",
      "Transportation from/to Amalfi",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks",
    ],
    itinerary: [
      "9:00 AM: Depart from Amalfi",
      "9:30 AM: Visit the lemon groves in Scala",
      "10:00 AM: Limoncello making workshop",
      "11:30 AM: Tasting of lemon products",
      "12:00 PM: Lemon-themed lunch at a local restaurant",
      "1:30 PM: Return to Amalfi",
    ],
    meetingPoint: "Piazza Flavio Gioia, Amalfi, in front of the fountain",
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity.",
  },
  {
    title: "Pompeii & Herculaneum Archaeological Expedition",
    description:
      "Explore the remarkably preserved ancient Roman cities of Pompeii and Herculaneum with an archaeology expert. Walk through streets, homes, and public buildings frozen in time by Mount Vesuvius's eruption in 79 AD, gaining insights into daily Roman life.",
    images: [
      "/images/tours/amalfi-coast/pompeii-ruins.jpg",
      "/images/tours/amalfi-coast/herculaneum-site.jpg",
    ],
    duration: "8 hours",
    price: "$175",
    rating: 4.9,
    tags: ["Archaeology", "Roman", "Historical"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How much walking is involved at the archaeological sites?",
        answer:
          "This tour involves approximately 5-6 hours of walking on uneven ancient streets, with limited shade and seating. We cover about 5 km at Pompeii and 2 km at Herculaneum, with a lunch break between sites. While challenging for those with mobility issues, our guide paces the tour appropriately and focuses on the most significant highlights while avoiding unnecessary exertion.",
      },
      {
        question: "What's the difference between Pompeii and Herculaneum?",
        answer:
          "Pompeii was a larger commercial city preserved by ash and pumice, offering expansive views of urban planning with its forum, theaters, and extensive street grid. Herculaneum was a smaller, wealthier seaside resort buried under pyroclastic flows that actually better preserved organic materials like wooden furniture, food, and textiles. Visiting both provides a more complete picture of Roman life, seeing both the grand public spaces and the intimate details of daily living.",
      },
      {
        question: "Is this tour appropriate for children?",
        answer:
          "Yes, the tour is suitable for children interested in history and archaeology. Our guides are skilled at engaging younger visitors with stories of daily Roman life, gladiator contests, and the dramatic eruption. However, parents should note that some exhibits display plaster casts of disaster victims and certain frescoes depict adult themes. Our guide can discreetly navigate around sensitive content for family groups.",
      },
      {
        question:
          "Does this tour include transportation from the Amalfi Coast?",
        answer:
          "Yes, we provide round-trip transportation from your Amalfi Coast accommodation in a comfortable air-conditioned vehicle. The journey takes approximately 1-1.5 hours each way, depending on your specific location along the coast. The scenic drive along the coastline and through the Lattari Mountains adds to the experience.",
      },
    ],
    availableDates: [
      "April 3, 2024",
      "April 17, 2024",
      "May 1, 2024",
      "May 15, 2024",
      "May 29, 2024",
      "June 12, 2024",
      "June 26, 2024",
      "September 11, 2024",
      "September 25, 2024",
      "October 9, 2024",
    ],
    highlights: [
      "Guided tour of the ancient cities of Pompeii and Herculaneum",
      "See the famous plaster casts of Pompeii victims",
      "Explore well-preserved frescoes and mosaics",
      "Learn about ancient Roman daily life and culture",
      "Small group for personalized experience",
    ],
    inclusions: [
      "Guided tour of Pompeii and Herculaneum",
      "Entrance fees to both archaeological sites",
      "Transportation from/to Amalfi",
      "Lunch at a local restaurant",
      "Small group size for personalized attention",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks",
    ],
    itinerary: [
      "8:00 AM: Depart from Amalfi",
      "9:30 AM: Arrive at Pompeii, guided tour",
      "12:00 PM: Lunch at a local restaurant",
      "1:00 PM: Transfer to Herculaneum, guided tour",
      "3:30 PM: Return to Amalfi",
    ],
    meetingPoint: "Piazza Flavio Gioia, Amalfi, in front of the fountain",
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity.",
  },
  {
    title: "Amalfi Coast Wine Tour & Vineyard Experience",
    description:
      "Discover the unique viticulture of the Amalfi Coast's vertical vineyards with visits to family-run wineries, tastings of local varietals like Falanghina and Costa d'Amalfi DOC wines, and a vineyard lunch featuring paired regional cuisine.",
    images: [
      "/images/tours/amalfi-coast/coastal-vineyard.jpg",
      "/images/tours/amalfi-coast/wine-tasting.jpg",
    ],
    duration: "6 hours",
    price: "$155",
    rating: 4.8,
    tags: ["Wine", "Vineyards", "Tasting"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What makes Amalfi Coast wines unique?",
        answer:
          "The Amalfi Coast's extreme vertical terrain creates a challenging environment for viticulture, with vineyards often planted on terraced cliffs above the sea. This unique geography, combined with indigenous grape varieties and ancient cultivation techniques, produces wines with distinctive minerality and saline characteristics not found elsewhere. Many vineyards are only accessible by foot and require all harvesting to be done by hand, preserving traditional methods that have remained unchanged for centuries.",
      },
      {
        question: "How many wineries do we visit?",
        answer:
          "The tour includes visits to two carefully selected small-production wineries and a tasting session featuring wines from a third producer. This allows you to experience different approaches to winemaking while maintaining a relaxed pace. Each winery offers something unique—one might focus on indigenous varieties, another on innovative techniques, providing a comprehensive overview of the region's viticulture.",
      },
      {
        question: "How many wines will we taste?",
        answer:
          "You'll sample 8-10 wines throughout the day, including whites, rosés, and reds representative of the Costa d'Amalfi DOC appellation. Each wine is presented by either the winemaker or our sommelier guide with detailed explanations of its production, characteristics, and food pairing suggestions. Tastings are generous enough to appreciate each wine fully without overwhelming your palate.",
      },
      {
        question: "Is transportation included?",
        answer:
          "Yes, we provide door-to-door service in a comfortable air-conditioned vehicle from your accommodation. This is essential as the wineries are located in remote areas with challenging access. Our professional driver navigates the coastal roads, allowing you to fully enjoy the wine experience without concerns about driving.",
      },
    ],
    availableDates: [
      "April 10, 2024",
      "April 24, 2024",
      "May 8, 2024",
      "May 22, 2024",
      "June 5, 2024",
      "June 19, 2024",
      "July 10, 2024",
      "July 24, 2024",
      "September 4, 2024",
      "September 18, 2024",
      "October 9, 2024",
    ],
    highlights: [
      "Visit to unique vertical vineyards of the Amalfi Coast",
      "Tasting of local wines with a focus on Falanghina and Costa d'Amalfi DOC",
      "Lunch at a vineyard featuring regional dishes",
      "Learn about traditional and modern winemaking techniques",
      "Small group size for an intimate experience",
    ],
    inclusions: [
      "Guided tour of two wineries and tasting at a third",
      "Transportation between wineries",
      "Wine tastings of 8-10 different wines",
      "Lunch with wine pairings at a vineyard",
      "Small group size for personalized attention",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks",
    ],
    itinerary: [
      "9:00 AM: Depart from Amalfi",
      "9:30 AM: Visit the first winery for a tour and tasting",
      "11:00 AM: Transfer to the second winery",
      "11:30 AM: Tour and tasting at the second winery",
      "1:00 PM: Enjoy lunch at a vineyard with wine pairings",
      "2:30 PM: Visit a third winery for a tasting",
      "4:00 PM: Return to Amalfi",
    ],
    meetingPoint: "Piazza Flavio Gioia, Amalfi, in front of the fountain",
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity.",
  },
  {
    title: "Amalfi Coast Cooking Class & Farm Experience",
    description:
      "Spend a day at an organic farm in the hills above Positano, harvesting seasonal ingredients from the garden, learning traditional recipes from a local nonna, and enjoying your creations with paired local wines on a terrace overlooking the Mediterranean.",
    images: [
      "/images/tours/amalfi-coast/farm-harvest.jpg",
      "/images/tours/amalfi-coast/italian-cooking-class.jpg",
    ],
    duration: "6 hours",
    price: "$160",
    rating: 4.9,
    tags: ["Cooking", "Farm-to-Table", "Organic"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we prepare?",
        answer:
          "The menu varies seasonally based on garden availability, but typically includes handmade pasta (like scialatielli or ravioli), a vegetable-forward antipasto using just-picked produce, a main course featuring local seafood or traditional meat preparation, and a classic dessert such as delizia al limone or torta caprese. Each recipe showcases the simplicity and quality-focused approach of authentic Amalfi Coast cuisine.",
      },
      {
        question: "Do I need cooking experience to participate?",
        answer:
          "No previous cooking experience is necessary! Our class is designed for all skill levels, from beginners to experienced home cooks. Nonna Maria and Chef Paolo provide clear, step-by-step instruction in a supportive environment. The techniques taught are traditional and practical, allowing you to recreate the recipes successfully at home.",
      },
      {
        question: "Is transportation to the farm included?",
        answer:
          "Yes, we provide round-trip transportation from your accommodation to the hillside farm, which is located in a hard-to-reach area above Positano. The scenic drive through olive groves and lemon orchards is part of the experience, offering spectacular views of the coastline as you ascend into the mountains.",
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Yes, we can accommodate vegetarian, gluten-free, and most common allergies with advance notice. Many traditional Amalfi Coast recipes are naturally vegetarian or can be easily adapted. Please inform us of any dietary needs when booking so we can prepare appropriate alternatives while maintaining an authentic culinary experience.",
      },
    ],
    availableDates: [
      "April 10, 2024",
      "April 24, 2024",
      "May 8, 2024",
      "May 22, 2024",
      "June 5, 2024",
      "June 19, 2024",
      "July 10, 2024",
      "July 24, 2024",
      "September 4, 2024",
      "September 18, 2024",
      "October 9, 2024",
    ],
    highlights: [
      "Hands-on cooking class at an organic farm",
      "Harvest seasonal ingredients from the garden",
      "Learn traditional recipes from a local nonna",
      "Enjoy your meal with local wine on a scenic terrace",
      "Small group for personalized instruction",
    ],
    inclusions: [
      "Guided farm tour and cooking class",
      "All ingredients and materials for cooking",
      "Lunch with wine pairing",
      "Transportation to/from the farm",
      "Recipe booklet to take home",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks",
    ],
    itinerary: [
      "9:00 AM: Depart from Positano",
      "9:30 AM: Arrive at the organic farm",
      "10:00 AM: Guided tour of the farm and gardens",
      "11:00 AM: Cooking class with Nonna Maria",
      "1:00 PM: Enjoy lunch on the terrace",
      "2:30 PM: Return to Positano",
    ],
    meetingPoint: "Piazza dei Mulini, Positano, in front of the fountain",
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity.",
  },
  {
    title: "Artisan Crafts Tour: Paper, Ceramics & Leatherwork",
    description:
      "Discover the living artistic traditions of the Amalfi Coast with visits to master artisans' workshops. Observe centuries-old techniques of handmade paper production in Amalfi, ceramic crafting in Vietri sul Mare, and custom sandal making in Positano.",
    images: [
      "/images/tours/amalfi-coast/paper-making.jpg",
      "/images/tours/amalfi-coast/sandal-workshop.jpg",
    ],
    duration: "7 hours",
    price: "$130",
    rating: 4.7,
    tags: ["Crafts", "Artisans", "Shopping"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Can I purchase items directly from the artisans?",
        answer:
          "Yes, each workshop offers unique handcrafted items for sale directly from the creators. This provides a rare opportunity to acquire authentic artisanal products while supporting local craftspeople. Prices are often better than in tourist shops, and many artisans can customize items or create bespoke pieces if you're interested in something special.",
      },
      {
        question: "Will we participate in any craft activities?",
        answer:
          "Yes, the tour includes hands-on elements at each stop. You'll press a sheet of handmade paper in Amalfi, paint a small ceramic tile in Vietri, and help design a pair of custom sandals in Positano. These mini-workshops give you appreciation for the skill involved while creating personalized souvenirs of your experience.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour involves moderate walking, primarily in the historic centers of Amalfi, Vietri sul Mare, and Positano. Each town requires about 30-45 minutes of walking on mostly flat terrain, though Positano does have some sloping streets and steps. We provide transportation between towns, and the pace is leisurely with plenty of breaks at the workshops.",
      },
      {
        question: "Can items be shipped home if they're too large for luggage?",
        answer:
          "Absolutely! All the artisans we visit offer worldwide shipping services for an additional fee. This is especially useful for larger ceramic pieces or bulky paper products. Our guide can help arrange shipping and ensure your purchases are properly packaged for safe transit.",
      },
    ],
    availableDates: [
      "April 15, 2024",
      "April 29, 2024",
      "May 13, 2024",
      "May 27, 2024",
      "June 10, 2024",
      "June 24, 2024",
      "September 9, 2024",
      "September 23, 2024",
      "October 7, 2024",
      "October 21, 2024",
    ],
    highlights: [
      "Visit to master artisans' workshops in Amalfi, Vietri, and Positano",
      "Hands-on experiences in paper, ceramics, and leatherwork",
      "Learn about traditional and contemporary artisan techniques",
      "Opportunity to purchase unique handcrafted items",
      "Small group size for personalized attention",
    ],
    inclusions: [
      "Guided tour of artisan workshops",
      "Hands-on craft activities",
      "All materials and tools for crafts",
      "Transportation between towns",
      "Light refreshments",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks",
    ],
    itinerary: [
      "9:00 AM: Meet guide in Amalfi",
      "9:15 AM: Visit the paper mill and participate in paper pressing",
      "10:30 AM: Transfer to Vietri sul Mare",
      "11:00 AM: Ceramic painting workshop in Vietri",
      "12:30 PM: Lunch at a local trattoria (own expense)",
      "2:00 PM: Transfer to Positano",
      "2:30 PM: Sandal making workshop in Positano",
      "4:00 PM: Return to Amalfi",
    ],
    meetingPoint: "Piazza Flavio Gioia, Amalfi, in front of the fountain",
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity.",
  },
  {
    title: "Amalfi Coast Private Boat & Secret Beaches",
    description:
      "Escape the crowds aboard a private boat to discover hidden coves and secret beaches accessible only by water. Swim in crystal-clear grottos, snorkel around ancient Roman ruins, and enjoy a champagne picnic on a secluded slice of paradise.",
    images: [
      "/images/tours/amalfi-coast/private-boat.jpg",
      "/images/tours/amalfi-coast/secret-cove.jpg",
    ],
    duration: "6 hours",
    price: "$395",
    rating: 5.0,
    tags: ["Exclusive", "Swimming", "Beaches"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "How many people can join this private boat tour?",
        answer:
          "The tour is priced for up to 6 people on a beautiful wooden gozzo boat, traditional to the Amalfi Coast. For larger groups, we can arrange a bigger vessel for an additional fee. The experience remains private for your party regardless of size, ensuring a personalized and intimate day on the water.",
      },
      {
        question: "What's included in the champagne picnic?",
        answer:
          "We serve a gourmet picnic featuring local specialties including fresh mozzarella, prosciutto, artisanal breads, marinated vegetables, and seasonal fruits, accompanied by chilled prosecco or champagne. For full-day tours, we can arrange a more substantial seafood lunch at a seaside restaurant accessible only by boat (additional cost applies).",
      },
      {
        question: "Is snorkeling equipment provided?",
        answer:
          "Yes, we provide quality masks, snorkels, and fins in various sizes. Our captain knows the best snorkeling spots with the clearest water and most interesting marine life or underwater artifacts. For experienced swimmers, we also offer basic freediving guidance to explore a bit deeper in safe conditions.",
      },
      {
        question: "What if the sea conditions are rough?",
        answer:
          "Safety is our priority. If sea conditions are unsuitable for a comfortable and safe experience, we'll offer to reschedule or provide a full refund. Sometimes we can adjust the itinerary to stay in more protected waters while still providing a wonderful coastal experience. Our captains are highly experienced and make prudent decisions based on current conditions.",
      },
    ],
    availableDates: [
      "April 1, 2024",
      "April 15, 2024",
      "May 1, 2024",
      "May 15, 2024",
      "June 1, 2024",
      "June 15, 2024",
      "July 1, 2024",
      "July 15, 2024",
      "August 1, 2024",
      "August 15, 2024",
      "September 1, 2024",
      "September 15, 2024",
      "October 1, 2024",
      "October 15, 2024",
    ],
    highlights: [
      "Private boat tour to hidden beaches and coves",
      "Swim and snorkel in crystal-clear waters",
      "Explore ancient Roman ruins by the sea",
      "Enjoy a gourmet picnic with champagne",
      "Personalized itinerary based on your preferences",
    ],
    inclusions: [
      "Private boat for your group",
      "Professional captain and crew",
      "Snorkeling equipment",
      "Gourmet picnic and beverages",
      "Beach towels and sun loungers",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and drinks not specified",
    ],
    itinerary: [
      "9:00 AM: Meet at the marina in Amalfi",
      "9:30 AM: Depart for a day of exploration along the coast",
      "10:00 AM: Stop at the Emerald Grotto for a guided tour",
      "11:00 AM: Swim and snorkel in a secluded cove",
      "12:30 PM: Enjoy a gourmet lunch on board",
      "2:00 PM: Visit another picturesque village or beach",
      "4:00 PM: Return to Amalfi",
    ],
    meetingPoint: "Marina Grande, Amalfi, at the main dock",
    cancellationPolicy:
      "Full refund if canceled 7 days in advance. 50% refund if canceled 3-6 days in advance. No refund for cancellations less than 3 days before the scheduled activity.",
  },
];

export default amalfiCoastTours;
