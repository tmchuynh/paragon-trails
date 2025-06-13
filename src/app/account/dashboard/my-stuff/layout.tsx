export default function Layout({
  children,
  activities,
  attractions,
  tours,
}: {
  children: React.ReactNode;
  attractions: React.ReactNode;
  activities: React.ReactNode;
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
