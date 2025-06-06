"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cities } from "@/lib/constants/info/city";
import { featuredArray, groupAndSortByProperties } from "@/lib/utils/sort";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const sortedDestinations = featuredArray(cities);

  const trailFeatures = [
    {
      title: "Wilderness Expertise",
      description:
        "Our master naturalists provide unparalleled knowledge of local flora, fauna, and geological formations on every expedition.",
      icon: "🌄",
    },
    {
      title: "Safety First Approach",
      description:
        "Advanced satellite communication systems and wilderness-certified guides ensure your security in even the most remote locations.",
      icon: "🛡️",
    },
    {
      title: "Sustainable Tourism",
      description:
        "We invest 10% of proceeds into trail conservation and partner with local communities to preserve natural habitats.",
      icon: "♻️",
    },
    {
      title: "Photography Expeditions",
      description:
        "Specialized tours with perfect timing for golden hour shots and secret vantage points for capturing breathtaking landscapes.",
      icon: "📸",
    },
    {
      title: "Gourmet Trail Dining",
      description:
        "Experience locally-sourced, chef-prepared meals that elevate outdoor dining to a culinary adventure worth savoring.",
      icon: "🍽️",
    },
    {
      title: "Exclusive Access Routes",
      description:
        "Our special permits and relationships with landowners provide access to stunning private trails unavailable to the general public.",
      icon: "🔑",
    },
  ];

  return (
    <main className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      {/* Hero Section */}
      <div>
        <div className="flex md:flex-row flex-col items-center">
          <div className="space-y-6 md:w-1/2">
            <h1>Discover Nature's Finest Trails</h1>
            <p>
              Experience breathtaking adventures with Paragon Trails, your
              premier guide to the world's most beautiful hiking destinations.
            </p>
            <div className="flex sm:flex-row flex-col gap-4">
              <Button>Plan Your Adventure</Button>
              <Button>View Trails</Button>
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:w-1/2">
            <div className="relative shadow-2xl rounded-lg w-full h-64 md:h-96 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/30" />
              <div className="w-full h-full">
                <div className="flex justify-center items-center h-full">
                  <Image
                    src="https://media.istockphoto.com/id/2155498743/photo/traveler-holding-orange-suitcase-on-city-street.jpg?s=612x612&w=0&k=20&c=3mAFVgvG_-8m4uF8_6ce180vnhnIoycqjwWk2qWAFVs="
                    alt="Hero Trail Image"
                    className="w-full h-full object-cover"
                    width={800}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="my-7">
        <header className="text-start">
          <h2>Why Choose Paragon Trails</h2>
          <h5 className="text-start">
            We combine expert knowledge with passion for nature to create
            unforgettable experiences.
          </h5>
        </header>

        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
          {trailFeatures.map((feature, index) => (
            <div
              key={index}
              className="shadow-lg hover:shadow-xl p-6 rounded-lg transition-shadow"
            >
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p className="">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Trails Section */}
      <section>
        <div>
          <div className="mb-16">
            <header>
              <h2>Popular Tours</h2>
              <p>Discover our most beloved destinations.</p>
            </header>

            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {sortedDestinations.map((trail, index) => (
                <Card
                  key={index}
                  className="shadow-lg hover:shadow-xl p-6 rounded-lg transition-shadow"
                >
                  <CardContent>
                    <h3 className="underline-offset-2 hover:underline">
                      {trail.city}, {trail.country}
                    </h3>
                    <p className="text-muted-foreground text-sm"></p>
                    <p className="mt-2">{trail.subtitle}</p>
                    {trail.quote && (
                      <blockquote className="mt-4 p-0">
                        "{trail.quote}"
                      </blockquote>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button>Explore All Trails</Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div>
        <h2>Ready to Start Your Adventure?</h2>
        <p>
          Join thousands of nature lovers who have discovered the world's most
          beautiful trails with us.
        </p>
        <div className="flex flex-col justify-center gap-4">
          <Button>Book a Trail Guide</Button>
          <Button>Contact Us</Button>
        </div>
      </div>
    </main>
  );
}
