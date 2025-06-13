import React from "react";

export default function Layout({
  children,
  activities,
  attractions,
  tours,
}: {
  children: React.ReactNode;
  activities: React.ReactNode;
  attractions: React.ReactNode;
  tours: React.ReactNode;
}) {
  return (
    <>
      {children}
      {activities}
      {attractions}
      {tours}
    </>
  );
}
