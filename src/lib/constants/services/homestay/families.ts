import { HomestayLocation } from "@/lib/interfaces/people/homestay";

export const homestayHeritageLocations: HomestayLocation[] = [
  {
    city: "Kyoto",
    country: "Japan",
    description:
      "Step into Japan's cultural heart in traditional machiya-style homes, where centuries of history are preserved in every detail. These elegant wooden townhouses feature sliding paper doors, tranquil inner gardens, and tatami rooms that have hosted generations of artisans and merchants. Your stay includes participation in authentic tea ceremonies conducted with rituals unchanged for centuries, calligraphy lessons using traditional techniques, and seasonal kaiseki meals that showcase Kyoto's refined culinary heritage. Located in historic neighborhoods where geisha still practice their arts, these homes offer a rare opportunity to experience the living traditions of Japan's former imperial capital beyond what typical tourists encounter.",
    hosts: [
      {
        name: "The Nakamura Family",
        languages: ["Japanese", "English"],
        background:
          "The Nakamura family has preserved the art of traditional kimono-making for three generations, with techniques dating back to the Edo period. Master artisan Hiroshi Nakamura learned the craft from his father at age 12 and now works alongside his wife Mizuki and their adult daughter Saki. Their workshop, attached to their 140-year-old machiya home, houses antique silk-screening equipment and natural dye recipes closely guarded as family secrets. The Nakamuras regularly showcase their pieces at prestigious exhibitions and have received national recognition for their preservation of disappearing yuzen painting techniques. Their home displays family heirlooms including samurai-era kimono fragments and Meiji-period textile implements, while guests are invited to observe the family's meticulous craftsmanship through every stage of the kimono-making process.",
        maxGuests: 4,
        curfew: "10:00 PM",
        guestPolicy:
          "Quiet hours strictly observed after curfew. No outside guests allowed. ",
        houseRules: [
          "Shoes must be removed indoors.",
          "No smoking inside the house.",
          "Participation in morning tea ceremony is encouraged.",
        ],
      },
      {
        name: "Ayaka Fujimoto",
        languages: ["Japanese", "English"],
        background:
          "Ayaka Fujimoto, a certified tea master with over 25 years of practice in the Urasenke school tradition, has dedicated her life to the perfectionism and mindfulness of the Japanese tea ceremony. After training under renowned tea masters in both Kyoto and Tokyo, she spent five years studying in a Buddhist temple to deepen her spiritual understanding of the practice. Her restored century-old home features a purpose-built tea room with a sunken hearth and seasonal alcove displays that change monthly to reflect traditional themes. Ayaka's ceremonies incorporate antique utensils passed down through generations, including bowls from celebrated Edo-period potters. Having taught the tea ceremony to visiting dignitaries and cultural ambassadors, she offers guests an extraordinary connection to this profound cultural tradition, explaining the philosophical concepts of harmony, respect, purity, and tranquility that underpin every precisely choreographed movement.",
        maxGuests: 2,
        curfew: "9:30 PM",
        guestPolicy: "Guests must check in by 6:00 PM. No guests under 12.",
        houseRules: [
          "No photography during ceremonies without permission.",
          "Respect private quarters and meditation spaces.",
          "Traditional attire provided for in-home events must be worn respectfully.",
        ],
      },
      {
        name: "The Takeda Household",
        languages: ["Japanese", "English"],
        background:
          "The Takeda family maintains one of Kyoto's oldest private gardens, designed by a master landscape artist in 1847 and featuring rare plant specimens, stone arrangements representing mountains and rivers, and a ceremonial tea house overlooking a koi pond. Their historic home near Gion was once a meeting place for intellectuals and artists during the Meiji Restoration and still contains original calligraphy and artwork from this pivotal period in Japanese history. Current household head Kazuo Takeda, a retired botany professor, conducts seasonal garden tours explaining the symbolism behind each carefully placed element and the horticultural techniques that have preserved this living artwork through numerous natural disasters and historical upheavals. His wife Emiko, an accomplished practitioner of ikebana flower arrangement, offers demonstrations of this traditional art form using seasonal blooms harvested from their garden according to sustainable methods established by her ancestors.",
        maxGuests: 5,
        curfew: "11:00 PM",
        guestPolicy: "Small pets allowed. No loud music.",
        houseRules: [
          "Guests may not enter the garden before 8:00 AM or after 8:00 PM.",
          "Breakfast served promptly at 8:30 AM.",
          "Children must be supervised at all times.",
        ],
      },
    ],
  },
  {
    city: "Udaipur",
    country: "India",
    description:
      "Experience Rajasthan's regal heritage in majestic lakeside havelis that offer glimpses into India's royal past. These meticulously restored traditional mansions feature ornate marble balconies, intricate mirror mosaics, and peaceful courtyards where peacocks roam freely. Each stay includes immersion in authentic Rajasthani culture through morning puja ceremonies, turban-tying demonstrations, and classical music performances under the stars. Located on the shores of Lake Pichola with breathtaking views of the floating Lake Palace, these historic homes have housed generations of aristocracy and now welcome guests seeking deeper connections to the 'Venice of the East.' The families' personal stories of Rajput history and Mewar traditions reveal layers of cultural richness typically hidden from ordinary travelers.",
    hosts: [
      {
        name: "The Singh Pariwar",
        languages: ["Hindi", "English"],
        background:
          "The Singh Pariwar traces their ancestry directly to the Sisodia clan that ruled the Kingdom of Mewar for over 1200 years, with family records documenting their lineage back to the 8th century. Their magnificent haveli, built in 1780 by their ancestor who served as chief minister to the Maharana, has remained in the family through British colonial rule and into modern India. The home showcases priceless artifacts including ceremonial swords awarded by Mughal emperors, royal portraiture, and hand-illustrated manuscripts detailing family achievements. Current head of household Raja Vikram Singh, formerly a diplomat before returning to preserve his heritage, leads evening discussions on Rajasthan's complex history and the challenges of maintaining aristocratic traditions in contemporary India. His wife Divya, trained in traditional temple dance, organizes cultural programs featuring local musicians playing rare instruments specific to the Mewar region. Their lakeside courtyard, where formal receptions for visiting dignitaries were once held, now serves as a magical setting for dinner beneath centuries-old banyan trees.",
        maxGuests: 6,
        curfew: "11:00 PM",
        guestPolicy:
          "Formal attire required for evening meals. No unregistered guests.",
        houseRules: [
          "Photography inside royal quarters prohibited.",
          "No alcohol in public courtyards.",
          "Respect traditional customs during hosted rituals.",
        ],
      },
      {
        name: "Manish & Rekha Sharma",
        languages: ["Hindi", "English"],
        background:
          "Manish and Rekha Sharma represent the beautiful convergence of Rajasthan's diverse musical traditions, with Manish descended from court musicians who performed for the Maharanas of Udaipur and Rekha coming from a lineage of folk performers from the rural Mewar region. Their 19th-century haveli has been converted into a living museum of musical heritage, housing over 50 traditional instruments including some that are now played by only a handful of people worldwide. The couple has traveled extensively documenting disappearing musical traditions, producing award-winning recordings of Rajasthani folk songs, and training a new generation of performers. Their evening gatherings incorporate storytelling about the historical context of each performance, explaining how different musical styles evolved to reflect the desert environment, royal patronage, and spiritual devotion. Guests are invited to participate in informal workshops to learn basic techniques on instruments like the ravanhatha (ancient violin) or dholak (hand drum) while Rekha demonstrates the intricate relationship between music and traditional dance forms.",
        maxGuests: 3,
        curfew: "10:00 PM",
        guestPolicy: "Music-loving guests welcome. Noise-sensitive neighbors.",
        houseRules: [
          "Musical instruments must be handled with care.",
          "No late-night showers due to plumbing limitations.",
          "Shoes off in all rooms except the music room.",
        ],
      },
      {
        name: "Priya Mehta",
        languages: ["Hindi", "English"],
        background:
          "Priya Mehta bridges Udaipur's ancient heritage with contemporary artistic expression, having transformed her 300-year-old ancestral haveli into both a personal art studio and a repository of local historical knowledge. Holding a doctorate in Rajasthani history from Delhi University and having trained under master miniature painters, Priya preserves the stories of Udaipur through both academic research and artistic interpretation. Her courtyard home contains a remarkable private library of historical documents, including rare manuscripts and photographs documenting the transition from royal state to modern tourist destination. As a published author of three books on Mewar painting traditions and women's historical roles in Rajput society, Priya offers uniquely informed walking tours of the city's hidden historical sites, revealing layers of meaning in architectural details and cultural practices that even local guides often overlook. Her painting studio showcases her work merging traditional miniature techniques with contemporary themes, and she offers demonstrations of pigment preparation using minerals and plants according to centuries-old formulas.",
        maxGuests: 2,
        curfew: "9:00 PM",
        guestPolicy: "Only adult guests accepted. Solo travelers welcome.",
        houseRules: [
          "Art supplies provided must be returned before checkout.",
          "Silence requested during daily prayer hours.",
          "No cooking allowed by guests in personal kitchen.",
        ],
      },
    ],
  },
  {
    city: "Chiang Mai",
    country: "Thailand",
    description:
      "Discover the gentle soul of Northern Thailand in traditional teak homes that embody the region's distinctive Lanna cultural heritage. These authentic dwellings feature multi-tiered roofs with graceful curves, hand-carved wooden details, and elevated designs that keep spaces naturally cool in tropical heat. Your immersive stay includes personalized instruction in Thai cooking using herbs from family gardens, guided meditation practices in nearby temples, and participation in local spiritual traditions that blend Buddhism with ancient animist beliefs. Situated in quiet communities surrounded by rice fields, mountain views, and tropical gardens, these family homes provide a serene contrast to Thailand's bustling tourist centers while offering meaningful connections to a way of life that prioritizes mindfulness, creativity, and profound respect for nature's rhythms.",
    hosts: [
      {
        name: "The Kittipong Family",
        languages: ["Thai", "English"],
        background:
          "The Kittipong family represents the sustainable heart of Northern Thai agriculture, maintaining ten acres of certified organic rice fields, vegetable gardens, and fruit orchards using traditional farming methods passed down through six generations. Patriarch Somchai Kittipong pioneered organic farming techniques in the region decades before they became widely adopted, drawing on ancestral knowledge while incorporating innovative water conservation systems. His wife Mali, recognized as a master of Northern Thai cuisine, leads cooking workshops using their farm's seasonal produce to create authentic Lanna dishes rarely found in restaurants, explaining how each ingredient relates to traditional Thai wellness concepts. Their restored 120-year-old teak farmhouse, built using traditional joinery techniques without nails, demonstrates sustainable living with solar power, rainwater harvesting, and natural building materials. The family maintains strong connections with nearby Hmong and Karen hill tribe communities, facilitating cultural exchange experiences and supporting sustainable handicraft production. Their evening meals often feature discussions about agricultural sustainability, food sovereignty, and the preservation of Thai culinary biodiversity.",
        maxGuests: 4,
        curfew: "9:30 PM",
        guestPolicy: "Vegetarian meals by default. Family-style dining.",
        houseRules: [
          "Guests are invited to assist with meal prep upon request.",
          "Proper attire required for visits to nearby temples.",
          "Wi-Fi limited to common areas only.",
        ],
      },
      {
        name: "Ajan Somchai",
        languages: ["Thai", "English"],
        background:
          "Ajan Somchai brings uncommon depth to Thailand's spiritual traditions, having spent 25 years as a Buddhist monk in forest monasteries before returning to lay life to share meditation practices with a wider audience. His journey includes extensive training under revered meditation masters throughout Thailand and intensive retreats in Myanmar and Tibet, giving him a comprehensive understanding of various Buddhist traditions. After leaving monastic life, he transformed his family's ancestral property into a small retreat center while preserving its traditional Lanna architectural features. The peaceful compound includes a dedicated meditation hall, contemplative walking paths through tropical gardens, and simple yet comfortable accommodations designed to support mindfulness practice. Ajan Somchai's teaching approach makes ancient wisdom accessible to modern visitors, offering personalized guidance in meditation techniques while explaining the philosophical concepts behind them. His connections with local temples provide guests with opportunities to experience authentic Buddhist rituals not usually open to outsiders, including early morning alms-giving, evening chanting ceremonies, and conversations with practicing monks about contemporary monastic life.",
        maxGuests: 2,
        curfew: "8:00 PM",
        guestPolicy:
          "No children allowed. Guests must participate in daily meditation to respect the peaceful environment.",
        houseRules: [
          "Silence required from 8:00 PM to 7:00 AM.",
          "No meat, alcohol, or loud music allowed on premises.",
          "Guests must rise by 6:00 AM for morning chant.",
        ],
      },
      {
        name: "Lalana & Noi",
        languages: ["Thai", "English"],
        background:
          "Sisters Lalana and Noi represent the living heritage of Thailand's hill tribe cultures while navigating the complexities of modern life. Descended from the Karen hill tribe on their mother's side and Lanna Thai through their father, they grew up in a remote mountain village before pursuing education in Chiang Mai. Their lovingly preserved traditional stilt house combines authentic cultural elements with thoughtfully integrated modern amenities. The sisters have documented their family's textile traditions, learning ancient natural dyeing techniques from their grandmother using plants they now cultivate in their garden. Their weaving workshop showcases the intricate backstrap loom techniques that produce textiles with patterns specific to their ancestral village, each design containing symbolic meanings and stories. Beyond their artistic practices, both sisters work with regional cultural preservation organizations—Lalana as an ethnographer recording disappearing folktales and songs, and Noi as a community development coordinator helping hill tribe artisans gain fair market access. Evening discussions around their fire pit feature storytelling from their collected oral histories, demonstrations of traditional musical instruments, and conversations about the challenges facing indigenous communities in the modern world.",
        maxGuests: 3,
        curfew: "10:00 PM",
        guestPolicy:
          "Minimum stay 2 nights. Cultural respect expected at all times during interactions.",
        houseRules: [
          "Participation in weaving workshop is required for full-day stays.",
          "No outside food allowed in the dining room.",
          "Laundry services available once per stay.",
        ],
      },
    ],
  },
  {
    city: "Cusco",
    country: "Peru",
    description:
      "Step into living history in authentic adobe homes that connect modern Peru with its Incan imperial past. These sturdy earthen dwellings combine pre-Columbian architectural techniques with Spanish colonial influences, featuring thick walls that maintain comfortable temperatures at high altitudes, interior courtyards filled with medicinal herbs, and showcases of hand-woven textiles in vibrant natural dyes. Your culturally immersive experience includes traditional pachamanca earth-oven feasts using ingredients from ancient crop varieties, participation in coca leaf readings that honor Andean spiritual practices, and storytelling sessions that transmit indigenous knowledge through oral traditions preserved for centuries. Located in historic neighborhoods and scenic Sacred Valley communities near major archaeological sites, these family homes provide unique perspectives on Peru's complex cultural identity through direct connections with descendants of the Inca civilization.",
    hosts: [
      {
        name: "The Quispe Family",
        languages: ["Spanish", "Quechua"],
        background:
          "The Quispe family maintains profound connections to Peru's pre-Columbian heritage as direct descendants of the Inca through their ancestral village's panaca (royal lineage group). Their traditional adobe compound in the Sacred Valley has been continuously inhabited by family members for over 400 years, built partly on foundations dating to the Inca period. Family patriarch Eduardo Quispe is a respected authority on traditional agriculture, maintaining over 60 varieties of native potatoes and preserving ancient farming techniques adapted to different microclimate zones on their terraced land. His wife Claudia is a master textile artist whose intricate weavings maintain the symbols and techniques unique to their community, with patterns that encode cultural knowledge about local geography, history, and cosmology. The family conducts traditional agricultural ceremonies marking planting and harvest seasons, incorporating rituals that blend Catholic traditions with pre-Columbian spiritual practices. Their compound includes a small museum displaying archaeological artifacts discovered on their land, including ceramics and tools that demonstrate the continuity of local cultural practices across centuries. Family discussions often focus on indigenous identity in contemporary Peru and efforts to revitalize Quechua language usage among younger generations.",
        maxGuests: 4,
        curfew: "9:00 PM",
        guestPolicy: "No guests under 10. Spanish or Quechua preferred.",
        houseRules: [
          "Guests must request hot water use due to altitude conservation efforts.",
          "Participation in coca leaf ceremonies is optional but encouraged.",
          "No drones allowed due to sacred nearby sites.",
        ],
      },
      {
        name: "Rosa Poma",
        languages: ["Spanish", "Quechua", "English"],
        background:
          "Rosa Poma brings exceptional interpretive depth to Cusco's archaeological heritage, having worked for fifteen years as a specialized guide at major Inca sites before establishing her cultural homestay. Her formal education combines a degree in Andean archaeology with extensive training in traditional knowledge systems preserved through her family's oral traditions. Her carefully restored colonial-era home near Cusco's historic center features architectural elements from three distinct periods—Inca stone foundations, Spanish colonial walls, and Republican-era modifications—making the building itself a teaching tool about Peru's layered history. Rosa's intimate knowledge of archaeological sites extends beyond academic understanding to include local perspectives and traditional stories not found in guidebooks. Her cooking workshops demonstrate how contemporary Peruvian cuisine evolved through the integration of indigenous ingredients with Spanish, African, and Asian influences, using traditional preparation tools like batanes (stone grinders) alongside modern equipment. Evening historical presentations feature her extensive personal photography archive documenting archaeological discoveries and restoration projects not accessible to the public, while her library contains rare historical texts and research materials available for guests' use.",
        maxGuests: 2,
        curfew: "9:30 PM",
        guestPolicy:
          "Quiet travelers welcome. Light sleepers beware of morning bells from nearby church.",
        houseRules: [
          "Alpaca wool blankets must not be taken outside.",
          "Bathroom is shared—schedule provided on arrival.",
          "Guests must remove shoes at entry and use provided slippers.",
        ],
      },
      {
        name: "Luis & Carmen Huamani",
        languages: ["Spanish", "Quechua", "English"],
        background:
          "Luis and Carmen Huamani represent the vibrant intersection of traditional Andean culture with contemporary artistic expression. Luis, descended from a long line of Quechua musicians, has mastered multiple indigenous wind and string instruments, while Carmen combines classical guitar training from Lima's conservatory with deep knowledge of traditional Andean musical forms. Their Spanish colonial-era home has been thoughtfully renovated to include a small performance space where they host intimate concerts featuring rare musical instruments and compositions specific to different Andean regions and historical periods. Beyond their musical expertise, the couple shares extensive mountaineering experience, with Luis having worked as a professional guide on the Inca Trail for over two decades. Their home contains a remarkable collection of maps, historical photographs of archaeological sites before major restoration, and detailed information about lesser-known Inca paths beyond the tourist routes. Evening gatherings often include demonstrations of how specific musical traditions correspond to different geographical regions and agricultural cycles, with explanations of how instruments and melodies traveled along ancient trade routes. The couple also leads workshops on traditional instrument construction using native materials, allowing guests to create simple flutes or percussion instruments as cultural souvenirs.",
        maxGuests: 3,
        curfew: "10:00 PM",
        guestPolicy:
          "Backpackers welcome. Trail dust must be cleaned before entering home.",
        houseRules: [
          "Musical instruments may be borrowed during communal sessions only.",
          "Mountain guide services must be pre-booked.",
          "No alcohol permitted on hiking days.",
        ],
      },
    ],
  },
  {
    city: "Marrakech",
    country: "Morocco",
    description:
      "Experience the magic of Morocco in traditional riads, historic courtyard homes built around refreshing fountains and fragrant gardens that create private oases amid the bustling medina. These architectural gems feature intricate zellige mosaic tilework, hand-carved cedar ceilings, and refreshing plunge pools that maintain ancient cooling techniques in the desert climate. Your culturally immersive stay includes rejuvenating hammam bathing rituals using black soap and mineral clay, rooftop dining featuring tagines slow-cooked to perfection according to family recipes, and expertly guided explorations through the labyrinthine souks to witness master artisans practicing crafts unchanged for centuries. Hidden behind unassuming exterior walls within the ancient walled city, these historic homes provide authentic experiences of Moroccan domestic life while honoring traditions that blend Amazigh, Arabic, Andalusian, and sub-Saharan African influences into a uniquely vibrant cultural tapestry.",
    hosts: [
      {
        name: "The El Fassi Family",
        languages: ["Arabic", "French", "English"],
        background:
          "The El Fassi family upholds Morocco's illustrious ceramic heritage through eight generations of master artisans whose works adorn some of the country's most significant monuments and palaces. Their 18th-century riad in Marrakech's historic pottery district features a traditional workshop where they continue to create zellige mosaics, carved plasterwork, and painted ceramics using methods that have remained largely unchanged since the Marinid dynasty. Family patriarch Hassan El Fassi learned the sacred geometry underlying Islamic decorative arts from his father through an apprenticeship beginning at age nine, knowledge now being passed to his children who each specialize in different aspects of the craft. Their home showcases the family's artistic evolution with rooms representing different historical periods and regional styles, demonstrating how Moroccan ceramics have incorporated influences from Andalusian, Berber, and Sub-Saharan traditions while maintaining distinctive Moroccan characteristics. The family maintains close ties with the royal court, having completed restoration work on numerous historic sites including the Bahia Palace and Badi Palace. Their workshop demonstrations reveal the mathematical principles behind complex mosaic patterns and the natural mineral sources for their vibrant pigments, many gathered from specific locations in the Atlas Mountains according to closely guarded family knowledge.",
        maxGuests: 5,
        curfew: "11:00 PM",
        guestPolicy:
          "Respect for Islamic customs required. No public displays of affection allowed.",
        houseRules: [
          "Hammam sessions must be scheduled in advance.",
          "Shoes not allowed in prayer rooms.",
          "No pork products allowed on premises.",
        ],
      },
      {
        name: "Yasmine Benali",
        languages: ["Arabic", "French", "English"],
        background:
          "Yasmine Benali represents the sophisticated preservation of Morocco's culinary heritage, combining formal training at prestigious international culinary schools with deep knowledge of traditional methods learned from female family members across different regions of Morocco. Her carefully restored 19th-century riad in the medina features a teaching kitchen specifically designed for culinary workshops, with both traditional wood-fired facilities and modern equipment. Yasmine's academic research has documented disappearing regional recipes and techniques, resulting in published works on pre-colonial Berber cuisine and the influence of Andalusian traditions on Moroccan royal kitchens. Her approach emphasizes the historical context of Moroccan dishes, explaining how trade routes, colonial encounters, and religious practices shaped the country's distinctive flavor profiles and cooking methods. The riad's rooftop herb garden grows rare culinary and medicinal plants specific to different Moroccan regions, while her collection of traditional cooking vessels includes centuries-old pieces that demonstrate the evolution of Moroccan culinary technology. Beyond standard tourist favorites, Yasmine's workshops feature seasonal dishes tied to specific agricultural cycles and religious observations, revealing how Moroccan cuisine embodies the country's geographic and cultural diversity through subtle regional variations in common dishes.",
        maxGuests: 2,
        curfew: "10:00 PM",
        guestPolicy: "Cooking class included with stays over 2 nights.",
        houseRules: [
          "Guests must wash hands before entering kitchen.",
          "Photography of meals is welcome—tagging host on social media encouraged but not required.",
          "Modest clothing required on excursions.",
        ],
      },
      {
        name: "Hassan & Amina Rachid",
        languages: ["Arabic", "French", "English"],
        background:
          "Hassan and Amina Rachid bridge ancient textile traditions with contemporary design through their deep involvement in Morocco's artisanal heritage. Their family has operated a weaving workshop in Marrakech's medina for six generations, with Hassan having inherited techniques for working with particular fibers and natural dyes while Amina contributes formal training in textile conservation acquired during her studies in France. Their meticulously renovated 17th-century riad serves both as residence and textile gallery, with rooms showcasing distinctive weaving styles from different Moroccan regions—from High Atlas Berber carpets to fine urban embroidery traditions. The couple has extensively documented traditional textile techniques through remote mountain village visits, creating an invaluable archive of patterns and methods that were at risk of disappearing. Their workshop demonstrations reveal the complex relationship between tribal identities and textile motifs, explaining how specific designs communicate social information about the weaver's community and family lineage. Beyond their artistic preservation work, the Rachids have established a cooperative supporting women weavers from rural communities, creating economic opportunities while ensuring traditional knowledge continues to the next generation. Their specialized market tours reveal the hidden indicators of quality and authenticity in Moroccan textiles, empowering visitors to make informed purchases while appreciating the cultural significance behind decorative pieces.",
        maxGuests: 4,
        curfew: "10:30 PM",
        guestPolicy: "Guests must be escorted if returning after 9:00 PM.",
        houseRules: [
          "Noise curfew strictly enforced after 10:00 PM.",
          "No negotiation practice with vendors during guided market tours allowed.",
          "All valuables must be stored in provided safes.",
        ],
      },
    ],
  },
  {
    city: "Tuscany",
    country: "Italy",
    description:
      "Charming villas and restored farmhouses nestled among rolling hills and vineyards, offering immersive experiences in Italian rural life. Guests can participate in authentic wine tasting sessions with local vintners, join seasonal olive harvesting activities, and enjoy traditional family-style meals prepared with produce from nearby gardens. Each homestay provides a genuine glimpse into the timeless rhythms of Tuscan countryside living, where food, wine, and hospitality have been perfected over generations.",
    hosts: [
      {
        name: "The Bianchi Family",
        languages: ["Italian", "English"],
        background:
          "Winemakers in Chianti for over 200 years, the Bianchi family has preserved traditional viticulture methods while selectively incorporating modern techniques. Their estate features vineyards dating back to the 18th century, and they offer intimate tours where guests learn about the unique terroir of their land. The family patriarch, Giovanni, is a respected authority on Sangiovese grapes, and his daughter Lucia now manages their small-batch production, continuing a legacy that has weathered both world wars and changing wine markets.",
        maxGuests: 6,
        curfew: "11:30 PM",
        guestPolicy: "Wine lovers encouraged. No children under 12 allowed.",
        houseRules: [
          "Cellar visits by appointment only.",
          "No outside food allowed during hosted meals.",
          "Kitchen use prohibited unless accompanied by staff.",
        ],
      },
      {
        name: "Giulia & Marco Lombardi",
        languages: ["Italian", "English"],
        background:
          "Olive oil producers and passionate art collectors, the Lombardis have transformed their 16th-century farmhouse into a living museum. Their award-winning extra virgin olive oil comes from groves that have been in Marco's family for five generations. Giulia, a former gallery curator, has assembled an impressive collection of contemporary Tuscan artists alongside Renaissance-era pieces. They offer specialized oil tastings that explain the subtle differences between harvests and pressing methods, while their art tours provide insights into the cultural heritage of the region through both historic and modern creative expressions.",
        maxGuests: 3,
        curfew: "10:00 PM",
        guestPolicy: "Art-friendly travelers welcome. No pets. ",
        houseRules: [
          "Guests may not enter olive press area without supervision.",
          "Art viewing is limited to daylight hours.",
          "Smoking allowed only on terrace.",
        ],
      },
      {
        name: "Elena Rossi",
        languages: ["Italian", "English"],
        background:
          "Culinary instructor with formal training from Florence's prestigious cooking academy and 25 years of experience preserving regional recipes. Elena's kitchen garden supplies many of the ingredients used in her workshops, where guests learn to make hand-rolled pasta using techniques passed down from her grandmother. Her restored stone cottage features a purpose-built teaching kitchen with stations for up to four students. Before becoming a full-time culinary educator, Elena worked in several Michelin-starred restaurants throughout Italy, bringing professional techniques to traditional home cooking. Her specialty is creating authentic Tuscan dishes adapted for guests to recreate in their own homes.",
        maxGuests: 2,
        curfew: "9:30 PM",
        guestPolicy:
          "Cooking enthusiasts preferred. No late arrivals after 7:00 PM.",
        houseRules: [
          "Aprons must be worn in kitchen.",
          "Hand washing station must be used before meal prep.",
          "Quiet hours from 10:00 PM to 6:00 AM.",
        ],
      },
    ],
  },
  {
    city: "Andalusia",
    country: "Spain",
    description:
      "Historic cortijos (traditional rural estates) and Moorish-era townhomes nestled in southern Spain's diverse landscapes, from olive groves to whitewashed mountain villages. These authentic accommodations showcase the region's unique cultural fusion of Islamic and European influences, evident in their architecture featuring inner courtyards, intricate tilework, and wrought-iron details. Guests can experience the soul of Andalusia through evening flamenco performances, hands-on tapas preparation workshops, and guided explorations of this area's rich artistic traditions. Each homestay offers insights into the passionate Andalusian way of life that has evolved over centuries of complex history.",
    hosts: [
      {
        name: "The Morales Family",
        languages: ["Spanish", "English"],
        background:
          "Third-generation flamenco performers with deep roots in Sevilla's gitano community, the Morales family has been preserving authentic flamenco traditions since the early 20th century. Their historic home in the Triana district features a small private performance space where they host intimate shows combining dance, guitar, and cante jondo (deep song). Carlos Morales is a respected guitarist who has toured internationally, while his wife Carmela and their daughters are accomplished bailaoras (dancers) who teach the emotional expressiveness and technical precision of their art form. Their weekly performances attract both tourists and local aficionados seeking genuine flamenco experiences away from commercial venues.",
        maxGuests: 5,
        curfew: "11:00 PM",
        guestPolicy: "Guests invited to participate in weekly flamenco night.",
        houseRules: [
          "Noise acceptable during performances, silence afterward.",
          "Sangria served only to guests 21+.",
          "Guests must notify hosts before leaving the property after dark.",
        ],
      },
      {
        name: "Isabel Fernández",
        languages: ["Spanish", "English"],
        background:
          "Isabel Fernández embodies Andalusia's deep connection to olive cultivation, managing groves that have been in her family since the 17th century. With a doctorate in regional history from the University of Granada and having authored two definitive books on Andalusian agricultural traditions, Isabel offers an unparalleled perspective on how olive cultivation shaped southern Spain's cultural identity across centuries of changing political rule. Her restored 18th-century farmhouse sits on a hillside overlooking 500-year-old olive trees, some dating to the time of Catholic monarchs Ferdinand and Isabella. The property houses her extensive archive of agricultural documents, historical pressing equipment, and archaeological artifacts uncovered on her land during cultivation. Isabel's guided olive grove walks explain the botanical characteristics of different olive varieties and demonstrate traditional harvesting methods that she maintains alongside modern sustainable farming practices. Her morning history discussions connect the evolution of Spanish cuisine, trade, and religious practices to the humble olive, while her library contains rare texts on Andalusian agriculture dating back to Moorish rule. Evening tastings of her award-winning oils include blind comparisons of varieties from different microclimates and explanations of the health traditions associated with olive culture throughout Mediterranean history.",
        maxGuests: 2,
        curfew: "10:00 PM",
        guestPolicy:
          "History lovers welcome. Must join at least one guided walk.",
        houseRules: [
          "Climbing olive trees is prohibited.",
          "No electronics allowed during oral storytelling sessions.",
          "Local breakfast served at 8:00 AM sharp.",
        ],
      },
      {
        name: "Antonio & Lucia Rivas",
        languages: ["Spanish", "English"],
        background:
          "Antonio and Lucia Rivas represent the sophisticated intersection of architectural preservation and cultural heritage, bringing academic expertise and hands-on restoration skills to their mission of protecting Andalusia's unique architectural legacy. Both holding advanced degrees in historical architecture—Antonio specializing in Islamic influences on Spanish building techniques and Lucia in traditional water management systems—the couple has led restoration projects at several UNESCO World Heritage sites throughout southern Spain. Their own home, a carefully restored 16th-century structure in Granada's historic Albaicín district, showcases the distinctive features of Moorish-Christian hybrid architecture, including original carved plasterwork, hidden courtyards with sophisticated water features, and astronomical alignments built into the structure. Their property serves as both residence and living laboratory where they demonstrate ancient construction techniques like compressed earth building, lime plastering, and passive cooling systems that maintained comfortable temperatures long before modern climate control. The couple offers specialized architectural tours revealing hidden details of neighborhood buildings that most visitors overlook, explaining how political and religious changes manifested in building styles and techniques across centuries. Their rooftop terrace, offering spectacular views of the Alhambra, hosts evening discussions on architectural preservation challenges in the face of mass tourism and climate change, while their extensive library contains rare architectural drawings, historical building codes, and photographic documentation of structures that no longer exist.",
        maxGuests: 4,
        curfew: "10:30 PM",
        guestPolicy:
          "Architectural students welcome. Open terrace access allowed.",
        houseRules: [
          "No roof access after 8:00 PM.",
          "Respect historic artifacts on display.",
          "Shoes not allowed on indoor mosaics.",
        ],
      },
    ],
  },
  {
    city: "Hội An",
    country: "Vietnam",
    description:
      "Experience the charm of Vietnam's ancient port city in traditional wooden houses that reflect the region's rich maritime history and cultural fusion. These beautifully preserved homes feature intricate carvings, tiled roofs, and shaded courtyards that create a serene atmosphere amidst the bustling streets. Guests can immerse themselves in local life through hands-on lantern-making workshops, guided tours of Hội An's historic sites, and cooking classes that highlight the unique flavors of Central Vietnamese cuisine. Each homestay offers a glimpse into the harmonious blend of Vietnamese, Chinese, and Japanese influences that define Hội An's architectural and cultural heritage.",
    hosts: [
      {
        name: "The Nguyễn Family",
        languages: ["Vietnamese", "English"],
        background:
          "The Nguyễn family has lived in Hội An for over 200 years, preserving their ancestral home that dates back to the early 19th century. Their wooden house, built using traditional joinery techniques without nails, features intricate carvings and a serene courtyard garden filled with medicinal herbs. Family patriarch Nguyễn Văn Minh is a master carpenter who has restored several historic buildings in the Old Town, while his wife Lê Thị Lan is renowned for her expertise in traditional Vietnamese herbal medicine. Their home serves as both residence and cultural center, where they host workshops on woodworking and herbal remedies that connect guests with Hội An's rich history. The Nguyễn family's deep roots in the community allow them to share stories of the city's past, including its role as a major trading port connecting Vietnam with China, Japan, and Europe. Evening discussions often focus on the preservation of cultural heritage in the face of modern development pressures, while their library contains rare texts on Vietnamese architecture and herbal medicine.",
        maxGuests: 4,
        curfew: "10:00 PM",
        guestPolicy:
          "Respect for local customs required. No shoes inside the house.",
        houseRules: [
          "Participation in herbal remedy workshops encouraged.",
          "Photography allowed only in designated areas.",
          "Quiet hours from 9:00 PM to 7:00 AM.",
        ],
      },
      {
        name: "Trần Thị Hương",
        languages: ["Vietnamese", "English"],
        background:
          "Trần Thị Hương is a master lantern maker whose family has been crafting Hội An's iconic silk lanterns for generations. Her workshop, located in the heart of the Old Town, showcases the intricate process of creating these beautiful lanterns using traditional techniques passed down through her family. Hương's expertise extends beyond craftsmanship; she is also a cultural historian who has documented the evolution of Hội An's lantern-making traditions and their significance in Vietnamese festivals. Her home, adjacent to the workshop, features a gallery displaying both completed lanterns and works in progress, allowing guests to witness the artistry involved. Hương offers hands-on workshops where visitors can learn to create their own lanterns while gaining insights into the symbolism behind different colors and designs. Evening storytelling sessions often include tales of Hội An's maritime history and its connections to regional trade networks, providing a deeper understanding of the city's cultural heritage.",
        maxGuests: 2,
        curfew: "9:30 PM",
        guestPolicy:
          "Craft enthusiasts welcome. No children under 12 allowed in workshops.",
        houseRules: [
          "Lantern-making materials provided; no outside supplies allowed.",
          "Quiet during workshop hours to respect concentration.",
          "No smoking inside the house or workshop.",
        ],
      },
      {
        name: "Ngô Văn Dũng",
        languages: ["Vietnamese", "English"],
        background:
          "Ngô Văn Dũng is a culinary expert specializing in Central Vietnamese cuisine, with over 20 years of experience running cooking classes that highlight Hội An's unique flavors. His family home, located near the Thu Bồn River, features a traditional kitchen equipped with both modern appliances and ancient cooking tools used in Vietnamese culinary traditions. Dũng's classes focus on seasonal ingredients sourced from local markets, teaching guests how to prepare dishes like cao lầu (a regional noodle dish) and bánh mì (Vietnamese sandwiches) using techniques that have been refined over generations. Beyond cooking, Dũng shares stories about Hội An's history as a melting pot of cultures, explaining how Chinese, Japanese, and European influences have shaped local cuisine. Evening meals often include discussions about food sustainability and the importance of preserving traditional recipes in an era of globalization.",
        maxGuests: 3,
        curfew: "10:00 PM",
        guestPolicy:
          "Food lovers encouraged. Participation in at least one cooking class required.",
        houseRules: [
          "Aprons provided; no outside cooking attire allowed.",
          "Guests must wash hands before entering the kitchen.",
          "No food waste disposal in sinks; composting encouraged.",
        ],
      },
    ],
  },
];
