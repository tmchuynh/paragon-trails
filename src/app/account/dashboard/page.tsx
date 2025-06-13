"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div className="md:flex md:justify-between md:items-center">
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
  );
}
