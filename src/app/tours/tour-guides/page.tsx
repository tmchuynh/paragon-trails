"use client";

import { Button } from "@/components/ui/button";
import { tourGuides } from "@/lib/constants/staff/tourGuides";
import { useRouter } from "next/navigation";

export default function TourGuides() {
  const router = useRouter();
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1>Tour Guides</h1>
        <h5>
          Passionate Locals. Expert Storytellers. Your Gateway to Authentic
          Experiences.
        </h5>
      </div>

      {/* What Sets Our Guides Apart */}
      <div className="mb-16">
        <h2>What Sets Our Guides Apart?</h2>
        <p>
          At the heart of every unforgettable journey is a guide who brings it
          all to life. Our tour guides are more than just navigators—they are
          cultural ambassadors, expert historians, culinary enthusiasts, and
          friendly faces who turn every moment into a memory. Whether you're
          exploring ancient ruins, hidden street markets, or modern cityscapes,
          our guides ensure you experience it all through a uniquely local lens.
        </p>
        <p>
          Each guide is carefully selected for their deep knowledge, passion for
          storytelling, and commitment to providing an enriching travel
          experience. They are your personal connection to the places you visit,
          sharing insights that go beyond the surface and helping you forge a
          genuine connection with each destination.
        </p>
        <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3 mt-3">
          <div className="shadow-sm p-6 border rounded-lg">
            <h3>Deep Local Knowledge</h3>
            <p>
              Every guide is either a native or a long-term resident of the
              region they serve. They bring deep insight into the culture,
              history, and contemporary life of each destination—far beyond what
              you'll find in a travel book.
            </p>
          </div>
          <div className="shadow-sm p-6 border rounded-lg">
            <h3>Multilingual and Culturally Fluent</h3>
            <p>
              Our team collectively speaks over 20 languages, ensuring seamless
              communication and culturally respectful experiences for travelers
              from around the world.
            </p>
          </div>
          <div className="shadow-sm p-6 border rounded-lg">
            <h3>Professionally Trained and Certified</h3>
            <p>
              All guides undergo rigorous training and hold valid certifications
              and tourism licenses as required by their region. Many also have
              specialized backgrounds in history, art, ecology, or gastronomy.
            </p>
          </div>
          <div className="shadow-sm p-6 border rounded-lg">
            <h3>Accessible and Inclusive</h3>
            <p>
              We prioritize inclusivity and accessibility. Many of our guides
              are trained in accommodating travelers with mobility, sensory, or
              cognitive differences, ensuring that every guest is welcomed and
              cared for.
            </p>
          </div>
          <div className="md:col-span-2 lg:col-span-1 shadow-sm p-6 border rounded-lg">
            <h3>Passion-Driven Service</h3>
            <p>
              Our guides are chosen not only for their expertise, but for their
              passion. They love what they do, and it shows in every story they
              tell, every route they take, and every guest they meet.
            </p>
          </div>
        </div>
      </div>

      {/* Meet Our Guides */}
      <div className="mb-16">
        <h2>Meet a Few of Our Incredible Guides</h2>
        <div className="gap-8 grid md:grid-cols-2">
          {tourGuides.slice(4, 12).map(({ name, city, description }, index) => (
            <div
              key={index}
              className="flex md:flex-row flex-col items-center md:items-start gap-4"
            >
              <div>
                <h3>{name}</h3>
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
      <section>
        <h2>Why It Matters</h2>
        <p>
          We believe travel should foster connection, not just sightseeing.
          That's why our guides are carefully selected for their integrity,
          personality, and commitment to providing enriching, ethical tourism.
          They don't just show you the sights—they help you understand them,
          feel them, and carry them with you long after your journey ends.
        </p>
        <p>
          When you choose a tour with us, you're not just booking a guide;
          you're investing in a local expert who will transform your trip into a
          meaningful experience. From the moment you arrive until your final
          farewell, our guides are dedicated to making your journey
          unforgettable. They are your storytellers, your navigators, and your
          friends in every destination we explore together.
        </p>
      </section>
    </div>
  );
}
