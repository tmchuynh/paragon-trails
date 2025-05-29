import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const bostonTours: Tour[] = [
  {
    title: "Freedom Trail Historic Walking Tour",
    description:
      "Follow the red-brick path through Boston's revolutionary history with an expert guide bringing the American Revolution to life at 16 historic sites.",
    images: [
      "/images/tours/boston/freedom-trail.jpg",
      "/images/tours/boston/paul-revere-house.jpg",
    ],
    duration: "2.5 hours",
    price: "$45",
    rating: 4.8,
    tags: ["Revolutionary History", "Walking", "Historical Sites"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("boston", "historical").name,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How long is the walking route?",
        answer:
          "The complete Freedom Trail is 2.5 miles (4 km), but our tour makes strategic stops and doesn't cover every inch of the trail, making it manageable for most visitors.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly and designed to engage visitors of all ages with interactive storytelling and fun facts about Boston's history.",
      },
      {
        question: "What should I wear for the tour?",
        answer:
          "Comfortable walking shoes are recommended, as the tour involves a fair amount of walking on city streets and sidewalks.",
      },
      {
        question: "Are there restroom breaks during the tour?",
        answer:
          "Yes, we make several stops along the route where restrooms are available, including at the Boston Common and Faneuil Hall.",
      },
      {
        question:
          "What historical events will we learn about on the Freedom Trail?",
        answer:
          "The Freedom Trail covers pivotal events of the American Revolution including the Boston Massacre, Paul Revere's Ride, and the Battle of Bunker Hill. You'll discover how Boston became the cradle of the revolution, with stories of key figures like Samuel Adams, John Hancock, and the Sons of Liberty who shaped American independence.",
      },
      {
        question: "Which are the most significant sites we'll visit?",
        answer:
          "Highlights include the Massachusetts State House with its iconic gold dome, Paul Revere's House (Boston's oldest building dating to 1680), Old North Church ('One if by land, two if by sea'), Faneuil Hall (the 'Cradle of Liberty'), and the Bunker Hill Monument commemorating the first major battle of the Revolutionary War.",
      },
    ],
  },
  {
    title: "Harvard & Cambridge Academic Tour",
    description:
      "Explore America's oldest university campus guided by current Harvard students who share insider knowledge, traditions, and Harvard's fascinating history.",
    images: [
      "/images/tours/boston/harvard-yard.jpg",
      "/images/tours/boston/widener-library.jpg",
    ],
    duration: "3 hours",
    price: "$39",
    rating: 4.7,
    tags: ["University", "Education", "Architecture"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("boston", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will this tour help with college admissions?",
        answer:
          "While the tour provides valuable insight into student life and campus culture, it is not affiliated with Harvard's admissions office and doesn't provide specific admissions guidance.",
      },
      {
        question: "Can we enter any buildings during the tour?",
        answer:
          "Access to certain buildings like libraries and lecture halls is limited, but we do visit iconic locations like Harvard Yard and Memorial Hall. Some buildings may be open for brief visits depending on the academic calendar.",
      },
      {
        question: "Is this tour suitable for prospective students?",
        answer:
          "Absolutely! The tour is designed to give prospective students a feel for campus life, academic culture, and the unique traditions of Harvard University.",
      },
      {
        question:
          "What is Harvard's historical significance in American education?",
        answer:
          "Founded in 1636, Harvard is America's oldest institution of higher learning and played a formative role in shaping American intellectual life. Eight U.S. presidents attended Harvard, and the university pioneered many educational innovations. The tour explains how Harvard evolved from a small college training Puritan ministers into a world-renowned research university with global influence.",
      },
      {
        question: "What famous Harvard traditions will we learn about?",
        answer:
          "You'll discover traditions like touching the foot of John Harvard's statue for good luck (though we'll reveal why locals never do this!), the elaborate Harvard graduation ceremonies dating back centuries, and the intense Harvard-Yale rivalry. We'll also share stories of famous pranks, secret societies, and unique customs that have developed over nearly four centuries of campus life.",
      },
    ],
  },
  {
    title: "Boston Harbor Sunset Cruise",
    description:
      "Experience the beauty of Boston's skyline at sunset with a relaxing cruise around the harbor, complete with live music and refreshments.",
    images: [
      "/images/tours/boston/harbor-cruise.jpg",
      "/images/tours/boston/sunset-view.jpg",
    ],
    duration: "2 hours",
    price: "$55",
    rating: 4.9,
    tags: ["Scenic", "Relaxation", "Evening"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("boston", "romantic").name,
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "What should I wear for the cruise?",
        answer:
          "Dress in layers as it can get cooler on the water in the evening. Comfortable shoes are recommended.",
      },
      {
        question: "Is food and drink included?",
        answer:
          "Light snacks and non-alcoholic beverages are included. A full bar is available for purchase on board.",
      },
      {
        question: "Can we bring our own food or drinks?",
        answer:
          "Outside food and drinks are not allowed, but you can purchase items from our onboard menu.",
      },
      {
        question: "What maritime history will we learn about on the cruise?",
        answer:
          "Boston Harbor has been central to American history since colonial times. During the cruise, you'll learn about the Boston Tea Party of 1773, the strategic importance of the harbor during the Revolutionary War, and how its development shaped Boston's growth as a major commercial center. We'll point out historic sites like Fort Independence on Castle Island and the Charlestown Navy Yard where the USS Constitution ('Old Ironsides') is docked.",
      },
      {
        question:
          "What environmental restoration efforts have improved Boston Harbor?",
        answer:
          "Once notoriously polluted, Boston Harbor underwent one of America's most successful environmental cleanups beginning in the 1980s. Our guides explain the remarkable transformation from a national environmental disaster to a thriving marine ecosystem supporting diverse wildlife, clean beaches, and recreational activities. You'll learn how infrastructure improvements and conservation efforts have made this restoration possible.",
      },
    ],
  },
  {
    title: "Boston's North End Culinary Walk",
    description:
      "Discover Boston's Italian heritage with a guided food tour through the North End, sampling authentic pastries, pasta, and local wines.",
    images: [
      "/images/tours/boston/north-end-pasta.jpg",
      "/images/tours/boston/italian-pastries.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Culinary", "Italian", "Local"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("boston", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Are vegetarian options available?",
        answer:
          "Yes, we can accommodate vegetarians and vegans with advance notice. Please inform us of any dietary restrictions when booking.",
      },
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample a variety of dishes including fresh pasta, traditional pastries like cannoli, and local wines from family-owned establishments.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly and designed to engage visitors of all ages with interactive food experiences.",
      },
      {
        question: "How did the North End become Boston's Little Italy?",
        answer:
          "The North End has a fascinating cultural evolution from a colonial-era neighborhood to Boston's Little Italy. Originally settled by Puritans in the 1630s, it later housed Irish immigrants before a major wave of Italian immigration began in the 1860s, peaking between 1880-1920. We'll explain how Italian families transformed the neighborhood with their culinary traditions, businesses, and cultural practices that continue to thrive over a century later.",
      },
      {
        question: "What makes North End Italian cuisine authentic and unique?",
        answer:
          "North End Italian food reflects specific regional traditions from Italy, particularly from Sicily and Southern Italy where most immigrants originated. Our tour explains the differences between authentic Italian cooking and Italian-American adaptations, highlighting techniques passed through generations in family-owned establishments. You'll learn about seasonal specialties, traditional preparation methods, and the stories behind iconic dishes that define this historic culinary community.",
      },
    ],
  },
  {
    title: "Boston Tea Party Ships & Museum Experience",
    description:
      "Step back in time to the Boston Tea Party with an interactive experience that includes a reenactment, a tour of the ships, and a chance to throw tea overboard.",
    images: [
      "/images/tours/boston/tea-party-ship.jpg",
      "/images/tours/boston/reenactment.jpg",
    ],
    duration: "1.5 hours",
    price: "$30",
    rating: 4.6,
    tags: ["Historical", "Interactive", "Family"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("boston", "historical").name,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is this tour suitable for young children?",
        answer:
          "Yes, the tour is designed to be engaging for visitors of all ages, including children. Interactive elements make it fun and educational.",
      },
      {
        question: "Can we actually throw tea overboard?",
        answer:
          "Yes! Participants are encouraged to take part in the reenactment by throwing tea overboard, making it a memorable experience.",
      },
      {
        question: "Are there any age restrictions for this tour?",
        answer:
          "This tour is suitable for all ages. Children must be accompanied by an adult, and we provide life jackets for younger guests.",
      },
      {
        question:
          "Why was the Boston Tea Party such a pivotal event in American history?",
        answer:
          "The Boston Tea Party of December 16, 1773, represented a critical turning point that directly led to the American Revolution. Our historians explain how the protest against British taxation without representation galvanized colonial resistance, prompted harsh British retaliation through the Intolerable Acts, and ultimately united the colonies toward independence. It exemplified a bold shift from political negotiation to direct action against British authority.",
      },
      {
        question:
          "Who were the Sons of Liberty and how did they organize the protest?",
        answer:
          "The Sons of Liberty were a secret revolutionary organization led by patriots like Samuel Adams, John Hancock, and Paul Revere. During the tour, you'll learn about their extensive network, sophisticated planning, and the complex disguises they employed as Mohawk Indians. We explain how they organized approximately 116 participants to destroy 342 chests of tea worth nearly $2 million in today's currency, while maintaining enough discipline to avoid harming any crew members or damaging other property.",
      },
    ],
  },
  {
    title: "Fenway Park: Behind the Scenes Tour",
    description:
      "Go behind the scenes at America's oldest and most beloved ballpark. This intimate tour gives you unprecedented access to the home of the Boston Red Sox, including the dugout, press box, and the iconic Green Monster.",
    images: [
      "/images/tours/boston/fenway-park.jpg",
      "/images/tours/boston/green-monster.jpg",
    ],
    duration: "2 hours",
    price: "$35",
    rating: 4.9,
    tags: ["Sports", "Baseball", "Historical"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("boston", "local").name,
    tourCategoryId: "local",
    faqs: [
      {
        question: "Can I visit the locker rooms during the tour?",
        answer:
          "The team locker room is generally not included during the regular season, but off-season tours sometimes include this exclusive area. Our tour includes the visitor's dugout, press box, field access, and the famed Green Monster seating area.",
      },
      {
        question: "Will I see players during the tour?",
        answer:
          "On game days, you might glimpse players during batting practice if you book an early tour. Non-game day tours don't typically include player sightings, but the focus is on the rich history and unique features of Fenway Park itself.",
      },
      {
        question:
          "Why is Fenway Park considered so historically significant in baseball?",
        answer:
          "Opened in 1912, Fenway Park is MLB's oldest active ballpark and a National Historic Landmark. Our tour explains how its unique architectural features like the Green Monster (the 37-foot left field wall), Pesky's Pole, and the manual scoreboard have influenced baseball strategy and created distinctive playing conditions. You'll learn how the park's intimate dimensions have shaped a century of baseball history, including legendary moments from Ted Williams' career to the 2004 championship that broke the 86-year 'Curse of the Bambino.'",
      },
      {
        question:
          "How has Fenway Park evolved while preserving its historic character?",
        answer:
          "The tour reveals Fenway's remarkable balancing act between tradition and modernization. You'll see how the 1934 fire prompted major renovations, how the park narrowly escaped demolition in the 1960s, and how the current ownership has invested over $300 million in improvements since 2002. We explain architectural preservation techniques, modern amenities that were carefully integrated, and how the Monster Seats atop the left field wall transformed a billboard space into premium seating while respecting the park's historic character.",
      },
    ],
  },
  {
    title: "Salem Witch Trials & New England History Tour",
    description:
      "Journey to historic Salem for a day trip exploring the infamous Witch Trials of 1692, visiting key historical sites while expert guides separate fact from fiction about this dark chapter of colonial American history.",
    images: [
      "/images/tours/boston/salem-witch-house.jpg",
      "/images/tours/boston/witch-trial-memorial.jpg",
    ],
    duration: "8 hours",
    price: "$90",
    rating: 4.7,
    tags: ["Day Trip", "Historical", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("boston", "historical").name,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How do we travel from Boston to Salem?",
        answer:
          "Our tour includes comfortable coach transportation from downtown Boston to Salem, approximately a 45-minute drive. We handle all transportation logistics so you can focus on the experience.",
      },
      {
        question:
          "Does the tour cover actual historical sites or just tourist attractions?",
        answer:
          "Our tour focuses primarily on authentic historical sites including the Witch Trials Memorial, the 17th-century Witch House (home of trial judge Jonathan Corwin), and the original locations where key events occurred. We also visit the excellent Peabody Essex Museum which houses actual court documents from the trials.",
      },
      {
        question: "What really caused the Salem Witch Trials?",
        answer:
          "Our historians present the latest scholarly understanding of this complex event. You'll learn how a combination of factors created perfect conditions for the crisis: underlying religious tensions, property disputes between Salem Village and Salem Town, the psychological impacts of recent Indian attacks, possible ergot poisoning from contaminated rye, and the complex social dynamics of Puritan New England. We explain how initial accusations by young girls spiraled into a legal crisis that executed 20 innocent people before colonial authorities finally intervened.",
      },
      {
        question: "How did the witch trials affect American legal development?",
        answer:
          "The tour examines the profound legal legacy of the trials, which ultimately helped shape American jurisprudence. You'll learn how the procedural abuses—including spectral evidence, coerced confessions, and presumption of guilt—led to reforms in colonial courts. The trials' legacy influenced fundamental American legal principles including the right to legal representation, evidence standards, and the presumption of innocence. Justice Samuel Sewall's public apology in 1697 represents one of the first public acknowledgments of judicial error in American history.",
      },
      {
        question:
          "How does modern Salem balance historical accuracy with tourism?",
        answer:
          "Our tour addresses the sometimes challenging relationship between Salem's somber historical reality and its modern tourism industry. We discuss how the city has evolved from initially ignoring this difficult history to commemorating it through the dignified Salem Witch Trials Memorial (dedicated in 1992), while also embracing a broader witchcraft-themed identity. You'll gain perspective on the ethical considerations of historical tourism at sites of tragedy and how different stakeholders—historians, descendants, businesses, and religious groups—negotiate these tensions.",
      },
    ],
  },
  {
    title: "Boston Craft Beer & Brewery Tour",
    description:
      "Sample Boston's thriving craft beer scene with an expert-guided tour of local breweries, experiencing the city's brewing renaissance while learning about beer production and tasting techniques.",
    images: [
      "/images/tours/boston/craft-brewery.jpg",
      "/images/tours/boston/beer-tasting.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Craft Beer", "Brewery", "Tasting"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("boston", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many breweries do we visit?",
        answer:
          "The tour includes visits to three distinct craft breweries, selected to represent different brewing styles and approaches. Each stop includes a guided tasting flight of 4-5 beer samples (approximately 16 total tastings).",
      },
      {
        question: "Is there food available during the tour?",
        answer:
          "Light snacks are provided to complement the beer tastings. One brewery stop includes a more substantial food pairing experience designed to demonstrate how different beer styles interact with various flavor profiles.",
      },
      {
        question:
          "What is Boston's historical significance in American brewing?",
        answer:
          "Boston has a pivotal role in American beer history dating to colonial times. You'll learn how the Pilgrims landed at Plymouth Rock partly because they were running out of beer (a safer alternative to water in that era), how Samuel Adams and other patriots gathered in taverns to plan revolution, and how Boston's immigrant communities—particularly German and Irish—shaped brewing traditions. We explore how prohibition devastated local brewing, the mid-century consolidation that nearly eliminated craft brewing, and the remarkable renaissance since the 1980s that has made Boston a craft beer destination.",
      },
      {
        question:
          "How has the New England IPA style revolutionized craft beer?",
        answer:
          "Our tour explains how the distinctive New England IPA (NEIPA) style—characterized by its hazy appearance, tropical fruit flavors, and reduced bitterness—originated in Vermont but was perfected by Boston-area brewers. You'll learn the specific brewing techniques that create its signature mouthfeel, how innovative dry-hopping methods extract aromatics without bitterness, and why this style has spread globally despite challenging traditional brewing conventions. We'll taste examples showing the evolution of this influential regional style.",
      },
      {
        question:
          "What sustainability practices are Boston breweries implementing?",
        answer:
          "The tour highlights how Boston's craft breweries are pioneering sustainability in brewing. You'll see solar power installations, water reclamation systems, spent grain recycling programs for local agriculture, and community-focused business models. We discuss how these practices are reducing the environmental footprint of beer production while creating economic benefits for local communities and setting industry standards for responsible brewing practices.",
      },
    ],
  },
  {
    title: "Boston's Literary History: Authors & Architecture",
    description:
      "Walk in the footsteps of literary giants on this tour of Boston's rich literary heritage, visiting historic sites connected to Emerson, Thoreau, Alcott, Hawthorne and other luminaries of American literature.",
    images: [
      "/images/tours/boston/literary-boston.jpg",
      "/images/tours/boston/authors-homes.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.6,
    tags: ["Literary", "Historical", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("boston", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Which authors' homes and haunts will we visit?",
        answer:
          "The tour explores sites connected to Ralph Waldo Emerson, Henry David Thoreau, Louisa May Alcott, Nathaniel Hawthorne, Henry Wadsworth Longfellow, and others. We visit the locations of historic homes, clubs where literary society gathered, and inspirational settings that appeared in their works.",
      },
      {
        question: "Do we need to have read these authors to enjoy the tour?",
        answer:
          "No prior reading is required! Our guides provide engaging context about each author and their significance. That said, familiarity with works like 'Little Women,' 'The Scarlet Letter,' or Thoreau's 'Walden' can enhance your appreciation of the sites we visit.",
      },
      {
        question:
          "Why was Boston considered America's literary capital in the 19th century?",
        answer:
          "Boston emerged as America's intellectual and publishing center due to several converging factors: its established universities, flourishing publishing houses like Ticknor & Fields, influential magazines including The Atlantic Monthly, and wealthy patrons supporting the arts. The tour explains how this unique ecosystem nurtured both Transcendentalist thinkers challenging convention and established writers creating distinctly American literary forms. You'll learn how these writers helped establish American cultural independence from Europe decades after political independence was achieved.",
      },
      {
        question: "How did Transcendentalism develop in Boston and Concord?",
        answer:
          "The tour explores how this revolutionary philosophical movement emerged from Boston's intellectual circles in the 1830s. You'll discover how Ralph Waldo Emerson's groundbreaking essay 'Nature' (1836) challenged European traditions and called for a uniquely American approach to spirituality and literature. We trace how the movement spread through Concord's intellectual community, exploring the relationships between key figures like Emerson, Thoreau, Margaret Fuller, and Bronson Alcott. You'll learn how their radical ideas about individualism, nature, and social reform continue to influence American thought today.",
      },
      {
        question: "What was the Saturday Club and why was it important?",
        answer:
          "The Saturday Club was an influential literary gathering that met monthly at the Parker House Hotel (now the Omni Parker House) beginning in 1855. Our tour visits this location and explains how luminaries including Emerson, Longfellow, Hawthorne, Oliver Wendell Holmes, and later Charles Dickens during his American tour, gathered here to shape American intellectual life. You'll learn about their discussions on literature, philosophy, and the pressing issues of their day, including abolition. The club represented a uniquely American approach to intellectual community that differentiated itself from European models.",
      },
    ],
  },
  {
    title: "MIT & Innovation District Tech Tour",
    description:
      "Explore Boston's cutting-edge innovation ecosystem with guided visits to MIT's campus, Kendall Square startups, and the Seaport Innovation District, learning how this hub drives global technological advancement.",
    images: [
      "/images/tours/boston/mit-campus.jpg",
      "/images/tours/boston/innovation-district.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Technology", "Innovation", "Education"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("boston", "local").name,
    tourCategoryId: "local",
    faqs: [
      {
        question: "Will we see active research labs during the tour?",
        answer:
          "We visit several public-facing innovation spaces including the MIT Museum and select innovation centers. While most active research labs maintain restricted access, our tour includes viewing windows into robotics workspaces and demonstrations of current projects at designated visitor areas.",
      },
      {
        question: "Is this tour appropriate for non-technical visitors?",
        answer:
          "Absolutely! Our guides specialize in making complex technological concepts accessible to all audiences. The tour focuses on the innovation process, historical significance, and societal impact rather than technical details, making it engaging for visitors of all backgrounds.",
      },
      {
        question: "How did Boston become a global innovation hub?",
        answer:
          "Boston's emergence as a technology powerhouse resulted from a unique convergence of factors we explore on the tour. You'll learn how MIT's unique approach to industry partnerships, dating back to its founding philosophy of 'mind and hand,' created technology transfer mechanisms that transformed academic research into commercial applications. We explain how defense research during WWII and the Cold War brought massive federal investment, how Route 128 emerged as 'America's Technology Highway' before Silicon Valley rose to prominence, and how the biotechnology revolution leveraged Harvard and MIT's research capacity to create an entirely new industry centered in Kendall Square.",
      },
      {
        question: "What technological breakthroughs originated in Boston?",
        answer:
          "The tour reveals Boston's outsized role in technological innovation across multiple fields. You'll discover how MIT's Radiation Laboratory developed radar technology that helped win WWII, how Boston-area companies pioneered minicomputers that preceded the PC revolution, and how local researchers created the core technologies behind the internet, including the first network router. We explore current innovations in robotics, biotechnology, artificial intelligence, and climate technology being developed in labs you'll see during the tour.",
      },
      {
        question:
          "How does Boston's innovation ecosystem compare to Silicon Valley?",
        answer:
          "Our tour addresses how Boston's innovation approach differs from other tech hubs. You'll learn about Boston's deeper emphasis on 'tough tech' solving fundamental scientific challenges rather than consumer applications, the tighter integration between universities and industry, and the focus on biotechnology alongside computing. We discuss how Boston's innovation culture tends to be more collaborative and less focused on 'disruption' than Silicon Valley's, reflecting New England's more established institutional structures and greater emphasis on addressing complex societal challenges through deep technological innovation.",
      },
    ],
  },
];

export default bostonTours;
