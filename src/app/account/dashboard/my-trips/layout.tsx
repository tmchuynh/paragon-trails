export default function Layout({
  children,
  pastTrips,
  newTrips,
  tours,
}: {
  children: React.ReactNode;
  pastTrips: React.ReactNode;
  newTrips: React.ReactNode;
  tours: React.ReactNode;
}) {
  return (
    <>
      {children}
      {pastTrips}
      {newTrips}
      {tours}
    </>
  );
}
