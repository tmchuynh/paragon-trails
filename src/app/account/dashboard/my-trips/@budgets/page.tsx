"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/context/AuthContext";
import { getBudgetsByUser, getTripsByUser } from "@/data/users";
import { differenceInMonths, format, isBefore } from "date-fns";
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  DollarSign,
  Edit,
  MoreHorizontal,
  PiggyBank,
  Plus,
  Target,
  Trash2,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

export default function BudgetsSection() {
  const { user } = useAuth();
  const [filter, setFilter] = useState<
    "all" | "active" | "achieved" | "overdue"
  >("all");

  if (!user) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>My Budgets</CardTitle>
          <CardDescription>Please log in to view your budgets</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const allBudgets = getBudgetsByUser(user.id);
  const allTrips = getTripsByUser(user.id);
  const now = new Date();

  // Filter budgets based on selected filter
  const filteredBudgets = allBudgets.filter((budget) => {
    const progress = (budget.currentAmount / budget.targetAmount) * 100;
    const isAchieved = progress >= 100;
    const isOverdue = isBefore(budget.targetDate, now) && !isAchieved;
    const isActive = budget.isActive && !isAchieved && !isOverdue;

    switch (filter) {
      case "active":
        return isActive;
      case "achieved":
        return isAchieved;
      case "overdue":
        return isOverdue;
      default:
        return true;
    }
  });

  const getBudgetStatus = (budget: any) => {
    const progress = (budget.currentAmount / budget.targetAmount) * 100;
    const isAchieved = progress >= 100;
    const isOverdue = isBefore(budget.targetDate, now) && !isAchieved;

    if (isAchieved) {
      return {
        status: "Achieved",
        variant: "success" as const,
        icon: CheckCircle2,
      };
    } else if (isOverdue) {
      return {
        status: "Overdue",
        variant: "destructive" as const,
        icon: AlertCircle,
      };
    } else if (budget.isActive) {
      return { status: "Active", variant: "default" as const, icon: Target };
    } else {
      return {
        status: "Paused",
        variant: "secondary" as const,
        icon: PiggyBank,
      };
    }
  };

  const getLinkedTrip = (budget: any) => {
    if (!budget.tripId) return null;
    return allTrips.find((trip) => trip.id === budget.tripId);
  };

  const totalTargetAmount = filteredBudgets.reduce(
    (sum, budget) => sum + budget.targetAmount,
    0
  );
  const totalCurrentAmount = filteredBudgets.reduce(
    (sum, budget) => sum + budget.currentAmount,
    0
  );
  const totalProgress =
    totalTargetAmount > 0 ? (totalCurrentAmount / totalTargetAmount) * 100 : 0;

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Travel Budgets</CardTitle>
            <CardDescription>
              {filteredBudgets.length} budgets • {Math.round(totalProgress)}%
              overall progress
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              onClick={() => (window.location.href = "/budget-calculator")}
            >
              <Plus className="mr-1 w-4 h-4" />
              New Budget
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Filter Tabs */}
        <div className="flex gap-2 border-b">
          {[
            { key: "all", label: "All" },
            { key: "active", label: "Active" },
            { key: "achieved", label: "Achieved" },
            { key: "overdue", label: "Overdue" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key as any)}
              className={`px-3 py-2 text-sm font-medium border-b-2 transition-colors ${
                filter === key
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="gap-4 grid grid-cols-3 bg-muted/50 p-4 rounded-lg">
          <div className="text-center">
            <div className="font-bold text-2xl text-green-600">
              ${totalCurrentAmount.toLocaleString()}
            </div>
            <p className="text-muted-foreground text-xs">Total Saved</p>
          </div>
          <div className="text-center">
            <div className="font-bold text-2xl">
              ${totalTargetAmount.toLocaleString()}
            </div>
            <p className="text-muted-foreground text-xs">Target Amount</p>
          </div>
          <div className="text-center">
            <div className="font-bold text-2xl text-blue-600">
              ${(totalTargetAmount - totalCurrentAmount).toLocaleString()}
            </div>
            <p className="text-muted-foreground text-xs">Remaining</p>
          </div>
        </div>

        {/* Budgets List */}
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {filteredBudgets.length === 0 ? (
            <div className="py-8 text-center">
              <PiggyBank className="mx-auto mb-4 w-12 h-12 text-muted-foreground" />
              <h3 className="mb-2 font-medium text-lg text-muted-foreground">
                {filter === "all"
                  ? "No budgets created yet"
                  : `No ${filter} budgets`}
              </h3>
              <p className="mb-4 text-muted-foreground text-sm">
                Start saving for your dream vacation!
              </p>
              <Button
                size="sm"
                onClick={() => (window.location.href = "/budget-calculator")}
              >
                Create Your First Budget
              </Button>
            </div>
          ) : (
            filteredBudgets.map((budget) => {
              const progress =
                (budget.currentAmount / budget.targetAmount) * 100;
              const statusInfo = getBudgetStatus(budget);
              const linkedTrip = getLinkedTrip(budget);
              const monthsRemaining = differenceInMonths(
                budget.targetDate,
                now
              );
              const StatusIcon = statusInfo.icon;

              return (
                <div
                  key={budget.id}
                  className="hover:bg-muted/50 p-4 border rounded-lg transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{budget.name}</h4>
                        <Badge variant={statusInfo.variant} className="h-5">
                          <StatusIcon className="mr-1 w-3 h-3" />
                          {statusInfo.status}
                        </Badge>
                      </div>
                      {linkedTrip && (
                        <p className="text-blue-600 text-sm dark:text-blue-400">
                          Linked to: {linkedTrip.destinationName}
                        </p>
                      )}
                      <Badge variant="outline" className="mt-1 text-xs">
                        {budget.category}
                      </Badge>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 w-8 h-8"
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <DollarSign className="mr-2 w-4 h-4" />
                          Add Money
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 w-4 h-4" />
                          Edit Budget
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 w-4 h-4" />
                          Delete Budget
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        ${budget.currentAmount.toLocaleString()} saved
                      </span>
                      <span className="font-medium">
                        ${budget.targetAmount.toLocaleString()} goal
                      </span>
                    </div>
                    <Progress value={Math.min(progress, 100)} className="h-2" />
                    <div className="text-center text-muted-foreground text-xs">
                      {Math.round(progress)}% complete
                    </div>
                  </div>

                  {/* Budget Details */}
                  <div className="gap-4 grid grid-cols-2 text-muted-foreground text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>
                        Target: {format(budget.targetDate, "MMM d, yyyy")}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>
                        ${budget.monthlyContribution?.toLocaleString() || 0}
                        /month
                      </span>
                    </div>
                  </div>

                  {monthsRemaining > 0 && progress < 100 && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 mt-2 p-2 rounded text-xs">
                      <p className="text-blue-700 dark:text-blue-300">
                        {monthsRemaining} months remaining • Need $
                        {Math.round(
                          (budget.targetAmount - budget.currentAmount) /
                            monthsRemaining
                        ).toLocaleString()}
                        /month to reach goal
                      </p>
                    </div>
                  )}

                  {budget.notes && (
                    <div className="mt-2 text-muted-foreground text-xs italic">
                      "{budget.notes}"
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {filteredBudgets.length > 0 && (
          <div className="pt-3 border-t">
            <div className="gap-2 grid grid-cols-2">
              <Button variant="outline" size="sm">
                Savings Report
              </Button>
              <Button variant="outline" size="sm">
                Export Data
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
