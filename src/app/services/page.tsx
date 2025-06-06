export default function RentalsForYourNextAdventurePage() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-4 min-h-screen">
      <h1 className="mb-6 font-bold text-4xl">
        Rentals for Your Next Adventure
      </h1>
      <p className="mb-8 max-w-2xl text-center text-lg">
        Explore our range of rentals to enhance your travel experience with
        Paragon Trails.
      </p>
      <a
        href="/services/rentals/explore"
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white transition-colors"
      >
        Explore Rentals
      </a>
    </div>
  );
}
