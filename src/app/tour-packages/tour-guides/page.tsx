"use client";

import { Button } from "@/components/ui/button";
import { tourGuides } from "@/lib/constants/staff/tourGuides";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TourGuides() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1>Tour Guides</h1>
          <h2 className="mb-6 font-medium text-gray-700 text-xl">
            Passionate Locals. Expert Storytellers. Your Gateway to Authentic
            Experiences.
          </h2>
          <p>
            At the heart of every unforgettable journey is a guide who brings it
            all to life. Our tour guides are more than just navigators—they are
            cultural ambassadors, expert historians, culinary enthusiasts, and
            friendly faces who turn every moment into a memory. Whether you're
            exploring ancient ruins, hidden street markets, or modern
            cityscapes, our guides ensure you experience it all through a
            uniquely local lens.
          </p>
        </div>

        {/* What Sets Our Guides Apart */}
        <div className="mb-16">
          <h2 className="mb-6 font-bold text-2xl text-center">
            What Sets Our Guides Apart?
          </h2>
          <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
            <div className="shadow-sm p-6 border rounded-lg">
              <h3 className="mb-3 font-bold text-xl">Deep Local Knowledge</h3>
              <p>
                Every guide is either a native or a long-term resident of the
                region they serve. They bring deep insight into the culture,
                history, and contemporary life of each destination—far beyond
                what you'll find in a travel book.
              </p>
            </div>
            <div className="shadow-sm p-6 border rounded-lg">
              <h3 className="mb-3 font-bold text-xl">
                Multilingual and Culturally Fluent
              </h3>
              <p>
                Our team collectively speaks over 20 languages, ensuring
                seamless communication and culturally respectful experiences for
                travelers from around the world.
              </p>
            </div>
            <div className="shadow-sm p-6 border rounded-lg">
              <h3 className="mb-3 font-bold text-xl">
                Professionally Trained and Certified
              </h3>
              <p>
                All guides undergo rigorous training and hold valid
                certifications and tourism licenses as required by their region.
                Many also have specialized backgrounds in history, art, ecology,
                or gastronomy.
              </p>
            </div>
            <div className="shadow-sm p-6 border rounded-lg">
              <h3 className="mb-3 font-bold text-xl">
                Accessible and Inclusive
              </h3>
              <p>
                We prioritize inclusivity and accessibility. Many of our guides
                are trained in accommodating travelers with mobility, sensory,
                or cognitive differences, ensuring that every guest is welcomed
                and cared for.
              </p>
            </div>
            <div className="md:col-span-2 lg:col-span-1 shadow-sm p-6 border rounded-lg">
              <h3 className="mb-3 font-bold text-xl">Passion-Driven Service</h3>
              <p>
                Our guides are chosen not only for their expertise, but for
                their passion. They love what they do, and it shows in every
                story they tell, every route they take, and every guest they
                meet.
              </p>
            </div>
          </div>
        </div>

        {/* Meet Our Guides */}
        <div className="mb-16">
          <h2 className="mb-6 font-bold text-2xl text-center">
            Meet a Few of Our Incredible Guides
          </h2>
          <div className="gap-8 grid md:grid-cols-2">
            {tourGuides
              .slice(4, 8)
              .map(({ name, city, country, description }, index) => (
                <div
                  key={index}
                  className="flex md:flex-row flex-col items-center md:items-start gap-4"
                >
                  <div className="flex-shrink-0 bg-gray-200 rounded-full w-32 h-32"></div>
                  <div>
                    <h3 className="font-bold text-xl">
                      {name} – {city}, {country}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="my-4 w-full">
            <Button
              onClick={() =>
                router.push(
                  "/about-paragon-trails/core-team-and-partnerships/tour-guides"
                )
              }
              className="mx-auto"
            >
              Meet The Rest of Our Guides
            </Button>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="bg-gray-50 mb-16 p-8 rounded-lg">
          <h2 className="mb-4 font-bold text-2xl text-center">
            Why It Matters
          </h2>
          <p>
            We believe travel should foster connection, not just sightseeing.
            That's why our guides are carefully selected for their integrity,
            personality, and commitment to providing enriching, ethical tourism.
            They don't just show you the sights—they help you understand them,
            feel them, and carry them with you long after your journey ends.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-bold text-2xl">Ready to Meet Your Guide?</h2>
          <p className="mx-auto mb-8">
            Whether you're traveling solo, with family, or in a group, we'll
            match you with the perfect guide for your interests, language needs,
            and travel style. With us, you're not just visiting—you're truly
            experiencing.
          </p>
          <div className="flex sm:flex-row flex-col justify-center gap-4">
            <Link
              href="/tour-packages"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white transition-colors"
            >
              Browse Our Tours
            </Link>
            <a
              href="/about/team"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white transition-colors"
            >
              Meet Our Team
            </a>
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white transition-colors"
            >
              Contact Us for a Custom Experience
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
