import { TripBudgetCalculator } from "@/components/budget-calculator/TripBudgetCalculator";

export default function TripBudgetCalculatorPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        <div className="mb-8">
          <h1 className="mb-6 font-bold text-4xl text-slate-900 lg:text-5xl dark:text-white">
            Trip Budget Calculator
          </h1>
          <p className="mx-auto mb-8 text-lg text-slate-600 lg:text-xl dark:text-slate-400">
            Plan your perfect vacation by setting your budget and selecting
            destinations, activities, and attractions. We'll help you stay
            within budget or create a savings plan to achieve your dream trip.
          </p>
        </div>

        <TripBudgetCalculator />
      </div>
    </div>
  );
}
