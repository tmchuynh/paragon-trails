"use client";

import { Button } from "@/components/ui/button";
import { yachtTestimonials } from "@/lib/constants/services/testimonials/yachtTestimonials";
import { yachtDestinations } from "@/lib/constants/services/transportation/routes/yachtDestinations";
import { sortByProperty } from "@/lib/utils/sort";
import { useRouter } from "next/navigation";

export default function YachtCharters() {
  const router = useRouter();
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      {/* Hero Section */}
      <header>
        <h1>Yacht Charters</h1>
        <blockquote>Explore the Waterways in Unmatched Luxury</blockquote>
        <h5>Experience the Ultimate Freedom and Privacy on the Water</h5>
      </header>

      <section>
        <h2>Indulge in an Experience Exclusively for You</h2>
        <p>
          Enjoy complete privacy, personalized service, and flexible itineraries
          that put you in control of your day on the water. Transform your
          vacation into an extraordinary adventure by renting a private yacht
          charter at your current destination. Whether you find yourself in
          vibrant San Diego, the enchanting Amalfi Coast, or the idyllic Greek
          Islands, our yacht charters offer unparalleled access to pristine
          coastlines, hidden coves, and spectacular vistas—all from the comfort
          of a private vessel tailored to your desires.
        </p>
      </section>

      {/* Availability Section */}
      <section>
        <h2>Immediate Availability & Flexible Booking Options</h2>
        <p>
          We understand that travel plans can change on a whim. That's why we
          offer yacht charter rentals that can be arranged on short notice,
          provided availability, allowing you to seize the moment while you are
          at your destination. Our local concierge teams coordinate every
          detail, ensuring a seamless booking experience. Whether you want to
          embark on a spontaneous half-day cruise or plan a full-day luxury
          outing, we handle logistics so you can focus on creating memories.
          Advance bookings are encouraged for larger yachts or specialized
          requests, but rest assured we accommodate last-minute needs wherever
          possible.
        </p>
      </section>

      {/* Charter Packages Section */}
      <section>
        <h2>Comprehensive Charter Packages Tailored to Your Needs</h2>
        <p>
          Our yacht charters include everything necessary for a premium
          seafaring experience:
        </p>

        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3>Professional Crew and Captain</h3>
            <p>
              Each charter includes a licensed captain and crew members who are
              experts in local waters, ensuring your safety and comfort while
              providing impeccable service.
            </p>
            <Button
              onClick={() =>
                router.push(
                  "/services/yacht-charters/captains-and-crew-members"
                )
              }
            >
              Meet Our Expert Captains and Crew Members
            </Button>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3>Customizable Itineraries</h3>
            <p>
              Choose your destinations and pace—whether it's exploring secluded
              beaches, visiting local landmarks by sea, or enjoying a calm
              sunset sail.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3>State-of-the-Art Yachts</h3>
            <p>
              Our fleet features a variety of vessels equipped with modern
              navigation systems, elegant interiors, and outdoor amenities like
              sun decks, shaded lounges, and entertainment systems.
            </p>
            <Button
              onClick={() =>
                router.push("/services/yacht-charters/rent-a-yacht")
              }
            >
              Explort Our Available Yachts
            </Button>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3>Onboard Comforts</h3>
            <p>
              Many yachts offer spacious cabins, fully equipped galleys,
              bathrooms, climate control, Wi-Fi, and water sports equipment such
              as paddleboards, snorkels, and jet skis.
            </p>
          </div>
          <div className="md:col-span-2 lg:col-span-1 bg-white shadow-md p-6 rounded-lg">
            <h3>Optional Add-Ons</h3>
            <p>
              Enhance your experience with gourmet catering prepared by onboard
              chefs, curated wine and cocktail selections, live entertainment,
              professional photography services, and water activities like scuba
              diving or fishing excursions.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10 w-full">
        <h2>Client Testimonials</h2>

        <div className="gap-6 grid md:grid-cols-3">
          {yachtTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-gray-50 shadow-md p-5 rounded-lg"
            >
              <p className="mb-2">"{testimonial.quote}"</p>
              <p className="text-gray-600 text-sm">
                — {testimonial.author}, {testimonial.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Destinations Section */}
      <section>
        <h2>Destinations Where Yacht Charters Are Available</h2>
        <p>
          We provide yacht charter services at premier coastal and island
          destinations, including but not limited to:
        </p>
        <p className="text-sm italic">
          Additional destinations may be available based on your itinerary and
          location.
        </p>
        <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
          {sortByProperty(yachtDestinations, "location").map(
            (destination, index) => (
              <div
                key={index}
                className="bg-white shadow-sm p-5 border border-gray-100 rounded-lg"
              >
                <h3>{destination.location}</h3>
                <p>{destination.description}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Yacht Types Section */}
      <section>
        <h2>Yacht Types for Every Occasion</h2>
        <p>
          Our fleet is diverse, allowing you to select the ideal yacht type for
          your group size, style, and itinerary:
        </p>

        <div className="gap-6 grid md:grid-cols-2">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3>Motor Yachts</h3>
            <p>
              High-powered, luxurious vessels perfect for fast coastal cruises
              and day trips.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3>Sailing Yachts</h3>
            <p>
              Elegant and traditional, ideal for a relaxed and scenic sailing
              experience.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3>Catamarans</h3>
            <p>
              Spacious, stable, and ideal for families or groups seeking comfort
              and social spaces.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3>Superyachts</h3>
            <p>
              Ultra-luxury vessels with multiple decks, lavish accommodations,
              and top-tier amenities for those seeking an exceptional private
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Ideal Uses Section */}
      <section>
        <h2>Ideal Uses for Yacht Charters</h2>
        <div className="gap-6 grid md:grid-cols-3">
          <div className="bg-white shadow-sm p-5 border border-gray-100 rounded-lg">
            <h3>Romantic Getaways</h3>
            <p>
              Private sunset sails, intimate dining onboard, and secluded
              anchorages provide a perfect setting for couples.
            </p>
          </div>
          <div className="bg-white shadow-sm p-5 border border-gray-100 rounded-lg">
            <h3>Family and Group Adventures</h3>
            <p>
              Spacious yachts accommodate family groups, offering water toys and
              entertainment options for all ages.
            </p>
          </div>
          <div className="bg-white shadow-sm p-5 border border-gray-100 rounded-lg">
            <h3>Special Celebrations</h3>
            <p>
              Birthdays, anniversaries, corporate events, or exclusive parties
              can be hosted in style with customized catering and entertainment.
            </p>
          </div>
          <div className="bg-white shadow-sm p-5 border border-gray-100 rounded-lg">
            <h3>Adventure and Exploration</h3>
            <p>
              Snorkeling, diving, fishing, or island-hopping excursions tailored
              to your interests.
            </p>
          </div>
          <div className="bg-white shadow-sm p-5 border border-gray-100 rounded-lg">
            <h3>Relaxation and Wellness</h3>
            <p>
              Enjoy a day of sunbathing, reading, or meditating on the deck with
              full crew service attending to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section>
        <h2>How to Secure Your Yacht Charter</h2>
        <p>
          When you are already at your destination, arranging a yacht charter is
          simple:
        </p>

        <ol className="space-y-4 mx-auto mb-8 pl-6 list-decimal">
          <li className="pl-2">
            Contact your local tour coordinator or concierge desk for immediate
            availability.
          </li>
          <li className="pl-2">
            Provide your preferred date, duration, and any special requests.
          </li>
          <li className="pl-2">
            Receive a detailed itinerary and confirmation.
          </li>
          <li className="pl-2">
            Enjoy a hassle-free boarding experience with full support from our
            team.
          </li>
        </ol>

        <p className="italic">
          For larger groups or peak travel seasons, we recommend booking in
          advance to guarantee your preferred vessel and schedule.
        </p>
      </section>

      {/* Why Choose Section */}
      <section className="mx-auto">
        <h2>Why Choose Our Yacht Charters?</h2>
        <p>
          We combine local expertise, a premium fleet, and personalized service
          to deliver an exclusive maritime experience unlike any other. Our
          commitment to quality, safety, and luxury ensures that every charter
          is a seamless blend of adventure, comfort, and style.
        </p>
        <p>
          Set sail with us and discover your destination from a breathtaking new
          perspective.
        </p>
        <Button>Inquire About Availability</Button>
      </section>
    </div>
  );
}
