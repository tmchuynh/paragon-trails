export const homestayHeritageLocations = [
  {
    city: "Kyoto",
    country: "Japan",
    description:
      "Step into Japan's cultural heart in traditional machiya-style homes, where centuries of history are preserved in every detail. These elegant wooden townhouses feature sliding paper doors, tranquil inner gardens, and tatami rooms that have hosted generations of artisans and merchants. Your stay includes participation in authentic tea ceremonies conducted with rituals unchanged for centuries, calligraphy lessons using traditional techniques, and seasonal kaiseki meals that showcase Kyoto's refined culinary heritage. Located in historic neighborhoods where geisha still practice their arts, these homes offer a rare opportunity to experience the living traditions of Japan's former imperial capital beyond what typical tourists encounter.",
    hosts: [
      {
        name: "The Nakamura Family",
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
        background:
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
      "Stay in restored havelis by the lake with royal family descendants or artisans. Experience the rich culture of Rajasthan.",
    hosts: [
      {
        name: "The Singh Pariwar",
        background:
          "Descendants of local royalty maintaining a lakeside haveli. ",
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
        background: "Folk musicians offering cultural evenings in their home. ",
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
        background:
          "Local historian and painter hosting guests in her courtyard haveli who shares stories of Udaipur's past.",
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
      "Northern Thai homes with traditional Lanna architecture, cooking classes, and spiritual immersion. Experience the heart of Thai culture.",
    hosts: [
      {
        name: "The Kittipong Family",
        background:
          "Organic farmers and Thai cooking instructors in the countryside.",
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
        background:
          "Buddhist monk turned retreat host offering meditation and mindfulness practices.",
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
        background:
          "Hill tribe descendants sharing weaving techniques and local folklore.",
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
      "Historic adobe homes near Incan ruins, offering local cuisine and ancestral storytelling. Experience the legacy of the Inca Empire.",
    hosts: [
      {
        name: "The Quispe Family",
        background:
          "Quechua-speaking farmers and textile artisans in the Sacred Valley.",
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
        background:
          "Former tour guide offering immersive Inca history talks and cooking classes.",
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
        background:
          "Musicians and mountain guides offering Andean music nights and trekking advice.",
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
      "Riad stays within the medina, featuring traditional hammams, rooftop dinners, and artisan-led tours. Experience the vibrant culture of Morocco.",
    hosts: [
      {
        name: "The El Fassi Family",
        background:
          "Ceramic artisans preserving Andalusian craft traditions in Marrakech.",
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
        background:
          "Chef and food historian specializing in Berber cuisine and cooking classes.",
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
        background:
          "Textile traders offering market tours and weaving workshops.",
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
        background: "Local historian and olive grove keeper.",
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
        background: "Architects preserving Moorish-style homes.",
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
];
