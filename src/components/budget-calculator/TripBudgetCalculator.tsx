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
import { mockFlights } from "@/data/flights";
import { mockHotels } from "@/data/hotels";
import { mockTours } from "@/data/tours";
import { mockVehicles } from "@/data/vehicles";

interface SelectedItem {
  id: string;
  name: string;
  price: number;
  type: "activity" | "attraction" | "tour" | "flight" | "hotel" | "vehicle";
  category?: string;
  subtype?: string; // For flight class, hotel room type, vehicle rental period
}

interface BudgetPlan {
  monthlyIncome: number;
  monthlyExpenses: number;
  savingsPercentage: number;
  monthsToGoal: number;
  monthlySavings: number;
  customTarget?: number;
}

const TripBudgetCalculator: React.FC = () => {
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
    customTarget: undefined,
  });
  const [customPercentage, setCustomPercentage] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("budget");
  const [customSavingsTarget, setCustomSavingsTarget] = useState<string>("");

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

      // Use custom target if set, otherwise use budget difference
      const targetAmount =
        budgetPlan.customTarget || Math.abs(budgetDifference);
      const months =
        targetAmount > 0 && monthlySavings > 0
          ? Math.ceil(targetAmount / monthlySavings)
          : 0;

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
    budgetPlan.customTarget,
    budgetDifference,
  ]);

  const handleItemSelection = (
    item: any,
    type: "activity" | "attraction" | "tour" | "flight" | "hotel" | "vehicle",
    subtype?: string
  ) => {
    const itemKey = subtype ? `${item.id}-${subtype}` : item.id;
    const isSelected = selectedItems.some(
      (selected) => selected.id === itemKey
    );

    if (isSelected) {
      setSelectedItems((prev) =>
        prev.filter((selected) => selected.id !== itemKey)
      );
    } else {
      let price = 0;
      let displayName = item.name || item.title;

      // Extract price based on item type
      if (type === "activity" || type === "attraction") {
        price = item.pricing?.adult || 0;
      } else if (type === "tour") {
        // Parse price string (e.g., "$459" -> 459)
        const priceStr = item.price?.replace(/[^0-9.]/g, "") || "0";
        price = parseFloat(priceStr);
      } else if (type === "flight") {
        // Default to economy class, but allow selection of different classes
        const flightClass = subtype || "economy";
        price = item.pricing?.[flightClass] || 0;
        displayName = `${displayName} (${flightClass.charAt(0).toUpperCase() + flightClass.slice(1)})`;
      } else if (type === "hotel") {
        // Use base price per night, allow room type selection
        const roomType = subtype || "standard";
        price = item.pricing?.basePrice || item.rooms?.types?.[0]?.price || 0;
        displayName = `${displayName} (${roomType} room/night)`;
      } else if (type === "vehicle") {
        // Default to daily rate, allow period selection
        const period = subtype || "daily";
        price = item.pricing?.[period] || 0;
        displayName = `${displayName} (${period} rental)`;
      }

      const selectedItem: SelectedItem = {
        id: itemKey,
        name: displayName,
        price,
        type,
        category: item.category || item.tourCategoryId || item.type,
        subtype,
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

  const getFilteredItems = (items: any[], type: string) => {
    if (!selectedDestination) return items;

    const destination = mockDestinations.find(
      (dest) => dest.id === selectedDestination
    );
    if (!destination) return items;

    return items.filter((item) => {
      if (type === "flight") {
        // Show flights that go to or from the selected destination
        return (
          item.destination?.city === destination.name ||
          item.destination?.country === destination.country ||
          item.origin?.city === destination.name ||
          item.origin?.country === destination.country
        );
      } else if (type === "hotel" || type === "vehicle") {
        // Show hotels and vehicles in the selected destination
        const location = item.location;
        if (!location) return false;
        return (
          location.city === destination.name ||
          location.country === destination.country ||
          item.availability?.locations?.includes(destination.name)
        );
      } else {
        // Original logic for activities, attractions, tours
        const location = item.location || item.destinations?.[0];
        if (!location) return false;

        const city = location.city || location.name;
        const country = location.country;

        return city === destination.name || country === destination.country;
      }
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

  const handleCustomTargetChange = (target: string) => {
    setCustomSavingsTarget(target);
    const customAmount = parseFloat(target) || undefined;
    setBudgetPlan((prev) => ({ ...prev, customTarget: customAmount }));
  };

  const getSavingsTarget = () => {
    return budgetPlan.customTarget || Math.abs(budgetDifference);
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
                <Label htmlFor="budget">Budget Amount ($)</Label>
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
                  {mockDestinations.map((destination) => (
                    <SelectItem key={destination.id} value={destination.id}>
                      {destination.name}, {destination.country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Activities, Attractions, Tours, Flights, Hotels, and Vehicles Selection */}
          {selectedDestination && (
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Flights */}
              <Card>
                <CardHeader>
                  <CardTitle>Flights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                  {getFilteredItems(mockFlights, "flight").map((flight) => (
                    <div key={flight.id} className="p-3 border rounded-lg">
                      <div className="mb-2 font-medium">
                        {flight.airline} {flight.flightNumber}
                      </div>
                      <div className="mb-2 text-gray-600 text-sm">
                        {flight.origin.city} → {flight.destination.city}
                      </div>
                      <div className="space-y-2">
                        {Object.entries(flight.pricing)
                          .filter(([key]) => key !== "currency")
                          .map(([flightClass, price]) => (
                            <div
                              key={flightClass}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                checked={selectedItems.some(
                                  (item) =>
                                    item.id === `${flight.id}-${flightClass}`
                                )}
                                onCheckedChange={() =>
                                  handleItemSelection(
                                    flight,
                                    "flight",
                                    flightClass
                                  )
                                }
                              />
                              <div className="flex flex-1 justify-between">
                                <span className="text-sm capitalize">
                                  {flightClass}
                                </span>
                                <span className="font-semibold text-sm">
                                  ${price}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Hotels */}
              <Card>
                <CardHeader>
                  <CardTitle>Hotels</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                  {getFilteredItems(mockHotels, "hotel").map((hotel) => (
                    <div key={hotel.id} className="p-3 border rounded-lg">
                      <div className="mb-1 font-medium">{hotel.name}</div>
                      <div className="mb-2 text-gray-600 text-sm">
                        {hotel.starRating}★ {hotel.type}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={selectedItems.some(
                            (item) => item.id === hotel.id
                          )}
                          onCheckedChange={() =>
                            handleItemSelection(hotel, "hotel")
                          }
                        />
                        <div className="flex flex-1 justify-between">
                          <span className="text-sm">Per night</span>
                          <span className="font-semibold text-sm">
                            $
                            {hotel.pricing?.basePrice ||
                              hotel.rooms?.types?.[0]?.price ||
                              0}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Vehicles */}
              <Card>
                <CardHeader>
                  <CardTitle>Vehicles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                  {getFilteredItems(mockVehicles, "vehicle").map((vehicle) => (
                    <div key={vehicle.id} className="p-3 border rounded-lg">
                      <div className="mb-1 font-medium">{vehicle.name}</div>
                      <div className="mb-2 text-gray-600 text-sm">
                        {vehicle.brand} {vehicle.model}
                      </div>
                      <div className="space-y-2">
                        {Object.entries(vehicle.pricing)
                          .filter(([key]) => key !== "currency")
                          .map(([period, price]) => (
                            <div
                              key={period}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                checked={selectedItems.some(
                                  (item) =>
                                    item.id === `${vehicle.id}-${period}`
                                )}
                                onCheckedChange={() =>
                                  handleItemSelection(
                                    vehicle,
                                    "vehicle",
                                    period
                                  )
                                }
                              />
                              <div className="flex flex-1 justify-between">
                                <span className="text-sm capitalize">
                                  {period}
                                </span>
                                <span className="font-semibold text-sm">
                                  ${price}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Activities */}
              <Card>
                <CardHeader>
                  <CardTitle>Activities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                  {getFilteredItems(mockActivities, "activity").map(
                    (activity) => (
                      <div
                        key={activity.id}
                        className="flex items-center space-x-2 p-3 border rounded-lg"
                      >
                        <Checkbox
                          checked={selectedItems.some(
                            (item) => item.id === activity.id
                          )}
                          onCheckedChange={() =>
                            handleItemSelection(activity, "activity")
                          }
                        />
                        <div className="flex-1">
                          <div className="font-medium">{activity.name}</div>
                          <div className="text-gray-600 text-sm">
                            ${activity.pricing?.adult || 0}
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {activity.category}
                          </Badge>
                        </div>
                      </div>
                    )
                  )}
                </CardContent>
              </Card>

              {/* Attractions */}
              <Card>
                <CardHeader>
                  <CardTitle>Attractions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                  {getFilteredItems(mockAttractions, "attraction").map(
                    (attraction) => (
                      <div
                        key={attraction.id}
                        className="flex items-center space-x-2 p-3 border rounded-lg"
                      >
                        <Checkbox
                          checked={selectedItems.some(
                            (item) => item.id === attraction.id
                          )}
                          onCheckedChange={() =>
                            handleItemSelection(attraction, "attraction")
                          }
                        />
                        <div className="flex-1">
                          <div className="font-medium">{attraction.name}</div>
                          <div className="text-gray-600 text-sm">
                            ${attraction.pricing?.adult || 0}
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {attraction.category}
                          </Badge>
                        </div>
                      </div>
                    )
                  )}
                </CardContent>
              </Card>

              {/* Tours */}
              <Card>
                <CardHeader>
                  <CardTitle>Tours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                  {getFilteredItems(mockTours, "tour").map((tour) => (
                    <div
                      key={tour.id}
                      className="flex items-center space-x-2 p-3 border rounded-lg"
                    >
                      <Checkbox
                        checked={selectedItems.some(
                          (item) => item.id === tour.id
                        )}
                        onCheckedChange={() =>
                          handleItemSelection(tour, "tour")
                        }
                      />
                      <div className="flex-1">
                        <div className="font-medium">{tour.title}</div>
                        <div className="text-gray-600 text-sm">
                          {tour.price}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {tour.tourCategoryId}
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
                  <Label htmlFor="income">Monthly Income ($)</Label>
                  <Input
                    id="income"
                    type="number"
                    placeholder="Enter your monthly income"
                    value={budgetPlan.monthlyIncome || ""}
                    onChange={(e) =>
                      setBudgetPlan((prev) => ({
                        ...prev,
                        monthlyIncome: parseFloat(e.target.value) || 0,
                      }))
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="expenses">Monthly Expenses ($)</Label>
                  <Input
                    id="expenses"
                    type="number"
                    placeholder="Enter your monthly expenses"
                    value={budgetPlan.monthlyExpenses || ""}
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
};

export default TripBudgetCalculator;