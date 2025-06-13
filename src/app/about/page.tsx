import {
  ArrowRight,
  Compass,
  Heart,
  Leaf,
  MapPin,
  Quote,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

export default function AboutParagonTrails() {
  const commitments = [
    {
      icon: Heart,
      title: "Unmatched Personalization",
      description:
        "Every trip is designed from the ground up based on your preferences, lifestyle, and intentions.",
    },
    {
      icon: Shield,
      title: "Invisible Precision",
      description:
        "Our team manages every detail behind the scenes so you can live in the moment—without ever wondering what comes next.",
    },
    {
      icon: Users,
      title: "Meaningful Connections",
      description:
        "We prioritize immersive experiences that honor local cultures, elevate human connection, and leave a positive impact.",
    },
    {
      icon: Leaf,
      title: "Sustainable Philosophy",
      description:
        "True luxury respects the earth. We partner with eco-conscious properties, support local communities, and promote responsible tourism practices that protect what makes each destination special.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 dark:from-slate-950 via-white dark:via-slate-900 to-blue-50/30 dark:to-blue-950/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),transparent)] opacity-20 dark:opacity-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative mx-auto px-6 lg:px-8 py-24 sm:py-32 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary">
                <Sparkles className="w-4 h-4" />
                <span className="font-medium text-sm">Luxury Redefined</span>
              </div>
            </div>

            <h1 className="font-bold text-4xl text-slate-900 sm:text-6xl lg:text-7xl dark:text-white tracking-tight">
              About <span className="text-primary">Paragon Trails</span>
            </h1>

            <p className="mt-8 text-slate-600 text-xl sm:text-2xl dark:text-slate-300 leading-8">
              Luxury redefined, one journey at a time.
            </p>

            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <div className="bg-gradient-to-r from-transparent to-slate-300 w-8 h-px" />
                <Compass className="w-5 h-5" />
                <div className="bg-gradient-to-l from-transparent to-slate-300 w-8 h-px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Opening Story Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <Quote className="-top-4 -left-4 absolute w-8 h-8 text-primary/20" />
              <div className="mx-auto dark:prose-invert prose prose-xl prose-slate">
                <p className="mb-8 font-light text-2xl text-slate-700 dark:text-slate-300 leading-relaxed">
                  It started with a feeling—a quiet sense that something was
                  missing from modern travel.
                </p>

                <p className="mb-6 text-lg text-slate-600 dark:text-slate-400 leading-8">
                  Too often, luxury is mistaken for extravagance. But for us,
                  luxury is not about how much you spend or how far you go. It's
                  about how you feel the moment you arrive. It's the stillness
                  you experience on a mountaintop with no one else around. It's
                  the intimacy of a candlelit dinner where the only noise is the
                  sound of ocean waves. It's the warmth of being welcomed like
                  family in a place you've never been before.
                </p>

                <p className="mb-6 text-lg text-slate-600 dark:text-slate-400 leading-8">
                  At Paragon Trails, we don't just arrange travel. We craft
                  deeply personal journeys designed to elevate your relationship
                  with the world—and with yourself. We take the time to learn
                  who you are, what inspires you, what restores you. Then, we
                  design a travel experience around that. Every route, every
                  accommodation, every experience is hand-selected to match your
                  rhythm.
                </p>

                <blockquote className="relative bg-primary/5 my-8 p-8 border-none rounded-2xl">
                  <p className="font-medium text-primary text-xl dark:text-primary-foreground italic">
                    Our philosophy is simple: every journey should feel like it
                    was meant only for you.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* New Standard Section */}
        <section className="bg-slate-50/50 dark:bg-slate-900/50 -mx-6 lg:-mx-8 py-24 sm:py-32">
          <div className="mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="items-center gap-16 lg:gap-24 grid lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Star className="w-6 h-6 text-primary" />
                  <h2 className="font-bold text-3xl text-slate-900 sm:text-4xl dark:text-white tracking-tight">
                    A New Standard in Luxury
                  </h2>
                </div>

                <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300">
                  <p>
                    We don't offer packages. We don't follow templates. We begin
                    with questions—real ones—about what you crave in a moment of
                    escape, discovery, or celebration. From there, we build
                    journeys that feel effortless, refined, and alive with
                    meaning.
                  </p>

                  <p>
                    Our team works behind the scenes to coordinate everything
                    with surgical precision, yet you'll never feel the
                    mechanics. All you'll notice is that everything flows.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-center items-center bg-gradient-to-br from-primary/20 to-blue-600/20 p-8 rounded-3xl aspect-square">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-4 w-16 h-16 text-primary" />
                    <p className="font-medium text-lg text-slate-700 dark:text-slate-300">
                      Not louder. Not flashier.
                      <br />
                      Just smarter. Deeper. More human.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experiences Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 font-bold text-3xl text-slate-900 sm:text-4xl dark:text-white tracking-tight">
              Experiences That Matter
            </h2>

            <div className="mx-auto dark:prose-invert prose prose-lg prose-slate">
              <p className="mb-8 text-slate-600 text-xl dark:text-slate-300 leading-8">
                We believe the most luxurious thing we can offer is a sense of
                freedom—freedom to explore, to rest, to wonder, to reconnect.
              </p>

              <div className="gap-8 grid md:grid-cols-2 text-left">
                <div className="bg-white dark:bg-slate-800 shadow-sm p-8 border border-slate-200 dark:border-slate-700 rounded-2xl">
                  <p className="mb-4 text-base text-slate-600 dark:text-slate-300">
                    Whether you're chasing the Northern Lights across Iceland,
                    sipping wine on a hillside in Tuscany, meditating in a
                    silent retreat in Bali, or celebrating love on a remote
                    Caribbean island, we ensure the experience isn't just
                    beautiful—it's yours.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 shadow-sm p-8 border border-slate-200 dark:border-slate-700 rounded-2xl">
                  <p className="mb-4 text-base text-slate-600 dark:text-slate-300">
                    We take pride in our network of elite travel partners, from
                    award-winning resorts and private villas to discreet
                    transport services and expert local guides. These
                    relationships allow us to offer rare access, priority
                    service, and the kinds of moments you won't find on any
                    itinerary.
                  </p>
                </div>
              </div>

              <p className="mt-8 font-medium text-primary text-xl italic">
                They were built for you.
              </p>
            </div>
          </div>
        </section>

        {/* Commitments Section */}
        <section className="bg-gradient-to-br from-primary/5 dark:from-primary/5 via-transparent to-blue-50/50 dark:to-blue-950/20 -mx-6 lg:-mx-8 py-24 sm:py-32">
          <div className="mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-bold text-3xl text-slate-900 sm:text-4xl dark:text-white tracking-tight">
                Our Commitment
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                The pillars that guide every journey we create
              </p>
            </div>

            <div className="gap-8 grid md:grid-cols-2">
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
                    {commitment.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-12 font-bold text-3xl text-slate-900 sm:text-4xl dark:text-white tracking-tight">
              Who We Serve
            </h2>

            <div className="relative bg-white dark:bg-slate-800 shadow-lg p-12 border border-slate-200 dark:border-slate-700 rounded-3xl">
              <div className="-top-6 left-1/2 absolute transform -translate-x-1/2">
                <div className="bg-primary p-4 rounded-full">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>

              <p className="mt-4 text-slate-600 text-xl dark:text-slate-300 leading-8">
                Our travelers are not tourists. They are{" "}
                <span className="font-semibold text-primary">seekers</span>—of
                beauty, clarity, connection, and awe. They come to us to
                celebrate milestones, to escape the noise, to deepen bonds with
                loved ones, or to rediscover themselves.
              </p>

              <div className="gap-6 grid md:grid-cols-2 mt-12 text-left">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-primary" />
                    <span className="text-slate-700 dark:text-slate-300">
                      Couples seeking quiet romance
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-slate-700 dark:text-slate-300">
                      Families looking for enriching adventures
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Compass className="w-5 h-5 text-primary" />
                    <span className="text-slate-700 dark:text-slate-300">
                      Solo travelers in pursuit of renewal
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-slate-700 dark:text-slate-300">
                      Business leaders needing serene retreats
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-12 font-bold text-3xl text-slate-900 sm:text-4xl dark:text-white tracking-tight">
              More Than a Trip—A Legacy
            </h2>

            <div className="mx-auto dark:prose-invert prose prose-lg prose-slate">
              <p className="mb-8 text-slate-600 text-xl dark:text-slate-300 leading-8">
                We know that the memories you create while traveling are some of
                the most enduring chapters of your life story. At Paragon
                Trails, we take that seriously. Every journey we design is an
                investment in your well-being, your relationships, and your
                sense of wonder.
              </p>

              <blockquote className="relative bg-slate-50 dark:bg-slate-800 my-12 p-8 border-none rounded-2xl">
                <Quote className="-top-2 -left-2 absolute w-6 h-6 text-primary/30" />
                <p className="font-medium text-2xl text-slate-900 dark:text-white italic">
                  Because in the end, travel isn't about where you go.
                  <br />
                  It's about how you return.
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32 border-slate-200 dark:border-slate-700 border-t text-center">
          <div className="mx-auto max-w-3xl">
            <div className="bg-gradient-to-br from-primary to-blue-600 p-12 rounded-3xl text-white">
              <h3 className="mb-6 font-bold text-3xl">
                Let Paragon Trails be the architect of your next unforgettable
                journey.
              </h3>

              <p className="mb-8 text-blue-100 text-xl">
                Ready to experience luxury redefined? Let's craft your perfect
                journey together.
              </p>

              <div className="flex sm:flex-row flex-col justify-center gap-4">
                <button className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-primary transition-colors duration-200">
                  Start Planning
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 hover:bg-white/10 px-8 py-3 border border-white/30 rounded-lg font-semibold text-white transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
