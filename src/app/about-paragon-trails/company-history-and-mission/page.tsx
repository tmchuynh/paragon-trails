export default function CompanyHistoryAndMission() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1> Company History & Mission</h1>
        <h5>A Legacy of Elegance in Motion</h5>
      </header>

      <section>
        <h2>Our Story</h2>
        <p>
          In 1994, Paragon Trails was founded with a vision far beyond
          conventional travel. At a time when luxury meant extravagance and
          exclusivity was measured by star ratings, we asked a different
          question:
        </p>
        <p className="mb-4 text-lg italic">
          What if luxury could be redefined—not by excess, but by intention?
        </p>
        <p>
          Our founder, Catherine Elwood, a former private travel consultant for
          diplomatic families and global executives, envisioned a new caliber of
          travel—one that was deeply personal, quietly elegant, and profoundly
          transformative. From a private studio in Santa Barbara, California,
          she began designing journeys that weren't just about destinations, but
          about meaning, clarity, and immersion.
        </p>
      </section>

      <section>
        <h2>Timeline of Excellence</h2>
        <div className="space-y-6">
          {[
            {
              year: "1994",
              title: "Paragon Trails is Founded",
              desc: "Catherine Elwood opens Paragon Trails with the mission to craft ultra-personalized travel experiences for elite clientele. Initial services focused on private European rail and Mediterranean retreats.",
            },
            {
              year: "1998",
              title: "First International Partnership",
              desc: "Secured exclusive agreements with high-end villas and boutique hotels in the Amalfi Coast, expanding private access for clients.",
            },
            {
              year: "2003",
              title: "Expansion to Asia-Pacific",
              desc: "Introduced immersive luxury journeys in Japan, Thailand, and New Zealand—curated with regional cultural experts and vetted local hosts.",
            },
            {
              year: "2008",
              title: "Recognition & Reputation",
              desc: 'Named "Top Luxury Travel Design Firm" by Condé Nast Traveler. Received the Gold Circle Award for Excellence in Client Satisfaction.',
            },
            {
              year: "2012",
              title: "Corporate & Executive Retreat Division Launched",
              desc: "Developed tailored executive wellness and leadership retreats, merging five-star accommodations with curated mental clarity programs.",
            },
            {
              year: "2014",
              title: "20-Year Milestone",
              desc: "Celebrated two decades of service with 90% of business generated through referrals and long-standing client relationships.",
            },
            {
              year: "2017",
              title: "Commitment to Sustainability",
              desc: "Partnered with eco-certified resorts and conservation projects across Africa and South America to integrate meaningful, sustainable practices into client itineraries.",
            },
            {
              year: "2020",
              title: "Global Resilience During Pandemic",
              desc: "Pivoted to offer high-comfort, low-contact experiences, including private island stays, luxury RV road journeys, and remote work + travel residencies.",
            },
            {
              year: "2023",
              title: 'Awarded "Best Luxury Travel Concierge"',
              desc: "Honored by Travel & Leisure World Awards and Virtuoso Circle for outstanding design, service, and innovation.",
            },
            {
              year: "2024",
              title: "Launch of Paragon Private™",
              desc: "Introduced our private membership tier, offering 24/7 concierge, first-access to rare experiences, and personalized travel journals crafted for each journey.",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-6">
              <h1>{item.year}</h1>
              <div>
                <h3 className="mb-2 font-semibold text-xl">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Our Awards & Recognition</h2>
        <ul className="space-y-2 pl-5 list-disc">
          <li>Condé Nast Gold Circle Award – 2008, 2011, 2017</li>
          <li>
            Travel & Leisure Top 10 Luxury Designers – 2013, 2015, 2020, 2023
          </li>
          <li>Virtuoso Circle: Best in Service & Innovation – 2023</li>
          <li>Luxury Travel Advisor Global Elite Winner – 2019</li>
          <li>Forbes Platinum Travel Partner – 2021–Present</li>
          <li>
            Certified Sustainable Travel Partner (Rainforest Alliance & GSTC) –
            2022
          </li>
        </ul>
      </section>

      <section>
        <h2>Our Mission</h2>
        <blockquote className="mx-0 mb-4 pl-4 border-gray-300 border-l-4 text-xl italic">
          To craft journeys that awaken the senses, deepen human connection, and
          uphold an uncompromising standard of quiet luxury—tailored entirely to
          the individual.
        </blockquote>

        <p>
          Our work is driven by a belief that travel is not a commodity. It is a
          canvas. And our responsibility is to help you paint it with clarity,
          ease, and meaning.{" "}
          <span className="italic">
            We are not just travel designers; we are your partners in discovery,
            transformation, and joy.
          </span>
        </p>
      </section>

      <section>
        <h2>Our Core Commitments</h2>
        <div className="gap-6 grid md:grid-cols-2">
          {[
            {
              title: "Human-Centered Design",
              desc: "We never reuse itineraries. Every journey is shaped by real conversations, nuanced insights, and deep personal understanding.",
            },
            {
              title: "Invisible Precision",
              desc: "Behind every seamless moment is a team orchestrating every detail with discretion and rigor—from visas and transfers to custom requests and personal touches.",
            },
            {
              title: "Elevated Partnerships",
              desc: "We maintain a global network of over 200 trusted partners, each handpicked for excellence, discretion, and character—from private guides to secluded estates and off-market charters.",
            },
            {
              title: "Sustainability with Integrity",
              desc: "True luxury respects the planet. We align with green-certified properties, minimize travel footprints, and prioritize cultural integrity and local stewardship in every region we serve.",
            },
            {
              title: "Legacy of Trust",
              desc: "With a client retention rate over 90%, our relationships are built to last. Many of our earliest travelers continue to journey with us today—often with their children now by their side.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-card shadow-sm p-5 border border-border rounded-lg"
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Looking Forward</h2>
        <p>
          As we step into our fourth decade, Paragon Trails remains anchored by
          the values that shaped us—intentionality, discretion, beauty, and
          humanity. But we are not standing still.
        </p>
        <p>
          We are investing in innovation, sustainability, and next-generation
          tools to deliver an even more fluid, secure, and emotionally resonant
          travel experience.
        </p>
        <p>
          Because for us, travel is not about the itinerary. It's about you—the
          person you become through movement, immersion, and stillness.
        </p>
      </section>

      <div className="my-8 pt-8 border-t w-full text-center">
        <p className="font-bold text-2xl">Paragon Trails.</p>
        <p className="text-lg italic">
          Luxury redefined, one journey at a time.
        </p>
      </div>
    </div>
  );
}
