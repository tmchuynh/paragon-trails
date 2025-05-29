import { Tour } from "@/lib/interfaces/services/tours";
export const fijiTours: Tour[] = [
  {
    title: "Traditional Village & Kava Ceremony",
    description:
      "Experience authentic Fijian culture with a guided visit to a traditional village, participating in a sacred kava ceremony, enjoying indigenous performances, and learning about daily village life.",
    images: [
      "/images/tours/fiji/kava-ceremony.jpg",
      "/images/tours/fiji/village-life.jpg",
    ],
    duration: "6 hours",
    price: "$110",
    rating: 4.9,
    tags: ["Cultural", "Traditional", "Village"],
 
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Semisi Cikobia",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What should I wear when visiting the village?",
        answer:
          "Modest dress is respectful when visiting Fijian villages. Both men and women should cover shoulders and knees. We recommend wearing a sulu (sarong) which will be provided, and removing hats when in the village.",
      },
      {
        question: "Is the kava ceremony safe for everyone?",
        answer:
          "Yes, the kava ceremony is safe for most people. Kava is a traditional drink made from the root of the kava plant and is known for its relaxing properties. However, it is not recommended for pregnant or nursing women, or those with liver conditions. Please inform your guide of any health concerns.",
      },
      {
        question: "Can children participate in the kava ceremony?",
        answer:
          "Yes, children can participate in the kava ceremony, but they will be offered a non-alcoholic version made from coconut water. The ceremony is a cultural experience and children are welcome to observe and learn about Fijian traditions.",
      },
      {
        question:
          "What is the significance of the kava ceremony in Fijian culture?",
        answer:
          "The kava ceremony (yaqona) is a cornerstone of Fijian social and political life dating back centuries. It represents respect, community bonding, and connection with ancestors. When chiefs or important visitors arrive at a village, this formal ritual acknowledges social hierarchy and establishes relationships. The ceremony follows specific protocols: participants sit cross-legged in a circle, with the highest-ranking person receiving the first cup. The root is traditionally pounded, not ground, and mixed with water in a tanoa (wooden bowl). When offered kava, clap once before accepting, drink it in one motion, then clap three times while saying 'Bula!' (life/health). Beyond ceremonies, kava drinking serves as a nightly social activity where villagers gather to discuss community matters and strengthen bonds.",
      },
      {
        question: "How does the village governance system work in Fiji?",
        answer:
          "Fijian villages operate under a fascinating dual governance system that blends traditional and modern structures. Each village is led by a hereditary chief (Turaga ni Yavusa) whose position follows family lineage within the vanua (tribal land). The chief works alongside an elected village headman (Turaga ni Koro) who handles administrative matters and government liaison. Village councils (Bose Vakoro) meet regularly to make decisions through consensus, not majority vote. This governance system includes several hierarchical levels: the extended family unit (tokatoka), the clan (mataqali) that owns specific land parcels, and the tribe (yavusa). During your visit, you'll observe how this ancient system maintains social harmony while adapting to modern challenges. This governance structure has proven remarkably resilient, continuing to organize community life, land stewardship, and cultural preservation despite colonialism and modernization.",
      },
    ],
  },
  {
    title: "Coral Reef Conservation & Snorkeling",
    description:
      "Join marine biologists for a hands-on reef conservation experience, participating in coral planting and reef monitoring, followed by guided snorkeling in pristine protected waters.",
    images: [
      "/images/tours/fiji/coral-planting.jpg",
      "/images/tours/fiji/snorkeling.jpg",
    ],
    duration: "5 hours",
    price: "$135",
    rating: 4.8,
    tags: ["Marine Conservation", "Snorkeling", "Eco-friendly"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Dr. Ana Vuikadavu",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "Do I need to be a strong swimmer to participate?",
        answer:
          "Basic swimming ability is recommended, but you don't need to be a strong swimmer. Our guides provide thorough safety instructions, and flotation devices are available. The coral planting portion can be done in shallow, waist-deep water if preferred.",
      },
      {
        question: "What should I bring for the snorkeling portion?",
        answer:
          "Please bring swimwear, a towel, sunscreen (reef-safe), and a hat. We provide all snorkeling gear including masks, fins, and wetsuits if needed. You can also bring an underwater camera to capture the beautiful marine life.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children aged 6 and up. Children must be accompanied by an adult, and we provide child-sized snorkeling gear.",
      },
      {
        question:
          "Why are Fiji's coral reefs particularly significant for conservation?",
        answer:
          "Fiji's coral ecosystems represent one of the world's biodiversity hotspots, forming part of the 'Coral Triangle' region. These reefs harbor over 390 coral species and 1,200+ fish species—nearly twice the diversity found in Caribbean reefs. Beyond their ecological value, Fiji's reefs provide essential protection against coastal erosion and storm surge, while supporting approximately 70% of local livelihoods through fisheries and tourism. What makes these reefs scientifically significant is their demonstrated resilience to climate change—certain areas have maintained remarkable health despite rising ocean temperatures. Researchers are studying these resilient reef systems to understand adaptation mechanisms that might help coral survival worldwide. The conservation work you'll participate in contributes to a growing database monitoring this resilience and testing restoration techniques being adopted across the Pacific region.",
      },
      {
        question: "How does the coral planting process actually work?",
        answer:
          "The coral restoration process uses 'fragmentation'—a technique that harnesses corals' natural ability to reproduce asexually. During your participation, you'll assist with several fascinating steps in this process: First, you'll help collect small, healthy coral fragments (typically 3-5cm) from 'donor' corals that have demonstrated resilience. These fragments are attached to specialized structures made from environmentally-friendly materials using marine epoxy. You'll learn to identify optimal fragment placement that maximizes water flow and sunlight exposure. The structures are then carefully positioned in degraded reef areas where conditions support growth. This method accelerates reef recovery by 10-15 years compared to natural processes. What's particularly exciting is that these fragments maintain the genetic characteristics of their resilient parents, potentially creating more climate-resistant reef sections. The coral nurseries you'll work with have successfully grown over 10,000 coral fragments with 85% survival rates—significantly higher than global averages for restoration projects.",
      },
    ],
  },
  {
    title: "Island Hopping & Beach Picnic",
    description:
      "Explore Fiji's stunning islands on a private boat tour, visiting secluded beaches, snorkeling spots, and enjoying a gourmet picnic with local delicacies.",
    images: [
      "/images/tours/fiji/island-hopping.jpg",
      "/images/tours/fiji/beach-picnic.jpg",
    ],
    duration: "7 hours",
    price: "$180",
    rating: 5.0,
    tags: ["Island Hopping", "Snorkeling", "Luxury"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Litia Naisoro",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Do I need to know how to swim for this tour?",
        answer:
          "Basic swimming ability is recommended, but you don't need to be an expert. Our guides provide flotation devices and supervision for less confident swimmers.",
      },
      {
        question: "What should I bring for the beach picnic?",
        answer:
          "Please bring swimwear, sunscreen, a hat, and a towel. We provide all picnic supplies including a gourmet lunch featuring local Fijian dishes.",
      },
      {
        question: "Are there any age restrictions for this tour?",
        answer:
          "This tour is suitable for all ages. Children must be accompanied by an adult, and we provide life jackets for younger guests.",
      },
      {
        question: "How were Fiji's islands formed and why are they so diverse?",
        answer:
          "Fiji's archipelago was formed through fascinating geological processes over millions of years. The islands represent three distinct formation types: volcanic islands created by hotspot activity similar to Hawaii, limestone islands formed from ancient coral reefs that were uplifted by tectonic activity, and composite islands combining both processes. This diverse geology created remarkable variety between islands—you'll see dramatic differences in landscape, soil composition, and ecology even between neighboring islands. The Yasawa group we'll visit features predominantly volcanic origins with dramatic ridgelines and black sand beaches, while nearby Mamanuca islands showcase white sand beaches from coral limestone erosion. This geological diversity directly influenced human settlement patterns and resource availability. During our tour, you'll observe how different island formation types support distinct marine ecosystems and coastal features, creating the varied snorkeling experiences that make Fiji exceptional among Pacific destinations.",
      },
      {
        question:
          "What traditional navigation methods did Fijians use for island hopping?",
        answer:
          "Long before modern navigation tools, Fijian seafarers developed sophisticated wayfinding techniques passed through generations. As we sail between islands, you'll learn about these remarkable methods: reading ocean swells and wave patterns that indicate nearby land masses; identifying star paths using the Southern Cross and other celestial markers for direction; recognizing cloud formations that gather differently over islands; observing bird flight patterns (particularly the noddies and frigatebirds) that return to land at specific times; and using mental maps of underwater reef structures. Traditional Fijian canoes (drua) were technological marvels—double-hulled vessels capable of carrying 100+ people at speeds reaching 15 knots. The sailors referred to stars as 'eyes of the ancestors' guiding them home. This navigation heritage connected Fiji to a broader Pacific trade network spanning thousands of miles. Some of our boat captains come from families that maintain these traditional navigation skills alongside modern methods, representing living cultural heritage that adapted sophisticated environmental knowledge developed over thousands of years.",
      },
    ],
  },
  {
    title: "Fiji Waterfall Trek & Natural Pools",
    description:
      "Journey through lush rainforest to discover Fiji's hidden waterfalls and pristine swimming holes, learning about indigenous medicinal plants and traditional land management practices along the trail.",
    images: [
      "/images/tours/fiji/waterfall-trek.jpg",
      "/images/tours/fiji/natural-pools.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Hiking", "Waterfalls", "Nature"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Mosese Vulakoro",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult is the hiking portion of this tour?",
        answer:
          "This moderate trek covers approximately 5km (3 miles) round-trip with 200 meters of elevation gain. The trail includes some steeper sections, stream crossings, and uneven terrain that can be slippery when wet. Most reasonably fit people without serious mobility issues can complete this trek comfortably. We take frequent breaks to learn about the forest ecosystem and local plants. For those concerned about difficulty, we offer walking sticks and our guides are trained to assist throughout the journey.",
      },
      {
        question: "What should I bring for the waterfall trek?",
        answer:
          "We recommend wearing swimwear under lightweight, quick-dry clothing, and bringing water shoes or sandals with secure straps (not flip-flops) that can get wet. Also bring a towel, hat, sunscreen, insect repellent, a reusable water bottle, and a dry bag or plastic bag for electronics. We provide a light backpack if needed, along with walking sticks and a shared first aid kit. A change of clothes for after swimming is recommended if you're sensitive to remaining in damp clothing.",
      },
      {
        question: "What makes Fiji's rainforest ecosystem unique?",
        answer:
          "Fiji's forests represent an evolutionary marvel—isolated island ecosystems that developed separately from continental landmasses, creating high endemism rates (species found nowhere else). Along our trek, you'll encounter fascinating evolutionary adaptations: flowering plants with specialized pollination relationships with native birds; ferns that serve as natural barometers predicting weather changes; and trees with buttress roots forming natural staircases on steep terrain. Fiji's rainforests contain over 1,500 plant species with 30% occurring naturally only in these islands. The watersheds you'll hike through epitomize 'ridge-to-reef' ecology—demonstrating how healthy forests directly influence downstream coral reef health by preventing sedimentation and filtering water. This interconnection informed traditional Fijian land management practices for centuries before modern science confirmed these relationships. The forest trail passes through areas once cultivated using sustainable agroforestry methods, and your guide will point out ancient terracing systems almost invisible to untrained eyes.",
      },
      {
        question: "How do local communities protect these waterfall areas?",
        answer:
          "The waterfalls we visit are protected through a fascinating community conservation model called Vanua—an indigenous concept connecting people, land, and cultural identity. The local mataqali (clan) serves as traditional stewards of these watersheds under a system that predates colonial contact. Today, this governance continues through officially recognized indigenous protected areas where clans manage access and establish conservation regulations based on both ecological knowledge and spiritual connections to ancestral lands. The conservation fees included in your tour directly support community ranger programs that monitor water quality, maintain trails, and conduct species inventories. Elders pass ecological knowledge to younger guides through apprenticeships, preserving traditional beliefs about water spirits (via) that inhabit certain pools—beliefs that historically limited resource extraction near critical water sources. Your visit helps demonstrate economic value in conserving these areas intact rather than converting them to agricultural uses. This community-based approach has become a model studied by international conservation organizations as an alternative to top-down protected area management.",
      },
    ],
  },
  {
    title: "Fijian Cooking Masterclass & Market Tour",
    description:
      "Discover the secrets of authentic Fijian cuisine with a local chef, exploring vibrant produce markets before preparing traditional dishes in a hands-on cooking class using earth ovens and traditional techniques.",
    images: [
      "/images/tours/fiji/cooking-class.jpg",
      "/images/tours/fiji/market-tour.jpg",
    ],
    duration: "5 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Cooking", "Culinary", "Market"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Salome Waqa",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Do I need previous cooking experience?",
        answer:
          "No prior cooking experience is necessary. Our class is designed for participants of all skill levels, from beginners to experienced home cooks. Chef Salome guides you through each step of the cooking process with clear demonstrations before you try the techniques yourself. The focus is on learning traditional methods and understanding the cultural significance of Fijian cuisine rather than technical perfection.",
      },
      {
        question: "What dishes will we learn to prepare?",
        answer:
          "You'll learn to create a complete traditional Fijian meal including: kokoda (fresh fish marinated in coconut cream and lime), rourou (taro leaf) and coconut soup, lovo-style chicken (earth oven cooking), cassava and taro root preparation, and vakalolo (sweet coconut pudding with cassava). Vegetarian alternatives are available for each dish. The class emphasizes authentic cooking methods including earth oven preparation and traditional coconut cream extraction techniques rather than modernized shortcuts.",
      },
      {
        question:
          "What makes Fijian cuisine distinct from other Pacific Island food traditions?",
        answer:
          "Fijian cuisine represents a fascinating culinary fusion reflecting the archipelago's multicultural history. Traditional Fijian cooking differs from other Pacific cuisines through several distinctive elements: extensive use of taro leaf (rourou) preparations absent in eastern Polynesia; specialized earth oven (lovo) techniques using specific volcanic stones that retain heat differently than other Pacific ovens; and unique fermentation methods for preserving seasonal abundance. Following 19th century Indian migration, Indo-Fijian fusion created distinctive curry variations using local ingredients like duruka (Fijian asparagus) and rou rou leaves. The cuisine varies regionally—coastal communities emphasize seafood preservation techniques while inland villages developed specialized root crop cooking methods. During colonization, European and Chinese culinary influences added new dimensions, yet traditional cooking techniques remained remarkably intact. Your cooking class explores this living culinary heritage that continues evolving while maintaining core techniques that have sustained Fijian communities for centuries.",
      },
      {
        question: "How does the traditional earth oven (lovo) cooking work?",
        answer:
          "The lovo earth oven represents an ingenious cooking technology developed over thousands of years in the Pacific. During your class, you'll participate in preparing this underground oven: First, we create a shallow pit lined with specific volcanic stones selected for their heat retention properties. These stones are heated in a wood fire for 1-2 hours until extremely hot. Food is wrapped in banana leaves (never aluminum foil, which affects flavor) and precisely layered—dense root vegetables at the bottom nearest the stones, meats in the middle, and delicate items on top. Everything is covered with additional banana leaves, burlap sacks soaked in water, and finally a layer of soil to seal in heat and steam. This creates a pressurized environment that simultaneously steams and roasts food over 2-3 hours, producing distinctively tender texture and smoky flavor impossible to replicate with modern cooking methods. The lovo isn't merely a cooking technique but a communal activity bringing families together for preparation and creating flavors central to Fijian cultural identity. Modern Fijian chefs trained internationally often return to these traditional methods for their signature dishes.",
      },
    ],
  },
  {
    title: "Fiji Firewalking Ceremony & Cultural Show",
    description:
      "Witness the awe-inspiring traditional firewalking ceremony performed by Beqa island firewalkers, followed by a cultural performance showcasing diverse Pacific dances and a traditional lovo feast.",
    images: [
      "/images/tours/fiji/firewalking.jpg",
      "/images/tours/fiji/cultural-dance.jpg",
    ],
    duration: "4 hours",
    price: "$130",
    rating: 4.7,
    tags: ["Cultural", "Performance", "Traditional"],
 
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Ratu Seru",
    tourCategoryId: "cultural",
    faqs: [
      {
        question:
          "Is the firewalking ceremony authentic or staged for tourists?",
        answer:
          "The ceremony features genuine firewalkers from Beqa Island where this tradition originated. While adapted for visitor viewing with scheduled performances, the practitioners undergo the same spiritual preparations and perform the actual feat of walking across stones heated to over 600°C with bare feet. The ceremony maintains key cultural protocols and is performed by initiated members of specific clans who hold this tradition as part of their cultural heritage. Our program includes educational components explaining the significance beyond the spectacle, with senior firewalkers sharing insights about their training and spiritual practices.",
      },
      {
        question:
          "What is the history and spiritual significance of Fijian firewalking?",
        answer:
          "Firewalking (vilavilairevo) originates from Beqa Island and carries profound spiritual significance beyond mere entertainment. According to oral tradition, a warrior ancestor received this ability from a spirit god after sparing the life of an eel god. The practice remains the exclusive cultural property of specific Sawau tribal lineages who maintain strict protocols around its performance. Before the ceremony, firewalkers observe period of sexual abstinence and avoid coconut products for 30 days. They undergo ritual preparation led by a spiritual leader (bete) who communicates with ancestral spirits through kava ceremonies. Contrary to scientific explanations focusing only on physics, practitioners believe their protection comes from spiritual power maintained through adherence to these protocols. Throughout Fiji's history, Christian missionaries attempted to suppress firewalking as pagan practice, yet it survived through careful guardianship by specific families. Today, it represents a living tradition connecting contemporary practitioners to ancestral knowledge while demonstrating Fiji's spiritual heritage.",
      },
      {
        question:
          "How do the different dance styles in the cultural show vary across Fiji's regions?",
        answer:
          "The performance showcases the remarkable diversity of Fijian dance traditions that evolved differently across island groups. You'll witness several distinct styles: the meke, indigenous Fijian dance combining sitting and standing movements with chanting that tells historical or mythological stories; the graceful seasea from Lau province showing Polynesian influence with flowing hand movements representing ocean waves and bird flights; warrior meke demonstrating ancient battle techniques with spears and clubs; and fan dances showing regional variations between eastern and western Fiji. Each dance features distinctive costuming traditions—western regions use more tapa (bark cloth) ornamentation while eastern islands incorporate more plant materials and shells. The performance includes both ancient dances preserved through generations and contemporary compositions addressing modern themes while maintaining traditional movement vocabulary. Musicians use percussive instruments including lali (wooden drum), derua (bamboo tubes of various lengths), and body percussion creating complex polyrhythms unique to specific regional traditions.",
      },
      {
        question: "Can we take photographs during the firewalking ceremony?",
        answer:
          "Photography is permitted during specific portions of the ceremony but prohibited during certain sacred preparations and ritual moments. Our guides will clearly indicate when photography is appropriate. We request that flash photography be avoided during the actual firewalking as it can distract performers engaged in a physically dangerous and spiritually significant practice. When photographs are permitted, we encourage respectful distance rather than intrusive close-ups. The performers have consented to being photographed during the public portion of the ceremony, and a portion of your tour fee directly compensates them for sharing their cultural tradition. If you capture exceptional images, we can arrange to share digital copies with the performers' families, who appreciate having documentation of their cultural heritage.",
      },
    ],
  },
  {
    title: "Yasawa Islands Adventure & Cave Swimming",
    description:
      "Sail to the stunning Yasawa Islands for a day of adventure, including swimming through limestone caves with hidden chambers, snorkeling vibrant reefs, and relaxing on pristine white sand beaches.",
    images: [
      "/images/tours/fiji/yasawa-islands.jpg",
      "/images/tours/fiji/cave-swimming.jpg",
    ],
    duration: "Full day",
    price: "$225",
    rating: 4.9,
    tags: ["Adventure", "Caves", "Islands"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Jone Vatukela",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How do we access the swimming caves?",
        answer:
          "Accessing the caves involves swimming approximately 30 meters through a narrow water entrance that opens into spectacular cathedral-like chambers. The cave entrance requires swimming underwater briefly (about 5 seconds) to pass through a short tunnel before emerging in the inner chambers. While this sounds challenging, our guides provide thorough instruction and flotation support, making it accessible for reasonably confident swimmers. For those uncomfortable with the underwater passage, we offer alternative visits to more accessible cave systems nearby that don't require underwater swimming but still provide impressive natural formations.",
      },
      {
        question: "What should I bring for the full-day island adventure?",
        answer:
          "Pack a day bag with swimwear, a change of clothes, towel, sun protection (hat, sunscreen, rashguard/shirt), sunglasses with strap, water shoes or sandals, a refillable water bottle, and any personal medications. Optional items include an underwater camera, light jacket for boat transit, and dry bag for electronics. We provide all snorkeling equipment, lunch, water, and boat safety gear. We recommend wearing swimwear under your clothes for convenience and bringing cash for optional purchases at island villages.",
      },
      {
        question: "How were these limestone caves formed?",
        answer:
          "The limestone caves we'll explore represent fascinating geological formations created through a process spanning millions of years. Their creation began during the Miocene epoch (roughly 15 million years ago) when these islands were submerged coral reefs. As tectonic activity gradually lifted these limestone platforms above sea level, rainwater—naturally acidic from absorbing carbon dioxide—percolated through the porous limestone, dissolving channels through chemical weathering. This created the dramatic stalactites and stalagmites formed by mineral-rich water deposits. The caves feature distinctive blue illumination caused by light refracting through the water entrance, creating what scientists call 'Rayleigh scattering' (the same phenomenon that makes the sky blue). The cave system includes multiple chambers formed during different sea level periods, with visible tide marks showing historical ocean levels. Specialized cave-adapted creatures inhabit the darker recesses, including rare blind shrimp found nowhere else on Earth. These caves continue actively forming today—a living geological process you're witnessing during your visit.",
      },
      {
        question:
          "What cultural significance do the Yasawa Islands have in Fiji?",
        answer:
          "The Yasawa archipelago holds special cultural significance within Fiji's history and mythology. These islands were historically known as 'forbidden islands'—restricted to outside contact until the 1950s, helping preserve distinctive cultural practices. According to Fijian legends, the first canoe of original settlers landed in the Yasawas, making them the ancestral homeland in Fiji's origin stories. The islands feature prominently in traditional chants detailing navigation pathways used by ancient seafarers. Linguistically unique, Yasawan dialects contain terms and pronunciations considered closest to ancient proto-Fijian language. The cave systems we visit were traditionally used for three distinct cultural purposes: as burial chambers for high-ranking chiefs, creating sacred spaces where ancestors' spirits were believed to reside; as refuge caves during tribal conflicts, with hidden chambers protecting villagers; and as ceremonial sites where young men underwent initiation rituals marking transition to adulthood. During periods of tribal warfare, the caves' underwater entrances provided strategic defense against rival island groups. Today's Yasawan communities maintain traditional ownership of these sites while sharing them with visitors through managed tourism that supports local economies while preserving cultural heritage.",
      },
    ],
  },
  {
    title: "Fijian Wellness Retreat & Traditional Healing",
    description:
      "Experience traditional Fijian wellness practices in a tranquil setting, including herbal medicine demonstrations, traditional massage techniques, meditation with village elders, and natural skincare preparation using local ingredients.",
    images: [
      "/images/tours/fiji/wellness-retreat.jpg",
      "/images/tours/fiji/traditional-healing.jpg",
    ],
    duration: "6 hours",
    price: "$160",
    rating: 4.7,
    tags: ["Wellness", "Healing", "Retreat"],
 
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Mere Tuisawau",
    tourCategoryId: "wellness",
    faqs: [
      {
        question:
          "What types of traditional healing practices will we experience?",
        answer:
          "Our wellness retreat introduces you to authentic Fijian healing traditions practiced for generations. You'll experience bobo massage—a distinctive pressure-point technique using coconut oil infused with medicinal plants; herbal steam treatment (kuvui) where medicinal leaves are heated to release essential oils; and traditional scrub therapy using specially prepared coconut husk and volcanic sand mixtures. The program includes both demonstrations and participatory elements where you'll receive personalized treatments. These practices are conducted by certified practitioners who have completed traditional apprenticeships with master healers while also meeting modern wellness standards.",
      },
      {
        question: "Are the treatments safe and hygienic?",
        answer:
          "Yes, our wellness program carefully balances traditional methods with modern hygiene standards. All practitioners are certified in both traditional healing and modern health safety protocols. Plant materials are carefully sourced from organic gardens and prepared using both traditional knowledge and contemporary understanding of botanical properties. While maintaining authentic practices, we've adapted certain elements to ensure health safety—for example, using purified water in preparations and maintaining stringent sanitation standards for all equipment and surfaces. If you have specific health concerns, allergies, or sensitivities, please inform us in advance so our practitioners can customize your experience appropriately.",
      },
      {
        question:
          "How does Fiji's traditional medicine system differ from other Pacific healing traditions?",
        answer:
          "Fiji's indigenous medicine (vakatevoro) represents a sophisticated ethnobotanical tradition with several distinctive elements compared to other Pacific systems. While sharing some fundamentals with Polynesian and Melanesian healing practices, Fijian medicine uniquely emphasizes specialized healer roles—different practitioners focus exclusively on particular conditions or treatment modalities rather than practicing generally. The tradition features remarkable botanical specialization, utilizing over 300 documented medicinal plants categorized by specific therapeutic applications. Fijian healers historically developed a distinctive diagnostic method based on pulse patterns and visible changes in the tongue's appearance (similar to aspects of Traditional Chinese Medicine, though developed independently). The system incorporates complex massage protocols (bobo) that differ from other Pacific traditions by focusing on specific energy pathways corresponding to organ systems. Throughout colonization and missionary influence, these practices were maintained through secret knowledge transmission within specific families. Modern scientific research has validated numerous traditional remedies—the makita plant used for centuries to treat infections contains compounds now recognized for antimicrobial properties, while the totodro shrub traditionally used for pain contains scientifically confirmed anti-inflammatory compounds.",
      },
      {
        question:
          "What is the philosophy behind Fijian concepts of wellness and healing?",
        answer:
          "Fijian wellness philosophy centers on the concept of bula—a holistic understanding of wellbeing that transcends physical health to encompass spiritual, communal, and environmental harmony. Traditional healing is founded on several core principles: First, illness often results from imbalance rather than external pathogens alone—particularly imbalances in relationships with community, ancestors, or natural environments. Second, healing requires addressing the whole person rather than isolated symptoms, with treatments engaging physical, spiritual, and social dimensions simultaneously. Third, wellness depends on maintaining proper relationships and responsibilities within one's community and natural surroundings—personal health is inseparable from collective wellbeing. The healing traditions incorporate spirituality through practiced connections with ancestors (which Christian influences later modified but never fully displaced). During our retreat, you'll learn about sautu—the Fijian concept of complete wellness that encompasses physical health, spiritual peace, abundant resources, and harmonious social relationships. This interconnected understanding of wellness shaped Fiji's traditional healthcare system long before Western holistic health movements recognized similar principles.",
      },
    ],
  },
  {
    title: "Authentic Fiji Farm Experience & Sustainable Agriculture",
    description:
      "Spend a day on a working Fijian farm learning traditional agricultural practices, harvesting tropical fruits and vegetables, participating in farm-to-table cooking, and understanding sustainable farming methods that have sustained island communities for generations.",
    images: [
      "/images/tours/fiji/farm-experience.jpg",
      "/images/tours/fiji/harvest-activities.jpg",
    ],
    duration: "6 hours",
    price: "$90",
    rating: 4.8,
    tags: ["Agriculture", "Sustainability", "Hands-on"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Tomasi Vulagi",
    tourCategoryId: "educational",
    faqs: [
      {
        question: "What farming activities will we participate in?",
        answer:
          "The farm experience includes hands-on participation in seasonal activities that may include harvesting root crops like taro, yams, or cassava; picking tropical fruits such as papaya, soursop, or seasonal citrus; learning traditional planting methods using lunar calendar timing; practicing husking coconuts using traditional tools; and helping prepare a farm-to-table meal using the day's harvest. Activities are adjusted based on agricultural seasons and current farm needs. All activities are optional, and you're welcome to participate at your comfort level—from observation to full hands-on involvement.",
      },
      {
        question: "How physically demanding is the farm experience?",
        answer:
          "The experience involves moderate physical activity including walking on uneven farm terrain, bending to harvest crops, and basic food preparation. The pace is relaxed, and our farmer hosts adapt activities to accommodate different physical abilities. There are shaded rest areas throughout the farm, and we take regular breaks with refreshments. The experience is designed to be engaging rather than strenuous, though certain optional activities like coconut tree climbing demonstrations are more physically demanding.",
      },
      {
        question:
          "What traditional agricultural techniques make Fijian farming unique?",
        answer:
          "Fijian agriculture represents one of the world's most sophisticated traditional farming systems developed for island sustainability. During your experience, you'll observe several distinctive practices: The vuci system—ingenious terraced wetland cultivation that maintains water flow while building soil fertility through strategic plant associations. Complex intercropping patterns where specific plant combinations deter pests naturally while maximizing limited space—a practice that predates modern companion planting by centuries. Magiti planning—cultivating crops with staggered maturation timeframes to ensure continuous harvests despite seasonal changes. Traditional soil classification identifying 11 distinct soil types with specific crops matched to each. Agricultural timing follows vula vakaviti (the traditional lunar calendar) with specific planting activities corresponding to moon phases—modern research has validated many of these traditions by confirming relationships between lunar cycles and plant germination rates. Perhaps most remarkable is the traditional seed selection system where farmers maintain agricultural biodiversity by preserving varietals with different drought, flood, and disease resistances as climate insurance—a practice now recognized by international agricultural organizations as vital for food security.",
      },
      {
        question:
          "How are traditional farming methods being adapted to address modern challenges?",
        answer:
          "The farm demonstrates fascinating adaptations blending traditional knowledge with contemporary challenges. You'll observe several innovative approaches: Traditional crop rotation and intercropping systems being formally documented through university partnerships to quantify their effectiveness against commercial monocropping. Ancient water management techniques being expanded to address increasing drought frequency due to climate change. Indigenous pest management using specific companion plants and botanical preparations now being validated through scientific testing and refined for changing pest patterns. Solar-powered irrigation systems complementing traditional water channeling methods. Community seed banks preserving heritage crop varieties with genetic traits increasingly valuable as climate patterns shift. The farm participates in a climate adaptation network where traditional ecological knowledge is being systematically applied to emerging environmental challenges. This living laboratory demonstrates how indigenous agricultural wisdom, developed over thousands of years of island sustainability, offers practical solutions to contemporary food security challenges. The farming family shares both traditional practices learned from their ancestors and innovations they've developed in response to changing environmental and economic conditions.",
      },
    ],
  },
  {
    title: "Sigatoka River Safari & Rural Village Visit",
    description:
      "Journey upriver on an exciting jet boat safari through the scenic Sigatoka Valley, visiting rural villages seldom seen by tourists, where you'll participate in traditional ceremonies and experience authentic countryside hospitality.",
    images: [
      "/images/tours/fiji/river-safari.jpg",
      "/images/tours/fiji/rural-village.jpg",
    ],
    duration: "7 hours",
    price: "$170",
    rating: 4.9,
    tags: ["Adventure", "Cultural", "River"],
 
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Samu Tagivetaua",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How exciting is the jet boat portion of the tour?",
        answer:
          "The jet boat experience offers genuine adventure with 360-degree spins, moderate-speed straightaways, and splashy maneuvers through shallow sections of the river. The 26km journey includes both exciting sections and calmer stretches allowing you to enjoy the scenery. While thrilling, the experience is designed to be accessible rather than extreme—appropriate for most participants including families with children (minimum age 4). Our certified boat captains adjust the intensity based on passenger comfort and water conditions. The boat design allows for safe navigation in water as shallow as 4 inches while providing stable seating with secure handholds for passengers during more dynamic maneuvers.",
      },
      {
        question:
          "What cultural protocols should I be aware of when visiting rural villages?",
        answer:
          "Village visits involve important cultural protocols we'll prepare you for before arrival. You'll participate in the sevusevu ceremony where a symbolic gift of kava is presented to the village chief or representative, acknowledging their traditional land authority. Women should wear skirts or dresses covering the knees (we provide sulus/wraps if needed), and everyone should remove hats/sunglasses when meeting the chief. Photography is generally welcomed, but we'll advise specific situations where it might be inappropriate. You'll be seated on mats during certain ceremonies, so practicing sitting cross-legged or in a comfortable position that avoids pointing feet toward others is helpful. These protocols aren't merely for tourists—they're observed by Fijians themselves when visiting villages outside their own, representing important cultural values of respect and proper relationship acknowledgment.",
      },
      {
        question: "Why is the Sigatoka Valley called Fiji's 'Salad Bowl'?",
        answer:
          "The Sigatoka Valley earned its nickname as Fiji's 'Salad Bowl' due to its extraordinary agricultural productivity—producing over 70% of Fiji's fresh produce. This fertile river valley represents a remarkable microclimate within Fiji's tropical environment, with distinct advantages for agriculture: The valley's rain shadow location receives less rainfall than coastal areas, creating ideal growing conditions for specific crops. The river provides consistent irrigation water while depositing nutrient-rich sediment during seasonal flooding—similar to the natural fertilization system of the historic Nile Valley. The surrounding hills create temperature variation beneficial for certain crops, while providing natural erosion control when maintained with traditional conservation practices. Indigenous knowledge developed specific farming techniques optimized for different sections of the valley—with distinct approaches for the upper, middle, and lower valley based on soil and microclimate differences. What you'll observe is a fascinating agricultural ecosystem combining traditional Fijian crops like taro and cassava with commercial vegetable production introduced during colonial periods—all adapted to specific valley microclimates through generations of farmer innovation.",
      },
      {
        question:
          "How has the river shaped the history and culture of the region?",
        answer:
          "The Sigatoka River represents far more than a geographical feature—it has fundamentally shaped the region's history, settlement patterns, and cultural development. Historically, the river served as the primary transportation route before modern roads, with distinctive longboats developed for its specific conditions. Traditional settlements positioned strategically along the river developed specialized cultural practices reflecting their river relationship—with distinct pottery traditions emerging based on clay deposits found in different river sections. The river dictated historical tribal territories and defense systems, with villages situated to control key crossing points. During your journey, you'll see how different sections of the river host villages with distinct dialects and cultural practices despite their proximity. Archaeological sites along the riverbanks reveal one of the Pacific's oldest continuous human habitation sequences dating back 3,000+ years. During the colonial period, the river facilitated inland expansion of European influence while simultaneously providing refuge areas where traditional practices continued undisturbed in more remote tributaries. Today's riverside communities maintain spiritual connections to the river through ceremonial practices and origin stories that recognize the waterway as the region's lifeblood rather than merely a physical feature.",
      },
    ],
  },
  {
    title: "Coral Coast Snorkeling & Marine Conservation",
    description:
      "Explore the vibrant coral reefs of Fiji's Coral Coast with a guided snorkeling tour, learning about marine conservation efforts and the unique biodiversity of this UNESCO World Heritage site.",
    images: [
      "/images/tours/fiji/coral-coast-snorkeling.jpg",
      "/images/tours/fiji/marine-conservation.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Snorkeling", "Marine Life", "Conservation"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Litia Naisoro",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What marine species can we expect to see?",
        answer:
          "The Coral Coast hosts one of the world's most biodiverse coral reef ecosystems, home to over 1,500 species of fish, 400+ coral species, and numerous invertebrates. During your snorkeling tour, you may encounter colorful parrotfish, butterflyfish, clownfish (anemonefish), angelfish, and various wrasses. The reefs also support larger species like reef sharks, sea turtles, and occasional manta rays. Our guides are trained marine biologists who will help identify species and explain their ecological roles. The reefs' health has improved significantly due to local conservation efforts—many areas previously damaged by overfishing or pollution are now recovering with vibrant coral growth and abundant marine life.",
      },
      {
        question:
          "How does this tour contribute to marine conservation efforts?",
        answer:
          "Your snorkeling tour directly supports ongoing marine conservation initiatives in the Coral Coast region. A portion of your fee funds local community-led projects focused on reef restoration, sustainable fishing practices, and environmental education programs. These initiatives include establishing no-take zones where fishing is prohibited to allow fish populations to recover; training local fishermen in sustainable practices that reduce bycatch; conducting regular reef monitoring surveys to track health indicators; and engaging schools in marine education programs that foster stewardship among future generations. By participating in this tour, you're helping demonstrate the economic value of preserving natural resources rather than exploiting them unsustainably.",
      },
      {
        question: "What safety measures are in place for snorkeling?",
        answer:
          "Safety is our top priority during snorkeling tours. All participants receive a thorough briefing on snorkeling techniques, safety protocols, and marine life awareness before entering the water. We provide high-quality snorkeling gear including masks, fins, and flotation devices. Our guides are trained in first aid and CPR, with emergency equipment available on the boat. The tour operates in small groups to ensure personalized attention and safety monitoring. We also check weather and water conditions before departure to ensure safe snorkeling environments. If you have any specific concerns or medical conditions, please inform us in advance so we can accommodate your needs appropriately.",
      },
    ],
  },
];

export default fijiTours;
