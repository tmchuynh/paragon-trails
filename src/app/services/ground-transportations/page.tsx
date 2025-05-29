"use client";
import ContactDepartmentCard from "@/components/cards/ContactDepartmentCard";
import { Button } from "@/components/ui/button";
import { groundTransportTestimonials } from "@/lib/constants/services/testimonials/groundTransportation";
import { groundTransportationRoutes } from "@/lib/constants/services/transportation/routes/groundTransportationRoutes";
import { formatLanguages } from "@/lib/utils/format";
import { driverLanguages } from "@/lib/utils/get";
import { useRouter } from "next/navigation";

export default function TransportationPage() {
  const router = useRouter();

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      {/* Hero Section */}
      <header>
        <h1>Seamless Journeys on Land</h1>
        <h5>
          Luxury vehicles and expert chauffeurs for your every destination.
        </h5>
        <blockquote>
          "The perfect blend of comfort and style—our ground transport made
          every trip unforgettable."
          <cite>– Sarah L., Exclusive Traveler</cite>
        </blockquote>
      </header>

      {/* Introduction */}
      <section className="mb-10 w-full">
        <p className="mb-4">
          At Paragon Trails, ground transportation is more than a transfer—it is
          the threshold of your journey. Every vehicle, every route, and every
          chauffeur reflects our unwavering commitment to privacy, performance,
          and personalized service. Our fleet features meticulously maintained
          luxury sedans, SUVs, and specialty vehicles, each selected for
          comfort, reliability, and style. Whether you're stepping into a
          chauffeured Mercedes in the heart of Paris, journeying through the
          dramatic fjords of Norway, or arriving in discreet elegance for a
          high-profile event, we ensure the drive is seamless, secure, and
          sophisticated.
        </p>
        <p className="mb-4">
          Our professional drivers are handpicked for their discretion, route
          mastery, and dedication to client care. With local insight and
          multilingual capabilities, they don’t just transport—they anticipate
          and adapt, offering curated stops, real-time adjustments, and a calm,
          composed presence throughout your trip. From the moment the vehicle
          door opens to your final destination, you’re not simply moving from
          place to place—you’re traveling with purpose, precision, and poise.
          Let Paragon Trails set the tone for your journey—effortless, elevated,
          and entirely yours.
        </p>
      </section>

      {/* Service Categories */}
      <section className="mb-10 w-full">
        <h2>Service Categories</h2>
        <h5>Curated for Comfort, Designed for Distinction</h5>
        <p>
          We offer a full suite of ground transportation solutions, precisely
          matched to the tone and tempo of your itinerary.
        </p>
        <Button
          onClick={() =>
            router.push("/services/ground-transportations/rent-a-vehicle")
          }
        >
          View All Vehicle Options
        </Button>

        {/* Ground Transportation */}
        <div className="bg-card mt-5 mb-12 p-6 border border-border rounded-lg">
          <h3>Executive Sedans & Limousines</h3>
          <h5>For discrete arrivals and seamless urban movement.</h5>

          <div className="gap-6 grid md:grid-cols-2 mb-6">
            <div>
              <h4>Models Include:</h4>
              <p>Mercedes-Maybach S-Class, Audi A8 L, Rolls-Royce Ghost</p>
            </div>

            <div>
              <h4>Amenities:</h4>
              <p>
                Climate-controlled cabins, ambient lighting, privacy glass,
                executive seating, rear-cabin media suites
              </p>
            </div>
          </div>

          <p>
            <strong>Ideal For:</strong> Business travel, airport transfers,
            diplomatic appointments
          </p>
        </div>

        <div className="bg-card mb-12 p-6 border border-border rounded-lg">
          <h3>Luxury SUVs & Off-Road Vehicles</h3>
          <h5>Elegance that adapts to every terrain.</h5>

          <div className="gap-6 grid md:grid-cols-2 mb-6">
            <div>
              <h4>Models Include:</h4>
              <p>
                Range Rover Autobiography, Bentley Bentayga, Cadillac Escalade V
                Series
              </p>
            </div>

            <div>
              <h4>Features:</h4>
              <p>
                Adaptive 4WD, panoramic views, cooled compartments, full
                security tint
              </p>
            </div>
          </div>

          <p>
            <strong>Ideal For:</strong> Mixed-terrain excursions, countryside
            retreats, resort transfers
          </p>
        </div>

        <div className="bg-card mb-12 p-6 border border-border rounded-lg">
          <h3>Multi-Passenger Vehicles</h3>
          <h5>Traveling together, arriving as one.</h5>

          <div className="gap-6 grid md:grid-cols-2 mb-6">
            <div>
              <h4>Models Include:</h4>
              <p>
                Mercedes Sprinter Executive Edition, Chrysler Voyager Platinum
              </p>
            </div>

            <div>
              <h4>Amenities:</h4>
              <p>
                Full privacy panels, executive captain seating, media walls,
                on-board concierge option
              </p>
            </div>
          </div>

          <p>
            <strong>Ideal For:</strong> Group travel, destination events,
            private tours
          </p>
        </div>

        <div className="bg-card mb-12 p-6 border border-border rounded-lg">
          <h3>Eco & EV Options</h3>
          <h5>High performance, low impact.</h5>

          <div className="gap-6 grid md:grid-cols-2 mb-6">
            <div>
              <h4>Models Include:</h4>
              <p>Tesla Model S Plaid, Lucid Air, Mercedes EQS</p>
            </div>

            <div>
              <h4>Available In:</h4>
              <p>
                Oslo, Vancouver, Zurich, Singapore, and other green-certified
                cities
              </p>
            </div>
          </div>

          <p>
            <strong>Ideal For:</strong> Eco-conscious travel, short- and
            mid-range intercity transit
          </p>
        </div>
      </section>

      {/* Driver Experience */}
      <section className="mb-10 w-full">
        <h2>Driver Experience</h2>
        <h5>Elite Chauffeurs Trained for Every Contingency</h5>

        <p className="mb-4">
          Paragon Trails chauffeurs are multilingual, culturally informed, and
          trained to handle sensitive, high-profile, or emergency scenarios.
          They all have a Commercial Driver's License (CDL) and undergo
          extensive training in security protocols, evasive driving, and
          passenger safety. They also have a Certified Transportation
          Professional (CTP) certification, ensuring they meet the highest
          standards in the industry. Thei PAX Training ensures they are equipped
          to handle any situation with professionalism and discretion. Also,
          their NDAA Compliance Certification guarantees that they adhere to
          strict security protocols, ensuring the safety and confidentiality of
          your journey.
        </p>

        <div className="gap-6 grid md:grid-cols-3">
          <div className="bg-card p-5 border border-border rounded-lg">
            <h3>Languages Spoken</h3>
            <p>Our drivers speak a variety of languages that include:</p>
            <p className="ml-3">{formatLanguages(driverLanguages)}</p>
          </div>

          <div className="bg-card p-5 border border-border rounded-lg">
            <h3>Optional Skills Training (By Request)</h3>
            <ul className="space-y-2 pl-5 list-disc">
              <li>Evasive driving protocols</li>
              <li>Anti-surveillance measures</li>
              <li>Medical emergency response</li>
            </ul>
          </div>

          <div className="bg-card p-5 border border-border rounded-lg">
            <h3>Professional Standards</h3>
            <p>
              All of our drivers have the following certifications and training
              by our standards:
            </p>
            <ul className="space-y-2 pl-5 list-disc">
              <li>Security Training</li>
              <li>Advanced Route Planning</li>
              <li>Cultural sensitivity certifications</li>
            </ul>
          </div>
        </div>

        <Button
          onClick={() =>
            router.push("/services/ground-transportations/available-drivers")
          }
        >
          View Our Most Experienced Drivers
        </Button>
      </section>

      {/* Seamless Travel Coordination */}
      <section className="mb-10 w-full">
        <h2>Seamless Travel Coordination</h2>
        <p className="mb-4">
          From the moment your aircraft touches down, our logistics team ensures
          your ground connection is already in position. Each transfer is
          mapped, timed, and cross-coordinated with flights, accommodations, and
          event entries.
        </p>

        <div className="gap-6 grid md:grid-cols-3">
          <div className="bg-card p-5 border border-border rounded-lg">
            <h3>24/7 Global Dispatch Support</h3>
          </div>

          <div className="bg-card p-5 border border-border rounded-lg">
            <h3>Live Itinerary Sync & Real-Time Adjustments</h3>
          </div>

          <div className="bg-card p-5 border border-border rounded-lg">
            <h3>On-Call Routing Modifications</h3>
            <p>Available within 30 minutes in most service regions</p>
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="mb-10 w-full">
        <h2>Safety & Security</h2>
        <p className="mb-4">
          Our entire ground operation is engineered with precision and peace of
          mind.
        </p>

        <div className="gap-6 grid md:grid-cols-3">
          <div className="bg-card p-5 border border-border rounded-lg">
            <h3>Fleet Sanitation & Maintenance</h3>
            <p>Daily medical-grade disinfection and safety inspections</p>
          </div>

          <div className="bg-card p-5 border border-border rounded-lg">
            <h3>Driver Oversight</h3>
            <p>Real-time GPS monitoring and command center coordination</p>
          </div>

          <div className="bg-card p-5 border border-border rounded-lg">
            <h3>Emergency Response</h3>
            <p>Global assistance team available at all times</p>
          </div>
        </div>
      </section>

      {/* Sustainability Metrics */}
      <section className="mb-10 w-full">
        <h2>Sustainability Metrics (2024 Reporting)</h2>
        <p className="mb-4">
          Our commitment to conscious travel extends far beyond the road:
        </p>

        <div className="overflow-x-auto">
          <table className="bg-card border border-border min-w-full">
            <thead className="">
              <tr>
                <th className="px-4 py-3 text-left">
                  <h3>Metric</h3>
                </th>
                <th className="px-4 py-3 text-left">
                  <h3>Status</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="px-4 py-3">Carbon Offsetting</td>
                <td className="px-4 py-3">
                  100% of private air charters offset
                </td>
              </tr>
              <tr className="bg-card border border-t border-border">
                <td className="px-4 py-3">EV Ground Fleet Penetration</td>
                <td className="px-4 py-3">65% (goal: 85% by 2026)</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-3">Eco Marine Craft Usage</td>
                <td className="px-4 py-3">72% in reef-protected areas</td>
              </tr>
              <tr className="bg-card border border-t border-border">
                <td className="px-4 py-3">Flight Consolidation Programs</td>
                <td className="px-4 py-3">
                  1,200+ multi-client emissions-reduced merges
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-3">Sustainable Aviation Fuel</td>
                <td className="px-4 py-3">
                  Active at 14 of 22 partner airports
                </td>
              </tr>
              <tr className="bg-card border border-t border-border">
                <td className="px-4 py-3">Clean Ocean Initiative</td>
                <td className="px-4 py-3">
                  1.2 tons of waste removed annually via charter-yacht programs
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="mb-10 w-full">
        <h2>Client Testimonials</h2>

        <div className="gap-6 grid md:grid-cols-3">
          {groundTransportTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-card shadow-md p-5 border border-border rounded-lg"
            >
              <p className="mb-2">"{testimonial.quote}"</p>
              <p className="text-sm">
                — {testimonial.author}, {testimonial.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Integrated Routes */}
      <section className="mb-10 w-full">
        <h2>Popular Integrated Routes</h2>

        <div className="overflow-x-auto">
          <table className="bg-card border border-border min-w-full">
            <thead className="">
              <tr>
                <th className="px-4 py-3 text-left">Route</th>
                <th className="px-4 py-3 text-left">Duration</th>
                <th className="px-4 py-3 text-left">Experience Highlights</th>
              </tr>
            </thead>
            <tbody>
              {groundTransportationRoutes.map((route, index) => (
                <tr key={index} className="border-t border-border">
                  <td className="px-4 py-3">{route.route}</td>
                  <td className="px-4 py-3">{route.totalDuration}</td>
                  <td className="px-4 py-3">{route.highlight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Request Ground Transport */}
      <section className="mb-10 w-full">
        <h2>Request Ground Transport</h2>
        <p className="mb-6">
          Your travel assistant can add, modify, or optimize any vehicle
          assignment within your itinerary. For real-time route adjustments,
          executive road convoys, or enhanced security coordination, contact our
          Transportation Concierge at:
        </p>
      </section>
      <section>
        <ContactDepartmentCard department="Transportation & Charter Services" />
        <ContactDepartmentCard department="Transportation Concierge" />
      </section>
    </div>
  );
}
