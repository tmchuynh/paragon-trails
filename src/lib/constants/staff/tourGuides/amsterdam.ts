import { TourGuide } from "@/lib/interfaces/people/staff";

export const amsterdamTourGuides: TourGuide[] = [
  {
    id: "emma-van-der-berg",
    name: "Dr. Emma van der Berg",
    city: "Amsterdam",
    country: "Netherlands",
    languages: ["Dutch", "English", "German", "French"],
    experienceYears: 22,
    specialties: ["Historical Tours", "Architecture Tours", "Hidden Gems"],
    description:
      "An architectural historian specializing in Amsterdam's Golden Age, Dr. van der Berg reveals hidden aspects of the city's past through its buildings and urban design.",
    bio: "Dr. van der Berg brings a unique background to her architectural tours, having worked as a restoration architect on several of Amsterdam's UNESCO-protected canal houses before earning her Ph.D. Her research on how Golden Age merchants embedded secret symbols in building facades revolutionized our understanding of 17th-century Dutch architecture. Emma pioneered the use of augmented reality in her tours, allowing visitors to see hidden historical layers of buildings and visualize structures that no longer exist. She has secured special access to private canal houses and institutional buildings normally closed to the public. Her specialty canal boat architecture tours use the water perspective to reveal how Amsterdam's buildings were designed to be viewed from boats rather than streets, providing insights that land-based tours cannot offer.",
    quote:
      "Every building tells a story, and I love helping visitors discover the narratives behind Amsterdam's architectural wonders.",
    profileImage: "/images/guides/emma-van-der-berg.jpg",
    certifications: ["Ph.D. in Architectural History", "Urban Conservation"],
    isPopular: true,
  },
  {
    id: "jan-de-vries",
    name: "Professor Jan de Vries",
    city: "Amsterdam",
    country: "Netherlands",
    languages: ["Dutch", "English", "German", "Italian"],
    experienceYears: 25,
    specialties: ["Art Tours", "Museum Experiences", "Dutch Masters"],
    description:
      "An art historian and former curator at the Rijksmuseum, Professor de Vries offers expert insights into Dutch Golden Age painting and contemporary art scenes.",
    bio: "Before his academic career, Jan trained as a traditional oil painter, giving him practical insights into the techniques used by Dutch Masters that most art historians lack. His 15-year tenure as Rijksmuseum curator included overseeing the technical analysis of several Rembrandt paintings, revealing previously unknown aspects of the artist's methods. Professor de Vries maintains close relationships with contemporary Dutch artists, allowing his tour groups private studio visits and conversations with working creators. He specializes in connecting historical artistic movements with Amsterdam's current art scene, showing how the Dutch Golden Age continues to influence today's artists. Jan's immersive approach encourages visitors to experience art emotionally as well as intellectually, often incorporating music, poetry, and historical readings into his museum tours.",
    quote:
      "Art is a dialogue between the past and present, and I love facilitating that conversation for visitors.",
    profileImage: "/images/guides/jan-de-vries.jpg",
    certifications: ["Art History Ph.D.", "Museum Studies"],
  },
  {
    id: "marieke-jansen",
    name: "Chef Marieke Jansen",
    city: "Amsterdam",
    country: "Netherlands",
    languages: ["Dutch", "English", "French"],
    experienceYears: 18,
    specialties: ["Culinary Tours", "Food Markets", "Dutch Cuisine"],
    description:
      "A culinary expert who trained in Michelin-starred kitchens before dedicating herself to showcasing Dutch food traditions and international influences in Amsterdam.",
    bio: "Marieke's culinary journey began in her grandmother's traditional Dutch kitchen before taking her through elite Michelin-starred restaurants across Europe. After training in France and Italy, she returned to Amsterdam to research forgotten Dutch recipes and cooking techniques, many of which she has reintroduced to modern audiences. Her tours combine visits to historic food sites with hands-on cooking experiences using historical methods. Marieke has developed special relationships with Amsterdam's food artisans, from cheese affineurs to jenever distillers, giving her groups behind-the-scenes access to production facilities. She particularly excels at explaining how Amsterdam's role as a trading hub transformed Dutch cuisine through colonial influences and imported ingredients, connecting food history with broader cultural narratives about the Netherlands' global connections.",
    quote:
      "Food is a universal language that connects us all, and I love sharing the stories behind every dish.",
    profileImage: "/images/guides/marieke-jansen.jpg",
    certifications: ["Culinary Institute of Holland", "Food Safety"],
    isPopular: true,
  },
  {
    id: "peter-smit",
    name: "Peter Smit",
    city: "Amsterdam",
    country: "Netherlands",
    languages: ["Dutch", "English", "German"],
    experienceYears: 20,
    specialties: [
      "Countryside Tours",
      "Local Experience Tours",
      "Traditional Dutch Culture",
    ],
    description:
      "Born and raised in the Dutch countryside before moving to Amsterdam, Peter specializes in connecting visitors with authentic Dutch experiences both in the city and surrounding villages.",
    bio: "Peter was raised in a small farming community where his family has worked the land for six generations, giving him authentic insights into Dutch agricultural traditions that urban guides cannot offer. Before becoming a tour guide, he worked as a heritage preservation specialist, documenting rural customs and architectural techniques in danger of disappearing. His tours extend beyond Amsterdam to include nearby villages and countryside that most tourists never see, using public transport and cycling routes that showcase the Netherlands' exceptional infrastructure. Peter specializes in seasonal experiences tied to Dutch cultural traditions, from spring flower harvests to winter ice skating on frozen canals. His countryside tours reveal how the famous Dutch battle against water shaped not just the landscape but the national character and social institutions.",
    quote:
      "I believe that the heart of the Netherlands lies in its countryside, and I love sharing that with visitors.",
    profileImage: "/images/guides/peter-smit.jpg",
    certifications: ["Dutch Cultural Heritage", "Regional Tourism"],
  },
  {
    id: "thomas-visser",
    name: "Thomas Visser",
    city: "Amsterdam",
    country: "Netherlands",
    languages: ["Dutch", "English", "Spanish"],
    experienceYears: 12,
    specialties: [
      "Cultural Tours",
      "Red Light District History",
      "Social Issues",
    ],
    description:
      "A sociologist and Amsterdam native, Thomas provides thoughtful insights into the city's complex social history and unique approach to social issues.",
    bio: "Thomas combines his academic background in urban sociology with personal experience growing up in Amsterdam's rapidly changing neighborhoods. Before becoming a guide, he worked in harm reduction programs and with community organizations addressing urban challenges, giving him practical insights into the social policies that make Amsterdam unique. His Red Light District tours go beyond sensationalism to explain the historical context and current debates around the neighborhood's famous industry. Thomas has developed relationships with social workers, policy makers, and residents willing to share their perspectives with his tour groups. He particularly excels at facilitating respectful discussions about controversial topics, helping visitors understand the complex social balance that characterizes Amsterdam's approach to issues often criminalized elsewhere.",
    quote:
      "Understanding Amsterdam's social history is key to appreciating its unique culture and progressive values.",
    profileImage: "/images/guides/thomas-visser.jpg",
    certifications: ["Sociology M.A.", "Urban Studies"],
  },
  {
    id: "lisa-van-leeuwen",
    name: "Lisa van Leeuwen",
    city: "Amsterdam",
    country: "Netherlands",
    languages: ["Dutch", "English", "German"],
    experienceYears: 14,
    specialties: ["Family Tours", "Nature Experiences", "Wellness Tours"],
    description:
      "A former educator specializing in family-friendly experiences that connect Amsterdam's green spaces with educational opportunities for all ages.",
    bio: "Lisa's approach to family tours draws on her decade as an innovative elementary school teacher specializing in nature-based education before she became a guide. She pioneered Amsterdam's first wellness-focused family experiences, combining child-friendly mindfulness practices with playful exploration of the city's green spaces. Lisa has mapped dozens of interactive 'secret' routes through Amsterdam that reveal hidden playgrounds, child-friendly museums, and interactive public art installations tourists typically miss. Her science-based tours make complex environmental concepts accessible through hands-on activities in Amsterdam's parks and gardens. Lisa particularly excels at adapting her tours for families with special needs children, creating sensory-friendly experiences that accommodate diverse learning styles and accessibility requirements.",
    quote:
      "Connecting with nature is essential for well-being, especially for children, and I love creating experiences that foster that connection.",
    profileImage: "/images/guides/lisa-van-leeuwen.jpg",
    certifications: ["Child Development", "Environmental Education"],
  },
  {
    id: "lars-bakker",
    name: "Lars Bakker",
    city: "Amsterdam",
    country: "Netherlands",
    languages: ["Dutch", "English", "German"],
    experienceYears: 15,
    specialties: ["Cycling Tours", "Adventure Tours", "Urban Exploration"],
    description:
      "A former professional cyclist and urban planning consultant, Lars offers dynamic bike tours that showcase Amsterdam from a local perspective.",
    bio: "Before becoming a tour guide, Lars competed professionally in international cycling events and later consulted on Amsterdam's world-renowned cycling infrastructure projects. His insider knowledge of Amsterdam's transportation design gives his tours unique insights into how the city functions as a model of urban mobility. Lars has mapped dozens of specialized cycling routes that showcase different aspects of Amsterdam, from architectural highlights to urban nature preserves rarely visited by tourists. His background in urban planning allows him to explain how Amsterdam's physical development has influenced its social and cultural evolution. Lars particularly excels at helping inexperienced cyclists feel comfortable navigating Amsterdam's bike paths, adjusting routes and pace to accommodate all skill levels while ensuring everyone experiences the joy of exploring the city like a local.",
    quote:
      "Cycling is the heartbeat of Amsterdam, and I love sharing that rhythm with visitors through dynamic bike tours.",
    profileImage: "/images/guides/lars-bakker.jpg",
    certifications: ["Professional Cycling Coach", "Urban Mobility Expert"],
  },
  {
    id: "sophie-van-dijk",
    name: "Sophie van Dijk",
    city: "Amsterdam",
    country: "Netherlands",
    languages: ["Dutch", "English", "French", "Italian"],
    experienceYears: 16,
    specialties: ["Canal Cruises", "Romantic Tours", "Evening Experiences"],
    description:
      "With expertise in Amsterdam's most charming and intimate settings, Sophie creates unforgettable romantic experiences on and off the water.",
    bio: "Sophie developed her expertise in creating romantic experiences while working as an event planner for Amsterdam's most exclusive hotels before becoming a guide. Her background in theater and storytelling brings dramatic flair to her canal tours, which incorporate literary passages, music, and historical anecdotes tied to specific locations. Sophie has cultivated relationships with Amsterdam's hidden romantic venues, from tucked-away garden cafés to rooftop viewpoints overlooking the canals. She specializes in customizing tours around personal romantic milestones, having helped plan over a hundred marriage proposals in perfectly chosen Amsterdam settings. Her evening tours reveal how the city's famous lighting transforms the urban landscape after dark, showcasing both historic illumination projects and cutting-edge light art installations that create Amsterdam's magical nighttime atmosphere.",
    quote:
      "Every moment in Amsterdam can be magical, especially when shared with someone special.",
    profileImage: "/images/guides/sophie-van-dijk.jpg",
    certifications: ["Hospitality Management", "Canal Boat Captain License"],
  },
];
