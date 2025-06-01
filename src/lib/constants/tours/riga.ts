import { Tour } from "@/lib/interfaces/services/tours";

export const rigaTours: Tour[] = [
    {
        title: "Riga City Highlights Tour",
        description:
        "Explore the rich history and architecture of Riga with a guided tour through its UNESCO World Heritage-listed Old Town.",
        images: [
        "/images/tours/riga/city-highlights.jpg",
        "/images/tours/riga/old-town.jpg",
        ],
        duration: "3 hours",
        price: "$40",
        rating: 4.7,
        tags: ["Cultural", "Historical", "City Tour"],
    
        isHistorical: true,
        isRomantic: false,
        isOffTheBeatenPath: false,
        isLocalExperience: true,
        tourCategoryId: "cultural",
    },
    {
        title: "Gauja National Park Adventure",
        description:
        "Experience the natural beauty of Gauja National Park with hiking, canoeing, and wildlife spotting.",
        images: [
        "/images/tours/riga/gauja-national-park.jpg",
        "/images/tours/riga/hiking.jpg",
        ],
        duration: "6 hours",
        price: "$80",
        rating: 4.9,
        tags: ["Adventure", "Nature", "Hiking"],
    
        isHistorical: false,
        isRomantic: false,
        isOffTheBeatenPath: true,
        isLocalExperience: true,
        tourCategoryId: "adventure",
    },
    {
        title: "Riga Food Tour",
        description:
        "Discover the flavors of Latvia with a guided food tour through Riga's best local eateries and markets.",
        images: [
        "/images/tours/riga/food-tour.jpg",
        "/images/tours/riga/local-eateries.jpg",
        ],
        duration: "4 hours",
        price: "$50",
        rating: 4.8,
        tags: ["Culinary", "Cultural", "Local Experience"],
    
        isHistorical: false,
        isRomantic: true,
        isOffTheBeatenPath: false,
        isLocalExperience: true,
        tourCategoryId: "culinary",
    },
];
