"use client";

import Loading from "@/components/Loading";
import { cities } from "@/lib/constants/info/city-information";
import { CityInfo } from "@/lib/interfaces/general";
import { formatTitleToCamelCase } from "@/lib/utils/format";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CityToursPage() {
  const params = useParams();
  const [cityData, setCityData] = useState<CityInfo | null>(null);
  const citySlug = params?.city as string;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (citySlug) {
      setLoading(true);
      // Find the city data by comparing slugs (IDs)
      const foundCity = cities.find(
        (c) => c.id === formatTitleToCamelCase(citySlug)
      );
      if (foundCity) {
        setCityData({
          ...foundCity,
          testimonials: foundCity.testimonials.map((testimonial) => ({
            id: testimonial.id || "", // Handle missing id
            title: testimonial.title || "", // Handle missing title
            rating: testimonial.rating,
            author: testimonial.author,
            quote: testimonial.content,
            city: testimonial.city,
            date: testimonial.date,
          })),
        });
        setLoading(false);
      } else {
        console.error(
          `No data found for city: ${formatTitleToCamelCase(citySlug)}`
        );
      }
    }
  }, [citySlug]);

  console.log("City Data:", cityData);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {cityData && (
        <div className="mx-auto pt-3 md:pt-6 lg:pt-12 w-10/12 md:w-11/12">
          <header>
            <h1>{cityData.city} Tours</h1>
            <h5>{cityData.subtitle}</h5>
            <blockquote>{cityData.quote}</blockquote>
          </header>
          <div className="mt-8 max-w-2xl">
            <p>{cityData.description}</p>
          </div>

          <section className="gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-6">
            <div className="relative flex flex-col md:col-span-2 lg:col-span-3 shadow-md border border-border rounded-lg h-full overflow-hidden"></div>

            <div className="relative flex flex-col md:col-span-1 lg:col-span-2 shadow-md border border-border rounded-lg h-full overflow-hidden"></div>
          </section>
        </div>
      )}
    </>
  );
}
