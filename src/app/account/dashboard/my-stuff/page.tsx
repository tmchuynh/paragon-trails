export default function MyStuffPage() {
  return (
    <div>
      <h1>My Stuff</h1>
      <p>Manage your saved tours, activities, and attractions here.</p>
      <ul>
        <li>
          <a href="/account/dashboard/my-stuff/@tours">My Saved Tours</a>
        </li>
        <li>
          <a href="/account/dashboard/my-stuff/@activities">
            My Saved Activities
          </a>
        </li>
        <li>
          <a href="/account/dashboard/my-stuff/@attractions">
            My Saved Attractions
          </a>
        </li>
      </ul>
    </div>
  );
}
