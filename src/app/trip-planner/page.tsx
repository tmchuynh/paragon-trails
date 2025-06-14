import TripPlannerContainer from "@/components/trip-planner/TripPlannerContainer";

export default function TripPlanner() {
  return (
    <div className="mx-auto px-4 py-8 container">
      <div className="mb-8 text-center">
        <h1 className="mb-4 font-bold text-4xl text-gray-900 dark:text-white">
          Trip Planner
        </h1>
        <p className="mx-auto max-w-2xl text-gray-600 text-lg dark:text-gray-300">
          Plan your perfect vacation day by day! Select your destination, choose
          your hotel, and organize activities, attractions, and tours with our
          intuitive drag-and-drop planner.
        </p>
      </div>
      <TripPlannerContainer />
    </div>
  );
}
