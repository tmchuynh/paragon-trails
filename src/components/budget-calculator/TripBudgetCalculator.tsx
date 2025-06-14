"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calculator,
  CheckCircle,
  DollarSign,
  Target,
  TrendingUp,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

// Import mock data
import { mockActivities } from "@/data/activities";
import { mockAttractions } from "@/data/attractions";
import { mockDestinations } from "@/data/destinations";
import { mockTours } from "@/data/tours";

// Ensure mock data is always an array
const safeActivities = Array.isArray(mockActivities) ? mockActivities : [];
const safeAttractions = Array.isArray(mockAttractions) ? mockAttractions : [];
const safeTours = Array.isArray(mockTours) ? mockTours : [];
const safeDestinations = Array.isArray(mockDestinations) ? mockDestinations : [];

interface SelectedItem {
  id: string;
  name: string;
  price: number;
  type: "activity" | "attraction" | "tour";
  category?: string;
}

interface BudgetPlan {
  monthlyIncome: number;
  monthlyExpenses: number;
  savingsPercentage: number;
  monthsToGoal: number;
  monthlySavings: number;
}

function TripBudgetCalculator() {
  const [currentBudget, setCurrentBudget] = useState<string>("");
  const [selectedDestination, setSelectedDestination] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [budgetDifference, setBudgetDifference] = useState<number>(0);
  const [showSavingsPlan, setShowSavingsPlan] = useState<boolean>(false);
  const [budgetPlan, setBudgetPlan] = useState<BudgetPlan>({
    monthlyIncome: 0,
    monthlyExpenses: 0,
    savingsPercentage: 5,
    monthsToGoal: 0,
    monthlySavings: 0,
  });
  const [customPercentage, setCustomPercentage] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("budget");

  // Calculate totals whenever selected items change
  useEffect(() => {
    const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
    setTotalCost(total);

    const budget = parseFloat(currentBudget) || 0;
    setBudgetDifference(budget - total);
  }, [selectedItems, currentBudget]);

  // Calculate savings plan
  useEffect(() => {
    if (budgetPlan.monthlyIncome && budgetPlan.monthlyExpenses) {
      const leftover = budgetPlan.monthlyIncome - budgetPlan.monthlyExpenses;
      const monthlySavings = (leftover * budgetPlan.savingsPercentage) / 100;
      const amountNeeded = Math.abs(budgetDifference);
      const months =
        amountNeeded > 0 ? Math.ceil(amountNeeded / monthlySavings) : 0;

      setBudgetPlan((prev) => ({
        ...prev,
        monthlySavings,
        monthsToGoal: months,
      }));
    }
  }, [
    budgetPlan.monthlyIncome,
    budgetPlan.monthlyExpenses,
    budgetPlan.savingsPercentage,
    budgetDifference,
  ]);

  const handleItemSelection = (
    item: any,
    type: "activity" | "attraction" | "tour"
  ) => {
    const isSelected = selectedItems.some(
      (selected) => selected.id === item.id
    );

    if (isSelected) {
      setSelectedItems((prev) =>
        prev.filter((selected) => selected.id !== item.id)
      );
    } else {
      let price = 0;

      // Extract price based on item type
      if (type === "activity" || type === "attraction") {
        price = item.pricing?.adult || 0;
      } else if (type === "tour") {
        // Parse price string (e.g., "$459" -> 459)
        const priceStr = item.price?.replace(/[^0-9.]/g, "") || "0";
        price = parseFloat(priceStr);
      }

      const selectedItem: SelectedItem = {
        id: item.id,
        name: item.name || item.title,
        price,
        type,
        category: item.category || item.tourCategoryId,
      };

      setSelectedItems((prev) => [...prev, selectedItem]);
    }
  };

  const getItemsToRemove = () => {
    if (budgetDifference >= 0) return [];

    // Sort items by price (highest first) to suggest removing expensive items first
    const sortedItems = [...selectedItems].sort((a, b) => b.price - a.price);
    const itemsToRemove: SelectedItem[] = [];
    let runningTotal = totalCost;
    const budget = parseFloat(currentBudget) || 0;

    for (const item of sortedItems) {
      if (runningTotal > budget) {
        itemsToRemove.push(item);
        runningTotal -= item.price;
      }
    }

    return itemsToRemove;
  };

  const removeSelectedItems = (itemsToRemove: SelectedItem[]) => {
    const idsToRemove = itemsToRemove.map((item) => item.id);
    setSelectedItems((prev) =>
      prev.filter((item) => !idsToRemove.includes(item.id))
    );
  };

  const getFilteredItems = (items: any[]) => {
    // Ensure items is always an array, even if undefined or null
    const safeItems = Array.isArray(items) ? items : [];

    if (!selectedDestination) return safeItems;

    return safeItems.filter((item) => {
      const location = item.location || item.destinations?.[0];
      if (!location) return false;

      const city = location.city || location.name;
      const country = location.country;

      const destination = safeDestinations.find(
        (dest) => dest.id === selectedDestination
      );
      if (!destination) return false;

      return city === destination.name || country === destination.country;
    });
  };

  const handlePercentageChange = (percentage: number | string) => {
    if (typeof percentage === "string") {
      const custom = parseFloat(percentage) || 0;
      setBudgetPlan((prev) => ({ ...prev, savingsPercentage: custom }));
      setCustomPercentage(percentage);
    } else {
      setBudgetPlan((prev) => ({ ...prev, savingsPercentage: percentage }));
      setCustomPercentage("");
    }
  };

  return (
    <div className="space-y-6 mx-auto max-w-7xl">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="budget">Budget Planning</TabsTrigger>
          <TabsTrigger value="savings">Savings Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="budget" className="space-y-6">
          {/* Current Budget Input */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Your Current Budget
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Label htmlFor="budget">
                  <strong>Budget Amount ($)</strong>
                </Label>
                <Input
                  id="budget"
                  type="number"
                  placeholder="Enter your vacation budget"
                  value={currentBudget}
                  onChange={(e) => setCurrentBudget(e.target.value)}
                  className="max-w-xs"
                />
              </div>
            </CardContent>
          </Card>

          {/* Destination Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Select Destination</CardTitle>
            </CardHeader>
            <CardContent>
              <Select
                value={selectedDestination}
                onValueChange={setSelectedDestination}
              >
                <SelectTrigger className="max-w-md">
                  <SelectValue placeholder="Choose your destination" />
                </SelectTrigger>
                <SelectContent>
                  {safeDestinations.map((destination) => (
                    <SelectItem key={destination.id} value={destination.id}>
                      {destination.name}, {destination.country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Activities, Attractions, and Tours Selection */}
          {selectedDestination && (
            <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
              {/* Activities */}
              <Card>
                <CardHeader>
                  <CardTitle>Activities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                  {getFilteredItems(safeActivities).map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center space-x-2 p-3 border rounded-lg"
                    >
                      <Checkbox
                        checked={selectedItems.some(
                          (item) => item.id === activity.id
                        )}
                        className="data-[state=checked]:bg-accent dark:data-[state=checked]:bg-accent data-[state=checked]:border-accent data-[state=checked]:text-accent-foreground"
                        onCheckedChange={() =>
                          handleItemSelection(activity, "activity")
                        }
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div className="w-9/10 font-medium">
                            {activity.name}
                          </div>
                          <div className="text-gray-600 text-sm">
                            ${activity.pricing?.adult || 0}
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {activity.category}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Attractions */}
              <Card>
                <CardHeader>
                  <CardTitle>Attractions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                  {getFilteredItems(safeAttractions).map((attraction) => (
                    <div
                      key={attraction.id}
                      className="flex items-center space-x-2 p-3 border rounded-lg"
                    >
                      <Checkbox
                        checked={selectedItems.some(
                          (item) => item.id === attraction.id
                        )}
                        className="data-[state=checked]:bg-accent dark:data-[state=checked]:bg-accent data-[state=checked]:border-accent data-[state=checked]:text-accent-foreground"
                        onCheckedChange={() =>
                          handleItemSelection(attraction, "attraction")
                        }
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div className="w-9/10 font-medium">
                            {attraction.name}
                          </div>
                          <div className="text-gray-600 text-sm">
                            ${attraction.pricing?.adult || 0}
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {attraction.category}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Tours */}
              <Card>
                <CardHeader>
                  <CardTitle>Tours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                  {getFilteredItems(safeTours).map((tour) => (
                    <div
                      key={tour.id}
                      className="flex items-center space-x-2 p-3 border rounded-lg"
                    >
                      <Checkbox
                        checked={selectedItems.some(
                          (item) => item.id === tour.id
                        )}
                        className="data-[state=checked]:bg-accent dark:data-[state=checked]:bg-accent data-[state=checked]:border-accent data-[state=checked]:text-accent-foreground"
                        onCheckedChange={() =>
                          handleItemSelection(tour, "tour")
                        }
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div className="w-9/10 font-medium">{tour.title}</div>
                          <div className="text-gray-600 text-sm">
                            ${tour.pricing.adult}
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {tour.category || tour.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Budget Summary */}
          {selectedItems.length > 0 && currentBudget && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Budget Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                    <div className="font-bold text-2xl text-blue-600">
                      ${currentBudget}
                    </div>
                    <div className="text-gray-600 text-sm">Your Budget</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                    <div className="font-bold text-2xl text-green-600">
                      ${totalCost.toFixed(2)}
                    </div>
                    <div className="text-gray-600 text-sm">Total Cost</div>
                  </div>
                  <div
                    className={`text-center p-4 rounded-lg ${budgetDifference >= 0 ? "bg-green-50 dark:bg-green-900/20" : "bg-red-50 dark:bg-red-900/20"}`}
                  >
                    <div
                      className={`text-2xl font-bold ${budgetDifference >= 0 ? "text-green-600" : "text-red-600"}`}
                    >
                      ${Math.abs(budgetDifference).toFixed(2)}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {budgetDifference >= 0 ? "Remaining" : "Over Budget"}
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-semibold">Selected Items:</h4>
                  {selectedItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-2 rounded"
                    >
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <Badge variant="outline" className="ml-2 text-xs">
                          {item.type}
                        </Badge>
                      </div>
                      <span className="font-semibold">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {budgetDifference < 0 && (
                  <Alert>
                    <XCircle className="w-4 h-4" />
                    <AlertDescription>
                      <div className="space-y-3">
                        <p>
                          You're over budget by $
                          {Math.abs(budgetDifference).toFixed(2)}!
                        </p>

                        <div className="space-y-2">
                          <p className="font-semibold">
                            Consider removing these items to stay within budget:
                          </p>
                          {getItemsToRemove().map((item) => (
                            <div
                              key={item.id}
                              className="flex justify-between items-center bg-red-50 dark:bg-red-900/20 p-2 rounded"
                            >
                              <span>{item.name}</span>
                              <span>${item.price.toFixed(2)}</span>
                            </div>
                          ))}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              removeSelectedItems(getItemsToRemove())
                            }
                            className="w-full"
                          >
                            Remove Suggested Items
                          </Button>
                        </div>

                        <Separator />

                        <div className="space-y-2">
                          <p className="font-semibold">
                            Or save up ${Math.abs(budgetDifference).toFixed(2)}{" "}
                            to afford everything!
                          </p>
                          <Button
                            onClick={() => setActiveTab("savings")}
                            className="w-full"
                          >
                            Create Savings Plan
                          </Button>
                        </div>
                      </div>
                    </AlertDescription>
                  </Alert>
                )}

                {budgetDifference >= 0 && (
                  <Alert>
                    <CheckCircle className="w-4 h-4" />
                    <AlertDescription>
                      Great! You're within budget with $
                      {budgetDifference.toFixed(2)} to spare.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="savings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Savings Plan Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {budgetDifference < 0 && (
                <Alert>
                  <TrendingUp className="w-4 h-4" />
                  <AlertDescription>
                    You need to save ${Math.abs(budgetDifference).toFixed(2)} to
                    afford your dream trip!
                  </AlertDescription>
                </Alert>
              )}

              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <div>
                  <Label htmlFor="income">
                    <strong>Monthly Income ($)</strong>
                  </Label>
                  <Input
                    id="income"
                    type="number"
                    placeholder="Enter your monthly income"
                    value={budgetPlan.monthlyIncome || ""}
                    className="mt-1"
                    onChange={(e) =>
                      setBudgetPlan((prev) => ({
                        ...prev,
                        monthlyIncome: parseFloat(e.target.value) || 0,
                      }))
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="expenses">
                    <strong>Monthly Expenses ($)</strong>
                  </Label>
                  <Input
                    id="expenses"
                    type="number"
                    placeholder="Enter your monthly expenses"
                    value={budgetPlan.monthlyExpenses || ""}
                    className="mt-1"
                    onChange={(e) =>
                      setBudgetPlan((prev) => ({
                        ...prev,
                        monthlyExpenses: parseFloat(e.target.value) || 0,
                      }))
                    }
                  />
                </div>
              </div>

              {budgetPlan.monthlyIncome > 0 &&
                budgetPlan.monthlyExpenses > 0 && (
                  <div>
                    <div className="mb-4 font-semibold text-lg">
                      Monthly Leftover: $
                      {(
                        budgetPlan.monthlyIncome - budgetPlan.monthlyExpenses
                      ).toFixed(2)}
                    </div>

                    <Label>Choose Savings Percentage:</Label>
                    <div className="gap-2 grid grid-cols-2 md:grid-cols-4 mt-2">
                      {[1, 5, 8, 10].map((percentage) => (
                        <Button
                          key={percentage}
                          variant={
                            budgetPlan.savingsPercentage === percentage &&
                            !customPercentage
                              ? "default"
                              : "outline"
                          }
                          onClick={() => handlePercentageChange(percentage)}
                          className="text-sm"
                        >
                          {percentage}%
                        </Button>
                      ))}
                    </div>

                    <div className="mt-4">
                      <Label htmlFor="custom">Custom Percentage:</Label>
                      <Input
                        id="custom"
                        type="number"
                        placeholder="Enter custom %"
                        value={customPercentage}
                        onChange={(e) => handlePercentageChange(e.target.value)}
                        className="mt-1 max-w-xs"
                      />
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 dark:from-blue-900/20 to-green-50 dark:to-green-900/20 mt-6 p-4 rounded-lg">
                      <h3 className="mb-3 font-semibold text-lg">
                        Your Savings Plan:
                      </h3>
                      <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
                        <div className="text-center">
                          <div className="font-bold text-2xl text-blue-600">
                            ${budgetPlan.monthlySavings.toFixed(2)}
                          </div>
                          <div className="text-gray-600 text-sm">
                            Monthly Savings
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-2xl text-green-600">
                            {budgetPlan.monthsToGoal}
                          </div>
                          <div className="text-gray-600 text-sm">
                            Months to Goal
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-2xl text-purple-600">
                            {budgetPlan.savingsPercentage}%
                          </div>
                          <div className="text-gray-600 text-sm">
                            Savings Rate
                          </div>
                        </div>
                      </div>

                      {budgetPlan.monthsToGoal > 0 && (
                        <div className="mt-4 text-center">
                          <p className="text-gray-700 dark:text-gray-300">
                            By saving ${budgetPlan.monthlySavings.toFixed(2)}{" "}
                            per month, you'll reach your goal in{" "}
                            <span className="font-bold">
                              {budgetPlan.monthsToGoal} months
                            </span>
                            !
                          </p>
                          <p className="mt-1 text-gray-600 text-sm">
                            Target date:{" "}
                            {new Date(
                              Date.now() +
                                budgetPlan.monthsToGoal *
                                  30.44 *
                                  24 *
                                  60 *
                                  60 *
                                  1000
                            ).toLocaleDateString()}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export { TripBudgetCalculator };
