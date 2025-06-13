import React from "react";

export default function Layout({
  children,
  activities,
  attractions,
  tours,
  budgets,
}: {
  children: React.ReactNode;
  activities: React.ReactNode;
  attractions: React.ReactNode;
  tours: React.ReactNode;
  budgets: React.ReactNode;
}) {
  return (
    <>
      {children}
      {activities}
      {attractions}
      {tours}
      {budgets}
    </>
  );
}
