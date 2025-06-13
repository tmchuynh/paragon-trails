import React from "react";

export default function Layout({
  children,
  pastTrips,
  newTrips,
}: {
  children: React.ReactNode;
  pastTrips: React.ReactNode;
  newTrips: React.ReactNode;
}) {
  return (
    <>
      {children}
      {pastTrips}
      {newTrips}
    </>
  );
}
