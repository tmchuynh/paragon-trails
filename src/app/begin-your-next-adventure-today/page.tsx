export default function BeginYourNextAdventureToday() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-4 min-h-screen">
      <h1 className="mb-6 font-bold text-4xl">
        Begin Your Next Adventure Today
      </h1>
      <p className="mb-8 max-w-2xl text-center text-lg">
        Discover the world with Paragon Trails, where every journey is a step
        towards sustainable and enriching travel experiences.
      </p>
      <a
        href="/explore-destinations"
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white transition-colors"
      >
        Explore Destinations
      </a>
    </div>
  );
}
