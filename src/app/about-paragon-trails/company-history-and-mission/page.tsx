import { Award, Calendar, Globe, Heart, Shield, Users } from "lucide-react";

export default function CompanyHistoryAndMission() {
  const timelineEvents = [
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
  ];

  const awards = [
    "Condé Nast Gold Circle Award – 2008, 2011, 2017",
    "Travel & Leisure Top 10 Luxury Designers – 2013, 2015, 2020, 2023",
    "Virtuoso Circle: Best in Service & Innovation – 2023",
    "Luxury Travel Advisor Global Elite Winner – 2019",
    "Forbes Platinum Travel Partner – 2021–Present",
    "Certified Sustainable Travel Partner (Rainforest Alliance & GSTC) – 2022",
  ];

  const commitments = [
    {
      icon: Heart,
      title: "Human-Centered Design",
      desc: "We never reuse itineraries. Every journey is shaped by real conversations, nuanced insights, and deep personal understanding.",
    },
    {
      icon: Shield,
      title: "Invisible Precision",
      desc: "Behind every seamless moment is a team orchestrating every detail with discretion and rigor—from visas and transfers to custom requests and personal touches.",
    },
    {
      icon: Globe,
      title: "Elevated Partnerships",
      desc: "We maintain a global network of over 200 trusted partners, each handpicked for excellence, discretion, and character—from private guides to secluded estates and off-market charters.",
    },
    {
      icon: Users,
      title: "Sustainability with Integrity",
      desc: "True luxury respects the planet. We align with green-certified properties, minimize travel footprints, and prioritize cultural integrity and local stewardship in every region we serve.",
    },
    {
      icon: Award,
      title: "Legacy of Trust",
      desc: "With a client retention rate over 90%, our relationships are built to last. Many of our earliest travelers continue to journey with us today—often with their children now by their side.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 dark:from-slate-950 via-white dark:via-slate-900 to-slate-50 dark:to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),transparent)] opacity-20" />
        <div className="relative mx-auto px-6 lg:px-8 py-24 sm:py-32 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-bold text-4xl text-slate-900 sm:text-6xl dark:text-white tracking-tight">
              Company History & <span className="text-primary">Mission</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-8">
              A Legacy of Elegance in Motion
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Our Story Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="mb-8 font-bold text-3xl text-slate-900 sm:text-4xl dark:text-white tracking-tight">
                Our Story
              </h2>
            </div>

            <div className="mx-auto dark:prose-invert prose prose-lg prose-slate">
              <p className="text-slate-600 text-xl dark:text-slate-300 leading-8">
                In 1994, Paragon Trails was founded with a vision far beyond
                conventional travel. At a time when luxury meant extravagance
                and exclusivity was measured by star ratings, we asked a
                different question:
              </p>

              <blockquote className="relative bg-primary/5 my-8 p-8 border-none rounded-2xl">
                <p className="font-medium text-2xl text-primary dark:text-primary-foreground italic">
                  "What if luxury could be redefined—not by excess, but by
                  intention?"
                </p>
              </blockquote>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-8">
                Our founder, Catherine Elwood, a former private travel
                consultant for diplomatic families and global executives,
                envisioned a new caliber of travel—one that was deeply personal,
                quietly elegant, and profoundly transformative. From a private
                studio in Santa Barbara, California, she began designing
                journeys that weren't just about destinations, but about
                meaning, clarity, and immersion.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-slate-50/50 dark:bg-slate-900/50 -mx-6 lg:-mx-8 py-24 sm:py-32">
          <div className="mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-bold text-3xl text-slate-900 sm:text-4xl dark:text-white tracking-tight">
                Timeline of Excellence
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Three decades of innovation, growth, and unwavering commitment
                to excellence
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="top-0 bottom-0 left-8 absolute bg-gradient-to-b from-primary via-primary/50 to-primary w-0.5"></div>

              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="group relative flex gap-8">
                    {/* Timeline dot */}
                    <div className="flex flex-shrink-0 justify-center items-center bg-primary shadow-lg rounded-full w-16 h-16 transition-transform duration-300 group-hover:scale-110">
                      <Calendar className="w-6 h-6 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white dark:bg-slate-800 shadow-sm group-hover:shadow-lg p-8 border border-slate-200 dark:border-slate-700 rounded-2xl transition-all duration-300">
                      <div className="flex sm:flex-row flex-col sm:items-center gap-4 mb-4">
                        <span className="font-bold text-3xl text-primary">
                          {event.year}
                        </span>
                        <h3 className="font-semibold text-slate-900 text-xl dark:text-white">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {event.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-16 font-bold text-3xl text-slate-900 sm:text-4xl dark:text-white tracking-tight">
              Awards & Recognition
            </h2>

            <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg p-6 border border-slate-200 dark:border-slate-700 rounded-xl transition-all hover:-translate-y-1 duration-300"
                >
                  <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-lg w-12 h-12">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-slate-600 text-sm dark:text-slate-300 leading-relaxed">
                    {award}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-gradient-to-br from-primary/5 via-transparent to-primary/5 -mx-6 lg:-mx-8 py-24 sm:py-32">
          <div className="mx-auto px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="mb-12 font-bold text-3xl text-slate-900 sm:text-4xl dark:text-white tracking-tight">
              Our Mission
            </h2>

            <blockquote className="relative bg-white dark:bg-slate-800 shadow-lg p-12 border border-slate-200 dark:border-slate-700 rounded-3xl">
              <div className="-top-4 left-1/2 absolute transform -translate-x-1/2">
                <div className="bg-primary p-3 rounded-full">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              <p className="mb-8 font-medium text-2xl text-slate-900 dark:text-white leading-relaxed">
                "To craft journeys that awaken the senses, deepen human
                connection, and uphold an uncompromising standard of quiet
                luxury—tailored entirely to the individual."
              </p>

              <div className="mx-auto dark:prose-invert prose prose-lg prose-slate">
                <p className="text-slate-600 dark:text-slate-300">
                  Our work is driven by a belief that travel is not a commodity.
                  It is a canvas. And our responsibility is to help you paint it
                  with clarity, ease, and meaning.{" "}
                  <em>
                    We are not just travel designers; we are your partners in
                    discovery, transformation, and joy.
                  </em>
                </p>
              </div>
            </blockquote>
          </div>
        </section>

        {/* Core Commitments */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-bold text-3xl text-slate-900 sm:text-4xl dark:text-white tracking-tight">
                Our Core Commitments
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                The principles that guide every journey we create
              </p>
            </div>

            <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
              {commitments.map((commitment, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl p-8 border border-slate-200 dark:border-slate-700 rounded-2xl transition-all hover:-translate-y-2 duration-300"
                >
                  <div className="flex justify-center items-center bg-primary/10 group-hover:bg-primary/20 mb-6 rounded-xl w-16 h-16 transition-colors duration-300">
                    <commitment.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="mb-4 font-semibold text-slate-900 text-xl dark:text-white">
                    {commitment.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {commitment.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Looking Forward */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="font-bold text-3xl text-slate-900 sm:text-4xl dark:text-white tracking-tight">
                Looking Forward
              </h2>
            </div>

            <div className="mx-auto text-center dark:prose-invert prose prose-lg prose-slate">
              <p className="mb-6 text-slate-600 text-xl dark:text-slate-300 leading-8">
                As we step into our fourth decade, Paragon Trails remains
                anchored by the values that shaped us—intentionality,
                discretion, beauty, and humanity. But we are not standing still.
              </p>
              <p className="mb-6 text-lg text-slate-600 dark:text-slate-300 leading-8">
                We are investing in innovation, sustainability, and
                next-generation tools to deliver an even more fluid, secure, and
                emotionally resonant travel experience.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-8">
                Because for us, travel is not about the itinerary. It's about
                you—the person you become through movement, immersion, and
                stillness.
              </p>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-24 sm:py-32 border-slate-200 dark:border-slate-700 border-t text-center">
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 font-bold text-4xl text-slate-900 dark:text-white">
              Paragon Trails
            </h3>
            <p className="font-medium text-primary text-xl italic">
              Luxury redefined, one journey at a time.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
