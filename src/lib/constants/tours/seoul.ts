import { Tour } from "@/lib/interfaces/services/tours";

export const seoulTours: Tour[] = [
  {
    title: "Korean Palace & Hanbok Experience",
    description:
      "Explore Seoul's magnificent royal palaces dressed in traditional Korean hanbok attire, learning about court customs and enjoying privileged photo opportunities in normally restricted palace areas.",
    city: "Seoul",
    country: "South Korea",
    region: "Seoul Capital Area",
    images: [
      "/images/tours/seoul/palace-hanbok.jpg",
      "/images/tours/seoul/gyeongbokgung.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Cultural", "Palace", "Traditional Dress"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is the hanbok rental included in the price?",
        answer:
          "Yes, rental of high-quality traditional hanbok attire is included, with various styles and sizes available for men, women and children. Our staff helps with proper fitting and traditional styling.",
      },
      {
        question:
          "What is the historical significance of hanbok in Korean culture?",
        answer:
          "Hanbok has been Korea's traditional attire for over 1,600 years, evolving through dynasties while maintaining its distinctive silhouette. The design embodies Korean Confucian values—straight lines represent integrity, while the flowing curves symbolize harmony with nature. During the Joseon Dynasty (1392-1910), strict sumptuary laws dictated hanbok colors and materials according to social status. Only royalty could wear gold-embroidered red silk, while commoners wore white, pale pink, or light green cotton. The vibrant colors you'll wear today were historically reserved for special occasions and celebrations. Modern Koreans continue wearing hanbok for important cultural holidays like Seollal (Lunar New Year) and Chuseok (Korean Thanksgiving), making your palace visit in hanbok a meaningful cultural immersion rather than mere costume play.",
      },
      {
        question: "Which palace will we visit and what makes it special?",
        answer:
          "Our tour visits Gyeongbokgung, the largest and most magnificent of Seoul's Five Grand Palaces. Built in 1395 as the Joseon Dynasty's main royal residence, its name means 'Palace of Shining Happiness.' The complex contains over 300 buildings arranged according to strict feng shui principles, with the throne hall (Geunjeongjeon) positioned to have the auspicious Bugaksan Mountain at its back. The palace was almost completely destroyed during the Japanese occupation (1910-1945) and has been meticulously reconstructed to match historical specifications. While exploring, you'll witness the Changing of the Royal Guard ceremony, which authentically recreates Joseon-era palace security protocols. Your guide will explain how architectural details—including the number of roof ridges, the positioning of buildings, and even the height of door thresholds—indicated hierarchical status within the court system.",
      },
      {
        question: "How should I behave at the palace while wearing hanbok?",
        answer:
          "While wearing hanbok grants you special access to certain palace areas, it also comes with responsibility to respect Korean cultural heritage. Maintain appropriate behavior by speaking quietly, not running on wooden floors, and following traditional Korean etiquette when entering palace buildings (step over rather than on thresholds). Photography is permitted in most areas, but remember that certain ceremonial buildings may have restrictions. Many Koreans visit palaces in hanbok as a way to connect with their heritage rather than merely for photos. Our guide will explain courtly etiquette, including how nobles would have bowed differently based on rank and royal proximity—you're welcome to practice these traditional greetings for an authentic experience. When sitting in hanbok, women should arrange skirts to the right side, while men sit cross-legged—these details demonstrate cultural awareness beyond simply wearing the clothing.",
      },
    ],
  },
  {
    title: "Korean Street Food Night Tour",
    description:
      "Dive into Seoul's vibrant night markets and hidden food alleys with a local culinary expert, sampling everything from classic Korean street foods to trendy new creations in bustling Myeongdong and Gwangjang Market.",
    city: "Seoul",
    country: "South Korea",
    region: "Seoul Capital Area",
    images: [
      "/images/tours/seoul/street-food.jpg",
      "/images/tours/seoul/gwangjang-market.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Food", "Night Tour", "Markets"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How spicy is the food on this tour?",
        answer:
          "We sample a range of items with varying spice levels, but our guide will point out spicier options and suggest milder alternatives. Korean street food offers plenty of non-spicy options that are equally delicious.",
      },
      {
        question: "What is the historical significance of Korean street food?",
        answer:
          "Korean street food evolved through distinct historical periods, reflecting the nation's cultural resilience. After the Korean War (1950-1953), when food scarcity was widespread, creative vendors developed filling, affordable options using government-supplied wheat flour from American aid—this is when tteokbokki (rice cakes in spicy sauce) evolved from a royal court dish into a popular street food by incorporating gochujang (red pepper paste). During Korea's rapid industrialization in the 1970s-80s, pojangmacha (wheeled food stalls) fed factory workers during late shifts, creating the distinctive night food culture Seoul is famous for. These mobile vendors operated semi-legally until recent government initiatives formalized their status, preserving this cultural institution while improving food safety. Each dish tells a story of adaptation—like hotteok (sweet pancakes) introduced by Chinese immigrants in the early 1900s but transformed with Korean ingredients. Today's street food scene continues evolving with modern fusion creations while maintaining these historical foundations.",
      },
      {
        question:
          "What makes Gwangjang Market special compared to other markets?",
        answer:
          "Established in 1905, Gwangjang Market holds the distinction of being Korea's first permanent marketplace, representing a pivotal transition from temporary trading to formalized commerce during modernization. Unlike tourist-oriented markets, Gwangjang maintains its authentic function serving local Seoulites daily. The market became a culinary landmark when female merchants (mostly war widows) began selling bindaetteok (mung bean pancakes) in the 1950s, creating economic independence during difficult times—many stalls remain female-owned across generations. Gwangjang's specialized sectional organization follows traditional Korean market principles: textiles in one area (once the market's main product), then produce, then prepared foods. The market's food vendors operate on a unique system where competing stalls serve nearly identical menus side-by-side, distinguished by subtle family recipe variations passed through generations. Most vendors make their specialties fresh before customers rather than preparing in advance, maintaining quality standards that have attracted international recognition through documentaries and celebrity chef visits.",
      },
      {
        question: "Are there any unique seasonal street foods we might try?",
        answer:
          "Korean street food follows strict seasonal traditions reflecting the country's agricultural calendar. In summer, we'll try kongguksu (cold soybean noodle soup) and patbingsu (shaved ice with sweet red beans)—both traditional cooling foods. Autumn brings roasted chestnuts and sweet potatoes cooked over traditional coal braziers, plus hotteok (sweet pancakes with cinnamon-nut filling) that historically helped maintain body temperature during colder months. Winter markets feature bungeoppang (fish-shaped pastries filled with sweet red bean) and odeng (fish cake skewers) served in steaming broth—the broth is traditionally offered free as a warming courtesy even if you only purchase the skewers. Spring introduces various namul (wild mountain vegetable) dishes temporarily available from countryside foragers who set up seasonal stalls. Beyond these traditions, we'll encounter modern seasonal trends like cheese corn dogs and tornado potatoes that have become social media phenomena through K-pop and K-drama influences.",
      },
    ],
  },
  {
    title: "Seoul's Hidden Temples & Nature Trails",
    description:
      "Discover Seoul's serene side with a guided hike through hidden nature trails leading to ancient Buddhist temples, enjoying breathtaking views and learning about the spiritual significance of these sacred sites.",
    city: "Seoul",
    country: "South Korea",
    region: "Seoul Capital Area",
    images: [
      "/images/tours/seoul/hidden-temple.jpg",
      "/images/tours/seoul/nature-trail.jpg",
    ],
    duration: "5 hours",
    price: "$90",
    rating: 4.7,
    tags: ["Nature", "Spiritual", "Hiking"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "What level of fitness is required for this hike?",
        answer:
          "The hike includes moderate trails with some elevation gain, suitable for most fitness levels. We take breaks and adjust the pace to ensure everyone can enjoy the experience comfortably.",
      },
      {
        question: "Are there restroom facilities along the trail?",
        answer:
          "Yes, there are restroom facilities at the starting point and at the temples we visit. However, restrooms may not be available on the trails themselves, so plan accordingly.",
      },
      {
        question:
          "What's the significance of mountain temples in Korean Buddhism?",
        answer:
          "Mountain temples hold profound significance in Korean Buddhism, reflecting the uniquely Korean adaptation of Buddhist traditions. When Buddhism arrived from China in 372 CE, Korean practitioners deliberately established temples in mountains following the native shamanistic belief that mountains were sacred dwelling places of spirits. This synthesis created a distinctly Korean form of Buddhism called sansa (mountain temple Buddhism). The temples we visit were positioned according to pungsu-jiri (Korean feng shui)—typically facing south with a mountain at their back and water in front, creating harmony with natural elements. Unlike urban temples focused on community services, mountain temples emphasize meditative practice and spiritual cultivation. Most were originally established during the Three Kingdoms period (57 BCE-668 CE) but rebuilt multiple times throughout history after wars and fires, preserving ancient architectural principles while incorporating artistic evolutions of each era. The isolated mountain locations also served a practical purpose during periods of Buddhist persecution, particularly during the early Joseon Dynasty when Confucianism became state ideology.",
      },
      {
        question: "How should visitors behave when visiting Buddhist temples?",
        answer:
          "Korean Buddhist temples maintain specific etiquette reflecting their dual nature as active religious sites and cultural landmarks. When entering temple grounds, bow slightly at the main gate as a gesture of respect. Photography is generally permitted in outdoor areas but often restricted inside prayer halls with active worship—always check for signage or ask our guide. The main Buddha hall (Daeungjeon) should be entered with particular mindfulness: remove shoes before stepping on the raised wooden floor, refrain from pointing at religious figures, and avoid turning your back to Buddha statues when leaving. If you encounter monks, bow respectfully—traditionally, a 45-degree bow acknowledges their spiritual dedication without requiring religious adherence from visitors. Women should avoid wearing revealing clothing, though temples no longer enforce historical gender segregation. Most significantly, maintain quiet conversation, as temples function as contemplative spaces where monastics and laypeople seek spiritual focus. These practices aren't merely formalities but reflect core values of Korean Buddhism—mindfulness, respect for spiritual pursuit, and harmony with surroundings.",
      },
      {
        question:
          "What native plants and wildlife might we encounter on the trail?",
        answer:
          "Seoul's mountain trails feature remarkable biodiversity despite their proximity to a metropolis of 10 million people. During spring hikes (March-May), you'll encounter delicate Korean pasque flowers (할미꽃/halmikkot) that signal winter's end and azaleas creating vibrant purple slopes—both subjects of countless Korean poems. Summer brings lush canopies of maple, pine, and uniquely Korean native species like the rare Abeliophyllum distichum (white forsythia) found nowhere else on earth. Wildlife sightings include Korean water deer, emblematic of Seoul's balanced ecosystem management, and numerous bird species like the spectacular black-naped oriole whose distinctive call often accompanies hikers. The mountains surrounding Seoul contain over 1,100 plant species, many with traditional medicinal uses that temple monks historically cultivated in specialized gardens. Our guide will identify edible plants like gosari (bracken fern) that locals still forage seasonally and explain how mountain ecology influenced Korean traditional medicine and cuisine. The trails themselves often follow paths established centuries ago by monks traveling between temples, representing living cultural heritage beyond their natural significance.",
      },
    ],
  },
  {
    title: "DMZ & Joint Security Area Tour",
    description:
      "Visit one of the world's most heavily fortified borders with a guided tour to the Korean Demilitarized Zone (DMZ) and Joint Security Area (JSA), gaining insight into the ongoing division of the Korean peninsula and efforts toward peace.",
    city: "Seoul",
    country: "South Korea",
    region: "Seoul Capital Area",
    images: [
      "/images/tours/seoul/dmz-border.jpg",
      "/images/tours/seoul/joint-security-area.jpg",
    ],
    duration: "9 hours",
    price: "$135",
    rating: 4.9,
    tags: ["History", "Political", "DMZ"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What security requirements exist for visiting the DMZ/JSA?",
        answer:
          "This tour requires advance booking (minimum 3-5 days) with passport information for security clearance. All visitors must carry their physical passport on the day and follow a strict dress code prohibiting ripped jeans, sleeveless shirts, or clothing with political messaging. Photography is permitted only in designated areas. Military personnel may cancel visits without notice due to diplomatic activities or security concerns. The JSA portion requires signing a waiver acknowledging entry into a high-security zone. Children under 11 are not permitted in the JSA, and all visitors must remain with the authorized guide throughout the tour. These restrictions reflect the reality that the Korean War technically continues under an armistice agreement rather than a peace treaty.",
      },
      {
        question: "What exactly is the DMZ and how was it established?",
        answer:
          "The Demilitarized Zone was established by the 1953 Korean Armistice Agreement as a 250km-long, 4km-wide buffer zone roughly following the 38th parallel. Despite its name, it's actually the most heavily militarized border in the world. The DMZ contains numerous historical layers: first established as an arbitrary division by American and Soviet officials in 1945, it became the frontline during the 1950-53 Korean War, shifting multiple times before settling at roughly the war's final battle positions. What makes the DMZ unique among global borders is its unintended transformation into an ecological sanctuary—the absence of human development for 70+ years has created a pristine wildlife refuge where endangered species like red-crowned cranes and Asiatic black bears thrive. Military infrastructure paradoxically preserves this ecosystem: extensive minefields prevent development while military restrictions limit human access. The tour provides historical context beyond typical media narratives, explaining how this division affects families separated for generations and discussing various reunification scenarios proposed throughout the decades.",
      },
      {
        question: "What will we see at the Joint Security Area (JSA)?",
        answer:
          "The JSA at Panmunjom is the only location where North and South Korean forces stand face-to-face, centered around the Military Demarcation Line where negotiations occur. You'll see the iconic blue conference buildings straddling the border—these structures have hosted numerous historic meetings, including the 2018 and 2019 inter-Korean summits. Inside the main conference room, you can technically stand in North Korean territory while remaining under UN protection, as the building's interior is bisected by the border with microphones running along the center table marking the exact division. The JSA has evolved significantly since its establishment—previously, guards from both sides stood in tense formation directly facing each other, but security protocols changed following violent incidents, particularly the 1976 'Axe Murder Incident' when two US officers were killed during a tree-trimming operation. Our historian guide explains how the area's arrangement reflects changing diplomatic relations, pointing out subtle visual differences between the North and South sides that reveal each country's self-presentation and propaganda approaches.",
      },
      {
        question:
          "How does the tour address the human impact of Korea's division?",
        answer:
          "Beyond geopolitical facts, our tour provides nuanced perspectives on how division affects ordinary Koreans. We'll visit Dora Observatory where, on clear days, you can view North Korean propaganda villages through provided binoculars—this offers insight into how both countries communicate across the divide. The tour includes the poignant Dorasan Station, a fully-built modern railway station designed to connect Seoul to Pyongyang but currently ending at the DMZ—a physical symbol of both hope for future connection and the current reality of separation. You'll learn about the estimated 10 million family members separated since 1945, many of whom have never been permitted contact with relatives across the border. Our guide shares personal stories from North Korean defectors who have resettled in South Korea, explaining their difficult integration experiences and providing balanced context about life in North Korea beyond simplistic narratives. The tour concludes with discussion of various reunification scenarios studied by Korean scholars and the complex economic and social challenges any future reconciliation would entail.",
      },
    ],
  },
  {
    title: "K-Pop & Hallyu Cultural Experience",
    description:
      "Immerse yourself in Korea's global entertainment phenomenon with behind-the-scenes visits to K-pop recording studios, dance workshops with professional choreographers, and exploration of filming locations from famous Korean dramas.",
    city: "Seoul",
    country: "South Korea",
    region: "Seoul Capital Area",
    images: [
      "/images/tours/seoul/k-pop-studio.jpg",
      "/images/tours/seoul/drama-locations.jpg",
    ],
    duration: "6 hours",
    price: "$110",
    rating: 4.7,
    tags: ["K-Pop", "Entertainment", "Hallyu"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "entertainment",
    faqs: [
      {
        question: "Will we meet any K-pop stars during the tour?",
        answer:
          "While we cannot guarantee celebrity encounters, our tour visits active production facilities where artists record and rehearse. Occasional sightings do occur, but the focus is on understanding the systematic development process behind K-pop's global success rather than fan encounters. Instead of promising celebrity meetings, we provide authentic industry insights through our guide who has worked professionally in K-pop production and can explain the intensive training system, business model innovations, and technological production techniques that differentiate K-pop from Western pop music. You'll gain appreciation for the carefully orchestrated ecosystem that creates these international stars.",
      },
      {
        question: "What is 'Hallyu' and why is it significant globally?",
        answer:
          "Hallyu (한류/Korean Wave) refers to the unprecedented global spread of Korean popular culture since the late 1990s, encompassing K-pop, K-dramas, films, and now extending to Korean beauty products, fashion, and cuisine. This cultural phenomenon represents the most successful example of governmental soft power strategy in recent history—South Korea deliberately invested in cultural industries following the 1997 Asian Financial Crisis, transforming entertainment from domestic consumption to exportable product. The Ministry of Culture allocates significant funding to international promotion, while entertainment companies like SM, YG, and HYBE function as both talent agencies and cultural ambassadors. Hallyu's economic impact is remarkable: beyond direct revenue from music and drama exports, it drives tourism (K-pop fans visiting filming locations) and increases demand for Korean consumer products. The phenomenon has evolved through distinct phases—from regional Asian popularity in the early 2000s to truly global reach following Psy's 'Gangnam Style' viral breakthrough in 2012, to today's multi-platform ecosystem where BTS alone generates over $5 billion annually for South Korea's economy according to government estimates.",
      },
      {
        question: "What will the dance workshop portion involve?",
        answer:
          "Our dance workshop takes place in an authentic training studio where K-pop idols practice, led by professional choreographers who have worked with major entertainment companies. The session begins with understanding K-pop dance's unique characteristics—its synthesis of hip-hop, contemporary, and theatrical elements with precision formations and signature point choreography (easily recognizable movements associated with specific songs). You'll learn a simplified version of iconic choreography from a recent hit song, broken down into manageable segments regardless of your dance experience. The workshop also explains the exhaustive practice regimen of K-pop trainees, who typically train 8-10 hours daily for years before debuting. Participants gain appreciation for how choreography is specifically designed to enhance musical hooks and create viral dance challenges—a key component of K-pop's international marketing strategy. The workshop concludes with a group recording so you can share your K-pop experience, though participation in the recording is optional.",
      },
      {
        question: "How has K-drama production influenced global television?",
        answer:
          "Korean dramas have revolutionized global television production and distribution through several innovations we'll explore during the tour. The 'live-shoot' system (scripts being finalized just days before broadcast) allows K-dramas to incorporate audience feedback mid-season, creating highly responsive storytelling. This production method, while notorious for its intensity, produces content specifically optimized for audience emotional engagement. We'll visit iconic filming locations while discussing how K-dramas pioneered the seasonal format now common on streaming platforms—typically 16-20 episodes telling a complete story rather than open-ended series. The industry's structured genre approach (romantic comedies, historical sagas, medical dramas) with consistent tropes creates reliable viewer experiences while experimenting within these frameworks. Perhaps most significantly, K-dramas' export strategy focused on cultural specificity rather than universality—preserving distinctly Korean elements rather than neutralizing them for international audiences. This counterintuitive approach proved more successful than expected, as viewers worldwide embraced Korean cultural elements like honorific language systems and social hierarchies as part of the viewing experience, paving the way for greater acceptance of non-English content globally.",
      },
    ],
  },
  {
    title: "Traditional Korean Crafts Workshop",
    description:
      "Learn traditional Korean handicrafts from master artisans, choosing between pottery making, hanji paper crafting, or traditional natural dyeing techniques in a hands-on workshop that connects you with centuries of artistic heritage.",
    city: "Seoul",
    country: "South Korea",
    region: "Seoul Capital Area",
    images: [
      "/images/tours/seoul/pottery-workshop.jpg",
      "/images/tours/seoul/hanji-crafting.jpg",
    ],
    duration: "3 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Craft", "Hands-on", "Traditional"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What craft options are available and how do I choose?",
        answer:
          "Participants select one of three traditional crafts: Dalhangari pottery (creating moon jars using coiling techniques), Hanji paper crafting (making traditional objects from mulberry paper), or Nubi fabric dyeing (natural indigo dyeing on cotton). Each workshop is led by a designated master with national certification in their craft. When booking, you'll specify your preferred craft, though we recommend reviewing the detailed descriptions we provide about each tradition's history and processes. Each craft experience is designed for beginners while providing authentic techniques rather than simplified tourist versions. All materials and tools are provided, and you'll complete a finished piece to take home regardless of which craft you select.",
      },
      {
        question:
          "What is the cultural significance of these traditional crafts?",
        answer:
          "These crafts represent Korea's distinctive artistic heritage that evolved through centuries of cultural exchange yet maintained unique characteristics. Dalhangari moon jars emerged during the Joseon Dynasty (1392-1910), embodying Korean aesthetic principles of understated beauty and natural imperfection—their slight asymmetry and milky glaze represent the philosophical concept of 'harmonious imbalance.' Hanji paper crafting uses paper made from native mulberry trees through a labor-intensive process requiring 120+ steps; historically this paper served essential functions from household items to royal documents, with some preserved examples over 1,000 years old demonstrating its remarkable durability. Nubi natural dyeing utilizes locally-sourced plant materials following techniques documented in the Joseon royal court's household management text Gyuhap Chongseo (1809). All these crafts face preservation challenges as industrialization reduced traditional practitioners, leading the Korean government to implement its Important Intangible Cultural Properties system in 1962—a pioneering cultural preservation initiative that predates UNESCO's similar programs by decades.",
      },
      {
        question: "How has modernization affected these traditional crafts?",
        answer:
          "Korean traditional crafts have experienced a fascinating revival through contemporary reinterpretation rather than mere preservation. The workshop highlights how each craft navigates tradition and innovation: Master potters now combine traditional firing techniques with modern glazes to create pieces that honor historical aesthetics while meeting contemporary functional needs. Hanji paper, historically used for practical items like windows and storage boxes, has found new applications in fine art, fashion accessories, and even industrial design where its structural properties prove advantageous. Natural dyeing techniques are being scientifically documented for their environmental sustainability, influencing Korea's modern textile industry as eco-friendly alternatives to synthetic dyes. This revitalization connects to broader cultural phenomena—as Korea's global influence grows through technology and entertainment, many younger Koreans have renewed interest in traditional practices, creating a 'neo-traditional' movement where ancestral techniques find modern expression. Your workshop instructor will discuss how they personally navigate this balance between honoring traditions while ensuring their craft remains relevant and economically viable in contemporary society.",
      },
      {
        question: "Will I create something I can take home with me?",
        answer:
          "Yes, all participants create finished pieces they can take home, though the process varies by craft type. For pottery workshops, you'll create your piece during the session, but finished items require firing that takes several days—we arrange international shipping (additional fee applies) or delivery to your Seoul accommodation if your stay extends beyond the firing period. Hanji paper and natural dyeing projects are completed during the workshop and immediately available to take with you. Beyond the physical item, you'll receive documentation of the process including the specific techniques employed and historical context of your creation. We also provide care instructions tailored to your specific craft item and access to our online resource guide with recommended reading and videos to continue exploring your chosen craft tradition after returning home.",
      },
    ],
  },
  {
    title: "Modern Seoul Architecture Tour",
    description:
      "Explore Seoul's remarkable architectural transformation with a professional architect guide, visiting award-winning contemporary buildings, sustainable urban design projects, and revitalized historical districts that showcase Korea's innovative approach to urban development.",
    city: "Seoul",
    country: "South Korea",
    region: "Seoul Capital Area",
    images: [
      "/images/tours/seoul/dongdaemun-design-plaza.jpg",
      "/images/tours/seoul/seoullo-7017.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.6,
    tags: ["Architecture", "Modern", "Design"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "architectural",
    faqs: [
      {
        question: "What architectural styles will we see on this tour?",
        answer:
          "Seoul's architectural landscape represents a fascinating collision of hypermodernism with traditional Korean design principles. The tour explores multiple architectural movements: parametric design exemplified by Zaha Hadid's Dongdaemun Design Plaza with its fluid, computer-generated forms; sustainable urbanism in projects like Seoul's Cheonggyecheon Stream restoration that transformed a concrete-covered waterway into an ecological corridor; adaptive reuse illustrated by Seoullo 7017, which converted an abandoned highway overpass into an elevated linear park; and contemporary interpretations of traditional Korean forms seen in the National Museum of Korea's roof design echoing ancient temple architecture. Our architect guide contextualizes these styles within Korea's extraordinarily rapid urbanization—Seoul transformed from a war-damaged city to global metropolis in just 50 years, creating distinct architectural layers that document this acceleration from traditional hanok neighborhoods to brutalist structures of the economic miracle period (1970s-80s) to today's experimental forms that position Seoul as an architectural laboratory.",
      },
      {
        question: "How has Seoul's urban planning evolved over time?",
        answer:
          "Seoul's urban planning evolution represents one of history's most dramatic metropolitan transformations. The tour examines this evolution through three distinct phases: first, the traditional city designed according to Korean geomantic principles (pungsu-jiri) with mountains and rivers determining city layout; second, the modernization period following the Korean War when rapid industrialization prioritized functionality over aesthetics, producing high-density residential superblocks; and third, the current phase emphasizing quality of life, sustainability, and cultural identity. We'll discuss how contemporary Seoul actively reverses previous development approaches—removing highways rather than building them, daylight-ing buried streams, preserving neighborhoods previously slated for demolition, and implementing extensive pedestrianization. The tour highlights Seoul's innovative transit-oriented development model that created one of the world's most efficient public transportation networks. Our route includes visits to both successful urban interventions and controversial projects, prompting discussion about gentrification challenges, heritage preservation debates, and how Seoul balances development pressures with growing environmental consciousness.",
      },
      {
        question: "Who are the notable architects whose work we'll see?",
        answer:
          "The tour features buildings from world-renowned international architects who have shaped Seoul's contemporary landscape—Zaha Hadid's Dongdaemun Design Plaza, Rem Koolhaas' Seoul National University Museum of Art, and Mario Botta's Samsung Museum of Art—alongside equally significant works by Korean architects who synthesize global influences with distinctly Korean sensibilities. You'll learn about pioneering Korean modernists like Kim Swoo-geun, whose dramatic concrete structures established a Korean architectural identity during the nation's industrialization, and contemporary practitioners like Cho Min-suk whose work challenges conventional distinctions between architecture and landscape. The tour examines how Korea's architectural education system, which sends promising architects abroad before they return to practice domestically, creates a unique design ecosystem that continuously reinterprets international trends through local cultural lenses. We discuss how government initiatives like the Seoul Metropolitan Government's 'Seoul Architecture Festival' and various design competitions actively promote architectural innovation and public engagement with the built environment, positioning architecture as both cultural expression and economic development strategy.",
      },
      {
        question:
          "How does traditional Korean architecture influence modern design?",
        answer:
          "Modern Seoul architecture represents a fascinating dialogue between contemporary design practices and traditional Korean principles. Our tour identifies specific traditional concepts reinterpreted in modern contexts: 'borrowed scenery' (Champyeong) traditional garden techniques that frame mountain views are now applied in skyscraper positioning to preserve visual corridors to surrounding peaks; the traditional principle of 'in-between space' (Madang) manifests in contemporary public plazas and transitional zones that maintain the graduated threshold sequence characteristic of historical Korean buildings; and natural material authenticity from traditional wooden structures inspires honest material expression in modern concrete and steel. We'll examine how contemporary architects reference traditional Korean roof forms without resorting to simplistic pastiche—utilizing similar spatial principles while employing modern materials and construction techniques. The tour highlights buildings that successfully integrate historical references, like the National Museum of Korea's interpretation of traditional proportions at monumental scale, alongside projects that maintain traditional spatial concepts while appearing thoroughly contemporary, demonstrating how Korean architecture achieves continuity without resorting to superficial historicism.",
      },
    ],
  },
];

export default seoulTours;
