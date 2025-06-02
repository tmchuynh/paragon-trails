import { Tour } from "@/lib/interfaces/services/tours";

export const charlestonTours: Tour[] = [
  {
    title: "Charleston's Historic Homes & Gardens",
    description:
      "Step behind normally closed doors of Charleston's most prestigious historic homes with a renowned architectural historian, enjoying private access to gardens, hidden courtyards, and exclusive estates.",
    images: [
      "/images/tours/charleston/historic-home.jpg",
      "/images/tours/charleston/garden-courtyard.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Architecture", "History", "Gardens"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "historical",
    meetingPoint: {
      address: "86 Church Street, Charleston, SC 29401",
      coordinates: {
        latitude: 32.7765,
        longitude: -79.9311,
      },
      instructions:
        "Meet in front of the Historic Charleston Foundation office on Church Street. Your guide will be wearing a burgundy blazer with the Historic Charleston Foundation logo. Please arrive 15 minutes before the tour start time.",
      contactNumber: "+1 843-722-3405",
      contactEmail: "tours@historiccharleston.org",
    },
    availableDates: [
      "2024-04-05",
      "2024-04-12",
      "2024-04-19",
      "2024-05-03",
      "2024-05-10",
      "2024-05-17",
      "2024-06-07",
      "2024-06-14",
      "2024-06-21",
    ],
    highlights: [
      "Exclusive access to private historic homes not open to the general public",
      "Expert architectural commentary from renowned historians",
      "Explore hidden gardens and courtyards behind Charleston's famous homes",
      "View extraordinary period antiques and decorative arts collections",
      "Learn about preservation efforts and architectural restoration techniques",
    ],
    inclusions: [
      "Expert architectural historian guide",
      "Admission to 3-4 historic properties",
      "Access to private gardens and courtyards",
      "Refreshments at one of the historic homes",
      "Detailed architectural guidebook",
    ],
    exclusions: [
      "Transportation to/from meeting point",
      "Gratuities",
      "Personal purchases and souvenirs",
    ],
    itinerary: [
      "9:00 AM - Meet guide and introduction to Charleston architecture",
      "9:15 AM - First historic home visit with interior and garden tour",
      "10:00 AM - Second home visit featuring Georgian architecture",
      "10:45 AM - Walking tour of historic district with architectural commentary",
      "11:15 AM - Visit to private residence not open to public",
      "12:00 PM - Tour conclusion and recommendations",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the scheduled tour. 50% refund if canceled 24-48 hours in advance. No refunds for cancellations less than 24 hours before tour start time.",
    faqs: [
      {
        question: "Which historic homes will we visit?",
        answer:
          "The tour typically includes 3-4 properties, with exact homes varying based on availability. We always include at least one home not open to general public tours. Favorites include the Nathaniel Russell House, Edmondston-Alston House, and several private residences in the South of Broad neighborhood.",
      },
      {
        question: "Are children allowed on this tour?",
        answer:
          "Yes, this tour is family-friendly. However, please note that some homes have fragile antiques and furnishings, so we ask that children be supervised at all times.",
      },
      {
        question: "Is photography allowed inside the homes?",
        answer:
          "Photography is generally not permitted inside the historic homes to protect the artifacts and privacy of the homeowners. However, you are welcome to take photos in the gardens and courtyards.",
      },
      {
        question: "What architectural styles will we see on this tour?",
        answer:
          "Charleston features a remarkable diversity of architectural styles spanning three centuries. You'll discover the distinctive Charleston Single House with its side piazzas designed to capture sea breezes, Federal-style mansions with their symmetrical facades, Georgian townhouses with elaborate double-stacked porches, and Greek Revival structures with imposing columns. Our architectural historian explains how these styles evolved in response to Charleston's climate, urban density, European influences, and changing fortunes through prosperity, war, and natural disasters.",
      },
      {
        question:
          "How did Charleston become a leader in historic preservation?",
        answer:
          "Charleston pioneered architectural preservation in America when it established the nation's first historic district in 1931. Our tour explains how the city's preservation movement began when Susan Pringle Frost founded the Society for the Preservation of Old Dwellings (now the Preservation Society) in 1920 to save historic homes from demolition. You'll learn how the Charleston Renaissance cultural movement, economic necessity during the Great Depression, and tourism potential combined to create America's model preservation ethic. The tour highlights both triumphs and ongoing challenges in balancing preservation with modern development pressures.",
      },
    ],
  },
  {
    title: "Lowcountry Gullah Culture & Cuisine",
    description:
      "Experience the unique Gullah culture of the Sea Islands with visits to traditional communities, demonstrations of sweetgrass basket weaving, and authentic Lowcountry cuisine with Gullah culinary traditions.",
    images: [
      "/images/tours/charleston/sweetgrass-baskets.jpg",
      "/images/tours/charleston/gullah-cuisine.jpg",
    ],
    duration: "6 hours",
    price: "$120",
    rating: 4.8,
    tags: ["Cultural", "Cuisine", "History"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "375 Meeting Street, Charleston, SC 29403",
      coordinates: {
        latitude: 32.7876,
        longitude: -79.9353,
      },
      instructions:
        "Meet at the Charleston Visitor Center bus loading area. Look for a van with 'Gullah Tours' signage. Please arrive 15 minutes prior to departure time as the tour leaves promptly.",
      contactNumber: "+1 843-813-7522",
      contactEmail: "info@gullahtoursofcharleston.com",
    },
    availableDates: [
      "2024-04-08",
      "2024-04-22",
      "2024-05-06",
      "2024-05-20",
      "2024-06-03",
      "2024-06-17",
      "2024-07-08",
      "2024-07-22",
    ],
    highlights: [
      "Meet with Gullah sweetgrass basket weavers and learn about this traditional craft",
      "Visit a Gullah community on one of the Sea Islands",
      "Enjoy authentic Lowcountry cuisine prepared with traditional Gullah methods",
      "Experience Gullah storytelling and language demonstrations",
      "Learn about the historical and cultural significance of the Gullah people",
    ],
    inclusions: [
      "Transportation in air-conditioned van",
      "Gullah cultural guide",
      "Sweetgrass basket weaving demonstration",
      "Traditional Gullah lunch",
      "Admission to all sites visited",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Personal purchases of crafts or souvenirs",
    ],
    itinerary: [
      "9:30 AM - Depart Charleston Visitor Center",
      "10:15 AM - Visit to sweetgrass basket stands on Highway 17",
      "11:30 AM - Tour of historic Gullah community",
      "1:00 PM - Traditional Gullah lunch experience",
      "2:30 PM - Presentation on Gullah language and storytelling",
      "3:30 PM - Return to Charleston",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours before scheduled tour. 50% refund if canceled 48-72 hours in advance. No refund for cancellations less than 48 hours before tour start time.",
    faqs: [
      {
        question: "What is Gullah culture?",
        answer:
          "Gullah (or Geechee) refers to the descendants of enslaved West Africans who developed a distinctive culture and creole language in the coastal regions and Sea Islands of South Carolina and Georgia. The isolation of these communities allowed them to preserve many African linguistic patterns, cultural practices, crafts, and culinary traditions that you'll learn about during this immersive tour.",
      },
      {
        question: "Will we have the chance to try Gullah food?",
        answer:
          "Yes, the tour includes a traditional Gullah meal featuring dishes like shrimp and grits, okra soup, and sweet potato pie. You'll also learn about the history and significance of these dishes in Gullah culture.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Absolutely! This tour is family-friendly and offers a unique opportunity for children to learn about cultural diversity, history, and traditional crafts in an engaging way.",
      },
      {
        question: "How did the Gullah language develop and survive?",
        answer:
          "The Gullah language represents one of America's most remarkable linguistic treasures. You'll learn how this English-based creole language incorporated grammar and vocabulary from various West African languages including Krio, Mende, and Vai. Our guides explain how geographic isolation on sea islands and plantations allowed this distinctive language to develop and persist where other African languages disappeared. You'll discover how the language narrowly survived campaigns to suppress it during the 20th century and how contemporary preservation efforts, including the translation of the New Testament into Gullah, are helping ensure its survival for future generations.",
      },
      {
        question:
          "What is the significance of sweetgrass basket weaving in Gullah culture?",
        answer:
          "Sweetgrass basketry represents one of America's oldest handicrafts of African origin, dating back to the 1700s. During the demonstration, you'll learn how this tradition came directly from the rice-growing regions of West Africa and was initially used to create functional winnowing baskets (fanner baskets) essential to rice cultivation on Lowcountry plantations. Our artisans explain how the craft was passed through generations exclusively by women, the traditional gathering and preparation of native materials like sweetgrass, bulrush, and pine needles, and how the art form evolved from utilitarian objects to prized artistic expressions that can now command thousands of dollars in galleries.",
      },
    ],
  },
  {
    title: "Charleston Ghosts & Legends Tour",
    description:
      "Explore Charleston's haunted history with a local storyteller, visiting eerie sites like the Old City Jail, the Battery, and the infamous graveyards while hearing chilling tales of ghosts and legends.",
    images: [
      "/images/tours/charleston/ghost-tour.jpg",
      "/images/tours/charleston/old-city-jail.jpg",
    ],
    duration: "2 hours",
    price: "$40",
    rating: 4.7,
    tags: ["Ghosts", "History", "Walking Tour"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "40 N Market Street, Charleston, SC 29401",
      coordinates: {
        latitude: 32.7811,
        longitude: -79.9275,
      },
      instructions:
        "Meet in front of the Mills House Hotel on the corner of Meeting and Queen Streets. Your guide will be carrying a lantern and wearing period costume. Please arrive 10 minutes early as the tour departs promptly at the scheduled time.",
      contactNumber: "+1 843-766-2080",
      contactEmail: "ghosttours@charlestonhauntings.com",
    },
    availableDates: [
      "2024-04-02",
      "2024-04-09",
      "2024-04-16",
      "2024-04-23",
      "2024-04-30",
      "2024-05-07",
      "2024-05-14",
      "2024-05-21",
      "2024-05-28",
      "2024-06-04",
      "2024-06-11",
      "2024-06-18",
      "2024-06-25",
    ],
    highlights: [
      "Visit some of Charleston's most haunted locations",
      "Hear spine-tingling stories from Charleston's dark history",
      "Learn about the Old City Jail and its infamous prisoners",
      "Explore historic graveyards by lantern light",
      "Discover the paranormal experiences documented at these sites",
    ],
    inclusions: [
      "Expert storytelling guide in period costume",
      "Handheld lanterns for evening tours",
      "Access to select historic grounds",
      "Interactive ghost detection equipment",
      "Souvenir ghost guide booklet",
    ],
    exclusions: [
      "Transportation to meeting point",
      "Interior access to the Old City Jail (can be added for additional fee)",
      "Gratuities",
      "Food and beverages",
    ],
    itinerary: [
      "8:00 PM - Meet guide and introduction to Charleston's haunted history",
      "8:15 PM - Visit to St. Philip's Church graveyard",
      "8:45 PM - Walking tour of haunted historic district sites",
      "9:15 PM - Visit to the exterior of the Old City Jail",
      "9:45 PM - Explore Unitarian Church graveyard",
      "10:00 PM - Tour conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before the scheduled tour. No refund for cancellations less than 24 hours in advance or no-shows.",
    faqs: [
      {
        question: "Is this tour scary?",
        answer:
          "While the tour includes spooky stories and visits to haunted locations, it is designed to be family-friendly. We focus on historical accounts and legends rather than graphic horror.",
      },
      {
        question: "What should I wear for the ghost tour?",
        answer:
          "Comfortable walking shoes are recommended as we will be walking through historic neighborhoods. Dress for the weather, as we will be outside for most of the tour.",
      },
      {
        question: "Are there any age restrictions?",
        answer:
          "This tour is suitable for all ages, but parental discretion is advised for very young children due to the nature of some stories.",
      },
      {
        question:
          "What historical events contributed to Charleston's reputation as America's most haunted city?",
        answer:
          "Charleston's complex history has created perfect conditions for supernatural legends. Our tour explains how the city's experiences with devastating fires, disease epidemics (especially the yellow fever outbreaks of 1699, 1732, and 1849), natural disasters like the 1886 earthquake, pirate executions, and the horrors of the slave trade and Civil War bombardment created a concentrated history of trauma. You'll learn how these tragedies, combined with Charleston's preservation of historic structures and Southern storytelling traditions, contributed to its reputation as America's most haunted city according to paranormal researchers.",
      },
      {
        question:
          "Who was Lavinia Fisher and why is she Charleston's most famous ghost?",
        answer:
          "Lavinia Fisher is widely considered America's first female serial killer and one of Charleston's most infamous specters. During our visit to the Old City Jail, you'll learn the historical facts behind her notorious legend—how she and her husband John allegedly operated the Six Mile House inn where they murdered and robbed travelers in the 1820s. Our guide separates historical fact from embellished legend, explaining how Lavinia became an icon of Southern gothic literature and why many believe her spirit still haunts the jail where she was executed. You'll hear documented accounts of paranormal experiences from visitors and investigators who claim to have encountered her restless spirit.",
      },
    ],
  },
  {
    title: "Charleston Culinary Heritage Tour",
    description:
      "Discover the rich culinary traditions of the Lowcountry with tastings at historic restaurants, markets, and food artisans while learning how Charleston's unique cuisine evolved through African, European, and Caribbean influences.",
    images: [
      "/images/tours/charleston/shrimp-grits.jpg",
      "/images/tours/charleston/charleston-market.jpg",
    ],
    duration: "3.5 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Culinary", "History", "Southern Food"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "culinary",
    meetingPoint: {
      address: "188 Meeting Street, Charleston, SC 29401",
      coordinates: {
        latitude: 32.7793,
        longitude: -79.9316,
      },
      instructions:
        "Meet in front of the Charleston City Market's main entrance on Meeting Street. Your guide will be holding a sign with 'Culinary Tour' written on it. Please arrive 10 minutes before tour start time.",
      contactNumber: "+1 843-722-8687",
      contactEmail: "taste@charlestonculinarytours.com",
    },
    availableDates: [
      "2024-04-01",
      "2024-04-08",
      "2024-04-15",
      "2024-04-22",
      "2024-04-29",
      "2024-05-06",
      "2024-05-13",
      "2024-05-20",
      "2024-05-27",
      "2024-06-03",
      "2024-06-10",
      "2024-06-17",
      "2024-06-24",
    ],
    highlights: [
      "Sample iconic Charleston dishes at multiple tasting locations",
      "Learn about the African and European influences on Lowcountry cuisine",
      "Meet local chefs and food artisans",
      "Visit historic food establishments and markets",
      "Discover the stories behind classic Charleston recipes",
    ],
    inclusions: [
      "Tastings at 5-7 culinary establishments",
      "Expert culinary historian guide",
      "Recipe collection of classic Charleston dishes",
      "All food and beverage samples",
      "Bottled water",
    ],
    exclusions: [
      "Transportation to/from meeting point",
      "Additional food or drinks beyond included tastings",
      "Gratuities",
    ],
    itinerary: [
      "1:00 PM - Meet guide and introduction to Charleston's culinary history",
      "1:15 PM - First tasting location: classic she-crab soup",
      "1:45 PM - Second stop: benne wafers and local tea samples",
      "2:15 PM - Charleston City Market visit and artisan food vendors",
      "3:00 PM - Historic restaurant visit featuring shrimp & grits",
      "3:45 PM - Dessert sampling of traditional Huguenot torte",
      "4:30 PM - Tour conclusion with final tastings",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the scheduled tour. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before tour start time.",
    faqs: [
      {
        question: "What food will we sample on the tour?",
        answer:
          "The tour includes multiple tastings representing Charleston's culinary heritage, including she-crab soup, shrimp and grits, benne wafers, Lowcountry rice dishes, and traditional Southern desserts. Each tasting is paired with historical context about its origins and significance.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, with advance notice we can accommodate most dietary restrictions including vegetarian, gluten-free, and shellfish allergies. Please inform us when booking so we can arrange appropriate alternatives.",
      },
      {
        question: "Why is rice so central to Charleston's culinary history?",
        answer:
          "Rice fundamentally shaped Charleston's culture, economy, and cuisine for centuries. During the tour, you'll learn how Charleston became America's wealthiest colonial city through rice cultivation, with Carolina Gold rice known as 'the rice that built Charleston.' We explain how enslaved West Africans—specifically requested for their rice-growing expertise—established the elaborate irrigation systems and cultivation techniques that made rice plantations possible in the Lowcountry. You'll discover how this 'grain from another continent, cultivated by people from another continent' created Charleston's distinctive cuisine and how traditional rice dishes like Hoppin' John, purloo, and rice breads reflect this complex heritage.",
      },
      {
        question: "How did the Lowcountry's geography influence its cuisine?",
        answer:
          "Charleston's position at the confluence of five rivers creating an extensive estuary system profoundly shaped its cuisine. At each tasting location, we explain how the abundance of oysters, shrimp, blue crab, and fish created a seafood-centric diet unlike other Southern regions. You'll learn how seasonal availability dictated traditional recipes, how preservation techniques developed for the subtropical climate, and why certain ingredients became staples. Our guide demonstrates how the Lowcountry's unique geography—with its barrier islands, maritime forests, and fertile agricultural lands—created one of America's first distinctive regional cuisines long before 'farm-to-table' became a modern movement.",
      },
      {
        question:
          "What's the difference between Lowcountry and Southern cuisine?",
        answer:
          "While Lowcountry cuisine is part of the broader Southern culinary tradition, it has distinctive characteristics we explore throughout the tour. You'll learn how Charleston's cuisine developed with stronger Caribbean and West African influences than other Southern regions, featuring more seafood, rice-based dishes, and complex seasoning profiles. We explain how Lowcountry cuisine incorporates more coastal ingredients like fresh oysters and distinctive vegetables like sea island red peas and Carolina Gold rice. Our tastings demonstrate how Charleston's international port status and wealthy colonial society created a more cosmopolitan cuisine than inland Southern cooking, with French and Caribbean techniques merging with African ingredients and cooking methods.",
      },
    ],
  },
  {
    title: "Fort Sumter & Charleston Harbor History Cruise",
    description:
      "Cruise Charleston Harbor to Fort Sumter National Monument where the first shots of the Civil War were fired, with expert narration on the harbor's maritime history, coastal fortifications, and pivotal military engagements.",
    images: [
      "/images/tours/charleston/fort-sumter.jpg",
      "/images/tours/charleston/charleston-harbor.jpg",
    ],
    duration: "2.5 hours",
    price: "$65",
    rating: 4.7,
    tags: ["History", "Civil War", "Harbor"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "historical",
    meetingPoint: {
      address: "340 Concord Street, Charleston, SC 29401",
      coordinates: {
        latitude: 32.7809,
        longitude: -79.9254,
      },
      instructions:
        "Meet at the Fort Sumter Visitor Education Center at Liberty Square. Please check in at the ticket booth 30 minutes before departure time. The boat leaves promptly on schedule, and late arrivals cannot be accommodated.",
      contactNumber: "+1 843-722-2628",
      contactEmail: "info@fortsumtertours.com",
    },
    availableDates: [
      "2024-04-01",
      "2024-04-04",
      "2024-04-07",
      "2024-04-10",
      "2024-04-13",
      "2024-04-16",
      "2024-04-19",
      "2024-04-22",
      "2024-04-25",
      "2024-04-28",
      "2024-05-01",
      "2024-05-04",
    ],
    highlights: [
      "Visit Fort Sumter National Monument where the Civil War began",
      "See Charleston's historic skyline from the water",
      "Learn about the fort's construction and strategic importance",
      "Spot wildlife including dolphins in Charleston Harbor",
      "Gain insights into Charleston's maritime and military history",
    ],
    inclusions: [
      "Round-trip ferry transportation to Fort Sumter",
      "National Park Service Ranger presentation at the fort",
      "Harbor cruise with narration",
      "Access to Fort Sumter museum and exhibits",
      "Complementary harbor guide booklet",
    ],
    exclusions: [
      "Food and beverages (available for purchase on the ferry)",
      "Hotel pickup and drop-off",
      "Gratuities",
    ],
    itinerary: [
      "12:30 PM - Check-in at Liberty Square Visitor Center",
      "1:00 PM - Depart on ferry with harbor narration",
      "1:30 PM - Arrive at Fort Sumter National Monument",
      "1:35 PM - National Park Service Ranger introduction",
      "1:45 PM - Self-guided exploration of fort and museum",
      "2:30 PM - Departure warning signal",
      "2:45 PM - Depart Fort Sumter",
      "3:15 PM - Arrive back at Liberty Square",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours in advance. 50% refund if canceled 24-72 hours in advance. No refund for cancellations less than 24 hours before departure or no-shows.",
    faqs: [
      {
        question: "How long do we stay at Fort Sumter?",
        answer:
          "You'll have approximately one hour to explore Fort Sumter with a National Park Service ranger available to answer questions. The boat ride to and from the fort is about 30 minutes each way.",
      },
      {
        question: "Is this tour accessible for those with mobility issues?",
        answer:
          "The boat is wheelchair accessible, and Fort Sumter has accessible pathways throughout most areas. However, some parts of the historic fort have uneven surfaces or steps. Please contact us in advance to discuss specific accessibility needs.",
      },
      {
        question:
          "Why was Fort Sumter strategically important and how did it become the flashpoint for the Civil War?",
        answer:
          "Fort Sumter occupied a crucial defensive position controlling access to Charleston Harbor, one of the South's most vital ports. During the cruise, you'll learn how tensions escalated after South Carolina's secession in December 1860, when Union Major Anderson secretly moved his garrison from Fort Moultrie to the more defensible Fort Sumter. Our historian explains why Confederate leaders viewed the continued federal presence as both a political and military threat, how President Lincoln's attempt to resupply the fort in April 1861 forced a Confederate decision, and why Confederate General P.G.T. Beauregard's bombardment on April 12-13, 1861 effectively initiated the Civil War. You'll understand why this seemingly small engagement between 85 federal defenders and thousands of Confederate troops had such profound national consequences.",
      },
      {
        question:
          "What was Charleston Harbor's role in naval warfare innovation?",
        answer:
          "Charleston Harbor witnessed revolutionary developments in naval warfare that changed global military history. During the cruise, we'll show you where the first successful submarine attack occurred when the Confederate H.L. Hunley sank the USS Housatonic in 1864. You'll learn how Charleston became a testing ground for new technologies including ironclad warships, fixed harbor mines (then called torpedoes), long-range artillery, and innovative coastal defense systems. Our narration explains how the Union's naval blockade strategies and Confederate counter-measures in Charleston Harbor influenced naval doctrine worldwide for decades. You'll gain perspective on how this relatively small harbor became a critical laboratory for modern naval warfare.",
      },
      {
        question:
          "How did Charleston's harbor defenses evolve from the Revolution through World War II?",
        answer:
          "The cruise provides a floating classroom demonstrating three centuries of American coastal defense evolution. You'll see how Charleston's strategic importance led to multiple fortification systems, from the palmetto log fort on Sullivan's Island that famously repelled British attacks in 1776, to Fort Sumter's massive brick walls designed in the 1830s, to the reinforced concrete batteries added during the Spanish-American War and World Wars. Our historian explains how each generation of defenses reflected changing military technologies and threats, how fortifications designed for sailing ships became obsolete against rifled artillery and steel warships, and how submarine threats during World Wars transformed harbor defense strategies. This comprehensive perspective helps you understand the layers of military history visible throughout Charleston Harbor.",
      },
    ],
  },
  {
    title: "Charleston's Plantation Heritage & Gardens",
    description:
      "Visit magnificent antebellum plantations with knowledgeable guides who provide balanced perspectives on both the opulent lives of plantation owners and the enslaved people whose labor built these estates, plus explore meticulously preserved gardens.",
    images: [
      "/images/tours/charleston/plantation-house.jpg",
      "/images/tours/charleston/plantation-garden.jpg",
    ],
    duration: "6 hours",
    price: "$125",
    rating: 4.8,
    tags: ["History", "Architecture", "Gardens"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "historical",
    meetingPoint: {
      address: "375 Meeting Street, Charleston, SC 29403",
      coordinates: {
        latitude: 32.7876,
        longitude: -79.9353,
      },
      instructions:
        "Meet at the Charleston Visitor Center bus loading zone. Look for a shuttle with 'Plantation Tours' signage. Please arrive 15 minutes before departure as the tour leaves promptly at the scheduled time.",
      contactNumber: "+1 843-853-7328",
      contactEmail: "plantationtours@charlestonheritage.com",
    },
    availableDates: [
      "2024-04-03",
      "2024-04-10",
      "2024-04-17",
      "2024-04-24",
      "2024-05-01",
      "2024-05-08",
      "2024-05-15",
      "2024-05-22",
      "2024-05-29",
      "2024-06-05",
    ],
    highlights: [
      "Visit two distinctive historic plantations in one day",
      "Explore America's oldest landscaped gardens at Middleton Place",
      "Learn about plantation life from multiple perspectives",
      "Discover the agricultural innovations that drove the plantation economy",
      "Experience preserved Lowcountry plantation architecture",
    ],
    inclusions: [
      "Luxury transportation between sites",
      "Expert guide throughout the day",
      "Admission to two plantation properties",
      "Traditional Lowcountry lunch",
      "Botanical garden guide booklet",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional optional activities at plantations",
      "Gratuities",
    ],
    itinerary: [
      "9:00 AM - Depart Charleston Visitor Center",
      "9:45 AM - Arrive at Magnolia Plantation & Gardens",
      "9:50 AM - Introduction and guided house tour",
      "10:30 AM - Explore romantic gardens with guided commentary",
      "11:30 AM - Optional slave cabin tour or nature tram ride",
      "12:30 PM - Lowcountry lunch at the plantation",
      "1:30 PM - Depart for Middleton Place",
      "2:00 PM - Guided tour of Middleton Place house museum",
      "2:45 PM - Explore America's oldest landscaped gardens",
      "3:30 PM - Stable yards and craft demonstrations",
      "4:00 PM - Return to Charleston",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours in advance. 50% refund if canceled 48-72 hours in advance. No refund for cancellations less than 48 hours before tour start time.",
    faqs: [
      {
        question: "Which plantations do we visit?",
        answer:
          "The tour includes visits to two plantations, typically selected from Middleton Place with America's oldest landscaped gardens, Magnolia Plantation with its romantic gardens, Drayton Hall with its preserved Georgian-Palladian architecture, and Boone Hall known for its spectacular Avenue of Oaks.",
      },
      {
        question: "Is lunch included in the tour?",
        answer:
          "Yes, the tour includes lunch at one of the plantation restaurants featuring traditional Lowcountry cuisine, offering a taste of historical recipes and regional specialties.",
      },
      {
        question:
          "How does this tour address the history of slavery at these plantations?",
        answer:
          "Our tour provides a comprehensive historical narrative that acknowledges the central role of enslaved labor in building and maintaining these estates. You'll experience specialized presentations about slave quarters and work areas, oral histories from descendants, and archaeological findings that illuminate daily life for the enslaved population. We explore primary source documents including inventories, work logs, and firsthand accounts that reveal the harsh realities of plantation life alongside the stories of resistance, cultural preservation, and remarkable achievements of enslaved individuals. This balanced approach honors the complete history while acknowledging the painful legacy of these beautiful properties.",
      },
      {
        question:
          "How did rice cultivation shape plantation architecture and landscapes?",
        answer:
          "Throughout the tour, you'll discover how the immensely profitable but labor-intensive rice cultivation system determined both the location and design of Lowcountry plantations. We explain how the elaborate irrigation systems requiring precise water control led to distinctive architectural elements like raised homes with high foundations protecting against flooding and creating cooler living spaces above ground-level storage and work areas. You'll learn how rice wealth enabled the grandest homes, finest imported furnishings, and elaborate garden designs, while the seasonal nature of rice cultivation allowing owners to escape malarial summers created the pattern of wealthy Charlestonians maintaining both urban and rural properties—a distinctive feature of Lowcountry plantation society.",
      },
      {
        question:
          "What makes Charleston plantation gardens historically significant in American landscape design?",
        answer:
          "The gardens you'll explore represent America's earliest and most influential designed landscapes. Our horticulturist-historian explains how Middleton Place (established 1741) pioneered America's first landscaped gardens using principles from English landscape architect Capability Brown, how Magnolia Plantation's gardens (established 1680s) represent America's oldest romantic-style gardens, and how these designs reflected European aesthetic movements interpreted through native and exotic plants suited to the Lowcountry climate. You'll learn how these gardens became early examples of plant collection and horticultural experimentation, introducing numerous species to North America, and how their preservation represents one of America's oldest continuous gardening traditions spanning over 300 years.",
      },
    ],
  },
  {
    title: "Charleston's African American History & Heritage",
    description:
      "Explore Charleston's profound African American heritage with visits to significant historical sites, the Old Slave Mart Museum, and vibrant cultural centers while learning about Charleston's central role in African American history.",
    images: [
      "/images/tours/charleston/african-american-museum.jpg",
      "/images/tours/charleston/emanuel-ame-church.jpg",
    ],
    duration: "4 hours",
    price: "$80",
    rating: 4.9,
    tags: ["History", "Cultural", "Educational"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "6 Chalmers Street, Charleston, SC 29401",
      coordinates: {
        latitude: 32.7771,
        longitude: -79.9299,
      },
      instructions:
        "Meet at the Old Slave Mart Museum entrance. Your guide will be holding a sign with 'African American Heritage Tour'. Please arrive 15 minutes before the tour start time.",
      contactNumber: "+1 843-805-3089",
      contactEmail: "heritage@charlestonhistorytours.org",
    },
    availableDates: [
      "2024-04-02",
      "2024-04-09",
      "2024-04-16",
      "2024-04-23",
      "2024-04-30",
      "2024-05-07",
      "2024-05-14",
      "2024-05-21",
      "2024-05-28",
      "2024-06-04",
    ],
    highlights: [
      "Visit the Old Slave Mart Museum in a former slave auction gallery",
      "Tour the historic Emanuel AME Church, oldest AME church in the South",
      "Explore the African Burial Ground and Philip Simmons Gardens",
      "Learn about the Gullah Geechee cultural heritage",
      "Discover Charleston's role in African American history from slavery to civil rights",
    ],
    inclusions: [
      "Expert African American history guide",
      "Admission to the Old Slave Mart Museum",
      "Walking tour of significant African American historic sites",
      "Donation to Emanuel AME Church preservation fund",
      "African American heritage map of Charleston",
    ],
    exclusions: [
      "Transportation to and from meeting point",
      "Food and beverages",
      "Gratuities",
    ],
    itinerary: [
      "9:00 AM - Meet at Old Slave Mart Museum",
      "9:15 AM - Guided tour of the museum's exhibits",
      "10:30 AM - Walking tour of historic African American sites",
      "11:15 AM - Visit Emanuel AME Church (exterior and interior when available)",
      "12:00 PM - Philip Simmons Gardens and iron work examples",
      "12:30 PM - African Burial Ground and Catfish Row",
      "1:00 PM - Tour conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before tour start time.",
    faqs: [
      {
        question: "Which historical sites will we visit?",
        answer:
          "The tour includes visits to the Old Slave Mart Museum, Emanuel AME Church, the Philip Simmons Workshop, Aiken-Rhett House's slave quarters, and the African American cemetery at the Unitarian Church, among other significant sites.",
      },
      {
        question: "Is this tour appropriate for children?",
        answer:
          "Yes, the tour is designed to be educational and meaningful for visitors of all ages. Our guides present historical information in an age-appropriate manner while honoring the significance of these sites.",
      },
      {
        question:
          "What was Charleston's role in the Atlantic slave trade and domestic slave trade?",
        answer:
          "Charleston was the primary entry point for enslaved Africans into North America, with approximately 40% of all enslaved people brought to the United States passing through Charleston's harbor. Our tour explains how the city functioned as both an international slave trading port and later as the center of the domestic slave trade after international slave trading was outlawed in 1808. At the Old Slave Mart Museum, you'll learn about the commercial systems that commodified human beings, see auction schedules and sales records documenting the massive scale of Charleston's slave markets, and understand how the wealth generated from this human trafficking built many of the city's grandest buildings and institutions.",
      },
      {
        question:
          "How did African Americans in Charleston resist oppression and build community during and after slavery?",
        answer:
          "Throughout the tour, we highlight remarkable stories of resistance and community building. You'll learn about the 1739 Stono Rebellion, the largest slave uprising in colonial America; Denmark Vesey's planned liberation movement; and day-to-day forms of resistance on plantations and in urban settings. At Emanuel AME Church, we discuss how African Americans created autonomous religious institutions centuries before emancipation. The tour explains how free Black Charlestonians established schools, businesses, and mutual aid societies despite oppressive restrictions, and how these community foundations helped sustain the people through Reconstruction, Jim Crow segregation, and the Civil Rights Movement. These stories demonstrate the extraordinary resilience, dignity, and cultural preservation achieved against overwhelming obstacles.",
      },
      {
        question:
          "What contributions did African Americans make to Charleston's architecture, crafts, and cuisine?",
        answer:
          "The tour highlights the often uncredited African American artisans who literally built Charleston. You'll learn how enslaved and free Black craftspeople—including carpenters, metalworkers, stonemasons, and plasterers—created the city's distinctive architectural elements, from the wrought ironwork of Philip Simmons and his predecessors to the intricate woodwork and plasterwork adorning historic buildings. We explain how African agricultural knowledge transformed the Lowcountry landscape through rice cultivation techniques, how African cooking traditions formed the foundation of Charleston's celebrated cuisine, and how crafts like sweetgrass basketry preserved West African cultural knowledge through generations. The tour provides recognition of how African ingenuity and artistry shaped Charleston's distinctive cultural landscape.",
      },
    ],
  },
  {
    title: "Revolutionary Charleston: Liberty Trail & Patriots",
    description:
      "Walk in the footsteps of American revolutionaries on this deep exploration of Charleston's pivotal role in the American Revolution, visiting battlefields, historic taverns, and sites where liberty was debated and defended.",
    images: [
      "/images/tours/charleston/old-exchange.jpg",
      "/images/tours/charleston/liberty-trail.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.7,
    tags: ["History", "Revolutionary War", "Walking Tour"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "historical",
    meetingPoint: {
      address: "122 East Bay Street, Charleston, SC 29401",
      coordinates: {
        latitude: 32.7756,
        longitude: -79.9271,
      },
      instructions:
        "Meet at the front steps of the Old Exchange Building. Your guide will be wearing period colonial attire and holding a colonial flag. Please arrive 10 minutes before tour start time.",
      contactNumber: "+1 843-722-8687",
      contactEmail: "liberty@charlestonhistorytours.com",
    },
    availableDates: [
      "2024-04-03",
      "2024-04-10",
      "2024-04-17",
      "2024-04-24",
      "2024-05-01",
      "2024-05-08",
      "2024-05-15",
      "2024-05-22",
      "2024-05-29",
      "2024-06-05",
    ],
    highlights: [
      "Experience key sites along the Liberty Trail",
      "Tour the Old Exchange Building's Great Hall and Dungeon",
      "Visit the site of the Declaration of Independence reading in Charleston",
      "Learn about famous patriots who lived and fought in Charleston",
      "Discover lesser-known Revolutionary War stories and sites",
    ],
    inclusions: [
      "Expert Revolutionary War historian guide",
      "Admission to Old Exchange Building",
      "Liberty Trail map with historical context",
      "Small group size for personalized experience",
      "Commemorative reproduction historical document",
    ],
    exclusions: [
      "Transportation to and from meeting point",
      "Food and beverages",
      "Gratuities",
    ],
    itinerary: [
      "10:00 AM - Meet at Old Exchange Building",
      "10:15 AM - Tour of Old Exchange and Provost Dungeon",
      "11:00 AM - Liberty Trail walk through historic district",
      "11:30 AM - Visit St. Michael's Church where patriots worshipped",
      "12:00 PM - Heyward-Washington House (exterior)",
      "12:30 PM - Site of Liberty Tree and historic taverns",
      "1:00 PM - Tour conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before tour start time.",
    faqs: [
      {
        question: "What Revolutionary War sites will we visit?",
        answer:
          "The tour includes visits to the Old Exchange Building where the Declaration of Independence was first read to Charlestonians, St. Michael's Church where patriots worshipped, the site of the 1780 Siege of Charleston, and the Heyward-Washington House where George Washington stayed during his 1791 visit.",
      },
      {
        question: "Is this a walking tour or driving tour?",
        answer:
          "This is primarily a walking tour through Charleston's historic district. We cover approximately 1.5 miles at a comfortable pace with several stops and rest opportunities along the way.",
      },
      {
        question:
          "Why was Charleston strategically important during the American Revolution?",
        answer:
          "Charleston's strategic importance stemmed from multiple factors we explore during the tour. As the South's largest city and busiest port, it represented a commercial and political stronghold that both Britain and the Continental Congress recognized as crucial to controlling the southern colonies. The 1776 Battle of Sullivan's Island—where a half-completed palmetto log fort repelled a British naval squadron—represented one of the Revolution's first American victories, boosting patriot morale nationwide. We explain how Charleston's capture in 1780 (the largest surrender of American forces until the Civil War) temporarily shifted momentum to the British before campaigns into the Carolina countryside ultimately led to American victory at Yorktown. The tour provides geographical context for understanding why controlling this harbor city was considered essential to winning the southern theater.",
      },
      {
        question:
          "Who were the influential Revolutionary figures from Charleston?",
        answer:
          "Charleston produced remarkable revolutionary figures whose stories animate our tour. You'll learn about Thomas Heyward Jr., Edward Rutledge, and Arthur Middleton—three of the four South Carolina signers of the Declaration of Independence. We explore the dramatic story of Christopher Gadsden, who created the iconic 'Don't Tread on Me' flag and survived British imprisonment, and Rebecca Motte, who patriotically offered to burn her own plantation house to drive out British troops. The tour explains how mercantile leaders like Henry Laurens and military figures like Francis Marion ('The Swamp Fox') shaped the revolution, while also acknowledging the complex reality that many of these revolutionaries fighting for liberty were simultaneously enslavers, illustrating the central paradox of the American founding.",
      },
      {
        question:
          "How did Charleston experience British occupation during the Revolution?",
        answer:
          "The 18-month British occupation of Charleston (May 1780-December 1782) represented one of the longest enemy occupations of an American city in history. During our walk through the historic district, you'll learn how British forces dramatically transformed daily life—establishing martial law, confiscating homes for officer quarters, imprisoning prominent patriots on ships in the harbor, and encouraging enslaved people to flee to British lines with promises of freedom. We'll visit sites where loyalist militias recruited supporters and where partisan resistance operated secretly. The tour explains how this occupation divided families, turned neighbors into enemies, and created enduring social disruptions that continued long after the war ended, providing insight into the revolutionary era's complex social realities beyond battlefields and political declarations.",
      },
    ],
  },
  {
    title: "Charleston Harbor Sunset Dolphin Cruise",
    description:
      "Cruise Charleston Harbor at sunset aboard a comfortable pontoon boat that navigates shallow areas ideal for spotting Atlantic bottlenose dolphins while enjoying stunning views of the city skyline bathed in evening light.",
    images: [
      "/images/tours/charleston/dolphins.jpg",
      "/images/tours/charleston/harbor-sunset.jpg",
    ],
    duration: "2 hours",
    price: "$55",
    rating: 4.9,
    tags: ["Sunset", "Harbor"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: true,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "wellness",
    meetingPoint: {
      address: "17 Lockwood Drive, Charleston, SC 29401",
      coordinates: {
        latitude: 32.7853,
        longitude: -79.9567,
      },
      instructions:
        "Meet at the Charleston City Marina at Dock J. Look for the 'Sunset Dolphin Tours' sign. Please arrive 20 minutes before departure for boarding and safety briefing.",
      contactNumber: "+1 843-442-9455",
      contactEmail: "cruises@charlestonharboradventures.com",
    },
    availableDates: [
      "2024-04-01",
      "2024-04-03",
      "2024-04-05",
      "2024-04-08",
      "2024-04-10",
      "2024-04-12",
      "2024-04-15",
      "2024-04-17",
      "2024-04-19",
      "2024-04-22",
      "2024-04-24",
      "2024-04-26",
      "2024-04-29",
    ],
    highlights: [
      "Watch for Atlantic bottlenose dolphins in their natural habitat",
      "Witness Charleston's stunning skyline at sunset",
      "Cruise past historic Fort Sumter and Patriots Point",
      "Learn about local marine wildlife from naturalist guides",
      "Capture perfect photos in golden hour lighting",
    ],
    inclusions: [
      "2-hour eco-friendly harbor cruise",
      "Naturalist guide with marine biology expertise",
      "Complimentary bottled water",
      "Marine life identification guide",
      "Lightweight binoculars for wildlife spotting",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional beverages (BYOB permitted)",
      "Gratuities",
    ],
    itinerary: [
      "6:30 PM - Check-in at Charleston City Marina",
      "6:45 PM - Boarding and safety briefing",
      "7:00 PM - Depart marina and cruise to dolphin hotspots",
      "7:30 PM - Marine wildlife viewing in harbor estuaries",
      "8:00 PM - Cruise to optimal sunset viewing position",
      "8:30 PM - Charleston skyline views in sunset light",
      "9:00 PM - Return to marina",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance or if weather conditions cause cancellation. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before cruise departure.",
    faqs: [
      {
        question: "Are dolphin sightings guaranteed?",
        answer:
          "While we cannot guarantee wildlife sightings, our experienced captains know the local dolphin populations and routinely find them on over 90% of our cruises. We'll visit multiple locations where dolphins are frequently spotted.",
      },
      {
        question: "Is this a private tour or will others be on the boat?",
        answer:
          "This is a small-group tour with a maximum of 12 passengers, creating an intimate experience with excellent viewing opportunities. Private charters are available upon request.",
      },
      {
        question:
          "What makes Charleston Harbor ideal for Atlantic bottlenose dolphins?",
        answer:
          "Charleston Harbor provides perfect habitat for Atlantic bottlenose dolphins due to its unique estuarine ecosystem. During the cruise, our marine biologist explains how the confluence of five rivers creates nutrient-rich waters supporting abundant fish populations that sustain resident dolphin pods. You'll learn how the harbor's complex network of tidal creeks, salt marshes, and oyster reefs creates diverse microhabitats where dolphins have developed specialized feeding behaviors unique to this region. We discuss how approximately 300 dolphins consider Charleston's waters their year-round home, with many individuals being well-documented and monitored by local researchers for decades, providing extraordinary insights into dolphin social structures, communication patterns, and migration habits.",
      },
      {
        question:
          "What unique dolphin behaviors might we witness in Charleston Harbor?",
        answer:
          "Charleston dolphins have developed fascinating localized behaviors we watch for during the cruise. Most remarkable is strand feeding—a rare hunting technique documented in only a few locations worldwide—where dolphins work cooperatively to herd fish onto muddy banks and then temporarily beach themselves to catch the stranded prey. Our naturalist explains how mother dolphins teach this complex technique to their calves through years of observation and practice. We'll also watch for mud plume feeding where dolphins circle to create sediment rings trapping fish, and their use of sponges as foraging tools. These demonstrations of cultural transmission and tool use highlight the exceptional intelligence of these marine mammals and their special adaptations to Charleston's ecosystem.",
      },
      {
        question:
          "How does tidal action affect marine life and our cruise experience?",
        answer:
          "Charleston Harbor experiences dramatic tidal fluctuations averaging 5-6 feet between high and low tide—among the largest on the Eastern Seaboard. Our captain explains how these powerful tidal exchanges shape both our cruise route and wildlife behavior. You'll learn how outgoing tides concentrate baitfish in deeper channels where dolphins actively feed, while incoming tides allow us access to secluded creeks where dolphins rest and socialize. We'll observe how shorebirds time their feeding with tidal exposure of mudflats, how currents influence dolphin swimming patterns, and how the harbor's underwater topography creates predictable feeding zones. Understanding these tidal rhythms provides insight into the natural cycles that have shaped Charleston's maritime identity for centuries.",
      },
    ],
  },
  {
    title: "Low Country Oyster Farm & Roast Experience",
    description:
      "Discover the revitalization of traditional oyster farming with a boat trip to sustainable oyster beds, learn harvesting techniques from local watermen, and enjoy a classic Lowcountry oyster roast with fresh-shucked oysters and local beer.",
    images: [
      "/images/tours/charleston/oyster-farm.jpg",
      "/images/tours/charleston/oyster-roast.jpg",
    ],
    duration: "5 hours",
    price: "$135",
    rating: 4.8,
    tags: ["Culinary", "Boating", "Seafood"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "culinary",
    meetingPoint: {
      address: "4906 Hwy 17 N, Awendaw, SC 29429",
      coordinates: {
        latitude: 32.987,
        longitude: -79.6831,
      },
      instructions:
        "Meet at Sewee Outpost in Awendaw, approximately 30 minutes north of Charleston. Look for a white pickup truck with 'Charleston Oyster Tours' logo. We'll provide transportation from this point to the boat launch. Please wear clothes that can get muddy and shoes that can get wet.",
      contactNumber: "+1 843-813-5800",
      contactEmail: "oysters@lowcountryfarms.com",
    },
    availableDates: [
      "2024-04-04",
      "2024-04-11",
      "2024-04-18",
      "2024-04-25",
      "2024-05-02",
      "2024-05-09",
      "2024-05-16",
      "2024-10-03",
      "2024-10-10",
      "2024-10-17",
      "2024-10-24",
      "2024-10-31",
    ],
    highlights: [
      "Visit working oyster beds with expert local watermen",
      "Learn sustainable oyster farming techniques",
      "Participate in harvesting your own oysters (seasonal)",
      "Enjoy a traditional Lowcountry oyster roast with all the fixings",
      "Sample local craft beers paired with fresh oysters",
    ],
    inclusions: [
      "Transportation to oyster farm by boat",
      "Local waterman/oysterman guide",
      "Traditional oyster roast with all-you-can-eat oysters",
      "Local craft beer sampling",
      "Oyster shucking lesson and tools",
      "Waterproof boots (on request)",
    ],
    exclusions: [
      "Transportation to/from the meeting point",
      "Additional alcoholic beverages beyond included tastings",
      "Gratuities",
    ],
    itinerary: [
      "12:00 PM - Meet at Sewee Outpost",
      "12:15 PM - Transport to boat launch",
      "12:30 PM - Boat ride through scenic salt marshes to oyster farm",
      "1:00 PM - Tour of oyster beds with harvesting demonstration",
      "2:00 PM - Return to shore for oyster roast preparation",
      "2:30 PM - Learn traditional oyster roasting techniques",
      "3:00 PM - Feast on fresh oysters with local beer and sides",
      "4:30 PM - Return to meeting point",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours in advance. 50% refund if canceled 48-72 hours in advance. No refund for cancellations less than 48 hours before tour start time.",
    faqs: [
      {
        question: "What's a traditional Lowcountry oyster roast?",
        answer:
          "A Lowcountry oyster roast is a cherished social tradition where clusters of oysters are steamed over an open fire under a wet burlap sack, rather than truly 'roasted.' During the experience, you'll learn this traditional cooking method that creates perfectly steamed oysters that retain their salty liquor. We serve them on large tables where guests gather around, using special oyster knives (provided) to shuck them. The roast includes classic accompaniments like cocktail sauce, homemade mignonette, hot sauce, saltine crackers, and lemon wedges. It's a hands-on, communal dining experience that has brought Charlestonians together for generations.",
      },
      {
        question: "Is this tour only available during certain months?",
        answer:
          "Yes, our oyster experiences follow the traditional guideline of only harvesting oysters in months containing the letter 'r' (September through April). This practice ensures you're getting oysters at their peak quality and supports sustainable harvesting. During summer months (May-August), we offer modified tours that focus on oyster bed ecology and sustainable farming practices, but without harvesting or roasting components.",
      },
      {
        question: "Do I need to know how to shuck oysters?",
        answer:
          "Not at all! Your guide will provide an expert demonstration of proper oyster shucking techniques, along with individual instruction as needed. We provide special oyster knives and protective gloves for everyone. Many guests find they quickly develop this traditional skill during the experience. For those who prefer not to shuck their own oysters, your guide can assist.",
      },
      {
        question: "What should I wear for this experience?",
        answer:
          "Dress casually in clothes that can get muddy or wet, as oyster harvesting and roasting can be messy activities. We recommend closed-toe shoes that can get wet (or use our provided boots), lightweight, quick-drying clothing, a hat for sun protection, and sunscreen. Bring a light jacket in cooler months as we'll be near the water where it's often breezy.",
      },
      {
        question: "How does this tour support sustainable oyster farming?",
        answer:
          "This experience highlights the environmental benefits of modern oyster farming. You'll learn how a single oyster filters up to 50 gallons of water daily, improving water quality, and how oyster reefs provide critical habitat for marine life and protect shorelines from erosion. Our partner farm practices sustainable aquaculture using floating cages that minimize impact on tidal environments while producing high-quality oysters. A portion of each ticket supports local oyster restoration projects reestablishing wild oyster populations in South Carolina coastal waters.",
      },
    ],
  },
];

export default charlestonTours;
