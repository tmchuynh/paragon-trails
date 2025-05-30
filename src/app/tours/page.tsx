"use client";

import ContactDepartmentCard from "@/components/cards/ContactDepartmentCard";
import { Button } from "@/components/ui/button";
import { tourCatorgories } from "@/lib/constants/staff/tourCategories";
import { useRouter } from "next/navigation";

export default function TourPackages() {
  const router = useRouter();
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Explore by Category</h1>
        <h5>Find Your Perfect Journey by Theme, Region, or Style</h5>
        <p>
          Whether you're seeking a luxury retreat, a cultural deep dive, a
          family-friendly adventure, or an off-the-grid expedition, our curated
          categories make it easy to discover tours that match your interests
          and travel style. Each collection has been thoughtfully designed by
          experts and local partners to offer exceptional, immersive experiences
          that go far beyond the ordinary. Start by exploring a category that
          inspires you—then let us help you make it your reality.
        </p>
      </header>

      <section>
        <h2>Overview</h2>
        <p>
          Discover the perfect tour package tailored to your travel dreams. From
          breathtaking landscapes to cultural experiences, we offer a variety of
          packages designed to create unforgettable memories. Explore our
          featured tours and find the one that suits your adventure spirit!
          Whether you're seeking a serene getaway or an action-packed journey,
          our tour packages are crafted to provide you with the best experiences
          possible. Each package includes carefully selected destinations,
          accommodations, and activities to ensure a seamless travel experience.
          Join us as we take you on a journey through stunning locales, rich
          cultures, and breathtaking adventures. Let us help you create the
          perfect itinerary that matches your interests and travel style. With
          our expert guides and local insights, you'll discover hidden gems and
          iconic landmarks alike. Experience the world like never before with
          our thoughtfully curated tour packages, designed to immerse you in the
          beauty and diversity of each destination. Whether you're traveling
          solo, with family, or friends, our packages cater to all types of
          travelers.
        </p>
        <div className="flex md:flex-row flex-col gap-5 mt-4">
          <Button
            onClick={() =>
              router.push("/luxurious-destinations/popular-destinations")
            }
          >
            Explore Popular Destinations
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              router.push(
                "/about-paragon-trails/core-team-and-partnerships/tour-guides"
              )
            }
          >
            Meet Our Wonderful Tour Guides
          </Button>
        </div>
      </section>

      <section>
        <ContactDepartmentCard department="Custom Tour Arrangements" />
      </section>

      <section className="gap-5 grid xl:grid-cols-2 divide-y">
        {tourCatorgories.map((category) => (
          <section
            key={category.id}
            className="flex flex-col justify-between pb-15"
          >
            <div>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </div>
            <ul className="mt-2 pl-5 list-disc">
              {category.tags?.map((tag) => (
                <li key={tag} className="capitalize">
                  {tag}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </div>
  );
}
