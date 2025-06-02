import { Tour } from "@/lib/interfaces/services/tours";
export const cannesTours: Tour[] = [
  {
    title: "Cannes Film Festival Experience",
    description:
      "Experience the glamour of the world's most prestigious film festival with red carpet access, film screenings, and insider knowledge about the festival's history and impact on global cinema.",
    images: [
      "/images/tours/cannes/red-carpet.jpg",
      "/images/tours/cannes/film-festival.jpg",
    ],
    duration: "6 hours",
    price: "$295",
    rating: 4.9,
    tags: ["Film Festival", "Celebrity", "Exclusive"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: true,
    tourCategoryId: "luxury",
    meetingPoint: {
      address:
        "Palais des Festivals et des Congrès, 1 Boulevard de la Croisette, 06400 Cannes, France",
      coordinates: {
        latitude: 43.5505,
        longitude: 7.018,
      },
      instructions:
        "Meet your guide at the steps of the Palais des Festivals, at the base of the famous red carpet. Your guide will be holding a gold VIP pass and wearing formal attire. Please arrive 45 minutes before your scheduled experience time as security checks are required.",
      contactNumber: "+33 4 92 99 84 00",
      contactEmail: "filmfestival@paragontrails.com",
    },
    faqs: [
      {
        question: "Can we actually attend a film screening?",
        answer:
          "Yes, this experience includes tickets to one official selection screening. During the festival, availability depends on the festival schedule, but our connections allow us to secure access to screenings that aren't available to the general public. Outside festival dates, we arrange private screenings of past Palme d'Or winners.",
      },
      {
        question: "What should I wear for the red carpet?",
        answer:
          "Dress to impress! While formal attire is not mandatory, we recommend smart casual or cocktail attire. If you want to go all out, feel free to wear evening gowns or suits. We can also arrange professional hair and makeup services for an additional fee.",
      },
      {
        question: "Will we see celebrities during this experience?",
        answer:
          "During the festival, celebrity sightings are very likely as we have access to premiere events and exclusive areas. Our guides know the best spots for catching glimpses of stars and sometimes arrange brief meet-and-greet opportunities, though these cannot be guaranteed as they depend on the celebrities' schedules and security considerations.",
      },
      {
        question: "How much of the festival history will we learn about?",
        answer:
          "Our expert guides provide fascinating insights into the 75+ year history of the Cannes Film Festival, from its controversial beginnings in 1939 (when it was canceled due to WWII) through its evolution into the world's most prestigious film event. You'll learn about iconic moments, controversial winners, and the festival's impact on global cinema while walking through locations where film history was made.",
      },
      {
        question: "Is photography allowed during the experience?",
        answer:
          "Photography is permitted in most areas, and we'll show you the best photo spots. However, photography is prohibited during film screenings and in certain exclusive areas. Your guide will clearly indicate when photos are not allowed. We can provide professional photography services for an additional fee if you'd like to fully enjoy the experience without worrying about taking photos.",
      },
    ],
  },
  {
    title: "French Riviera Coastal Cruise",
    description:
      "Sail the crystal waters of the Côte d'Azur aboard a luxury yacht, visiting secluded bays, seaside villages, and glamorous ports between Cannes and Saint-Tropez with champagne lunch included.",
    images: [
      "/images/tours/cannes/yacht-cruise.jpg",
      "/images/tours/cannes/coastal-view.jpg",
    ],
    duration: "7 hours",
    price: "$450",
    rating: 4.8,
    tags: ["Yacht", "Coastal", "Luxury"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "luxury",
    meetingPoint: {
      address: "Port de Cannes, Quai Saint-Pierre, 06400 Cannes, France",
      coordinates: {
        latitude: 43.5485,
        longitude: 7.031,
      },
      instructions:
        "Meet at the Cannes Marina in front of the Capitainerie (Harbor Master's Office). Your captain will greet you and escort you to your private yacht. Please arrive 15 minutes before your scheduled departure time and bring your passport for maritime regulations.",
      contactNumber: "+33 4 93 38 70 70",
      contactEmail: "yachting@paragontrails.com",
    },
    faqs: [
      {
        question: "Is swimming possible during the cruise?",
        answer:
          "Absolutely! We make 2-3 swimming stops in beautiful secluded coves with crystal-clear water. The yacht is equipped with snorkeling gear, paddleboards, and a swimming platform for easy access to the water.",
      },
      {
        question: "What should I bring for the cruise?",
        answer:
          "We recommend swimwear, sunscreen, a hat, and a light jacket for the evening. Towels and snorkeling gear are provided onboard. Feel free to bring your own drinks or snacks, but we also have a full bar and catering service available.",
      },
      {
        question: "What type of boat will we be sailing on?",
        answer:
          "We use luxury motor yachts ranging from 50-70 feet depending on your group size. All vessels feature spacious sundecks, shaded seating areas, well-appointed interiors, and modern amenities. Each yacht comes with an experienced captain and professional crew to ensure your comfort and safety throughout the journey.",
      },
      {
        question: "What coastal locations will we visit?",
        answer:
          "Our route typically includes the stunning Lérins Islands with their pristine beaches, the beautiful red rocks of the Esterel coastline, and either Antibes or Saint-Tropez depending on your preference and sea conditions. The exact itinerary can be customized based on your interests, whether you prefer more swimming time, exploring coastal villages, or simply cruising along the scenic shoreline.",
      },
      {
        question: "What's included in the champagne lunch?",
        answer:
          "We serve a gourmet Mediterranean lunch paired with premium champagne. The menu typically includes fresh seafood, local specialties, artisanal cheeses, and seasonal fruits prepared by our onboard chef. We can accommodate dietary restrictions with advance notice. Lunch is served in a scenic bay, allowing you to enjoy the beautiful coastal views while dining.",
      },
    ],
  },
  {
    title: "Cannes Culinary Delights Tour",
    description:
      "Indulge in the flavors of the French Riviera with a guided food tour through Cannes, sampling local delicacies, visiting markets, and dining at renowned restaurants.",
    images: [
      "/images/tours/cannes/culinary-tour.jpg",
      "/images/tours/cannes/local-market.jpg",
    ],
    duration: "4 hours",
    price: "$120",
    rating: 4.7,
    tags: ["Culinary", "Local", "Gourmet"],
    isHistorical: false,
    isRomantic: true,
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
      address:
        "Marché Forville, 6 Rue du Marché Forville, 06400 Cannes, France",
      coordinates: {
        latitude: 43.5515,
        longitude: 7.0119,
      },
      instructions:
        "Meet your culinary guide at the main entrance of Marché Forville (Forville Market). Your guide will be holding a basket with the Paragon Trails logo. Please arrive hungry and 10 minutes before your scheduled tour time.",
      contactNumber: "+33 4 93 38 55 55",
      contactEmail: "culinary@paragontrails.com",
    },
    faqs: [
      {
        question: "Are vegetarian options available?",
        answer:
          "Yes, we can accommodate vegetarians and vegans with advance notice. Please inform us of any dietary restrictions when booking.",
      },
      {
        question: "What types of food will we sample?",
        answer:
          "You'll taste a variety of local specialties including fresh seafood, Provençal vegetables, artisanal cheeses, and traditional pastries. We also visit local markets to experience the vibrant food culture of Cannes.",
      },
      {
        question: "How many food stops does the tour include?",
        answer:
          "The tour includes 6-7 carefully selected tasting locations including the historic Forville Market, traditional bakeries, cheese shops, a chocolatier, and finally a local restaurant for a seated tasting of Provençal specialties. Each location showcases a different aspect of the region's culinary heritage.",
      },
      {
        question: "Will we learn about Provençal cooking techniques?",
        answer:
          "Yes, throughout the tour your culinary expert guide explains traditional Provençal cooking methods and ingredients. You'll learn how olive oil, herbs de Provence, garlic, and fresh seasonal produce form the foundation of the region's cuisine. We'll discuss how these traditions have evolved while remaining true to their Mediterranean roots.",
      },
      {
        question: "Is alcohol included in the tastings?",
        answer:
          "Yes, the tour includes samples of local wines and aperitifs that complement the food tastings. We typically try a Provençal rosé, which the region is famous for, as well as a traditional pastis aperitif. Non-alcoholic alternatives are available upon request.",
      },
    ],
  },
  {
    title: "Cannes Art & Culture Walk",
    description:
      "Explore Cannes' rich artistic heritage with a guided walking tour of its galleries, museums, and historic sites, including the Palais des Festivals and the charming Le Suquet district.",
    images: [
      "/images/tours/cannes/art-walk.jpg",
      "/images/tours/cannes/le-suquet.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.6,
    tags: ["Art", "Culture", "Walking Tour"],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "cultural",
    meetingPoint: {
      address:
        "Office de Tourisme de Cannes, 1 Boulevard de la Croisette, 06400 Cannes, France",
      coordinates: {
        latitude: 43.5513,
        longitude: 7.0184,
      },
      instructions:
        "Meet your cultural guide in front of the Cannes Tourist Office on La Croisette. Your guide will be holding an art guide book and wearing a navy blue scarf. Please arrive 10 minutes before your scheduled tour time.",
      contactNumber: "+33 4 92 99 84 22",
      contactEmail: "artculture@paragontrails.com",
    },
    faqs: [
      {
        question: "What will we see during the art walk?",
        answer:
          "The tour includes visits to local art galleries, the Musée de la Castre, and the historic Le Suquet district with its stunning views of Cannes. We also discuss the influence of film and art on the city's culture.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive activities and storytelling.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 2.5 kilometers at a leisurely pace. We do climb to Le Suquet district which involves some stairs and uphill walking, but we take it slowly with plenty of stops. Comfortable walking shoes are recommended.",
      },
      {
        question: "What is the history of Le Suquet district?",
        answer:
          "Le Suquet is Cannes' oldest neighborhood, originally a Roman settlement and later a medieval fishing village. Your guide will share how this hilltop district predates the glamorous Cannes we know today by many centuries. You'll learn about the 11th-century Tour du Mont Chevalier watchtower, the Notre-Dame de l'Espérance church, and how this once-modest fishing community transformed after Lord Brougham's influential visit in 1834 sparked Cannes' development as a luxury resort destination.",
      },
      {
        question:
          "Will we learn about Cannes' connection to cinema beyond the film festival?",
        answer:
          "Absolutely! The tour explores how cinema has shaped Cannes' identity throughout the year, not just during the festival. We'll visit film-related public art installations, the Walk of Fame with celebrity handprints, and discuss how the city has appeared in numerous films itself. Your guide will share stories about legendary film moments, scandals, and how the relationship between Cannes and cinema has evolved since the festival's founding in 1946.",
      },
    ],
  },
  {
    title: "Cannes Nightlife Experience",
    description:
      "Experience the vibrant nightlife of Cannes with a guided tour of its best bars, clubs, and lounges, including VIP access to exclusive venues.",
    images: [
      "/images/tours/cannes/nightlife.jpg",
      "/images/tours/cannes/vip-club.jpg",
    ],
    duration: "5 hours",
    price: "$200",
    rating: 4.8,
    tags: ["Nightlife", "VIP", "Party"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: true,
    tourCategoryId: "nightlife",
    meetingPoint: {
      address: "Le Bar à Vin, 10 Rue Marceau, 06400 Cannes, France",
      coordinates: {
        latitude: 43.5529,
        longitude: 7.0139,
      },
      instructions:
        "Meet your nightlife guide at Le Bar à Vin on Rue Marceau for a welcome drink before beginning the tour. Your guide will be at the reserved Paragon Trails table. Please dress smart-casual as most venues have dress codes (no athletic wear or flip-flops).",
      contactNumber: "+33 6 12 34 56 78",
      contactEmail: "nightlife@paragontrails.com",
    },
    faqs: [
      {
        question: "What types of venues will we visit?",
        answer:
          "The tour includes a mix of trendy bars, upscale lounges, and exclusive nightclubs. We ensure a diverse experience with something for everyone, from cocktail bars to dance clubs.",
      },
      {
        question: "Is transportation included?",
        answer:
          "Yes, we provide round-trip transportation from your hotel or accommodation in Cannes. Our guides will ensure you have a safe and enjoyable night out.",
      },
      {
        question: "What should I wear for the nightlife tour?",
        answer:
          "Cannes nightlife has a glamorous dress code. Smart-casual attire is the minimum requirement, with many venues preferring elegant dress. For men, collared shirts, dress pants, and nice shoes are recommended. For women, dresses, stylish tops, and high heels are appropriate. Avoid athletic wear, shorts, and flip-flops.",
      },
      {
        question: "Are drinks included in the tour?",
        answer:
          "The tour includes one welcome drink at our meeting point and entry fees to all venues. Additional drinks are at your own expense, but your guide can arrange bottle service or drink packages at preferential rates if desired.",
      },
      {
        question: "How exclusive are the venues we'll visit?",
        answer:
          "Our tour includes access to some of Cannes' most exclusive venues that often have strict door policies or reservation requirements. During peak seasons (like the Film Festival or summer), our connections allow you to bypass lines and gain entry to clubs that might otherwise be inaccessible. The itinerary adapts to include the hottest venues of the moment while also visiting established Cannes nightlife institutions.",
      },
    ],
  },
  {
    title: "Cannes Luxury Shopping Tour",
    description:
      "Shop like a celebrity with a personal shopping experience in Cannes, visiting high-end boutiques, designer stores, and exclusive showrooms with a fashion expert.",
    images: [
      "/images/tours/cannes/luxury-shopping.jpg",
      "/images/tours/cannes/designer-boutique.jpg",
    ],
    duration: "4 hours",
    price: "$350",
    rating: 4.9,
    tags: ["Shopping", "Luxury", "Fashion"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: false,
    isAdventure: false,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "luxury",
    meetingPoint: {
      address:
        "InterContinental Carlton Cannes, 58 La Croisette, 06400 Cannes, France",
      coordinates: {
        latitude: 43.5499,
        longitude: 7.0309,
      },
      instructions:
        "Meet your personal shopping guide in the elegant lobby of the InterContinental Carlton Hotel. Your fashion consultant will be waiting for you in the seating area near the concierge desk. Please arrive 10 minutes before your scheduled appointment time.",
      contactNumber: "+33 6 98 76 54 32",
      contactEmail: "shopping@paragontrails.com",
    },
    faqs: [
      {
        question: "Can we customize the shopping experience?",
        answer:
          "Absolutely! We tailor the tour to your preferences, whether you're looking for haute couture, jewelry, or local artisan products. Just let us know your interests when booking.",
      },
      {
        question: "Do you offer personal styling services?",
        answer:
          "Yes, our fashion expert can provide personal styling advice and help you find pieces that suit your style and body type. We can also arrange private fittings at select boutiques.",
      },
      {
        question: "What brands and boutiques will we visit?",
        answer:
          "We customize the itinerary based on your preferences, but typically include prestigious fashion houses along La Croisette (Chanel, Dior, Louis Vuitton), exclusive jewelry stores, concept stores featuring emerging designers, and select boutiques specializing in Mediterranean luxury lifestyle items not easily found elsewhere.",
      },
      {
        question: "Can you arrange tax-free shopping?",
        answer:
          "Yes, we assist with all tax-free shopping paperwork for non-EU residents, potentially saving you 12-20% on purchases. Our guide will explain the process and ensure all forms are completed correctly for customs. We can also arrange secure shipping for larger purchases directly to your home address.",
      },
      {
        question:
          "Are there any exclusive shopping opportunities on this tour?",
        answer:
          "Yes, our relationships with local boutiques and designer stores often provide access to private showrooms, pre-release collections, and exclusive items not available to the general public. In some cases, we can arrange for store managers or designers to personally assist you or customize pieces to your specifications.",
      },
    ],
  },
  {
    title: "Cannes Yacht Party",
    description:
      "Host an unforgettable yacht party in Cannes with a private luxury yacht, complete with catering, music, and stunning views of the French Riviera.",
    images: [
      "/images/tours/cannes/yacht-party.jpg",
      "/images/tours/cannes/party-on-deck.jpg",
    ],
    duration: "4 hours",
    price: "$600",
    rating: 4.9,
    tags: ["Yacht", "Party", "Luxury"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: false,
    isAdventure: false,
    isCultural: false,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: true,
    tourCategoryId: "luxury",
    meetingPoint: {
      address:
        "Port Pierre Canto, Boulevard de la Croisette, 06400 Cannes, France",
      coordinates: {
        latitude: 43.5382,
        longitude: 7.0476,
      },
      instructions:
        "Meet at Port Pierre Canto at the eastern end of La Croisette. Our yacht host will meet you at the security gate and escort you to your private vessel. Please bring photo ID for all guests as it's required for maritime regulations. Arrive 20 minutes before your scheduled departure time.",
      contactNumber: "+33 6 23 45 67 89",
      contactEmail: "yachtparty@paragontrails.com",
    },
    faqs: [
      {
        question: "What amenities are included on the yacht?",
        answer:
          "The yacht is fully equipped with a sound system, sun deck, lounge area, and dining space. Catering options include gourmet meals, snacks, and beverages tailored to your preferences.",
      },
      {
        question: "Can we customize the party theme?",
        answer:
          "Yes! We can arrange themed decorations, music playlists, and special requests to make your yacht party unique. Just let us know your ideas when booking.",
      },
      {
        question: "How many guests can the yacht accommodate?",
        answer:
          "Our standard yacht package accommodates up to 12 guests comfortably. For larger groups, we can arrange a bigger vessel or a small fleet of yachts that sail together. All vessels feature spacious entertainment areas both inside and on deck.",
      },
      {
        question: "What entertainment options are available?",
        answer:
          "We offer various entertainment options including professional DJs, live musicians (jazz trio, acoustic guitarist, etc.), dancers, and even fireworks displays for special occasions. Water toys like jet skis, paddleboards, and snorkeling equipment can also be provided for daytime parties.",
      },
      {
        question: "Where does the yacht cruise during the party?",
        answer:
          "The yacht typically cruises along the stunning coastline between Cannes and Antibes, passing by celebrity villas and the beautiful Lérins Islands. For sunset parties, we position the yacht for optimal sunset views. The captain can adjust the route based on your preferences, whether you want to be seen near the shore or prefer privacy in a secluded bay.",
      },
    ],
  },
];
export default cannesTours;
