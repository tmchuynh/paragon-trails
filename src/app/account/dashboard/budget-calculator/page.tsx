import { TripBudgetCalculator } from "@/components/budget-calculator/TripBudgetCalculator";

export default function TripBudgetCalculatorPage() {
  return (
    <div className="mx-auto px-4 py-8 container">
      <div className="mb-8">
        <h1 className="mb-4 font-bold text-3xl text-gray-900 dark:text-white">
          Trip Budget Calculator
        </h1>
        <p className="text-gray-600 text-lg dark:text-gray-300">
          Plan your perfect vacation by setting your budget and selecting
          destinations, activities, and attractions. We'll help you stay within
          budget or create a savings plan to achieve your dream trip.
        </p>
      </div>

      <TripBudgetCalculator />
    </div>
  );
}
