import React from "react";

export default function Layout({
  children,
  pastTrips,
  myTrips,
  budgets,
}: {
  children: React.ReactNode;
  pastTrips: React.ReactNode;
  myTrips: React.ReactNode;
  budgets: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      {children}

      {/* Main Content Grid */}
      <div className="gap-6 grid lg:grid-cols-2">
        {/* Left Column - My Trips */}
        <div className="space-y-6">{myTrips}</div>

        {/* Right Column - Past Trips */}
        <div className="space-y-6">{pastTrips}</div>
      </div>

      {/* Full Width - Budgets */}
      <div className="w-full">{budgets}</div>
    </div>
  );
}
