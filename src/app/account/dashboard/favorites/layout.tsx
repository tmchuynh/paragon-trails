"use client";

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
      {/* Parallel routes are now integrated into the main page tabs */}
      {/* These slots are available but the main page handles the display */}
    </>
  );
}
