"use client";

import { Button } from "@/components/ui/button";
import { aviationTestimonials } from "@/lib/constants/services/testimonials/aviationTestimonials";
import { popularAviationPrivateTourRoutes } from "@/lib/constants/services/transportation/routes/popularPrivateTourRoutes";
import { sortByProperty } from "@/lib/utils/sort";
import { useRouter } from "next/navigation";

export default function PrivateAviation() {
  const router = useRouter();
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      {/* Hero Section */}

      <header>
        <h1>Travel on Your Own Terms</h1>
        <h5>Effortless Luxury from Takeoff to Touchdown</h5>
        <p>
          Enjoy the freedom, privacy, and comfort of flying privately as part of
          your curated travel experience. Our private aviation services are
          designed for travelers who want to avoid crowded airports, long
          layovers, or rigid commercial flight schedules. Whether you're
          planning a multi-stop itinerary or visiting a remote location, we
          ensure every leg of your journey is handled with care and precision.
        </p>
      </header>

      {/* Why Fly Private Section */}
      <section>
        <h2>Why Fly Private With Us?</h2>
        <div className="gap-8 grid lg:grid-cols-2">
          <div className="flex flex-col justify-between bg-white shadow-md p-6 rounded-lg">
            <h3>Direct Access to Hidden Destinations</h3>
            <p>
              Reach off-the-map locations—mountain villages, island resorts, or
              countryside estates—without the need for long transfers or
              connecting flights.
            </p>
          </div>
          <div className="flex flex-col justify-between bg-white shadow-md p-6 rounded-lg">
            <h3>Customized Time-Saving Itineraries</h3>
            <p>
              Maximize your travel experience by flying directly between
              destinations, with custom departure times that work around your
              tour—not the other way around.
            </p>
          </div>
          <div className="flex flex-col justify-between bg-white shadow-md p-6 rounded-lg">
            <h3>Complete Privacy & Comfort</h3>
            <p>
              Whether traveling as a couple or group, you'll enjoy an
              uninterrupted journey in a cabin designed for comfort, relaxation,
              and personal space.
            </p>
          </div>
          <div className="flex flex-col justify-between bg-white shadow-md p-6 rounded-lg">
            <h3>Fully Integrated With Your Tour</h3>
            <p>
              Your flights are booked, timed, and managed as part of your
              itinerary. Ground transportation and accommodations are
              coordinated to match your flight schedule.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section>
        <h2>What's Included</h2>
        <ul className="gap-3 grid lg:grid-cols-3 mx-auto list-none">
          <li className="flex items-center">
            <div className="mr-3 text-green-500">✓</div>
            <span>Personalized flight schedules matched to your tour</span>
          </li>
          <li className="flex items-center">
            <div className="mr-3 text-green-500">✓</div>
            <span>All logistics, from ground transfer to luggage handling</span>
          </li>
          <li className="flex items-center">
            <div className="mr-3 text-green-500">✓</div>
            <span>VIP airport lounge access (where available)</span>
          </li>
          <li className="flex items-center">
            <div className="mr-3 text-green-500">✓</div>
            <span>Onboard refreshments and optional full meals</span>
          </li>
          <li className="flex items-center">
            <div className="mr-3 text-green-500">✓</div>
            <span>Safety-checked aircraft and professional pilots</span>
          </li>
        </ul>
      </section>

      {/* What's Available for Rent Section */}
      <section>
        <h2>What's Available for Rent</h2>
        <p>
          We offer several aircraft options to suit your itinerary, group size,
          and comfort preferences. Our aviation team will work with you to
          select the best aircraft for your journey, ensuring a seamless travel
          experience from start to finish.
        </p>
        <div className="flex md:flex-row flex-col gap-4 my-3">
          <Button
            onClick={() =>
              router.push("/services/private-aviation/aviation-personnel")
            }
          >
            Meet Our Aviation team
          </Button>
          <Button
            onClick={() => router.push("/services/private-aviation/aircrafts")}
          >
            Explort Our Available Aircrafts
          </Button>
        </div>
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3>Light Private Jets</h3>
            <p className="mb-3">
              Ideal for short flights between cities or nearby countries. Best
              for couples or small groups (up to 6 guests).
            </p>
            <div className="gap-4 grid md:grid-cols-2">
              <div>
                <h4 className="font-semibold">Example Use:</h4>
                <p>Florence to Nice, Tokyo to Osaka</p>
              </div>
              <div>
                <h4 className="font-semibold">Features:</h4>
                <p>
                  Comfortable seating, onboard snacks, Wi-Fi, and personalized
                  service
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3>Midsize Jets</h3>
            <p className="mb-3">
              Perfect for longer routes or groups of 6–8 guests. More cabin
              space and amenities for a premium in-air experience.
            </p>
            <div className="gap-4 grid md:grid-cols-2">
              <div>
                <h4 className="font-semibold">Example Use:</h4>
                <p>Barcelona to Athens, Rome to Santorini</p>
              </div>
              <div>
                <h4 className="font-semibold">Features:</h4>
                <p>Inflight dining, spacious seating, onboard entertainment</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3>Heavy Jets</h3>
            <p className="mb-3">
              Used for long-distance or international flights. Accommodates
              larger groups and offers maximum comfort.
            </p>
            <div className="gap-4 grid md:grid-cols-2">
              <div>
                <h4 className="font-semibold">Example Use:</h4>
                <p>
                  U.S. to Europe or Asia, multi-stop tours across continents
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Features:</h4>
                <p>
                  Full reclining seats, lounge areas, onboard beds, full-service
                  crew
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3>Private Helicopters</h3>
            <p className="mb-3">
              For short-range, scenic transfers—especially useful for island
              destinations, vineyards, or mountainous areas.
            </p>
            <div className="gap-4 grid md:grid-cols-2">
              <div>
                <h4 className="font-semibold">Example Use:</h4>
                <p>
                  Amalfi Coast villa transfers, island-to-island hops in Greece
                  or Indonesia
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Features:</h4>
                <p>Panoramic windows, quiet cabin, direct-to-location access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 w-full">
        <h2>Client Testimonials</h2>

        <div className="gap-6 grid md:grid-cols-3">
          {aviationTestimonials.map((testimonial, index) => (
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

      {/* Popular Tour Routes Section */}
      <section>
        <h2>Popular Tour Routes with Private Flights</h2>
        <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
          {sortByProperty(popularAviationPrivateTourRoutes, "flightPath").map(
            (route, index) => (
              <div
                key={index}
                className="flex flex-col justify-between bg-white shadow-sm p-5 border border-gray-100 rounded-lg"
              >
                <div>
                  <h3>{route.routeName}</h3>
                  <p>{route.flightPath}</p>
                  <ul className="mb-3 pl-5 list-disc">
                    {route.highlights.map((highlight, idx) => (
                      <li key={idx} className="pl-5 list-disc">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Book With Confidence Section */}
      <section>
        <h2>Book With Confidence</h2>
        <p>
          Private aviation is available exclusively to guests booking luxury
          tours through our company. Whether you're celebrating a milestone or
          simply want the highest level of comfort, our team will help you
          choose the best aircraft for your journey.
        </p>
        <p>
          To add private flights to your tour package, speak with your travel
          coordinator or request a custom quote today.
        </p>
        <Button>Request a Custom Quote</Button>
      </section>
    </div>
  );
}
