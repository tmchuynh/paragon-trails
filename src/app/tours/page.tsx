export default function ToursPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>Explore Our Tours</h1>
        <p>
          Discover the best tours available in your city. From cultural
          experiences to adventure trips, we have something for everyone.
        </p>
      </header>

      <section className="mt-6">
        <h2 className="mb-4 font-semibold text-xl">Available Tours</h2>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder for tour cards */}
          {/* Replace with actual tour data when available */}
          <div className="bg-card shadow-lg hover:shadow-xl p-6 border border-border rounded-lg h-full transition-shadow overflow-hidden">
            <h3>Sample Tour</h3>
            <p>Details about the sample tour.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
