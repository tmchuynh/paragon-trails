import { Tour } from "@/lib/interfaces/services/tours";

export const sapaTours: Tour[] = [
  {
    title: "Hmong Village Trek & Homestay Experience",
    description:
      "Immerse yourself in the daily life of Vietnam's Hmong people with a guided trek through terraced rice fields to remote villages untouched by mass tourism. Stay overnight with a local family, share meals, and learn traditional crafts while experiencing authentic mountain hospitality.",
    images: [
      "/images/tours/sapa/hmong-village.jpg",
      "/images/tours/sapa/rice-terraces-trek.jpg",
    ],
    duration: "2 days",
    price: "$95",
    rating: 4.9,
    tags: ["Trekking", "Homestay", "Cultural Immersion"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Mai Thi Hoa",
    tourCategoryId: "local-experience",
    faqs: [
      {
        question: "What are the sleeping arrangements in the homestay?",
        answer:
          "Homestays are simple but comfortable, typically offering mattresses with clean bedding and mosquito nets in a communal sleeping area of a traditional wooden house. Bathrooms are basic and often shared, with some homes having Western toilets while others use traditional facilities. The authentic experience allows you to witness daily life in a Hmong household where multiple generations often live under one roof.",
      },
    ],
  },
  {
    title: "Fansipan Summit Expedition",
    description:
      "Conquer the 'Roof of Indochina' with a challenging trek up Mount Fansipan (3,143m), Vietnam's highest peak. This guided adventure takes you through diverse ecosystems from bamboo forests to cloud-shrouded alpine terrain, with spectacular panoramic views of Sapa's valleys and beyond to China's Yunnan province.",
    images: [
      "/images/tours/sapa/fansipan-summit.jpg",
      "/images/tours/sapa/mountain-trail.jpg",
    ],
    duration: "2 days",
    price: "$175",
    rating: 4.7,
    tags: ["Mountain Climbing", "Adventure", "Hiking"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Nguyen Van Thanh",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How physically demanding is this trek?",
        answer:
          "This is our most challenging trek, requiring good physical fitness and some hiking experience. You'll cover approximately 12km each day with significant elevation gain (1,400m total) over sometimes steep and uneven terrain. While technical climbing skills aren't necessary, stamina and determination are essential. We maintain a steady pace with regular breaks, and your guide carries safety equipment including first aid supplies and communication devices.",
      },
    ],
  },
  {
    title: "Sapa Photography: Misty Mountains & Cultural Portraits",
    description:
      "Capture the ethereal beauty of Sapa's landscapes and the vibrant cultures of its ethnic minorities with guidance from a professional photographer. This tour is timed for optimal lighting conditions and provides unique access to photogenic locations and cultural experiences.",
    images: [
      "/images/tours/sapa/misty-mountains.jpg",
      "/images/tours/sapa/ethnic-portraits.jpg",
    ],
    duration: "Full day",
    price: "$85",
    rating: 4.8,
    tags: ["Photography", "Landscape", "Portraits"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Tran Minh Quang",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer:
          "For landscape photography, a wide-angle lens (16-35mm equivalent) is ideal for capturing the vast rice terraces, while a medium telephoto (70-200mm equivalent) works well for portraits and details. A sturdy tripod is recommended for low-light conditions in the early morning mist. That said, photographers of all levels from smartphone users to professionals will benefit from this tour as our guide focuses on composition, timing, and cultural sensitivity when photographing local people.",
      },
    ],
  },
  {
    title: "Red Dao Herbal Bath & Traditional Medicine",
    description:
      "Experience the healing traditions of the Red Dao ethnic group, famous throughout Vietnam for their medicinal knowledge. Learn about forest herbs, participate in gathering plants, and enjoy a therapeutic herbal bath prepared using centuries-old recipes known for their restorative properties.",
    images: [
      "/images/tours/sapa/herbal-bath.jpg",
      "/images/tours/sapa/red-dao-healer.jpg",
    ],
    duration: "6 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Wellness", "Traditional Medicine", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Ly May Chan",
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "What are the health benefits of the herbal bath?",
        answer:
          "Red Dao herbal baths use a proprietary blend of up to 10-12 forest plants and herbs known for their medicinal properties. These baths are traditionally used to relieve muscle pain, improve circulation, reduce stress, and treat skin conditions. While we don't make specific medical claims, many visitors report feeling deeply relaxed and refreshed after the experience. The herbs used vary seasonally and are freshly harvested from the surrounding mountains by Red Dao healers who have preserved this knowledge through generations.",
      },
    ],
  },
  {
    title: "Sapa Market Day & Textile Workshop",
    description:
      "Time your visit with one of Sapa's vibrant ethnic minority markets where different tribes gather to trade goods, find marriage partners, and socialize. After experiencing the market's colorful chaos, participate in a hands-on workshop learning traditional Hmong batik, indigo dyeing, or hemp weaving techniques.",
    images: [
      "/images/tours/sapa/minority-market.jpg",
      "/images/tours/sapa/indigo-dyeing.jpg",
    ],
    duration: "8 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Markets", "Textiles", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Lo Thi Mai",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Which day is the market held?",
        answer:
          "Different villages hold markets on different days: Bac Ha (Sunday), Coc Ly (Tuesday), Cao Son (Wednesday), Lung Khau Nhin (Thursday), Can Cau (Saturday). Each market has its own character and attracts different ethnic groups including Flower Hmong, Black Dao, Tay, Nung, and others. We'll recommend the best market day based on your travel dates, or can arrange your itinerary to include a specific market day if you have preferences.",
      },
    ],
  },
  {
    title: "Muong Hoa Valley Cycling Adventure",
    description:
      "Explore the picturesque Muong Hoa Valley by mountain bike, following paths through rice terraces, crossing suspension bridges, and visiting ethnic minority villages. This active adventure offers a different perspective on Sapa's landscapes with less trekking intensity.",
    images: [
      "/images/tours/sapa/cycling-rice-fields.jpg",
      "/images/tours/sapa/village-cycling.jpg",
    ],
    duration: "Full day",
    price: "$75",
    rating: 4.6,
    tags: ["Cycling", "Active", "Scenic"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Pham Hong",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need to be an experienced cyclist?",
        answer:
          "This tour is designed for riders with basic cycling experience and reasonable fitness. The route covers approximately 25km with moderate hills and some unpaved sections. We use quality mountain bikes with appropriate gearing for the terrain, and can adjust the route to accommodate different ability levels. The most challenging sections have vehicle support options if needed. The pace is leisurely with plenty of photo stops and cultural interactions.",
      },
    ],
  },
  {
    title: "Sapa Cooking Class & Traditional Food",
    description:
      "Discover the unique flavors of northern Vietnamese highland cuisine with a market tour and cooking class. Learn to prepare dishes specific to the ethnic minorities of the region using traditional methods and local ingredients, many foraged from the surrounding forests.",
    images: [
      "/images/tours/sapa/cooking-class.jpg",
      "/images/tours/sapa/local-ingredients.jpg",
    ],
    duration: "5 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Cooking", "Food", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Hang Thi Thu",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "The class typically includes 4-5 dishes representative of highland ethnic cuisine, such as five-color sticky rice (xôi ngũ sắc), bamboo-tube rice (cơm lam), H'mong-style smoked buffalo, hill tribe vegetable dishes with foraged herbs, and traditional Black H'mong or Red Dao soups. The menu varies seasonally based on available ingredients, and vegetarian options are available with advance notice.",
      },
    ],
  },
];

export default sapaTours;
