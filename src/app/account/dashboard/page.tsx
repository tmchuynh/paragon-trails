"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <div className="mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        <Button
          variant="ghost"
          onClick={() => router.push("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Logout
        </Button>
        <div className="flex-1 min-w-0">
          <h1>Back End Developer</h1>
        </div>
        <div className="flex mt-4 md:mt-0 md:ml-4">
          <Button onClick={() => router.push("/account/dashboard/my-stuff")}>
            My Stuff
          </Button>
          <Button onClick={() => router.push("/account/dashboard/my-trips")}>
            My Trips
          </Button>
          <Button
            onClick={() => router.push("/account/dashboard/budget-planner")}
            className="ml-2"
          >
            Budget Planner
          </Button>
        </div>
      </div>
    </div>
  );
}
