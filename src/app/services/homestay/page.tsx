export default function HomestayPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1 className="mb-4 font-bold text-3xl text-center">Homestay</h1>

      {/* What Is a Homestay Section */}
      <div className="mb-10">
        <h2 className="mb-4 font-semibold text-2xl text-center">
          What Is a Homestay?
        </h2>
        <p className="mb-4 text-lg">
          A homestay is a unique form of accommodation where travelers stay in a
          local resident's home rather than a traditional hotel or rental
          property. This arrangement offers an authentic cultural experience by
          immersing guests in the everyday life, customs, and hospitality of the
          host family.
        </p>
        <p className="mb-4 text-lg">
          Unlike typical lodging options, homestays provide more than just a
          place to sleep—they offer genuine human connection, cultural exchange,
          and a deeper understanding of the destination.
        </p>
      </div>

      {/* Homestay Benefits Section */}
      <section className="mb-10">
        <h2 className="mb-4 font-semibold text-2xl">Why Choose a Homestay?</h2>

        <div className="gap-6 grid md:grid-cols-2">
          <div className="bg-white shadow-sm p-4 border border-gray-100 rounded-lg">
            <h3 className="mb-2 font-semibold">Authentic Local Experience</h3>
            <p>
              Staying with a host family allows you to experience your
              destination as locals do—from traditional meals and home routines
              to community events and customs. It's the most immersive way to
              appreciate a culture firsthand.
            </p>
          </div>

          <div className="bg-white shadow-sm p-4 border border-gray-100 rounded-lg">
            <h3 className="mb-2 font-semibold">Personalized Hospitality</h3>
            <p>
              Hosts often go above and beyond to make your stay comfortable,
              sharing local tips, arranging activities, and sometimes even
              including homemade meals. This personalized attention is rarely
              found in commercial accommodations.
            </p>
          </div>

          <div className="bg-white shadow-sm p-4 border border-gray-100 rounded-lg">
            <h3 className="mb-2 font-semibold">
              Language and Cultural Exchange
            </h3>
            <p>
              Homestays offer an opportunity to practice language skills and
              learn cultural nuances directly from native speakers. This
              interaction enriches your travel experience and broadens your
              perspective.
            </p>
          </div>

          <div className="bg-white shadow-sm p-4 border border-gray-100 rounded-lg">
            <h3 className="mb-2 font-semibold">Cost-Effective Accommodation</h3>
            <p>
              Many homestays are more affordable than hotels, providing
              excellent value without sacrificing comfort. This makes homestays
              a practical choice for budget-conscious travelers who still want
              quality experiences.
            </p>
          </div>

          <div className="md:col-span-2 bg-white shadow-sm p-4 border border-gray-100 rounded-lg">
            <h3 className="mb-2 font-semibold">Safety and Comfort</h3>
            <p>
              Hosts usually provide a safe, welcoming environment, often in
              residential neighborhoods away from tourist-heavy areas. This
              creates a more relaxed, home-like atmosphere.
            </p>
          </div>
        </div>
      </section>

      {/* Who Should Consider Section */}
      <section className="mb-10">
        <h2 className="mb-4 font-semibold text-2xl">
          Who Should Consider a Homestay?
        </h2>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium">Cultural Enthusiasts</p>
            <p className="text-sm">
              who want to dive deeper into local traditions.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium">Solo Travelers</p>
            <p className="text-sm">
              seeking a secure and friendly environment.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium">Students and Language Learners</p>
            <p className="text-sm">
              aiming to improve their skills through immersion.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium">Families and Groups</p>
            <p className="text-sm">
              interested in a more personal travel experience.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium">Budget Travelers</p>
            <p className="text-sm">
              looking for affordable yet authentic accommodations.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="mb-10">
        <h2 className="mb-4 font-semibold text-2xl">
          What to Expect During Your Homestay
        </h2>
        <ul className="space-y-3 pl-6 list-disc">
          <li>
            A private room or shared space within a host's home, often with
            shared common areas such as the kitchen, living room, and bathroom.
          </li>
          <li>
            Interaction with your hosts, who may offer meals, local advice, and
            opportunities to participate in household activities or local
            events.
          </li>
          <li>
            Respectful cultural exchange, where both guest and host learn and
            share.
          </li>
          <li>
            Clear house rules regarding privacy, curfews, guest policies, and
            use of facilities.
          </li>
          <li>
            Unique experiences such as local cooking classes, guided tours, or
            family celebrations depending on your host's offerings.
          </li>
        </ul>
      </section>

      {/* How It Works Section */}
      <section className="mb-10">
        <h2 className="mb-4 font-semibold text-2xl">How It Works</h2>
        <div className="space-y-6">
          <div className="bg-white shadow-sm p-5 border border-gray-100 rounded-lg">
            <h3 className="mb-2 font-semibold">
              1. Choose Your Destination and Travel Dates
            </h3>
            <p>
              Start by selecting the city or region where you want to experience
              a homestay. We offer curated host family options in a variety of
              popular and off-the-beaten-path destinations. Specify your travel
              dates to check availability, ensuring your stay aligns perfectly
              with your itinerary.
            </p>
          </div>

          <div className="bg-white shadow-sm p-5 border border-gray-100 rounded-lg">
            <h3 className="mb-2 font-semibold">
              2. Select from Our Curated List of Host Families
            </h3>
            <p>
              Browse through detailed profiles of verified host families. Each
              profile includes descriptions of the household, accommodations,
              cultural background, and any special offerings such as home-cooked
              meals or local activities. You can filter hosts by preferences
              such as language spoken, dietary accommodations, or family
              composition to find the best fit for your travel style and needs.
            </p>
          </div>

          <div className="bg-white shadow-sm p-5 border border-gray-100 rounded-lg">
            <h3 className="mb-2 font-semibold">
              3. Confirm Your Booking with Support
            </h3>
            <p>
              Once you select a host family, submit your booking request. Our
              team reviews the details to ensure a seamless match and provides
              confirmation along with all necessary check-in information. You'll
              also receive a comprehensive guide to prepare for your stay,
              including cultural etiquette, local customs, and contact
              information for both the host and our support team.
            </p>
          </div>

          <div className="bg-white shadow-sm p-5 border border-gray-100 rounded-lg">
            <h3 className="mb-2 font-semibold">
              4. Enjoy a Unique and Enriching Travel Experience
            </h3>
            <p>
              Upon arrival, settle into your host family's home and immerse
              yourself in daily life. Engage with your hosts, participate in
              cultural activities, and take advantage of local insights that
              only a resident can offer. This hands-on experience transforms
              your trip into a memorable journey beyond typical tourist
              experiences.
            </p>
          </div>

          <div className="bg-white shadow-sm p-5 border border-gray-100 rounded-lg">
            <h3 className="mb-2 font-semibold">
              5. Ongoing Support Throughout Your Stay
            </h3>
            <p>
              Our team remains available throughout your homestay for any
              questions or assistance. We prioritize your comfort and safety to
              ensure your experience is positive and fulfilling from start to
              finish.
            </p>
          </div>
        </div>
      </section>

      {/* How to Book Section */}
      <section className="bg-gray-50 mb-10 p-6 rounded-lg">
        <h2 className="mb-4 font-semibold text-2xl">How to Book a Homestay</h2>
        <p className="mb-4">
          We facilitate homestay bookings at select destinations, ensuring each
          host meets strict standards for safety, cleanliness, and hospitality.
          When you book a homestay through us, you receive:
        </p>

        <ul className="space-y-2 mb-4 pl-6 list-disc">
          <li>Verified hosts with genuine local ties</li>
          <li>Transparent pricing and clear cancellation policies</li>
          <li>Dedicated support before and during your stay</li>
          <li>A pre-arrival guide with cultural tips and expectations</li>
        </ul>
      </section>

      {/* Contact Information Section */}
      <section className="mb-10">
        <h2 className="mb-2 font-semibold text-2xl">Get in Touch</h2>
        <p className="mb-4 text-lg">
          For more information about our homestay options, please contact us at:
        </p>
        <p className="mb-4 text-lg">Email:</p>
        <p className="mb-4 text-lg">Phone: +1 (555) 123-4567</p>
        <p className="mb-4 text-lg">
          Hours: Monday–Friday, 9:00 AM to 5:00 PM PT
        </p>
        <p className="text-lg">
          We look forward to helping you create unforgettable memories with our
          homestay experiences!
        </p>
      </section>

      {/* Final Thoughts Section */}
      <section className="mb-8 text-center">
        <h2 className="mb-4 font-semibold text-2xl">Final Thoughts</h2>
        <p className="mb-6 text-lg">
          A homestay transforms travel from passive sightseeing into active
          cultural participation. It enriches your journey with real
          connections, local knowledge, and unforgettable memories. If you seek
          a travel experience that goes beyond the typical, a homestay is an
          excellent choice.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium text-white transition-colors">
          Explore Available Homestays
        </button>
      </section>
    </div>
  );
}
