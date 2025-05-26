export default function PrivateAviation() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 font-bold text-4xl">
          Private Aviation: Travel on Your Own Terms
        </h1>
        <p className="mb-6 text-gray-600 text-xl">
          Effortless Luxury from Takeoff to Touchdown
        </p>
        <p className="mx-auto max-w-3xl text-lg">
          Enjoy the freedom, privacy, and comfort of flying privately as part of
          your curated travel experience. Our private aviation services are
          designed for travelers who want to avoid crowded airports, long
          layovers, or rigid commercial flight schedules. Whether you're
          planning a multi-stop itinerary or visiting a remote location, we
          ensure every leg of your journey is handled with care and precision.
        </p>
      </div>

      {/* Why Fly Private Section */}
      <div className="mb-16">
        <h2 className="mb-8 font-bold text-3xl text-center">
          Why Fly Private With Us?
        </h2>
        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="mb-3 font-semibold text-xl">
              Direct Access to Hidden Destinations
            </h3>
            <p>
              Reach off-the-map locations—mountain villages, island resorts, or
              countryside estates—without the need for long transfers or
              connecting flights.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="mb-3 font-semibold text-xl">
              Time-Saving Itineraries
            </h3>
            <p>
              Maximize your travel experience by flying directly between
              destinations, with custom departure times that work around your
              tour—not the other way around.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="mb-3 font-semibold text-xl">
              Complete Privacy & Comfort
            </h3>
            <p>
              Whether traveling as a couple or group, you'll enjoy an
              uninterrupted journey in a cabin designed for comfort, relaxation,
              and personal space.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="mb-3 font-semibold text-xl">
              Fully Integrated With Your Tour
            </h3>
            <p>
              Your flights are booked, timed, and managed as part of your
              itinerary. Ground transportation and accommodations are
              coordinated to match your flight schedule.
            </p>
          </div>
        </div>
      </div>

      {/* What's Available for Rent Section */}
      <div className="mb-16">
        <h2 className="mb-4 font-bold text-3xl text-center">
          What's Available for Rent
        </h2>
        <p className="mb-8 text-center text-lg">
          We offer several aircraft options to suit your itinerary, group size,
          and comfort preferences:
        </p>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="mb-2 font-bold text-2xl">Light Private Jets</h3>
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
            <h3 className="mb-2 font-bold text-2xl">Midsize Jets</h3>
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
            <h3 className="mb-2 font-bold text-2xl">Heavy Jets</h3>
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
            <h3 className="mb-2 font-bold text-2xl">Private Helicopters</h3>
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
      </div>

      {/* Popular Tour Routes Section */}
      <div className="mb-16">
        <h2 className="mb-8 font-bold text-3xl text-center">
          Popular Tour Routes with Private Flights
        </h2>
        <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-sm p-5 border border-gray-100 rounded-lg">
            <h3 className="mb-2 font-semibold">Italy</h3>
            <p>Venice → Tuscany → Amalfi</p>
          </div>
          <div className="bg-white shadow-sm p-5 border border-gray-100 rounded-lg">
            <h3 className="mb-2 font-semibold">Greece</h3>
            <p>Athens → Santorini → Crete</p>
          </div>
          <div className="bg-white shadow-sm p-5 border border-gray-100 rounded-lg">
            <h3 className="mb-2 font-semibold">Japan</h3>
            <p>Tokyo → Osaka → Kyoto</p>
          </div>
          <div className="bg-white shadow-sm p-5 border border-gray-100 rounded-lg">
            <h3 className="mb-2 font-semibold">Southeast Asia</h3>
            <p>Bali → Chiang Mai → Hanoi</p>
          </div>
          <div className="md:col-span-2 lg:col-span-1 bg-white shadow-sm p-5 border border-gray-100 rounded-lg">
            <h3 className="mb-2 font-semibold">U.S.</h3>
            <p>San Francisco → Seattle → Honolulu</p>
          </div>
        </div>
      </div>

      {/* What's Included Section */}
      <div className="mb-16">
        <h2 className="mb-6 font-bold text-3xl text-center">What's Included</h2>
        <ul className="gap-3 grid mx-auto max-w-3xl list-none">
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
      </div>

      {/* Book With Confidence Section */}
      <div className="bg-gray-50 mx-auto p-8 rounded-lg max-w-4xl text-center">
        <h2 className="mb-4 font-bold text-3xl">Book With Confidence</h2>
        <p className="mb-6 text-lg">
          Private aviation is available exclusively to guests booking luxury
          tours through our company. Whether you're celebrating a milestone or
          simply want the highest level of comfort, our team will help you
          choose the best aircraft for your journey.
        </p>
        <p className="mb-8">
          To add private flights to your tour package, speak with your travel
          coordinator or request a custom quote today.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium text-white transition-colors">
          Request a Custom Quote
        </button>
      </div>
    </div>
  );
}
